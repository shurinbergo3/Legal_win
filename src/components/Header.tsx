'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { LocaleSwitcher } from './LocaleSwitcher';
import { LogoBadge } from './Logo';
import { cn } from '@/lib/cn';

type NavItem = { key: string; href: string };
const navItems: NavItem[] = [
  { key: 'services', href: '/#services' },
  { key: 'pricing', href: '/#pricing' },
  { key: 'cases', href: '/#cases' },
  { key: 'process', href: '/#process' },
  { key: 'faq', href: '/#faq' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/#contact' },
];

// Service categories surfaced in the "Услуги" dropdown. Labels are reused from
// the Services.groups namespace (no extra strings), each links to its anchor in
// the homepage Services section (see Services.tsx → `#services-<key>`).
const serviceCategories = [
  'immigration',
  'documents',
  'business',
  'realestate',
  'relocation',
  'auto',
] as const;

export function Header() {
  const t = useTranslations('Nav');
  const tg = useTranslations('Services.groups');
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Close the desktop services dropdown on Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [servicesOpen]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setShrunk(window.scrollY > 24);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  function handleLogoClick(e: React.MouseEvent) {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileOpen(false);
  }

  function closeMobile() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[padding,background,box-shadow,border-color] duration-300',
          shrunk ? 'py-[6px]' : 'py-3',
          shrunk || mobileOpen
            ? 'glass-strong border-b hairline'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="relative mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 lg:px-10">
          <Link
            href="/"
            onClick={handleLogoClick}
            className={cn(
              'group inline-block text-gold-400 transition-[color,filter] duration-300 hover:text-gold-300',
              shrunk
                ? '[filter:drop-shadow(0_0_10px_rgba(212,166,71,0.28))]'
                : '[filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.4))]'
            )}
            aria-label="LegalWin"
          >
            <LogoBadge size={48} compact className="block transition-transform duration-300 group-hover:scale-[1.04] sm:hidden" />
            <LogoBadge size={80} className="hidden transition-transform duration-300 group-hover:scale-[1.04] sm:block lg:hidden" />
            <LogoBadge size={96} className="hidden transition-transform duration-300 group-hover:scale-[1.04] lg:block" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm text-ink-300 lg:flex">
            {navItems.map((item) =>
              item.key === 'services' ? (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/#services"
                    onClick={() => setServicesOpen(false)}
                    aria-expanded={servicesOpen}
                    className="relative inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-ink-50"
                  >
                    {t(item.key)}
                    <svg
                      className={cn('h-3 w-3 text-ink-500 transition-transform duration-200', servicesOpen && 'rotate-180')}
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  {/* Dropdown panel — pt-3 keeps the hover bridge contiguous (no gap drop) */}
                  <div
                    className={cn(
                      'absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-200',
                      servicesOpen
                        ? 'visible translate-y-0 opacity-100'
                        : 'pointer-events-none invisible -translate-y-1 opacity-0'
                    )}
                  >
                    <div className="glass-strong relative overflow-hidden rounded-2xl border hairline p-2 shadow-elite">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
                      />
                      {serviceCategories.map((key) => (
                        <Link
                          key={key}
                          href={`/#services-${key}`}
                          onClick={() => setServicesOpen(false)}
                          className="group/cat flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-ink-200 transition-colors hover:bg-ink-50/[0.06] hover:text-gold-300"
                        >
                          {tg(`${key}.title`)}
                          <svg
                            className="h-4 w-4 text-ink-600 transition-all duration-200 group-hover/cat:translate-x-0.5 group-hover/cat:text-gold-400"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden
                          >
                            <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.key} href={item.href} className="relative transition-colors duration-200 hover:text-ink-50">
                  {t(item.key)}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <LocaleSwitcher className="hidden sm:inline-flex" />

            {/* Desktop CTA */}
            <Link
              href="/#contact"
              className="group hidden items-center gap-2 rounded-full bg-gold-400 px-4 py-2 text-sm font-medium text-ink-950 shadow-soft transition-all duration-200 hover:bg-gold-300 hover:shadow-elite lg:inline-flex"
            >
              {t('consultation')}
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={cn(
                  'block h-px w-6 bg-ink-50 origin-center transition-transform duration-300 ease-out',
                  mobileOpen ? 'translate-y-[5px] rotate-45' : ''
                )}
              />
              <span
                className={cn(
                  'block h-px w-6 bg-ink-50 transition-[opacity,transform] duration-200',
                  mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                )}
              />
              <span
                className={cn(
                  'block h-px w-6 bg-ink-50 origin-center transition-transform duration-300 ease-out',
                  mobileOpen ? '-translate-y-[5px] -rotate-45' : ''
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          key="mobile-menu"
          className="mobile-menu-enter fixed inset-x-0 top-0 z-40 flex min-h-[100svh] flex-col bg-ink-950/98 pt-24 pb-10 backdrop-blur-xl lg:hidden"
        >
          {/* Subtle gold line at top */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

          <nav className="flex flex-1 flex-col px-8">
            <ul className="flex flex-col divide-y divide-ink-800/60">
              {navItems.map((item, i) =>
                item.key === 'services' ? (
                  <li
                    key={item.key}
                    className="mobile-menu-item"
                    style={{ animationDelay: `${50 + i * 60}ms` }}
                  >
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      className="flex w-full items-center justify-between py-5 font-display text-2xl font-semibold text-ink-50 transition-colors hover:text-gold-300"
                    >
                      {t(item.key)}
                      <svg
                        className={cn('h-5 w-5 text-ink-500 transition-transform duration-300', mobileServicesOpen && 'rotate-180')}
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden
                      >
                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <ul className="-mt-1 flex flex-col gap-0.5 pb-4 pl-1">
                        {serviceCategories.map((key) => (
                          <li key={key}>
                            <Link
                              href={`/#services-${key}`}
                              onClick={closeMobile}
                              className="flex items-center gap-3 py-2.5 text-lg text-ink-300 transition-colors hover:text-gold-300"
                            >
                              <span aria-hidden className="h-px w-5 bg-gold-500/50" />
                              {tg(`${key}.title`)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li
                    key={item.key}
                    className="mobile-menu-item"
                    style={{ animationDelay: `${50 + i * 60}ms` }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className="flex items-center justify-between py-5 font-display text-2xl font-semibold text-ink-50 transition-colors hover:text-gold-300"
                    >
                      {t(item.key)}
                      <svg className="h-5 w-5 text-ink-600" viewBox="0 0 20 20" fill="none" aria-hidden>
                        <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </li>
                )
              )}
            </ul>

            <div
              className="mobile-menu-cta mt-auto flex flex-col gap-4 pt-10"
              style={{ animationDelay: '400ms' }}
            >
              <LocaleSwitcher className="self-start" />
              <Link
                href="/#contact"
                onClick={closeMobile}
                className="group flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-4 text-base font-medium text-ink-950 transition-all duration-200 hover:bg-gold-300"
              >
                {t('consultation')}
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
