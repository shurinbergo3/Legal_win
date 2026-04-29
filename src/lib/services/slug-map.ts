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
  ],
  'pesel': ['PESEL'],
  'meldunek': ['Meldunek'],
  'akty-stanu-cywilnego': [
    'Акты гражданского состояния',
    'Akty stanu cywilnego',
    'Civil status acts',
    'Civil status records'
  ],
  'apostille': [
    'Apostille и легализация',
    'Apostille i legalizacja',
    'Apostille and legalisation',
    'Apostille & legalization'
  ],
  'wymiana-prawa-jazdy': [
    'Обмен водительских прав',
    'Wymiana prawa jazdy',
    'Driving licence exchange',
    "Driver's licence exchange"
  ],
  'zaswiadczenia-zus-us': [
    'Справки ZUS / US',
    'Zaświadczenia ZUS / US',
    'ZUS / US certificates',
    'ZUS / tax certificates'
  ],
  'zaswiadczenie-o-niekaralnosci': [
    'Справки о несудимости',
    'Zaświadczenie o niekaralności',
    'Zaświadczenia o niekaralności',
    'Criminal record certificate',
    'Criminal record checks'
  ],
  'tlumaczenia-przysiegle': [
    'Присяжные переводы',
    'Tłumaczenia przysięgłe',
    'Sworn translations'
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
