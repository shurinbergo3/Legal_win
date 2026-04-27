import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { BlogArticle } from '@/components/BlogArticle';
import { JsonLd } from '@/components/JsonLd';
import {
  getPost,
  getRelatedPosts,
  listPostSlugs,
  getAvailableLocalesForSlug
} from '@/lib/blog';
import { routing } from '@/i18n/routing';
import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  ORG_LEGAL_NAME,
  SITE_URL,
  articleLd,
  breadcrumbLd,
  type SeoLocale
} from '@/lib/seo';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    listPostSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);
  if (!post) return {};

  const safeLocale: SeoLocale = (['ru', 'pl', 'en'] as const).includes(
    locale as SeoLocale
  )
    ? (locale as SeoLocale)
    : 'ru';

  const url = `/${locale}/blog/${slug}`;
  const ogLocaleMap: Record<string, string> = {
    ru: 'ru_RU',
    pl: 'pl_PL',
    en: 'en_US'
  };

  const availableLocales = getAvailableLocalesForSlug(slug);
  const languages: Record<string, string> = {};
  for (const l of availableLocales) {
    languages[l] = `/${l}/blog/${slug}`;
  }
  if (availableLocales.includes('ru')) {
    languages['x-default'] = `/ru/blog/${slug}`;
  }

  return {
    title: `${post.title} | ${ORG_LEGAL_NAME}`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url, languages },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: ORG_LEGAL_NAME,
      type: 'article',
      locale: ogLocaleMap[safeLocale],
      publishedTime: post.publishDate,
      authors: post.author ? [post.author] : undefined,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: post.title,
          type: 'image/jpeg'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
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

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPost(locale, slug);
  if (!post) notFound();

  const safeLocale: SeoLocale = (['ru', 'pl', 'en'] as const).includes(
    locale as SeoLocale
  )
    ? (locale as SeoLocale)
    : 'ru';

  const t = await getTranslations({ locale, namespace: 'Blog' });
  const related = getRelatedPosts(locale, slug);

  const url = `${SITE_URL}/${locale}/blog/${slug}`;

  const breadcrumb = breadcrumbLd([
    { name: ORG_LEGAL_NAME, url: `${SITE_URL}/${locale}` },
    { name: t('title'), url: `${SITE_URL}/${locale}/blog` },
    { name: post.title, url }
  ]);

  const article = articleLd({
    title: post.title,
    description: post.description,
    url,
    locale: safeLocale,
    publishDate: post.publishDate,
    author: post.author,
    keywords: post.keywords
  });

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={article} />
      <Header />
      <main className="relative z-10">
        <BlogArticle
          post={post}
          related={related}
          labels={{
            back: t('back'),
            publishedOn: t('publishedOn'),
            readingTime: t('readingTime'),
            related: t('related')
          }}
        />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
