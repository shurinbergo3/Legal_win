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
  hp: z.string().max(0).optional()
});

export type ContactInput = z.infer<typeof contactSchema>;

// Public testimonial submission. Lighter shape than contactSchema: no phone
// needed, but text + rating are required to be useful.
export const reviewSchema = z.object({
  name: z.string().trim().min(2).max(80),
  role: z.preprocess(
    emptyToUndefined,
    z.string().trim().max(120).optional()
  ),
  rating: z.coerce.number().int().min(1).max(5),
  text: z.string().trim().min(20).max(2000),
  consent: z.literal('on', {
    errorMap: () => ({ message: 'consent_required' })
  }),
  locale: z.enum(['ru', 'pl', 'en', 'tr', 'uk']).optional(),
  hp: z.string().max(0).optional()
});

export type ReviewInput = z.infer<typeof reviewSchema>;
