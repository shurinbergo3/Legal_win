'use server';

import { contactSchema, reviewSchema } from '@/lib/schemas';
import { sendContactToTelegram, sendReviewToTelegram } from '@/lib/telegram';
import { storeLead } from '@/lib/leads-store';

export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string }
  | { status: 'invalid'; fieldErrors: Record<string, string[]> };

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: 'invalid',
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>
    };
  }

  if (parsed.data.hp) {
    return { status: 'success' };
  }

  // Persist first so the lead is recoverable from /admin even if Telegram
  // delivery is flaky. Storage failure must not block the user submit.
  try {
    await storeLead(parsed.data);
  } catch (err) {
    console.error('[contact] lead store failed (non-fatal)', err);
  }

  try {
    await sendContactToTelegram(parsed.data);
    return { status: 'success' };
  } catch (err) {
    console.error('[contact] telegram failed', err);
    return {
      status: 'error',
      message: err instanceof Error ? err.message : 'Unknown error'
    };
  }
}

export type ReviewState = ContactState;

export async function submitReview(
  _prev: ReviewState,
  formData: FormData
): Promise<ReviewState> {
  // Outer catch: useActionState silently keeps the previous state if a server
  // action throws, which to the user looks like a vanishing form with no
  // feedback. Convert any unexpected error into a visible 'error' state.
  try {
    const raw = Object.fromEntries(formData.entries());
    console.log('[review] received', {
      hasName: typeof raw.name === 'string' && raw.name.length > 0,
      rating: raw.rating,
      textLen: typeof raw.text === 'string' ? raw.text.length : 0,
      consent: raw.consent,
      locale: raw.locale
    });

    const parsed = reviewSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors as Record<string, string[]>;
      console.warn('[review] validation failed', fieldErrors);
      return { status: 'invalid', fieldErrors };
    }

    if (parsed.data.hp) {
      console.log('[review] honeypot tripped - silently dropping');
      return { status: 'success' };
    }

    const report = await sendReviewToTelegram(parsed.data);
    console.log('[review] delivery report', report);
    return { status: 'success' };
  } catch (err) {
    console.error('[review] action failed', err);
    return {
      status: 'error',
      message: err instanceof Error ? err.message : 'Unknown error'
    };
  }
}
