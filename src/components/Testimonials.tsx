'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Star, ChevronDown, ChevronUp, MessageSquarePlus } from 'lucide-react';
import { UserAvatar } from './UserAvatar';
import { Reveal } from './Reveal';
import { ReviewForm } from './ReviewForm';
import { cn } from '@/lib/cn';

type Testimonial = { text: string; author: string; role: string };

const PREVIEW_COUNT = 4;

export function Testimonials({ locale }: { locale: string }) {
  const t = useTranslations('Testimonials');
  const items = t.raw('items') as Testimonial[];
  const [expanded, setExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const visible = expanded ? items : items.slice(0, PREVIEW_COUNT);
  const hiddenCount = Math.max(0, items.length - PREVIEW_COUNT);

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
            / {t('ratingLabel')}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {visible.map((it, i) => (
            <Reveal
              as="figure"
              key={`${it.author}-${i}`}
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
                    / {(i + 1).toString().padStart(2, '0')}
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

        {/* Controls: expand / leave a review */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border hairline-gold bg-ink-950/60 px-5 py-2.5 text-sm text-ink-100 backdrop-blur-md transition-all duration-200',
                'hover:border-gold-500/60 hover:bg-ink-900/70 hover:text-gold-300 ring-gold'
              )}
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4 text-gold-400" strokeWidth={1.6} aria-hidden />
                  {t('collapse')}
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 text-gold-400" strokeWidth={1.6} aria-hidden />
                  {t('expand', { count: hiddenCount })}
                </>
              )}
            </button>
          )}

          <button
            type="button"
            onClick={() => setShowForm((v) => !v)}
            aria-expanded={showForm}
            aria-controls="review-form-panel"
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-ink-950 ring-gold transition-all duration-300',
              'bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600',
              'shadow-[0_8px_24px_-10px_rgba(212,166,71,0.55)] hover:-translate-y-px hover:shadow-[0_14px_34px_-10px_rgba(212,166,71,0.75)]'
            )}
          >
            <MessageSquarePlus className="h-4 w-4" strokeWidth={1.6} aria-hidden />
            {showForm ? t('hideForm') : t('leaveReview')}
          </button>
        </div>

        {showForm && (
          <div id="review-form-panel" className="mt-10">
            <ReviewForm locale={locale} onSuccess={() => { /* keep panel open with success state */ }} />
          </div>
        )}
      </div>
    </section>
  );
}
