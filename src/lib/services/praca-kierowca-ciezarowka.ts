import type { ServiceEntry } from './types';

const pracaKierowcaCiezarowka: ServiceEntry = {
  ru: {
    slug: 'praca-kierowca-ciezarowka',
    group: 'relocation',
    icon: 'car',
    badge: 'C+E · Kod 95 · karta kierowcy · transport międzynarodowy',
    title: 'Работа дальнобойщиком (C+E)',
    subtitle: 'Трудоустройство водителем фуры в Польше + все допуски под ключ',
    lead: 'Профессия kierowca C+E (водитель тягача с полуприцепом, «дальнобойщик») - один из самых доступных и денежных входов в польский рынок для русско-, украино- и белорусскоязычных мигрантов. На международных рейсах с diety (суточные) реально выходит 8 000-13 000 PLN на руки в месяц, а польский язык чаще всего не требуется - многие перевозчики берут с RU/UK/EN. LegalWin закрывает обе стороны: подбираем перевозчика под ваш опыт и график (kadencja 8/2, 6/2, маршруты) и параллельно оформляем все допуски - prawo jazdy kat. C+E, Kod 95, karta kierowcy (карта водителя для тахографа), badania, легализацию работы.',
    facts: [
      { label: 'Международник, на руки', value: '8 000-13 000 PLN', note: 'с diety (суточные) · чаще 8 500-11 000' },
      { label: 'Внутри Польши', value: '8 000-9 500 PLN', note: 'без дальних рейсов' },
      { label: 'Польский язык', value: 'Чаще не нужен', note: 'берут с RU / UK / EN' },
      { label: 'Старт с нуля', value: '~12 000-15 000 PLN', note: 'ваши вложения в допуски, не наш гонорар' }
    ],
    grounds: {
      title: 'Что мы для вас делаем',
      subtitle: 'Трудоустройство и легализация - в одном пакете. Не отправляем «доучиваться» в третьи руки.',
      items: [
        { title: 'Подбор перевозчика под вас', desc: 'Подбираем фирму под ваш опыт, желаемый маршрут (Польша-ЕС, восток, тент/рефрижератор/цистерна) и kadencję (8/2, 6/2, ротация). Считаем реальную выплату с diety (суточные), а не «зарплату на бумаге».' },
        { title: 'Prawo jazdy kat. C+E', desc: 'Если категории нет - ведём с нуля: kat. C, затем C+E. Если права из СНГ - обмен на польские (wymiana prawa jazdy). C+E с 21 года.' },
        { title: 'Kod 95 - kwalifikacja wstępna przyspieszona', desc: 'Ускоренная начальная квалификация (kwalifikacja wstępna przyspieszona, 140 ч, с 21 года для C/C+E) - без неё за рулём в коммерческом рейсе нельзя. Подбираем OSK с русскоязычным преподавателем, ведём до пометки 95 в правах.' },
        { title: 'Karta kierowcy (карта водителя для тахографа)', desc: 'Цифровая karta kierowcy обязательна для тахографа в рейсе. Оформляем через PWPW - без неё перевозчик вас не выпустит на маршрут.' },
        { title: 'Badania lekarskie + psychotechniczne', desc: 'Медкомиссия категории 2 для водителей-профессионалов и psychotechnika у аккредитованного психолога. Записываем на одно утро.' },
        { title: 'Легализация работы', desc: 'Для UA/BY/MD/GE/AM - упрощённое oświadczenie o powierzeniu pracy (до 24 месяцев). Для перевозок в международном сообщении перевозчику нужно świadectwo kierowcy (свидетельство водителя, SK1) от GITD - помогаем оформить.' },
        { title: 'ADR по желанию', desc: 'Допуск ADR (перевозка опасных грузов) - опционально, но заметно поднимает ставку. Подскажем, когда он окупается, и организуем курс.' },
        { title: 'Сопровождение первого месяца', desc: 'Помогаем разобраться с тахографом, дневником водителя, нормами времени труда и отдыха, расчётом diety - чтобы первый рейс не стал последним.' }
      ]
    },
    timeline: {
      title: 'Путь от звонка до первого рейса',
      subtitle: 'Если все допуски с нуля - 8-14 недель. Если у вас уже есть C+E и Kod 95 - выходите на маршрут за 1-2 недели.',
      steps: [
        { title: 'Бесплатная диагностика', duration: '30 мин', desc: 'Смотрим ваши права, опыт, легальность пребывания. Считаем, что нужно добрать, и сколько реально выйдет на руки на разных маршрутах.' },
        { title: 'Обмен прав / получение C+E', duration: '2-8 недель', desc: 'Wymiana prawa jazdy на польские, при необходимости - открытие kat. C и C+E с обучением и экзаменом в WORD.' },
        { title: 'Kod 95', duration: '2-4 недели', desc: 'Kwalifikacja wstępna przyspieszona (ускоренная начальная квалификация, 140 ч) + экзамен, затем пометка 95 в правах.' },
        { title: 'Badania + psychotechnika', duration: '1-2 дня', desc: 'Медкомиссия категории 2 и психотест - оба действительны 5 лет. Записываем заранее.' },
        { title: 'Karta kierowcy', duration: '~14-25 дней', desc: 'Оформляем цифровую карту водителя для тахографа через PWPW.' },
        { title: 'Легализация работы', duration: '7-30 дней', desc: 'Oświadczenie (UA/BY/MD/GE/AM) или zezwolenie; для международки - świadectwo kierowcy (SK1) на стороне перевозчика.' },
        { title: 'Подбор фирмы и оффер', duration: '3-14 дней', desc: 'Знакомим с перевозчиком, согласуем маршрут, kadencję, ставку. Проверяем umowę за вас.' },
        { title: 'Первый рейс + сопровождение', duration: '1 месяц', desc: 'Выходите на маршрут, мы на связи по тахографу, времени отдыха и расчёту diety.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Базовый пакет. Точный список зависит от того, что уже есть.',
      items: [
        'Загранпаспорт + документ легального пребывания (виза, karta pobytu, PESEL-UKR)',
        'Действующие водительские права (национальные или польские)',
        'PESEL (если уже есть) либо помогаем оформить',
        'Подтверждение опыта вождения грузовика, если есть (часто требуют ≥ 6 месяцев)',
        'Orzeczenie lekarskie - медкомиссия категории 2 (или записываем вас)',
        'Orzeczenie psychologiczne (psychotechnika) - или записываем',
        'Kod 95 и karta kierowcy, если уже оформлены в ЕС',
        '2 фотографии 35×45 мм для прав / karty kierowcy'
      ]
    },
    pricing: {
      title: 'Стоимость',
      subtitle: 'Точную смету называем после бесплатной оценки.',
      items: [
        { label: 'Консультация и подбор пути', value: 'Бесплатно', note: '30 минут' },
        { label: 'Допуски + работа под ключ', value: 'Индивидуально', note: 'После диагностики' }
      ]
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami',
        'Dyrektywa 2003/59/WE (Kod 95 - kwalifikacja zawodowa kierowców)',
        'Rozporządzenie (UE) nr 165/2014 (tachograf, karta kierowcy)',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach'
      ]
    },
    faq: [
      { q: 'Сколько зарабатывает дальнобойщик в Польше в 2026 (международник vs внутри страны)?', a: 'На международных рейсах с diety (суточные) реально выходит 8 000-13 000 PLN на руки в месяц, чаще всего 8 500-11 000 PLN. Внутри Польши без дальних рейсов - около 8 000-9 500 PLN. Восточные направления (на восток ЕС/СНГ) платят меньше, ~4 000-5 000 PLN. Встречаются модели «за день в рейсе» (per diem) ~80 EUR/день. Для сравнения, в Германии водитель C+E получает €2 600-3 500 брутто/мес. Главное: международка платит больше, потому что большая часть выплаты - это diety (суточные).' },
      { q: 'Что нужно, чтобы начать с нуля?', a: 'Минимум: prawo jazdy kat. C+E (с 21 года), Kod 95 (kwalifikacja wstępna przyspieszona - ускоренная начальная квалификация, 140 ч), karta kierowcy (карта водителя для тахографа), badania lekarskie категории 2 и psychotechnika. Опыт часто требуют от 6 месяцев, но не всегда. ADR - по желанию, поднимает ставку. Полностью с нуля все допуски обходятся водителю примерно в 12 000-15 000 PLN (это ваши вложения, не наш гонорар) - мы это собираем в один пакет и ведём по шагам.' },
      { q: 'Что такое Kod 95 и нужен ли он?', a: 'Да, обязателен. Kod 95 - это пометка «95» на правах, подтверждающая профессиональную квалификацию по директиве ЕС 2003/59/WE. Без неё работать водителем грузовика в коммерческом рейсе нельзя - штраф водителю до 8 000 PLN. Получают через kwalifikację wstępną przyspieszoną (ускоренную начальную квалификацию, 140 ч) с 21 года. Подробнее - на странице Kod 95.' },
      { q: 'Нужна ли карта водителя (тахограф)?', a: 'Да. Karta kierowcy (карта водителя для тахографа) обязательна для записи режима труда и отдыха в цифровом тахографе по Rozporządzeniu (UE) nr 165/2014. Без неё перевозчик не выпустит вас на маршрут. Оформляем через PWPW - см. страницу «Карта водителя».' },
      { q: 'Можно ли работать на украинских правах?', a: 'Временно - да: национальные права действуют в Польше до 185 дней. Дальше нужна wymiana prawa jazdy на польские. Для держателей PESEL-UKR по состоянию на 2026 действует упрощённый порядок до 4 марта 2026 - сроки меняются, проверяем актуально на консультации. Для постоянной работы дальнобойщиком права лучше сразу обменять.' },
      { q: 'Нужен ли польский язык и опыт?', a: 'Польский язык чаще всего НЕ нужен - многие перевозчики работают с RU/UK/EN, документы и навигация на понятном языке. Опыт вождения грузовика часто хотят от 6 месяцев, но есть фирмы, которые берут после получения допусков и обучают. Подбираем перевозчика под ваш реальный уровень.' },
      { q: 'Какое разрешение на работу нужно?', a: 'Для граждан UA/BY/MD/GE/AM - упрощённое oświadczenie o powierzeniu pracy (заявление о доверении работы, до 24 месяцев). Для перевозок в международном сообщении перевозчику дополнительно нужно świadectwo kierowcy (свидетельство водителя, SK1), которое выдаёт GITD. Это часть легализации, которую мы берём на себя - см. также «Помощь с трудоустройством» (zezwolenie / разрешения).' }
    ],
    related: ['kod-95', 'karta-kierowcy', 'wymiana-prawa-jazdy', 'pomoc-w-zatrudnieniu'],
    ctaTitle: 'За руль фуры в Польше - быстро и легально',
    ctaSubtitle: 'Бесплатная диагностика за 30 минут: посчитаем реальную выплату на руки, выберем маршрут и kadencję, соберём все допуски (C+E, Kod 95, karta kierowcy) в один план.'
  },
  pl: {
    slug: 'praca-kierowca-ciezarowka',
    group: 'relocation',
    icon: 'car',
    badge: 'C+E · Kod 95 · karta kierowcy · transport międzynarodowy',
    title: 'Praca kierowca C+E (międzynarodowy)',
    subtitle: 'Zatrudnienie kierowcy ciężarówki + wszystkie uprawnienia pod klucz',
    lead: 'Zawód kierowcy C+E (ciągnik z naczepą, transport międzynarodowy) to jedna z najszybszych i najlepiej płatnych dróg na polski rynek dla migrantów rosyjsko-, ukraińsko- i białoruskojęzycznych. Na trasach międzynarodowych z dietami realnie wychodzi 8 000-13 000 PLN na rękę miesięcznie, a język polski najczęściej nie jest wymagany - wielu przewoźników przyjmuje z RU/UK/EN. LegalWin zamyka obie strony: dobieramy przewoźnika pod Twoje doświadczenie i grafik (kadencja 8/2, 6/2, trasy) i równolegle załatwiamy wszystkie uprawnienia - prawo jazdy kat. C+E, Kod 95, kartę kierowcy, badania, legalizację pracy.',
    facts: [
      { label: 'Międzynarodowy, na rękę', value: '8 000-13 000 PLN', note: 'z dietami · zwykle 8 500-11 000' },
      { label: 'Krajowy', value: '8 000-9 500 PLN', note: 'bez tras dalekobieżnych' },
      { label: 'Język polski', value: 'Zwykle zbędny', note: 'przyjmują z RU / UK / EN' },
      { label: 'Start od zera', value: '~12 000-15 000 PLN', note: 'Twoja inwestycja w uprawnienia, nie nasze honorarium' }
    ],
    grounds: {
      title: 'Co dla Ciebie robimy',
      subtitle: 'Zatrudnienie i legalizacja w jednym pakiecie. Nie odsyłamy „na doszkolenie" do osób trzecich.',
      items: [
        { title: 'Dobór przewoźnika pod Ciebie', desc: 'Dobieramy firmę pod Twoje doświadczenie, trasę (Polska-UE, wschód, plandeka/chłodnia/cysterna) i kadencję (8/2, 6/2, rotacja). Liczymy realną wypłatę z dietami, nie „pensję na papierze".' },
        { title: 'Prawo jazdy kat. C+E', desc: 'Brak kategorii - prowadzimy od zera: kat. C, potem C+E. Prawo jazdy z WNP - wymiana na polskie. C+E od 21 r.ż.' },
        { title: 'Kod 95 - kwalifikacja wstępna przyspieszona', desc: 'Bez kwalifikacji wstępnej przyspieszonej (140 h, od 21 r.ż. dla C/C+E) nie wolno jeździć w przewozie komercyjnym. Dobieramy OSK z lektorem rosyjskojęzycznym, prowadzimy do wpisu 95 w prawie jazdy.' },
        { title: 'Karta kierowcy (do tachografu)', desc: 'Cyfrowa karta kierowcy jest obowiązkowa do tachografu w trasie. Wyrabiamy przez PWPW - bez niej przewoźnik Cię nie wypuści.' },
        { title: 'Badania lekarskie + psychotechniczne', desc: 'Badania kat. 2 dla kierowców zawodowych i psychotechnika u akredytowanego psychologa. Zapisujemy na jeden poranek.' },
        { title: 'Legalizacja pracy', desc: 'Dla UA/BY/MD/GE/AM - uproszczone oświadczenie o powierzeniu pracy (do 24 miesięcy). Do przewozów w komunikacji międzynarodowej przewoźnik potrzebuje świadectwa kierowcy (SK1) z GITD - pomagamy je uzyskać.' },
        { title: 'ADR opcjonalnie', desc: 'Uprawnienie ADR (przewóz towarów niebezpiecznych) - opcjonalne, ale wyraźnie podnosi stawkę. Doradzimy, kiedy się opłaca, i zorganizujemy kurs.' },
        { title: 'Asysta przez pierwszy miesiąc', desc: 'Pomagamy ogarnąć tachograf, czas pracy i odpoczynku, rozliczenie diet - żeby pierwsza trasa nie była ostatnią.' }
      ]
    },
    timeline: {
      title: 'Droga od telefonu do pierwszej trasy',
      subtitle: 'Wszystkie uprawnienia od zera - 8-14 tygodni. Masz już C+E i Kod 95 - na trasę w 1-2 tygodnie.',
      steps: [
        { title: 'Bezpłatna diagnoza', duration: '30 min', desc: 'Sprawdzamy prawo jazdy, doświadczenie, legalność pobytu. Liczymy, czego brakuje i ile realnie wyjdzie na rękę na różnych trasach.' },
        { title: 'Wymiana prawa jazdy / kat. C+E', duration: '2-8 tygodni', desc: 'Wymiana prawa jazdy na polskie, w razie potrzeby - kat. C i C+E z kursem i egzaminem w WORD.' },
        { title: 'Kod 95', duration: '2-4 tygodnie', desc: 'Kwalifikacja wstępna przyspieszona (140 h) + egzamin, potem wpis 95 w prawie jazdy.' },
        { title: 'Badania + psychotechnika', duration: '1-2 dni', desc: 'Badania kat. 2 i psychotest - oba ważne 5 lat. Zapisujemy z wyprzedzeniem.' },
        { title: 'Karta kierowcy', duration: '~14-25 dni', desc: 'Wyrabiamy cyfrową kartę kierowcy do tachografu przez PWPW.' },
        { title: 'Legalizacja pracy', duration: '7-30 dni', desc: 'Oświadczenie (UA/BY/MD/GE/AM) lub zezwolenie; do międzynarodówki - świadectwo kierowcy (SK1) po stronie przewoźnika.' },
        { title: 'Dobór firmy i oferta', duration: '3-14 dni', desc: 'Łączymy z przewoźnikiem, uzgadniamy trasę, kadencję, stawkę. Sprawdzamy umowę za Ciebie.' },
        { title: 'Pierwsza trasa + asysta', duration: '1 miesiąc', desc: 'Wjeżdżasz na trasę, jesteśmy na linii ws. tachografu, czasu odpoczynku i rozliczenia diet.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Pakiet bazowy. Dokładna lista zależy od tego, co już masz.',
      items: [
        'Paszport + dokument legalnego pobytu (wiza, karta pobytu, PESEL-UKR)',
        'Ważne prawo jazdy (krajowe lub polskie)',
        'PESEL (jeśli jest) lub pomagamy wyrobić',
        'Potwierdzenie doświadczenia za ciężarówką, jeśli jest (często wymóg ≥ 6 miesięcy)',
        'Orzeczenie lekarskie - badania kat. 2 (lub Cię zapisujemy)',
        'Orzeczenie psychologiczne (psychotechnika) - lub zapisujemy',
        'Kod 95 i karta kierowcy, jeśli wyrobione w UE',
        '2 zdjęcia 35×45 mm do prawa jazdy / karty kierowcy'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Dokładny kosztorys podajemy po bezpłatnej ocenie.',
      items: [
        { label: 'Konsultacja i dobór ścieżki', value: 'Gratis', note: '30 minut' },
        { label: 'Uprawnienia + praca pod klucz', value: 'Indywidualnie', note: 'Po diagnozie' }
      ]
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami',
        'Dyrektywa 2003/59/WE (Kod 95 - kwalifikacja zawodowa kierowców)',
        'Rozporządzenie (UE) nr 165/2014 (tachograf, karta kierowcy)',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach'
      ]
    },
    faq: [
      { q: 'Ile zarabia kierowca ciężarówki w Polsce 2026 (międzynarodowy vs krajowy)?', a: 'Na trasach międzynarodowych z dietami realnie wychodzi 8 000-13 000 PLN na rękę miesięcznie, najczęściej 8 500-11 000 PLN. Krajowo bez dalekich tras - około 8 000-9 500 PLN. Kierunki wschodnie płacą mniej, ~4 000-5 000 PLN. Bywają modele „za dzień w trasie" (per diem) ~80 EUR/dzień. Dla porównania w Niemczech kierowca C+E zarabia €2 600-3 500 brutto/mies. Kluczowe: międzynarodówka płaci więcej, bo większość wypłaty to diety.' },
      { q: 'Co jest potrzebne, żeby zacząć od zera?', a: 'Minimum: prawo jazdy kat. C+E (od 21 r.ż.), Kod 95 (kwalifikacja wstępna przyspieszona, 140 h), karta kierowcy (do tachografu), badania lekarskie kat. 2 i psychotechnika. Doświadczenie często wymagane od 6 miesięcy, ale nie zawsze. ADR opcjonalnie - podnosi stawkę. Wszystkie uprawnienia od zera kosztują kierowcę około 12 000-15 000 PLN (to Twoja inwestycja, nie nasze honorarium) - zbieramy to w jeden pakiet i prowadzimy krok po kroku.' },
      { q: 'Czym jest Kod 95 i czy jest potrzebny?', a: 'Tak, obowiązkowy. Kod 95 to wpis „95" w prawie jazdy potwierdzający kwalifikację zawodową wg dyrektywy UE 2003/59/WE. Bez niego nie wolno pracować jako kierowca ciężarówki w przewozie komercyjnym - kara dla kierowcy do 8 000 PLN. Uzyskuje się przez kwalifikację wstępną przyspieszoną (140 h) od 21 r.ż. Szczegóły na stronie Kod 95.' },
      { q: 'Czy potrzebna jest karta kierowcy (tachograf)?', a: 'Tak. Karta kierowcy (do tachografu) jest obowiązkowa do zapisu czasu pracy i odpoczynku w tachografie cyfrowym wg Rozporządzenia (UE) nr 165/2014. Bez niej przewoźnik nie wypuści Cię na trasę. Wyrabiamy przez PWPW - patrz strona „Karta kierowcy".' },
      { q: 'Czy można pracować na ukraińskim prawie jazdy?', a: 'Tymczasowo tak: krajowe prawo jazdy jest ważne w Polsce do 185 dni. Potem konieczna wymiana prawa jazdy na polskie. Dla posiadaczy PESEL-UKR, według stanu na 2026, obowiązuje uproszczony tryb do 4 marca 2026 - terminy się zmieniają, sprawdzamy na bieżąco na konsultacji. Do stałej pracy kierowcy lepiej od razu wymienić prawo jazdy.' },
      { q: 'Czy potrzebny jest język polski i doświadczenie?', a: 'Język polski najczęściej NIE jest potrzebny - wielu przewoźników pracuje z RU/UK/EN, dokumenty i nawigacja w zrozumiałym języku. Doświadczenie za ciężarówką często wymagane od 6 miesięcy, ale są firmy przyjmujące po zdobyciu uprawnień i szkolące. Dobieramy przewoźnika pod Twój realny poziom.' },
      { q: 'Jakie zezwolenie na pracę jest potrzebne?', a: 'Dla obywateli UA/BY/MD/GE/AM - uproszczone oświadczenie o powierzeniu pracy (do 24 miesięcy). Do przewozów w komunikacji międzynarodowej przewoźnik dodatkowo potrzebuje świadectwa kierowcy (SK1) wydawanego przez GITD. To część legalizacji, którą bierzemy na siebie - patrz też „Pomoc w zatrudnieniu" (zezwolenie / pozwolenia).' }
    ],
    related: ['kod-95', 'karta-kierowcy', 'wymiana-prawa-jazdy', 'pomoc-w-zatrudnieniu'],
    ctaTitle: 'Za kierownicę ciężarówki w Polsce - szybko i legalnie',
    ctaSubtitle: 'Bezpłatna diagnoza w 30 minut: policzymy realną wypłatę na rękę, wybierzemy trasę i kadencję, zbierzemy wszystkie uprawnienia (C+E, Kod 95, karta kierowcy) w jeden plan.'
  },
  en: {
    slug: 'praca-kierowca-ciezarowka',
    group: 'relocation',
    icon: 'car',
    badge: 'C+E · Kod 95 · karta kierowcy · international transport',
    title: 'Truck driver jobs (C+E)',
    subtitle: 'HGV driver employment in Poland + every qualification handled',
    lead: 'Driving as a kierowca C+E (articulated lorry, long-haul) is one of the fastest, best-paid routes into the Polish market for Russian-, Ukrainian- and Belarusian-speaking migrants. International runs with diety (per-diem allowances) realistically net 8,000-13,000 PLN a month, and Polish is usually not required - many carriers hire on RU/UK/EN. LegalWin closes both ends: we match you to a carrier by experience and schedule (kadencja - rotation 8/2, 6/2, routes) and in parallel arrange every qualification - prawo jazdy kat. C+E (category C+E licence), Kod 95, karta kierowcy (the tachograph driver card), medicals and work legalisation.',
    facts: [
      { label: 'International, net', value: '8,000-13,000 PLN', note: 'with diety (per-diems) · usually 8,500-11,000' },
      { label: 'Domestic', value: '8,000-9,500 PLN', note: 'no long-haul' },
      { label: 'Polish language', value: 'Usually not needed', note: 'hire on RU / UK / EN' },
      { label: 'Start from scratch', value: '~12,000-15,000 PLN', note: 'your spend on qualifications, not our fee' }
    ],
    grounds: {
      title: 'What we do for you',
      subtitle: 'Employment and legalisation in one package. We do not farm you out for "extra training".',
      items: [
        { title: 'Carrier matched to you', desc: 'We pick a firm by your experience, preferred route (Poland-EU, eastbound, curtainsider/reefer/tanker) and kadencja (rotation 8/2, 6/2). We model real take-home with diety (per-diems), not the "paper salary".' },
        { title: 'Prawo jazdy kat. C+E', desc: 'No licence yet - we run it from scratch: cat. C then C+E. CIS licence - we exchange it for a Polish one (wymiana prawa jazdy). C+E from age 21.' },
        { title: 'Kod 95 - accelerated initial qualification', desc: 'Without kwalifikacja wstępna przyspieszona (accelerated initial qualification, 140h, from 21 for C/C+E) you cannot drive commercially. We pick an OSK with a Russian-speaking instructor and run it to the "95" entry on your licence.' },
        { title: 'Karta kierowcy (the tachograph driver card)', desc: 'A digital karta kierowcy is mandatory for the tachograph on the road. We issue it via PWPW - without it no carrier will send you out.' },
        { title: 'Medical + psychotechnika', desc: 'Cat. 2 medical for professional drivers and a psychotechnika assessment with an accredited psychologist. We book both for one morning.' },
        { title: 'Work legalisation', desc: 'For UA/BY/MD/GE/AM - the simplified oświadczenie o powierzeniu pracy (work-entrustment declaration, up to 24 months). For international goods transport the carrier needs a świadectwo kierowcy (driver attestation, SK1) from GITD - we help obtain it.' },
        { title: 'ADR optional', desc: 'ADR (dangerous-goods) certification is optional but noticeably raises the rate. We advise when it pays off and arrange the course.' },
        { title: 'First-month support', desc: 'We help you handle the tachograph, driving and rest-time rules, and per-diem calculation - so the first run is not the last.' }
      ]
    },
    timeline: {
      title: 'From first call to first run',
      subtitle: 'All qualifications from scratch - 8-14 weeks. Already hold C+E and Kod 95 - on the road in 1-2 weeks.',
      steps: [
        { title: 'Free diagnosis', duration: '30 min', desc: 'We review your licence, experience and legal status. We work out what is missing and what you would actually net on different routes.' },
        { title: 'Licence exchange / cat. C+E', duration: '2-8 weeks', desc: 'Wymiana prawa jazdy to a Polish licence; if needed, opening cat. C and C+E with a course and WORD exam.' },
        { title: 'Kod 95', duration: '2-4 weeks', desc: 'Kwalifikacja wstępna przyspieszona (accelerated initial qualification, 140h) + exam, then the "95" entry on the licence.' },
        { title: 'Medical + psychotechnika', duration: '1-2 days', desc: 'Cat. 2 medical and psychotest - both valid 5 years. Booked in advance.' },
        { title: 'Karta kierowcy', duration: '~14-25 days', desc: 'We issue the digital tachograph driver card via PWPW.' },
        { title: 'Work legalisation', duration: '7-30 days', desc: 'Oświadczenie (UA/BY/MD/GE/AM) or a work permit; for international work, the świadectwo kierowcy (SK1) on the carrier side.' },
        { title: 'Carrier match and offer', duration: '3-14 days', desc: 'We introduce the carrier, agree route, kadencja and rate. We review the contract for you.' },
        { title: 'First run + support', duration: '1 month', desc: 'You hit the road; we stay on the line for tachograph, rest time and per-diem calculation.' }
      ]
    },
    documents: {
      title: 'What you bring',
      subtitle: 'Base set. The exact list depends on what you already hold.',
      items: [
        'Passport + proof of legal stay (visa, karta pobytu, PESEL-UKR)',
        'Valid driving licence (national or Polish)',
        'PESEL (if you have one) or we help obtain it',
        'Proof of truck-driving experience if any (often ≥ 6 months required)',
        'Orzeczenie lekarskie - cat. 2 medical (or we book you in)',
        'Orzeczenie psychologiczne (psychotechnika) - or we book it',
        'Kod 95 and karta kierowcy if already issued in the EU',
        'Two 35×45 mm photos for the licence / karta kierowcy'
      ]
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'We quote an exact estimate after a free assessment.',
      items: [
        { label: 'Consultation and route planning', value: 'Free', note: '30 minutes' },
        { label: 'Qualifications + turnkey job', value: 'Individual', note: 'After diagnosis' }
      ]
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Road Transport Act of 6 September 2001 (Ustawa o transporcie drogowym)',
        'Drivers Act of 5 January 2011 (Ustawa o kierujących pojazdami)',
        'EU Directive 2003/59/EC (Kod 95 - professional driver qualification)',
        'Regulation (EU) No 165/2014 (tachograph, driver card)',
        'Foreigners Act of 12 December 2013 (Ustawa o cudzoziemcach)'
      ]
    },
    faq: [
      { q: 'How much does a truck driver earn in Poland in 2026 (international vs domestic)?', a: 'International runs with diety (per-diems) realistically net 8,000-13,000 PLN a month, most often 8,500-11,000 PLN. Domestic without long-haul is around 8,000-9,500 PLN. Eastbound routes pay less, ~4,000-5,000 PLN. Per-diem models run ~80 EUR/day. For comparison, a C+E driver in Germany earns €2,600-3,500 gross/month. The key point: international pays more because most of the take-home is diety (per-diems).' },
      { q: 'What do you need to start from scratch?', a: 'Minimum: prawo jazdy kat. C+E (from age 21), Kod 95 (kwalifikacja wstępna przyspieszona - accelerated initial qualification, 140h), karta kierowcy (the tachograph driver card), a cat. 2 badania lekarskie (medical) and psychotechnika. Experience of ≥ 6 months is often expected but not always. ADR is optional and raises the rate. All qualifications from scratch cost a driver roughly 12,000-15,000 PLN (your investment, not our fee) - we bundle it and run it step by step.' },
      { q: 'What is Kod 95 and is it required?', a: 'Yes, mandatory. Kod 95 is the "95" entry on the licence proving professional qualification under EU Directive 2003/59/EC. Without it you cannot work as a truck driver commercially - the driver fine reaches 8,000 PLN. You get it through kwalifikacja wstępna przyspieszona (accelerated initial qualification, 140h) from age 21. See the Kod 95 page.' },
      { q: 'Do you need a driver card (tachograph)?', a: 'Yes. The karta kierowcy (tachograph driver card) is mandatory to record driving and rest time in the digital tachograph under Regulation (EU) No 165/2014. Without it no carrier will send you out. We issue it via PWPW - see the "Driver card" page.' },
      { q: 'Can you work on a Ukrainian licence?', a: 'Temporarily yes: a national licence is valid in Poland for up to 185 days. After that you need a wymiana prawa jazdy (licence exchange) to a Polish one. For PESEL-UKR holders, as of 2026, a simplified regime runs until 4 March 2026 - deadlines change, so we check the current rules at the consultation. For permanent driving work it is better to exchange the licence right away.' },
      { q: 'Is Polish language and experience required?', a: 'Polish is usually NOT required - many carriers work in RU/UK/EN, with documents and navigation in a language you understand. Truck experience of ≥ 6 months is often wanted, but some firms hire after you obtain the qualifications and train you. We match the carrier to your real level.' },
      { q: 'What work permit do you need?', a: 'For UA/BY/MD/GE/AM nationals - the simplified oświadczenie o powierzeniu pracy (work-entrustment declaration, up to 24 months). For international goods transport the carrier additionally needs a świadectwo kierowcy (driver attestation, SK1) issued by GITD. That is part of the legalisation we handle - see also "Employment help" (zezwolenie / permits).' }
    ],
    related: ['kod-95', 'karta-kierowcy', 'wymiana-prawa-jazdy', 'pomoc-w-zatrudnieniu'],
    ctaTitle: 'Behind the wheel in Poland - fast and legal',
    ctaSubtitle: 'Free 30-minute diagnosis: we calculate real take-home, pick the route and kadencja, and bundle every qualification (C+E, Kod 95, karta kierowcy) into one plan.'
  },
  tr: {
    slug: 'praca-kierowca-ciezarowka',
    group: 'relocation',
    icon: 'car',
    badge: 'C+E · Kod 95 · karta kierowcy · uluslararası taşımacılık',
    title: 'Tır şoförü işi (C+E)',
    subtitle: 'Polonya\'da tır şoförü istihdamı + tüm yeterlilikler anahtar teslim',
    lead: 'Kierowca C+E (çekici-dorse, uluslararası tır şoförü) mesleği, Rusça, Ukraynaca ve Belarusça konuşan göçmenler için Polonya pazarına en hızlı ve en kazançlı girişlerden biridir. Uluslararası seferlerde diety (yolluk/harcırah) ile aylık net 8.000-13.000 PLN gerçekten çıkar ve Lehçe çoğunlukla gerekmez - birçok taşıyıcı RU/UK/EN ile işe alır. LegalWin her iki ucu da kapatır: deneyiminize ve programınıza göre taşıyıcı buluruz (kadencja - rotasyon 8/2, 6/2, güzergâhlar) ve paralel olarak tüm yeterlilikleri hallederiz - prawo jazdy kat. C+E (C+E ehliyeti), Kod 95, karta kierowcy (takograf sürücü kartı), sağlık raporları ve çalışmanın yasallaştırılması.',
    facts: [
      { label: 'Uluslararası, net', value: '8.000-13.000 PLN', note: 'diety (harcırah) dahil · genelde 8.500-11.000' },
      { label: 'Yurt içi', value: '8.000-9.500 PLN', note: 'uzun mesafe olmadan' },
      { label: 'Lehçe', value: 'Genelde gerekmez', note: 'RU / UK / EN ile alıyorlar' },
      { label: 'Sıfırdan başlangıç', value: '~12.000-15.000 PLN', note: 'yeterliliklere yatırımınız, danışmanlık bedelimiz değil' }
    ],
    grounds: {
      title: 'Sizin için ne yapıyoruz',
      subtitle: 'İstihdam ve yasallaştırma tek pakette. Sizi „ek eğitime" üçüncü kişilere göndermiyoruz.',
      items: [
        { title: 'Size uygun taşıyıcı seçimi', desc: 'Deneyiminize, istediğiniz güzergâha (Polonya-AB, doğu, tenteli/frigo/tanker) ve kadencja\'ya (rotasyon 8/2, 6/2) göre firma seçeriz. „Kâğıttaki maaşı" değil, diety (harcırah) dahil gerçek eline geçeni hesaplarız.' },
        { title: 'Prawo jazdy kat. C+E', desc: 'Kategori yoksa sıfırdan yürütürüz: önce kat. C, sonra C+E. BDT ehliyeti varsa - Polonya ehliyetine çeviririz (wymiana prawa jazdy). C+E 21 yaşından itibaren.' },
        { title: 'Kod 95 - kwalifikacja wstępna przyspieszona', desc: 'Kwalifikacja wstępna przyspieszona (hızlandırılmış başlangıç yeterliliği, 140 sa, C/C+E için 21 yaşından) olmadan ticari taşıma yapamazsınız. Rusça bilen eğitmenli OSK seçer, ehliyetteki „95" ibaresine kadar yürütürüz.' },
        { title: 'Karta kierowcy (takograf sürücü kartı)', desc: 'Dijital karta kierowcy seferde takograf için zorunludur. PWPW üzerinden çıkarırız - bu olmadan taşıyıcı sizi yola çıkarmaz.' },
        { title: 'Sağlık raporu + psikoteknik', desc: 'Profesyonel sürücüler için kat. 2 badania lekarskie ve akredite psikolog psychotechnika. İkisini de bir sabaha randevulandırırız.' },
        { title: 'Çalışmanın yasallaştırılması', desc: 'UA/BY/MD/GE/AM için - basitleştirilmiş oświadczenie o powierzeniu pracy (işin emanet beyanı, 24 aya kadar). Uluslararası eşya taşımacılığında taşıyıcının GITD\'den świadectwo kierowcy (sürücü belgesi, SK1) alması gerekir - almasına yardım ederiz.' },
        { title: 'ADR isteğe bağlı', desc: 'ADR (tehlikeli madde taşıma) yetkisi isteğe bağlıdır ama ücreti belirgin biçimde artırır. Ne zaman değdiğini söyler, kursu organize ederiz.' },
        { title: 'İlk ay desteği', desc: 'Takografı, çalışma ve dinlenme süresi kurallarını, diety hesabını çözmenize yardım ederiz - ilk sefer son sefer olmasın.' }
      ]
    },
    timeline: {
      title: 'Telefondan ilk sefere giden yol',
      subtitle: 'Tüm yeterlilikler sıfırdan - 8-14 hafta. C+E ve Kod 95 zaten varsa - 1-2 haftada yolda.',
      steps: [
        { title: 'Ücretsiz tanı görüşmesi', duration: '30 dk', desc: 'Ehliyetinizi, deneyiminizi ve ikametinizin yasallığını inceleriz. Neyin eksik olduğunu ve farklı güzergâhlarda eline ne geçeceğini hesaplarız.' },
        { title: 'Ehliyet değişimi / kat. C+E', duration: '2-8 hafta', desc: 'Wymiana prawa jazdy ile Polonya ehliyeti; gerekirse kurs ve WORD sınavıyla kat. C ve C+E açma.' },
        { title: 'Kod 95', duration: '2-4 hafta', desc: 'Kwalifikacja wstępna przyspieszona (hızlandırılmış başlangıç yeterliliği, 140 sa) + sınav, ardından ehliyete „95" işlenmesi.' },
        { title: 'Sağlık raporu + psikoteknik', duration: '1-2 gün', desc: 'Kat. 2 sağlık raporu ve psikotest - ikisi de 5 yıl geçerli. Önceden randevu alırız.' },
        { title: 'Karta kierowcy', duration: '~14-25 gün', desc: 'Dijital takograf sürücü kartını PWPW üzerinden çıkarırız.' },
        { title: 'Çalışmanın yasallaştırılması', duration: '7-30 gün', desc: 'Oświadczenie (UA/BY/MD/GE/AM) veya zezwolenie; uluslararası için taşıyıcı tarafında świadectwo kierowcy (SK1).' },
        { title: 'Firma seçimi ve teklif', duration: '3-14 gün', desc: 'Taşıyıcıyla tanıştırır, güzergâh, kadencja ve ücreti uzlaştırırız. Umowę\'yi sizin yerinize inceleriz.' },
        { title: 'İlk sefer + destek', duration: '1 ay', desc: 'Yola çıkarsınız; takograf, dinlenme süresi ve diety hesabı için hattayız.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Temel paket. Net liste zaten neye sahip olduğunuza bağlıdır.',
      items: [
        'Pasaport + yasal ikamet belgesi (vize, karta pobytu, PESEL-UKR)',
        'Geçerli ehliyet (ulusal veya Polonya)',
        'PESEL (varsa) ya da çıkarmanıza yardım ederiz',
        'Varsa kamyon/tır sürüş deneyimi belgesi (sıkça ≥ 6 ay istenir)',
        'Orzeczenie lekarskie - kat. 2 sağlık raporu (veya sizi randevulandırırız)',
        'Orzeczenie psychologiczne (psikoteknik) - veya randevu alırız',
        'AB\'de çıkarıldıysa Kod 95 ve karta kierowcy',
        'Ehliyet / karta kierowcy için 2 adet 35×45 mm fotoğraf'
      ]
    },
    pricing: {
      title: 'Ücretlendirme',
      subtitle: 'Kesin maliyeti ücretsiz değerlendirmeden sonra söyleriz.',
      items: [
        { label: 'Danışmanlık ve yol seçimi', value: 'Ücretsiz', note: '30 dakika' },
        { label: 'Yeterlilikler + anahtar teslim iş', value: 'Bireysel', note: 'Tanı görüşmesinden sonra' }
      ]
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (Karayolu Taşımacılığı Kanunu)',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami (Sürücüler Kanunu)',
        '2003/59/AT Direktifi (Kod 95 - sürücü mesleki yeterliliği)',
        '(AB) 165/2014 sayılı Tüzük (takograf, sürücü kartı)',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Yabancılar Kanunu)'
      ]
    },
    faq: [
      { q: '2026\'da Polonya\'da tır şoförü ne kadar kazanır (uluslararası vs yurt içi)?', a: 'Uluslararası seferlerde diety (harcırah) ile aylık net 8.000-13.000 PLN gerçekten çıkar, en sık 8.500-11.000 PLN. Yurt içinde uzun mesafe olmadan yaklaşık 8.000-9.500 PLN. Doğu güzergâhları daha az öder, ~4.000-5.000 PLN. „Seferdeki gün başına" (per diem) ~80 EUR/gün modelleri vardır. Karşılaştırma için Almanya\'da C+E şoförü €2.600-3.500 brüt/ay kazanır. Önemli nokta: uluslararası daha çok öder çünkü eline geçenin büyük kısmı diety\'dir.' },
      { q: 'Sıfırdan başlamak için ne gerekir?', a: 'Asgari: prawo jazdy kat. C+E (21 yaşından), Kod 95 (kwalifikacja wstępna przyspieszona - hızlandırılmış başlangıç yeterliliği, 140 sa), karta kierowcy (takograf sürücü kartı), kat. 2 badania lekarskie (sağlık raporu) ve psikoteknik. Deneyim genelde 6 aydan istenir ama her zaman değil. ADR isteğe bağlıdır, ücreti artırır. Tüm yeterlilikler sıfırdan şoföre yaklaşık 12.000-15.000 PLN\'ye mal olur (sizin yatırımınız, danışmanlık bedelimiz değil) - bunu tek pakette toplar, adım adım yürütürüz.' },
      { q: 'Kod 95 nedir ve gerekli mi?', a: 'Evet, zorunlu. Kod 95, 2003/59/AT direktifine göre mesleki yeterliliği belgeleyen, ehliyetteki „95" ibaresidir. Onsuz ticari olarak tır şoförlüğü yapamazsınız - sürücü cezası 8.000 PLN\'ye ulaşır. 21 yaşından itibaren kwalifikacja wstępna przyspieszona (hızlandırılmış başlangıç yeterliliği, 140 sa) ile alınır. Ayrıntı: Kod 95 sayfası.' },
      { q: 'Sürücü kartı (takograf) gerekli mi?', a: 'Evet. Karta kierowcy (takograf sürücü kartı), (AB) 165/2014 sayılı Tüzük uyarınca dijital takografta çalışma ve dinlenme süresini kaydetmek için zorunludur. Onsuz taşıyıcı sizi yola çıkarmaz. PWPW üzerinden çıkarırız - „Sürücü kartı" sayfasına bakın.' },
      { q: 'Ukrayna ehliyetiyle çalışılabilir mi?', a: 'Geçici olarak evet: ulusal ehliyet Polonya\'da 185 güne kadar geçerlidir. Sonrasında Polonya ehliyetine wymiana prawa jazdy (ehliyet değişimi) gerekir. PESEL-UKR sahipleri için 2026 itibarıyla 4 Mart 2026\'ya kadar basitleştirilmiş düzen geçerlidir - süreler değişir, danışmanlıkta güncel durumu kontrol ederiz. Kalıcı şoförlük için ehliyeti hemen değiştirmek daha iyidir.' },
      { q: 'Lehçe ve deneyim gerekli mi?', a: 'Lehçe çoğunlukla gerekli DEĞİLDİR - birçok taşıyıcı RU/UK/EN ile çalışır, belgeler ve navigasyon anladığınız dilde olur. Tır deneyimi genelde 6 aydan istenir ama bazı firmalar yeterlilikleri aldıktan sonra işe alıp eğitir. Taşıyıcıyı gerçek seviyenize göre buluruz.' },
      { q: 'Hangi çalışma izni gerekir?', a: 'UA/BY/MD/GE/AM vatandaşları için - basitleştirilmiş oświadczenie o powierzeniu pracy (işin emanet beyanı, 24 aya kadar). Uluslararası eşya taşımacılığında taşıyıcının ayrıca GITD\'nin verdiği świadectwo kierowcy (sürücü belgesi, SK1) gerekir. Bu, üstlendiğimiz yasallaştırmanın parçasıdır - ayrıca „İşe yerleşmede destek" (zezwolenie / izinler) sayfasına bakın.' }
    ],
    related: ['kod-95', 'karta-kierowcy', 'wymiana-prawa-jazdy', 'pomoc-w-zatrudnieniu'],
    ctaTitle: 'Polonya\'da tır direksiyonuna - hızlı ve yasal',
    ctaSubtitle: 'Ücretsiz 30 dakikalık tanı: eline geçecek gerçek tutarı hesaplar, güzergâh ve kadencja seçer, tüm yeterlilikleri (C+E, Kod 95, karta kierowcy) tek plana toplarız.'
  },
  uk: {
    slug: 'praca-kierowca-ciezarowka',
    group: 'relocation',
    icon: 'car',
    badge: 'C+E · Kod 95 · karta kierowcy · transport międzynarodowy',
    title: 'Робота далекобійником (C+E)',
    subtitle: 'Працевлаштування водієм фури в Польщі + усі допуски під ключ',
    lead: 'Професія kierowca C+E (водій тягача з напівпричепом, «далекобійник») - один із найдоступніших і найгрошовитіших входів на польський ринок для російсько-, україно- та білоруськомовних мігрантів. На міжнародних рейсах із diety (добові) реально виходить 8 000-13 000 PLN на руки на місяць, а польська мова найчастіше не потрібна - багато перевізників беруть із RU/UK/EN. LegalWin закриває обидві сторони: підбираємо перевізника під ваш досвід і графік (kadencja 8/2, 6/2, маршрути) і паралельно оформлюємо всі допуски - prawo jazdy kat. C+E, Kod 95, karta kierowcy (карта водія для тахографа), badania, легалізацію роботи.',
    facts: [
      { label: 'Міжнародник, на руки', value: '8 000-13 000 PLN', note: 'з diety (добові) · частіше 8 500-11 000' },
      { label: 'Усередині Польщі', value: '8 000-9 500 PLN', note: 'без далеких рейсів' },
      { label: 'Польська мова', value: 'Частіше не потрібна', note: 'беруть із RU / UK / EN' },
      { label: 'Старт з нуля', value: '~12 000-15 000 PLN', note: 'ваші вкладення в допуски, не наш гонорар' }
    ],
    grounds: {
      title: 'Що ми для вас робимо',
      subtitle: 'Працевлаштування і легалізація - в одному пакеті. Не відправляємо «доучуватися» у треті руки.',
      items: [
        { title: 'Підбір перевізника під вас', desc: 'Підбираємо фірму під ваш досвід, бажаний маршрут (Польща-ЄС, схід, тент/рефрижератор/цистерна) і kadencję (8/2, 6/2, ротація). Рахуємо реальну виплату з diety (добові), а не «зарплату на папері».' },
        { title: 'Prawo jazdy kat. C+E', desc: 'Якщо категорії немає - ведемо з нуля: kat. C, потім C+E. Якщо права із СНД - обмін на польські (wymiana prawa jazdy). C+E з 21 року.' },
        { title: 'Kod 95 - kwalifikacja wstępna przyspieszona', desc: 'Прискорена початкова кваліфікація (kwalifikacja wstępna przyspieszona, 140 год, з 21 року для C/C+E) - без неї за кермом у комерційному рейсі не можна. Підбираємо OSK з україномовним викладачем, ведемо до позначки 95 у правах.' },
        { title: 'Karta kierowcy (карта водія для тахографа)', desc: 'Цифрова karta kierowcy обовʼязкова для тахографа в рейсі. Оформлюємо через PWPW - без неї перевізник вас не випустить на маршрут.' },
        { title: 'Badania lekarskie + psychotechniczne', desc: 'Медкомісія категорії 2 для водіїв-професіоналів і psychotechnika в акредитованого психолога. Записуємо на один ранок.' },
        { title: 'Легалізація роботи', desc: 'Для UA/BY/MD/GE/AM - спрощене oświadczenie o powierzeniu pracy (до 24 місяців). Для перевезень у міжнародному сполученні перевізнику потрібне świadectwo kierowcy (свідоцтво водія, SK1) від GITD - допомагаємо оформити.' },
        { title: 'ADR за бажанням', desc: 'Допуск ADR (перевезення небезпечних вантажів) - опціональний, але помітно піднімає ставку. Підкажемо, коли він окупається, і організуємо курс.' },
        { title: 'Супровід першого місяця', desc: 'Допомагаємо розібратися з тахографом, нормами часу праці й відпочинку, розрахунком diety - щоб перший рейс не став останнім.' }
      ]
    },
    timeline: {
      title: 'Шлях від дзвінка до першого рейсу',
      subtitle: 'Якщо всі допуски з нуля - 8-14 тижнів. Якщо у вас уже є C+E і Kod 95 - виходите на маршрут за 1-2 тижні.',
      steps: [
        { title: 'Безкоштовна діагностика', duration: '30 хв', desc: 'Дивимося ваші права, досвід, легальність перебування. Рахуємо, що потрібно добрати, і скільки реально вийде на руки на різних маршрутах.' },
        { title: 'Обмін прав / отримання C+E', duration: '2-8 тижнів', desc: 'Wymiana prawa jazdy на польські, за потреби - відкриття kat. C і C+E з навчанням та іспитом у WORD.' },
        { title: 'Kod 95', duration: '2-4 тижні', desc: 'Kwalifikacja wstępna przyspieszona (прискорена початкова кваліфікація, 140 год) + іспит, потім позначка 95 у правах.' },
        { title: 'Badania + psychotechnika', duration: '1-2 дні', desc: 'Медкомісія категорії 2 і психотест - обидва дійсні 5 років. Записуємо заздалегідь.' },
        { title: 'Karta kierowcy', duration: '~14-25 днів', desc: 'Оформлюємо цифрову карту водія для тахографа через PWPW.' },
        { title: 'Легалізація роботи', duration: '7-30 днів', desc: 'Oświadczenie (UA/BY/MD/GE/AM) або zezwolenie; для міжнародки - świadectwo kierowcy (SK1) на стороні перевізника.' },
        { title: 'Підбір фірми та офер', duration: '3-14 днів', desc: 'Знайомимо з перевізником, узгоджуємо маршрут, kadencję, ставку. Перевіряємо umowę за вас.' },
        { title: 'Перший рейс + супровід', duration: '1 місяць', desc: 'Виходите на маршрут, ми на звʼязку щодо тахографа, часу відпочинку та розрахунку diety.' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Базовий пакет. Точний список залежить від того, що вже є.',
      items: [
        'Закордонний паспорт + документ легального перебування (віза, karta pobytu, PESEL-UKR)',
        'Чинні водійські права (національні або польські)',
        'PESEL (якщо вже є) або допомагаємо оформити',
        'Підтвердження досвіду водіння вантажівки, якщо є (часто вимагають ≥ 6 місяців)',
        'Orzeczenie lekarskie - медкомісія категорії 2 (або записуємо вас)',
        'Orzeczenie psychologiczne (psychotechnika) - або записуємо',
        'Kod 95 і karta kierowcy, якщо вже оформлені в ЄС',
        '2 фотографії 35×45 мм для прав / karty kierowcy'
      ]
    },
    pricing: {
      title: 'Вартість',
      subtitle: 'Точний кошторис називаємо після безкоштовної оцінки.',
      items: [
        { label: 'Консультація і підбір шляху', value: 'Безкоштовно', note: '30 хвилин' },
        { label: 'Допуски + робота під ключ', value: 'Індивідуально', note: 'Після діагностики' }
      ]
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami',
        'Dyrektywa 2003/59/WE (Kod 95 - kwalifikacja zawodowa kierowców)',
        'Rozporządzenie (UE) nr 165/2014 (tachograf, karta kierowcy)',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach'
      ]
    },
    faq: [
      { q: 'Скільки заробляє далекобійник у Польщі у 2026 (міжнародник vs усередині країни)?', a: 'На міжнародних рейсах із diety (добові) реально виходить 8 000-13 000 PLN на руки на місяць, найчастіше 8 500-11 000 PLN. Усередині Польщі без далеких рейсів - близько 8 000-9 500 PLN. Східні напрямки платять менше, ~4 000-5 000 PLN. Трапляються моделі «за день у рейсі» (per diem) ~80 EUR/день. Для порівняння, у Німеччині водій C+E отримує €2 600-3 500 брутто/міс. Головне: міжнародка платить більше, бо більша частина виплати - це diety (добові).' },
      { q: 'Що потрібно, щоб почати з нуля?', a: 'Мінімум: prawo jazdy kat. C+E (з 21 року), Kod 95 (kwalifikacja wstępna przyspieszona - прискорена початкова кваліфікація, 140 год), karta kierowcy (карта водія для тахографа), badania lekarskie категорії 2 і psychotechnika. Досвід часто вимагають від 6 місяців, але не завжди. ADR - за бажанням, піднімає ставку. Повністю з нуля всі допуски обходяться водієві приблизно в 12 000-15 000 PLN (це ваші вкладення, не наш гонорар) - ми це збираємо в один пакет і ведемо по кроках.' },
      { q: 'Що таке Kod 95 і чи потрібен він?', a: 'Так, обовʼязковий. Kod 95 - це позначка «95» у правах, що підтверджує професійну кваліфікацію за директивою ЄС 2003/59/WE. Без неї працювати водієм вантажівки в комерційному рейсі не можна - штраф водієві до 8 000 PLN. Отримують через kwalifikację wstępną przyspieszoną (прискорену початкову кваліфікацію, 140 год) з 21 року. Докладніше - на сторінці Kod 95.' },
      { q: 'Чи потрібна карта водія (тахограф)?', a: 'Так. Karta kierowcy (карта водія для тахографа) обовʼязкова для запису режиму праці й відпочинку в цифровому тахографі за Rozporządzeniem (UE) nr 165/2014. Без неї перевізник не випустить вас на маршрут. Оформлюємо через PWPW - див. сторінку «Карта водія».' },
      { q: 'Чи можна працювати на українських правах?', a: 'Тимчасово - так: національні права діють у Польщі до 185 днів. Далі потрібна wymiana prawa jazdy на польські. Для власників PESEL-UKR за станом на 2026 діє спрощений порядок до 4 березня 2026 - терміни змінюються, перевіряємо актуально на консультації. Для постійної роботи далекобійником права краще одразу обміняти.' },
      { q: 'Чи потрібна польська мова й досвід?', a: 'Польська мова найчастіше НЕ потрібна - багато перевізників працюють із RU/UK/EN, документи й навігація зрозумілою мовою. Досвід водіння вантажівки часто хочуть від 6 місяців, але є фірми, які беруть після отримання допусків і навчають. Підбираємо перевізника під ваш реальний рівень.' },
      { q: 'Який дозвіл на роботу потрібен?', a: 'Для громадян UA/BY/MD/GE/AM - спрощене oświadczenie o powierzeniu pracy (заява про доручення роботи, до 24 місяців). Для перевезень у міжнародному сполученні перевізнику додатково потрібне świadectwo kierowcy (свідоцтво водія, SK1), яке видає GITD. Це частина легалізації, яку ми беремо на себе - див. також «Допомога з працевлаштуванням» (zezwolenie / дозволи).' }
    ],
    related: ['kod-95', 'karta-kierowcy', 'wymiana-prawa-jazdy', 'pomoc-w-zatrudnieniu'],
    ctaTitle: 'За кермо фури в Польщі - швидко й легально',
    ctaSubtitle: 'Безкоштовна діагностика за 30 хвилин: порахуємо реальну виплату на руки, виберемо маршрут і kadencję, зберемо всі допуски (C+E, Kod 95, karta kierowcy) в один план.'
  }
};

export default pracaKierowcaCiezarowka;
