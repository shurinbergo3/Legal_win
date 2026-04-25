import type { Metadata } from 'next';
import { Fraunces, Source_Serif_4, Inter, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK']
});

// Cyrillic fallback for display: Fraunces lacks Cyrillic glyphs, so the
// browser would fall back to Georgia. Source Serif 4 carries the same
// editorial-luxury feel and has full Cyrillic + matching italic.
const sourceSerif = Source_Serif_4({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-source-serif',
  display: 'swap',
  axes: ['opsz']
});

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-sans',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-mono',
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://legalwin.pl';

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `/${locale}`,
      siteName: 'LegalWin',
      type: 'website',
      locale
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}`]))
    },
    icons: { icon: '/favicon.svg' }
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
    <html lang={locale} className={`${fraunces.variable} ${sourceSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="grain min-h-dvh antialiased">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
