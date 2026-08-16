import { services, serviceSlugs } from '@/lib/services';
import { getAllPosts } from '@/lib/blog';
import { INDEX_LOCALES } from '@/i18n/routing';
import type { ServiceGroup } from '@/lib/services/types';
import type { SeoLocale } from '@/lib/seo';
import {
  ORG_CITY,
  ORG_EMAIL,
  ORG_FOUNDED,
  ORG_LEGAL_NAME,
  ORG_PHONE,
  ORG_POSTAL,
  ORG_STREET,
  SITE_URL
} from '@/lib/seo';

export const dynamic = 'force-static';

const GROUP_LABEL: Record<ServiceGroup, string> = {
  immigration: 'Immigration & Citizenship',
  business: 'Business & Tax',
  documents: 'Documents & Licences',
  realestate: 'Real Estate',
  relocation: 'Relocation Support',
  auto: 'Vehicles & Transport'
};

const GROUP_ORDER: ServiceGroup[] = [
  'immigration',
  'business',
  'documents',
  'realestate',
  'relocation',
  'auto'
];

const RECENT_POSTS_LIMIT = 12;

// Driven off INDEX_LOCALES so adding a locale can't leave the prose claiming
// "four languages" while /uk quietly ships (which is exactly what happened).
const LOCALE_LINE: Record<SeoLocale, { label: string; blurb: string }> = {
  ru: { label: 'Russian (default)', blurb: 'Полная версия для русскоязычной аудитории' },
  uk: { label: 'Ukrainian', blurb: 'Повна версія українською' },
  pl: { label: 'Polish', blurb: 'Pełna wersja po polsku' },
  en: { label: 'English', blurb: 'Full English version' },
  tr: { label: 'Turkish', blurb: 'Tam Türkçe versiyon' }
};

const LOCALE_ORDER: SeoLocale[] = ['ru', 'uk', 'pl', 'en', 'tr'];
const activeLocales = LOCALE_ORDER.filter((l) =>
  (INDEX_LOCALES as readonly string[]).includes(l)
);
const LOCALE_COUNT_WORD =
  ['zero', 'one', 'two', 'three', 'four', 'five', 'six'][activeLocales.length] ??
  String(activeLocales.length);
const LOCALE_PATHS = activeLocales.map((l) => `/${l}`).join(', ');
const LOCALE_NAMES = activeLocales
  .map((l) => LOCALE_LINE[l].label.replace(' (default)', ''))
  .join(', ');

export function GET() {
  const grouped = new Map<ServiceGroup, string[]>();
  for (const slug of serviceSlugs) {
    const en = services[slug]?.en;
    if (!en) continue;
    const list = grouped.get(en.group) ?? [];
    list.push(slug);
    grouped.set(en.group, list);
  }

  const serviceSections = GROUP_ORDER.flatMap((group) => {
    const slugs = grouped.get(group);
    if (!slugs?.length) return [];
    const label = GROUP_LABEL[group];
    const lines = slugs.map((slug) => {
      const en = services[slug]!.en!;
      return `- [${en.title}](${SITE_URL}/en/uslugi/${slug}): ${en.subtitle}`;
    });
    return [`## ${label}`, ...lines, ''];
  });

  const recentPosts = getAllPosts('en').slice(0, RECENT_POSTS_LIMIT);
  const blogSection = recentPosts.length
    ? [
        '## Recent articles',
        ...recentPosts.map(
          (p) => `- [${p.title}](${SITE_URL}/en/blog/${p.slug}): ${p.description}`
        ),
        ''
      ]
    : [];

  const body = [
    `# ${ORG_LEGAL_NAME}`,
    '',
    `> Warsaw-based Polish law firm helping foreigners with residence permits (Karta Pobytu), Polish citizenship, business setup (Sp. z o.o., JDG), tax compliance (CIT/VAT/PIT/Estonian CIT/IP Box), driving licence exchange, document legalization and relocation support. Established ${ORG_FOUNDED}. Native client support in ${LOCALE_COUNT_WORD} languages: ${LOCALE_NAMES}.`,
    '',
    `${ORG_LEGAL_NAME} Kancelaria Prawna is located at ${ORG_STREET}, ${ORG_POSTAL} ${ORG_CITY}, Poland. Office hours Monday–Friday 08:30–19:00. The website is localized at ${LOCALE_PATHS} (/ru is the default) — every locale is hand-written by native speakers, not machine translation. URLs below point to the English version; where a page exists in another locale it is declared via hreflang.`,
    '',
    ...serviceSections,
    '## Locales',
    ...activeLocales.map(
      (l) => `- [${LOCALE_LINE[l].label}](${SITE_URL}/${l}): ${LOCALE_LINE[l].blurb}`
    ),
    '',
    ...blogSection,
    '## Resources',
    `- [Blog](${SITE_URL}/en/blog): Practical guides on Polish immigration, business setup, tax procedures and document legalization`,
    `- [Sitemap](${SITE_URL}/sitemap.xml): XML sitemap with per-page hreflang declarations`,
    `- [Privacy Policy](${SITE_URL}/en/polityka-prywatnosci)`,
    `- [Cookie Policy](${SITE_URL}/en/polityka-cookies)`,
    '',
    '## Contact',
    `- Office: ${ORG_STREET}, ${ORG_POSTAL} ${ORG_CITY}, Poland`,
    `- Phone: ${ORG_PHONE}`,
    `- Email: ${ORG_EMAIL}`,
    '- Hours: Monday–Friday 08:30–19:00 (Europe/Warsaw)',
    '- Spoken languages on intake: Polish, Russian, Ukrainian, English; Turkish via written intake',
    ''
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
