import type { ServiceEntry } from './types';

const dueDiligenceNieruchomosci: ServiceEntry = {
  ru: {
    slug: 'due-diligence-nieruchomosci',
    group: 'realestate',
    icon: 'shield',
    badge: 'Due diligence · KW · obciążenia',
    title: 'Проверка чистоты сделки (Due Diligence)',
    subtitle: 'Юридическая проверка недвижимости перед покупкой: KW, обременения, история',
    lead: 'Перед подписанием aktu notarialnego проверяем недвижимость на скрытые проблемы: невыплаченные кредиты, арест, неправильные wpis в księgę wieczystą, споры в суде, нелегальные пристройки, долги ZUS / podatku от nieruchomości. 70% «отличных» предложений на rynku вторичном имеют скрытые проблемы. Наш report защищает покупку и стоит 1% от cены покупки. Подходит как для квартиры за 500 тыс., так и для коммерческой за 50 млн.',
    facts: [
      { label: 'Срок проверки', value: '5-10 дней', note: 'standard · большие объекты дольше' },
      { label: 'Объём отчёта', value: '15-40 страниц', note: 'PDF + risk-rating' },
      { label: 'Источников проверки', value: '12+', note: 'KW, KRS, Geoportal, US, ZUS' },
      { label: 'Гарантия', value: '100%', note: 'compensjuemy убытки от пропущенных рисков' }
    ],
    grounds: {
      title: 'Что проверяем',
      subtitle: 'Каждая категория - отдельный риск, который может стоить десятки тысяч PLN после покупки.',
      items: [
        { title: 'Księga wieczysta - wpisy и obciążenia', desc: 'Hipoteka на банк, służebności, użytkowanie wieczyste, dożywocie, prawo pierwokupu. Каждое обременение остаётся с недвижимостью при покупке. Иногда продавец «не помнит» о hipotece.' },
        { title: 'История собственности', desc: 'Anali­ujemy все wpisy в KW за 20+ лет. Spadki, darowizny, sprzedaży, постановки об аресте. Оценка risiku skarg от прежних собственников или их наследников.' },
        { title: 'Соответствие nieruchomości документам', desc: 'Сравниваем мapę ewidencyjną, projekty budowlane, decyzje о pozwoleniu na budowę. Обнаруживаем нелегальные пристройки (legalizacja может стоить 50 тыс.).' },
        { title: 'Долги ZUS / US / podatków', desc: 'Sprawdzamy zaległości продавца - могут стать вашей проблемой при wpisie hipoteki przymusowej. Через wniosek do ZUS i US (с pełnomocnictwem продавца).' },
        { title: 'Sądowe споры', desc: 'Проверяем repertoria sądów по адресу - есть ли активные дела о собственности, грaнicach, służebnościach. Через KSEG и репозиторий orzeczeń.' },
        { title: 'Plan miejscowy и infrastructura', desc: 'Что будет вокруг через 5 лет? Plan zagospodarowania przestrzennego, плановые дороги, школы, заводы. Проверяем для каждого участка land и для коммерческой недвижимости - критично.' },
        { title: 'Договоры najmu', desc: 'Если продавец сдаёт - переходят к вам. Проверяем условия, сроки, депозит, regulowanie. Skomplikowane договоры с лояльными arендaторами могут уменьшить рыночную стоимость на 10-20%.' },
        { title: 'Wspólnota mieszkaniowa', desc: 'Для квартир - проверяем uchwały wspólnoty, fundusz remontowy, planowane remonty. Sometimes wspólnota planирует 100k PLN remont - это становится вашей частью пропорционально udziałowi.' }
      ]
    },
    timeline: {
      title: 'Этапы due diligence',
      subtitle: 'Стандарт - 5-10 дней. Срочно (3 дня) - +50%. Сложные объекты (большие участки, działalność gospodarcza) - до 3 недель.',
      steps: [
        { title: 'Бесплатная оценка', duration: '15 мин', desc: 'Адрес и тип объекта. Подбираем pakiet (basic / standard / premium) и оцениваем risk-уровень.' },
        { title: 'Договор и pełnomocnictwo', duration: '1 день', desc: 'Umowa o due diligence + pełnomocnictwo от вас (для запросов до US, ZUS) и от продавца (для документов с регистрационных органов).' },
        { title: 'Запросы - этап 1', duration: '1-2 дня', desc: 'Wyciąg z KW (księga wieczysta), wypis z rejestru gruntów, wyrys z mapy ewidencyjnej. Все publiczne реestrы - мгновенно.' },
        { title: 'Запросы - этап 2', duration: '3-5 дней', desc: 'Zaświadczenia z ZUS, US, urząd miasta (zaległości), wspólnota mieszkaniowa (uchwały, fundusz). Через pełnomocnictwo продавца.' },
        { title: 'Анализ документации продавца', duration: '1-2 дня', desc: 'Изучаем: titul prawny (akt poprzedni), pozwolenia на budowę, certyficaty energetyczne, decyzje administracyjne. Сравниваем с rzeczywistością.' },
        { title: 'Inspekcja na miejscu', duration: '1 день', desc: 'Опционально для премиум pакетов. Геодезист и rzeczoznawca проверяют реальное состояние, granice, нелегальные пристройки.' },
        { title: 'Raport DD', duration: '1 день', desc: 'PDF-отчёт 15-40 страниц с findings, risk-rating (зелёный/жёлтый/красный), рекомендациями. Ставим точки в ekonomice сделки или предлагаем negotiacje.' },
        { title: 'Презентация и обсуждение', duration: '30 мин', desc: 'Видео-встреча или личная - объясняем findings, предлагаем стратегию: продолжать, требовать снижения цены, отказываться, требовать гарантий в umowie.' }
      ]
    },
    documents: {
      title: 'Что нужно для DD',
      subtitle: 'Минимум - адрес и numer KW. Остальное запрашиваем сами.',
      items: [
        'Адрес недвижимости и numer księgi wieczystej',
        'Номер ewidencyjny działki (для участков)',
        'Текущий umowa przedwstępna или предложение от продавца',
        'Pełnomocnictwo от вас (запросы до US, ZUS, urząd)',
        'Pełnomocnictwo от продавца (запросы до его «персональных» rejestrów)',
        'Cena покупки и условия оплаты',
        'Информация о финансировании (кредит - отдельные проверки банка)',
        'Документы продавца если он представит (предыдущий akt, plan, certyfikaty)'
      ]
    },
    pricing: {
      title: 'Стоимость DD',
      subtitle: 'Зависит от типа недвижимости и сложности проверки.',
      items: [
        { label: 'Basic - квартира', value: '1 800 PLN', note: 'KW + ewidencja + ZUS/US' },
        { label: 'Standard - квартира', value: '2 800 PLN', note: '+ wspólnota, plan miejscowy, sąd' },
        { label: 'Standard - дом', value: '4 500 PLN', note: '+ legalność rozbudowy, granice' },
        { label: 'Premium - коммерческая', value: 'от 8 500 PLN', note: 'Полный pакет + on-site inspekcja' }
      ],
      note: 'Для участков, działek przemysłowych, budynków biurowych - индивидуальный расчёт. Срочно (3 дня) +50%. Геодезист (если нужен) ~1 500 PLN отдельно. Цена обычно равна 0,5-1% от цены недвижимости.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece',
        'Ustawa z dnia 17 maja 1989 r. - Prawo geodezyjne i kartograficzne',
        'Ustawa z dnia 21 sierpnia 1997 r. o gospodarce nieruchomościami',
        'Ustawa z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym',
        'Ustawa z dnia 7 lipca 1994 r. - Prawo budowlane (legalność budowli)',
        'Ustawa z dnia 24 czerwca 1994 r. o własności lokali (wspólnota mieszkaniowa)',
        'Kodeks cywilny - rozdz. III dział II (prawo własności)'
      ]
    },
    faq: [
      { q: 'Зачем DD, если есть нотариус?', a: 'Нотариус проверяет KW (księga wieczysta - поземельная книга) и dokumenty (документы) при подписании, но не углубляется. Не запрашивает ZUS/US, не анализирует историю, не проверяет нелегальные пристройки, не смотрит plany miejscowe (план застройки территории). Нотариус несёт ответственность только за то, что есть в aktach (актах) у него на столе. DD проверяет, что показала только prywatna агрегация. Видели сделки, где akt notarialny (нотариальный акт) прошёл, а через год пришла hipoteka (ипотека) на 200к.' },
      { q: 'Можно ли отказаться от сделки после negativnogo DD?', a: 'Да, если в umowie przedwstępnej (предварительном договоре) есть условие «wykonanie umowy uzależnione od pozytywnego due diligence prawnego» (исполнение договора зависит от положительной юридической проверки). Если такого пункта нет - потеряете zaliczkę (задаток, 5-10%). Поэтому пишем в каждой umowie przedwstępnej от наших клиентов. Если другая сторона не согласна - это уже red flag.' },
      { q: 'Какие самые частые «находки» DD?', a: 'Топ-5 находок за 2024: 1) Hipoteka (ипотека) не выплаченная или нерегулярно регулярная (30% случаев); 2) Нелегальные пристройки (przybudówka, веранда, дополнительный этаж - 25%); 3) Грaнicy не соответствуют ewidencji (кадастру, 15%); 4) Активные споры в суде (10%); 5) Долги podatków (налогов) от nieruchomości (недвижимости, 10%). Каждая может стоить 30 000+ PLN.' },
      { q: 'Что делать с hipoteką при покупке?', a: 'Стандартная схема: продавец гарантирует выплату hipoteki (ипотеки) из cены покупки, банк готовит wniosek o wykreślenie hipoteki (заявление о снятии ипотеки) и передаёт нотариусу. Akt notarialny (нотариальный акт) подписывается с условием «после wykreślenia hipoteki» (после снятия ипотеки). Деньги покупателя депонируются на rachunek powierniczy (эскроу-счёт). После wykreślenia hipoteki - деньги переходят продавцу. Контролируем процесс под ключ.' },
      { q: 'Можно ли проверить только KW самому?', a: 'KW (księga wieczysta - поземельная книга) - да, мгновенно через ekw.ms.gov.pl за 0 PLN. Но KW показывает только «зарегистрированные» проблемы. Не показывает: zaległości (задолженности) у продавца, sporów w sądzie (судебных споров), нелегальных пристроек, planów miejscowych (планов застройки), problemów z wspólnotą (проблем с товариществом собственников). KW - 30% всех risiков. DD - 100%.' },
      { q: 'Сколько времени до aktu после positiv­nogo DD?', a: 'Если все papiery (документы) уже у нотариуса - 1-3 дня после нашего raportu (отчёта). Если нужно ещё mwait wniosek MSWiA (заявление в МВД) или wykreślenie hipoteki (снятие ипотеки) - 2-8 недель. План на консультации.' },
      { q: 'Гарантия что в DD не пропустят что-то?', a: 'У нас в umowie (договоре) - гарантия: если что-то пропустим из standardowych (стандартных) источников и это станет проблемой в первые 12 месяцев - компенсируем убытки до 100% наших гонораров. На практике мы strаchujem себя и каждый отчёт проверяет 2 специалиста.' }
    ],
    related: ['mswia-zezwolenie', 'notariusz-asysta', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Due diligence перед покупкой',
    ctaSubtitle: 'Бесплатно оцениваем objet и подбираем pакет за 15 минут. Защищаем покупку от 1 800 PLN.'
  },
  pl: {
    slug: 'due-diligence-nieruchomosci',
    group: 'realestate',
    icon: 'shield',
    badge: 'Due diligence · KW · obciążenia',
    title: 'Due diligence nieruchomości',
    subtitle: 'Prawne sprawdzenie nieruchomości przed zakupem: KW, obciążenia, historia',
    lead: 'Przed aktem notarialnym sprawdzamy nieruchomość pod kątem ukrytych problemów: niespłacone hipoteki, areszt, błędne wpisy w KW, spory sądowe, nielegalne dobudowy, długi ZUS/podatków. 70% „świetnych" ofert ma ukryte wady. Raport chroni transakcję, koszt 0,5-1% ceny.',
    facts: [
      { label: 'Termin', value: '5-10 dni', note: 'standard' },
      { label: 'Objętość raportu', value: '15-40 stron', note: 'PDF + risk rating' },
      { label: 'Źródła sprawdzenia', value: '12+', note: 'KW, KRS, Geoportal, US, ZUS' },
      { label: 'Gwarancja', value: '100%', note: 'kompensjuemy pominięte ryzyka' }
    ],
    grounds: {
      title: 'Co sprawdzamy',
      subtitle: 'Każda kategoria - osobne ryzyko liczone w dziesiątkach tysięcy PLN.',
      items: [
        { title: 'KW - wpisy i obciążenia', desc: 'Hipoteka, służebności, użytkowanie wieczyste, dożywocie, prawo pierwokupu.' },
        { title: 'Historia własności', desc: 'Wpisy w KW za 20+ lat. Spadki, darowizny, areszty.' },
        { title: 'Zgodność z dokumentami', desc: 'Mapa ewidencyjna vs projekt budowlany. Nielegalne dobudowy.' },
        { title: 'Długi ZUS / US / podatków', desc: 'Hipoteka przymusowa może spaść na Ciebie.' },
        { title: 'Spory sądowe', desc: 'Sprawdzanie repertoriów sądowych.' },
        { title: 'Plan miejscowy', desc: 'Co będzie wokół za 5 lat - drogi, fabryki, szkoły.' },
        { title: 'Umowy najmu', desc: 'Przechodzą na Ciebie. Lojalni najemcy obniżają wartość 10-20%.' },
        { title: 'Wspólnota mieszkaniowa', desc: 'Uchwały, fundusz remontowy, planowane remonty.' }
      ]
    },
    timeline: {
      title: 'Etapy DD',
      subtitle: '5-10 dni standard. Pilne (3 dni) - +50%.',
      steps: [
        { title: 'Bezpłatna ocena', duration: '15 min', desc: 'Adres, typ. Pakiet i risk-poziom.' },
        { title: 'Umowa + pełnomocnictwa', duration: '1 dzień', desc: 'Od Ciebie i sprzedającego.' },
        { title: 'Zapytania - etap 1', duration: '1-2 dni', desc: 'KW, rejestr gruntów, mapa ewidencyjna.' },
        { title: 'Zapytania - etap 2', duration: '3-5 dni', desc: 'ZUS, US, urząd miasta, wspólnota.' },
        { title: 'Analiza dokumentów', duration: '1-2 dni', desc: 'Tytuły, pozwolenia, certyfikaty.' },
        { title: 'Inspekcja na miejscu', duration: '1 dzień', desc: 'Premium - geodeta i rzeczoznawca.' },
        { title: 'Raport', duration: '1 dzień', desc: '15-40 stron, risk rating, rekomendacje.' },
        { title: 'Prezentacja', duration: '30 min', desc: 'Strategia: kontynuować, negocjować, odejść.' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy',
      subtitle: 'Minimum - adres i KW.',
      items: [
        'Adres + numer KW',
        'Numer ewidencyjny działki',
        'Umowa przedwstępna',
        'Pełnomocnictwo od Ciebie',
        'Pełnomocnictwo od sprzedającego',
        'Cena i warunki płatności',
        'Informacja o finansowaniu',
        'Dokumenty sprzedającego'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Zależy od typu i złożoności.',
      items: [
        { label: 'Basic - mieszkanie', value: '1 800 PLN', note: 'KW + ewidencja + ZUS/US' },
        { label: 'Standard - mieszkanie', value: '2 800 PLN', note: '+ wspólnota, plan, sąd' },
        { label: 'Standard - dom', value: '4 500 PLN', note: '+ legalność, granice' },
        { label: 'Premium - komercyjna', value: 'od 8 500 PLN', note: 'Pełny pakiet + inspekcja' }
      ],
      note: 'Działki przemysłowe - kalkulacja indywidualna. Pilne +50%. Geodeta ~1 500 PLN osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 6 lipca 1982 r. o księgach wieczystych i hipotece',
        'Prawo geodezyjne i kartograficzne z 17 maja 1989 r.',
        'Ustawa z 21 sierpnia 1997 r. o gospodarce nieruchomościami',
        'Ustawa z 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym',
        'Prawo budowlane z 7 lipca 1994 r.',
        'Ustawa z 24 czerwca 1994 r. o własności lokali',
        'Kodeks cywilny - rozdz. III dział II'
      ]
    },
    faq: [
      { q: 'Po co DD, jak jest notariusz?', a: 'Notariusz sprawdza KW i dokumenty na biurku. Nie pyta ZUS/US, nie analizuje historii, nie sprawdza dobudów, nie czyta planów. DD pokrywa to, co notariusz pomija.' },
      { q: 'Wycofanie po negatywnym DD?', a: 'Tak, jeśli w umowie przedwstępnej jest warunek pozytywnego DD. Bez tego - utracisz zaliczkę. Wpisujemy klauzulę w każdą umowę.' },
      { q: 'Najczęstsze findings?', a: 'Hipoteka (30%), nielegalna dobudowa (25%), granice (15%), spory (10%), długi (10%).' },
      { q: 'Hipoteka przy zakupie?', a: 'Sprzedający spłaca z ceny, bank wykreśla hipotekę, akt po wykreśleniu. Pieniądze na rachunku powierniczym.' },
      { q: 'Sam KW?', a: 'KW - 0 PLN online. Pokaże 30% ryzyk. Resztę - DD.' },
      { q: 'Akt po DD?', a: 'Jeśli papiery u notariusza - 1-3 dni. MSWiA / wykreślenie hipoteki - 2-8 tyg.' },
      { q: 'Gwarancja?', a: 'Tak - kompensjuemy do 100% honorarium za pominięcie standardowego źródła w 12 mies.' }
    ],
    related: ['mswia-zezwolenie', 'notariusz-asysta', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'DD przed zakupem',
    ctaSubtitle: 'Bezpłatna ocena w 15 min. Od 1 800 PLN.'
  },
  en: {
    slug: 'due-diligence-nieruchomosci',
    group: 'realestate',
    icon: 'shield',
    badge: 'Due diligence · KW · encumbrances',
    title: 'Real estate due diligence',
    subtitle: 'Legal property check before purchase: KW, encumbrances, history',
    lead: 'Before signing the deed, we check the property for hidden problems: outstanding mortgages, arrests, incorrect KW entries, court disputes, illegal extensions, ZUS/property tax debts. 70% of "great" secondary-market offers carry hidden issues. Our report protects the purchase and costs 0.5-1% of the price. Works for a 500k apartment or a 50M commercial asset.',
    facts: [
      { label: 'Turnaround', value: '5-10 days', note: 'standard · large assets longer' },
      { label: 'Report length', value: '15-40 pages', note: 'PDF + risk rating' },
      { label: 'Sources checked', value: '12+', note: 'KW, KRS, Geoportal, tax, social' },
      { label: 'Guarantee', value: '100%', note: 'we cover losses from missed risks' }
    ],
    grounds: {
      title: 'What we check',
      subtitle: 'Each category is a separate risk that can cost tens of thousands after closing.',
      items: [
        { title: 'KW - entries and encumbrances', desc: 'Mortgages, easements, perpetual usufruct, life estates, pre-emption rights. Each persists with the property at sale.' },
        { title: 'Ownership history', desc: '20+ years of KW entries. Inheritances, gifts, sales, arrests. Risk of claims by prior owners or heirs.' },
        { title: 'Property vs documents match', desc: 'Cadastral map vs building permits. Spot illegal extensions (legalization can cost 50k).' },
        { title: 'Tax/social debts', desc: 'Seller\'s arrears can become forced mortgages. We check via tax/ZUS offices with PoA.' },
        { title: 'Court disputes', desc: 'Court repository check by address - active cases on ownership, boundaries, easements.' },
        { title: 'Local plan and infrastructure', desc: 'What will be around in 5 years? Land-use plan, planned roads, schools, factories.' },
        { title: 'Lease agreements', desc: 'Existing tenants pass to you. Loyal tenants can knock 10-20% off market value.' },
        { title: 'Housing community', desc: 'Resolutions, renovation fund, planned works. Sometimes 100k repair lurks ahead.' }
      ]
    },
    timeline: {
      title: 'DD steps',
      subtitle: '5-10 days standard. Rush (3 days) +50%. Complex assets up to 3 weeks.',
      steps: [
        { title: 'Free assessment', duration: '15 min', desc: 'Address and type. Choose package and risk level.' },
        { title: 'Engagement + PoAs', duration: '1 day', desc: 'PoA from you (tax/ZUS) and from seller (registry queries).' },
        { title: 'Queries - phase 1', duration: '1-2 days', desc: 'KW extract, land register, cadastral map.' },
        { title: 'Queries - phase 2', duration: '3-5 days', desc: 'ZUS, tax, city hall, housing community.' },
        { title: 'Document analysis', duration: '1-2 days', desc: 'Title chain, permits, energy certificates.' },
        { title: 'On-site inspection', duration: '1 day', desc: 'Premium tier - surveyor + appraiser.' },
        { title: 'DD report', duration: '1 day', desc: '15-40 pages, risk rating, recommendations.' },
        { title: 'Walkthrough', duration: '30 min', desc: 'Strategy call: continue, negotiate, walk away.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Minimum - address and KW number.',
      items: [
        'Address and KW number',
        'Plot cadastral number (for land)',
        'Preliminary agreement or seller offer',
        'PoA from you (tax/ZUS queries)',
        'PoA from seller (personal registry queries)',
        'Price and payment terms',
        'Financing info (mortgage triggers bank checks)',
        'Seller documents (deed, plans, certificates)'
      ]
    },
    pricing: {
      title: 'DD price',
      subtitle: 'Depends on property type and complexity.',
      items: [
        { label: 'Basic - apartment', value: '1,800 PLN', note: 'KW + cadastre + tax/ZUS' },
        { label: 'Standard - apartment', value: '2,800 PLN', note: '+ community, plan, court' },
        { label: 'Standard - house', value: '4,500 PLN', note: '+ build legality, boundaries' },
        { label: 'Premium - commercial', value: 'from 8,500 PLN', note: 'Full pack + on-site' }
      ],
      note: 'Industrial land, office buildings - custom quote. Rush (3 days) +50%. Surveyor ~1,500 PLN separate. Typically 0.5-1% of price.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Land Register and Mortgage Act of 6 July 1982',
        'Geodetic and Cartographic Law of 17 May 1989',
        'Real Estate Management Act of 21 August 1997',
        'Spatial Planning Act of 27 March 2003',
        'Building Law of 7 July 1994 (build legality)',
        'Apartment Ownership Act of 24 June 1994',
        'Civil Code - Book III, Title II (property law)'
      ]
    },
    faq: [
      { q: "Why DD if there's a notary?", a: "The notary checks KW and the docs in front of them. They don't query tax/ZUS, don't analyze history, don't check illegal extensions, don't read zoning plans. We've seen deeds clear and a 200k mortgage land 12 months later." },
      { q: 'Walk away after negative DD?', a: 'Yes if the preliminary agreement contains a "subject to favorable DD" clause. Without it - you lose the deposit. We always insert this clause.' },
      { q: 'Most common findings?', a: 'Top 5 in 2024: unpaid mortgages (30%), illegal extensions (25%), boundary mismatches (15%), active disputes (10%), tax arrears (10%). Each can cost 30k+ PLN.' },
      { q: 'Mortgage at purchase?', a: 'Standard: seller pays from purchase price, bank prepares mortgage release, deed conditional on release. Funds in escrow. Released - funds to seller. We run it.' },
      { q: 'Can I just check KW myself?', a: 'KW is free at ekw.ms.gov.pl. Covers ~30% of risks. Misses tax debts, court disputes, illegal extensions, zoning, community problems. KW alone is gambling.' },
      { q: 'Time to deed after positive DD?', a: 'Papers ready - 1-3 days. MSWiA permit / mortgage release pending - 2-8 weeks.' },
      { q: 'Guarantee?', a: 'Contractual: if we miss something from standard sources and it surfaces in the first 12 months, we cover up to 100% of our fees.' }
    ],
    related: ['mswia-zezwolenie', 'notariusz-asysta', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Pre-purchase due diligence',
    ctaSubtitle: 'Free 15-minute assessment. From 1,800 PLN.'
  }
};

export default dueDiligenceNieruchomosci;
