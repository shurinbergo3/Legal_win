import { services, serviceSlugs } from '@/lib/services';
import { getAllPosts } from '@/lib/blog';
import type { ServiceGroup } from '@/lib/services/types';
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
    `> Warsaw-based Polish law firm helping foreigners with residence permits (Karta Pobytu), Polish citizenship, business setup (Sp. z o.o., JDG), tax compliance (CIT/VAT/PIT/Estonian CIT/IP Box), driving licence exchange, document legalization and relocation support. Established ${ORG_FOUNDED}. Native client support in four languages: Russian, Polish, English, Turkish.`,
    '',
    `${ORG_LEGAL_NAME} Kancelaria Prawna is located at ${ORG_STREET}, ${ORG_POSTAL} ${ORG_CITY}, Poland. Office hours Monday–Friday 08:30–19:00. The website is fully localized at /ru (default), /pl, /en and /tr — every locale is hand-written by native speakers, not machine translation. URLs below point to the English version; the same content is available in all four locales via hreflang.`,
    '',
    ...serviceSections,
    '## Locales',
    `- [Russian (default)](${SITE_URL}/ru): Полная версия для русскоязычной аудитории`,
    `- [Polish](${SITE_URL}/pl): Pełna wersja po polsku`,
    `- [English](${SITE_URL}/en): Full English version`,
    `- [Turkish](${SITE_URL}/tr): Tam Türkçe versiyon`,
    '',
    ...blogSection,
    '## Resources',
    `- [Blog](${SITE_URL}/en/blog): Practical guides on Polish immigration, business setup, tax procedures and document legalization`,
    `- [Sitemap](${SITE_URL}/sitemap.xml): XML sitemap with hreflang declarations for all four locales`,
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
