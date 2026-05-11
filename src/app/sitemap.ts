import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { serviceSlugs, services } from '@/lib/services';
import { getAllPosts, getAvailableLocalesForSlug } from '@/lib/blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://legalwin.pl';

// Bump when service content is meaningfully updated (e.g. quarterly review).
const SERVICES_LAST_MODIFIED = new Date('2026-04-15');
// Bump when polityka-prywatnosci / polityka-cookies text changes.
const LEGAL_LAST_MODIFIED = new Date('2025-04-10');

export default function sitemap(): MetadataRoute.Sitemap {
  // Latest blog post date — drives lastmod for the homepage and /blog index,
  // because both surface the most recent posts.
  const latestPostDate = routing.locales
    .flatMap((locale) => getAllPosts(locale).map((p) => p.publishDate))
    .reduce<string | null>((max, d) => (max === null || d > max ? d : max), null);
  const homepageLastModified = latestPostDate
    ? new Date(latestPostDate)
    : SERVICES_LAST_MODIFIED;

  const homeLanguages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}`])
  );
  homeLanguages['x-default'] = `${SITE_URL}/${routing.defaultLocale}`;

  const home: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: homepageLastModified,
    changeFrequency: 'weekly',
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: { languages: homeLanguages }
  }));

  const servicePages: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    serviceSlugs
      .filter((slug) => services[slug]?.[locale])
      .map((slug) => {
        const languages: Record<string, string> = Object.fromEntries(
          routing.locales
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
  const legalPages: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    legalSlugs.map((slug) => ({
      url: `${SITE_URL}/${locale}/${slug}`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE_URL}/${l}/${slug}`])
        )
      }
    }))
  );

  // Blog index per locale
  const blogIndex: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}/blog`,
    lastModified: homepageLastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}/blog`])
      )
    }
  }));

  // Blog posts per locale (only for locales where the post file exists)
  const blogPosts: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
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
