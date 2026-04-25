import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { serviceSlugs, services } from '@/lib/services';

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

  return [...home, ...servicePages];
}
