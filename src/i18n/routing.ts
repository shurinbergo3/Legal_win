import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru', 'pl', 'en', 'tr', 'uk'],
  defaultLocale: 'ru',
  localePrefix: 'always',
  localeDetection: true
});

export type Locale = (typeof routing.locales)[number];

// Locales whose content is translated and ready to surface in sitemap/hreflang.
// Sitemap filters per-page (services, blog posts) by actual locale presence —
// untranslated services/articles still won't be advertised even though their
// locale lives here.
export const INDEX_LOCALES: readonly Locale[] = ['ru', 'pl', 'en', 'tr', 'uk'];
