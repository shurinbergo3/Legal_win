import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';

export default async function NotFound() {
  const t = await getTranslations('NotFound');

  const popular = [
    {
      slug: 'karta-pobytu',
      title: t('popular.kartaTitle'),
      desc: t('popular.kartaDesc'),
      number: '01',
    },
    {
      slug: 'obywatelstwo',
      title: t('popular.obywTitle'),
      desc: t('popular.obywDesc'),
      number: '02',
    },
    {
      slug: 'rejestracja-sp-z-oo',
      title: t('popular.spolkaTitle'),
      desc: t('popular.spolkaDesc'),
      number: '03',
    },
  ];

  return (
    <main className="hero-gradient relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="blob-1 pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-gold-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="blob-2 pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-cyan-accent/10 blur-3xl"
      />

      {/* Editorial accent rail */}
      <div aria-hidden className="editorial-accent" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Folio rail */}
        <div className="folio-rail hero-in">
          <span>{t('folio')}</span>
          <span className="rule" aria-hidden />
          <span className="reading-seal !uppercase">{t('stamp')}</span>
        </div>

        {/* Massive 404 with § paragraph mark */}
        <div className="hero-in hero-in-d1 mt-10 flex items-baseline justify-center gap-3 sm:gap-6">
          <span
            aria-hidden
            className="font-display text-[64px] font-medium italic leading-none text-gold-500/70 sm:text-[96px]"
          >
            §
          </span>
          <span
            className="font-display font-semibold leading-[0.85] tracking-tight"
            style={{
              fontSize: 'clamp(8rem, 22vw, 18rem)',
              backgroundImage:
                'linear-gradient(180deg, var(--color-gold-300) 0%, var(--color-gold-500) 55%, color-mix(in oklab, var(--color-gold-700) 70%, transparent) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 80px color-mix(in oklab, var(--color-gold-500) 35%, transparent)',
            }}
          >
            404
          </span>
        </div>

        {/* Ornamental divider */}
        <div className="ornament-divider hero-in hero-in-d2 mt-4">
          <span className="glyph">◇</span>
        </div>

        {/* Editorial copy */}
        <div className="hero-in hero-in-d3 text-center">
          <h1 className="font-display text-balance font-semibold leading-[1.05] tracking-tight text-ink-50 display-size">
            {t('title')}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-ink-300 sm:text-lg">
            {t('lede')}
          </p>
        </div>

        {/* Popular destinations */}
        <div className="hero-in hero-in-d4 mt-14">
          <div className="byline-band justify-center">
            <span className="sep">¶</span>
            <strong>{t('popularLabel')}</strong>
            <span className="sep">¶</span>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {popular.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/uslugi/${item.slug}`}
                  className="glass group relative flex h-full flex-col gap-3 rounded-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elite hover:hairline-gold"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-[0.28em] text-gold-400/80">
                      / {item.number}
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="h-4 w-4 text-ink-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-ink-50">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm text-ink-300">{item.desc}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="hero-in hero-in-d5 mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-chip bg-gold-400 px-7 py-3.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-gold"
          >
            {t('ctaHome')}
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/#contact"
            className="glass group inline-flex items-center justify-center gap-2 rounded-chip px-7 py-3.5 text-sm font-medium text-ink-50 transition-all duration-300 hover:hairline-gold"
          >
            <MessageCircle aria-hidden className="h-4 w-4 text-gold-400" />
            {t('ctaContact')}
          </Link>
        </div>

        {/* Footnote */}
        <p className="hero-in hero-in-d6 mt-12 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400/80">
          {t('footnote')}
        </p>
      </div>
    </main>
  );
}
