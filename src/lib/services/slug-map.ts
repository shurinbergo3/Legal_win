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
  'karta-polaka': [
    'Karta Polaka'
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
  ],
  'rejestracja-sp-z-oo': [
    'Регистрация Sp. z o.o.',
    'Rejestracja Sp. z o.o.',
    'Sp. z o.o. registration'
  ],
  'gotowe-firmy': [
    'Готовые компании',
    'Gotowe spółki',
    'Ready-made companies'
  ],
  'jdg': [
    'Jednoosobowa działalność gospodarcza',
    'Sole proprietorship'
  ],
  'przedstawicielstwa': [
    'Представительства',
    'Przedstawicielstwa',
    'Branch offices'
  ],
  'podatki-ksiegowosc': [
    'Налоги и бухгалтерия',
    'Podatki i księgowość',
    'Tax & accounting'
  ],
  'likwidacja-sprzedaz': [
    'Ликвидация и продажа',
    'Likwidacja i sprzedaż',
    'Wind-down & M&A'
  ],
  'mswia-zezwolenie': [
    'Разрешение MSWiA',
    'Zezwolenie MSWiA',
    'MSWiA permit'
  ],
  'due-diligence-nieruchomosci': [
    'Проверка чистоты сделки',
    'Due diligence transakcji',
    'Transaction due diligence'
  ],
  'notariusz-asysta': [
    'Сопровождение у нотариуса',
    'Asysta u notariusza',
    'Notary assistance'
  ],
  'najem-komercyjny': [
    'Аренда коммерческих помещений',
    'Najem komercyjny',
    'Commercial leases'
  ],
  'zaproszenia': [
    'Электронные приглашения',
    'Zaproszenia elektroniczne',
    'Electronic invitations'
  ],
  'odbior-z-lotniska': [
    'Встреча в аэропорту',
    'Odbiór z lotniska',
    'Airport pickup'
  ],
  'wyszukiwanie-mieszkania': [
    'Поиск жилья',
    'Wyszukiwanie mieszkania',
    'Housing search'
  ],
  'tlumacz-na-wizyty': [
    'Переводчик для визитов',
    'Tłumacz na wizyty',
    'Translator for visits'
  ],
  'pomoc-w-zatrudnieniu': [
    'Помощь с трудоустройством',
    'Pomoc w zatrudnieniu',
    'Employment help'
  ],
  'zapis-dzieci-do-szkoly': [
    'Прописка детей в школу',
    'Zapis dzieci do szkoły',
    'School enrolment'
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
