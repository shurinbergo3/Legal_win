import type { ServiceEntry } from './types';

const apostille: ServiceEntry = {
  ru: {
    slug: 'apostille',
    group: 'documents',
    icon: 'landmark',
    badge: 'Конвенция Гаага 1961 · MSZ',
    title: 'Apostille и легализация',
    subtitle: 'Apostille и легализация документов для использования за границей',
    lead: 'Apostille — упрощённая международная легализация документов между странами Гаагской конвенции 1961 года. Для использования польского документа за рубежом (или иностранного — в Польше) на нём должен стоять apostille. Ставим apostille на свидетельства USC, нотариальные акты, выписки из KRS, дипломы и судебные решения. Для стран вне Конвенции — делаем полную легализацию через MSZ и консульство.',
    facts: [
      { label: 'Срок', value: '3–5 дней', note: 'apostille MSZ · standardowo' },
      { label: 'Госпошлина', value: '60 PLN', note: 'за один apostille' },
      { label: 'Где ставится', value: 'MSZ Warszawa', note: '+ wojewoda для USC' },
      { label: 'Действует', value: 'бессрочно', note: 'для документа без срока' }
    ],
    grounds: {
      title: 'На какие документы ставится apostille',
      subtitle: 'Согласно Конвенции Гаага 1961 — на публичные документы. Для коммерческих — нужна предварительная нотариальная заверка.',
      items: [
        { title: 'Свидетельства USC', desc: 'Akt urodzenia, małżeństwa, zgonu — apostille ставит wojewoda по месту выдачи документа.' },
        { title: 'Нотариальные акты', desc: 'Akt notarialny, pełnomocnictwo, oświadczenie — apostille MSZ после legalizacji izby notarialnej.' },
        { title: 'Выписки из KRS / CEIDG', desc: 'Полные выписки регистров для регистрации фирмы за рубежом, открытия счёта или сделок.' },
        { title: 'Свидетельства о несудимости (KRK)', desc: 'Zaświadczenie z Krajowego Rejestru Karnego — для рабочих виз, гражданства, ВНЖ за рубежом.' },
        { title: 'Дипломы и аттестаты', desc: 'Apostille от Ministerstwa Edukacji или Nauki — для нострификации дипломов в США, ЕС, СНГ.' },
        { title: 'Судебные решения', desc: 'Wyroki sądów — для исполнения за рубежом, признания брака/развода, наследственных дел.' },
        { title: 'Apostille иностранных документов', desc: 'Помогаем оформить apostille в стране выдачи через консульство или местного партнёра.' },
        { title: 'Полная легализация (страны вне Конвенции)', desc: 'Для Канады, Китая, ОАЭ — полный цикл: notariusz → MSZ → консульство. До 4 недель.' }
      ]
    },
    timeline: {
      title: 'Как мы оформляем apostille',
      subtitle: 'Стандартный цикл от документа до apostille — 3–5 рабочих дней.',
      steps: [
        { title: 'Консультация', duration: '20 мин', desc: 'Уточняем тип документа, страну использования, наличие предварительной заверки (notariusz, izba notarialna).' },
        { title: 'Подготовка документа', duration: '1–2 дня', desc: 'Получаем актуальный odpis (для USC, KRS, KRK), при необходимости — нотариальная заверка перевода или копии.' },
        { title: 'Подача в MSZ или wojewodу', duration: '1 день', desc: 'Подаём через e-Apostille MSZ (онлайн) или физически в Warszawa, ul. Krucza 38/42. Для USC — wojewoda по месту выдачи.' },
        { title: 'Постановка apostille', duration: '3–5 дней', desc: 'MSZ ставит apostille с уникальным номером, проверяемым онлайн. Для срочных — express tariff (1 день, +50%).' },
        { title: 'Курьерская доставка', duration: '1–2 дня', desc: 'Отправляем оригинал DHL Express в любую страну мира или передаём лично в Варшаве.' },
        { title: 'Перевод (если нужен)', duration: '2–3 дня', desc: 'Присяжный перевод apostille и документа на язык страны использования.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Базовый пакет. Точный список зависит от типа документа.',
      items: [
        'Оригинал документа (USC odpis, KRS-выписка, диплом, нотариальный акт)',
        'Документ должен быть актуальным — не старше 6 месяцев для KRS / KRK',
        'Паспорт владельца документа (для регистрации заявления)',
        'Адрес страны использования и язык будущего перевода',
        'Информация о цели — для подбора правильной формы apostille',
        'Доверенность на LegalWin (если документ выдан не на вас)',
        'Заполненный wniosek — готовим мы',
        'При легализации — реквизиты целевого консульства'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Apostille MSZ — 60 PLN/документ, wojewoda — 60 PLN. Express +50%.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '20 минут · оценка ситуации' },
        { label: 'Apostille под ключ', value: 'от 250 PLN', note: 'MSZ + курьер · 3–5 дней' },
        { label: 'Apostille + присяжный перевод', value: 'от 380 PLN', note: 'С переводом на язык страны' },
        { label: 'Полная легализация', value: 'от 750 PLN', note: 'Notariusz → MSZ → консульство · 2–4 недели' }
      ],
      note: 'Указаны гонорары LegalWin. Госпошлины (60 PLN apostille, 26 PLN izba notarialna, ~30–200 EUR консульский сбор) и присяжный перевод (~80 PLN/документ) — отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Konwencja haska z 5 października 1961 r. (apostille)',
        'Ustawa z dnia 14 czerwca 1960 r. — Kodeks postępowania administracyjnego',
        'Rozporządzenie Ministra Spraw Zagranicznych w sprawie wzoru apostille',
        'Konwencja wiedeńska o stosunkach konsularnych z 1963 r.',
        'Ustawa z dnia 14 lutego 1991 r. — Prawo o notariacie'
      ]
    },
    faq: [
      { q: 'В каких странах apostille заменяет легализацию?', a: 'Во всех странах Гаагской конвенции 1961 г. — это около 130 государств: ЕС, США, Канада (с 2024), Великобритания, Россия, Украина (с 2003), Беларусь, Казахстан, Турция, Япония, Корея, Бразилия и др. Для документов между этими странами достаточно одного apostille.' },
      { q: 'Что делать для стран вне Конвенции (Китай, ОАЭ, Канада до 2024)?', a: 'Полная легализация: 1) нотариальная заверка → 2) izba notarialna (для нотариальных актов) → 3) MSZ → 4) консульство страны назначения в Польше. Цикл — 2–4 недели, стоимость 750+ PLN наших + консульские сборы.' },
      { q: 'Сколько по факту стоит apostille в Польше?', a: 'Госпошлина MSZ — 60 PLN/документ. Если документ — нотариальный акт, нужна сначала заверка izby notarialnej (26 PLN). Наш гонорар — от 250 PLN под ключ. Для USC apostille ставит wojewoda — те же 60 PLN.' },
      { q: 'Можно ли поставить apostille на копию?', a: 'Нет — только на оригинал или нотариально заверенную копию. Для документов, которые нельзя сдавать (диплом, оригинал свидетельства), делаем notarialną kopię i на неё ставим apostille.' },
      { q: 'Apostille действует бессрочно?', a: 'Да, сам apostille не имеет срока. Но многие документы имеют свой срок: KRS-выписка — 3 месяца, KRK — 6 месяцев. Делайте apostille сразу после получения свежего odpisu.' },
      { q: 'Как проверить подлинность apostille?', a: 'На сайте MSZ (apostille.gov.pl) — по номеру и дате. Это рекомендуем для всех документов из Польши. Аналогично — у других стран Конвенции (через e-Apostille register).' },
      { q: 'Нужен ли перевод apostille?', a: 'Сам apostille имеет двуязычный (польский + английский/французский) формат и переводится автоматически. Документ под ним — нужен присяжный перевод на язык страны использования.' }
    ],
    related: ['akty-stanu-cywilnego', 'tlumaczenia-przysiegle', 'zaswiadczenie-o-niekaralnosci'],
    ctaTitle: 'Apostille за 3–5 дней',
    ctaSubtitle: 'Бесплатная консультация: уточним документ, страну использования, форму легализации. Стандартный цикл — 3–5 рабочих дней.'
  },
  pl: {
    slug: 'apostille',
    group: 'documents',
    icon: 'landmark',
    badge: 'Konwencja Hag 1961 · MSZ',
    title: 'Apostille i legalizacja',
    subtitle: 'Apostille i legalizacja dokumentów do użytku zagranicznego',
    lead: 'Apostille — uproszczona międzynarodowa legalizacja dokumentów między państwami Konwencji Haskiej 1961. Do użytku polskiego dokumentu za granicą (lub zagranicznego w Polsce) potrzebny jest apostille. Załatwiamy apostille na odpisy USC, akty notarialne, wypisy z KRS, dyplomy i wyroki sądowe. Dla państw spoza Konwencji — pełna legalizacja przez MSZ i konsulat.',
    facts: [
      { label: 'Termin', value: '3–5 dni', note: 'apostille MSZ standardowo' },
      { label: 'Opłata', value: '60 PLN', note: 'za jeden apostille' },
      { label: 'Gdzie', value: 'MSZ Warszawa', note: '+ wojewoda dla USC' },
      { label: 'Ważność', value: 'bezterminowo', note: 'dla dokumentu bez terminu' }
    ],
    grounds: {
      title: 'Na jakie dokumenty apostille',
      subtitle: 'Wg Konwencji Haskiej 1961 — na dokumenty publiczne. Dla handlowych — najpierw notarialne uwierzytelnienie.',
      items: [
        { title: 'Odpisy USC', desc: 'Akt urodzenia, małżeństwa, zgonu — apostille u wojewody właściwego dla miejsca wystawienia.' },
        { title: 'Akty notarialne', desc: 'Akt notarialny, pełnomocnictwo, oświadczenie — apostille MSZ po legalizacji w izbie notarialnej.' },
        { title: 'Wypisy KRS / CEIDG', desc: 'Pełne wypisy do rejestracji firm za granicą, otwierania kont i transakcji.' },
        { title: 'Zaświadczenie o niekaralności (KRK)', desc: 'Zaświadczenie z KRK — do wiz pracowniczych, obywatelstwa, TRC za granicą.' },
        { title: 'Dyplomy i świadectwa', desc: 'Apostille z MEiN — do nostryfikacji dyplomów w USA, UE, krajach WNP.' },
        { title: 'Wyroki sądów', desc: 'Wyroki — do egzekucji za granicą, uznania ślubu/rozwodu, spadku.' },
        { title: 'Apostille zagranicznych dokumentów', desc: 'Pomagamy uzyskać apostille w kraju wydania przez konsulat lub lokalnego partnera.' },
        { title: 'Pełna legalizacja (poza Konwencją)', desc: 'Dla Kanady (do 2024), Chin, ZEA — pełen cykl: notariusz → MSZ → konsulat. Do 4 tygodni.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Standardowy cykl 3–5 dni roboczych.',
      steps: [
        { title: 'Konsultacja', duration: '20 min', desc: 'Ustalamy rodzaj dokumentu, kraj użycia, czy potrzebne wstępne uwierzytelnienie.' },
        { title: 'Przygotowanie dokumentu', duration: '1–2 dni', desc: 'Pobieramy aktualny odpis, w razie potrzeby — uwierzytelnienie notarialne.' },
        { title: 'Złożenie w MSZ / u wojewody', duration: '1 dzień', desc: 'Przez e-Apostille MSZ lub osobiście w Warszawie. Dla USC — wojewoda właściwy dla wydania.' },
        { title: 'Apostille', duration: '3–5 dni', desc: 'MSZ nadaje apostille z numerem do weryfikacji online. Express +50% (1 dzień).' },
        { title: 'Kurier', duration: '1–2 dni', desc: 'DHL Express w dowolne miejsce na świecie lub osobisty odbiór.' },
        { title: 'Tłumaczenie', duration: '2–3 dni', desc: 'Tłumaczenie przysięgłe na język kraju użycia.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Pakiet bazowy.',
      items: [
        'Oryginał dokumentu (odpis USC, wypis KRS, dyplom, akt notarialny)',
        'Dokument aktualny — nie starszy niż 6 miesięcy dla KRS/KRK',
        'Paszport właściciela dokumentu',
        'Adres kraju użycia i język tłumaczenia',
        'Cel — do wybrania formy apostille',
        'Pełnomocnictwo dla LegalWin (jeśli dokument nie na Ciebie)',
        'Wypełniony wniosek — przygotowujemy my',
        'Dla legalizacji — dane konsulatu docelowego'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Apostille MSZ — 60 PLN/dok., wojewoda — 60 PLN. Express +50%.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '20 min · ocena' },
        { label: 'Apostille pod klucz', value: 'od 250 PLN', note: 'MSZ + kurier · 3–5 dni' },
        { label: 'Apostille + tłumaczenie', value: 'od 380 PLN', note: 'Z tłumaczeniem przysięgłym' },
        { label: 'Pełna legalizacja', value: 'od 750 PLN', note: 'Notariusz → MSZ → konsulat · 2–4 tygodnie' }
      ],
      note: 'Powyżej honoraria LegalWin. Opłaty (60 PLN apostille, 26 PLN izba notarialna, ~30–200 EUR konsulat) i tłumaczenia — osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Konwencja haska z 5 października 1961 r. (apostille)',
        'Ustawa z 14 czerwca 1960 r. — Kodeks postępowania administracyjnego',
        'Rozporządzenie MSZ ws. wzoru apostille',
        'Konwencja wiedeńska o stosunkach konsularnych z 1963 r.',
        'Ustawa z 14 lutego 1991 r. — Prawo o notariacie'
      ]
    },
    faq: [
      { q: 'W jakich krajach apostille zastępuje legalizację?', a: 'We wszystkich państwach Konwencji Haskiej 1961 — ok. 130: UE, USA, Kanada (od 2024), UK, Rosja, Ukraina (od 2003), Białoruś, Kazachstan, Turcja, Japonia, Korea, Brazylia. Wystarczy jeden apostille.' },
      { q: 'Co dla państw spoza Konwencji?', a: 'Pełna legalizacja: notariusz → izba notarialna → MSZ → konsulat. Cykl 2–4 tygodnie, koszty od 750 PLN + konsulat.' },
      { q: 'Realny koszt?', a: 'MSZ 60 PLN/dok. Akt notarialny — najpierw izba notarialna (26 PLN). Honorarium od 250 PLN. USC — wojewoda 60 PLN.' },
      { q: 'Apostille na kopii?', a: 'Nie — tylko na oryginale lub kopii notarialnej. Dla dokumentów, których nie oddaje się (dyplom) — apostille na kopii notarialnej.' },
      { q: 'Czy apostille jest bezterminowy?', a: 'Tak, sam apostille nie ma terminu. Ale dokumenty mają: KRS — 3 miesiące, KRK — 6 miesięcy.' },
      { q: 'Jak zweryfikować apostille?', a: 'Na apostille.gov.pl po numerze i dacie. Inne kraje — przez e-Apostille register.' },
      { q: 'Tłumaczenie apostille?', a: 'Sam apostille jest dwujęzyczny (PL + EN/FR) — nie wymaga tłumaczenia. Dokument pod nim — tłumaczenie przysięgłe na język docelowy.' }
    ],
    related: ['akty-stanu-cywilnego', 'tlumaczenia-przysiegle', 'zaswiadczenie-o-niekaralnosci'],
    ctaTitle: 'Apostille w 3–5 dni',
    ctaSubtitle: 'Bezpłatna konsultacja: dokument, kraj użycia, forma legalizacji. Standard — 3–5 dni roboczych.'
  },
  en: {
    slug: 'apostille',
    group: 'documents',
    icon: 'landmark',
    badge: '1961 Hague Convention · MSZ',
    title: 'Apostille & legalisation',
    subtitle: 'Apostille and legalisation of documents for foreign use',
    lead: 'Apostille is a simplified international legalisation between 1961 Hague Convention states. For a Polish document to be used abroad — or a foreign one in Poland — it needs an apostille. We secure apostilles on USC certificates, notarial acts, KRS extracts, diplomas and court rulings. For non-Convention countries we run full legalisation via MSZ and the consulate.',
    facts: [
      { label: 'Turnaround', value: '3–5 days', note: 'MSZ apostille · standard' },
      { label: 'State fee', value: '60 PLN', note: 'per apostille' },
      { label: 'Where', value: 'MSZ Warsaw', note: '+ voivode for USC' },
      { label: 'Validity', value: 'unlimited', note: 'for a document with no expiry' }
    ],
    grounds: {
      title: 'What documents take an apostille',
      subtitle: 'Per Hague 1961 — public documents. Commercial documents need notarial pre-authentication.',
      items: [
        { title: 'USC certificates', desc: 'Birth, marriage, death — apostille issued by the voivode of the issuing place.' },
        { title: 'Notarial acts', desc: 'Akt notarialny, power of attorney, declaration — MSZ apostille after notary chamber legalisation.' },
        { title: 'KRS / CEIDG extracts', desc: 'Full extracts for foreign company registration, account opening or transactions.' },
        { title: 'Criminal record (KRK)', desc: 'For work visas, citizenship, foreign residence applications.' },
        { title: 'Diplomas & certificates', desc: 'Apostille from MEiN for diploma recognition in the US, EU, CIS.' },
        { title: 'Court judgements', desc: 'For foreign enforcement, marriage/divorce recognition, inheritance cases.' },
        { title: 'Apostille on foreign documents', desc: 'We help arrange apostille in the issuing country via consulate or local partner.' },
        { title: 'Full legalisation (non-Convention)', desc: 'For Canada (pre-2024), China, UAE — full chain: notary → MSZ → consulate. Up to 4 weeks.' }
      ]
    },
    timeline: {
      title: 'Timeline',
      subtitle: 'Standard cycle from document to apostille — 3–5 working days.',
      steps: [
        { title: 'Consultation', duration: '20 min', desc: 'Document type, country of use, pre-authentication needs.' },
        { title: 'Document prep', duration: '1–2 days', desc: 'Fresh odpis (USC, KRS, KRK), notarial authentication when needed.' },
        { title: 'Filing with MSZ / voivode', duration: '1 day', desc: 'Via e-Apostille MSZ (online) or in person at Warsaw, ul. Krucza 38/42. USC — voivode of issuing place.' },
        { title: 'Apostille issued', duration: '3–5 days', desc: 'MSZ issues apostille with online-verifiable serial. Express +50% (1 day).' },
        { title: 'Courier', duration: '1–2 days', desc: 'DHL Express worldwide or pickup in Warsaw.' },
        { title: 'Translation', duration: '2–3 days', desc: 'Sworn translation of the document for the destination country.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Base set.',
      items: [
        'Original document (USC odpis, KRS extract, diploma, notarial act)',
        'Document must be current — no older than 6 months for KRS/KRK',
        "Document holder's passport",
        'Destination country and target translation language',
        'Purpose — to pick the right apostille form',
        "Power of attorney to LegalWin (if document isn't in your name)",
        'Completed application — we prepare it',
        'For legalisation — destination consulate details'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'MSZ apostille — 60 PLN/doc, voivode — 60 PLN. Express +50%.',
      items: [
        { label: 'Consultation', value: 'Free', note: '20 minutes · case review' },
        { label: 'Turnkey apostille', value: 'from 250 PLN', note: 'MSZ + courier · 3–5 days' },
        { label: 'Apostille + sworn translation', value: 'from 380 PLN', note: 'Translated for destination' },
        { label: 'Full legalisation', value: 'from 750 PLN', note: 'Notary → MSZ → consulate · 2–4 weeks' }
      ],
      note: 'LegalWin fees. State fees (60 PLN apostille, 26 PLN notary chamber, ~30–200 EUR consulate) and sworn translations (~80 PLN/doc) billed separately.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Hague Convention of 5 October 1961 (apostille)',
        'Code of Administrative Procedure of 14 June 1960',
        'MSZ Regulation on apostille template',
        'Vienna Convention on Consular Relations 1963',
        'Notarial Law Act of 14 February 1991'
      ]
    },
    faq: [
      { q: 'Which countries accept apostille?', a: 'All 1961 Hague Convention states — about 130: EU, US, Canada (since 2024), UK, Russia, Ukraine (since 2003), Belarus, Kazakhstan, Turkey, Japan, Korea, Brazil. A single apostille is enough.' },
      { q: 'Non-Convention countries (China, UAE, Canada pre-2024)?', a: 'Full legalisation: notary → notary chamber (for notarial acts) → MSZ → destination consulate in Poland. 2–4 weeks, from 750 PLN + consular fees.' },
      { q: 'Real cost?', a: 'MSZ — 60 PLN/doc. Notarial acts need notary-chamber authentication first (26 PLN). Our fee — from 250 PLN. USC — voivode 60 PLN.' },
      { q: 'Apostille on a copy?', a: 'No — only on originals or notarised copies. For non-removable documents (diplomas), we apostille a notary copy.' },
      { q: 'Is apostille open-ended?', a: 'Yes — the apostille has no expiry. But documents do: KRS — 3 months, KRK — 6 months. Apostille right after a fresh extract.' },
      { q: 'How to verify?', a: 'apostille.gov.pl by serial and date. Other countries — via national e-Apostille register.' },
      { q: 'Translation of apostille?', a: 'Apostille itself is bilingual (PL + EN/FR) — no translation needed. The underlying document needs sworn translation.' }
    ],
    related: ['akty-stanu-cywilnego', 'tlumaczenia-przysiegle', 'zaswiadczenie-o-niekaralnosci'],
    ctaTitle: 'Apostille in 3–5 days',
    ctaSubtitle: 'Free consultation: document, destination, form of legalisation. Standard cycle — 3–5 working days.'
  }
};

export default apostille;
