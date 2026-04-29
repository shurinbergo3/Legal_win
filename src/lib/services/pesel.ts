import type { ServiceEntry } from './types';

const pesel: ServiceEntry = {
  ru: {
    slug: 'pesel',
    group: 'documents',
    icon: 'id-card',
    badge: '11 цифр · ZUS · US · ePUAP',
    title: 'PESEL для иностранца',
    subtitle: 'Powszechny Elektroniczny System Ewidencji Ludności',
    lead: 'PESEL — это 11-значный идентификационный номер, без которого в Польше невозможно подписать договор аренды, открыть счёт в банке, обратиться к врачу через NFZ, оформить ePUAP или подать налоговую декларацию. С 2022 года иностранец получает PESEL по конкретной цели — например, для трудоустройства (cel: zatrudnienie), учёбы или ведения бизнеса. Оформляем заявление, привязываем к ePUAP и подключаем mObywatel.',
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
        { title: 'Cel: ochrona czasowa (UKR)', desc: 'Граждане Украины с UKR-статусом получают PESEL автоматически — оформляем через wniosek na PESEL UKR.' },
        { title: 'Cel: nabycie nieruchomości', desc: 'Покупка квартиры, регистрация в KW (księga wieczysta), оплата налога PCC-3.' },
        { title: 'Inne cele', desc: 'Брак в USC, регистрация автомобиля, водительские права, получение medkartu, обмен прав СНГ на польские.' }
      ]
    },
    timeline: {
      title: 'Как мы оформляем PESEL под ключ',
      subtitle: 'От первого звонка до выписки z PESEL и привязанного ePUAP — обычно 1–3 рабочих дня.',
      steps: [
        { title: 'Консультация', duration: '20 мин', desc: 'Уточняем цель оформления, проверяем основания, составляем минимальный пакет документов под вашу ситуацию.' },
        { title: 'Подготовка wniosku', duration: '1 день', desc: 'Заполняем wniosek o nadanie numeru PESEL (форма zgodnie z rozporządzeniem MSWiA), переводим ваши документы на польский присяжно, если нужно.' },
        { title: 'Подача в urząd gminy', duration: '1 визит', desc: 'Сопровождаем в urząd gminy / dzielnicy по адресу проживания. Подача — лично, заявление подписывается при кассире. Для UKR — без визита через mObywatel.' },
        { title: 'Получение PESEL', duration: '1 день', desc: 'Номер выдаётся в день подачи или на следующий рабочий день (zaświadczenie o nadaniu PESEL — бесплатно).' },
        { title: 'Привязка к ePUAP', duration: '30 мин', desc: 'Создаём profil zaufany в ePUAP — государственная электронная подпись для подачи документов в любые учреждения без визитов.' },
        { title: 'Подключение mObywatel', duration: '15 мин', desc: 'Устанавливаем приложение mObywatel — цифровой паспорт, mPrawo Jazdy, mLegitymacja, рецепты eRecepta.' }
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
        'Заполненный wniosek o nadanie numeru PESEL — готовим мы',
        'Для детей: оба родителя в urząd с паспортом и согласием второго родителя'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированная цена за услугу. Госпошлину urząd не берёт — PESEL выдаётся бесплатно.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '20 минут · уточнение цели' },
        { label: 'PESEL под ключ', value: 'от 450 PLN', note: 'Wniosek, перевод, сопровождение в urząd' },
        { label: 'PESEL + ePUAP + mObywatel', value: 'от 600 PLN', note: 'Полная электронная инфраструктура' },
        { label: 'PESEL для семьи (3+)', value: 'от 1 200 PLN', note: 'Скидка при подаче на всю семью одновременно' }
      ],
      note: 'Указаны гонорары LegalWin. Присяжный перевод свидетельств — отдельно (~80 PLN/документ).'
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
      { q: 'Можно ли получить PESEL без karta pobytu?', a: 'Да. С 2022 года PESEL оформляется по конкретной цели — на основании umowy o pracę, регистрации фирмы, учёбы или покупки недвижимости. Karta pobytu не обязательна. Достаточно легального пребывания (виза, безвиз, штамп о подаче на ВНЖ).' },
      { q: 'Сколько ждать получения номера?', a: 'При подаче с полным пакетом — в день обращения. В крупных воеводствах (Warszawa, Wrocław, Kraków) иногда до 3 рабочих дней при большой загрузке. Для UKR-статуса — оформление через mObywatel занимает 1 день без визита.' },
      { q: 'PESEL даёт право работать?', a: 'Нет. PESEL — это идентификационный номер, не разрешение на работу. Для трудоустройства иностранцу нужно zezwolenie na pracę или TRC с правом на работу. PESEL — необходимое, но не достаточное условие.' },
      { q: 'Что такое ePUAP и зачем он нужен?', a: 'ePUAP — государственная платформа электронной подписи. С profil zaufany можно подать заявления в ZUS, US, KRS, urząd gminy, suds без личных визитов. Обязателен для подачи TRC с 2026 (MOS v2.0) и для большинства e-госуслуг.' },
      { q: 'Можно ли изменить PESEL?', a: 'Только в исключительных случаях: смена пола, ошибка в дате рождения, защита свидетеля. По заявлению через MSWiA. Обычно — никогда.' },
      { q: 'Что делать, если потерял zaświadczenie o PESEL?', a: 'Само zaświadczenie не нужно — PESEL запрашивается из реестра PESEL по запросу любого учреждения. Дубликат можно бесплатно получить в любом urząd gminy в течение 1 дня.' },
      { q: 'Получу ли PESEL детям иностранцев?', a: 'Да. На детей до 18 лет PESEL оформляется родителем — нужно свидетельство о рождении (присяжный перевод), паспорта родителей, документы о пребывании ребёнка в Польше. Делаем одновременно со взрослым PESEL — экономия времени и сборов.' }
    ],
    related: ['meldunek', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Получим PESEL за 1 день',
    ctaSubtitle: 'Бесплатная консультация: уточним цель оформления, соберём пакет документов и запишем в urząd. От первого звонка до zaświadczenia z PESEL — обычно 1–3 рабочих дня.'
  },
  pl: {
    slug: 'pesel',
    group: 'documents',
    icon: 'id-card',
    badge: '11 cyfr · ZUS · US · ePUAP',
    title: 'PESEL dla cudzoziemca',
    subtitle: 'Powszechny Elektroniczny System Ewidencji Ludności',
    lead: 'PESEL to 11-cyfrowy numer identyfikacyjny, bez którego w Polsce nie da się podpisać umowy najmu, otworzyć konta bankowego, skorzystać z NFZ, założyć ePUAP czy złożyć deklaracji podatkowej. Od 2022 r. cudzoziemiec otrzymuje PESEL „w celu" — zatrudnienia, nauki, działalności gospodarczej. Składamy wniosek, podpinamy ePUAP i mObywatel.',
    facts: [
      { label: 'Termin', value: '1 dzień', note: 'po złożeniu w urzędzie gminy' },
      { label: 'Opłata', value: '0 PLN', note: 'nadanie bezpłatne' },
      { label: 'Powiązanie', value: 'ePUAP + mObywatel', note: 'podpis elektroniczny i e-usługi' },
      { label: 'Ważność', value: 'bezterminowo', note: 'jeden numer na całe życie' }
    ],
    grounds: {
      title: 'Kiedy potrzebujesz PESEL',
      subtitle: 'Cel wskazujesz we wniosku — od niego zależy zakres dokumentów wymaganych przez urząd gminy.',
      items: [
        { title: 'Cel: zatrudnienie', desc: 'Bez PESEL pracodawca nie zgłosi Cię do ZUS, nie wypłaci wynagrodzenia i nie potrąci podatku. Składamy wraz z umową o pracę lub zlecenie.' },
        { title: 'Cel: prowadzenie działalności', desc: 'Konieczny do rejestracji Sp. z o.o. w KRS, JDG w CEIDG, otwarcia konta firmowego i rejestracji VAT.' },
        { title: 'Cel: nauka', desc: 'Do zapisu do szkoły, na uczelnię, wyrobienia legitymacji studenckiej i stypendium.' },
        { title: 'Cel: świadczenia społeczne', desc: 'Świadczenia 800+, becikowe, świadczenia ZUS, karta NFZ, eRecepta.' },
        { title: 'Cel: rozliczenie podatku', desc: 'Deklaracje PIT/VAT, rejestracja w US, dostęp do e-Urzędu Skarbowego i Twojego e-PIT.' },
        { title: 'Cel: ochrona czasowa (UKR)', desc: 'Obywatele Ukrainy ze statusem UKR — wniosek przez mObywatel, bez wizyty.' },
        { title: 'Cel: nabycie nieruchomości', desc: 'Zakup mieszkania, wpis do KW, opłata PCC-3.' },
        { title: 'Inne cele', desc: 'Ślub w USC, rejestracja auta, prawo jazdy, wymiana zagranicznych praw, opieka medyczna.' }
      ]
    },
    timeline: {
      title: 'Jak prowadzimy sprawę pod klucz',
      subtitle: 'Od pierwszego telefonu do zaświadczenia o PESEL i podpiętego ePUAP — zwykle 1–3 dni robocze.',
      steps: [
        { title: 'Konsultacja', duration: '20 min', desc: 'Ustalamy cel, weryfikujemy podstawy, przygotowujemy minimalny pakiet dokumentów.' },
        { title: 'Wniosek', duration: '1 dzień', desc: 'Wypełniamy wniosek o nadanie numeru PESEL, organizujemy tłumaczenia przysięgłe Twoich dokumentów.' },
        { title: 'Złożenie w urzędzie gminy', duration: '1 wizyta', desc: 'Towarzyszymy w urzędzie. Podpisanie wniosku — przy kasie urzędu. Dla UKR — bez wizyty, przez mObywatel.' },
        { title: 'Odbiór PESEL', duration: '1 dzień', desc: 'Numer wydawany od ręki lub następnego dnia roboczego (zaświadczenie bezpłatne).' },
        { title: 'Podpięcie ePUAP', duration: '30 min', desc: 'Zakładamy profil zaufany — państwowy podpis elektroniczny dla wszystkich e-usług.' },
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
        'Wypełniony wniosek — przygotowujemy my',
        'Dla dzieci: oboje rodzice w urzędzie z paszportami i zgodą'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Stała cena. Urząd nie pobiera opłaty — PESEL nadawany jest bezpłatnie.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '20 minut · ustalenie celu' },
        { label: 'PESEL pod klucz', value: 'od 450 PLN', note: 'Wniosek, tłumaczenia, urząd' },
        { label: 'PESEL + ePUAP + mObywatel', value: 'od 600 PLN', note: 'Pełna infrastruktura cyfrowa' },
        { label: 'PESEL dla rodziny (3+)', value: 'od 1 200 PLN', note: 'Rabat przy zgłoszeniu rodziny' }
      ],
      note: 'Powyżej honoraria LegalWin. Tłumaczenia przysięgłe — osobno (~80 PLN/dokument).'
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
      { q: 'Czy można uzyskać PESEL bez karty pobytu?', a: 'Tak. Od 2022 PESEL nadaje się „w celu" — na podstawie umowy o pracę, rejestracji firmy, nauki czy zakupu nieruchomości. Karta pobytu nie jest konieczna. Wystarczy legalny pobyt.' },
      { q: 'Ile się czeka na numer?', a: 'Z kompletem dokumentów — w dniu złożenia. W dużych miastach czasem do 3 dni roboczych przy obciążeniu urzędu. Dla statusu UKR — 1 dzień przez mObywatel.' },
      { q: 'Czy PESEL daje prawo do pracy?', a: 'Nie. PESEL to numer identyfikacyjny, nie zezwolenie. Do pracy potrzebne jest zezwolenie na pracę lub karta pobytu z prawem do pracy.' },
      { q: 'Czym jest ePUAP?', a: 'Państwowa platforma podpisu elektronicznego. Profil zaufany pozwala składać wnioski do ZUS, US, KRS i innych urzędów bez wizyt. Obowiązkowy do MOS v2.0 (TRC) od 2026.' },
      { q: 'Czy można zmienić PESEL?', a: 'Tylko w wyjątkowych przypadkach: zmiana płci, błąd w dacie urodzenia, ochrona świadka. Wniosek przez MSWiA.' },
      { q: 'Co jeśli zgubię zaświadczenie?', a: 'Samo zaświadczenie nie jest potrzebne — PESEL pobierany jest z rejestru przez urzędy. Duplikat — bezpłatnie w urzędzie gminy w 1 dzień.' },
      { q: 'PESEL dla dzieci?', a: 'Tak — wnioskuje rodzic. Akt urodzenia (tłumaczenie przysięgłe), paszporty rodziców, dokumenty pobytu dziecka. Robimy razem z PESEL dorosłego.' }
    ],
    related: ['meldunek', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Załatwimy PESEL w 1 dzień',
    ctaSubtitle: 'Bezpłatna konsultacja: ustalimy cel, zbierzemy dokumenty i umówimy w urzędzie. Od pierwszego telefonu do zaświadczenia — zwykle 1–3 dni robocze.'
  },
  en: {
    slug: 'pesel',
    group: 'documents',
    icon: 'id-card',
    badge: '11 digits · ZUS · US · ePUAP',
    title: 'PESEL for foreigners',
    subtitle: 'Polish national identification number',
    lead: 'PESEL is the 11-digit Polish national ID number. Without it you cannot sign a tenancy agreement, open a bank account, register with NFZ healthcare, set up ePUAP or file a tax return. Since 2022 a foreigner gets PESEL "for a specific purpose" — employment, business, study. We file the application, link it to ePUAP and activate mObywatel.',
    facts: [
      { label: 'Issuance', value: '1 day', note: 'when filed at urząd gminy' },
      { label: 'State fee', value: '0 PLN', note: 'free of charge' },
      { label: 'Linkage', value: 'ePUAP + mObywatel', note: 'e-signature & state e-services' },
      { label: 'Validity', value: 'lifetime', note: 'one number forever' }
    ],
    grounds: {
      title: 'When you need a PESEL',
      subtitle: 'The purpose stated on the application drives the document set the urząd will require.',
      items: [
        { title: 'Purpose: employment', desc: 'Without PESEL your employer cannot register you with ZUS, pay salary, or withhold tax. We file alongside the work contract.' },
        { title: 'Purpose: business', desc: 'Required to register a Sp. z o.o. with KRS, a sole proprietorship in CEIDG, open a corporate account and register for VAT.' },
        { title: 'Purpose: study', desc: 'For school/university enrolment, student ID, scholarships.' },
        { title: 'Purpose: social benefits', desc: '800+ family benefit, becikowe, ZUS payouts, NFZ card, eRecepta.' },
        { title: 'Purpose: tax filing', desc: 'PIT/VAT returns, registration with US, access to e-Urząd Skarbowy and Twój e-PIT.' },
        { title: 'Purpose: temporary protection (UKR)', desc: 'Ukrainian nationals with UKR status get PESEL through mObywatel — no in-person visit.' },
        { title: 'Purpose: real estate purchase', desc: 'Apartment buying, KW (land register) entry, PCC-3 tax.' },
        { title: 'Other', desc: 'Marriage at USC, vehicle registration, driving licence, foreign-licence exchange, healthcare.' }
      ]
    },
    timeline: {
      title: 'How we run it end-to-end',
      subtitle: 'From first call to the PESEL certificate and active ePUAP — usually 1–3 working days.',
      steps: [
        { title: 'Consultation', duration: '20 min', desc: 'Identify the purpose, verify legal basis, draw up the minimum document set.' },
        { title: 'Application prep', duration: '1 day', desc: 'Fill the wniosek o nadanie numeru PESEL, arrange sworn translations of your documents.' },
        { title: 'Filing at urząd gminy', duration: '1 visit', desc: 'We escort you to the urząd. Application is signed at the desk. UKR status: no visit, via mObywatel.' },
        { title: 'PESEL collection', duration: '1 day', desc: 'Number issued same day or next working day (certificate is free).' },
        { title: 'ePUAP activation', duration: '30 min', desc: 'Set up profil zaufany — the state e-signature for all e-services.' },
        { title: 'mObywatel', duration: '15 min', desc: 'Install the app: digital passport, mPrawoJazdy, mLegitymacja, eRecepta.' }
      ]
    },
    documents: {
      title: 'What we need from you',
      subtitle: 'Base set. Exact list depends on the purpose.',
      items: [
        'Passport (original + copies of all used pages)',
        'Proof of legal stay: visa, stamp, residence card, visa-free regime',
        'Proof of purpose: work contract, KRS extract, study certificate, etc.',
        'Polish address proof: tenancy, zameldowanie, owner statement',
        'Birth certificate with sworn translation into Polish',
        'Marriage certificate (if name change) with sworn translation',
        'Completed application — we prepare it',
        'For children: both parents at urząd with passports and consent'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Fixed price. No state fee — the PESEL itself is free.',
      items: [
        { label: 'Consultation', value: 'Free', note: '20 minutes · purpose review' },
        { label: 'Turnkey PESEL', value: 'from 450 PLN', note: 'Application, translations, urząd visit' },
        { label: 'PESEL + ePUAP + mObywatel', value: 'from 600 PLN', note: 'Full digital infrastructure' },
        { label: 'Family PESEL (3+)', value: 'from 1,200 PLN', note: 'Discount for joint family filing' }
      ],
      note: 'LegalWin fees. Sworn translations billed separately (~80 PLN/document).'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Population Records Act of 24 September 2010',
        'MSWiA Regulation of 21 January 2022 on the PESEL application',
        'Act of 12 March 2022 on assistance to Ukrainian citizens (PESEL UKR)',
        'Council of Ministers Regulation on PESEL assignment',
        'Act of 17 February 2005 on informatisation (ePUAP)'
      ]
    },
    faq: [
      { q: 'Can I get PESEL without a residence card?', a: 'Yes. Since 2022 PESEL is granted "for a stated purpose" — employment, business registration, study or property purchase. Residence card is not required — legal stay is enough (visa, visa-free, residence application stamp).' },
      { q: 'How long does it take?', a: 'With a complete pack — same day. Big-city urzęds (Warsaw, Wrocław, Kraków) sometimes take up to 3 working days. UKR status: 1 day via mObywatel without visiting.' },
      { q: 'Does PESEL grant the right to work?', a: 'No. PESEL is an ID number, not a work permit. To work you also need a work permit or a residence card with work rights. PESEL is necessary but not sufficient.' },
      { q: 'What is ePUAP?', a: 'The state e-signature platform. Profil zaufany lets you file applications with ZUS, US, KRS, courts and any urząd without in-person visits. Mandatory for MOS v2.0 (TRC) starting 2026.' },
      { q: 'Can PESEL be changed?', a: 'Only in exceptional cases — gender change, date-of-birth error, witness protection. Application via MSWiA. Otherwise: never.' },
      { q: 'Lost the PESEL certificate — what now?', a: 'The certificate isn\'t needed — institutions pull PESEL from the register. A duplicate is free at any urząd gminy and issued within a day.' },
      { q: 'PESEL for children?', a: 'Yes — a parent applies. Birth certificate (sworn translation), parents\' passports, child\'s legal-stay proof. We file alongside the adult PESEL.' }
    ],
    related: ['meldunek', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'PESEL in 1 day',
    ctaSubtitle: 'Free consultation: identify the purpose, gather documents, book the urząd. From first call to PESEL certificate — typically 1–3 working days.'
  }
};

export default pesel;
