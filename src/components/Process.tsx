'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const steps = ['step1', 'step2', 'step3', 'step4'] as const;

export function Process() {
  const t = useTranslations('Process');

  return (
    <section id="process" className="relative border-t hairline bg-ink-900/30 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14 grid grid-cols-12 gap-6 lg:mb-20">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
            <span className="inline-block h-px w-10 bg-gold-500/60" />
            {t('eyebrow')}
          </div>
          <h2 className="font-display col-span-12 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-ink-50 sm:text-6xl lg:col-span-10 lg:text-7xl">
            {t('title')}
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border hairline bg-[color-mix(in_oklab,var(--color-ink-50)_10%,transparent)] md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative flex h-full flex-col gap-4 bg-ink-950 p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-light text-gold-400">
                  0{i + 1}
                </span>
                <span className="h-px w-10 bg-ink-700" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink-50">
                {t(`${s}Title` as 'step1Title')}
              </h3>
              <p className="text-sm leading-relaxed text-ink-300">
                {t(`${s}Desc` as 'step1Desc')}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
