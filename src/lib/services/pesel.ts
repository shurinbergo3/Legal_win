import type { ServiceEntry } from './types';

const pesel: ServiceEntry = {
  ru: {
    slug: 'pesel',
    group: 'documents',
    icon: 'id-card',
    badge: '11 цифр · ZUS · US · ePUAP',
    title: 'PESEL для иностранца',
    subtitle: 'Идентификационный номер в Польше - основа для ZUS, банка и ePUAP',
    lead: 'PESEL - это 11-значный идентификационный номер, без которого в Польше невозможно подписать договор аренды, открыть счёт в банке, обратиться к врачу через NFZ, оформить ePUAP или подать налоговую декларацию. С 2022 года иностранец получает PESEL по конкретной цели - например, для трудоустройства (cel: zatrudnienie), учёбы или ведения бизнеса. Оформляем заявление, привязываем к ePUAP и подключаем mObywatel.',
    facts: [
      { label: 'Срок выдачи', value: '1 день', note: 'при подаче в urząd gminy' },
      { label: 'Госпошлина', value: '0 PLN', note: 'выдача бесплатна' },
      { label: 'Привязка', value: 'ePUAP + mObywatel', note: 'электронная подпись и e-госуслуги' },
      { label: 'Действует', value: 'бессрочно', note: 'один номер на всю жизнь' }
    ],
    grounds: {
      title: 'Когда нужен PESEL',
      subtitle: 'Цель указывается в заявлении и определяет, какие документы потребует urząd gminy.',
      items: [
        { title: 'Cel: zatrudnienie (трудоустройство)', desc: 'Без PESEL работодатель не может подать вас в ZUS, выплатить зарплату на счёт и удержать налог. Оформляем по umowie o pracę или zlecenie.' },
        { title: 'Cel: prowadzenie działalności (бизнес)', desc: 'Обязателен для регистрации Sp. z o.o. в KRS, JDG в CEIDG, открытия фирменного счёта и постановки на VAT.' },
        { title: 'Cel: nauka (учёба)', desc: 'Для зачисления в школу, ВУЗ, оформления legitymacji studenckiej и стипендии.' },
        { title: 'Cel: świadczenia społeczne', desc: 'Для получения 800+, becikowego, пособий ZUS, NFZ-карты, рецептов на eRecepta.' },
        { title: 'Cel: rozliczenie podatku', desc: 'PIT и VAT-декларации, регистрация в Urzędzie Skarbowym, доступ в e-Urząd Skarbowy и Twój e-PIT.' },
        { title: 'Cel: ochrona czasowa (UKR)', desc: 'Граждане Украины с UKR-статусом получают PESEL автоматически - оформляем через wniosek na PESEL UKR.' },
        { title: 'Cel: nabycie nieruchomości', desc: 'Покупка квартиры, регистрация в KW (księga wieczysta), оплата налога PCC-3.' },
        { title: 'Inne cele', desc: 'Брак в USC, регистрация автомобиля, водительские права, получение medkartu, обмен прав СНГ на польские.' }
      ]
    },
    timeline: {
      title: 'Как мы оформляем PESEL под ключ',
      subtitle: 'От первого звонка до выписки z PESEL и привязанного ePUAP - обычно 1-3 рабочих дня.',
      steps: [
        { title: 'Консультация', duration: '20 мин', desc: 'Уточняем цель оформления, проверяем основания, составляем минимальный пакет документов под вашу ситуацию.' },
        { title: 'Подготовка wniosku', duration: '1 день', desc: 'Заполняем wniosek o nadanie numeru PESEL (форма zgodnie z rozporządzeniem MSWiA), переводим ваши документы на польский присяжно, если нужно.' },
        { title: 'Подача в urząd gminy', duration: '1 визит', desc: 'Сопровождаем в urząd gminy / dzielnicy по адресу проживания. Подача - лично, заявление подписывается при кассире. Для UKR - без визита через mObywatel.' },
        { title: 'Получение PESEL', duration: '1 день', desc: 'Номер выдаётся в день подачи или на следующий рабочий день (zaświadczenie o nadaniu PESEL - бесплатно).' },
        { title: 'Привязка к ePUAP', duration: '30 мин', desc: 'Создаём profil zaufany в ePUAP - государственная электронная подпись для подачи документов в любые учреждения без визитов.' },
        { title: 'Подключение mObywatel', duration: '15 мин', desc: 'Устанавливаем приложение mObywatel - цифровой паспорт, mPrawo Jazdy, mLegitymacja, рецепты eRecepta.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Минимальный пакет. Точный список зависит от цели оформления.',
      items: [
        'Загранпаспорт (оригинал + копии всех заполненных страниц)',
        'Документ о легальном пребывании: виза, штамп, karta pobytu, ruchu bezwizowego',
        'Подтверждение цели: umowa o pracę, KRS Sp. z o.o., zaświadczenie z uczelni и т.д.',
        'Подтверждение адреса в Польше: договор аренды, zameldowanie или письмо собственника',
        'Свидетельство о рождении с присяжным переводом на польский',
        'Свидетельство о браке (если меняли фамилию) с присяжным переводом',
        'Заполненный wniosek o nadanie numeru PESEL - готовим мы',
        'Для детей: оба родителя в urząd с паспортом и согласием второго родителя'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированная цена за услугу. Госпошлину urząd не берёт - PESEL выдаётся бесплатно.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '20 минут · уточнение цели' },
        { label: 'PESEL под ключ', value: 'от 450 PLN', note: 'Wniosek, перевод, сопровождение в urząd' },
        { label: 'PESEL + ePUAP + mObywatel', value: 'от 600 PLN', note: 'Полная электронная инфраструктура' },
        { label: 'PESEL для семьи (3+)', value: 'от 1 200 PLN', note: 'Скидка при подаче на всю семью одновременно' }
      ],
      note: 'Указаны гонорары LegalWin. Присяжный перевод свидетельств - отдельно (~80 PLN/документ).'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 24 września 2010 r. o ewidencji ludności',
        'Rozporządzenie MSWiA z dnia 21 stycznia 2022 r. w sprawie wniosku o nadanie numeru PESEL',
        'Ustawa z dnia 12 marca 2022 r. o pomocy obywatelom Ukrainy (PESEL UKR)',
        'Rozporządzenie Rady Ministrów w sprawie sposobu nadawania numeru PESEL',
        'Ustawa z dnia 17 lutego 2005 r. o informatyzacji działalności podmiotów realizujących zadania publiczne (ePUAP)'
      ]
    },
    faq: [
      { q: 'Можно ли получить PESEL без karta pobytu?', a: 'Да. С 2022 года PESEL оформляется по конкретной цели - на основании umowy o pracę (трудового договора), регистрации фирмы, учёбы или покупки недвижимости. Karta pobytu (карта пребывания) не обязательна. Достаточно легального пребывания (виза, безвиз, штамп о подаче на ВНЖ).' },
      { q: 'Сколько ждать получения номера?', a: 'При подаче с полным пакетом - в день обращения. В крупных воеводствах (Warszawa, Wrocław, Kraków) иногда до 3 рабочих дней при большой загрузке. Для UKR-статуса - оформление через mObywatel (мобильное приложение «Гражданин») занимает 1 день без визита.' },
      { q: 'PESEL даёт право работать?', a: 'Нет. PESEL - это идентификационный номер, не разрешение на работу. Для трудоустройства иностранцу нужно zezwolenie na pracę (разрешение на работу) или TRC с правом на работу. PESEL - необходимое, но не достаточное условие.' },
      { q: 'Что такое ePUAP и зачем он нужен?', a: 'ePUAP (государственная электронная платформа) - государственная платформа электронной подписи. С profil zaufany (доверенным профилем) можно подать заявления в ZUS, US, KRS, urząd gminy (городское управление), суды без личных визитов. Обязателен для подачи TRC с 2026 (MOS v2.0) и для большинства e-госуслуг.' },
      { q: 'Можно ли изменить PESEL?', a: 'Только в исключительных случаях: смена пола, ошибка в дате рождения, защита свидетеля. По заявлению через MSWiA (МВД). Обычно - никогда.' },
      { q: 'Что делать, если потерял zaświadczenie o PESEL?', a: 'Само zaświadczenie (справка) не нужно - PESEL запрашивается из реестра PESEL по запросу любого учреждения. Дубликат можно бесплатно получить в любом urząd gminy (городском управлении) в течение 1 дня.' },
      { q: 'Получу ли PESEL детям иностранцев?', a: 'Да. На детей до 18 лет PESEL оформляется родителем - нужно свидетельство о рождении (присяжный перевод), паспорта родителей, документы о пребывании ребёнка в Польше. Делаем одновременно со взрослым PESEL - экономия времени и сборов.' }
    ],
    related: ['meldunek', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Получим PESEL за 1 день',
    ctaSubtitle: 'Бесплатная консультация: уточним цель оформления, соберём пакет документов и запишем в urząd. От первого звонка до zaświadczenia z PESEL - обычно 1-3 рабочих дня.'
  },
  pl: {
    slug: 'pesel',
    group: 'documents',
    icon: 'id-card',
    badge: '11 cyfr · ZUS · US · ePUAP',
    title: 'PESEL dla cudzoziemca',
    subtitle: 'Powszechny Elektroniczny System Ewidencji Ludności',
    lead: 'PESEL to 11-cyfrowy numer identyfikacyjny, bez którego w Polsce nie da się podpisać umowy najmu, otworzyć konta bankowego, skorzystać z NFZ, założyć ePUAP czy złożyć deklaracji podatkowej. Od 2022 r. cudzoziemiec otrzymuje PESEL „w celu" - zatrudnienia, nauki, działalności gospodarczej. Składamy wniosek, podpinamy ePUAP i mObywatel.',
    facts: [
      { label: 'Termin', value: '1 dzień', note: 'po złożeniu w urzędzie gminy' },
      { label: 'Opłata', value: '0 PLN', note: 'nadanie bezpłatne' },
      { label: 'Powiązanie', value: 'ePUAP + mObywatel', note: 'podpis elektroniczny i e-usługi' },
      { label: 'Ważność', value: 'bezterminowo', note: 'jeden numer na całe życie' }
    ],
    grounds: {
      title: 'Kiedy potrzebujesz PESEL',
      subtitle: 'Cel wskazujesz we wniosku - od niego zależy zakres dokumentów wymaganych przez urząd gminy.',
      items: [
        { title: 'Cel: zatrudnienie', desc: 'Bez PESEL pracodawca nie zgłosi Cię do ZUS, nie wypłaci wynagrodzenia i nie potrąci podatku. Składamy wraz z umową o pracę lub zlecenie.' },
        { title: 'Cel: prowadzenie działalności', desc: 'Konieczny do rejestracji Sp. z o.o. w KRS, JDG w CEIDG, otwarcia konta firmowego i rejestracji VAT.' },
        { title: 'Cel: nauka', desc: 'Do zapisu do szkoły, na uczelnię, wyrobienia legitymacji studenckiej i stypendium.' },
        { title: 'Cel: świadczenia społeczne', desc: 'Świadczenia 800+, becikowe, świadczenia ZUS, karta NFZ, eRecepta.' },
        { title: 'Cel: rozliczenie podatku', desc: 'Deklaracje PIT/VAT, rejestracja w US, dostęp do e-Urzędu Skarbowego i Twojego e-PIT.' },
        { title: 'Cel: ochrona czasowa (UKR)', desc: 'Obywatele Ukrainy ze statusem UKR - wniosek przez mObywatel, bez wizyty.' },
        { title: 'Cel: nabycie nieruchomości', desc: 'Zakup mieszkania, wpis do KW, opłata PCC-3.' },
        { title: 'Inne cele', desc: 'Ślub w USC, rejestracja auta, prawo jazdy, wymiana zagranicznych praw, opieka medyczna.' }
      ]
    },
    timeline: {
      title: 'Jak prowadzimy sprawę pod klucz',
      subtitle: 'Od pierwszego telefonu do zaświadczenia o PESEL i podpiętego ePUAP - zwykle 1-3 dni robocze.',
      steps: [
        { title: 'Konsultacja', duration: '20 min', desc: 'Ustalamy cel, weryfikujemy podstawy, przygotowujemy minimalny pakiet dokumentów.' },
        { title: 'Wniosek', duration: '1 dzień', desc: 'Wypełniamy wniosek o nadanie numeru PESEL, organizujemy tłumaczenia przysięgłe Twoich dokumentów.' },
        { title: 'Złożenie w urzędzie gminy', duration: '1 wizyta', desc: 'Towarzyszymy w urzędzie. Podpisanie wniosku - przy kasie urzędu. Dla UKR - bez wizyty, przez mObywatel.' },
        { title: 'Odbiór PESEL', duration: '1 dzień', desc: 'Numer wydawany od ręki lub następnego dnia roboczego (zaświadczenie bezpłatne).' },
        { title: 'Podpięcie ePUAP', duration: '30 min', desc: 'Zakładamy profil zaufany - państwowy podpis elektroniczny dla wszystkich e-usług.' },
        { title: 'mObywatel', duration: '15 min', desc: 'Instalujemy aplikację: cyfrowy paszport, mPrawoJazdy, mLegitymacja, eRecepta.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Pakiet bazowy. Dokładny zestaw zależy od celu.',
      items: [
        'Paszport (oryginał + kopie zapisanych stron)',
        'Dokument legalnego pobytu: wiza, stempel, karta pobytu, ruch bezwizowy',
        'Potwierdzenie celu: umowa o pracę, KRS, zaświadczenie z uczelni itd.',
        'Potwierdzenie adresu w Polsce: umowa najmu, zameldowanie, oświadczenie właściciela',
        'Akt urodzenia z tłumaczeniem przysięgłym',
        'Akt małżeństwa (jeśli zmiana nazwiska) z tłumaczeniem',
        'Wypełniony wniosek - przygotowujemy my',
        'Dla dzieci: oboje rodzice w urzędzie z paszportami i zgodą'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Stała cena. Urząd nie pobiera opłaty - PESEL nadawany jest bezpłatnie.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '20 minut · ustalenie celu' },
        { label: 'PESEL pod klucz', value: 'od 450 PLN', note: 'Wniosek, tłumaczenia, urząd' },
        { label: 'PESEL + ePUAP + mObywatel', value: 'od 600 PLN', note: 'Pełna infrastruktura cyfrowa' },
        { label: 'PESEL dla rodziny (3+)', value: 'od 1 200 PLN', note: 'Rabat przy zgłoszeniu rodziny' }
      ],
      note: 'Powyżej honoraria LegalWin. Tłumaczenia przysięgłe - osobno (~80 PLN/dokument).'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 24 września 2010 r. o ewidencji ludności',
        'Rozporządzenie MSWiA z 21 stycznia 2022 r. ws. wniosku o nadanie numeru PESEL',
        'Ustawa z 12 marca 2022 r. o pomocy obywatelom Ukrainy (PESEL UKR)',
        'Rozporządzenie Rady Ministrów ws. sposobu nadawania numeru PESEL',
        'Ustawa z dnia 17 lutego 2005 r. o informatyzacji (ePUAP)'
      ]
    },
    faq: [
      { q: 'Czy można uzyskać PESEL bez karty pobytu?', a: 'Tak. Od 2022 PESEL nadaje się „w celu" - na podstawie umowy o pracę, rejestracji firmy, nauki czy zakupu nieruchomości. Karta pobytu nie jest konieczna. Wystarczy legalny pobyt.' },
      { q: 'Ile się czeka na numer?', a: 'Z kompletem dokumentów - w dniu złożenia. W dużych miastach czasem do 3 dni roboczych przy obciążeniu urzędu. Dla statusu UKR - 1 dzień przez mObywatel.' },
      { q: 'Czy PESEL daje prawo do pracy?', a: 'Nie. PESEL to numer identyfikacyjny, nie zezwolenie. Do pracy potrzebne jest zezwolenie na pracę lub karta pobytu z prawem do pracy.' },
      { q: 'Czym jest ePUAP?', a: 'Państwowa platforma podpisu elektronicznego. Profil zaufany pozwala składać wnioski do ZUS, US, KRS i innych urzędów bez wizyt. Obowiązkowy do MOS v2.0 (TRC) od 2026.' },
      { q: 'Czy można zmienić PESEL?', a: 'Tylko w wyjątkowych przypadkach: zmiana płci, błąd w dacie urodzenia, ochrona świadka. Wniosek przez MSWiA.' },
      { q: 'Co jeśli zgubię zaświadczenie?', a: 'Samo zaświadczenie nie jest potrzebne - PESEL pobierany jest z rejestru przez urzędy. Duplikat - bezpłatnie w urzędzie gminy w 1 dzień.' },
      { q: 'PESEL dla dzieci?', a: 'Tak - wnioskuje rodzic. Akt urodzenia (tłumaczenie przysięgłe), paszporty rodziców, dokumenty pobytu dziecka. Robimy razem z PESEL dorosłego.' }
    ],
    related: ['meldunek', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Załatwimy PESEL w 1 dzień',
    ctaSubtitle: 'Bezpłatna konsultacja: ustalimy cel, zbierzemy dokumenty i umówimy w urzędzie. Od pierwszego telefonu do zaświadczenia - zwykle 1-3 dni robocze.'
  },
  en: {
    slug: 'pesel',
    group: 'documents',
    icon: 'id-card',
    badge: '11 digits · ZUS · US · ePUAP',
    title: 'PESEL for foreigners',
    subtitle: "Poland's national ID number, your key to bank, NFZ, ZUS and every e-service",
    lead: "PESEL is the 11-digit number Poland assigns to every resident. Think UK National Insurance number or US Social Security Number, except this one does more, it encodes your birthdate and gender right inside the digits. Without it you can't open a real bank account, register with NFZ, file PIT, set up profil zaufany, or rent a Bolt scooter for the afternoon. Since 2022 a foreigner gets PESEL with a stated cel: employment, study, business, property purchase. We draft the wniosek, walk you through the urząd dzielnicy filing, and tie the number to ePUAP and mObywatel so you can stop queuing for clerks.",
    facts: [
      { label: 'Issuance', value: '1 day', note: 'same-day at urząd dzielnicy when paperwork is clean' },
      { label: 'State fee', value: '0 PLN', note: 'the number itself is free' },
      { label: 'Deadline', value: '30 days', note: 'same window as meldunek for stays over 30 days' },
      { label: 'Validity', value: 'lifetime', note: 'one number, never reassigned, almost never changed' }
    ],
    grounds: {
      title: 'What PESEL actually unlocks',
      subtitle: "You can survive a week or two in Poland without it. Past that, every state and bank workflow asks for the 11 digits.",
      items: [
        { title: 'Bank account upgrade', desc: "Santander, mBank, ING and Pekao open a basic passport-based account in 30 minutes, then push you to come back with PESEL. With the number they switch you to the full residential account, online banking included, no foreign-correspondent fees on PLN transfers." },
        { title: 'profil zaufany and TRC under MOS v2.0', desc: 'profil zaufany, the state digital signature, requires PESEL. From 2026 you cannot file a TRC application through MOS v2.0 without it. No PESEL, no TRC. Full stop.' },
        { title: 'NFZ healthcare and eRecepta', desc: "Your ZUS contributions buy NFZ coverage, but the clinic looks you up by PESEL. Prescriptions go to the eRecepta app keyed to your number. Specialists won't even open a chart without it." },
        { title: 'Tax filing and ZUS', desc: 'PIT-37, PIT-36, VAT-7, JPK_V7M, the Twój e-PIT pre-filled return, e-Urząd Skarbowy login. All keyed to PESEL. Same for ZUS contributions if you run JDG or get hired on umowa o pracę.' },
        { title: 'mObywatel app', desc: 'Digital ID card, mPrawoJazdy, mLegitymacja, eRecepta, vehicle data, and 800+ family benefit, all in one government app. Login is your PESEL plus profil zaufany.' },
        { title: 'eDoręczenia, the official mail channel', desc: "From 2025 most state correspondence moves to eDoręczenia, Poland's e-delivery system. Your inbox is provisioned against your PESEL. Miss the registration, miss a tax notice." },
        { title: 'Scooters, kids, marriage, cars', desc: "Bolt and Lime want a PESEL for scooter rentals over a certain power class. USC needs it for marriage. Wydział komunikacji needs it for vehicle registration. Schools allocate first-grade spots by it." },
        { title: 'FATCA reporting for US citizens', desc: "PESEL doesn't replace your SSN, but Polish brokerages and banks running FATCA checks will ask for both. Without PESEL, the Polish side of the form stays blank and accounts stall in compliance review." }
      ]
    },
    timeline: {
      title: 'How we run it',
      subtitle: 'First call to PESEL certificate in PESEL register, typically 1 to 3 working days.',
      steps: [
        { title: 'Free 20-min call', duration: '20 min', desc: 'We pick the cel that fits your situation, check whether you already have meldunek, and flag any document gaps that would trigger a refusal.' },
        { title: 'Wniosek prepared', duration: '1 day', desc: 'We fill the cudzoziemiec PESEL form per the 2022 MSWiA regulation and line up sworn translations of your birth and (if relevant) marriage certificate.' },
        { title: 'Meldunek first, if needed', duration: '1 day', desc: "Urząd will refuse PESEL without an address logged in the register. Classic Catch-22 for new arrivals. We file meldunek in parallel so both go in on the same visit." },
        { title: 'Filing at urząd dzielnicy', duration: '1 visit', desc: "In person, passport in hand. You sign the form at the clerk's desk. For UKR status, no visit, the application moves through mObywatel." },
        { title: 'PESEL issued', duration: 'same day', desc: 'Clean files come back same day, zaświadczenie o nadaniu PESEL printed free of charge. Busy urzęds in Warsaw and Wrocław sometimes push to the next working day.' },
        { title: 'profil zaufany + mObywatel', duration: '45 min', desc: 'We set up profil zaufany through your bank (mBank or Santander is fastest) and install mObywatel so your digital ID is ready before you leave the office.' }
      ]
    },
    documents: {
      title: 'What we need from you',
      subtitle: 'Base set. Exact list shifts with the cel you pick.',
      items: [
        'Passport, original plus a clean photocopy of every used page',
        'Proof of legal stay: D-visa, TRC card, visa-free entry stamp, or the in-progress TRC submission receipt',
        "Proof of cel: umowa o pracę, KRS extract for the Sp. z o.o., uczelnia enrolment letter, notarial deed for property",
        'Address proof in Poland: tenancy plus owner ID, or zameldowanie if already registered',
        'Birth certificate with sworn translation into Polish (every cel asks for this, no exceptions)',
        'Marriage certificate with sworn translation if your current surname differs from the birth one',
        'Completed wniosek that we draft from the call, you only sign at the desk',
        'For children: both parents at urząd with passports, or a notarised consent from the absent parent'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Urząd charges nothing. Our work is the only billable line.',
      items: [
        { label: 'Consultation', value: 'Free', note: '20 minutes · cel review · go or no-go' },
        { label: 'Turnkey PESEL', value: 'from 450 PLN', note: 'Wniosek, sworn translations brokered, urząd visit with you' },
        { label: 'PESEL + profil zaufany + mObywatel', value: 'from 600 PLN', note: 'Full digital stack live the same week' },
        { label: 'Family PESEL, 3+ people', value: 'from 1,200 PLN', note: 'Joint filing for spouse and children, single visit' }
      ],
      note: 'LegalWin fees only. Sworn translations run around 80 PLN per document and go straight to the translator.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Ustawa o ewidencji ludności of 24 September 2010',
        'MSWiA regulation of 21 January 2022 on the PESEL application form',
        'Ustawa of 12 March 2022 on aid to Ukrainian citizens (the PESEL UKR track)',
        'Council of Ministers regulation on PESEL assignment procedure',
        'Ustawa o informatyzacji of 17 February 2005 (ePUAP and profil zaufany)'
      ]
    },
    faq: [
      { q: 'Do I need a karta pobytu first?', a: 'No. Since the 2022 reform PESEL is granted on a stated cel, not on TRC status. A work contract, KRS extract, uczelnia letter, or notarial deed is enough, paired with any valid stay basis: D-visa, visa-free stamp, or the receipt for a pending TRC.' },
      { q: "Urząd refused because I have no meldunek. What now?", a: "Classic Catch-22. The clerk wants an address in the register before they assign a PESEL, but most landlords drag their feet on meldunek. We solve it by filing both on the same visit, with a notarised owner authorisation if the landlord won't come along. Around 150 PLN at any notariusz." },
      { q: 'How fast is fast?', a: "Same-day in Gdańsk, Łódź or Poznań when files are clean. Warsaw and Wrocław run 1 to 3 working days during peak loads, usually September and January. UKR status moves entirely through mObywatel, 24 hours start to finish, no visit." },
      { q: 'Does PESEL let me work?', a: "No. PESEL is identification, not authorisation. To work you also need a zezwolenie na pracę, an oświadczenie o powierzeniu pracy, or a TRC with work rights baked in. PESEL is necessary but never sufficient on its own." },
      { q: 'Why does my bank suddenly want PESEL?', a: "Polish banks open a passport-only account as a stopgap. Around day 30 their KYC system flags it and asks you to come back with PESEL. Once you do, they convert the account to a full residential one, enable BLIK, open online banking, and drop the foreign-correspondent fees on PLN transfers." },
      { q: "I'm a US citizen. Does PESEL replace my SSN?", a: "No. The two coexist. You keep your SSN for IRS filing. The Polish side, FATCA forms at brokerages like XTB or Bossa, asks for PESEL. Without it the form is incomplete and the account sits in compliance review until you fix it." },
      { q: 'Can PESEL be changed?', a: 'Almost never. Three legal grounds: gender reassignment, a confirmed date-of-birth error in the register, witness protection. Application through MSWiA, takes months. Plan as if the number is permanent.' }
    ],
    related: ['meldunek', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'PESEL sorted in a day',
    ctaSubtitle: 'Free 20-min consultation. We pick the cel, line up meldunek if you need it, file at urząd dzielnicy, and link profil zaufany and mObywatel before you head home. Typical turnaround is 1 to 3 working days.'
  },
  tr: {
    slug: 'pesel',
    group: 'documents',
    icon: 'id-card',
    badge: '11 hane · ZUS · US · ePUAP',
    title: 'Yabancılar için PESEL',
    subtitle: 'Polonya\'da kişisel kimlik numarası - ZUS, banka ve ePUAP\'ın temeli',
    lead: 'PESEL (Powszechny Elektroniczny System Ewidencji Ludności - kişisel kimlik numarası), Polonya\'da kira sözleşmesi imzalamak, banka hesabı açmak, NFZ üzerinden doktora gitmek, ePUAP açmak veya vergi beyannamesi vermek için zorunlu olan 11 haneli bir numaradır. 2022\'den itibaren yabancı bu numarayı belirli bir amaç (cel) için alır - örneğin istihdam (cel: zatrudnienie), öğrenim veya işletme. Başvuruyu hazırlar, ePUAP\'a bağlar ve mObywatel\'i etkinleştiriyoruz.',
    facts: [
      { label: 'Verilme süresi', value: '1 gün', note: 'urząd gminy\'de başvuruda' },
      { label: 'Resmi harç', value: '0 PLN', note: 'verilmesi ücretsizdir' },
      { label: 'Bağlantı', value: 'ePUAP + mObywatel', note: 'elektronik imza ve e-devlet' },
      { label: 'Geçerlilik', value: 'süresiz', note: 'ömür boyu tek numara' }
    ],
    grounds: {
      title: 'PESEL ne zaman gerekir',
      subtitle: 'Amaç başvuruda belirtilir ve urząd gminy\'nin (belediye) hangi belgeleri isteyeceğini belirler.',
      items: [
        { title: 'Cel: zatrudnienie (istihdam)', desc: 'PESEL olmadan işveren sizi ZUS\'a tescil edemez, maaşı banka hesabına yatıramaz ve gelir vergisi kesemez. Umowa o pracę veya zlecenie ile birlikte hazırlıyoruz.' },
        { title: 'Cel: prowadzenie działalności (işletme)', desc: 'KRS\'ye Sp. z o.o., CEIDG\'ye JDG kaydı, şirket banka hesabı açılışı ve VAT tescili için zorunludur.' },
        { title: 'Cel: nauka (öğrenim)', desc: 'Okula ve üniversiteye kayıt, legitymacja studencka (öğrenci kimliği) düzenleme ve burs için.' },
        { title: 'Cel: świadczenia społeczne (sosyal yardım)', desc: '800+, becikowe (yenidoğan ödeneği), ZUS yardımları, NFZ kartı ve eRecepta (elektronik reçete) için.' },
        { title: 'Cel: rozliczenie podatku (vergi beyanı)', desc: 'PIT ve VAT beyannameleri, Urząd Skarbowy\'ye (vergi dairesi) kayıt, e-Urząd Skarbowy ve Twój e-PIT erişimi için.' },
        { title: 'Cel: ochrona czasowa (UKR - geçici koruma)', desc: 'UKR statüsündeki Ukrayna vatandaşları PESEL\'i otomatik alır - PESEL UKR başvurusunu hazırlıyoruz.' },
        { title: 'Cel: nabycie nieruchomości (gayrimenkul edinimi)', desc: 'Daire alımı, KW (księga wieczysta - tapu sicili) tescili, PCC-3 vergisinin ödenmesi.' },
        { title: 'Inne cele (diğer amaçlar)', desc: 'USC\'de evlilik, araç tescili, ehliyet, BDT ve Türkiye ehliyetinin Polonya ehliyetine çevrilmesi, sağlık kartı.' }
      ]
    },
    timeline: {
      title: 'Anahtar teslim PESEL süreci',
      subtitle: 'İlk görüşmeden PESEL belgesine ve bağlı ePUAP\'a kadar - genelde 1-3 iş günü.',
      steps: [
        { title: 'Danışmanlık', duration: '20 dk', desc: 'Amacınızı netleştirir, gerekçeleri kontrol eder, durumunuza özel asgari belge listesini çıkartırız.' },
        { title: 'Wniosku hazırlığı', duration: '1 gün', desc: 'Wniosek o nadanie numeru PESEL\'i (MSWiA - İçişleri Bakanlığı yönetmeliğine uygun başvuru formu) doldurur, gerekiyorsa belgelerinizi yeminli olarak Lehçeye çevirtiriz.' },
        { title: 'Urząd gminy\'ye başvuru', duration: '1 ziyaret', desc: 'İkamet adresinize bağlı urząd gminy / dzielnicy\'ye sizinle birlikte gideriz. Başvuru bizzat yapılır, formu vezne önünde imzalarsınız. UKR statüsünde ziyaretsiz, mObywatel üzerinden hallederiz.' },
        { title: 'PESEL\'in alınması', duration: '1 gün', desc: 'Numara aynı gün veya bir sonraki iş günü verilir (zaświadczenie o nadaniu PESEL - PESEL belgesi ücretsizdir).' },
        { title: 'ePUAP\'a bağlama', duration: '30 dk', desc: 'ePUAP\'ta profil zaufany (e-devlet kimliği) açarız - resmi dairelere ziyaretsiz başvuru yapmanızı sağlayan devlet elektronik imzasıdır.' },
        { title: 'mObywatel kurulumu', duration: '15 dk', desc: 'mObywatel uygulamasını kurarız: dijital pasaport, mPrawo Jazdy (dijital ehliyet), mLegitymacja (dijital öğrenci kimliği), eRecepta (elektronik reçeteler).' }
      ]
    },
    documents: {
      title: 'Sizden istenenler',
      subtitle: 'Asgari belge listesi. Net liste başvuru amacına bağlıdır.',
      items: [
        'Pasaport (orijinal + tüm dolu sayfalarının fotokopisi)',
        'Yasal ikamet belgesi: vize, mühür, karta pobytu, vizesiz giriş hakkı kanıtı',
        'Amaç kanıtı: umowa o pracę, KRS Sp. z o.o. çıktısı, üniversite belgesi vb.',
        'Polonya\'da adres kanıtı: kira sözleşmesi, zameldowanie veya ev sahibi onayı',
        'Lehçeye yeminli tercümeli doğum belgesi',
        'Yeminli tercümeli evlilik cüzdanı (soyadı değişikliği varsa)',
        'Doldurulmuş wniosek o nadanie numeru PESEL - biz hazırlıyoruz',
        'Çocuklar için: her iki ebeveyn pasaportlarıyla urząd\'da ve diğer ebeveynin onayıyla'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Sabit hizmet ücreti. Devlet harcı yoktur - PESEL ücretsiz verilir.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '20 dakika · amaç netleştirme' },
        { label: 'Anahtar teslim PESEL', value: '450 PLN\'den', note: 'Wniosek, tercüme, urząd\'da eşlik' },
        { label: 'PESEL + ePUAP + mObywatel', value: '600 PLN\'den', note: 'Tam dijital altyapı' },
        { label: 'Aile PESEL (3+ kişi)', value: '1.200 PLN\'den', note: 'Tüm aile için ortak başvuruda indirim' }
      ],
      note: 'Belirtilen ücretler LegalWin danışmanlık bedelidir. Belgelerin yeminli tercümesi ayrıca faturalanır (~80 PLN/belge).'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 24 września 2010 r. o ewidencji ludności (24 Eylül 2010 tarihli Nüfus Kayıt Kanunu)',
        'Rozporządzenie MSWiA z dnia 21 stycznia 2022 r. w sprawie wniosku o nadanie numeru PESEL (PESEL başvuru yönetmeliği)',
        'Ustawa z dnia 12 marca 2022 r. o pomocy obywatelom Ukrainy (Ukrayna vatandaşlarına yardım kanunu - PESEL UKR)',
        'Rozporządzenie Rady Ministrów w sprawie sposobu nadawania numeru PESEL (Bakanlar Kurulu PESEL atama yönetmeliği)',
        'Ustawa z dnia 17 lutego 2005 r. o informatyzacji działalności podmiotów realizujących zadania publiczne (ePUAP - e-devlet kanunu)'
      ]
    },
    faq: [
      { q: 'Karta pobytu olmadan PESEL alınabilir mi?', a: 'Evet. 2022\'den itibaren PESEL belirli bir amaç için verilir - umowa o pracę (iş sözleşmesi), şirket kuruluşu, öğrenim veya gayrimenkul edinimi temelinde. Karta pobytu zorunlu değildir. Yasal ikamet (vize, vizesiz giriş, oturum başvurusu mührü) yeterlidir.' },
      { q: 'Numara ne kadar sürede verilir?', a: 'Tam belgeyle başvuruda - aynı gün. Büyük şehirlerde (Varşova, Wrocław, Krakov) yoğunluk varsa 3 iş gününe kadar sürebilir. UKR statüsünde - mObywatel uygulaması üzerinden ziyaretsiz 1 günde verilir.' },
      { q: 'PESEL çalışma hakkı veriyor mu?', a: 'Hayır. PESEL bir kimlik numarasıdır, çalışma izni değildir. Yabancının çalışabilmesi için zezwolenie na pracę (çalışma izni) veya çalışma hakkı veren karta pobytu gerekir. PESEL gerekli ama yeterli değildir.' },
      { q: 'ePUAP nedir ve neden gerekli?', a: 'ePUAP (devlet e-platformu) - resmi elektronik imza platformudur. Profil zaufany (e-devlet kimliği) ile ZUS, US, KRS, urząd gminy, mahkemelere ziyaretsiz başvuru yapabilirsiniz. 2026\'dan itibaren TRC (MOS v2.0) ve birçok e-devlet hizmeti için zorunludur.' },
      { q: 'PESEL değiştirilebilir mi?', a: 'Yalnızca istisnai durumlarda: cinsiyet değişikliği, doğum tarihinde hata, tanık koruma. MSWiA (İçişleri Bakanlığı) üzerinden başvuruyla. Genelde - hayır.' },
      { q: 'PESEL belgesini kaybettim, ne yapmalıyım?', a: 'Belgenin kendisi gerekli değil - PESEL, talep eden kurumlar tarafından doğrudan PESEL sicilinden çekilir. Duplikat herhangi bir urząd gminy\'den 1 günde ücretsiz alınır.' },
      { q: 'Yabancı çocuklara PESEL alabilir miyim?', a: 'Evet. 18 yaş altı çocuklara PESEL ebeveyn tarafından çıkartılır - yeminli tercümeli doğum belgesi, ebeveynlerin pasaportları, çocuğun Polonya\'da ikametine dair belgeler gerekir. Yetişkin PESEL\'iyle birlikte aynı anda yapıyoruz - zaman ve ücretten tasarruf sağlar.' }
    ],
    related: ['meldunek', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'PESEL\'i 1 günde alalım',
    ctaSubtitle: 'Ücretsiz danışmanlık: amacı netleştirir, belgeleri toplar, urząd\'a randevu alırız. İlk görüşmeden PESEL belgesine genelde 1-3 iş günü sürer.'
  }
};

export default pesel;
