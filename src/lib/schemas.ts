import { z } from 'zod';

export const serviceValues = ['trc', 'driver', 'citizenship', 'business', 'tax', 'other'] as const;
export type ServiceValue = (typeof serviceValues)[number];

// Treat empty strings as "not provided" for optional text fields.
const emptyToUndefined = (v: unknown) =>
  typeof v === 'string' && v.trim() === '' ? undefined : v;

// Only phone is required. Name, email, service, message are all optional.
// GDPR Art.6(1)(a) consent is required (cannot send a lead without it).
export const contactSchema = z.object({
  name: z.preprocess(
    emptyToUndefined,
    z.string().trim().min(2).optional()
  ),
  email: z.preprocess(emptyToUndefined, z.string().email().optional()),
  phone: z
    .string()
    .trim()
    .min(6)
    .regex(/^[+\d\s()\-]{6,24}$/),
  service: z.preprocess(
    emptyToUndefined,
    z.enum(serviceValues).optional()
  ),
  message: z.preprocess(
    emptyToUndefined,
    z.string().trim().max(2000).optional()
  ),
  // HTML checkbox sends 'on' when checked, missing otherwise.
  consent: z.literal('on', {
    errorMap: () => ({ message: 'consent_required' })
  }),
  locale: z.enum(['ru', 'pl', 'en', 'tr', 'uk']).optional(),
  // Honeypot. Deliberately NOT constrained to an empty string: a `.max(0)` here
  // fails the whole parse, so the filled-in case never reaches the "pretend it
  // worked" branch in the action — it surfaces as a field error nobody renders
  // and the form just silently refuses to submit.
  hp: z.string().optional()
});

export type ContactInput = z.infer<typeof contactSchema>;

// Public testimonial submission. Lighter shape than contactSchema: no phone
// needed, but text + rating are required to be useful.
export const reviewSchema = z.object({
  name: z.string().trim().min(2).max(80),
  rating: z.coerce.number().int().min(1).max(5),
  text: z.string().trim().min(2).max(2000),
  consent: z.literal('on', {
    errorMap: () => ({ message: 'consent_required' })
  }),
  locale: z.enum(['ru', 'pl', 'en', 'tr', 'uk']).optional(),
  hp: z.string().optional()
});

export type ReviewInput = z.infer<typeof reviewSchema>;
