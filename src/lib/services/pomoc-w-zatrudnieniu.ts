import type { ServiceEntry } from './types';

const pomocWZatrudnieniu: ServiceEntry = {
  ru: {
    slug: 'pomoc-w-zatrudnieniu',
    group: 'relocation',
    icon: 'fingerprint',
    badge: 'Zezwolenie na pracę · Blue Card · CV PL',
    title: 'Помощь с трудоустройством',
    subtitle: 'Резюме по польским стандартам, zezwolenie na pracę',
    lead: 'Польский рынок труда требует от иностранца не только английского, но и понимания локальной специфики: формат CV, ожидания на собеседовании, правильный выбор umowy, законные основания для работы. LegalWin готовит CV под польские ATS-системы (Talent Place, Pracuj.pl), организует zezwolenie na pracę у работодателя, оформляет Blue Card для специалистов IT и инженеров, ведёт переговоры по umowie o pracę.',
    facts: [
      { label: 'Срок zezwolenia', value: '14-60 дней', note: 'wojewoda · standard' },
      { label: 'Госпошлина zezwolenia', value: '100 PLN', note: 'opłata skarbowa za każde' },
      { label: 'Минимум зарплаты', value: '4 806 PLN брутто', note: 'минимальная брутто 2026' },
      { label: 'Blue Card зарплата', value: '≥ 1,5×', note: '~10 500 PLN брутто/мес.' }
    ],
    grounds: {
      title: 'Какие услуги предоставляем',
      subtitle: 'От подготовки CV до подписания umowy - полный цикл.',
      items: [
        { title: 'CV по польским стандартам', desc: 'Адаптация под Pracuj.pl / LinkedIn / Talent Place: формат, объём, фото, GDPR-клаузула, language proficiency CEFR. Перевод на польский присяжно.' },
        { title: 'Подготовка к собеседованию', desc: 'Mock interview на польском с native speaker, типовые вопросы HR в Польше, переговоры о зарплате (рынок 2026), культурные нюансы.' },
        { title: 'Zezwolenie na pracę typ A', desc: 'Базовое - для umowy o pracę с польским работодателем. 14-30 дней через MOS. Подаём со стороны работодателя.' },
        { title: 'Zezwolenie typ B/C/D/E', desc: 'Для членов zarządu (typ B), сотрудников с oddelegowania (C), консультантов (D), услуг поверх 30 дней (E).' },
        { title: 'Oświadczenie o powierzeniu pracy', desc: 'Упрощённая процедура для UA, BY, RU, MD, GE, AM - до 24 месяцев работы. Подача в Powiatowy Urząd Pracy за 7 дней.' },
        { title: 'Blue Card UE для IT и инженеров', desc: 'Высокая зарплата (≥ 1,5× средней), umowa ≥ 1 год, высшее образование - даёт TRC на 3 года + право на переезд по ЕС после 18 мес.' },
        { title: 'Трудовая umowa - ревизия', desc: 'Анализ предложенной umowy: kar umowny, klauzule konkurencji, okres wypowiedzenia, niedyskryminacja, premia, urlop.' },
        { title: 'JDG / B2B как альтернатива', desc: 'Открытие самозанятости для разработчиков и консультантов: B2B-контракты с зарубежными клиентами, IP Box (5% налог), без zezwolenia.' }
      ]
    },
    timeline: {
      title: 'Полный цикл от CV до umowy',
      subtitle: 'Стандартное время от первой консультации до подписания - 2-8 недель.',
      steps: [
        { title: 'Консультация', duration: '30 мин', desc: 'Оцениваем ваш профиль, цели, бюджет, наличие zezwolenia. Предлагаем оптимальный путь: трудоустройство, B2B, Blue Card, JDG.' },
        { title: 'CV и LinkedIn', duration: '3-5 дней', desc: 'Готовим CV под польские ATS. Параллельно - оптимизация LinkedIn-профиля под рекрутеров в Польше.' },
        { title: 'Поиск вакансий', duration: '7-21 день', desc: 'Помогаем с откликами на Pracuj.pl, NoFluffJobs (IT), JustJoinIT, Solid.Jobs. Direct-outreach к рекрутерам.' },
        { title: 'Собеседования', duration: '2-4 недели', desc: 'Mock interviews, координация графиков, follow-up emails. Сопровождение на сложных финальных встречах.' },
        { title: 'Оффер и переговоры', duration: '3-7 дней', desc: 'Анализ предложения, рекомендации по торгу (зарплата, бонусы, удалёнка), правка трудовой umowy.' },
        { title: 'Zezwolenie na pracę', duration: '14-60 дней', desc: 'Параллельно с оффером - подаём wniosek работодателя на zezwolenie typ A (или Blue Card). Сопровождение до выдачи decyzji.' },
        { title: 'Подписание umowy', duration: '1 день', desc: 'Финальная вычитка контракта, согласование с работодателем, подписание с witnessem или notarialnie.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Базовый пакет - точный список после консультации.',
      items: [
        'Паспорт + karta pobytu (или другой документ пребывания)',
        'Все дипломы, сертификаты, certyfikaty językowe',
        'Текущее CV (на любом языке)',
        'Трудовой опыт за 5-10 лет с описанием ролей и проектов',
        'LinkedIn-профиль (или согласие создать его)',
        'Желаемая зарплата (нетто или брутто)',
        'Локация: только Warszawa, удалёнка ОК, готовность переезда',
        'Документы для zezwolenia: PESEL, meldunek, подтверждения квалификаций'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированная цена за пакет. Гонорар привязан к этапам.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · оценка профиля' },
        { label: 'CV + LinkedIn оптимизация', value: 'от 600 PLN', note: 'Под польский рынок · присяжный перевод' },
        { label: 'Поиск работы под ключ', value: 'от 2 500 PLN', note: 'CV + 5 откликов + интервью + переговоры' },
        { label: 'Zezwolenie na pracę', value: 'от 1 500 PLN', note: 'Подача со стороны работодателя · 14-60 дней' }
      ],
      note: 'Указаны гонорары LegalWin. Госпошлина zezwolenia (100 PLN), oświadczenia (90 PLN), Blue Card MSZ-проверка квалификаций (100 PLN), присяжный перевод дипломов (~80 PLN/документ) - отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 20 kwietnia 2004 r. o promocji zatrudnienia i instytucjach rynku pracy',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (zezwolenie na pobyt z pracy)',
        'Rozporządzenie MRPiPS w sprawie wydawania zezwoleń na pracę',
        'Dyrektywa 2009/50/WE - Niebieska Karta UE',
        'Kodeks pracy (umowa o pracę, urlop, wypowiedzenie)'
      ]
    },
    faq: [
      { q: 'Какая средняя зарплата для иностранца в IT в Польше 2026?', a: 'Junior разработчик - 8 000-12 000 PLN brutto/мес. Mid (3-5 лет) - 13 000-20 000 PLN. Senior - 20 000-32 000 PLN. Lead / Architect - 30 000-45 000 PLN. Это для umowy o pracę (трудового договора). На B2B (JDG - индивидуальное предпринимательство) - на 30-40% выше при той же net-выплате (за счёт IP Box и низких налогов).' },
      { q: 'Что выгоднее - umowa o pracę или B2B?', a: 'Зависит от зарплаты и опыта. До 12 000 PLN brutto - umowa o pracę (трудовой договор: ZUS-льготы, отпуска, права). Свыше 15 000 PLN - JDG с IP Box даёт 5% налог на 70%+ дохода. Считаем под ваш конкретный кейс на консультации.' },
      { q: 'Сколько ждать zezwolenie na pracę в 2026?', a: 'Zezwolenie na pracę (разрешение на работу) - типовой срок 14-30 дней через MOS v2.0. Высокая нагрузка на Mazowieckim - до 60 дней. Для приоритетных категорий (IT, инженерия, медики) - fast-track 7-14 дней. Срочные процедуры есть только для smart-citizenship.' },
      { q: 'Можно ли работать без zezwolenia?', a: 'Только в исключительных случаях: студенты на польской визе, граждане ЕС/ЕЭЗ/Швейцарии, обладатели TRC с правом на работу, граждане UA по «специальной» процедуре, члены семей граждан Польши. В остальных случаях работа без zezwolenia (разрешения) - штраф работодателю до 30 000 PLN, иностранцу - до 5 лет zakazu wjazdu (запрета въезда).' },
      { q: 'Что такое oświadczenie o powierzeniu pracy?', a: 'Oświadczenie o powierzeniu pracy (заявление о доверении работы) - упрощённая процедура для UA, BY, RU, MD, GE, AM. Работодатель регистрирует в Powiatowym Urzędzie Pracy (Районной службе занятости) oświadczenie за 7 дней (60 PLN), и иностранец может работать до 24 месяцев в течение последних 36. После - нужно zezwolenie na pracę или TRC. Самый быстрый путь.' },
      { q: 'Подходит ли мне Blue Card?', a: 'Niebieska Karta UE (Голубая карта ЕС) - да, если: 1) высшее образование (бакалавр+); 2) контракт от 12 месяцев; 3) зарплата ≥ 1,5× средней по Польше (~10 500 PLN brutto/мес. в 2026); 4) умова с польским работодателем. Преимущества: TRC на 3 года, переезд по ЕС после 18 мес., упрощённое łączenie rodzin (воссоединение семьи), ускоренный путь к ПМЖ.' },
      { q: 'Что если не нашёл работу за 3 месяца?', a: 'Анализируем причины: CV, профиль, зарплатные ожидания, локация. Корректируем стратегию. Гарантия трудоустройства за 6 месяцев - у нас в премиум-пакете «Поиск работы под ключ» - если не находим, возвращаем 50% гонорара.' }
    ],
    related: ['zaproszenia', 'meldunek', 'pesel'],
    ctaTitle: 'От CV до umowy за 6-8 недель',
    ctaSubtitle: 'Бесплатная консультация: оценим профиль, рассчитаем зарплату на рынке 2026, выберем оптимальный путь (umowa o pracę, B2B, Blue Card).'
  },
  pl: {
    slug: 'pomoc-w-zatrudnieniu',
    group: 'relocation',
    icon: 'fingerprint',
    badge: 'Zezwolenie na pracę · Niebieska Karta · CV PL',
    title: 'Pomoc w zatrudnieniu',
    subtitle: 'CV pod polskie standardy, zezwolenie na pracę',
    lead: 'Polski rynek pracy wymaga nie tylko angielskiego, ale rozumienia specyfiki: formatu CV, oczekiwań rekrutera, wyboru umowy, podstaw prawnych do pracy. LegalWin przygotowuje CV pod polskie ATS (Pracuj.pl, Talent Place), organizuje zezwolenie na pracę u pracodawcy, załatwia Niebieską Kartę dla IT i inżynierów, prowadzi negocjacje umowy o pracę.',
    facts: [
      { label: 'Termin zezwolenia', value: '14-60 dni', note: 'wojewoda · standard' },
      { label: 'Opłata zezwolenia', value: '100 PLN', note: 'opłata skarbowa' },
      { label: 'Min. wynagrodzenie 2026', value: '4 806 PLN brutto', note: 'pełen etat' },
      { label: 'Niebieska Karta - pensja', value: '≥ 1,5×', note: '~10 500 PLN brutto/mies.' }
    ],
    grounds: {
      title: 'Co oferujemy',
      subtitle: 'Od CV do podpisania umowy - pełen cykl.',
      items: [
        { title: 'CV pod polskie standardy', desc: 'Pracuj.pl / LinkedIn / Talent Place: format, objętość, zdjęcie, klauzula RODO, CEFR. Tłumaczenie przysięgłe.' },
        { title: 'Przygotowanie do rozmowy', desc: 'Mock interview po polsku z native speakerem, typowe pytania, negocjacje pensji, niuanse kulturowe.' },
        { title: 'Zezwolenie typ A', desc: 'Bazowe - umowa o pracę z polskim pracodawcą. 14-30 dni przez MOS. Składa pracodawca.' },
        { title: 'Zezwolenie typ B/C/D/E', desc: 'Członkowie zarządu (B), oddelegowanie (C), konsultanci (D), usługi >30 dni (E).' },
        { title: 'Oświadczenie o powierzeniu pracy', desc: 'Uproszczona dla UA, BY, RU, MD, GE, AM - do 24 miesięcy. PUP 7 dni.' },
        { title: 'Niebieska Karta UE', desc: 'IT/inżynierowie: pensja ≥ 1,5× średniej, umowa ≥ 1 rok, wyższe wykształcenie. TRC 3 lata + mobilność UE po 18 mies.' },
        { title: 'Rewizja umowy o pracę', desc: 'Kara umowna, klauzule konkurencji, wypowiedzenie, dyskryminacja, premia, urlop.' },
        { title: 'JDG / B2B', desc: 'Samozatrudnienie dla developerów: B2B z klientami zagranicznymi, IP Box (5%), bez zezwolenia.' }
      ]
    },
    timeline: {
      title: 'Cały cykl CV → umowa',
      subtitle: 'Standard 2-8 tygodni.',
      steps: [
        { title: 'Konsultacja', duration: '30 min', desc: 'Profil, cele, budżet. Optymalna ścieżka: zatrudnienie, B2B, Niebieska Karta, JDG.' },
        { title: 'CV i LinkedIn', duration: '3-5 dni', desc: 'CV pod polskie ATS. Optymalizacja LinkedIn pod polskich rekruterów.' },
        { title: 'Szukanie ofert', duration: '7-21 dni', desc: 'Pracuj.pl, NoFluffJobs, JustJoinIT, Solid.Jobs. Direct-outreach.' },
        { title: 'Rozmowy', duration: '2-4 tyg.', desc: 'Mock interviews, koordynacja, follow-up. Asysta na finałach.' },
        { title: 'Oferta i negocjacje', duration: '3-7 dni', desc: 'Analiza, rekomendacje, korekty umowy.' },
        { title: 'Zezwolenie', duration: '14-60 dni', desc: 'Wniosek pracodawcy o typ A (lub Niebieską Kartę).' },
        { title: 'Podpis umowy', duration: '1 dzień', desc: 'Finalna lektura, uzgodnienia, podpisanie.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Pakiet bazowy.',
      items: [
        'Paszport + karta pobytu',
        'Dyplomy, certyfikaty, certyfikaty językowe',
        'Aktualne CV (dowolny język)',
        'Doświadczenie 5-10 lat z opisem ról',
        'LinkedIn lub zgoda na założenie',
        'Oczekiwana pensja',
        'Lokalizacja: tylko Warszawa, zdalna OK, gotowość przeprowadzki',
        'Dokumenty do zezwolenia: PESEL, meldunek, kwalifikacje'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Stała cena za pakiet.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · ocena' },
        { label: 'CV + LinkedIn', value: 'od 600 PLN', note: 'Pod polski rynek + tłumaczenie' },
        { label: 'Szukanie pracy pod klucz', value: 'od 2 500 PLN', note: 'CV + 5 aplikacji + rozmowy + negocjacje' },
        { label: 'Zezwolenie na pracę', value: 'od 1 500 PLN', note: 'Wniosek pracodawcy · 14-60 dni' }
      ],
      note: 'Powyżej honoraria LegalWin. Opłaty (100/90/100 PLN) i tłumaczenia (~80 PLN/dyplom) - osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 20 kwietnia 2004 r. o promocji zatrudnienia',
        'Ustawa z 12 grudnia 2013 r. o cudzoziemcach',
        'Rozporządzenie MRPiPS ws. wydawania zezwoleń',
        'Dyrektywa 2009/50/WE - Niebieska Karta UE',
        'Kodeks pracy'
      ]
    },
    faq: [
      { q: 'Średnia pensja IT 2026?', a: 'Junior - 8 000-12 000 PLN brutto. Mid - 13 000-20 000. Senior - 20 000-32 000. Lead - 30 000-45 000. Na umowie. B2B (JDG) - +30-40% przy tym samym netto dzięki IP Box.' },
      { q: 'Umowa vs B2B?', a: 'Do 12 000 brutto - umowa (ZUS, urlopy). Powyżej 15 000 - JDG z IP Box (5% na 70% dochodu). Indywidualna kalkulacja.' },
      { q: 'Termin zezwolenia 2026?', a: '14-30 dni przez MOS v2.0. Mazowieckie do 60. Priorytety (IT, inżynieria, medycyna) - fast-track 7-14 dni.' },
      { q: 'Praca bez zezwolenia?', a: 'Tylko studenci, UE/EOG/CH, TRC z prawem do pracy, UA "specjalna", rodzina Polaków. Inni - kara dla pracodawcy do 30 000 PLN, dla obcokrajowca zakaz wjazdu do 5 lat.' },
      { q: 'Czym jest oświadczenie?', a: 'Uproszczona dla UA, BY, RU, MD, GE, AM - pracodawca w PUP w 7 dni (60 PLN), praca do 24 mies. w 36. Po - zezwolenie lub TRC.' },
      { q: 'Niebieska Karta dla mnie?', a: 'Tak, jeśli: wyższe, umowa ≥ 12 mies., pensja ≥ 1,5× średniej (~10 500 PLN brutto), polski pracodawca. Korzyści: TRC 3 lata, mobilność UE po 18 mies., łączenie rodzin, szybsze PR.' },
      { q: 'Brak ofert po 3 mies.?', a: 'Analiza: CV, profil, oczekiwania, lokalizacja. Korekta. Gwarancja zatrudnienia w 6 mies. w pakiecie premium - jeśli nie znajdziemy, 50% zwrotu.' }
    ],
    related: ['zaproszenia', 'meldunek', 'pesel'],
    ctaTitle: 'Od CV do umowy w 6-8 tyg.',
    ctaSubtitle: 'Bezpłatna konsultacja: ocena profilu, kalkulacja pensji 2026, wybór ścieżki (umowa, B2B, Niebieska Karta).'
  },
  en: {
    slug: 'pomoc-w-zatrudnieniu',
    group: 'relocation',
    icon: 'fingerprint',
    badge: 'Work permit · Blue Card · Polish CV',
    title: 'Employment help',
    subtitle: 'Polish-standard CV, work permit',
    lead: "Poland's job market expects more than English: local CV format, interview etiquette, contract type, lawful basis to work. LegalWin tailors your CV for Polish ATS (Pracuj.pl, Talent Place), arranges the work permit at the employer, delivers EU Blue Card for IT and engineering, negotiates your employment contract.",
    facts: [
      { label: 'Permit lead time', value: '14-60 days', note: 'voivode · standard' },
      { label: 'Permit fee', value: '100 PLN', note: 'opłata skarbowa per permit' },
      { label: 'Min wage 2026', value: '4,806 PLN gross', note: 'full-time' },
      { label: 'Blue Card threshold', value: '≥ 1.5×', note: '~10,500 PLN gross/month' }
    ],
    grounds: {
      title: 'What we offer',
      subtitle: 'From CV to signing - full cycle.',
      items: [
        { title: 'Polish-standard CV', desc: 'Pracuj.pl / LinkedIn / Talent Place: format, length, photo, GDPR clause, CEFR levels. Sworn translation.' },
        { title: 'Interview prep', desc: 'Mock interview in Polish with native speaker, typical Polish HR questions, salary negotiation (2026 market), cultural cues.' },
        { title: 'Work permit type A', desc: 'Standard - for an employment contract with a Polish employer. 14-30 days via MOS. Filed by the employer.' },
        { title: 'Permit B/C/D/E', desc: 'Board members (B), seconded staff (C), consultants (D), >30-day services (E).' },
        { title: 'Oświadczenie procedure', desc: 'Streamlined for UA, BY, RU, MD, GE, AM - up to 24 months. Filed at the District Employment Office in 7 days.' },
        { title: 'EU Blue Card', desc: 'IT/engineers: salary ≥ 1.5× national average, contract ≥ 1 year, higher education. 3-year TRC + EU mobility after 18 months.' },
        { title: 'Contract review', desc: 'Penalty clauses, non-compete, notice period, anti-discrimination, bonus, leave.' },
        { title: 'JDG / B2B alternative', desc: 'Sole proprietorship for devs and consultants: B2B with foreign clients, IP Box (5%), no permit needed.' }
      ]
    },
    timeline: {
      title: 'Full cycle CV → contract',
      subtitle: 'Standard 2-8 weeks.',
      steps: [
        { title: 'Consultation', duration: '30 min', desc: 'Profile, goals, budget, permit status. Best path: employment, B2B, Blue Card, JDG.' },
        { title: 'CV & LinkedIn', duration: '3-5 days', desc: 'CV for Polish ATS. LinkedIn optimisation for Polish recruiters.' },
        { title: 'Job search', duration: '7-21 days', desc: 'Pracuj.pl, NoFluffJobs (IT), JustJoinIT, Solid.Jobs. Direct outreach.' },
        { title: 'Interviews', duration: '2-4 weeks', desc: 'Mock interviews, scheduling, follow-ups. Final-round support.' },
        { title: 'Offer & negotiation', duration: '3-7 days', desc: 'Offer analysis, negotiation guidance, contract redlines.' },
        { title: 'Work permit', duration: '14-60 days', desc: "Employer's type-A application (or Blue Card) in parallel with offer." },
        { title: 'Signing', duration: '1 day', desc: 'Final read-through, sign with witness or notary.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Base set.',
      items: [
        'Passport + residence card',
        'Diplomas, certifications, language certificates',
        'Current CV (any language)',
        '5-10 year work history with role and project descriptions',
        'LinkedIn profile or consent to create',
        'Target salary',
        'Location: Warsaw only, remote OK, willing to relocate',
        'Permit documents: PESEL, meldunek, qualification proofs'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Fixed price per package.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 minutes · profile review' },
        { label: 'CV + LinkedIn', value: 'from 600 PLN', note: 'Polish-market + sworn translation' },
        { label: 'Turnkey job search', value: 'from 2,500 PLN', note: 'CV + 5 applications + interviews + negotiation' },
        { label: 'Work permit', value: 'from 1,500 PLN', note: 'Employer-side filing · 14-60 days' }
      ],
      note: 'LegalWin fees. State fees (100 PLN permit, 90 PLN oświadczenie, 100 PLN MFA Blue Card check) and sworn translations (~80 PLN/diploma) billed separately.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Employment Promotion Act of 20 April 2004',
        'Foreigners Act of 12 December 2013 (work-based residence)',
        'MRPiPS Regulation on work-permit issuance',
        'Directive 2009/50/EC - EU Blue Card',
        'Polish Labour Code'
      ]
    },
    faq: [
      { q: 'Average IT salary in Poland 2026?', a: 'Junior dev - 8,000-12,000 PLN gross/month. Mid (3-5 yrs) - 13,000-20,000. Senior - 20,000-32,000. Lead/Architect - 30,000-45,000. On employment contract. B2B (JDG) is 30-40% higher net thanks to IP Box and lower payroll.' },
      { q: 'Employment vs B2B?', a: "Below 12,000 gross - employment (social security, leave, rights). Above 15,000 - JDG with IP Box gives 5% tax on 70%+ of income. We model your case in consultation." },
      { q: '2026 permit timeline?', a: 'Typical 14-30 days via MOS v2.0. Mazowieckie up to 60. Priority categories (IT, engineering, medical) - fast-track 7-14 days.' },
      { q: 'Working without permit?', a: "Only students on Polish visa, EU/EEA/Swiss nationals, TRC holders with work rights, Ukrainians under special procedure, family of Polish citizens. Otherwise - employer fine up to 30,000 PLN, foreigner faces up to 5-year entry ban." },
      { q: 'What is oświadczenie?', a: 'Oświadczenie o powierzeniu pracy (employer\'s work-entrustment declaration) - streamlined for UA, BY, RU, MD, GE, AM. Employer files at the Powiatowy Urząd Pracy (District Employment Office) in 7 days (60 PLN); foreigner can work up to 24 months in any 36. Then permit or TRC. Fastest route.' },
      { q: 'Blue Card for me?', a: "Yes if: 1) higher education (BA+); 2) contract ≥ 12 months; 3) salary ≥ 1.5× national average (~10,500 PLN gross/month in 2026); 4) Polish-employer contract. Benefits: 3-year TRC, EU mobility after 18 months, simplified family reunification, faster PR." },
      { q: 'No job offer in 3 months?', a: 'We diagnose: CV, profile, salary expectations, location. Strategy correction. Premium "Turnkey" package has a 6-month guarantee - if we fail, 50% refund.' }
    ],
    related: ['zaproszenia', 'meldunek', 'pesel'],
    ctaTitle: 'CV → contract in 6-8 weeks',
    ctaSubtitle: 'Free consultation: profile review, 2026 salary calc, optimal path (employment, B2B, Blue Card).'
  },
  tr: {
    slug: 'pomoc-w-zatrudnieniu',
    group: 'relocation',
    icon: 'fingerprint',
    badge: 'Zezwolenie na pracę · Mavi Kart · Lehçe CV',
    title: 'İşe yerleşmede destek',
    subtitle: 'Polonya standartlarında özgeçmiş, zezwolenie na pracę (çalışma izni)',
    lead: 'Polonya iş piyasası yabancıdan yalnızca İngilizce değil, yerel iş kültürünü anlamayı da bekler: özgeçmiş formatı, mülakat beklentileri, doğru umowa türünün seçimi, çalışma için yasal dayanaklar. LegalWin, özgeçmişinizi Polonya ATS sistemleri için (Talent Place, Pracuj.pl) hazırlar, işveren tarafında zezwolenie na pracę başvurusunu yürütür, BT ve mühendislik uzmanları için Mavi Kart işlemlerini yapar, umowa o pracę müzakerelerini sizin yerinize yönetir.',
    facts: [
      { label: 'Zezwolenie süresi', value: '14-60 gün', note: 'wojewoda · standart' },
      { label: 'Zezwolenie harcı', value: '100 PLN', note: 'her zezwolenie için opłata skarbowa' },
      { label: 'Asgari brüt ücret 2026', value: '4.806 PLN', note: 'tam zamanlı çalışma' },
      { label: 'Mavi Kart - maaş', value: '≥ 1,5×', note: '~10.500 PLN brüt/ay' }
    ],
    grounds: {
      title: 'Sunduğumuz hizmetler',
      subtitle: 'CV hazırlığından umowa imzasına kadar tam paket.',
      items: [
        { title: 'Polonya standardında CV', desc: 'Pracuj.pl / LinkedIn / Talent Place için uyarlama: format, hacim, fotoğraf, RODO klozu, CEFR seviyeleri. Lehçeye yeminli tercüme.' },
        { title: 'Mülakat hazırlığı', desc: 'Native öğretmenle Lehçe mock interview, Polonya HR\'ında tipik sorular, maaş müzakeresi (2026 piyasa verileri), kültürel nüanslar.' },
        { title: 'Zezwolenie na pracę tip A', desc: 'Standart - Polonyalı işverenle umowa o pracę için. MOS üzerinden 14-30 gün. Başvuruyu işveren yapar, biz hazırlarız.' },
        { title: 'Zezwolenie tip B/C/D/E', desc: 'Yönetim kurulu üyeleri için (tip B), oddelegowanie - geçici görevlendirilen çalışanlar (C), danışmanlar (D), 30 günü aşan hizmetler (E).' },
        { title: 'Oświadczenie o powierzeniu pracy', desc: 'UA, BY, RU, MD, GE, AM vatandaşları için basitleştirilmiş prosedür - 24 aya kadar çalışma. Powiatowy Urząd Pracy\'ye (Bölge İş Kurumu) 7 gün içinde başvuru.' },
        { title: 'BT ve mühendislere AB Mavi Kartı', desc: 'Yüksek maaş (≥ 1,5× ülke ortalaması), en az 1 yıllık umowa, yüksek öğrenim - 3 yıllık TRC sağlar ve 18 ay sonra AB içi geçiş hakkı verir.' },
        { title: 'İş sözleşmesi incelemesi', desc: 'Sunulan umowa\'nın analizi: kar umowny (cezai şart), klauzule konkurencji (rekabet yasağı), okres wypowiedzenia (ihbar süresi), niedyskryminacja (ayrımcılık yasağı), prim, izin.' },
        { title: 'JDG / B2B alternatifi', desc: 'Yazılımcılar ve danışmanlar için samozatrudnienie açılışı: yurt dışı müşterilerle B2B sözleşmeleri, IP Box (%5 vergi), zezwolenie gerekmiyor.' }
      ]
    },
    timeline: {
      title: 'CV\'den umowa\'ya tam döngü',
      subtitle: 'İlk danışmanlıktan imzaya kadar standart süre 2-8 hafta.',
      steps: [
        { title: 'Danışmanlık', duration: '30 dk', desc: 'Profilinizi, hedeflerinizi, bütçenizi ve zezwolenie durumunuzu değerlendiririz. En uygun yolu öneririz: istihdam, B2B, Mavi Kart, JDG.' },
        { title: 'CV ve LinkedIn', duration: '3-5 gün', desc: 'CV\'yi Polonya ATS sistemlerine uyarlarız. Paralel olarak LinkedIn profilinizi Polonya işe alım uzmanlarına göre optimize ederiz.' },
        { title: 'İş ilanı arama', duration: '7-21 gün', desc: 'Pracuj.pl, NoFluffJobs (BT), JustJoinIT, Solid.Jobs üzerinden başvurularda yardım. İşe alım uzmanlarına direct-outreach.' },
        { title: 'Mülakatlar', duration: '2-4 hafta', desc: 'Mock interview, takvim koordinasyonu, follow-up e-postalar. Kritik final görüşmelerinde eşlik.' },
        { title: 'Teklif ve müzakere', duration: '3-7 gün', desc: 'Teklif analizi, pazarlık önerileri (maaş, prim, uzaktan çalışma), umowa düzeltmeleri.' },
        { title: 'Zezwolenie na pracę', duration: '14-60 gün', desc: 'Teklifle paralel - işverenin tip A zezwolenie (veya Mavi Kart) wniosek\'ini sunarız. Decyzja\'ya kadar süreci yürütürüz.' },
        { title: 'Umowa imzası', duration: '1 gün', desc: 'Sözleşmenin son okuması, işverenle uzlaşma, tanık veya noter huzurunda imza.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Temel paket - net liste danışmanlık sonrası belirlenir.',
      items: [
        'Pasaport + karta pobytu (veya başka ikamet belgesi)',
        'Tüm diplomalar, sertifikalar, certyfikaty językowe (dil sertifikaları)',
        'Mevcut CV (herhangi bir dilde)',
        'Son 5-10 yıllık iş tecrübesi - rol ve proje açıklamalarıyla',
        'LinkedIn profili (veya açma onayı)',
        'Hedef maaş (net veya brüt)',
        'Lokasyon: yalnızca Varşova, uzaktan çalışma uygun, taşınmaya açık',
        'Zezwolenie için belgeler: PESEL, meldunek, niteliklerin kanıtı'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Paket başına sabit ücret. Ödeme aşamalara bağlıdır.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '30 dakika · profil değerlendirmesi' },
        { label: 'CV + LinkedIn optimizasyonu', value: '600 PLN\'den', note: 'Polonya pazarına uyarlama + yeminli tercüme' },
        { label: 'Anahtar teslim iş arama', value: '2.500 PLN\'den', note: 'CV + 5 başvuru + mülakatlar + müzakere' },
        { label: 'Zezwolenie na pracę', value: '1.500 PLN\'den', note: 'İşveren tarafında başvuru · 14-60 gün' }
      ],
      note: 'Belirtilen ücretler LegalWin danışmanlık bedelidir. Zezwolenie damga vergisi (100 PLN), oświadczenie (90 PLN), Mavi Kart için MSZ (Dışişleri Bakanlığı) yeterlilik incelemesi (100 PLN), diplomaların yeminli tercümesi (~80 PLN/belge) ayrıca ödenir.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 20 kwietnia 2004 r. o promocji zatrudnienia i instytucjach rynku pracy (İstihdam Teşviki ve İşgücü Piyasası Kurumları Kanunu)',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Yabancılar Kanunu - işten kaynaklı oturum izni)',
        'Rozporządzenie MRPiPS w sprawie wydawania zezwoleń na pracę (Çalışma Bakanlığı zezwolenie yönetmeliği)',
        '2009/50/AT Direktifi - AB Mavi Kartı',
        'Kodeks pracy (İş Kanunu - umowa o pracę, izin, fesih)'
      ]
    },
    faq: [
      { q: '2026\'da Polonya\'da BT alanında yabancılar için ortalama maaş?', a: 'Junior yazılımcı - 8.000-12.000 PLN brüt/ay. Mid (3-5 yıl deneyim) - 13.000-20.000 PLN. Senior - 20.000-32.000 PLN. Lead / Architect - 30.000-45.000 PLN. Bu rakamlar umowa o pracę (iş sözleşmesi) içindir. B2B\'de (JDG - şahıs şirketi) IP Box ve düşük vergi sayesinde aynı netteki gelir için %30-40 daha yüksek brüt görülür.' },
      { q: 'Umowa o pracę mi yoksa B2B mi avantajlı?', a: 'Maaşa ve deneyime bağlıdır. 12.000 PLN brüt altı - umowa o pracę (iş sözleşmesi: ZUS avantajları, izin, çalışma hakları). 15.000 PLN üzeri - JDG ve IP Box, gelirin %70\'inden fazlasında %5 vergi sağlar. Sizin durumunuzu danışmanlıkta birebir hesaplıyoruz.' },
      { q: '2026\'da zezwolenie na pracę ne kadar sürede çıkıyor?', a: 'Zezwolenie na pracę MOS v2.0 üzerinden tipik olarak 14-30 günde çıkar. Mazowieckie\'de yüksek yoğunluk nedeniyle 60 güne kadar uzayabilir. Öncelikli kategoriler için (BT, mühendislik, sağlık) hızlı süreç 7-14 gündür. Daha hızlı prosedür yalnızca smart-citizenship için mevcuttur.' },
      { q: 'Zezwolenie olmadan çalışılabilir mi?', a: 'Yalnızca istisnai durumlarda: Polonya öğrenci vizesiyle gelen öğrenciler, AB / EFTA / İsviçre vatandaşları, çalışma hakkı içeren TRC sahipleri, "özel" prosedür altındaki UA vatandaşları, Polonya vatandaşlarının aile bireyleri. Diğer durumlarda zezwolenie\'siz çalışmanın cezası işverene 30.000 PLN\'ye kadar, yabancıya 5 yıla kadar zakaz wjazdu (giriş yasağı) olarak kesilir.' },
      { q: 'Oświadczenie o powierzeniu pracy nedir?', a: 'Oświadczenie o powierzeniu pracy (işin emanet edilmesine dair beyan) - UA, BY, RU, MD, GE, AM vatandaşları için basitleştirilmiş prosedürdür. İşveren Powiatowy Urząd Pracy\'ye (Bölge İş Kurumu) 7 gün içinde 60 PLN ile oświadczenie kaydı yaptırır ve yabancı, son 36 ay içinde 24 aya kadar çalışabilir. Sonrasında zezwolenie na pracę veya TRC gerekir. En hızlı yoldur.' },
      { q: 'AB Mavi Kartı bana uygun mu?', a: 'Niebieska Karta UE şu koşullar varsa size uygundur: 1) yüksek öğrenim (lisans+); 2) en az 12 aylık sözleşme; 3) Polonya ortalama maaşının 1,5 katı maaş (2026\'da ~10.500 PLN brüt/ay); 4) Polonyalı işverenle umowa. Avantajlar: 3 yıllık TRC, 18 ay sonra AB içi geçiş, basitleştirilmiş aile birleşimi, daimi ikamete hızlandırılmış yol.' },
      { q: '3 ayda iş bulamadım, ne yapacaksınız?', a: 'Sebepleri analiz ediyoruz: CV, profil, maaş beklentisi, lokasyon. Stratejiyi düzeltiyoruz. Premium "Anahtar teslim iş arama" paketimizde 6 ay içinde iş garantisi vardır - bulamazsak ücretin %50\'sini iade ediyoruz.' }
    ],
    related: ['zaproszenia', 'meldunek', 'pesel'],
    ctaTitle: 'CV\'den umowa\'ya 6-8 hafta',
    ctaSubtitle: 'Ücretsiz danışmanlık: profilinizi inceler, 2026 piyasasında maaş hesabı yapar, en uygun yolu seçeriz (umowa o pracę, B2B, Mavi Kart).'
  },
  uk: {
    slug: 'pomoc-w-zatrudnieniu',
    group: 'relocation',
    icon: 'fingerprint',
    badge: 'Zezwolenie na pracę · Blue Card · CV PL',
    title: 'Допомога з працевлаштуванням',
    subtitle: 'Резюме за польськими стандартами, zezwolenie na pracę',
    lead: 'Польський ринок праці вимагає від іноземця не лише англійської, а й розуміння локальної специфіки: формат CV, очікування на співбесіді, правильний вибір umowy, законні підстави для роботи. LegalWin готує CV під польські ATS-системи (Talent Place, Pracuj.pl), організовує zezwolenie na pracę у роботодавця, оформлює Blue Card для спеціалістів IT та інженерів, веде переговори за umową o pracę.',
    facts: [
      { label: 'Термін zezwolenia', value: '14–60 днів', note: 'wojewoda · standard' },
      { label: 'Держмито zezwolenia', value: '100 PLN', note: 'opłata skarbowa за кожне' },
      { label: 'Мінімум зарплати', value: '4 806 PLN брутто', note: 'мінімальна брутто 2026' },
      { label: 'Blue Card зарплата', value: '≥ 1,5×', note: '~10 500 PLN брутто/міс.' }
    ],
    grounds: {
      title: 'Які послуги надаємо',
      subtitle: 'Від підготовки CV до підписання umowy — повний цикл.',
      items: [
        { title: 'CV за польськими стандартами', desc: 'Адаптація під Pracuj.pl / LinkedIn / Talent Place: формат, обсяг, фото, GDPR-клаузула, language proficiency CEFR. Переклад польською присяжно.' },
        { title: 'Підготовка до співбесіди', desc: 'Mock interview польською з native speaker, типові запитання HR у Польщі, переговори про зарплату (ринок 2026), культурні нюанси.' },
        { title: 'Zezwolenie na pracę typ A', desc: 'Базове — для umowy o pracę з польським роботодавцем. 14–30 днів через MOS. Подаємо з боку роботодавця.' },
        { title: 'Zezwolenie typ B/C/D/E', desc: 'Для членів zarządu (typ B), співробітників з oddelegowania (C), консультантів (D), послуг понад 30 днів (E).' },
        { title: 'Oświadczenie o powierzeniu pracy', desc: 'Спрощена процедура для UA, BY, MD, GE, AM — до 24 місяців роботи. Подання в Powiatowy Urząd Pracy за 7 днів.' },
        { title: 'Blue Card UE для IT та інженерів', desc: 'Висока зарплата (≥ 1,5× середньої), umowa ≥ 1 рік, вища освіта — дає карту побуту на 3 роки + право на переїзд по ЄС після 18 міс.' },
        { title: 'Трудова umowa — ревізія', desc: 'Аналіз запропонованої umowy: kara umowna, klauzule konkurencji, okres wypowiedzenia, niedyskryminacja, премія, відпустка.' },
        { title: 'JDG / B2B як альтернатива', desc: 'Відкриття самозайнятості для розробників і консультантів: B2B-контракти із закордонними клієнтами, IP Box (5% податок), без zezwolenia.' }
      ]
    },
    timeline: {
      title: 'Повний цикл від CV до umowy',
      subtitle: 'Стандартний час від першої консультації до підписання — 2–8 тижнів.',
      steps: [
        { title: 'Консультація', duration: '30 хв', desc: 'Оцінюємо ваш профіль, цілі, бюджет, наявність zezwolenia. Пропонуємо оптимальний шлях: працевлаштування, B2B, Blue Card, JDG.' },
        { title: 'CV і LinkedIn', duration: '3–5 днів', desc: 'Готуємо CV під польські ATS. Паралельно — оптимізація LinkedIn-профілю під рекрутерів у Польщі.' },
        { title: 'Пошук вакансій', duration: '7–21 день', desc: 'Допомагаємо з відгуками на Pracuj.pl, NoFluffJobs (IT), JustJoinIT, Solid.Jobs. Direct-outreach до рекрутерів.' },
        { title: 'Співбесіди', duration: '2–4 тижні', desc: 'Mock interviews, координація графіків, follow-up emails. Супровід на складних фінальних зустрічах.' },
        { title: 'Офер і переговори', duration: '3–7 днів', desc: 'Аналіз пропозиції, рекомендації щодо торгу (зарплата, бонуси, віддалена робота), правка трудової umowy.' },
        { title: 'Zezwolenie na pracę', duration: '14–60 днів', desc: 'Паралельно з офером — подаємо wniosek роботодавця на zezwolenie typ A (або Blue Card). Супровід до видачі decyzji.' },
        { title: 'Підписання umowy', duration: '1 день', desc: 'Фінальна вичитка контракту, узгодження з роботодавцем, підписання зі свідком або notarialnie.' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Базовий пакет — точний список після консультації.',
      items: [
        'Паспорт + karta pobytu (або інший документ перебування)',
        'Усі дипломи, сертифікати, certyfikaty językowe',
        'Поточне CV (будь-якою мовою)',
        'Трудовий досвід за 5–10 років з описом ролей і проєктів',
        'LinkedIn-профіль (або згода створити його)',
        'Бажана зарплата (нетто або брутто)',
        'Локація: лише Warszawa, віддалена ОК, готовність до переїзду',
        'Документи для zezwolenia: PESEL, meldunek, підтвердження кваліфікацій'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Фіксована ціна за пакет. Гонорар прив’язаний до етапів.',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '30 хвилин · оцінка профілю' },
        { label: 'CV + LinkedIn оптимізація', value: 'від 600 PLN', note: 'Під польський ринок · присяжний переклад' },
        { label: 'Пошук роботи під ключ', value: 'від 2 500 PLN', note: 'CV + 5 відгуків + інтерв’ю + переговори' },
        { label: 'Zezwolenie na pracę', value: 'від 1 500 PLN', note: 'Подання з боку роботодавця · 14–60 днів' }
      ],
      note: 'Зазначено гонорари LegalWin. Держмито zezwolenia (100 PLN), oświadczenia (90 PLN), Blue Card MSZ-перевірка кваліфікацій (100 PLN), присяжний переклад дипломів (~80 PLN/документ) — окремо.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 20 kwietnia 2004 r. o promocji zatrudnienia i instytucjach rynku pracy',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (zezwolenie na pobyt z pracy)',
        'Rozporządzenie MRPiPS w sprawie wydawania zezwoleń na pracę',
        'Dyrektywa 2009/50/WE — Niebieska Karta UE',
        'Kodeks pracy (umowa o pracę, urlop, wypowiedzenie)'
      ]
    },
    faq: [
      { q: 'Яка середня зарплата для іноземця в IT у Польщі 2026?', a: 'Junior розробник — 8 000–12 000 PLN brutto/міс. Mid (3–5 років) — 13 000–20 000 PLN. Senior — 20 000–32 000 PLN. Lead / Architect — 30 000–45 000 PLN. Це для umowy o pracę (трудового договору). На B2B (JDG — індивідуальне підприємництво) — на 30–40% вище при тій самій net-виплаті (за рахунок IP Box і низьких податків).' },
      { q: 'Що вигідніше — umowa o pracę чи B2B?', a: 'Залежить від зарплати й досвіду. До 12 000 PLN brutto — umowa o pracę (трудовий договір: ZUS-пільги, відпустки, права). Понад 15 000 PLN — JDG з IP Box дає 5% податок на 70%+ доходу. Рахуємо під ваш конкретний кейс на консультації.' },
      { q: 'Скільки чекати zezwolenie na pracę у 2026?', a: 'Zezwolenie na pracę (дозвіл на роботу) — типовий термін 14–30 днів через MOS v2.0. Високе навантаження на Mazowieckim — до 60 днів. Для пріоритетних категорій (IT, інженерія, медики) — fast-track 7–14 днів. Термінові процедури є лише для smart-citizenship.' },
      { q: 'Чи можна працювати без zezwolenia?', a: 'Лише у виняткових випадках: студенти на польській візі, громадяни ЄС/ЄЕЗ/Швейцарії, власники карти побуту з правом на роботу, громадяни України за «спеціальною» процедурою, члени сімей громадян Польщі. В інших випадках робота без zezwolenia (дозволу) — штраф роботодавцю до 30 000 PLN, іноземцю — до 5 років zakazu wjazdu (заборони в’їзду).' },
      { q: 'Що таке oświadczenie o powierzeniu pracy?', a: 'Oświadczenie o powierzeniu pracy (заява про доручення роботи) — спрощена процедура для UA, BY, MD, GE, AM. Роботодавець реєструє в Powiatowym Urzędzie Pracy (Районній службі зайнятості) oświadczenie за 7 днів (60 PLN), і іноземець може працювати до 24 місяців протягом останніх 36. Після — потрібне zezwolenie na pracę або карта побуту. Найшвидший шлях.' },
      { q: 'Чи підходить мені Blue Card?', a: 'Niebieska Karta UE (Блакитна карта ЄС) — так, якщо: 1) вища освіта (бакалавр+); 2) контракт від 12 місяців; 3) зарплата ≥ 1,5× середньої по Польщі (~10 500 PLN brutto/міс. у 2026); 4) umowa з польським роботодавцем. Переваги: карта побуту на 3 роки, переїзд по ЄС після 18 міс., спрощене łączenie rodzin (возз’єднання сім’ї), пришвидшений шлях до ПМЖ.' },
      { q: 'Що, якщо не знайшов роботу за 3 місяці?', a: 'Аналізуємо причини: CV, профіль, зарплатні очікування, локація. Коригуємо стратегію. Гарантія працевлаштування за 6 місяців — у нас у преміум-пакеті «Пошук роботи під ключ» — якщо не знаходимо, повертаємо 50% гонорару.' }
    ],
    related: ['zaproszenia', 'meldunek', 'pesel'],
    ctaTitle: 'Від CV до umowy за 6–8 тижнів',
    ctaSubtitle: 'Безкоштовна консультація: оцінимо профіль, розрахуємо зарплату на ринку 2026, виберемо оптимальний шлях (umowa o pracę, B2B, Blue Card).'
  }
};

export default pomocWZatrudnieniu;
