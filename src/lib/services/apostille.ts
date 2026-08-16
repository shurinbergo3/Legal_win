import type { ServiceEntry } from './types';

const apostille: ServiceEntry = {
  ru: {
    slug: 'apostille',
    group: 'documents',
    icon: 'landmark',
    badge: 'Конвенция Гаага 1961 · MSZ',
    title: 'Apostille и легализация',
    subtitle: 'Apostille и легализация документов для использования за границей',
    lead: 'Apostille - упрощённая международная легализация документов между странами Гаагской конвенции 1961 года. Для использования польского документа за рубежом (или иностранного - в Польше) на нём должен стоять apostille. Ставим apostille на свидетельства USC, нотариальные акты, выписки из KRS, дипломы и судебные решения. Для стран вне Конвенции - делаем полную легализацию через MSZ и консульство.',
    facts: [
      { label: 'Срок', value: '1-3 недели', note: 'apostille MSZ · обычная очередь' },
      { label: 'Госпошлина', value: '60 PLN', note: 'за один apostille' },
      { label: 'Где ставится', value: 'MSZ Warszawa', note: 'ul. Krucza 38/42, по записи' },
      { label: 'Действует', value: 'бессрочно', note: 'для документа без срока' }
    ],
    grounds: {
      title: 'На какие документы ставится apostille',
      subtitle: 'Согласно Конвенции Гаага 1961 - на публичные документы. Для коммерческих - нужна предварительная нотариальная заверка.',
      items: [
        { title: 'Свидетельства USC', desc: 'Akt urodzenia, małżeństwa, zgonu - apostille ставит MSZ. Нужен свежий бумажный odpis с печатью и подписью, распечатка из ePUAP не подойдёт.' },
        { title: 'Нотариальные акты', desc: 'Akt notarialny, pełnomocnictwo, oświadczenie - apostille MSZ после legalizacji izby notarialnej.' },
        { title: 'Выписки из KRS / CEIDG', desc: 'Полные выписки регистров для регистрации фирмы за рубежом, открытия счёта или сделок.' },
        { title: 'Свидетельства о несудимости (KRK)', desc: 'Zaświadczenie z Krajowego Rejestru Karnego - для рабочих виз, гражданства, ВНЖ за рубежом.' },
        { title: 'Дипломы и аттестаты', desc: 'Дипломы вузов - apostille ставит NAWA (не MSZ), у неё своя очередь. Школьные аттестаты - kuratorium oświaty. Для нострификации в США, ЕС, СНГ.' },
        { title: 'Судебные решения', desc: 'Wyroki sądów - для исполнения за рубежом, признания брака/развода, наследственных дел.' },
        { title: 'Apostille иностранных документов', desc: 'Помогаем оформить apostille в стране выдачи через консульство или местного партнёра.' },
        { title: 'Полная легализация (страны вне Конвенции)', desc: 'Для Канады, Китая, ОАЭ - полный цикл: notariusz → MSZ → консульство. До 4 недель.' }
      ]
    },
    timeline: {
      title: 'Как мы оформляем apostille',
      subtitle: 'Стандартный цикл от документа до apostille - 1-3 недели. При личной подаче в MSZ иногда успевают в день обращения, по почте - дольше. Дипломы вузов идут отдельно через NAWA, со своими сроками.',
      steps: [
        { title: 'Консультация', duration: '20 мин', desc: 'Уточняем тип документа, страну использования, наличие предварительной заверки (notariusz, izba notarialna). Для диплома вуза - отдельный маршрут через NAWA.' },
        { title: 'Подготовка документа', duration: '1-7 дней', desc: 'Получаем актуальный odpis (для USC, KRS, KRK), при необходимости - нотариальная заверка перевода или копии.' },
        { title: 'Подача в MSZ', duration: '1 день', desc: 'Записываемся через legalizacja.msz.gov.pl и подаём лично в Warszawa, ul. Krucza 38/42. Слоты открываются утром каждый рабочий день. Электронного апостиля в Польше нет - только бумажный оригинал.' },
        { title: 'Постановка apostille', duration: 'в день визита', desc: 'При личной подаче апостиль ставят во время визита, до 10 документов на человека в день. Если отправляем почтой на al. Szucha 23 - до 30 дней. Экспресс-тарифа у MSZ не существует.' },
        { title: 'Курьерская доставка', duration: '1-2 дня', desc: 'Отправляем оригинал DHL Express в любую страну мира или передаём лично в Варшаве.' },
        { title: 'Перевод (если нужен)', duration: '2-3 дня', desc: 'Присяжный перевод apostille и документа на язык страны использования.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Базовый пакет. Точный список зависит от типа документа.',
      items: [
        'Оригинал документа (USC odpis, KRS-выписка, диплом, нотариальный акт)',
        'Документ должен быть актуальным - не старше 6 месяцев для KRS / KRK',
        'Паспорт владельца документа (для регистрации заявления)',
        'Адрес страны использования и язык будущего перевода',
        'Информация о цели - для подбора правильной формы apostille',
        'Доверенность на LegalWin (если документ выдан не на вас)',
        'Заполненный wniosek - готовим мы',
        'При легализации - реквизиты целевого консульства'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Госпошлина - 60 PLN за документ, платится отдельно в Centrum Obsługi Podatnika.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '20 минут · оценка ситуации' },
        { label: 'Apostille под ключ', value: 'от 250 PLN', note: 'MSZ + курьер · 1-3 недели' },
        { label: 'Apostille + присяжный перевод', value: 'от 380 PLN', note: 'С переводом на язык страны' },
        { label: 'Полная легализация', value: 'от 750 PLN', note: 'Notariusz → MSZ → консульство · 2-4 недели' }
      ],
      note: 'Указаны гонорары LegalWin. Госпошлины (60 PLN apostille, 26 PLN izba notarialna, ~30-200 EUR консульский сбор) и присяжный перевод (~80 PLN/документ) - отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Konwencja haska z 5 października 1961 r. (apostille)',
        'Ustawa z dnia 14 czerwca 1960 r. - Kodeks postępowania administracyjnego',
        'Rozporządzenie Ministra Spraw Zagranicznych w sprawie wzoru apostille',
        'Konwencja wiedeńska o stosunkach konsularnych z 1963 r.',
        'Ustawa z dnia 14 lutego 1991 r. - Prawo o notariacie'
      ]
    },
    faq: [
      { q: 'В каких странах apostille заменяет легализацию?', a: 'Во всех странах Гаагской конвенции 1961 г. - это около 130 государств: ЕС, США, Канада (с 2024), Великобритания, Россия, Украина (с 2003), Беларусь, Казахстан, Турция, Япония, Корея, Бразилия и др. Для документов между этими странами достаточно одного apostille (апостиля).' },
      { q: 'Что делать для стран вне Конвенции (Китай, ОАЭ, Канада до 2024)?', a: 'Полная легализация: 1) нотариальная заверка → 2) izba notarialna (нотариальная палата, для нотариальных актов) → 3) MSZ (МИД Польши) → 4) консульство страны назначения в Польше. Цикл - 2-4 недели, стоимость 750+ PLN наших + консульские сборы.' },
      { q: 'Сколько по факту стоит apostille в Польше?', a: 'Госпошлина MSZ (МИД Польши) - 60 PLN/документ. Если документ - нотариальный акт, нужна сначала заверка izby notarialnej (нотариальной палаты, 26 PLN). Наш гонорар - от 250 PLN под ключ. Свидетельства USC апостилирует тот же MSZ - те же 60 PLN за документ.' },
      { q: 'Можно ли поставить apostille на копию?', a: 'Нет - только на оригинал или нотариально заверенную копию. Для документов, которые нельзя сдавать (диплом, оригинал свидетельства), делаем notarialną kopię (нотариальную копию) и на неё ставим apostille.' },
      { q: 'Apostille действует бессрочно?', a: 'Да, сам apostille (апостиль) не имеет срока. Но многие документы имеют свой срок: KRS-выписка - 3 месяца, KRK (справка о несудимости) - 6 месяцев. Делайте apostille сразу после получения свежего odpisu (выписки).' },
      { q: 'Как проверить подлинность apostille?', a: 'У каждого апостиля есть номер и дата - по ним принимающий орган запрашивает подтверждение в MSZ. Отдельного публичного онлайн-реестра для польских апостилей нет, вопреки тому, что пишут посредники.' },
      { q: 'Нужен ли перевод apostille?', a: 'Сам apostille имеет двуязычный (польский + английский/французский) формат и переводится автоматически. Документ под ним - нужен присяжный перевод на язык страны использования.' }
    ],
    related: ['akty-stanu-cywilnego', 'tlumaczenia-przysiegle', 'zaswiadczenie-o-niekaralnosci'],
    ctaTitle: 'Apostille под ключ',
    ctaSubtitle: 'Бесплатная консультация: уточним документ, страну использования, форму легализации. Стандартный цикл - 1-3 недели.'
  },
  pl: {
    slug: 'apostille',
    group: 'documents',
    icon: 'landmark',
    badge: 'Konwencja Hag 1961 · MSZ',
    title: 'Apostille i legalizacja',
    subtitle: 'Apostille i legalizacja dokumentów do użytku zagranicznego',
    lead: 'Apostille - uproszczona międzynarodowa legalizacja dokumentów między państwami Konwencji Haskiej 1961. Do użytku polskiego dokumentu za granicą (lub zagranicznego w Polsce) potrzebny jest apostille. Załatwiamy apostille na odpisy USC, akty notarialne, wypisy z KRS, dyplomy i wyroki sądowe. Dla państw spoza Konwencji - pełna legalizacja przez MSZ i konsulat.',
    facts: [
      { label: 'Termin', value: '1-3 tygodnie', note: 'apostille MSZ · zwykła kolejka' },
      { label: 'Opłata', value: '60 PLN', note: 'za jeden apostille' },
      { label: 'Gdzie', value: 'MSZ Warszawa', note: 'ul. Krucza 38/42, po rezerwacji' },
      { label: 'Ważność', value: 'bezterminowo', note: 'dla dokumentu bez terminu' }
    ],
    grounds: {
      title: 'Na jakie dokumenty apostille',
      subtitle: 'Wg Konwencji Haskiej 1961 - na dokumenty publiczne. Dla handlowych - najpierw notarialne uwierzytelnienie.',
      items: [
        { title: 'Odpisy USC', desc: 'Akt urodzenia, małżeństwa, zgonu - apostille nadaje MSZ. Potrzebny świeży papierowy odpis z pieczęcią i podpisem, wydruk z ePUAP nie wystarczy.' },
        { title: 'Akty notarialne', desc: 'Akt notarialny, pełnomocnictwo, oświadczenie - apostille MSZ po legalizacji w izbie notarialnej.' },
        { title: 'Wypisy KRS / CEIDG', desc: 'Pełne wypisy do rejestracji firm za granicą, otwierania kont i transakcji.' },
        { title: 'Zaświadczenie o niekaralności (KRK)', desc: 'Zaświadczenie z KRK - do wiz pracowniczych, obywatelstwa, TRC za granicą.' },
        { title: 'Dyplomy i świadectwa', desc: 'Dyplomy uczelni wyższych - apostille wydaje NAWA (nie MSZ), z osobną kolejką. Świadectwa szkolne - kuratorium oświaty. Do nostryfikacji w USA, UE, krajach WNP.' },
        { title: 'Wyroki sądów', desc: 'Wyroki - do egzekucji za granicą, uznania ślubu/rozwodu, spadku.' },
        { title: 'Apostille zagranicznych dokumentów', desc: 'Pomagamy uzyskać apostille w kraju wydania przez konsulat lub lokalnego partnera.' },
        { title: 'Pełna legalizacja (poza Konwencją)', desc: 'Dla Kanady (do 2024), Chin, ZEA - pełen cykl: notariusz → MSZ → konsulat. Do 4 tygodni.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Standardowy cykl 1-3 tygodnie. Przy osobistym złożeniu w MSZ czasem tego samego dnia, pocztą - dłużej. Dyplomy uczelni idą osobno przez NAWA, z własnymi terminami.',
      steps: [
        { title: 'Konsultacja', duration: '20 min', desc: 'Ustalamy rodzaj dokumentu, kraj użycia, czy potrzebne wstępne uwierzytelnienie. Dla dyplomu uczelni - osobna ścieżka przez NAWA.' },
        { title: 'Przygotowanie dokumentu', duration: '1-7 dni', desc: 'Pobieramy aktualny odpis, w razie potrzeby - uwierzytelnienie notarialne.' },
        { title: 'Złożenie w MSZ', duration: '1 dzień', desc: 'Rezerwujemy termin przez legalizacja.msz.gov.pl i składamy osobiście w Warszawie, ul. Krucza 38/42. Terminy otwierają się rano w dni robocze. Polska nie wydaje apostille elektronicznej - tylko papierowy oryginał.' },
        { title: 'Apostille', duration: 'w dniu wizyty', desc: 'Przy złożeniu osobistym apostille nadawana jest w trakcie wizyty, do 10 dokumentów na osobę dziennie. Korespondencyjnie na al. Szucha 23 - do 30 dni. MSZ nie ma taryfy ekspresowej.' },
        { title: 'Kurier', duration: '1-2 dni', desc: 'DHL Express w dowolne miejsce na świecie lub osobisty odbiór.' },
        { title: 'Tłumaczenie', duration: '2-3 dni', desc: 'Tłumaczenie przysięgłe na język kraju użycia.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Pakiet bazowy.',
      items: [
        'Oryginał dokumentu (odpis USC, wypis KRS, dyplom, akt notarialny)',
        'Dokument aktualny - nie starszy niż 6 miesięcy dla KRS/KRK',
        'Paszport właściciela dokumentu',
        'Adres kraju użycia i język tłumaczenia',
        'Cel - do wybrania formy apostille',
        'Pełnomocnictwo dla LegalWin (jeśli dokument nie na Ciebie)',
        'Wypełniony wniosek - przygotowujemy my',
        'Dla legalizacji - dane konsulatu docelowego'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Opłata skarbowa - 60 zł za dokument, płatna osobno do Centrum Obsługi Podatnika.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '20 min · ocena' },
        { label: 'Apostille pod klucz', value: 'od 250 PLN', note: 'MSZ + kurier · 1-3 tygodnie' },
        { label: 'Apostille + tłumaczenie', value: 'od 380 PLN', note: 'Z tłumaczeniem przysięgłym' },
        { label: 'Pełna legalizacja', value: 'od 750 PLN', note: 'Notariusz → MSZ → konsulat · 2-4 tygodnie' }
      ],
      note: 'Powyżej honoraria LegalWin. Opłaty (60 PLN apostille, 26 PLN izba notarialna, ~30-200 EUR konsulat) i tłumaczenia - osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Konwencja haska z 5 października 1961 r. (apostille)',
        'Ustawa z 14 czerwca 1960 r. - Kodeks postępowania administracyjnego',
        'Rozporządzenie MSZ ws. wzoru apostille',
        'Konwencja wiedeńska o stosunkach konsularnych z 1963 r.',
        'Ustawa z 14 lutego 1991 r. - Prawo o notariacie'
      ]
    },
    faq: [
      { q: 'W jakich krajach apostille zastępuje legalizację?', a: 'We wszystkich państwach Konwencji Haskiej 1961 - ok. 130: UE, USA, Kanada (od 2024), UK, Rosja, Ukraina (od 2003), Białoruś, Kazachstan, Turcja, Japonia, Korea, Brazylia. Wystarczy jeden apostille.' },
      { q: 'Co dla państw spoza Konwencji?', a: 'Pełna legalizacja: notariusz → izba notarialna → MSZ → konsulat. Cykl 2-4 tygodnie, koszty od 750 PLN + konsulat.' },
      { q: 'Realny koszt?', a: 'MSZ 60 PLN/dok. Akt notarialny - najpierw izba notarialna (26 PLN). Honorarium od 250 PLN. Odpisy USC - też MSZ, 60 zł.' },
      { q: 'Apostille na kopii?', a: 'Nie - tylko na oryginale lub kopii notarialnej. Dla dokumentów, których nie oddaje się (dyplom) - apostille na kopii notarialnej.' },
      { q: 'Czy apostille jest bezterminowy?', a: 'Tak, sam apostille nie ma terminu. Ale dokumenty mają: KRS - 3 miesiące, KRK - 6 miesięcy.' },
      { q: 'Jak zweryfikować apostille?', a: 'Każda apostille ma numer i datę - na ich podstawie organ przyjmujący potwierdza autentyczność w MSZ. Publicznego rejestru online polskich apostille nie ma, wbrew temu, co piszą pośrednicy.' },
      { q: 'Tłumaczenie apostille?', a: 'Sam apostille jest dwujęzyczny (PL + EN/FR) - nie wymaga tłumaczenia. Dokument pod nim - tłumaczenie przysięgłe na język docelowy.' }
    ],
    related: ['akty-stanu-cywilnego', 'tlumaczenia-przysiegle', 'zaswiadczenie-o-niekaralnosci'],
    ctaTitle: 'Apostille pod klucz',
    ctaSubtitle: 'Bezpłatna konsultacja: dokument, kraj użycia, forma legalizacji. Standard - 1-3 tygodnie.'
  },
  en: {
    slug: 'apostille',
    group: 'documents',
    icon: 'landmark',
    badge: '1961 Hague Convention · MSZ Warsaw',
    title: 'Apostille & legalisation',
    subtitle: 'Polish apostille for use in the UK, US, Australia and beyond',
    lead: "If you need a Polish birth certificate, marriage record or KRS extract to land at HMRC, the IRS, a Texas court or Companies House, it has to carry an apostille. The 1961 Hague Convention covers 125+ countries (UK, US, Australia, Canada since 2024, and most of the EU), and a single apostille from MSZ in Warsaw is all the receiving authority needs. Polish documents are stamped at ul. Krucza 38/42 for 60 PLN, USC certificates go via the wojewoda. For Hague countries: one stamp. For non-Hague (still a short list: Saudi, UAE, Qatar, Vietnam), it's the full chain through MSZ and the destination embassy.",
    facts: [
      { label: 'Turnaround', value: '1-3 weeks', note: 'MSZ Warsaw · standard queue' },
      { label: 'MSZ fee', value: '60 PLN', note: 'per apostille stamp' },
      { label: 'Office', value: 'ul. Krucza 38/42', note: 'Warsaw · MSZ legalisation desk' },
      { label: 'Hague reach', value: '125+ countries', note: 'UK, US, Australia, Canada, EU' }
    ],
    grounds: {
      title: 'What we apostille (and where it actually goes)',
      subtitle: "Hague 1961 covers public documents. We've sent stamped papers to all 50 US states, to Companies House, to Australian DFAT-recognising agencies, and to consulates for non-Hague jurisdictions. Each route is slightly different.",
      items: [
        { title: 'USC certificates: birth, marriage, death', desc: "Issued by USC (urząd stanu cywilnego), apostilled by the MSZ like every other Polish official document. We pull a fresh odpis zupełny first. Your old certificate from 2015 won't pass at HMRC or an American county clerk." },
        { title: 'Notarial acts and powers of attorney', desc: "Akt notarialny gets pre-authenticated at the regional izba notarialna (26 PLN), then MSZ apostille. We use this route weekly for clients selling property abroad or filing pełnomocnictwo with a UK conveyancer." },
        { title: 'KRS and CEIDG extracts', desc: "Company extracts for opening a US bank account, registering a UK subsidiary, or contracting with Saudi state buyers. Fresh wypis only. KRS goes stale at 3 months and KYC officers do check." },
        { title: 'KRK criminal record certificates', desc: "Zaświadczenie z KRK is the standard ask for UK Skilled Worker visas, US green cards, Australian 482 visas, and Canadian PR. KRK ages out at 6 months, so apostille it the day it's issued." },
        { title: 'Diplomas and academic transcripts', desc: "Polish university diplomas are apostilled by NAWA, not MSZ — a separate agency with its own queue. School certificates go through the regional kuratorium oświaty. We route each to the right office. Recognised by ECCTIS in the UK, WES in Canada, and by every US state board we've encountered." },
        { title: 'Court judgements and divorce decrees', desc: "Wyrok rozwodowy for remarrying in California, an inheritance ruling for probate in New York. Court documents need the court president's clause, then MSZ. Two-step, but routine." },
        { title: 'Apostille on foreign documents (reverse case)', desc: "Got a US birth certificate, UK marriage cert, or Australian degree and need it to work in Poland? Each Hague country issues its own apostille. We coordinate with local partners (UK FCDO, US Secretary of State, DFAT Canberra)." },
        { title: 'Full consular legalisation for non-Hague countries', desc: "Saudi Arabia, UAE, Qatar, Vietnam and a few others still want the full chain: MSZ apostille → embassy in Warsaw → ministry stamp in the destination country. Budget 3-4 weeks and 200-400 EUR in embassy fees." }
      ]
    },
    timeline: {
      title: 'How the process actually runs',
      subtitle: "Most cases are MSZ-only. The stamp itself is same-day at the counter; what takes time is getting the source document and catching a slot.",
      steps: [
        { title: 'Free 20-min call', duration: '20 min', desc: "We confirm the document type, the receiving country, and which authority back home will see the stamp (court clerk, registrar, bank KYC, embassy). That dictates the chain. A divorce decree for the UK is one thing; the same decree for a Saudi court is another." },
        { title: 'Source document refresh', duration: '1-7 days', desc: "Old certificates rarely fly. We order a fresh odpis from USC (24-48 hours in Warsaw, up to a week if the act is held in another voivodeship), or a current KRS wypis from the registration court." },
        { title: 'Pre-authentication where needed', duration: '1-3 days', desc: "Notarial acts go through izba notarialna. Court papers get the president's clause. University diplomas don't go to MSZ at all — they're apostilled by NAWA on a separate track. Skip the right step and MSZ rejects on the spot." },
        { title: 'MSZ filing at ul. Krucza 38/42', duration: '1 day', desc: "We book through legalizacja.msz.gov.pl and file in person at the Warsaw legalisation desk. The 60 PLN is an opłata skarbowa paid in advance to Centrum Obsługi Podatnika, not at the counter, and Poland issues no electronic apostille - paper originals only." },
        { title: 'Apostille issued', duration: 'same day', desc: "Filed in person, the stamp is issued during the visit, capped at 10 documents per person per day. Posted to al. Szucha 23, it takes up to 30 days. MSZ has no express tariff - anyone selling you one is selling their own queueing." },
        { title: 'Translation, courier, or embassy', duration: '2-5 days', desc: "Sworn translation into English (or the destination language) if needed. Apostille itself is bilingual, but the underlying document usually isn't. DHL Express to wherever, or onward to a Warsaw embassy for non-Hague legalisation." }
      ]
    },
    documents: {
      title: 'What you send us',
      subtitle: "Most cases need just the original plus an ID scan. The trip-ups are 'I only have a photocopy' or 'my certificate is from 2018'.",
      items: [
        'Original document, or a fresh re-issue we order on your behalf (USC odpis, KRS wypis, KRK, diploma)',
        "Photocopies do NOT take an apostille. Common mistake, USC and the receiving registrar both reject. Original or notarised copy only.",
        "Passport scan of the document holder (we register the application in their name)",
        "Destination country and the authority that'll receive the document (HMRC, NY Secretary of State, a specific embassy, a school district)",
        "Target language for sworn translation (usually English, sometimes Arabic or Spanish for non-Hague routes)",
        "Power of attorney to LegalWin if the document isn't in your name (we draft it; signed at any notariusz)",
        "Wniosek to MSZ, which we prepare and sign on your behalf under the POA",
        "For non-Hague routes: the destination embassy's current legalisation fee schedule (we pull it, but client pays direct)"
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: "MSZ stamp is 60 PLN, izba notarialna pre-auth is 26 PLN, embassy legalisation varies. Our handling fee covers the filing, the queue, and the courier.",
      items: [
        { label: 'Free consultation', value: 'Free', note: '20 min · we confirm the chain before you commit' },
        { label: 'Turnkey apostille', value: 'from 250 PLN', note: 'MSZ filing + DHL courier · 1-3 weeks' },
        { label: 'Apostille + sworn English translation', value: 'from 380 PLN', note: 'Most common combo for UK/US/AU use' },
        { label: 'Full non-Hague legalisation', value: 'from 750 PLN', note: 'MSZ + embassy in Warsaw · 3-4 weeks' }
      ],
      note: 'LegalWin fees only. State fees pass through at cost: 60 PLN MSZ apostille, 26 PLN izba notarialna pre-auth, sworn translation around 80 PLN per page, embassy legalisation 30-400 EUR depending on country (UAE and Saudi are at the top end).'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Hague Convention of 5 October 1961 on apostille (Poland ratified 2005)',
        'Code of Administrative Procedure of 14 June 1960 (KPA)',
        'MSZ Regulation on the form and issuance of apostille',
        'Vienna Convention on Consular Relations of 24 April 1963',
        'Notarial Law Act of 14 February 1991 (pre-authentication chain)'
      ]
    },
    faq: [
      { q: "Where do I get an apostille on a UK or US document I need to use in Poland?", a: "Each Hague country issues its own. For the UK it's the FCDO Legalisation Office in Milton Keynes, around £30, two working days by post. For US documents it's the Secretary of State of the issuing state, not federal: New York SoS in Albany for a NY birth certificate, California SoS in Sacramento for a Californian one. Federal documents (FBI background checks, IRS forms) go through the US Department of State in DC. Australia routes through DFAT in Canberra. We coordinate with partners on each side." },
      { q: "Canada: is it really Hague now?", a: "Yes since January 2024. Before that Canada was non-Hague and required full consular legalisation: Global Affairs Canada authentication in Ottawa, then Polish consular legalisation. If you have an old pre-2024 Canadian document with the chain already done, it's still valid. New Canadian documents now take a single apostille." },
      { q: "What about Russia after 2023? Does Polish apostille still work there?", a: "Yes. Russia hasn't withdrawn from the Hague Convention, and Polish MSZ continues to apostille for Russian use. The practical bottleneck is consular service in Poland for any onward steps, not the apostille itself." },
      { q: "Do I need apostille for an EU country?", a: "Often no. EU Regulation 2016/1191 abolished apostille for civil-status documents (birth, marriage, death) moving between EU member states. You can present a Polish odpis directly in Germany or France, sometimes with a free multilingual standard form attached. Apostille is still useful for non-civil-status documents (notarial acts, court rulings) and for non-EU Hague countries." },
      { q: "Can I apostille a photocopy?", a: "No. This is the single most common mistake we see. MSZ stamps originals only, or notarised true copies. If you can't surrender the original (a university diploma, a one-off court order), we walk you to a notariusz, get a kopia poświadczona for around 20 PLN, and apostille that copy. The receiving authority abroad accepts the notarised copy + apostille combo." },
      { q: "UAE, Saudi or Qatar: what's the chain?", a: "Hague apostille from MSZ first (yes, even though they're non-Hague; it's the standard Polish-side authentication), then consular legalisation at the destination embassy in Warsaw. UAE embassy charges around 150 EUR, Saudi around 200 EUR, Qatar around 100 EUR. Add 2-3 weeks on top of the MSZ timeline. We handle the embassy run." },
      { q: "Does apostille expire?", a: "The apostille itself doesn't. The underlying document might: KRS is treated as stale after 3 months, KRK after 6 months by most receiving authorities. Apostille your document right after you collect a fresh original, not six months later when you're already mid-application." }
    ],
    related: ['akty-stanu-cywilnego', 'tlumaczenia-przysiegle', 'zaswiadczenie-o-niekaralnosci'],
    ctaTitle: 'Apostille for UK, US, Australia or beyond',
    ctaSubtitle: "Free 20-min consultation. We confirm the chain, file at MSZ in Warsaw, courier to your destination. Most cases close in 1-3 weeks."
  },
  tr: {
    slug: 'apostille',
    group: 'documents',
    icon: 'landmark',
    badge: '1961 Lahey Sözleşmesi · MSZ',
    title: 'Apostille ve resmi onay',
    subtitle: 'Yurt dışında kullanılacak belgelerin apostille ve legalizasyonu',
    lead: 'Apostille, 1961 Lahey Sözleşmesi\'ne taraf devletler arasında belgelerin basitleştirilmiş uluslararası onayıdır. Polonya belgesinin yurt dışında (veya yabancı belgenin Polonya\'da) kullanılması için üzerinde apostille bulunması zorunludur. USC nüfus belgelerine, noter senetlerine, KRS çıktılarına, diplomalara ve mahkeme kararlarına apostille çıkartıyoruz. Sözleşme dışı ülkeler (Türkiye dahil değildir - Türkiye Lahey üyesidir) için MSZ ve konsolosluk üzerinden tam legalizasyon yürütüyoruz.',
    facts: [
      { label: 'Süre', value: '1-3 hafta', note: 'MSZ apostille · normal kuyruk' },
      { label: 'Resmi harç', value: '60 PLN', note: 'her bir apostille için' },
      { label: 'Yer', value: 'MSZ Varşova', note: 'ul. Krucza 38/42, randevuyla' },
      { label: 'Geçerlilik', value: 'süresiz', note: 'süresiz belgeler için' }
    ],
    grounds: {
      title: 'Hangi belgelere apostille çıkartılır',
      subtitle: '1961 Lahey Sözleşmesi gereği kamusal belgelere. Ticari belgeler için önce noter onayı gereklidir.',
      items: [
        { title: 'USC nüfus belgeleri', desc: 'Akt urodzenia (doğum), małżeństwa (evlilik), zgonu (ölüm) belgeleri - apostille\'i MSZ vurur. Mühürlü ve imzalı taze kağıt odpis gerekir, ePUAP çıktısı kabul edilmez.' },
        { title: 'Noter senetleri', desc: 'Akt notarialny, pełnomocnictwo (vekaletname), oświadczenie (beyan) - izba notarialna (noterler birliği) onayının ardından MSZ apostille\'i.' },
        { title: 'KRS / CEIDG çıktıları', desc: 'Yurt dışında şirket kuruluşu, hesap açma veya işlem yapmak için tam sicil çıktıları.' },
        { title: 'Adli sicil belgeleri (KRK)', desc: 'Krajowy Rejestr Karny zaświadczenie\'si - yurt dışı çalışma vizesi, vatandaşlık, oturum izni başvuruları için.' },
        { title: 'Diplomalar ve sertifikalar', desc: 'Üniversite diplomalarına apostille\'i NAWA düzenler (MSZ değil), kendi kuyruğu vardır. Okul belgelerine ise kuratorium oświaty. Türkiye, ABD, AB, BDT\'de diploma denkliği için.' },
        { title: 'Mahkeme kararları', desc: 'Wyroki sądów - yurt dışı icra, evlilik / boşanma tanınması, miras davaları için.' },
        { title: 'Yabancı belgelere apostille', desc: 'Belgenin verildiği ülkenin konsolosluğu veya yerel ortağımız aracılığıyla apostille temin etmenize yardımcı oluyoruz.' },
        { title: 'Tam legalizasyon (Sözleşme dışı ülkeler)', desc: 'Çin, BAE gibi ülkeler için tam zincir: noter → MSZ → hedef ülkenin konsolosluğu. 4 haftaya kadar.' }
      ]
    },
    timeline: {
      title: 'Apostille süreci',
      subtitle: 'Belge teslimden apostille\'ye standart döngü - 1-3 hafta. MSZ\'ye bizzat başvuruda bazen aynı gün, posta ile daha uzun. Üniversite diplomaları ayrıca NAWA üzerinden, kendi süreleriyle gider.',
      steps: [
        { title: 'Danışmanlık', duration: '20 dk', desc: 'Belge türü, kullanılacak ülke, ön onay durumu (notariusz, izba notarialna) hakkında konuşuyoruz. Üniversite diploması için ayrı yol - NAWA.' },
        { title: 'Belge hazırlığı', duration: '1-7 gün', desc: 'Güncel odpis (USC, KRS, KRK için) alıyor, gerekiyorsa tercüme veya kopya için noter onayı yaptırıyoruz.' },
        { title: 'MSZ\'ye başvuru', duration: '1 gün', desc: 'legalizacja.msz.gov.pl üzerinden randevu alıp Varşova ul. Krucza 38/42 adresine bizzat başvuruyoruz. Kontenjanlar iş günleri sabah açılır. Polonya elektronik apostille vermez - yalnızca kağıt orijinal.' },
        { title: 'Apostille düzenlenmesi', duration: 'ziyaret günü', desc: 'Şahsen başvuruda apostille ziyaret sırasında verilir, kişi başı günlük 10 belge sınırıyla. al. Szucha 23 adresine postayla gönderilirse 30 güne kadar sürer. MSZ\'de express tarife yoktur.' },
        { title: 'Kurye teslimatı', duration: '1-2 gün', desc: 'Orijinali DHL Express ile dünya çapında gönderiyor veya Varşova\'da bizzat teslim ediyoruz.' },
        { title: 'Tercüme (gerekirse)', duration: '2-3 gün', desc: 'Apostille ve belgenin hedef ülke diline yeminli tercümesi.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Asgari paket. Net liste belge türüne göre belirlenir.',
      items: [
        'Belgenin orijinali (USC odpis, KRS çıktı, diploma, noter senedi)',
        'Belge güncel olmalıdır - KRS / KRK için 6 aydan eski olmamalı',
        'Belge sahibinin pasaportu (başvuru kaydı için)',
        'Hedef ülke adresi ve tercüme dili',
        'Kullanım amacı - doğru apostille formu için',
        'LegalWin\'e vekaletname (belge size ait değilse)',
        'Doldurulmuş wniosek - biz hazırlıyoruz',
        'Legalizasyon için - hedef konsolosluğun bilgileri'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Devlet harcı belge başına 60 PLN, ayrıca Centrum Obsługi Podatnika hesabına ödenir.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '20 dakika · durum değerlendirmesi' },
        { label: 'Anahtar teslim apostille', value: '250 PLN\'den', note: 'MSZ + kurye · 1-3 hafta' },
        { label: 'Apostille + yeminli tercüme', value: '380 PLN\'den', note: 'Hedef ülke diline tercümeyle' },
        { label: 'Tam legalizasyon', value: '750 PLN\'den', note: 'Noter → MSZ → konsolosluk · 2-4 hafta' }
      ],
      note: 'Belirtilen ücretler LegalWin danışmanlık bedelidir. Resmi harçlar (60 PLN apostille, 26 PLN izba notarialna, ~30-200 EUR konsolosluk) ve yeminli tercüme (~80 PLN/belge) ayrıca ödenir.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        '5 Ekim 1961 Lahey Sözleşmesi (apostille)',
        'Ustawa z dnia 14 czerwca 1960 r. - Kodeks postępowania administracyjnego (KPA)',
        'Dışişleri Bakanlığı (MSZ) apostille örneği yönetmeliği',
        '1963 Konsolosluk İlişkileri Viyana Sözleşmesi',
        'Ustawa z dnia 14 lutego 1991 r. - Prawo o notariacie (Noterlik Kanunu)'
      ]
    },
    faq: [
      { q: 'Apostille legalizasyonu hangi ülkelerde geçerlidir?', a: 'Tüm 1961 Lahey Sözleşmesi ülkelerinde - yaklaşık 130 devlet: Türkiye, AB, ABD, Kanada (2024\'ten), Birleşik Krallık, Rusya, Ukrayna (2003\'ten), Belarus, Kazakistan, Japonya, Kore, Brezilya vb. Bu ülkeler arasında bir apostille yeterlidir.' },
      { q: 'Sözleşme dışı ülkeler (Çin, BAE, 2024 öncesi Kanada) için ne yapılmalı?', a: 'Tam legalizasyon: 1) noter onayı → 2) izba notarialna (noterlik aktları için) → 3) MSZ (Polonya Dışişleri) → 4) Polonya\'daki hedef ülke konsolosluğu. Süreç 2-4 hafta, danışmanlığımız 750+ PLN ve konsolosluk harçları ayrıca.' },
      { q: 'Polonya\'da apostille gerçekte ne kadara mal olur?', a: 'MSZ damga vergisi - belge başına 60 PLN. Belge bir noter senediyse önce izba notarialna (noterler birliği) onayı (26 PLN) gerekir. Anahtar teslim danışmanlığımız 250 PLN\'den başlar. USC için apostille\'i wojewoda düzenler - aynı 60 PLN.' },
      { q: 'Fotokopiye apostille yapılabilir mi?', a: 'Hayır - yalnızca orijinale veya noter onaylı suretine. İade edilemeyecek belgeler (diploma, doğum belgesinin orijinali) için noter onaylı kopya çıkartır ve ona apostille basarız.' },
      { q: 'Apostille\'in süresi var mı?', a: 'Hayır, apostille\'in kendisinin süresi yoktur. Ancak altındaki belgenin süresi olabilir: KRS çıktısı 3 ay, KRK 6 ay. Apostille\'i taze odpis aldıktan hemen sonra düzenletin.' },
      { q: 'Apostille\'in gerçekliği nasıl doğrulanır?', a: 'Her apostille\'in bir numarası ve tarihi vardır; belgeyi kabul eden kurum bunlarla MSZ\'den teyit alır. Aracıların yazdığının aksine, Polonya apostilleri için herkese açık çevrimiçi kayıt sistemi yoktur.' },
      { q: 'Apostille\'in tercümesi gerekli mi?', a: 'Apostille\'in kendisi iki dilli (Lehçe + İngilizce/Fransızca) düzenlenir, tercümeye gerek yoktur. Altındaki belgenin hedef ülke diline yeminli tercümesi gerekir.' }
    ],
    related: ['akty-stanu-cywilnego', 'tlumaczenia-przysiegle', 'zaswiadczenie-o-niekaralnosci'],
    ctaTitle: 'Anahtar teslim apostille',
    ctaSubtitle: 'Ücretsiz danışmanlık: belgeyi, kullanılacağı ülkeyi ve legalizasyon biçimini netleştiririz. Standart döngü 1-3 haftadır.'
  },
  uk: {
    slug: 'apostille',
    group: 'documents',
    icon: 'landmark',
    badge: 'Конвенція Гаага 1961 · MSZ',
    title: 'Apostille і легалізація',
    subtitle: 'Apostille та легалізація документів для використання за кордоном',
    lead: 'Apostille — спрощена міжнародна легалізація документів між країнами Гаазької конвенції 1961 року. Для використання польського документа за кордоном (або іноземного — у Польщі) на ньому має стояти apostille. Ставимо apostille на свідоцтва USC, нотаріальні акти, виписки з KRS, дипломи і судові рішення. Для країн поза Конвенцією — робимо повну легалізацію через MSZ і консульство.',
    facts: [
      { label: 'Термін', value: '1–3 тижні', note: 'apostille MSZ · звичайна черга' },
      { label: 'Держмито', value: '60 PLN', note: 'за один apostille' },
      { label: 'Де ставиться', value: 'MSZ Warszawa', note: 'ul. Krucza 38/42, за записом' },
      { label: 'Діє', value: 'безстроково', note: 'для документа без терміну' }
    ],
    grounds: {
      title: 'На які документи ставиться apostille',
      subtitle: 'Згідно з Конвенцією Гаага 1961 — на публічні документи. Для комерційних — потрібне попереднє нотаріальне засвідчення.',
      items: [
        { title: 'Свідоцтва USC', desc: 'Akt urodzenia, małżeństwa, zgonu — apostille ставить MSZ. Потрібен свіжий паперовий odpis із печаткою та підписом, роздруківка з ePUAP не підійде.' },
        { title: 'Нотаріальні акти', desc: 'Akt notarialny, pełnomocnictwo, oświadczenie — apostille MSZ після legalizacji izby notarialnej.' },
        { title: 'Виписки з KRS / CEIDG', desc: 'Повні виписки реєстрів для реєстрації фірми за кордоном, відкриття рахунку або угод.' },
        { title: 'Довідки про несудимість (KRK)', desc: 'Zaświadczenie z Krajowego Rejestru Karnego — для робочих віз, громадянства, ВНЖ за кордоном.' },
        { title: 'Дипломи та атестати', desc: 'Дипломи ВНЗ — apostille ставить NAWA (не MSZ), у неї своя черга. Шкільні атестати — kuratorium oświaty. Для нострифікації у США, ЄС, Україні.' },
        { title: 'Судові рішення', desc: 'Wyroki sądów — для виконання за кордоном, визнання шлюбу/розлучення, спадкових справ.' },
        { title: 'Apostille іноземних документів', desc: 'Допомагаємо оформити apostille в країні видачі через консульство або місцевого партнера.' },
        { title: 'Повна легалізація (країни поза Конвенцією)', desc: 'Для Канади, Китаю, ОАЕ — повний цикл: notariusz → MSZ → консульство. До 4 тижнів.' }
      ]
    },
    timeline: {
      title: 'Як ми оформлюємо apostille',
      subtitle: 'Стандартний цикл від документа до apostille — 1–3 тижні. При особистій подачі в MSZ інколи встигають у день звернення, поштою — довше. Дипломи ВНЗ ідуть окремо через NAWA, зі своїми термінами.',
      steps: [
        { title: 'Консультація', duration: '20 хв', desc: 'Уточнюємо тип документа, країну використання, наявність попереднього засвідчення (notariusz, izba notarialna). Для диплома ВНЗ — окремий маршрут через NAWA.' },
        { title: 'Підготовка документа', duration: '1–7 днів', desc: 'Отримуємо актуальний odpis (для USC, KRS, KRK), за потреби — нотаріальне засвідчення перекладу або копії.' },
        { title: 'Подання в MSZ', duration: '1 день', desc: 'Записуємося через legalizacja.msz.gov.pl і подаємо особисто у Warszawa, ul. Krucza 38/42. Слоти відкриваються зранку щоробочого дня. Електронного апостиля Польща не видає — лише паперовий оригінал.' },
        { title: 'Постановка apostille', duration: 'у день візиту', desc: 'За особистого подання апостиль ставлять під час візиту, до 10 документів на людину на день. Якщо надсилаємо поштою на al. Szucha 23 — до 30 днів. Експрес-тарифу в MSZ не існує.' },
        { title: 'Кур’єрська доставка', duration: '1–2 дні', desc: 'Відправляємо оригінал DHL Express у будь-яку країну світу або передаємо особисто у Варшаві.' },
        { title: 'Переклад (якщо потрібен)', duration: '2–3 дні', desc: 'Присяжний переклад apostille і документа мовою країни використання.' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Базовий пакет. Точний перелік залежить від типу документа.',
      items: [
        'Оригінал документа (USC odpis, KRS-виписка, диплом, нотаріальний акт)',
        'Документ має бути актуальним — не старше 6 місяців для KRS / KRK',
        'Паспорт власника документа (для реєстрації заяви)',
        'Адреса країни використання та мова майбутнього перекладу',
        'Інформація про мету — для підбору правильної форми apostille',
        'Довіреність на LegalWin (якщо документ виданий не на вас)',
        'Заповнений wniosek — готуємо ми',
        'При легалізації — реквізити цільового консульства'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Держмито — 60 PLN за документ, сплачується окремо в Centrum Obsługi Podatnika.',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '20 хвилин · оцінка ситуації' },
        { label: 'Apostille під ключ', value: 'від 250 PLN', note: 'MSZ + кур’єр · 1–3 тижні' },
        { label: 'Apostille + присяжний переклад', value: 'від 380 PLN', note: 'З перекладом мовою країни' },
        { label: 'Повна легалізація', value: 'від 750 PLN', note: 'Notariusz → MSZ → консульство · 2–4 тижні' }
      ],
      note: 'Зазначено гонорари LegalWin. Держмита (60 PLN apostille, 26 PLN izba notarialna, ~30–200 EUR консульський збір) і присяжний переклад (~80 PLN/документ) — окремо.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Konwencja haska z 5 października 1961 r. (apostille)',
        'Ustawa z dnia 14 czerwca 1960 r. — Kodeks postępowania administracyjnego',
        'Rozporządzenie Ministra Spraw Zagranicznych w sprawie wzoru apostille',
        'Konwencja wiedeńska o stosunkach konsularnych z 1963 r.',
        'Ustawa z dnia 14 lutego 1991 r. — Prawo o notariacie'
      ]
    },
    faq: [
      { q: 'У яких країнах apostille замінює легалізацію?', a: 'У всіх країнах Гаазької конвенції 1961 р. — це близько 130 держав: ЄС, США, Канада (з 2024), Велика Британія, Україна (з 2003), Білорусь, Казахстан, Туреччина, Японія, Корея, Бразилія тощо. Для документів між цими країнами достатньо одного apostille (апостиля).' },
      { q: 'Що робити для країн поза Конвенцією (Китай, ОАЕ, Канада до 2024)?', a: 'Повна легалізація: 1) нотаріальне засвідчення → 2) izba notarialna (нотаріальна палата, для нотаріальних актів) → 3) MSZ (МЗС Польщі) → 4) консульство країни призначення в Польщі. Цикл — 2–4 тижні, вартість 750+ PLN наших + консульські збори.' },
      { q: 'Скільки фактично коштує apostille в Польщі?', a: 'Держмито MSZ (МЗС Польщі) — 60 PLN/документ. Якщо документ — нотаріальний акт, потрібне спочатку засвідчення izby notarialnej (нотаріальної палати, 26 PLN). Наш гонорар — від 250 PLN під ключ. Свідоцтва USC апостилює той самий MSZ — ті самі 60 PLN за документ.' },
      { q: 'Чи можна поставити apostille на копію?', a: 'Ні — лише на оригінал або нотаріально засвідчену копію. Для документів, які не можна здавати (диплом, оригінал свідоцтва), робимо notarialną kopię (нотаріальну копію) і на неї ставимо apostille.' },
      { q: 'Чи діє apostille безстроково?', a: 'Так, сам apostille (апостиль) не має терміну. Але багато документів мають свій термін: KRS-виписка — 3 місяці, KRK (довідка про несудимість) — 6 місяців. Робіть apostille одразу після отримання свіжого odpisu (виписки).' },
      { q: 'Як перевірити справжність apostille?', a: 'У кожного апостиля є номер і дата — за ними орган, що приймає документ, підтверджує автентичність у MSZ. Окремого публічного онлайн-реєстру польських апостилів немає, попри те, що пишуть посередники.' },
      { q: 'Чи потрібен переклад apostille?', a: 'Сам apostille має двомовний (польський + англійський/французький) формат і перекладається автоматично. Документ під ним — потребує присяжного перекладу мовою країни використання.' }
    ],
    related: ['akty-stanu-cywilnego', 'tlumaczenia-przysiegle', 'zaswiadczenie-o-niekaralnosci'],
    ctaTitle: 'Apostille під ключ',
    ctaSubtitle: 'Безкоштовна консультація: уточнимо документ, країну використання, форму легалізації. Стандартний цикл — 1–3 тижні.'
  }
};

export default apostille;
