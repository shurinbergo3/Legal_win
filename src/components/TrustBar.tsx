'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CountUp } from './CountUp';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function TrustBar() {
  const t = useTranslations('Stats');

  const stats = [
    {
      value: parseInt(t('stat1Value'), 10),
      suffix: t('stat1Suffix'),
      label: t('stat1Label'),
      note: t('stat1Note')
    },
    {
      value: parseInt(t('stat2Value'), 10),
      suffix: '',
      label: t('stat2Label'),
      note: t('stat2Note')
    },
    {
      value: parseInt(t('stat3Value'), 10),
      suffix: t('stat3Suffix'),
      label: t('stat3Label'),
      note: t('stat3Note')
    },
    {
      value: parseInt(t('stat4Value'), 10),
      suffix: '',
      label: t('stat4Label'),
      note: t('stat4Note')
    }
  ];

  return (
    <section className="relative isolate overflow-hidden border-y hairline bg-ink-900/40">
      {/* Ambient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-gold-500/[0.05] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-14 sm:py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-12 gap-x-0 gap-y-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="col-span-12 flex flex-col gap-4 lg:col-span-4"
          >
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
              <span className="inline-block h-px w-10 bg-gold-500/60" />
              2019 — 2026
            </div>
            <h2 className="font-display display-size font-semibold text-balance text-ink-50">
              {t('title')}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-ink-300">
              {t('subtitle')}
            </p>
          </motion.div>

          <div className="col-span-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border hairline bg-[color-mix(in_oklab,var(--color-ink-50)_10%,transparent)] lg:col-span-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="group relative flex flex-col gap-3 bg-ink-950 p-6 transition-colors duration-500 hover:bg-ink-900 sm:p-7"
              >
                {/* Hover gold halo */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-500/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-baseline gap-1 font-display text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-none text-ink-50">
                  <CountUp to={s.value} />
                  <span className="text-gold-400">{s.suffix}</span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-ink-300">
                  {s.label}
                </div>
                <div className="mt-auto pt-4 text-[11px] leading-relaxed text-ink-500">
                  {s.note}
                </div>
                <span className="pointer-events-none absolute right-4 top-4 font-mono text-[10px] text-ink-500">
                  / 0{i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
