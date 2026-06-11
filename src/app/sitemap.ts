import type { MetadataRoute } from 'next';
import { INDEX_LOCALES, routing } from '@/i18n/routing';
import { serviceSlugs, services } from '@/lib/services';
import { getAllPosts, getAvailableLocalesForSlug } from '@/lib/blog';
import { getGitLastModified } from '@/lib/git-mtime';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://legalwin.pl';

// IMPORTANT: lastModified values here must reflect real content changes, not
// build time. scripts/notify-indexnow.mjs filters the sitemap by <lastmod>
// (default 48h window) and only pings IndexNow for URLs that actually changed.
// Using `new Date()` would mark every URL fresh on every deploy, defeating the
// filter and getting the domain throttled by Bing as spam.

// Resolution order for section lastmod:
//   1. Build-arg env (set by CI from full git history — see deploy.yml). The
//      production Docker build excludes .git, so this is the real source there.
//   2. Local git (works in `next dev` / local builds).
//   3. Hardcoded fallback constant.
function envDate(name: string): Date | null {
  const raw = process.env[name];
  if (!raw) return null;
  const d = new Date(raw);
  return Number.isNaN(d.getTime()) ? null : d;
}

const SERVICES_LAST_MODIFIED =
  envDate('SERVICES_LAST_MODIFIED') ??
  getGitLastModified(['src/lib/services', 'src/components/ServiceDetail.tsx']) ??
  new Date('2026-04-15');
const LEGAL_LAST_MODIFIED =
  envDate('LEGAL_LAST_MODIFIED') ??
  getGitLastModified(['src/lib/legal-content.ts', 'src/components/LegalPage.tsx']) ??
  new Date('2025-04-10');

export default function sitemap(): MetadataRoute.Sitemap {
  // Latest blog post date — drives lastmod for the homepage and /blog index,
  // because both surface the most recent posts.
  const latestPostDate = INDEX_LOCALES
    .flatMap((locale) => getAllPosts(locale).map((p) => p.publishDate))
    .reduce<string | null>((max, d) => (max === null || d > max ? d : max), null);
  const homepageLastModified = latestPostDate
    ? new Date(latestPostDate)
    : SERVICES_LAST_MODIFIED;

  const homeLanguages: Record<string, string> = Object.fromEntries(
    INDEX_LOCALES.map((l) => [l, `${SITE_URL}/${l}`])
  );
  homeLanguages['x-default'] = `${SITE_URL}/${routing.defaultLocale}`;

  const home: MetadataRoute.Sitemap = INDEX_LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: homepageLastModified,
    changeFrequency: 'weekly',
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: { languages: homeLanguages }
  }));

  const servicePages: MetadataRoute.Sitemap = INDEX_LOCALES.flatMap((locale) =>
    serviceSlugs
      .filter((slug) => services[slug]?.[locale])
      .map((slug) => {
        const languages: Record<string, string> = Object.fromEntries(
          INDEX_LOCALES
            .filter((l) => services[slug]?.[l])
            .map((l) => [l, `${SITE_URL}/${l}/uslugi/${slug}`])
        );
        if (services[slug]?.ru) {
          languages['x-default'] = `${SITE_URL}/${routing.defaultLocale}/uslugi/${slug}`;
        }
        return {
          url: `${SITE_URL}/${locale}/uslugi/${slug}`,
          lastModified: SERVICES_LAST_MODIFIED,
          changeFrequency: 'monthly' as const,
          priority: 0.8,
          alternates: { languages }
        };
      })
  );

  // Legal pages - privacy policy, cookie policy
  const legalSlugs = ['polityka-prywatnosci', 'polityka-cookies'] as const;
  const legalPages: MetadataRoute.Sitemap = INDEX_LOCALES.flatMap((locale) =>
    legalSlugs.map((slug) => ({
      url: `${SITE_URL}/${locale}/${slug}`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
      alternates: {
        languages: Object.fromEntries(
          INDEX_LOCALES.map((l) => [l, `${SITE_URL}/${l}/${slug}`])
        )
      }
    }))
  );

  // Blog index per locale
  const blogIndex: MetadataRoute.Sitemap = INDEX_LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}/blog`,
    lastModified: homepageLastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    alternates: {
      languages: Object.fromEntries(
        INDEX_LOCALES.map((l) => [l, `${SITE_URL}/${l}/blog`])
      )
    }
  }));

  // Blog posts per locale (only for locales where the post file exists)
  const blogPosts: MetadataRoute.Sitemap = INDEX_LOCALES.flatMap((locale) =>
    getAllPosts(locale).map((post) => {
      const availableLocales = getAvailableLocalesForSlug(post.slug);
      const languages: Record<string, string> = Object.fromEntries(
        availableLocales.map((l) => [l, `${SITE_URL}/${l}/blog/${post.slug}`])
      );
      if (availableLocales.includes('ru')) {
        languages['x-default'] = `${SITE_URL}/${routing.defaultLocale}/blog/${post.slug}`;
      }
      return {
        url: `${SITE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.publishDate),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: { languages }
      };
    })
  );

  return [...home, ...servicePages, ...legalPages, ...blogIndex, ...blogPosts];
}
