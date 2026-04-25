import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { TrustBar } from '@/components/TrustBar';
import { Services } from '@/components/Services';
import { Cases } from '@/components/Cases';
import { Testimonials } from '@/components/Testimonials';
import { Process } from '@/components/Process';
import { Faq } from '@/components/Faq';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { JsonLd } from '@/components/JsonLd';
import { faqPageLd } from '@/lib/seo';

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
        <Cases />
        <Testimonials />
        <Process />
        <Faq />
        <Contact locale={locale} />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
