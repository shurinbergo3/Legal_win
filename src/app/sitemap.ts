import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { serviceSlugs, services } from '@/lib/services';
import { getAllPosts, getAvailableLocalesForSlug } from '@/lib/blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://legalwin.pl';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homeLanguages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}`])
  );
  homeLanguages['x-default'] = `${SITE_URL}/${routing.defaultLocale}`;

  const home: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: now,
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
          lastModified: now,
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
      lastModified: now,
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
    lastModified: now,
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
