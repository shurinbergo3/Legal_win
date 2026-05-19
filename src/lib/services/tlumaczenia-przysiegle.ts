import type { ServiceEntry } from './types';

const tlumaczeniaPrzysiegle: ServiceEntry = {
  ru: {
    slug: 'tlumaczenia-przysiegle',
    group: 'documents',
    icon: 'scale',
    badge: 'TEPIS · MS · 35+ языков',
    title: 'Присяжные переводы',
    subtitle: 'Tłumaczenia przysięgłe для польских urzędów, судов и банков',
    lead: 'Tłumacze przysięgli - это переводчики со специальной государственной аккредитацией Министерства Юстиции, имеющие право переводить официальные документы для польских urzędów, sądów, KRS, USC и банков. Без присяжного перевода ваши иностранные документы не примут - даже идеально переведённые обычным переводчиком. Работаем с 35+ языками: украинский, русский, белорусский, английский, немецкий, испанский, грузинский, армянский, арабский, иврит и др.',
    facts: [
      { label: 'Срок выдачи', value: '1-3 дня', note: 'standardowo · срочно - 24 ч' },
      { label: 'Стоимость', value: '~80 PLN', note: 'за стр. 1125 знаков · с/на польский' },
      { label: 'Языки', value: '35+', note: 'все языки СНГ + ЕС + азиатские' },
      { label: 'Где принимают', value: 'Все urzędy', note: 'sady, banks, USC, ZUS, KRS' }
    ],
    grounds: {
      title: 'Какие документы переводим',
      subtitle: 'Полный список - на сайте TEPIS. Самые востребованные у иностранцев:',
      items: [
        { title: 'Свидетельства USC', desc: 'O рождении, браке, разводе, смерти - для umiejscowienia, гражданства, наследства. Ставка 80 PLN/страница.' },
        { title: 'Дипломы и аттестаты', desc: 'Высшее образование, школьный аттестат, профессиональные сертификаты - для нострификации в Польше.' },
        { title: 'Документы для TRC/ПМЖ', desc: 'Trudовые umowy, справки о доходах, выписки счетов, договоры аренды - пакет на иностранном переводим под ключ.' },
        { title: 'Водительские права', desc: 'Обмен прав СНГ на польские - обязателен присяжный перевод обеих сторон. 80-120 PLN.' },
        { title: 'KRK / справки о несудимости', desc: 'Из стран происхождения - для Karty pobytu, гражданства, лицензий.' },
        { title: 'Корпоративные документы', desc: 'KRS-выписки, статуты, протоколы собраний, балансы - для регистрации фирмы или сделок.' },
        { title: 'Судебные решения', desc: 'Wyroki rozwodowe, alimentacyjne, spadkowe - для исполнения в Польше или umiejscowienia.' },
        { title: 'Медицинские документы', desc: 'Истории болезни, рецепты, справки о прививках, орган донорство - для NFZ или работы.' }
      ]
    },
    timeline: {
      title: 'Как работает присяжный перевод',
      subtitle: 'От передачи документа до готового перевода с печатью - 1-3 рабочих дня.',
      steps: [
        { title: 'Передача документа', duration: '5 мин', desc: 'Высылаете скан / фото / PDF на email или передаёте оригинал лично. Разборчивость - критична: качество перевода зависит от читаемости источника.' },
        { title: 'Расчёт стоимости', duration: '15 мин', desc: 'Считаем количество стандартных страниц (1125 знаков с пробелами на польском). Выставляем точную смету в течение часа.' },
        { title: 'Подписание заказа', duration: '5 мин', desc: 'Подтверждаете срок и цену, оплачиваете 50% аванс или после готовности (постоянным клиентам).' },
        { title: 'Перевод', duration: '1-3 дня', desc: 'Tłumacz przysięgły делает перевод, заверяет подписью, печатью и формуле, что перевод соответствует оригиналу. Каждый лист пронумерован.' },
        { title: 'Передача готового перевода', duration: '15 мин', desc: 'Бумажная версия - забираете в офисе или курьером. Электронная - с qualified signature на ePUAP. Для urzędów - оба варианта работают.' },
        { title: 'Apostille (опционально)', duration: '3-5 дней', desc: 'Если перевод используется за рубежом - ставим apostille MSZ на польский оригинал и присяжный перевод вместе.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Минимум для расчёта стоимости и сроков.',
      items: [
        'Скан или фото документа в высоком разрешении (≥ 300 dpi)',
        'Оригинал документа - для сверки или личной встречи',
        'Все печати, штампы, подписи должны быть читаемы',
        'Список имён собственных в правильной транскрипции (Ваше Имя, фамилия)',
        'Apostille или легализация (если уже стоит - переводим вместе с ним)',
        'Цель использования (urząd, sąd, ZUS, USC) - определяет формат',
        'Срочность - стандарт (1-3 дня) или express (24 ч, +50%)',
        'Реквизиты получателя (если нужна электронная версия с QES)'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Цена за стандартную страницу (1125 знаков с пробелами на польском).',
      items: [
        { label: 'С/на польский (украинский, русский)', value: 'от 70 PLN', note: 'За страницу 1125 знаков' },
        { label: 'С/на английский, немецкий', value: 'от 80 PLN', note: 'Государственный тариф МС' },
        { label: 'Редкие языки (грузинский, армянский)', value: 'от 100 PLN', note: 'Арабский, иврит, фарси' },
        { label: 'Срочно (24 часа)', value: '+50%', note: 'Доступно для большинства языков' }
      ],
      note: 'Указаны базовые ставки за страницу 1125 знаков. Окончательная цена зависит от объёма (в страницах после перевода, не оригинале), языка и срочности. Минимальный заказ - 1 страница. Скидки - для юр. лиц и постоянных клиентов.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 25 listopada 2004 r. o zawodzie tłumacza przysięgłego',
        'Rozporządzenie Ministra Sprawiedliwości w sprawie wynagrodzenia za czynności tłumacza przysięgłego (стандартные ставки)',
        'Lista tłumaczy przysięgłych - Ministerstwo Sprawiedliwości (publiczny rejestr)',
        'Rozporządzenie (UE) 2016/1191 (eliminacja legalizacji w UE - также упрощает требования к переводам)',
        'Ustawa z dnia 14 czerwca 1960 r. - Kodeks postępowania administracyjnego (art. 5 - wymóg języka polskiego)'
      ]
    },
    faq: [
      { q: 'Чем присяжный перевод отличается от обычного?', a: 'Присяжный перевод имеет юридическую силу - приравнен к нотариальному заверению. Tłumacz przysięgły - государственный экзаменированный специалист в реестре MS, его перевод принимают urzędy, sądy, банки, USC. Обычный переводчик - даже идеальный - не имеет такого статуса. Для официальных документов нужен только присяжный.' },
      { q: 'Сколько стоит перевод одного свидетельства?', a: 'Свидетельство о рождении/браке (1 страница) - 70-80 PLN. Диплом + приложение (3-5 страниц) - 250-400 PLN. Trudовая umowa (4-8 страниц) - 320-650 PLN. Точная цена - после оценки в течение часа.' },
      { q: 'Можно ли получить перевод в электронном виде?', a: 'Да. С 2018 года tłumacz przysięgły может заверять переводы qualified electronic signature (QES). Электронная версия имеет ту же юридическую силу, что бумажная. Для подачи через ePUAP / MOS v2.0 / e-Urząd Skarbowy - это идеальный формат.' },
      { q: 'Сколько действует присяжный перевод?', a: 'Сам перевод - бессрочно. Но многие документы имеют свой срок: KRK - 6 мес., KRS-выписка - 3 мес. Делайте перевод сразу после получения свежего оригинала - иначе документ устареет до подачи.' },
      { q: 'Нужен ли apostille перед переводом?', a: 'Зависит от цели. Для использования в Польше - apostille не нужно (для документов из стран Конвенции 1961 г.). Для использования за рубежом - apostille ставится на оригинал, потом переводим оригинал и apostille вместе. Иногда процедура требует двух apostille - один на оригинал, второй на перевод. Уточняем у целевого учреждения.' },
      { q: 'Что если документ написан от руки или плохо читаем?', a: 'Tłumacz przysięgły может отказаться или сделать перевод с пометкой «nieczytelne» в местах, где не разобрать. Это снижает шансы принятия документа. Делайте качественный скан (≥ 300 dpi) при хорошем освещении.' },
      { q: 'Можно ли заверить перевод, сделанный мной?', a: 'Нет. Присяжный переводчик заверяет только перевод, выполненный лично или под его контролем. Это правило строгое - нарушение влечёт лишение лицензии. Если у вас уже есть перевод - он будет принят как «сверка», но это та же стоимость.' }
    ],
    related: ['apostille', 'akty-stanu-cywilnego', 'pesel'],
    ctaTitle: 'Присяжный перевод за 1-3 дня',
    ctaSubtitle: 'Бесплатная оценка: пришлите скан документа - посчитаем стоимость и срок в течение часа. От передачи до готового перевода с печатью - 1-3 рабочих дня.'
  },
  pl: {
    slug: 'tlumaczenia-przysiegle',
    group: 'documents',
    icon: 'scale',
    badge: 'TEPIS · MS · 35+ języków',
    title: 'Tłumaczenia przysięgłe',
    subtitle: 'Tłumaczenia przysięgłe dla urzędów, sądów i banków',
    lead: 'Tłumacz przysięgły to tłumacz z państwową akredytacją Ministerstwa Sprawiedliwości, uprawniony do tłumaczenia dokumentów urzędowych dla urzędów, sądów, KRS, USC i banków. Bez tłumaczenia przysięgłego zagraniczne dokumenty nie są przyjmowane - nawet idealnie przetłumaczone przez zwykłego tłumacza. Pracujemy z 35+ językami: ukraińskim, rosyjskim, białoruskim, angielskim, niemieckim, hiszpańskim, gruzińskim, ormiańskim, arabskim, hebrajskim i innymi.',
    facts: [
      { label: 'Termin', value: '1-3 dni', note: 'standardowo · pilne - 24 h' },
      { label: 'Cena', value: '~80 PLN', note: 'za stronę 1125 znaków · z/na polski' },
      { label: 'Języki', value: '35+', note: 'wszystkie języki WNP + UE + azjatyckie' },
      { label: 'Akceptacja', value: 'Wszystkie urzędy', note: 'sądy, banki, USC, ZUS, KRS' }
    ],
    grounds: {
      title: 'Co tłumaczymy',
      subtitle: 'Pełna lista na stronie TEPIS. Najczęściej dla cudzoziemców:',
      items: [
        { title: 'Akty USC', desc: 'Urodzenia, małżeństwa, rozwodu, zgonu - do umiejscowienia, obywatelstwa, spadku. 80 PLN/stronę.' },
        { title: 'Dyplomy i świadectwa', desc: 'Wyższe wykształcenie, świadectwa szkolne, certyfikaty - do nostryfikacji w Polsce.' },
        { title: 'Dokumenty do TRC/PR', desc: 'Umowy o pracę, zaświadczenia o dochodach, wyciągi, najem - pakiet pod klucz.' },
        { title: 'Prawo jazdy', desc: 'Wymiana praw WNP na polskie - konieczne tłumaczenie obu stron. 80-120 PLN.' },
        { title: 'KRK / niekaralność', desc: 'Z krajów pochodzenia - do karty pobytu, obywatelstwa, licencji.' },
        { title: 'Dokumenty korporacyjne', desc: 'Wypisy KRS, statuty, protokoły, bilanse - do rejestracji firm lub transakcji.' },
        { title: 'Wyroki sądowe', desc: 'Rozwodowe, alimentacyjne, spadkowe - do wykonania w Polsce lub umiejscowienia.' },
        { title: 'Dokumenty medyczne', desc: 'Historie choroby, recepty, szczepienia, dawstwo - dla NFZ lub pracy.' }
      ]
    },
    timeline: {
      title: 'Jak działa tłumaczenie przysięgłe',
      subtitle: 'Od przekazania dokumentu do gotowego tłumaczenia z pieczęcią - 1-3 dni robocze.',
      steps: [
        { title: 'Przekazanie dokumentu', duration: '5 min', desc: 'E-mail (skan/zdjęcie/PDF) lub osobiście. Czytelność - krytyczna.' },
        { title: 'Wycena', duration: '15 min', desc: 'Liczymy strony (1125 znaków z spacjami po polsku). Wycena w godzinę.' },
        { title: 'Zlecenie', duration: '5 min', desc: 'Akceptujesz termin i cenę, 50% zaliczki lub po wykonaniu (stali klienci).' },
        { title: 'Tłumaczenie', duration: '1-3 dni', desc: 'Tłumacz przysięgły wykonuje, sygnuje pieczęcią, formułą zgodności. Strony numerowane.' },
        { title: 'Odbiór', duration: '15 min', desc: 'Papier - w biurze lub kurier. Elektronicznie - z QES na ePUAP.' },
        { title: 'Apostille (opcjonalnie)', duration: '3-5 dni', desc: 'Apostille MSZ na oryginał i tłumaczenie razem.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Minimum do wyceny.',
      items: [
        'Skan lub zdjęcie dokumentu w wysokiej rozdzielczości (≥ 300 dpi)',
        'Oryginał - do weryfikacji',
        'Wszystkie pieczęcie i podpisy czytelne',
        'Lista imion własnych w poprawnej transkrypcji',
        'Apostille (jeśli jest - tłumaczymy razem)',
        'Cel (urząd, sąd, ZUS, USC) - wpływa na format',
        'Pilność - standard (1-3 dni) lub express (24 h, +50%)',
        'Dane odbiorcy (jeśli wersja elektroniczna z QES)'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Cena za stronę 1125 znaków po polsku (po tłumaczeniu).',
      items: [
        { label: 'Z/na polski (UA, RU)', value: 'od 70 PLN', note: 'Strona 1125 znaków' },
        { label: 'Z/na EN, DE', value: 'od 80 PLN', note: 'Stawka MS' },
        { label: 'Rzadkie języki (KA, AM)', value: 'od 100 PLN', note: 'AR, HE, FA' },
        { label: 'Pilne (24 h)', value: '+50%', note: 'Większość języków' }
      ],
      note: 'Stawki bazowe za stronę. Cena zależy od objętości (po tłumaczeniu), języka, pilności. Minimum - 1 strona. Rabaty dla firm.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 25 listopada 2004 r. o zawodzie tłumacza przysięgłego',
        'Rozporządzenie MS ws. wynagrodzenia tłumacza przysięgłego',
        'Lista tłumaczy przysięgłych - MS (publiczny rejestr)',
        'Rozporządzenie (UE) 2016/1191',
        'Kodeks postępowania administracyjnego (art. 5 - język polski)'
      ]
    },
    faq: [
      { q: 'Różnica między przysięgłym a zwykłym?', a: 'Przysięgły ma moc prawną - porównywalna z notarialnym. Tłumacz w rejestrze MS, akceptowany przez urzędy, sądy, banki. Zwykły - nie ma tego statusu. Do dokumentów urzędowych - tylko przysięgły.' },
      { q: 'Cena za świadectwo?', a: 'Akt urodzenia/ślubu (1 strona) - 70-80 PLN. Dyplom + suplement - 250-400 PLN. Umowa 4-8 stron - 320-650 PLN.' },
      { q: 'Wersja elektroniczna?', a: 'Tak, od 2018 - z QES. Ta sama moc prawna. Idealne do ePUAP / MOS / EUS.' },
      { q: 'Ważność tłumaczenia?', a: 'Bezterminowo. Ale dokumenty mają swoje terminy: KRK - 6 mies., KRS - 3 mies. Tłumacz po świeżym oryginale.' },
      { q: 'Apostille przed tłumaczeniem?', a: 'W Polsce - bez apostille (kraje Konwencji 1961). Za granicą - apostille na oryginał, potem tłumaczenie razem. Czasem dwa apostille.' },
      { q: 'Dokument odręczny / nieczytelny?', a: 'Tłumacz może odmówić lub dać "nieczytelne". Skan ≥ 300 dpi przy dobrym świetle.' },
      { q: 'Tłumaczenie własne?', a: 'Nie - przysięgły tłumaczy tylko swoje. Twój tekst może być "weryfikacją" - ta sama cena.' }
    ],
    related: ['apostille', 'akty-stanu-cywilnego', 'pesel'],
    ctaTitle: 'Tłumaczenie przysięgłe w 1-3 dni',
    ctaSubtitle: 'Bezpłatna wycena: prześlij skan - odpowiedź w godzinę. Od zlecenia do gotowego tłumaczenia z pieczęcią - 1-3 dni robocze.'
  },
  en: {
    slug: 'tlumaczenia-przysiegle',
    group: 'documents',
    icon: 'scale',
    badge: 'MoJ-certified · ~15 in-house translators',
    title: 'Sworn translations in Warsaw',
    subtitle: 'MoJ-certified translators for USC, courts, KRS, banks',
    lead: "A tłumacz przysięgły is not the same animal as a US notarised translator. They sit a state exam, swear an oath before the Minister of Justice, and are listed in the public register at arch-bip.ms.gov.pl. Their stamp is the only translation a Polish urząd, USC, sąd, or KRS will actually accept on a foreign document. We work with a stable of around 15 sworn translators across the main EU languages and most of the rarer ones. Send a scan, we quote within the hour, and the standard turnaround is 1 to 3 working days.",
    facts: [
      { label: 'Turnaround', value: '1-3 days', note: 'rush 24 h adds 50-100%' },
      { label: 'Polish page', value: '1,125 chars', note: 'with spaces, post-translation' },
      { label: 'English page', value: '50-80 PLN', note: 'German 60-100, rare 80-150' },
      { label: 'Accepted by', value: 'USC · sądy · KRS', note: 'banks, ZUS, US, urzędy' }
    ],
    grounds: {
      title: 'When you need a sworn translation',
      subtitle: 'These are the cases foreigners in Warsaw hit most often. Public register of every sworn translator lives at arch-bip.ms.gov.pl.',
      items: [
        { title: 'US birth certificate for USC', desc: "Long-form with seal. USC always wants it sworn-translated for umiejscowienie. The short certified copy without a seal will get bounced before the clerk reads the names." },
        { title: 'UK FCDO-apostilled docs', desc: "If the original is already in English with a UK apostille, some urzędy dzielnicy in Warsaw accept it as-is. Others demand a sworn translation regardless. Ochota tends to ask, Wola usually doesn't. We check before you file." },
        { title: 'Court hearings', desc: 'A sworn translator can also work live in court as tłumacz na rozprawie. Same registry, same oath. We book the same person for the document and the hearing so terminology stays consistent.' },
        { title: 'Driving licence exchange', desc: 'Both sides of the foreign licence have to be sworn-translated for wymiana prawa jazdy. US, UK, Israeli, Ukrainian licences all need it. 60 to 100 PLN total in most cases.' },
        { title: 'Diplomas for nostryfikacja', desc: 'University degrees and transcripts of records bound for a Polish university or NAWA recognition. Apostille goes on the original; the sworn translation is bound to that apostilled original.' },
        { title: 'KRS and corporate filings', desc: "Foreign articles of association, board resolutions, parent-company KRS-equivalent extracts. For a Sp. z o.o. registration with a non-Polish founder the notariusz won't accept anything else." },
        { title: 'KRK criminal record checks', desc: 'FBI Identity History Summary, UK ACRO, Bundeszentralregister, MVD certificates. For karta pobytu, citizenship, professional licences. KRK validity is 6 months, so translate fresh.' },
        { title: 'Medical and insurance documents', desc: 'Vaccination records for school enrolment, GP histories for NFZ, accident reports for insurance claims. Sworn version is what NFZ and insurers archive.' }
      ]
    },
    timeline: {
      title: 'How a sworn translation actually moves',
      subtitle: 'Quote in the hour, finished stamped translation in 1 to 3 working days. Rush is doable but it costs.',
      steps: [
        { title: 'Send a scan', duration: '5 min', desc: 'Email the scan or PDF. 300 dpi minimum. If a stamp is unreadable the translator has to mark it nieczytelne, which weakens the document at the urząd.' },
        { title: 'Hourly quote', duration: '1 hour', desc: "We count the page output, not the input. A one-page US birth certificate often comes out as 1.5 Polish pages because of how the seal text expands. You get a fixed number, not a range." },
        { title: 'Translator assignment', duration: 'same day', desc: 'We match by language and document type. Spanish, Italian, Portuguese have fewer sworn translators in Warsaw, so plan ahead by a day or two. For English, German, Ukrainian, Russian we usually start the same day.' },
        { title: 'Translation and certification', duration: '1-3 days', desc: "Translator does the work, signs with their personal stamp, adds the certification formula, and registers the job in their repertorium. Every page is numbered and the translator's MoJ number is on each one." },
        { title: 'Delivery', duration: 'same day', desc: 'Paper copy bound to a printed scan of the original for office or courier pickup. Or a digitally signed PDF with a qualified electronic signature, valid the same way on paper. mObywatel-native digital sworn translations are slated for 2026 but no urząd accepts them yet.' },
        { title: 'Apostille on the pair (optional)', duration: '3-5 days', desc: "If you need the translation valid abroad, MSZ apostilles the sworn translation itself. We file at Krucza 38 and pick up. The apostille on the foreign original is a separate step done in that country before we translate." }
      ]
    },
    documents: {
      title: 'What we need from you',
      subtitle: 'Enough to quote and start. Originals come into play only if a clerk wants to compare.',
      items: [
        'High-resolution scan or photo, 300 dpi or better, every page',
        'All stamps, apostille foils, seals, and signatures clearly readable',
        'Your name as it appears on your passport, in Latin script',
        'Spelling for any other proper nouns (place names, employer names)',
        'Target use: USC, sąd, KRS, ZUS, bank, university — affects the certification wording',
        'Apostille on the original (if your downstream filing requires one)',
        'Standard or rush — rush is +50 to +100% depending on language and length',
        'Delivery preference: paper to our office, courier, or QES-signed PDF'
      ]
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Polish standard page = 1,125 characters with spaces, counted on the translated text. Not the same as a US or UK "page".',
      items: [
        { label: 'English ↔ Polish', value: '50-80 PLN', note: 'per 1,125-char page' },
        { label: 'German ↔ Polish', value: '60-100 PLN', note: 'per 1,125-char page' },
        { label: 'Arabic, Chinese, Vietnamese', value: '80-150 PLN', note: 'fewer translators, higher rate' },
        { label: 'Rush 24 h', value: '+50-100%', note: 'depends on language and length' }
      ],
      note: "Final price depends on character count of the translation, language pair, and how fast you need it. Minimum charge is one page. Repeat clients and corporate accounts get a flat per-page rate negotiated up front. We don't bill for the quote itself."
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Ustawa z 25 listopada 2004 r. o zawodzie tłumacza przysięgłego (the Sworn Translator Act)',
        'Rozporządzenie MS w sprawie wynagrodzenia za czynności tłumacza przysięgłego (state-set rates)',
        'Public register of sworn translators: arch-bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli',
        "Regulation (EU) 2016/1191 (drops the legalisation requirement for some EU public documents)",
        'Kodeks postępowania administracyjnego, art. 5 (Polish-language requirement before urzędy)'
      ]
    },
    faq: [
      { q: "Why won't the urząd accept my US-notarised translation?", a: "Because a US notary is not a sworn translator under Polish law. The notary in the States only confirms the translator signed in front of them — they don't verify the translation itself. Polish urzędy, USC, and sądy only accept work from a translator on the MoJ register, stamped and entered in their repertorium. Doesn't matter how good the US translation is. We redo it from scratch." },
      { q: "I have a UK apostille on my English-language document. Do I still need a sworn translation?", a: "Depends on the urząd dzielnicy and what you're filing. For USC umiejscowienie, Ochota and Mokotów usually want a sworn Polish translation even with the apostille. Wola and Praga Południe sometimes wave it through. For ZUS or NFZ filings it's almost always required. Cheapest move is to call us with the document and target office and we check the same day." },
      { q: "How is the price calculated?", a: 'On the translated Polish text, not the foreign source. A standard page is 1,125 characters with spaces (an MoJ-defined unit, different from the British or American "page"). A US birth certificate ends up as roughly 1 to 1.5 Polish pages. A diploma with transcript runs 4 to 7. We quote a fixed number, not a range, once we see the scan.' },
      { q: "Can the same translator come to court for the hearing?", a: 'Yes. A tłumacz przysięgły is also authorised to interpret live as tłumacz na rozprawie. We book the same person for the document work and the hearing whenever the schedule allows. Continuity helps — they already know the terminology and the names. Court interpretation is billed hourly, not per page.' },
      { q: "Apostille first, or translate first?", a: "Apostille goes on the original document, issued by the source country. The sworn translator then translates the original together with the apostille and binds the translation to the apostilled original. If the receiving institution wants an apostille on the translation itself (rare but it happens), we add a second one at MSZ on Krucza after the translation is done." },
      { q: "What about digital sworn translations on mObywatel?", a: "There's a draft framework rolling out in 2026 that would put sworn translations into mObywatel as native digital documents. As of now no urząd in Warsaw accepts them. The closest live option is a QES-signed PDF — same legal weight as paper, accepted by ePUAP, e-Urząd Skarbowy, and most banks. We deliver that on request at no extra cost." },
      { q: "Italian or Spanish — how long does that take?", a: "Spanish, Italian, Portuguese, Dutch — fewer sworn translators in Warsaw means we plan a day or two ahead of the English baseline. A short certificate still lands in 2 to 3 working days. A multi-page contract in Spanish is closer to 4 to 5. Rush is doable but the surcharge sits at the top of the 50 to 100% band." }
    ],
    related: ['apostille', 'akty-stanu-cywilnego', 'pesel'],
    ctaTitle: 'Sworn translation, stamped and accepted',
    ctaSubtitle: 'Send a scan. We quote within the hour, hand it to one of about 15 MoJ-registered translators we work with, and deliver paper or QES-signed PDF in 1 to 3 working days.'
  },
  tr: {
    slug: 'tlumaczenia-przysiegle',
    group: 'documents',
    icon: 'scale',
    badge: 'TEPIS · Adalet Bakanlığı · 35+ dil',
    title: 'Yeminli tercüme',
    subtitle: 'Polonya urzędleri, mahkemeler ve bankalar için yeminli tercüme',
    lead: 'Tłumacze przysięgli (yeminli tercümanlar), Polonya Adalet Bakanlığı tarafından akredite edilmiş, urzęd, mahkeme, KRS, USC ve bankalar için resmi belge tercümesine yetkili tercümanlardır. Yeminli tercüme olmadan yabancı belgeleriniz - sıradan bir tercüman tarafından mükemmel tercüme edilmiş olsa dahi - kabul edilmez. 35\'ten fazla dilde çalışıyoruz: Türkçe, Ukraynaca, Rusça, Belarusça, İngilizce, Almanca, İspanyolca, Gürcüce, Ermenice, Arapça, İbranice ve daha fazlası.',
    facts: [
      { label: 'Süre', value: '1-3 gün', note: 'standart · acil 24 sa' },
      { label: 'Ücret', value: '~80 PLN', note: '1.125 karakter / Lehçeye veya Lehçeden' },
      { label: 'Diller', value: '35+', note: 'BDT, AB, Türkçe ve Asya dilleri' },
      { label: 'Kabul yerleri', value: 'Tüm urzędler', note: 'mahkemeler, bankalar, USC, ZUS, KRS' }
    ],
    grounds: {
      title: 'Hangi belgeleri tercüme ediyoruz',
      subtitle: 'Tam liste TEPIS sitesinde. Yabancılar için en sık talep edilenler:',
      items: [
        { title: 'USC nüfus belgeleri', desc: 'Doğum, evlilik, boşanma, ölüm belgeleri - umiejscowienie (tanıma), vatandaşlık, miras için. Sayfa başına 80 PLN.' },
        { title: 'Diplomalar ve sertifikalar', desc: 'Yüksek öğrenim diploması, lise diploması, mesleki sertifikalar - Polonya\'da denklik (nostryfikacja) için.' },
        { title: 'TRC / daimi ikamet belgeleri', desc: 'İş sözleşmeleri, gelir belgeleri, banka ekstreleri, kira sözleşmeleri - tüm yabancı dilli paketi anahtar teslim çeviriyoruz.' },
        { title: 'Sürücü belgesi', desc: 'Türkiye / BDT ehliyetinin Polonya\'ya çevrilmesi - iki yüzü de yeminli tercüme şartıdır. 80-120 PLN.' },
        { title: 'KRK / adli sicil belgeleri', desc: 'Menşe ülkenizden alınan adli sicil - karta pobytu, vatandaşlık, lisans başvuruları için.' },
        { title: 'Kurumsal belgeler', desc: 'KRS çıktıları, esas sözleşmeler, kurul tutanakları, bilançolar - şirket kuruluşu veya işlem için.' },
        { title: 'Mahkeme kararları', desc: 'Boşanma, nafaka, miras kararları - Polonya\'da icra veya tanıma için.' },
        { title: 'Sağlık belgeleri', desc: 'Hastalık öyküsü, reçete, aşı kartı, organ bağışı belgeleri - NFZ veya iş başvurusu için.' }
      ]
    },
    timeline: {
      title: 'Yeminli tercüme süreci',
      subtitle: 'Belgeyi teslim almaktan damgalı tercümeyi vermeye - 1-3 iş günü.',
      steps: [
        { title: 'Belgenin gönderilmesi', duration: '5 dk', desc: 'E-postaya tarama / fotoğraf / PDF gönderiyor veya orijinali bizzat getiriyorsunuz. Okunabilirlik şarttır - kaynak ne kadar net olursa tercüme o kadar isabetli olur.' },
        { title: 'Fiyatlandırma', duration: '15 dk', desc: 'Standart sayfa (Lehçe metinde boşluklarla 1.125 karakter) sayısını hesaplıyor, 1 saat içinde net teklif veriyoruz.' },
        { title: 'Sipariş onayı', duration: '5 dk', desc: 'Süreyi ve ücreti onaylıyor, %50 ön ödeme veya teslim sonrası ödeme yapıyorsunuz (sürekli müvekkillere).' },
        { title: 'Tercüme', duration: '1-3 gün', desc: 'Yeminli tercüman tercüme yapar, imza, mühür ve "tercüme orijinaline uygundur" formülüyle onaylar. Her sayfa numaralandırılır.' },
        { title: 'Tercümenin teslimi', duration: '15 dk', desc: 'Kağıt versiyon - ofiste veya kurye ile. Elektronik versiyon - ePUAP üzerinde nitelikli imzayla. Urzędler her iki formatı da kabul eder.' },
        { title: 'Apostille (opsiyonel)', duration: '3-5 gün', desc: 'Tercüme yurt dışında kullanılacaksa - Polonya orijinaline ve yeminli tercümeye birlikte MSZ apostille\'i basıyoruz.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Fiyat ve süre hesabı için asgari paket.',
      items: [
        'Belgenin yüksek çözünürlüklü taraması veya fotoğrafı (≥ 300 dpi)',
        'Belgenin orijinali - karşılaştırma veya yüz yüze teslim için',
        'Tüm mühür, kaşe ve imzalar okunabilir olmalı',
        'Özel adların doğru yazımı (adınız, soyadınız)',
        'Apostille veya legalizasyon (varsa - birlikte tercüme ediyoruz)',
        'Kullanım amacı (urząd, mahkeme, ZUS, USC) - format buna göre belirlenir',
        'Aciliyet - standart (1-3 gün) veya express (24 sa, +%50)',
        'Alıcı bilgileri (QES içeren elektronik versiyon gerekiyorsa)'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Standart Lehçe sayfa (boşluklarla 1.125 karakter) başına ücret.',
      items: [
        { label: 'Lehçeye / Lehçeden (Türkçe, Ukraynaca, Rusça)', value: '70 PLN\'den', note: 'Sayfa başına 1.125 karakter' },
        { label: 'Lehçeye / Lehçeden (İngilizce, Almanca)', value: '80 PLN\'den', note: 'Adalet Bakanlığı tarifesi' },
        { label: 'Nadir diller (Gürcüce, Ermenice)', value: '100 PLN\'den', note: 'Arapça, İbranice, Farsça dahil' },
        { label: 'Acil (24 saat)', value: '+%50', note: 'Çoğu dil için müsait' }
      ],
      note: 'Belirtilen ücretler sayfa başı temel tarifelerdir. Nihai ücret hacme (orijinale değil tercüme sonrası sayfaya), dile ve aciliyete göredir. Asgari sipariş 1 sayfadır. Tüzel kişi ve sürekli müvekkillere indirim uygulanır.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 25 listopada 2004 r. o zawodzie tłumacza przysięgłego (Yeminli Tercüman Mesleği Kanunu)',
        'Adalet Bakanlığı yeminli tercüman ücret yönetmeliği (standart tarifeler)',
        'Yeminli tercüman listesi - Adalet Bakanlığı (kamuya açık sicil)',
        '(AB) 2016/1191 Tüzüğü (AB içi legalizasyonun kaldırılması, tercüme şartlarını da basitleştirir)',
        'Kodeks postępowania administracyjnego - madde 5 (Lehçe dil zorunluluğu)'
      ]
    },
    faq: [
      { q: 'Yeminli tercüme ile sıradan tercümenin farkı nedir?', a: 'Yeminli tercüme hukuki bir bağlayıcılığa sahiptir - noter onayı seviyesindedir. Tłumacz przysięgły, devlet sınavından geçmiş ve Adalet Bakanlığı sicilinde kayıtlı uzmandır; tercümesi urzędler, mahkemeler, bankalar ve USC tarafından kabul edilir. Sıradan tercüman - mükemmel olsa dahi - bu statüye sahip değildir. Resmi belgeler için yalnızca yeminli tercüme geçerlidir.' },
      { q: 'Bir nüfus belgesinin tercümesi ne kadar?', a: 'Doğum/evlilik belgesi (1 sayfa) - 70-80 PLN. Diploma + transkript (3-5 sayfa) - 250-400 PLN. İş sözleşmesi (4-8 sayfa) - 320-650 PLN. Net fiyat 1 saat içinde verilir.' },
      { q: 'Tercümeyi elektronik olarak alabilir miyim?', a: 'Evet. 2018\'den beri yeminli tercüman QES (qualified electronic signature - nitelikli elektronik imza) ile tercümeyi onaylayabiliyor. Elektronik versiyon kağıt sürümle aynı hukuki bağlayıcılığa sahiptir. ePUAP / MOS v2.0 / e-Urząd Skarbowy üzerinden başvuruda ideal formattır.' },
      { q: 'Yeminli tercüme ne kadar geçerli?', a: 'Tercümenin kendisi süresizdir. Ancak altındaki belgenin süresi olabilir: KRK 6 ay, KRS çıktısı 3 ay. Taze orijinali aldıktan hemen sonra tercüme yaptırın - aksi halde belge başvurudan önce eskimiş olur.' },
      { q: 'Tercümeden önce apostille gerekli mi?', a: 'Amaca bağlı. Polonya\'da kullanım için apostille gerekmez (Türkiye dahil 1961 Lahey Sözleşmesi ülkeleri belgeleri için). Yurt dışı kullanım için apostille orijinale basılır, sonra orijinal ve apostille birlikte tercüme edilir. Bazı prosedürlerde iki apostille gerekir - biri orijinale, biri tercümeye. Hedef kuruma sorarak netleştiriyoruz.' },
      { q: 'Belge el yazısıyla yazılmış veya kötü okunuyorsa?', a: 'Yeminli tercüman, okunamayan yerlere "nieczytelne" (okunamıyor) ibaresi koyabilir veya tercümeyi reddedebilir. Bu da belgenin kabul şansını azaltır. İyi ışıkta ≥ 300 dpi tarama yapın.' },
      { q: 'Kendi yaptığım tercümeyi onaylatabilir miyim?', a: 'Hayır. Yeminli tercüman yalnızca kendi yaptığı veya kendi denetiminde yapılan tercümeyi onaylar. Bu kural katıdır - ihlali lisans iptaline yol açar. Hazır tercümeniz varsa "doğrulama" olarak alınır - ücret aynıdır.' }
    ],
    related: ['apostille', 'akty-stanu-cywilnego', 'pesel'],
    ctaTitle: 'Yeminli tercüme 1-3 günde',
    ctaSubtitle: 'Ücretsiz fiyatlandırma: belgenin taramasını gönderin - 1 saat içinde fiyat ve süre verelim. Teslim aldıktan damgalı tercümeyi vermeye 1-3 iş günü.'
  }
};

export default tlumaczeniaPrzysiegle;
