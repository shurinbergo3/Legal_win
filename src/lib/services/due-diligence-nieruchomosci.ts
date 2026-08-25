import type { ServiceEntry } from './types';

const dueDiligenceNieruchomosci: ServiceEntry = {
  ru: {
    slug: 'due-diligence-nieruchomosci',
    group: 'realestate',
    icon: 'shield',
    badge: 'Due diligence · KW · obciążenia',
    title: 'Проверка чистоты сделки (Due Diligence)',
    subtitle: 'Юридическая проверка недвижимости перед покупкой: KW, обременения, история',
    lead: 'Перед подписанием aktu notarialnego проверяем недвижимость на скрытые проблемы: невыплаченные кредиты, арест, неправильные wpis в księgę wieczystą, споры в суде, нелегальные пристройки, долги ZUS / podatku от nieruchomości. 70% «отличных» предложений на rynku вторичном имеют скрытые проблемы. Наш report защищает покупку и стоит 1% от цены покупки. Подходит как для квартиры за 500 тыс., так и для коммерческой за 50 млн.',
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
        { title: 'История собственности', desc: 'Analizujemy все wpisy в KW за 20+ лет. Spadki, darowizny, sprzedaży, постановки об аресте. Оценка risiku skarg от прежних собственников или их наследников.' },
        { title: 'Соответствие nieruchomości документам', desc: 'Сравниваем mapę ewidencyjną, projekty budowlane, decyzje о pozwoleniu na budowę. Обнаруживаем нелегальные пристройки (legalizacja может стоить 50 тыс.).' },
        { title: 'Долги ZUS / US / podatków', desc: 'Sprawdzamy zaległości продавца - могут стать вашей проблемой при wpisie hipoteki przymusowej. Через wniosek do ZUS i US (с pełnomocnictwem продавца).' },
        { title: 'Sądowe споры', desc: 'Проверяем repertoria sądów по адресу - есть ли активные дела о собственности, granicach, służebnościach. Через KSEG и репозиторий orzeczeń.' },
        { title: 'Plan miejscowy и infrastructura', desc: 'Что будет вокруг через 5 лет? Plan zagospodarowania przestrzennego, плановые дороги, школы, заводы. Проверяем для каждого участка land и для коммерческой недвижимости - критично.' },
        { title: 'Договоры najmu', desc: 'Если продавец сдаёт - переходят к вам. Проверяем условия, сроки, депозит, regulowanie. Skomplikowane договоры с лояльными арендаторами могут уменьшить рыночную стоимость на 10-20%.' },
        { title: 'Wspólnota mieszkaniowa', desc: 'Для квартир - проверяем uchwały wspólnoty, fundusz remontowy, planowane remonty. Иногда wspólnota planuje 100k PLN remont - это становится вашей частью пропорционально udziałowi.' }
      ]
    },
    timeline: {
      title: 'Этапы due diligence',
      subtitle: 'Стандарт - 5-10 дней. Срочно (3 дня) - +50%. Сложные объекты (большие участки, działalność gospodarcza) - до 3 недель.',
      steps: [
        { title: 'Бесплатная оценка', duration: '15 мин', desc: 'Адрес и тип объекта. Подбираем pakiet (basic / standard / premium) и оцениваем risk-уровень.' },
        { title: 'Договор и pełnomocnictwo', duration: '1 день', desc: 'Umowa o due diligence + pełnomocnictwo от вас (для запросов до US, ZUS) и от продавца (для документов с регистрационных органов).' },
        { title: 'Запросы - этап 1', duration: '1-2 дня', desc: 'Wyciąg z KW (księga wieczysta), wypis z rejestru gruntów, wyrys z mapy ewidencyjnej. Все publiczne rejestry - мгновенно.' },
        { title: 'Запросы - этап 2', duration: '3-5 дней', desc: 'Zaświadczenia z ZUS, US, urząd miasta (zaległości), wspólnota mieszkaniowa (uchwały, fundusz). Через pełnomocnictwo продавца.' },
        { title: 'Анализ документации продавца', duration: '1-2 дня', desc: 'Изучаем: titul prawny (akt poprzedni), pozwolenia на budowę, certyficaty energetyczne, decyzje administracyjne. Сравниваем с rzeczywistością.' },
        { title: 'Inspekcja na miejscu', duration: '1 день', desc: 'Опционально для премиум пакетов. Геодезист и rzeczoznawca проверяют реальное состояние, granice, нелегальные пристройки.' },
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
        { label: 'Premium - коммерческая', value: 'от 8 500 PLN', note: 'Полный пакет + on-site inspekcja' }
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
      { q: 'Какие самые частые «находки» DD?', a: 'Топ-5 находок за 2024: 1) Hipoteka (ипотека) не выплаченная или нерегулярно регулярная (30% случаев); 2) Нелегальные пристройки (przybudówka, веранда, дополнительный этаж - 25%); 3) Границы не соответствуют ewidencji (кадастру, 15%); 4) Активные споры в суде (10%); 5) Долги podatków (налогов) от nieruchomości (недвижимости, 10%). Каждая может стоить 30 000+ PLN.' },
      { q: 'Что делать с hipoteką при покупке?', a: 'Стандартная схема: продавец гарантирует выплату hipoteki (ипотеки) из цены покупки, банк готовит wniosek o wykreślenie hipoteki (заявление о снятии ипотеки) и передаёт нотариусу. Akt notarialny (нотариальный акт) подписывается с условием «после wykreślenia hipoteki» (после снятия ипотеки). Деньги покупателя депонируются на rachunek powierniczy (эскроу-счёт). После wykreślenia hipoteki - деньги переходят продавцу. Контролируем процесс под ключ.' },
      { q: 'Можно ли проверить только KW самому?', a: 'KW (księga wieczysta - поземельная книга) - да, мгновенно через ekw.ms.gov.pl за 0 PLN. Но KW показывает только «зарегистрированные» проблемы. Не показывает: zaległości (задолженности) у продавца, sporów w sądzie (судебных споров), нелегальных пристроек, planów miejscowych (планов застройки), problemów z wspólnotą (проблем с товариществом собственников). KW - 30% всех рисков. DD - 100%.' },
      { q: 'Сколько времени до aktu после положительного DD?', a: 'Если все papiery (документы) уже у нотариуса - 1-3 дня после нашего raportu (отчёта). Если нужно ещё mwait wniosek MSWiA (заявление в МВД) или wykreślenie hipoteki (снятие ипотеки) - 2-8 недель. План на консультации.' },
      { q: 'Гарантия что в DD не пропустят что-то?', a: 'У нас в umowie (договоре) - гарантия: если что-то пропустим из standardowych (стандартных) источников и это станет проблемой в первые 12 месяцев - компенсируем убытки до 100% наших гонораров. На практике мы страхуем себя, и каждый отчёт проверяет 2 специалиста.' }
    ],
    related: ['mswia-zezwolenie', 'notariusz-asysta', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Due diligence перед покупкой',
    ctaSubtitle: 'Бесплатно оцениваем объект и подбираем пакет за 15 минут. Защищаем покупку от 1 800 PLN.'
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
  },
  tr: {
    slug: 'due-diligence-nieruchomosci',
    group: 'realestate',
    icon: 'shield',
    badge: 'Due diligence · KW · takyidat',
    title: 'Gayrimenkul due diligence (hukuki inceleme)',
    subtitle: 'Alımdan önce gayrimenkulün hukuki incelemesi: KW, takyidat, geçmiş',
    lead: 'Akt notarialny\'nın imzalanmasından önce gayrimenkulü gizli sorunlara karşı kontrol ediyoruz: ödenmemiş ipotek, haciz, hatalı KW kayıtları, mahkemedeki ihtilaflar, kaçak yapılaşma, ZUS / emlak vergisi borçları. İkinci el piyasasındaki "harika" tekliflerin %70\'inde gizli sorun çıkıyor. Raporumuz alımı koruyor ve satış bedelinin %0,5-1\'i kadar tutuyor. 500.000 PLN\'lik daire için de 50 milyon PLN\'lik ticari mülk için de uygundur.',
    facts: [
      { label: 'İnceleme süresi', value: '5-10 gün', note: 'standart · büyük objeler daha uzun' },
      { label: 'Rapor hacmi', value: '15-40 sayfa', note: 'PDF + risk-rating' },
      { label: 'Kontrol kaynağı sayısı', value: '12+', note: 'KW, KRS, Geoportal, US, ZUS' },
      { label: 'Garanti', value: '%100', note: 'kaçırılan riskten doğan zararı tazmin ediyoruz' }
    ],
    grounds: {
      title: 'Neyi kontrol ediyoruz',
      subtitle: 'Her kategori, alım sonrası on binlerce PLN\'ye mal olabilecek ayrı bir risktir.',
      items: [
        { title: 'Księga wieczysta - kayıtlar ve takyidat', desc: 'Banka ipoteği, służebności (intifa hakları), użytkowanie wieczyste, dożywocie (ölünceye kadar bakma), prawo pierwokupu (ön alım hakkı). Her takyidat alımda gayrimenkulle birlikte geçer. Bazen satıcı ipoteği "hatırlamaz".' },
        { title: 'Mülkiyet geçmişi', desc: 'KW\'deki son 20+ yılın tüm wpisy\'lerini analiz ediyoruz. Spadki (miras), darowizny (bağış), satışlar, haciz kararları. Eski sahiplerin veya mirasçılarının dava açma riskinin değerlendirilmesi.' },
        { title: 'Gayrimenkulün belgelerle uyumu', desc: 'Mapa ewidencyjna, projekty budowlane (yapı projeleri), pozwolenie na budowę (yapı izni) kararlarını karşılaştırıyoruz. Kaçak yapılaşmayı buluyoruz (legalizasyon 50.000 PLN\'ye mal olabilir).' },
        { title: 'ZUS / US / vergi borçları', desc: 'Satıcının zaległości\'lerini (borç birikimleri) kontrol ediyoruz - hipoteka przymusowa (zorunlu ipotek) yoluyla sizin sorununuza dönüşebilirler. Satıcının vekaletnamesiyle ZUS ve US\'ye sorulur.' },
        { title: 'Mahkeme ihtilafları', desc: 'Adresle mahkeme repertoria\'sını taratıyoruz - mülkiyet, sınır, służebność konusunda aktif dava var mı? KSEG ve karar arşivi üzerinden.' },
        { title: 'Plan miejscowy ve altyapı', desc: '5 yıl sonra çevrede ne olacak? Plan zagospodarowania przestrzennego (mekânsal planlama planı), planlanan yollar, okullar, fabrikalar. Her arsa için ve ticari gayrimenkul için kritik.' },
        { title: 'Umowa najmu (kira sözleşmeleri)', desc: 'Satıcı kiracısıysa - kiracılar size geçer. Şartları, süreleri, depozito ve regulowanie\'yi (kira ödeme düzenini) kontrol ediyoruz. Sadık kiracılı karmaşık sözleşmeler piyasa değerini %10-20 düşürebilir.' },
        { title: 'Wspólnota mieszkaniowa (kat malikleri)', desc: 'Daireler için - wspólnota uchwały\'lerini (kararlarını), fundusz remontowy\'yi (tadilat fonu), planlanan tadilatları kontrol ediyoruz. Kimi zaman wspólnota 100.000 PLN tadilat planlar - bu pay oranınızda size yansır.' }
      ]
    },
    timeline: {
      title: 'DD aşamaları',
      subtitle: 'Standart 5-10 gün. Acil (3 gün) +%50. Karmaşık objeler (büyük arsa, ticari faaliyet) - 3 haftaya kadar.',
      steps: [
        { title: 'Ücretsiz değerlendirme', duration: '15 dk', desc: 'Adres ve obje türü. Pakketi (basic / standard / premium) seçer ve risk seviyesini belirleriz.' },
        { title: 'Sözleşme ve pełnomocnictwo', duration: '1 gün', desc: 'Umowa o due diligence + pełnomocnictwo (US, ZUS sorguları için sizden) ve satıcıdan (kayıt kuruluşlarından belge için).' },
        { title: 'Sorgular - aşama 1', duration: '1-2 gün', desc: 'Wyciąg z KW, wypis z rejestru gruntów, wyrys z mapy ewidencyjnej. Kamuya açık siciller anında alınır.' },
        { title: 'Sorgular - aşama 2', duration: '3-5 gün', desc: 'ZUS, US ve urząd miasta\'dan zaległości belgeleri, wspólnota mieszkaniowa\'dan uchwały ve fundusz. Satıcının vekaletnamesiyle.' },
        { title: 'Satıcı belgelerinin analizi', duration: '1-2 gün', desc: 'Tytuł prawny (mülkiyet temeli), pozwolenia na budowę, certyfikaty energetyczne, decyzje administracyjne. Gerçeklikle karşılaştırma.' },
        { title: 'Yerinde keşif', duration: '1 gün', desc: 'Premium paketlerde opsiyonel. Geodeta (kadastrocu) ve rzeczoznawca (eksper) gerçek durumu, sınırları ve kaçak yapılaşmayı kontrol eder.' },
        { title: 'DD raporu', duration: '1 gün', desc: '15-40 sayfalık PDF rapor: bulgular, risk-rating (yeşil/sarı/kırmızı), tavsiyeler. İşlem ekonomisinde son söz veya yeniden müzakere önerisi.' },
        { title: 'Sunum ve görüşme', duration: '30 dk', desc: 'Görüntülü görüşme veya yüz yüze - bulguları açıklar, stratejiyi belirleriz: devam etmek, fiyat indirimi talep etmek, vazgeçmek veya umowa\'da garanti talep etmek.' }
      ]
    },
    documents: {
      title: 'DD için gerekenler',
      subtitle: 'Asgari - adres ve numer KW. Geri kalanını biz sorguluyoruz.',
      items: [
        'Gayrimenkul adresi ve księga wieczysta numarası',
        'Numer ewidencyjny działki (arsalar için)',
        'Mevcut umowa przedwstępna veya satıcı teklifi',
        'Sizden pełnomocnictwo (US, ZUS, urząd sorguları için)',
        'Satıcıdan pełnomocnictwo (kişisel kayıtlarına yönelik sorgular için)',
        'Alım bedeli ve ödeme şartları',
        'Finansman bilgisi (kredi - banka için ek incelemeler)',
        'Satıcının sunduğu belgeler (önceki akt, projeler, sertifikalar)'
      ]
    },
    pricing: {
      title: 'DD bedeli',
      subtitle: 'Gayrimenkul türü ve incelemenin karmaşıklığına göre değişir.',
      items: [
        { label: 'Basic - daire', value: '1.800 PLN', note: 'KW + ewidencja + ZUS / US' },
        { label: 'Standard - daire', value: '2.800 PLN', note: '+ wspólnota, plan miejscowy, mahkeme' },
        { label: 'Standard - ev', value: '4.500 PLN', note: '+ yapı yasallığı, sınırlar' },
        { label: 'Premium - ticari', value: '8.500 PLN\'den', note: 'Tam paket + yerinde keşif' }
      ],
      note: 'Arsalar, sanayi parselleri ve ofis binaları için bireysel hesap. Acil (3 gün) +%50. Geodeta gerekirse ~1.500 PLN ayrıdır. Genelde gayrimenkul fiyatının %0,5-1\'ine denk gelir.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece (Tapu Sicili ve İpotek Kanunu)',
        'Ustawa z dnia 17 maja 1989 r. - Prawo geodezyjne i kartograficzne (Jeodezi ve Kartografya Hukuku)',
        'Ustawa z dnia 21 sierpnia 1997 r. o gospodarce nieruchomościami (Gayrimenkul Yönetimi Kanunu)',
        'Ustawa z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym (Mekânsal Planlama Kanunu)',
        'Ustawa z dnia 7 lipca 1994 r. - Prawo budowlane (İmar Kanunu - yapı yasallığı)',
        'Ustawa z dnia 24 czerwca 1994 r. o własności lokali (Kat Mülkiyeti Kanunu)',
        'Kodeks cywilny - bölüm III kısım II (Medeni Kanun, mülkiyet hukuku)'
      ]
    },
    faq: [
      { q: 'Noter varken DD neden gerekli?', a: 'Noter imza anında KW ve dokumenty\'leri kontrol eder ama derinleşmez. ZUS / US sorgusu yapmaz, geçmişi analiz etmez, kaçak yapılaşmayı incelemez, plany miejscowe (mekânsal plan) okumaz. Noter yalnızca masasında olan akty\'lerden sorumludur. DD ise yalnızca özel bir ajansın yapabileceği toplu derlemeyi sunar. Akt notarialny imzalandıktan bir yıl sonra 200.000 PLN\'lik ipoteğin çıktığı dosyalar gördük.' },
      { q: 'Olumsuz DD sonrasında alımdan vazgeçilebilir mi?', a: 'Evet, eğer umowa przedwstępna\'da "wykonanie umowy uzależnione od pozytywnego due diligence prawnego" (sözleşmenin ifası olumlu hukuki due diligence şartına bağlıdır) ibaresi varsa. Yoksa zaliczka\'yı (kapora, %5-10) kaybedersiniz. Bu nedenle müvekkillerimizin her umowa przedwstępna\'sına bu klozu ekliyoruz. Karşı taraf kabul etmiyorsa - bu zaten bir red flag.' },
      { q: 'En sık görülen DD bulguları?', a: '2024 yılı top 5: 1) Ödenmemiş veya düzensiz ödenen hipoteka (vakaların %30\'u); 2) Kaçak yapılaşma (przybudówka, veranda, ek kat - %25); 3) Sınırların ewidencja\'ya uymaması (%15); 4) Mahkemede aktif dava (%10); 5) Gayrimenkul üzerinde vergi borçları (%10). Her biri 30.000+ PLN\'ye mal olabilir.' },
      { q: 'Alımda hipoteka varsa ne yapılır?', a: 'Standart şema: satıcı, alım bedelinden hipoteği ödeyeceğini garanti eder, banka wniosek o wykreślenie hipoteki (ipotek terkin başvurusu) hazırlayıp notere iletir. Akt notarialny "hipoteka silindikten sonra" şartıyla imzalanır. Alıcının parası rachunek powierniczy\'ye (escrow) yatırılır. Hipoteka silinince - para satıcıya geçer. Süreci anahtar teslim yönetiyoruz.' },
      { q: 'Yalnızca KW\'yi kendim kontrol edebilir miyim?', a: 'KW\'yi - evet, ekw.ms.gov.pl üzerinden anında ve ücretsiz. Ancak KW yalnızca "tescilli" sorunları gösterir. Şunları göstermez: satıcının zaległości\'leri, mahkemedeki sporów, kaçak yapılaşma, plany miejscowe, wspólnota sorunları. KW tüm risklerin %30\'u, DD ise %100\'üdür.' },
      { q: 'Olumlu DD\'den sonra akt notarialny ne kadar sürer?', a: 'Tüm papiery zaten noterdeyse - raporumuzdan 1-3 gün sonra. MSWiA wniosek\'i veya ipotek terkini bekleniyorsa - 2-8 hafta. Süreci danışmanlıkta planlıyoruz.' },
      { q: 'DD\'de bir şeyin atlanmayacağına dair garanti?', a: 'Sözleşmemizde garanti maddesi var: standart kaynaklardan bir şey atlandı ve ilk 12 ay içinde sorun olduysa - danışmanlık ücretimizin %100\'üne kadar zarar tazmini. Pratikte kendimizi güvenceye alıyoruz - her raporu 2 uzman kontrol ediyor.' }
    ],
    related: ['mswia-zezwolenie', 'notariusz-asysta', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Alımdan önce due diligence',
    ctaSubtitle: 'Objeyi 15 dakikada ücretsiz değerlendiriyor, paket öneriyoruz. Alımı 1.800 PLN\'den koruyoruz.'
  },
  uk: {
    slug: 'due-diligence-nieruchomosci',
    group: 'realestate',
    icon: 'shield',
    badge: 'Due diligence · KW · obciążenia',
    title: 'Перевірка чистоти угоди (Due Diligence)',
    subtitle: 'Юридична перевірка нерухомості перед купівлею: KW, обтяження, історія',
    lead: 'Перед підписанням aktu notarialnego перевіряємо нерухомість на приховані проблеми: невиплачені кредити, арешт, неправильні wpis у księgę wieczystą, спори в суді, нелегальні прибудови, борги ZUS / podatku від nieruchomości. 70% «чудових» пропозицій на вторинному ринку мають приховані проблеми. Наш raport захищає купівлю та коштує 1% від ціни купівлі. Підходить як для квартири за 500 тис., так і для комерційної за 50 млн.',
    facts: [
      { label: 'Термін перевірки', value: '5–10 днів', note: 'standard · великі об’єкти довше' },
      { label: 'Обсяг звіту', value: '15–40 сторінок', note: 'PDF + risk-rating' },
      { label: 'Джерел перевірки', value: '12+', note: 'KW, KRS, Geoportal, US, ZUS' },
      { label: 'Гарантія', value: '100%', note: 'компенсуємо збитки від пропущених ризиків' }
    ],
    grounds: {
      title: 'Що перевіряємо',
      subtitle: 'Кожна категорія — окремий ризик, який може коштувати десятки тисяч PLN після купівлі.',
      items: [
        { title: 'Księga wieczysta — wpisy й obciążenia', desc: 'Hipoteka на банк, służebności, użytkowanie wieczyste, dożywocie, prawo pierwokupu. Кожне обтяження залишається з нерухомістю при купівлі. Іноді продавець «не пам’ятає» про hipotece.' },
        { title: 'Історія власності', desc: 'Аналізуємо всі wpisy у KW за 20+ років. Spadki, darowizny, sprzedaży, постанови про арешт. Оцінка ризику skarg від колишніх власників або їхніх спадкоємців.' },
        { title: 'Відповідність nieruchomości документам', desc: 'Порівнюємо mapę ewidencyjną, projekty budowlane, decyzje про pozwolenie na budowę. Виявляємо нелегальні прибудови (legalizacja може коштувати 50 тис.).' },
        { title: 'Борги ZUS / US / podatków', desc: 'Перевіряємо zaległości продавця — можуть стати вашою проблемою при wpisie hipoteki przymusowej. Через wniosek do ZUS i US (з pełnomocnictwem продавця).' },
        { title: 'Судові спори', desc: 'Перевіряємо repertoria sądów за адресою — чи є активні справи про власність, granicach, służebnościach. Через KSEG і репозиторій orzeczeń.' },
        { title: 'Plan miejscowy й інфраструктура', desc: 'Що буде навколо через 5 років? Plan zagospodarowania przestrzennego, плановані дороги, школи, заводи. Перевіряємо для кожної ділянки землі та для комерційної нерухомості — критично.' },
        { title: 'Договори najmu', desc: 'Якщо продавець здає — договори переходять до вас. Перевіряємо умови, строки, депозит, regulowanie. Складні договори з лояльними орендарями можуть зменшити ринкову вартість на 10–20%.' },
        { title: 'Wspólnota mieszkaniowa', desc: 'Для квартир — перевіряємо uchwały wspólnoty, fundusz remontowy, planowane remonty. Іноді wspólnota planuje 100k PLN remont — це стає вашою частиною пропорційно udziałowi.' }
      ]
    },
    timeline: {
      title: 'Етапи due diligence',
      subtitle: 'Стандарт — 5–10 днів. Терміново (3 дні) — +50%. Складні об’єкти (великі ділянки, działalność gospodarcza) — до 3 тижнів.',
      steps: [
        { title: 'Безкоштовна оцінка', duration: '15 хв', desc: 'Адреса і тип об’єкта. Підбираємо pakiet (basic / standard / premium) та оцінюємо рівень ризику.' },
        { title: 'Договір і pełnomocnictwo', duration: '1 день', desc: 'Umowa o due diligence + pełnomocnictwo від вас (для запитів до US, ZUS) і від продавця (для документів із реєстраційних органів).' },
        { title: 'Запити — етап 1', duration: '1–2 дні', desc: 'Wyciąg z KW (księga wieczysta), wypis z rejestru gruntów, wyrys z mapy ewidencyjnej. Усі publiczne rejestry — миттєво.' },
        { title: 'Запити — етап 2', duration: '3–5 днів', desc: 'Zaświadczenia z ZUS, US, urząd miasta (zaległości), wspólnota mieszkaniowa (uchwały, fundusz). Через pełnomocnictwo продавця.' },
        { title: 'Аналіз документації продавця', duration: '1–2 дні', desc: 'Вивчаємо: tytuł prawny (akt poprzedni), pozwolenia на budowę, certyfikaty energetyczne, decyzje administracyjne. Порівнюємо з реальністю.' },
        { title: 'Inspekcja na miejscu', duration: '1 день', desc: 'Опційно для преміум-пакетів. Геодезист і rzeczoznawca перевіряють реальний стан, granice, нелегальні прибудови.' },
        { title: 'Raport DD', duration: '1 день', desc: 'PDF-звіт 15–40 сторінок із findings, risk-rating (зелений/жовтий/червоний), рекомендаціями. Ставимо крапки в економіці угоди або пропонуємо negocjacje.' },
        { title: 'Презентація та обговорення', duration: '30 хв', desc: 'Відеозустріч або особиста — пояснюємо findings, пропонуємо стратегію: продовжувати, вимагати зниження ціни, відмовлятися, вимагати гарантій в umowie.' }
      ]
    },
    documents: {
      title: 'Що потрібно для DD',
      subtitle: 'Мінімум — адреса і numer KW. Решту запитуємо самі.',
      items: [
        'Адреса нерухомості й numer księgi wieczystej',
        'Номер ewidencyjny działki (для ділянок)',
        'Поточна umowa przedwstępna або пропозиція від продавця',
        'Pełnomocnictwo від вас (запити до US, ZUS, urząd)',
        'Pełnomocnictwo від продавця (запити до його «персональних» rejestrów)',
        'Ціна купівлі та умови оплати',
        'Інформація про фінансування (кредит — окремі перевірки банку)',
        'Документи продавця, якщо він надасть (попередній akt, plan, certyfikaty)'
      ]
    },
    pricing: {
      title: 'Вартість DD',
      subtitle: 'Залежить від типу нерухомості та складності перевірки.',
      items: [
        { label: 'Basic — квартира', value: '1 800 PLN', note: 'KW + ewidencja + ZUS/US' },
        { label: 'Standard — квартира', value: '2 800 PLN', note: '+ wspólnota, plan miejscowy, sąd' },
        { label: 'Standard — будинок', value: '4 500 PLN', note: '+ legalność rozbudowy, granice' },
        { label: 'Premium — комерційна', value: 'від 8 500 PLN', note: 'Повний пакет + on-site inspekcja' }
      ],
      note: 'Для ділянок, działek przemysłowych, budynków biurowych — індивідуальний розрахунок. Терміново (3 дні) +50%. Геодезист (якщо потрібен) ~1 500 PLN окремо. Ціна зазвичай дорівнює 0,5–1% від ціни нерухомості.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece',
        'Ustawa z dnia 17 maja 1989 r. — Prawo geodezyjne i kartograficzne',
        'Ustawa z dnia 21 sierpnia 1997 r. o gospodarce nieruchomościami',
        'Ustawa z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym',
        'Ustawa z dnia 7 lipca 1994 r. — Prawo budowlane (legalność budowli)',
        'Ustawa z dnia 24 czerwca 1994 r. o własności lokali (wspólnota mieszkaniowa)',
        'Kodeks cywilny — rozdz. III dział II (prawo własności)'
      ]
    },
    faq: [
      { q: 'Навіщо DD, якщо є нотаріус?', a: 'Нотаріус перевіряє KW (księga wieczysta — поземельна книга) і dokumenty (документи) при підписанні, але не заглиблюється. Не запитує ZUS/US, не аналізує історію, не перевіряє нелегальні прибудови, не дивиться plany miejscowe (план забудови території). Нотаріус несе відповідальність лише за те, що є в aktach (актах) у нього на столі. DD перевіряє те, що показала лише prywatna агрегація. Бачили угоди, де akt notarialny (нотаріальний акт) пройшов, а через рік прийшла hipoteka (іпотека) на 200к.' },
      { q: 'Чи можна відмовитися від угоди після негативного DD?', a: 'Так, якщо в umowie przedwstępnej (попередньому договорі) є умова «wykonanie umowy uzależnione od pozytywnego due diligence prawnego» (виконання договору залежить від позитивної юридичної перевірки). Якщо такого пункту немає — втратите zaliczkę (завдаток, 5–10%). Тому прописуємо в кожній umowie przedwstępnej від наших клієнтів. Якщо інша сторона не погоджується — це вже red flag.' },
      { q: 'Які найчастіші «знахідки» DD?', a: 'Топ-5 знахідок за 2024 рік: 1) Hipoteka (іпотека) не виплачена або нерегулярна (30% випадків); 2) Нелегальні прибудови (przybudówka, веранда, додатковий поверх — 25%); 3) Межі не відповідають ewidencji (кадастру, 15%); 4) Активні спори в суді (10%); 5) Борги podatków (податків) від nieruchomości (нерухомості, 10%). Кожна може коштувати 30 000+ PLN.' },
      { q: 'Що робити з hipoteką при купівлі?', a: 'Стандартна схема: продавець гарантує виплату hipoteki (іпотеки) з ціни купівлі, банк готує wniosek o wykreślenie hipoteki (заяву про зняття іпотеки) та передає нотаріусу. Akt notarialny (нотаріальний акт) підписується з умовою «після wykreślenia hipoteki» (після зняття іпотеки). Гроші покупця депонуються на rachunek powierniczy (ескроу-рахунок). Після wykreślenia hipoteki — гроші переходять продавцю. Контролюємо процес під ключ.' },
      { q: 'Чи можна перевірити лише KW самому?', a: 'KW (księga wieczysta — поземельна книга) — так, миттєво через ekw.ms.gov.pl за 0 PLN. Але KW показує лише «зареєстровані» проблеми. Не показує: zaległości (заборгованості) у продавця, sporów w sądzie (судових спорів), нелегальних прибудов, planów miejscowych (планів забудови), problemów z wspólnotą (проблем зі співвласниками). KW — 30% усіх ризиків. DD — 100%.' },
      { q: 'Скільки часу до aktu після позитивного DD?', a: 'Якщо всі papiery (документи) вже в нотаріуса — 1–3 дні після нашого raportu (звіту). Якщо ще треба чекати wniosek MSWiA (заяву до МВС) або wykreślenie hipoteki (зняття іпотеки) — 2–8 тижнів. План — на консультації.' },
      { q: 'Гарантія, що в DD не пропустять щось?', a: 'У нас в umowie (договорі) — гарантія: якщо щось пропустимо зі стандартних джерел і це стане проблемою в перші 12 місяців — компенсуємо збитки до 100% наших гонорарів. На практиці ми страхуємо себе, і кожен звіт перевіряють 2 спеціалісти.' }
    ],
    related: ['mswia-zezwolenie', 'notariusz-asysta', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Due diligence перед купівлею',
    ctaSubtitle: 'Безкоштовно оцінюємо об’єкт і підбираємо пакет за 15 хвилин. Захищаємо купівлю від 1 800 PLN.'
  }
};

export default dueDiligenceNieruchomosci;
