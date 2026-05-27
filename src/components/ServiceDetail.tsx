'use client';

import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Fingerprint,
  Gavel,
  Home,
  IdCard,
  Landmark,
  Plus,
  Scale,
  Shield
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { services } from '@/lib/services';
import type { ServiceContent } from '@/lib/services/types';
import { serviceBlur, blur } from '@/lib/image-blur';
import { cn } from '@/lib/cn';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const iconMap = {
  fingerprint: Fingerprint,
  shield: Shield,
  scale: Scale,
  home: Home,
  'id-card': IdCard,
  gavel: Gavel,
  landmark: Landmark
};

export function ServiceDetail({
  content,
  locale
}: {
  content: ServiceContent;
  locale: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  const Icon = iconMap[content.icon];
  const tServices = useTranslations('Services');
  const tNav = useTranslations('Nav');
  const tLabels = useTranslations('ServiceDetail');

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-40 h-[2px] origin-left bg-gold-400"
      />

      <DetailHero
        content={content}
        Icon={Icon}
        servicesEyebrow={tServices('eyebrow')}
        backLabel={tNav('services')}
        breadcrumbLabel={tLabels('breadcrumb')}
      />

      {content.facts && <FactsBar facts={content.facts} />}

      {content.grounds && <Grounds data={content.grounds} />}

      {content.timeline && <Timeline data={content.timeline} />}

      {content.documents && (
        <Documents data={content.documents} eyebrow={tLabels('documentsEyebrow')} />
      )}

      {content.pricing && (
        <Pricing data={content.pricing} popularLabel={tLabels('popular')} />
      )}

      {content.legalBase && <LegalBase data={content.legalBase} />}

      <Faq
        data={content.faq}
        eyebrow={tLabels('faqEyebrow')}
        title={tLabels('faqTitle')}
      />

      <Related
        slugs={content.related}
        locale={locale}
        allServicesLabel={tServices('title')}
        relatedLabel={tLabels('relatedTitle')}
      />

      <DetailCta
        content={content}
        submitLabel={tLabels('ctaSubmit')}
      />
    </div>
  );
}

/* ---------- Hero ---------- */

// Each photo is paired with the service whose subject it best evokes.
// File names reflect what the photo *depicts*, not which service uses it.
const servicePhotos: Record<string, string> = {
  'karta-pobytu':                  '/services/karta-pobytu.webp',                  // Warsaw skyline + Vistula - settling in
  'karta-stalego-pobytu':          '/services/karta-stalego-pobytu.webp',          // Krakow basilica - permanence
  'obywatelstwo':                  '/services/obywatelstwo.webp',                  // Wawel Castle - Polish citizenship
  'karta-polaka':                  '/services/warszawa-swiatynia.webp',            // Temple of Divine Providence - Polish heritage / national identity
  'ochrona-miedzynarodowa':        '/services/ochrona-miedzynarodowa.webp',        // Sunset over towers - refuge / hope
  'apelacje':                      '/services/zaswiadczenia-zus-us.webp',          // Warsaw business towers at dusk - institutional gravity
  'kod-95':                        '/services/zaproszenia.webp',                   // Top-down roundabout - drivers / road code
  'pesel':                         '/services/pesel.webp',                         // Old town at sunset - civic foundation
  'meldunek':                      '/services/meldunek.webp',                      // Market square with stalls - daily registration
  'akty-stanu-cywilnego':          '/services/akty-stanu-cywilnego.webp',          // Old town + skyline - heritage records
  'apostille':                     '/services/apostille.webp',                     // Poznan market square - formal European document
  'wymiana-prawa-jazdy':           '/services/wyszukiwanie-mieszkania.webp',       // Bridge with road - driving licence
  'zaswiadczenia-zus-us':          '/services/tlumaczenia-przysiegle.webp',        // Warsaw business district daylight - workplace certs
  'zaswiadczenie-o-niekaralnosci': '/services/zaswiadczenie-o-niekaralnosci.webp', // Modern street with people - clean civic record
  'tlumaczenia-przysiegle':        '/services/wymiana-prawa-jazdy.webp',           // Gdansk gothic church - scholarly / formal translation
  'rejestracja-sp-z-oo':           '/services/warszawa-spire.webp',                // Warsaw Spire towers - corporate registration
  'gotowe-firmy':                  '/services/warszawa-spire.webp',                // Warsaw Spire towers - established companies
  'jdg':                           '/services/warszawa-spire.webp',                // Warsaw business district - self-employed
  'przedstawicielstwa':            '/services/warszawa-pkin-noc.webp',             // Palace of Culture by night - international branch presence
  'podatki-ksiegowosc':            '/services/warszawa-spire.webp',                // Warsaw Spire - corporate finance / accounting
  'likwidacja-sprzedaz':           '/services/apelacje.webp',                      // Old town rooftops - closing chapter
  'mswia-zezwolenie':              '/services/wyszukiwanie-mieszkania.webp',       // Bridge over Vistula - gateway / permit
  'due-diligence-nieruchomosci':   '/services/meldunek.webp',                      // Market square - registers and titles
  'notariusz-asysta':              '/services/pesel.webp',                         // Old town at sunset - formal/legal moment
  'najem-komercyjny':              '/services/warszawa-tramwaj.webp',              // Modern district with trams - commercial real estate
  'zaproszenia':                   '/services/warszawa-defilad-noc.webp',          // Defilad Square at night - "welcome to Warsaw"
  'odbior-z-lotniska':             '/services/gdansk-aerial.webp',                 // Polish city aerial - arrival
  'wyszukiwanie-mieszkania':       '/services/apelacje.webp',                      // Old town rooftops - housing
  'tlumacz-na-wizyty':             '/services/tlumacz-na-wizyty.webp',             // Old + modern skyline - bridging
  'pomoc-w-zatrudnieniu':          '/services/warszawa-spire.webp',                // Warsaw Spire towers - corporate jobs
  'zapis-dzieci-do-szkoly':        '/services/pomoc-w-zatrudnieniu.webp',          // Gdansk canal - calm, family
};

function DetailHero({
  content,
  Icon,
  servicesEyebrow,
  backLabel,
  breadcrumbLabel
}: {
  content: ServiceContent;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;
  servicesEyebrow: string;
  backLabel: string;
  breadcrumbLabel: string;
}) {
  const photo = servicePhotos[content.slug] ?? '/services/karta-pobytu.webp';

  return (
    <section className="hero-gradient relative isolate overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* Photo background - solid ink-950 underneath so the area never goes
          blank: the dark gradient overlay above already covers ~85% of the
          photo, so when the image fades in there is no perceptible swap. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-ink-950">
        <Image
          src={photo}
          alt=""
          fill
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={serviceBlur[photo] ?? blur.city2}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* Dark overlay over photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,9,26,0.88) 0%, rgba(5,9,26,0.72) 40%, rgba(5,9,26,0.92) 100%)'
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)'
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[560px] w-[560px] rounded-full bg-gold-500/20 blur-[130px] blob-1"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          aria-label={breadcrumbLabel}
          className="mb-10 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-400"
        >
          <Link href="/" className="transition-colors hover:text-gold-400">
            LegalWin
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <Link href="/#services" className="transition-colors hover:text-gold-400">
            {servicesEyebrow}
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <span className="text-gold-400">{content.title}</span>
        </motion.nav>

        <div className="grid grid-cols-12 gap-x-0 gap-y-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="col-span-12 lg:col-span-8"
          >
            {content.badge && (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border hairline-gold bg-gold-400/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-gold-400">
                <Icon className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
                {content.badge}
              </div>
            )}

            <h1 className="font-display text-balance text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-ink-50">
              {content.title}
            </h1>
            <p className="mt-5 text-lg text-ink-300 sm:text-xl">{content.subtitle}</p>
            <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-ink-200 lg:text-lg">
              {content.lead}
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
            className="col-span-12 flex flex-col gap-3 lg:col-span-4 lg:mt-20"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-between gap-2.5 rounded-full bg-gold-400 px-6 py-4 text-base font-medium text-ink-950 ring-gold transition-all duration-300 hover:bg-gold-300"
            >
              {content.ctaTitle.length < 40 ? content.ctaTitle : backLabel}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.6}
                aria-hidden
              />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border hairline px-6 py-4 text-sm text-ink-200 transition-colors hover:border-gold-500/50 hover:text-gold-400"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.6} aria-hidden />
              {servicesEyebrow}
            </Link>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- Facts Bar ---------- */

function FactsBar({ facts }: { facts: ServiceContent['facts'] }) {
  return (
    <section className="relative border-y hairline bg-ink-900/40">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10 lg:py-12">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-[color-mix(in_oklab,var(--color-ink-50)_10%,transparent)] md:grid-cols-4">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className="flex flex-col gap-2 bg-ink-950 px-6 py-8"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-ink-400">
                {f.label}
              </span>
              <div className="font-display text-3xl font-semibold leading-tight text-ink-50 lg:text-4xl">
                {f.value}
              </div>
              {f.note && <span className="text-[11px] text-ink-500">{f.note}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Grounds ---------- */

function Grounds({ data }: { data: NonNullable<ServiceContent['grounds']> }) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHead title={data.title} subtitle={data.subtitle} />

        <div className="mt-14 grid grid-cols-12 gap-5">
          {data.items.map((g, i) => (
            <motion.article
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="group col-span-12 flex flex-col gap-4 rounded-3xl border hairline bg-ink-950 p-7 transition-all duration-500 hover:border-gold-500/30 hover:bg-ink-900 sm:col-span-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                  {String(i + 1).padStart(2, '0')} / {String(data.items.length).padStart(2, '0')}
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold-400/10 text-gold-400 transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold leading-tight text-ink-50 sm:text-2xl">
                {g.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-300">{g.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Timeline ---------- */

function Timeline({ data }: { data: NonNullable<ServiceContent['timeline']> }) {
  return (
    <section className="relative border-t hairline bg-ink-900/30 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHead title={data.title} subtitle={data.subtitle} />

        <ol className="relative mt-14 flex flex-col">
          <span
            aria-hidden
            className="pointer-events-none absolute left-[22px] top-4 bottom-4 w-px bg-gradient-to-b from-gold-500/60 via-gold-500/20 to-transparent"
          />
          {data.steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="relative flex items-start gap-6 py-6 lg:gap-10"
            >
              <div className="relative flex-shrink-0">
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border hairline-gold bg-ink-950 font-mono text-xs text-gold-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 pt-2.5 lg:flex-row lg:items-baseline lg:gap-8">
                <h3 className="font-display text-xl font-semibold text-ink-50 lg:w-72 sm:text-2xl">
                  {s.title}
                </h3>
                {s.duration && (
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border hairline px-2.5 py-1 font-mono text-[11px] text-ink-300 lg:w-28">
                    <Clock className="h-3 w-3" strokeWidth={1.6} aria-hidden />
                    {s.duration}
                  </span>
                )}
                <p className="max-w-xl text-sm leading-relaxed text-ink-300 lg:flex-1">
                  {s.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Documents ---------- */

function Documents({
  data,
  eyebrow
}: {
  data: NonNullable<ServiceContent['documents']>;
  eyebrow: string;
}) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-0 gap-y-10 lg:gap-16">
          <div className="col-span-12 flex flex-col gap-6 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
              <span className="inline-block h-px w-10 bg-gold-500/60" />
              {eyebrow}
            </div>
            <h2 className="font-display section-size font-semibold text-ink-50">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="max-w-md text-base text-ink-300">{data.subtitle}</p>
            )}
          </div>

          <ul className="col-span-12 flex flex-col gap-2 lg:col-span-7">
            {data.items.map((d, i) => (
              <motion.li
                key={d}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, ease, delay: i * 0.04 }}
                className="flex items-start gap-4 rounded-2xl border hairline bg-ink-900/40 px-5 py-4 transition-colors hover:border-gold-500/30 hover:bg-ink-900"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-gold-400">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                </span>
                <span className="flex-1 text-sm leading-relaxed text-ink-200">{d}</span>
                <span className="font-mono text-[10px] text-ink-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */

function Pricing({
  data,
  popularLabel
}: {
  data: NonNullable<ServiceContent['pricing']>;
  popularLabel: string;
}) {
  return (
    <section className="relative border-t hairline bg-ink-900/30 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHead title={data.title} subtitle={data.subtitle} />

        <div className="mt-14 grid grid-cols-12 gap-5">
          {data.items.map((p, i) => {
            const highlight = i === 1;
            const colSpan =
              data.items.length === 3
                ? 'lg:col-span-4'
                : data.items.length === 4
                ? 'lg:col-span-3'
                : 'lg:col-span-6';
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.06 }}
                className={cn(
                  'relative col-span-12 flex flex-col gap-5 overflow-hidden rounded-3xl border p-8 transition-all duration-500 sm:col-span-6 lg:p-10',
                  colSpan,
                  highlight
                    ? 'hairline-gold bg-ink-950 ring-gold'
                    : 'hairline bg-ink-950 hover:border-gold-500/30'
                )}
              >
                {highlight && (
                  <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-gold-400 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-950">
                    {popularLabel}
                  </span>
                )}
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-400">
                  {p.label}
                </span>
                <div className="font-display text-3xl font-semibold leading-tight text-ink-50 lg:text-4xl">
                  {p.value}
                </div>
                {p.note && (
                  <span className="mt-auto text-sm text-ink-300">{p.note}</span>
                )}
              </motion.div>
            );
          })}
        </div>

        {data.note && (
          <p className="mt-8 max-w-2xl text-xs text-ink-500">* {data.note}</p>
        )}
      </div>
    </section>
  );
}

/* ---------- Legal base ---------- */

function LegalBase({ data }: { data: NonNullable<ServiceContent['legalBase']> }) {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-0 gap-y-8 lg:gap-16">
          <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
              <Scale className="h-4 w-4" strokeWidth={1.6} aria-hidden />
              {data.title}
            </div>
          </div>

          <ul className="col-span-12 flex flex-col divide-y divide-[color-mix(in_oklab,var(--color-ink-50)_10%,transparent)] lg:col-span-8">
            {data.items.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-5 py-4 text-sm text-ink-200 lg:py-5"
              >
                <span className="font-mono pt-0.5 text-[10px] text-ink-500">
                  §{String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[13px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Faq({
  data,
  eyebrow,
  title
}: {
  data: ServiceContent['faq'];
  eyebrow: string;
  title: string;
}) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="relative border-t hairline bg-ink-900/30 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-0 gap-y-10 lg:gap-16">
          <div className="col-span-12 flex flex-col gap-4 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
              <span className="inline-block h-px w-10 bg-gold-500/60" />
              {eyebrow}
            </div>
            <h2 className="font-display section-size font-semibold text-ink-50">
              {title}
            </h2>
          </div>

          <ul className="col-span-12 flex flex-col divide-y divide-[color-mix(in_oklab,var(--color-ink-50)_10%,transparent)] border-t border-b hairline lg:col-span-8">
            {data.map((it, i) => {
              const isOpen = open.has(i);
              return (
                <li key={it.q}>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-gold-400 lg:py-7"
                  >
                    <div className="flex flex-1 items-start gap-5">
                      <span className="font-mono pt-1 text-[11px] text-ink-500">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-xl font-semibold leading-tight text-ink-50 transition-colors group-hover:text-gold-400 sm:text-2xl">
                        {it.q}
                      </h3>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease }}
                      className={cn(
                        'mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-colors',
                        isOpen
                          ? 'border-gold-500/60 bg-gold-400/10 text-gold-400'
                          : 'hairline text-ink-300'
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pl-10 pr-12 text-base leading-relaxed text-ink-300">
                          {it.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Related ---------- */

function Related({
  slugs,
  locale,
  allServicesLabel,
  relatedLabel
}: {
  slugs: string[];
  locale: string;
  allServicesLabel: string;
  relatedLabel: string;
}) {
  type Loc = 'ru' | 'pl' | 'en' | 'tr' | 'uk';
  const safeLocale: Loc = (['ru', 'pl', 'en', 'tr', 'uk'] as const).includes(
    locale as Loc
  )
    ? (locale as Loc)
    : 'ru';

  // Show related services only when translated for the current locale — no ru
  // fallback here. Otherwise on partially-translated locales (e.g. uk during
  // Этап 1) the related strip would render mixed-language content.
  const entries = slugs
    .map((s) => services[s]?.[safeLocale])
    .filter(Boolean) as ServiceContent[];

  if (entries.length === 0) return null;

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-6">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-tight text-ink-50">
            {relatedLabel}
          </h2>
          <Link
            href="/#services"
            className="inline-flex items-center gap-1.5 text-sm text-gold-400 transition-colors hover:text-gold-300"
          >
            <span className="gold-underline">{allServicesLabel}</span>
            <ChevronRight className="h-4 w-4" strokeWidth={1.6} aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {entries.map((r, i) => {
            const Icon = iconMap[r.icon];
            return (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.06 }}
                className="col-span-12 sm:col-span-6 lg:col-span-4"
              >
                <Link
                  href={`/uslugi/${r.slug}`}
                  className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border hairline bg-ink-950 p-7 edge-glow transition-all duration-500 hover:border-gold-500/30 hover:bg-ink-900 lg:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/10 text-gold-400">
                      <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-ink-400 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400"
                      strokeWidth={1.4}
                      aria-hidden
                    />
                  </div>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-ink-50">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-300">{r.subtitle}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Detail CTA ---------- */

function DetailCta({
  content,
  submitLabel
}: {
  content: ServiceContent;
  submitLabel: string;
}) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t hairline py-28 lg:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 bg-gold-500/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold-400">
            / {submitLabel}
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.96] tracking-[-0.025em] text-ink-50">
            {content.ctaTitle}
          </h2>
          <p className="max-w-xl text-lg text-ink-300">{content.ctaSubtitle}</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-medium text-ink-950 ring-gold transition-all duration-300 hover:bg-gold-300"
            >
              {submitLabel}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.6}
                aria-hidden
              />
            </Link>
            <a
              href="tel:+48506550721"
              className="inline-flex items-center gap-2 rounded-full border hairline px-7 py-4 text-base text-ink-50 transition-colors hover:border-gold-500/50 hover:text-gold-400"
            >
              +48 506 55 07 21
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function SectionHead({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease }}
        className="font-display section-size col-span-12 text-balance font-semibold text-ink-50 lg:col-span-9"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className="col-span-12 max-w-md self-end text-base text-ink-300 lg:col-span-3 lg:text-right">
          {subtitle}
        </p>
      )}
    </div>
  );
}
