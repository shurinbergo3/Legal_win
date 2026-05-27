import dynamic from 'next/dynamic';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { TrustBar } from '@/components/TrustBar';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { Cases } from '@/components/Cases';
import { Testimonials } from '@/components/Testimonials';
import { Process } from '@/components/Process';
import { Faq } from '@/components/Faq';
import { BlogTeaser } from '@/components/BlogTeaser';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { faqPageLd } from '@/lib/seo';
import { ChatbotLoader } from '@/components/ChatbotLoader';

const Contact = dynamic(() => import('@/components/Contact').then(m => ({ default: m.Contact })));

type FaqItem = { q: string; a: string };

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tFaq = await getTranslations({ locale, namespace: 'Faq' });
  const faqItems = tFaq.raw('items') as FaqItem[];

  return (
    <>
      <JsonLd data={faqPageLd(faqItems)} />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <TrustBar />
        <Services />
        <Pricing />
        <Cases />
        <Testimonials locale={locale} />
        <Process />
        <Faq />
        <BlogTeaser locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer />
      <ChatbotLoader />
    </>
  );
}
