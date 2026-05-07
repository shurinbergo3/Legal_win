import type { ServiceEntry } from './types';

const meldunek: ServiceEntry = {
  ru: {
    slug: 'meldunek',
    group: 'documents',
    icon: 'home',
    badge: 'Pobyt czasowy / stały · USC',
    title: 'Meldunek (прописка)',
    subtitle: 'Регистрация места жительства иностранца в Польше',
    lead: 'Zameldowanie — это регистрация фактического адреса проживания в реестре PESEL. Иностранцу с долгосрочным пребыванием meldunek нужен для оформления PESEL, школы, регистрации авто, голосования в самоуправлении и при подаче на TRC через MOS v2.0. Получаем zameldowanie на pobyt czasowy (до 3 лет) или stały (без срока), оформляем zaświadczenie o zameldowaniu для urząd, банка или работодателя.',
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
        { title: 'Pobyt czasowy (до 3 лет)', desc: 'Стандартное zameldowanie для иностранцев на TRC, визе D, безвизе, ученической визе. Срок — на период действия документа пребывания.' },
        { title: 'Pobyt stały', desc: 'Только для обладателей karty stałego pobytu, długoterminowego rezydenta UE или граждан Польши. Бессрочно.' },
        { title: 'Подача на TRC через MOS v2.0', desc: 'С 2026 года zameldowanie обязательно — иначе MOS отклонит wniosek. Оформляем параллельно с пакетом на TRC.' },
        { title: 'Регистрация ребёнка в школу', desc: 'Obowiązek szkolny — школа берёт детей по адресу zameldowania. Без него — отказ или klasa powitalna в другой школе.' },
        { title: 'Регистрация автомобиля', desc: 'Wydział komunikacji starostwa требует zameldowanie владельца. Без него — отказ в регистрации.' },
        { title: 'Открытие фирмового счёта', desc: 'Банки для KYC требуют zaświadczenie o zameldowaniu или umowę najmu — meldunek закрывает оба требования.' },
        { title: 'Wybory samorządowe', desc: 'Иностранец из ЕС с meldunkiem ≥ 1 года имеет право голосовать на местных выборах.' },
        { title: 'NFZ и медучреждения', desc: 'Привязка к POZ (поликлинике) — по адресу zameldowania. Без него — нужно отдельное oświadczenie pacjenta.' }
      ]
    },
    timeline: {
      title: 'Как мы оформляем meldunek',
      subtitle: 'От подписания договора до выписки z zameldowaniem — 1–2 рабочих дня.',
      steps: [
        { title: 'Консультация', duration: '20 мин', desc: 'Уточняем форму пребывания, тип meldunkа (czasowy/stały), наличие согласия собственника жилья.' },
        { title: 'Подготовка wniosku', duration: '1 день', desc: 'Заполняем zgłoszenie pobytu czasowego cudzoziemca (форма для иностранцев) или формы dla obywatela polskiego.' },
        { title: 'Согласие собственника', duration: '1 день', desc: 'Берём подпись właściciela на формуле или нотариальное upoważnienie. Если квартира снимается — umowa najmu идёт приложением.' },
        { title: 'Подача в urząd gminy', duration: '1 визит', desc: 'Сопровождаем в urząd dzielnicy. Подача — лично с паспортом и документом пребывания. Ребёнка регистрирует родитель.' },
        { title: 'Получение zameldowania', duration: '1 день', desc: 'Запись вносится в реестр PESEL в день подачи. Zaświadczenie o zameldowaniu — за 17 PLN на запрос.' },
        { title: 'Выписки для urząd / банка', duration: '1 день', desc: 'Готовим zaświadczenia для подачи в KRS, US, ZUS, банк, MOS v2.0 — по фактическим запросам.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Минимальный пакет. Точный список — после консультации.',
      items: [
        'Загранпаспорт (оригинал)',
        'Документ легального пребывания: виза D, karta pobytu, безвиз',
        'Umowa najmu или podnajmu (с собственником, не с риелтором) либо akt własności',
        'Подпись właściciela на формуле zgłoszenia (лично в urząd или через нотариальное upoważnienie)',
        'PESEL (если есть; если нет — оформляем параллельно)',
        'Свидетельство о рождении (для детей) с присяжным переводом',
        'Заполненный wniosek — готовим мы',
        'Доверенность собственника, если он не приходит лично'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Госпошлина за само zameldowanie — 0 PLN. Платится только zaświadczenie (17 PLN).',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '20 минут · оценка ситуации' },
        { label: 'Meldunek под ключ', value: 'от 350 PLN', note: 'Wniosek, согласие собственника, urząd' },
        { label: 'Meldunek + zaświadczenie + перевод', value: 'от 500 PLN', note: 'С готовой выпиской для банка/urząd' },
        { label: 'Адрес от LegalWin (для бизнеса)', value: 'от 250 PLN/мес', note: 'Юридический адрес для KRS / CEIDG' }
      ],
      note: 'Указаны гонорары LegalWin. Если собственник не идёт в urząd — нужен notarialny upoważnienie (~150 PLN у нотариуса) — отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 24 września 2010 r. o ewidencji ludności (rozdz. 3 — meldunek)',
        'Rozporządzenie MSWiA w sprawie wzorów zgłoszeń pobytu',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (art. 199 — meldunek a TRC)',
        'Ustawa z dnia 16 listopada 2006 r. o opłacie skarbowej (zaświadczenia — 17 PLN)',
        'Kodeks postępowania administracyjnego (KPA)'
      ]
    },
    faq: [
      { q: 'Можно ли оформить meldunek без согласия собственника?', a: 'Нет. Подпись właściciela (собственника) на формуле — обязательное условие. Если он отказывается — нужно идти через sąd cywilny (гражданский суд) с powództwem o ustalenie zameldowania (иском об установлении регистрации) (если есть umowa najmu — договор аренды и фактическое проживание). На практике это редко — обычно договариваемся с собственником о подписи или нотариальном upoważnieniu (доверенности).' },
      { q: 'Что если арендодатель отказывается прописывать?', a: 'Мы помогаем составить договор аренды с пунктом о согласии на zameldowanie (регистрацию) или подбираем владельцев, готовых к meldunkу. Альтернатива — meldunek у работодателя, родственника или через адрес LegalWin для предпринимателей.' },
      { q: 'Обязателен ли meldunek для подачи на TRC?', a: 'С 2026 года через MOS v2.0 — фактически да. Система автоматически подтягивает адрес из реестра PESEL. Без zameldowania (регистрации) придётся отдельно прикладывать umowę najmu (договор аренды) и oświadczenie właściciela (заявление собственника), что увеличивает риск отказа на формальном основании.' },
      { q: 'На какой срок прописываться?', a: 'Pobyt czasowy (временное пребывание) — на срок действия вашего документа пребывания (TRC, визы, безвиза). При получении новой karty pobytu (карты пребывания) meldunek нужно продлить.' },
      { q: 'Можно ли иметь несколько meldunków?', a: 'Только один pobyt stały (постоянная регистрация). Pobyt czasowy (временная) можно иметь параллельно с stałym — постоянной (например, прописка stała у родителей и czasowy в Варшаве на работу). Иностранцу — только один.' },
      { q: 'Что делать при смене адреса?', a: 'В течение 30 дней — wymeldowanie (выписка) со старого адреса (часто автоматически при zameldowaniu — регистрации на новый) и zameldowanie на новый. Делаем за 1 визит.' },
      { q: 'Сколько стоит meldunek в реальности?', a: 'Само zameldowanie (регистрация) — 0 PLN. Zaświadczenie (справка) — 17 PLN. Если квартира съёмная — обычно собственник просит +50–100 PLN за визит в urząd (учреждение) или +150 PLN за нотариальное upoważnienie (доверенность). Наш гонорар — от 350 PLN.' }
    ],
    related: ['pesel', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Оформим meldunek за 1 день',
    ctaSubtitle: 'Бесплатная консультация: проверим вашу ситуацию, договоримся с собственником, подадим в urząd. От первого звонка до zaświadczenia — обычно 1–2 рабочих дня.'
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
        { title: 'Pobyt czasowy (do 3 lat)', desc: 'Standard dla TRC, wizy D, ruchu bezwizowego, wizy studenckiej. Termin — na okres dokumentu pobytu.' },
        { title: 'Pobyt stały', desc: 'Tylko dla posiadaczy karty stałego pobytu, rezydenta UE lub obywateli RP.' },
        { title: 'Wniosek o TRC w MOS v2.0', desc: 'Od 2026 zameldowanie obowiązkowe — bez niego MOS odrzuca wniosek formalnie.' },
        { title: 'Zapis dziecka do szkoły', desc: 'Obowiązek szkolny — szkoły rejonowe biorą dzieci po adresie zameldowania.' },
        { title: 'Rejestracja samochodu', desc: 'Wydział komunikacji wymaga zameldowania właściciela.' },
        { title: 'Konto firmowe', desc: 'Banki w ramach KYC żądają zaświadczenia o zameldowaniu lub umowy najmu.' },
        { title: 'Wybory samorządowe', desc: 'Cudzoziemiec UE z meldunkiem ≥ 1 rok — czynne prawo wyborcze.' },
        { title: 'NFZ i POZ', desc: 'Przypisanie do POZ — po adresie zameldowania.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Od umowy do zaświadczenia o zameldowaniu — 1–2 dni robocze.',
      steps: [
        { title: 'Konsultacja', duration: '20 min', desc: 'Ustalamy formę pobytu, rodzaj meldunku, zgodę właściciela.' },
        { title: 'Wniosek', duration: '1 dzień', desc: 'Wypełniamy zgłoszenie pobytu czasowego cudzoziemca lub wniosek standardowy.' },
        { title: 'Zgoda właściciela', duration: '1 dzień', desc: 'Podpis na formularzu lub notarialne upoważnienie. Umowa najmu w załączniku.' },
        { title: 'Złożenie w urzędzie', duration: '1 wizyta', desc: 'Towarzyszymy w urzędzie dzielnicy. Składanie z paszportem i dokumentem pobytu.' },
        { title: 'Zameldowanie', duration: '1 dzień', desc: 'Wpis do PESEL od ręki. Zaświadczenie — 17 PLN na żądanie.' },
        { title: 'Zaświadczenia', duration: '1 dzień', desc: 'Wypisy dla KRS, US, ZUS, banku, MOS — wedle potrzeb.' }
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
        'PESEL (jeśli jest; jeśli nie — załatwiamy razem)',
        'Akt urodzenia dziecka z tłumaczeniem przysięgłym',
        'Wypełniony wniosek — przygotowujemy my',
        'Pełnomocnictwo właściciela, jeśli nie stawia się osobiście'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Opłata urzędowa za zameldowanie — 0 PLN. Płatne tylko zaświadczenie (17 PLN).',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '20 minut · ocena sytuacji' },
        { label: 'Meldunek pod klucz', value: 'od 350 PLN', note: 'Wniosek, zgoda, urząd' },
        { label: 'Meldunek + zaświadczenie + tłumaczenie', value: 'od 500 PLN', note: 'Z wypisem dla banku/urzędu' },
        { label: 'Adres od LegalWin (biznes)', value: 'od 250 PLN/mies.', note: 'Adres prawny dla KRS/CEIDG' }
      ],
      note: 'Powyżej honoraria LegalWin. Notarialne upoważnienie właściciela (~150 PLN) — osobno.'
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
      { q: 'Czy można zameldować się bez zgody właściciela?', a: 'Nie. Podpis właściciela jest konieczny. Jeśli odmawia — sąd cywilny (powództwo o ustalenie). W praktyce — umawiamy podpis lub notarialne upoważnienie.' },
      { q: 'Co jeśli wynajmujący odmawia meldunku?', a: 'Pomagamy redagować umowę z klauzulą zgody na meldunek lub szukamy najemców gotowych. Alternatywy — meldunek u pracodawcy/krewnego lub adres LegalWin dla firm.' },
      { q: 'Czy meldunek jest obowiązkowy do TRC?', a: 'Od 2026 (MOS v2.0) — faktycznie tak. System pobiera adres z PESEL. Bez meldunku trzeba załączać umowę najmu — większe ryzyko odmowy formalnej.' },
      { q: 'Na jaki okres meldować się?', a: 'Pobyt czasowy — na termin dokumentu pobytu (TRC, wiza). Po nowej karcie meldunek przedłużasz.' },
      { q: 'Można mieć kilka meldunków?', a: 'Tylko jeden stały. Czasowy może być równolegle ze stałym. Cudzoziemiec — tylko jeden.' },
      { q: 'Zmiana adresu — co robić?', a: 'W ciągu 30 dni — wymeldowanie ze starego (często automatyczne) i zameldowanie na nowy. Załatwiamy w 1 wizycie.' },
      { q: 'Ile kosztuje meldunek realnie?', a: 'Zameldowanie — 0 PLN. Zaświadczenie — 17 PLN. Właściciel często prosi 50–100 PLN za wizytę lub ~150 PLN za notarialne upoważnienie. Nasze honorarium — od 350 PLN.' }
    ],
    related: ['pesel', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Zameldujemy w 1 dzień',
    ctaSubtitle: 'Bezpłatna konsultacja: oceniamy sytuację, dogadujemy się z właścicielem, składamy wniosek. Od telefonu do zaświadczenia — 1–2 dni robocze.'
  },
  en: {
    slug: 'meldunek',
    group: 'documents',
    icon: 'home',
    badge: 'Temporary / Permanent · USC',
    title: 'Meldunek (residence registration)',
    subtitle: 'Polish residence registration for foreigners',
    lead: 'Zameldowanie is the registration of your actual address in the PESEL register. Foreigners on long-term stay need it for PESEL, school enrolment, vehicle registration, local-government voting and TRC filings via MOS v2.0. We arrange temporary (up to 3 years) or permanent zameldowanie and issue zaświadczenia for the urząd, your bank or employer.',
    facts: [
      { label: 'Issuance', value: '1 day', note: 'after filing at urząd gminy' },
      { label: 'State fee', value: '0 PLN', note: 'registration itself is free' },
      { label: 'Certificate', value: '17 PLN', note: 'wypis for bank/urząd' },
      { label: 'Types', value: 'Temporary / Permanent', note: 'up to 3 years or indefinite' }
    ],
    grounds: {
      title: 'When you need a meldunek',
      subtitle: 'Polish law obliges foreigners to register within 30 days for stays exceeding 30 days.',
      items: [
        { title: 'Temporary residence (up to 3 years)', desc: 'Standard for TRC, D-visa, visa-free, student visa. Tied to your stay document.' },
        { title: 'Permanent residence', desc: 'Only for PR card holders, EU long-term residents, or Polish citizens. Indefinite.' },
        { title: 'Filing TRC via MOS v2.0', desc: 'From 2026 zameldowanie is mandatory — without it MOS rejects on formal grounds.' },
        { title: 'School enrolment', desc: 'District schools enrol children by registered address.' },
        { title: 'Vehicle registration', desc: 'Wydział komunikacji requires the owner\'s zameldowanie.' },
        { title: 'Corporate bank account', desc: 'KYC requires either zaświadczenie o zameldowaniu or a tenancy agreement.' },
        { title: 'Local elections', desc: 'EU foreigners with meldunek ≥ 1 year may vote in local elections.' },
        { title: 'NFZ healthcare', desc: 'POZ assignment follows registered address.' }
      ]
    },
    timeline: {
      title: 'How we run it',
      subtitle: 'From signing the engagement to a zameldowanie certificate — 1–2 working days.',
      steps: [
        { title: 'Consultation', duration: '20 min', desc: 'Verify stay form, meldunek type, owner consent.' },
        { title: 'Application prep', duration: '1 day', desc: 'Fill the foreigner registration form or standard wniosek.' },
        { title: 'Owner consent', duration: '1 day', desc: 'Owner signature on the form or a notarised authorisation. Tenancy attached.' },
        { title: 'Filing at urząd', duration: '1 visit', desc: 'We escort you to urząd dzielnicy. In person with passport and stay document.' },
        { title: 'Registration', duration: '1 day', desc: 'PESEL register entry on the spot. Certificate — 17 PLN on request.' },
        { title: 'Certificates', duration: '1 day', desc: 'Wypisy for KRS, US, ZUS, bank, MOS — as needed.' }
      ]
    },
    documents: {
      title: 'What we need from you',
      subtitle: 'Base set.',
      items: [
        'Passport (original)',
        'Legal-stay document: D-visa, residence card, visa-free regime',
        'Tenancy/sub-tenancy agreement (with owner) or title deed',
        'Owner signature on the form (in person at urząd or notarised authorisation)',
        'PESEL (if any; if not — done in parallel)',
        "Child's birth certificate with sworn translation",
        'Completed application — we prepare it',
        "Owner's power of attorney if not present"
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'No state fee for registration. Only the certificate is paid (17 PLN).',
      items: [
        { label: 'Consultation', value: 'Free', note: '20 minutes · case review' },
        { label: 'Turnkey meldunek', value: 'from 350 PLN', note: 'Application, owner consent, urząd' },
        { label: 'Meldunek + certificate + translation', value: 'from 500 PLN', note: 'Ready certificate for bank/urząd' },
        { label: 'LegalWin business address', value: 'from 250 PLN/mo', note: 'Legal address for KRS / CEIDG' }
      ],
      note: 'LegalWin fees. Notarised owner authorisation (~150 PLN) — separately.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Population Records Act of 24 September 2010 (Chapter 3)',
        'MSWiA Regulation on registration form templates',
        'Foreigners Act of 12 December 2013 (Article 199)',
        'Stamp Duty Act of 16 November 2006',
        'Code of Administrative Procedure (KPA)'
      ]
    },
    faq: [
      { q: 'Can I register without owner consent?', a: "No — the owner's signature is required. If they refuse, you can sue in civil court (action to establish registration) — rarely worth it. We typically arrange a signature or a notarised authorisation." },
      { q: 'Landlord refuses meldunek — what now?', a: 'We draft tenancies with an explicit registration clause, source meldunek-friendly landlords, or use an employer/relative address. For entrepreneurs — a LegalWin business address.' },
      { q: 'Is meldunek mandatory for TRC?', a: 'From 2026 (MOS v2.0) — effectively yes. The system pulls the address from PESEL. Without zameldowanie (registration) you must attach the umowa najmu (tenancy) and an owner statement, increasing the formal-rejection risk.' },
      { q: 'What duration to register for?', a: 'Temporary — for the duration of your stay document. After a new TRC card the meldunek must be extended.' },
      { q: 'Can I have several meldunki?', a: 'Only one permanent. Temporary can run alongside. Foreigners — one only.' },
      { q: 'Address change?', a: 'Within 30 days — deregister from the old (often automatic) and register at the new. We handle both in one visit.' },
      { q: 'What does it really cost?', a: 'Registration — 0 PLN. Certificate — 17 PLN. Owners often charge 50–100 PLN for the urząd visit or ~150 PLN for a notarised authorisation. Our fee — from 350 PLN.' }
    ],
    related: ['pesel', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Meldunek done in a day',
    ctaSubtitle: 'Free consultation: review your case, secure owner consent, file with the urząd. From first call to certificate — typically 1–2 working days.'
  }
};

export default meldunek;
