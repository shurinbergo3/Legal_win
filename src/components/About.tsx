'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import Image from 'next/image';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function About() {
  const t = useTranslations('About');
  const points = ['point1', 'point2', 'point3', 'point4'] as const;

  return (
    <section id="about" className="relative border-t hairline py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-0 gap-y-10 lg:gap-12">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/about/rondo.jpg"
                alt="Варшава, Польша"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-ink-950/20"
              />
              <div className="absolute bottom-5 left-5 flex flex-col gap-0.5 font-mono text-[10px] uppercase tracking-[0.3em]">
                <span className="text-gold-400/80">52.2297° N · 21.0122° E</span>
                <span className="text-ink-300/70">Warszawa · Polska</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="col-span-12 flex flex-col gap-8 lg:col-span-7 lg:justify-center"
          >
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
                <span className="inline-block h-px w-10 bg-gold-500/60" />
                {t('eyebrow')}
              </div>
              <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink-50 sm:text-5xl lg:text-6xl">
                {t('title')}
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-ink-200">{t('paragraph1')}</p>
            <p className="text-lg leading-relaxed text-ink-300">{t('paragraph2')}</p>

            <ul className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.06 }}
                  className="flex items-start gap-3 rounded-xl border hairline bg-ink-900/60 px-4 py-4"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                    <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-200">{t(p)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
