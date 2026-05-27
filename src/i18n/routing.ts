import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru', 'pl', 'en', 'tr', 'uk'],
  defaultLocale: 'ru',
  localePrefix: 'always',
  localeDetection: true
});

export type Locale = (typeof routing.locales)[number];

// Locales whose content is translated and ready to surface in sitemap/hreflang.
// 'uk' is excluded during Этап 0: routes resolve via fallback to ru content,
// but we do not advertise the URLs until real translations land.
export const INDEX_LOCALES: readonly Locale[] = ['ru', 'pl', 'en', 'tr'];
