import type { ServiceEntry } from './types';

const zaproszenia: ServiceEntry = {
  ru: {
    slug: 'zaproszenia',
    group: 'relocation',
    icon: 'fingerprint',
    badge: 'Zaproszenie · виза D · Schengen',
    title: 'Электронные приглашения',
    subtitle: 'Zaproszenia для шенгенских и национальных виз',
    lead: 'Zaproszenie - официальное приглашение от польского физического или юридического лица, регистрируемое в Urzędzie Wojewódzkim. Используется для оформления визы Schengen C или национальной D в посольстве Польши за рубежом, когда у заявителя нет приглашения от работодателя или туристической брони. Работаем как приглашающая сторона: за 7-14 дней регистрируем zaproszenie, передаём оригинал курьером и сопровождаем визовую процедуру.',
    facts: [
      { label: 'Срок регистрации', value: '7-14 дней', note: 'wojewoda · standard' },
      { label: 'Госпошлина', value: '27 PLN', note: 'opłata skarbowa za zaproszenie' },
      { label: 'Действует', value: '12 мес', note: 'с даты внесения в реестр' },
      { label: 'Где регистрируется', value: 'Urząd Wojewódzki', note: 'по месту проживания приглашающего' }
    ],
    grounds: {
      title: 'Когда нужно zaproszenie',
      subtitle: 'Без zaproszenia консульство откажет, если у заявителя нет иного основания (umowa o pracę, gwarancja firmy, бронь отеля).',
      items: [
        { title: 'Виза D для долгого пребывания', desc: 'Национальная виза до 365 дней - для воссоединения семьи, ухода за родственником, визита партнёра. Через zaproszenie от резидента Польши.' },
        { title: 'Виза Schengen C - туристическая', desc: 'Краткосрочная до 90 дней. Когда у заявителя нет брони отеля - родственник или друг в Польше делает zaproszenie.' },
        { title: 'Деловая виза для контрагента', desc: 'Sp. z o.o. или JDG приглашает контрагента из СНГ - поставщика, клиента, делового партнёра. Регистрируется на фирму.' },
        { title: 'Учебный визит / стажировка', desc: 'ВУЗ или работодатель приглашает на стажировку до 6 месяцев - без отдельного zezwolenie na pracę.' },
        { title: 'Семейный визит', desc: 'Родственник в Польше приглашает родителей, детей, супруга, бабушку - для длительного пребывания.' },
        { title: 'Посещение тяжелобольного', desc: 'Срочный визит к больному родственнику - экспресс-zaproszenie за 3-5 дней с медсправкой.' },
        { title: 'Религиозный или культурный визит', desc: 'Для священнослужителей, артистов, спортсменов - регистрация через wniosek или wzór C.' },
        { title: 'Свадьба в Польше', desc: 'Жених/невеста приглашает партнёра для регистрации брака в USC - обычно D-виза с zaproszeniem.' }
      ]
    },
    timeline: {
      title: 'Как мы делаем zaproszenie',
      subtitle: 'От первого звонка до получения виз заявителем - обычно 4-8 недель.',
      steps: [
        { title: 'Консультация', duration: '30 мин', desc: 'Уточняем цель визита, степень родства, тип визы (C/D), сроки. Проверяем платёжеспособность приглашающего.' },
        { title: 'Wniosek o zaproszenie', duration: '1 день', desc: 'Заполняем wniosek с приложениями: titel prawny do mieszkania, выписки счёта, PIT-37 за прошлый год, KRS (для фирмы).' },
        { title: 'Подача в Urząd Wojewódzki', duration: '1 день', desc: 'Подаём через MOS v2.0 или физически. Опłата skarbowa 27 PLN с pełnomocnictwem 17 PLN.' },
        { title: 'Postępowanie wojewody', duration: '7-14 дней', desc: 'Wojewoda проверяет финансы приглашающего (минимум 515 PLN на гостя в месяц + жильё).' },
        { title: 'Внесение в реестр', duration: '1 день', desc: 'Zaproszenie получает уникальный номер и вносится в централизованный реестр zaproszeń (видим консулам).' },
        { title: 'Передача оригинала', duration: '3-7 дней', desc: 'Отправляем оригинал курьером DHL / Pocztą Polską в страну заявителя. Электронная копия - на email одновременно.' },
        { title: 'Визовое заявление', duration: '14-30 дней', desc: 'Заявитель идёт в консульство Польши с zaproszeniem + анкетой + документами. Консультация по списку - у нас.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас (приглашающего)',
      subtitle: 'От заявителя - отдельный пакет в посольстве.',
      items: [
        'Паспорт приглашающего (PESEL обязателен)',
        'Документ о праве на жильё: akt notarialny / умова найму / zaświadczenie o zameldowaniu',
        'Подтверждение дохода: PIT-37 за прошлый год, ZUS RMUA, выписки счёта за 3 мес.',
        'Минимальная сумма - 515 PLN/гость/месяц (200 EUR · приходится подтвердить)',
        'Обязательство покрыть расходы на возвращение приглашённого',
        'KRS-выписка (если приглашает фирма) + статут + KRK członka zarządu',
        'Список приглашённых с паспортными данными и степенью родства',
        'Заполненный wniosek o zaproszenie - готовим мы'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированная цена за zaproszenie. Госпошлины - отдельно.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · оценка шансов' },
        { label: 'Zaproszenie под ключ', value: 'от 600 PLN', note: 'Документы, wniosek, urząd, курьер' },
        { label: 'Срочное (3-5 дней)', value: 'от 950 PLN', note: 'Express tariff в urzędzie' },
        { label: 'Zaproszenie + сопровождение визы', value: 'от 1 200 PLN', note: 'С консультацией заявителя' }
      ],
      note: 'Указаны гонорары LegalWin. Госпошлина 27 PLN, pełnomocnictwo 17 PLN, курьер DHL ~120 PLN - отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (rozdz. 4 - zaproszenia)',
        'Rozporządzenie MSWiA w sprawie wzoru zaproszenia i wpisywania go do ewidencji',
        'Kodeks Wizowy UE (Rozporządzenie 810/2009)',
        'Konwencja wykonawcza do Układu z Schengen (zał. III - wymóg poświadczenia środków)',
        'Ustawa z dnia 16 listopada 2006 r. o opłacie skarbowej'
      ]
    },
    faq: [
      { q: 'Сколько денег нужно показать на счёте?', a: 'Минимум 515 PLN на каждого гостя в месяц + 200 PLN на дорогу обратно. На семью из 3 на месяц - около 1 850 PLN. Большинство wojewodów требуют выписки за 3 месяца с устойчивым остатком ≥ суммы расчёта.' },
      { q: 'Может ли zaproszenie сделать Sp. z o.o. без оборотов?', a: 'Сложно. Wojewoda (воевода) проверяет реальность фирмы - KRS, оборот по ZUS, наличие bilansu (баланса). Свежая фирма без deklaracji VAT-7 (декларации НДС) и сотрудников - обычно отказ. Лучше оформлять на физическое лицо или через прокачанную фирму.' },
      { q: 'Что если родственник не в Польше - zaproszenie из России можно?', a: 'Нет. Zaproszenie (приглашение) выдаёт только польский urząd (учреждение), и приглашающий должен иметь legalny pobyt w Polsce (легальное пребывание в Польше - PESEL, karta pobytu, гражданство). Из РФ можно только oświadczenie o zaproszeniu (заявление о приглашении, для бесплатной визы), но это не то.' },
      { q: 'Можно ли пригласить без степени родства?', a: 'Да - друг, партнёр, коллега, контрагент. Главное - подтвердить цель визита (личное знакомство, бизнес-встреча, мероприятие). Без чёткой цели wojewoda может отказать.' },
      { q: 'Сколько действует zaproszenie?', a: '12 месяцев с даты внесения в реестр. Заявитель должен подать визу в течение этого срока. Сама виза D даётся максимум на 365 дней. Schengen C - на тот срок, что zaproszenie позволяет.' },
      { q: 'Что делать, если получили отказ?', a: '14 дней на odwołanie do Szefa UdSC. Чаще всего отказы - за недостаточные финансы или сомнения в цели визита. Оспаривание занимает 30-60 дней. Делаем под ключ.' },
      { q: 'Виза по zaproszeniu даёт право на работу?', a: 'Нет. Zaproszenie ≠ zezwolenie na pracę. Для работы нужно отдельное разрешение от воеводы или Powiatowego Urzędu Pracy. Виза D с zaproszeniem - для пребывания, не для работы.' }
    ],
    related: ['odbior-z-lotniska', 'pomoc-w-zatrudnieniu', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Zaproszenie за 7-14 дней',
    ctaSubtitle: 'Бесплатная консультация: проверим финансы и подготовим пакет. От подписания договора до zaproszenia в реестре - обычно 7-14 рабочих дней.'
  },
  pl: {
    slug: 'zaproszenia',
    group: 'relocation',
    icon: 'fingerprint',
    badge: 'Zaproszenie · wiza D · Schengen',
    title: 'Zaproszenia elektroniczne',
    subtitle: 'Zaproszenia do wiz Schengen i krajowych',
    lead: 'Zaproszenie to oficjalny dokument zapraszający, rejestrowany w Urzędzie Wojewódzkim. Używany do uzyskania wizy Schengen C lub krajowej D, gdy aplikujący nie ma innego zaplecza (umowy o pracę, rezerwacji hotelu). Działamy jako zapraszający - w 7-14 dni rejestrujemy zaproszenie, wysyłamy oryginał kurierem i prowadzimy procedurę wizową.',
    facts: [
      { label: 'Termin rejestracji', value: '7-14 dni', note: 'wojewoda · standard' },
      { label: 'Opłata', value: '27 PLN', note: 'opłata skarbowa' },
      { label: 'Ważność', value: '12 mies.', note: 'od wpisu do ewidencji' },
      { label: 'Gdzie', value: 'Urząd Wojewódzki', note: 'wg miejsca pobytu zapraszającego' }
    ],
    grounds: {
      title: 'Kiedy potrzebne zaproszenie',
      subtitle: 'Konsulat odmawia, jeśli aplikujący nie ma innego zaplecza (umowy, rezerwacji).',
      items: [
        { title: 'Wiza D - pobyt długoterminowy', desc: 'Krajowa do 365 dni - łączenie rodzin, opieka, wizyta partnera.' },
        { title: 'Wiza Schengen C - turystyczna', desc: 'Do 90 dni - gdy brak rezerwacji hotelu, rodzina lub przyjaciel zaprasza.' },
        { title: 'Wiza biznesowa', desc: 'Sp. z o.o. lub JDG zaprasza kontrahenta z WNP - dostawcę, klienta, partnera.' },
        { title: 'Wizyta studyjna / staż', desc: 'Uczelnia lub pracodawca zaprasza na staż do 6 miesięcy bez osobnego zezwolenia na pracę.' },
        { title: 'Wizyta rodzinna', desc: 'Krewny w Polsce zaprasza rodziców, dzieci, małżonka, dziadków.' },
        { title: 'Wizyta przy ciężkiej chorobie', desc: 'Pilna wizyta - zaproszenie ekspresowe w 3-5 dni z dokumentem medycznym.' },
        { title: 'Wizyta religijna lub kulturalna', desc: 'Dla duchownych, artystów, sportowców - wzór C.' },
        { title: 'Ślub w Polsce', desc: 'Narzeczony zaprasza partnera do ślubu w USC - zwykle wiza D.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Od pierwszej rozmowy do otrzymania wizy - zwykle 4-8 tygodni.',
      steps: [
        { title: 'Konsultacja', duration: '30 min', desc: 'Cel, pokrewieństwo, typ wizy. Weryfikacja zdolności finansowej.' },
        { title: 'Wniosek o zaproszenie', duration: '1 dzień', desc: 'Tytuł prawny do mieszkania, wyciągi, PIT-37, KRS firmy.' },
        { title: 'Złożenie w UW', duration: '1 dzień', desc: 'MOS v2.0 lub osobiście. 27 PLN + 17 PLN pełnomocnictwo.' },
        { title: 'Postępowanie', duration: '7-14 dni', desc: 'Wojewoda weryfikuje finanse (min. 515 PLN/gościa/mies.).' },
        { title: 'Wpis do ewidencji', duration: '1 dzień', desc: 'Numer zaproszenia w centralnej ewidencji widocznej dla konsulatów.' },
        { title: 'Wysyłka oryginału', duration: '3-7 dni', desc: 'DHL / Poczta Polska do kraju aplikującego.' },
        { title: 'Wniosek wizowy', duration: '14-30 dni', desc: 'Aplikujący w konsulacie z zaproszeniem.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy (zapraszający)',
      subtitle: 'Aplikujący ma osobny pakiet w konsulacie.',
      items: [
        'Paszport zapraszającego (PESEL obowiązkowy)',
        'Tytuł prawny do mieszkania: akt notarialny / umowa najmu / zaświadczenie',
        'PIT-37, ZUS RMUA, wyciągi z konta za 3 mies.',
        'Min. 515 PLN/gość/mies. (200 EUR - udokumentowane)',
        'Zobowiązanie pokrycia kosztów wyjazdu zaproszonego',
        'KRS firmy + statut + KRK członka zarządu (dla firm)',
        'Lista zaproszonych z danymi paszportowymi',
        'Wypełniony wniosek - przygotowujemy my'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Stała cena. Opłaty osobno.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · ocena' },
        { label: 'Zaproszenie pod klucz', value: 'od 600 PLN', note: 'Dokumenty, wniosek, urząd, kurier' },
        { label: 'Pilne (3-5 dni)', value: 'od 950 PLN', note: 'Express tariff' },
        { label: 'Zaproszenie + asysta wizowa', value: 'od 1 200 PLN', note: 'Z konsultacją aplikującego' }
      ],
      note: 'Powyżej honoraria LegalWin. Opłata 27 PLN, pełnomocnictwo 17 PLN, kurier ~120 PLN - osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 12 grudnia 2013 r. o cudzoziemcach (rozdz. 4)',
        'Rozporządzenie MSWiA ws. wzoru zaproszenia',
        'Kodeks Wizowy UE (Rozp. 810/2009)',
        'Konwencja wykonawcza do Układu z Schengen',
        'Ustawa z 16 listopada 2006 r. o opłacie skarbowej'
      ]
    },
    faq: [
      { q: 'Ile środków na koncie?', a: '515 PLN/gościa/mies. + 200 PLN na powrót. 3 osoby na miesiąc - ok. 1 850 PLN. Wyciągi za 3 mies. ze stabilnym saldem.' },
      { q: 'Sp. z o.o. bez obrotów?', a: 'Trudno. Wojewoda sprawdza KRS, ZUS, bilans. Świeża firma bez VAT-7 i pracowników - zwykle odmowa.' },
      { q: 'Krewny z Rosji może zaprosić?', a: 'Nie. Zaproszenie wydaje tylko polski urząd, zapraszający musi mieć legalny pobyt w Polsce.' },
      { q: 'Bez pokrewieństwa?', a: 'Tak - przyjaciel, partner, kolega, kontrahent. Ważny jest udokumentowany cel wizyty.' },
      { q: 'Termin ważności?', a: '12 miesięcy od wpisu do ewidencji. Wiza D - do 365 dni. Schengen C - w ramach zaproszenia.' },
      { q: 'Odmowa?', a: '14 dni na odwołanie do Szefa UdSC. Najczęstsze powody: finanse, cel. 30-60 dni.' },
      { q: 'Wiza z zaproszenia daje prawo do pracy?', a: 'Nie. Zaproszenie ≠ zezwolenie na pracę. Wiza D jest do pobytu, nie do pracy.' }
    ],
    related: ['odbior-z-lotniska', 'pomoc-w-zatrudnieniu', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Zaproszenie w 7-14 dni',
    ctaSubtitle: 'Bezpłatna konsultacja: weryfikacja finansów, kompletny pakiet. Od umowy do zaproszenia w ewidencji - zwykle 7-14 dni roboczych.'
  },
  en: {
    slug: 'zaproszenia',
    group: 'relocation',
    icon: 'fingerprint',
    badge: 'Zaproszenie · D-visa · Schengen',
    title: 'Electronic invitations',
    subtitle: 'Zaproszenia for Schengen and national visas',
    lead: 'Zaproszenie is an official invitation document registered with the voivodeship office. It\'s used to obtain a Schengen C or national D visa from a Polish consulate abroad when the applicant has no other backing (work contract, hotel booking). We act as the inviting party - in 7-14 days we register the zaproszenie, courier the original, and run the visa procedure.',
    facts: [
      { label: 'Registration', value: '7-14 days', note: 'voivode · standard' },
      { label: 'State fee', value: '27 PLN', note: 'opłata skarbowa' },
      { label: 'Validity', value: '12 months', note: 'from register entry' },
      { label: 'Where', value: 'Voivodeship Office', note: 'by inviter\'s residence' }
    ],
    grounds: {
      title: 'When zaproszenie is needed',
      subtitle: 'Consulates refuse without other backing (contract, booking).',
      items: [
        { title: 'D-visa long-term stay', desc: 'National visa up to 365 days - family reunification, caregiving, partner visit.' },
        { title: 'Schengen C tourist visa', desc: 'Short-term up to 90 days. No hotel booking - relative or friend in Poland invites.' },
        { title: 'Business visa for counterpart', desc: 'Sp. z o.o. or sole proprietor invites a CIS supplier, client, partner.' },
        { title: 'Study/internship visit', desc: 'University or employer invites for ≤ 6-month internship without separate work permit.' },
        { title: 'Family visit', desc: 'Polish-resident relative invites parents, children, spouse, grandparents.' },
        { title: 'Critical-illness visit', desc: 'Urgent visit - express zaproszenie in 3-5 days with medical certificate.' },
        { title: 'Religious or cultural visit', desc: 'Clergy, artists, athletes - Form C.' },
        { title: 'Wedding in Poland', desc: 'Fiancé invites partner for marriage at USC - usually D-visa.' }
      ]
    },
    timeline: {
      title: 'How we run it',
      subtitle: 'From first call to applicant receiving the visa - typically 4-8 weeks.',
      steps: [
        { title: 'Consultation', duration: '30 min', desc: 'Visit purpose, kinship, visa type. Inviter affordability check.' },
        { title: 'Invitation application', duration: '1 day', desc: 'Title to housing, statements, PIT-37, KRS for company.' },
        { title: 'Filing at UW', duration: '1 day', desc: 'MOS v2.0 or in person. 27 PLN + 17 PLN PoA.' },
        { title: 'Voivode review', duration: '7-14 days', desc: 'Verify inviter funds (≥ 515 PLN/guest/month + housing).' },
        { title: 'Register entry', duration: '1 day', desc: 'Unique zaproszenie number visible to consulates.' },
        { title: 'Original delivery', duration: '3-7 days', desc: 'DHL / Polish Post to the applicant\'s country.' },
        { title: 'Visa application', duration: '14-30 days', desc: 'Applicant files at the Polish consulate with zaproszenie.' }
      ]
    },
    documents: {
      title: 'What we need (inviter)',
      subtitle: 'Applicant has a separate consulate pack.',
      items: [
        "Inviter's passport (PESEL required)",
        'Housing title: deed / tenancy / zameldowanie',
        'Income proof: PIT-37, ZUS RMUA, 3-month bank statements',
        'Min. 515 PLN/guest/month (~200 EUR documented)',
        "Pledge to cover the guest's return travel",
        'KRS extract for companies + statute + board KRK',
        "Guest list with passport details and kinship",
        'Completed application - we prepare it'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Fixed price. State fees billed separately.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 minutes · case review' },
        { label: 'Turnkey zaproszenie', value: 'from 600 PLN', note: 'Documents, application, urząd, courier' },
        { label: 'Rush (3-5 days)', value: 'from 950 PLN', note: 'Express tariff' },
        { label: 'Zaproszenie + visa support', value: 'from 1,200 PLN', note: 'Applicant consultation included' }
      ],
      note: 'LegalWin fees. State fee 27 PLN, PoA 17 PLN, DHL ~120 PLN - billed separately.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Foreigners Act of 12 December 2013 (Chapter 4 - invitations)',
        'MSWiA Regulation on invitation template and registration',
        'EU Visa Code (Regulation 810/2009)',
        'Schengen Convention Implementing Agreement',
        'Stamp Duty Act of 16 November 2006'
      ]
    },
    faq: [
      { q: 'Required bank balance?', a: '515 PLN/guest/month + 200 PLN return travel. Family of 3 for a month - ~1,850 PLN. 3 months of statements with stable balance.' },
      { q: 'Can a zero-revenue Sp. z o.o. invite?', a: "Hard. Voivode checks KRS, ZUS, balance sheet. Fresh company without VAT-7 returns and employees - usually denied." },
      { q: 'Can a relative in Russia invite?', a: 'No. Only a Polish urząd issues zaproszenie, and the inviter must have legal stay in Poland.' },
      { q: 'No kinship?', a: 'Yes - friend, partner, colleague, counterpart. A documented purpose is critical.' },
      { q: 'Validity?', a: '12 months from register entry. D-visa up to 365 days. Schengen C - within zaproszenie limits.' },
      { q: 'Refusal?', a: '14 days to appeal to the Head of the Office for Foreigners. Most refusals: insufficient funds, weak purpose. 30-60 days.' },
      { q: 'Does the visa permit work?', a: 'No. Zaproszenie ≠ work permit. D-visa is for stay, not employment.' }
    ],
    related: ['odbior-z-lotniska', 'pomoc-w-zatrudnieniu', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Zaproszenie in 7-14 days',
    ctaSubtitle: 'Free consultation: financial review, full pack. From signing to register entry - typically 7-14 working days.'
  },
  tr: {
    slug: 'zaproszenia',
    group: 'relocation',
    icon: 'fingerprint',
    badge: 'Zaproszenie · D vizesi · Schengen',
    title: 'Elektronik davetiye',
    subtitle: 'Schengen ve ulusal vizeler için zaproszenia',
    lead: 'Zaproszenie - Polonya gerçek veya tüzel kişisi tarafından düzenlenen, Urząd Wojewódzki nezdinde tescil edilen resmi davetiye belgesidir. Yurt dışı Polonya konsolosluğunda Schengen C veya ulusal D vizesi başvurusu için, başvuranın işveren daveti veya turistik rezervasyonu yoksa kullanılır. Davet eden taraf olarak çalışıyoruz: 7-14 gün içinde zaproszenie\'yi tescil ediyor, orijinali kuryeyle gönderiyor ve vize sürecinde eşlik ediyoruz.',
    facts: [
      { label: 'Tescil süresi', value: '7-14 gün', note: 'wojewoda · standart' },
      { label: 'Resmi harç', value: '27 PLN', note: 'zaproszenie için opłata skarbowa' },
      { label: 'Geçerlilik', value: '12 ay', note: 'sicile kaydedildiği tarihten itibaren' },
      { label: 'Tescil yeri', value: 'Urząd Wojewódzki', note: 'davet edenin ikamet ettiği yere göre' }
    ],
    grounds: {
      title: 'Zaproszenie ne zaman gerekir',
      subtitle: 'Zaproszenie olmadan, başvuranın başka bir gerekçesi (umowa o pracę, şirket gwarancja\'sı, otel rezervasyonu) yoksa konsolosluk reddeder.',
      items: [
        { title: 'Uzun süreli D vizesi', desc: 'Aile birleşimi, akrabaya bakım, partner ziyareti için 365 güne kadar ulusal vize. Polonya mukimi tarafından zaproszenie ile.' },
        { title: 'Schengen C - turistik vize', desc: '90 güne kadar kısa süreli. Başvuranın otel rezervasyonu yoksa - Polonya\'daki akraba veya arkadaş zaproszenie düzenler.' },
        { title: 'İş ortağı için ticari vize', desc: 'Sp. z o.o. veya JDG, BDT veya Türkiye\'den iş ortağını - tedarikçiyi, müşteriyi, partneri - davet eder. Şirket adına tescil edilir.' },
        { title: 'Eğitim ziyareti / staj', desc: 'Üniversite veya işveren, 6 aya kadar staj için davet eder - ayrı zezwolenie na pracę gerekmez.' },
        { title: 'Aile ziyareti', desc: 'Polonya\'daki akraba ailesini - anne-babası, çocukları, eşi, büyükanne-büyükbabası - uzun süreli ziyaret için davet eder.' },
        { title: 'Ağır hasta yakına ziyaret', desc: 'Acil ziyaret - sağlık raporuyla 3-5 günde express zaproszenie.' },
        { title: 'Dini veya kültürel ziyaret', desc: 'Din görevlileri, sanatçılar, sporcular için - wniosek veya wzór C üzerinden tescil.' },
        { title: 'Polonya\'da evlilik', desc: 'Damadın / gelinin partnerini USC\'de evlenmek için davet etmesi - genelde zaproszenie ile D vizesi.' }
      ]
    },
    timeline: {
      title: 'Zaproszenie süreci',
      subtitle: 'İlk görüşmeden başvuranın vizeyi alımına - genelde 4-8 hafta.',
      steps: [
        { title: 'Danışmanlık', duration: '30 dk', desc: 'Ziyaret amacı, akrabalık derecesi, vize türü (C/D), süreler. Davet edenin mali yeterliliğini kontrol ediyoruz.' },
        { title: 'Wniosek o zaproszenie', duration: '1 gün', desc: 'Wniosek\'i ek belgelerle dolduruyoruz: tytuł prawny do mieszkania, banka ekstreleri, geçen yıl PIT-37, şirket için KRS.' },
        { title: 'Urząd Wojewódzki\'ye sunma', duration: '1 gün', desc: 'MOS v2.0 üzerinden veya bizzat. Opłata skarbowa 27 PLN ve pełnomocnictwo 17 PLN.' },
        { title: 'Wojewoda incelemesi', duration: '7-14 gün', desc: 'Wojewoda davet edenin mali yeterliliğini kontrol eder (misafir başına ayda en az 515 PLN + konaklama).' },
        { title: 'Sicile kaydetme', duration: '1 gün', desc: 'Zaproszenie benzersiz bir numara alır ve konsolosluklara açık merkezi zaproszeń sicilinde görüntülenir.' },
        { title: 'Orijinalin gönderimi', duration: '3-7 gün', desc: 'Başvuranın bulunduğu ülkeye DHL veya Poczta Polska ile orijinali gönderiyoruz. Elektronik kopya - aynı anda e-posta ile.' },
        { title: 'Vize başvurusu', duration: '14-30 gün', desc: 'Başvuran zaproszenie\'yle birlikte Polonya konsolosluğuna form ve belgelerle gider. Belge listesi danışmanlığı bizden.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler (davet eden)',
      subtitle: 'Başvurandan ayrı bir paket konsoloslukta talep edilir.',
      items: [
        'Davet edenin pasaportu (PESEL zorunludur)',
        'Konaklama hakkı belgesi: akt notarialny / umowa najmu / zaświadczenie o zameldowaniu',
        'Gelir kanıtı: geçen yıl PIT-37, ZUS RMUA, son 3 ayın banka ekstresi',
        'Asgari tutar - misafir başına ayda 515 PLN (~200 EUR · belgelenmesi şart)',
        'Davet edilenin dönüş masraflarını üstlenme taahhüdü',
        'Şirket KRS çıktısı (şirket davet ediyorsa) + statut + członek zarządu KRK\'sı',
        'Davet edilenler listesi - pasaport bilgisi ve akrabalık derecesiyle',
        'Doldurulmuş wniosek o zaproszenie - biz hazırlıyoruz'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Zaproszenie başına sabit fiyat. Resmi harçlar ayrıdır.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '30 dakika · şans değerlendirmesi' },
        { label: 'Anahtar teslim zaproszenie', value: '600 PLN\'den', note: 'Belgeler, wniosek, urząd, kurye' },
        { label: 'Acil (3-5 gün)', value: '950 PLN\'den', note: 'Urząd\'da express tarife' },
        { label: 'Zaproszenie + vize eşliği', value: '1.200 PLN\'den', note: 'Başvurana danışmanlık dahil' }
      ],
      note: 'Belirtilen ücretler LegalWin danışmanlık bedelidir. Resmi harç 27 PLN, pełnomocnictwo 17 PLN, DHL kurye ~120 PLN ayrıca ödenir.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Yabancılar Kanunu - bölüm 4, zaproszenia)',
        'İçişleri Bakanlığı (MSWiA) zaproszenie örnek formu ve sicile kayıt yönetmeliği',
        'AB Vize Kodeksi (810/2009 sayılı Tüzük)',
        'Schengen Anlaşması Uygulama Sözleşmesi (ek III - geçim kanıtı şartı)',
        'Ustawa z dnia 16 listopada 2006 r. o opłacie skarbowej (Damga Vergisi Kanunu)'
      ]
    },
    faq: [
      { q: 'Hesapta ne kadar para göstermek gerekir?', a: 'Misafir başına ayda asgari 515 PLN + dönüş için 200 PLN. 1 ay 3 kişilik aile - yaklaşık 1.850 PLN. Wojewodów çoğu 3 aylık banka ekstresinde hesaplanan tutarın üstünde istikrarlı bakiye ister.' },
      { q: 'Cirosuz Sp. z o.o. zaproszenie düzenleyebilir mi?', a: 'Zordur. Wojewoda şirketin gerçekliğini kontrol eder - KRS, ZUS cirosu, bilans olup olmadığı. VAT-7 deklaracji ve çalışanı olmayan yeni şirket - genelde reddedilir. Gerçek kişi üzerinden veya köklü bir şirket üzerinden hazırlamak daha sağlıklıdır.' },
      { q: 'Akraba Türkiye / Rusya\'daysa - oradan zaproszenie mümkün mü?', a: 'Hayır. Zaproszenie\'yi yalnızca Polonya urzędı düzenler ve davet edenin Polonya\'da yasal ikameti olmalıdır (PESEL, karta pobytu, vatandaşlık). Türkiye\'den olsa olsa oświadczenie o zaproszeniu (turistik vize için davet beyanı) düzenlenebilir, o farklı bir belgedir.' },
      { q: 'Akrabalık olmadan davet edilebilir mi?', a: 'Evet - arkadaş, partner, meslektaş, iş ortağı. Önemli olan ziyaret amacının (kişisel tanışma, iş görüşmesi, etkinlik) belgelenmesidir. Net bir amaç olmadan wojewoda reddedebilir.' },
      { q: 'Zaproszenie ne kadar geçerli?', a: 'Sicile kaydedildiği tarihten itibaren 12 ay. Başvuran bu süre içinde vize başvurusu yapmalıdır. D vizesi en fazla 365 gün için verilir. Schengen C - zaproszenie\'nin izin verdiği süre kadar.' },
      { q: 'Ret kararı çıkarsa ne yapılır?', a: 'Szef UdSC\'ye 14 gün içinde odwołanie. Sıkça red gerekçeleri: yetersiz mali yeterlik veya ziyaret amacında şüphe. İtirazın görüşülmesi 30-60 gün sürer. Anahtar teslim yürütüyoruz.' },
      { q: 'Zaproszenie ile alınan vize çalışma hakkı veriyor mu?', a: 'Hayır. Zaproszenie ≠ zezwolenie na pracę. Çalışmak için wojewoda\'dan veya Powiatowy Urząd Pracy\'den ayrı bir izin gerekir. Zaproszenie\'li D vizesi - yalnızca ikamet için, çalışma için değil.' }
    ],
    related: ['odbior-z-lotniska', 'pomoc-w-zatrudnieniu', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Zaproszenie 7-14 günde',
    ctaSubtitle: 'Ücretsiz danışmanlık: mali durumu kontrol eder, paketi hazırlarız. Sözleşmeden zaproszenie\'nin sicile girişine genelde 7-14 iş günü.'
  }
};

export default zaproszenia;
