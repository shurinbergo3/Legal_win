export type ServiceLocale = 'ru' | 'pl' | 'en';

export type ServiceGroup =
  | 'immigration'
  | 'documents'
  | 'business'
  | 'realestate'
  | 'relocation';

export type Fact = {
  label: string;
  value: string;
  note?: string;
};

export type Step = {
  title: string;
  desc: string;
  duration?: string;
};

export type PricingItem = {
  label: string;
  value: string;
  note?: string;
};

export type Ground = {
  title: string;
  desc: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ServiceContent = {
  slug: string;
  group: ServiceGroup;
  icon: 'fingerprint' | 'shield' | 'scale' | 'home' | 'id-card' | 'gavel' | 'landmark';
  badge?: string;
  title: string;
  subtitle: string;
  lead: string;
  facts: Fact[];
  grounds?: { title: string; subtitle?: string; items: Ground[] };
  timeline?: { title: string; subtitle?: string; steps: Step[] };
  documents?: { title: string; subtitle?: string; items: string[] };
  pricing?: { title: string; subtitle?: string; items: PricingItem[]; note?: string };
  legalBase?: { title: string; items: string[] };
  faq: FaqItem[];
  related: string[];
  ctaTitle: string;
  ctaSubtitle: string;
};

export type ServiceEntry = Record<ServiceLocale, ServiceContent>;
