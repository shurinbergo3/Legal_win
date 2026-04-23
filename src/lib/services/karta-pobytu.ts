import type { ServiceEntry } from './types';

const kartaPobytu: ServiceEntry = {
  ru: {
    slug: 'karta-pobytu',
    group: 'immigration',
    icon: 'id-card',
    badge: '2026 · MOS v2.0',
    title: 'Karta Czasowego Pobytu',
    subtitle: 'Временный вид на жительство в Польше',
    lead: 'Карта побыту — биометрический документ, подтверждающий право иностранца проживать в Польше до 3 лет. С 2026 года подача — через систему MOS v2.0, переписка с воеводой — через eDoręczenia.',
    facts: [
      { label: 'Срок действия', value: 'до 3 лет', note: 'с правом продления' },
      { label: 'Госпошлина', value: '340 + 100 PLN', note: 'заявление + карта' },
      { label: 'Решение', value: '42 дня', note: 'наш средний срок · по закону до 90' },
      { label: 'Где подаётся', value: 'MOS v2.0', note: 'по воеводству проживания' }
    ],
    grounds: {
      title: 'Основания для подачи',
      subtitle: 'Восемь типовых оснований по Ustawa o cudzoziemcach.',
      items: [
        { title: 'Работа у польского работодателя', desc: 'Umowa o pracę или zlecenie, зарплата от минималки (4 666 PLN брутто в 2026). Оформляем вместе с zezwolenie na pracę.' },
        { title: 'Blue Card ЕС (высококвалифицированный)', desc: 'Высшее образование, зарплата от 1,5× среднего по Польше, контракт от 1 года. Плюс — ускоренная процедура.' },
        { title: 'Собственный бизнес', desc: 'Sp. z o.o. с доходом от 12-кратной средней зарплаты или 2 штатными работниками, либо JDG.' },
        { title: 'Учёба в аккредитованном вузе', desc: 'Подтверждение из dziekanatu, доказательство финансов (≥ 721 PLN/мес), жильё, медстраховка.' },
        { title: 'Воссоединение семьи', desc: 'Для супругов и детей граждан Польши или обладателей ПМЖ / долгосрочного пребывания ЕС.' },
        { title: 'Польское происхождение', desc: 'Если вы подтвердили польские корни — сразу на ПМЖ; если ещё нет — можно через ВНЖ.' },
        { title: 'Гуманитарные основания', desc: 'Пребывание, когда возвращение невозможно по не зависящим от вас обстоятельствам.' },
        { title: 'Другие основания', desc: 'Жертва торговли людьми, стажировка, волонтёрство, духовная деятельность, научная работа и др.' }
      ]
    },
    timeline: {
      title: 'Как проходит дело',
      subtitle: 'Шесть шагов от первого звонка до получения карты.',
      steps: [
        { title: 'Консультация', duration: '30–60 мин', desc: 'Разбираем ваше основание, оцениваем шансы, составляем список документов.' },
        { title: 'Сбор пакета', duration: '5–14 дней', desc: 'Собираем документы, переводим присяжно, готовим ZUS / US / meldunek при необходимости.' },
        { title: 'Подача в MOS v2.0', duration: '1 день', desc: 'Загружаем заявление и вложения в государственную систему, оплачиваем opłatę skarbową 340 PLN.' },
        { title: 'Сдача биометрии', duration: '1 визит', desc: 'Единственный обязательный визит — отпечатки и фото в воеводе. Сопровождаем юристом.' },
        { title: 'Ожидание и запросы', duration: '30–60 дней', desc: 'Отвечаем на uzupełnienia через eDoręczenia. Следите за статусом в клиентском портале.' },
        { title: 'Получение карты', duration: '7 дней', desc: 'После положительного решения — +100 PLN за бланк карты, уведомление о готовности, выдача в воеводе.' }
      ]
    },
    documents: {
      title: 'Типовой пакет документов',
      subtitle: 'Конкретный список зависит от основания. Адаптируем под ваш кейс.',
      items: [
        'Заполненный wniosek (форма на 7 страниц) — готовим мы',
        'Загранпаспорт + ксерокопии всех страниц',
        '4 цветные биометрические фотографии 35×45 мм',
        'Подтверждение источника дохода (umowa, PIT-11, выписки со счёта)',
        'Договор аренды или zameldowanie — подтверждение жилья в Польше',
        'Полис медицинского страхования (ZUS или частный) с покрытием ≥ 30 000 €',
        'Подтверждение уплаты opłaty skarbowej 340 PLN',
        'Документы по основанию (umowa o pracę, свидетельство о браке, справка из вуза и т.д.)'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированная цена за этап. Обсуждаем и подписываем договор до начала.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30–60 минут · оценка шансов' },
        { label: 'Сопровождение ВНЖ под ключ', value: 'от 2 500 PLN', note: 'Все этапы: от сбора до выдачи' },
        { label: 'Apelacja при отказе', value: 'от 1 800 PLN', note: 'Отдельный договор на оспаривание' }
      ],
      note: 'Указаны гонорары юриста. Госпошлины (340 + 100 PLN) и присяжные переводы — отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach',
        'Rozporządzenie MSWiA w sprawie wniosków o udzielenie zezwolenia na pobyt',
        'Kodeks postępowania administracyjnego (KPA)',
        'Dyrektywa 2003/86/WE (воссоединение семьи)',
        'Dyrektywa 2009/50/WE (Blue Card)'
      ]
    },
    faq: [
      { q: 'Можно ли подать на ВНЖ, находясь за границей?', a: 'Нет. Заявление подаётся лично в Польше — основание пребывания должно быть действующим (виза или безвиз). Но мы можем подготовить весь пакет удалённо и встретить вас в аэропорту в день подачи.' },
      { q: 'Что даёт stempel в паспорте?', a: 'После правильной подачи в паспорт ставится штамп, легализующий ваше пребывание на весь срок рассмотрения — даже если истекла виза. С ним можно жить и работать, но нельзя выезжать из Польши без риска.' },
      { q: 'Могу ли я работать во время ожидания?', a: 'Да, если подавались на основе работы и на момент подачи уже имели zezwolenie. В остальных случаях — по правилам вашего предыдущего разрешения на пребывание.' },
      { q: 'Что меняется в 2026 году?', a: 'Все заявления подаются только через MOS v2.0, переписка с воеводой — через eDoręczenia (нужен ePUAP или qualified signature). Бумажную подачу воеводы больше не принимают.' },
      { q: 'Что делать при отказе?', a: 'У вас 14 дней на odwołanie к Szefowi Urzędu do Spraw Cudzoziemców. При повторном отказе — 30 дней на skargę в Wojewódzki Sąd Administracyjny. Мы ведём полный цикл.' },
      { q: 'Нужно ли сдавать польский язык?', a: 'Для TRC — нет. Польский B1 обязателен только при натурализации (гражданство) и в некоторых случаях для ПМЖ.' }
    ],
    related: ['karta-stalego-pobytu', 'apelacje', 'ochrona-miedzynarodowa'],
    ctaTitle: 'Разберём ваш кейс за 30 минут',
    ctaSubtitle: 'Первая консультация бесплатна. После звонка вы получите список документов под ваше основание и примерный срок.'
  },
  pl: {
    slug: 'karta-pobytu',
    group: 'immigration',
    icon: 'id-card',
    badge: '2026 · MOS v2.0',
    title: 'Karta Czasowego Pobytu',
    subtitle: 'Czasowe zezwolenie na pobyt w Polsce',
    lead: 'Karta pobytu to biometryczny dokument potwierdzający prawo cudzoziemca do zamieszkania w Polsce do 3 lat. Od 2026 wnioski — tylko przez MOS v2.0, korespondencja z wojewodą — przez eDoręczenia.',
    facts: [
      { label: 'Okres ważności', value: 'do 3 lat', note: 'z możliwością przedłużenia' },
      { label: 'Opłata', value: '340 + 100 PLN', note: 'wniosek + karta' },
      { label: 'Decyzja', value: '42 dni', note: 'naszaa średnia · ustawowo do 90' },
      { label: 'Gdzie składać', value: 'MOS v2.0', note: 'wg województwa zamieszkania' }
    ],
    grounds: {
      title: 'Podstawy złożenia wniosku',
      subtitle: 'Osiem typowych podstaw zgodnie z ustawą o cudzoziemcach.',
      items: [
        { title: 'Praca u polskiego pracodawcy', desc: 'Umowa o pracę lub zlecenie, wynagrodzenie od minimalnego (4 666 PLN brutto w 2026). Składamy łącznie z zezwoleniem na pracę.' },
        { title: 'Niebieska Karta UE', desc: 'Wyższe wykształcenie, pensja 1,5× średniej krajowej, umowa od 1 roku. Procedura przyspieszona.' },
        { title: 'Własny biznes', desc: 'Sp. z o.o. z dochodem od 12-krotności średniego wynagrodzenia albo 2 pracownikami, lub JDG.' },
        { title: 'Studia na akredytowanej uczelni', desc: 'Zaświadczenie z dziekanatu, środki finansowe (≥ 721 PLN/mies), zakwaterowanie, ubezpieczenie.' },
        { title: 'Łączenie rodzin', desc: 'Dla małżonków i dzieci obywateli Polski lub posiadaczy PR / długoterminowego pobytu UE.' },
        { title: 'Polskie pochodzenie', desc: 'Po potwierdzeniu polskich korzeni — od razu PR; jeśli jeszcze nie — można przez TRC.' },
        { title: 'Względy humanitarne', desc: 'Pobyt, gdy powrót jest niemożliwy z przyczyn niezależnych od cudzoziemca.' },
        { title: 'Inne podstawy', desc: 'Ofiary handlu ludźmi, staże, wolontariat, działalność religijna, nauka itp.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Sześć kroków od pierwszego telefonu do odbioru karty.',
      steps: [
        { title: 'Konsultacja', duration: '30–60 min', desc: 'Analizujemy podstawę, oceniamy szanse, sporządzamy listę dokumentów.' },
        { title: 'Zbiór pakietu', duration: '5–14 dni', desc: 'Zbieramy dokumenty, tłumaczymy przysięgle, wyrabiamy ZUS / US / meldunek.' },
        { title: 'Złożenie w MOS v2.0', duration: '1 dzień', desc: 'Ładujemy wniosek i załączniki do systemu państwowego, opłacamy 340 PLN.' },
        { title: 'Odciski palców', duration: '1 wizyta', desc: 'Jedyna obowiązkowa wizyta — odciski i zdjęcie u wojewody. Asystuje prawnik.' },
        { title: 'Oczekiwanie', duration: '30–60 dni', desc: 'Odpowiadamy na wezwania przez eDoręczenia. Statusy na portalu klienta.' },
        { title: 'Odbiór karty', duration: '7 dni', desc: 'Po decyzji pozytywnej — +100 PLN za blankiet, odbiór u wojewody.' }
      ]
    },
    documents: {
      title: 'Typowy zestaw dokumentów',
      subtitle: 'Konkretna lista zależy od podstawy. Dopasujemy do Twojej sprawy.',
      items: [
        'Wypełniony wniosek (formularz 7-stronicowy) — przygotowujemy my',
        'Paszport + kopie wszystkich stron',
        '4 biometryczne zdjęcia 35×45 mm',
        'Potwierdzenie źródła dochodu (umowa, PIT-11, wyciągi z konta)',
        'Umowa najmu lub zameldowanie',
        'Ubezpieczenie zdrowotne (ZUS lub prywatne) min. 30 000 €',
        'Potwierdzenie opłaty skarbowej 340 PLN',
        'Dokumenty w zależności od podstawy (umowa o pracę, akt ślubu, zaświadczenie z uczelni itd.)'
      ]
    },
    pricing: {
      title: 'Koszt naszej pracy',
      subtitle: 'Stała cena za etap. Umowę podpisujemy przed rozpoczęciem.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30–60 minut · ocena szans' },
        { label: 'Prowadzenie TRC pod klucz', value: 'od 2 500 PLN', note: 'Wszystkie etapy' },
        { label: 'Apelacja po odmowie', value: 'od 1 800 PLN', note: 'Odrębna umowa' }
      ],
      note: 'To honoraria prawnika. Opłaty urzędowe (340 + 100 PLN) i tłumaczenia przysięgłe — osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach',
        'Rozporządzenie MSWiA w sprawie wniosków o udzielenie zezwolenia na pobyt',
        'Kodeks postępowania administracyjnego (KPA)',
        'Dyrektywa 2003/86/WE (łączenie rodzin)',
        'Dyrektywa 2009/50/WE (Blue Card)'
      ]
    },
    faq: [
      { q: 'Czy mogę złożyć wniosek z zagranicy?', a: 'Nie. Wniosek składa się osobiście w Polsce — podstawa pobytu musi być ważna (wiza lub ruch bezwizowy). Ale cały pakiet możemy przygotować zdalnie i odebrać Cię z lotniska w dniu złożenia.' },
      { q: 'Co daje stempel w paszporcie?', a: 'Po prawidłowym złożeniu wbija się stempel legalizujący pobyt na cały czas rozpatrywania — nawet po wygaśnięciu wizy. Pozwala mieszkać i pracować, ale wyjazdy z Polski są ryzykowne.' },
      { q: 'Czy mogę pracować w czasie oczekiwania?', a: 'Tak, jeśli podstawą jest praca i miałeś już zezwolenie w chwili złożenia. W innych przypadkach — wg zasad poprzedniego zezwolenia.' },
      { q: 'Co zmienia się w 2026?', a: 'Wszystkie wnioski tylko przez MOS v2.0, korespondencja z wojewodą — przez eDoręczenia (wymagany ePUAP lub podpis kwalifikowany). Papieru wojewodowie już nie przyjmują.' },
      { q: 'Co robić przy odmowie?', a: 'Masz 14 dni na odwołanie do Szefa UdSC. Po powtórnej odmowie — 30 dni na skargę do WSA. Prowadzimy pełen cykl.' },
      { q: 'Czy trzeba zdawać polski?', a: 'Dla TRC — nie. Polski B1 jest wymagany tylko przy naturalizacji i w niektórych przypadkach PR.' }
    ],
    related: ['karta-stalego-pobytu', 'apelacje', 'ochrona-miedzynarodowa'],
    ctaTitle: 'Przeanalizujmy Twoją sprawę w 30 minut',
    ctaSubtitle: 'Pierwsza konsultacja gratis. Po rozmowie dostaniesz listę dokumentów pod Twoją podstawę i szacowany termin.'
  },
  en: {
    slug: 'karta-pobytu',
    group: 'immigration',
    icon: 'id-card',
    badge: '2026 · MOS v2.0',
    title: 'Temporary Residence Card',
    subtitle: 'Karta Czasowego Pobytu — TRC',
    lead: 'Karta pobytu is a biometric document confirming a foreigner\'s right to live in Poland for up to 3 years. As of 2026 filings go exclusively through MOS v2.0 and correspondence with the voivode runs via eDoręczenia.',
    facts: [
      { label: 'Validity', value: 'up to 3 years', note: 'renewable' },
      { label: 'Official fees', value: '340 + 100 PLN', note: 'application + card' },
      { label: 'Decision', value: '42 days', note: 'our average · statutory up to 90' },
      { label: 'Where to file', value: 'MOS v2.0', note: 'voivodeship of residence' }
    ],
    grounds: {
      title: 'Grounds for application',
      subtitle: 'Eight common grounds under the Law on Foreigners.',
      items: [
        { title: 'Employment by a Polish employer', desc: 'Umowa o pracę or zlecenie, salary at least minimum wage (4,666 PLN gross in 2026). Combined with zezwolenie na pracę.' },
        { title: 'EU Blue Card', desc: 'Higher education, salary ≥ 1.5× national average, contract ≥ 1 year. Expedited procedure.' },
        { title: 'Own business', desc: 'Sp. z o.o. with income ≥ 12× average salary or 2 employees, or sole proprietorship (JDG).' },
        { title: 'Studies at an accredited university', desc: 'Certificate from dziekanat, proof of funds (≥ 721 PLN/month), accommodation, insurance.' },
        { title: 'Family reunification', desc: 'For spouses and children of Polish citizens or holders of PR / EU long-term residence.' },
        { title: 'Polish origin', desc: 'If Polish roots are confirmed — straight to PR; if not yet — via TRC first.' },
        { title: 'Humanitarian grounds', desc: 'Stay where return is impossible for reasons beyond the applicant\'s control.' },
        { title: 'Other grounds', desc: 'Trafficking victims, internships, volunteering, religious activity, scientific research, etc.' }
      ]
    },
    timeline: {
      title: 'How the case runs',
      subtitle: 'Six steps from the first call to card collection.',
      steps: [
        { title: 'Consultation', duration: '30–60 min', desc: 'We assess your ground, rate the odds, and list required documents.' },
        { title: 'Document pack', duration: '5–14 days', desc: 'We gather docs, arrange sworn translations, handle ZUS / tax / meldunek.' },
        { title: 'Filing via MOS v2.0', duration: '1 day', desc: 'We upload the application and attachments to the state system, pay 340 PLN.' },
        { title: 'Biometrics', duration: '1 visit', desc: 'Only mandatory visit — fingerprints and photo at the voivode\'s. Lawyer accompanies.' },
        { title: 'Waiting & requests', duration: '30–60 days', desc: 'We reply to uzupełnienia via eDoręczenia. Status on client portal.' },
        { title: 'Card collection', duration: '7 days', desc: 'After positive decision — +100 PLN for the card, collect at the voivode\'s.' }
      ]
    },
    documents: {
      title: 'Typical document pack',
      subtitle: 'Exact list depends on the ground. We tailor it to your case.',
      items: [
        'Completed wniosek (7-page form) — we prepare it',
        'Passport + copies of all pages',
        '4 biometric photos 35×45 mm',
        'Proof of income (contract, PIT-11, bank statements)',
        'Lease agreement or zameldowanie as proof of housing',
        'Health insurance (ZUS or private) with ≥ €30,000 coverage',
        'Proof of 340 PLN opłata skarbowa payment',
        'Ground-specific documents (work contract, marriage certificate, study certificate etc.)'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Fixed price per stage. Signed agreement before we start.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30–60 minutes · odds assessment' },
        { label: 'End-to-end TRC handling', value: 'from 2,500 PLN', note: 'All stages' },
        { label: 'Appeal on denial', value: 'from 1,800 PLN', note: 'Separate agreement' }
      ],
      note: 'Attorney fees. Official fees (340 + 100 PLN) and sworn translations billed separately.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Law of 12 December 2013 on Foreigners',
        'MSWiA regulation on residence applications',
        'Polish Code of Administrative Procedure (KPA)',
        'Directive 2003/86/EC (family reunification)',
        'Directive 2009/50/EC (Blue Card)'
      ]
    },
    faq: [
      { q: 'Can I file from abroad?', a: 'No. The application is filed in person in Poland — your current stay must be legal (visa or visa-free). But we prepare the full pack remotely and meet you at the airport on filing day.' },
      { q: 'What does the passport stamp give me?', a: 'A proper filing gets a stamp that legalises stay for the entire review period — even past visa expiry. You can live and work, but leaving Poland is risky.' },
      { q: 'Can I work while waiting?', a: 'Yes, if the basis is employment and you already held a work permit at filing. Otherwise — under the rules of your previous stay permit.' },
      { q: 'What changes in 2026?', a: 'All filings only via MOS v2.0, correspondence via eDoręczenia (ePUAP or qualified signature needed). Voivodes no longer accept paper filings.' },
      { q: 'What if I\'m denied?', a: 'You have 14 days to appeal to the Head of the Office for Foreigners. On second denial — 30 days to file a complaint to the Voivodeship Administrative Court. We handle the full cycle.' },
      { q: 'Do I need to take a Polish exam?', a: 'For TRC — no. Polish B1 is mandatory for naturalisation (citizenship) and in some PR cases.' }
    ],
    related: ['karta-stalego-pobytu', 'apelacje', 'ochrona-miedzynarodowa'],
    ctaTitle: 'Let\'s review your case in 30 minutes',
    ctaSubtitle: 'First consultation is free. You\'ll walk away with a document list tailored to your ground and a realistic timeline.'
  }
};

export default kartaPobytu;
