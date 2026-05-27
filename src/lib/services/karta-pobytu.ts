import type { ServiceEntry } from './types';

const kartaPobytu: ServiceEntry = {
  ru: {
    slug: 'karta-pobytu',
    group: 'immigration',
    icon: 'id-card',
    badge: '2026 · MOS v2.0',
    title: 'Karta Czasowego Pobytu',
    subtitle: 'Временный вид на жительство в Польше',
    lead: 'Карта побыту - биометрический документ, подтверждающий право иностранца проживать в Польше до 3 лет. С 2026 года подача - через систему MOS v2.0, переписка с воеводой - через eDoręczenia.',
    facts: [
      { label: 'Срок действия', value: 'до 3 лет', note: 'с правом продления' },
      { label: 'Госпошлина', value: '340 + 100 PLN', note: 'заявление + карта' },
      { label: 'Срок получения', value: '6-8 мес.', note: 'в Mazowieckim · по закону до 90 дней' },
      { label: 'Где подаётся', value: 'MOS v2.0', note: 'по воеводству проживания' }
    ],
    grounds: {
      title: 'Основания для подачи',
      subtitle: 'Восемь типовых оснований по Ustawa o cudzoziemcach.',
      items: [
        { title: 'Работа у польского работодателя', desc: 'Umowa o pracę или zlecenie, зарплата от минималки (4 806 PLN брутто в 2026). Оформляем вместе с zezwolenie na pracę.' },
        { title: 'Blue Card ЕС (высококвалифицированный)', desc: 'Высшее образование, зарплата от 1,5× среднего по Польше, контракт от 1 года. Плюс - ускоренная процедура.' },
        { title: 'Собственный бизнес', desc: 'Sp. z o.o. с доходом от 12-кратной средней зарплаты или 2 штатными работниками, либо JDG.' },
        { title: 'Учёба в аккредитованном вузе', desc: 'Подтверждение из dziekanatu, доказательство финансов (≥ 721 PLN/мес), жильё, медстраховка.' },
        { title: 'Воссоединение семьи', desc: 'Для супругов и детей граждан Польши или обладателей ПМЖ / долгосрочного пребывания ЕС.' },
        { title: 'Польское происхождение', desc: 'Если вы подтвердили польские корни - сразу на ПМЖ; если ещё нет - можно через ВНЖ.' },
        { title: 'Гуманитарные основания', desc: 'Пребывание, когда возвращение невозможно по не зависящим от вас обстоятельствам.' },
        { title: 'Другие основания', desc: 'Жертва торговли людьми, стажировка, волонтёрство, духовная деятельность, научная работа и др.' }
      ]
    },
    timeline: {
      title: 'Как проходит дело',
      subtitle: 'Шесть шагов от первого звонка до получения карты.',
      steps: [
        { title: 'Консультация', duration: '30-60 мин', desc: 'Разбираем ваше основание, оцениваем шансы, составляем список документов.' },
        { title: 'Сбор пакета', duration: '5-14 дней', desc: 'Собираем документы, переводим присяжно, готовим ZUS / US / meldunek при необходимости.' },
        { title: 'Подача в MOS v2.0', duration: '1 день', desc: 'Загружаем заявление и вложения в государственную систему, оплачиваем opłatę skarbową 340 PLN.' },
        { title: 'Сдача биометрии', duration: '1 визит', desc: 'Единственный обязательный визит - отпечатки и фото в воеводе. Сопровождаем нашим иммиграционным консультантом.' },
        { title: 'Ожидание и запросы', duration: '30-60 дней', desc: 'Отвечаем на uzupełnienia через eDoręczenia. Следите за статусом в клиентском портале.' },
        { title: 'Получение карты', duration: '7 дней', desc: 'После положительного решения - +100 PLN за бланк карты, уведомление о готовности, выдача в воеводе.' }
      ]
    },
    documents: {
      title: 'Типовой пакет документов',
      subtitle: 'Конкретный список зависит от основания. Адаптируем под ваш кейс.',
      items: [
        'Заполненный wniosek (форма на 7 страниц) - готовим мы',
        'Загранпаспорт + ксерокопии всех страниц',
        '4 цветные биометрические фотографии 35×45 мм',
        'Подтверждение источника дохода (umowa, PIT-11, выписки со счёта)',
        'Договор аренды или zameldowanie - подтверждение жилья в Польше',
        'Полис медицинского страхования (ZUS или частный) с покрытием ≥ 30 000 €',
        'Подтверждение уплаты opłaty skarbowej 340 PLN',
        'Документы по основанию (umowa o pracę, свидетельство о браке, справка из вуза и т.д.)'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированная цена за этап. Обсуждаем и подписываем договор до начала.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30-60 минут · оценка шансов' },
        { label: 'Сопровождение ВНЖ под ключ', value: 'от 2 500 PLN', note: 'Все этапы: от сбора до выдачи' },
        { label: 'Apelacja при отказе', value: 'от 1 800 PLN', note: 'Отдельный договор на оспаривание' }
      ],
      note: 'Указаны наши гонорары. Госпошлины (340 + 100 PLN) и присяжные переводы - отдельно.'
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
      { q: 'Можно ли подать на ВНЖ, находясь за границей?', a: 'Нет. Заявление (wniosek) подаётся лично в Польше - основание пребывания должно быть действующим (виза или безвиз). Но мы можем подготовить весь пакет удалённо и встретить вас в аэропорту в день подачи.' },
      { q: 'Что даёт stempel в паспорте?', a: 'Stempel (штамп) - после правильной подачи в паспорт ставится штамп, легализующий ваше пребывание на весь срок рассмотрения - даже если истекла виза. С ним можно жить и работать, но нельзя выезжать из Польши без риска.' },
      { q: 'Могу ли я работать во время ожидания?', a: 'Да, если подавались на основе работы и на момент подачи уже имели zezwolenie (разрешение). В остальных случаях - по правилам вашего предыдущего разрешения на пребывание.' },
      { q: 'Что меняется в 2026 году?', a: 'Все заявления подаются только через MOS v2.0 (новая система подачи заявлений), переписка с wojewodą (воеводой) - через eDoręczenia (электронная доставка) (нужен ePUAP - портал госуслуг или kwalifikowany podpis - квалифицированная электронная подпись). Бумажную подачу воеводы больше не принимают.' },
      { q: 'Что делать при отказе?', a: 'У вас 14 дней на odwołanie (апелляцию) к Szefowi Urzędu do Spraw Cudzoziemców (Главе Управления по делам иностранцев). При повторном отказе - 30 дней на skargę (жалобу) в Wojewódzki Sąd Administracyjny (Воеводский административный суд). Мы ведём полный цикл.' },
      { q: 'Нужно ли сдавать польский язык?', a: 'Для TRC - нет. Польский B1 обязателен только при натурализации (гражданство) и в некоторых случаях для ПМЖ.' }
    ],
    related: ['karta-stalego-pobytu', 'kod-95', 'apelacje'],
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
    lead: 'Karta pobytu to biometryczny dokument potwierdzający prawo cudzoziemca do zamieszkania w Polsce do 3 lat. Od 2026 wnioski - tylko przez MOS v2.0, korespondencja z wojewodą - przez eDoręczenia.',
    facts: [
      { label: 'Okres ważności', value: 'do 3 lat', note: 'z możliwością przedłużenia' },
      { label: 'Opłata', value: '340 + 100 PLN', note: 'wniosek + karta' },
      { label: 'Czas uzyskania', value: '6-8 mies.', note: 'w Mazowieckim · ustawowo do 90 dni' },
      { label: 'Gdzie składać', value: 'MOS v2.0', note: 'wg województwa zamieszkania' }
    ],
    grounds: {
      title: 'Podstawy złożenia wniosku',
      subtitle: 'Osiem typowych podstaw zgodnie z ustawą o cudzoziemcach.',
      items: [
        { title: 'Praca u polskiego pracodawcy', desc: 'Umowa o pracę lub zlecenie, wynagrodzenie od minimalnego (4 806 PLN brutto w 2026). Składamy łącznie z zezwoleniem na pracę.' },
        { title: 'Niebieska Karta UE', desc: 'Wyższe wykształcenie, pensja 1,5× średniej krajowej, umowa od 1 roku. Procedura przyspieszona.' },
        { title: 'Własny biznes', desc: 'Sp. z o.o. z dochodem od 12-krotności średniego wynagrodzenia albo 2 pracownikami, lub JDG.' },
        { title: 'Studia na akredytowanej uczelni', desc: 'Zaświadczenie z dziekanatu, środki finansowe (≥ 721 PLN/mies), zakwaterowanie, ubezpieczenie.' },
        { title: 'Łączenie rodzin', desc: 'Dla małżonków i dzieci obywateli Polski lub posiadaczy PR / długoterminowego pobytu UE.' },
        { title: 'Polskie pochodzenie', desc: 'Po potwierdzeniu polskich korzeni - od razu PR; jeśli jeszcze nie - można przez TRC.' },
        { title: 'Względy humanitarne', desc: 'Pobyt, gdy powrót jest niemożliwy z przyczyn niezależnych od cudzoziemca.' },
        { title: 'Inne podstawy', desc: 'Ofiary handlu ludźmi, staże, wolontariat, działalność religijna, nauka itp.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Sześć kroków od pierwszego telefonu do odbioru karty.',
      steps: [
        { title: 'Konsultacja', duration: '30-60 min', desc: 'Analizujemy podstawę, oceniamy szanse, sporządzamy listę dokumentów.' },
        { title: 'Zbiór pakietu', duration: '5-14 dni', desc: 'Zbieramy dokumenty, tłumaczymy przysięgle, wyrabiamy ZUS / US / meldunek.' },
        { title: 'Złożenie w MOS v2.0', duration: '1 dzień', desc: 'Ładujemy wniosek i załączniki do systemu państwowego, opłacamy 340 PLN.' },
        { title: 'Odciski palców', duration: '1 wizyta', desc: 'Jedyna obowiązkowa wizyta - odciski i zdjęcie u wojewody. Asystuje konsultant imigracyjny.' },
        { title: 'Oczekiwanie', duration: '30-60 dni', desc: 'Odpowiadamy na wezwania przez eDoręczenia. Statusy na portalu klienta.' },
        { title: 'Odbiór karty', duration: '7 dni', desc: 'Po decyzji pozytywnej - +100 PLN za blankiet, odbiór u wojewody.' }
      ]
    },
    documents: {
      title: 'Typowy zestaw dokumentów',
      subtitle: 'Konkretna lista zależy od podstawy. Dopasujemy do Twojej sprawy.',
      items: [
        'Wypełniony wniosek (formularz 7-stronicowy) - przygotowujemy my',
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
        { label: 'Konsultacja', value: 'Gratis', note: '30-60 minut · ocena szans' },
        { label: 'Prowadzenie TRC pod klucz', value: 'od 2 500 PLN', note: 'Wszystkie etapy' },
        { label: 'Apelacja po odmowie', value: 'od 1 800 PLN', note: 'Odrębna umowa' }
      ],
      note: 'To nasze honoraria. Opłaty urzędowe (340 + 100 PLN) i tłumaczenia przysięgłe - osobno.'
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
      { q: 'Czy mogę złożyć wniosek z zagranicy?', a: 'Nie. Wniosek składa się osobiście w Polsce - podstawa pobytu musi być ważna (wiza lub ruch bezwizowy). Ale cały pakiet możemy przygotować zdalnie i odebrać Cię z lotniska w dniu złożenia.' },
      { q: 'Co daje stempel w paszporcie?', a: 'Po prawidłowym złożeniu wbija się stempel legalizujący pobyt na cały czas rozpatrywania - nawet po wygaśnięciu wizy. Pozwala mieszkać i pracować, ale wyjazdy z Polski są ryzykowne.' },
      { q: 'Czy mogę pracować w czasie oczekiwania?', a: 'Tak, jeśli podstawą jest praca i miałeś już zezwolenie w chwili złożenia. W innych przypadkach - wg zasad poprzedniego zezwolenia.' },
      { q: 'Co zmienia się w 2026?', a: 'Wszystkie wnioski tylko przez MOS v2.0, korespondencja z wojewodą - przez eDoręczenia (wymagany ePUAP lub podpis kwalifikowany). Papieru wojewodowie już nie przyjmują.' },
      { q: 'Co robić przy odmowie?', a: 'Masz 14 dni na odwołanie do Szefa UdSC. Po powtórnej odmowie - 30 dni na skargę do WSA. Prowadzimy pełen cykl.' },
      { q: 'Czy trzeba zdawać polski?', a: 'Dla TRC - nie. Polski B1 jest wymagany tylko przy naturalizacji i w niektórych przypadkach PR.' }
    ],
    related: ['karta-stalego-pobytu', 'kod-95', 'apelacje'],
    ctaTitle: 'Przeanalizujmy Twoją sprawę w 30 minut',
    ctaSubtitle: 'Pierwsza konsultacja gratis. Po rozmowie dostaniesz listę dokumentów pod Twoją podstawę i szacowany termin.'
  },
  en: {
    slug: 'karta-pobytu',
    group: 'immigration',
    icon: 'id-card',
    badge: '2026 · MOS v2.0',
    title: 'Temporary Residence Card',
    subtitle: 'Karta Czasowego Pobytu - TRC',
    lead: 'Karta pobytu is a biometric document confirming a foreigner\'s right to live in Poland for up to 3 years. As of 2026 filings go exclusively through MOS v2.0 and correspondence with the voivode runs via eDoręczenia.',
    facts: [
      { label: 'Validity', value: 'up to 3 years', note: 'renewable' },
      { label: 'Official fees', value: '340 + 100 PLN', note: 'application + card' },
      { label: 'Time to card', value: '6-8 months', note: 'Mazowieckie · statutory up to 90 days' },
      { label: 'Where to file', value: 'MOS v2.0', note: 'voivodeship of residence' }
    ],
    grounds: {
      title: 'Grounds for application',
      subtitle: 'Eight common grounds under the Law on Foreigners.',
      items: [
        { title: 'Employment by a Polish employer', desc: 'Umowa o pracę or zlecenie, salary at least minimum wage (4,806 PLN gross in 2026). Combined with zezwolenie na pracę.' },
        { title: 'EU Blue Card', desc: 'Higher education, salary ≥ 1.5× national average, contract ≥ 1 year. Expedited procedure.' },
        { title: 'Own business', desc: 'Sp. z o.o. with income ≥ 12× average salary or 2 employees, or sole proprietorship (JDG).' },
        { title: 'Studies at an accredited university', desc: 'Certificate from dziekanat, proof of funds (≥ 721 PLN/month), accommodation, insurance.' },
        { title: 'Family reunification', desc: 'For spouses and children of Polish citizens or holders of PR / EU long-term residence.' },
        { title: 'Polish origin', desc: 'If Polish roots are confirmed - straight to PR; if not yet - via TRC first.' },
        { title: 'Humanitarian grounds', desc: 'Stay where return is impossible for reasons beyond the applicant\'s control.' },
        { title: 'Other grounds', desc: 'Trafficking victims, internships, volunteering, religious activity, scientific research, etc.' }
      ]
    },
    timeline: {
      title: 'How the case runs',
      subtitle: 'Six steps from the first call to card collection.',
      steps: [
        { title: 'Consultation', duration: '30-60 min', desc: 'We assess your ground, rate the odds, and list required documents.' },
        { title: 'Document pack', duration: '5-14 days', desc: 'We gather docs, arrange sworn translations, handle ZUS / tax / meldunek.' },
        { title: 'Filing via MOS v2.0', duration: '1 day', desc: 'We upload the application and attachments to the state system, pay 340 PLN.' },
        { title: 'Biometrics', duration: '1 visit', desc: 'Only mandatory visit - fingerprints and photo at the voivode\'s. Immigration consultant accompanies.' },
        { title: 'Waiting & requests', duration: '30-60 days', desc: 'We reply to uzupełnienia via eDoręczenia. Status on client portal.' },
        { title: 'Card collection', duration: '7 days', desc: 'After positive decision - +100 PLN for the card, collect at the voivode\'s.' }
      ]
    },
    documents: {
      title: 'Typical document pack',
      subtitle: 'Exact list depends on the ground. We tailor it to your case.',
      items: [
        'Completed wniosek (7-page form) - we prepare it',
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
        { label: 'Consultation', value: 'Free', note: '30-60 minutes · odds assessment' },
        { label: 'End-to-end TRC handling', value: 'from 2,500 PLN', note: 'All stages' },
        { label: 'Appeal on denial', value: 'from 1,800 PLN', note: 'Separate agreement' }
      ],
      note: 'Our fees. Official fees (340 + 100 PLN) and sworn translations billed separately.'
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
      { q: 'Can I file from abroad?', a: 'No. The application is filed in person in Poland - your current stay must be legal (visa or visa-free). But we prepare the full pack remotely and meet you at the airport on filing day.' },
      { q: 'What does the passport stamp give me?', a: 'A proper filing gets a stamp that legalises stay for the entire review period - even past visa expiry. You can live and work, but leaving Poland is risky.' },
      { q: 'Can I work while waiting?', a: 'Yes, if the basis is employment and you already held a zezwolenie (work permit) at filing. Otherwise - under the rules of your previous stay permit.' },
      { q: 'What changes in 2026?', a: 'All filings only via MOS v2.0 (new online application system), correspondence via eDoręczenia (e-delivery) - ePUAP (e-government portal) or qualified signature needed. Wojewoda (regional governor) offices no longer accept paper filings.' },
      { q: 'What if I\'m denied?', a: 'You have 14 days to file an odwołanie (appeal) to the Szef UdSC (Head of the Office for Foreigners). On second denial - 30 days to file a skarga (complaint) to the WSA (Voivodeship Administrative Court). We handle the full cycle.' },
      { q: 'Do I need to take a Polish exam?', a: 'For TRC - no. Polish B1 is mandatory for naturalisation (citizenship) and in some PR cases.' }
    ],
    related: ['karta-stalego-pobytu', 'kod-95', 'apelacje'],
    ctaTitle: 'Let\'s review your case in 30 minutes',
    ctaSubtitle: 'First consultation is free. You\'ll walk away with a document list tailored to your ground and a realistic timeline.'
  },
  tr: {
    slug: 'karta-pobytu',
    group: 'immigration',
    icon: 'id-card',
    badge: '2026 · MOS v2.0',
    title: 'Karta Czasowego Pobytu',
    subtitle: 'Polonya geçici oturum kartı',
    lead: 'Karta Pobytu (Polonya oturum kartı), yabancılara Polonya\'da 3 yıla kadar yasal ikamet hakkı veren biyometrik bir belgedir. 2026 itibarıyla başvurular yalnızca MOS v2.0 (yabancılar için yeni e-başvuru sistemi) üzerinden yapılır, wojewoda (eyalet valisi) ile yazışmalar eDoręczenia (resmi elektronik yazışma) sistemi üzerinden yürütülür.',
    facts: [
      { label: 'Geçerlilik', value: '3 yıla kadar', note: 'uzatılabilir' },
      { label: 'Resmi harçlar', value: '340 + 100 PLN', note: 'başvuru + kart' },
      { label: 'Alım süresi', value: '6-8 ay', note: 'Mazowieckie\'de · yasal süre 90 gün' },
      { label: 'Başvuru kanalı', value: 'MOS v2.0', note: 'ikamet ettiğiniz eyalete göre' }
    ],
    grounds: {
      title: 'Başvuru gerekçeleri',
      subtitle: 'Ustawa o cudzoziemcach (Yabancılar Kanunu) kapsamında sekiz tipik gerekçe.',
      items: [
        { title: 'Polonyalı işverende çalışma', desc: 'Umowa o pracę (iş sözleşmesi) veya zlecenie (hizmet sözleşmesi), 2026 asgari ücreti 4.806 PLN brüt. zezwolenie na pracę (çalışma izni) ile birlikte yürütülür.' },
        { title: 'AB Mavi Kartı (yüksek nitelikli)', desc: 'Yüksek öğrenim, ülke ortalamasının 1,5 katı maaş, en az 1 yıllık sözleşme. Ayrıca hızlandırılmış prosedür.' },
        { title: 'Kendi şirketi', desc: 'Geliri ortalama maaşın 12 katı veya 2 tam zamanlı çalışanı olan Sp. z o.o. (limited şirket), ya da JDG (şahıs şirketi).' },
        { title: 'Akredite üniversitede eğitim', desc: 'Dziekanat (dekanlık) belgesi, geçim kanıtı (≥ 721 PLN/ay), konaklama, sağlık sigortası.' },
        { title: 'Aile birleşimi', desc: 'Polonya vatandaşlarının veya daimi ikamet / AB uzun dönem oturum sahiplerinin eşleri ve çocukları için.' },
        { title: 'Polonya kökeni', desc: 'Polonya kökeniniz onaylandıysa - doğrudan daimi ikamete; henüz değilse - önce TRC üzerinden.' },
        { title: 'İnsani gerekçeler', desc: 'Sizin elinizde olmayan nedenlerden dolayı dönüşün mümkün olmadığı durumlarda ikamet.' },
        { title: 'Diğer gerekçeler', desc: 'İnsan ticareti mağduru, staj, gönüllülük, dini faaliyet, bilimsel çalışma vb.' }
      ]
    },
    timeline: {
      title: 'Süreç nasıl işliyor',
      subtitle: 'İlk görüşmeden kartın teslimine altı adım.',
      steps: [
        { title: 'Danışmanlık', duration: '30-60 dk', desc: 'Gerekçenizi inceler, şansları değerlendirir, belge listesini çıkarırız.' },
        { title: 'Belge derlemesi', duration: '5-14 gün', desc: 'Belgeleri toplar, yeminli tercüme yaptırır, gerekirse ZUS (Sosyal Güvenlik Kurumu) / US (vergi dairesi) / meldunek (ikamet beyanı) işlemlerini hallederiz.' },
        { title: 'MOS v2.0\'a yükleme', duration: '1 gün', desc: 'Başvuruyu ve ekleri devlet sistemine yükler, 340 PLN opłata skarbowa (damga vergisi) öderiz.' },
        { title: 'Biyometrik veri', duration: '1 ziyaret', desc: 'Tek zorunlu fiziki ziyaret - voivoda nezdinde parmak izi ve fotoğraf. Göçmenlik danışmanımız eşlik eder.' },
        { title: 'Bekleme ve ek talep', duration: '30-60 gün', desc: 'eDoręczenia üzerinden gelen uzupełnienia (ek belge taleplerine) yanıt veririz. Süreci müvekkil panelinden takip edersiniz.' },
        { title: 'Kartın teslimi', duration: '7 gün', desc: 'Olumlu karar sonrası kart blanketi için +100 PLN, hazır olduğuna dair bildirim, voivoda nezdinde teslim.' }
      ]
    },
    documents: {
      title: 'Tipik belge listesi',
      subtitle: 'Net liste başvuru gerekçenize bağlıdır. Sizin dosyanıza göre uyarlarız.',
      items: [
        'Doldurulmuş wniosek (7 sayfalık başvuru formu) - biz hazırlıyoruz',
        'Pasaport + tüm sayfaların fotokopisi',
        '4 adet renkli biyometrik fotoğraf 35×45 mm',
        'Gelir kaynağı kanıtı (umowa, PIT-11, banka ekstresi)',
        'Kira sözleşmesi veya zameldowanie - Polonya\'da konaklama kanıtı',
        'En az 30.000 € teminatlı sağlık sigortası (ZUS veya özel)',
        '340 PLN opłata skarbowa ödeme dekontu',
        'Gerekçeye özel belgeler (umowa o pracę, evlilik cüzdanı, üniversite belgesi vb.)'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Aşama başına sabit ücret. Başlamadan önce sözleşme imzalanır.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '30-60 dakika · şans değerlendirmesi' },
        { label: 'Anahtar teslim TRC takibi', value: '2.500 PLN\'den', note: 'Tüm aşamalar: belge derlemesinden teslime' },
        { label: 'Ret kararına itiraz', value: '1.800 PLN\'den', note: 'İtiraz için ayrı sözleşme' }
      ],
      note: 'Belirtilen ücretler bizim danışmanlık bedelimizdir. Resmi harçlar (340 + 100 PLN) ve yeminli tercümeler ayrıca ödenir.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (12 Aralık 2013 Yabancılar Kanunu)',
        'Rozporządzenie MSWiA w sprawie wniosków o udzielenie zezwolenia na pobyt (İçişleri Bakanlığı oturum başvuruları yönetmeliği)',
        'Kodeks postępowania administracyjnego (KPA - İdari Yargılama Usul Kanunu)',
        'Direktif 2003/86/AT (aile birleşimi)',
        'Direktif 2009/50/AT (Mavi Kart)'
      ]
    },
    faq: [
      { q: 'Polonya dışında olduğum sırada başvuru yapabilir miyim?', a: 'Hayır. wniosek (başvuru) Polonya\'da bizzat yapılır - başvuru anında yasal ikamet temeliniz (vize veya vizesiz giriş hakkı) geçerli olmalıdır. Ancak tüm dosyayı uzaktan hazırlayıp başvuru günü sizi havalimanında karşılayabiliriz.' },
      { q: 'Pasaporta vurulan stempel (mühür) ne işe yarar?', a: 'stempel (mühür) - başvurunun doğru yapılmasından sonra pasaporta tüm karar sürecini kapsayacak şekilde bir mühür vurulur ve viza süreniz dolmuş olsa bile ikametinizi yasallaştırır. Bu mühürle yaşamaya ve çalışmaya devam edebilirsiniz, ancak Polonya\'dan çıkış yapmak risklidir.' },
      { q: 'Bekleme sürecinde çalışabilir miyim?', a: 'Evet, başvurunuz iş gerekçesine dayanıyorsa ve başvuru anında zezwolenie na pracę (çalışma izniniz) hazırsa. Diğer durumlarda - bir önceki ikamet izninizin kuralları geçerlidir.' },
      { q: '2026\'da neler değişiyor?', a: 'Tüm başvurular yalnızca MOS v2.0 üzerinden yapılır, wojewoda ile yazışmalar eDoręczenia üzerinden yürütülür (ePUAP - e-devlet portalı veya kwalifikowany podpis - nitelikli elektronik imza gerekir). Voivoda ofisleri artık kağıt başvuru kabul etmez.' },
      { q: 'Reddedilirsem ne yapmalıyım?', a: 'Odwołanie (itiraz) için Szef UdSC\'ye (Yabancılar İdaresi Başkanı) 14 gününüz vardır. İkinci ret durumunda - Wojewódzki Sąd Administracyjny\'ye (Eyalet İdare Mahkemesi) skarga (dava) açmak için 30 gün. Tüm süreci biz yürütürüz.' },
      { q: 'Lehçe sınavına girmem gerekiyor mu?', a: 'TRC için hayır. B1 seviyesinde Lehçe yalnızca vatandaşlığa kabul (natüralizasyon) ve bazı daimi ikamet vakalarında zorunludur.' }
    ],
    related: ['karta-stalego-pobytu', 'kod-95', 'apelacje'],
    ctaTitle: 'Dosyanızı 30 dakikada birlikte inceleyelim',
    ctaSubtitle: 'İlk danışmanlık ücretsizdir. Görüşme sonrasında gerekçenize özel belge listesi ve tahmini süre alırsınız.'
  },
  uk: {
    slug: 'karta-pobytu',
    group: 'immigration',
    icon: 'id-card',
    badge: '2026 · MOS v2.0',
    title: 'Karta Czasowego Pobytu',
    subtitle: 'Тимчасова карта побуту в Польщі',
    lead: 'Карта побуту — біометричний документ, що підтверджує право іноземця проживати в Польщі до 3 років. З 2026 року подання — лише через систему MOS v2.0, листування з воєводою — через eDoręczenia.',
    facts: [
      { label: 'Термін дії', value: 'до 3 років', note: 'з правом продовження' },
      { label: 'Держмито', value: '340 + 100 PLN', note: 'заява + карта' },
      { label: 'Термін отримання', value: '6–8 міс.', note: 'у Mazowieckim · за законом до 90 днів' },
      { label: 'Де подається', value: 'MOS v2.0', note: 'за воєводством проживання' }
    ],
    grounds: {
      title: 'Підстави для подання',
      subtitle: 'Вісім типових підстав за Ustawa o cudzoziemcach.',
      items: [
        { title: 'Робота в польського роботодавця', desc: 'Umowa o pracę або zlecenie, зарплата від мінімальної (4 806 PLN брутто у 2026 році). Оформлюємо разом із zezwolenie na pracę.' },
        { title: 'Blue Card ЄС (висококваліфікований)', desc: 'Вища освіта, зарплата від 1,5× середньої по Польщі, контракт від 1 року. Плюс — пришвидшена процедура.' },
        { title: 'Власний бізнес', desc: 'Sp. z o.o. із доходом від 12-кратної середньої зарплати або 2 штатними працівниками, або JDG.' },
        { title: 'Навчання в акредитованому виші', desc: 'Підтвердження з dziekanatu, докази наявності коштів (≥ 721 PLN/міс), житло, медстраховка.' },
        { title: 'Возз’єднання сім’ї', desc: 'Для подружжя та дітей громадян Польщі або власників карти сталого побуту / довгострокового резидента ЄС.' },
        { title: 'Польське походження', desc: 'Якщо польське коріння вже підтверджене — одразу на карту сталого побуту; якщо ще ні — можна через карту побуту.' },
        { title: 'Гуманітарні підстави', desc: 'Перебування, коли повернення неможливе через обставини, не залежні від вас.' },
        { title: 'Інші підстави', desc: 'Жертви торгівлі людьми, стажування, волонтерство, духовна діяльність, наукова робота тощо.' }
      ]
    },
    timeline: {
      title: 'Як проходить справа',
      subtitle: 'Шість кроків від першого дзвінка до отримання карти.',
      steps: [
        { title: 'Консультація', duration: '30–60 хв', desc: 'Розбираємо вашу підставу, оцінюємо шанси, складаємо список документів.' },
        { title: 'Збір пакета', duration: '5–14 днів', desc: 'Збираємо документи, перекладаємо присяжно, готуємо ZUS / US / meldunek за потреби.' },
        { title: 'Подання у MOS v2.0', duration: '1 день', desc: 'Завантажуємо заяву та додатки в державну систему, сплачуємо opłatę skarbową 340 PLN.' },
        { title: 'Здавання біометрії', duration: '1 візит', desc: 'Єдиний обов’язковий візит — відбитки та фото у воєводи. Супроводжує наш імміграційний консультант.' },
        { title: 'Очікування і запити', duration: '30–60 днів', desc: 'Відповідаємо на uzupełnienia через eDoręczenia. За статусом стежите в клієнтському порталі.' },
        { title: 'Отримання карти', duration: '7 днів', desc: 'Після позитивного рішення — +100 PLN за бланк карти, повідомлення про готовність, видача у воєводи.' }
      ]
    },
    documents: {
      title: 'Типовий пакет документів',
      subtitle: 'Конкретний перелік залежить від підстави. Адаптуємо під ваш кейс.',
      items: [
        'Заповнений wniosek (форма на 7 сторінок) — готуємо ми',
        'Закордонний паспорт + копії всіх сторінок',
        '4 кольорові біометричні фото 35×45 мм',
        'Підтвердження джерела доходу (umowa, PIT-11, виписки з рахунку)',
        'Договір оренди або zameldowanie — підтвердження житла в Польщі',
        'Поліс медичного страхування (ZUS або приватний) із покриттям ≥ 30 000 €',
        'Підтвердження сплати opłaty skarbowej 340 PLN',
        'Документи за підставою (umowa o pracę, свідоцтво про шлюб, довідка з вишу тощо)'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Фіксована ціна за етап. Обговорюємо й підписуємо договір до початку.',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '30–60 хвилин · оцінка шансів' },
        { label: 'Супровід карти побуту під ключ', value: 'від 2 500 PLN', note: 'Усі етапи: від збору до видачі' },
        { label: 'Apelacja при відмові', value: 'від 1 800 PLN', note: 'Окремий договір на оскарження' }
      ],
      note: 'Зазначено наші гонорари. Держмита (340 + 100 PLN) та присяжні переклади — окремо.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach',
        'Rozporządzenie MSWiA w sprawie wniosków o udzielenie zezwolenia na pobyt',
        'Kodeks postępowania administracyjnego (KPA)',
        'Dyrektywa 2003/86/WE (возз’єднання сім’ї)',
        'Dyrektywa 2009/50/WE (Blue Card)'
      ]
    },
    faq: [
      { q: 'Чи можна подати на карту побуту, перебуваючи за кордоном?', a: 'Ні. Заява (wniosek) подається особисто в Польщі — підстава перебування має бути чинною (віза або безвіз). Але ми можемо підготувати весь пакет дистанційно та зустріти вас в аеропорту в день подання.' },
      { q: 'Що дає stempel у паспорті?', a: 'Stempel (штамп) — після правильного подання в паспорт ставиться штамп, що легалізує ваше перебування на весь термін розгляду — навіть якщо віза вже закінчилася. З ним можна жити та працювати, але виїжджати з Польщі без ризику не можна.' },
      { q: 'Чи можу я працювати під час очікування?', a: 'Так, якщо ви подавалися на підставі роботи й на момент подання вже мали zezwolenie (дозвіл). В інших випадках — за правилами вашого попереднього дозволу на перебування.' },
      { q: 'Що змінюється у 2026 році?', a: 'Усі заяви подаються лише через MOS v2.0 (нова система подачі), листування з wojewodą (воєводою) — через eDoręczenia (електронна доставка) (потрібен ePUAP — портал держпослуг або kwalifikowany podpis — кваліфікований електронний підпис). Паперові заяви воєводи більше не приймають.' },
      { q: 'Що робити при відмові?', a: 'У вас є 14 днів на odwołanie (апеляцію) до Szefa Urzędu do Spraw Cudzoziemców (Голови Управління у справах іноземців). При повторній відмові — 30 днів на skargę (скаргу) до Wojewódzki Sąd Administracyjny (Воєводського адміністративного суду). Ведемо повний цикл.' },
      { q: 'Чи треба складати іспит із польської?', a: 'Для карти побуту — ні. Польська B1 обов’язкова лише при натуралізації (громадянстві) та в деяких випадках для карти сталого побуту.' }
    ],
    related: ['karta-stalego-pobytu', 'kod-95', 'apelacje'],
    ctaTitle: 'Розберемо ваш кейс за 30 хвилин',
    ctaSubtitle: 'Перша консультація безкоштовна. Після дзвінка ви отримаєте список документів під вашу підставу та орієнтовний термін.'
  }
};

export default kartaPobytu;
