import type { ServiceEntry } from './types';

const meldunek: ServiceEntry = {
  ru: {
    slug: 'meldunek',
    group: 'documents',
    icon: 'home',
    badge: 'Pobyt czasowy / stały · USC',
    title: 'Meldunek (прописка)',
    subtitle: 'Регистрация места жительства иностранца в Польше',
    lead: 'Zameldowanie - это регистрация фактического адреса проживания в реестре PESEL. Иностранцу с долгосрочным пребыванием meldunek нужен для оформления PESEL, школы, регистрации авто, голосования в самоуправлении и при подаче на TRC через MOS v2.0. Получаем zameldowanie на pobyt czasowy (до 3 лет) или stały (без срока), оформляем zaświadczenie o zameldowaniu для urząd, банка или работодателя.',
    facts: [
      { label: 'Срок выдачи', value: '1 день', note: 'при подаче в urząd gminy' },
      { label: 'Госпошлина', value: '0 PLN', note: 'базовое zameldowanie бесплатно' },
      { label: 'Zaświadczenie', value: '17 PLN', note: 'выписка для банка/urząd' },
      { label: 'Виды', value: 'Czasowy / Stały', note: 'до 3 лет или бессрочно' }
    ],
    grounds: {
      title: 'Когда нужен meldunek',
      subtitle: 'По польскому праву иностранец обязан зарегистрироваться в течение 30 дней при пребывании свыше 30 дней.',
      items: [
        { title: 'Pobyt czasowy (до 3 лет)', desc: 'Стандартное zameldowanie для иностранцев на TRC, визе D, безвизе, ученической визе. Срок - на период действия документа пребывания.' },
        { title: 'Pobyt stały', desc: 'Только для обладателей karty stałego pobytu, długoterminowego rezydenta UE или граждан Польши. Бессрочно.' },
        { title: 'Подача на TRC через MOS v2.0', desc: 'С 2026 года zameldowanie обязательно - иначе MOS отклонит wniosek. Оформляем параллельно с пакетом на TRC.' },
        { title: 'Регистрация ребёнка в школу', desc: 'Obowiązek szkolny - школа берёт детей по адресу zameldowania. Без него - отказ или klasa powitalna в другой школе.' },
        { title: 'Регистрация автомобиля', desc: 'Wydział komunikacji starostwa требует zameldowanie владельца. Без него - отказ в регистрации.' },
        { title: 'Открытие фирмового счёта', desc: 'Банки для KYC требуют zaświadczenie o zameldowaniu или umowę najmu - meldunek закрывает оба требования.' },
        { title: 'Wybory samorządowe', desc: 'Иностранец из ЕС с meldunkiem ≥ 1 года имеет право голосовать на местных выборах.' },
        { title: 'NFZ и медучреждения', desc: 'Привязка к POZ (поликлинике) - по адресу zameldowania. Без него - нужно отдельное oświadczenie pacjenta.' }
      ]
    },
    timeline: {
      title: 'Как мы оформляем meldunek',
      subtitle: 'От подписания договора до выписки z zameldowaniem - 1-2 рабочих дня.',
      steps: [
        { title: 'Консультация', duration: '20 мин', desc: 'Уточняем форму пребывания, тип meldunkа (czasowy/stały), наличие согласия собственника жилья.' },
        { title: 'Подготовка wniosku', duration: '1 день', desc: 'Заполняем zgłoszenie pobytu czasowego cudzoziemca (форма для иностранцев) или формы dla obywatela polskiego.' },
        { title: 'Согласие собственника', duration: '1 день', desc: 'Берём подпись właściciela на формуле или нотариальное upoważnienie. Если квартира снимается - umowa najmu идёт приложением.' },
        { title: 'Подача в urząd gminy', duration: '1 визит', desc: 'Сопровождаем в urząd dzielnicy. Подача - лично с паспортом и документом пребывания. Ребёнка регистрирует родитель.' },
        { title: 'Получение zameldowania', duration: '1 день', desc: 'Запись вносится в реестр PESEL в день подачи. Zaświadczenie o zameldowaniu - за 17 PLN на запрос.' },
        { title: 'Выписки для urząd / банка', duration: '1 день', desc: 'Готовим zaświadczenia для подачи в KRS, US, ZUS, банк, MOS v2.0 - по фактическим запросам.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Минимальный пакет. Точный список - после консультации.',
      items: [
        'Загранпаспорт (оригинал)',
        'Документ легального пребывания: виза D, karta pobytu, безвиз',
        'Umowa najmu или podnajmu (с собственником, не с риелтором) либо akt własności',
        'Подпись właściciela на формуле zgłoszenia (лично в urząd или через нотариальное upoważnienie)',
        'PESEL (если есть; если нет - оформляем параллельно)',
        'Свидетельство о рождении (для детей) с присяжным переводом',
        'Заполненный wniosek - готовим мы',
        'Доверенность собственника, если он не приходит лично'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Госпошлина за само zameldowanie - 0 PLN. Платится только zaświadczenie (17 PLN).',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '20 минут · оценка ситуации' },
        { label: 'Meldunek под ключ', value: 'от 350 PLN', note: 'Wniosek, согласие собственника, urząd' },
        { label: 'Meldunek + zaświadczenie + перевод', value: 'от 500 PLN', note: 'С готовой выпиской для банка/urząd' },
        { label: 'Адрес от LegalWin (для бизнеса)', value: 'от 250 PLN/мес', note: 'Юридический адрес для KRS / CEIDG' }
      ],
      note: 'Указаны гонорары LegalWin. Если собственник не идёт в urząd - нужен notarialny upoważnienie (~150 PLN у нотариуса) - отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 24 września 2010 r. o ewidencji ludności (rozdz. 3 - meldunek)',
        'Rozporządzenie MSWiA w sprawie wzorów zgłoszeń pobytu',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (art. 199 - meldunek a TRC)',
        'Ustawa z dnia 16 listopada 2006 r. o opłacie skarbowej (zaświadczenia - 17 PLN)',
        'Kodeks postępowania administracyjnego (KPA)'
      ]
    },
    faq: [
      { q: 'Можно ли оформить meldunek без согласия собственника?', a: 'Нет. Подпись właściciela (собственника) на формуле - обязательное условие. Если он отказывается - нужно идти через sąd cywilny (гражданский суд) с powództwem o ustalenie zameldowania (иском об установлении регистрации) (если есть umowa najmu - договор аренды и фактическое проживание). На практике это редко - обычно договариваемся с собственником о подписи или нотариальном upoważnieniu (доверенности).' },
      { q: 'Что если арендодатель отказывается прописывать?', a: 'Мы помогаем составить договор аренды с пунктом о согласии на zameldowanie (регистрацию) или подбираем владельцев, готовых к meldunkу. Альтернатива - meldunek у работодателя, родственника или через адрес LegalWin для предпринимателей.' },
      { q: 'Обязателен ли meldunek для подачи на TRC?', a: 'С 2026 года через MOS v2.0 - фактически да. Система автоматически подтягивает адрес из реестра PESEL. Без zameldowania (регистрации) придётся отдельно прикладывать umowę najmu (договор аренды) и oświadczenie właściciela (заявление собственника), что увеличивает риск отказа на формальном основании.' },
      { q: 'На какой срок прописываться?', a: 'Pobyt czasowy (временное пребывание) - на срок действия вашего документа пребывания (TRC, визы, безвиза). При получении новой karty pobytu (карты пребывания) meldunek нужно продлить.' },
      { q: 'Можно ли иметь несколько meldunków?', a: 'Только один pobyt stały (постоянная регистрация). Pobyt czasowy (временная) можно иметь параллельно с stałym - постоянной (например, прописка stała у родителей и czasowy в Варшаве на работу). Иностранцу - только один.' },
      { q: 'Что делать при смене адреса?', a: 'В течение 30 дней - wymeldowanie (выписка) со старого адреса (часто автоматически при zameldowaniu - регистрации на новый) и zameldowanie на новый. Делаем за 1 визит.' },
      { q: 'Сколько стоит meldunek в реальности?', a: 'Само zameldowanie (регистрация) - 0 PLN. Zaświadczenie (справка) - 17 PLN. Если квартира съёмная - обычно собственник просит +50-100 PLN за визит в urząd (учреждение) или +150 PLN за нотариальное upoważnienie (доверенность). Наш гонорар - от 350 PLN.' }
    ],
    related: ['pesel', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Оформим meldunek за 1 день',
    ctaSubtitle: 'Бесплатная консультация: проверим вашу ситуацию, договоримся с собственником, подадим в urząd. От первого звонка до zaświadczenia - обычно 1-2 рабочих дня.'
  },
  pl: {
    slug: 'meldunek',
    group: 'documents',
    icon: 'home',
    badge: 'Pobyt czasowy / stały · USC',
    title: 'Meldunek',
    subtitle: 'Zameldowanie cudzoziemca w Polsce',
    lead: 'Zameldowanie to rejestracja faktycznego adresu w rejestrze PESEL. Cudzoziemcowi z długoterminowym pobytem meldunek jest potrzebny do PESEL, szkoły, rejestracji auta, głosowania w wyborach samorządowych i wniosku o TRC przez MOS v2.0. Załatwiamy zameldowanie czasowe (do 3 lat) lub stałe, wystawiamy zaświadczenia dla urzędu, banku, pracodawcy.',
    facts: [
      { label: 'Termin', value: '1 dzień', note: 'po złożeniu w urzędzie' },
      { label: 'Opłata', value: '0 PLN', note: 'samo zameldowanie bezpłatnie' },
      { label: 'Zaświadczenie', value: '17 PLN', note: 'wypis dla banku/urzędu' },
      { label: 'Rodzaje', value: 'Czasowy / Stały', note: 'do 3 lat lub bezterminowo' }
    ],
    grounds: {
      title: 'Kiedy potrzebujesz meldunku',
      subtitle: 'Cudzoziemiec ma obowiązek zameldowania w ciągu 30 dni przy pobycie powyżej 30 dni.',
      items: [
        { title: 'Pobyt czasowy (do 3 lat)', desc: 'Standard dla TRC, wizy D, ruchu bezwizowego, wizy studenckiej. Termin - na okres dokumentu pobytu.' },
        { title: 'Pobyt stały', desc: 'Tylko dla posiadaczy karty stałego pobytu, rezydenta UE lub obywateli RP.' },
        { title: 'Wniosek o TRC w MOS v2.0', desc: 'Od 2026 zameldowanie obowiązkowe - bez niego MOS odrzuca wniosek formalnie.' },
        { title: 'Zapis dziecka do szkoły', desc: 'Obowiązek szkolny - szkoły rejonowe biorą dzieci po adresie zameldowania.' },
        { title: 'Rejestracja samochodu', desc: 'Wydział komunikacji wymaga zameldowania właściciela.' },
        { title: 'Konto firmowe', desc: 'Banki w ramach KYC żądają zaświadczenia o zameldowaniu lub umowy najmu.' },
        { title: 'Wybory samorządowe', desc: 'Cudzoziemiec UE z meldunkiem ≥ 1 rok - czynne prawo wyborcze.' },
        { title: 'NFZ i POZ', desc: 'Przypisanie do POZ - po adresie zameldowania.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Od umowy do zaświadczenia o zameldowaniu - 1-2 dni robocze.',
      steps: [
        { title: 'Konsultacja', duration: '20 min', desc: 'Ustalamy formę pobytu, rodzaj meldunku, zgodę właściciela.' },
        { title: 'Wniosek', duration: '1 dzień', desc: 'Wypełniamy zgłoszenie pobytu czasowego cudzoziemca lub wniosek standardowy.' },
        { title: 'Zgoda właściciela', duration: '1 dzień', desc: 'Podpis na formularzu lub notarialne upoważnienie. Umowa najmu w załączniku.' },
        { title: 'Złożenie w urzędzie', duration: '1 wizyta', desc: 'Towarzyszymy w urzędzie dzielnicy. Składanie z paszportem i dokumentem pobytu.' },
        { title: 'Zameldowanie', duration: '1 dzień', desc: 'Wpis do PESEL od ręki. Zaświadczenie - 17 PLN na żądanie.' },
        { title: 'Zaświadczenia', duration: '1 dzień', desc: 'Wypisy dla KRS, US, ZUS, banku, MOS - wedle potrzeb.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Pakiet bazowy.',
      items: [
        'Paszport (oryginał)',
        'Dokument legalnego pobytu: wiza D, karta pobytu, ruch bezwizowy',
        'Umowa najmu/podnajmu lub akt własności',
        'Podpis właściciela na zgłoszeniu (osobiście lub notarialne upoważnienie)',
        'PESEL (jeśli jest; jeśli nie - załatwiamy razem)',
        'Akt urodzenia dziecka z tłumaczeniem przysięgłym',
        'Wypełniony wniosek - przygotowujemy my',
        'Pełnomocnictwo właściciela, jeśli nie stawia się osobiście'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Opłata urzędowa za zameldowanie - 0 PLN. Płatne tylko zaświadczenie (17 PLN).',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '20 minut · ocena sytuacji' },
        { label: 'Meldunek pod klucz', value: 'od 350 PLN', note: 'Wniosek, zgoda, urząd' },
        { label: 'Meldunek + zaświadczenie + tłumaczenie', value: 'od 500 PLN', note: 'Z wypisem dla banku/urzędu' },
        { label: 'Adres od LegalWin (biznes)', value: 'od 250 PLN/mies.', note: 'Adres prawny dla KRS/CEIDG' }
      ],
      note: 'Powyżej honoraria LegalWin. Notarialne upoważnienie właściciela (~150 PLN) - osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 24 września 2010 r. o ewidencji ludności (rozdz. 3)',
        'Rozporządzenie MSWiA ws. wzorów zgłoszeń pobytu',
        'Ustawa z 12 grudnia 2013 r. o cudzoziemcach (art. 199)',
        'Ustawa z 16 listopada 2006 r. o opłacie skarbowej',
        'Kodeks postępowania administracyjnego (KPA)'
      ]
    },
    faq: [
      { q: 'Czy można zameldować się bez zgody właściciela?', a: 'Nie. Podpis właściciela jest konieczny. Jeśli odmawia - sąd cywilny (powództwo o ustalenie). W praktyce - umawiamy podpis lub notarialne upoważnienie.' },
      { q: 'Co jeśli wynajmujący odmawia meldunku?', a: 'Pomagamy redagować umowę z klauzulą zgody na meldunek lub szukamy najemców gotowych. Alternatywy - meldunek u pracodawcy/krewnego lub adres LegalWin dla firm.' },
      { q: 'Czy meldunek jest obowiązkowy do TRC?', a: 'Od 2026 (MOS v2.0) - faktycznie tak. System pobiera adres z PESEL. Bez meldunku trzeba załączać umowę najmu - większe ryzyko odmowy formalnej.' },
      { q: 'Na jaki okres meldować się?', a: 'Pobyt czasowy - na termin dokumentu pobytu (TRC, wiza). Po nowej karcie meldunek przedłużasz.' },
      { q: 'Można mieć kilka meldunków?', a: 'Tylko jeden stały. Czasowy może być równolegle ze stałym. Cudzoziemiec - tylko jeden.' },
      { q: 'Zmiana adresu - co robić?', a: 'W ciągu 30 dni - wymeldowanie ze starego (często automatyczne) i zameldowanie na nowy. Załatwiamy w 1 wizycie.' },
      { q: 'Ile kosztuje meldunek realnie?', a: 'Zameldowanie - 0 PLN. Zaświadczenie - 17 PLN. Właściciel często prosi 50-100 PLN za wizytę lub ~150 PLN za notarialne upoważnienie. Nasze honorarium - od 350 PLN.' }
    ],
    related: ['pesel', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Zameldujemy w 1 dzień',
    ctaSubtitle: 'Bezpłatna konsultacja: oceniamy sytuację, dogadujemy się z właścicielem, składamy wniosek. Od telefonu do zaświadczenia - 1-2 dni robocze.'
  },
  en: {
    slug: 'meldunek',
    group: 'documents',
    icon: 'home',
    badge: 'Temporary / Permanent · USC',
    title: 'Meldunek (address registration)',
    subtitle: 'Register your Polish address, with or without your landlord',
    lead: "You can't open a corporate bank account, enrol a child in district school, register a car, or file a TRC through MOS v2.0 without an address logged in the PESEL register. That's what zameldowanie does. Most foreigners trip on it because the landlord won't sign the form, or signs it for the wrong period. We handle the wniosek, secure owner consent (or a notarised authorisation if they refuse to show up at urząd), and walk you through the filing. Usually one working day.",
    facts: [
      { label: 'Registration', value: '1 day', note: 'on-site at urząd dzielnicy' },
      { label: 'State fee', value: '0 PLN', note: 'registration itself is free' },
      { label: 'Certificate', value: '17 PLN', note: 'one wypis for bank or urząd' },
      { label: 'Types', value: 'Temporary / Permanent', note: 'up to 3 years vs indefinite' }
    ],
    grounds: {
      title: 'When meldunek actually matters',
      subtitle: 'Polish law gives foreigners 30 days to register if their stay exceeds 30 days. Here is where the rule bites in practice.',
      items: [
        { title: 'Filing TRC via MOS v2.0', desc: 'From 2026 the system reads your address straight from PESEL. No zameldowanie means MOS rejects on formal grounds before a clerk reads the case.' },
        { title: 'Enrolling a child in district school', desc: 'Public schools allocate spots by registered address. Without meldunek you go on a waitlist for any free seat, typically a school across town.' },
        { title: 'Opening a corporate bank account', desc: 'KYC officers want either zaświadczenie o zameldowaniu or a notarised tenancy. Santander and mBank refuse to onboard without one.' },
        { title: 'Registering a car', desc: 'Wydział komunikacji needs the owner zameldowanie. Bought a car but not registered locally? Plates sit in limbo.' },
        { title: 'Temporary residence, up to 3 years', desc: 'Default for TRC, D-visa, student visa, visa-free stays. Tied to the validity of your stay document.' },
        { title: 'Permanent residence, indefinite', desc: 'Open only to PR cardholders, EU long-term residents, and Polish citizens.' },
        { title: 'Voting in local elections', desc: 'EU foreigners with at least 12 months of meldunek can vote at commune level.' },
        { title: 'NFZ healthcare and POZ assignment', desc: 'Your assigned primary-care clinic follows your registered address. Useful if you want a specific GP.' }
      ]
    },
    timeline: {
      title: 'How we run it',
      subtitle: 'Engagement to certificate, typically 1 to 2 working days.',
      steps: [
        { title: 'Free 20-min call', duration: '20 min', desc: 'We map stay form, type of meldunek, and whether the landlord will cooperate.' },
        { title: 'Application prepared', duration: '1 day', desc: 'We fill the foreigner registration form (cudzoziemiec) or the standard wniosek and pack the supporting documents.' },
        { title: 'Landlord consent', duration: '1 day', desc: "Signature on the form, or, if they won't come to urząd, a notarised authorisation around 150 PLN at any notariusz." },
        { title: 'Filing at urząd dzielnicy', duration: '1 visit', desc: 'We meet you outside the building. In person with passport and stay document. The clerk runs the registration on the spot.' },
        { title: 'PESEL register updated', duration: 'same day', desc: 'Entry is live immediately. Certificate (wypis) issued for 17 PLN when you need paper proof.' },
        { title: 'Certificates for KRS, US, ZUS, MOS, bank', duration: '1 day', desc: 'We collect whichever zaświadczenia your downstream filings need.' }
      ]
    },
    documents: {
      title: 'What we need from you',
      subtitle: 'Minimum set.',
      items: [
        'Passport (original; the clerk verifies and returns it the same visit)',
        'Stay document: D-visa, TRC card, or visa-free permit',
        'Tenancy or sub-tenancy agreement signed by the actual owner (or title deed if you own)',
        'Landlord signature on the form in person at urząd, or a notarised power of attorney',
        'PESEL if you already have one (if not, we file in parallel)',
        "Child's birth certificate with sworn translation (only when registering minors)",
        'Completed wniosek that we prepare from the call',
        'Owner notarised authorisation if there is any chance they cancel on the day'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Registration is free at urząd. Certificate is 17 PLN. Our work is the only billable item.',
      items: [
        { label: 'Consultation', value: 'Free', note: '20 minutes · case review · go or no-go' },
        { label: 'Turnkey meldunek', value: 'from 350 PLN', note: 'Application, landlord coordination, urząd visit' },
        { label: 'Meldunek + certificate + sworn translation', value: 'from 500 PLN', note: 'For banks, MOS filings, employer onboarding' },
        { label: 'LegalWin business address', value: 'from 250 PLN/mo', note: "Legal address for Sp. z o.o. or CEIDG when meldunek isn't possible" }
      ],
      note: 'LegalWin fees only. A notarised landlord power of attorney runs around 150 PLN extra and goes straight to the notariusz.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Ustawa o ewidencji ludności of 24 September 2010, Chapter 3',
        'MSWiA regulation on foreigner registration form templates',
        'Ustawa o cudzoziemcach of 12 December 2013, Article 199',
        'Stamp Duty Act of 16 November 2006 (the 17 PLN certificate fee)',
        'Code of Administrative Procedure (KPA) for appeals'
      ]
    },
    faq: [
      { q: "My landlord won't register me. Can I still get meldunek?", a: 'Yes, but it costs a bit more. Either a notarised authorisation (~150 PLN, signed once and you go alone), or, if they actively refuse, a civil claim to establish registration (rare, slow, usually not worth it). What works in practice: a tenancy with an explicit registration clause, or a meldunek-friendly landlord we vet for you.' },
      { q: 'Do I need meldunek for a TRC under MOS v2.0?', a: 'In 2026, effectively yes. MOS reads the address from PESEL. Without zameldowanie the system flags the case as formally incomplete and your TRC sits in limbo. Workaround: a notarised umowa najmu plus a written owner statement, but it raises rejection risk by an order of magnitude.' },
      { q: 'How long should I register for?', a: 'For the duration of your current stay document. When you renew TRC, you renew meldunek. Permanent is reserved for PR cardholders.' },
      { q: 'Can I hold several meldunki at once?', a: 'One permanent only. Multiple temporary registrations are legal for citizens, but foreigners are capped at one.' },
      { q: "I'm moving across Warsaw. What do I do?", a: 'You have 30 days. We file the new registration at the new urząd dzielnicy and the old one closes automatically in PESEL. One visit, no separate deregistration form.' },
      { q: 'What does it actually cost end-to-end?', a: 'Registration: 0 PLN. Certificate: 17 PLN. Landlord time: 50 to 100 PLN cash, or around 150 PLN for a notarised authorisation. Our fee from 350 PLN turnkey.' },
      { q: 'Is the meldunek certificate good enough for my UK or US bank back home?', a: 'For most British and American institutions yes. The certificate with a sworn English translation passes proof-of-address checks at HMRC and IRS-facing banks alike.' }
    ],
    related: ['pesel', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Meldunek sorted in a day',
    ctaSubtitle: 'Free 20-min consultation. We map the case, line up the landlord, and file at urząd. Typical turnaround is 1 to 2 working days from first call.'
  },
  tr: {
    slug: 'meldunek',
    group: 'documents',
    icon: 'home',
    badge: 'Pobyt czasowy / stały · USC',
    title: 'Meldunek (adres beyanı)',
    subtitle: 'Polonya\'da yabancılar için ikamet adresi kaydı',
    lead: 'Zameldowanie (meldunek), gerçek ikamet adresinin PESEL siciline kaydedilmesidir. Polonya\'da uzun süreli kalan yabancılar PESEL, okul kaydı, araç tescili, yerel seçimlerde oy verme ve MOS v2.0 üzerinden TRC başvurusu için meldunek\'e ihtiyaç duyar. Pobyt czasowy (3 yıla kadar geçici) veya stały (süresiz daimi) zameldowanie hizmeti veriyor; urząd, banka veya işveren için zaświadczenie o zameldowaniu (ikamet belgesi) düzenliyoruz.',
    facts: [
      { label: 'Verilme süresi', value: '1 gün', note: 'urząd gminy\'de başvuruda' },
      { label: 'Resmi harç', value: '0 PLN', note: 'temel zameldowanie ücretsizdir' },
      { label: 'Zaświadczenie', value: '17 PLN', note: 'banka / urząd için ikamet belgesi' },
      { label: 'Türleri', value: 'Czasowy / Stały', note: '3 yıla kadar veya süresiz' }
    ],
    grounds: {
      title: 'Meldunek ne zaman gerekir',
      subtitle: 'Polonya hukuku gereği yabancı, 30 günü aşan ikametlerde 30 gün içinde adres beyanı yapmak zorundadır.',
      items: [
        { title: 'Pobyt czasowy (3 yıla kadar)', desc: 'TRC, D vizesi, vizesiz giriş, öğrenci vizesiyle gelen yabancılar için standart zameldowanie. Süre - ikamet belgesinin geçerlilik süresi kadardır.' },
        { title: 'Pobyt stały', desc: 'Yalnızca karta stałego pobytu, AB uzun dönem mukim statüsü veya Polonya vatandaşlığı sahipleri için. Süresizdir.' },
        { title: 'MOS v2.0 üzerinden TRC başvurusu', desc: '2026\'dan itibaren zameldowanie zorunludur - aksi halde MOS sistemi wniosek\'i otomatik reddeder. TRC paketiyle paralel olarak hazırlıyoruz.' },
        { title: 'Çocuğun okula kaydı', desc: 'Obowiązek szkolny (zorunlu eğitim) - okullar çocukları zameldowanie adresine göre kabul eder. Olmazsa kabul reddedilir veya çocuk başka okulun klasa powitalna\'sına (uyum sınıfı) yönlendirilir.' },
        { title: 'Araç tescili', desc: 'Wydział komunikacji starostwa (taşımacılık dairesi) ruhsat sahibinin zameldowanie\'sini ister. Olmadan tescil yapılmaz.' },
        { title: 'Şirket banka hesabı açılışı', desc: 'Bankalar KYC çerçevesinde zaświadczenie o zameldowaniu veya umowa najmu (kira sözleşmesi) ister - meldunek her iki şartı da karşılar.' },
        { title: 'Wybory samorządowe (yerel seçimler)', desc: 'AB vatandaşı, en az 1 yıllık meldunek\'e sahipse yerel seçimlerde oy hakkına sahiptir.' },
        { title: 'NFZ ve sağlık kuruluşları', desc: 'POZ\'a (birinci basamak sağlık kuruluşu) bağlanma zameldowanie adresine göre yapılır. Olmadan ayrı bir oświadczenie pacjenta (hasta beyanı) gerekir.' }
      ]
    },
    timeline: {
      title: 'Meldunek\'i nasıl yapıyoruz',
      subtitle: 'Sözleşme imzasından zameldowanie belgesine kadar - 1-2 iş günü.',
      steps: [
        { title: 'Danışmanlık', duration: '20 dk', desc: 'İkamet türünüzü, meldunek tipini (czasowy / stały) ve ev sahibinin onayının olup olmadığını netleştiririz.' },
        { title: 'Wniosku hazırlığı', duration: '1 gün', desc: 'Zgłoszenie pobytu czasowego cudzoziemca (yabancılar için adres beyan formu) veya Polonya vatandaşları için standart formu doldururuz.' },
        { title: 'Ev sahibinin onayı', duration: '1 gün', desc: 'Właściciel\'in (mülk sahibinin) imzasını forma alırız veya noter onaylı upoważnienie (yetki belgesi) düzenleriz. Kira durumunda umowa najmu eklenir.' },
        { title: 'Urząd gminy\'ye başvuru', duration: '1 ziyaret', desc: 'Urząd dzielnicy\'ye sizinle birlikte gideriz. Başvuru bizzat yapılır - pasaport ve ikamet belgesiyle. Çocuğu ebeveyn kaydeder.' },
        { title: 'Zameldowanie\'nin tamamlanması', duration: '1 gün', desc: 'Kayıt başvuru günü PESEL siciline işlenir. Zaświadczenie o zameldowaniu - talep üzerine 17 PLN karşılığında.' },
        { title: 'Urząd / banka için belgeler', duration: '1 gün', desc: 'KRS, US, ZUS, banka ve MOS v2.0 için zaświadczenia hazırlarız - taleplere göre.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Asgari paket. Net liste danışmanlık sonrası belirlenir.',
      items: [
        'Pasaport (orijinal)',
        'Yasal ikamet belgesi: D vizesi, karta pobytu, vizesiz giriş kanıtı',
        'Umowa najmu veya podnajmu (mülk sahibiyle, emlakçı ile değil) ya da akt własności (tapu)',
        'Zgłoszenie formuna właściciel imzası (urząd\'da bizzat veya noter onaylı upoważnienie ile)',
        'PESEL (varsa; yoksa - paralel olarak çıkartıyoruz)',
        'Yeminli tercümeli doğum belgesi (çocuklar için)',
        'Doldurulmuş wniosek - biz hazırlıyoruz',
        'Ev sahibi şahsen gelmiyorsa - vekaletname'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Zameldowanie\'nin kendisinde resmi harç yoktur (0 PLN). Yalnızca zaświadczenie 17 PLN.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '20 dakika · durum değerlendirmesi' },
        { label: 'Anahtar teslim meldunek', value: '350 PLN\'den', note: 'Wniosek, ev sahibi onayı, urząd' },
        { label: 'Meldunek + zaświadczenie + tercüme', value: '500 PLN\'den', note: 'Banka / urząd için hazır belgeyle' },
        { label: 'LegalWin\'den iş yeri adresi', value: '250 PLN/aydan', note: 'KRS / CEIDG için yasal adres' }
      ],
      note: 'Belirtilen ücretler LegalWin danışmanlık bedelidir. Ev sahibi urząd\'a gelmiyorsa noterden upoważnienie (~150 PLN) ayrıca ödenir.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 24 września 2010 r. o ewidencji ludności (Nüfus Kayıt Kanunu - bölüm 3, meldunek)',
        'Rozporządzenie MSWiA w sprawie wzorów zgłoszeń pobytu (adres beyan formları yönetmeliği)',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Yabancılar Kanunu - madde 199, meldunek ve TRC)',
        'Ustawa z dnia 16 listopada 2006 r. o opłacie skarbowej (Damga Vergisi Kanunu - zaświadczenia 17 PLN)',
        'Kodeks postępowania administracyjnego (KPA)'
      ]
    },
    faq: [
      { q: 'Ev sahibinin onayı olmadan meldunek yapılabilir mi?', a: 'Hayır. Właściciel\'in (mülk sahibinin) form üzerinde imzası şarttır. Onay vermiyorsa - sąd cywilny (medeni mahkeme) yoluyla powództwo o ustalenie zameldowania (zameldowanie\'nin tespiti davası) açılabilir (umowa najmu ve fiili ikamet varsa). Pratikte nadiren karşılaşılır - genelde mülk sahibinden imza ya da noter onaylı upoważnienie alarak hallediyoruz.' },
      { q: 'Ev sahibi meldunek\'i kabul etmiyorsa?', a: 'Kira sözleşmesini meldunek onayı klozuyla birlikte hazırlıyoruz veya meldunek\'e açık ev sahipleri buluyoruz. Alternatif - işverende, akrabada meldunek veya işletme sahipleri için LegalWin adresi.' },
      { q: 'TRC başvurusu için meldunek zorunlu mu?', a: '2026\'dan itibaren MOS v2.0 üzerinden - fiilen evet. Sistem PESEL sicilinden adresi otomatik çeker. Zameldowanie olmadan ek olarak umowa najmu ve oświadczenie właściciela (ev sahibi beyanı) eklemeniz gerekir, bu da şekli gerekçeyle ret riskini artırır.' },
      { q: 'Hangi süre için meldunek yapılmalı?', a: 'Pobyt czasowy - ikamet belgenizin (TRC, vize, vizesiz giriş) süresi kadar. Yeni karta pobytu alındığında meldunek de uzatılmalıdır.' },
      { q: 'Birden fazla meldunek olabilir mi?', a: 'Yalnızca bir pobyt stały (daimi). Pobyt czasowy paralel olabilir (örneğin ailenizde stały, Varşova\'da iş için czasowy). Yabancılar için yalnızca tek meldunek mümkündür.' },
      { q: 'Adres değişikliğinde ne yapılmalı?', a: '30 gün içinde eski adresten wymeldowanie (kayıt silme) ve yeni adresten zameldowanie. Genelde eski silme, yeniye kaydolurken otomatik yapılır. Tek ziyarette hallediyoruz.' },
      { q: 'Meldunek gerçekte ne kadara mal olur?', a: 'Zameldowanie\'nin kendisi 0 PLN. Zaświadczenie 17 PLN. Kiralık dairede ev sahibi genelde urząd\'a geliş için +50-100 PLN ya da noter onaylı upoważnienie için +150 PLN ister. Bizim danışmanlık ücretimiz 350 PLN\'den başlar.' }
    ],
    related: ['pesel', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Meldunek\'i 1 günde halledelim',
    ctaSubtitle: 'Ücretsiz danışmanlık: durumunuzu inceler, ev sahibiyle anlaşırız, urząd\'a sunarız. İlk görüşmeden zaświadczenie\'ye genelde 1-2 iş günü.'
  },
  uk: {
    slug: 'meldunek',
    group: 'documents',
    icon: 'home',
    badge: 'Pobyt czasowy / stały · USC',
    title: 'Meldunek (прописка)',
    subtitle: 'Реєстрація місця проживання іноземця в Польщі',
    lead: 'Zameldowanie — це реєстрація фактичної адреси проживання в реєстрі PESEL. Іноземцю з довгостроковим перебуванням meldunek потрібен для оформлення PESEL, школи, реєстрації авто, голосування в самоврядуванні та при поданні на карту побуту через MOS v2.0. Оформлюємо zameldowanie на pobyt czasowy (до 3 років) або stały (без терміну), готуємо zaświadczenie o zameldowaniu для urząd, банку чи роботодавця.',
    facts: [
      { label: 'Термін видачі', value: '1 день', note: 'при поданні в urząd gminy' },
      { label: 'Держмито', value: '0 PLN', note: 'базове zameldowanie безкоштовно' },
      { label: 'Zaświadczenie', value: '17 PLN', note: 'довідка для банку/urząd' },
      { label: 'Види', value: 'Czasowy / Stały', note: 'до 3 років або безстроково' }
    ],
    grounds: {
      title: 'Коли потрібен meldunek',
      subtitle: 'За польським правом іноземець зобов’язаний зареєструватися протягом 30 днів при перебуванні понад 30 днів.',
      items: [
        { title: 'Pobyt czasowy (до 3 років)', desc: 'Стандартне zameldowanie для іноземців з карткою побуту, візою D, безвізом, учнівською візою. Термін — на період дії документа перебування.' },
        { title: 'Pobyt stały', desc: 'Лише для власників karty stałego pobytu, długoterminowego rezydenta UE або громадян Польщі. Безстроково.' },
        { title: 'Подання на карту побуту через MOS v2.0', desc: 'З 2026 року zameldowanie обов’язкове — інакше MOS відхилить wniosek. Оформлюємо паралельно з пакетом на карту побуту.' },
        { title: 'Зарахування дитини до школи', desc: 'Obowiązek szkolny — школи беруть дітей за адресою zameldowania. Без нього — відмова або klasa powitalna в іншій школі.' },
        { title: 'Реєстрація автомобіля', desc: 'Wydział komunikacji starostwa вимагає zameldowanie власника. Без нього — відмова у реєстрації.' },
        { title: 'Відкриття фірмового рахунку', desc: 'Банки для KYC вимагають zaświadczenie o zameldowaniu або umowę najmu — meldunek закриває обидві вимоги.' },
        { title: 'Wybory samorządowe', desc: 'Іноземець з ЄС з meldunkiem ≥ 1 року має право голосувати на місцевих виборах.' },
        { title: 'NFZ та медзаклади', desc: 'Прикріплення до POZ (поліклініки) — за адресою zameldowania. Без нього — потрібне окреме oświadczenie pacjenta.' }
      ]
    },
    timeline: {
      title: 'Як ми оформлюємо meldunek',
      subtitle: 'Від підписання договору до довідки з zameldowaniem — 1–2 робочих дні.',
      steps: [
        { title: 'Консультація', duration: '20 хв', desc: 'Уточнюємо форму перебування, тип meldunkу (czasowy/stały), наявність згоди власника житла.' },
        { title: 'Підготовка wniosku', duration: '1 день', desc: 'Заповнюємо zgłoszenie pobytu czasowego cudzoziemca (форма для іноземців) або форми dla obywatela polskiego.' },
        { title: 'Згода власника', duration: '1 день', desc: 'Беремо підпис właściciela на формулі або нотаріальне upoważnienie. Якщо квартира орендована — umowa najmu йде додатком.' },
        { title: 'Подання в urząd gminy', duration: '1 візит', desc: 'Супроводжуємо в urząd dzielnicy. Подання — особисто з паспортом і документом перебування. Дитину реєструє один із батьків.' },
        { title: 'Отримання zameldowania', duration: '1 день', desc: 'Запис вноситься до реєстру PESEL у день подання. Zaświadczenie o zameldowaniu — за 17 PLN на запит.' },
        { title: 'Довідки для urząd / банку', duration: '1 день', desc: 'Готуємо zaświadczenia для подання в KRS, US, ZUS, банк, MOS v2.0 — за фактичними запитами.' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Мінімальний пакет. Точний перелік — після консультації.',
      items: [
        'Закордонний паспорт (оригінал)',
        'Документ легального перебування: віза D, karta pobytu, безвіз',
        'Umowa najmu або podnajmu (з власником, не з ріелтором) чи akt własności',
        'Підпис właściciela на формулі zgłoszenia (особисто в urząd або через нотаріальне upoważnienie)',
        'PESEL (якщо є; якщо ні — оформлюємо паралельно)',
        'Свідоцтво про народження (для дітей) із присяжним перекладом',
        'Заповнений wniosek — готуємо ми',
        'Довіреність власника, якщо він не приходить особисто'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Держмито за саме zameldowanie — 0 PLN. Сплачується лише zaświadczenie (17 PLN).',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '20 хвилин · оцінка ситуації' },
        { label: 'Meldunek під ключ', value: 'від 350 PLN', note: 'Wniosek, згода власника, urząd' },
        { label: 'Meldunek + zaświadczenie + переклад', value: 'від 500 PLN', note: 'З готовою довідкою для банку/urząd' },
        { label: 'Адреса від LegalWin (для бізнесу)', value: 'від 250 PLN/міс', note: 'Юридична адреса для KRS / CEIDG' }
      ],
      note: 'Зазначено гонорари LegalWin. Якщо власник не йде в urząd — потрібен notarialny upoważnienie (~150 PLN у нотаріуса) — окремо.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 24 września 2010 r. o ewidencji ludności (rozdz. 3 — meldunek)',
        'Rozporządzenie MSWiA w sprawie wzorów zgłoszeń pobytu',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (art. 199 — meldunek a TRC)',
        'Ustawa z dnia 16 listopada 2006 r. o opłacie skarbowej (zaświadczenia — 17 PLN)',
        'Kodeks postępowania administracyjnego (KPA)'
      ]
    },
    faq: [
      { q: 'Чи можна оформити meldunek без згоди власника?', a: 'Ні. Підпис właściciela (власника) на формулі — обов’язкова умова. Якщо він відмовляється — потрібно йти через sąd cywilny (цивільний суд) з powództwem o ustalenie zameldowania (позовом про встановлення реєстрації) (якщо є umowa najmu — договір оренди та фактичне проживання). На практиці це рідко — зазвичай домовляємося з власником про підпис або нотаріальне upoważnienie (довіреність).' },
      { q: 'Що робити, якщо орендодавець відмовляється прописувати?', a: 'Ми допомагаємо скласти договір оренди з пунктом про згоду на zameldowanie (реєстрацію) або підбираємо власників, готових до meldunkу. Альтернатива — meldunek у роботодавця, родича чи через адресу LegalWin для підприємців.' },
      { q: 'Чи обов’язковий meldunek для подання на карту побуту?', a: 'З 2026 року через MOS v2.0 — фактично так. Система автоматично підтягує адресу з реєстру PESEL. Без zameldowania (реєстрації) доведеться окремо додавати umowę najmu (договір оренди) та oświadczenie właściciela (заяву власника), що збільшує ризик відмови на формальній підставі.' },
      { q: 'На який термін прописуватися?', a: 'Pobyt czasowy (тимчасове перебування) — на термін дії вашого документа перебування (карта побуту, віза, безвіз). При отриманні нової karty pobytu (карти побуту) meldunek треба продовжити.' },
      { q: 'Чи можна мати декілька meldunków?', a: 'Лише один pobyt stały (постійна реєстрація). Pobyt czasowy (тимчасову) можна мати паралельно зі stałym — постійною (наприклад, прописка stała у батьків і czasowy у Варшаві на роботу). Іноземцю — лише один.' },
      { q: 'Що робити при зміні адреси?', a: 'Протягом 30 днів — wymeldowanie (виписка) зі старої адреси (часто автоматично при zameldowaniu — реєстрації на нову) і zameldowanie на нову. Робимо за 1 візит.' },
      { q: 'Скільки коштує meldunek у реальності?', a: 'Саме zameldowanie (реєстрація) — 0 PLN. Zaświadczenie (довідка) — 17 PLN. Якщо квартира орендована — зазвичай власник просить +50–100 PLN за візит в urząd (установу) або +150 PLN за нотаріальне upoważnienie (довіреність). Наш гонорар — від 350 PLN.' }
    ],
    related: ['pesel', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Оформимо meldunek за 1 день',
    ctaSubtitle: 'Безкоштовна консультація: перевіримо вашу ситуацію, домовимося з власником, подамо в urząd. Від першого дзвінка до zaświadczenia — зазвичай 1–2 робочих дні.'
  }
};

export default meldunek;
