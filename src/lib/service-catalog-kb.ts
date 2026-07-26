import { services } from './services';
import type { ServiceContent, ServiceGroup } from './services/types';

/**
 * Service catalogue for the chatbot.
 *
 * The whole catalogue rendered as text is ~115k characters (~40k tokens). Sending
 * that as part of the system prompt on every single message is what made the chat
 * expensive, so the prompt now carries only the index (~1k tokens) and the bot
 * pulls the details of one service at a time through the `getService` tool.
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

const catalogue: ServiceContent[] = Object.values(services)
  .map((e) => e.ru)
  .filter((s): s is ServiceContent => Boolean(s));

const bySlug = new Map(catalogue.map((s) => [s.slug, s]));

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

  // Two FAQ entries per service keep the answer informative without dumping the
  // whole service page into the context — the rest lives on the page itself.
  for (const f of s.faq.slice(0, 2)) {
    lines.push(`Q: ${f.q}\nA: ${f.a.replace(/\s+/g, ' ').trim()}`);
  }

  if (s.related.length) {
    lines.push(`Смежные услуги (slug): ${s.related.join(', ')}`);
  }

  return lines.join('\n');
}

const rendered = new Map<string, string>();

/** Full text of one service — prices, deadlines, documents, stages. */
export function getServiceDetails(slug: string): string | null {
  const service = bySlug.get(slug);
  if (!service) return null;
  let text = rendered.get(slug);
  if (!text) {
    text = renderService(service);
    rendered.set(slug, text);
  }
  return text;
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

// Searchable haystack per service: the model usually picks the slug straight
// from the index, this is the fallback for when it guesses a slug that does not
// exist or passes a free-form phrase instead.
const haystacks = catalogue.map((s) => ({
  slug: s.slug,
  title: s.title,
  text: normalize(
    [s.slug.replace(/-/g, ' '), s.title, s.subtitle, s.lead, ...s.faq.map((f) => f.q)].join(' ')
  )
}));

export function searchServices(query: string, limit = 4): Array<{ slug: string; title: string }> {
  const tokens = normalize(query)
    .split(' ')
    .filter((t) => t.length > 2);
  if (!tokens.length) return [];

  return haystacks
    .map((h) => ({
      slug: h.slug,
      title: h.title,
      score: tokens.reduce((acc, t) => (h.text.includes(t) ? acc + 1 : acc), 0)
    }))
    .filter((h) => h.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ slug, title }) => ({ slug, title }));
}

/**
 * Compact index that does go into the system prompt: names and slugs only, no
 * numbers. Everything the bot needs to decide which service to look up.
 */
export const serviceIndex = (() => {
  const byGroup = new Map<ServiceGroup, ServiceContent[]>();
  for (const s of catalogue) {
    if (!byGroup.has(s.group)) byGroup.set(s.group, []);
    byGroup.get(s.group)!.push(s);
  }

  const out: string[] = [];
  for (const g of GROUP_ORDER) {
    const list = byGroup.get(g);
    if (!list?.length) continue;
    out.push(`## ${GROUP_LABEL[g]}`);
    for (const s of list) out.push(`- ${s.slug} | ${s.title}: ${s.subtitle}`);
  }
  return out.join('\n');
})();

export const serviceCount = catalogue.length;
