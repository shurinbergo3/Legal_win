'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { LogoBadge } from './Logo';
import { SiteCredit } from './SiteCredit';

// Polish government sources we cite in service pages and blog posts.
// Outbound links to authoritative .gov.pl domains help with topical authority
// signals for the law-firm site.
const govSources: { name: string; url: string; note: string }[] = [
  { name: 'udsc.gov.pl', url: 'https://udsc.gov.pl', note: 'Urząd do Spraw Cudzoziemców' },
  { name: 'mazowieckie.uw.gov.pl', url: 'https://www.mazowieckie.pl', note: 'Mazowiecki Urząd Wojewódzki' },
  { name: 'gov.pl/web/mswia', url: 'https://www.gov.pl/web/mswia', note: 'MSWiA - zezwolenie na nieruchomość' },
  { name: 'biznes.gov.pl', url: 'https://www.biznes.gov.pl', note: 'Sp. z o.o., JDG, S24' }
];

export function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Nav');
  const tContact = useTranslations('Contact');
  const locale = useLocale();
  const year = new Date().getFullYear();

  const services = [
    'immigration',
    'documents',
    'business',
    'realestate',
    'relocation'
  ] as const;
  const tS = useTranslations('Services.groups');

  return (
    <footer className="relative overflow-hidden border-t hairline bg-ink-950 pt-16 pb-8">
      {/* Giant wordmark as background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden"
      >
        <span
          className="block font-display text-[clamp(6rem,22vw,22rem)] font-semibold leading-[0.78] tracking-[-0.045em] text-center"
          style={{
            backgroundImage:
              'linear-gradient(180deg, color-mix(in oklab, var(--color-gold-500) 28%, transparent) 0%, color-mix(in oklab, var(--color-gold-500) 8%, transparent) 55%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            transform: 'translateY(8%)'
          }}
        >
          legalwin.
        </span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-0 gap-y-10">
          <div className="col-span-12 flex flex-col gap-5 lg:col-span-5">
            {/* Full badge - at this size LW + LEGAL · WIN + WARSZAWA all read */}
            <Link href="/" aria-label="LegalWin" className="inline-block w-fit">
              <LogoBadge
                size={168}
                className="text-gold-400 transition-transform duration-500 hover:scale-[1.02]"
              />
            </Link>
            <p className="max-w-sm text-sm text-ink-400">{t('tagline')}</p>
            <p className="text-xs text-ink-500">{tContact('address')}</p>
          </div>

          <div className="col-span-6 sm:col-span-4 lg:col-span-3">
            <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-ink-400">
              {t('servicesTitle')}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-ink-200">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/#services" className="transition-colors hover:text-gold-400">
                    {tS(`${s}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-ink-400">
              {t('companyTitle')}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-ink-200">
              <li><Link href="/#cases" className="transition-colors hover:text-gold-400">{tNav('cases')}</Link></li>
              <li><Link href="/#process" className="transition-colors hover:text-gold-400">{tNav('process')}</Link></li>
              <li><Link href="/#faq" className="transition-colors hover:text-gold-400">{tNav('faq')}</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-gold-400">{tNav('blog')}</Link></li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-ink-400">
              {t('contactTitle')}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-ink-200">
              <li>
                <a href={`mailto:${tContact('emailLine')}`} className="transition-colors hover:text-gold-400">
                  {tContact('emailLine')}
                </a>
              </li>
              <li>
                <a href={`tel:${tContact('phoneLine').replace(/\s/g, '')}`} className="transition-colors hover:text-gold-400">
                  {tContact('phoneLine')}
                </a>
              </li>
              <li className="text-xs text-ink-400">{tContact('hours')}</li>
            </ul>
          </div>
        </div>

        {/* Government sources - outbound links to authoritative .gov.pl domains.
            Located between the main column grid and the privacy/cookies bar so
            the editorial layout stays unchanged on tablet & desktop. */}
        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-4 border-t hairline pt-8">
          <div className="col-span-12 flex flex-col gap-1 lg:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold-400">
              {t('sourcesTitle')}
            </h4>
            <p className="max-w-xs text-xs leading-relaxed text-ink-500">
              {t('sourcesIntro')}
            </p>
          </div>
          <ul className="col-span-12 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2">
            {govSources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener external nofollow"
                  className="group/src flex items-center justify-between gap-3 rounded-lg border hairline bg-ink-900/30 px-4 py-2.5 text-xs transition-colors duration-300 hover:border-gold-500/40 hover:bg-ink-900/60"
                >
                  <span className="flex flex-col leading-tight">
                    <span className="font-mono text-[11px] text-ink-100 transition-colors group-hover/src:text-gold-300">
                      {s.name}
                    </span>
                    <span className="text-[10px] text-ink-500">{s.note}</span>
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-ink-500 transition-all duration-300 group-hover/src:-translate-y-0.5 group-hover/src:translate-x-0.5 group-hover/src:text-gold-400"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t hairline pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <div>
            © {year} LegalWin sp. z o.o. · {t('rights')}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/polityka-prywatnosci" className="transition-colors hover:text-ink-200">
              {t('privacy')}
            </Link>
            <Link href="/polityka-cookies" className="transition-colors hover:text-ink-200">
              {t('cookies')}
            </Link>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('legalwin-open-cookie-settings'));
                }
              }}
              className="cursor-pointer transition-colors hover:text-ink-200"
            >
              {t('manageCookies')}
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:justify-end">
          <SiteCredit label={t('builtBy')} locale={locale} />
        </div>
      </div>
    </footer>
  );
}
