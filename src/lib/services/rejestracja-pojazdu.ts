import type { ServiceEntry } from './types';

const rejestracjaPojazdu: ServiceEntry = {
  ru: {
    slug: 'rejestracja-pojazdu',
    group: 'auto',
    icon: 'car',
    badge: 'Wydział Komunikacji · 30 дней · 2025',
    title: 'Регистрация и переоформление авто',
    subtitle: 'Постановка на учёт и смена собственника в Польше - для иностранцев, без мельдунка',
    lead: 'С 2024 года в Польше нет «уведомления о покупке» - машину нужно именно зарегистрировать в течение 30 дней после покупки или растаможки (для салонов - 90 дней). Просрочка - штраф от 500 PLN, а после 180 дней - до 1 000 PLN. Иностранцу мельдунок для регистрации не нужен (адрес подтверждаем договором аренды или работы), PESEL желателен, а все документы не на польском требуют присяжного перевода. Берём на себя весь процесс: проверку документов продавца, присяжные переводы, заявление в wydział komunikacji, оплату сборов, временные и постоянные номера - а для ввезённых авто из Украины проводим через «нулевой» техосмотр, акцизу и таможню.',
    facts: [
      { label: 'Срок регистрации', value: '30 дней', note: 'после покупки / растаможки · салоны - 90' },
      { label: 'Сбор (новые номера)', value: '~160 PLN', note: 'dowód + tablice + nalepka · 2025' },
      { label: 'Где', value: 'Wydział Komunikacji', note: 'starostwo / urząd miasta · с 2025 - любой' },
      { label: 'Штраф за просрочку', value: '500-1 000 PLN', note: 'свыше 180 дней - удваивается' }
    ],
    grounds: {
      title: 'Какие ситуации закрываем',
      subtitle: 'Регистрация в Польше отличается от привычной по СНГ - правила менялись в 2024-2025, а для иностранцев есть нюансы по адресу и переводам.',
      items: [
        { title: 'Переоформление б/у авто (купля-продажа)', desc: 'Покупка с рук внутри Польши: проверяем umowa kupna-sprzedaży или fakturę VAT, переоформляем на нового собственника, меняем или сохраняем номера. Продавец отдельно подаёт zgłoszenie zbycia (30 дней, иначе 250 PLN).' },
        { title: 'Первая регистрация нового авто', desc: 'Авто из салона: faktura, świadectwo zgodności WE, оплата сборов. Салон обычно даёт 90 дней, но затягивать не стоит - без регистрации нет легальной эксплуатации.' },
        { title: 'Авто, ввезённое из ЕС', desc: 'Из Германии, Литвы и др.: нужен документ снятия с учёта, перевод, badanie techniczne и оплата. Без таможни (внутри ЕС), но с регистрацией в 30 дней.' },
        { title: 'Авто, ввезённое из Украины / не-ЕС', desc: 'Полный цикл: таможенное оформление, акциза AKC-U/S (3,1% до 2000 cm³ или 18,6% свыше), «нулевой» техосмотр в okręgowa SKP, переводы и регистрация. Возможно освобождение от пошлины по «mienie przesiedleńcze» - проверяем индивидуально.' },
        { title: 'Иностранец без мельдунка / без PESEL', desc: 'Регистрировать можно: адрес подтверждаем договором аренды или работы. PESEL не обязателен, но упрощает оплаты и mObywatel - помогаем оформить параллельно.' },
        { title: 'Смена данных в dowód rejestracyjny', desc: 'Изменение адреса, фамилии, установка ГБО (LPG), замена утерянного техпаспорта или номеров - тоже через wydział komunikacji.' }
      ]
    },
    timeline: {
      title: 'Как мы оформляем регистрацию',
      subtitle: 'Внутри Польши - обычно 1-3 рабочих дня до временного техпаспорта. Ввоз из не-ЕС с таможней и акцизой - до 2-3 недель.',
      steps: [
        { title: 'Консультация', duration: '20 мин', desc: 'Смотрим происхождение авто (Польша / ЕС / не-ЕС), пакет документов, ваш статус. Считаем сборы и составляем план.' },
        { title: 'Проверка документов', duration: '1 день', desc: 'Проверяем dowód, kartę pojazdu, договор/фактуру, OC, badanie techniczne. Ловим риски: залоги, расхождения VIN, отсутствие снятия с учёта.' },
        { title: 'Присяжные переводы', duration: '1-2 дня', desc: 'Документы не на польском (договор, техпаспорт страны-экспортёра) переводит tłumacz przysięgły - обязательное требование urzędu.' },
        { title: 'Таможня и акциза (только не-ЕС)', duration: '3-10 дней', desc: 'Для авто из Украины и др.: таможенная очистка, декларация AKC-U/S в течение 14 дней, оплата акцизы. Проверяем право на освобождение.' },
        { title: '«Нулевой» техосмотр (при ввозе)', duration: '1 день', desc: 'Импортированное авто проходит przegląd zerowy в okręgowa SKP до регистрации - подтверждение пригодности к польским дорогам.' },
        { title: 'Заявление в wydział komunikacji', duration: '1 день', desc: 'Подаём wniosek o rejestrację, оплачиваем сборы (~160 PLN за новые номера). Получаем pozwolenie czasowe - можно ездить сразу.' },
        { title: 'Постоянный техпаспорт и номера', duration: '14-30 дней', desc: 'Urząd выдаёт dowód rejestracyjny stały и nalepkę legalizacyjną. Забираем за вас или приходите сами.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Зависит от происхождения авто. Точный список - после консультации.',
      items: [
        'Договор купли-продажи (umowa kupna-sprzedaży) или faktura VAT',
        'Действующий техпаспорт (dowód rejestracyjny) и karta pojazdu (если есть)',
        'Документ снятия с учёта - для авто из-за границы',
        'Действующее badanie techniczne (или проведём «нулевой» техосмотр)',
        'Полис OC на момент регистрации (оформим, если нужно)',
        'Загранпаспорт + karta pobytu / другой документ легального пребывания',
        'Подтверждение адреса в Польше (договор аренды или работы) - мельдунок не обязателен',
        'PESEL - желателен, помогаем оформить',
        'Для не-ЕС: таможенные документы (SAD) и декларация акцизы AKC-U/S',
        'Присяжные переводы всех документов не на польском - готовим мы'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированный гонорар за сопровождение. Госпошлины, акциза и переводы - отдельно по факту.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '20 минут · разбор документов и расчёт' },
        { label: 'Переоформление б/у авто под ключ', value: 'от 400 PLN', note: 'Проверка, заявление, сборы, сопровождение' },
        { label: 'Первая регистрация / ввоз из ЕС', value: 'от 600 PLN', note: 'С переводами и badanie techniczne' },
        { label: 'Ввоз из не-ЕС (Украина и др.)', value: 'от 1 200 PLN', note: 'Таможня, акциза, «нулевой» техосмотр, регистрация' }
      ],
      note: 'Указаны гонорары LegalWin. Сборы urzędu (~160 PLN за новые номера и dowód, меньше при сохранении номеров), присяжный перевод (~80-200 PLN), badanie techniczne (149 PLN), акциза (3,1% или 18,6% от стоимости для не-ЕС) - отдельно. В 2026 урядовые сборы растут (dowód → 62,50 PLN, tablice → 92,50 PLN).'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym (art. 71-73, 140mb)',
        'Nowelizacja z 2024 r. - obowiązek rejestracji w 30 dni (zniesienie zgłoszenia nabycia)',
        'Rozporządzenie Ministra Infrastruktury ws. rejestracji i oznaczania pojazdów (opłaty 2025)',
        'Ustawa z 6 grudnia 2008 r. o podatku akcyzowym (AKC-U/S - dla pojazdów spoza UE)',
        'Prawo celne - odprawa i ewentualne mienie przesiedleńcze (zwolnienie z cła)'
      ]
    },
    faq: [
      { q: 'Сколько дней даётся на регистрацию авто после покупки?', a: 'С 2024 года - 30 дней с момента покупки, ввоза или растаможки (для автосалонов - 90 дней). Раньше было «уведомление о покупке», теперь нужна именно полная регистрация. Просрочка карается штрафом, который налагает starosta.' },
      { q: 'Какой штраф, если не зарегистрировать вовремя?', a: 'Для частного лица - 500 PLN при просрочке, а если затянуть свыше 180 дней - до 1 000 PLN. Для салонов и перекупов суммы вдвое выше (1 000 / 2 000 PLN). Поэтому регистрацию лучше не откладывать.' },
      { q: 'Можно ли зарегистрировать авто без мельдунка и без PESEL?', a: 'Да. Мельдунок для регистрации не требуется - адрес в Польше подтверждаем договором аренды или трудовым договором. PESEL формально не обязателен, но сильно упрощает оплаты и доступ в mObywatel, поэтому рекомендуем оформить (помогаем).' },
      { q: 'Сколько стоит переоформление в 2025 году?', a: 'Урядовый сбор за комплект с новыми номерами - около 160 PLN (dowód rejestracyjny 54 + tablice 80 + pozwolenie czasowe 13,50 + nalepka 12,50). При сохранении старых номеров - меньше. opłata ewidencyjna отменена. В 2026 сборы повышаются. Наш гонорар - от 400 PLN под ключ.' },
      { q: 'Нужен ли присяжный перевод документов на авто?', a: 'Да, если документы (договор, иностранный техпаспорт) не на польском языке - urząd принимает только tłumaczenie przysięgłe. Делаем у присяжного переводчика, стоимость ~80-200 PLN в зависимости от объёма.' },
      { q: 'Как поставить на учёт авто, ввезённое из Украины?', a: 'Это полный цикл: таможенное оформление, акциза AKC-U/S (3,1% для двигателей до 2000 cm³ и 18,6% свыше), «нулевой» техосмотр в okręgowa SKP, присяжные переводы и регистрация в wydział komunikacji. Возможно освобождение от пошлины по «mienie przesiedleńcze» - проверяем условия индивидуально.' },
      { q: 'Можно ли зарегистрировать авто онлайн через mObywatel?', a: 'Полноценная онлайн-регистрация в 2025 году пока ограничена - часть действий доступна, но в большинстве случаев нужен визит в urząd. Полный электронный путь закладывается законом с 2027 года. Мы подаём документы лично, чтобы не зависеть от частичной цифровизации.' },
      { q: 'Продал машину - нужно ли что-то делать?', a: 'Да. Продавец обязан подать zgłoszenie zbycia pojazdu в течение 30 дней, иначе штраф 250 PLN. Это отдельная процедура от регистрации покупателем. Помогаем и продавцам - оформляем уведомление и снимаем с вас ответственность за чужие штрафы.' }
    ],
    related: ['ubezpieczenie-oc-ac', 'przeglad-techniczny', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Зарегистрируем авто за вас - в срок и без ошибок',
    ctaSubtitle: 'Бесплатная консультация: проверим документы, посчитаем сборы и акцизу, скажем точный срок. Внутри Польши - временный техпаспорт за 1-3 дня. Ввоз из не-ЕС - до 2-3 недель под ключ.'
  },
  pl: {
    slug: 'rejestracja-pojazdu',
    group: 'auto',
    icon: 'car',
    badge: 'Wydział Komunikacji · 30 dni · 2025',
    title: 'Rejestracja i przerejestrowanie pojazdu',
    subtitle: 'Rejestracja i zmiana właściciela w Polsce - dla cudzoziemców, bez meldunku',
    lead: 'Od 2024 roku nie ma już „zgłoszenia nabycia” - pojazd trzeba zarejestrować w ciągu 30 dni od zakupu lub odprawy celnej (salony - 90 dni). Spóźnienie to kara od 500 PLN, a po 180 dniach - nawet 1 000 PLN. Cudzoziemiec nie potrzebuje meldunku do rejestracji (adres potwierdzamy umową najmu lub o pracę), PESEL jest wskazany, a wszystkie dokumenty w języku innym niż polski wymagają tłumaczenia przysięgłego. Bierzemy na siebie cały proces: weryfikację dokumentów sprzedającego, tłumaczenia przysięgłe, wniosek do wydziału komunikacji, opłaty, tablice tymczasowe i stałe - a dla aut sprowadzonych z Ukrainy przeprowadzamy przegląd zerowy, akcyzę i odprawę celną.',
    facts: [
      { label: 'Termin rejestracji', value: '30 dni', note: 'od zakupu / odprawy celnej · salony - 90' },
      { label: 'Opłata (nowe tablice)', value: '~160 PLN', note: 'dowód + tablice + nalepka · 2025' },
      { label: 'Gdzie', value: 'Wydział Komunikacji', note: 'starostwo / urząd miasta · od 2025 - dowolny' },
      { label: 'Kara za zwłokę', value: '500-1 000 PLN', note: 'powyżej 180 dni - podwojona' }
    ],
    grounds: {
      title: 'Jakie sprawy prowadzimy',
      subtitle: 'Rejestracja w Polsce różni się od tej znanej spoza UE - przepisy zmieniały się w 2024-2025, a dla cudzoziemców są niuanse co do adresu i tłumaczeń.',
      items: [
        { title: 'Przerejestrowanie auta używanego (kupno-sprzedaż)', desc: 'Zakup z rynku wtórnego w Polsce: sprawdzamy umowę kupna-sprzedaży lub fakturę VAT, przerejestrowujemy na nowego właściciela, zmieniamy lub zachowujemy tablice. Sprzedający osobno składa zgłoszenie zbycia (30 dni, inaczej 250 PLN).' },
        { title: 'Pierwsza rejestracja nowego auta', desc: 'Auto z salonu: faktura, świadectwo zgodności WE, opłaty. Salon zwykle daje 90 dni, ale nie warto zwlekać - bez rejestracji nie ma legalnej eksploatacji.' },
        { title: 'Auto sprowadzone z UE', desc: 'Z Niemiec, Litwy i in.: potrzebny dokument wyrejestrowania, tłumaczenie, badanie techniczne i opłata. Bez cła (wewnątrz UE), ale z rejestracją w 30 dni.' },
        { title: 'Auto sprowadzone z Ukrainy / spoza UE', desc: 'Pełny cykl: odprawa celna, akcyza AKC-U/S (3,1% do 2000 cm³ lub 18,6% powyżej), przegląd zerowy w okręgowej SKP, tłumaczenia i rejestracja. Możliwe zwolnienie z cła w ramach mienia przesiedleńczego - sprawdzamy indywidualnie.' },
        { title: 'Cudzoziemiec bez meldunku / bez PESEL', desc: 'Rejestracja jest możliwa: adres potwierdzamy umową najmu lub o pracę. PESEL nie jest obowiązkowy, ale ułatwia opłaty i mObywatel - pomagamy go uzyskać równolegle.' },
        { title: 'Zmiana danych w dowodzie rejestracyjnym', desc: 'Zmiana adresu, nazwiska, montaż instalacji LPG (GBO), wymiana zgubionego dowodu rejestracyjnego lub tablic - również przez wydział komunikacji.' }
      ]
    },
    timeline: {
      title: 'Jak przeprowadzamy rejestrację',
      subtitle: 'Wewnątrz Polski - zwykle 1-3 dni robocze do pozwolenia czasowego. Sprowadzenie spoza UE z cłem i akcyzą - do 2-3 tygodni.',
      steps: [
        { title: 'Konsultacja', duration: '20 min', desc: 'Sprawdzamy pochodzenie auta (Polska / UE / spoza UE), komplet dokumentów, Twój status. Liczymy opłaty i układamy plan.' },
        { title: 'Weryfikacja dokumentów', duration: '1 dzień', desc: 'Sprawdzamy dowód, kartę pojazdu, umowę/fakturę, OC, badanie techniczne. Wyłapujemy ryzyka: zastawy, rozbieżności VIN, brak wyrejestrowania.' },
        { title: 'Tłumaczenia przysięgłe', duration: '1-2 dni', desc: 'Dokumenty w języku innym niż polski (umowa, dowód rejestracyjny kraju eksportu) tłumaczy tłumacz przysięgły - obowiązkowy wymóg urzędu.' },
        { title: 'Cło i akcyza (tylko spoza UE)', duration: '3-10 dni', desc: 'Dla aut z Ukrainy i in.: odprawa celna, deklaracja AKC-U/S w ciągu 14 dni, opłata akcyzy. Sprawdzamy prawo do zwolnienia.' },
        { title: 'Przegląd zerowy (przy imporcie)', duration: '1 dzień', desc: 'Sprowadzone auto przechodzi przegląd zerowy w okręgowej SKP przed rejestracją - potwierdzenie zdatności do polskich dróg.' },
        { title: 'Wniosek do wydziału komunikacji', duration: '1 dzień', desc: 'Składamy wniosek o rejestrację, opłacamy opłaty (~160 PLN za nowe tablice). Otrzymujemy pozwolenie czasowe - można jeździć od razu.' },
        { title: 'Stały dowód i tablice', duration: '14-30 dni', desc: 'Urząd wydaje dowód rejestracyjny stały i nalepkę legalizacyjną. Odbieramy za Ciebie lub przychodzisz sam.' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy od Ciebie',
      subtitle: 'Zależy od pochodzenia auta. Dokładna lista - po konsultacji.',
      items: [
        'Umowa kupna-sprzedaży lub faktura VAT',
        'Ważny dowód rejestracyjny i karta pojazdu (jeśli jest)',
        'Dokument wyrejestrowania - dla auta z zagranicy',
        'Ważne badanie techniczne (lub przeprowadzimy przegląd zerowy)',
        'Polisa OC na moment rejestracji (oformiamy, jeśli trzeba)',
        'Paszport + karta pobytu / inny dokument legalnego pobytu',
        'Potwierdzenie adresu w Polsce (umowa najmu lub o pracę) - meldunek nie jest obowiązkowy',
        'PESEL - wskazany, pomagamy go uzyskać',
        'Dla spoza UE: dokumenty celne (SAD) i deklaracja akcyzy AKC-U/S',
        'Tłumaczenia przysięgłe wszystkich dokumentów w języku innym niż polski - przygotowujemy my'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Stałe honorarium za prowadzenie sprawy. Opłaty urzędowe, akcyza i tłumaczenia - osobno wg faktu.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '20 minut · analiza dokumentów i kalkulacja' },
        { label: 'Przerejestrowanie auta używanego pod klucz', value: 'od 400 PLN', note: 'Weryfikacja, wniosek, opłaty, prowadzenie sprawy' },
        { label: 'Pierwsza rejestracja / sprowadzenie z UE', value: 'od 600 PLN', note: 'Z tłumaczeniami i badaniem technicznym' },
        { label: 'Sprowadzenie spoza UE (Ukraina i in.)', value: 'od 1 200 PLN', note: 'Cło, akcyza, przegląd zerowy, rejestracja' }
      ],
      note: 'Powyżej honoraria LegalWin. Opłaty urzędu (~160 PLN za nowe tablice i dowód, mniej przy zachowaniu tablic), tłumaczenie przysięgłe (~80-200 PLN), badanie techniczne (149 PLN), akcyza (3,1% lub 18,6% wartości dla spoza UE) - osobno. W 2026 opłaty urzędowe rosną (dowód → 62,50 PLN, tablice → 92,50 PLN).'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym (art. 71-73, 140mb)',
        'Nowelizacja z 2024 r. - obowiązek rejestracji w 30 dni (zniesienie zgłoszenia nabycia)',
        'Rozporządzenie Ministra Infrastruktury ws. rejestracji i oznaczania pojazdów (opłaty 2025)',
        'Ustawa z 6 grudnia 2008 r. o podatku akcyzowym (AKC-U/S - dla pojazdów spoza UE)',
        'Prawo celne - odprawa i ewentualne mienie przesiedleńcze (zwolnienie z cła)'
      ]
    },
    faq: [
      { q: 'Ile dni na przerejestrowanie samochodu po zakupie?', a: 'Od 2024 roku masz 30 dni od zakupu, sprowadzenia lub odprawy celnej (salony i firmy handlujące autami - 90 dni). Wcześniej wystarczało „zgłoszenie nabycia”, teraz wymagana jest pełna rejestracja. Karę za zwłokę nakłada starosta.' },
      { q: 'Jaka kara za nieprzerejestrowanie auta w terminie?', a: 'Dla osoby prywatnej - 500 PLN za przekroczenie 30 dni, a po 180 dniach kara rośnie do 1 000 PLN. Dla salonów i handlarzy stawki są podwojone (1 000 / 2 000 PLN). Dlatego z rejestracją lepiej nie zwlekać.' },
      { q: 'Czy można zarejestrować samochód bez meldunku?', a: 'Tak. Meldunek do rejestracji nie jest wymagany - adres w Polsce potwierdzamy umową najmu lub umową o pracę. PESEL formalnie też nie jest obowiązkowy, ale mocno ułatwia opłaty i dostęp do mObywatel, więc zalecamy go uzyskać (pomagamy).' },
      { q: 'Ile kosztuje przerejestrowanie samochodu w 2025?', a: 'Opłata urzędowa za komplet z nowymi tablicami to około 160 PLN (dowód rejestracyjny 54 + tablice 80 + pozwolenie czasowe 13,50 + nalepka 12,50). Przy zachowaniu dotychczasowych tablic - mniej. Opłata ewidencyjna została zniesiona. W 2026 stawki rosną (dowód → 62,50 PLN, tablice → 92,50 PLN). Nasze honorarium - od 400 PLN pod klucz.' },
      { q: 'Zgłoszenie zbycia a przerejestrowanie - czym się różnią?', a: 'To dwie osobne sprawy. Sprzedający składa zgłoszenie zbycia pojazdu w ciągu 30 dni (inaczej kara 250 PLN), a kupujący ma obowiązek przerejestrowania auta na siebie w ciągu 30 dni. Pomagamy obu stronom - dzięki zgłoszeniu zbycia nie odpowiadasz za cudze mandaty.' },
      { q: 'Jak zarejestrować samochód sprowadzony z zagranicy?', a: 'Z UE (Niemcy, Litwa i in.): dokument wyrejestrowania, tłumaczenie przysięgłe, badanie techniczne, opłata - bez cła, ale rejestracja w 30 dni. Spoza UE: dodatkowo odprawa celna, akcyza AKC-U/S (3,1% do 2000 cm³ lub 18,6% powyżej) i przegląd zerowy w okręgowej SKP. Prowadzimy cały proces.' },
      { q: 'Czy do auta z zagranicy potrzebne jest tłumaczenie przysięgłe?', a: 'Tak. Urząd przyjmuje dokumenty (umowa, zagraniczny dowód rejestracyjny) tylko jako tłumaczenie przysięgłe - tłumaczeń z internetu nie uzna. Robimy je u tłumacza przysięgłego, koszt ~80-200 PLN w zależności od objętości.' },
      { q: 'Czy można przerejestrować auto online przez mObywatel?', a: 'Pełna rejestracja online w 2025 roku jest jeszcze ograniczona - część czynności jest dostępna, ale w większości przypadków potrzebna jest wizyta w wydziale komunikacji. Pełną ścieżkę elektroniczną ustawa przewiduje od 2027 roku. Składamy dokumenty osobiście, by nie zależeć od częściowej cyfryzacji.' }
    ],
    related: ['ubezpieczenie-oc-ac', 'przeglad-techniczny', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Zarejestrujemy auto za Ciebie - w terminie i bez błędów',
    ctaSubtitle: 'Bezpłatna konsultacja: sprawdzimy dokumenty, policzymy opłaty i akcyzę, podamy dokładny termin. Wewnątrz Polski - pozwolenie czasowe w 1-3 dni. Sprowadzenie spoza UE - do 2-3 tygodni pod klucz.'
  },
  en: {
    slug: 'rejestracja-pojazdu',
    group: 'auto',
    icon: 'car',
    badge: 'Wydział Komunikacji · 30 days · 2025',
    title: 'Vehicle registration and re-registration',
    subtitle: 'Registering a car or changing its owner in Poland - for foreigners, no meldunek required',
    lead: 'Since 2024 there is no more "notice of purchase" - the car has to be properly registered within 30 days of buying it or clearing customs (dealerships get 90 days). Miss it and the fine starts at 500 PLN, rising to 1 000 PLN after 180 days. As a foreigner you do not need a meldunek (registered residence) to register - we confirm your address with a tenancy or employment contract - a PESEL helps, and every document not in Polish needs a sworn translation (tłumaczenie przysięgłe). We take the whole process off your hands: checking the seller\'s documents, sworn translations, the application to the wydział komunikacji (vehicle registration office), the fees, temporary and permanent plates - and for cars imported from outside the EU we also run the "zero" inspection (przegląd zerowy), the excise (akcyza) and customs clearance.',
    facts: [
      { label: 'Registration deadline', value: '30 days', note: 'from purchase / customs clearance · dealers - 90' },
      { label: 'Fee (new plates)', value: '~160 PLN', note: 'dowód + tablice + nalepka · 2025' },
      { label: 'Where', value: 'Wydział Komunikacji', note: 'starostwo / city office · since 2025 - any office' },
      { label: 'Fine for delay', value: '500-1 000 PLN', note: 'over 180 days - doubled' }
    ],
    grounds: {
      title: 'Situations we handle',
      subtitle: 'Registration in Poland is not what you may be used to back home - the rules changed in 2024-2025, and for foreigners there are extra wrinkles around address and translations.',
      items: [
        { title: 'Re-registering a used car (private sale)', desc: 'Buying second-hand within Poland: we check the umowa kupna-sprzedaży (sale contract) or faktura VAT, re-register the car to the new owner, swap or keep the plates. The seller separately files a zgłoszenie zbycia (notice of disposal) within 30 days, or pays 250 PLN.' },
        { title: 'First registration of a new car', desc: 'A car straight from the dealership: faktura, świadectwo zgodności WE (EC certificate of conformity), fees. The dealer usually gives you 90 days, but don\'t drag it out - without registration there is no legal use.' },
        { title: 'Car imported from the EU', desc: 'From Germany, Lithuania, etc.: you need the deregistration document, a translation, a badanie techniczne (roadworthiness test) and the fee. No customs (inside the EU), but registration within 30 days.' },
        { title: 'Car imported from outside the EU (Ukraine, Türkiye, etc.)', desc: 'The full cycle: customs clearance, AKC-U/S excise (3,1% up to 2000 cm³ or 18,6% above), the "zero" inspection (przegląd zerowy) at an okręgowa SKP, translations and registration. Exemption from duty may apply under mienie przesiedleńcze (transfer of residence) - we check this case by case.' },
        { title: 'Foreigner with no meldunek / no PESEL', desc: 'Registration is possible: we confirm the address with a tenancy or employment contract. A PESEL is not mandatory but makes payments and mObywatel easier - we help you obtain one in parallel.' },
        { title: 'Changing data in the dowód rejestracyjny', desc: 'Change of address, surname, fitting an LPG (GBO) system, replacing a lost registration certificate or plates - also handled through the wydział komunikacji.' }
      ]
    },
    timeline: {
      title: 'How we run the registration',
      subtitle: 'Within Poland - usually 1-3 working days to the temporary certificate. Import from outside the EU with customs and excise - up to 2-3 weeks.',
      steps: [
        { title: 'Consultation', duration: '20 min', desc: 'We look at the car\'s origin (Poland / EU / non-EU), the document set, and your status. We calculate the fees and set out a plan.' },
        { title: 'Document check', duration: '1 day', desc: 'We review the dowód, karta pojazdu, contract/invoice, OC insurance, badanie techniczne. We catch the risks: liens, VIN mismatches, missing deregistration.' },
        { title: 'Sworn translations', duration: '1-2 days', desc: 'Documents not in Polish (the contract, the exporting country\'s registration certificate) are translated by a tłumacz przysięgły (sworn translator) - a mandatory office requirement.' },
        { title: 'Customs and excise (non-EU only)', duration: '3-10 days', desc: 'For cars from Ukraine, Türkiye and others: customs clearance, the AKC-U/S declaration within 14 days, payment of excise. We check eligibility for an exemption.' },
        { title: '"Zero" inspection (on import)', duration: '1 day', desc: 'An imported car passes the przegląd zerowy at an okręgowa SKP before registration - confirmation that it is fit for Polish roads.' },
        { title: 'Application to the wydział komunikacji', duration: '1 day', desc: 'We file the wniosek o rejestrację, pay the fees (~160 PLN for new plates). We collect the pozwolenie czasowe (temporary permit) - you can drive straight away.' },
        { title: 'Permanent certificate and plates', duration: '14-30 days', desc: 'The office issues the dowód rejestracyjny stały and the nalepka legalizacyjna (legalisation sticker). We collect them for you, or you come in yourself.' }
      ]
    },
    documents: {
      title: 'What we need from you',
      subtitle: 'It depends on the car\'s origin. The exact list - after the consultation.',
      items: [
        'Sale contract (umowa kupna-sprzedaży) or faktura VAT',
        'Valid registration certificate (dowód rejestracyjny) and karta pojazdu (if any)',
        'Deregistration document - for a car from abroad',
        'A valid badanie techniczne (or we run the "zero" inspection)',
        'OC insurance policy at the time of registration (we arrange it if needed)',
        'Passport + karta pobytu (residence card) / other proof of legal stay',
        'Proof of address in Poland (tenancy or employment contract) - meldunek not required',
        'PESEL - advisable, we help you obtain it',
        'For non-EU: customs documents (SAD) and the AKC-U/S excise declaration',
        'Sworn translations of every document not in Polish - we prepare these'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'A fixed retainer for handling the case. State fees, excise and translations pass through at cost.',
      items: [
        { label: 'Consultation', value: 'Free', note: '20 minutes · document review and calculation' },
        { label: 'Used-car re-registration, turnkey', value: 'from 400 PLN', note: 'Check, application, fees, full handling' },
        { label: 'First registration / EU import', value: 'from 600 PLN', note: 'With translations and badanie techniczne' },
        { label: 'Import from outside the EU (Ukraine, etc.)', value: 'from 1 200 PLN', note: 'Customs, excise, "zero" inspection, registration' }
      ],
      note: 'Above are LegalWin\'s fees. Office fees (~160 PLN for new plates and the dowód, less if you keep the plates), sworn translation (~80-200 PLN), badanie techniczne (149 PLN), excise (3,1% or 18,6% of value for non-EU) - separate. In 2026 the state fees rise (dowód → 62,50 PLN, tablice → 92,50 PLN).'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym (Road Traffic Law, art. 71-73, 140mb)',
        'Nowelizacja z 2024 r. - the 30-day registration obligation (abolition of the notice of purchase)',
        'Rozporządzenie Ministra Infrastruktury on the registration and marking of vehicles (2025 fees)',
        'Ustawa z 6 grudnia 2008 r. o podatku akcyzowym (Excise Duty Act - AKC-U/S, for non-EU vehicles)',
        'Prawo celne (Customs Law) - clearance and possible mienie przesiedleńcze (exemption from duty)'
      ]
    },
    faq: [
      { q: 'How do I register a car in Poland as a foreigner?', a: 'You file a wniosek o rejestrację at the wydział komunikacji (vehicle registration office) within 30 days of buying the car or clearing customs. As a foreigner you don\'t need a meldunek - we confirm your address with a tenancy or employment contract - and any document not in Polish needs a sworn translation. We handle the whole process and you get a pozwolenie czasowe (temporary permit) to drive straight away.' },
      { q: 'Do I need a PESEL or a meldunek to register a car?', a: 'No, a meldunek (registered residence) is not required - we confirm your Polish address with a tenancy or employment contract. A PESEL is not formally mandatory either, but it greatly simplifies payments, OC insurance and access to mObywatel, so we recommend getting one (we help you obtain it in parallel).' },
      { q: 'How much does it cost to register a car in Poland?', a: 'The office fee for a set with new plates is about 160 PLN (dowód rejestracyjny 54 + tablice 80 + pozwolenie czasowe 13,50 + nalepka 12,50) - less if you keep the old plates. The opłata ewidencyjna has been abolished. In 2026 the state fees rise (dowód → 62,50 PLN, tablice → 92,50 PLN). Our fee is from 400 PLN turnkey; sworn translation (~80-200 PLN) and badanie techniczne (149 PLN) are separate.' },
      { q: 'How long do I have to register a car, and what is the fine if I\'m late?', a: 'You have 30 days from purchase, import or customs clearance (90 days for dealerships). For a private individual the fine is 500 PLN for being late, rising to 1 000 PLN past 180 days; for dealers and traders the amounts double (1 000 / 2 000 PLN). The fine is imposed by the starosta, so don\'t put it off.' },
      { q: 'How do I register an imported EU car in Poland?', a: 'For a car from Germany, Lithuania or another EU country you need the deregistration document, a sworn translation, a valid badanie techniczne (roadworthiness test) and the fee - no customs inside the EU, but registration within 30 days. We check the paperwork for liens, VIN mismatches and missing deregistration before filing.' },
      { q: 'What about importing a car from outside the EU (Ukraine, Türkiye)?', a: 'That\'s the full cycle: customs clearance, AKC-U/S excise (3,1% for engines up to 2000 cm³ and 18,6% above), the "zero" inspection (przegląd zerowy) at an okręgowa SKP, sworn translations and registration. Exemption from duty may apply under mienie przesiedleńcze (transfer of residence) - we check eligibility case by case.' },
      { q: 'Do foreign car documents need a sworn translation?', a: 'Yes. The office only accepts a tłumaczenie przysięgłe (sworn translation) of documents not in Polish - the contract and the foreign registration certificate - and won\'t take online or DIY translations. We have them done by a sworn translator, around 80-200 PLN depending on length.' },
      { q: 'Can I register a car online through mObywatel?', a: 'Full online registration in 2025 is still limited - some steps are available, but in most cases a visit to the wydział komunikacji is needed. The law provides for the fully electronic route from 2027. We file the documents in person so you don\'t depend on partial digitalisation.' }
    ],
    related: ['ubezpieczenie-oc-ac', 'przeglad-techniczny', 'tlumaczenia-przysiegle'],
    ctaTitle: 'We\'ll register your car for you - on time and error-free',
    ctaSubtitle: 'Free consultation: we check the documents, calculate the fees and excise, and give you an exact timeline. Within Poland - a temporary certificate in 1-3 days. Import from outside the EU - up to 2-3 weeks, turnkey.'
  },
  tr: {
    slug: 'rejestracja-pojazdu',
    group: 'auto',
    icon: 'car',
    badge: 'Wydział Komunikacji · 30 gün · 2025',
    title: 'Araç tescili ve devir',
    subtitle: 'Polonya\'da araç tescili ve sahip değişikliği - yabancılar için, meldunek olmadan',
    lead: '2024\'ten itibaren artık "satın alma bildirimi" yok - aracın satın alma veya gümrük işleminden itibaren 30 gün içinde tescil edilmesi gerekiyor (galeriler için 90 gün). Gecikme 500 PLN\'den başlayan ceza, 180 gün sonra ise 1 000 PLN\'ye kadar çıkar. Yabancının tescil için meldunek\'e (ikamet kaydı) ihtiyacı yok (adresi kira veya iş sözleşmesiyle doğruluyoruz), PESEL tavsiye edilir ve Lehçe olmayan tüm belgeler yeminli tercüme (tłumaczenie przysięgłe) gerektirir. Tüm süreci üstleniyoruz: satıcının belgelerinin kontrolü, yeminli tercümeler, wydział komunikacji\'ye (araç tescil müdürlüğü) başvuru, harçlar, geçici ve kalıcı plakalar - AB dışından (Türkiye, Ukrayna vb.) getirilen araçlar için ise "sıfır" muayene (przegląd zerowy), akcyza (ÖTV) ve gümrük işlemini yürütüyoruz.',
    facts: [
      { label: 'Tescil süresi', value: '30 gün', note: 'satın alma / gümrük işleminden sonra · galeriler - 90' },
      { label: 'Harç (yeni plaka)', value: '~160 PLN', note: 'dowód + tablice + nalepka · 2025' },
      { label: 'Yer', value: 'Wydział Komunikacji', note: 'starostwo / belediye · 2025\'ten - herhangi biri' },
      { label: 'Gecikme cezası', value: '500-1 000 PLN', note: '180 günü aşarsa - iki katı' }
    ],
    grounds: {
      title: 'Hangi durumları çözüyoruz',
      subtitle: 'Polonya\'da tescil, alışık olduğunuzdan farklıdır - kurallar 2024-2025\'te değişti, yabancılar için adres ve tercümelerde özel noktalar var.',
      items: [
        { title: 'İkinci el aracın devri (alım-satım)', desc: 'Polonya içinde elden alım: umowa kupna-sprzedaży (satış sözleşmesi) veya fakturę VAT kontrol eder, aracı yeni sahibine devreder, plakaları değiştirir veya koruruz. Satıcı ayrıca 30 gün içinde zgłoszenie zbycia (devir bildirimi) verir, aksi halde 250 PLN.' },
        { title: 'Yeni aracın ilk tescili', desc: 'Galeriden araç: faktura, świadectwo zgodności WE (AT uygunluk belgesi), harçlar. Galeri genelde 90 gün verir, ama uzatmamak gerekir - tescil olmadan yasal kullanım yoktur.' },
        { title: 'AB\'den getirilen araç', desc: 'Almanya, Litvanya vb.: kayıt silme belgesi, tercüme, badanie techniczne (teknik muayene) ve harç gerekir. Gümrük yok (AB içi), ama 30 günde tescil var.' },
        { title: 'Türkiye / AB dışından getirilen araç', desc: 'Tam döngü: gümrük işlemi, AKC-U/S akcyza (2000 cm³\'e kadar %3,1, üzeri %18,6), okręgowa SKP\'de "sıfır" muayene, tercümeler ve tescil. Türkiye de AB dışıdır. mienie przesiedleńcze (yerleşim eşyası) kapsamında gümrük muafiyeti mümkün - bireysel kontrol ederiz.' },
        { title: 'Meldunek / PESEL olmayan yabancı', desc: 'Tescil mümkündür: adresi kira veya iş sözleşmesiyle doğrularız. PESEL zorunlu değildir, ama ödemeleri ve mObywatel\'i kolaylaştırır - paralel olarak almanıza yardım ederiz.' },
        { title: 'Dowód rejestracyjny\'de bilgi değişikliği', desc: 'Adres, soyadı değişikliği, LPG (GBO) sistemi montajı, kaybolan ruhsatın veya plakaların yenilenmesi - bunlar da wydział komunikacji üzerinden.' }
      ]
    },
    timeline: {
      title: 'Tescili nasıl yürütüyoruz',
      subtitle: 'Polonya içinde - geçici ruhsata kadar genelde 1-3 iş günü. AB dışından gümrük ve akcyza ile getirme - 2-3 haftaya kadar.',
      steps: [
        { title: 'Danışmanlık', duration: '20 dk', desc: 'Aracın menşeini (Polonya / AB / AB dışı), belge paketini, statünüzü inceleriz. Harçları hesaplar ve plan çıkarırız.' },
        { title: 'Belge kontrolü', duration: '1 gün', desc: 'dowód, kartę pojazdu, sözleşme/fatura, OC, badanie techniczne kontrol ederiz. Riskleri yakalarız: rehinler, VIN uyuşmazlıkları, kayıt silme eksikliği.' },
        { title: 'Yeminli tercümeler', duration: '1-2 gün', desc: 'Lehçe olmayan belgeleri (sözleşme, ihracatçı ülkenin ruhsatı) tłumacz przysięgły (yeminli tercüman) tercüme eder - müdürlüğün zorunlu şartı.' },
        { title: 'Gümrük ve akcyza (yalnızca AB dışı)', duration: '3-10 gün', desc: 'Türkiye, Ukrayna vb. araçlar için: gümrük işlemi, 14 gün içinde AKC-U/S beyanı, akcyza ödemesi. Muafiyet hakkını kontrol ederiz.' },
        { title: '"Sıfır" muayene (getirmede)', duration: '1 gün', desc: 'Getirilen araç tescil öncesi okręgowa SKP\'de przegląd zerowy geçer - Polonya yollarına uygunluğun teyidi.' },
        { title: 'Wydział komunikacji\'ye başvuru', duration: '1 gün', desc: 'wniosek o rejestrację veririz, harçları öderiz (~160 PLN yeni plaka için). pozwolenie czasowe (geçici izin) alırız - hemen kullanılabilir.' },
        { title: 'Kalıcı ruhsat ve plakalar', duration: '14-30 gün', desc: 'Müdürlük dowód rejestracyjny stały ve nalepkę legalizacyjną (yasallaştırma etiketi) verir. Sizin yerinize alır veya kendiniz gelirsiniz.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Aracın menşeine bağlıdır. Kesin liste - danışmanlık sonrası.',
      items: [
        'Satış sözleşmesi (umowa kupna-sprzedaży) veya faktura VAT',
        'Geçerli ruhsat (dowód rejestracyjny) ve karta pojazdu (varsa)',
        'Kayıt silme belgesi - yurt dışı araç için',
        'Geçerli badanie techniczne (veya "sıfır" muayene yaparız)',
        'Tescil anında OC poliçesi (gerekirse düzenleriz)',
        'Pasaport + karta pobytu (oturum kartı) / başka yasal ikamet belgesi',
        'Polonya\'da adres kanıtı (kira veya iş sözleşmesi) - meldunek zorunlu değil',
        'PESEL - tavsiye edilir, almanıza yardım ederiz',
        'AB dışı için: gümrük belgeleri (SAD) ve AKC-U/S akcyza beyanı',
        'Lehçe olmayan tüm belgelerin yeminli tercümeleri - biz hazırlarız'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Dosya takibi için sabit ücret. Resmi harçlar, akcyza ve tercümeler fiilen ayrıca ödenir.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '20 dakika · belge analizi ve hesaplama' },
        { label: 'İkinci el araç devri, anahtar teslim', value: '400 PLN\'den', note: 'Kontrol, başvuru, harçlar, takip' },
        { label: 'İlk tescil / AB\'den getirme', value: '600 PLN\'den', note: 'Tercümeler ve badanie techniczne ile' },
        { label: 'AB dışından getirme (Türkiye, Ukrayna vb.)', value: '1 200 PLN\'den', note: 'Gümrük, akcyza, "sıfır" muayene, tescil' }
      ],
      note: 'Belirtilen ücretler LegalWin danışmanlık bedelidir. Müdürlük harçları (~160 PLN yeni plaka ve dowód için, plaka korunursa daha az), yeminli tercüme (~80-200 PLN), badanie techniczne (149 PLN), akcyza (AB dışı için değerin %3,1 veya %18,6\'sı) ayrıca ödenir. 2026\'da resmi harçlar artıyor (dowód → 62,50 PLN, tablice → 92,50 PLN).'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym (Karayolu Trafiği Kanunu, art. 71-73, 140mb)',
        'Nowelizacja z 2024 r. - 30 günde tescil zorunluluğu (satın alma bildiriminin kaldırılması)',
        'Rozporządzenie Ministra Infrastruktury - araçların tescili ve işaretlenmesi yönetmeliği (2025 harçları)',
        'Ustawa z 6 grudnia 2008 r. o podatku akcyzowym (Özel Tüketim Vergisi Kanunu - AKC-U/S, AB dışı araçlar için)',
        'Prawo celne (Gümrük Kanunu) - gümrük işlemi ve olası mienie przesiedleńcze (gümrük muafiyeti)'
      ]
    },
    faq: [
      { q: 'Polonya\'da yabancı olarak araba nasıl tescil edilir?', a: 'Satın alma veya gümrük işleminden itibaren 30 gün içinde wydział komunikacji\'ye (araç tescil müdürlüğü) wniosek o rejestrację verirsiniz. Yabancı olarak meldunek\'e gerek yok - adresi kira veya iş sözleşmesiyle doğrularız - ve Lehçe olmayan her belge yeminli tercüme gerektirir. Tüm süreci üstleniriz; pozwolenie czasowe (geçici izin) ile hemen araç kullanabilirsiniz.' },
      { q: 'Araba tescili için PESEL veya meldunek şart mı?', a: 'Hayır, tescil için meldunek (ikamet kaydı) gerekmez - Polonya adresini kira veya iş sözleşmesiyle doğrularız. PESEL de resmen zorunlu değildir, ama ödemeleri, OC sigortasını ve mObywatel erişimini büyük ölçüde kolaylaştırır, bu yüzden almanızı öneririz (paralel olarak yardımcı oluruz).' },
      { q: 'Türkiye\'den araba getirip Polonya\'da nasıl tescil ederim?', a: 'Türkiye AB dışı sayıldığı için tam döngü gerekir: gümrük işlemi, AKC-U/S akcyza (2000 cm³\'e kadar motorlar için %3,1, üzeri %18,6), okręgowa SKP\'de "sıfır" muayene (przegląd zerowy), yeminli tercümeler ve tescil. mienie przesiedleńcze (yerleşim eşyası) kapsamında gümrük muafiyeti mümkün olabilir - koşulları bireysel kontrol ederiz.' },
      { q: 'Polonya\'da araba tescili ne kadar tutar?', a: 'Yeni plakalı set için müdürlük harcı yaklaşık 160 PLN (dowód rejestracyjny 54 + tablice 80 + pozwolenie czasowe 13,50 + nalepka 12,50); eski plaka korunursa daha az. Opłata ewidencyjna kaldırıldı. 2026\'da harçlar artıyor (dowód → 62,50 PLN, tablice → 92,50 PLN). Bizim ücretimiz anahtar teslim 400 PLN\'den; yeminli tercüme (~80-200 PLN) ve badanie techniczne (149 PLN) ayrıdır.' },
      { q: 'Aracı süresinde tescil etmezsem ceza ne kadar?', a: 'Satın alma, getirme veya gümrük işleminden itibaren 30 gününüz var (galeriler için 90 gün). Özel kişi için gecikmede 500 PLN, 180 günü aşarsa 1 000 PLN\'ye kadar; galeriler ve alım-satımcılar için tutarlar iki katı (1 000 / 2 000 PLN). Cezayı starosta keser, bu yüzden ertelememek en iyisi.' },
      { q: 'Araç belgelerinin yeminli tercümesi gerekli mi?', a: 'Evet. Müdürlük, Lehçe olmayan belgeleri (sözleşme, yabancı ruhsat) yalnızca tłumaczenie przysięgłe (yeminli tercüme) olarak kabul eder; internetten yapılan çevirileri kabul etmez. Yeminli tercümanda yaptırırız, hacme göre ~80-200 PLN.' },
      { q: 'AB\'den getirilen araç nasıl tescil edilir?', a: 'Almanya, Litvanya gibi bir AB ülkesinden gelen araç için kayıt silme belgesi, yeminli tercüme, geçerli badanie techniczne (teknik muayene) ve harç gerekir - AB içi olduğundan gümrük yok, ama 30 günde tescil var. Belgeleri rehin, VIN uyuşmazlığı ve eksik kayıt silme açısından kontrol ederiz.' },
      { q: 'Aracı mObywatel üzerinden online tescil edebilir miyim?', a: '2025\'te tam online tescil hâlâ sınırlı - bazı işlemler mevcut, ama çoğu durumda wydział komunikacji\'ye ziyaret gerekiyor. Tam elektronik yolu kanun 2027\'den öngörüyor. Kısmi dijitalleşmeye bağlı kalmamak için belgeleri bizzat veririz.' }
    ],
    related: ['ubezpieczenie-oc-ac', 'przeglad-techniczny', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Aracınızı sizin için tescil ederiz - zamanında ve hatasız',
    ctaSubtitle: 'Ücretsiz danışmanlık: belgeleri kontrol eder, harçları ve akcyza\'yı hesaplar, kesin süreyi söyleriz. Polonya içinde - 1-3 günde geçici ruhsat. AB dışından getirme - anahtar teslim 2-3 haftaya kadar.'
  },
  uk: {
    slug: 'rejestracja-pojazdu',
    group: 'auto',
    icon: 'car',
    badge: 'Wydział Komunikacji · 30 днів · 2025',
    title: 'Реєстрація та переоформлення авто',
    subtitle: 'Постановка на облік та зміна власника в Польщі - для іноземців, без мельдунку',
    lead: 'З 2024 року в Польщі немає «повідомлення про купівлю» - авто потрібно саме зареєструвати протягом 30 днів після купівлі або розмитнення (для салонів - 90 днів). Прострочення - штраф від 500 PLN, а після 180 днів - до 1 000 PLN. Іноземцю мельдунок для реєстрації не потрібен (адресу підтверджуємо договором оренди або праці), PESEL бажаний, а всі документи не польською мовою вимагають присяжного перекладу. Беремо на себе весь процес: перевірку документів продавця, присяжні переклади, заяву в wydział komunikacji, оплату зборів, тимчасові та постійні номери - а для ввезених авто з України проводимо через «нульовий» техогляд, акцизу та митницю.',
    facts: [
      { label: 'Термін реєстрації', value: '30 днів', note: 'після купівлі / розмитнення · салони - 90' },
      { label: 'Збір (нові номери)', value: '~160 PLN', note: 'dowód + tablice + nalepka · 2025' },
      { label: 'Де', value: 'Wydział Komunikacji', note: 'starostwo / urząd miasta · з 2025 - будь-який' },
      { label: 'Штраф за прострочення', value: '500-1 000 PLN', note: 'понад 180 днів - подвоюється' }
    ],
    grounds: {
      title: 'Які ситуації закриваємо',
      subtitle: 'Реєстрація в Польщі відрізняється від звичної в Україні - правила змінювалися у 2024-2025, а для іноземців є нюанси щодо адреси та перекладів.',
      items: [
        { title: 'Переоформлення вживаного авто (купівля-продаж)', desc: 'Купівля з рук усередині Польщі: перевіряємо umowa kupna-sprzedaży або fakturę VAT, переоформлюємо на нового власника, змінюємо або зберігаємо номери. Продавець окремо подає zgłoszenie zbycia (30 днів, інакше 250 PLN).' },
        { title: 'Перша реєстрація нового авто', desc: 'Авто із салону: faktura, świadectwo zgodności WE, оплата зборів. Салон зазвичай дає 90 днів, але затягувати не варто - без реєстрації немає легальної експлуатації.' },
        { title: 'Авто, ввезене з ЄС', desc: 'З Німеччини, Литви та ін.: потрібен документ зняття з обліку, переклад, badanie techniczne та оплата. Без митниці (усередині ЄС), але з реєстрацією за 30 днів.' },
        { title: 'Авто, ввезене з України / не-ЄС', desc: 'Повний цикл: митне оформлення, акциза AKC-U/S (3,1% до 2000 cm³ або 18,6% понад), «нульовий» техогляд в okręgowa SKP, переклади та реєстрація. Можливе звільнення від мита за «mienie przesiedleńcze» - перевіряємо індивідуально.' },
        { title: 'Іноземець без мельдунку / без PESEL', desc: 'Реєструвати можна: адресу підтверджуємо договором оренди або праці. PESEL не обов’язковий, але спрощує оплати та mObywatel - допомагаємо оформити паралельно.' },
        { title: 'Зміна даних у dowód rejestracyjny', desc: 'Зміна адреси, прізвища, встановлення ГБО (LPG), заміна втраченого техпаспорта або номерів - теж через wydział komunikacji.' }
      ]
    },
    timeline: {
      title: 'Як ми оформлюємо реєстрацію',
      subtitle: 'Усередині Польщі - зазвичай 1-3 робочі дні до тимчасового техпаспорта. Ввезення з не-ЄС з митницею та акцизою - до 2-3 тижнів.',
      steps: [
        { title: 'Консультація', duration: '20 хв', desc: 'Дивимося походження авто (Польща / ЄС / не-ЄС), пакет документів, ваш статус. Рахуємо збори та складаємо план.' },
        { title: 'Перевірка документів', duration: '1 день', desc: 'Перевіряємо dowód, kartę pojazdu, договір/фактуру, OC, badanie techniczne. Ловимо ризики: застави, розбіжності VIN, відсутність зняття з обліку.' },
        { title: 'Присяжні переклади', duration: '1-2 дні', desc: 'Документи не польською (договір, техпаспорт країни-експортера) перекладає tłumacz przysięgły - обов’язкова вимога urzędu.' },
        { title: 'Митниця та акциза (тільки не-ЄС)', duration: '3-10 днів', desc: 'Для авто з України та ін.: митне очищення, декларація AKC-U/S протягом 14 днів, оплата акцизи. Перевіряємо право на звільнення.' },
        { title: '«Нульовий» техогляд (при ввезенні)', duration: '1 день', desc: 'Імпортоване авто проходить przegląd zerowy в okręgowa SKP до реєстрації - підтвердження придатності до польських доріг.' },
        { title: 'Заява в wydział komunikacji', duration: '1 день', desc: 'Подаємо wniosek o rejestrację, оплачуємо збори (~160 PLN за нові номери). Отримуємо pozwolenie czasowe - можна їздити одразу.' },
        { title: 'Постійний техпаспорт і номери', duration: '14-30 днів', desc: 'Urząd видає dowód rejestracyjny stały і nalepkę legalizacyjną. Забираємо за вас або приходите самі.' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Залежить від походження авто. Точний список - після консультації.',
      items: [
        'Договір купівлі-продажу (umowa kupna-sprzedaży) або faktura VAT',
        'Чинний техпаспорт (dowód rejestracyjny) і karta pojazdu (якщо є)',
        'Документ зняття з обліку - для авто з-за кордону',
        'Чинне badanie techniczne (або проведемо «нульовий» техогляд)',
        'Поліс OC на момент реєстрації (оформимо, якщо потрібно)',
        'Закордонний паспорт + karta pobytu / інший документ легального перебування',
        'Підтвердження адреси в Польщі (договір оренди або праці) - мельдунок не обов’язковий',
        'PESEL - бажаний, допомагаємо оформити',
        'Для не-ЄС: митні документи (SAD) та декларація акцизи AKC-U/S',
        'Присяжні переклади всіх документів не польською - готуємо ми'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Фіксований гонорар за супровід. Держмита, акциза та переклади - окремо за фактом.',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '20 хвилин · розбір документів та розрахунок' },
        { label: 'Переоформлення вживаного авто під ключ', value: 'від 400 PLN', note: 'Перевірка, заява, збори, супровід' },
        { label: 'Перша реєстрація / ввезення з ЄС', value: 'від 600 PLN', note: 'З перекладами та badanie techniczne' },
        { label: 'Ввезення з не-ЄС (Україна та ін.)', value: 'від 1 200 PLN', note: 'Митниця, акциза, «нульовий» техогляд, реєстрація' }
      ],
      note: 'Зазначено гонорари LegalWin. Збори urzędu (~160 PLN за нові номери та dowód, менше при збереженні номерів), присяжний переклад (~80-200 PLN), badanie techniczne (149 PLN), акциза (3,1% або 18,6% від вартості для не-ЄС) - окремо. У 2026 урядові збори зростають (dowód → 62,50 PLN, tablice → 92,50 PLN).'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym (art. 71-73, 140mb)',
        'Nowelizacja z 2024 r. - obowiązek rejestracji w 30 dni (zniesienie zgłoszenia nabycia)',
        'Rozporządzenie Ministra Infrastruktury ws. rejestracji i oznaczania pojazdów (opłaty 2025)',
        'Ustawa z 6 grudnia 2008 r. o podatku akcyzowym (AKC-U/S - dla pojazdów spoza UE)',
        'Prawo celne - odprawa i ewentualne mienie przesiedleńcze (zwolnienie z cła)'
      ]
    },
    faq: [
      { q: 'Як розмитнити авто з України в Польщі та поставити на облік?', a: 'Це повний цикл: митне оформлення, акциза AKC-U/S (3,1% для двигунів до 2000 cm³ і 18,6% понад), «нульовий» техогляд (przegląd zerowy) в okręgowa SKP, присяжні переклади та реєстрація в wydział komunikacji. Можливе звільнення від мита за «mienie przesiedleńcze» (переселенське майно) - перевіряємо умови індивідуально.' },
      { q: 'Чи можна зареєструвати авто без мельдунку і без PESEL?', a: 'Так. Мельдунок для реєстрації не потрібен - адресу в Польщі підтверджуємо договором оренди або трудовим договором. PESEL формально не обов’язковий, але сильно спрощує оплати, OC та доступ до mObywatel, тому рекомендуємо оформити (допомагаємо паралельно).' },
      { q: 'Скільки днів на реєстрацію авто і який штраф за прострочення?', a: 'У вас 30 днів з моменту купівлі, ввезення або розмитнення (для автосалонів - 90 днів). Для приватної особи штраф 500 PLN за прострочення, а понад 180 днів - до 1 000 PLN; для салонів і перекупів суми вдвічі вищі (1 000 / 2 000 PLN). Штраф накладає starosta, тож краще не відкладати.' },
      { q: 'Скільки коштує реєстрація авто в Польщі у 2025 році?', a: 'Урядовий збір за комплект з новими номерами - близько 160 PLN (dowód rejestracyjny 54 + tablice 80 + pozwolenie czasowe 13,50 + nalepka 12,50); при збереженні старих номерів - менше. Opłata ewidencyjna скасована. У 2026 збори зростають (dowód → 62,50 PLN, tablice → 92,50 PLN). Наш гонорар - від 400 PLN під ключ; присяжний переклад (~80-200 PLN) і badanie techniczne (149 PLN) - окремо.' },
      { q: 'Чи потрібен присяжний переклад документів на авто з України?', a: 'Так. Urząd приймає документи (договір, іноземний техпаспорт) лише як tłumaczenie przysięgłe (присяжний переклад) - переклади з інтернету не приймають. Робимо у присяжного перекладача, вартість ~80-200 PLN залежно від обсягу.' },
      { q: 'Що таке «нульовий» техогляд і навіщо він для ввезеного авто?', a: 'Це przegląd zerowy - перший техогляд в okręgowa SKP, який ввезене авто проходить до реєстрації для підтвердження придатності до польських доріг. badanie techniczne коштує 149 PLN. Без нього wydział komunikacji не зареєструє авто.' },
      { q: 'Чи можна зареєструвати авто онлайн через mObywatel?', a: 'Повноцінна онлайн-реєстрація у 2025 році поки що обмежена - частина дій доступна, але в більшості випадків потрібен візит до wydziału komunikacji. Повний електронний шлях закладається законом з 2027 року. Ми подаємо документи особисто, щоб не залежати від часткової цифровізації.' }
    ],
    related: ['ubezpieczenie-oc-ac', 'przeglad-techniczny', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Зареєструємо авто за вас - вчасно і без помилок',
    ctaSubtitle: 'Безкоштовна консультація: перевіримо документи, порахуємо збори та акцизу, скажемо точний термін. Усередині Польщі - тимчасовий техпаспорт за 1-3 дні. Ввезення з не-ЄС - до 2-3 тижнів під ключ.'
  }
};

export default rejestracjaPojazdu;
