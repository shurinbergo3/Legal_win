import type { ServiceEntry } from './types';

const rezydentUe: ServiceEntry = {
  ru: {
    slug: 'rezydent-ue',
    group: 'immigration',
    icon: 'id-card',
    badge: 'Art. 211 · 5 лет · B1',
    title: 'Статус резидента ЕС (rezydent długoterminowy UE)',
    subtitle: 'Бессрочное разрешение по экономическим основаниям: 5 лет пребывания, сертификат B1 и стабильный доход',
    lead: 'Zezwolenie na pobyt rezydenta długoterminowego UE - это второй путь к бессрочному статусу в Польше, помимо karty stałego pobytu. Разница принципиальная: pobyt stały дают за связи с Польшей (брак с гражданином, польское происхождение, Karta Polaka), а статус резидента ЕС - за экономическую интеграцию: 5 лет легального непрерывного пребывания, стабильный доход и польский язык на уровне B1 с государственным сертификатом. Разрешение выдаётся на неограниченный срок, карта меняется каждые 5 лет. Госпошлина - 640 PLN плюс 100 PLN за бланк карты, решение по закону - до 6 месяцев. Главный бонус, которого нет у pobytu stałego: право переехать и легально жить в другой стране ЕС по упрощённой процедуре. Главная ловушка: период по ochronie czasowej (статус UKR) в пятилетний стаж НЕ засчитывается, а годы учёбы - только наполовину.',
    facts: [
      { label: 'Основание', value: 'Art. 211 u.o.c.', note: '5 лет легально и непрерывно' },
      { label: 'Госпошлина', value: '640 + 100 PLN', note: 'wniosek + бланк карты' },
      { label: 'Язык', value: 'B1 обязательно', note: 'сертификат PKPZJPjOJO · дети до 16 - нет' },
      { label: 'Срок действия', value: 'Бессрочно', note: 'карта обменивается каждые 5 лет' }
    ],
    grounds: {
      title: 'Кому подходит статус резидента ЕС',
      subtitle: 'Это маршрут для тех, кто живёт в Польше на работе, бизнесе или контрактах - без брака с поляком и без польских корней.',
      items: [
        { title: 'Наёмная работа', desc: 'Пять лет по umowie o pracę, umowie zlecenie или их комбинации на картах czasowego pobytu. Смена работодателей значения не имеет - важна непрерывность легального пребывания, а не одно место работы.' },
        { title: 'Бизнес: JDG или Sp. z o.o.', desc: 'Годы на ВНЖ через собственную фирму засчитываются полностью. Доход подтверждается PIT/CIT, выписками и справками ZUS/US. Для owner-managed Sp. z o.o. считаем и дивиденды, и wynagrodzenie członka zarządu.' },
        { title: 'Niebieska Karta UE', desc: 'Период по Голубой карте засчитывается полностью, причём можно суммировать периоды, проведённые по Голубой карте в других странах ЕС - это ускоряет выход на 5 лет для IT и инженерных специальностей.' },
        { title: 'Учёба - только 50% периода', desc: 'Годы обучения в польском вузе или школе идут в зачёт лишь наполовину: 4 года магистратуры дают 2 года стажа. Поэтому у выпускников реальный срок до заявления обычно 7-8 лет, если после учёбы они не сразу перешли на рабочую карту.' },
        { title: 'Что вообще не засчитывается', desc: 'Период ochrony czasowej (статус UKR по специальному закону для граждан Украины), praca sezonowa, oddelegowanie для оказания услуг, пребывание по визе Шенген категории C, а также время после решения об обязанности выезда. Для украинцев это ключевой момент: годы по PESEL UKR в стаж не идут, стаж начинает копиться с момента перехода на обычную kartę pobytu.' },
        { title: 'Допустимые разрывы пребывания', desc: 'Одна поездка за границу - не дольше 6 месяцев подряд, суммарно за пять лет - не больше 10 месяцев. Служебная командировка до 6 месяцев считается пребыванием в Польше. Превысили - счётчик пяти лет обнуляется, и это самая частая причина отказов.' }
      ]
    },
    timeline: {
      title: 'Как проходит дело',
      subtitle: 'Закон даёт воеводе 6 месяцев. Реально в Mazowieckim Urzędzie Wojewódzkim в 2026 году решение занимает 8-16 месяцев, поэтому подаваться нужно заранее.',
      steps: [
        { title: 'Аудит стажа', duration: '1-2 дня', desc: 'Поднимаем всю историю пребывания: визы, карты, decyzje, штампы, выезды. Считаем, сколько дней реально засчитывается, вычитаем учёбу вполовину и исключённые периоды. Часто оказывается, что до пяти лет не хватает 4-8 месяцев - и лучше узнать это сейчас, а не после отказа.' },
        { title: 'Сертификат B1', duration: '2-5 месяцев', desc: 'Без сертификата дело не пройдёт. Экзамен PKPZJPjOJO проходит сессиями несколько раз в год, запись закрывается заранее. Подбираем ближайшую сессию, готовим к письменной и устной части, оформляем запись. Диплом польской школы или вуза с польским языком обучения заменяет экзамен.' },
        { title: 'Доход и документы', duration: '2-4 недели', desc: 'Собираем подтверждение стабильного и регулярного дохода за последние 3 года, медстраховку, документ на жильё (własność, najem, użyczenie), справки ZUS и US об отсутствии задолженностей.' },
        { title: 'Подача через MOS', duration: '1 день', desc: 'Заполняем wniosek в системе MOS, оплачиваем 640 PLN, записываемся на сдачу отпечатков. Получаете UPO - подтверждение приёма, которое легализует пребывание до решения.' },
        { title: 'Ведение и решение', duration: '8-16 месяцев', desc: 'Отвечаем на wezwania воеводы, докладываем документы, при затягивании подаём ponaglenie, при необходимости - жалобу в WSA. После положительного решения - 100 PLN за карту и выдача.' }
      ]
    },
    documents: {
      title: 'Что понадобится',
      subtitle: 'Ядро пакета - доказательство пяти лет и сертификат B1. Остальное зависит от основания дохода.',
      items: [
        'Загранпаспорт + все предыдущие карты pobytu и decyzje',
        'Сертификат знания польского языка на уровне B1 (или диплом польской школы/вуза)',
        'Подтверждение дохода за 3 года: PIT-37/36/CIT, umowy, выписки со счёта',
        'Справка ZUS о периодах страхования и справка US об отсутствии задолженности',
        'Медстраховка или подтверждение NFZ',
        'Документ на жильё: акт собственности, umowa najmu или użyczenia',
        '4 биометрических фото 35×45 мм',
        'Подтверждение оплаты opłaty skarbowej 640 PLN',
        'Хронология выездов из Польши за 5 лет - готовим её вместе с вами'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированный гонорар за этап. Госпошлины, экзамен B1 и присяжные переводы оплачиваются отдельно.',
      items: [
        { label: 'Консультация и аудит стажа', value: 'Бесплатно', note: '30-60 минут · считаем ваши 5 лет' },
        { label: 'Статус резидента ЕС под ключ', value: 'от 2 000 PLN', note: 'От расчёта стажа до выдачи карты' },
        { label: 'Подготовка к экзамену B1', value: 'от 1 200 PLN', note: 'Запись на сессию + разбор частей экзамена' },
        { label: 'Apelacja при отказе', value: 'от 1 800 PLN', note: 'Отдельный договор на оспаривание' }
      ],
      note: 'Госпошлины: 640 PLN за wniosek, 100 PLN за бланк карты. Экзамен B1 в PKPZJPjOJO - около 300-400 PLN плюс 20 PLN за сертификат. Присяжные переводы иностранных документов оплачиваются отдельно. Точную сумму фиксируем в договоре после бесплатного аудита стажа.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach - art. 211 (przesłanki udzielenia zezwolenia)',
        'Ustawa o cudzoziemcach - art. 212 (liczenie okresu pobytu, okresy nieuwzględniane)',
        'Ustawa o cudzoziemcach - art. 216-221 (odmowa, cofnięcie, wymiana karty)',
        'Dyrektywa Rady 2003/109/WE o statusie obywateli państw trzecich będących rezydentami długoterminowymi',
        'Rozporządzenie MSWiA ws. wysokości opłat za wydanie zezwolenia (640 PLN)',
        'Ustawa z dnia 12 marca 2022 r. o pomocy obywatelom Ukrainy - ochrona czasowa do 4 marca 2027 r.'
      ]
    },
    faq: [
      { q: 'Чем статус резидента ЕС отличается от karty stałego pobytu?', a: 'Основанием. Pobyt stały (art. 195) дают за связи с Польшей: брак с гражданином, польское происхождение, Karta Polaka, статус беженца. Резидент ЕС (art. 211) - за экономическую интеграцию: 5 лет пребывания, доход и B1. Оба разрешения бессрочные и дают почти одинаковые права внутри Польши. Разница в двух деталях: карта резидента ЕС меняется каждые 5 лет (у pobytu stałego - каждые 10), зато статус резидента ЕС даёт право по упрощённой процедуре переехать жить и работать в другую страну ЕС.' },
      { q: 'Засчитывается ли период по статусу UKR (ochrona czasowa)?', a: 'Нет. Позиция Szefa Urzędu do Spraw Cudzoziemców однозначна: время пребывания по ochronie czasowej для граждан Украины в пятилетний стаж для резидента ЕС не входит. Стаж начинает копиться только с момента, когда вы перешли на обычное zezwolenie na pobyt czasowy - рабочую или бизнес-карту. Сама ochrona czasowa продлена до 4 марта 2027 года, и это как раз повод не тянуть с переходом на karta pobytu: чем раньше переход, тем раньше стартует счётчик.' },
      { q: 'Обязателен ли сертификат B1 и можно ли его обойти?', a: 'Обязателен - это жёсткое условие art. 211, и без сертификата воевода откажет. Обойти можно только двумя документами: свидетельством об окончании польской школы (podstawowa, liceum, technikum) или дипломом польского вуза с приложением, где указан польский язык обучения. Дети до 16 лет от требования освобождены. Языковые курсы, справки от школ и внутренние тесты не подходят - нужен именно государственный сертификат PKPZJPjOJO уровня B1 или выше.' },
      { q: 'Сколько лет учёбы засчитывается в пятилетний стаж?', a: 'Ровно половина. Пять лет учёбы в польском вузе дают 2,5 года стажа. Практически это значит: выпускник магистратуры, который сразу после диплома перешёл на рабочую карту, выйдет на пять лет примерно через 7-8 лет от приезда. Если планируете статус резидента ЕС, переходить с учебной карты на рабочую или бизнес выгодно как можно раньше - каждый год работы идёт в зачёт полностью.' },
      { q: 'Сколько можно отсутствовать в Польше, чтобы не сбить стаж?', a: 'Одна непрерывная поездка - максимум 6 месяцев. Суммарно за пятилетний период - не больше 10 месяцев. Служебная командировка (delegacja) до 6 месяцев считается пребыванием в Польше и стаж не рвёт. Если превысили лимиты, пятилетний счётчик начинается заново с момента возврата. Это причина номер один среди отказов, поэтому хронологию выездов мы восстанавливаем на первом же аудите - по штампам, билетам и данным SIS.' },
      { q: 'Какой доход считается стабильным и регулярным?', a: 'Закон не даёт фиксированной суммы: доход должен покрывать расходы на содержание вас и членов семьи и не опускаться ниже порога, при котором положена социальная помощь. На практике воеводы смотрят на трёхлетнюю картину: минимальная зарплата 4 806 PLN брутто в 2026 году на одинокого заявителя проходит, а вот полугодовые провалы в доходах или неоплаченные взносы ZUS придётся объяснять письменно. Для JDG и Sp. z o.o. считаем декларации, а не разовые поступления на счёт.' },
      { q: 'Через сколько после статуса резидента ЕС можно подавать на гражданство?', a: 'Через 3 года. Uznanie za obywatela polskiego требует трёх лет непрерывного пребывания по zezwoleniu na pobyt stały, по статусу rezydenta długoterminowego UE или по prawie stałego pobytu - плюс стабильный доход, жильё и тот же сертификат B1, который вы уже получили для резидента ЕС. То есть сертификат работает дважды, и это одна из причин делать статус резидента ЕС, а не просто продлевать временные карты.' },
      { q: 'Даёт ли статус резидента ЕС право жить в другой стране ЕС?', a: 'Даёт право переехать по упрощённой процедуре, но не автоматически. По Директиве 2003/109/WE вы можете подать в другой стране ЕС на пребывание для работы, учёбы или бизнеса на облегчённых условиях - без общей визовой процедуры и без национальных квот. Но местное разрешение всё равно оформляется, и требования к доходу и жилью в каждой стране свои. Автоматического права переехать и работать, как у граждан ЕС, статус не даёт.' },
      { q: 'Что делать, если пришёл отказ?', a: 'У вас 14 дней на odwołanie w Szefa Urzędu do Spraw Cudzoziemców, дальше - жалоба в Wojewódzki Sąd Administracyjny. Чаще всего отказ приходит по трём причинам: разрывы в стаже, недобранный доход или отсутствие сертификата B1. В первых двух случаях мы смотрим, можно ли перекрыть период документами, которые воевода не запросил. Экспресс-разбор решения делаем за 48 часов, и его стоимость зачитывается в гонорар за apelację.' }
    ],
    related: ['karta-stalego-pobytu', 'obywatelstwo', 'karta-pobytu'],
    ctaTitle: 'Посчитаем ваши пять лет бесплатно',
    ctaSubtitle: 'Пришлите историю виз и карт - за 30 минут скажем, хватает ли стажа, что засчитывается, а что нет, и когда реально подаваться. Если не хватает - составим план, как добрать месяцы без риска обнулить счётчик.'
  },
  pl: {
    slug: 'rezydent-ue',
    group: 'immigration',
    icon: 'id-card',
    badge: 'Art. 211 · 5 lat · B1',
    title: 'Zezwolenie na pobyt rezydenta długoterminowego UE',
    subtitle: 'Bezterminowy status na podstawie ekonomicznej: 5 lat pobytu, certyfikat B1 i stabilny dochód',
    lead: 'Zezwolenie na pobyt rezydenta długoterminowego UE to druga - obok pobytu stałego - droga do statusu bezterminowego w Polsce. Różnica jest zasadnicza: pobyt stały (art. 195 u.o.c.) opiera się na więzach z Polską (małżeństwo z obywatelem, pochodzenie, Karta Polaka), a status rezydenta - na integracji ekonomicznej: 5 lat legalnego i nieprzerwanego pobytu, stabilny dochód oraz znajomość języka polskiego na poziomie B1 potwierdzona certyfikatem państwowym. Zezwolenie wydaje się na czas nieoznaczony, kartę pobytu wymienia się co 5 lat. Opłata skarbowa - 640 PLN plus 100 PLN za blankiet karty, ustawowy termin decyzji - 6 miesięcy. Przewaga nad pobytem stałym: prawo do przeniesienia pobytu do innego państwa UE na uproszczonych zasadach. Główna pułapka: okres ochrony czasowej (status UKR) NIE wlicza się do pięciu lat, a okres studiów - tylko w połowie.',
    facts: [
      { label: 'Podstawa', value: 'Art. 211 u.o.c.', note: '5 lat legalnie i nieprzerwanie' },
      { label: 'Opłata', value: '640 + 100 PLN', note: 'wniosek + blankiet karty' },
      { label: 'Język', value: 'B1 obowiązkowo', note: 'certyfikat państwowy · dzieci do 16 lat - nie' },
      { label: 'Okres ważności', value: 'Bezterminowo', note: 'karta wymieniana co 5 lat' }
    ],
    grounds: {
      title: 'Dla kogo jest status rezydenta długoterminowego UE',
      subtitle: 'To ścieżka dla osób, które mieszkają w Polsce z powodu pracy, biznesu lub kontraktów - bez małżeństwa z obywatelem i bez polskich korzeni.',
      items: [
        { title: 'Praca najemna', desc: 'Pięć lat na umowie o pracę, umowie zlecenie lub ich kombinacji na kartach czasowego pobytu. Zmiana pracodawców nie ma znaczenia - liczy się ciągłość legalnego pobytu, a nie jedno miejsce pracy.' },
        { title: 'Biznes: JDG lub Sp. z o.o.', desc: 'Lata pobytu na karcie wydanej w związku z własną firmą wliczają się w całości. Dochód potwierdzamy PIT/CIT, wyciągami i zaświadczeniami ZUS/US. Przy spółce jednoosobowej liczymy zarówno dywidendę, jak i wynagrodzenie członka zarządu.' },
        { title: 'Niebieska Karta UE', desc: 'Okres na Niebieskiej Karcie wlicza się w całości, a co ważniejsze - można kumulować okresy z Niebieskiej Karty w innych państwach UE. To znacznie skraca dojście do pięciu lat dla specjalistów IT i inżynierów.' },
        { title: 'Studia - tylko 50% okresu', desc: 'Lata nauki w polskiej uczelni lub szkole liczą się w połowie: 4 lata studiów dają 2 lata stażu. W praktyce absolwent dochodzi do pięciu lat po 7-8 latach od przyjazdu, jeśli po dyplomie nie przeszedł od razu na kartę z tytułu pracy.' },
        { title: 'Czego nie wlicza się wcale', desc: 'Okres ochrony czasowej (status UKR na podstawie ustawy o pomocy obywatelom Ukrainy), praca sezonowa, oddelegowanie do świadczenia usług, pobyt na wizie Schengen kategorii C oraz czas po wydaniu decyzji o zobowiązaniu do powrotu. Dla obywateli Ukrainy to kluczowa informacja: lata na PESEL UKR nie liczą się, staż startuje od przejścia na zwykłe zezwolenie na pobyt czasowy.' },
        { title: 'Dopuszczalne przerwy w pobycie', desc: 'Jednorazowy wyjazd - maksymalnie 6 miesięcy. Łącznie w pięcioletnim okresie - nie więcej niż 10 miesięcy. Delegacja służbowa do 6 miesięcy jest traktowana jak pobyt w Polsce. Przekroczenie limitów zeruje licznik pięciu lat i jest najczęstszą przyczyną odmów.' }
      ]
    },
    timeline: {
      title: 'Jak wygląda sprawa',
      subtitle: 'Ustawa daje wojewodzie 6 miesięcy. Realnie w Mazowieckim Urzędzie Wojewódzkim w 2026 r. decyzja zajmuje 8-16 miesięcy, więc wniosek warto złożyć z wyprzedzeniem.',
      steps: [
        { title: 'Audyt stażu pobytowego', duration: '1-2 dni', desc: 'Odtwarzamy całą historię pobytu: wizy, karty, decyzje, stemple, wyjazdy. Liczymy, ile dni faktycznie się wlicza, odejmujemy połowę okresu studiów i okresy wyłączone. Często brakuje 4-8 miesięcy - lepiej dowiedzieć się teraz niż po odmowie.' },
        { title: 'Certyfikat B1', duration: '2-5 miesięcy', desc: 'Bez certyfikatu sprawa nie przejdzie. Egzamin państwowy odbywa się w sesjach kilka razy w roku, zapisy zamykają się wcześniej. Dobieramy najbliższą sesję, przygotowujemy do części pisemnej i ustnej, zapisujemy. Świadectwo polskiej szkoły lub dyplom uczelni z polskim językiem wykładowym zastępuje egzamin.' },
        { title: 'Dochód i dokumenty', duration: '2-4 tygodnie', desc: 'Zbieramy potwierdzenie stabilnego i regularnego dochodu za ostatnie 3 lata, ubezpieczenie zdrowotne, tytuł do lokalu (własność, najem, użyczenie), zaświadczenia z ZUS i US o niezaleganiu.' },
        { title: 'Złożenie przez MOS', duration: '1 dzień', desc: 'Wypełniamy wniosek w systemie MOS, opłacamy 640 PLN, ustalamy termin złożenia odcisków palców. Otrzymujesz UPO - potwierdzenie przyjęcia, które legalizuje pobyt do wydania decyzji.' },
        { title: 'Prowadzenie i decyzja', duration: '8-16 miesięcy', desc: 'Odpowiadamy na wezwania wojewody, uzupełniamy dokumenty, przy przewlekłości składamy ponaglenie, w razie potrzeby skargę do WSA. Po decyzji pozytywnej - 100 PLN za kartę i odbiór.' }
      ]
    },
    documents: {
      title: 'Co będzie potrzebne',
      subtitle: 'Rdzeń wniosku to dowód pięciu lat i certyfikat B1. Reszta zależy od źródła dochodu.',
      items: [
        'Paszport + wszystkie poprzednie karty pobytu i decyzje',
        'Certyfikat znajomości języka polskiego na poziomie B1 (lub dyplom polskiej szkoły/uczelni)',
        'Potwierdzenie dochodu za 3 lata: PIT-37/36/CIT, umowy, wyciągi bankowe',
        'Zaświadczenie z ZUS o okresach ubezpieczenia i z US o niezaleganiu',
        'Ubezpieczenie zdrowotne lub potwierdzenie z NFZ',
        'Tytuł prawny do lokalu: akt własności, umowa najmu lub użyczenia',
        '4 zdjęcia biometryczne 35×45 mm',
        'Dowód opłaty skarbowej 640 PLN',
        'Chronologia wyjazdów z Polski za 5 lat - przygotowujemy ją razem z Tobą'
      ]
    },
    pricing: {
      title: 'Koszt obsługi',
      subtitle: 'Stałe honorarium za etap. Opłaty urzędowe, egzamin B1 i tłumaczenia przysięgłe rozliczane osobno.',
      items: [
        { label: 'Konsultacja i audyt stażu', value: 'Gratis', note: '30-60 min · liczymy Twoje 5 lat' },
        { label: 'Rezydent UE pod klucz', value: 'od 2 000 PLN', note: 'Od wyliczenia stażu do odbioru karty' },
        { label: 'Przygotowanie do egzaminu B1', value: 'od 1 200 PLN', note: 'Zapis na sesję + omówienie części egzaminu' },
        { label: 'Odwołanie po odmowie', value: 'od 1 800 PLN', note: 'Odrębna umowa' }
      ],
      note: 'Opłaty urzędowe: 640 PLN za wniosek, 100 PLN za blankiet karty. Egzamin certyfikatowy B1 - około 300-400 PLN plus 20 PLN za certyfikat. Tłumaczenia przysięgłe dokumentów zagranicznych rozliczane osobno. Dokładną kwotę ustalamy w umowie po bezpłatnym audycie stażu.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach - art. 211 (przesłanki udzielenia zezwolenia)',
        'Ustawa o cudzoziemcach - art. 212 (liczenie okresu pobytu, okresy nieuwzględniane)',
        'Ustawa o cudzoziemcach - art. 216-221 (odmowa, cofnięcie, wymiana karty)',
        'Dyrektywa Rady 2003/109/WE dotycząca statusu obywateli państw trzecich będących rezydentami długoterminowymi',
        'Rozporządzenie MSWiA ws. wysokości opłat za wydanie zezwolenia (640 PLN)',
        'Ustawa z dnia 12 marca 2022 r. o pomocy obywatelom Ukrainy - ochrona czasowa do 4 marca 2027 r.'
      ]
    },
    faq: [
      { q: 'Czym rezydent długoterminowy UE różni się od pobytu stałego?', a: 'Podstawą. Pobyt stały (art. 195) przysługuje za więzy z Polską: małżeństwo z obywatelem, pochodzenie, Karta Polaka, status uchodźcy. Rezydent UE (art. 211) - za integrację ekonomiczną: 5 lat pobytu, dochód i B1. Oba zezwolenia są bezterminowe i dają niemal identyczne prawa w Polsce. Różnice są dwie: karta rezydenta UE wymieniana jest co 5 lat (przy pobycie stałym co 10), ale status rezydenta daje prawo do przeniesienia pobytu do innego państwa UE na uproszczonych zasadach.' },
      { q: 'Czy okres statusu UKR (ochrony czasowej) wlicza się do 5 lat?', a: 'Nie. Stanowisko Szefa Urzędu do Spraw Cudzoziemców jest jednoznaczne: pobyt na podstawie ochrony czasowej dla obywateli Ukrainy nie wlicza się do pięcioletniego okresu wymaganego dla rezydenta długoterminowego UE. Staż zaczyna się od momentu przejścia na zwykłe zezwolenie na pobyt czasowy - z tytułu pracy lub działalności. Ochrona czasowa obowiązuje do 4 marca 2027 r., więc im szybciej nastąpi przejście na kartę pobytu, tym szybciej wystartuje licznik.' },
      { q: 'Czy certyfikat B1 jest obowiązkowy i czy można go pominąć?', a: 'Jest obowiązkowy - to twardy warunek art. 211 i bez certyfikatu wojewoda odmówi. Zastąpić go mogą wyłącznie dwa dokumenty: świadectwo ukończenia polskiej szkoły (podstawowej, liceum, technikum) albo dyplom polskiej uczelni z suplementem wskazującym polski język wykładowy. Dzieci do 16 lat są zwolnione. Zaświadczenia z kursów językowych i testy wewnętrzne nie wystarczają - potrzebny jest państwowy certyfikat na poziomie B1 lub wyższym.' },
      { q: 'Ile lat studiów wlicza się do pięcioletniego stażu?', a: 'Dokładnie połowa. Pięć lat studiów w polskiej uczelni daje 2,5 roku stażu. Praktycznie oznacza to, że absolwent, który po dyplomie od razu przeszedł na kartę z tytułu pracy, osiągnie pięć lat po 7-8 latach od przyjazdu. Jeśli planujesz status rezydenta UE, przejście ze studenckiej karty na pracowniczą lub biznesową warto zrobić jak najszybciej - każdy rok pracy liczy się w pełni.' },
      { q: 'Ile można przebywać poza Polską, żeby nie stracić stażu?', a: 'Jeden nieprzerwany wyjazd - maksymalnie 6 miesięcy. Łącznie w okresie pięciu lat - nie więcej niż 10 miesięcy. Delegacja służbowa do 6 miesięcy jest traktowana jak pobyt w Polsce i nie przerywa ciągłości. Po przekroczeniu limitów licznik pięciu lat startuje od nowa od momentu powrotu. To przyczyna odmowy numer jeden, dlatego chronologię wyjazdów odtwarzamy już na pierwszym audycie - po stemplach, biletach i danych SIS.' },
      { q: 'Jaki dochód uznaje się za stabilny i regularny?', a: 'Ustawa nie podaje sztywnej kwoty: dochód musi pokrywać koszty utrzymania Ciebie i członków rodziny i nie może być niższy niż progi uprawniające do pomocy społecznej. W praktyce wojewodowie patrzą na trzy lata: minimalne wynagrodzenie 4 806 PLN brutto w 2026 r. dla samotnego wnioskodawcy przechodzi, ale półroczne luki w dochodach lub nieopłacone składki ZUS wymagają pisemnego wyjaśnienia. Przy JDG i Sp. z o.o. liczymy deklaracje, nie jednorazowe wpływy na konto.' },
      { q: 'Po jakim czasie od uzyskania statusu można starać się o obywatelstwo?', a: 'Po 3 latach. Uznanie za obywatela polskiego wymaga trzech lat nieprzerwanego pobytu na podstawie zezwolenia na pobyt stały, statusu rezydenta długoterminowego UE albo prawa stałego pobytu - plus stabilnego dochodu, tytułu do lokalu i tego samego certyfikatu B1, który już masz. Certyfikat pracuje więc dwukrotnie i to jeden z argumentów, żeby zrobić status rezydenta, a nie tylko przedłużać karty czasowe.' },
      { q: 'Czy status rezydenta UE pozwala mieszkać w innym kraju UE?', a: 'Daje prawo do przeniesienia pobytu na uproszczonych zasadach, ale nie automatycznie. Zgodnie z Dyrektywą 2003/109/WE możesz złożyć w innym państwie UE wniosek o pobyt w celu pracy, studiów lub działalności na łatwiejszych warunkach - bez zwykłej procedury wizowej i limitów krajowych. Miejscowe zezwolenie trzeba jednak uzyskać, a wymogi dochodowe i lokalowe każde państwo ustala samo. Automatycznego prawa do pracy jak u obywateli UE status nie daje.' },
      { q: 'Co zrobić po odmowie?', a: 'Masz 14 dni na odwołanie do Szefa Urzędu do Spraw Cudzoziemców, następnie skargę do Wojewódzkiego Sądu Administracyjnego. Odmowy zwykle wynikają z trzech powodów: przerwy w stażu, niewystarczający dochód lub brak certyfikatu B1. W dwóch pierwszych sprawdzamy, czy okres da się wykazać dokumentami, o które wojewoda nie zapytał. Ekspresową analizę decyzji robimy w 48 godzin, a jej koszt zaliczamy na poczet honorarium za odwołanie.' }
    ],
    related: ['karta-stalego-pobytu', 'obywatelstwo', 'karta-pobytu'],
    ctaTitle: 'Policzymy Twoje pięć lat bezpłatnie',
    ctaSubtitle: 'Wyślij historię wiz i kart - w 30 minut powiemy, czy staż wystarcza, co się wlicza, a co nie, i kiedy realnie składać wniosek. Jeśli brakuje - ułożymy plan, jak dobrać miesiące bez ryzyka zerowania licznika.'
  },
  en: {
    slug: 'rezydent-ue',
    group: 'immigration',
    icon: 'id-card',
    badge: 'Art. 211 · 5 years · B1',
    title: 'EU long-term resident permit in Poland',
    subtitle: 'Indefinite status on economic grounds: five years of residence, a B1 certificate and stable income',
    lead: 'The EU long-term resident permit (zezwolenie na pobyt rezydenta długoterminowego UE) is the second route to indefinite status in Poland, alongside permanent residence. The distinction matters: permanent residence (art. 195) is granted for ties to Poland - marriage to a citizen, Polish origin, Karta Polaka - while long-term resident status is granted for economic integration: five years of legal, uninterrupted residence, stable income and Polish at B1 level confirmed by a state certificate. The permit itself is indefinite; the card is replaced every five years. The stamp duty is 640 PLN plus 100 PLN for the card blank, and the statutory decision deadline is six months. The advantage over permanent residence: a simplified route to move to another EU member state. The main trap: time spent under temporary protection (UKR status) does NOT count toward the five years, and time spent studying counts only by half.',
    facts: [
      { label: 'Legal basis', value: 'Art. 211 u.o.c.', note: '5 years legal and uninterrupted' },
      { label: 'Official fees', value: '640 + 100 PLN', note: 'application + card blank' },
      { label: 'Language', value: 'B1 required', note: 'state certificate · under 16 exempt' },
      { label: 'Validity', value: 'Indefinite', note: 'card replaced every 5 years' }
    ],
    grounds: {
      title: 'Who the EU long-term resident route fits',
      subtitle: 'This is the path for people living in Poland on work, business or contracts - with no Polish spouse and no Polish ancestry.',
      items: [
        { title: 'Employment', desc: 'Five years on an employment contract, a service contract or a mix of both, held on temporary residence cards. Changing employers is irrelevant - what counts is the continuity of legal residence, not one job.' },
        { title: 'Business: JDG or Sp. z o.o.', desc: 'Years spent on a residence card granted through your own company count in full. Income is evidenced with PIT/CIT filings, bank statements and ZUS/US certificates. For an owner-managed Sp. z o.o. we count both dividends and board-member remuneration.' },
        { title: 'EU Blue Card', desc: 'Blue Card periods count in full, and - crucially - Blue Card periods spent in other EU member states can be aggregated. That shortens the road to five years considerably for IT and engineering specialists.' },
        { title: 'Studies count at 50%', desc: 'Years spent studying at a Polish university or school count only by half: four years of a master\'s programme yield two years of qualifying residence. In practice a graduate reaches five years 7-8 years after arrival unless they switched to a work-based card immediately after the diploma.' },
        { title: 'What does not count at all', desc: 'Temporary protection (UKR status under the special act for Ukrainian citizens), seasonal work, secondment for cross-border services, stays on a Schengen C visa, and time after a return decision. For Ukrainian nationals this is the key point: years on PESEL UKR do not count, and the clock starts only once you switch to an ordinary temporary residence permit.' },
        { title: 'Permitted gaps in residence', desc: 'A single trip abroad may not exceed six consecutive months; the total across the five years may not exceed ten months. A business posting of up to six months is treated as residence in Poland. Exceed either limit and the five-year clock resets - this is the single most common reason for refusals.' }
      ]
    },
    timeline: {
      title: 'How the case runs',
      subtitle: 'The statute gives the voivode six months. In practice Mazowieckie in 2026 takes 8-16 months, so file well ahead of time.',
      steps: [
        { title: 'Residence audit', duration: '1-2 days', desc: 'We reconstruct your full residence history: visas, cards, decisions, stamps, departures. We count the days that actually qualify, halve the study period and strip out excluded periods. It often turns out that 4-8 months are missing - far better to learn that now than after a refusal.' },
        { title: 'B1 certificate', duration: '2-5 months', desc: 'The case will not pass without the certificate. The state exam runs in sessions a few times a year and registration closes early. We find the nearest session, prepare you for the written and oral parts and handle the registration. A Polish school certificate or a Polish university diploma with Polish as the language of instruction replaces the exam.' },
        { title: 'Income and documents', duration: '2-4 weeks', desc: 'We assemble evidence of stable and regular income over the last three years, health insurance, title to accommodation (ownership, lease or loan of premises) and ZUS/US no-arrears certificates.' },
        { title: 'Filing through MOS', duration: '1 day', desc: 'We complete the application in the MOS system, pay the 640 PLN duty and book the fingerprinting slot. You receive the UPO confirmation, which legalises your stay until the decision.' },
        { title: 'Handling and decision', duration: '8-16 months', desc: 'We answer the voivode\'s requests, supplement the file, file a ponaglenie against delay and, where needed, a complaint to the regional administrative court. After a positive decision: 100 PLN for the card and collection.' }
      ]
    },
    documents: {
      title: 'What you will need',
      subtitle: 'The core of the file is proof of five years plus the B1 certificate. The rest depends on your income source.',
      items: [
        'Passport plus all previous residence cards and decisions',
        'State certificate of Polish at B1 level (or a Polish school/university diploma)',
        'Income evidence for three years: PIT-37/36/CIT, contracts, bank statements',
        'ZUS certificate of insurance periods and a tax-office no-arrears certificate',
        'Health insurance or NFZ confirmation',
        'Title to accommodation: ownership deed, lease or loan-of-premises agreement',
        'Four biometric photos 35×45 mm',
        'Proof of the 640 PLN stamp duty',
        'A chronology of departures from Poland over five years - we build it with you'
      ]
    },
    pricing: {
      title: 'Our fees',
      subtitle: 'Fixed fee per stage. Official fees, the B1 exam and sworn translations are billed separately.',
      items: [
        { label: 'Consultation and residence audit', value: 'Free', note: '30-60 min · we count your five years' },
        { label: 'EU long-term resident, end-to-end', value: 'from 2,000 PLN', note: 'From the residence count to card collection' },
        { label: 'B1 exam preparation', value: 'from 1,200 PLN', note: 'Session booking + exam-part coaching' },
        { label: 'Appeal after refusal', value: 'from 1,800 PLN', note: 'Separate agreement' }
      ],
      note: 'Official fees: 640 PLN for the application, 100 PLN for the card blank. The B1 certificate exam costs roughly 300-400 PLN plus 20 PLN for the certificate itself. Sworn translations of foreign documents are billed separately. The exact figure goes into the agreement after the free residence audit.'
    },
    legalBase: {
      title: 'Legal framework',
      items: [
        'Act of 12 December 2013 on foreigners - art. 211 (conditions for granting the permit)',
        'Act on foreigners - art. 212 (counting the residence period, excluded periods)',
        'Act on foreigners - art. 216-221 (refusal, withdrawal, card replacement)',
        'Council Directive 2003/109/EC on the status of third-country nationals who are long-term residents',
        'MSWiA regulation on permit fees (640 PLN)',
        'Act of 12 March 2022 on assistance to Ukrainian citizens - temporary protection until 4 March 2027'
      ]
    },
    faq: [
      { q: 'How does EU long-term resident status differ from permanent residence?', a: 'By the grounds. Permanent residence (art. 195) is granted for ties to Poland: marriage to a citizen, Polish origin, Karta Polaka, refugee status. EU long-term resident status (art. 211) is granted for economic integration: five years of residence, income and B1. Both permits are indefinite and confer almost identical rights inside Poland. Two differences: the EU resident card is replaced every five years (permanent residence: every ten), but EU resident status carries a simplified right to move your residence to another EU member state.' },
      { q: 'Does time under UKR status (temporary protection) count toward the five years?', a: 'No. The position of the Head of the Office for Foreigners is unambiguous: residence under temporary protection for Ukrainian citizens does not count toward the five-year period required for EU long-term resident status. The clock starts only from the moment you switch to an ordinary temporary residence permit based on work or business. Temporary protection runs until 4 March 2027, which is precisely why switching to a residence card early matters - the earlier the switch, the earlier the clock starts.' },
      { q: 'Is the B1 certificate mandatory, and can it be avoided?', a: 'It is mandatory - a hard condition of art. 211, and without it the voivode will refuse. Only two documents substitute for it: a Polish school certificate (primary, liceum or technikum) or a Polish university diploma with a supplement showing Polish as the language of instruction. Children under 16 are exempt. Language-course certificates and internal placement tests do not qualify: it must be the state certificate at B1 or above.' },
      { q: 'How much of a study period counts toward the five years?', a: 'Exactly half. Five years at a Polish university yield 2.5 qualifying years. In practice, a graduate who moved straight onto a work-based card after the diploma reaches five years roughly 7-8 years after arrival. If EU resident status is the goal, switching from a student card to a work or business card as early as possible pays off - every year of work counts in full.' },
      { q: 'How long can I stay outside Poland without breaking the residence period?', a: 'A single uninterrupted trip: six months maximum. Across the five years in total: ten months maximum. A business posting of up to six months counts as residence in Poland and does not break continuity. Exceed the limits and the five-year clock restarts from your return. This is refusal reason number one, which is why we reconstruct the departure chronology at the first audit - from stamps, tickets and SIS records.' },
      { q: 'What income counts as stable and regular?', a: 'The statute sets no fixed amount: income must cover the cost of maintaining you and your family members and must not fall below the social-assistance thresholds. In practice voivodes look at a three-year picture: the 2026 minimum wage of 4,806 PLN gross clears the bar for a single applicant, but six-month income gaps or unpaid ZUS contributions require a written explanation. For JDG and Sp. z o.o. we work from filed returns, not one-off transfers.' },
      { q: 'How soon after this status can I apply for citizenship?', a: 'After three years. Recognition as a Polish citizen requires three years of uninterrupted residence on a permanent residence permit, EU long-term resident status or a right of permanent residence - plus stable income, accommodation and the same B1 certificate you already hold. The certificate therefore does double duty, which is one reason to pursue long-term resident status rather than simply renewing temporary cards.' },
      { q: 'Does the status let me live in another EU country?', a: 'It grants a simplified route, not an automatic right. Under Directive 2003/109/EC you may apply in another member state for residence for work, study or business on easier terms - outside the general visa procedure and national quotas. A local permit is still issued, and each state sets its own income and accommodation requirements. The status does not confer free movement equivalent to EU citizenship.' },
      { q: 'What if the application is refused?', a: 'You have 14 days to appeal to the Head of the Office for Foreigners, then the option of a complaint to the regional administrative court. Refusals usually come down to three causes: gaps in the residence period, insufficient income, or a missing B1 certificate. For the first two we check whether the period can be evidenced with documents the voivode never asked for. We run an express review of the decision within 48 hours and credit its cost against the appeal fee.' }
    ],
    related: ['karta-stalego-pobytu', 'obywatelstwo', 'karta-pobytu'],
    ctaTitle: 'We will count your five years for free',
    ctaSubtitle: 'Send us your visa and card history and within 30 minutes you will know whether the residence period is sufficient, what counts and what does not, and when to file. If it falls short, we map out how to make up the months without resetting the clock.'
  },
  tr: {
    slug: 'rezydent-ue',
    group: 'immigration',
    icon: 'id-card',
    badge: 'Art. 211 · 5 yıl · B1',
    title: 'AB uzun dönem ikamet izni (rezydent długoterminowy UE)',
    subtitle: 'Ekonomik gerekçeyle süresiz statü: 5 yıl ikamet, B1 sertifikası ve istikrarlı gelir',
    lead: 'Zezwolenie na pobyt rezydenta długoterminowego UE, Polonya\'da süresiz statüye giden ikinci yoldur - birincisi karta stałego pobytu (daimi ikamet). Fark önemlidir: daimi ikamet Polonya ile bağlar için verilir (Polonya vatandaşıyla evlilik, Polonya kökeni, Karta Polaka), AB uzun dönem ikamet statüsü ise ekonomik uyum için: 5 yıl yasal ve kesintisiz ikamet, istikrarlı gelir ve devlet sertifikasıyla belgelenmiş B1 seviyesinde Lehçe. İzin süresiz verilir, kart her 5 yılda yenilenir. Harç 640 PLN artı kart için 100 PLN, yasal karar süresi 6 aydır. Daimi ikamete göre avantajı: başka bir AB ülkesine basitleştirilmiş usulle taşınma hakkı. En büyük tuzağı: ochrona czasowa (UKR statüsü) süresi beş yıla SAYILMAZ, öğrencilik süresi ise yalnızca yarısı kadar sayılır.',
    facts: [
      { label: 'Yasal dayanak', value: 'Art. 211 u.o.c.', note: '5 yıl yasal ve kesintisiz' },
      { label: 'Resmi harçlar', value: '640 + 100 PLN', note: 'başvuru + kart' },
      { label: 'Dil', value: 'B1 zorunlu', note: 'devlet sertifikası · 16 yaş altı muaf' },
      { label: 'Geçerlilik', value: 'Süresiz', note: 'kart her 5 yılda yenilenir' }
    ],
    grounds: {
      title: 'AB uzun dönem ikamet statüsü kime uygun',
      subtitle: 'Bu yol, Polonya\'da iş, şirket veya sözleşmeler nedeniyle yaşayanlar içindir - Polonyalı eş ve Polonya kökeni olmadan.',
      items: [
        { title: 'Ücretli çalışma', desc: 'Karta czasowego pobytu üzerinde umowa o pracę, umowa zlecenie veya bunların birleşimiyle beş yıl. İşveren değişiklikleri önemsizdir - tek bir iş yeri değil, yasal ikametin sürekliliği sayılır.' },
        { title: 'İş: JDG veya Sp. z o.o.', desc: 'Kendi şirketiniz üzerinden alınan ikamet kartındaki yıllar tam sayılır. Gelir PIT/CIT beyanları, hesap dökümleri ve ZUS/US belgeleriyle kanıtlanır. Tek ortaklı Sp. z o.o. için hem temettü hem yönetim kurulu üyesi ücreti hesaba katılır.' },
        { title: 'AB Mavi Kartı', desc: 'Mavi Kart süresi tam sayılır ve daha önemlisi, diğer AB ülkelerinde Mavi Kart ile geçirilen süreler birleştirilebilir. Bu, BT ve mühendislik uzmanları için beş yıla ulaşmayı belirgin şekilde kısaltır.' },
        { title: 'Öğrencilik - sürenin yalnızca %50\'si', desc: 'Polonya üniversitesinde veya okulunda geçen yıllar yarım sayılır: 4 yıllık yüksek lisans 2 yıl kıdem verir. Pratikte mezun, diplomadan hemen sonra çalışma kartına geçmemişse beş yıla gelişten 7-8 yıl sonra ulaşır.' },
        { title: 'Hiç sayılmayanlar', desc: 'Ochrona czasowa süresi (Ukrayna vatandaşları için özel kanuna dayalı UKR statüsü), praca sezonowa (mevsimlik iş), hizmet sunumu için görevlendirme, C tipi Schengen vizesiyle ikamet ve sınır dışı kararı sonrası süre. Ukrayna vatandaşları için kritik nokta: PESEL UKR ile geçen yıllar sayılmaz, kıdem ancak normal karta pobytu\'ya geçişle başlar.' },
        { title: 'İzin verilen ikamet kesintileri', desc: 'Tek seyahat en fazla 6 ay kesintisiz. Beş yılda toplam en fazla 10 ay. 6 aya kadar iş seyahati Polonya\'da ikamet sayılır. Limitleri aşarsanız beş yıllık sayaç sıfırlanır - bu, ret kararlarının en yaygın nedenidir.' }
      ]
    },
    timeline: {
      title: 'Dosya nasıl ilerler',
      subtitle: 'Kanun valiye 6 ay verir. Gerçekte Mazowiecki Urząd Wojewódzki\'de 2026\'da karar 8-16 ay sürer, bu yüzden erken başvurmak gerekir.',
      steps: [
        { title: 'Kıdem denetimi', duration: '1-2 gün', desc: 'Tüm ikamet geçmişini çıkarıyoruz: vizeler, kartlar, kararlar, damgalar, çıkışlar. Gerçekten sayılan günleri hesaplıyor, öğrencilik süresini yarıya indiriyor, hariç tutulan dönemleri çıkarıyoruz. Sıklıkla 4-8 ay eksik çıkar - bunu şimdi öğrenmek ret kararından sonra öğrenmekten iyidir.' },
        { title: 'B1 sertifikası', duration: '2-5 ay', desc: 'Sertifika olmadan dosya geçmez. Devlet sınavı yılda birkaç kez oturumlarla yapılır, kayıtlar önceden kapanır. En yakın oturumu buluyor, yazılı ve sözlü bölümlere hazırlıyor, kaydı yapıyoruz. Polonya okul diploması veya Lehçe eğitim veren üniversite diploması sınavın yerine geçer.' },
        { title: 'Gelir ve belgeler', duration: '2-4 hafta', desc: 'Son 3 yıla ait istikrarlı ve düzenli gelir kanıtı, sağlık sigortası, konut hakkı belgesi (mülkiyet, kira, kullanım) ve ZUS/US borcu yoktur belgelerini topluyoruz.' },
        { title: 'MOS üzerinden başvuru', duration: '1 gün', desc: 'MOS sisteminde wniosek dolduruyor, 640 PLN ödüyor, parmak izi randevusunu alıyoruz. UPO alırsınız - karar çıkana kadar ikametinizi yasallaştıran kabul belgesi.' },
        { title: 'Takip ve karar', duration: '8-16 ay', desc: 'Valilik yazılarına yanıt veriyor, belge tamamlıyor, gecikmede ponaglenie, gerekirse WSA\'ya şikayet veriyoruz. Olumlu karar sonrası kart için 100 PLN ve teslim.' }
      ]
    },
    documents: {
      title: 'Neler gerekli',
      subtitle: 'Dosyanın çekirdeği beş yılın kanıtı ve B1 sertifikasıdır. Gerisi gelir kaynağınıza bağlıdır.',
      items: [
        'Pasaport + tüm önceki ikamet kartları ve kararlar',
        'B1 seviyesinde Lehçe devlet sertifikası (veya Polonya okul/üniversite diploması)',
        '3 yıllık gelir kanıtı: PIT-37/36/CIT, sözleşmeler, hesap dökümleri',
        'ZUS sigorta dönemleri belgesi ve US borcu yoktur belgesi',
        'Sağlık sigortası veya NFZ belgesi',
        'Konut hakkı belgesi: tapu, kira veya kullanım sözleşmesi',
        '4 biyometrik fotoğraf 35×45 mm',
        '640 PLN opłata skarbowa ödeme belgesi',
        '5 yıllık Polonya çıkış kronolojisi - sizinle birlikte hazırlıyoruz'
      ]
    },
    pricing: {
      title: 'Hizmet bedeli',
      subtitle: 'Aşama başına sabit ücret. Resmi harçlar, B1 sınavı ve yeminli tercümeler ayrıca faturalanır.',
      items: [
        { label: 'Danışmanlık ve kıdem denetimi', value: 'Ücretsiz', note: '30-60 dk · beş yılınızı hesaplarız' },
        { label: 'Anahtar teslim AB uzun dönem ikamet', value: '2.000 PLN\'den', note: 'Kıdem hesabından kart teslimine' },
        { label: 'B1 sınavına hazırlık', value: '1.200 PLN\'den', note: 'Oturum kaydı + sınav bölümleri çalışması' },
        { label: 'Ret kararına itiraz', value: '1.800 PLN\'den', note: 'Ayrı sözleşme' }
      ],
      note: 'Resmi harçlar: başvuru için 640 PLN, kart için 100 PLN. B1 sertifika sınavı yaklaşık 300-400 PLN artı sertifika için 20 PLN. Yabancı belgelerin yeminli tercümeleri ayrıca faturalanır. Kesin tutarı ücretsiz kıdem denetiminden sonra sözleşmede belirliyoruz.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        '12 Aralık 2013 tarihli yabancılar kanunu - art. 211 (izin verilme koşulları)',
        'Yabancılar kanunu - art. 212 (ikamet süresinin hesabı, sayılmayan dönemler)',
        'Yabancılar kanunu - art. 216-221 (ret, iptal, kart yenileme)',
        'Konsey Direktifi 2003/109/AT - uzun dönem ikamet eden üçüncü ülke vatandaşlarının statüsü',
        'MSWiA harç yönetmeliği (640 PLN)',
        '12 Mart 2022 tarihli Ukrayna vatandaşlarına yardım kanunu - ochrona czasowa 4 Mart 2027\'ye kadar'
      ]
    },
    faq: [
      { q: 'AB uzun dönem ikamet statüsü daimi ikametten nasıl farklı?', a: 'Gerekçesiyle. Daimi ikamet (art. 195) Polonya ile bağlar için verilir: vatandaşla evlilik, Polonya kökeni, Karta Polaka, mülteci statüsü. AB uzun dönem ikamet (art. 211) ekonomik uyum için: 5 yıl ikamet, gelir ve B1. İki izin de süresizdir ve Polonya içinde neredeyse aynı hakları verir. İki fark var: AB rezident kartı her 5 yılda yenilenir (daimi ikamette her 10 yıl), buna karşılık AB rezident statüsü başka bir AB ülkesine basitleştirilmiş usulle taşınma hakkı verir.' },
      { q: 'UKR statüsü (ochrona czasowa) süresi beş yıla sayılır mı?', a: 'Hayır. Yabancılar Dairesi Başkanlığı\'nın tutumu nettir: Ukrayna vatandaşları için ochrona czasowa kapsamındaki ikamet, AB uzun dönem ikamet için gerekli beş yıla sayılmaz. Kıdem, iş veya şirket gerekçeli normal zezwolenie na pobyt czasowy\'ye geçtiğiniz andan itibaren başlar. Ochrona czasowa 4 Mart 2027\'ye kadar geçerli, bu yüzden karta pobytu\'ya geçişi geciktirmemek önemli: geçiş ne kadar erken olursa sayaç o kadar erken başlar.' },
      { q: 'B1 sertifikası zorunlu mu, atlanabilir mi?', a: 'Zorunludur - art. 211\'in katı koşulu ve sertifika olmadan vali reddeder. Yerine yalnızca iki belge geçer: Polonya okulu diploması (podstawowa, liceum, technikum) veya Lehçe eğitim dilini gösteren ek ile Polonya üniversitesi diploması. 16 yaş altı çocuklar muaftır. Dil kursu belgeleri ve iç seviye testleri yeterli değildir - B1 veya üzeri devlet sertifikası şarttır.' },
      { q: 'Öğrencilik süresinin ne kadarı sayılır?', a: 'Tam olarak yarısı. Polonya üniversitesinde beş yıl 2,5 yıl kıdem verir. Pratikte diplomadan hemen sonra çalışma kartına geçen mezun, gelişten 7-8 yıl sonra beş yıla ulaşır. AB rezident statüsü hedefiniz ise öğrenci kartından çalışma veya iş kartına mümkün olduğunca erken geçmek işe yarar - her çalışma yılı tam sayılır.' },
      { q: 'Kıdemi bozmadan Polonya dışında ne kadar kalınabilir?', a: 'Tek kesintisiz seyahat en fazla 6 ay. Beş yılda toplam en fazla 10 ay. 6 aya kadar iş seyahati Polonya\'da ikamet sayılır ve sürekliliği bozmaz. Limitler aşılırsa beş yıllık sayaç dönüş tarihinden itibaren yeniden başlar. Bu, bir numaralı ret nedenidir; bu yüzden çıkış kronolojisini ilk denetimde damgalar, biletler ve SIS kayıtlarından yeniden oluşturuyoruz.' },
      { q: 'Hangi gelir istikrarlı ve düzenli sayılır?', a: 'Kanun sabit bir tutar vermez: gelir sizin ve aile üyelerinizin geçim masraflarını karşılamalı ve sosyal yardım eşiklerinin altına düşmemelidir. Pratikte valiler üç yıllık tabloya bakar: 2026\'da 4.806 PLN brüt asgari ücret tek başvurucu için yeterlidir, ancak altı aylık gelir boşlukları veya ödenmemiş ZUS primleri yazılı açıklama gerektirir. JDG ve Sp. z o.o. için hesaba tek seferlik havaleler değil, verilen beyanlar girer.' },
      { q: 'Bu statüden sonra vatandaşlığa ne zaman başvurulabilir?', a: '3 yıl sonra. Uznanie za obywatela polskiego için daimi ikamet izni, AB uzun dönem ikamet statüsü veya prawo stałego pobytu temelinde üç yıl kesintisiz ikamet gerekir - artı istikrarlı gelir, konut ve halihazırda sahip olduğunuz aynı B1 sertifikası. Sertifika böylece iki kez işe yarar; bu da geçici kartları uzatmak yerine rezident statüsü almanın gerekçelerinden biridir.' },
      { q: 'Bu statü başka bir AB ülkesinde yaşama hakkı verir mi?', a: 'Basitleştirilmiş taşınma hakkı verir, otomatik hak vermez. 2003/109/AT Direktifi uyarınca başka bir AB ülkesinde çalışma, öğrenim veya iş amacıyla kolaylaştırılmış koşullarla ikamet başvurusu yapabilirsiniz - genel vize usulü ve ulusal kotalar dışında. Yine de yerel izin alınır ve gelir ile konut koşullarını her ülke kendi belirler. AB vatandaşlarındaki gibi otomatik çalışma hakkı vermez.' },
      { q: 'Ret kararı gelirse ne yapmalı?', a: 'Yabancılar Dairesi Başkanlığı\'na itiraz için 14 gününüz var, sonrasında Wojewódzki Sąd Administracyjny\'ye şikayet. Ret genellikle üç nedenden gelir: kıdemde kesinti, yetersiz gelir veya B1 sertifikası eksikliği. İlk ikisinde, valinin talep etmediği belgelerle dönemin kapatılabileceğini kontrol ediyoruz. Karar için hızlı analizi 48 saatte yapıyor ve bedelini itiraz ücretine sayıyoruz.' }
    ],
    related: ['karta-stalego-pobytu', 'obywatelstwo', 'karta-pobytu'],
    ctaTitle: 'Beş yılınızı ücretsiz hesaplayalım',
    ctaSubtitle: 'Vize ve kart geçmişinizi gönderin - 30 dakikada kıdemin yeterli olup olmadığını, nelerin sayıldığını ve gerçekte ne zaman başvurulacağını söyleyelim. Eksikse, sayacı sıfırlama riski olmadan ayları nasıl tamamlayacağınızın planını çıkarırız.'
  },
  uk: {
    slug: 'rezydent-ue',
    group: 'immigration',
    icon: 'id-card',
    badge: 'Art. 211 · 5 років · B1',
    title: 'Статус резидента ЄС (rezydent długoterminowy UE)',
    subtitle: 'Безстроковий дозвіл на економічній підставі: 5 років перебування, сертифікат B1 і стабільний дохід',
    lead: 'Zezwolenie na pobyt rezydenta długoterminowego UE - це другий шлях до безстрокового статусу в Польщі, поряд із kartą stałego pobytu. Різниця принципова: pobyt stały дають за зв\'язки з Польщею (шлюб із громадянином, польське походження, Karta Polaka), а статус резидента ЄС - за економічну інтеграцію: 5 років легального безперервного перебування, стабільний дохід і польська мова на рівні B1 з державним сертифікатом. Дозвіл видається на невизначений строк, карта змінюється кожні 5 років. Держмито - 640 PLN плюс 100 PLN за бланк карти, рішення за законом - до 6 місяців. Головний бонус, якого немає в pobytu stałego: право переїхати й легально жити в іншій країні ЄС за спрощеною процедурою. Головна пастка: період за ochroną czasową (статус UKR) до п\'ятирічного стажу НЕ зараховується, а роки навчання - тільки наполовину.',
    facts: [
      { label: 'Підстава', value: 'Art. 211 u.o.c.', note: '5 років легально і безперервно' },
      { label: 'Держмито', value: '640 + 100 PLN', note: 'wniosek + бланк карти' },
      { label: 'Мова', value: 'B1 обов\'язково', note: 'державний сертифікат · діти до 16 - ні' },
      { label: 'Строк дії', value: 'Безстроково', note: 'карта обмінюється кожні 5 років' }
    ],
    grounds: {
      title: 'Кому підходить статус резидента ЄС',
      subtitle: 'Це маршрут для тих, хто живе в Польщі завдяки роботі, бізнесу чи контрактам - без шлюбу з поляком і без польського коріння.',
      items: [
        { title: 'Наймана робота', desc: 'П\'ять років за umową o pracę, umową zlecenie або їх комбінацією на картах czasowego pobytu. Зміна роботодавців значення не має - важлива безперервність легального перебування, а не одне місце роботи.' },
        { title: 'Бізнес: JDG або Sp. z o.o.', desc: 'Роки на карті через власну фірму зараховуються повністю. Дохід підтверджується PIT/CIT, виписками та довідками ZUS/US. Для одноосібної Sp. z o.o. рахуємо і дивіденди, і wynagrodzenie członka zarządu.' },
        { title: 'Niebieska Karta UE', desc: 'Період за Блакитною картою зараховується повністю, і що важливіше - можна додавати періоди Блакитної карти в інших країнах ЄС. Це помітно скорочує шлях до п\'яти років для IT та інженерних спеціальностей.' },
        { title: 'Навчання - лише 50% періоду', desc: 'Роки навчання в польському ЗВО чи школі зараховуються лише наполовину: 4 роки магістратури дають 2 роки стажу. На практиці випускник виходить на п\'ять років через 7-8 років від приїзду, якщо після диплома не перейшов одразу на робочу карту.' },
        { title: 'Що не зараховується взагалі', desc: 'Період ochrony czasowej (статус UKR за спеціальним законом для громадян України), praca sezonowa, oddelegowanie для надання послуг, перебування за візою Шенген категорії C, а також час після рішення про зобов\'язання до повернення. Для українців це ключовий момент: роки за PESEL UKR у стаж не йдуть, стаж починає накопичуватися з моменту переходу на звичайну kartę pobytu.' },
        { title: 'Допустимі розриви перебування', desc: 'Одна поїздка за кордон - не довше 6 місяців підряд, сумарно за п\'ять років - не більше 10 місяців. Службова поїздка до 6 місяців вважається перебуванням у Польщі. Перевищили - лічильник п\'яти років обнуляється, і це найчастіша причина відмов.' }
      ]
    },
    timeline: {
      title: 'Як проходить справа',
      subtitle: 'Закон дає воєводі 6 місяців. Реально в Mazowieckim Urzędzie Wojewódzkim у 2026 році рішення займає 8-16 місяців, тому подаватися треба заздалегідь.',
      steps: [
        { title: 'Аудит стажу', duration: '1-2 дні', desc: 'Піднімаємо всю історію перебування: візи, карти, decyzje, штампи, виїзди. Рахуємо, скільки днів реально зараховується, віднімаємо навчання наполовину та виключені періоди. Часто виявляється, що до п\'яти років не вистачає 4-8 місяців - і краще дізнатися це зараз, а не після відмови.' },
        { title: 'Сертифікат B1', duration: '2-5 місяців', desc: 'Без сертифіката справа не пройде. Державний екзамен проходить сесіями кілька разів на рік, запис закривається заздалегідь. Підбираємо найближчу сесію, готуємо до письмової та усної частини, оформлюємо запис. Диплом польської школи або ЗВО з польською мовою навчання замінює екзамен.' },
        { title: 'Дохід і документи', duration: '2-4 тижні', desc: 'Збираємо підтвердження стабільного і регулярного доходу за останні 3 роки, медстрахування, документ на житло (własność, najem, użyczenie), довідки ZUS і US про відсутність заборгованостей.' },
        { title: 'Подача через MOS', duration: '1 день', desc: 'Заповнюємо wniosek у системі MOS, оплачуємо 640 PLN, записуємося на здачу відбитків. Отримуєте UPO - підтвердження прийняття, яке легалізує перебування до рішення.' },
        { title: 'Ведення і рішення', duration: '8-16 місяців', desc: 'Відповідаємо на wezwania воєводи, докладаємо документи, при затягуванні подаємо ponaglenie, за потреби - скаргу до WSA. Після позитивного рішення - 100 PLN за карту і видача.' }
      ]
    },
    documents: {
      title: 'Що знадобиться',
      subtitle: 'Ядро пакета - доказ п\'яти років і сертифікат B1. Решта залежить від підстави доходу.',
      items: [
        'Закордонний паспорт + усі попередні карти pobytu та decyzje',
        'Сертифікат знання польської мови на рівні B1 (або диплом польської школи/ЗВО)',
        'Підтвердження доходу за 3 роки: PIT-37/36/CIT, umowy, виписки з рахунку',
        'Довідка ZUS про періоди страхування і довідка US про відсутність заборгованості',
        'Медстрахування або підтвердження NFZ',
        'Документ на житло: акт власності, umowa najmu або użyczenia',
        '4 біометричні фото 35×45 мм',
        'Підтвердження оплати opłaty skarbowej 640 PLN',
        'Хронологія виїздів із Польщі за 5 років - готуємо її разом із вами'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Фіксований гонорар за етап. Держмита, екзамен B1 і присяжні переклади оплачуються окремо.',
      items: [
        { label: 'Консультація і аудит стажу', value: 'Безкоштовно', note: '30-60 хвилин · рахуємо ваші 5 років' },
        { label: 'Статус резидента ЄС під ключ', value: 'від 2 000 PLN', note: 'Від розрахунку стажу до видачі карти' },
        { label: 'Підготовка до екзамену B1', value: 'від 1 200 PLN', note: 'Запис на сесію + розбір частин екзамену' },
        { label: 'Apelacja при відмові', value: 'від 1 800 PLN', note: 'Окремий договір на оскарження' }
      ],
      note: 'Держмита: 640 PLN за wniosek, 100 PLN за бланк карти. Екзамен B1 - близько 300-400 PLN плюс 20 PLN за сертифікат. Присяжні переклади іноземних документів оплачуються окремо. Точну суму фіксуємо в договорі після безкоштовного аудиту стажу.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach - art. 211 (przesłanki udzielenia zezwolenia)',
        'Ustawa o cudzoziemcach - art. 212 (liczenie okresu pobytu, okresy nieuwzględniane)',
        'Ustawa o cudzoziemcach - art. 216-221 (odmowa, cofnięcie, wymiana karty)',
        'Dyrektywa Rady 2003/109/WE o statusie obywateli państw trzecich będących rezydentami długoterminowymi',
        'Rozporządzenie MSWiA ws. wysokości opłat za wydanie zezwolenia (640 PLN)',
        'Ustawa z dnia 12 marca 2022 r. o pomocy obywatelom Ukrainy - ochrona czasowa do 4 marca 2027 r.'
      ]
    },
    faq: [
      { q: 'Чим статус резидента ЄС відрізняється від karty stałego pobytu?', a: 'Підставою. Pobyt stały (art. 195) дають за зв\'язки з Польщею: шлюб із громадянином, польське походження, Karta Polaka, статус біженця. Резидент ЄС (art. 211) - за економічну інтеграцію: 5 років перебування, дохід і B1. Обидва дозволи безстрокові й дають майже однакові права в Польщі. Різниця у двох деталях: карта резидента ЄС змінюється кожні 5 років (у pobytu stałego - кожні 10), зате статус резидента ЄС дає право за спрощеною процедурою переїхати жити й працювати в іншу країну ЄС.' },
      { q: 'Чи зараховується період за статусом UKR (ochrona czasowa)?', a: 'Ні. Позиція Szefa Urzędu do Spraw Cudzoziemców однозначна: час перебування за ochroną czasową для громадян України до п\'ятирічного стажу для резидента ЄС не входить. Стаж починає накопичуватися лише з моменту, коли ви перейшли на звичайне zezwolenie na pobyt czasowy - робочу чи бізнес-карту. Сама ochrona czasowa продовжена до 4 березня 2027 року, і це якраз причина не тягнути з переходом на kartę pobytu: чим раніше перехід, тим раніше стартує лічильник.' },
      { q: 'Чи обов\'язковий сертифікат B1 і чи можна його обійти?', a: 'Обов\'язковий - це жорстка умова art. 211, і без сертифіката воєвода відмовить. Обійти можна лише двома документами: свідоцтвом про закінчення польської школи (podstawowa, liceum, technikum) або дипломом польського ЗВО з додатком, де вказана польська мова навчання. Діти до 16 років від вимоги звільнені. Мовні курси й довідки від шкіл не підходять - потрібен саме державний сертифікат рівня B1 або вище.' },
      { q: 'Скільки років навчання зараховується до п\'ятирічного стажу?', a: 'Рівно половина. П\'ять років навчання в польському ЗВО дають 2,5 року стажу. Практично це означає: випускник магістратури, який одразу після диплома перейшов на робочу карту, вийде на п\'ять років приблизно через 7-8 років від приїзду. Якщо плануєте статус резидента ЄС, переходити зі студентської карти на робочу або бізнес вигідно якнайраніше - кожен рік роботи зараховується повністю.' },
      { q: 'Скільки можна бути відсутнім у Польщі, щоб не збити стаж?', a: 'Одна безперервна поїздка - максимум 6 місяців. Сумарно за п\'ятирічний період - не більше 10 місяців. Службова поїздка (delegacja) до 6 місяців вважається перебуванням у Польщі і стаж не рве. Якщо перевищили ліміти, п\'ятирічний лічильник починається заново з моменту повернення. Це причина номер один серед відмов, тому хронологію виїздів ми відновлюємо на першому ж аудиті - за штампами, білетами й даними SIS.' },
      { q: 'Який дохід вважається стабільним і регулярним?', a: 'Закон не дає фіксованої суми: дохід повинен покривати витрати на утримання вас і членів родини і не опускатися нижче порога, за яким належить соціальна допомога. На практиці воєводи дивляться на трирічну картину: мінімальна зарплата 4 806 PLN брутто у 2026 році на самотнього заявника проходить, а от півроку провалів у доходах або несплачені внески ZUS доведеться пояснювати письмово. Для JDG і Sp. z o.o. рахуємо декларації, а не разові надходження на рахунок.' },
      { q: 'Через скільки після статусу резидента ЄС можна подавати на громадянство?', a: 'Через 3 роки. Uznanie za obywatela polskiego вимагає трьох років безперервного перебування за zezwoleniem na pobyt stały, за статусом rezydenta długoterminowego UE або за prawem stałego pobytu - плюс стабільний дохід, житло і той самий сертифікат B1, який ви вже отримали. Тобто сертифікат працює двічі, і це одна з причин робити статус резидента ЄС, а не просто продовжувати тимчасові карти.' },
      { q: 'Чи дає статус резидента ЄС право жити в іншій країні ЄС?', a: 'Дає право переїхати за спрощеною процедурою, але не автоматично. За Директивою 2003/109/WE ви можете подати в іншій країні ЄС на перебування для роботи, навчання або бізнесу на полегшених умовах - без загальної візової процедури і без національних квот. Але місцевий дозвіл усе одно оформлюється, і вимоги до доходу та житла в кожній країні свої. Автоматичного права переїхати й працювати, як у громадян ЄС, статус не дає.' },
      { q: 'Що робити, якщо прийшла відмова?', a: 'У вас 14 днів на odwołanie до Szefa Urzędu do Spraw Cudzoziemców, далі - скарга до Wojewódzkiego Sądu Administracyjnego. Найчастіше відмова приходить із трьох причин: розриви в стажі, недобраний дохід або відсутність сертифіката B1. У перших двох випадках ми дивимося, чи можна перекрити період документами, яких воєвода не запросив. Експрес-розбір рішення робимо за 48 годин, і його вартість зараховується в гонорар за apelację.' }
    ],
    related: ['karta-stalego-pobytu', 'obywatelstwo', 'karta-pobytu'],
    ctaTitle: 'Порахуємо ваші п\'ять років безкоштовно',
    ctaSubtitle: 'Надішліть історію віз і карт - за 30 хвилин скажемо, чи вистачає стажу, що зараховується, а що ні, і коли реально подаватися. Якщо не вистачає - складемо план, як добрати місяці без ризику обнулити лічильник.'
  }
};

export default rezydentUe;
