'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { TrendingUp } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Case = {
  tag: string;
  title: string;
  duration: string;
  outcome: string;
  desc: string;
};

export function Cases() {
  const t = useTranslations('Cases');
  const items = t.raw('items') as Case[];

  return (
    <section id="cases" className="relative border-t hairline bg-ink-900/30 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 grid grid-cols-12 gap-6 lg:mb-24">
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
          <p className="col-span-12 max-w-md self-end text-base text-ink-300 lg:col-span-3 lg:text-right">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {items.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="group relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-3xl border hairline bg-ink-950 p-8 edge-glow transition-all duration-500 hover:border-gold-500/30 lg:col-span-4 lg:p-10"
            >
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold-500/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                  {c.tag}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border hairline bg-ink-900">
                  <TrendingUp className="h-4 w-4 text-gold-400" strokeWidth={1.6} aria-hidden />
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold leading-tight text-ink-50 sm:text-3xl">
                {c.title}
              </h3>

              <p className="text-sm leading-relaxed text-ink-300">{c.desc}</p>

              <dl className="mt-auto grid grid-cols-2 gap-4 border-t hairline pt-6">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-ink-500">
                    / срок
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-ink-50">
                    {c.duration}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-ink-500">
                    / итог
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-gold-400">
                    {c.outcome}
                  </dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
