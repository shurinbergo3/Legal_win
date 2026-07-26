import { services } from './services';
import type { ServiceContent, ServiceGroup } from './services/types';

/**
 * Compact text rendering of the whole service catalogue for the chatbot's
 * system prompt.
 *
 * Generated from `src/lib/services/*` rather than hand-written: the catalogue
 * grows regularly and a hand-maintained copy drifts out of date silently —
 * which is how the bot ends up inventing prices for services it never heard of.
 *
 * Server-only (the chat route is a Node runtime handler), so the size of the
 * services barrel does not affect the client bundle here.
 */

const GROUP_LABEL: Record<ServiceGroup, string> = {
  immigration: 'ИММИГРАЦИЯ',
  documents: 'ДОКУМЕНТЫ',
  business: 'БИЗНЕС',
  realestate: 'НЕДВИЖИМОСТЬ',
  relocation: 'РЕЛОКАЦИЯ',
  auto: 'АВТО И ВОДИТЕЛИ'
};

const GROUP_ORDER: ServiceGroup[] = [
  'immigration',
  'documents',
  'business',
  'realestate',
  'relocation',
  'auto'
];

function renderService(s: ServiceContent): string {
  const lines: string[] = [];
  lines.push(`### ${s.title} - ${s.subtitle}`);
  lines.push(`URL: /ru/uslugi/${s.slug}`);
  lines.push(s.lead.replace(/\s+/g, ' ').trim());

  const facts = s.facts
    .map((f) => `${f.label}: ${f.value}${f.note ? ` (${f.note})` : ''}`)
    .join('; ');
  if (facts) lines.push(`Ключевые цифры: ${facts}`);

  if (s.pricing?.items.length) {
    const price = s.pricing.items
      .map((p) => `${p.label} - ${p.value}${p.note ? ` (${p.note})` : ''}`)
      .join('; ');
    lines.push(`Наши цены: ${price}${s.pricing.note ? ` | ${s.pricing.note}` : ''}`);
  }

  if (s.grounds?.items.length) {
    lines.push(`Основания: ${s.grounds.items.map((g) => g.title).join(', ')}`);
  }

  if (s.timeline?.steps.length) {
    const steps = s.timeline.steps
      .map((st) => `${st.title}${st.duration ? ` (${st.duration})` : ''}`)
      .join(' → ');
    lines.push(`Этапы: ${steps}`);
  }

  if (s.documents?.items.length) {
    lines.push(`Документы: ${s.documents.items.join('; ')}`);
  }

  // Two FAQ entries per service keep the prompt informative without turning it
  // into a 100k-token wall — the rest lives on the service page itself.
  for (const f of s.faq.slice(0, 2)) {
    lines.push(`Q: ${f.q}\nA: ${f.a.replace(/\s+/g, ' ').trim()}`);
  }

  return lines.join('\n');
}

function build(): string {
  const byGroup = new Map<ServiceGroup, ServiceContent[]>();
  for (const entry of Object.values(services)) {
    const s = entry.ru;
    if (!s) continue;
    if (!byGroup.has(s.group)) byGroup.set(s.group, []);
    byGroup.get(s.group)!.push(s);
  }

  const out: string[] = [
    'ПОЛНЫЙ КАТАЛОГ УСЛУГ LEGALWIN',
    'Это единственный источник истины по услугам, ценам и срокам. Услуги, которой здесь нет, мы не оказываем - в таком случае скажи, что уточнишь у специалиста.',
    'Все страницы услуг доступны на 5 языках: /ru/, /pl/, /en/, /tr/, /uk/ + тот же slug.'
  ];

  for (const g of GROUP_ORDER) {
    const list = byGroup.get(g);
    if (!list?.length) continue;
    out.push(`\n## ${GROUP_LABEL[g]} (${list.length})`);
    for (const s of list) out.push(renderService(s));
  }

  return out.join('\n\n');
}

export const serviceCatalogKb = build();

export const serviceIndex = Object.values(services)
  .map((e) => e.ru)
  .filter((s): s is ServiceContent => Boolean(s))
  .map((s) => `${s.title} (/uslugi/${s.slug})`)
  .join(', ');
