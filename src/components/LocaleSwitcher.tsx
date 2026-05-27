'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { cn } from '@/lib/cn';

// Display order in the header switcher. Decoupled from routing.locales so we
// can surface uk before ru without touching SEO/middleware ordering.
const SWITCHER_ORDER: readonly Locale[] = ['uk', 'ru', 'pl', 'en', 'tr'];

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();
  const t = useTranslations('Common');

  return (
    <div
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border hairline px-1 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-300',
        className
      )}
      role="group"
      aria-label={t('language')}
    >
      {SWITCHER_ORDER.filter((l) => routing.locales.includes(l)).map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            disabled={pending || active}
            onClick={() =>
              startTransition(() => router.replace(pathname, { locale: l }))
            }
            className={cn(
              'cursor-pointer rounded-full px-2.5 py-1 uppercase transition-colors duration-200',
              active
                ? 'bg-ink-50 text-ink-950'
                : 'hover:text-ink-50 disabled:opacity-60'
            )}
            aria-current={active ? 'true' : undefined}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
