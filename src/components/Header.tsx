'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { LocaleSwitcher } from './LocaleSwitcher';
import { LogoBadge } from './Logo';
import { ThemisScales } from './ThemisScales';
import { cn } from '@/lib/cn';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const sections = ['services', 'pricing', 'cases', 'process', 'faq', 'contact'] as const;

export function Header() {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { scrollY } = useScroll();
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => setShrunk(y > 24));

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
      <motion.header
        initial={false}
        animate={{
          paddingTop: shrunk ? 6 : 12,
          paddingBottom: shrunk ? 6 : 12
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-300',
          shrunk || mobileOpen
            ? 'glass-strong border-b hairline'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        {/* Themis silhouette watermark — fades in with the glass background once
            the user has scrolled past the Hero, so the navbar gains the same
            editorial accent as the Hero without competing with it on landing. */}
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-500',
            shrunk || mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
        >
          <ThemisScales className="absolute left-1/2 top-0 h-[280px] w-auto -translate-x-1/2 text-gold-400/[0.07]" />
        </div>

        <div className="relative mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 lg:px-10">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group inline-block text-gold-400 transition-colors duration-300 hover:text-gold-300"
            aria-label="LegalWin"
          >
            <LogoBadge size={64} className="block transition-transform duration-300 group-hover:scale-[1.04] sm:hidden" />
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
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease }}
                className="block h-px w-6 bg-ink-50 origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-px w-6 bg-ink-50"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease }}
                className="block h-px w-6 bg-ink-50 origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-x-0 top-0 z-40 flex min-h-[100svh] flex-col bg-ink-950/98 pt-24 pb-10 backdrop-blur-xl lg:hidden"
          >
            {/* Subtle gold line at top */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

            <nav className="flex flex-1 flex-col px-8">
              {/* Section links */}
              <ul className="flex flex-col divide-y divide-ink-800/60">
                {sections.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease, delay: 0.05 + i * 0.06 }}
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
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, ease, delay: 0.05 + sections.length * 0.06 }}
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
                </motion.li>
              </ul>

              {/* Bottom actions */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease, delay: 0.4 }}
                className="mt-auto flex flex-col gap-4 pt-10"
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
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
