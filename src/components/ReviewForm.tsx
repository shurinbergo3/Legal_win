'use client';

import { motion } from 'framer-motion';
import { useActionState, useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  CheckCircle2,
  AlertCircle,
  Send,
  User,
  MessageSquare,
  Briefcase,
  Star,
  Lock,
  Award
} from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { submitReview, type ReviewState } from '@/app/[locale]/actions';
import { cn } from '@/lib/cn';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const initialState: ReviewState = { status: 'idle' };

export function ReviewForm({
  locale,
  onSuccess
}: {
  locale: string;
  onSuccess?: () => void;
}) {
  const t = useTranslations('ReviewForm');
  const [state, formAction, pending] = useActionState(submitReview, initialState);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Track the last handled status so a parent re-render (which gives
  // `onSuccess` a new identity) can't re-fire the effect and yank the
  // viewport back here long after the submit finished.
  const handledStatus = useRef<ReviewState['status']>('idle');
  useEffect(() => {
    if (state.status === handledStatus.current) return;
    handledStatus.current = state.status;
    if (state.status === 'success' || state.status === 'error' || state.status === 'invalid') {
      if (state.status === 'success') onSuccess?.();
      wrapperRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [state.status, onSuccess]);

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      className="mx-auto max-w-3xl"
    >
      <div className="relative rounded-[22px] border hairline-gold bg-ink-900/40 p-px shadow-[0_0_0_1px_rgba(212,166,71,0.08),0_24px_90px_-36px_rgba(212,166,71,0.28)] backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-[21px] bg-gradient-to-br from-ink-900/80 via-ink-950/95 to-ink-950">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold-500/[0.13] blur-3xl"
          />

          <div className="relative flex items-center justify-between border-b hairline px-5 py-2.5 sm:px-7 sm:py-3">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-ink-400">
              <Award className="h-3.5 w-3.5 text-gold-400" strokeWidth={1.6} aria-hidden />
              <span>{t('eyebrow')}</span>
            </div>
            <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink-400 sm:flex">
              <Lock className="h-3 w-3" strokeWidth={1.6} aria-hidden />
              <span>GDPR · TLS</span>
            </div>
          </div>

          <div className="relative p-5 sm:p-7 lg:p-8">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-semibold text-ink-50 sm:text-3xl">
                {t('title')}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300 sm:text-[15px]">
                {t('subtitle')}
              </p>
            </div>

            {state.status === 'success' ? (
              <SuccessPanel />
            ) : (
              <InnerForm
                locale={locale}
                action={formAction}
                pending={pending}
                state={state}
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InnerForm({
  locale,
  action,
  pending,
  state
}: {
  locale: string;
  action: (formData: FormData) => void;
  pending: boolean;
  state: ReviewState;
}) {
  const t = useTranslations('ReviewForm');
  const fieldErrors =
    state.status === 'invalid' ? state.fieldErrors : ({} as Record<string, string[]>);
  // React 19 resets the form after the action; re-seed fields with the
  // submitted values so a validation error doesn't wipe the user's input.
  const values =
    state.status === 'invalid' ? state.values : ({} as Record<string, string>);

  const errorMessages: string[] = [];
  if (state.status === 'invalid') {
    if (fieldErrors.name) errorMessages.push(t('validation.nameMin'));
    if (fieldErrors.text) errorMessages.push(t('validation.textMin'));
    if (fieldErrors.rating) errorMessages.push(t('validation.ratingRequired'));
    if (fieldErrors.consent) errorMessages.push(t('validation.consentRequired'));
  }

  return (
    <form action={action} className="flex flex-col gap-5" noValidate>
      <input type="hidden" name="locale" value={locale} />
      <input type="text" name="hp" autoComplete="off" tabIndex={-1} aria-hidden className="sr-only" />

      {(state.status === 'invalid' || state.status === 'error') && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-500/50 bg-red-500/[0.08] p-4 text-red-200"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" strokeWidth={1.6} aria-hidden />
          <div className="flex flex-col gap-1 text-sm">
            <span className="font-medium text-red-100">
              {state.status === 'invalid' ? t('errorBannerInvalid') : t('errorMessage')}
            </span>
            {errorMessages.length > 0 && (
              <ul className="ml-4 list-disc space-y-0.5 text-red-200/90">
                {errorMessages.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          name="name"
          label={t('name')}
          placeholder={t('namePlaceholder')}
          autoComplete="name"
          Icon={User}
          required
          defaultValue={values.name}
          error={fieldErrors.name && t('validation.nameMin')}
        />
        <Field
          name="role"
          label={t('role')}
          placeholder={t('rolePlaceholder')}
          Icon={Briefcase}
          defaultValue={values.role}
        />
      </div>

      <RatingPicker error={fieldErrors.rating && t('validation.ratingRequired')} />

      <TextareaField
        name="text"
        label={t('text')}
        placeholder={t('textPlaceholder')}
        Icon={MessageSquare}
        required
        defaultValue={values.text}
        error={fieldErrors.text && t('validation.textMin')}
      />

      <ConsentCheckbox
        error={
          state.status === 'invalid' && state.fieldErrors.consent ? true : false
        }
      />

      <div className="flex flex-col gap-4 border-t hairline pt-5">
        <div className="flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-ink-400 sm:max-w-[320px]">
            {t('subtitle')}
          </span>

          <button
            type="submit"
            disabled={pending}
            className={cn(
              'group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-[15px] font-medium text-ink-950 ring-gold transition-all duration-300',
              'bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600',
              'shadow-[0_8px_28px_-8px_rgba(212,166,71,0.55)] hover:shadow-[0_14px_38px_-8px_rgba(212,166,71,0.75)]',
              'hover:-translate-y-px active:translate-y-0',
              'disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'
            )}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
            />
            {pending ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-950/30 border-t-ink-950" />
                {t('submitting')}
              </>
            ) : (
              <>
                {t('submit')}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={1.6} aria-hidden />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

function RatingPicker({ error }: { error?: string | false }) {
  const t = useTranslations('ReviewForm');
  const [value, setValue] = useState<number>(5);
  const [hover, setHover] = useState<number>(0);

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.22em] text-ink-300">
        <span>{t('rating')}</span>
        <span className="text-gold-400">*</span>
      </legend>
      <div className="flex items-center gap-2">
        <div
          className="flex items-center gap-1"
          role="radiogroup"
          aria-label={t('rating')}
          onMouseLeave={() => setHover(0)}
        >
          {[1, 2, 3, 4, 5].map((n) => {
            const active = (hover || value) >= n;
            return (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={value === n}
                onMouseEnter={() => setHover(n)}
                onFocus={() => setHover(n)}
                onBlur={() => setHover(0)}
                onClick={() => setValue(n)}
                className="rounded-full p-1 ring-gold transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
                aria-label={`${n} / 5`}
              >
                <Star
                  className={cn(
                    'h-7 w-7 transition-colors duration-150',
                    active ? 'fill-gold-400 text-gold-400' : 'text-ink-500'
                  )}
                  strokeWidth={1.4}
                  aria-hidden
                />
              </button>
            );
          })}
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
          {value}/5
        </span>
        <input type="hidden" name="rating" value={value} />
      </div>
      {error ? (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : (
        <p className="text-[11px] text-ink-500">{t('ratingHint')}</p>
      )}
    </fieldset>
  );
}

function ConsentCheckbox({ error }: { error: boolean }) {
  const t = useTranslations('ConsentForm');
  const id = useId();
  const [touched, setTouched] = useState(false);
  const [checked, setChecked] = useState(false);

  // Once the user checks the box the server-side error is resolved — keep
  // showing it only while the box is still unchecked.
  const showError = !checked && (error || touched);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.22em] text-ink-300">
          <span>{t('headerLabel')}</span>
          <span className="text-gold-400" aria-hidden>*</span>
        </span>
        <span
          className={cn(
            'font-mono text-[9.5px] uppercase tracking-[0.22em] transition-colors',
            showError ? 'text-red-400' : 'text-ink-500'
          )}
        >
          {t('requiredBadge')}
        </span>
      </div>

      <label
        htmlFor={id}
        className={cn(
          'group/cb flex cursor-pointer items-start gap-3 rounded-xl border px-3.5 py-3 transition-colors',
          showError
            ? 'border-red-500/60 bg-red-500/[0.05]'
            : checked
            ? 'border-gold-500/40 bg-gold-400/[0.04]'
            : 'hairline-gold bg-ink-950/40 hover:border-gold-500/50'
        )}
      >
        <input
          id={id}
          type="checkbox"
          name="consent"
          required
          aria-required="true"
          aria-invalid={showError}
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
            setTouched(true);
          }}
          onBlur={() => setTouched(true)}
          className="peer mt-0.5 h-[18px] w-[18px] flex-shrink-0 cursor-pointer appearance-none rounded-[5px] border border-ink-600 bg-ink-950/60 transition-all checked:border-gold-500/80 checked:bg-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 relative after:pointer-events-none after:absolute after:left-1/2 after:top-1/2 after:hidden after:h-2.5 after:w-1.5 after:-translate-x-1/2 after:-translate-y-[60%] after:rotate-45 after:border-r-2 after:border-b-2 after:border-ink-950 checked:after:block"
        />
        <span className="text-[11.5px] leading-relaxed text-ink-300">
          <span className="mr-1 font-semibold text-gold-400" aria-hidden>*</span>
          {t.rich('label', {
            policy: (chunks) => (
              <Link
                href="/polityka-prywatnosci"
                target="_blank"
                className="text-gold-400 underline-offset-2 hover:underline"
              >
                {chunks}
              </Link>
            )
          })}
        </span>
      </label>
      {showError && (
        <p role="alert" className="pl-1 text-xs text-red-400">
          {t('required')}
        </p>
      )}
    </div>
  );
}

function SuccessPanel() {
  const t = useTranslations('ReviewForm');
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease }}
      role="status"
      className="flex flex-col items-center gap-4 py-10 text-center"
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-400 ring-1 ring-gold-500/40">
        <CheckCircle2 className="h-7 w-7" strokeWidth={1.5} aria-hidden />
      </span>
      <h3 className="font-display text-2xl font-semibold text-ink-50 sm:text-3xl">
        {t('successTitle')}
      </h3>
      <p className="max-w-sm text-ink-300">{t('successMessage')}</p>
    </motion.div>
  );
}

function Field({
  name,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  Icon,
  required,
  defaultValue,
  error
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  Icon?: React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;
  required?: boolean;
  defaultValue?: string;
  error?: string | false;
}) {
  const id = useId();
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.22em] text-ink-300">
        <span>{label}</span>
        {required && <span className="text-gold-400">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            className={cn(
              'pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-200',
              focused ? 'text-gold-400' : 'text-ink-500',
              error && 'text-red-400'
            )}
            strokeWidth={1.6}
            aria-hidden
          />
        )}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          defaultValue={defaultValue}
          aria-invalid={!!error}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            'w-full rounded-xl border border-ink-700/80 bg-ink-900/40 py-3 text-[15px] text-ink-50 placeholder:text-ink-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]',
            Icon ? 'pl-10 pr-3.5' : 'px-3.5',
            'transition-all duration-200 hover:border-ink-600 focus:border-gold-500/60 focus:bg-ink-950/80 focus:outline-none focus:ring-4 focus:ring-gold-500/[0.1]',
            error && 'border-red-500/60 focus:border-red-500/80 focus:ring-red-500/[0.08]'
          )}
        />
      </div>
      {error && (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function TextareaField({
  name,
  label,
  placeholder,
  Icon,
  required,
  defaultValue,
  error
}: {
  name: string;
  label: string;
  placeholder?: string;
  Icon?: React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;
  required?: boolean;
  defaultValue?: string;
  error?: string | false;
}) {
  const id = useId();
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.22em] text-ink-300">
        <span>{label}</span>
        {required && <span className="text-gold-400">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            className={cn(
              'pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 transition-colors duration-200',
              focused ? 'text-gold-400' : 'text-ink-500',
              error && 'text-red-400'
            )}
            strokeWidth={1.6}
            aria-hidden
          />
        )}
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
          rows={5}
          aria-invalid={!!error}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            'w-full resize-none rounded-xl border border-ink-700/80 bg-ink-900/40 py-3 text-[15px] leading-relaxed text-ink-50 placeholder:text-ink-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]',
            Icon ? 'pl-10 pr-3.5' : 'px-3.5',
            'transition-all duration-200 hover:border-ink-600 focus:border-gold-500/60 focus:bg-ink-950/80 focus:outline-none focus:ring-4 focus:ring-gold-500/[0.1]',
            error && 'border-red-500/60 focus:border-red-500/80 focus:ring-red-500/[0.08]'
          )}
        />
      </div>
      {error && (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
