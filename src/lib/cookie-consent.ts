/**
 * Cookie consent state — GDPR / RODO / PKE compliant.
 *
 * - Stored in localStorage with timestamp.
 * - Re-asked after CONSENT_TTL_MS. 12 months is the de-facto industry standard
 *   (CNIL guidance ≤ 13 months, OneTrust/Cookiebot/Usercentrics defaults,
 *   Google CMP). GDPR doesn't fix a hard cap, but treating consent as eternal
 *   is bad practice; refreshing yearly keeps it informed and current.
 * - Necessary cookies always allowed (no consent needed under PKE Art.11).
 * - All other categories require explicit opt-in (CJEU Planet49 ruling).
 *
 * Consumers (analytics scripts, pixels, etc.) should subscribe to
 * `legalwin-consent-change` events and load themselves only after the
 * relevant flag becomes true. None are loaded today — wire this up
 * if/when you add Google Analytics, Meta Pixel, Hotjar, etc.
 */

export const CONSENT_KEY = 'legalwin_cookie_consent_v1';
export const CONSENT_TTL_MS = 365 * 24 * 60 * 60 * 1000; // 12 months
export const CONSENT_EVENT = 'legalwin-consent-change';

export type ConsentChoices = {
  necessary: true;
  functional: boolean;
  analytical: boolean;
  marketing: boolean;
};

export type ConsentState = {
  ts: number;
  choices: ConsentChoices;
};

export const ACCEPT_ALL: Omit<ConsentChoices, 'necessary'> = {
  functional: true,
  analytical: true,
  marketing: true
};

export const NECESSARY_ONLY: Omit<ConsentChoices, 'necessary'> = {
  functional: false,
  analytical: false,
  marketing: false
};

export function loadConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (
      typeof parsed?.ts !== 'number' ||
      typeof parsed?.choices !== 'object'
    ) {
      return null;
    }
    if (Date.now() - parsed.ts > CONSENT_TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(choices: Omit<ConsentChoices, 'necessary'>) {
  if (typeof window === 'undefined') return;
  const state: ConsentState = {
    ts: Date.now(),
    choices: { necessary: true, ...choices }
  };
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  window.dispatchEvent(
    new CustomEvent(CONSENT_EVENT, { detail: state })
  );
}

export function clearConsent() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(
    new CustomEvent(CONSENT_EVENT, { detail: null })
  );
}
