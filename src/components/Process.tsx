'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Phone, FileSignature, Briefcase, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps: { key: 'step1' | 'step2' | 'step3' | 'step4'; Icon: LucideIcon }[] = [
  { key: 'step1', Icon: Phone },
  { key: 'step2', Icon: FileSignature },
  { key: 'step3', Icon: Briefcase },
  { key: 'step4', Icon: Award }
];

export function Process() {
  const t = useTranslations('Process');

  return (
    <section id="process" className="relative isolate overflow-hidden border-t hairline bg-ink-900/30 py-20 sm:py-24 lg:py-32">
      {/* Ambient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[800px] -translate-x-1/2 bg-gold-500/[0.05] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14 grid grid-cols-12 gap-6 lg:mb-20">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
            <span className="inline-block h-px w-10 bg-gold-500/60" />
            {t('eyebrow')}
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease }}
            className="font-display section-size col-span-12 text-balance font-semibold text-ink-50 lg:col-span-9"
          >
            {t('title')}
          </motion.h2>
          <p className="col-span-12 max-w-md self-end font-mono text-[11px] uppercase tracking-[0.28em] text-ink-400 lg:col-span-3 lg:text-right">
            / 4 steps · from call to outcome
          </p>
        </div>

        {/* Gold connector line (desktop) */}
        <div aria-hidden className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-[68px] hidden h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent lg:block" />

          <ol className="relative grid grid-cols-1 gap-px overflow-hidden rounded-3xl border hairline bg-[color-mix(in_oklab,var(--color-ink-50)_10%,transparent)] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ key, Icon }, i) => (
              <motion.li
                key={key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                className="group relative flex h-full flex-col gap-5 bg-ink-950 p-7 transition-colors duration-500 hover:bg-ink-900 lg:p-8"
              >
                {/* Hover gold halo */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-500/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex items-center justify-between">
                  <span className="font-display text-[clamp(3rem,5vw,4rem)] font-semibold leading-none text-gold-400 [font-variation-settings:'opsz'_72]">
                    0{i + 1}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline bg-ink-950 transition-colors duration-500 group-hover:border-gold-500/60">
                    <Icon className="h-4 w-4 text-gold-400" strokeWidth={1.5} aria-hidden />
                  </span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-gold-500/40 via-ink-700 to-transparent" />
                <h3 className="font-display text-xl font-semibold leading-tight text-ink-50 sm:text-2xl">
                  {t(`${key}Title` as 'step1Title')}
                </h3>
                <p className="text-sm leading-relaxed text-ink-300">
                  {t(`${key}Desc` as 'step1Desc')}
                </p>

                {/* Step index pill (bottom-left) */}
                <span className="mt-auto pt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-500">
                  / 0{i + 1} / 04
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
