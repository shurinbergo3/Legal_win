import { z } from 'zod';

export const serviceValues = ['trc', 'citizenship', 'business', 'tax', 'other'] as const;
export type ServiceValue = (typeof serviceValues)[number];

export const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .min(6)
    .regex(/^[+\d\s()\-]{6,24}$/),
  service: z.enum(serviceValues),
  message: z.string().trim().min(10).max(2000),
  locale: z.enum(['ru', 'pl', 'en']).optional(),
  hp: z.string().max(0).optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
