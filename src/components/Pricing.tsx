'use client';

import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Reveal } from './Reveal';

type PricingItem = {
  slug: string;
  name: string;
  value: string;
  note: string;
};

export function Pricing() {
  const t = useTranslations('Pricing');
  const items = t.raw('items') as PricingItem[];

  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden border-t hairline bg-ink-900/30 py-20 sm:py-24 lg:py-32"
    >
      {/* Ambient gold accent - left side, mirrors Process's centred glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-[480px] w-[640px] rounded-full bg-gold-500/[0.05] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-12 grid grid-cols-12 gap-6 lg:mb-20">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
            <span className="inline-block h-px w-10 bg-gold-500/60" />
            {t('eyebrow')}
          </div>
          <Reveal
            as="h2"
            margin="-100px"
            className="font-display section-size col-span-12 text-balance font-semibold text-ink-50 lg:col-span-9"
          >
            {t('title')}
          </Reveal>
          <p className="col-span-12 max-w-md self-end text-base text-ink-300 lg:col-span-3 lg:text-right">
            {t('subtitle')}
          </p>
        </div>

        {/* Free consultation highlight - sits above the table as the headline anchor */}
        <Reveal className="mb-8 flex flex-wrap items-center gap-3 rounded-full border hairline-gold bg-gradient-to-r from-gold-500/[0.08] via-transparent to-transparent px-5 py-3 lg:mb-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-300">
            / 00
          </span>
          <span className="text-sm text-ink-100 sm:text-base">
            {t('consultationCta')}
          </span>
          <Link
            href="/#contact"
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
          >
            <span className="gold-underline">{t('ctaDetails')}</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} aria-hidden />
          </Link>
        </Reveal>

        {/* Pricing list - editorial table with hairline rows.
            Each row links to the full service page where the detailed
            breakdown lives, so the home page stays a snapshot. */}
        <ul className="overflow-hidden rounded-3xl border hairline bg-ink-950">
          {items.map((it, i) => (
            <Reveal
              as="li"
              key={`${it.slug}-${it.name}`}
              margin="-40px"
              delay={(i % 6) * 50}
              className="border-t hairline first:border-t-0"
            >
              <Link
                href={`/uslugi/${it.slug}`}
                className="group relative grid grid-cols-12 items-center gap-4 px-6 py-6 transition-colors duration-300 hover:bg-ink-900/60 lg:px-10 lg:py-8"
              >
                {/* Hover gold accent */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-px left-0 right-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />

                {/* Index */}
                <span className="col-span-2 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-500 lg:col-span-1">
                  / {String(i + 1).padStart(2, '0')}
                </span>

                {/* Service name + note */}
                <div className="col-span-10 flex flex-col gap-1.5 lg:col-span-7">
                  <h3 className="font-display text-lg font-semibold leading-tight text-ink-50 transition-colors duration-300 group-hover:text-gold-400 sm:text-xl">
                    {it.name}
                  </h3>
                  <p className="max-w-xl text-sm leading-snug text-ink-400">
                    {it.note}
                  </p>
                </div>

                {/* Price */}
                <div className="col-span-10 col-start-3 flex items-baseline justify-between gap-3 lg:col-span-4 lg:col-start-auto lg:justify-end">
                  <span className="font-display text-2xl font-semibold tracking-tight text-gold-400 sm:text-3xl">
                    {it.value}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-ink-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400"
                    strokeWidth={1.4}
                    aria-hidden
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        {/* Footnote */}
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-400">
          {t('footnote')}
        </p>
      </div>
    </section>
  );
}
