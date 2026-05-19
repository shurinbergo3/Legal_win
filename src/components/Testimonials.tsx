'use client';

import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import { UserAvatar } from './UserAvatar';
import { Reveal } from './Reveal';

type Testimonial = { text: string; author: string; role: string };

export function Testimonials() {
  const t = useTranslations('Testimonials');
  const items = t.raw('items') as Testimonial[];

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden border-t hairline py-20 sm:py-24 lg:py-32"
    >
      {/* Ambient gold accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 bg-gold-500/[0.06] blur-[140px]"
      />
      {/* Editorial giant quote watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-8 left-2 select-none font-display text-[clamp(12rem,28vw,28rem)] font-semibold leading-none text-gold-500/[0.06] sm:left-6"
      >
        “
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-12 grid grid-cols-12 gap-6 lg:mb-16">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
            <span className="inline-block h-px w-10 bg-gold-500/60" />
            {t('eyebrow')}
          </div>
          <Reveal
            as="h2"
            margin="-100px"
            className="font-display section-size col-span-12 text-balance font-semibold text-ink-50 lg:col-span-9"
          >
            {t('title')}
          </Reveal>
          <p className="col-span-12 self-end font-mono text-[11px] uppercase tracking-[0.28em] text-ink-400 lg:col-span-3 lg:text-right">
            / 4.9 ★ avg · 312 reviews
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {items.map((it, i) => (
            <Reveal
              as="figure"
              key={it.author}
              margin="-60px"
              delay={i * 60}
              className="group relative col-span-12 flex flex-col gap-6 sm:col-span-6 lg:col-span-6"
            >
              <div className="glass relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl p-7 transition-all duration-500 group-hover:border-gold-500/40 sm:p-8 lg:p-10">
                {/* Hover halo */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold-500/[0.08] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Inline quote glyph */}
                <div className="relative flex items-start justify-between">
                  <span aria-hidden className="font-display text-5xl font-semibold leading-none text-gold-400/80 sm:text-6xl">
                    “
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-500">
                    / 0{i + 1}
                  </span>
                </div>

                <blockquote className="font-display text-lg leading-snug text-ink-100 sm:text-xl lg:text-2xl">
                  {it.text}
                </blockquote>

                <figcaption className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t hairline pt-6">
                  <div className="flex items-center gap-4">
                    <UserAvatar size={44} ariaLabel={it.author} />
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium text-ink-50">
                        {it.author}
                      </span>
                      <span className="text-xs text-ink-400">{it.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5" aria-label={t('starsLabel')}>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
