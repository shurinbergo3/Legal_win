import type { ServiceEntry } from './types';

const odbiorZLotniska: ServiceEntry = {
  ru: {
    slug: 'odbior-z-lotniska',
    group: 'relocation',
    icon: 'home',
    badge: 'Chopin · Modlin · Krakow-Balice · Wrocław',
    title: 'Встреча в аэропорту',
    subtitle: 'Трансфер из Chopin / Modlin / Krakow-Balice',
    lead: 'Прилёт в незнакомую страну - стресс. Без польского языка, с детьми, чемоданами и без знания местных реалий. LegalWin встречает вас в зоне прилёта со своим табличкой, помогает пройти паспортный контроль для иностранцев на новых правилах EES (Entry/Exit System), организует трансфер бизнес- или семейного класса, а в первый день - заселение, SIM-карту, продукты, инструктаж по оплате транспорта. Это не такси - это профессиональное сопровождение первого дня в Польше.',
    facts: [
      { label: 'Доступные аэропорты', value: '6 аэропортов', note: 'Chopin, Modlin, Krakow, Gdansk, Wrocław, Poznań' },
      { label: 'Время ожидания', value: 'до 90 мин', note: 'free, после - +50 PLN/час' },
      { label: 'EES контроль', value: 'с 2025', note: 'биометрия + 90/180 правило' },
      { label: 'Стоимость', value: 'от 250 PLN', note: 'седан · фикс. цена · 1-4 пасс.' }
    ],
    grounds: {
      title: 'Что входит в встречу',
      subtitle: 'Пакет настраивается под ваши потребности - от просто такси до полного дня сопровождения.',
      items: [
        { title: 'Встреча с табличкой', desc: 'Наш сотрудник с табличкой LegalWin в зоне прилёта. Поможет с паспортным контролем (EES), переводом вопросов pograniczników, поиском багажа.' },
        { title: 'EES - новые биометрические правила', desc: 'С октября 2025 для не-ЕС граждан - отпечатки пальцев и фото на въезде. Объясним правило 90/180 и поможем избежать переплётов с переездами.' },
        { title: 'Трансфер до жилья', desc: 'Седан Mercedes E / Skoda Superb для 1-4 пассажиров; минивэн Vito для 5-8. Детское кресло - бесплатно по запросу.' },
        { title: 'Заселение в квартиру', desc: 'Встреча с собственником, проверка инвентаря, подписание umowy najmu (если ещё не подписана), фото-фиксация состояния.' },
        { title: 'SIM-карта в день прилёта', desc: 'Plus / Play / T-Mobile с лимитом 50 GB и польским номером. Оформляем по паспорту прямо в аэропорту или в первом же салоне.' },
        { title: 'Первая инструкция', desc: '15-страничный гид: оплата транспорта (mObywatel + Jakdojade), bankomat, Lidl-Biedronka, Apteka, лесные тропы - всё, что нужно в первую неделю.' },
        { title: 'Перевод первых документов', desc: 'Помогаем подписать umowę najmu, открыть счёт в Pekao / mBank, оформить prepaid-карту KOMPLEKS - за один день.' },
        { title: 'Сопровождение детей', desc: 'Если едут дети - отдельный wniosek о zameldowaniu и список школ powitalnych рядом с жильём.' }
      ]
    },
    timeline: {
      title: 'Как проходит встреча',
      subtitle: 'От первого письма с рейсом до спокойного вечера в новой квартире.',
      steps: [
        { title: 'Бронь', duration: '5 мин', desc: 'Высылаете рейс и дату прилёта. Подтверждаем стоимость и передаём данные водителя за 24 часа до вылета.' },
        { title: 'Мониторинг рейса', duration: 'auto', desc: 'Отслеживаем рейс по FlightAware. Если задержка - водитель выезжает в новое время, доплат нет.' },
        { title: 'Прилёт и встреча', duration: '15 мин', desc: 'Наш сотрудник с табличкой ждёт у выхода паспортного контроля. Кофе при необходимости, помощь с тележкой.' },
        { title: 'EES и pogranicznicy', duration: '20-60 мин', desc: 'Объясняем вопросы погранцам, помогаем заполнить форму прибытия, переводим. Особенно важно с маленькими детьми.' },
        { title: 'Поездка до жилья', duration: '30-90 мин', desc: 'Зависит от аэропорта: Chopin → центр 25 мин, Modlin → центр 60 мин, Wrocław → центр 20 мин.' },
        { title: 'Заселение', duration: '30-60 мин', desc: 'Встреча с собственником, передача ключей, подписание dodatków к umowie najmu, проверка отопления и воды.' },
        { title: 'Базовый комфорт', duration: '60 мин', desc: 'Заезжаем в Lidl за продуктами на первые 2 дня, аптеку - если нужно. Объясняем, как работает кодовый замок и Wi-Fi.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Минимум - данные рейса. Остальное собирается при бронировании.',
      items: [
        'Номер рейса и дата прилёта',
        'Паспорт (фото или скан) - для табличек и контроля',
        'Адрес заселения и контакты собственника / агента',
        'Количество пассажиров и багажа (для подбора авто)',
        'Возраст детей (для детских кресел)',
        'Контактный мобильный (WhatsApp)',
        'Список первых задач (SIM, банк, аптека, IKEA)',
        'Номер брони в гостинице (если временное жильё)'
      ]
    },
    pricing: {
      title: 'Стоимость пакетов',
      subtitle: 'Фиксированная цена. Доплат за время нет (в пределах 90 мин ожидания).',
      items: [
        { label: 'Только трансфер (седан)', value: 'от 250 PLN', note: '1-4 пасс. · Chopin → Warszawa centrum' },
        { label: 'Трансфер + заселение', value: 'от 450 PLN', note: 'С нашим сопровождением до жилья' },
        { label: 'Полный пакет первого дня', value: 'от 850 PLN', note: 'Аэропорт + жильё + SIM + банк + Lidl' },
        { label: 'Семейный пакет (5+)', value: 'от 1 200 PLN', note: 'Минивэн + детские кресла + extra багаж' }
      ],
      note: 'Указаны базовые тарифы для Warszawa-Chopin. Modlin → centrum +50 PLN, ночные тарифы (00:00-06:00) +30%, выходные/праздники без наценки.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Rozporządzenie (UE) 2017/2226 - EES (Entry/Exit System)',
        'Konwencja wykonawcza do Układu z Schengen (90/180 days rule)',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach',
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (przewóz osób)',
        'Kodeks Wizowy UE (Rozporządzenie 810/2009)'
      ]
    },
    faq: [
      { q: 'Что такое EES и как это меняет прилёт?', a: 'Entry/Exit System - общеевропейская биометрическая система въезда/выезда. С 12 октября 2025 года все не-ЕС граждане при первом въезде сдают отпечатки пальцев и фото. Срок прохождения границы вырос с 30 секунд до 5-10 минут. Мы готовим вас к процедуре и проходим паспортный контроль вместе.' },
      { q: 'Можно ли встретить из Modlin или Wrocław?', a: 'Да, работаем со всеми аэропортами Польши: Warszawa-Chopin (WAW), Warszawa-Modlin (WMI), Krakow-Balice (KRK), Gdansk (GDN), Wrocław (WRO), Poznań (POZ), Katowice (KTW). Modlin → Warszawa centrum - 60 мин (350 PLN), Wrocław airport → centrum - 20 мин (180 PLN).' },
      { q: 'Что если рейс задержан или отменён?', a: 'Мониторим рейс по FlightAware с момента бронирования. Задержка до 6 часов - без доплаты, водитель выезжает в новое время. Отмена - переносим встречу на новый рейс или возвращаем 80% оплаты.' },
      { q: 'Можно ли забрать ребёнка одного (UMNR)?', a: 'Да. У нас есть сотрудники, аккредитованные авиалиниями (LOT, Ryanair, Wizz Air) для встречи UMNR (несопровождаемых детей). Нужны заранее оформленные доверенности от родителей и копии паспортов.' },
      { q: 'Что входит в "полный пакет первого дня"?', a: 'Встреча в аэропорту + проводка через EES + трансфер на седане до жилья + заселение с собственником + SIM-карта Plus 50 GB + 30-минутный визит в банк (Pekao / mBank) для оформления счёта + закупка в Lidl на 200 PLN + 15-страничный гид. Всего 5-6 часов в день прилёта.' },
      { q: 'Принимаете оплату картой?', a: 'Да. Visa, Mastercard, Apple Pay, Google Pay, BLIK. Можем выставить инвойс на Sp. z o.o. с VAT 23% - для бизнес-командировок. Оплата 50% при бронировании, 50% после трансфера.' },
      { q: 'А если я просто хочу такси, без сопровождения?', a: 'Конечно. Базовый трансфер седан 1-4 пасс. - от 250 PLN из Chopin. Это уже на 30-40% дешевле Bolt/Uber в часы пик и без риска отмены. Минивэн для 5-8 пассажиров - от 380 PLN.' }
    ],
    related: ['wyszukiwanie-mieszkania', 'tlumacz-na-wizyty', 'zaproszenia'],
    ctaTitle: 'Встретим в день прилёта',
    ctaSubtitle: 'Бесплатное планирование: высылайте рейс - подтвердим время и стоимость в течение часа. Встретим у выхода с табличкой.'
  },
  pl: {
    slug: 'odbior-z-lotniska',
    group: 'relocation',
    icon: 'home',
    badge: 'Chopin · Modlin · Krakow-Balice · Wrocław',
    title: 'Odbiór z lotniska',
    subtitle: 'Transfer z Chopin / Modlin / Krakow-Balice',
    lead: 'Przylot do nieznanego kraju to stres. Bez polskiego, z dziećmi, walizkami, bez znajomości realiów. LegalWin spotyka w strefie przylotów z tabliczką, pomaga przejść kontrolę EES, organizuje transfer i pierwszy dzień: zameldowanie, SIM, zakupy, instruktaż. To nie tylko taxi - to profesjonalne wsparcie pierwszego dnia w Polsce.',
    facts: [
      { label: 'Lotniska', value: '6 lotnisk', note: 'Chopin, Modlin, Krakow, Gdańsk, Wrocław, Poznań' },
      { label: 'Czas oczekiwania', value: 'do 90 min', note: 'gratis, potem +50 PLN/h' },
      { label: 'EES od 2025', value: 'biometria', note: '+ zasada 90/180' },
      { label: 'Cena', value: 'od 250 PLN', note: 'sedan · stała cena · 1-4 os.' }
    ],
    grounds: {
      title: 'Co wchodzi',
      subtitle: 'Pakiet konfigurowalny - od taxi po pełen dzień asysty.',
      items: [
        { title: 'Spotkanie z tabliczką', desc: 'Nasz pracownik z tabliczką LegalWin. Pomoc z kontrolą EES, tłumaczenie pograniczników, bagaż.' },
        { title: 'EES - nowe zasady biometrii', desc: 'Od 10/2025 dla obywateli spoza UE - odciski i zdjęcie. Wyjaśniamy 90/180.' },
        { title: 'Transfer', desc: 'Sedan Mercedes E / Skoda Superb 1-4 os.; van Vito 5-8 os. Foteliki dziecięce gratis.' },
        { title: 'Zameldowanie w mieszkaniu', desc: 'Spotkanie z właścicielem, sprawdzenie wyposażenia, podpisanie umowy najmu, dokumentacja.' },
        { title: 'SIM w dniu przylotu', desc: 'Plus / Play / T-Mobile z 50 GB i polskim numerem. Z paszportem na lotnisku lub w salonie.' },
        { title: 'Pierwszy przewodnik', desc: '15-stronicowa instrukcja: bilety (mObywatel + Jakdojade), bankomat, Lidl, apteka, transport.' },
        { title: 'Pierwsze dokumenty', desc: 'Asysta przy najmie, koncie w Pekao/mBank, karcie KOMPLEKS - w jeden dzień.' },
        { title: 'Dzieci', desc: 'Wniosek o zameldowanie, lista szkół powitalnych obok mieszkania.' }
      ]
    },
    timeline: {
      title: 'Przebieg',
      subtitle: 'Od maila z lotem do spokojnego wieczoru w mieszkaniu.',
      steps: [
        { title: 'Rezerwacja', duration: '5 min', desc: 'Lot, data. Potwierdzenie ceny i danych kierowcy 24 h przed.' },
        { title: 'Monitoring lotu', duration: 'auto', desc: 'FlightAware. Opóźnienie - bez dopłat, kierowca dostosowuje czas.' },
        { title: 'Spotkanie', duration: '15 min', desc: 'Nasz pracownik z tabliczką po kontroli paszportowej. Kawa, wózek z bagażem.' },
        { title: 'EES i pogranicznicy', duration: '20-60 min', desc: 'Tłumaczenie pograniczników, formularz przybycia, asysta z dziećmi.' },
        { title: 'Przejazd', duration: '30-90 min', desc: 'Chopin → centrum 25 min, Modlin → centrum 60 min, Wrocław → centrum 20 min.' },
        { title: 'Zameldowanie', duration: '30-60 min', desc: 'Klucze, aneksy do umowy, sprawdzenie ogrzewania i wody.' },
        { title: 'Komfort', duration: '60 min', desc: 'Lidl na zakupy, apteka, instrukcja zamka i Wi-Fi.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Minimum - dane lotu.',
      items: [
        'Numer lotu i data',
        'Paszport (foto/skan) - do tabliczki i kontroli',
        'Adres zameldowania i kontakt do właściciela',
        'Liczba pasażerów i bagażu',
        'Wiek dzieci (foteliki)',
        'Telefon kontaktowy (WhatsApp)',
        'Lista pierwszych zadań (SIM, bank, apteka, IKEA)',
        'Numer rezerwacji hotelu (jeśli tymczasowe)'
      ]
    },
    pricing: {
      title: 'Pakiety',
      subtitle: 'Stała cena. Brak dopłat za czas (do 90 min oczekiwania).',
      items: [
        { label: 'Sam transfer (sedan)', value: 'od 250 PLN', note: '1-4 os. · Chopin → centrum' },
        { label: 'Transfer + zameldowanie', value: 'od 450 PLN', note: 'Z naszym pracownikiem do mieszkania' },
        { label: 'Pełen pierwszy dzień', value: 'od 850 PLN', note: 'Lotnisko + mieszkanie + SIM + bank + Lidl' },
        { label: 'Pakiet rodzinny (5+)', value: 'od 1 200 PLN', note: 'Van + foteliki + extra bagaż' }
      ],
      note: 'Bazowo dla Chopin. Modlin +50 PLN, nocne (00-06) +30%, weekendy bez dopłat.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Rozporządzenie (UE) 2017/2226 - EES',
        'Konwencja wykonawcza do Układu z Schengen (90/180)',
        'Ustawa z 12 grudnia 2013 r. o cudzoziemcach',
        'Ustawa z 6 września 2001 r. o transporcie drogowym',
        'Kodeks Wizowy UE (Rozp. 810/2009)'
      ]
    },
    faq: [
      { q: 'Co to EES?', a: 'Entry/Exit System - od 10/2025 odciski i zdjęcie spoza UE. Czas kontroli 5-10 min zamiast 30 s. Asystujemy.' },
      { q: 'Modlin / Wrocław?', a: 'Tak - wszystkie polskie lotniska. Modlin → centrum 60 min (350 PLN), Wrocław → centrum 20 min (180 PLN).' },
      { q: 'Opóźniony lot?', a: 'Monitoring FlightAware. Opóźnienie do 6 h - bez dopłat. Odwołany - przesunięcie lub 80% zwrotu.' },
      { q: 'Dziecko bez opieki (UMNR)?', a: 'Tak - prawnicy akredytowani w LOT, Ryanair, Wizz Air. Wymagane pełnomocnictwa rodziców.' },
      { q: 'Co w "pełnym dniu"?', a: 'Lotnisko + EES + transfer + zameldowanie + SIM Plus 50 GB + 30 min w banku + Lidl 200 PLN + przewodnik. 5-6 h.' },
      { q: 'Płatność kartą?', a: 'Visa, Mastercard, Apple Pay, Google Pay, BLIK. Faktura VAT 23%. 50/50 - przed i po.' },
      { q: 'Tylko taxi?', a: 'Sedan 1-4 os. od 250 PLN. 30-40% taniej niż Bolt/Uber w godzinach szczytu. Van 5-8 os. od 380 PLN.' }
    ],
    related: ['wyszukiwanie-mieszkania', 'tlumacz-na-wizyty', 'zaproszenia'],
    ctaTitle: 'Spotkamy w dniu przylotu',
    ctaSubtitle: 'Bezpłatne planowanie: prześlij lot - w godzinę odpowiedź. Czekamy z tabliczką po kontroli.'
  },
  en: {
    slug: 'odbior-z-lotniska',
    group: 'relocation',
    icon: 'home',
    badge: 'Chopin · Modlin · Krakow-Balice · Wrocław',
    title: 'Airport pickup',
    subtitle: 'Transfer from Chopin / Modlin / Krakow-Balice',
    lead: "Arriving in a foreign country is stressful. No Polish, kids, suitcases, no local context. LegalWin meets you at arrivals with a sign, helps you through new EES border control, arranges the transfer, and on day one - apartment check-in, SIM card, groceries, transport briefing. It's not just a taxi - it's legal handholding for your first day in Poland.",
    facts: [
      { label: 'Airports', value: '6 airports', note: 'Chopin, Modlin, Krakow, Gdansk, Wrocław, Poznań' },
      { label: 'Wait time', value: 'up to 90 min', note: 'free, then +50 PLN/hour' },
      { label: 'EES from 2025', value: 'biometrics', note: '+ 90/180 rule' },
      { label: 'Price', value: 'from 250 PLN', note: 'sedan · fixed · 1-4 pax' }
    ],
    grounds: {
      title: "What's included",
      subtitle: 'Configurable - from taxi to a full first-day handhold.',
      items: [
        { title: 'Sign meeting at arrivals', desc: 'LegalWin staff with a sign. Help with EES check, border-officer translation, baggage.' },
        { title: 'EES - new biometric rules', desc: 'From October 2025 non-EU travellers give fingerprints and photo. We brief you on 90/180.' },
        { title: 'Transfer to housing', desc: 'Mercedes E / Skoda Superb sedan for 1-4 pax; Vito van for 5-8. Child seats free on request.' },
        { title: 'Apartment check-in', desc: 'Meet owner, inventory check, sign tenancy, photo-document the state.' },
        { title: 'Same-day SIM', desc: 'Plus / Play / T-Mobile, 50 GB, Polish number. Done at airport or first store.' },
        { title: 'First-week guide', desc: '15-page guide: transit (mObywatel + Jakdojade), ATMs, Lidl/Biedronka, pharmacies, parks.' },
        { title: 'First documents', desc: 'Tenancy signing, Pekao/mBank account, KOMPLEKS prepaid card - all in one day.' },
        { title: 'Children', desc: 'Zameldowanie filing, list of welcome-class schools near your housing.' }
      ]
    },
    timeline: {
      title: 'How it runs',
      subtitle: 'From flight email to a calm evening in your new place.',
      steps: [
        { title: 'Booking', duration: '5 min', desc: 'Send flight and date. Confirm price and driver details 24h prior.' },
        { title: 'Flight monitoring', duration: 'auto', desc: 'FlightAware tracking. Delays - no surcharges.' },
        { title: 'Meet & greet', duration: '15 min', desc: 'Our staff with a sign past customs. Coffee, baggage trolley.' },
        { title: 'EES & officers', duration: '20-60 min', desc: 'Translation, arrival forms, especially with kids.' },
        { title: 'Transfer', duration: '30-90 min', desc: 'Chopin → centre 25 min, Modlin → centre 60 min, Wrocław → centre 20 min.' },
        { title: 'Move-in', duration: '30-60 min', desc: 'Owner meeting, keys, tenancy addenda, heating and water check.' },
        { title: 'Comfort', duration: '60 min', desc: 'Lidl groceries, pharmacy, lock and Wi-Fi briefing.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Minimum - flight details.',
      items: [
        'Flight number and date',
        'Passport (photo/scan) - for sign and EES',
        'Move-in address and owner contact',
        'Number of pax and bags',
        "Children's ages (car seats)",
        'Mobile contact (WhatsApp)',
        'First-task list (SIM, bank, pharmacy, IKEA)',
        'Hotel booking number (if temporary)'
      ]
    },
    pricing: {
      title: 'Packages',
      subtitle: 'Fixed price. No surcharge for time (within 90-min wait).',
      items: [
        { label: 'Transfer only (sedan)', value: 'from 250 PLN', note: '1-4 pax · Chopin → centre' },
        { label: 'Transfer + check-in', value: 'from 450 PLN', note: 'Staff accompaniment to housing' },
        { label: 'Full first-day pack', value: 'from 850 PLN', note: 'Airport + housing + SIM + bank + Lidl' },
        { label: 'Family (5+)', value: 'from 1,200 PLN', note: 'Van + child seats + extra bags' }
      ],
      note: 'Base rates for Warsaw-Chopin. Modlin +50 PLN, night (00-06) +30%, weekends no surcharge.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Regulation (EU) 2017/2226 - EES',
        'Schengen Implementing Convention (90/180 rule)',
        'Foreigners Act of 12 December 2013',
        'Road Transport Act of 6 September 2001',
        'EU Visa Code (Reg. 810/2009)'
      ]
    },
    faq: [
      { q: 'What is EES?', a: 'Entry/Exit System - pan-EU biometric border. From 12 October 2025 non-EU travellers give fingerprints and photo on first entry. Border processing is now 5-10 min vs. 30 s. We accompany you through it.' },
      { q: 'Modlin / Wrocław?', a: 'All Polish airports. Modlin → centre 60 min (350 PLN), Wrocław → centre 20 min (180 PLN).' },
      { q: 'Delayed flight?', a: 'FlightAware monitoring. Delay up to 6h - no surcharge. Cancellation - reschedule or 80% refund.' },
      { q: 'Unaccompanied minor (UMNR)?', a: 'Yes - staff accredited by LOT, Ryanair, Wizz Air. Pre-issued parental authorisations required.' },
      { q: "What's in the full first-day pack?", a: 'Airport meet + EES support + sedan transfer + apartment check-in + Plus 50 GB SIM + 30-min bank visit (Pekao/mBank) + 200 PLN Lidl run + 15-page guide. 5-6 hours total.' },
      { q: 'Card payment?', a: 'Visa, Mastercard, Apple Pay, Google Pay, BLIK. VAT-23% invoice for Sp. z o.o. business trips. 50/50 split.' },
      { q: 'Just a taxi?', a: 'Basic sedan 1-4 pax - from 250 PLN out of Chopin. 30-40% cheaper than Bolt/Uber at peak with no cancellation risk. Van 5-8 pax from 380 PLN.' }
    ],
    related: ['wyszukiwanie-mieszkania', 'tlumacz-na-wizyty', 'zaproszenia'],
    ctaTitle: 'Meet you on arrival day',
    ctaSubtitle: 'Free planning: send your flight - confirmation within an hour. We wait with a sign past customs.'
  },
  tr: {
    slug: 'odbior-z-lotniska',
    group: 'relocation',
    icon: 'home',
    badge: 'Chopin · Modlin · Krakow-Balice · Wrocław',
    title: 'Havalimanından karşılama',
    subtitle: 'Chopin / Modlin / Krakow-Balice transferi',
    lead: 'Tanımadığınız bir ülkeye iniş - stres demektir. Lehçe bilmeden, çocukla, valizlerle ve yerel düzeni tanımadan. LegalWin geliş kapısında LegalWin tabelasıyla sizi karşılar, yeni EES (Entry/Exit System) kuralları altında pasaport kontrolünden geçmenize yardım eder, business veya aile sınıfı transfer organize eder ve ilk gün - yerleşim, SIM kart, market, ulaşım ödemeleri brifingi sunar. Bu sıradan bir taksi değil, Polonya\'daki ilk gününüze profesyonel eşliktir.',
    facts: [
      { label: 'Çalıştığımız havalimanları', value: '6 havalimanı', note: 'Chopin, Modlin, Krakow, Gdansk, Wrocław, Poznań' },
      { label: 'Bekleme süresi', value: '90 dakikaya kadar', note: 'ücretsiz, sonrası +50 PLN/saat' },
      { label: 'EES kontrolü', value: '2025\'ten beri', note: 'biyometri + 90/180 kuralı' },
      { label: 'Ücret', value: '250 PLN\'den', note: 'sedan · sabit fiyat · 1-4 yolcu' }
    ],
    grounds: {
      title: 'Karşılamada neler yapıyoruz',
      subtitle: 'Paket ihtiyaçlarınıza göre özelleştirilir - basit taksiden tam günlük eşliğe kadar.',
      items: [
        { title: 'Tabelalı karşılama', desc: 'Personelimiz LegalWin tabelasıyla geliş kapısında bekler. EES pasaport kontrolünde, sınır görevlilerinin sorularının çevirisinde ve bavul aramada yardımcı olur.' },
        { title: 'EES - yeni biyometrik kurallar', desc: 'Ekim 2025\'ten itibaren AB dışı vatandaşlar için girişte parmak izi ve fotoğraf. 90/180 kuralını anlatıyor, geçişlerde sorun yaşamamanıza yardımcı oluyoruz.' },
        { title: 'Konuta transfer', desc: '1-4 yolcu için Mercedes E veya Skoda Superb sedan; 5-8 yolcu için Vito minivan. Talep üzerine çocuk koltuğu ücretsiz.' },
        { title: 'Daireye yerleşim', desc: 'Mülk sahibiyle buluşma, envanter kontrolü, umowy najmu imzası (önceden imzalanmadıysa), durumun fotoğrafla belgelenmesi.' },
        { title: 'Geliş günü SIM kart', desc: 'Plus / Play / T-Mobile - 50 GB ve Polonya numarası. Pasaportla havalimanında veya ilk mağazada hazırlıyoruz.' },
        { title: 'İlk hafta rehberi', desc: '15 sayfalık kılavuz: ulaşım ödemesi (mObywatel + Jakdojade), bankamatik, Lidl-Biedronka, eczane, parklar - ilk hafta için gereken her şey.' },
        { title: 'İlk belgelerin imzası', desc: 'Umowy najmu imzasında, Pekao / mBank\'ta hesap açılışında, KOMPLEKS prepaid kart işleminde - tek günde - eşlik ediyoruz.' },
        { title: 'Çocuklar için eşlik', desc: 'Çocuklarınız varsa - ayrı zameldowanie wniosku ve konutunuza yakın klasy powitalne (uyum sınıfı) okul listesi.' }
      ]
    },
    timeline: {
      title: 'Karşılama akışı',
      subtitle: 'Uçuş bilgisi içeren ilk e-postadan sakin akşama yeni dairenizde.',
      steps: [
        { title: 'Rezervasyon', duration: '5 dk', desc: 'Uçuş ve tarih bilgisini gönderiyorsunuz. Fiyat ve şoför bilgisini iniş öncesi 24 saatte teyit ediyoruz.' },
        { title: 'Uçuş takibi', duration: 'otomatik', desc: 'Uçuşu FlightAware üzerinden izliyoruz. Gecikme olursa - şoför yeni saatte gelir, ek ücret yok.' },
        { title: 'Karşılama', duration: '15 dk', desc: 'Personelimiz pasaport kontrolü çıkışında tabelayla bekler. Gerekirse kahve, valiz arabası yardımı.' },
        { title: 'EES ve sınır görevlileri', duration: '20-60 dk', desc: 'Sınır görevlilerinin sorularını çeviriyor, geliş formunu doldurmaya yardım ediyoruz. Küçük çocuklarla seyahatte çok değerli.' },
        { title: 'Konuta yolculuk', duration: '30-90 dk', desc: 'Havalimanına bağlı: Chopin → merkez 25 dk, Modlin → merkez 60 dk, Wrocław → merkez 20 dk.' },
        { title: 'Yerleşim', duration: '30-60 dk', desc: 'Mülk sahibiyle buluşma, anahtar teslimi, umowa najmu eklerinin imzası, ısıtma ve su kontrolü.' },
        { title: 'Temel konfor', duration: '60 dk', desc: 'İlk 2 günün alışverişi için Lidl, gerekirse eczane. Şifreli kilidin ve Wi-Fi\'nin nasıl çalıştığını anlatıyoruz.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Asgari - uçuş bilgileri. Geri kalanı rezervasyon sırasında toplanır.',
      items: [
        'Uçuş numarası ve geliş tarihi',
        'Pasaport (fotoğraf veya tarama) - tabela ve kontrol için',
        'Yerleşim adresi ve mülk sahibi / acente iletişim bilgisi',
        'Yolcu ve bavul sayısı (araç seçimi için)',
        'Çocukların yaşı (çocuk koltuğu için)',
        'WhatsApp iletişim numarası',
        'İlk gün görev listesi (SIM, banka, eczane, IKEA)',
        'Otel rezervasyon numarası (geçici konaklama varsa)'
      ]
    },
    pricing: {
      title: 'Paket fiyatları',
      subtitle: 'Sabit ücret. Süre için ek ödeme yok (90 dakika bekleme dahil).',
      items: [
        { label: 'Yalnızca transfer (sedan)', value: '250 PLN\'den', note: '1-4 yolcu · Chopin → Varşova merkez' },
        { label: 'Transfer + yerleşim', value: '450 PLN\'den', note: 'Konuta kadar personel eşliği' },
        { label: 'Tam ilk gün paketi', value: '850 PLN\'den', note: 'Havalimanı + konut + SIM + banka + Lidl' },
        { label: 'Aile paketi (5+ kişi)', value: '1.200 PLN\'den', note: 'Minivan + çocuk koltukları + ek bavul' }
      ],
      note: 'Belirtilen tarifeler Warszawa-Chopin için temel fiyatlardır. Modlin → merkez +50 PLN, gece tarifesi (00:00-06:00) +%30, hafta sonu / bayramlarda ek ücret yok.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        '(AB) 2017/2226 sayılı Tüzük - EES (Entry/Exit System)',
        'Schengen Anlaşması Uygulama Sözleşmesi (90/180 günlük kural)',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Yabancılar Kanunu)',
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (Karayolu Taşımacılığı Kanunu - yolcu taşımacılığı)',
        'AB Vize Kodeksi (810/2009 Tüzüğü)'
      ]
    },
    faq: [
      { q: 'EES nedir, geliş için ne değişiyor?', a: 'Entry/Exit System (Giriş / Çıkış Sistemi) - AB çapında biyometrik giriş/çıkış sistemi. 12 Ekim 2025\'ten itibaren tüm AB dışı vatandaşlar ilk girişte parmak izi ve fotoğraf veriyor. Sınır geçişi 30 saniyeden 5-10 dakikaya çıktı. Sizi prosedüre hazırlıyor, pasaport kontrolünden birlikte geçiyoruz.' },
      { q: 'Modlin\'den veya Wrocław\'dan karşılama yapılır mı?', a: 'Evet, Polonya\'nın tüm havalimanlarıyla çalışıyoruz: Warszawa-Chopin (WAW), Warszawa-Modlin (WMI), Krakow-Balice (KRK), Gdansk (GDN), Wrocław (WRO), Poznań (POZ), Katowice (KTW). Modlin → Varşova merkez - 60 dk (350 PLN), Wrocław havalimanı → merkez - 20 dk (180 PLN).' },
      { q: 'Uçuş gecikirse veya iptal olursa?', a: 'Rezervasyon anından itibaren FlightAware üzerinden uçuşu izliyoruz. 6 saate kadar gecikme - ek ücret yok, şoför yeni saatte yola çıkar. İptal durumunda - karşılamayı yeni uçuşa erteliyor veya ödemenin %80\'ini iade ediyoruz.' },
      { q: 'Tek başına seyahat eden çocuğu (UMNR) alabilir misiniz?', a: 'Evet. Havayolları (LOT, Ryanair, Wizz Air) tarafından akredite, UMNR (refakatsiz çocuk) karşılayabilen personelimiz var. Önceden hazırlanmış ebeveyn vekaletnamesi ve pasaport kopyaları gerekir.' },
      { q: '"Tam ilk gün paketi" neyi içeriyor?', a: 'Havalimanında karşılama + EES rehberliği + sedanla konuta transfer + mülk sahibiyle yerleşim + Plus 50 GB SIM kart + bankada 30 dakikalık ziyaret (Pekao / mBank) ve hesap açılışı + Lidl\'de 200 PLN\'lik market alışverişi + 15 sayfalık rehber. Geliş günü toplam 5-6 saat.' },
      { q: 'Kartla ödeme kabul ediyor musunuz?', a: 'Evet. Visa, Mastercard, Apple Pay, Google Pay, BLIK. İş seyahatleri için Sp. z o.o. adına %23 VAT\'lı fatura kesebiliyoruz. Ödeme rezervasyonda %50, transfer sonrası %50.' },
      { q: 'Sadece taksi istiyorum, eşlik gerekli değil', a: 'Tabii. 1-4 yolcu için temel sedan transfer Chopin\'den 250 PLN\'den başlar. Bu, yoğun saatlerde Bolt/Uber\'den %30-40 daha ucuz ve iptal riski yok. 5-8 yolcu için minivan 380 PLN\'den.' }
    ],
    related: ['wyszukiwanie-mieszkania', 'tlumacz-na-wizyty', 'zaproszenia'],
    ctaTitle: 'Geliş gününde karşılıyoruz',
    ctaSubtitle: 'Ücretsiz planlama: uçuş bilginizi gönderin - 1 saat içinde saat ve fiyatı teyit ediyoruz. Geliş kapısında tabelayla bekliyoruz.'
  },
  uk: {
    slug: 'odbior-z-lotniska',
    group: 'relocation',
    icon: 'home',
    badge: 'Chopin · Modlin · Krakow-Balice · Wrocław',
    title: 'Зустріч в аеропорту',
    subtitle: 'Трансфер із Chopin / Modlin / Krakow-Balice',
    lead: 'Приліт у незнайому країну — стрес. Без польської мови, з дітьми, валізами та без знання місцевих реалій. LegalWin зустрічає вас у зоні прильоту з власною табличкою, допомагає пройти паспортний контроль для іноземців за новими правилами EES (Entry/Exit System), організовує трансфер бізнес- або сімейного класу, а в перший день — заселення, SIM-картку, продукти, інструктаж щодо оплати транспорту. Це не таксі — це професійний супровід першого дня в Польщі.',
    facts: [
      { label: 'Доступні аеропорти', value: '6 аеропортів', note: 'Chopin, Modlin, Krakow, Gdansk, Wrocław, Poznań' },
      { label: 'Час очікування', value: 'до 90 хв', note: 'безкоштовно, далі — +50 PLN/год' },
      { label: 'EES контроль', value: 'з 2025', note: 'біометрія + правило 90/180' },
      { label: 'Вартість', value: 'від 250 PLN', note: 'седан · фікс. ціна · 1–4 пас.' }
    ],
    grounds: {
      title: 'Що входить у зустріч',
      subtitle: 'Пакет налаштовується під ваші потреби — від простого таксі до повного дня супроводу.',
      items: [
        { title: 'Зустріч із табличкою', desc: 'Наш співробітник із табличкою LegalWin у зоні прильоту. Допоможе з паспортним контролем (EES), перекладом запитань pograniczników, пошуком багажу.' },
        { title: 'EES — нові біометричні правила', desc: 'З жовтня 2025 для не-ЄС громадян — відбитки пальців і фото на в’їзді. Пояснимо правило 90/180 і допоможемо уникнути проблем із переїздами.' },
        { title: 'Трансфер до житла', desc: 'Седан Mercedes E / Skoda Superb для 1–4 пасажирів; мінівен Vito для 5–8. Дитяче крісло — безкоштовно на запит.' },
        { title: 'Заселення в квартиру', desc: 'Зустріч із власником, перевірка інвентарю, підписання umowy najmu (якщо ще не підписана), фотофіксація стану.' },
        { title: 'SIM-картка в день прильоту', desc: 'Plus / Play / T-Mobile з лімітом 50 GB і польським номером. Оформлюємо за паспортом прямо в аеропорту або в першому салоні.' },
        { title: 'Перша інструкція', desc: '15-сторінковий гід: оплата транспорту (mObywatel + Jakdojade), bankomat, Lidl-Biedronka, Apteka, лісові стежки — усе, що потрібно у перший тиждень.' },
        { title: 'Переклад перших документів', desc: 'Допомагаємо підписати umowę najmu, відкрити рахунок у Pekao / mBank, оформити prepaid-картку KOMPLEKS — за один день.' },
        { title: 'Супровід дітей', desc: 'Якщо їдуть діти — окремий wniosek про zameldowanie та список szkół powitalnych поруч із житлом.' }
      ]
    },
    timeline: {
      title: 'Як проходить зустріч',
      subtitle: 'Від першого листа з рейсом до спокійного вечора в новій квартирі.',
      steps: [
        { title: 'Бронювання', duration: '5 хв', desc: 'Надсилаєте рейс і дату прильоту. Підтверджуємо вартість і передаємо дані водія за 24 години до вильоту.' },
        { title: 'Моніторинг рейсу', duration: 'auto', desc: 'Відстежуємо рейс через FlightAware. Якщо затримка — водій виїжджає у новий час, доплат немає.' },
        { title: 'Приліт і зустріч', duration: '15 хв', desc: 'Наш співробітник із табличкою чекає біля виходу паспортного контролю. Кава за потреби, допомога з візком.' },
        { title: 'EES та pogranicznicy', duration: '20–60 хв', desc: 'Пояснюємо запитання прикордонникам, допомагаємо заповнити форму прибуття, перекладаємо. Особливо важливо з маленькими дітьми.' },
        { title: 'Поїздка до житла', duration: '30–90 хв', desc: 'Залежить від аеропорту: Chopin → центр 25 хв, Modlin → центр 60 хв, Wrocław → центр 20 хв.' },
        { title: 'Заселення', duration: '30–60 хв', desc: 'Зустріч із власником, передача ключів, підписання dodatków до umowy najmu, перевірка опалення та води.' },
        { title: 'Базовий комфорт', duration: '60 хв', desc: 'Заїжджаємо до Lidl за продуктами на перші 2 дні, до аптеки — за потреби. Пояснюємо, як працює кодовий замок і Wi-Fi.' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Мінімум — дані рейсу. Решта збирається при бронюванні.',
      items: [
        'Номер рейсу та дата прильоту',
        'Паспорт (фото або скан) — для табличок і контролю',
        'Адреса заселення та контакти власника / агента',
        'Кількість пасажирів і багажу (для добору авто)',
        'Вік дітей (для дитячих крісел)',
        'Контактний мобільний (WhatsApp)',
        'Список перших завдань (SIM, банк, аптека, IKEA)',
        'Номер броні в готелі (якщо тимчасове житло)'
      ]
    },
    pricing: {
      title: 'Вартість пакетів',
      subtitle: 'Фіксована ціна. Доплат за час немає (у межах 90 хв очікування).',
      items: [
        { label: 'Лише трансфер (седан)', value: 'від 250 PLN', note: '1–4 пас. · Chopin → Warszawa centrum' },
        { label: 'Трансфер + заселення', value: 'від 450 PLN', note: 'З нашим супроводом до житла' },
        { label: 'Повний пакет першого дня', value: 'від 850 PLN', note: 'Аеропорт + житло + SIM + банк + Lidl' },
        { label: 'Сімейний пакет (5+)', value: 'від 1 200 PLN', note: 'Мінівен + дитячі крісла + extra багаж' }
      ],
      note: 'Зазначено базові тарифи для Warszawa-Chopin. Modlin → centrum +50 PLN, нічні тарифи (00:00–06:00) +30%, вихідні/свята без націнки.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Rozporządzenie (UE) 2017/2226 — EES (Entry/Exit System)',
        'Konwencja wykonawcza do Układu z Schengen (правило 90/180 днів)',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach',
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (przewóz osób)',
        'Kodeks Wizowy UE (Rozporządzenie 810/2009)'
      ]
    },
    faq: [
      { q: 'Що таке EES і як це змінює приліт?', a: 'Entry/Exit System — загальноєвропейська біометрична система в’їзду/виїзду. З 12 жовтня 2025 року всі не-ЄС громадяни при першому в’їзді здають відбитки пальців і фото. Термін проходження кордону зріс із 30 секунд до 5–10 хвилин. Готуємо вас до процедури та проходимо паспортний контроль разом.' },
      { q: 'Чи можна зустріти з Modlin або Wrocław?', a: 'Так, працюємо з усіма аеропортами Польщі: Warszawa-Chopin (WAW), Warszawa-Modlin (WMI), Krakow-Balice (KRK), Gdansk (GDN), Wrocław (WRO), Poznań (POZ), Katowice (KTW). Modlin → Warszawa centrum — 60 хв (350 PLN), Wrocław airport → centrum — 20 хв (180 PLN).' },
      { q: 'Що, якщо рейс затримано або скасовано?', a: 'Моніторимо рейс через FlightAware з моменту бронювання. Затримка до 6 годин — без доплати, водій виїжджає у новий час. Скасування — переносимо зустріч на новий рейс або повертаємо 80% оплати.' },
      { q: 'Чи можна забрати дитину саму (UMNR)?', a: 'Так. У нас є співробітники, акредитовані авіалініями (LOT, Ryanair, Wizz Air) для зустрічі UMNR (несупроводжуваних дітей). Потрібні заздалегідь оформлені довіреності від батьків і копії паспортів.' },
      { q: 'Що входить у «повний пакет першого дня»?', a: 'Зустріч в аеропорту + проведення через EES + трансфер седаном до житла + заселення з власником + SIM-картка Plus 50 GB + 30-хвилинний візит у банк (Pekao / mBank) для оформлення рахунку + закупка в Lidl на 200 PLN + 15-сторінковий гід. Усього 5–6 годин у день прильоту.' },
      { q: 'Приймаєте оплату карткою?', a: 'Так. Visa, Mastercard, Apple Pay, Google Pay, BLIK. Можемо виставити інвойс на Sp. z o.o. з VAT 23% — для бізнес-відряджень. Оплата 50% при бронюванні, 50% після трансферу.' },
      { q: 'А якщо я просто хочу таксі, без супроводу?', a: 'Звичайно. Базовий трансфер седаном 1–4 пас. — від 250 PLN із Chopin. Це вже на 30–40% дешевше за Bolt/Uber у години пік і без ризику скасування. Мінівен для 5–8 пасажирів — від 380 PLN.' }
    ],
    related: ['wyszukiwanie-mieszkania', 'tlumacz-na-wizyty', 'zaproszenia'],
    ctaTitle: 'Зустрінемо в день прильоту',
    ctaSubtitle: 'Безкоштовне планування: надсилайте рейс — підтвердимо час і вартість протягом години. Зустрінемо біля виходу з табличкою.'
  }
};

export default odbiorZLotniska;
