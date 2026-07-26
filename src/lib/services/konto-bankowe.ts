import type { ServiceEntry } from './types';

const kontoBankowe: ServiceEntry = {
  ru: {
    slug: 'konto-bankowe',
    group: 'business',
    icon: 'landmark',
    badge: 'Konto osobiste · firmowe · biała lista',
    title: 'Открытие банковских счетов в Польше',
    subtitle: 'Личный и фирменный счёт для иностранца: подбор банка, сопровождение, регистрация на białej liście',
    lead: 'Счёт в польском банке - это не формальность, а вход в польскую экономику: без него не выплатят зарплату, не примут аренду, не пройдёт ни одна B2B-сделка от 15 000 PLN. С PESEL и картой побыту личный счёт открывается за 30-60 минут. Без PESEL сложнее, но реально: Millennium, Santander, BNP Paribas и Alior работают по паспорту плюс подтверждение легального пребывания. С фирменным счётом отдельная история: банк смотрит на NIP, выписку из CEIDG или KRS, реальную связь бизнеса с Польшей и проходит вас по процедурам AML - отказы здесь обычное дело, и причину банк объяснять не обязан. Плюс момент, который упускают почти все новые фирмы: счёт нужно зарегистрировать на białej liście podatników VAT, иначе контрагент не сможет учесть платёж вам в расходы. Подбираем банк под ваш случай, готовим пакет, сопровождаем на встрече с переводом и доводим счёт до полностью рабочего состояния.',
    facts: [
      { label: 'Личный счёт с PESEL', value: '30-60 минут', note: 'паспорт + karta pobytu · в отделении' },
      { label: 'Без PESEL', value: 'Millennium, Santander, BNP, Alior', note: 'паспорт + подтверждение пребывания' },
      { label: 'Biała lista', value: 'от 15 000 PLN', note: 'порог для B2B-платежей · рахунок только firmowy' },
      { label: 'Наш гонорар', value: 'от 800 PLN', note: 'подбор, пакет, сопровождение' }
    ],
    grounds: {
      title: 'Какие счета мы открываем',
      subtitle: 'Задачи разные, и банки под них тоже разные. Универсального «лучшего банка» не существует.',
      items: [
        { title: 'Личный счёт с PESEL и картой побыту', desc: 'Самый простой случай: приходите в отделение с паспортом и картой, счёт активен в тот же день. Наша роль здесь - подобрать банк с бесплатным ведением, приложением на понятном вам языке и нормальными условиями по валютным переводам, а не первый попавшийся.' },
        { title: 'Личный счёт без PESEL', desc: 'Открывают не все банки и не всегда. Millennium, Santander, BNP Paribas и Alior принимают паспорт плюс документ, подтверждающий легальное пребывание (виза, karta pobytu, UPO) и адрес в Польше. Заранее знаем, в каком отделении какого банка процедура реально работает, и записываем именно туда - это экономит две-три поездки впустую.' },
        { title: 'Konto firmowe для JDG', desc: 'Формально ИП может работать и с личного счёта, но на практике это тупик: личный счёт не попадёт на białą listę, а значит контрагенты от 15 000 PLN откажутся с вами работать. Открываем полноценный rachunek rozliczeniowy с автоматическим rachunkiem VAT под split payment.' },
        { title: 'Konto firmowe для Sp. z o.o.', desc: 'Здесь банк проверяет всерьёз: umowa spółki, выписка KRS, NIP, структура собственности, бенефициары, источник капитала, реальный адрес и характер деятельности. Готовим пакет так, чтобы вопросы AML снялись до визита. Отдельная задача - счёт для внесения kapitału zakładowego 5 000 PLN при регистрации через S24.' },
        { title: 'Счёт для нерезидента и дистанционно', desc: 'Часть банков открывает счёт удалённо: сканы документов, видеоидентификация, курьерская доставка карты. Условия жёстче, лимиты на первое время ниже, но для владельца фирмы, который ещё не переехал, это рабочий вариант. Подсказываем, где реально проходит, а где будет отказ.' },
        { title: 'Регистрация на białej liście и NIP-8/CEIDG-1', desc: 'Открытый счёт - это половина дела. Для JDG номер счёта заявляется через CEIDG-1, для spółki - через NIP-8 (в течение 21 дня от регистрации в KRS, а при изменениях - 7 дней). Только после этого счёт появляется на białej liście podatników VAT и платежи на него безопасны для контрагента.' }
      ]
    },
    timeline: {
      title: 'Как проходит работа',
      subtitle: 'Личный счёт - 1-3 дня. Фирменный - 3-10 дней, в зависимости от банка и сложности структуры.',
      steps: [
        { title: 'Разбор задачи', duration: '30 мин', desc: 'Смотрим: какой статус пребывания, есть ли PESEL, нужен личный счёт или фирменный, какие обороты и валюты, нужен ли split payment и мультивалютность. Отсюда - шорт-лист из двух-трёх банков, где ваш случай точно проходит.' },
        { title: 'Комплект документов', duration: '1-3 дня', desc: 'Собираем пакет под требования конкретного банка: паспорт, karta pobytu или виза, подтверждение адреса, для фирмы - KRS/CEIDG, NIP, umowa spółki, данные бенефициаров и описание деятельности. Проблемные места закрываем заранее, а не в окошке.' },
        { title: 'Запись и сопровождение', duration: '1 день', desc: 'Записываемся в конкретное отделение к сотруднику, который работает с иностранцами. Идём вместе, переводим разговор, отвечаем на вопросы по AML - именно здесь чаще всего сыпятся самостоятельные попытки.' },
        { title: 'Активация и доступы', duration: '1-2 дня', desc: 'Настраиваем интернет-банк и приложение, подключаем rachunek VAT, оформляем карту, при необходимости - авторизацию для бухгалтера и мультивалютные субсчета.' },
        { title: 'Biała lista и налоговая', duration: '1-3 дня', desc: 'Заявляем счёт через CEIDG-1 или NIP-8, проверяем через два-три дня, что он виден на białej liście na stronie MF. Присылаем скриншот с датой - это ваш аргумент для контрагентов и бухгалтера.' }
      ]
    },
    documents: {
      title: 'Что понадобится',
      subtitle: 'Точный список зависит от банка - присылаем персональный чек-лист после разбора задачи.',
      items: [
        'Загранпаспорт (обязательно, оригинал)',
        'Karta pobytu, виза D или UPO - подтверждение легального пребывания',
        'PESEL, если есть - сильно упрощает процедуру',
        'Подтверждение адреса в Польше: umowa najmu, meldunek или счёт за коммунальные',
        'Для фирмы: NIP, выписка из CEIDG или KRS, umowa spółki',
        'Для Sp. z o.o.: данные бенефициарных владельцев (для CRBR и AML), структура собственности',
        'Описание деятельности и ожидаемых оборотов - банк спросит обязательно',
        'Номер телефона в польской сети и e-mail'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированный гонорар за счёт. Ведение счёта в банке в базовых тарифах обычно бесплатно.',
      items: [
        { label: 'Консультация и подбор банка', value: 'Бесплатно', note: '30 минут · шорт-лист под ваш случай' },
        { label: 'Личный счёт', value: 'от 800 PLN', note: 'Подбор, пакет, запись, сопровождение с переводом' },
        { label: 'Konto firmowe для JDG', value: 'от 800 PLN', note: '+ заявление счёта через CEIDG-1' },
        { label: 'Konto firmowe для Sp. z o.o.', value: 'от 1 200 PLN', note: '+ NIP-8, rachunek VAT, доступ для бухгалтера' },
        { label: 'Счёт без PESEL или для нерезидента', value: 'от 1 500 PLN', note: 'Сложные случаи, дистанционное открытие' }
      ],
      note: 'Открытие и базовое ведение счёта банк обычно не тарифицирует. Возможные расходы банка: выпуск карты, переводы SWIFT, конвертация валют, обслуживание при низких оборотах. Присяжные переводы иностранных документов, если банк их потребует, оплачиваются отдельно. Гарантировать решение банка мы не можем - оно зависит от процедур AML, но подбираем так, чтобы ваш случай проходил.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 29 sierpnia 1997 r. - Prawo bankowe (umowa rachunku bankowego, rachunek rozliczeniowy)',
        'Ustawa z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (AML/KYC)',
        'Ustawa o VAT - art. 96b (biała lista podatników VAT), art. 108a (mechanizm podzielonej płatności)',
        'Ordynacja podatkowa - art. 117ba (solidarna odpowiedzialność przy zapłacie na rachunek poza wykazem)',
        'Ustawa o podatku dochodowym - wyłączenie z kosztów przy płatnościach od 15 000 PLN poza wykazem',
        'Ustawa Prawo przedsiębiorców - art. 19 (obowiązek rozliczeń przez rachunek płatniczy od 15 000 PLN)',
        'Kodeks spółek handlowych - art. 158, art. 163 (wniesienie kapitału zakładowego)'
      ]
    },
    faq: [
      { q: 'Можно ли открыть счёт в польском банке без PESEL?', a: 'Да, но не в любом банке и не в любом отделении. На 2026 год счёт по паспорту без PESEL реально открывают Bank Millennium, Santander Bank Polska, BNP Paribas и Alior - при условии, что вы предъявите документ о легальном пребывании (виза D, karta pobytu или UPO) и подтверждение адреса в Польше. PESEL всё равно стоит оформить: с ним снижается риск отказа, работает Profil Zaufany и открываются нормальные лимиты. Условия банки меняют без предупреждения, поэтому перед визитом мы уточняем актуальную процедуру, а не полагаемся на прошлогодний опыт.' },
      { q: 'Можно ли использовать личный счёт для фирмы?', a: 'Формально ИП (JDG) может рассчитываться с личного счёта - закон это не запрещает. Практически это ошибка: на białą listę podatników VAT попадают только rachunki rozliczeniowe, то есть фирменные. Если ваш счёт не в списке, контрагент, который заплатит вам 15 000 PLN или больше, не сможет учесть эту сумму в расходах и попадёт под солидарную ответственность по VAT. Итог предсказуем: серьёзные B2B-клиенты просто не станут с вами работать. Для Sp. z o.o. отдельный счёт обязателен всегда - у spółki своя правосубъектность.' },
      { q: 'Что такое biała lista и почему счёт нужно на ней зарегистрировать?', a: 'Biała lista podatników VAT - публичный реестр Министерства финансов, где по NIP видно статус VAT и заявленные фирменные счета. При B2B-платеже от 15 000 PLN брутто плательщик обязан проверить, есть ли ваш счёт в реестре. Если нет: сумма не идёт в расходы плюс солидарная ответственность за ваш VAT (спасает только заявление ZAW-NR в течение 7 дней). Счёт попадает в реестр не автоматически: для JDG его заявляют через CEIDG-1, для spółki - через NIP-8 в течение 21 дня от регистрации в KRS, а при смене счёта - в течение 7 дней.' },
      { q: 'Что такое rachunek VAT и нужен ли он мне?', a: 'Это технический субсчёт, который банк автоматически открывает к каждому rachunkowi rozliczeniowemu - отдельно платить за него не нужно. Он обслуживает mechanizm podzielonej płatności (split payment): часть платежа, равная VAT, уходит на этот субсчёт, и распоряжаться ей можно ограниченно - на VAT, ZUS, другие налоги. Split payment обязателен при сделках от 15 000 PLN брутто на товары и услуги из załącznika 15 ustawy o VAT (электроника, стройка, металлы, топливо и др.). Если вы в этих отраслях - фирменный счёт нужен ещё и по этой причине.' },
      { q: 'Нужен ли счёт для регистрации Sp. z o.o. через S24?', a: 'Для самой регистрации в S24 - нет, kapitał zakładowy 5 000 PLN можно объявить внесённым и внести его позже, в том числе имуществом. Но сразу после появления в KRS счёт понадобится: для внесения капитала деньгами, для NIP-8, для białej listy, для первых платежей и для ZUS. Практично делать это одним пакетом - регистрация, счёт, NIP-8, CRBR, VAT-R - чтобы фирма стала рабочей в один заход, а не по частям с паузами.' },
      { q: 'Почему банк может отказать и что делать после отказа?', a: 'Причина почти всегда в процедурах AML: банк не обязан объяснять решение и не обязан его мотивировать. Типичные триггеры - нет привязки к Польше (адрес, meldunek, договор аренды), непонятный источник средств, «рискованные» коды PKD (крипто, консалтинг, международная торговля), сложная структура собственности, отсутствие PESEL при слабом пакете документов. После отказа идти в тот же банк повторно смысла мало - лучше переупаковать пакет и идти в банк с другой политикой риска. Именно поэтому мы держим шорт-лист и знаем, где ваш профиль проходит.' },
      { q: 'Можно ли открыть счёт дистанционно, не приезжая в Польшу?', a: 'В части банков - да: сканы документов, видеоидентификация, доставка карты курьером. Но для иностранца без PESEL и без адреса в Польше шансы ниже, а лимиты на первые месяцы урезаны. Для фирменного счёта дистанционка проходит хуже: банк почти всегда хочет видеть члена zarządu лично. Практичная схема для тех, кто ещё не переехал: подготовить пакет заранее и открыть счёт в первый же визит - за один день это делается, если запись и документы готовы.' },
      { q: 'Сколько стоит ведение счёта в польском банке?', a: 'Базовое личное обслуживание в большинстве банков бесплатное при выполнении простых условий вроде поступления на счёт или нескольких транзакций картой в месяц. Фирменные счёта часто бесплатны в первый год, дальше - от 0 до 50 PLN/мес в зависимости от оборотов и пакета. Реальные расходы прячутся в другом: конвертация валют, переводы SWIFT, снятие в чужих банкоматах. Если у вас доходы в евро или долларах, мультивалютный счёт экономит больше, чем любая экономия на ведении.' },
      { q: 'Обязательно ли платить через счёт, а не наличными?', a: 'Для B2B - да. По art. 19 Prawa przedsiębiorców расчёты между предпринимателями на сумму от 15 000 PLN должны идти через платёжный счёт. Заплатили наличными - сумма не пойдёт в расходы, независимо от того, что сделка реальная и документы в порядке. Это ещё одна причина открыть фирменный счёт до первой крупной сделки, а не после.' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Откроем счёт, который реально работает',
    ctaSubtitle: 'Напишите: есть ли PESEL, какой у вас статус пребывания и нужен личный счёт или фирменный. За 30 минут дадим шорт-лист банков, где ваш случай проходит, и посчитаем стоимость под ключ - вместе с заявлением счёта на białą listę.'
  },
  pl: {
    slug: 'konto-bankowe',
    group: 'business',
    icon: 'landmark',
    badge: 'Konto osobiste · firmowe · biała lista',
    title: 'Otwarcie konta bankowego w Polsce',
    subtitle: 'Konto osobiste i firmowe dla obcokrajowca: dobór banku, asysta, zgłoszenie na białą listę',
    lead: 'Konto w polskim banku nie jest formalnością, a wejściem do polskiej gospodarki: bez niego nie wypłacą wynagrodzenia, nie przyjmą czynszu i nie przejdzie żadna transakcja B2B od 15 000 PLN. Z numerem PESEL i kartą pobytu konto osobiste otwiera się w 30-60 minut. Bez PESEL jest trudniej, ale realnie: Millennium, Santander, BNP Paribas i Alior działają na podstawie paszportu plus potwierdzenia legalnego pobytu. Z kontem firmowym to osobna historia: bank patrzy na NIP, wydruk z CEIDG albo KRS, faktyczne powiązanie biznesu z Polską i przeprowadza procedury AML - odmowy są tu normą, a bank nie musi ich uzasadniać. Do tego rzecz, którą pomija niemal każda nowa firma: konto trzeba zgłosić na białą listę podatników VAT, inaczej kontrahent nie rozliczy wpłaty do Ciebie w kosztach. Dobieramy bank pod Twój przypadek, przygotowujemy pakiet, asystujemy na spotkaniu z tłumaczeniem i doprowadzamy konto do pełnej sprawności.',
    facts: [
      { label: 'Konto osobiste z PESEL', value: '30-60 minut', note: 'paszport + karta pobytu · w oddziale' },
      { label: 'Bez PESEL', value: 'Millennium, Santander, BNP, Alior', note: 'paszport + potwierdzenie pobytu' },
      { label: 'Biała lista', value: 'od 15 000 PLN', note: 'próg dla płatności B2B · tylko rachunek firmowy' },
      { label: 'Nasze honorarium', value: 'od 800 PLN', note: 'dobór, pakiet, asysta' }
    ],
    grounds: {
      title: 'Jakie konta otwieramy',
      subtitle: 'Zadania są różne, więc i banki pod nie są różne. Uniwersalnego "najlepszego banku" nie ma.',
      items: [
        { title: 'Konto osobiste z PESEL i kartą pobytu', desc: 'Najprostszy przypadek: przychodzisz do oddziału z paszportem i kartą, konto działa tego samego dnia. Nasza rola to dobrać bank z bezpłatnym prowadzeniem, aplikacją w zrozumiałym dla Ciebie języku i sensownymi warunkami przelewów walutowych - a nie pierwszy z listy.' },
        { title: 'Konto osobiste bez PESEL', desc: 'Otwierają nie wszystkie banki i nie zawsze. Millennium, Santander, BNP Paribas i Alior przyjmują paszport plus dokument potwierdzający legalny pobyt (wiza, karta pobytu, UPO) i adres w Polsce. Z góry wiemy, w którym oddziale którego banku procedura faktycznie działa, i zapisujemy właśnie tam - to oszczędza dwa-trzy wyjazdy na darmo.' },
        { title: 'Konto firmowe dla JDG', desc: 'Formalnie jednoosobowa działalność może rozliczać się z konta osobistego, ale w praktyce to ślepa uliczka: konto osobiste nie trafi na białą listę, więc kontrahenci przy kwotach od 15 000 PLN odmówią współpracy. Otwieramy pełny rachunek rozliczeniowy z automatycznym rachunkiem VAT pod split payment.' },
        { title: 'Konto firmowe dla Sp. z o.o.', desc: 'Tu bank sprawdza na poważnie: umowa spółki, wydruk KRS, NIP, struktura właścicielska, beneficjenci rzeczywiści, źródło kapitału, faktyczny adres i charakter działalności. Przygotowujemy pakiet tak, by pytania AML zniknęły przed wizytą. Osobne zadanie to rachunek do wniesienia kapitału zakładowego 5 000 PLN przy rejestracji w S24.' },
        { title: 'Konto dla nierezydenta i zdalnie', desc: 'Część banków otwiera konto zdalnie: skany dokumentów, weryfikacja wideo, karta kurierem. Warunki są ostrzejsze, limity na start niższe, ale dla właściciela firmy, który jeszcze nie przeprowadził się do Polski, to działający wariant. Podpowiadamy, gdzie to realnie przechodzi, a gdzie skończy się odmową.' },
        { title: 'Zgłoszenie na białą listę: NIP-8 i CEIDG-1', desc: 'Otwarte konto to połowa sprawy. Dla JDG numer rachunku zgłasza się przez CEIDG-1, dla spółki - przez NIP-8 (w ciągu 21 dni od rejestracji w KRS, a przy zmianach - 7 dni). Dopiero potem konto pojawia się na białej liście podatników VAT i wpłaty na nie są bezpieczne dla kontrahenta.' }
      ]
    },
    timeline: {
      title: 'Jak przebiega praca',
      subtitle: 'Konto osobiste - 1-3 dni. Firmowe - 3-10 dni, zależnie od banku i złożoności struktury.',
      steps: [
        { title: 'Rozpoznanie sprawy', duration: '30 min', desc: 'Sprawdzamy: jaki status pobytu, czy jest PESEL, czy potrzebne konto osobiste czy firmowe, jakie obroty i waluty, czy potrzebny split payment i wielowalutowość. Z tego powstaje krótka lista dwóch-trzech banków, w których Twój przypadek na pewno przechodzi.' },
        { title: 'Komplet dokumentów', duration: '1-3 dni', desc: 'Składamy pakiet pod wymogi konkretnego banku: paszport, karta pobytu lub wiza, potwierdzenie adresu, dla firmy - KRS/CEIDG, NIP, umowa spółki, dane beneficjentów i opis działalności. Punkty problemowe domykamy zawczasu, nie przy okienku.' },
        { title: 'Zapis i asysta', duration: '1 dzień', desc: 'Zapisujemy do konkretnego oddziału, do pracownika, który obsługuje obcokrajowców. Idziemy razem, tłumaczymy rozmowę, odpowiadamy na pytania AML - właśnie na tym etapie najczęściej sypią się samodzielne próby.' },
        { title: 'Aktywacja i dostępy', duration: '1-2 dni', desc: 'Ustawiamy bankowość internetową i aplikację, podłączamy rachunek VAT, wydajemy kartę, w razie potrzeby dodajemy uprawnienia dla księgowego i rachunki wielowalutowe.' },
        { title: 'Biała lista i urząd', duration: '1-3 dni', desc: 'Zgłaszamy rachunek przez CEIDG-1 lub NIP-8, po dwóch-trzech dniach sprawdzamy, czy jest widoczny na białej liście na stronie MF. Wysyłamy zrzut ekranu z datą - to Twój argument dla kontrahentów i księgowego.' }
      ]
    },
    documents: {
      title: 'Co będzie potrzebne',
      subtitle: 'Dokładna lista zależy od banku - przekazujemy indywidualną checklistę po rozpoznaniu sprawy.',
      items: [
        'Paszport (obowiązkowo, oryginał)',
        'Karta pobytu, wiza D albo UPO - potwierdzenie legalnego pobytu',
        'PESEL, jeśli jest - znacznie upraszcza procedurę',
        'Potwierdzenie adresu w Polsce: umowa najmu, zameldowanie albo rachunek za media',
        'Dla firmy: NIP, wydruk z CEIDG albo KRS, umowa spółki',
        'Dla Sp. z o.o.: dane beneficjentów rzeczywistych (do CRBR i AML), struktura właścicielska',
        'Opis działalności i przewidywanych obrotów - bank zapyta na pewno',
        'Numer telefonu w polskiej sieci i adres e-mail'
      ]
    },
    pricing: {
      title: 'Koszt obsługi',
      subtitle: 'Stałe honorarium za konto. Prowadzenie rachunku w taryfach podstawowych jest zwykle bezpłatne.',
      items: [
        { label: 'Konsultacja i dobór banku', value: 'Gratis', note: '30 min · krótka lista pod Twój przypadek' },
        { label: 'Konto osobiste', value: 'od 800 PLN', note: 'Dobór, pakiet, zapis, asysta z tłumaczeniem' },
        { label: 'Konto firmowe dla JDG', value: 'od 800 PLN', note: '+ zgłoszenie rachunku przez CEIDG-1' },
        { label: 'Konto firmowe dla Sp. z o.o.', value: 'od 1 200 PLN', note: '+ NIP-8, rachunek VAT, dostęp dla księgowego' },
        { label: 'Konto bez PESEL lub dla nierezydenta', value: 'od 1 500 PLN', note: 'Trudne przypadki, otwarcie zdalne' }
      ],
      note: 'Otwarcie i podstawowe prowadzenie rachunku zwykle nie jest taryfikowane. Możliwe koszty banku: wydanie karty, przelewy SWIFT, przewalutowanie, opłata przy niskich obrotach. Tłumaczenia przysięgłe dokumentów zagranicznych, jeśli bank ich zażąda, rozliczane osobno. Decyzji banku nie gwarantujemy - zależy od procedur AML - ale dobieramy tak, by Twój przypadek przechodził.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 29 sierpnia 1997 r. - Prawo bankowe (umowa rachunku bankowego, rachunek rozliczeniowy)',
        'Ustawa z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (AML/KYC)',
        'Ustawa o VAT - art. 96b (biała lista podatników VAT), art. 108a (mechanizm podzielonej płatności)',
        'Ordynacja podatkowa - art. 117ba (solidarna odpowiedzialność przy zapłacie na rachunek poza wykazem)',
        'Ustawy o podatku dochodowym - wyłączenie z kosztów przy płatnościach od 15 000 PLN poza wykazem',
        'Ustawa Prawo przedsiębiorców - art. 19 (obowiązek rozliczeń przez rachunek płatniczy od 15 000 PLN)',
        'Kodeks spółek handlowych - art. 158, art. 163 (wniesienie kapitału zakładowego)'
      ]
    },
    faq: [
      { q: 'Czy można otworzyć konto w polskim banku bez PESEL?', a: 'Tak, ale nie w każdym banku i nie w każdym oddziale. W 2026 r. konto na paszport bez PESEL realnie otwierają Bank Millennium, Santander Bank Polska, BNP Paribas i Alior - pod warunkiem okazania dokumentu o legalnym pobycie (wiza D, karta pobytu albo UPO) i potwierdzenia adresu w Polsce. PESEL i tak warto wyrobić: obniża ryzyko odmowy, uruchamia Profil Zaufany i pełne limity. Banki zmieniają warunki bez zapowiedzi, dlatego przed wizytą weryfikujemy aktualną procedurę, a nie opieramy się na zeszłorocznym doświadczeniu.' },
      { q: 'Czy można używać konta osobistego do firmy?', a: 'Formalnie JDG może rozliczać się z konta osobistego - ustawa tego nie zabrania. Praktycznie to błąd: na białą listę podatników VAT trafiają wyłącznie rachunki rozliczeniowe, czyli firmowe. Jeśli Twojego rachunku nie ma w wykazie, kontrahent, który zapłaci Ci 15 000 PLN lub więcej, nie rozliczy tej kwoty w kosztach i wejdzie w solidarną odpowiedzialność za VAT. Efekt jest przewidywalny: poważni klienci B2B po prostu nie będą z Tobą pracować. Dla Sp. z o.o. osobny rachunek jest obowiązkowy zawsze - spółka ma własną podmiotowość.' },
      { q: 'Czym jest biała lista i dlaczego trzeba na niej zgłosić rachunek?', a: 'Biała lista podatników VAT to publiczny wykaz Ministerstwa Finansów, gdzie po NIP widać status VAT i zgłoszone rachunki firmowe. Przy płatności B2B od 15 000 PLN brutto płatnik ma obowiązek sprawdzić, czy Twój rachunek jest w wykazie. Jeśli nie: kwota nie idzie w koszty plus solidarna odpowiedzialność za Twój VAT (ratuje tylko zawiadomienie ZAW-NR w ciągu 7 dni). Rachunek nie trafia tam automatycznie: dla JDG zgłasza się go przez CEIDG-1, dla spółki - przez NIP-8 w ciągu 21 dni od rejestracji w KRS, a przy zmianie rachunku - w ciągu 7 dni.' },
      { q: 'Czym jest rachunek VAT i czy jest mi potrzebny?', a: 'To techniczne subkonto, które bank otwiera automatycznie do każdego rachunku rozliczeniowego - osobno się za nie nie płaci. Obsługuje mechanizm podzielonej płatności (split payment): część przelewu odpowiadająca VAT trafia na to subkonto, a dysponowanie nią jest ograniczone - na VAT, ZUS i inne podatki. Split payment jest obowiązkowy przy transakcjach od 15 000 PLN brutto na towary i usługi z załącznika 15 ustawy o VAT (elektronika, budowa, metale, paliwa i inne). Jeśli działasz w tych branżach, rachunek firmowy jest potrzebny również z tego powodu.' },
      { q: 'Czy do rejestracji Sp. z o.o. w S24 potrzebne jest konto?', a: 'Do samej rejestracji w S24 nie - kapitał zakładowy 5 000 PLN można zadeklarować jako wniesiony i wnieść go później, także aportem. Ale zaraz po wpisie do KRS konto będzie potrzebne: do wniesienia kapitału pieniędzmi, do NIP-8, do białej listy, do pierwszych płatności i do ZUS. Praktycznie warto robić to jednym pakietem - rejestracja, konto, NIP-8, CRBR, VAT-R - by firma stała się operacyjna w jednym podejściu, a nie po kawałku z przerwami.' },
      { q: 'Dlaczego bank może odmówić i co robić po odmowie?', a: 'Przyczyna prawie zawsze leży w procedurach AML: bank nie musi wyjaśniać decyzji ani jej uzasadniać. Typowe wyzwalacze: brak powiązania z Polską (adres, zameldowanie, umowa najmu), niejasne źródło środków, "ryzykowne" kody PKD (krypto, doradztwo, handel międzynarodowy), złożona struktura właścicielska, brak PESEL przy słabym pakiecie dokumentów. Po odmowie wracanie do tego samego banku ma niewielki sens - lepiej przepakować dokumenty i pójść do banku z inną polityką ryzyka. Właśnie dlatego utrzymujemy krótką listę i wiemy, gdzie Twój profil przechodzi.' },
      { q: 'Czy można otworzyć konto zdalnie, bez przyjazdu do Polski?', a: 'W części banków tak: skany dokumentów, weryfikacja wideo, karta kurierem. Ale dla obcokrajowca bez PESEL i bez adresu w Polsce szanse są niższe, a limity na pierwsze miesiące obcięte. Przy koncie firmowym zdalnie wychodzi gorzej: bank prawie zawsze chce zobaczyć członka zarządu osobiście. Praktyczny schemat dla osób przed przeprowadzką: przygotować pakiet zawczasu i otworzyć konto w trakcie pierwszej wizyty - da się to zrobić w jeden dzień, jeśli zapis i dokumenty są gotowe.' },
      { q: 'Ile kosztuje prowadzenie konta w polskim banku?', a: 'Podstawowa obsługa konta osobistego jest w większości banków bezpłatna przy spełnieniu prostych warunków - wpływu na konto albo kilku transakcji kartą w miesiącu. Konta firmowe są często darmowe w pierwszym roku, później od 0 do 50 PLN/mies. zależnie od obrotów i pakietu. Rzeczywiste koszty kryją się gdzie indziej: przewalutowanie, przelewy SWIFT, wypłaty w obcych bankomatach. Jeśli masz przychody w euro lub dolarach, konto wielowalutowe oszczędza więcej niż jakakolwiek oszczędność na prowadzeniu.' },
      { q: 'Czy trzeba płacić przez rachunek, a nie gotówką?', a: 'W B2B tak. Zgodnie z art. 19 Prawa przedsiębiorców rozliczenia między przedsiębiorcami na kwotę od 15 000 PLN muszą przechodzić przez rachunek płatniczy. Zapłacone gotówką - kwota nie wejdzie w koszty, niezależnie od tego, że transakcja jest realna i dokumenty w porządku. To kolejny powód, by otworzyć rachunek firmowy przed pierwszą dużą transakcją, a nie po niej.' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Otworzymy konto, które naprawdę działa',
    ctaSubtitle: 'Napisz: czy masz PESEL, jaki jest Twój status pobytu i czy potrzebne jest konto osobiste czy firmowe. W 30 minut dostaniesz krótką listę banków, w których Twój przypadek przechodzi, i wycenę pod klucz - razem ze zgłoszeniem rachunku na białą listę.'
  },
  en: {
    slug: 'konto-bankowe',
    group: 'business',
    icon: 'landmark',
    badge: 'Personal · business · white list',
    title: 'Opening a bank account in Poland',
    subtitle: 'Personal and business accounts for foreigners: bank selection, in-branch support, white-list registration',
    lead: 'A Polish bank account is not a formality but your entry point into the Polish economy: without it no salary is paid, no landlord accepts rent, and no B2B transaction of 15,000 PLN or more goes through. With a PESEL number and a residence card a personal account opens in 30-60 minutes. Without PESEL it is harder but perfectly feasible: Millennium, Santander, BNP Paribas and Alior work on a passport plus proof of legal residence. Business accounts are a different story: the bank looks at the NIP, the CEIDG or KRS extract, the real connection between the business and Poland, and runs you through its AML procedures - refusals are routine and the bank owes you no explanation. And here is the piece almost every new company misses: the account must be reported to the white list of VAT taxpayers, otherwise your counterparty cannot deduct what they pay you. We select the bank for your specific case, assemble the pack, attend the meeting with you as interpreter, and get the account into fully working shape.',
    facts: [
      { label: 'Personal account with PESEL', value: '30-60 minutes', note: 'passport + residence card · in branch' },
      { label: 'Without PESEL', value: 'Millennium, Santander, BNP, Alior', note: 'passport + proof of legal stay' },
      { label: 'White list', value: 'from 15,000 PLN', note: 'B2B payment threshold · business accounts only' },
      { label: 'Our fee', value: 'from 800 PLN', note: 'selection, pack, in-branch support' }
    ],
    grounds: {
      title: 'The accounts we open',
      subtitle: 'The needs differ, so the right banks differ too. There is no universally "best bank".',
      items: [
        { title: 'Personal account with PESEL and residence card', desc: 'The easy case: you walk into a branch with your passport and card and the account is live the same day. Our job here is to pick a bank with free maintenance, an app in a language you read, and sensible foreign-transfer terms - rather than whichever branch is nearest.' },
        { title: 'Personal account without PESEL', desc: 'Not every bank offers it, and not consistently. Millennium, Santander, BNP Paribas and Alior accept a passport plus a document evidencing legal residence (visa, residence card, UPO) and a Polish address. We know in advance which branch of which bank actually runs the procedure and book you there - which saves two or three wasted trips.' },
        { title: 'Business account for a JDG', desc: 'Technically a sole trader may operate from a personal account, but in practice that is a dead end: personal accounts never reach the white list, so counterparties dealing in amounts from 15,000 PLN will decline to work with you. We open a proper settlement account with the VAT sub-account attached for split payment.' },
        { title: 'Business account for an Sp. z o.o.', desc: 'Here the bank scrutinises properly: articles of association, KRS extract, NIP, ownership structure, beneficial owners, source of capital, actual address and nature of business. We build the pack so the AML questions are answered before the visit. A separate task is the account for contributing the 5,000 PLN share capital after an S24 registration.' },
        { title: 'Non-resident and remote opening', desc: 'Some banks open accounts remotely: scanned documents, video identification, card by courier. Conditions are tighter and initial limits lower, but for a company owner who has not yet relocated it is a workable route. We tell you where it genuinely goes through and where it will end in refusal.' },
        { title: 'White-list registration: NIP-8 and CEIDG-1', desc: 'An open account is only half the job. A sole trader reports the account number through CEIDG-1; a company does it through NIP-8 (within 21 days of KRS registration, and within 7 days of any change). Only then does the account appear on the white list of VAT taxpayers and payments into it become safe for your counterparty.' }
      ]
    },
    timeline: {
      title: 'How the work runs',
      subtitle: 'Personal account: 1-3 days. Business account: 3-10 days depending on the bank and the complexity of the structure.',
      steps: [
        { title: 'Scoping', duration: '30 min', desc: 'We establish your residence status, whether you hold a PESEL, whether you need a personal or business account, your expected turnover and currencies, and whether split payment and multi-currency matter. That produces a shortlist of two or three banks where your case reliably passes.' },
        { title: 'Document pack', duration: '1-3 days', desc: 'We assemble the pack against the chosen bank\'s requirements: passport, residence card or visa, proof of address and, for a company, KRS/CEIDG, NIP, articles, beneficial-owner data and a description of the business. Weak spots get closed in advance rather than at the counter.' },
        { title: 'Booking and attendance', duration: '1 day', desc: 'We book a specific branch and a specific officer who handles foreign clients. We attend with you, interpret the conversation and field the AML questions - the stage where unassisted attempts most often fail.' },
        { title: 'Activation and access', duration: '1-2 days', desc: 'We set up online and mobile banking, attach the VAT sub-account, arrange the card and, where needed, add accountant access and multi-currency sub-accounts.' },
        { title: 'White list and the tax office', duration: '1-3 days', desc: 'We report the account through CEIDG-1 or NIP-8 and verify two or three days later that it is visible on the Ministry of Finance white list. You get a dated screenshot - your evidence for counterparties and your accountant.' }
      ]
    },
    documents: {
      title: 'What you will need',
      subtitle: 'The precise list depends on the bank - you get a personalised checklist once we have scoped the case.',
      items: [
        'Passport (original, mandatory)',
        'Residence card, D visa or UPO certificate - proof of legal residence',
        'PESEL number if you have one - it simplifies the procedure considerably',
        'Proof of a Polish address: lease agreement, registration certificate or a utility bill',
        'For a business: NIP, CEIDG or KRS extract, articles of association',
        'For an Sp. z o.o.: beneficial-owner details (for CRBR and AML) and the ownership structure',
        'A description of the business and expected turnover - the bank will always ask',
        'A Polish mobile number and an email address'
      ]
    },
    pricing: {
      title: 'Our fees',
      subtitle: 'Fixed fee per account. Account maintenance on basic tariffs is usually free at the bank.',
      items: [
        { label: 'Consultation and bank selection', value: 'Free', note: '30 min · shortlist for your case' },
        { label: 'Personal account', value: 'from 800 PLN', note: 'Selection, pack, booking, attendance with interpreting' },
        { label: 'Business account for a JDG', value: 'from 800 PLN', note: '+ account reported via CEIDG-1' },
        { label: 'Business account for an Sp. z o.o.', value: 'from 1,200 PLN', note: '+ NIP-8, VAT sub-account, accountant access' },
        { label: 'Account without PESEL or for a non-resident', value: 'from 1,500 PLN', note: 'Difficult cases, remote opening' }
      ],
      note: 'Banks usually do not charge for opening or basic maintenance. Possible bank costs: card issuance, SWIFT transfers, currency conversion, low-turnover fees. Sworn translations of foreign documents, if the bank demands them, are billed separately. We cannot guarantee the bank\'s decision - it rests on their AML procedures - but we select so that your case passes.'
    },
    legalBase: {
      title: 'Legal framework',
      items: [
        'Banking Act of 29 August 1997 (bank account agreement, settlement account)',
        'Act of 1 March 2018 on counteracting money laundering and terrorist financing (AML/KYC)',
        'VAT Act - art. 96b (white list of VAT taxpayers), art. 108a (split payment mechanism)',
        'Tax Ordinance - art. 117ba (joint liability when paying to an account outside the register)',
        'Income tax acts - deduction denied for payments from 15,000 PLN made outside the register',
        'Entrepreneurs\' Law - art. 19 (payments from 15,000 PLN must go through a payment account)',
        'Commercial Companies Code - art. 158, art. 163 (contribution of share capital)'
      ]
    },
    faq: [
      { q: 'Can I open a Polish bank account without a PESEL number?', a: 'Yes, though not at every bank or every branch. As of 2026, Bank Millennium, Santander Bank Polska, BNP Paribas and Alior genuinely open passport-only accounts without PESEL, provided you present a document evidencing legal residence (a D visa, residence card or UPO) and proof of a Polish address. Getting a PESEL is still worth it: it lowers the refusal risk, unlocks Profil Zaufany and lifts limits. Banks change these rules without notice, so we verify the current procedure before the visit rather than relying on last year\'s experience.' },
      { q: 'Can I run my business through a personal account?', a: 'Technically a sole trader may - the law does not prohibit it. In practice it is a mistake: only settlement (business) accounts reach the white list of VAT taxpayers. If your account is not in the register, a counterparty paying you 15,000 PLN or more cannot deduct the amount and takes on joint liability for your VAT. The outcome is predictable: serious B2B clients simply will not deal with you. For an Sp. z o.o. a separate account is always mandatory - the company is its own legal person.' },
      { q: 'What is the white list and why must my account be registered on it?', a: 'The white list of VAT taxpayers is a public Ministry of Finance register showing, by NIP, a taxpayer\'s VAT status and their reported business accounts. For B2B payments of 15,000 PLN gross or more the payer must check whether your account appears there. If it does not: the amount is not deductible and the payer becomes jointly liable for your VAT - only a ZAW-NR notification within seven days rescues them. Accounts do not appear automatically: a JDG reports it via CEIDG-1, a company via NIP-8 within 21 days of KRS registration, and within seven days of changing accounts.' },
      { q: 'What is the VAT sub-account and do I need it?', a: 'It is a technical sub-account the bank attaches automatically to every settlement account - you do not pay for it separately. It serves the split payment mechanism: the portion of a transfer equal to the VAT lands there, and you may use it only for restricted purposes - VAT, social contributions and other taxes. Split payment is mandatory for transactions from 15,000 PLN gross involving goods and services listed in Annex 15 to the VAT Act (electronics, construction, metals, fuels and others). If you operate in those sectors, that is another reason you need a business account.' },
      { q: 'Do I need an account to register an Sp. z o.o. through S24?', a: 'Not for the registration itself: the 5,000 PLN share capital can be declared as contributed and paid in later, including in kind. But immediately after the KRS entry you will need an account - for the cash contribution, for NIP-8, for the white list, for the first payments and for ZUS. In practice it pays to do all of it in one pass - registration, account, NIP-8, CRBR, VAT-R - so the company becomes operational at once rather than piecemeal with gaps.' },
      { q: 'Why might the bank refuse, and what do I do then?', a: 'Almost always AML procedures: the bank need not explain or justify its decision. Typical triggers are no genuine link to Poland (address, registration, lease), an unclear source of funds, "risky" PKD activity codes (crypto, consulting, international trade), a complex ownership structure, or the absence of a PESEL alongside a thin document pack. Returning to the same bank rarely helps - it is better to repackage the file and go to a bank with a different risk appetite. That is exactly why we keep a shortlist and know where your profile clears.' },
      { q: 'Can I open an account remotely, without travelling to Poland?', a: 'At some banks, yes: scanned documents, video verification, card delivered by courier. For a foreigner with no PESEL and no Polish address the odds are lower and the first-months limits are cut. For business accounts remote opening works less well: the bank almost always wants to see a board member in person. The practical pattern for people yet to relocate is to prepare the pack in advance and open the account during the first visit - a single day is enough when the booking and documents are ready.' },
      { q: 'What does it cost to maintain a Polish bank account?', a: 'Basic personal banking is free at most banks provided simple conditions are met, such as an incoming transfer or a few card transactions per month. Business accounts are often free for the first year and then run from 0 to 50 PLN a month depending on turnover and package. The real costs hide elsewhere: currency conversion, SWIFT transfers, withdrawals at other banks\' ATMs. If your income is in euros or dollars, a multi-currency account saves more than any maintenance-fee saving ever will.' },
      { q: 'Must payments go through an account rather than in cash?', a: 'For B2B, yes. Under art. 19 of the Entrepreneurs\' Law, settlements between businesses of 15,000 PLN or more must pass through a payment account. Pay in cash and the amount is not deductible, regardless of the transaction being genuine and the paperwork being in order. That is one more reason to open the business account before your first large deal rather than after it.' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'We will open an account that actually works',
    ctaSubtitle: 'Tell us whether you hold a PESEL, what your residence status is, and whether you need a personal or a business account. Within 30 minutes you will have a shortlist of banks where your case clears and an end-to-end quote - white-list registration included.'
  },
  tr: {
    slug: 'konto-bankowe',
    group: 'business',
    icon: 'landmark',
    badge: 'Bireysel · şirket · biała lista',
    title: 'Polonya\'da banka hesabı açma',
    subtitle: 'Yabancılar için bireysel ve şirket hesabı: banka seçimi, şubede eşlik, biała lista bildirimi',
    lead: 'Polonya banka hesabı bir formalite değil, Polonya ekonomisine giriş kapısıdır: onsuz maaş ödenmez, kira kabul edilmez, 15.000 PLN ve üzeri hiçbir B2B işlem gerçekleşmez. PESEL ve karta pobytu ile bireysel hesap 30-60 dakikada açılır. PESEL olmadan daha zor ama mümkün: Millennium, Santander, BNP Paribas ve Alior pasaport artı yasal ikamet belgesiyle çalışır. Şirket hesabı ayrı bir konu: banka NIP\'e, CEIDG veya KRS kaydına, işin Polonya ile gerçek bağına bakar ve sizi AML süreçlerinden geçirir - burada ret olağandır ve banka gerekçe göstermek zorunda değildir. Ayrıca neredeyse her yeni şirketin atladığı bir nokta var: hesap, biała lista podatników VAT\'a bildirilmelidir, aksi halde karşı taraf size yaptığı ödemeyi gider yazamaz. Vakanıza uygun bankayı seçiyor, dosyayı hazırlıyor, görüşmede tercümeyle eşlik ediyor ve hesabı tam çalışır hale getiriyoruz.',
    facts: [
      { label: 'PESEL ile bireysel hesap', value: '30-60 dakika', note: 'pasaport + karta pobytu · şubede' },
      { label: 'PESEL olmadan', value: 'Millennium, Santander, BNP, Alior', note: 'pasaport + ikamet belgesi' },
      { label: 'Biała lista', value: '15.000 PLN\'den', note: 'B2B ödeme eşiği · yalnızca şirket hesabı' },
      { label: 'Ücretimiz', value: '800 PLN\'den', note: 'seçim, dosya, eşlik' }
    ],
    grounds: {
      title: 'Hangi hesapları açıyoruz',
      subtitle: 'İhtiyaçlar farklı, dolayısıyla uygun bankalar da farklı. Evrensel "en iyi banka" yok.',
      items: [
        { title: 'PESEL ve karta pobytu ile bireysel hesap', desc: 'En kolay durum: şubeye pasaport ve kartla gidiyorsunuz, hesap aynı gün çalışır. Bizim işimiz burada ücretsiz işletim, anladığınız dilde uygulama ve makul döviz transfer koşulları olan bankayı seçmek - en yakın şubeyi değil.' },
        { title: 'PESEL olmadan bireysel hesap', desc: 'Her banka ve her şube açmaz. Millennium, Santander, BNP Paribas ve Alior pasaport artı yasal ikamet belgesi (vize, karta pobytu, UPO) ve Polonya adresi kabul eder. Hangi bankanın hangi şubesinde prosedürün gerçekten işlediğini önceden biliyor ve tam oraya randevu alıyoruz - bu, boşa iki-üç yolculuk kazandırır.' },
        { title: 'JDG için şirket hesabı', desc: 'Şahıs işletmesi resmen bireysel hesaptan çalışabilir, ancak pratikte bu çıkmaz sokak: bireysel hesap biała lista\'ya girmez, dolayısıyla 15.000 PLN\'den yüksek tutarlarda iş ortakları çalışmayı reddeder. Split payment için otomatik rachunek VAT ile tam bir rachunek rozliczeniowy açıyoruz.' },
        { title: 'Sp. z o.o. için şirket hesabı', desc: 'Burada banka ciddi inceler: umowa spółki, KRS kaydı, NIP, ortaklık yapısı, gerçek faydalanıcılar, sermaye kaynağı, fiili adres ve faaliyet niteliği. Dosyayı, AML soruları ziyaretten önce kapanacak şekilde hazırlıyoruz. Ayrı bir iş: S24 kaydı sonrası 5.000 PLN kapitał zakładowy yatırımı için hesap.' },
        { title: 'Yerleşik olmayanlar ve uzaktan açılış', desc: 'Bazı bankalar hesabı uzaktan açar: belge taramaları, video doğrulama, kurye ile kart. Koşullar daha katı, ilk dönem limitleri daha düşük, ama henüz taşınmamış şirket sahibi için işleyen bir yol. Nerede gerçekten geçtiğini, nerede retle biteceğini söylüyoruz.' },
        { title: 'Biała lista bildirimi: NIP-8 ve CEIDG-1', desc: 'Açılmış hesap işin yarısıdır. JDG için hesap numarası CEIDG-1 ile, şirket için NIP-8 ile bildirilir (KRS kaydından itibaren 21 gün, değişikliklerde 7 gün içinde). Ancak bundan sonra hesap biała lista podatników VAT\'ta görünür ve ona yapılan ödemeler karşı taraf için güvenli olur.' }
      ]
    },
    timeline: {
      title: 'Süreç nasıl işler',
      subtitle: 'Bireysel hesap 1-3 gün. Şirket hesabı bankaya ve yapının karmaşıklığına göre 3-10 gün.',
      steps: [
        { title: 'Durum analizi', duration: '30 dk', desc: 'İkamet statünüz, PESEL\'iniz olup olmadığı, bireysel mi şirket hesabı mı gerektiği, ciro ve para birimleri, split payment ve çoklu para birimi ihtiyacı - hepsine bakıyoruz. Buradan vakanızın kesin geçtiği iki-üç bankalık kısa liste çıkıyor.' },
        { title: 'Belge dosyası', duration: '1-3 gün', desc: 'Seçilen bankanın gereklerine göre dosya topluyoruz: pasaport, karta pobytu veya vize, adres belgesi, şirket için KRS/CEIDG, NIP, umowa spółki, faydalanıcı bilgileri ve faaliyet tanımı. Sorunlu noktaları gişede değil, önceden kapatıyoruz.' },
        { title: 'Randevu ve eşlik', duration: '1 gün', desc: 'Yabancılarla çalışan belirli bir personele, belirli bir şubeye randevu alıyoruz. Birlikte gidiyor, görüşmeyi tercüme ediyor, AML sorularını yanıtlıyoruz - tek başına yapılan denemeler en çok bu aşamada tıkanır.' },
        { title: 'Aktivasyon ve erişimler', duration: '1-2 gün', desc: 'İnternet bankacılığı ve uygulamayı kuruyor, rachunek VAT\'ı bağlıyor, kartı çıkarıyor, gerekirse muhasebeci yetkisi ve çoklu para birimi alt hesapları ekliyoruz.' },
        { title: 'Biała lista ve vergi dairesi', duration: '1-3 gün', desc: 'Hesabı CEIDG-1 veya NIP-8 ile bildiriyor, iki-üç gün sonra MF sitesindeki biała lista\'da göründüğünü kontrol ediyoruz. Tarihli ekran görüntüsünü gönderiyoruz - iş ortakları ve muhasebeciniz için kanıtınız.' }
      ]
    },
    documents: {
      title: 'Neler gerekli',
      subtitle: 'Kesin liste bankaya bağlıdır - durum analizinden sonra kişisel kontrol listesi iletiyoruz.',
      items: [
        'Pasaport (zorunlu, orijinal)',
        'Karta pobytu, D vizesi veya UPO - yasal ikamet belgesi',
        'PESEL varsa - prosedürü belirgin şekilde kolaylaştırır',
        'Polonya adres belgesi: umowa najmu, meldunek veya fatura',
        'Şirket için: NIP, CEIDG veya KRS kaydı, umowa spółki',
        'Sp. z o.o. için: gerçek faydalanıcı bilgileri (CRBR ve AML için), ortaklık yapısı',
        'Faaliyet ve beklenen ciro tanımı - banka mutlaka sorar',
        'Polonya hattı telefon numarası ve e-posta'
      ]
    },
    pricing: {
      title: 'Hizmet bedeli',
      subtitle: 'Hesap başına sabit ücret. Bankada temel tarifelerde hesap işletimi genelde ücretsizdir.',
      items: [
        { label: 'Danışmanlık ve banka seçimi', value: 'Ücretsiz', note: '30 dk · vakanıza uygun kısa liste' },
        { label: 'Bireysel hesap', value: '800 PLN\'den', note: 'Seçim, dosya, randevu, tercümeli eşlik' },
        { label: 'JDG için şirket hesabı', value: '800 PLN\'den', note: '+ CEIDG-1 ile hesap bildirimi' },
        { label: 'Sp. z o.o. için şirket hesabı', value: '1.200 PLN\'den', note: '+ NIP-8, rachunek VAT, muhasebeci erişimi' },
        { label: 'PESEL\'siz veya yerleşik olmayan hesabı', value: '1.500 PLN\'den', note: 'Zor vakalar, uzaktan açılış' }
      ],
      note: 'Hesap açılışı ve temel işletimi bankalar genelde ücretlendirmez. Olası banka masrafları: kart basımı, SWIFT transferleri, döviz dönüşümü, düşük ciro ücreti. Banka talep ederse yabancı belgelerin yeminli tercümeleri ayrıca faturalanır. Bankanın kararını garanti edemeyiz - bu AML süreçlerine bağlıdır - ancak vakanızın geçeceği şekilde seçim yapıyoruz.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        '29 Ağustos 1997 tarihli Bankacılık Kanunu (banka hesabı sözleşmesi, rachunek rozliczeniowy)',
        '1 Mart 2018 tarihli kara para aklama ve terörün finansmanıyla mücadele kanunu (AML/KYC)',
        'VAT kanunu - art. 96b (biała lista podatników VAT), art. 108a (bölünmüş ödeme mekanizması)',
        'Vergi Usul Kanunu - art. 117ba (kayıt dışı hesaba ödemede müteselsil sorumluluk)',
        'Gelir vergisi kanunları - 15.000 PLN\'den yüksek kayıt dışı ödemelerde gider yazma yasağı',
        'Girişimciler Hukuku - art. 19 (15.000 PLN\'den itibaren ödeme hesabı üzerinden zorunluluğu)',
        'Ticaret Şirketleri Kanunu - art. 158, art. 163 (esas sermayenin yatırılması)'
      ]
    },
    faq: [
      { q: 'PESEL olmadan Polonya\'da banka hesabı açılabilir mi?', a: 'Evet, ama her bankada ve her şubede değil. 2026 itibarıyla PESEL\'siz pasaportla hesabı gerçekten Bank Millennium, Santander Bank Polska, BNP Paribas ve Alior açıyor - yasal ikamet belgesi (D vizesi, karta pobytu veya UPO) ve Polonya adres belgesi göstermeniz şartıyla. PESEL yine de çıkarılmaya değer: ret riskini düşürür, Profil Zaufany\'yi ve normal limitleri açar. Bankalar koşulları haber vermeden değiştirdiği için ziyaretten önce güncel prosedürü teyit ediyoruz, geçen yılın deneyimine güvenmiyoruz.' },
      { q: 'Şirket için bireysel hesap kullanılabilir mi?', a: 'Resmen JDG bireysel hesaptan çalışabilir - kanun yasaklamıyor. Pratikte bu bir hata: biała lista podatników VAT\'a yalnızca rachunki rozliczeniowe, yani şirket hesapları girer. Hesabınız listede yoksa, size 15.000 PLN veya üzeri ödeyen iş ortağı bu tutarı gider yazamaz ve VAT\'ınız için müteselsil sorumluluk altına girer. Sonuç öngörülebilir: ciddi B2B müşterileri sizinle çalışmaz. Sp. z o.o. için ayrı hesap her zaman zorunludur - şirketin kendi tüzel kişiliği vardır.' },
      { q: 'Biała lista nedir ve hesabı neden oraya bildirmek gerekir?', a: 'Biała lista podatników VAT, Maliye Bakanlığı\'nın kamuya açık kaydıdır; NIP ile VAT statüsü ve bildirilen şirket hesapları görünür. 15.000 PLN brüt ve üzeri B2B ödemede ödeyici, hesabınızın kayıtta olup olmadığını kontrol etmek zorundadır. Yoksa: tutar gider yazılamaz ve VAT\'ınız için müteselsil sorumluluk doğar (yalnızca 7 gün içinde ZAW-NR bildirimi kurtarır). Hesap kayda otomatik girmez: JDG için CEIDG-1, şirket için KRS kaydından itibaren 21 gün içinde NIP-8, hesap değişikliğinde 7 gün içinde bildirilir.' },
      { q: 'Rachunek VAT nedir, bana gerekli mi?', a: 'Bankanın her rachunek rozliczeniowy\'ye otomatik açtığı teknik alt hesaptır - ayrıca ücret ödenmez. Bölünmüş ödeme (split payment) mekanizmasını yürütür: transferin VAT\'a karşılık gelen kısmı bu alt hesaba düşer ve kullanımı sınırlıdır - VAT, ZUS ve diğer vergiler için. Split payment, VAT kanununun 15. ekinde yer alan mal ve hizmetlerde (elektronik, inşaat, metal, yakıt vb.) 15.000 PLN brütten itibaren zorunludur. Bu sektörlerdeyseniz şirket hesabı bu nedenle de gereklidir.' },
      { q: 'S24 ile Sp. z o.o. kaydı için hesap gerekir mi?', a: 'Kaydın kendisi için hayır - 5.000 PLN kapitał zakładowy yatırılmış olarak beyan edilip sonra, ayni sermaye dahil, yatırılabilir. Ancak KRS kaydından hemen sonra hesap gerekir: sermayenin nakit yatırımı, NIP-8, biała lista, ilk ödemeler ve ZUS için. Pratikte hepsini tek pakette yapmak mantıklıdır - kayıt, hesap, NIP-8, CRBR, VAT-R - böylece şirket parça parça değil, tek seferde çalışır hale gelir.' },
      { q: 'Banka neden reddeder ve ret sonrası ne yapılır?', a: 'Neden neredeyse her zaman AML süreçleridir: banka kararını açıklamak ve gerekçelendirmek zorunda değildir. Tipik tetikleyiciler: Polonya ile bağ eksikliği (adres, meldunek, kira sözleşmesi), belirsiz fon kaynağı, "riskli" PKD kodları (kripto, danışmanlık, uluslararası ticaret), karmaşık ortaklık yapısı, zayıf dosyayla birlikte PESEL yokluğu. Ret sonrası aynı bankaya dönmenin faydası azdır - dosyayı yeniden paketleyip farklı risk politikası olan bankaya gitmek daha iyidir. Kısa liste tutmamızın ve profilinizin nerede geçtiğini bilmemizin nedeni tam olarak bu.' },
      { q: 'Polonya\'ya gelmeden hesap uzaktan açılabilir mi?', a: 'Bazı bankalarda evet: belge taramaları, video doğrulama, kurye ile kart. Ancak PESEL\'i ve Polonya adresi olmayan yabancı için şans daha düşük, ilk aylardaki limitler kısıtlı. Şirket hesabında uzaktan açılış daha kötü işler: banka neredeyse her zaman yönetim kurulu üyesini şahsen görmek ister. Henüz taşınmamışlar için pratik yol: dosyayı önceden hazırlayıp ilk ziyarette hesabı açmak - randevu ve belgeler hazırsa tek günde olur.' },
      { q: 'Polonya\'da hesap işletimi ne kadar?', a: 'Bireysel hesapta temel hizmet, hesaba para girişi veya ayda birkaç kart işlemi gibi basit koşullarla çoğu bankada ücretsizdir. Şirket hesapları ilk yıl sıkça bedelsizdir, sonrasında ciro ve pakete göre ayda 0 ile 50 PLN arasında. Gerçek maliyetler başka yerde saklıdır: döviz dönüşümü, SWIFT transferleri, başka bankaların ATM\'lerinden çekim. Gelirleriniz euro veya dolarsa, çoklu para birimi hesabı işletim ücretinden tasarruftan fazlasını kazandırır.' },
      { q: 'Ödemeler nakit değil hesap üzerinden mi yapılmalı?', a: 'B2B\'de evet. Girişimciler Hukuku art. 19 uyarınca girişimciler arası 15.000 PLN ve üzeri ödemeler ödeme hesabı üzerinden geçmelidir. Nakit ödediyseniz, işlem gerçek ve belgeler düzgün olsa bile tutar gider yazılamaz. Bu da şirket hesabını ilk büyük işlemden sonra değil, öncesinde açmak için bir başka gerekçedir.' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Gerçekten çalışan bir hesap açalım',
    ctaSubtitle: 'Yazın: PESEL\'iniz var mı, ikamet statünüz nedir, bireysel mi şirket hesabı mı gerekiyor. 30 dakikada vakanızın geçtiği bankaların kısa listesini ve anahtar teslim fiyatı veriyoruz - hesabın biała lista\'ya bildirimi dahil.'
  },
  uk: {
    slug: 'konto-bankowe',
    group: 'business',
    icon: 'landmark',
    badge: 'Konto osobiste · firmowe · biała lista',
    title: 'Відкриття банківських рахунків у Польщі',
    subtitle: 'Особистий і фірмовий рахунок для іноземця: підбір банку, супровід, реєстрація на białej liście',
    lead: 'Рахунок у польському банку - це не формальність, а вхід до польської економіки: без нього не виплатять зарплату, не приймуть оренду, не пройде жодна B2B-угода від 15 000 PLN. З PESEL і картою побуту особистий рахунок відкривається за 30-60 хвилин. Без PESEL складніше, але реально: Millennium, Santander, BNP Paribas та Alior працюють за паспортом плюс підтвердження легального перебування. З фірмовим рахунком окрема історія: банк дивиться на NIP, виписку з CEIDG або KRS, реальний зв\'язок бізнесу з Польщею і проводить вас через процедури AML - відмови тут звичайна справа, і причину банк пояснювати не зобов\'язаний. Плюс момент, який пропускають майже всі нові фірми: рахунок треба зареєструвати на białej liście podatników VAT, інакше контрагент не зможе врахувати платіж вам у витрати. Підбираємо банк під ваш випадок, готуємо пакет, супроводжуємо на зустрічі з перекладом і доводимо рахунок до повністю робочого стану.',
    facts: [
      { label: 'Особистий рахунок з PESEL', value: '30-60 хвилин', note: 'паспорт + karta pobytu · у відділенні' },
      { label: 'Без PESEL', value: 'Millennium, Santander, BNP, Alior', note: 'паспорт + підтвердження перебування' },
      { label: 'Biała lista', value: 'від 15 000 PLN', note: 'поріг для B2B-платежів · лише фірмовий рахунок' },
      { label: 'Наш гонорар', value: 'від 800 PLN', note: 'підбір, пакет, супровід' }
    ],
    grounds: {
      title: 'Які рахунки ми відкриваємо',
      subtitle: 'Завдання різні, і банки під них теж різні. Універсального «найкращого банку» не існує.',
      items: [
        { title: 'Особистий рахунок з PESEL і картою побуту', desc: 'Найпростіший випадок: приходите у відділення з паспортом і картою, рахунок активний того ж дня. Наша роль тут - підібрати банк із безкоштовним веденням, застосунком зрозумілою вам мовою і нормальними умовами валютних переказів, а не перший-ліпший.' },
        { title: 'Особистий рахунок без PESEL', desc: 'Відкривають не всі банки і не завжди. Millennium, Santander, BNP Paribas та Alior приймають паспорт плюс документ, що підтверджує легальне перебування (віза, karta pobytu, UPO) і адресу в Польщі. Заздалегідь знаємо, в якому відділенні якого банку процедура реально працює, і записуємо саме туди - це економить дві-три поїздки марно.' },
        { title: 'Konto firmowe для JDG', desc: 'Формально ФОП може працювати і з особистого рахунку, але на практиці це тупик: особистий рахунок не потрапить на białą listę, а отже контрагенти від 15 000 PLN відмовляться з вами працювати. Відкриваємо повноцінний rachunek rozliczeniowy з автоматичним rachunkiem VAT під split payment.' },
        { title: 'Konto firmowe для Sp. z o.o.', desc: 'Тут банк перевіряє всерйоз: umowa spółki, виписка KRS, NIP, структура власності, бенефіціари, джерело капіталу, реальна адреса і характер діяльності. Готуємо пакет так, щоб питання AML знялися до візиту. Окреме завдання - рахунок для внесення kapitału zakładowego 5 000 PLN при реєстрації через S24.' },
        { title: 'Рахунок для нерезидента і дистанційно', desc: 'Частина банків відкриває рахунок дистанційно: скани документів, відеоідентифікація, кур\'єрська доставка карти. Умови жорсткіші, ліміти на перший час нижчі, але для власника фірми, який ще не переїхав, це робочий варіант. Підказуємо, де реально проходить, а де буде відмова.' },
        { title: 'Реєстрація на białej liście: NIP-8 і CEIDG-1', desc: 'Відкритий рахунок - це половина справи. Для JDG номер рахунку заявляється через CEIDG-1, для spółki - через NIP-8 (протягом 21 дня від реєстрації в KRS, а при змінах - 7 днів). Тільки після цього рахунок з\'являється на białej liście podatników VAT і платежі на нього безпечні для контрагента.' }
      ]
    },
    timeline: {
      title: 'Як проходить робота',
      subtitle: 'Особистий рахунок - 1-3 дні. Фірмовий - 3-10 днів, залежно від банку і складності структури.',
      steps: [
        { title: 'Розбір завдання', duration: '30 хв', desc: 'Дивимося: який статус перебування, чи є PESEL, потрібен особистий рахунок чи фірмовий, які обороти і валюти, чи потрібен split payment і мультивалютність. Звідси - шорт-лист із двох-трьох банків, де ваш випадок точно проходить.' },
        { title: 'Комплект документів', duration: '1-3 дні', desc: 'Збираємо пакет під вимоги конкретного банку: паспорт, karta pobytu або віза, підтвердження адреси, для фірми - KRS/CEIDG, NIP, umowa spółki, дані бенефіціарів і опис діяльності. Проблемні місця закриваємо заздалегідь, а не у вікні.' },
        { title: 'Запис і супровід', duration: '1 день', desc: 'Записуємося в конкретне відділення до співробітника, який працює з іноземцями. Ідемо разом, перекладаємо розмову, відповідаємо на питання щодо AML - саме тут найчастіше зриваються самостійні спроби.' },
        { title: 'Активація і доступи', duration: '1-2 дні', desc: 'Налаштовуємо інтернет-банк і застосунок, підключаємо rachunek VAT, оформлюємо карту, за потреби - авторизацію для бухгалтера і мультивалютні субрахунки.' },
        { title: 'Biała lista і податкова', duration: '1-3 дні', desc: 'Заявляємо рахунок через CEIDG-1 або NIP-8, перевіряємо через два-три дні, що він видимий на białej liście на сайті MF. Надсилаємо скріншот із датою - це ваш аргумент для контрагентів і бухгалтера.' }
      ]
    },
    documents: {
      title: 'Що знадобиться',
      subtitle: 'Точний список залежить від банку - надсилаємо персональний чек-лист після розбору завдання.',
      items: [
        'Закордонний паспорт (обов\'язково, оригінал)',
        'Karta pobytu, віза D або UPO - підтвердження легального перебування',
        'PESEL, якщо є - суттєво спрощує процедуру',
        'Підтвердження адреси в Польщі: umowa najmu, meldunek або рахунок за комунальні',
        'Для фірми: NIP, виписка з CEIDG або KRS, umowa spółki',
        'Для Sp. z o.o.: дані бенефіціарних власників (для CRBR і AML), структура власності',
        'Опис діяльності та очікуваних оборотів - банк спитає обов\'язково',
        'Номер телефону в польській мережі та e-mail'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Фіксований гонорар за рахунок. Ведення рахунку в банку в базових тарифах зазвичай безкоштовне.',
      items: [
        { label: 'Консультація і підбір банку', value: 'Безкоштовно', note: '30 хвилин · шорт-лист під ваш випадок' },
        { label: 'Особистий рахунок', value: 'від 800 PLN', note: 'Підбір, пакет, запис, супровід із перекладом' },
        { label: 'Konto firmowe для JDG', value: 'від 800 PLN', note: '+ заявлення рахунку через CEIDG-1' },
        { label: 'Konto firmowe для Sp. z o.o.', value: 'від 1 200 PLN', note: '+ NIP-8, rachunek VAT, доступ для бухгалтера' },
        { label: 'Рахунок без PESEL або для нерезидента', value: 'від 1 500 PLN', note: 'Складні випадки, дистанційне відкриття' }
      ],
      note: 'Відкриття і базове ведення рахунку банк зазвичай не тарифікує. Можливі витрати банку: випуск карти, перекази SWIFT, конвертація валют, обслуговування за низьких оборотів. Присяжні переклади іноземних документів, якщо банк їх вимагатиме, оплачуються окремо. Гарантувати рішення банку ми не можемо - воно залежить від процедур AML, але підбираємо так, щоб ваш випадок проходив.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 29 sierpnia 1997 r. - Prawo bankowe (umowa rachunku bankowego, rachunek rozliczeniowy)',
        'Ustawa z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (AML/KYC)',
        'Ustawa o VAT - art. 96b (biała lista podatników VAT), art. 108a (mechanizm podzielonej płatności)',
        'Ordynacja podatkowa - art. 117ba (solidarna odpowiedzialność przy zapłacie na rachunek poza wykazem)',
        'Ustawy o podatku dochodowym - wyłączenie z kosztów przy płatnościach od 15 000 PLN poza wykazem',
        'Ustawa Prawo przedsiębiorców - art. 19 (obowiązek rozliczeń przez rachunek płatniczy od 15 000 PLN)',
        'Kodeks spółek handlowych - art. 158, art. 163 (wniesienie kapitału zakładowego)'
      ]
    },
    faq: [
      { q: 'Чи можна відкрити рахунок у польському банку без PESEL?', a: 'Так, але не в будь-якому банку і не в будь-якому відділенні. На 2026 рік рахунок за паспортом без PESEL реально відкривають Bank Millennium, Santander Bank Polska, BNP Paribas та Alior - за умови, що ви надасте документ про легальне перебування (віза D, karta pobytu або UPO) і підтвердження адреси в Польщі. PESEL усе одно варто оформити: з ним знижується ризик відмови, працює Profil Zaufany і відкриваються нормальні ліміти. Умови банки змінюють без попередження, тому перед візитом ми уточнюємо актуальну процедуру, а не спираємося на минулорічний досвід.' },
      { q: 'Чи можна використовувати особистий рахунок для фірми?', a: 'Формально ФОП (JDG) може розраховуватися з особистого рахунку - закон цього не забороняє. Практично це помилка: на białą listę podatników VAT потрапляють лише rachunki rozliczeniowe, тобто фірмові. Якщо вашого рахунку немає в списку, контрагент, який заплатить вам 15 000 PLN або більше, не зможе врахувати цю суму у витратах і потрапить під солідарну відповідальність за VAT. Результат передбачуваний: серйозні B2B-клієнти просто не працюватимуть із вами. Для Sp. z o.o. окремий рахунок обов\'язковий завжди - у spółki своя правосуб\'єктність.' },
      { q: 'Що таке biała lista і чому рахунок треба на ній зареєструвати?', a: 'Biała lista podatników VAT - публічний реєстр Міністерства фінансів, де за NIP видно статус VAT і заявлені фірмові рахунки. При B2B-платежі від 15 000 PLN брутто платник зобов\'язаний перевірити, чи є ваш рахунок у реєстрі. Якщо ні: сума не йде у витрати плюс солідарна відповідальність за ваш VAT (врятує лише заява ZAW-NR протягом 7 днів). Рахунок потрапляє до реєстру не автоматично: для JDG його заявляють через CEIDG-1, для spółki - через NIP-8 протягом 21 дня від реєстрації в KRS, а при зміні рахунку - протягом 7 днів.' },
      { q: 'Що таке rachunek VAT і чи потрібен він мені?', a: 'Це технічний субрахунок, який банк автоматично відкриває до кожного rachunku rozliczeniowego - окремо платити за нього не потрібно. Він обслуговує mechanizm podzielonej płatności (split payment): частина платежу, що дорівнює VAT, іде на цей субрахунок, і розпоряджатися нею можна обмежено - на VAT, ZUS, інші податки. Split payment обов\'язковий при угодах від 15 000 PLN брутто на товари та послуги із załącznika 15 ustawy o VAT (електроніка, будівництво, метали, палива та ін.). Якщо ви в цих галузях - фірмовий рахунок потрібен і з цієї причини.' },
      { q: 'Чи потрібен рахунок для реєстрації Sp. z o.o. через S24?', a: 'Для самої реєстрації в S24 - ні, kapitał zakładowy 5 000 PLN можна оголосити внесеним і внести його пізніше, у тому числі майном. Але одразу після появи в KRS рахунок знадобиться: для внесення капіталу грошима, для NIP-8, для białej listy, для перших платежів і для ZUS. Практично робити це одним пакетом - реєстрація, рахунок, NIP-8, CRBR, VAT-R - щоб фірма стала робочою за один захід, а не частинами з паузами.' },
      { q: 'Чому банк може відмовити і що робити після відмови?', a: 'Причина майже завжди в процедурах AML: банк не зобов\'язаний пояснювати рішення і не зобов\'язаний його мотивувати. Типові тригери - немає прив\'язки до Польщі (адреса, meldunek, договір оренди), незрозуміле джерело коштів, «ризиковані» коди PKD (крипто, консалтинг, міжнародна торгівля), складна структура власності, відсутність PESEL за слабкого пакета документів. Після відмови йти в той самий банк повторно сенсу мало - краще перепакувати пакет і йти в банк з іншою політикою ризику. Саме тому ми тримаємо шорт-лист і знаємо, де ваш профіль проходить.' },
      { q: 'Чи можна відкрити рахунок дистанційно, не приїжджаючи до Польщі?', a: 'У частині банків - так: скани документів, відеоідентифікація, доставка карти кур\'єром. Але для іноземця без PESEL і без адреси в Польщі шанси нижчі, а ліміти на перші місяці урізані. Для фірмового рахунку дистанційно проходить гірше: банк майже завжди хоче бачити члена zarządu особисто. Практична схема для тих, хто ще не переїхав: підготувати пакет заздалегідь і відкрити рахунок у перший же візит - за один день це робиться, якщо запис і документи готові.' },
      { q: 'Скільки коштує ведення рахунку в польському банку?', a: 'Базове особисте обслуговування в більшості банків безкоштовне за виконання простих умов на кшталт надходження на рахунок або кількох транзакцій картою на місяць. Фірмові рахунки часто безкоштовні в перший рік, далі - від 0 до 50 PLN/міс. залежно від оборотів і пакета. Реальні витрати ховаються в іншому: конвертація валют, перекази SWIFT, зняття в чужих банкоматах. Якщо у вас доходи в євро чи доларах, мультивалютний рахунок економить більше, ніж будь-яка економія на веденні.' },
      { q: 'Чи обов\'язково платити через рахунок, а не готівкою?', a: 'Для B2B - так. За art. 19 Prawa przedsiębiorców розрахунки між підприємцями на суму від 15 000 PLN мають іти через платіжний рахунок. Заплатили готівкою - сума не піде у витрати, незалежно від того, що угода реальна і документи в порядку. Це ще одна причина відкрити фірмовий рахунок до першої великої угоди, а не після.' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Відкриємо рахунок, який реально працює',
    ctaSubtitle: 'Напишіть: чи є PESEL, який у вас статус перебування і потрібен особистий рахунок чи фірмовий. За 30 хвилин дамо шорт-лист банків, де ваш випадок проходить, і порахуємо вартість під ключ - разом із заявленням рахунку на białą listę.'
  }
};

export default kontoBankowe;
