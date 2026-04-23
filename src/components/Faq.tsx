'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/cn';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type FaqItem = { q: string; a: string };

export function Faq() {
  const t = useTranslations('Faq');
  const items = t.raw('items') as FaqItem[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t hairline bg-ink-900/30 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease }}
            className="col-span-12 flex flex-col gap-4 lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
          >
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
              <span className="inline-block h-px w-10 bg-gold-500/60" />
              {t('eyebrow')}
            </div>
            <h2 className="font-display section-size font-semibold text-ink-50">
              {t('title')}
            </h2>
          </motion.div>

          <ul className="col-span-12 flex flex-col divide-y divide-[color-mix(in_oklab,var(--color-ink-50)_10%,transparent)] border-t border-b hairline lg:col-span-8">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <li key={it.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-gold-400 lg:py-8"
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
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pl-10 pr-12 text-base leading-relaxed text-ink-300 lg:pb-8">
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
