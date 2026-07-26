import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { JsonLd } from '@/components/JsonLd';
import { CookieConsentLoader } from '@/components/CookieConsentLoader';
import { ScrollToTop } from '@/components/ScrollToTop';
import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  ORG_LEGAL_NAME,
  SITE_URL,
  languagesAlternate,
  organizationLd,
  websiteLd,
  type SeoLocale
} from '@/lib/seo';
import '../globals.css';

// One display face for every locale. The site used to ship Fraunces (no
// Cyrillic) plus Source Serif 4 as its Cyrillic stand-in, which meant a Polish
// visitor and a Russian visitor saw two different serifs for the same brand —
// and every page paid for both families. Playfair Display covers latin,
// latin-ext and cyrillic in one variable file per subset, with a true italic.
const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-display-family',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap'
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });

  const title = t('title');
  const description = t('description');
  const keywords = t('keywords')
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean);

  const ogLocaleMap: Record<string, string> = {
    ru: 'ru_RU',
    pl: 'pl_PL',
    en: 'en_US',
    tr: 'tr_TR',
    uk: 'uk_UA'
  };
  const ogAlt = ogLocaleMap[locale] ?? 'en_US';
  const otherLocales = Object.values(ogLocaleMap).filter((l) => l !== ogAlt);

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    applicationName: ORG_LEGAL_NAME,
    authors: [{ name: ORG_LEGAL_NAME, url: SITE_URL }],
    creator: ORG_LEGAL_NAME,
    publisher: ORG_LEGAL_NAME,
    category: 'Legal services',
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: ORG_LEGAL_NAME,
      type: 'website',
      locale: ogAlt,
      alternateLocale: otherLocales,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: title,
          type: 'image/webp'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE_PATH]
    },
    alternates: {
      canonical: `/${locale}`,
      languages: languagesAlternate((l) => `/${l}`)
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1
      }
    },
    verification: {
      google: 'BuKBlLiIYFKsNo9pMxdRbCCACEnVsB5f6PUOJ5VTgro',
      other: {
        'msvalidate.01': '4A779CC4B436CFC5EE17C01C4DF302C7'
      }
    },
    // Bump the `?v=` query whenever favicon.svg changes - browsers cache
    // favicons aggressively and won't refetch on a hard reload otherwise.
    icons: {
      icon: [
        { url: '/favicon.svg?v=4', type: 'image/svg+xml' },
        { url: '/favicon-32.png?v=4', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16.png?v=4', sizes: '16x16', type: 'image/png' }
      ],
      apple: [{ url: '/apple-touch-icon.png?v=4', sizes: '180x180', type: 'image/png' }]
    },
    manifest: '/site.webmanifest?v=4'
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <body className="grain min-h-dvh antialiased">
        <JsonLd data={organizationLd()} />
        <JsonLd data={websiteLd(locale as SeoLocale)} />
        <NextIntlClientProvider messages={messages}>
          {children}
          <ScrollToTop />
          <CookieConsentLoader />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
