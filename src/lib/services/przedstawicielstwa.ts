import type { ServiceEntry } from './types';

const przedstawicielstwa: ServiceEntry = {
  ru: {
    slug: 'przedstawicielstwa',
    group: 'business',
    icon: 'landmark',
    badge: 'Oddział · Przedstawicielstwo · Branch',
    title: 'Представительства иностранной компании',
    subtitle: 'Oddział и przedstawicielstwo иностранной фирмы в Польше',
    lead: 'Иностранная компания может работать в Польше через филиал (oddział) или представительство (przedstawicielstwo). Oddział - полноценная коммерческая деятельность от имени материнской фирмы, регистрируется в KRS. Przedstawicielstwo - только маркетинг, реклама, исследования рынка (без продаж), регистрируется в Rejestrze Przedstawicielstw. Помогаем выбрать форму и пройти регистрацию за 4-8 недель.',
    facts: [
      { label: 'Oddział в KRS', value: '4-8 недель', note: 'полная коммерция' },
      { label: 'Przedstawicielstwo', value: '6-10 недель', note: 'только маркетинг' },
      { label: 'Срок Przedstawicielstwa', value: '2 года', note: 'продляется' },
      { label: 'Налоги Oddziału', value: 'CIT 19%', note: 'на польский доход' }
    ],
    grounds: {
      title: 'Когда нужна форма представительства',
      subtitle: 'Альтернативы регистрации Sp. z o.o. - когда уже есть зрелая фирма за рубежом и нужно присутствие в Польше.',
      items: [
        { title: 'Oddział - коммерческая активность', desc: 'Открытие склада, дистрибуции, сервисного центра, продаж в Польше от имени материнской компании. KRS, NIP, VAT, налоги - на oddział.' },
        { title: 'Przedstawicielstwo - только маркетинг', desc: 'Reklama, badania rynku, promocja бренда, поиск партнёров. Запрещены продажи и производство. Идеально для тестирования рынка.' },
        { title: 'Большая корпорация в Польше', desc: 'Холдинги используют oddział когда не хотят отделять польский бизнес юридически - все обязательства на материнской фирме.' },
        { title: 'Представительство страны', desc: 'Государственные торговые представительства, экспортные агентства, культурные миссии - przedstawicielstwo как мост.' },
        { title: 'Регистрация без капитала', desc: 'Oddział не требует kapitału zakładowego. Только подтверждение деятельности материнской компании за рубежом.' },
        { title: 'Защита бренда', desc: 'Регистрация присутствия в Польше + торговой марки - защищает от копирования. Через przedstawicielstwo доказывается активная защита бренда в ЕС.' }
      ]
    },
    timeline: {
      title: 'Этапы регистрации',
      subtitle: 'От подготовки документов в материнской компании до wpisu в реестр - 4-10 недель.',
      steps: [
        { title: 'Бесплатная консультация', duration: '30 мин', desc: 'Выбираем oddział или przedstawicielstwo по плану деятельности. Учитываем CIT, VAT, обязательства бухгалтерии.' },
        { title: 'Документы материнской компании', duration: '1-2 недели', desc: 'Apostille на: KRS / Companies House / выписку из реестра, statut/articles, решение о создании представительства, доверенность на главу oddziału. Присяжный перевод - у нас.' },
        { title: 'Назначение представителя', duration: '1 неделя', desc: 'Osoba upoważniona - гражданин Польши или иностранец с правом проживания. Имеет PESEL, адрес в Польше, KRK.' },
        { title: 'Юридический адрес', duration: '1 день', desc: 'Адрес в Варшаве или другом городе - наш в цене или ваш. Договор najmu обязателен.' },
        { title: 'Wniosek в KRS / Rejestr', duration: '4-6 недель', desc: 'Oddział - KRS-ZAR, NIP-2, REGON. Przedstawicielstwo - wniosek do Ministerstwa Rozwoju и Technologii. Госпошлины: KRS 500 PLN, MRiT 1 тыс. PLN.' },
        { title: 'Регистрация в US, ZUS', duration: '2 недели', desc: 'Oddział - становится podatnikiem CIT, регистрируется в US и ZUS (если будут pracownicy). Przedstawicielstwo - только NIP.' },
        { title: 'Открытие счёта', duration: '1-2 недели', desc: 'Konto firmowe в польском банке. Документы материнской фирмы + apostille + tłumaczenie.' }
      ]
    },
    documents: {
      title: 'Документы материнской компании',
      subtitle: 'Все иностранные документы - с apostille и присяжным переводом.',
      items: [
        'Выписка из реестра (KRS / Companies House / Handelsregister) актуальная',
        'Statut / Articles of Association с переводом',
        'Решение учредителей или совета директоров об открытии представительства',
        'Доверенность на главу oddziału / kierownika przedstawicielstwa',
        'Подтверждение деятельности материнской фирмы (sprawozdanie finansowe за последний год)',
        'Apostille на каждый документ (Hague Convention)',
        'Tłumaczenie przysięgłe всех документов на польский - у нас',
        'Паспорт kierownika и его адрес/PESEL',
        'KRK (справка о несудимости) kierownika из всех стран проживания за 5 лет'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Зависит от формы (oddział vs przedstawicielstwo) и количества документов.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · подбор формы' },
        { label: 'Przedstawicielstwo', value: 'от 4 800 PLN', note: 'Wniosek + перевод + адрес' },
        { label: 'Oddział под ключ', value: 'от 8 500 PLN', note: 'KRS + NIP + VAT + банк' },
        { label: 'Премиум (с спорным wpisem)', value: 'от 12 000 PLN', note: 'Сложные структуры, апелляции' }
      ],
      note: 'Госпошлины: KRS 500 PLN + MSiG 100 PLN (oddział). MRiT 1 000 PLN (przedstawicielstwo). Apostille - в стране происхождения. Перевод присяжный - 50-100 PLN/страница.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 6 marca 2018 r. o zasadach uczestnictwa przedsiębiorców zagranicznych (rozdz. 4 - oddziały, rozdz. 5 - przedstawicielstwa)',
        'Ustawa z dnia 15 września 2000 r. - Kodeks spółek handlowych (art. 27 KSH - oddział)',
        'Ustawa z dnia 20 sierpnia 1997 r. o KRS (rozdz. 3 - wpis oddziału)',
        'Konwencja Haska 1961 r. o apostille',
        'Ustawa z dnia 15 lutego 1992 r. o CIT (oddział jako zakład w rozumieniu umów o unikaniu podwójnego opodatkowania)'
      ]
    },
    faq: [
      { q: 'Чем oddział отличается от Sp. z o.o.?', a: 'Oddział (филиал) - это структурное подразделение материнской фирмы, без отдельной правосубъектности. Все обязательства, активы, доходы - на материнской фирме. Sp. z o.o. - отдельное юрлицо с собственным капиталом и ответственностью. Oddział проще для холдинга, Sp. z o.o. - для нового бизнеса с польскими партнёрами.' },
      { q: 'Может ли przedstawicielstwo выставлять инвойсы?', a: 'Нет. Przedstawicielstwo (представительство) вправе только: маркетинг, реклама, badania rynku (исследования рынка), promocja, поиск партнёров. Продажи, услуги, производство - запрещены. Если нужно - закрываете przedstawicielstwo и открываете oddział или Sp. z o.o.' },
      { q: 'Какие налоги платит oddział?', a: 'CIT 19% на польский доход (przypisany do oddziału - отнесённый к филиалу). Если есть umowa o unikaniu podwójnego opodatkowania (соглашение об избежании двойного налогообложения) - налог в Польше. VAT - оборотный налог 23%. Налоги материнской фирмы за рубежом - отдельно.' },
      { q: 'Сколько действует przedstawicielstwo?', a: '2 года с возможностью продления. Перед окончанием срока подаёте wniosek o przedłużenie (заявление о продлении) за 30 дней. Если не продлили - przedstawicielstwo автоматически закрывается.' },
      { q: 'Нужен ли польский kierownik?', a: 'Нет. Kierownikiem (руководителем) oddziału или przedstawicielstwa может быть иностранец. Главное - у него должен быть PESEL и право legalnego pobytu w Polsce (легального пребывания в Польше). Иначе невозможна регистрация в KRS и подача документов через ePUAP.' },
      { q: 'А если материнская фирма закрывается?', a: 'Oddział и przedstawicielstwo автоматически прекращают существование. Закрытие требует aktów (актов) и wniosków (заявлений) в KRS/MRiT (Министерство развития и технологий) - закрытие занимает 1-3 месяца с расчётом всех обязательств.' },
      { q: 'Можно ли превратить oddział в Sp. z o.o.?', a: 'Не напрямую. Закрываете oddział, регистрируете Sp. z o.o., передаёте активы (контракты, склад, сотрудники) - это сделка между материнской фирмой и Sp. z o.o., с НДС/CIT последствиями. Делаем под ключ.' }
    ],
    related: ['rejestracja-sp-z-oo', 'gotowe-firmy', 'apostille'],
    ctaTitle: 'Представительство в Польше под ключ',
    ctaSubtitle: 'Бесплатно подбираем форму (oddział или przedstawicielstwo). От 4 800 PLN под ключ.'
  },
  pl: {
    slug: 'przedstawicielstwa',
    group: 'business',
    icon: 'landmark',
    badge: 'Oddział · Przedstawicielstwo',
    title: 'Przedstawicielstwa zagranicznych firm',
    subtitle: 'Oddział i przedstawicielstwo zagranicznej firmy w Polsce',
    lead: 'Zagraniczna firma może działać w Polsce przez oddział lub przedstawicielstwo. Oddział - pełna działalność gospodarcza w imieniu spółki matki, KRS. Przedstawicielstwo - tylko marketing, reklama, badania rynku (bez sprzedaży), wpis w Rejestrze Przedstawicielstw MRiT. Pomagamy wybrać i zarejestrować w 4-10 tygodniach.',
    facts: [
      { label: 'Oddział w KRS', value: '4-8 tyg.', note: 'pełna działalność' },
      { label: 'Przedstawicielstwo', value: '6-10 tyg.', note: 'tylko marketing' },
      { label: 'Ważność przedstawicielstwa', value: '2 lata', note: 'z przedłużeniem' },
      { label: 'CIT oddziału', value: '19%', note: 'na dochód polski' }
    ],
    grounds: {
      title: 'Kiedy ta forma',
      subtitle: 'Alternatywa do Sp. z o.o. - gdy macierzysta firma jest zagranicą, a potrzebna obecność w Polsce.',
      items: [
        { title: 'Oddział - działalność gospodarcza', desc: 'Magazyn, dystrybucja, sprzedaż, serwis w Polsce w imieniu spółki matki. KRS, NIP, VAT, CIT.' },
        { title: 'Przedstawicielstwo - tylko marketing', desc: 'Reklama, badania rynku, promocja marki, poszukiwanie partnerów. Bez sprzedaży i produkcji.' },
        { title: 'Duża korporacja', desc: 'Holdingi wybierają oddział, gdy nie chcą wydzielać prawnie polskiego biznesu.' },
        { title: 'Reprezentacja państwa', desc: 'Państwowe przedstawicielstwa handlowe, agencje eksportowe, misje kulturalne.' },
        { title: 'Bez kapitału', desc: 'Oddział nie wymaga kapitału. Tylko potwierdzenie działalności spółki matki.' },
        { title: 'Ochrona marki', desc: 'Wpis + znak towarowy chroni przed kopiowaniem. Przedstawicielstwo dowodzi aktywnej ochrony w UE.' }
      ]
    },
    timeline: {
      title: 'Etapy rejestracji',
      subtitle: 'Od dokumentów spółki matki do wpisu - 4-10 tygodni.',
      steps: [
        { title: 'Konsultacja', duration: '30 min', desc: 'Oddział czy przedstawicielstwo wg planu działalności.' },
        { title: 'Dokumenty spółki matki', duration: '1-2 tyg.', desc: 'Apostille: KRS/Companies House, statut, uchwała, pełnomocnictwo. Tłumaczenie przysięgłe.' },
        { title: 'Wyznaczenie przedstawiciela', duration: '1 tydz.', desc: 'Polak lub cudzoziemiec z prawem pobytu, PESEL, KRK.' },
        { title: 'Adres siedziby', duration: '1 dzień', desc: 'Warszawa lub inne miasto - nasz w cenie lub Twój. Umowa najmu obowiązkowa.' },
        { title: 'Wniosek do KRS / MRiT', duration: '4-6 tyg.', desc: 'Oddział - KRS-ZAR, NIP-2. Przedstawicielstwo - MRiT. Opłaty 500 lub 1 000 PLN.' },
        { title: 'Rejestracja w US, ZUS', duration: '2 tyg.', desc: 'Oddział - podatnik CIT. Przedstawicielstwo - tylko NIP.' },
        { title: 'Konto bankowe', duration: '1-2 tyg.', desc: 'Polski bank. Dokumenty spółki matki z apostille i tłumaczeniem.' }
      ]
    },
    documents: {
      title: 'Dokumenty spółki matki',
      subtitle: 'Wszystko z apostille i tłumaczeniem przysięgłym.',
      items: [
        'Aktualny wpis z rejestru (KRS / Companies House / Handelsregister)',
        'Statut / Articles z tłumaczeniem',
        'Uchwała o utworzeniu przedstawicielstwa',
        'Pełnomocnictwo dla kierownika oddziału',
        'Sprawozdanie finansowe za ostatni rok',
        'Apostille na każdy dokument',
        'Tłumaczenia przysięgłe - robimy my',
        'Paszport kierownika, adres, PESEL',
        'KRK kierownika za ostatnie 5 lat'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Zależy od formy.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · dobór formy' },
        { label: 'Przedstawicielstwo', value: 'od 4 800 PLN', note: 'Wniosek + tłumaczenia + adres' },
        { label: 'Oddział pod klucz', value: 'od 8 500 PLN', note: 'KRS + NIP + VAT + bank' },
        { label: 'Premium', value: 'od 12 000 PLN', note: 'Złożone struktury' }
      ],
      note: 'Opłaty: KRS 500 PLN + MSiG 100 PLN. MRiT 1 000 PLN. Apostille - w kraju pochodzenia. Tłumaczenie przysięgłe 50-100 PLN/strona.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 6 marca 2018 r. o zasadach uczestnictwa przedsiębiorców zagranicznych (rozdz. 4-5)',
        'Kodeks spółek handlowych (art. 27 KSH)',
        'Ustawa z 20 sierpnia 1997 r. o KRS (rozdz. 3)',
        'Konwencja Haska 1961 r.',
        'Ustawa z 15 lutego 1992 r. o CIT'
      ]
    },
    faq: [
      { q: 'Oddział vs Sp. z o.o.?', a: 'Oddział - bez osobowości prawnej, wszystko na spółce matce. Sp. z o.o. - odrębne firma. Oddział prościej dla holdingu.' },
      { q: 'Przedstawicielstwo może wystawiać faktury?', a: 'Nie. Tylko marketing, badania, promocja. Sprzedaż - zakaz.' },
      { q: 'Jakie podatki oddziału?', a: 'CIT 19% na dochód polski (po umowie o unikaniu). VAT 23%.' },
      { q: 'Ile ważne przedstawicielstwo?', a: '2 lata z przedłużeniem. Wniosek 30 dni przed końcem.' },
      { q: 'Czy potrzebny polski kierownik?', a: 'Nie. Cudzoziemiec wystarczy z PESEL i prawem pobytu.' },
      { q: 'Spółka matka się zamyka?', a: 'Oddział i przedstawicielstwo automatycznie znikają. Zamknięcie 1-3 mies.' },
      { q: 'Z oddziału w Sp. z o.o.?', a: 'Nie wprost. Zamykasz oddział, rejestrujesz Sp. z o.o., przekazujesz aktywa (z VAT/CIT skutkami).' }
    ],
    related: ['rejestracja-sp-z-oo', 'gotowe-firmy', 'apostille'],
    ctaTitle: 'Przedstawicielstwo pod klucz',
    ctaSubtitle: 'Bezpłatnie dobieramy formę. Od 4 800 PLN.'
  },
  en: {
    slug: 'przedstawicielstwa',
    group: 'business',
    icon: 'landmark',
    badge: 'Branch · Representative office',
    title: 'Foreign company branches',
    subtitle: 'Branch (oddział) and representative office (przedstawicielstwo) in Poland',
    lead: 'A foreign company can operate in Poland through a branch (oddział) or a representative office (przedstawicielstwo). The branch conducts full commercial activity on behalf of the parent and is registered in KRS. The representative office is limited to marketing, advertising, market research (no sales) and is entered in the Register of Representative Offices at the Ministry of Development. We pick the form and run registration in 4-10 weeks.',
    facts: [
      { label: 'Branch in KRS', value: '4-8 weeks', note: 'full commercial activity' },
      { label: 'Representative office', value: '6-10 weeks', note: 'marketing only' },
      { label: 'Office validity', value: '2 years', note: 'renewable' },
      { label: 'Branch CIT', value: '19%', note: 'on Polish-source income' }
    ],
    grounds: {
      title: 'When to use these forms',
      subtitle: 'Alternative to Sp. z o.o. - when you already have a mature parent company abroad and need a Polish presence.',
      items: [
        { title: 'Branch - commercial activity', desc: 'Warehouse, distribution, sales, service center in Poland on behalf of the parent. KRS, NIP, VAT, CIT all on the branch.' },
        { title: 'Representative office - marketing only', desc: 'Advertising, market research, brand promotion, partner sourcing. Sales and production are forbidden.' },
        { title: 'Large corporation', desc: 'Holdings prefer branch when they don\'t want to legally separate the Polish business.' },
        { title: 'Country representation', desc: 'Trade missions, export agencies, cultural missions - representative office as a bridge.' },
        { title: 'No capital required', desc: 'Branch needs no share capital - only proof of the parent\'s activity abroad.' },
        { title: 'Brand protection', desc: 'Polish presence + trademark protects against copycats. Representative office demonstrates active EU brand defense.' }
      ]
    },
    timeline: {
      title: 'Registration steps',
      subtitle: 'From parent-company paperwork to register entry - 4-10 weeks.',
      steps: [
        { title: 'Consultation', duration: '30 min', desc: 'Branch or representative office based on planned activity.' },
        { title: 'Parent documents', duration: '1-2 weeks', desc: 'Apostille: KRS/Companies House extract, articles, resolution, PoA. Sworn translation.' },
        { title: 'Appoint representative', duration: '1 week', desc: 'Polish citizen or foreigner with residence right, PESEL, KRK.' },
        { title: 'Registered office', duration: '1 day', desc: 'Warsaw or another city - ours included or yours. Lease agreement required.' },
        { title: 'KRS / MRiT filing', duration: '4-6 weeks', desc: 'Branch - KRS-ZAR, NIP-2. Office - Ministry of Development. Fees 500 or 1,000 PLN.' },
        { title: 'Tax & ZUS registration', duration: '2 weeks', desc: 'Branch becomes CIT taxpayer. Office - only NIP.' },
        { title: 'Bank account', duration: '1-2 weeks', desc: 'Polish bank. Apostille + translation of parent docs.' }
      ]
    },
    documents: {
      title: 'Parent-company documents',
      subtitle: 'All foreign documents need apostille and sworn translation.',
      items: [
        'Current register extract (KRS / Companies House / Handelsregister)',
        'Articles of association with translation',
        'Resolution to open the representation',
        "Power of attorney for branch manager",
        'Last annual financial statements',
        'Apostille on each document (Hague Convention)',
        'Sworn translations - handled by us',
        "Manager's passport, address, PESEL",
        "Manager's KRK (criminal record) for last 5 years residence"
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Depends on form (branch vs office).',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 min · form selection' },
        { label: 'Representative office', value: 'from 4,800 PLN', note: 'Application + translations + address' },
        { label: 'Branch turnkey', value: 'from 8,500 PLN', note: 'KRS + NIP + VAT + bank' },
        { label: 'Premium', value: 'from 12,000 PLN', note: 'Complex structures, appeals' }
      ],
      note: 'State fees: KRS 500 PLN + MSiG 100 PLN. MRiT 1,000 PLN for offices. Apostille from country of origin. Sworn translation 50-100 PLN/page.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Foreign Entrepreneurs Participation Act of 6 March 2018 (chapters 4-5)',
        'Commercial Companies Code (art. 27)',
        'KRS Act of 20 August 1997 (chapter 3)',
        'Hague Apostille Convention 1961',
        'CIT Act of 15 February 1992'
      ]
    },
    faq: [
      { q: 'Branch vs Sp. z o.o.?', a: "A branch has no separate legal personality - assets and obligations sit on the parent. Sp. z o.o. is a stand-alone entity. Branch is simpler for holdings; Sp. z o.o. is better for new businesses with Polish partners." },
      { q: 'Can the office issue invoices?', a: 'No. Representative office is limited to marketing, research, promotion, partner sourcing. Sales prohibited.' },
      { q: 'Branch taxes?', a: 'CIT 19% on Polish-source income (via tax treaty). VAT 23%.' },
      { q: 'Office validity?', a: '2 years renewable. File extension 30 days before expiry.' },
      { q: 'Polish manager required?', a: 'No. Foreigner with PESEL and residence right works.' },
      { q: 'If parent dissolves?', a: 'Branch and office cease automatically. Closure 1-3 months.' },
      { q: 'Convert branch to Sp. z o.o.?', a: 'Not directly. Close branch, register Sp. z o.o., transfer assets - VAT/CIT consequences. We handle end to end.' }
    ],
    related: ['rejestracja-sp-z-oo', 'gotowe-firmy', 'apostille'],
    ctaTitle: 'Polish branch turnkey',
    ctaSubtitle: 'Free form selection. From 4,800 PLN turnkey.'
  }
};

export default przedstawicielstwa;
