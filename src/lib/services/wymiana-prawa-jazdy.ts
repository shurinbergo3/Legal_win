import type { ServiceEntry } from './types';

const wymianaPrawaJazdy: ServiceEntry = {
  ru: {
    slug: 'wymiana-prawa-jazdy',
    group: 'documents',
    icon: 'id-card',
    badge: 'Starostwo · WORD · 185 dni',
    title: 'Обмен водительских прав',
    subtitle: 'Замена прав СНГ и не-ЕС на польские',
    lead: 'По польскому праву иностранец, проживающий в Польше более 185 дней, обязан заменить иностранные водительские права на польские. Без замены через 6 месяцев права теряют легальность для управления авто. Обмениваем права из Украины, Беларуси, России, Казахстана, Грузии, Молдовы и других стран - оформляем присяжные переводы, badania lekarskie, психотест, заявление в starostwo и сопровождение в WORD при необходимости пересдачи теории.',
    facts: [
      { label: 'Срок выдачи', value: '14-30 дней', note: 'starostwo · по воеводству' },
      { label: 'Госпошлина', value: '100,50 PLN', note: 'opłata za blankiet prawa jazdy' },
      { label: 'Где', value: 'Starostwo + WORD', note: 'управление + теоретический экзамен' },
      { label: 'Действует', value: 'до 15 лет', note: 'B / B+E · меньше для C, D' }
    ],
    grounds: {
      title: 'Какие права обмениваем',
      subtitle: 'Польша работает по двусторонним договорам и Венской конвенции 1968 г. Не все категории и страны обмениваются автоматически.',
      items: [
        { title: 'Украина (B, BE)', desc: 'Без сдачи теории и практики - прямой обмен. Категории C, CE, D, DE - нужна сдача теории WORD. Срок - 30 дней.' },
        { title: 'Беларусь (B, BE)', desc: 'Прямой обмен по двустороннему соглашению 2003. Категории грузовиков и автобусов - сдача теории.' },
        { title: 'Россия (B, BE)', desc: 'Прямой обмен по Венской конвенции. C/D - обязательна теория WORD на польском, украинском или английском.' },
        { title: 'Казахстан, Кыргызстан, Узбекистан', desc: 'Обмен по Венской конвенции. Часто - сдача теории. Уточняем по конкретному воеводству.' },
        { title: 'Молдова, Грузия, Армения, Азербайджан', desc: 'Венская конвенция или двусторонние договоры. C/D всегда - теория. B - обычно прямой обмен.' },
        { title: 'Великобритания (post-Brexit)', desc: 'Прямой обмен в течение 5 лет проживания в Польше. После - теория и практика заново.' },
        { title: 'США, Канада', desc: 'Только B - прямой обмен по двустороннему договору. C/D - полный курс заново.' },
        { title: 'Сирия, Ирак, Афганистан, Йемен', desc: 'Полный курс заново - без обмена. Помогаем с курсом OSK на русском/арабском и сдачей в WORD.' }
      ]
    },
    timeline: {
      title: 'Как мы оформляем обмен',
      subtitle: 'Стандартный цикл - 30-45 дней. С теорией WORD - до 60 дней.',
      steps: [
        { title: 'Консультация', duration: '20 мин', desc: 'Проверяем страну и категорию прав, статус (TRC, виза D, безвиз), потребность в теории. Составляем точный план.' },
        { title: 'Присяжный перевод прав', duration: '2-3 дня', desc: 'Tłumacz przysięgły переводит обе стороны иностранных прав - обязательное требование starostwa.' },
        { title: 'Badania lekarskie', duration: '1-2 дня', desc: 'Записываем в аккредитованный медцентр (uprawniony lekarz) - 200 PLN, 30 минут. Категория 1 (B) или 2 (C/D).' },
        { title: 'Психологический тест', duration: '1 день', desc: 'Только для C/D или при особых требованиях. Psychotechnika - 200 PLN, 1 час.' },
        { title: 'Wniosek в starostwo', duration: '1 день', desc: 'Подача документов в wydział komunikacji starostwa по адресу проживания. Оплата 100,50 PLN.' },
        { title: 'Теория в WORD (при необходимости)', duration: '1-14 дней', desc: 'Запись на egzamin teoretyczny на польском, украинском или английском. 30 вопросов, проходной балл 68/74.' },
        { title: 'Получение польских прав', duration: '14-30 дней', desc: 'Старостa выдаёт polskie prawo jazdy и забирает оригинал иностранных. Иностранные отправляются в страну выдачи.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Базовый пакет. Точный список - после консультации.',
      items: [
        'Иностранные водительские права (оригинал + копии обеих сторон)',
        'Присяжный перевод прав на польский',
        'Загранпаспорт (оригинал + копия страницы с фото)',
        'PESEL и meldunek (или подтверждение пребывания свыше 185 дней)',
        'Karta pobytu или другой документ легального пребывания',
        'Orzeczenie lekarskie категории 1 (B) или 2 (C/D)',
        'Orzeczenie psychologiczne (только для C/D или при показаниях)',
        'Цветное фото 35×45 мм (биометрический формат, белый фон)',
        'Заполненный wniosek o wydanie prawa jazdy - готовим мы',
        'Подтверждение опłаты 100,50 PLN'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированный гонорар за этап. Госпошлины и медкомиссия - отдельно по факту.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '20 минут · оценка ситуации' },
        { label: 'Обмен прав под ключ', value: 'от 600 PLN', note: 'Перевод, медкомиссия, starostwo' },
        { label: 'Обмен + теория WORD', value: 'от 950 PLN', note: 'С подготовкой и сопровождением' },
        { label: 'Полный курс OSK с нуля', value: 'от 1 800 PLN', note: 'Категория B · если обмен невозможен' }
      ],
      note: 'Указаны гонорары LegalWin. Госпошлина (100,50 PLN), badania lekarskie (~200 PLN), psychotechnika (~200 PLN), присяжный перевод (~80 PLN), egzamin WORD (50 PLN/категория) - отдельно. Курс OSK (1 800-4 500 PLN) - по тарифам поставщика.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami',
        'Rozporządzenie Ministra Infrastruktury z 24 listopada 2022 r. ws. wymiany praw jazdy wydanych za granicą',
        'Konwencja wiedeńska o ruchu drogowym z 8 listopada 1968 r.',
        'Umowa między PRL a ZSRR o wzajemnym uznawaniu praw jazdy z 1973 r. (dalej obowiązująca)',
        'Dwustronne umowy z Ukrainą (2003), Białorusią (2004), Mołdawią (2014)'
      ]
    },
    faq: [
      { q: 'Сколько по факту времени занимает обмен прав?', a: 'Стандарт - 30-45 дней от первого визита до польских прав. С теорией WORD (Wojewódzki Ośrodek Ruchu Drogowego - Воеводский центр дорожного движения) - до 60 дней. Срочные случаи (если права истекают) - можем подать без перевода в день консультации, перевод доделаем параллельно.' },
      { q: 'Можно ли водить в Польше с украинскими/белорусскими правами?', a: 'Да, в течение 185 дней проживания. После - обязательно обменять. С 2024 года ITD (Inspekcja Transportu Drogowego - Инспекция дорожного транспорта) активно проверяет фактический срок пребывания (PESEL, meldunek - регистрация, виза). Штраф за управление с просроченным правом обмена - 500 PLN + риск аннулирования.' },
      { q: 'Категории C/D - нужна ли теория?', a: 'Почти всегда - да. Большинство воеводств требуют egzamin teoretyczny (теоретический экзамен) WORD для коммерческих категорий из стран не-ЕС. Готовим к экзамену по польским ПДД, выбираем WORD с экзаменом на украинском или английском (зависит от воеводства).' },
      { q: 'Что если права истекли или потеряны?', a: 'Просроченные иностранные права не обмениваются. Нужно сначала восстановить их в стране выдачи (через консульство или заочно), затем - обмен в Польше. Делаем под ключ в обоих случаях.' },
      { q: 'Куда уходят оригиналы иностранных прав?', a: 'Starostwo (старостат - районная администрация) отправляет оригинал в выдавшую страну (через MSZ или посольство). Это стандартная процедура для предотвращения «двойного владения». Получить их обратно нельзя.' },
      { q: 'Можно ли получить права на катего C/D, если не было такой в стране?', a: 'Нет - обмен возможен только в эквивалентных категориях. Если хотите C/D с нуля - нужен полный курс OSK (ośrodek szkolenia kierowców - автошкола) + Kod 95 (kwalifikacja zawodowa - профессиональная квалификация водителя). См. услугу Kod 95.' },
      { q: 'Какие штрафы за управление без замены прав?', a: 'Управление авто с правами, подлежащими обмену, после 185 дней - нарушение art. 94 ustawy Prawo o ruchu drogowym (статья 94 Закона о дорожном движении). Штраф 500 PLN + 6 пунктов карных. Полиция проверяет дату въезда по PESEL/meldunkу (регистрации) - обмануть нельзя.' }
    ],
    related: ['kod-95', 'pesel', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Обмен прав за 30 дней',
    ctaSubtitle: 'Бесплатная консультация: проверим страну, категорию, статус. От первого визита до polski prawo jazdy - обычно 30-45 дней. С теорией WORD - до 60 дней.'
  },
  pl: {
    slug: 'wymiana-prawa-jazdy',
    group: 'documents',
    icon: 'id-card',
    badge: 'Starostwo · WORD · 185 dni',
    title: 'Wymiana prawa jazdy',
    subtitle: 'Wymiana zagranicznych praw jazdy (WNP, spoza UE) na polskie',
    lead: 'Cudzoziemiec mieszkający w Polsce powyżej 185 dni musi wymienić zagraniczne prawo jazdy na polskie - inaczej po 6 miesiącach traci prawo do prowadzenia pojazdu. Wymieniamy prawa jazdy z Ukrainy, Białorusi, Rosji, Kazachstanu, Gruzji, Mołdawii i innych krajów - tłumaczenia przysięgłe, badania lekarskie, psychotechnika, wniosek do starostwa i wsparcie w WORD przy egzaminie teoretycznym.',
    facts: [
      { label: 'Termin', value: '14-30 dni', note: 'starostwo · wg województwa' },
      { label: 'Opłata', value: '100,50 PLN', note: 'opłata za blankiet' },
      { label: 'Gdzie', value: 'Starostwo + WORD', note: 'wniosek + ewentualnie egzamin teoretyczny' },
      { label: 'Ważność', value: 'do 15 lat', note: 'B / B+E · mniej dla C, D' }
    ],
    grounds: {
      title: 'Jakie prawa wymieniamy',
      subtitle: 'Polska działa na podstawie umów dwustronnych i Konwencji wiedeńskiej 1968. Nie wszystkie kategorie i kraje wymieniają się automatycznie.',
      items: [
        { title: 'Ukraina (B, BE)', desc: 'Bez egzaminów - wymiana bezpośrednia. C/CE/D/DE - wymagana teoria WORD. 30 dni.' },
        { title: 'Białoruś (B, BE)', desc: 'Bezpośrednia wymiana wg umowy z 2003. Kategorie ciężarowe - teoria.' },
        { title: 'Rosja (B, BE)', desc: 'Wymiana wg Konwencji wiedeńskiej. C/D - obowiązkowa teoria.' },
        { title: 'Kazachstan, Kirgistan, Uzbekistan', desc: 'Konwencja wiedeńska. Często teoria. Ustalamy wg województwa.' },
        { title: 'Mołdawia, Gruzja, Armenia, Azerbejdżan', desc: 'Konwencja wiedeńska / umowy dwustronne. C/D - teoria. B - zwykle bezpośrednio.' },
        { title: 'Wielka Brytania (post-Brexit)', desc: 'Bezpośrednia wymiana w ciągu 5 lat zamieszkiwania w Polsce.' },
        { title: 'USA, Kanada', desc: 'Tylko B - wymiana bezpośrednia. C/D - pełny kurs.' },
        { title: 'Syria, Irak, Afganistan, Jemen', desc: 'Pełny kurs OSK od zera - bez wymiany.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Standard 30-45 dni. Z egzaminem WORD - do 60 dni.',
      steps: [
        { title: 'Konsultacja', duration: '20 min', desc: 'Kraj, kategoria, status, potrzeba teorii. Plan działania.' },
        { title: 'Tłumaczenie przysięgłe prawa jazdy', duration: '2-3 dni', desc: 'Tłumacz przysięgły - obie strony - wymóg starostwa.' },
        { title: 'Badania lekarskie', duration: '1-2 dni', desc: 'U uprawnionego lekarza - 200 PLN, 30 min. Kategoria 1 (B) lub 2 (C/D).' },
        { title: 'Psychotechnika', duration: '1 dzień', desc: 'Tylko C/D lub na wniosek lekarza. ~200 PLN, 1 godz.' },
        { title: 'Wniosek do starostwa', duration: '1 dzień', desc: 'Wydział komunikacji starostwa wg adresu. Opłata 100,50 PLN.' },
        { title: 'Egzamin teoretyczny WORD', duration: '1-14 dni', desc: 'Po polsku, ukraińsku lub angielsku. 30 pytań, próg 68/74.' },
        { title: 'Odbiór polskiego prawa jazdy', duration: '14-30 dni', desc: 'Starosta wydaje polskie i odbiera zagraniczne (wysyłane do kraju wydania).' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Pakiet bazowy.',
      items: [
        'Zagraniczne prawo jazdy (oryginał + kopie obu stron)',
        'Tłumaczenie przysięgłe',
        'Paszport (oryginał + kopia strony ze zdjęciem)',
        'PESEL i meldunek (lub potwierdzenie pobytu >185 dni)',
        'Karta pobytu lub inny dokument legalnego pobytu',
        'Orzeczenie lekarskie kat. 1 (B) lub 2 (C/D)',
        'Orzeczenie psychologiczne (C/D lub na wskazanie)',
        'Zdjęcie 35×45 mm biometryczne',
        'Wypełniony wniosek - przygotowujemy my',
        'Potwierdzenie opłaty 100,50 PLN'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Stała cena. Opłaty urzędowe i badania - osobno.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '20 min · ocena' },
        { label: 'Wymiana pod klucz', value: 'od 600 PLN', note: 'Tłumaczenie, badania, starostwo' },
        { label: 'Wymiana + egzamin WORD', value: 'od 950 PLN', note: 'Z przygotowaniem i asystą' },
        { label: 'Pełny kurs OSK od zera', value: 'od 1 800 PLN', note: 'B · gdy wymiana niemożliwa' }
      ],
      note: 'Powyżej honoraria LegalWin. Opłata 100,50 PLN, badania (~200), psycho (~200), tłumaczenie (~80), WORD (50/kat.) - osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 5 stycznia 2011 r. o kierujących pojazdami',
        'Rozporządzenie Ministra Infrastruktury z 24 listopada 2022 r. ws. wymiany zagranicznych praw jazdy',
        'Konwencja wiedeńska o ruchu drogowym z 8 listopada 1968 r.',
        'Umowa PRL-ZSRR o wzajemnym uznawaniu praw jazdy z 1973 r.',
        'Umowy dwustronne z Ukrainą (2003), Białorusią (2004), Mołdawią (2014)'
      ]
    },
    faq: [
      { q: 'Ile trwa wymiana?', a: 'Standard 30-45 dni. Z egzaminem WORD - do 60 dni. Pilne (wygasające prawo) - składamy bez tłumaczenia od ręki.' },
      { q: 'Czy mogę jeździć z ukraińskim/białoruskim prawem?', a: 'Tak - przez 185 dni. Po - obowiązkowa wymiana. ITD weryfikuje pobyt (PESEL, meldunek, wiza). Mandat 500 PLN + ryzyko unieważnienia.' },
      { q: 'C/D - czy potrzebna teoria?', a: 'Niemal zawsze tak. Większość województw wymaga teorii WORD dla kategorii zawodowych spoza UE.' },
      { q: 'Prawo wygasłe lub zgubione?', a: 'Wygasłe - najpierw odnowić w kraju wydania (konsulat lub zdalnie), potem wymiana. Robimy oba kroki.' },
      { q: 'Gdzie idą oryginały?', a: 'Starostwo wysyła oryginał do kraju wydania (przez MSZ/ambasadę). Standard - zapobiega podwójnemu posiadaniu.' },
      { q: 'Czy mogę dostać C/D, jeśli go nie miałem?', a: 'Nie - wymiana tylko w równoważnych kategoriach. C/D od zera to kurs OSK + Kod 95.' },
      { q: 'Mandaty?', a: 'Po 185 dniach - art. 94 Prawa o ruchu drogowym. 500 PLN + 6 punktów karnych. Policja sprawdza datę wjazdu w PESEL/meldunkach.' }
    ],
    related: ['kod-95', 'pesel', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Wymiana prawa jazdy w 30 dni',
    ctaSubtitle: 'Bezpłatna konsultacja: kraj, kategoria, status. Od pierwszej wizyty do polskiego prawa - zwykle 30-45 dni. Z teorią WORD - do 60.'
  },
  en: {
    slug: 'wymiana-prawa-jazdy',
    group: 'documents',
    icon: 'id-card',
    badge: 'Starostwo · WORD · 185 days',
    title: "Driving licence exchange",
    subtitle: 'Swap CIS / non-EU driving licence for a Polish one',
    lead: 'A foreigner residing in Poland for more than 185 days must swap their foreign driving licence for a Polish one - otherwise it loses validity for driving after 6 months. We exchange licences from Ukraine, Belarus, Russia, Kazakhstan, Georgia, Moldova and other countries - sworn translation, medical exam, psych test, application to starostwo and assistance with WORD theory exam where required.',
    facts: [
      { label: 'Issuance', value: '14-30 days', note: 'starostwo · varies by voivodeship' },
      { label: 'State fee', value: '100.50 PLN', note: 'licence card fee' },
      { label: 'Where', value: 'Starostwo + WORD', note: 'application + theory exam if needed' },
      { label: 'Validity', value: 'up to 15 years', note: 'B / B+E · less for C, D' }
    ],
    grounds: {
      title: 'Which licences we exchange',
      subtitle: 'Poland operates under bilateral treaties and the 1968 Vienna Convention. Not every category swaps automatically.',
      items: [
        { title: 'Ukraine (B, BE)', desc: 'Direct swap, no exams. C/CE/D/DE - WORD theory required. 30 days.' },
        { title: 'Belarus (B, BE)', desc: 'Direct swap under 2003 bilateral. HGV/bus categories - theory.' },
        { title: 'Russia (B, BE)', desc: 'Vienna Convention swap. C/D - mandatory theory at WORD.' },
        { title: 'Kazakhstan, Kyrgyzstan, Uzbekistan', desc: 'Vienna Convention. Often theory. Voivodeship-dependent.' },
        { title: 'Moldova, Georgia, Armenia, Azerbaijan', desc: 'Vienna Convention or bilateral. C/D - theory always; B - usually direct swap.' },
        { title: 'United Kingdom (post-Brexit)', desc: 'Direct swap within 5 years of Polish residency.' },
        { title: 'USA, Canada', desc: 'B only - direct swap under bilateral. C/D - full course.' },
        { title: 'Syria, Iraq, Afghanistan, Yemen', desc: 'No swap - full OSK course required.' }
      ]
    },
    timeline: {
      title: 'How we run it',
      subtitle: 'Standard 30-45 days. With WORD theory - up to 60.',
      steps: [
        { title: 'Consultation', duration: '20 min', desc: 'Country, category, status, theory needs. Action plan.' },
        { title: 'Sworn translation', duration: '2-3 days', desc: 'Both sides translated by sworn translator - starostwo requirement.' },
        { title: 'Medical exam', duration: '1-2 days', desc: 'Authorised doctor - 200 PLN, 30 min. Cat. 1 (B) or 2 (C/D).' },
        { title: 'Psych test', duration: '1 day', desc: 'C/D only or per doctor. ~200 PLN, 1 hour.' },
        { title: 'Filing at starostwo', duration: '1 day', desc: 'Wydział komunikacji of your residence. Pay 100.50 PLN.' },
        { title: 'WORD theory if required', duration: '1-14 days', desc: 'Polish, Ukrainian or English. 30 questions, pass 68/74.' },
        { title: 'Polish licence pickup', duration: '14-30 days', desc: 'Starosta issues Polish, retains the foreign one (sent back to issuing country).' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Base set.',
      items: [
        'Foreign licence (original + copies of both sides)',
        'Sworn translation into Polish',
        'Passport (original + photo-page copy)',
        'PESEL and meldunek (or proof of stay >185 days)',
        'Residence card or other legal-stay document',
        'Cat. 1 (B) or 2 (C/D) medical certificate',
        'Psych certificate (C/D or on referral)',
        'Biometric photo 35×45 mm',
        'Completed application - we prepare it',
        'Proof of 100.50 PLN payment'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Fixed price per stage. State fees and exams billed at actuals.',
      items: [
        { label: 'Consultation', value: 'Free', note: '20 minutes · case review' },
        { label: 'Turnkey exchange', value: 'from 600 PLN', note: 'Translation, medical, starostwo' },
        { label: 'Exchange + WORD theory', value: 'from 950 PLN', note: 'Prep & assistance included' },
        { label: 'Full OSK course', value: 'from 1,800 PLN', note: 'B · when no swap available' }
      ],
      note: 'LegalWin fees. State fee (100.50 PLN), medical (~200), psych (~200), sworn translation (~80), WORD (50 PLN/category) - separate. OSK courses (1,800-4,500 PLN) at provider rates.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Act on Driving Persons of 5 January 2011',
        'Minister of Infrastructure Regulation of 24 November 2022 on foreign-licence exchange',
        '1968 Vienna Convention on Road Traffic',
        '1973 PRL-USSR mutual recognition treaty (still in force)',
        'Bilateral treaties with Ukraine (2003), Belarus (2004), Moldova (2014)'
      ]
    },
    faq: [
      { q: 'How long does the exchange take?', a: 'Standard 30-45 days. With WORD theory - up to 60. Urgent (expiring licence) - we file without translation on day one and complete the translation in parallel.' },
      { q: 'Can I drive on a Ukrainian / Belarusian licence?', a: 'Yes, for 185 days of residence. After that - exchange is mandatory. From 2024 ITD actively checks actual stay duration (PESEL, meldunek, visa). Driving past the deadline - 500 PLN fine plus risk of revocation.' },
      { q: 'C/D - is theory required?', a: 'Almost always. Most voivodeships demand WORD theory for non-EU professional categories.' },
      { q: 'Expired or lost licence?', a: 'Expired licences cannot be exchanged. First reissue in the issuing country (consulate or remote), then exchange. We handle both.' },
      { q: 'Where do the originals go?', a: 'Starostwo sends the original back to the issuing country (via MSZ/embassy) - standard practice to prevent double possession.' },
      { q: 'Can I get C/D if I never had it?', a: 'No - exchange is only for equivalent categories. New C/D requires full OSK course + Kod 95 (driver CPC).' },
      { q: 'Penalties for not exchanging?', a: 'Driving past 185 days breaches Art. 94 of Road Traffic Act. 500 PLN fine + 6 penalty points. Police verify entry date via PESEL/meldunek.' }
    ],
    related: ['kod-95', 'pesel', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Licence exchange in 30 days',
    ctaSubtitle: 'Free consultation: country, category, status. From first visit to Polish licence - typically 30-45 days. With WORD theory - up to 60.'
  }
};

export default wymianaPrawaJazdy;
