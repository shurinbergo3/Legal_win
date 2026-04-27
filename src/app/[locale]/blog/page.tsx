import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { BlogIndex } from '@/components/BlogIndex';
import { JsonLd } from '@/components/JsonLd';
import { getAllPosts } from '@/lib/blog';
import { routing } from '@/i18n/routing';
import {
  ORG_LEGAL_NAME,
  SITE_URL,
  breadcrumbLd,
  languagesAlternate,
  type SeoLocale
} from '@/lib/seo';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });
  const safeLocale: SeoLocale = (['ru', 'pl', 'en'] as const).includes(
    locale as SeoLocale
  )
    ? (locale as SeoLocale)
    : 'ru';
  const url = `/${locale}/blog`;
  const title = `${t('title')} | ${ORG_LEGAL_NAME}`;
  const description = t('intro');

  const ogLocaleMap: Record<string, string> = {
    ru: 'ru_RU',
    pl: 'pl_PL',
    en: 'en_US'
  };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languagesAlternate((l) => `/${l}/blog`)
    },
    openGraph: {
      title,
      description,
      url,
      siteName: ORG_LEGAL_NAME,
      type: 'website',
      locale: ogLocaleMap[safeLocale]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
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
    }
  };
}

export default async function BlogIndexPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Blog' });
  const posts = getAllPosts(locale);

  const breadcrumb = breadcrumbLd([
    { name: ORG_LEGAL_NAME, url: `${SITE_URL}/${locale}` },
    { name: t('title'), url: `${SITE_URL}/${locale}/blog` }
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Header />
      <main className="relative z-10">
        <BlogIndex
          posts={posts}
          labels={{
            eyebrow: t('eyebrow'),
            title: t('title'),
            intro: t('intro'),
            readingTime: t('readingTime'),
            empty: t('empty')
          }}
        />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
