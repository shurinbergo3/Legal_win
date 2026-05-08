import { serviceSlugs } from './index';

const nameBySlug: Record<string, string[]> = {
  'karta-pobytu': [
    'Karta Czasowego Pobytu (ВНЖ)',
    'Karta Czasowego Pobytu',
    'Temporary residence (TRC)',
    'Karta Czasowego Pobytu (geçici oturum kartı)'
  ],
  'karta-stalego-pobytu': [
    'Karta Stałego Pobytu (ПМЖ)',
    'Karta Stałego Pobytu',
    'Permanent residence (PR)',
    'Karta Stałego Pobytu (daimi oturum kartı)'
  ],
  'obywatelstwo': [
    'Гражданство Польши',
    'Obywatelstwo Polskie',
    'Polish citizenship',
    'Polonya vatandaşlığı'
  ],
  'karta-polaka': [
    'Karta Polaka'
  ],
  'ochrona-miedzynarodowa': [
    'Международная защита',
    'Ochrona międzynarodowa',
    'International protection',
    'Uluslararası koruma'
  ],
  'apelacje': ['Апелляции', 'Apelacje', 'Appeals', 'İtirazlar'],
  'kod-95': [
    'Kod 95 (квалификация водителя)',
    'Kod 95 (kwalifikacja kierowcy)',
    'Code 95 (driver CPC)',
    'Kod 95 (sürücü mesleki yeterliliği)'
  ],
  'pesel': ['PESEL'],
  'meldunek': ['Meldunek'],
  'akty-stanu-cywilnego': [
    'Акты гражданского состояния',
    'Akty stanu cywilnego',
    'Civil status acts',
    'Civil status records',
    'Nüfus kayıt belgeleri'
  ],
  'apostille': [
    'Apostille и легализация',
    'Apostille i legalizacja',
    'Apostille and legalisation',
    'Apostille & legalization',
    'Apostille ve resmi onay'
  ],
  'wymiana-prawa-jazdy': [
    'Обмен водительских прав',
    'Wymiana prawa jazdy',
    'Driving licence exchange',
    "Driver's licence exchange",
    'Ehliyet değişimi'
  ],
  'zaswiadczenia-zus-us': [
    'Справки ZUS / US',
    'Zaświadczenia ZUS / US',
    'ZUS / US certificates',
    'ZUS / tax certificates',
    'ZUS / US belgeleri'
  ],
  'zaswiadczenie-o-niekaralnosci': [
    'Справки о несудимости',
    'Zaświadczenie o niekaralności',
    'Zaświadczenia o niekaralności',
    'Criminal record certificate',
    'Criminal record checks',
    'Adli sicil belgeleri'
  ],
  'tlumaczenia-przysiegle': [
    'Присяжные переводы',
    'Tłumaczenia przysięgłe',
    'Sworn translations',
    'Yeminli tercüme'
  ],
  'rejestracja-sp-z-oo': [
    'Регистрация Sp. z o.o.',
    'Rejestracja Sp. z o.o.',
    'Sp. z o.o. registration',
    'Sp. z o.o. (limited şirket) kuruluşu'
  ],
  'gotowe-firmy': [
    'Готовые компании',
    'Gotowe spółki',
    'Ready-made companies',
    'Hazır şirketler'
  ],
  'jdg': [
    'Jednoosobowa działalność gospodarcza',
    'Sole proprietorship',
    'Jednoosobowa działalność gospodarcza (JDG, şahıs şirketi)'
  ],
  'przedstawicielstwa': [
    'Представительства',
    'Przedstawicielstwa',
    'Branch offices',
    'Yabancı şirket temsilcilikleri'
  ],
  'podatki-ksiegowosc': [
    'Налоги и бухгалтерия',
    'Podatki i księgowość',
    'Tax & accounting',
    'Vergi ve muhasebe'
  ],
  'likwidacja-sprzedaz': [
    'Ликвидация и продажа',
    'Likwidacja i sprzedaż',
    'Wind-down & M&A',
    'Tasfiye ve satış'
  ],
  'mswia-zezwolenie': [
    'Разрешение MSWiA',
    'Zezwolenie MSWiA',
    'MSWiA permit',
    'MSWiA (İçişleri Bakanlığı) izni'
  ],
  'due-diligence-nieruchomosci': [
    'Проверка чистоты сделки',
    'Due diligence transakcji',
    'Transaction due diligence',
    'Tapu ve sözleşme due diligence'
  ],
  'notariusz-asysta': [
    'Сопровождение у нотариуса',
    'Asysta u notariusza',
    'Notary assistance',
    'Noter işlemlerinde eşlik'
  ],
  'najem-komercyjny': [
    'Аренда коммерческих помещений',
    'Najem komercyjny',
    'Commercial leases',
    'Ticari kira'
  ],
  'zaproszenia': [
    'Электронные приглашения',
    'Zaproszenia elektroniczne',
    'Electronic invitations',
    'Elektronik davetiye'
  ],
  'odbior-z-lotniska': [
    'Встреча в аэропорту',
    'Odbiór z lotniska',
    'Airport pickup',
    'Havalimanından karşılama'
  ],
  'wyszukiwanie-mieszkania': [
    'Поиск жилья',
    'Wyszukiwanie mieszkania',
    'Housing search',
    'Konut arama'
  ],
  'tlumacz-na-wizyty': [
    'Переводчик для визитов',
    'Tłumacz na wizyty',
    'Translator for visits',
    'Ofis ziyaretlerinde tercüman'
  ],
  'pomoc-w-zatrudnieniu': [
    'Помощь с трудоустройством',
    'Pomoc w zatrudnieniu',
    'Employment help',
    'İşe yerleşmede destek'
  ],
  'zapis-dzieci-do-szkoly': [
    'Прописка детей в школу',
    'Zapis dzieci do szkoły',
    'School enrolment',
    'Çocukların okula kaydı'
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
