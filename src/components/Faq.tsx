'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

type FaqItem = { q: string; a: string };

export function Faq() {
  const t = useTranslations('Faq');
  const items = t.raw('items') as FaqItem[];
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="faq" className="relative isolate overflow-clip border-t hairline bg-ink-900/30 py-28 lg:py-36">
      {/* Editorial giant "?" watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-2 select-none font-display text-[clamp(12rem,26vw,26rem)] font-semibold leading-none text-gold-500/[0.06] sm:right-8"
      >
        ?
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-0 gap-y-10 lg:gap-16">
          <Reveal
            margin="-100px"
            className="col-span-12 flex flex-col gap-4 lg:sticky lg:top-28 lg:col-span-5 lg:self-start lg:pr-8"
          >
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
              <span className="inline-block h-px w-10 bg-gold-500/60" />
              {t('eyebrow')}
            </div>
            <h2 className="font-display display-size font-semibold text-balance text-ink-50">
              {t('title')}
            </h2>
          </Reveal>

          <ul className="col-span-12 flex flex-col divide-y divide-[color-mix(in_oklab,var(--color-ink-50)_10%,transparent)] border-t border-b hairline lg:col-span-7">
            {items.map((it, i) => {
              const isOpen = open.has(i);
              return (
                <li key={it.q}>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
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
                    <span
                      className={cn(
                        'mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-[transform,colors] duration-300 ease-out',
                        isOpen
                          ? 'rotate-45 border-gold-500/60 bg-gold-400/10 text-gold-400'
                          : 'rotate-0 hairline text-ink-300'
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                    </span>
                  </button>

                  {/* CSS-only collapsible: grid-template-rows 0fr → 1fr animates intrinsic height */}
                  <div
                    className={cn(
                      'grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <div className="min-h-0">
                      <p className="max-w-2xl pb-6 pl-10 pr-12 text-base leading-relaxed text-ink-300 lg:pb-8">
                        {it.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
