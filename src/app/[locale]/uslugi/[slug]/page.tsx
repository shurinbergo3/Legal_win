import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { ServiceDetail } from '@/components/ServiceDetail';
import { getService, services, serviceSlugs } from '@/lib/services';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = getService(slug, locale);
  if (!content) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://legalwin.pl';
  return {
    title: `${content.title} — LegalWin`,
    description: content.lead.slice(0, 160),
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}/uslugi/${slug}`,
      languages: Object.fromEntries(
        routing.locales
          .filter((l) => services[slug]?.[l])
          .map((l) => [l, `/${l}/uslugi/${slug}`])
      )
    },
    openGraph: {
      title: `${content.title} — LegalWin`,
      description: content.lead.slice(0, 200),
      url: `/${locale}/uslugi/${slug}`,
      siteName: 'LegalWin',
      type: 'article',
      locale
    }
  };
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const content = getService(slug, locale);
  if (!content) notFound();

  return (
    <>
      <Header />
      <main className="relative z-10">
        <ServiceDetail content={content} locale={locale} />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
