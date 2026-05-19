'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { LocaleSwitcher } from './LocaleSwitcher';
import { LogoBadge } from './Logo';
import { cn } from '@/lib/cn';

const sections = ['services', 'pricing', 'cases', 'process', 'faq', 'contact'] as const;

export function Header() {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
            {sections.map((s) => (
              <Link key={s} href={`/#${s}`} className="relative transition-colors duration-200 hover:text-ink-50">
                {t(s)}
              </Link>
            ))}
            <Link href="/blog" className="relative transition-colors duration-200 hover:text-ink-50">
              {t('blog')}
            </Link>
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
              {sections.map((s, i) => (
                <li
                  key={s}
                  className="mobile-menu-item"
                  style={{ animationDelay: `${50 + i * 60}ms` }}
                >
                  <Link
                    href={`/#${s}`}
                    onClick={closeMobile}
                    className="flex items-center justify-between py-5 font-display text-2xl font-semibold text-ink-50 transition-colors hover:text-gold-300"
                  >
                    {t(s)}
                    <svg className="h-5 w-5 text-ink-600" viewBox="0 0 20 20" fill="none" aria-hidden>
                      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </li>
              ))}
              <li
                className="mobile-menu-item"
                style={{ animationDelay: `${50 + sections.length * 60}ms` }}
              >
                <Link
                  href="/blog"
                  onClick={closeMobile}
                  className="flex items-center justify-between py-5 font-display text-2xl font-semibold text-ink-50 transition-colors hover:text-gold-300"
                >
                  {t('blog')}
                  <svg className="h-5 w-5 text-ink-600" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </li>
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
