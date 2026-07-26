import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatbotLoader } from '@/components/ChatbotLoader';
import { BlogIndex } from '@/components/BlogIndex';
import { JsonLd } from '@/components/JsonLd';
import { getAllPosts } from '@/lib/blog';
import { routing } from '@/i18n/routing';
import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  ORG_LEGAL_NAME,
  SITE_URL,
  blogLd,
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
  const safeLocale: SeoLocale = (
    ['ru', 'pl', 'en', 'tr', 'uk'] as const
  ).includes(locale as SeoLocale)
    ? (locale as SeoLocale)
    : 'ru';
  const url = `/${locale}/blog`;
  // t('title') already reads "Блог LegalWin" / "LegalWin Blog", so appending the
  // brand again would render "Блог LegalWin | LegalWin".
  const title = t('title');
  const description = t('intro');

  const ogLocaleMap: Record<string, string> = {
    ru: 'ru_RU',
    pl: 'pl_PL',
    en: 'en_US',
    tr: 'tr_TR',
    uk: 'uk_UA'
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
      locale: ogLocaleMap[safeLocale],
      // A page-level openGraph block replaces the locale layout's one wholesale,
      // so the image has to be repeated here or the page ships without a preview.
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

  const safeLocale: SeoLocale = (
    ['ru', 'pl', 'en', 'tr', 'uk'] as const
  ).includes(locale as SeoLocale)
    ? (locale as SeoLocale)
    : 'ru';

  const breadcrumb = breadcrumbLd([
    { name: ORG_LEGAL_NAME, url: `${SITE_URL}/${locale}` },
    { name: t('title'), url: `${SITE_URL}/${locale}/blog` }
  ]);

  const blog = blogLd({
    url: `${SITE_URL}/${locale}/blog`,
    name: t('title'),
    description: t('intro'),
    locale: safeLocale,
    posts: posts.slice(0, 20).map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      publishDate: p.publishDate
    }))
  });

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={blog} />
      <Header />
      <main className="relative z-10">
        <BlogIndex
          posts={posts}
          labels={{
            eyebrow: t('eyebrow'),
            title: t('title'),
            intro: t('intro'),
            readingTime: t('readingTime'),
            empty: t('empty'),
            searchPlaceholder: t('searchPlaceholder'),
            clearSearch: t('clearSearch'),
            allCategories: t('allCategories'),
            noResults: t('noResults'),
            counterOne: t('counterOne'),
            counterMany: t('counterMany')
          }}
        />
      </main>
      <Footer />
      <ChatbotLoader />
    </>
  );
}
