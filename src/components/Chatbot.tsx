'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useChat } from '@ai-sdk/react';
import { useTranslations, useLocale } from 'next-intl';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Send, X, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/cn';
import ReactMarkdown from 'react-markdown';

// Operator portrait - drop the photo at public/chatbot/operator.jpg.
// Used in the floating toggle, the panel header, and beside each
// assistant message for a "live operator" feel.
const OPERATOR_AVATAR = '/chatbot/operator.webp';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Tease popup tuning - based on Drift / Intercom / HubSpot benchmarks.
 *
 * Two triggers race; whichever fires first wins:
 *   1) TEASE_DELAY_MS - 35s on the page (sweet spot for content sites)
 *   2) TEASE_SCROLL_RATIO - user scrolls past 55% of the page
 *      (signals genuine engagement, more qualified than a timer)
 *
 * Once shown OR explicitly dismissed, suppressed for TEASE_TTL_MS.
 * 7 days in localStorage - short enough that returning prospects still
 * see it within their decision window, long enough that the user isn't
 * pestered every visit.
 *
 * Suppressed entirely when:
 *   • Contact section is in viewport - they're already on the form
 *   • prefers-reduced-motion - respect accessibility preference */
const TEASE_DELAY_MS = 35_000;
const TEASE_SCROLL_RATIO = 0.55;
const TEASE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const TEASE_KEY = 'lw-chat-tease-shown-at';
const CONSENT_KEY = 'lw-chat-consent-v2';
const CONSENT_TTL_MS = 365 * 24 * 60 * 60 * 1000; // 1 year
const SESSION_MESSAGES_KEY = 'lw-chat-messages';
const SESSION_OPEN_KEY = 'lw-chat-open';

function consentAlreadyGiven(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const ts = Number(window.localStorage.getItem(CONSENT_KEY) ?? 0);
    return ts > 0 && Date.now() - ts < CONSENT_TTL_MS;
  } catch {
    return false;
  }
}

function saveConsent() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CONSENT_KEY, String(Date.now()));
  } catch { /* ignore */ }
}

function teaseRecentlyShown(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const ts = Number(window.localStorage.getItem(TEASE_KEY) ?? 0);
    return ts > 0 && Date.now() - ts < TEASE_TTL_MS;
  } catch {
    return false;
  }
}

function markTeaseShown() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(TEASE_KEY, String(Date.now()));
  } catch {
    /* localStorage disabled - tease will re-show on next visit, acceptable */
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadSessionMessages(): any[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.sessionStorage.getItem(SESSION_MESSAGES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveSessionMessages(messages: any[]) {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(SESSION_MESSAGES_KEY, JSON.stringify(messages));
  } catch { /* ignore */ }
}

function loadSessionOpen(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.sessionStorage.getItem(SESSION_OPEN_KEY) === '1';
  } catch {
    return false;
  }
}

function saveSessionOpen(open: boolean) {
  if (typeof window === 'undefined') return;
  try {
    if (open) {
      window.sessionStorage.setItem(SESSION_OPEN_KEY, '1');
    } else {
      window.sessionStorage.removeItem(SESSION_OPEN_KEY);
    }
  } catch { /* ignore */ }
}

export function Chatbot() {
  const t = useTranslations('Chat');
  const locale = useLocale();
  const reduce = useReducedMotion();
  // Seeded straight from storage rather than through a mount effect: the whole
  // component is loaded with ssr:false (see ChatbotLoader), so there is no
  // server render to mismatch against and no need for a second render pass.
  const [open, setOpen] = useState(loadSessionOpen);
  const [tease, setTease] = useState(false);
  const [consentGiven, setConsentGiven] = useState(consentAlreadyGiven);
  const [consentChecked, setConsentChecked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, status, error } = useChat({
    api: '/api/chat',
    // Язык страницы - стартовая догадка для ответа бота: по коротким «ок» /
    // «tak» текст не распознаётся, и сервер опирается на локаль.
    body: { locale },
    initialMessages: loadSessionMessages(),
  });

  // Persist messages to sessionStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) saveSessionMessages(messages);
  }, [messages]);

  // Auto-scroll to bottom when messages arrive or panel opens
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, open]);

  /* --- Tease: timer + scroll-depth race, 7-day suppression --- */
  useEffect(() => {
    if (reduce) return;
    if (typeof window === 'undefined') return;
    if (open) return;
    if (teaseRecentlyShown()) return;

    let fired = false;
    const fire = () => {
      if (fired || open) return;
      // Skip if user is already on the contact section (#contact in viewport)
      const contact = document.getElementById('contact');
      if (contact) {
        const rect = contact.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) return;
      }
      fired = true;
      setTease(true);
      markTeaseShown();
    };

    const timer = window.setTimeout(fire, TEASE_DELAY_MS);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      if (window.scrollY / max >= TEASE_SCROLL_RATIO) fire();
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [open, reduce]);

  // Persist open state to sessionStorage
  useEffect(() => {
    saveSessionOpen(open);
  }, [open]);

  // Opening the chat dismisses the tease
  const openChat = useCallback(() => {
    setOpen(true);
    setTease(false);
  }, []);

  const dismissTease = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setTease(false);
  }, []);

  const handleConsentConfirm = useCallback(() => {
    saveConsent();
    setConsentGiven(true);
  }, []);

  const loading = status === 'submitted' || status === 'streaming';

  return (
    <>
      {/* === Floating toggle === */}
      <div className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8">
        {/* Pulsing halo - only when closed and no reduced-motion.
            CSS-driven (see globals.css .chat-halo) so it stays on the
            compositor and never runs a JS animation loop. */}
        {!open && !reduce && (
          <>
            <span
              aria-hidden
              className="chat-halo pointer-events-none absolute inset-0 rounded-full bg-gold-400/40"
            />
            <span
              aria-hidden
              className="chat-halo-2 pointer-events-none absolute inset-0 rounded-full bg-gold-400/30"
            />
          </>
        )}

        <motion.button
          type="button"
          onClick={() => (open ? setOpen(false) : openChat())}
          aria-label={open ? t('closeChat') : t('openChat')}
          aria-expanded={open}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            'group relative inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full text-ink-950 shadow-elite transition-colors duration-300',
            open
              ? 'bg-ink-50'
              : 'bg-gold-400 ring-2 ring-gold-400/30 ring-offset-2 ring-offset-ink-950 hover:bg-gold-300'
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" strokeWidth={1.8} aria-hidden />
              </motion.span>
            ) : (
              <motion.span
                key="avatar"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.25, ease }}
                className="relative h-full w-full"
              >
                <Image
                  src={OPERATOR_AVATAR}
                  alt={t('title')}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
                {/* Online dot */}
                <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-gold-400 bg-emerald-400" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* === Tease popup === */}
        <AnimatePresence>
          {tease && !open && (
            <motion.div
              key="tease"
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 360,
                damping: 28,
                mass: 0.6
              }}
              role="button"
              tabIndex={0}
              aria-label={t('teaseCta')}
              onClick={openChat}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openChat();
                }
              }}
              style={{ transformOrigin: 'bottom right' }}
              className="glass-strong absolute bottom-[calc(100%+12px)] right-0 w-[280px] cursor-pointer overflow-hidden rounded-2xl border hairline-gold shadow-elite transition-shadow hover:shadow-[0_30px_80px_-20px_rgba(212,166,71,0.45)] sm:w-[320px]"
            >
              {/* Dismiss */}
              <button
                type="button"
                onClick={dismissTease}
                aria-label={t('dismiss')}
                className="absolute right-2 top-2 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink-950/70 text-ink-300 transition-colors hover:bg-ink-900 hover:text-ink-50"
              >
                <X className="h-3 w-3" strokeWidth={2} aria-hidden />
              </button>

              <div className="flex gap-3 p-4">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold-500/40">
                  <Image
                    src={OPERATOR_AVATAR}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-emerald-400" />
                </div>
                <div className="min-w-0 flex-1 pr-5">
                  <div className="flex items-baseline gap-2 text-[11px]">
                    <span className="font-medium text-ink-50">{t('operatorName')}</span>
                    <span className="text-ink-400">{t('operatorRole')}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-snug text-ink-100">
                    {t('teaseGreeting')}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-gold-400">
                    {t('teaseCta')} →
                  </span>
                </div>
              </div>

              {/* Bottom hairline */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* === Chat panel === */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 28,
              mass: 0.7,
              opacity: { duration: 0.18 }
            }}
            role="dialog"
            aria-label={t('title')}
            style={{ transformOrigin: 'bottom right' }}
            className="glass-strong fixed inset-x-4 bottom-24 z-40 flex h-[min(560px,70dvh)] flex-col overflow-hidden rounded-[1.5rem] shadow-elite sm:inset-auto sm:bottom-28 sm:right-8 sm:h-[520px] sm:w-[380px]"
          >
            <header className="flex items-center gap-3 border-b hairline px-5 py-4">
              <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold-500/40">
                <Image
                  src={OPERATOR_AVATAR}
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover"
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-emerald-400" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold text-ink-50">
                  {t('operatorName')}
                </span>
                <span className="text-[11px] text-ink-400">
                  {t('operatorRole')} · {t('subtitle')}
                </span>
              </div>
            </header>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-5 py-5 text-sm"
            >
              {messages.length === 0 && (
                <AssistantMessage>{t('greeting')}</AssistantMessage>
              )}

              {!consentGiven && (
                <ConsentCard
                  t={t}
                  locale={locale}
                  checked={consentChecked}
                  onCheck={setConsentChecked}
                  onConfirm={handleConsentConfirm}
                />
              )}

              {messages.map((m) =>
                m.role === 'user' ? (
                  <div
                    key={m.id}
                    className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-gold-400 px-4 py-2.5 leading-relaxed text-ink-950"
                  >
                    {m.content}
                  </div>
                ) : (
                  <AssistantMessage key={m.id}>{m.content}</AssistantMessage>
                )
              )}

              {loading && (
                <div className="flex items-end gap-2">
                  <span className="relative h-7 w-7 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold-500/30">
                    <Image src={OPERATOR_AVATAR} alt="" fill sizes="28px" className="object-cover" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-ink-800/70 px-4 py-3">
                    <Dot delay={0} />
                    <Dot delay={0.15} />
                    <Dot delay={0.3} />
                  </span>
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="mr-auto max-w-[85%] rounded-2xl rounded-bl-sm border hairline bg-ink-900/70 px-4 py-3 text-sm text-ink-200"
                >
                  <p className="font-medium text-ink-50">{t('errorTitle')}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-300">
                    {t('errorBefore')}
                    <a
                      href="mailto:info@legalwin.pl"
                      className="text-gold-400 underline-offset-2 hover:underline"
                    >
                      info@legalwin.pl
                    </a>
                    {t('errorAfter')}
                  </p>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                // Enter in the input bypasses the disabled send button: block
                // concurrent submits while streaming and whitespace-only input.
                if (loading || !input.trim() || !consentGiven) {
                  e.preventDefault();
                  return;
                }
                handleSubmit(e);
              }}
              className="flex items-center gap-2 border-t hairline px-3 py-3"
            >
              <input
                value={input}
                onChange={handleInputChange}
                placeholder={consentGiven ? t('placeholder') : t('consentStart')}
                disabled={!consentGiven}
                className="flex-1 bg-transparent px-3 py-2 text-sm text-ink-50 placeholder:text-ink-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={t('placeholder')}
              />
              <button
                type="submit"
                disabled={loading || !input.trim() || !consentGiven}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-ink-950 transition-all duration-200 hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={t('send')}
              >
                <Send className="h-4 w-4" strokeWidth={1.6} aria-hidden />
              </button>
            </form>

            <p className="border-t hairline px-5 py-2.5 text-[10px] text-ink-500">
              {t('disclaimer')}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------- GDPR / RODO consent card ---------- */

type ConsentCardProps = {
  t: ReturnType<typeof useTranslations<'Chat'>>;
  locale: string;
  checked: boolean;
  onCheck: (v: boolean) => void;
  onConfirm: () => void;
};

function ConsentCard({ t, locale, checked, onCheck, onConfirm }: ConsentCardProps) {
  const privacyHref = `/${locale}/polityka-prywatnosci`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border hairline-gold bg-ink-900/60 px-4 py-4 text-sm"
    >
      <div className="mb-3 flex items-center gap-2 text-gold-400">
        <ShieldCheck className="h-4 w-4 flex-shrink-0" strokeWidth={1.8} aria-hidden />
        <span className="font-medium text-ink-50">{t('consentTitle')}</span>
      </div>

      <p className="mb-4 text-[12px] leading-relaxed text-ink-300">
        {t('consentText')}{' '}
        <a
          href={privacyHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-400 underline-offset-2 hover:underline"
        >
          {t('consentPrivacy')}
        </a>
        .
      </p>

      <label className="mb-4 flex cursor-pointer items-start gap-2.5">
        <span className="relative mt-0.5 flex-shrink-0">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheck(e.target.checked)}
            className="peer sr-only"
          />
          <span className="flex h-4 w-4 items-center justify-center rounded border border-ink-600 bg-ink-800 transition-colors peer-checked:border-gold-400 peer-checked:bg-gold-400">
            {checked && (
              <svg viewBox="0 0 10 8" className="h-2.5 w-2.5 text-ink-950" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M1 4l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
        </span>
        <span className="text-[12px] leading-relaxed text-ink-200">{t('consentCheckbox')}</span>
      </label>

      <motion.button
        type="button"
        onClick={onConfirm}
        disabled={!checked}
        whileHover={checked ? { scale: 1.02 } : {}}
        whileTap={checked ? { scale: 0.97 } : {}}
        className="w-full rounded-xl bg-gold-400 py-2 text-[13px] font-medium text-ink-950 transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
      >
        {t('consentStart')}
      </motion.button>
    </motion.div>
  );
}

/* ---------- Assistant message bubble with avatar ---------- */

function AssistantMessage({ children }: { children: React.ReactNode }) {
  const content = typeof children === 'string' ? children : null;
  return (
    <div className="flex items-end gap-2">
      <span className="relative h-7 w-7 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold-500/30">
        <Image src={OPERATOR_AVATAR} alt="" fill sizes="28px" className="object-cover" />
      </span>
      <div className="prose prose-sm max-w-[85%] rounded-2xl rounded-bl-sm bg-ink-800/70 px-4 py-2.5 leading-relaxed text-ink-100 [&_a]:text-gold-400 [&_a]:no-underline [&_a:hover]:underline [&_strong]:font-semibold [&_strong]:text-ink-50 [&_ul]:my-1 [&_ul]:space-y-0.5 [&_ul]:pl-4 [&_ol]:my-1 [&_ol]:space-y-0.5 [&_ol]:pl-4 [&_li]:text-ink-100 [&_p]:my-0 [&_p+p]:mt-2">
        {content !== null ? (
          <ReactMarkdown>{content}</ReactMarkdown>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="h-1.5 w-1.5 rounded-full bg-ink-300"
      animate={{ opacity: [0.2, 1, 0.2], y: [0, -2, 0] }}
      transition={{ duration: 1, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}
