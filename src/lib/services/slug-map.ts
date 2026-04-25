import { serviceSlugs } from './index';

const nameBySlug: Record<string, string[]> = {
  'karta-pobytu': [
    'Karta Czasowego Pobytu (ВНЖ)',
    'Karta Czasowego Pobytu',
    'Temporary residence (TRC)'
  ],
  'karta-stalego-pobytu': [
    'Karta Stałego Pobytu (ПМЖ)',
    'Karta Stałego Pobytu',
    'Permanent residence (PR)'
  ],
  'obywatelstwo': [
    'Гражданство Польши',
    'Obywatelstwo Polskie',
    'Polish citizenship'
  ],
  'ochrona-miedzynarodowa': [
    'Международная защита',
    'Ochrona międzynarodowa',
    'International protection'
  ],
  'apelacje': ['Апелляции', 'Apelacje', 'Appeals'],
  'kod-95': [
    'Kod 95 (квалификация водителя)',
    'Kod 95 (kwalifikacja kierowcy)',
    'Code 95 (driver CPC)'
  ]
};

const nameToSlugIndex = new Map<string, string>();
for (const slug of serviceSlugs) {
  for (const name of nameBySlug[slug] ?? []) {
    nameToSlugIndex.set(name.toLowerCase(), slug);
  }
}

export function slugFromName(name: string): string | null {
  return nameToSlugIndex.get(name.toLowerCase()) ?? null;
}
