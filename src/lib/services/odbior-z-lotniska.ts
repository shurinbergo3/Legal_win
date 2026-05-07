import type { ServiceEntry } from './types';

const odbiorZLotniska: ServiceEntry = {
  ru: {
    slug: 'odbior-z-lotniska',
    group: 'relocation',
    icon: 'home',
    badge: 'Chopin · Modlin · Krakow-Balice · Wrocław',
    title: 'Встреча в аэропорту',
    subtitle: 'Трансфер из Chopin / Modlin / Krakow-Balice',
    lead: 'Прилёт в незнакомую страну — стресс. Без польского языка, с детьми, чемоданами и без знания местных реалий. LegalWin встречает вас в зоне прилёта со своим табличкой, помогает пройти паспортный контроль для иностранцев на новых правилах EES (Entry/Exit System), организует трансфер бизнес- или семейного класса, а в первый день — заселение, SIM-карту, продукты, инструктаж по оплате транспорта. Это не такси — это профессиональное сопровождение первого дня в Польше.',
    facts: [
      { label: 'Доступные аэропорты', value: '6 аэропортов', note: 'Chopin, Modlin, Krakow, Gdansk, Wrocław, Poznań' },
      { label: 'Время ожидания', value: 'до 90 мин', note: 'free, после — +50 PLN/час' },
      { label: 'EES контроль', value: 'с 2025', note: 'биометрия + 90/180 правило' },
      { label: 'Стоимость', value: 'от 250 PLN', note: 'седан · фикс. цена · 1–4 пасс.' }
    ],
    grounds: {
      title: 'Что входит в встречу',
      subtitle: 'Пакет настраивается под ваши потребности — от просто такси до полного дня сопровождения.',
      items: [
        { title: 'Встреча с табличкой', desc: 'Наш сотрудник с табличкой LegalWin в зоне прилёта. Поможет с паспортным контролем (EES), переводом вопросов pograniczników, поиском багажа.' },
        { title: 'EES — новые биометрические правила', desc: 'С октября 2025 для не-ЕС граждан — отпечатки пальцев и фото на въезде. Объясним правило 90/180 и поможем избежать переплётов с переездами.' },
        { title: 'Трансфер до жилья', desc: 'Седан Mercedes E / Skoda Superb для 1–4 пассажиров; минивэн Vito для 5–8. Детское кресло — бесплатно по запросу.' },
        { title: 'Заселение в квартиру', desc: 'Встреча с собственником, проверка инвентаря, подписание umowy najmu (если ещё не подписана), фото-фиксация состояния.' },
        { title: 'SIM-карта в день прилёта', desc: 'Plus / Play / T-Mobile с лимитом 50 GB и польским номером. Оформляем по паспорту прямо в аэропорту или в первом же салоне.' },
        { title: 'Первая инструкция', desc: '15-страничный гид: оплата транспорта (mObywatel + Jakdojade), bankomat, Lidl-Biedronka, Apteka, лесные тропы — всё, что нужно в первую неделю.' },
        { title: 'Перевод первых документов', desc: 'Помогаем подписать umowę najmu, открыть счёт в Pekao / mBank, оформить prepaid-карту KOMPLEKS — за один день.' },
        { title: 'Сопровождение детей', desc: 'Если едут дети — отдельный wniosek о zameldowaniu и список школ powitalnych рядом с жильём.' }
      ]
    },
    timeline: {
      title: 'Как проходит встреча',
      subtitle: 'От первого письма с рейсом до спокойного вечера в новой квартире.',
      steps: [
        { title: 'Бронь', duration: '5 мин', desc: 'Высылаете рейс и дату прилёта. Подтверждаем стоимость и передаём данные водителя за 24 часа до вылета.' },
        { title: 'Мониторинг рейса', duration: 'auto', desc: 'Отслеживаем рейс по FlightAware. Если задержка — водитель выезжает в новое время, доплат нет.' },
        { title: 'Прилёт и встреча', duration: '15 мин', desc: 'Наш сотрудник с табличкой ждёт у выхода паспортного контроля. Кофе при необходимости, помощь с тележкой.' },
        { title: 'EES и pogranicznicy', duration: '20–60 мин', desc: 'Объясняем вопросы погранцам, помогаем заполнить форму прибытия, переводим. Особенно важно с маленькими детьми.' },
        { title: 'Поездка до жилья', duration: '30–90 мин', desc: 'Зависит от аэропорта: Chopin → центр 25 мин, Modlin → центр 60 мин, Wrocław → центр 20 мин.' },
        { title: 'Заселение', duration: '30–60 мин', desc: 'Встреча с собственником, передача ключей, подписание dodatków к umowie najmu, проверка отопления и воды.' },
        { title: 'Базовый комфорт', duration: '60 мин', desc: 'Заезжаем в Lidl за продуктами на первые 2 дня, аптеку — если нужно. Объясняем, как работает кодовый замок и Wi-Fi.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Минимум — данные рейса. Остальное собирается при бронировании.',
      items: [
        'Номер рейса и дата прилёта',
        'Паспорт (фото или скан) — для табличек и контроля',
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
        { label: 'Только трансфер (седан)', value: 'от 250 PLN', note: '1–4 пасс. · Chopin → Warszawa centrum' },
        { label: 'Трансфер + заселение', value: 'от 450 PLN', note: 'С нашим сопровождением до жилья' },
        { label: 'Полный пакет первого дня', value: 'от 850 PLN', note: 'Аэропорт + жильё + SIM + банк + Lidl' },
        { label: 'Семейный пакет (5+)', value: 'от 1 200 PLN', note: 'Минивэн + детские кресла + extra багаж' }
      ],
      note: 'Указаны базовые тарифы для Warszawa-Chopin. Modlin → centrum +50 PLN, ночные тарифы (00:00–06:00) +30%, выходные/праздники без наценки.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Rozporządzenie (UE) 2017/2226 — EES (Entry/Exit System)',
        'Konwencja wykonawcza do Układu z Schengen (90/180 days rule)',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach',
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (przewóz osób)',
        'Kodeks Wizowy UE (Rozporządzenie 810/2009)'
      ]
    },
    faq: [
      { q: 'Что такое EES и как это меняет прилёт?', a: 'Entry/Exit System — общеевропейская биометрическая система въезда/выезда. С 12 октября 2025 года все не-ЕС граждане при первом въезде сдают отпечатки пальцев и фото. Срок прохождения границы вырос с 30 секунд до 5–10 минут. Мы готовим вас к процедуре и проходим паспортный контроль вместе.' },
      { q: 'Можно ли встретить из Modlin или Wrocław?', a: 'Да, работаем со всеми аэропортами Польши: Warszawa-Chopin (WAW), Warszawa-Modlin (WMI), Krakow-Balice (KRK), Gdansk (GDN), Wrocław (WRO), Poznań (POZ), Katowice (KTW). Modlin → Warszawa centrum — 60 мин (350 PLN), Wrocław airport → centrum — 20 мин (180 PLN).' },
      { q: 'Что если рейс задержан или отменён?', a: 'Мониторим рейс по FlightAware с момента бронирования. Задержка до 6 часов — без доплаты, водитель выезжает в новое время. Отмена — переносим встречу на новый рейс или возвращаем 80% оплаты.' },
      { q: 'Можно ли забрать ребёнка одного (UMNR)?', a: 'Да. У нас есть сотрудники, аккредитованные авиалиниями (LOT, Ryanair, Wizz Air) для встречи UMNR (несопровождаемых детей). Нужны заранее оформленные доверенности от родителей и копии паспортов.' },
      { q: 'Что входит в "полный пакет первого дня"?', a: 'Встреча в аэропорту + проводка через EES + трансфер на седане до жилья + заселение с собственником + SIM-карта Plus 50 GB + 30-минутный визит в банк (Pekao / mBank) для оформления счёта + закупка в Lidl на 200 PLN + 15-страничный гид. Всего 5–6 часов в день прилёта.' },
      { q: 'Принимаете оплату картой?', a: 'Да. Visa, Mastercard, Apple Pay, Google Pay, BLIK. Можем выставить инвойс на Sp. z o.o. с VAT 23% — для бизнес-командировок. Оплата 50% при бронировании, 50% после трансфера.' },
      { q: 'А если я просто хочу такси, без сопровождения?', a: 'Конечно. Базовый трансфер седан 1–4 пасс. — от 250 PLN из Chopin. Это уже на 30–40% дешевле Bolt/Uber в часы пик и без риска отмены. Минивэн для 5–8 пассажиров — от 380 PLN.' }
    ],
    related: ['wyszukiwanie-mieszkania', 'tlumacz-na-wizyty', 'zaproszenia'],
    ctaTitle: 'Встретим в день прилёта',
    ctaSubtitle: 'Бесплатное планирование: высылайте рейс — подтвердим время и стоимость в течение часа. Встретим у выхода с табличкой.'
  },
  pl: {
    slug: 'odbior-z-lotniska',
    group: 'relocation',
    icon: 'home',
    badge: 'Chopin · Modlin · Krakow-Balice · Wrocław',
    title: 'Odbiór z lotniska',
    subtitle: 'Transfer z Chopin / Modlin / Krakow-Balice',
    lead: 'Przylot do nieznanego kraju to stres. Bez polskiego, z dziećmi, walizkami, bez znajomości realiów. LegalWin spotyka w strefie przylotów z tabliczką, pomaga przejść kontrolę EES, organizuje transfer i pierwszy dzień: zameldowanie, SIM, zakupy, instruktaż. To nie tylko taxi — to profesjonalne wsparcie pierwszego dnia w Polsce.',
    facts: [
      { label: 'Lotniska', value: '6 lotnisk', note: 'Chopin, Modlin, Krakow, Gdańsk, Wrocław, Poznań' },
      { label: 'Czas oczekiwania', value: 'do 90 min', note: 'gratis, potem +50 PLN/h' },
      { label: 'EES od 2025', value: 'biometria', note: '+ zasada 90/180' },
      { label: 'Cena', value: 'od 250 PLN', note: 'sedan · stała cena · 1–4 os.' }
    ],
    grounds: {
      title: 'Co wchodzi',
      subtitle: 'Pakiet konfigurowalny — od taxi po pełen dzień asysty.',
      items: [
        { title: 'Spotkanie z tabliczką', desc: 'Nasz pracownik z tabliczką LegalWin. Pomoc z kontrolą EES, tłumaczenie pograniczników, bagaż.' },
        { title: 'EES — nowe zasady biometrii', desc: 'Od 10/2025 dla obywateli spoza UE — odciski i zdjęcie. Wyjaśniamy 90/180.' },
        { title: 'Transfer', desc: 'Sedan Mercedes E / Skoda Superb 1–4 os.; van Vito 5–8 os. Foteliki dziecięce gratis.' },
        { title: 'Zameldowanie w mieszkaniu', desc: 'Spotkanie z właścicielem, sprawdzenie wyposażenia, podpisanie umowy najmu, dokumentacja.' },
        { title: 'SIM w dniu przylotu', desc: 'Plus / Play / T-Mobile z 50 GB i polskim numerem. Z paszportem na lotnisku lub w salonie.' },
        { title: 'Pierwszy przewodnik', desc: '15-stronicowa instrukcja: bilety (mObywatel + Jakdojade), bankomat, Lidl, apteka, transport.' },
        { title: 'Pierwsze dokumenty', desc: 'Asysta przy najmie, koncie w Pekao/mBank, karcie KOMPLEKS — w jeden dzień.' },
        { title: 'Dzieci', desc: 'Wniosek o zameldowanie, lista szkół powitalnych obok mieszkania.' }
      ]
    },
    timeline: {
      title: 'Przebieg',
      subtitle: 'Od maila z lotem do spokojnego wieczoru w mieszkaniu.',
      steps: [
        { title: 'Rezerwacja', duration: '5 min', desc: 'Lot, data. Potwierdzenie ceny i danych kierowcy 24 h przed.' },
        { title: 'Monitoring lotu', duration: 'auto', desc: 'FlightAware. Opóźnienie — bez dopłat, kierowca dostosowuje czas.' },
        { title: 'Spotkanie', duration: '15 min', desc: 'Nasz pracownik z tabliczką po kontroli paszportowej. Kawa, wózek z bagażem.' },
        { title: 'EES i pogranicznicy', duration: '20–60 min', desc: 'Tłumaczenie pograniczników, formularz przybycia, asysta z dziećmi.' },
        { title: 'Przejazd', duration: '30–90 min', desc: 'Chopin → centrum 25 min, Modlin → centrum 60 min, Wrocław → centrum 20 min.' },
        { title: 'Zameldowanie', duration: '30–60 min', desc: 'Klucze, aneksy do umowy, sprawdzenie ogrzewania i wody.' },
        { title: 'Komfort', duration: '60 min', desc: 'Lidl na zakupy, apteka, instrukcja zamka i Wi-Fi.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Minimum — dane lotu.',
      items: [
        'Numer lotu i data',
        'Paszport (foto/skan) — do tabliczki i kontroli',
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
        { label: 'Sam transfer (sedan)', value: 'od 250 PLN', note: '1–4 os. · Chopin → centrum' },
        { label: 'Transfer + zameldowanie', value: 'od 450 PLN', note: 'Z naszym pracownikiem do mieszkania' },
        { label: 'Pełen pierwszy dzień', value: 'od 850 PLN', note: 'Lotnisko + mieszkanie + SIM + bank + Lidl' },
        { label: 'Pakiet rodzinny (5+)', value: 'od 1 200 PLN', note: 'Van + foteliki + extra bagaż' }
      ],
      note: 'Bazowo dla Chopin. Modlin +50 PLN, nocne (00–06) +30%, weekendy bez dopłat.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Rozporządzenie (UE) 2017/2226 — EES',
        'Konwencja wykonawcza do Układu z Schengen (90/180)',
        'Ustawa z 12 grudnia 2013 r. o cudzoziemcach',
        'Ustawa z 6 września 2001 r. o transporcie drogowym',
        'Kodeks Wizowy UE (Rozp. 810/2009)'
      ]
    },
    faq: [
      { q: 'Co to EES?', a: 'Entry/Exit System — od 10/2025 odciski i zdjęcie spoza UE. Czas kontroli 5–10 min zamiast 30 s. Asystujemy.' },
      { q: 'Modlin / Wrocław?', a: 'Tak — wszystkie polskie lotniska. Modlin → centrum 60 min (350 PLN), Wrocław → centrum 20 min (180 PLN).' },
      { q: 'Opóźniony lot?', a: 'Monitoring FlightAware. Opóźnienie do 6 h — bez dopłat. Odwołany — przesunięcie lub 80% zwrotu.' },
      { q: 'Dziecko bez opieki (UMNR)?', a: 'Tak — prawnicy akredytowani w LOT, Ryanair, Wizz Air. Wymagane pełnomocnictwa rodziców.' },
      { q: 'Co w "pełnym dniu"?', a: 'Lotnisko + EES + transfer + zameldowanie + SIM Plus 50 GB + 30 min w banku + Lidl 200 PLN + przewodnik. 5–6 h.' },
      { q: 'Płatność kartą?', a: 'Visa, Mastercard, Apple Pay, Google Pay, BLIK. Faktura VAT 23%. 50/50 — przed i po.' },
      { q: 'Tylko taxi?', a: 'Sedan 1–4 os. od 250 PLN. 30–40% taniej niż Bolt/Uber w godzinach szczytu. Van 5–8 os. od 380 PLN.' }
    ],
    related: ['wyszukiwanie-mieszkania', 'tlumacz-na-wizyty', 'zaproszenia'],
    ctaTitle: 'Spotkamy w dniu przylotu',
    ctaSubtitle: 'Bezpłatne planowanie: prześlij lot — w godzinę odpowiedź. Czekamy z tabliczką po kontroli.'
  },
  en: {
    slug: 'odbior-z-lotniska',
    group: 'relocation',
    icon: 'home',
    badge: 'Chopin · Modlin · Krakow-Balice · Wrocław',
    title: 'Airport pickup',
    subtitle: 'Transfer from Chopin / Modlin / Krakow-Balice',
    lead: "Arriving in a foreign country is stressful. No Polish, kids, suitcases, no local context. LegalWin meets you at arrivals with a sign, helps you through new EES border control, arranges the transfer, and on day one — apartment check-in, SIM card, groceries, transport briefing. It's not just a taxi — it's legal handholding for your first day in Poland.",
    facts: [
      { label: 'Airports', value: '6 airports', note: 'Chopin, Modlin, Krakow, Gdansk, Wrocław, Poznań' },
      { label: 'Wait time', value: 'up to 90 min', note: 'free, then +50 PLN/hour' },
      { label: 'EES from 2025', value: 'biometrics', note: '+ 90/180 rule' },
      { label: 'Price', value: 'from 250 PLN', note: 'sedan · fixed · 1–4 pax' }
    ],
    grounds: {
      title: "What's included",
      subtitle: 'Configurable — from taxi to a full first-day handhold.',
      items: [
        { title: 'Sign meeting at arrivals', desc: 'LegalWin staff with a sign. Help with EES check, border-officer translation, baggage.' },
        { title: 'EES — new biometric rules', desc: 'From October 2025 non-EU travellers give fingerprints and photo. We brief you on 90/180.' },
        { title: 'Transfer to housing', desc: 'Mercedes E / Skoda Superb sedan for 1–4 pax; Vito van for 5–8. Child seats free on request.' },
        { title: 'Apartment check-in', desc: 'Meet owner, inventory check, sign tenancy, photo-document the state.' },
        { title: 'Same-day SIM', desc: 'Plus / Play / T-Mobile, 50 GB, Polish number. Done at airport or first store.' },
        { title: 'First-week guide', desc: '15-page guide: transit (mObywatel + Jakdojade), ATMs, Lidl/Biedronka, pharmacies, parks.' },
        { title: 'First documents', desc: 'Tenancy signing, Pekao/mBank account, KOMPLEKS prepaid card — all in one day.' },
        { title: 'Children', desc: 'Zameldowanie filing, list of welcome-class schools near your housing.' }
      ]
    },
    timeline: {
      title: 'How it runs',
      subtitle: 'From flight email to a calm evening in your new place.',
      steps: [
        { title: 'Booking', duration: '5 min', desc: 'Send flight and date. Confirm price and driver details 24h prior.' },
        { title: 'Flight monitoring', duration: 'auto', desc: 'FlightAware tracking. Delays — no surcharges.' },
        { title: 'Meet & greet', duration: '15 min', desc: 'Our staff with a sign past customs. Coffee, baggage trolley.' },
        { title: 'EES & officers', duration: '20–60 min', desc: 'Translation, arrival forms, especially with kids.' },
        { title: 'Transfer', duration: '30–90 min', desc: 'Chopin → centre 25 min, Modlin → centre 60 min, Wrocław → centre 20 min.' },
        { title: 'Move-in', duration: '30–60 min', desc: 'Owner meeting, keys, tenancy addenda, heating and water check.' },
        { title: 'Comfort', duration: '60 min', desc: 'Lidl groceries, pharmacy, lock and Wi-Fi briefing.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Minimum — flight details.',
      items: [
        'Flight number and date',
        'Passport (photo/scan) — for sign and EES',
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
        { label: 'Transfer only (sedan)', value: 'from 250 PLN', note: '1–4 pax · Chopin → centre' },
        { label: 'Transfer + check-in', value: 'from 450 PLN', note: 'Staff accompaniment to housing' },
        { label: 'Full first-day pack', value: 'from 850 PLN', note: 'Airport + housing + SIM + bank + Lidl' },
        { label: 'Family (5+)', value: 'from 1,200 PLN', note: 'Van + child seats + extra bags' }
      ],
      note: 'Base rates for Warsaw-Chopin. Modlin +50 PLN, night (00–06) +30%, weekends no surcharge.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Regulation (EU) 2017/2226 — EES',
        'Schengen Implementing Convention (90/180 rule)',
        'Foreigners Act of 12 December 2013',
        'Road Transport Act of 6 September 2001',
        'EU Visa Code (Reg. 810/2009)'
      ]
    },
    faq: [
      { q: 'What is EES?', a: 'Entry/Exit System — pan-EU biometric border. From 12 October 2025 non-EU travellers give fingerprints and photo on first entry. Border processing is now 5–10 min vs. 30 s. We accompany you through it.' },
      { q: 'Modlin / Wrocław?', a: 'All Polish airports. Modlin → centre 60 min (350 PLN), Wrocław → centre 20 min (180 PLN).' },
      { q: 'Delayed flight?', a: 'FlightAware monitoring. Delay up to 6h — no surcharge. Cancellation — reschedule or 80% refund.' },
      { q: 'Unaccompanied minor (UMNR)?', a: 'Yes — staff accredited by LOT, Ryanair, Wizz Air. Pre-issued parental authorisations required.' },
      { q: "What's in the full first-day pack?", a: 'Airport meet + EES support + sedan transfer + apartment check-in + Plus 50 GB SIM + 30-min bank visit (Pekao/mBank) + 200 PLN Lidl run + 15-page guide. 5–6 hours total.' },
      { q: 'Card payment?', a: 'Visa, Mastercard, Apple Pay, Google Pay, BLIK. VAT-23% invoice for Sp. z o.o. business trips. 50/50 split.' },
      { q: 'Just a taxi?', a: 'Basic sedan 1–4 pax — from 250 PLN out of Chopin. 30–40% cheaper than Bolt/Uber at peak with no cancellation risk. Van 5–8 pax from 380 PLN.' }
    ],
    related: ['wyszukiwanie-mieszkania', 'tlumacz-na-wizyty', 'zaproszenia'],
    ctaTitle: 'Meet you on arrival day',
    ctaSubtitle: 'Free planning: send your flight — confirmation within an hour. We wait with a sign past customs.'
  }
};

export default odbiorZLotniska;
