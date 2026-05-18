'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/cn';

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
      {routing.locales.map((l) => {
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
              'cursor-pointer rounded-full px-2.5 py-1 transition-colors duration-200',
              active
                ? 'bg-ink-50 text-ink-950'
                : 'hover:text-ink-50 disabled:opacity-60'
            )}
            aria-current={active ? 'true' : undefined}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
