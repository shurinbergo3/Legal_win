import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LegalPage } from '@/components/LegalPage';
import { getLegalDoc } from '@/lib/legal-content';
import { routing } from '@/i18n/routing';
import { OG_IMAGE_HEIGHT, OG_IMAGE_PATH, OG_IMAGE_WIDTH } from '@/lib/seo';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const doc = getLegalDoc('cookies', locale);
  return {
    title: `${doc.title} - LegalWin`,
    description: doc.intro.slice(0, 160),
    alternates: {
      canonical: `/${locale}/polityka-cookies`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}/polityka-cookies`])
      )
    },
    // A page-level openGraph block replaces the locale layout's one wholesale,
    // so the image has to be repeated here or the page ships without a preview.
    openGraph: {
      title: `${doc.title} - LegalWin`,
      description: doc.intro.slice(0, 160),
      url: `/${locale}/polityka-cookies`,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: doc.title,
          type: 'image/webp'
        }
      ]
    },
    robots: { index: true, follow: true }
  };
}

export default async function CookiesPolicyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const doc = getLegalDoc('cookies', locale);
  const t = await getTranslations({ locale, namespace: 'Legal' });

  return (
    <>
      <Header />
      <main className="relative z-10">
        <LegalPage
          eyebrow={doc.eyebrow}
          title={doc.title}
          intro={doc.intro}
          sections={doc.sections}
          updatedLabel={t('updated')}
          updatedAt={t('updatedAt')}
          backLabel={t('back')}
          sectionsLabel={t('sections')}
        />
      </main>
      <Footer />
    </>
  );
}
