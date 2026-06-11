import type { ServiceEntry } from './types';

const pracaKierowcaTaxi: ServiceEntry = {
  ru: {
    slug: 'praca-kierowca-taxi',
    group: 'relocation',
    icon: 'car',
    badge: 'Bolt · Uber · FreeNow · licencja na taxi',
    title: 'Работа в такси (Bolt, Uber, FreeNow)',
    subtitle: 'Польские права, licencja na taxi, выход на линию под ключ',
    lead: 'С 17 июня 2024 года каждый водитель Bolt, Uber и FreeNow обязан иметь польские права категории B. Тысячи мигрантов потеряли доход за одну ночь: украинские, белорусские и российские права для такси больше не годятся. LegalWin закрывает всю легализацию - обмен прав, экзамен, licencja na taxi (лицензия на такси), badania (медкомиссия) и справка о несудимости - и выводит вас на линию. Чистыми реально 8 000-10 500 PLN/мес при работе на всех платформах.',
    facts: [
      { label: 'Доход на всех платформах', value: '8 000-10 500 PLN', note: 'нетто/мес · ~50-55 ч/нед' },
      { label: 'Польские права', value: 'обязательны', note: 'с 17.06.2024 для всех такси' },
      { label: 'Комиссия платформы', value: '~25%', note: 'Bolt / Uber / FreeNow' },
      { label: 'Выход на линию', value: 'от 2-4 недель', note: 'при готовых правах быстрее' }
    ],
    grounds: {
      title: 'Что мы делаем для водителя',
      subtitle: 'От обмена прав до первого заказа - под ключ.',
      items: [
        { title: 'Wymiana prawa jazdy (обмен прав)', desc: 'Меняем практически любые иностранные права - украинские, белорусские, российские, азербайджанские, турецкие, грузинские и другие - на польские категории B. Для не-ЕС - сдача теории на польском, данные вносятся в CEPiK. Без этого с 17.06.2024 в такси не пускают.' },
        { title: 'Licencja na taxi (лицензия на такси)', desc: 'Получаем лицензию в urząd miasta/gmina под ваш город или подключаем к partner flotowy (партнёр-флот), у которого лицензия уже есть.' },
        { title: 'Badania lekarskie i psychologiczne (медкомиссия)', desc: 'Организуем обязательные медицинский и психологический осмотры для водителя такси. Записываем к проверенным врачам, ведём до выдачи orzeczenia (заключения).' },
        { title: 'Zaświadczenie o niekaralności (справка о несудимости)', desc: 'Берём свежую KRK (польскую справку о несудимости, до 30 дней) и присяжный перевод справки из страны происхождения - платформа обязана проверять niekaralność (несудимость).' },
        { title: 'Регистрация на Bolt / Uber / FreeNow', desc: 'Создаём аккаунт водителя, проходим верификацию документов и niekaralności, настраиваем выплаты. Подключаем сразу несколько платформ для максимума заказов.' },
        { title: 'Partner flotowy (партнёр-флот) и авто в аренду', desc: 'Нет своей машины - подбираем флот с арендой авто ~400-500 PLN/нед + топливо. Авто должно подходить под требования платформ.' },
        { title: 'PESEL, легализация пребывания', desc: 'Оформляем PESEL и проверяем основание пребывания (виза, karta pobytu, статус UKR) - без легального пребывания лицензию не дадут.' },
        { title: 'Польский для интервью и пассажиров', desc: 'Готовим к разговору в urząd при регистрации лицензии и к базовому контакту с пассажиром. При необходимости сопровождаем в urząd.' }
      ]
    },
    timeline: {
      title: 'Путь до первого заказа',
      subtitle: 'При наличии готовых польских прав - ближе к 2 неделям; с обменом прав - 4-8 недель.',
      steps: [
        { title: 'Консультация и диагностика', duration: '30 мин', desc: 'Смотрим ваши права, основание пребывания, PESEL, город, наличие авто. Составляем точный план выхода на линию.' },
        { title: 'Wymiana prawa jazdy', duration: '2-6 недель', desc: 'Подаём на обмен прав, для не-ЕС готовим к теории на польском. Данные водителя попадают в CEPiK.' },
        { title: 'Badania (медкомиссия)', duration: '1-3 дня', desc: 'Медицинский и психологический осмотр. Получаем orzeczenia, нужные для лицензии.' },
        { title: 'Справка о несудимости', duration: '1-7 дней', desc: 'Заказываем KRK и присяжный перевод справки из страны происхождения для платформы.' },
        { title: 'Licencja na taxi', duration: '7-30 дней', desc: 'Подаём на лицензию в urząd miasta или подключаем к partner flotowy с готовой лицензией - так быстрее.' },
        { title: 'Регистрация на платформах', duration: '2-5 дней', desc: 'Аккаунты Bolt, Uber, FreeNow, верификация, привязка авто и выплат.' },
        { title: 'Выход на линию', duration: '1 день', desc: 'Первый заказ. Даём инструктаж по рейтингу, отменам и оптимальным часам.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Базовый пакет - точный список после диагностики.',
      items: [
        'Загранпаспорт + основание пребывания (виза, karta pobytu или статус UKR)',
        'Национальные права (UA / BY / RU) для обмена на польские',
        'PESEL (оформим, если нет)',
        'Справка о несудимости из страны происхождения + присяжный перевод',
        'Подтверждение, что права имеются ≥ 1 года и возраст от ~21',
        'Адрес проживания в Польше (для лицензии и регистрации)',
        'Данные авто (если своё): год, число мест и дверей',
        'Базовый польский или готовность к нашему сопровождению в urząd'
      ]
    },
    pricing: {
      title: 'Стоимость',
      subtitle: 'Точную смету называем после бесплатной оценки.',
      items: [
        { label: 'Консультация и оценка', value: 'Бесплатно', note: '30 минут' },
        { label: 'Оформление под ключ', value: 'Индивидуально', note: 'После диагностики' }
      ]
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (+ nowelizacja z 17 czerwca 2024 r.)',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach',
        'Ustawa o pomocy obywatelom Ukrainy (specustawa) - для граждан UA'
      ]
    },
    faq: [
      { q: 'Сколько реально зарабатывает таксист в Польше в 2026?', a: 'Нетто/мес: Uber ~5 600-8 500, Bolt ~4 800-7 800, FreeNow ~4 500-7 000. На всех платформах сразу при ~50-55 ч/нед - 8 000-10 500+ PLN. По городам: Варшава 5 500-8 500, Краков 5 000-7 500, Вроцлав 4 500-7 000. Комиссия платформы ~25%, без своего авто минус аренда у partner flotowy ~400-500 PLN/нед + топливо.' },
      { q: 'Можно ли работать с украинскими, белорусскими или российскими правами?', a: 'Для такси - уже нет. С 17 июня 2024 для Bolt, Uber, FreeNow обязательны польские права кат. B. Нужен обмен прав (wymiana prawa jazdy). Держатели статуса PESEL-UKR могли ездить на украинских правах до 4 марта 2026, но по состоянию на 2026 после этой даты обмен обязателен. Мы делаем обмен под ключ.' },
      { q: 'Нужны ли польские права и почему именно с 2024 года?', a: 'Да, обязательны. Nowelizacja ustawy o transporcie drogowym от 17 июня 2024 требует от каждого водителя приложений (такси) польские права кат. B. Водители не из ЕС/EFTA дополнительно сдают теорию на польском, данные вносятся в CEPiK. Платформа обязана проверить и niekaralność (несудимость). Именно из-за этой нормы многие мигранты потеряли доход - мы возвращаем вас в легальное поле.' },
      { q: 'Нужно ли знать польский?', a: 'Базовый - да. Он нужен на интервью в urząd при регистрации лицензии и для контакта с пассажиром. Совершенного владения не требуется: мы готовим к типовым вопросам и при необходимости сопровождаем в urząd.' },
      { q: 'Можно ли работать без своего авто?', a: 'Да. Подключаем к partner flotowy (партнёр-флот): он сдаёт авто в аренду ~400-500 PLN/нед + топливо и часто уже имеет licencja na taxi, что ускоряет выход на линию. Машина должна подходить под требования платформ.' },
      { q: 'Как быстро можно выйти на линию?', a: 'Если польские права уже есть - реально за 2-4 недели (медкомиссия, справка, лицензия, регистрация). Если нужен обмен прав с теорией - 4-8 недель. Точный срок называем после диагностики.' },
      { q: 'Нужна ли справка о несудимости?', a: 'Да. Платформа обязана проверять niekaralność (несудимость) водителя. Берём свежую польскую KRK (до 30 дней) и присяжный перевод справки из страны происхождения. Это часть нашего пакета.' }
    ],
    related: ['wymiana-prawa-jazdy', 'pomoc-w-zatrudnieniu', 'zaswiadczenie-o-niekaralnosci', 'pesel'],
    ctaTitle: 'Снова на линию - легально',
    ctaSubtitle: 'Бесплатная оценка: проверим права и документы, посчитаем ваш доход на рынке 2026 и составим план выхода в Bolt, Uber, FreeNow под ключ.'
  },
  pl: {
    slug: 'praca-kierowca-taxi',
    group: 'relocation',
    icon: 'car',
    badge: 'Bolt · Uber · FreeNow · licencja na taxi',
    title: 'Praca kierowca taxi (Bolt, Uber, FreeNow)',
    subtitle: 'Polskie prawo jazdy, licencja na taxi, wyjazd na trasę pod klucz',
    lead: 'Od 17 czerwca 2024 r. każdy kierowca Bolt, Uber i FreeNow musi mieć polskie prawo jazdy kat. B. Tysiące migrantów straciło dochód z dnia na dzień: ukraińskie, białoruskie i rosyjskie prawo jazdy do taksówki już nie wystarcza. LegalWin załatwia całą legalizację - wymianę prawa jazdy, egzamin, licencję na taxi, badania i zaświadczenie o niekaralności - i wprowadza Cię na trasę. Na rękę realnie 8 000-10 500 PLN/mies. przy pracy na wszystkich platformach.',
    facts: [
      { label: 'Dochód na wszystkich platformach', value: '8 000-10 500 PLN', note: 'netto/mies. · ~50-55 h/tyg.' },
      { label: 'Polskie prawo jazdy', value: 'obowiązkowe', note: 'od 17.06.2024 dla wszystkich taksówek' },
      { label: 'Prowizja platformy', value: '~25%', note: 'Bolt / Uber / FreeNow' },
      { label: 'Wyjazd na trasę', value: 'od 2-4 tygodni', note: 'z gotowym prawem jazdy szybciej' }
    ],
    grounds: {
      title: 'Co robimy dla kierowcy',
      subtitle: 'Od wymiany prawa jazdy do pierwszego kursu - pod klucz.',
      items: [
        { title: 'Wymiana prawa jazdy', desc: 'Wymieniamy praktycznie każde zagraniczne prawo jazdy - ukraińskie, białoruskie, rosyjskie, azerbejdżańskie, tureckie, gruzińskie i inne - na polskie kat. B. Dla spoza UE - egzamin teoretyczny po polsku, dane trafiają do CEPiK. Bez tego od 17.06.2024 nie wpuszczą do taksówki.' },
        { title: 'Licencja na taxi', desc: 'Uzyskujemy licencję w urzędzie miasta/gminy pod Twoje miasto albo podłączamy do partnera flotowego, który licencję już ma.' },
        { title: 'Badania lekarskie i psychologiczne', desc: 'Organizujemy obowiązkowe badania lekarskie i psychologiczne kierowcy taksówki. Umawiamy do sprawdzonych lekarzy, prowadzimy do wydania orzeczenia.' },
        { title: 'Zaświadczenie o niekaralności', desc: 'Bierzemy świeże KRK (polskie zaświadczenie o niekaralności, do 30 dni) i tłumaczenie przysięgłe zaświadczenia z kraju pochodzenia - platforma musi weryfikować niekaralność.' },
        { title: 'Rejestracja na Bolt / Uber / FreeNow', desc: 'Zakładamy konto kierowcy, przechodzimy weryfikację dokumentów i niekaralności, ustawiamy wypłaty. Podłączamy kilka platform naraz dla maksimum kursów.' },
        { title: 'Partner flotowy i auto w wynajem', desc: 'Nie masz auta - dobieramy flotę z wynajmem ~400-500 PLN/tyg. + paliwo. Auto musi spełniać wymogi platform.' },
        { title: 'PESEL, legalizacja pobytu', desc: 'Załatwiamy PESEL i sprawdzamy podstawę pobytu (wiza, karta pobytu, status UKR) - bez legalnego pobytu licencji nie wydadzą.' },
        { title: 'Polski na rozmowę i kontakt z pasażerem', desc: 'Przygotowujemy do rozmowy w urzędzie przy rejestracji licencji i do podstawowego kontaktu z pasażerem. W razie potrzeby towarzyszymy w urzędzie.' }
      ]
    },
    timeline: {
      title: 'Droga do pierwszego kursu',
      subtitle: 'Z gotowym polskim prawem jazdy - bliżej 2 tygodni; z wymianą prawa - 4-8 tygodni.',
      steps: [
        { title: 'Konsultacja i diagnoza', duration: '30 min', desc: 'Sprawdzamy prawo jazdy, podstawę pobytu, PESEL, miasto, auto. Układamy dokładny plan wyjazdu na trasę.' },
        { title: 'Wymiana prawa jazdy', duration: '2-6 tygodni', desc: 'Składamy wniosek o wymianę, dla spoza UE przygotowujemy do teorii po polsku. Dane kierowcy trafiają do CEPiK.' },
        { title: 'Badania', duration: '1-3 dni', desc: 'Badania lekarskie i psychologiczne. Odbieramy orzeczenia potrzebne do licencji.' },
        { title: 'Zaświadczenie o niekaralności', duration: '1-7 dni', desc: 'Zamawiamy KRK i tłumaczenie przysięgłe zaświadczenia z kraju pochodzenia dla platformy.' },
        { title: 'Licencja na taxi', duration: '7-30 dni', desc: 'Składamy wniosek w urzędzie miasta albo podłączamy do partnera flotowego z gotową licencją - tak szybciej.' },
        { title: 'Rejestracja na platformach', duration: '2-5 dni', desc: 'Konta Bolt, Uber, FreeNow, weryfikacja, podpięcie auta i wypłat.' },
        { title: 'Wyjazd na trasę', duration: '1 dzień', desc: 'Pierwszy kurs. Instruktaż: rating, anulowania i najlepsze godziny.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Pakiet bazowy - dokładna lista po diagnozie.',
      items: [
        'Paszport + podstawa pobytu (wiza, karta pobytu lub status UKR)',
        'Krajowe prawo jazdy (UA / BY / RU) do wymiany na polskie',
        'PESEL (załatwimy, jeśli brak)',
        'Zaświadczenie o niekaralności z kraju pochodzenia + tłumaczenie przysięgłe',
        'Potwierdzenie posiadania prawa jazdy ≥ 1 rok i wieku od ~21 lat',
        'Adres zamieszkania w Polsce (do licencji i rejestracji)',
        'Dane auta (jeśli własne): rok, liczba miejsc i drzwi',
        'Podstawowy polski lub gotowość na nasze towarzyszenie w urzędzie'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Dokładny kosztorys podajemy po bezpłatnej ocenie.',
      items: [
        { label: 'Konsultacja i ocena', value: 'Gratis', note: '30 minut' },
        { label: 'Obsługa pod klucz', value: 'Indywidualnie', note: 'Po diagnozie' }
      ]
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (+ nowelizacja z 17 czerwca 2024 r.)',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach',
        'Ustawa o pomocy obywatelom Ukrainy (specustawa) - dla obywateli UA'
      ]
    },
    faq: [
      { q: 'Ile realnie zarabia taksówkarz w Polsce w 2026?', a: 'Netto/mies.: Uber ~5 600-8 500, Bolt ~4 800-7 800, FreeNow ~4 500-7 000. Na wszystkich platformach przy ~50-55 h/tyg. - 8 000-10 500+ PLN. Miasta: Warszawa 5 500-8 500, Kraków 5 000-7 500, Wrocław 4 500-7 000. Prowizja platformy ~25%, bez własnego auta minus wynajem u partnera flotowego ~400-500 PLN/tyg. + paliwo.' },
      { q: 'Czy można pracować z ukraińskim, białoruskim lub rosyjskim prawem jazdy?', a: 'Do taksówki - już nie. Od 17 czerwca 2024 dla Bolt, Uber, FreeNow obowiązuje polskie prawo jazdy kat. B. Potrzebna jest wymiana prawa jazdy. Posiadacze statusu PESEL-UKR mogli jeździć na ukraińskim prawie do 4 marca 2026, ale wg stanu na 2026 po tej dacie wymiana jest obowiązkowa. Robimy wymianę pod klucz.' },
      { q: 'Czy polskie prawo jazdy jest obowiązkowe i dlaczego od 2024 roku?', a: 'Tak, jest obowiązkowe. Nowelizacja ustawy o transporcie drogowym z 17 czerwca 2024 wymaga od każdego kierowcy aplikacji (taksówki) polskiego prawa jazdy kat. B. Kierowcy spoza UE/EFTA dodatkowo zdają teorię po polsku, dane trafiają do CEPiK. Platforma musi też sprawdzić niekaralność. Przez ten przepis wielu migrantów straciło dochód - wracamy Cię na legalne tory.' },
      { q: 'Czy trzeba znać polski?', a: 'Podstawowy - tak. Jest potrzebny na rozmowie w urzędzie przy rejestracji licencji i do kontaktu z pasażerem. Nie wymaga się perfekcji: przygotowujemy do typowych pytań i w razie potrzeby towarzyszymy w urzędzie.' },
      { q: 'Czy można pracować bez własnego auta?', a: 'Tak. Podłączamy do partnera flotowego: wynajmuje auto ~400-500 PLN/tyg. + paliwo i często ma już licencję na taxi, co przyspiesza wyjazd na trasę. Auto musi spełniać wymogi platform.' },
      { q: 'Jak szybko można wyjechać na trasę?', a: 'Z gotowym polskim prawem jazdy - realnie 2-4 tygodnie (badania, zaświadczenie, licencja, rejestracja). Z wymianą prawa i teorią - 4-8 tygodni. Dokładny termin podajemy po diagnozie.' },
      { q: 'Czy potrzebne jest zaświadczenie o niekaralności?', a: 'Tak. Platforma musi weryfikować niekaralność kierowcy. Bierzemy świeże polskie KRK (do 30 dni) i tłumaczenie przysięgłe zaświadczenia z kraju pochodzenia. To część naszego pakietu.' }
    ],
    related: ['wymiana-prawa-jazdy', 'pomoc-w-zatrudnieniu', 'zaswiadczenie-o-niekaralnosci', 'pesel'],
    ctaTitle: 'Znów na trasie - legalnie',
    ctaSubtitle: 'Bezpłatna ocena: sprawdzimy prawo jazdy i dokumenty, policzymy Twój dochód na rynku 2026 i ułożymy plan wejścia do Bolt, Uber, FreeNow pod klucz.'
  },
  en: {
    slug: 'praca-kierowca-taxi',
    group: 'relocation',
    icon: 'car',
    badge: 'Bolt · Uber · FreeNow · licencja na taxi',
    title: 'Taxi driver jobs (Bolt, Uber, FreeNow)',
    subtitle: 'Polish licence, licencja na taxi, on the road - turnkey',
    lead: 'Since 17 June 2024 every Bolt, Uber and FreeNow driver must hold a Polish cat. B driving licence. Thousands of migrants lost their income overnight: Ukrainian, Belarusian and Russian licences no longer count for taxi work. LegalWin handles the full legalisation - licence exchange, the exam, licencja na taxi (taxi licence), badania (medical check) and the criminal-record certificate - and gets you on the road. Realistic take-home is 8,000-10,500 PLN/month working across all platforms.',
    facts: [
      { label: 'Income across all platforms', value: '8,000-10,500 PLN', note: 'net/month · ~50-55 h/week' },
      { label: 'Polish driving licence', value: 'mandatory', note: 'since 17.06.2024 for all taxis' },
      { label: 'Platform commission', value: '~25%', note: 'Bolt / Uber / FreeNow' },
      { label: 'On the road', value: 'from 2-4 weeks', note: 'faster with a ready licence' }
    ],
    grounds: {
      title: 'What we do for the driver',
      subtitle: 'From licence exchange to the first ride - turnkey.',
      items: [
        { title: 'Wymiana prawa jazdy (licence exchange)', desc: 'We swap practically any foreign licence - Ukrainian, Belarusian, Russian, Azerbaijani, Turkish, Georgian and others - for a Polish cat. B. Non-EU drivers sit a Polish theory exam; data goes into CEPiK. Without this, since 17.06.2024 you cannot drive taxi.' },
        { title: 'Licencja na taxi (taxi licence)', desc: 'We obtain the licence at the city/gmina office for your city, or plug you into a partner flotowy (fleet partner) who already holds one.' },
        { title: 'Badania lekarskie i psychologiczne (medical & psych check)', desc: 'We arrange the mandatory medical and psychological exams for a taxi driver. We book trusted doctors and see it through to the orzeczenie (certificate).' },
        { title: 'Zaświadczenie o niekaralności (criminal-record certificate)', desc: 'We pull a fresh KRK (Polish criminal-record certificate, under 30 days) and a sworn translation of your home-country certificate - the platform must verify niekaralność (no criminal record).' },
        { title: 'Registration on Bolt / Uber / FreeNow', desc: 'We create the driver account, pass document and criminal-record verification, set up payouts. We connect several platforms at once for maximum rides.' },
        { title: 'Partner flotowy (fleet partner) and car rental', desc: 'No car of your own - we match you to a fleet renting a vehicle at ~400-500 PLN/week + fuel. The car must meet platform requirements.' },
        { title: 'PESEL, residence legalisation', desc: 'We arrange a PESEL and check your residence basis (visa, residence card, UKR status) - no licence is issued without legal residence.' },
        { title: 'Polish for the interview and passengers', desc: 'We prep you for the office interview at licence registration and for basic passenger contact. If needed, we accompany you to the office.' }
      ]
    },
    timeline: {
      title: 'Path to your first ride',
      subtitle: 'With a ready Polish licence - closer to 2 weeks; with a licence exchange - 4-8 weeks.',
      steps: [
        { title: 'Consultation & diagnosis', duration: '30 min', desc: 'We review your licence, residence basis, PESEL, city and car. We map a precise plan to get you on the road.' },
        { title: 'Wymiana prawa jazdy', duration: '2-6 weeks', desc: 'We file the exchange; for non-EU we prep you for the Polish theory exam. Driver data goes into CEPiK.' },
        { title: 'Badania (medical check)', duration: '1-3 days', desc: 'Medical and psychological exams. We collect the orzeczenia needed for the licence.' },
        { title: 'Criminal-record certificate', duration: '1-7 days', desc: 'We order the KRK and a sworn translation of the home-country certificate for the platform.' },
        { title: 'Licencja na taxi', duration: '7-30 days', desc: 'We file at the city office or plug you into a fleet partner with a ready licence - faster route.' },
        { title: 'Platform registration', duration: '2-5 days', desc: 'Bolt, Uber, FreeNow accounts, verification, car and payout linking.' },
        { title: 'On the road', duration: '1 day', desc: 'First ride. We brief you on rating, cancellations and the best hours.' }
      ]
    },
    documents: {
      title: 'What we need from you',
      subtitle: 'Base set - exact list after diagnosis.',
      items: [
        'Passport + residence basis (visa, residence card or UKR status)',
        'National licence (UA / BY / RU) to exchange for a Polish one',
        'PESEL (we arrange it if missing)',
        'Home-country criminal-record certificate + sworn translation',
        'Proof you have held a licence ≥ 1 year and are aged ~21+',
        'Address in Poland (for the licence and registration)',
        'Car details (if your own): year, number of seats and doors',
        'Basic Polish or readiness for us to accompany you to the office'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Exact quote after a free assessment.',
      items: [
        { label: 'Consultation & assessment', value: 'Free', note: '30 minutes' },
        { label: 'Turnkey handling', value: 'Individual', note: 'After diagnosis' }
      ]
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Road Transport Act of 6 September 2001 (+ amendment of 17 June 2024)',
        'Act on Drivers of Vehicles of 5 January 2011',
        'Foreigners Act of 12 December 2013',
        'Act on assistance to citizens of Ukraine (specustawa) - for UA citizens'
      ]
    },
    faq: [
      { q: 'How much does a taxi driver in Poland really earn in 2026?', a: 'Net/month: Uber ~5,600-8,500, Bolt ~4,800-7,800, FreeNow ~4,500-7,000. Across all platforms at ~50-55 h/week - 8,000-10,500+ PLN. By city: Warsaw 5,500-8,500, Kraków 5,000-7,500, Wrocław 4,500-7,000. Platform commission ~25%; without your own car, minus fleet-partner rental ~400-500 PLN/week + fuel.' },
      { q: 'Can I work on a Ukrainian, Belarusian or Russian licence?', a: 'For taxi - no longer. Since 17 June 2024 Bolt, Uber and FreeNow require a Polish cat. B licence. You need a licence exchange (wymiana prawa jazdy). PESEL-UKR holders could drive on a Ukrainian licence until 4 March 2026, but as of 2026 an exchange is required after that date. We do the exchange turnkey.' },
      { q: 'Is a Polish licence required, and why since 2024?', a: 'Yes, it is mandatory. The amendment to the Road Transport Act of 17 June 2024 requires every app (taxi) driver to hold a Polish cat. B licence. Non-EU/EFTA drivers also sit a Polish theory exam; data goes into CEPiK. The platform must also verify niekaralność (no criminal record). This rule cost many migrants their income - we bring you back into the legal lane.' },
      { q: 'Do I need to speak Polish?', a: 'Basic Polish - yes. You need it for the office interview at licence registration and for passenger contact. Fluency is not required: we prep you for the typical questions and, if needed, accompany you to the office.' },
      { q: 'Can I work without my own car?', a: 'Yes. We connect you to a partner flotowy (fleet partner): it rents a car at ~400-500 PLN/week + fuel and often already holds a licencja na taxi, which speeds up getting on the road. The car must meet platform requirements.' },
      { q: 'How fast can I get on the road?', a: 'With a Polish licence already in hand - realistically 2-4 weeks (medical check, certificate, licence, registration). With a licence exchange plus theory - 4-8 weeks. We give an exact timeline after diagnosis.' },
      { q: 'Do I need a criminal-record certificate?', a: 'Yes. The platform must verify a driver\'s niekaralność (no criminal record). We pull a fresh Polish KRK (under 30 days) and a sworn translation of your home-country certificate. It is part of our package.' }
    ],
    related: ['wymiana-prawa-jazdy', 'pomoc-w-zatrudnieniu', 'zaswiadczenie-o-niekaralnosci', 'pesel'],
    ctaTitle: 'Back on the road - legally',
    ctaSubtitle: 'Free assessment: we check your licence and documents, calculate your 2026 income and map a turnkey plan to start on Bolt, Uber and FreeNow.'
  },
  tr: {
    slug: 'praca-kierowca-taxi',
    group: 'relocation',
    icon: 'car',
    badge: 'Bolt · Uber · FreeNow · licencja na taxi',
    title: 'Taksi şoförü işi (Bolt, Uber, FreeNow)',
    subtitle: 'Polonya ehliyeti, licencja na taxi, anahtar teslim sefere çıkış',
    lead: '17 Haziran 2024\'ten itibaren her Bolt, Uber ve FreeNow şoförü Polonya B sınıfı ehliyetine sahip olmak zorunda. Binlerce göçmen bir gecede gelirini kaybetti: Ukrayna, Belarus ve Rusya ehliyetleri artık taksi için geçerli değil. LegalWin tüm yasallaştırmayı üstlenir - ehliyet değişimi, sınav, licencja na taxi (taksi lisansı), badania (sağlık muayenesi) ve sabıka kaydı belgesi - ve sizi sefere çıkarır. Tüm platformlarda çalışınca ele geçen gerçekçi tutar 8.000-10.500 PLN/ay.',
    facts: [
      { label: 'Tüm platformlarda gelir', value: '8.000-10.500 PLN', note: 'net/ay · ~50-55 sa/hafta' },
      { label: 'Polonya ehliyeti', value: 'zorunlu', note: '17.06.2024\'ten beri tüm taksiler için' },
      { label: 'Platform komisyonu', value: '~%25', note: 'Bolt / Uber / FreeNow' },
      { label: 'Sefere çıkış', value: '2-4 haftadan', note: 'hazır ehliyetle daha hızlı' }
    ],
    grounds: {
      title: 'Şoför için ne yapıyoruz',
      subtitle: 'Ehliyet değişiminden ilk yolculuğa kadar - anahtar teslim.',
      items: [
        { title: 'Wymiana prawa jazdy (ehliyet değişimi)', desc: 'Neredeyse her yabancı ehliyeti - Ukrayna, Belarus, Rusya, Azerbaycan, Türkiye, Gürcistan ve diğerleri - Polonya B sınıfına çeviririz. AB dışı için Lehçe teori sınavı, veriler CEPiK\'e işlenir. Bu olmadan 17.06.2024\'ten beri taksiye alınmazsınız.' },
        { title: 'Licencja na taxi (taksi lisansı)', desc: 'Şehriniz için urząd miasta/gmina\'dan (belediye) lisansı alırız ya da lisansı zaten olan bir partner flotowy\'ye (filo ortağı) bağlarız.' },
        { title: 'Badania lekarskie i psychologiczne (sağlık ve psikolojik muayene)', desc: 'Taksi şoförü için zorunlu tıbbi ve psikolojik muayeneleri organize ederiz. Güvenilir doktorlara randevu alır, orzeczenie (rapor) çıkana kadar takip ederiz.' },
        { title: 'Zaświadczenie o niekaralności (sabıka kaydı belgesi)', desc: 'Güncel KRK\'yi (Polonya sabıka kaydı belgesi, 30 günden eski olmayan) ve menşe ülke belgesinin yeminli tercümesini alırız - platform niekaralność\'ı (sabıkasızlık) doğrulamak zorundadır.' },
        { title: 'Bolt / Uber / FreeNow kaydı', desc: 'Şoför hesabını açar, belge ve niekaralność doğrulamasını geçer, ödemeleri ayarlarız. Maksimum yolculuk için birkaç platformu aynı anda bağlarız.' },
        { title: 'Partner flotowy (filo ortağı) ve kiralık araç', desc: 'Aracınız yoksa - haftalık ~400-500 PLN + yakıtla araç kiralayan bir filo buluruz. Araç platform şartlarını karşılamalı.' },
        { title: 'PESEL, ikamet yasallaştırması', desc: 'PESEL\'i alır ve ikamet dayanağınızı (vize, karta pobytu, UKR statüsü) kontrol ederiz - yasal ikamet olmadan lisans verilmez.' },
        { title: 'Mülakat ve yolcu için Lehçe', desc: 'Lisans kaydında urząd mülakatına ve yolcuyla temel iletişime hazırlarız. Gerekirse urząd\'a eşlik ederiz.' }
      ]
    },
    timeline: {
      title: 'İlk yolculuğa giden yol',
      subtitle: 'Hazır Polonya ehliyetiyle 2 haftaya yakın; ehliyet değişimiyle 4-8 hafta.',
      steps: [
        { title: 'Danışmanlık ve teşhis', duration: '30 dk', desc: 'Ehliyetinizi, ikamet dayanağınızı, PESEL\'i, şehri ve aracı inceleriz. Sefere çıkış için net bir plan çıkarırız.' },
        { title: 'Wymiana prawa jazdy', duration: '2-6 hafta', desc: 'Değişim başvurusunu yaparız, AB dışı için Lehçe teoriye hazırlarız. Şoför verileri CEPiK\'e işlenir.' },
        { title: 'Badania (sağlık muayenesi)', duration: '1-3 gün', desc: 'Tıbbi ve psikolojik muayene. Lisans için gereken orzeczenia\'yı alırız.' },
        { title: 'Sabıka kaydı belgesi', duration: '1-7 gün', desc: 'KRK\'yi ve menşe ülke belgesinin yeminli tercümesini platform için temin ederiz.' },
        { title: 'Licencja na taxi', duration: '7-30 gün', desc: 'Urząd miasta\'ya başvururuz ya da lisansı hazır bir partner flotowy\'ye bağlarız - bu yol daha hızlı.' },
        { title: 'Platform kaydı', duration: '2-5 gün', desc: 'Bolt, Uber, FreeNow hesapları, doğrulama, araç ve ödeme bağlama.' },
        { title: 'Sefere çıkış', duration: '1 gün', desc: 'İlk yolculuk. Rating, iptaller ve en iyi saatler hakkında bilgilendirme veririz.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Temel paket - net liste teşhisten sonra.',
      items: [
        'Pasaport + ikamet dayanağı (vize, karta pobytu veya UKR statüsü)',
        'Polonya ehliyetine çevrilecek ulusal ehliyet (UA / BY / RU)',
        'PESEL (yoksa biz alırız)',
        'Menşe ülkeden sabıka kaydı belgesi + yeminli tercüme',
        'Ehliyetin ≥ 1 yıldır mevcut olduğu ve ~21 yaş üstü olduğunuzun kanıtı',
        'Polonya\'da ikamet adresi (lisans ve kayıt için)',
        'Araç bilgileri (kendinizinse): yıl, koltuk ve kapı sayısı',
        'Temel Lehçe ya da urząd\'a eşlik etmemize hazır olma'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Net fiyatı ücretsiz değerlendirmeden sonra veririz.',
      items: [
        { label: 'Danışmanlık ve değerlendirme', value: 'Ücretsiz', note: '30 dakika' },
        { label: 'Anahtar teslim işlem', value: 'Bireysel', note: 'Teşhisten sonra' }
      ]
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (Karayolu Taşımacılığı Kanunu) (+ 17 Haziran 2024 değişikliği)',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami (Araç Sürücüleri Kanunu)',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Yabancılar Kanunu)',
        'Ukrayna vatandaşlarına yardım kanunu (specustawa) - UA vatandaşları için'
      ]
    },
    faq: [
      { q: '2026\'da Polonya\'da taksici gerçekte ne kadar kazanıyor?', a: 'Net/ay: Uber ~5.600-8.500, Bolt ~4.800-7.800, FreeNow ~4.500-7.000. Tüm platformlarda ~50-55 sa/hafta - 8.000-10.500+ PLN. Şehirler: Varşova 5.500-8.500, Krakov 5.000-7.500, Wrocław 4.500-7.000. Platform komisyonu ~%25; kendi aracınız yoksa partner flotowy kirası ~400-500 PLN/hafta + yakıt düşülür.' },
      { q: 'Ukrayna, Belarus veya Rusya ehliyetiyle çalışılabilir mi?', a: 'Taksi için - artık hayır. 17 Haziran 2024\'ten beri Bolt, Uber, FreeNow için Polonya B sınıfı ehliyet zorunlu. Ehliyet değişimi (wymiana prawa jazdy) gerekir. PESEL-UKR statüsü sahipleri 4 Mart 2026\'ya kadar Ukrayna ehliyetiyle sürebiliyordu, ancak 2026 itibarıyla bu tarihten sonra değişim zorunlu. Değişimi anahtar teslim yaparız.' },
      { q: 'Polonya ehliyeti zorunlu mu ve neden 2024\'ten beri?', a: 'Evet, zorunlu. 17 Haziran 2024 tarihli Karayolu Taşımacılığı Kanunu değişikliği, her uygulama (taksi) şoföründen Polonya B sınıfı ehliyet ister. AB/EFTA dışı şoförler ayrıca Lehçe teori sınavına girer, veriler CEPiK\'e işlenir. Platform ayrıca niekaralność\'ı (sabıkasızlık) doğrulamak zorundadır. Bu kural birçok göçmenin gelirine mal oldu - sizi yasal şeride geri döndürüyoruz.' },
      { q: 'Lehçe bilmek gerekir mi?', a: 'Temel Lehçe - evet. Lisans kaydında urząd mülakatı ve yolcuyla iletişim için gerekir. Akıcılık şart değil: tipik sorulara hazırlarız ve gerekirse urząd\'a eşlik ederiz.' },
      { q: 'Kendi aracım olmadan çalışabilir miyim?', a: 'Evet. Sizi bir partner flotowy\'ye (filo ortağı) bağlarız: haftalık ~400-500 PLN + yakıtla araç kiralar ve çoğu zaman licencja na taxi\'si zaten vardır, bu da sefere çıkışı hızlandırır. Araç platform şartlarını karşılamalı.' },
      { q: 'Ne kadar hızlı sefere çıkabilirim?', a: 'Polonya ehliyeti hazırsa - gerçekçi olarak 2-4 hafta (muayene, belge, lisans, kayıt). Ehliyet değişimi ve teori gerekirse - 4-8 hafta. Net süreyi teşhisten sonra veririz.' },
      { q: 'Sabıka kaydı belgesi gerekli mi?', a: 'Evet. Platform şoförün niekaralność\'ını (sabıkasızlık) doğrulamak zorundadır. Güncel Polonya KRK\'sini (30 günden eski olmayan) ve menşe ülke belgesinin yeminli tercümesini alırız. Bu paketimizin parçasıdır.' }
    ],
    related: ['wymiana-prawa-jazdy', 'pomoc-w-zatrudnieniu', 'zaswiadczenie-o-niekaralnosci', 'pesel'],
    ctaTitle: 'Tekrar sefere - yasal şekilde',
    ctaSubtitle: 'Ücretsiz değerlendirme: ehliyet ve belgelerinizi kontrol eder, 2026 piyasasında gelirinizi hesaplar ve Bolt, Uber, FreeNow\'a anahtar teslim giriş planı çıkarırız.'
  },
  uk: {
    slug: 'praca-kierowca-taxi',
    group: 'relocation',
    icon: 'car',
    badge: 'Bolt · Uber · FreeNow · licencja na taxi',
    title: 'Робота в таксі (Bolt, Uber, FreeNow)',
    subtitle: 'Польські права, licencja na taxi, вихід на лінію під ключ',
    lead: 'З 17 червня 2024 року кожен водій Bolt, Uber і FreeNow зобов’язаний мати польські права категорії B. Тисячі мігрантів втратили дохід за одну ніч: українські, білоруські та російські права для таксі більше не підходять. LegalWin закриває всю легалізацію - обмін прав, іспит, licencja na taxi (ліцензія на таксі), badania (медкомісія) і довідку про несудимість - та виводить вас на лінію. Чистими реально 8 000-10 500 PLN/міс при роботі на всіх платформах.',
    facts: [
      { label: 'Дохід на всіх платформах', value: '8 000-10 500 PLN', note: 'нетто/міс · ~50-55 год/тиж' },
      { label: 'Польські права', value: 'обов’язкові', note: 'з 17.06.2024 для всіх таксі' },
      { label: 'Комісія платформи', value: '~25%', note: 'Bolt / Uber / FreeNow' },
      { label: 'Вихід на лінію', value: 'від 2-4 тижнів', note: 'з готовими правами швидше' }
    ],
    grounds: {
      title: 'Що ми робимо для водія',
      subtitle: 'Від обміну прав до першого замовлення - під ключ.',
      items: [
        { title: 'Wymiana prawa jazdy (обмін прав)', desc: 'Міняємо практично будь-які іноземні права - українські, білоруські, російські, азербайджанські, турецькі, грузинські та інші - на польські категорії B. Для не-ЄС - складання теорії польською, дані вносяться до CEPiK. Без цього з 17.06.2024 у таксі не пускають.' },
        { title: 'Licencja na taxi (ліцензія на таксі)', desc: 'Отримуємо ліцензію в urząd miasta/gmina під ваше місто або підключаємо до partner flotowy (партнер-флот), у якого ліцензія вже є.' },
        { title: 'Badania lekarskie i psychologiczne (медкомісія)', desc: 'Організовуємо обов’язкові медичний і психологічний огляди для водія таксі. Записуємо до перевірених лікарів, ведемо до видачі orzeczenia (висновку).' },
        { title: 'Zaświadczenie o niekaralności (довідка про несудимість)', desc: 'Беремо свіже KRK (польську довідку про несудимість, до 30 днів) і присяжний переклад довідки з країни походження - платформа зобов’язана перевіряти niekaralność (несудимість).' },
        { title: 'Реєстрація на Bolt / Uber / FreeNow', desc: 'Створюємо акаунт водія, проходимо верифікацію документів і niekaralności, налаштовуємо виплати. Підключаємо одразу кілька платформ для максимуму замовлень.' },
        { title: 'Partner flotowy (партнер-флот) і авто в оренду', desc: 'Немає своєї машини - підбираємо флот з орендою авто ~400-500 PLN/тиж + пальне. Авто має відповідати вимогам платформ.' },
        { title: 'PESEL, легалізація перебування', desc: 'Оформлюємо PESEL і перевіряємо підставу перебування (віза, karta pobytu, статус UKR) - без легального перебування ліцензію не дадуть.' },
        { title: 'Польська для інтерв’ю та пасажирів', desc: 'Готуємо до розмови в urząd при реєстрації ліцензії та до базового контакту з пасажиром. За потреби супроводжуємо в urząd.' }
      ]
    },
    timeline: {
      title: 'Шлях до першого замовлення',
      subtitle: 'За наявності готових польських прав - ближче до 2 тижнів; з обміном прав - 4-8 тижнів.',
      steps: [
        { title: 'Консультація і діагностика', duration: '30 хв', desc: 'Дивимося ваші права, підставу перебування, PESEL, місто, наявність авто. Складаємо точний план виходу на лінію.' },
        { title: 'Wymiana prawa jazdy', duration: '2-6 тижнів', desc: 'Подаємо на обмін прав, для не-ЄС готуємо до теорії польською. Дані водія потрапляють до CEPiK.' },
        { title: 'Badania (медкомісія)', duration: '1-3 дні', desc: 'Медичний і психологічний огляд. Отримуємо orzeczenia, потрібні для ліцензії.' },
        { title: 'Довідка про несудимість', duration: '1-7 днів', desc: 'Замовляємо KRK і присяжний переклад довідки з країни походження для платформи.' },
        { title: 'Licencja na taxi', duration: '7-30 днів', desc: 'Подаємо на ліцензію в urząd miasta або підключаємо до partner flotowy з готовою ліцензією - так швидше.' },
        { title: 'Реєстрація на платформах', duration: '2-5 днів', desc: 'Акаунти Bolt, Uber, FreeNow, верифікація, прив’язка авто і виплат.' },
        { title: 'Вихід на лінію', duration: '1 день', desc: 'Перше замовлення. Даємо інструктаж щодо рейтингу, скасувань і оптимальних годин.' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Базовий пакет - точний список після діагностики.',
      items: [
        'Закордонний паспорт + підстава перебування (віза, karta pobytu або статус UKR)',
        'Національні права (UA / BY / RU) для обміну на польські',
        'PESEL (оформимо, якщо немає)',
        'Довідка про несудимість з країни походження + присяжний переклад',
        'Підтвердження, що права є ≥ 1 року, і вік від ~21',
        'Адреса проживання в Польщі (для ліцензії та реєстрації)',
        'Дані авто (якщо своє): рік, кількість місць і дверей',
        'Базова польська або готовність до нашого супроводу в urząd'
      ]
    },
    pricing: {
      title: 'Вартість',
      subtitle: 'Точний кошторис називаємо після безкоштовної оцінки.',
      items: [
        { label: 'Консультація та оцінка', value: 'Безкоштовно', note: '30 хвилин' },
        { label: 'Оформлення під ключ', value: 'Індивідуально', note: 'Після діагностики' }
      ]
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (+ nowelizacja z 17 czerwca 2024 r.)',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach',
        'Ustawa o pomocy obywatelom Ukrainy (specustawa) - для громадян UA'
      ]
    },
    faq: [
      { q: 'Скільки реально заробляє таксист у Польщі у 2026?', a: 'Нетто/міс: Uber ~5 600-8 500, Bolt ~4 800-7 800, FreeNow ~4 500-7 000. На всіх платформах одразу при ~50-55 год/тиж - 8 000-10 500+ PLN. По містах: Варшава 5 500-8 500, Краків 5 000-7 500, Вроцлав 4 500-7 000. Комісія платформи ~25%, без свого авто мінус оренда в partner flotowy ~400-500 PLN/тиж + пальне.' },
      { q: 'Чи можна працювати з українськими, білоруськими або російськими правами?', a: 'Для таксі - вже ні. З 17 червня 2024 для Bolt, Uber, FreeNow обов’язкові польські права кат. B. Потрібен обмін прав (wymiana prawa jazdy). Власники статусу PESEL-UKR могли їздити на українських правах до 4 березня 2026, але станом на 2026 після цієї дати обмін обов’язковий. Ми робимо обмін під ключ.' },
      { q: 'Чи потрібні польські права і чому саме з 2024 року?', a: 'Так, обов’язкові. Nowelizacja ustawy o transporcie drogowym від 17 червня 2024 вимагає від кожного водія застосунків (таксі) польські права кат. B. Водії не з ЄС/EFTA додатково складають теорію польською, дані вносяться до CEPiK. Платформа зобов’язана перевірити і niekaralność (несудимість). Саме через цю норму багато мігрантів втратили дохід - ми повертаємо вас у легальне поле.' },
      { q: 'Чи потрібно знати польську?', a: 'Базову - так. Вона потрібна на інтерв’ю в urząd при реєстрації ліцензії та для контакту з пасажиром. Досконалого володіння не вимагають: ми готуємо до типових запитань і за потреби супроводжуємо в urząd.' },
      { q: 'Чи можна працювати без свого авто?', a: 'Так. Підключаємо до partner flotowy (партнер-флот): він здає авто в оренду ~400-500 PLN/тиж + пальне і часто вже має licencja na taxi, що пришвидшує вихід на лінію. Машина має відповідати вимогам платформ.' },
      { q: 'Як швидко можна вийти на лінію?', a: 'Якщо польські права вже є - реально за 2-4 тижні (медкомісія, довідка, ліцензія, реєстрація). Якщо потрібен обмін прав з теорією - 4-8 тижнів. Точний термін називаємо після діагностики.' },
      { q: 'Чи потрібна довідка про несудимість?', a: 'Так. Платформа зобов’язана перевіряти niekaralność (несудимість) водія. Беремо свіже польське KRK (до 30 днів) і присяжний переклад довідки з країни походження. Це частина нашого пакета.' }
    ],
    related: ['wymiana-prawa-jazdy', 'pomoc-w-zatrudnieniu', 'zaswiadczenie-o-niekaralnosci', 'pesel'],
    ctaTitle: 'Знову на лінію - легально',
    ctaSubtitle: 'Безкоштовна оцінка: перевіримо права і документи, порахуємо ваш дохід на ринку 2026 і складемо план виходу в Bolt, Uber, FreeNow під ключ.'
  }
};

export default pracaKierowcaTaxi;
