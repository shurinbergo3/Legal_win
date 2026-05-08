'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, Check } from 'lucide-react';

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
    <section id="cases" className="relative isolate overflow-hidden border-t hairline bg-ink-900/30 py-20 sm:py-24 lg:py-32">
      {/* Ambient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-[-10%] h-[480px] w-[640px] rounded-full bg-gold-500/[0.05] blur-[140px]"
      />
      {/* Editorial giant "№" watermark - case-number glyph as a quiet editorial mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-8 left-2 select-none font-display text-[clamp(11rem,24vw,24rem)] font-semibold leading-none text-gold-500/[0.06] sm:left-6"
      >
        №
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-12 grid grid-cols-12 gap-6 lg:mb-20">
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
              className="group relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-3xl border hairline bg-ink-950 p-7 edge-glow transition-all duration-500 hover:border-gold-500/40 hover:-translate-y-1 sm:p-8 lg:col-span-4 lg:p-9"
            >
              {/* Hover gold glow */}
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top row: index + arrow */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-400">
                  / case 0{i + 1}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border hairline bg-ink-900 transition-all duration-500 group-hover:border-gold-500/60 group-hover:bg-ink-950">
                  <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400" strokeWidth={1.6} aria-hidden />
                </span>
              </div>

              {/* Tag */}
              <span className="inline-flex w-fit items-center gap-2 rounded-full border hairline bg-ink-900/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink-200">
                <span className="h-1 w-1 rounded-full bg-gold-400" />
                {c.tag}
              </span>

              {/* Title */}
              <h3 className="font-display text-2xl font-semibold leading-tight text-ink-50 sm:text-[26px]">
                {c.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-ink-300">{c.desc}</p>

              {/* Outcome highlight ribbon */}
              <div className="relative mt-auto flex flex-col gap-3 rounded-2xl border hairline-gold bg-gradient-to-br from-gold-500/[0.08] via-transparent to-transparent p-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gold-300">
                  <Check className="h-3 w-3" strokeWidth={2.2} aria-hidden />
                  Outcome
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-display text-xl font-semibold leading-tight text-ink-50">
                    {c.outcome}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-300 whitespace-nowrap">
                    {c.duration}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
