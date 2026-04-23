import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('Nav');
  return (
    <main className="hero-gradient flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="font-display text-[120px] font-semibold leading-none text-gold-400">
        404
      </span>
      <p className="max-w-md text-lg text-ink-300">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-300"
      >
        ← {t('services')}
      </Link>
    </main>
  );
}
