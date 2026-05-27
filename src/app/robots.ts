import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://legalwin.pl';
  return {
    // /uk/ is disallowed during Этап 0 of the Ukrainian rollout — uk routes
    // resolve via fallback to ru content, and we don't want crawlers indexing
    // those placeholders. Lift once real translations land and 'uk' is added
    // to INDEX_LOCALES in [src/i18n/routing.ts].
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/uk/'] }],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
