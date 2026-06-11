import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LegalPage } from '@/components/LegalPage';
import { getLegalDoc } from '@/lib/legal-content';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const doc = getLegalDoc('privacy', locale);
  return {
    title: `${doc.title} - LegalWin`,
    description: doc.intro.slice(0, 160),
    alternates: {
      canonical: `/${locale}/polityka-prywatnosci`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}/polityka-prywatnosci`])
      )
    },
    // Without an own openGraph block the page inherits the homepage's og:url
    // and og:title from the locale layout.
    openGraph: {
      title: `${doc.title} - LegalWin`,
      description: doc.intro.slice(0, 160),
      url: `/${locale}/polityka-prywatnosci`
    },
    robots: { index: true, follow: true }
  };
}

export default async function PrivacyPolicyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const doc = getLegalDoc('privacy', locale);
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
