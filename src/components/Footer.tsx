'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Nav');
  const tContact = useTranslations('Contact');
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
    <footer className="relative border-t hairline bg-ink-950 pt-24 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Giant wordmark */}
        <div className="mb-16 overflow-hidden">
          <span className="block font-display text-[clamp(4rem,18vw,18rem)] font-semibold leading-[0.85] tracking-[-0.035em] text-ink-900">
            legalwin.
          </span>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 flex flex-col gap-5 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 text-ink-50">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950">
                <span className="font-display text-[20px] font-bold leading-none">L</span>
              </span>
              <span className="font-display text-[22px] font-semibold tracking-tight">
                LegalWin
              </span>
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
                  <a href="#services" className="transition-colors hover:text-gold-400">
                    {tS(`${s}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-ink-400">
              {t('companyTitle')}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-ink-200">
              <li><a href="#cases" className="transition-colors hover:text-gold-400">{tNav('cases')}</a></li>
              <li><a href="#team" className="transition-colors hover:text-gold-400">{tNav('team')}</a></li>
              <li><a href="#process" className="transition-colors hover:text-gold-400">{tNav('process')}</a></li>
              <li><a href="#faq" className="transition-colors hover:text-gold-400">{tNav('faq')}</a></li>
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

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t hairline pt-8 text-xs text-ink-500 sm:flex-row sm:items-center">
          <div>
            © {year} LegalWin Sp. z o.o. · {t('rights')}
          </div>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ink-200">{t('privacy')}</a>
            <a href="#" className="transition-colors hover:text-ink-200">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
