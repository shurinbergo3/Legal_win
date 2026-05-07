import type { ServiceEntry } from './types';

const kartaPolaka: ServiceEntry = {
  ru: {
    slug: 'karta-polaka',
    group: 'immigration',
    icon: 'fingerprint',
    badge: 'Karta Polaka · быстрый путь к ПМЖ',
    title: 'Karta Polaka',
    subtitle: 'Признание польского происхождения и ускоренный путь к ПМЖ и гражданству',
    lead: 'Karta Polaka — документ, подтверждающий принадлежность к Народу Польскому. Сама карта не даёт ВНЖ, но открывает дорогу к Karte Stałego Pobytu без ожидания и к гражданству без 3-летнего ценза. Готовим к консулу или воеводе: проверяем родословную, собираем доказательства польских корней, ставим польский язык до уровня собеседования и сопровождаем подачу заявления.',
    facts: [
      { label: 'Срок рассмотрения', value: '60–180 дней', note: 'consul · wojewoda' },
      { label: 'Действует', value: '10 лет', note: 'продляется бессрочно' },
      { label: 'Заявление', value: 'бесплатно', note: 'госпошлины не взимаются' },
      { label: 'После Karty Polaka', value: 'ПМЖ за 2–3 мес.', note: 'без 4 лет ВНЖ' }
    ],
    grounds: {
      title: 'Кто может получить Karta Polaka',
      subtitle: 'Документ выдаётся за принадлежность к Polskiemu Narodowi — не за гражданство СССР или РП в прошлом. Нужны три доказательственных уровня: происхождение, язык, культурная связь.',
      items: [
        { title: 'Происхождение по родителю', desc: 'Один из родителей или усыновитель — поляк или имел Karta Polaka. Свидетельства о рождении и подтверждение польской национальности.' },
        { title: 'Происхождение по бабушке/дедушке', desc: 'Двое из четырёх дедушек/бабушек — поляки. Самая частая основа: метрики из Galicji, Kresów, Wileńszczyzny с записью narodowość polska.' },
        { title: 'Один прадедушка/прабабушка-поляк', desc: 'Если у вас в роду один поляк в третьем поколении и активная польская идентичность — школа полонийная, общественная деятельность, Polonia Aktywna.' },
        { title: 'Деятельность в польских организациях', desc: 'Минимум 3 года активного участия в polonijnych — Związek Polaków, Stowarzyszenie, школы при костёлах. Подтверждается зашвиадченьями организации.' },
        { title: 'Знание польского языка и культуры', desc: 'Уровень разговорный. Консул проверяет на собеседовании: рассказ о семье, праздниках, истории, географии Polski. Готовим за 3–4 месяца с нуля.' },
        { title: 'Декларация принадлежности к Народу', desc: 'Письменное oświadczenie o przynależności do Narodu Polskiego перед консулом или воеводой. Без принуждения — добровольное самоотождествление.' }
      ]
    },
    timeline: {
      title: 'Как получаем Karta Polaka',
      subtitle: 'Главное узкое место — поиск архивных метрик и язык. Часто полгода-год до подачи.',
      steps: [
        { title: 'Бесплатная консультация', duration: '30 мин', desc: 'Разбираем родословную, оцениваем шансы, обсуждаем где подавать — у консула в стране проживания или у воеводы (для имеющих ВНЖ в Польше).' },
        { title: 'Архивный поиск', duration: '2–6 мес', desc: 'Запросы в państwowe archiwa в Польше, ЗАГСы Литвы, Беларуси, Украины. Метрики USC, parafialne, akta hipoteczne, listy zsyłkowe — всё, что подтверждает narodowość polska.' },
        { title: 'Подготовка к языковому экзамену', duration: '3–6 мес', desc: 'Если язык на нуле — курс с носителем, подготовка к темам собеседования: rodzina, święta, historia, geografia. Минимум A2-B1 разговорный.' },
        { title: 'Wniosek o Kartę Polaka', duration: '1 неделя', desc: 'Заполняем wniosek, формируем пакет: метрики, фото, oświadczenia, dowody działalności. Перевод присяжный — где нужно.' },
        { title: 'Запись и собеседование', duration: '2–6 мес ожидание', desc: 'Очередь в polskim konsulacie или urzędzie wojewódzkim. На собеседовании консул задаёт вопросы 30–60 мин. Сопровождаем при подготовке.' },
        { title: 'Решение', duration: '60–90 дней', desc: 'Konsul выдаёт Kartę Polaka в виде пластиковой карты. С ней — без визы в Польшу, бесплатное обучение, право работать без zezwolenia.' },
        { title: 'Применение карты', duration: 'опционально', desc: 'С Kartą Polaka подаём wniosek o Kartę Stałego Pobytu — без 4 лет ВНЖ. Через 1 год пребывания — гражданство. Делаем оба этапа.' }
      ]
    },
    documents: {
      title: 'Доказательства польских корней',
      subtitle: 'Чем больше документов — тем сильнее заявление. Иногда хватает 2 метрик, иногда нужны 8+ источников.',
      items: [
        'Свидетельство о рождении заявителя + переводы',
        'Свидетельства о рождении родителей, дедушек и бабушек (с указанием narodowości polskiej)',
        'Свидетельства о браке предков (часто фиксируют национальность)',
        'Документы о смене имени и фамилии (если фамилия полонизирована/русифицирована)',
        'Архивные выписки: USC, parafialne, państwowe archiwa, akty hipoteczne',
        'Зашвиадченья от polonijnych организаций об участии (минимум 3 года)',
        'Сертификаты обучения в школах при костёлах, на курсах польского',
        'Фото семьи, писем на польском, дневников — поддерживающие доказательства',
        'Документы о репрессиях (списки депортированных, NKVD, lagrowych) — сильное доказательство'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Госпошлин нет. Платите только за нашу работу и архивные запросы.',
      items: [
        { label: 'Консультация и оценка', value: 'Бесплатно', note: '30 минут · оцениваем шансы' },
        { label: 'Архивный поиск', value: 'от 800 PLN', note: 'За одного предка · 2–4 архива' },
        { label: 'Karta Polaka под ключ', value: 'от 4 500 PLN', note: 'От архивов до получения карты' },
        { label: 'Подготовка к собеседованию', value: 'от 2 500 PLN', note: 'Курс с носителем · 30 часов' }
      ],
      note: 'Сложные дела (разрушенные архивы, спорная национальность, отказ при первой подаче) — отдельная смета. При выигрыше apelacji компенсируем часть оплаты.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 7 września 2007 r. o Karcie Polaka (tj. Dz.U. 2023 poz. 192)',
        'Rozporządzenie MSZ ws. wzoru wniosku o przyznanie Karty Polaka',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach — art. 195 ust. 1 pkt 9 (PR на основании Karty Polaka)',
        'Ustawa o obywatelstwie polskim — art. 30 ust. 1 pkt 7 (uznanie за 1 год после Karty Polaka + PR)',
        'Konstytucja RP — art. 52 ust. 5 (право возвращения poliaków)'
      ]
    },
    faq: [
      { q: 'Сколько поколений предков надо доказать?', a: 'Минимум до бабушек/дедушек (2 поколения назад) — двое из четырёх должны быть поляками. Если только прадедушка/прабабушка — нужны дополнительные доказательства активной польской идентичности (Polonia, школа, организация).' },
      { q: 'Можно ли подавать в Польше или только в стране проживания?', a: 'Если у вас уже есть ВНЖ или ПМЖ в Польше — подаёте у wojewody (воеводы). Если живёте в стране происхождения — у консула. Через консула быстрее (нет очередей в Mazowieckim Urzędzie — Мазовецком воеводском управлении), но даты собеседования бронируются за 6–12 месяцев.' },
      { q: 'Какой уровень польского нужен?', a: 'Не B2 и не Полонистика — разговорный А2-B1. Консул задаёт темы из быта: rodzina (семья), święta (праздники), polska kuchnia (польская кухня), historia w skrócie (история кратко), geografia. Главное — отвечать на польском, а не на русском.' },
      { q: 'Сколько ждать решения?', a: '60 дней по закону, на практике 90–180 дней. Komision при konsulacie (комиссия при консульстве) заседает раз в месяц. Если документы безупречны — выдают на месте после собеседования.' },
      { q: 'Что даёт Karta Polaka?', a: 'Бесплатная виза D (по сути виза для работы и учёбы), право работать без zezwolenia (разрешения на работу), бесплатное обучение в государственных вузах, скидки на транспорт, ускоренный путь к ПМЖ (без 4 лет ВНЖ) и гражданству (1 год после ПМЖ).' },
      { q: 'Что если предки — поляки из Волыни/Львова/Вильно/Гродно?', a: 'Это идеальная ситуация — самая распространённая основа Karty Polaka. Метрики из Kresów Wschodnich (Восточных Окраин — современные Литва, Беларусь, Украина) работают, нужно лишь найти их в архивах. У нас сеть исследователей в Гродно, Львове, Вильнюсе.' },
      { q: 'Что делать, если фамилия русифицирована (Polski → Polski/Polskij)?', a: 'Не препятствие. Polonizacja (полонизация) фамилий и имён — стандартная практика для Polaków в Российской Империи и СССР. Метрики до этого периода или свидетельства о смене фамилии — разрешают вопрос.' }
    ],
    related: ['karta-stalego-pobytu', 'obywatelstwo', 'apostille'],
    ctaTitle: 'Karta Polaka — короткий путь домой',
    ctaSubtitle: 'Бесплатно оцениваем родословную и шансы за 2 рабочих дня. Собираем архивы, готовим к собеседованию, доводим до карты в руках.'
  },
  pl: {
    slug: 'karta-polaka',
    group: 'immigration',
    icon: 'fingerprint',
    badge: 'Karta Polaka · szybka ścieżka do PR',
    title: 'Karta Polaka',
    subtitle: 'Uznanie polskiego pochodzenia i przyspieszona droga do PR i obywatelstwa',
    lead: 'Karta Polaka potwierdza przynależność do Narodu Polskiego. Sama karta nie daje pobytu, ale otwiera drogę do Karty Stałego Pobytu bez 4-letniego ВНЖ i do obywatelstwa po 1 roku PR. Przygotowujemy do konsula lub wojewody: weryfikujemy genealogię, zbieramy dowody polskiego pochodzenia, doprowadzamy poziom polskiego do rozmowy i prowadzimy sprawę.',
    facts: [
      { label: 'Termin rozpatrzenia', value: '60–180 dni', note: 'konsul · wojewoda' },
      { label: 'Ważność', value: '10 lat', note: 'odnawialna bezterminowo' },
      { label: 'Wniosek', value: 'bezpłatnie', note: 'brak opłat skarbowych' },
      { label: 'Po Karcie Polaka', value: 'PR w 2–3 mies.', note: 'bez 4 lat TRC' }
    ],
    grounds: {
      title: 'Kto może otrzymać Kartę Polaka',
      subtitle: 'Dokument wydawany za przynależność do Narodu Polskiego — nie za poprzednie obywatelstwo. Trzy poziomy dowodowe: pochodzenie, język, więź kulturowa.',
      items: [
        { title: 'Pochodzenie po rodzicu', desc: 'Jeden z rodziców lub przysposabiający — polskiego pochodzenia lub miał Kartę Polaka.' },
        { title: 'Pochodzenie po dziadkach', desc: 'Dwoje z czworga dziadków — polskiej narodowości. Najczęstsza podstawa: metryki z Galicji, Kresów, Wileńszczyzny.' },
        { title: 'Jeden pradziadek/prababcia', desc: 'Jeden Polak w trzecim pokoleniu + aktywna polska tożsamość — szkoła polonijna, organizacja, Polonia.' },
        { title: 'Działalność w organizacjach polonijnych', desc: 'Min. 3 lata aktywnego udziału — Związek Polaków, Stowarzyszenia, szkoły przy parafiach.' },
        { title: 'Znajomość polskiego i kultury', desc: 'Poziom konwersacyjny. Konsul sprawdza na rozmowie: rodzina, święta, historia, geografia.' },
        { title: 'Deklaracja przynależności', desc: 'Pisemne oświadczenie o przynależności do Narodu Polskiego — dobrowolne samookreślenie.' }
      ]
    },
    timeline: {
      title: 'Jak prowadzimy sprawę',
      subtitle: 'Wąskie gardło — archiwa i język. Często 6–12 mies. do złożenia wniosku.',
      steps: [
        { title: 'Bezpłatna konsultacja', duration: '30 min', desc: 'Genealogia, szanse, miejsce złożenia (konsul vs wojewoda).' },
        { title: 'Poszukiwania archiwalne', duration: '2–6 mies.', desc: 'Zapytania do archiwów państwowych, USC Litwy, Białorusi, Ukrainy.' },
        { title: 'Przygotowanie językowe', duration: '3–6 mies.', desc: 'Kurs z native speakerem, tematy rozmowy. Min. A2-B1.' },
        { title: 'Wniosek o Kartę Polaka', duration: '1 tydz.', desc: 'Wypełnienie, kompletacja: metryki, zdjęcia, oświadczenia.' },
        { title: 'Termin i rozmowa', duration: '2–6 mies. oczekiwania', desc: 'Kolejka w konsulacie lub urzędzie wojewódzkim. Rozmowa 30–60 min.' },
        { title: 'Decyzja', duration: '60–90 dni', desc: 'Konsul wydaje plastikową Kartę. Bez wizy do Polski, prawo pracy bez zezwolenia.' },
        { title: 'Wykorzystanie karty', duration: 'opcjonalnie', desc: 'Wniosek o PR bez 4 lat TRC. Po roku — obywatelstwo.' }
      ]
    },
    documents: {
      title: 'Dowody polskiego pochodzenia',
      subtitle: 'Im więcej dokumentów — tym mocniejszy wniosek.',
      items: [
        'Akt urodzenia wnioskodawcy + tłumaczenia',
        'Akty urodzenia rodziców, dziadków (z wpisem narodowość polska)',
        'Akty małżeństwa przodków (często zawierają narodowość)',
        'Dokumenty zmiany nazwiska (jeśli nazwisko zruszczone)',
        'Wypisy archiwalne: USC, parafialne, państwowe archiwa, akty hipoteczne',
        'Zaświadczenia organizacji polonijnych (min. 3 lata)',
        'Certyfikaty kursów polskiego, szkół przy parafiach',
        'Zdjęcia rodziny, listy po polsku, dzienniki — dowody pomocnicze',
        'Dokumenty represji (listy zsyłkowe, NKWD) — silny dowód'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Brak opłat skarbowych. Płacisz tylko za naszą pracę i archiwa.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · ocena szans' },
        { label: 'Poszukiwania archiwalne', value: 'od 800 PLN', note: '1 przodek · 2–4 archiwa' },
        { label: 'Karta Polaka pod klucz', value: 'od 4 500 PLN', note: 'Od archiwów do karty' },
        { label: 'Przygotowanie do rozmowy', value: 'od 2 500 PLN', note: 'Native · 30 godzin' }
      ],
      note: 'Sprawy trudne (zniszczone archiwa, sporna narodowość, odmowa) — osobna wycena.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 7 września 2007 r. o Karcie Polaka (tj. Dz.U. 2023 poz. 192)',
        'Rozporządzenie MSZ ws. wzoru wniosku o przyznanie Karty Polaka',
        'Ustawa z 12 grudnia 2013 r. o cudzoziemcach — art. 195 ust. 1 pkt 9',
        'Ustawa o obywatelstwie polskim — art. 30 ust. 1 pkt 7',
        'Konstytucja RP — art. 52 ust. 5'
      ]
    },
    faq: [
      { q: 'Ile pokoleń przodków trzeba udowodnić?', a: 'Min. dziadkowie — dwoje z czworga musi być Polakami. Pradziadkowie wymagają dodatkowych dowodów aktywnej polskości.' },
      { q: 'Konsul czy wojewoda?', a: 'TRC/PR w Polsce — wojewoda. Kraj pochodzenia — konsul. Konsul szybciej, ale terminy bookowane na 6–12 mies.' },
      { q: 'Jaki polski wystarczy?', a: 'A2-B1 konwersacyjny. Nie B2. Tematy z życia: rodzina, święta, kuchnia, geografia.' },
      { q: 'Ile czeka się na decyzję?', a: '60 dni ustawowo, w praktyce 90–180. Komisja konsularna zbiera się raz w miesiącu.' },
      { q: 'Co daje Karta Polaka?', a: 'Bezpłatna wiza D, praca bez zezwolenia, bezpłatne studia, zniżki na transport, PR bez 4 lat TRC, obywatelstwo po 1 roku PR.' },
      { q: 'Przodkowie z Wołynia/Lwowa/Wilna?', a: 'Idealna sytuacja — najczęstsza podstawa. Metryki z Kresów (Litwa, Białoruś, Ukraina) działają.' },
      { q: 'Nazwisko zruszczone?', a: 'Nie jest przeszkodą. Metryki sprzed rusyfikacji rozwiązują sprawę.' }
    ],
    related: ['karta-stalego-pobytu', 'obywatelstwo', 'apostille'],
    ctaTitle: 'Karta Polaka — krótka droga do domu',
    ctaSubtitle: 'Bezpłatnie oceniamy genealogię w 2 dni. Archiwa, przygotowanie, wniosek — pod klucz.'
  },
  en: {
    slug: 'karta-polaka',
    group: 'immigration',
    icon: 'fingerprint',
    badge: 'Karta Polaka · fast track to PR',
    title: 'Karta Polaka',
    subtitle: 'Recognition of Polish origin — fast track to PR and citizenship',
    lead: 'Karta Polaka certifies belonging to the Polish Nation. The card itself doesn\'t grant residence, but it opens the route to permanent residence without the 4-year TRC waiting period and to citizenship after just 1 year of PR. We prepare for the consul or voivode: verify ancestry, gather evidence of Polish roots, get your Polish to interview level, and run the application.',
    facts: [
      { label: 'Decision time', value: '60–180 days', note: 'consul · voivode' },
      { label: 'Validity', value: '10 years', note: 'renewable indefinitely' },
      { label: 'Application', value: 'free', note: 'no state fees' },
      { label: 'After Karta Polaka', value: 'PR in 2–3 months', note: 'no 4 years of TRC needed' }
    ],
    grounds: {
      title: 'Who qualifies',
      subtitle: 'The card is granted for belonging to the Polish Nation — not for past Polish citizenship. Three evidentiary tiers: lineage, language, cultural ties.',
      items: [
        { title: 'Through a parent', desc: 'A parent or adoptive parent of Polish nationality or holder of Karta Polaka.' },
        { title: 'Through grandparents', desc: 'Two of four grandparents of Polish nationality. Most common basis: records from Galicia, Kresy, Vilnius region.' },
        { title: 'Through one great-grandparent', desc: 'Plus active Polish identity — Polonia school, organization, community work.' },
        { title: 'Polonia activity', desc: 'Min. 3 years in Polish-diaspora organizations — Związek Polaków, parish schools, cultural societies.' },
        { title: 'Polish language and culture', desc: 'Conversational level. The consul asks about family, holidays, history, geography.' },
        { title: 'Declaration of belonging', desc: 'Written declaration of belonging to the Polish Nation — voluntary self-identification.' }
      ]
    },
    timeline: {
      title: 'How we run it',
      subtitle: 'Bottlenecks: archives and language. Often 6–12 months before filing.',
      steps: [
        { title: 'Free consultation', duration: '30 min', desc: 'Lineage, chances, where to file (consul vs voivode).' },
        { title: 'Archive research', duration: '2–6 months', desc: 'Polish state archives, USC offices in Lithuania, Belarus, Ukraine.' },
        { title: 'Language prep', duration: '3–6 months', desc: 'Native-speaker course covering interview topics. Min. A2-B1.' },
        { title: 'Karta Polaka application', duration: '1 week', desc: 'Forms, certificates, photos, declarations, sworn translations.' },
        { title: 'Booking and interview', duration: '2–6 months wait', desc: 'Consul or voivodeship office. 30–60 min interview in Polish.' },
        { title: 'Decision', duration: '60–90 days', desc: 'Plastic card issued. Free D-visa, work without permit, free university, transit discounts.' },
        { title: 'Use the card', duration: 'optional', desc: 'PR application without 4 years TRC. Citizenship 1 year after PR.' }
      ]
    },
    documents: {
      title: 'Evidence of Polish roots',
      subtitle: 'More documents = stronger case.',
      items: [
        "Applicant's birth certificate + translations",
        'Birth certificates of parents, grandparents (with Polish nationality entry)',
        "Marriage certificates of ancestors (often record nationality)",
        'Name change documents (if surname was russified/polonized)',
        'Archive extracts: USC, parish, state archives, mortgage records',
        'Polonia organization certificates (min. 3 years activity)',
        'Polish-language course certificates, parish school records',
        'Family photos, letters in Polish, diaries — supporting evidence',
        'Repression records (deportation lists, NKVD, camps) — strong evidence'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'No state fees. You pay only for our work and archive requests.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 minutes · case review' },
        { label: 'Archive research', value: 'from 800 PLN', note: 'Per ancestor · 2–4 archives' },
        { label: 'Karta Polaka turnkey', value: 'from 4,500 PLN', note: 'Archives to card in hand' },
        { label: 'Interview prep', value: 'from 2,500 PLN', note: 'Native speaker · 30 hours' }
      ],
      note: 'Complex cases (destroyed archives, contested nationality, prior denials) — separate quote.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Karta Polaka Act of 7 September 2007 (consolidated text Dz.U. 2023 item 192)',
        'MSZ Regulation on Karta Polaka application form',
        'Foreigners Act of 12 December 2013 — art. 195 sec. 1 pt 9 (PR via Karta Polaka)',
        'Polish Citizenship Act — art. 30 sec. 1 pt 7 (recognition after 1 yr of PR + Karta)',
        'Constitution of Poland — art. 52 sec. 5 (right of return for ethnic Poles)'
      ]
    },
    faq: [
      { q: 'How many generations back?', a: 'Grandparents min. — two of four must be ethnically Polish. Going back to great-grandparents requires extra evidence of active Polish identity.' },
      { q: 'Consul or voivode?', a: 'Already in Poland on TRC/PR — voivode. Living in country of origin — consul. Consul is faster but slots booked 6–12 months ahead.' },
      { q: 'Required Polish level?', a: 'Conversational A2-B1. Not B2. Topics: family, holidays, cuisine, basic geography. Answer in Polish.' },
      { q: 'Decision time?', a: '60 days statutory, 90–180 in practice. The commission meets monthly.' },
      { q: 'What does it grant?', a: 'Free D-visa, work without permit, free university tuition, transit discounts, PR without 4-yr TRC, citizenship after 1 year of PR.' },
      { q: 'Ancestors from Volhynia/Lviv/Vilnius?', a: 'Ideal case — the most common basis. Records from Kresy Wschodnie (Lithuania, Belarus, Ukraine) work. Our researchers operate in Grodno, Lviv, Vilnius.' },
      { q: 'Russified surname?', a: 'Not a barrier. Records predating russification or name-change documents resolve it.' }
    ],
    related: ['karta-stalego-pobytu', 'obywatelstwo', 'apostille'],
    ctaTitle: 'Karta Polaka — your shortest way home',
    ctaSubtitle: 'Free 2-day genealogy review. Archives, prep, application — turnkey to card.'
  }
};

export default kartaPolaka;
