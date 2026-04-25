import { z } from 'zod';

export const serviceValues = ['trc', 'driver', 'citizenship', 'business', 'tax', 'other'] as const;
export type ServiceValue = (typeof serviceValues)[number];

// Treat empty strings as "not provided" for optional text fields.
const emptyToUndefined = (v: unknown) =>
  typeof v === 'string' && v.trim() === '' ? undefined : v;

export const contactSchema = z.object({
  name: z.string().trim().min(2),
  // Optional — empty is fine; if present, must be a valid email.
  email: z.preprocess(emptyToUndefined, z.string().email().optional()),
  phone: z
    .string()
    .trim()
    .min(6)
    .regex(/^[+\d\s()\-]{6,24}$/),
  service: z.enum(serviceValues),
  // Optional — empty is fine; max 2000 chars if present.
  message: z.preprocess(
    emptyToUndefined,
    z.string().trim().max(2000).optional()
  ),
  locale: z.enum(['ru', 'pl', 'en']).optional(),
  hp: z.string().max(0).optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
