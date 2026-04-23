import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { serviceSlugs, services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://legalwin.pl';
  const now = new Date();

  const home: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${siteUrl}/${l}`])
      )
    }
  }));

  const servicePages: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    serviceSlugs
      .filter((slug) => services[slug]?.[locale])
      .map((slug) => ({
        url: `${siteUrl}/${locale}/uslugi/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            routing.locales
              .filter((l) => services[slug]?.[l])
              .map((l) => [l, `${siteUrl}/${l}/uslugi/${slug}`])
          )
        }
      }))
  );

  return [...home, ...servicePages];
}
