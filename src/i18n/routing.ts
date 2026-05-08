import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru', 'pl', 'en', 'tr'],
  defaultLocale: 'ru',
  localePrefix: 'always',
  localeDetection: true
});

export type Locale = (typeof routing.locales)[number];
