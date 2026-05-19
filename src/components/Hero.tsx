import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { blur } from '@/lib/image-blur';
import { REVIEW_COUNT, REVIEW_RATING_VALUE } from '@/lib/seo';
import { ThemisScales } from './ThemisScales';

export async function Hero() {
  const t = await getTranslations('Hero');

  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 lg:pt-52 lg:pb-32 min-h-[100svh]">
      {/* Cinematic photo background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/hero/staruwka.webp"
          alt={t('imageAlt')}
          fill
          priority
          placeholder="blur"
          blurDataURL={blur.staruwka}
          sizes="100vw"
          className="object-cover object-[50%_38%]"
        />
      </div>

      {/* Photo treatment: cinematic dark gradient + brand wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,9,26,0.78) 0%, rgba(5,9,26,0.55) 38%, rgba(5,9,26,0.78) 72%, rgba(5,9,26,0.96) 100%)'
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 88% 18%, rgba(212,166,71,0.28), transparent 60%), radial-gradient(ellipse 50% 50% at 8% 90%, rgba(34,211,238,0.10), transparent 60%)'
        }}
      />
      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 50% 50%, transparent 55%, rgba(5,9,26,0.55) 100%)'
        }}
      />
      {/* Subtle film grain via dot mask */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '3px 3px'
        }}
      />

      {/* Editorial grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage:
            'radial-gradient(ellipse 70% 65% at 50% 35%, #000 60%, transparent 100%)'
        }}
      />

      {/* Ambient orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-gold-500/15 blur-[140px] blob-1"
      />

      {/* Themis watermark - desktop */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-4%] top-[14%] hidden h-[78%] w-[42%] text-gold-400/[0.14] lg:block"
      >
        <ThemisScales className="h-full w-full" />
      </div>
      {/* Mobile Themis */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-2 top-24 h-40 w-40 text-gold-400/[0.10] sm:right-6 sm:top-28 sm:h-56 sm:w-56 lg:hidden"
      >
        <ThemisScales className="h-full w-full" />
      </div>

      {/* Text content */}
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-x-6 gap-y-10 px-6 lg:px-10">
        {/* Status strip */}
        <div className="hero-in hero-in-d1 col-span-12 flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold-300">
            <span className="inline-block h-px w-10 bg-gold-500/70" />
            {t('eyebrow')}
          </div>
          <div className="flex items-center gap-2 rounded-full border hairline-gold bg-ink-950/55 px-3 py-1.5 text-[11px] text-ink-100 backdrop-blur-md">
            <span className="relative inline-flex h-2 w-2">
              <span className="pulse-dot absolute inset-0 rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t('availableNow')} · {t('hoursToday')}
          </div>
        </div>

        {/* Oversized headline */}
        <h1 className="hero-in hero-in-d2 font-display hero-size col-span-12 text-balance font-semibold text-ink-50 [text-shadow:0_2px_24px_rgba(5,9,26,0.55)]">
          <span className="block">{t('titleLine1')}</span>
          <span className="block italic text-gold-400">
            {t('titleLine2')}
            <span className="caret ml-1 inline-block h-[0.75em] w-[0.08em] translate-y-[-0.1em] bg-gold-400 align-middle" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-in hero-in-d3 col-span-12 max-w-2xl text-pretty text-lg leading-relaxed text-ink-200 lg:col-span-7 lg:text-xl [text-shadow:0_1px_18px_rgba(5,9,26,0.65)]">
          {t('subtitle')}
        </p>

        {/* Social proof */}
        <div className="hero-in hero-in-d4 col-span-12 -mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
          <div className="flex items-center gap-1.5 rounded-full border hairline-gold bg-ink-950/55 px-3 py-1.5 backdrop-blur-md">
            <span className="flex items-center gap-0.5" role="img" aria-label={`${REVIEW_RATING_VALUE} of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-gold-400 text-gold-400"
                  strokeWidth={1.4}
                  aria-hidden
                />
              ))}
            </span>
            <span className="ml-1 text-sm font-semibold text-ink-50">
              {REVIEW_RATING_VALUE}
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-200">
            / {REVIEW_COUNT} {t('socialProofLabel')}
          </span>
        </div>

        <div className="hero-in hero-in-d5 col-span-12 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-7 py-4 text-base font-medium text-ink-950 ring-gold transition-all duration-300 hover:bg-gold-300"
          >
            {t('ctaPrimary')}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.6}
              aria-hidden
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border hairline bg-ink-950/40 px-7 py-4 text-base text-ink-50 backdrop-blur-md transition-colors duration-300 hover:border-gold-500/60 hover:bg-ink-900/60"
          >
            {t('ctaSecondary')}
          </a>
          <a
            href="tel:+48506550721"
            className="hidden items-center gap-2 pl-2 text-sm text-ink-200 transition-colors hover:text-gold-300 sm:inline-flex"
          >
            <Phone className="h-4 w-4" strokeWidth={1.6} aria-hidden />
            +48 506 55 07 21
          </a>
        </div>
      </div>

      {/* Editorial photo caption */}
      <div className="hero-in hero-in-d6 pointer-events-none absolute bottom-6 left-6 z-10 hidden flex-col gap-1 font-mono text-[10px] uppercase tracking-[0.32em] text-ink-300/80 sm:left-10 sm:flex">
        <span className="text-gold-400/80">52.2297° N · 21.0122° E</span>
        <span>Pałac Kultury · Warszawa</span>
      </div>

      {/* Bottom scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ink-300/80">
        <span className="scroll-cue inline-block">scroll</span>
      </div>
    </section>
  );
}
