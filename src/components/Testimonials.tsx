'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Quote, Star } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Testimonial = { text: string; author: string; role: string };

export function Testimonials() {
  const t = useTranslations('Testimonials');
  const items = t.raw('items') as Testimonial[];

  return (
    <section
      id="testimonials"
      className="relative border-t hairline py-28 lg:py-36"
    >
      {/* Ambient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 bg-gold-500/5 blur-[130px]"
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
            className="font-display section-size col-span-12 text-balance font-semibold text-ink-50 lg:col-span-10"
          >
            {t('title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {items.map((it, i) => (
            <motion.figure
              key={it.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.06 }}
              className="group relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-3xl sm:col-span-6 lg:col-span-6"
            >
              <div className="glass relative flex h-full flex-col gap-6 p-8 transition-all duration-500 group-hover:border-gold-500/30 lg:p-10">
                <Quote
                  className="h-7 w-7 text-gold-400/60"
                  strokeWidth={1.4}
                  aria-hidden
                />

                <blockquote className="font-display text-xl leading-snug text-ink-100 sm:text-2xl">
                  "{it.text}"
                </blockquote>

                <figcaption className="mt-auto flex items-center justify-between gap-4 border-t hairline pt-6">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-display text-sm font-semibold text-ink-950">
                      {it.author
                        .split(' ')
                        .map((p) => p[0])
                        .slice(0, 2)
                        .join('')}
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium text-ink-50">
                        {it.author}
                      </span>
                      <span className="text-xs text-ink-400">{it.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-3.5 w-3.5 fill-gold-400 text-gold-400"
                        aria-hidden
                      />
                    ))}
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
