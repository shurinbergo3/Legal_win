import type { ServiceEntry } from './types';

const przegladTechniczny: ServiceEntry = {
  ru: {
    slug: 'przeglad-techniczny',
    group: 'auto',
    icon: 'car',
    badge: 'SKP · 149 PLN · 2025',
    title: 'Техосмотр (przegląd techniczny)',
    subtitle: 'Запись, сопровождение и перевод на станции SKP - и «нулевой» техосмотр при ввозе',
    lead: 'Техосмотр (badanie techniczne) - обязательная проверка авто на станции SKP, без действующего техосмотра ездить нельзя. С 19 сентября 2025 года легковой техосмотр стоит 149 PLN (на газу/LPG - 245 PLN), и это фиксированная цена по всей Польше. Важно: доплаты за просрочку на станции НЕТ - это миф, который тиражируют устаревшие сайты; проект такого сбора не был принят. Зато за езду без действующего техосмотра полиция штрафует на 1 500-5 000 PLN. Помогаем разобраться в сроках, записываем на SKP, сопровождаем и переводим, а для ввезённого авто проводим «нулевой» техосмотр (przegląd zerowy) перед регистрацией.',
    facts: [
      { label: 'Цена (легковое)', value: '149 PLN', note: 'с 19.09.2025 · LPG - 245 PLN' },
      { label: 'Периодичность', value: '3 / 5 / 1 год', note: '1-й до 3 лет, 2-й до 5, далее ежегодно' },
      { label: 'Где', value: 'Станция SKP', note: 'периодический - любая · «нулевой» - okręgowa' },
      { label: 'Штраф за езду без ТО', value: '1 500-5 000 PLN', note: 'плюс риск регресса OC' }
    ],
    grounds: {
      title: 'Когда и какой техосмотр нужен',
      subtitle: 'Периодичность зависит от возраста и типа авто. Для ввезённых машин - отдельный «нулевой» техосмотр перед регистрацией.',
      items: [
        { title: 'Периодический техосмотр легкового авто', desc: '1-й раз - до истечения 3 лет с даты первой регистрации, 2-й - до 5 лет (и в течение 2 лет после предыдущего), далее - ежегодно. Можно пройти на любой базовой (podstawowa) станции SKP.' },
        { title: 'Авто на газу (LPG/CNG), такси, учебные', desc: 'Для них техосмотр - всегда ежегодный, независимо от возраста. То же для перевозок пассажиров за плату, спецтранспорта, перевозки опасных грузов. LPG-проверка дороже: 245 PLN.' },
        { title: '«Нулевой» техосмотр при ввозе', desc: 'Авто, ввезённое из-за границы, проходит przegląd zerowy в окружной (okręgowa) станции SKP до регистрации - это подтверждение пригодности к польским дорогам. Обязательно для постановки на учёт.' },
        { title: 'Техосмотр после установки ГБО', desc: 'Поставили газовое оборудование - нужен внеочередной техосмотр с внесением изменений в dowód rejestracyjny. Проводится в окружной SKP.' },
        { title: 'Повторный техосмотр после дефекта', desc: 'Если станция нашла неисправности, авто отправляют на ремонт и повторную проверку (21-55 PLN). Помогаем понять заключение и пройти повторно.' },
        { title: 'Авто на иностранных (украинских) номерах', desc: 'Машины на не-ЕС номерах сейчас не обязаны проходить польский техосмотр (Венская конвенция). Но готовится проект (UC95), который может это изменить для авто, находящихся в Польше более года, - следим за статусом.' }
      ]
    },
    timeline: {
      title: 'Как мы помогаем с техосмотром',
      subtitle: 'Периодический - в день записи. «Нулевой» при ввозе - согласуем с окружной SKP, обычно 1-2 дня.',
      steps: [
        { title: 'Консультация', duration: '15 мин', desc: 'Смотрим возраст и тип авто (бензин/LPG, легковое/иное), считаем срок следующего техосмотра, определяем тип проверки.' },
        { title: 'Запись на станцию SKP', duration: '1 день', desc: 'Подбираем удобную станцию (базовую или окружную для «нулевого»/LPG), записываем на время. Можно пройти до 30 дней раньше срока без потери даты.' },
        { title: 'Сопровождение и перевод', duration: '30-60 мин', desc: 'При необходимости встречаем на станции, переводим общение с диагностом, помогаем с документами и оплатой.' },
        { title: 'Результат и отметка', duration: 'день в день', desc: 'При успехе - отметка о техосмотре в системе CEPiK и в dowód rejestracyjny. Ставим напоминание о следующей дате.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Минимум - техпаспорт. Остальное по ситуации.',
      items: [
        'Техпаспорт (dowód rejestracyjny) или pozwolenie czasowe - обязательно',
        'Полис OC - желательно иметь при себе',
        'Для «нулевого» техосмотра - документы ввоза и снятия с учёта',
        'Для авто с ГБО - документы об установке газового оборудования',
        'Загранпаспорт - для идентификации, если требуется'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Гонорар за запись, сопровождение и перевод. Сам техосмотр оплачивается станции по фиксированному тарифу.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '15 минут · расчёт срока и типа' },
        { label: 'Запись + сопровождение + перевод', value: 'от 150 PLN', note: 'Периодический техосмотр' },
        { label: '«Нулевой» техосмотр при ввозе', value: 'от 250 PLN', note: 'Окружная SKP · перед регистрацией' }
      ],
      note: 'Указаны гонорары LegalWin. Сам техосмотр оплачивается станции по фиксированному государственному тарифу: легковое - 149 PLN (с 19.09.2025), на газу/LPG - 245 PLN, повторный - 21-55 PLN. Доплаты за просрочку на станции НЕТ. Сбора «+1 PLN CEPiK» больше нет (отменён).'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym (art. 81 - okresowe badania techniczne)',
        'Rozporządzenie ws. opłat za badania techniczne - Dz.U. 2025 poz. 1223 (149 PLN od 19.09.2025)',
        'Rozporządzenie ws. zakresu i sposobu przeprowadzania badań technicznych',
        'Badanie zerowe pojazdu sprowadzonego z zagranicy - przed pierwszą rejestracją',
        'CEPiK - centralna ewidencja pojazdów (rejestr wyników badań)'
      ]
    },
    faq: [
      { q: 'Сколько стоит техосмотр в 2025-2026 году?', a: 'С 19 сентября 2025 года легковой техосмотр стоит 149 PLN (раньше было 98 PLN). Авто на газу (LPG/CNG) - 245 PLN. Мотоцикл - 94 PLN, повторный осмотр - 21-55 PLN. Цены фиксированы по всей Польше и одинаковы на любой станции. Сбора «+1 PLN CEPiK» больше нет.' },
      { q: 'Как часто нужно проходить техосмотр?', a: 'Для легкового авто: 1-й техосмотр - до истечения 3 лет с первой регистрации, 2-й - до 5 лет, затем - ежегодно. Для авто на газу, такси, учебных и коммерческих перевозок - всегда ежегодно. Можно пройти до 30 дней раньше срока, не теряя дату следующего.' },
      { q: 'Есть ли доплата за просрочку техосмотра на станции?', a: 'Нет. Это распространённый миф - на многих устаревших сайтах пишут про «двойную оплату» или 198 PLN за просроченный осмотр. Такой сбор был лишь проектом и НЕ был принят. На станции вы платите обычные 149 PLN независимо от того, на сколько просрочили. Но за саму езду с просроченным техосмотром штрафует полиция.' },
      { q: 'Какой штраф за езду без действующего техосмотра?', a: 'С просроченным техосмотром ездить нельзя. Полиция штрафует на 1 500-5 000 PLN, результат фиксируется в CEPiK. Кроме того, при ДТП по вашей вине без действующего техосмотра возможен регресс со стороны страховщика. Если найдены дефекты - ремонт и повторная проверка.' },
      { q: 'Какие документы нужны для техосмотра?', a: 'Обязательно - техпаспорт (dowód rejestracyjny) или временное разрешение (pozwolenie czasowe). Полис OC желательно иметь при себе. Для «нулевого» техосмотра при ввозе - документы ввоза и снятия с учёта, для авто с ГБО - документы об установке газового оборудования.' },
      { q: 'Где пройти техосмотр и что такое SKP?', a: 'SKP (Stacja Kontroli Pojazdów) - станция контроля транспортных средств. Периодический техосмотр можно пройти на любой базовой (podstawowa) станции по всей стране. «Нулевой» осмотр при ввозе и проверку после установки LPG проводят только окружные (okręgowa) станции. Подбираем удобную и записываем.' },
      { q: 'Нужен ли техосмотр на украинских номерах?', a: 'Сейчас авто на не-ЕС номерах (например украинских) не обязаны проходить польский техосмотр - действует Венская конвенция. Но готовится законопроект (UC95), который может ввести обязательную регистрацию и техосмотр для не-ЕС авто, находящихся в Польше более года. На середину 2026 года он не принят - следим за статусом и предупредим заранее.' },
      { q: 'Что такое «нулевой» техосмотр при ввозе?', a: 'Przegląd zerowy - это обязательный технический осмотр авто, ввезённого из-за границы, который проводят в окружной (okręgowa) станции SKP перед первой регистрацией в Польше. Он подтверждает, что машина пригодна к эксплуатации на польских дорогах. Без него зарегистрировать ввезённое авто нельзя - проводим его в связке с регистрацией.' }
    ],
    related: ['rejestracja-pojazdu', 'ubezpieczenie-oc-ac', 'wymiana-prawa-jazdy'],
    ctaTitle: 'Поможем пройти техосмотр без нервов',
    ctaSubtitle: 'Бесплатная консультация: посчитаем срок, подберём станцию, запишем и сопроводим с переводом. Для ввезённого авто проведём «нулевой» техосмотр перед регистрацией. Только актуальные цены и правила 2025-2026.'
  },
  pl: {
    slug: 'przeglad-techniczny',
    group: 'auto',
    icon: 'car',
    badge: 'SKP · 149 PLN · 2025',
    title: 'Przegląd techniczny pojazdu',
    subtitle: 'Zapis, asysta i tłumaczenie na stacji SKP - oraz badanie zerowe przy sprowadzeniu auta',
    lead: 'Przegląd techniczny (badanie techniczne) to obowiązkowa kontrola pojazdu na stacji SKP - bez ważnego przeglądu nie wolno jeździć. Od 19 września 2025 r. badanie samochodu osobowego kosztuje 149 PLN (na gazie/LPG - 245 PLN) i jest to stała stawka w całej Polsce. Ważne: na stacji NIE ma dopłaty za spóźnienie - to mit powielany przez nieaktualne strony; projekt takiej opłaty nie został uchwalony. Za jazdę bez ważnego przeglądu policja nakłada jednak mandat 1 500-5 000 PLN. Pomagamy ustalić terminy, zapisujemy na SKP, asystujemy i tłumaczymy, a dla sprowadzonego auta wykonujemy badanie zerowe (przegląd zerowy) przed rejestracją.',
    facts: [
      { label: 'Cena (osobowe)', value: '149 PLN', note: 'od 19.09.2025 · LPG - 245 PLN' },
      { label: 'Częstotliwość', value: '3 / 5 / 1 rok', note: '1. do 3 lat, 2. do 5, potem co rok' },
      { label: 'Gdzie', value: 'Stacja SKP', note: 'okresowy - dowolna · zerowy - okręgowa' },
      { label: 'Mandat za jazdę bez badania', value: '1 500-5 000 PLN', note: 'plus ryzyko regresu OC' }
    ],
    grounds: {
      title: 'Kiedy i jaki przegląd jest potrzebny',
      subtitle: 'Częstotliwość zależy od wieku i typu pojazdu. Dla aut sprowadzonych - osobne badanie zerowe przed rejestracją.',
      items: [
        { title: 'Przegląd okresowy auta osobowego', desc: '1. raz - przed upływem 3 lat od pierwszej rejestracji, 2. - przed upływem 5 lat (i w ciągu 2 lat od poprzedniego), dalej - co rok. Można go zrobić na dowolnej podstawowej (podstawowa) stacji SKP.' },
        { title: 'Auta na gazie (LPG/CNG), taksówki, nauka jazdy', desc: 'Dla nich przegląd jest zawsze coroczny, niezależnie od wieku. To samo dotyczy zarobkowego przewozu osób, pojazdów uprzywilejowanych i przewozu materiałów niebezpiecznych. Badanie LPG jest droższe: 245 PLN.' },
        { title: 'Badanie zerowe przy sprowadzeniu', desc: 'Auto sprowadzone z zagranicy przechodzi przegląd zerowy w okręgowej (okręgowa) stacji SKP przed rejestracją - to potwierdzenie zdatności do ruchu na polskich drogach. Obowiązkowe do rejestracji.' },
        { title: 'Przegląd po montażu instalacji LPG', desc: 'Po założeniu instalacji gazowej potrzebne jest badanie dodatkowe z wpisem zmian do dowodu rejestracyjnego (dowód rejestracyjny). Wykonuje się je w okręgowej SKP.' },
        { title: 'Badanie powtórne po usterce', desc: 'Jeśli stacja stwierdzi usterki, auto trafia do naprawy i na ponowne badanie (21-55 PLN). Pomagamy zrozumieć wynik i przejść badanie powtórnie.' },
        { title: 'Auta na zagranicznych (ukraińskich) tablicach', desc: 'Pojazdy na tablicach spoza UE nie muszą obecnie przechodzić polskiego przeglądu (Konwencja wiedeńska). Trwają jednak prace nad projektem (UC95), który może to zmienić dla aut przebywających w Polsce ponad rok - śledzimy status.' }
      ]
    },
    timeline: {
      title: 'Jak pomagamy przy przeglądzie',
      subtitle: 'Okresowy - w dniu zapisu. Zerowy przy sprowadzeniu - ustalamy z okręgową SKP, zwykle 1-2 dni.',
      steps: [
        { title: 'Konsultacja', duration: '15 min', desc: 'Sprawdzamy wiek i typ auta (benzyna/LPG, osobowe/inne), liczymy termin kolejnego przeglądu, ustalamy rodzaj badania.' },
        { title: 'Zapis na stację SKP', duration: '1 dzień', desc: 'Dobieramy dogodną stację (podstawową lub okręgową dla zerowego/LPG), zapisujemy na godzinę. Można podejść do 30 dni wcześniej bez utraty terminu.' },
        { title: 'Asysta i tłumaczenie', duration: '30-60 min', desc: 'W razie potrzeby spotykamy się na stacji, tłumaczymy rozmowę z diagnostą, pomagamy z dokumentami i płatnością.' },
        { title: 'Wynik i wpis', duration: 'tego samego dnia', desc: 'Po pozytywnym wyniku - wpis o przeglądzie w systemie CEPiK i w dowodzie rejestracyjnym. Ustawiamy przypomnienie o kolejnym terminie.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Minimum - dowód rejestracyjny. Reszta zależnie od sytuacji.',
      items: [
        'Dowód rejestracyjny (dowód rejestracyjny) lub pozwolenie czasowe - obowiązkowo',
        'Polisa OC - warto mieć przy sobie',
        'Do badania zerowego - dokumenty sprowadzenia i wyrejestrowania',
        'Do auta z LPG - dokumenty montażu instalacji gazowej',
        'Paszport - do identyfikacji, jeśli wymagany'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Honorarium za zapis, asystę i tłumaczenie. Sam przegląd opłaca się na stacji według stałej stawki.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '15 minut · obliczenie terminu i rodzaju' },
        { label: 'Zapis + asysta + tłumaczenie', value: 'od 150 PLN', note: 'Przegląd okresowy' },
        { label: 'Badanie zerowe przy sprowadzeniu', value: 'od 250 PLN', note: 'Okręgowa SKP · przed rejestracją' }
      ],
      note: 'Powyżej honoraria LegalWin. Sam przegląd opłaca się na stacji według stałej stawki państwowej: osobowe - 149 PLN (od 19.09.2025), na gazie/LPG - 245 PLN, powtórne - 21-55 PLN. Na stacji NIE ma dopłaty za spóźnienie. Opłaty „+1 PLN CEPiK" już nie ma (zniesiona).'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym (art. 81 - okresowe badania techniczne)',
        'Rozporządzenie ws. opłat za badania techniczne - Dz.U. 2025 poz. 1223 (149 PLN od 19.09.2025)',
        'Rozporządzenie ws. zakresu i sposobu przeprowadzania badań technicznych',
        'Badanie zerowe pojazdu sprowadzonego z zagranicy - przed pierwszą rejestracją',
        'CEPiK - centralna ewidencja pojazdów (rejestr wyników badań)'
      ]
    },
    faq: [
      { q: 'Ile kosztuje przegląd techniczny w 2025-2026 roku?', a: 'Od 19 września 2025 r. przegląd auta osobowego kosztuje 149 PLN (wcześniej 98 PLN). Auto na gazie (LPG/CNG) - 245 PLN. Motocykl - 94 PLN, badanie powtórne - 21-55 PLN. Ceny są stałe w całej Polsce i takie same na każdej stacji. Opłaty „+1 PLN CEPiK" już nie ma.' },
      { q: 'Co ile lat trzeba robić przegląd techniczny?', a: 'Dla auta osobowego: 1. przegląd - przed upływem 3 lat od pierwszej rejestracji, 2. - przed upływem 5 lat, potem - co rok. Dla aut na gazie, taksówek, nauki jazdy i przewozów zarobkowych - zawsze co rok. Na badanie można podejść do 30 dni wcześniej, nie tracąc terminu kolejnego.' },
      { q: 'Czy można jechać na przegląd po terminie i jaki grozi mandat?', a: 'Autem z nieważnym przeglądem nie wolno jeździć - również w drodze na samą stację. Za jazdę bez ważnego badania policja nakłada mandat 1 500-5 000 PLN, a fakt trafia do CEPiK. Najbezpieczniej dojechać na lawecie albo umówić termin tak, by nie dopuścić do przeterminowania. Przy kolizji z Twojej winy bez ważnego badania możliwy jest też regres ubezpieczyciela.' },
      { q: 'Czy na stacji jest dopłata (podwójna opłata) za spóźniony przegląd?', a: 'Nie. To popularny mit - wiele nieaktualnych stron pisze o „podwójnej opłacie" lub 198 PLN za spóźnione badanie. Taka opłata była jedynie projektem i NIE została uchwalona. Na stacji płacisz zwykłe 149 PLN niezależnie od tego, o ile się spóźniłeś. Karze natomiast policja - za samą jazdę z nieważnym przeglądem.' },
      { q: 'Ile kosztuje przegląd auta na LPG?', a: 'Badanie auta z instalacją gazową (LPG/CNG) kosztuje 245 PLN - drożej niż zwykłe 149 PLN, bo obejmuje dodatkową kontrolę instalacji. Auto na gazie trzeba badać zawsze co rok, niezależnie od wieku. Po samym montażu instalacji gazowej potrzebne jest dodatkowo badanie z wpisem zmian do dowodu rejestracyjnego - wykonuje je stacja okręgowa (okręgowa).' },
      { q: 'Czym jest badanie zerowe przy sprowadzeniu auta?', a: 'Przegląd zerowy to obowiązkowe badanie techniczne auta sprowadzonego z zagranicy, wykonywane w okręgowej (okręgowa) stacji SKP przed pierwszą rejestracją w Polsce. Potwierdza, że pojazd jest zdatny do ruchu na polskich drogach. Bez niego nie da się zarejestrować sprowadzonego auta - robimy je w połączeniu z rejestracją.' },
      { q: 'Jakie dokumenty są potrzebne na przegląd?', a: 'Obowiązkowo - dowód rejestracyjny (dowód rejestracyjny) lub pozwolenie czasowe (pozwolenie czasowe). Polisę OC warto mieć przy sobie. Do badania zerowego przy sprowadzeniu - dokumenty sprowadzenia i wyrejestrowania, do auta z LPG - dokumenty montażu instalacji gazowej.' },
      { q: 'Co, jeśli auto nie przejdzie przeglądu - ile kosztuje badanie powtórne?', a: 'Jeśli stacja stwierdzi usterki, auto trafia do naprawy, a następnie na badanie powtórne, które kosztuje 21-55 PLN. Pomagamy zrozumieć wynik z dowodu i przejść badanie ponownie. Przegląd okresowy zrobisz na dowolnej podstawowej (podstawowa) stacji SKP w całym kraju, niezależnie od miejsca rejestracji auta.' }
    ],
    related: ['rejestracja-pojazdu', 'ubezpieczenie-oc-ac', 'wymiana-prawa-jazdy'],
    ctaTitle: 'Pomożemy przejść przegląd bez nerwów',
    ctaSubtitle: 'Bezpłatna konsultacja: policzymy termin, dobierzemy stację, zapiszemy i będziemy asystować z tłumaczeniem. Dla sprowadzonego auta wykonamy badanie zerowe przed rejestracją. Tylko aktualne ceny i przepisy 2025-2026.'
  },
  en: {
    slug: 'przeglad-techniczny',
    group: 'auto',
    icon: 'car',
    badge: 'SKP · 149 PLN · 2025',
    title: 'Vehicle technical inspection (przegląd techniczny)',
    subtitle: 'Booking, on-site assistance and translation at the SKP station - plus the import "zero" inspection',
    lead: 'The technical inspection (badanie techniczne) is a mandatory vehicle check at an SKP station (Stacja Kontroli Pojazdów - vehicle inspection station); you cannot drive without a valid one. From 19 September 2025 a passenger-car inspection costs 149 PLN (245 PLN on LPG) and the rate is fixed nationwide. Important: there is NO late surcharge at the station - that is a myth recycled by outdated sites; the proposed fee was never enacted. But driving without a valid inspection gets you a police fine of 1 500-5 000 PLN. We help you work out the dates, book the SKP slot, attend with you and translate, and for an imported car we run the "zero" inspection (przegląd zerowy) before registration.',
    facts: [
      { label: 'Price (passenger car)', value: '149 PLN', note: 'since 19.09.2025 · LPG - 245 PLN' },
      { label: 'Frequency', value: '3 / 5 / 1 year', note: '1st before 3 yrs, 2nd before 5, then yearly' },
      { label: 'Where', value: 'SKP station', note: 'periodic - any · zero - okręgowa (district)' },
      { label: 'Fine for driving without it', value: '1 500-5 000 PLN', note: 'plus OC insurance regress risk' }
    ],
    grounds: {
      title: 'When you need an inspection and which kind',
      subtitle: 'Frequency depends on the age and type of the vehicle. Imported cars need a separate "zero" inspection before registration.',
      items: [
        { title: 'Periodic inspection of a passenger car', desc: '1st time - before 3 years from first registration, 2nd - before 5 years (and within 2 years of the previous one), then annually. You can do it at any basic (podstawowa) SKP station.' },
        { title: 'LPG/CNG cars, taxis, driving-school cars', desc: 'For these the inspection is always annual, regardless of age. The same goes for paid passenger transport, emergency vehicles and dangerous-goods transport. The LPG check costs more: 245 PLN.' },
        { title: '"Zero" inspection on import', desc: 'A car imported from abroad goes through the przegląd zerowy at a district (okręgowa) SKP station before registration - confirmation that it is fit for Polish roads. Mandatory to register it.' },
        { title: 'Inspection after fitting LPG', desc: 'After installing a gas system you need an additional inspection with the change entered into the registration document (dowód rejestracyjny). Done at a district SKP.' },
        { title: 'Re-inspection after a defect', desc: 'If the station finds faults, the car goes for repair and a re-check (21-55 PLN). We help you understand the report and pass the re-inspection.' },
        { title: 'Cars on foreign (Ukrainian) plates', desc: 'Vehicles on non-EU plates currently do not have to undergo a Polish inspection (Vienna Convention). However, a draft law (UC95) is in progress that could change this for cars present in Poland for over a year - we track its status.' }
      ]
    },
    timeline: {
      title: 'How we help with the inspection',
      subtitle: 'Periodic - on the day of booking. The import "zero" inspection - arranged with a district SKP, usually 1-2 days.',
      steps: [
        { title: 'Consultation', duration: '15 min', desc: 'We check the age and type of the car (petrol/LPG, passenger/other), calculate the next inspection date and decide which type of check applies.' },
        { title: 'Booking the SKP station', duration: '1 day', desc: 'We pick a convenient station (basic, or district for the zero/LPG check) and book a slot. You can come up to 30 days early without losing your date.' },
        { title: 'On-site assistance and translation', duration: '30-60 min', desc: 'If needed we meet you at the station, translate the conversation with the diagnostician and help with documents and payment.' },
        { title: 'Result and entry', duration: 'same day', desc: 'On a pass - the inspection is recorded in the CEPiK system and in the dowód rejestracyjny. We set a reminder for the next date.' }
      ]
    },
    documents: {
      title: 'What we need from you',
      subtitle: 'Minimum - the registration document. The rest depends on your situation.',
      items: [
        'Registration document (dowód rejestracyjny) or temporary permit (pozwolenie czasowe) - mandatory',
        'OC insurance policy - good to have with you',
        'For the "zero" inspection - import and deregistration documents',
        'For an LPG car - documents on the gas system installation',
        'Passport - for identification, if required'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Fee for the booking, attendance and translation. The inspection itself is paid to the station at the fixed rate.',
      items: [
        { label: 'Consultation', value: 'Free', note: '15 minutes · date and type calculation' },
        { label: 'Booking + attendance + translation', value: 'from 150 PLN', note: 'Periodic inspection' },
        { label: '"Zero" inspection on import', value: 'from 250 PLN', note: 'District SKP · before registration' }
      ],
      note: 'These are LegalWin fees. The inspection itself is paid to the station at the fixed state rate: passenger car - 149 PLN (since 19.09.2025), LPG - 245 PLN, re-inspection - 21-55 PLN. There is NO late surcharge at the station. The "+1 PLN CEPiK" fee no longer exists (abolished).'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym (art. 81 - periodic technical inspections)',
        'Rozporządzenie ws. opłat za badania techniczne - Dz.U. 2025 poz. 1223 (149 PLN from 19.09.2025)',
        'Rozporządzenie ws. zakresu i sposobu przeprowadzania badań technicznych (scope and method of inspections)',
        'Badanie zerowe of a vehicle imported from abroad - before the first registration',
        'CEPiK - the central vehicle register (record of inspection results)'
      ]
    },
    faq: [
      { q: 'How much does a car technical inspection cost in Poland in 2025-2026?', a: 'From 19 September 2025 a passenger-car inspection costs 149 PLN (previously 98 PLN). An LPG/CNG car - 245 PLN. Motorcycle - 94 PLN, re-inspection - 21-55 PLN. Prices are fixed nationwide and identical at every station. The "+1 PLN CEPiK" fee no longer exists.' },
      { q: 'What is an SKP station and where do I get the inspection?', a: 'SKP (Stacja Kontroli Pojazdów) is a vehicle inspection station - the only place where a Polish inspection is legally done. A periodic inspection can be done at any basic (podstawowa) station across the country, regardless of where the car is registered. The "zero" inspection on import and the check after fitting LPG are done only by district (okręgowa) stations. We pick a convenient one and book it for you.' },
      { q: 'How often does a car need an inspection in Poland?', a: 'For a passenger car: the 1st inspection - before 3 years from first registration, the 2nd - before 5 years, then annually. For LPG cars, taxis, driving-school and commercial-transport vehicles - always annually. You can come up to 30 days early without losing your next date.' },
      { q: 'What is the fine for driving without a valid inspection?', a: 'You may not drive with an expired inspection. The police impose a fine of 1 500-5 000 PLN and the fact is recorded in CEPiK. On top of that, in an at-fault collision without a valid inspection the insurer may pursue regress. If faults are found - repair and a re-inspection (21-55 PLN).' },
      { q: 'Is there a late surcharge for an overdue inspection at the station?', a: 'No. This is a common myth - many outdated sites mention a "double fee" or 198 PLN for an overdue inspection. That fee was only a draft and was NOT enacted. At the station you pay the normal 149 PLN regardless of how overdue you are. It is the police who fine you - for driving with an expired inspection.' },
      { q: 'I imported a car - what inspection do I need before registering it?', a: 'An imported car needs the "zero" inspection (przegląd zerowy) before its first registration in Poland. It is a mandatory technical inspection carried out at a district (okręgowa) SKP station that confirms the vehicle is fit for use on Polish roads. Without it you cannot register the car - we run it together with the registration.' },
      { q: 'Do I need an inspection for a car on foreign (non-EU) plates?', a: 'Currently cars on non-EU plates do not have to undergo a Polish inspection - the Vienna Convention applies, provided the vehicle meets international safety standards. However, a draft law (UC95) is in progress that could introduce mandatory registration and inspection for non-EU cars present in Poland for over a year. As of mid-2026 it has not been enacted - we track its status and will warn you in advance.' },
      { q: 'What documents do I need to bring to the inspection?', a: 'Mandatory - the registration document (dowód rejestracyjny) or temporary permit (pozwolenie czasowe). It is good to have your OC insurance policy with you. For the "zero" inspection on import - import and deregistration documents; for an LPG car - documents on the gas system installation.' }
    ],
    related: ['rejestracja-pojazdu', 'ubezpieczenie-oc-ac', 'wymiana-prawa-jazdy'],
    ctaTitle: 'We will get you through the inspection stress-free',
    ctaSubtitle: 'Free consultation: we calculate the date, pick a station, book it and attend with translation. For an imported car we run the "zero" inspection before registration. Only current 2025-2026 prices and rules.'
  },
  tr: {
    slug: 'przeglad-techniczny',
    group: 'auto',
    icon: 'car',
    badge: 'SKP · 149 PLN · 2025',
    title: 'Araç teknik muayenesi (przegląd techniczny)',
    subtitle: 'SKP istasyonunda randevu, eşlik ve tercüme - ve araç ithalinde "sıfır" muayene',
    lead: 'Teknik muayene (badanie techniczne), aracın SKP istasyonunda (Stacja Kontroli Pojazdów - araç muayene istasyonu) yapılan zorunlu kontrolüdür; geçerli muayene olmadan araç kullanılamaz. 19 Eylül 2025\'ten itibaren binek araç muayenesi 149 PLN\'dir (gazda/LPG - 245 PLN) ve bu, tüm Polonya\'da sabit bir ücrettir. Önemli: istasyonda gecikme için ek ücret YOKTUR - bu, güncelliğini yitirmiş sitelerin yaydığı bir efsanedir; böyle bir ücret tasarısı kabul edilmemiştir. Ancak geçerli muayenesi olmadan araç kullanmanın cezası polis tarafından 1 500-5 000 PLN olarak kesilir. Tarihleri hesaplamanıza yardımcı olur, SKP\'ye randevu alır, eşlik eder ve tercüme yaparız; ithal edilen araç için ise tescilden önce "sıfır" muayeneyi (przegląd zerowy) yaparız.',
    facts: [
      { label: 'Fiyat (binek)', value: '149 PLN', note: '19.09.2025\'ten · LPG - 245 PLN' },
      { label: 'Periyot', value: '3 / 5 / 1 yıl', note: '1.si 3 yıla kadar, 2.si 5 yıla, sonra her yıl' },
      { label: 'Nerede', value: 'SKP istasyonu', note: 'periyodik - herhangi · sıfır - okręgowa' },
      { label: 'Muayenesiz araç kullanma cezası', value: '1 500-5 000 PLN', note: 'artı OC rücu riski' }
    ],
    grounds: {
      title: 'Ne zaman ve hangi muayene gerekir',
      subtitle: 'Periyot, aracın yaşına ve tipine bağlıdır. İthal araçlar için tescilden önce ayrı bir "sıfır" muayene gerekir.',
      items: [
        { title: 'Binek aracın periyodik muayenesi', desc: '1. kez - ilk tescilden itibaren 3 yıl dolmadan, 2. - 5 yıl dolmadan (ve bir öncekinden itibaren 2 yıl içinde), sonra - her yıl. Herhangi bir temel (podstawowa) SKP istasyonunda yapılabilir.' },
        { title: 'Gazlı (LPG/CNG) araçlar, taksiler, sürücü kursu araçları', desc: 'Bunlar için muayene yaştan bağımsız olarak her zaman yıllıktır. Aynı durum ücretli yolcu taşımacılığı, öncelikli araçlar ve tehlikeli madde taşımacılığı için geçerlidir. LPG kontrolü daha pahalıdır: 245 PLN.' },
        { title: 'İthalatta "sıfır" muayene', desc: 'Yurt dışından ithal edilen araç, tescilden önce okręgowa (bölge) SKP istasyonunda przegląd zerowy\'den geçer - bu, Polonya yollarına uygunluğun teyididir. Tescil için zorunludur.' },
        { title: 'LPG montajından sonra muayene', desc: 'Gaz sistemi takıldıktan sonra, değişikliğin ruhsata (dowód rejestracyjny) işlenmesiyle birlikte ek bir muayene gerekir. Okręgowa SKP\'de yapılır.' },
        { title: 'Arıza sonrası tekrar muayene', desc: 'İstasyon arıza tespit ederse, araç onarıma ve tekrar kontrole gider (21-55 PLN). Raporu anlamanıza ve tekrar muayeneden geçmenize yardımcı oluruz.' },
        { title: 'Yabancı (Ukrayna) plakalı araçlar', desc: 'AB dışı plakalı araçlar şu anda Polonya muayenesinden geçmek zorunda değildir (Viyana Sözleşmesi). Ancak Polonya\'da bir yıldan fazla bulunan araçlar için bunu değiştirebilecek bir tasarı (UC95) hazırlanmaktadır - durumu takip ediyoruz.' }
      ]
    },
    timeline: {
      title: 'Muayenede nasıl yardımcı oluyoruz',
      subtitle: 'Periyodik - randevu günü. İthalatta sıfır muayene - okręgowa SKP ile ayarlanır, genellikle 1-2 gün.',
      steps: [
        { title: 'Danışmanlık', duration: '15 dk', desc: 'Aracın yaşına ve tipine bakar (benzin/LPG, binek/diğer), bir sonraki muayene tarihini hesaplar, muayene türünü belirleriz.' },
        { title: 'SKP istasyonuna randevu', duration: '1 gün', desc: 'Uygun bir istasyon seçer (temel veya sıfır/LPG için bölge istasyonu) ve saat ayırırız. Tarihi kaybetmeden 30 güne kadar erken gidilebilir.' },
        { title: 'Eşlik ve tercüme', duration: '30-60 dk', desc: 'Gerekirse istasyonda buluşur, diagnostikçiyle görüşmeyi tercüme eder, belgeler ve ödemede yardımcı oluruz.' },
        { title: 'Sonuç ve kayıt', duration: 'aynı gün', desc: 'Olumlu sonuçta - muayene CEPiK sistemine ve ruhsata (dowód rejestracyjny) işlenir. Bir sonraki tarih için hatırlatma kuruyoruz.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Asgari - ruhsat. Gerisi duruma göre.',
      items: [
        'Ruhsat (dowód rejestracyjny) veya geçici izin (pozwolenie czasowe) - zorunlu',
        'OC poliçesi - yanınızda olması iyi olur',
        '"Sıfır" muayene için - ithalat ve tescil silme belgeleri',
        'LPG\'li araç için - gaz sistemi montaj belgeleri',
        'Pasaport - gerekirse kimlik tespiti için'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Randevu, eşlik ve tercüme için bedel. Muayenenin kendisi istasyona sabit tarifeden ödenir.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '15 dakika · tarih ve tür hesabı' },
        { label: 'Randevu + eşlik + tercüme', value: '150 PLN\'den', note: 'Periyodik muayene' },
        { label: 'İthalatta "sıfır" muayene', value: '250 PLN\'den', note: 'Bölge SKP · tescilden önce' }
      ],
      note: 'Belirtilen bedeller LegalWin ücretleridir. Muayenenin kendisi istasyona sabit devlet tarifesinden ödenir: binek - 149 PLN (19.09.2025\'ten), gazda/LPG - 245 PLN, tekrar muayene - 21-55 PLN. İstasyonda gecikme için ek ücret YOKTUR. "+1 PLN CEPiK" ücreti artık yoktur (kaldırıldı).'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym (art. 81 - periyodik teknik muayeneler)',
        'Rozporządzenie ws. opłat za badania techniczne - Dz.U. 2025 poz. 1223 (19.09.2025\'ten 149 PLN)',
        'Rozporządzenie ws. zakresu i sposobu przeprowadzania badań technicznych (muayenelerin kapsamı ve yöntemi)',
        'Yurt dışından ithal edilen aracın badanie zerowe - ilk tescilden önce',
        'CEPiK - merkezi araç kayıt sistemi (muayene sonuçları kaydı)'
      ]
    },
    faq: [
      { q: 'Polonya\'da araç muayenesi 2025-2026\'da ne kadar?', a: '19 Eylül 2025\'ten itibaren binek araç muayenesi 149 PLN\'dir (önceden 98 PLN). Gazlı (LPG/CNG) araç - 245 PLN. Motosiklet - 94 PLN, tekrar muayene - 21-55 PLN. Fiyatlar tüm Polonya\'da sabittir ve her istasyonda aynıdır. "+1 PLN CEPiK" ücreti artık yoktur.' },
      { q: 'SKP nedir ve muayeneyi nerede yaptırırım?', a: 'SKP (Stacja Kontroli Pojazdów), araç muayene istasyonudur - Polonya muayenesinin yasal olarak yapıldığı tek yerdir. Periyodik muayene, aracın nerede tescilli olduğuna bakılmaksızın ülke genelinde herhangi bir temel (podstawowa) istasyonda yapılabilir. İthalatta "sıfır" muayene ve LPG montajından sonraki kontrol yalnızca bölge (okręgowa) istasyonlarında yapılır. Uygun olanı seçer ve sizin için randevu alırız.' },
      { q: 'Araç muayenesi ne sıklıkla yapılmalı?', a: 'Binek araç için: 1. muayene - ilk tescilden itibaren 3 yıl dolmadan, 2. - 5 yıl dolmadan, sonra - her yıl. Gazlı araçlar, taksiler, sürücü kursu ve ticari taşıma araçları için - her zaman yıllık. Bir sonraki tarihi kaybetmeden 30 güne kadar erken gidilebilir.' },
      { q: 'Geçerli muayenesi olmadan araç kullanmanın cezası nedir?', a: 'Geçersiz muayeneyle araç kullanılamaz. Polis 1 500-5 000 PLN ceza keser, bu CEPiK\'e kaydedilir. Ayrıca, geçerli muayene olmadan sizin kusurunuzla bir kazada sigortacı rücuya gidebilir. Arıza tespit edilirse - onarım ve tekrar muayene (21-55 PLN).' },
      { q: 'İstasyonda gecikmiş muayene için ek ücret var mı?', a: 'Hayır. Bu yaygın bir efsanedir - birçok güncel olmayan site, gecikmiş muayene için "çift ücret" veya 198 PLN yazar. Böyle bir ücret yalnızca bir tasarıydı ve kabul EDİLMEDİ. İstasyonda ne kadar geciktiğinize bakılmaksızın normal 149 PLN ödersiniz. Ceza kesen polistir - geçersiz muayeneyle araç kullanmanın kendisi için.' },
      { q: 'LPG\'li araç muayenesi ne kadar?', a: 'Gaz sistemli (LPG/CNG) araç muayenesi 245 PLN\'dir - normal 149 PLN\'den pahalıdır, çünkü gaz sisteminin ek kontrolünü de kapsar. Gazlı araç, yaştan bağımsız olarak her zaman yıllık muayene edilir. Gaz sistemi takıldıktan hemen sonra ise, değişikliğin ruhsata işlendiği ek bir muayene gerekir - bunu bölge (okręgowa) istasyonu yapar.' },
      { q: 'İthal ettiğim aracı tescil etmeden önce hangi muayene gerekir?', a: 'İthal aracın Polonya\'daki ilk tescilinden önce "sıfır" muayene (przegląd zerowy) gerekir. Bu, bölge (okręgowa) SKP istasyonunda yapılan zorunlu bir teknik muayenedir ve aracın Polonya yollarında kullanıma uygun olduğunu teyit eder. Onsuz araç tescil edilemez - tescil ile birlikte yaparız.' },
      { q: 'Yabancı (AB dışı) plakalı araç için muayene gerekir mi?', a: 'Şu anda AB dışı plakalı araçlar Polonya muayenesinden geçmek zorunda değildir - araç uluslararası güvenlik standartlarını karşıladığı sürece Viyana Sözleşmesi geçerlidir. Ancak Polonya\'da bir yıldan fazla bulunan AB dışı araçlar için zorunlu tescil ve muayene getirebilecek bir tasarı (UC95) hazırlanmaktadır. 2026 ortası itibarıyla kabul edilmedi - durumu takip ediyor ve önceden uyarıyoruz.' }
    ],
    related: ['rejestracja-pojazdu', 'ubezpieczenie-oc-ac', 'wymiana-prawa-jazdy'],
    ctaTitle: 'Muayeneden sorunsuz geçmenize yardımcı olalım',
    ctaSubtitle: 'Ücretsiz danışmanlık: tarihi hesaplar, istasyon seçer, randevu alır ve tercümeyle eşlik ederiz. İthal araç için tescilden önce "sıfır" muayeneyi yaparız. Yalnızca güncel 2025-2026 fiyat ve kuralları.'
  },
  uk: {
    slug: 'przeglad-techniczny',
    group: 'auto',
    icon: 'car',
    badge: 'SKP · 149 PLN · 2025',
    title: 'Техогляд (przegląd techniczny)',
    subtitle: 'Запис, супровід і переклад на станції SKP - та «нульовий» техогляд при ввезенні',
    lead: 'Техогляд (badanie techniczne) - обов’язкова перевірка авто на станції SKP, без чинного техогляду їздити не можна. З 19 вересня 2025 року легковий техогляд коштує 149 PLN (на газу/LPG - 245 PLN), і це фіксована ціна по всій Польщі. Важливо: доплати за прострочення на станції НЕМАЄ - це міф, який тиражують застарілі сайти; проєкт такого збору не був ухвалений. Натомість за їзду без чинного техогляду поліція штрафує на 1 500-5 000 PLN. Для авто, ввезеного з України, проводимо «нульовий» техогляд (przegląd zerowy) перед реєстрацією, допомагаємо розібратися в термінах, записуємо на SKP, супроводжуємо та перекладаємо.',
    facts: [
      { label: 'Ціна (легкове)', value: '149 PLN', note: 'з 19.09.2025 · LPG - 245 PLN' },
      { label: 'Періодичність', value: '3 / 5 / 1 рік', note: '1-й до 3 років, 2-й до 5, далі щороку' },
      { label: 'Де', value: 'Станція SKP', note: 'періодичний - будь-яка · «нульовий» - okręgowa' },
      { label: 'Штраф за їзду без ТО', value: '1 500-5 000 PLN', note: 'плюс ризик регресу OC' }
    ],
    grounds: {
      title: 'Коли і який техогляд потрібен',
      subtitle: 'Періодичність залежить від віку й типу авто. Для ввезених машин - окремий «нульовий» техогляд перед реєстрацією.',
      items: [
        { title: 'Періодичний техогляд легкового авто', desc: '1-й раз - до спливу 3 років від дати першої реєстрації, 2-й - до 5 років (і протягом 2 років після попереднього), далі - щороку. Можна пройти на будь-якій базовій (podstawowa) станції SKP.' },
        { title: 'Авто на газу (LPG/CNG), таксі, навчальні', desc: 'Для них техогляд - завжди щорічний, незалежно від віку. Те саме для платних пасажирських перевезень, спецтранспорту, перевезення небезпечних вантажів. LPG-перевірка дорожча: 245 PLN.' },
        { title: '«Нульовий» техогляд при ввезенні', desc: 'Авто, ввезене з-за кордону, проходить przegląd zerowy в окружній (okręgowa) станції SKP до реєстрації - це підтвердження придатності до польських доріг. Обов’язково для постановки на облік.' },
        { title: 'Техогляд після встановлення ГБО', desc: 'Поставили газове обладнання - потрібен позачерговий техогляд із внесенням змін у dowód rejestracyjny. Проводиться в окружній SKP.' },
        { title: 'Повторний техогляд після дефекту', desc: 'Якщо станція знайшла несправності, авто відправляють на ремонт і повторну перевірку (21-55 PLN). Допомагаємо зрозуміти висновок і пройти повторно.' },
        { title: 'Авто на іноземних (українських) номерах', desc: 'Машини на не-ЄС номерах наразі не зобов’язані проходити польський техогляд (Віденська конвенція). Але готується проєкт (UC95), який може це змінити для авто, що перебувають у Польщі понад рік, - стежимо за статусом.' }
      ]
    },
    timeline: {
      title: 'Як ми допомагаємо з техоглядом',
      subtitle: 'Періодичний - у день запису. «Нульовий» при ввезенні - узгоджуємо з окружною SKP, зазвичай 1-2 дні.',
      steps: [
        { title: 'Консультація', duration: '15 хв', desc: 'Дивимося вік і тип авто (бензин/LPG, легкове/інше), рахуємо термін наступного техогляду, визначаємо тип перевірки.' },
        { title: 'Запис на станцію SKP', duration: '1 день', desc: 'Підбираємо зручну станцію (базову або окружну для «нульового»/LPG), записуємо на час. Можна пройти до 30 днів раніше терміну без втрати дати.' },
        { title: 'Супровід і переклад', duration: '30-60 хв', desc: 'За потреби зустрічаємо на станції, перекладаємо спілкування з діагностом, допомагаємо з документами та оплатою.' },
        { title: 'Результат і відмітка', duration: 'того самого дня', desc: 'При успіху - відмітка про техогляд у системі CEPiK і в dowód rejestracyjny. Ставимо нагадування про наступну дату.' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Мінімум - техпаспорт. Решта за ситуацією.',
      items: [
        'Техпаспорт (dowód rejestracyjny) або pozwolenie czasowe - обов’язково',
        'Поліс OC - бажано мати при собі',
        'Для «нульового» техогляду - документи ввезення та зняття з обліку',
        'Для авто з ГБО - документи про встановлення газового обладнання',
        'Закордонний паспорт - для ідентифікації, якщо потрібно'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Гонорар за запис, супровід і переклад. Сам техогляд оплачується станції за фіксованим тарифом.',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '15 хвилин · розрахунок терміну та типу' },
        { label: 'Запис + супровід + переклад', value: 'від 150 PLN', note: 'Періодичний техогляд' },
        { label: '«Нульовий» техогляд при ввезенні', value: 'від 250 PLN', note: 'Окружна SKP · перед реєстрацією' }
      ],
      note: 'Зазначено гонорари LegalWin. Сам техогляд оплачується станції за фіксованим державним тарифом: легкове - 149 PLN (з 19.09.2025), на газу/LPG - 245 PLN, повторний - 21-55 PLN. Доплати за прострочення на станції НЕМАЄ. Збору «+1 PLN CEPiK» більше немає (скасований).'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym (art. 81 - okresowe badania techniczne)',
        'Rozporządzenie ws. opłat za badania techniczne - Dz.U. 2025 poz. 1223 (149 PLN od 19.09.2025)',
        'Rozporządzenie ws. zakresu i sposobu przeprowadzania badań technicznych',
        'Badanie zerowe pojazdu sprowadzonego z zagranicy - przed pierwszą rejestracją',
        'CEPiK - centralna ewidencja pojazdów (rejestr wyników badań)'
      ]
    },
    faq: [
      { q: 'Скільки коштує техогляд у Польщі у 2025-2026 році?', a: 'З 19 вересня 2025 року легковий техогляд коштує 149 PLN (раніше було 98 PLN). Авто на газу (LPG/CNG) - 245 PLN. Мотоцикл - 94 PLN, повторний огляд - 21-55 PLN. Ціни фіксовані по всій Польщі й однакові на будь-якій станції. Збору «+1 PLN CEPiK» більше немає.' },
      { q: 'Чи потрібен техогляд на українських номерах?', a: 'Наразі авто на не-ЄС номерах (зокрема українських) не зобов’язані проходити польський техогляд - діє Віденська конвенція, за умови що авто відповідає міжнародним стандартам безпеки. Але готується законопроєкт (UC95), який може запровадити обов’язкову реєстрацію і техогляд для не-ЄС авто, що перебувають у Польщі понад рік. На середину 2026 року він не ухвалений - стежимо за статусом і попередимо заздалегідь.' },
      { q: 'Як часто потрібно проходити техогляд?', a: 'Для легкового авто: 1-й техогляд - до спливу 3 років від першої реєстрації, 2-й - до 5 років, потім - щороку. Для авто на газу, таксі, навчальних і комерційних перевезень - завжди щороку. Можна пройти до 30 днів раніше терміну, не втрачаючи дату наступного.' },
      { q: 'Який штраф за їзду без чинного техогляду?', a: 'З простроченим техоглядом їздити не можна. Поліція штрафує на 1 500-5 000 PLN, результат фіксується в CEPiK. Крім того, при ДТП з вашої вини без чинного техогляду можливий регрес з боку страховика. Якщо знайдено дефекти - ремонт і повторна перевірка (21-55 PLN).' },
      { q: 'Чи є доплата за прострочення техогляду на станції?', a: 'Ні. Це поширений міф - на багатьох застарілих сайтах пишуть про «подвійну оплату» або 198 PLN за прострочений огляд. Такий збір був лише проєктом і НЕ був ухвалений. На станції ви платите звичайні 149 PLN незалежно від того, на скільки прострочили. Але за саму їзду з простроченим техоглядом штрафує поліція.' },
      { q: 'Що таке «нульовий» техогляд при ввезенні авто?', a: 'Przegląd zerowy - це обов’язковий технічний огляд авто, ввезеного з-за кордону, який проводять в окружній (okręgowa) станції SKP перед першою реєстрацією в Польщі. Він підтверджує, що машина придатна до експлуатації на польських дорогах. Без нього зареєструвати ввезене авто не можна - проводимо його у зв’язці з реєстрацією.' },
      { q: 'Де пройти техогляд і що таке SKP?', a: 'SKP (Stacja Kontroli Pojazdów) - станція контролю транспортних засобів, єдине місце, де легально проходять польський техогляд. Періодичний техогляд можна пройти на будь-якій базовій (podstawowa) станції по всій країні, незалежно від місця реєстрації авто. «Нульовий» огляд при ввезенні та перевірку після встановлення LPG проводять лише окружні (okręgowa) станції. Підбираємо зручну й записуємо.' },
      { q: 'Які документи потрібні для техогляду?', a: 'Обов’язково - техпаспорт (dowód rejestracyjny) або тимчасовий дозвіл (pozwolenie czasowe). Поліс OC бажано мати при собі. Для «нульового» техогляду при ввезенні - документи ввезення та зняття з обліку, для авто з ГБО - документи про встановлення газового обладнання.' }
    ],
    related: ['rejestracja-pojazdu', 'ubezpieczenie-oc-ac', 'wymiana-prawa-jazdy'],
    ctaTitle: 'Допоможемо пройти техогляд без нервів',
    ctaSubtitle: 'Безкоштовна консультація: порахуємо термін, підберемо станцію, запишемо та супроводимо з перекладом. Для ввезеного авто проведемо «нульовий» техогляд перед реєстрацією. Тільки актуальні ціни та правила 2025-2026.'
  }
};

export default przegladTechniczny;
