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
      { label: 'Срок выдачи', value: '1-3 дня', note: 'standardowo · srочно - 24 ч' },
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
    badge: 'TEPIS · MoJ · 35+ languages',
    title: 'Sworn translations',
    subtitle: 'Polish sworn translations for urzędy, courts and banks',
    lead: 'Tłumacze przysięgli are translators with state accreditation from the Polish Ministry of Justice, authorised to translate official documents for urzędy, courts, KRS, USC and banks. Without a sworn translation your foreign documents will be rejected - even if perfectly rendered by an ordinary translator. We work with 35+ languages: Ukrainian, Russian, Belarusian, English, German, Spanish, Georgian, Armenian, Arabic, Hebrew and more.',
    facts: [
      { label: 'Turnaround', value: '1-3 days', note: 'standard · rush - 24 h' },
      { label: 'Price', value: '~80 PLN', note: 'per 1,125-character page · to/from Polish' },
      { label: 'Languages', value: '35+', note: 'all CIS + EU + Asian' },
      { label: 'Accepted by', value: 'All urzędy', note: 'courts, banks, USC, ZUS, KRS' }
    ],
    grounds: {
      title: 'What we translate',
      subtitle: 'Full list on the TEPIS site. Most common for foreigners:',
      items: [
        { title: 'USC certificates', desc: 'Birth, marriage, divorce, death - for recognition, citizenship, inheritance. 80 PLN/page.' },
        { title: 'Diplomas and certificates', desc: 'University degrees, school certificates, professional certificates - for nostrification.' },
        { title: 'TRC/PR documents', desc: 'Work contracts, income certificates, bank statements, leases - full-pack handling.' },
        { title: 'Driving licences', desc: 'CIS-to-Polish exchange - both sides translated. 80-120 PLN.' },
        { title: 'KRK / criminal records', desc: 'From your country of origin - for residence, citizenship, licences.' },
        { title: 'Corporate documents', desc: 'KRS extracts, statutes, board minutes, balances - for company registration or transactions.' },
        { title: 'Court rulings', desc: 'Divorce, alimony, inheritance - for enforcement in Poland or recognition.' },
        { title: 'Medical documents', desc: 'Case histories, prescriptions, vaccinations - for NFZ or work.' }
      ]
    },
    timeline: {
      title: 'How sworn translation works',
      subtitle: 'From document hand-off to finished translation with stamp - 1-3 working days.',
      steps: [
        { title: 'Document submission', duration: '5 min', desc: 'Email scan/photo/PDF or hand over original. Legibility is critical.' },
        { title: 'Quote', duration: '15 min', desc: 'We count standard pages (1,125 chars with spaces, in Polish). Exact quote within an hour.' },
        { title: 'Engagement', duration: '5 min', desc: '50% advance or post-pay for repeat clients.' },
        { title: 'Translation', duration: '1-3 days', desc: 'Sworn translator translates, signs, stamps and certifies. Pages numbered.' },
        { title: 'Delivery', duration: '15 min', desc: 'Paper - pickup or courier. Electronic - QES via ePUAP.' },
        { title: 'Apostille (optional)', duration: '3-5 days', desc: 'MSZ apostille on original and translation together.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Minimum for quoting.',
      items: [
        'High-resolution scan or photo (≥ 300 dpi)',
        'Original - for verification',
        'All stamps and signatures legible',
        'Proper-noun transliteration list (your name)',
        'Apostille (if affixed - translated together)',
        'Purpose (urząd, court, ZUS, USC) - affects format',
        'Urgency - standard (1-3 days) or rush (24 h, +50%)',
        'Recipient details (for QES electronic version)'
      ]
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Per standard Polish page (1,125 chars including spaces, post-translation).',
      items: [
        { label: 'To/from Polish (UA, RU)', value: 'from 70 PLN', note: 'Per 1,125-char page' },
        { label: 'To/from English, German', value: 'from 80 PLN', note: 'MoJ rate' },
        { label: 'Rare languages (KA, AM, AR)', value: 'from 100 PLN', note: 'Hebrew, Farsi included' },
        { label: 'Rush (24 hours)', value: '+50%', note: 'Available for most languages' }
      ],
      note: 'Base rates per page. Final price depends on volume (post-translation), language, urgency. Minimum - 1 page. Discounts for corporates.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Sworn Translator Profession Act of 25 November 2004',
        'MoJ Regulation on sworn-translator remuneration',
        'Sworn Translator List - MoJ (public register)',
        'Regulation (EU) 2016/1191',
        'Code of Administrative Procedure (Art. 5 - Polish language)'
      ]
    },
    faq: [
      { q: 'Sworn vs. ordinary translation?', a: 'A sworn translation has legal force - comparable to notarised. The translator is in the MoJ register, accepted by urzędy, courts, banks. Ordinary translators - even excellent ones - lack that status. Official documents need sworn.' },
      { q: 'Price per certificate?', a: 'Birth/marriage certificate (1 page) - 70-80 PLN. Diploma + transcript - 250-400 PLN. 4-8-page work contract - 320-650 PLN. Exact quote within an hour.' },
      { q: 'Electronic version?', a: 'Yes, since 2018 - sworn translators can sign with QES. Same legal force. Ideal for ePUAP / MOS v2.0 / e-Urząd Skarbowy.' },
      { q: 'Translation validity?', a: 'Indefinite. But documents have their own validity: KRK - 6 months, KRS - 3 months. Translate right after a fresh original.' },
      { q: 'Apostille before translation?', a: "In Poland - no apostille needed (Hague countries). Abroad - apostille on the original first, then translate them together. Sometimes two apostilles. We confirm with the receiving institution." },
      { q: 'Handwritten or illegible documents?', a: 'A sworn translator may decline or mark "nieczytelne" - which weakens acceptance. Use ≥ 300 dpi scans in good light.' },
      { q: 'Self-translated text?', a: 'No - sworn translators only certify their own work. Your translation can be a "verification" baseline - same price.' }
    ],
    related: ['apostille', 'akty-stanu-cywilnego', 'pesel'],
    ctaTitle: 'Sworn translation in 1-3 days',
    ctaSubtitle: 'Free quote: send a scan and get a price within an hour. From hand-off to stamped translation - 1-3 working days.'
  }
};

export default tlumaczeniaPrzysiegle;
