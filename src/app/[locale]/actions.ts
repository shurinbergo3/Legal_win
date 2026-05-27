'use server';

import { contactSchema, reviewSchema } from '@/lib/schemas';
import { sendContactToTelegram, sendReviewToTelegram } from '@/lib/telegram';

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
  const raw = Object.fromEntries(formData.entries());
  const parsed = reviewSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: 'invalid',
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>
    };
  }

  if (parsed.data.hp) {
    return { status: 'success' };
  }

  try {
    await sendReviewToTelegram(parsed.data);
    return { status: 'success' };
  } catch (err) {
    console.error('[review] telegram failed', err);
    return {
      status: 'error',
      message: err instanceof Error ? err.message : 'Unknown error'
    };
  }
}
