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
    'Karta Stałego Pobytu (daimi oturum kartı)',
    'Karta Stałego Pobytu (ПМП)'
  ],
  'obywatelstwo': [
    'Гражданство Польши',
    'Obywatelstwo Polskie',
    'Polish citizenship',
    'Polonya vatandaşlığı',
    'Громадянство Польщі'
  ],
  'karta-polaka': [
    'Karta Polaka'
  ],
  'ochrona-miedzynarodowa': [
    'Международная защита',
    'Ochrona międzynarodowa',
    'International protection',
    'Uluslararası koruma',
    'Міжнародний захист'
  ],
  'apelacje': ['Апелляции', 'Apelacje', 'Appeals', 'İtirazlar', 'Апеляції'],
  'kod-95': [
    'Kod 95 (квалификация водителя)',
    'Kod 95 (kwalifikacja kierowcy)',
    'Code 95 (driver CPC)',
    'Kod 95 (sürücü mesleki yeterliliği)',
    'Kod 95 (кваліфікація водія)'
  ],
  'pesel': ['PESEL'],
  'meldunek': ['Meldunek'],
  'akty-stanu-cywilnego': [
    'Акты гражданского состояния',
    'Akty stanu cywilnego',
    'Civil status acts',
    'Civil status records',
    'Nüfus kayıt belgeleri',
    'Акти цивільного стану'
  ],
  'apostille': [
    'Apostille и легализация',
    'Apostille i legalizacja',
    'Apostille and legalisation',
    'Apostille & legalization',
    'Apostille ve resmi onay',
    'Apostille та легалізація'
  ],
  'wymiana-prawa-jazdy': [
    'Обмен водительских прав',
    'Wymiana prawa jazdy',
    'Driving licence exchange',
    "Driver's licence exchange",
    'Ehliyet değişimi',
    'Обмін водійських прав'
  ],
  'zaswiadczenia-zus-us': [
    'Справки ZUS / US',
    'Zaświadczenia ZUS / US',
    'ZUS / US certificates',
    'ZUS / tax certificates',
    'ZUS / US belgeleri',
    'Довідки ZUS / US'
  ],
  'zaswiadczenie-o-niekaralnosci': [
    'Справки о несудимости',
    'Zaświadczenie o niekaralności',
    'Zaświadczenia o niekaralności',
    'Criminal record certificate',
    'Criminal record checks',
    'Adli sicil belgeleri',
    'Довідки про несудимість'
  ],
  'tlumaczenia-przysiegle': [
    'Присяжные переводы',
    'Tłumaczenia przysięgłe',
    'Sworn translations',
    'Yeminli tercüme',
    'Присяжні переклади'
  ],
  'rejestracja-sp-z-oo': [
    'Регистрация Sp. z o.o.',
    'Rejestracja Sp. z o.o.',
    'Sp. z o.o. registration',
    'Sp. z o.o. (limited şirket) kuruluşu',
    'Реєстрація Sp. z o.o.'
  ],
  'gotowe-firmy': [
    'Готовые компании',
    'Gotowe spółki',
    'Ready-made companies',
    'Hazır şirketler',
    'Готові компанії'
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
    'Yabancı şirket temsilcilikleri',
    'Представництва'
  ],
  'podatki-ksiegowosc': [
    'Налоги и бухгалтерия',
    'Podatki i księgowość',
    'Tax & accounting',
    'Vergi ve muhasebe',
    'Податки та бухгалтерія'
  ],
  'likwidacja-sprzedaz': [
    'Ликвидация и продажа',
    'Likwidacja i sprzedaż',
    'Wind-down & M&A',
    'Tasfiye ve satış',
    'Ліквідація та продаж'
  ],
  'mswia-zezwolenie': [
    'Разрешение MSWiA',
    'Zezwolenie MSWiA',
    'MSWiA permit',
    'MSWiA (İçişleri Bakanlığı) izni',
    'Дозвіл MSWiA'
  ],
  'due-diligence-nieruchomosci': [
    'Проверка чистоты сделки',
    'Due diligence transakcji',
    'Transaction due diligence',
    'Tapu ve sözleşme due diligence',
    'Перевірка чистоти угоди'
  ],
  'notariusz-asysta': [
    'Сопровождение у нотариуса',
    'Asysta u notariusza',
    'Notary assistance',
    'Noter işlemlerinde eşlik',
    'Супровід у нотаріуса'
  ],
  'najem-komercyjny': [
    'Аренда коммерческих помещений',
    'Najem komercyjny',
    'Commercial leases',
    'Ticari kira',
    'Оренда комерційних приміщень'
  ],
  'zaproszenia': [
    'Электронные приглашения',
    'Zaproszenia elektroniczne',
    'Electronic invitations',
    'Elektronik davetiye',
    'Електронні запрошення'
  ],
  'odbior-z-lotniska': [
    'Встреча в аэропорту',
    'Odbiór z lotniska',
    'Airport pickup',
    'Havalimanından karşılama',
    'Зустріч в аеропорту'
  ],
  'wyszukiwanie-mieszkania': [
    'Поиск жилья',
    'Wyszukiwanie mieszkania',
    'Housing search',
    'Konut arama',
    'Пошук житла'
  ],
  'tlumacz-na-wizyty': [
    'Переводчик для визитов',
    'Tłumacz na wizyty',
    'Translator for visits',
    'Ofis ziyaretlerinde tercüman',
    'Перекладач на візити'
  ],
  'pomoc-w-zatrudnieniu': [
    'Помощь с трудоустройством',
    'Pomoc w zatrudnieniu',
    'Employment help',
    'İşe yerleşmede destek',
    'Допомога з працевлаштуванням'
  ],
  'zapis-dzieci-do-szkoly': [
    'Прописка детей в школу',
    'Zapis dzieci do szkoły',
    'School enrolment',
    'Çocukların okula kaydı',
    'Зарахування дітей до школи'
  ],
  'rejestracja-pojazdu': [
    'Регистрация и переоформление авто',
    'Rejestracja i przerejestrowanie auta',
    'Vehicle registration',
    'Araç tescili ve devri',
    'Реєстрація та переоформлення авто'
  ],
  'ubezpieczenie-oc-ac': [
    'Автостраховка OC / AC',
    'Ubezpieczenie OC / AC',
    'Car insurance OC / AC',
    'Araç sigortası OC / AC',
    'Автострахування OC / AC'
  ],
  'przeglad-techniczny': [
    'Техосмотр (przegląd techniczny)',
    'Przegląd techniczny',
    'Technical inspection',
    'Teknik muayene',
    'Техогляд (przegląd techniczny)'
  ],
  'praca-kierowca-taxi': [
    'Работа в такси (Bolt, Uber)',
    'Praca kierowca taxi (Bolt, Uber)',
    'Taxi driver jobs (Bolt, Uber)',
    'Taksi şoförü işi (Bolt, Uber)',
    'Робота в таксі (Bolt, Uber)'
  ],
  'praca-kierowca-ciezarowka': [
    'Работа дальнобойщиком (C+E)',
    'Praca kierowca C+E (międzynarodowy)',
    'Truck driver jobs (C+E)',
    'Tır şoförü işi (C+E)',
    'Робота далекобійником (C+E)'
  ],
  'karta-kierowcy': [
    'Карта водителя (тахограф)',
    'Karta kierowcy (tachograf)',
    'Driver card (tachograph)',
    'Sürücü kartı (takograf)',
    'Картка водія (тахограф)'
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
