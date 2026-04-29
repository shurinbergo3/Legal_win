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
    <section className="relative isolate overflow-hidden border-y hairline bg-ink-950">
      {/* Noise texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />

      {/* Gold top rule */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent"
      />

      {/* ── Header strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease }}
        className="relative border-b hairline"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col gap-5 py-10 lg:flex-row lg:items-end lg:justify-between lg:py-12">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
              <span className="inline-block h-px w-8 bg-gold-500/70" />
              2019 — 2026
            </div>
            <h2 className="font-display text-2xl font-semibold text-ink-50 sm:text-3xl lg:text-4xl">
              {t('title')}
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-ink-400 lg:text-right">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Stats grid ── */}
      <div className="relative mx-auto max-w-[1400px]">
        {/* gap-px + parent bg = hairline dividers between cells */}
        <div className="grid grid-cols-2 gap-px bg-[color-mix(in_oklab,var(--color-ink-50)_7%,transparent)] lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="group relative flex flex-col bg-ink-950 px-7 py-12 transition-colors duration-500 hover:bg-[color-mix(in_oklab,var(--color-ink-900)_50%,var(--color-ink-950))] lg:px-10 lg:py-16"
            >
              {/* Ambient gold halo on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gold-500/[0.06] opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100"
              />

              {/* Index — top left */}
              <span className="mb-6 font-mono text-[10px] text-ink-600 lg:mb-8">
                / 0{i + 1}
              </span>

              {/* Number — typographically dominant */}
              <div
                className="flex items-baseline gap-1 font-display font-semibold leading-[0.9] tracking-tight text-ink-50 transition-colors duration-500 group-hover:text-white"
                style={{ fontSize: 'clamp(3.75rem, 9vw, 8rem)' }}
              >
                <CountUp to={s.value} />
                {s.suffix && (
                  <span className="text-gold-400" style={{ fontSize: '0.55em' }}>
                    {s.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <div className="mt-6 text-[10px] uppercase tracking-[0.28em] text-ink-400 lg:mt-8">
                {s.label}
              </div>

              {/* Note — anchored to bottom */}
              <div className="mt-auto border-t hairline pt-5 text-[11px] leading-relaxed text-ink-500">
                {s.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
