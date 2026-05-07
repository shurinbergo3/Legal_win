import type { ServiceEntry } from './types';

const kod95: ServiceEntry = {
  ru: {
    slug: 'kod-95',
    group: 'documents',
    icon: 'id-card',
    badge: 'C/CE/D/DE · EU CPC',
    title: 'Kod 95',
    subtitle: 'Свидетельство профессиональной квалификации водителя (CPC)',
    lead: 'Kod 95 — это пометка «95» на обороте польского prawa jazdy, подтверждающая профессиональную квалификацию водителя по директиве ЕС 2003/59/WE. Обязательна для всех, кто работает на грузовиках свыше 3,5 т (категории C, CE) и автобусах (D, DE). Без неё за рулём в коммерческом рейсе — штраф до 8 000 PLN водителю и до 12 000 PLN перевозчику.',
    facts: [
      { label: 'Срок действия', value: '5 лет', note: 'нужно продлевать szkoleniem okresowym' },
      { label: 'Категории', value: 'C / CE / D / DE', note: 'грузовики >3,5 т и автобусы' },
      { label: 'Минимум часов', value: '35 ч', note: 'szkolenie okresowe · каждые 5 лет' },
      { label: 'Где оформляется', value: 'OSK + WORD', note: 'аккредитованный центр + госэкзамен' }
    ],
    grounds: {
      title: 'Три пути получения Kod 95',
      subtitle: 'Какой именно путь подойдёт — зависит от вашего возраста, опыта и того, был ли у вас CPC в стране ЕС.',
      items: [
        {
          title: 'Kwalifikacja wstępna (полная) — 280 часов',
          desc: 'Для тех, кто никогда не имел Kod 95 и хочет работать с C от 18 лет или с D от 21 года. 260 ч теории + практики + 20 ч вождения. Заканчивается государственным экзаменом в WORD.'
        },
        {
          title: 'Kwalifikacja wstępna przyspieszona — 140 часов',
          desc: 'Ускоренный курс для тех, кому уже исполнился 21 год (категории C, CE) или 23 года (D, DE). 130 ч теории + 10 ч вождения. Тот же экзамен в WORD.'
        },
        {
          title: 'Szkolenie okresowe — 35 часов',
          desc: 'Периодическое обучение каждые 5 лет для тех, у кого Kod 95 уже есть и заканчивается. Без экзамена. Можно проходить модулями по 7 часов в течение всего пятилетнего периода.'
        },
        {
          title: 'Признание иностранного CPC',
          desc: 'Если Kod 95 / CPC выдан в другой стране ЕС/ЕЭЗ — он признаётся в Польше автоматически. CPC из Украины, Беларуси, России, Казахстана официально не признаётся: придётся проходить kwalifikację wstępną с нуля.'
        }
      ]
    },
    timeline: {
      title: 'Как проходит работа под ключ',
      subtitle: 'Берём всё от первого звонка до новой пометки 95 в правах. От вас — паспорт, права и желание возить.',
      steps: [
        { title: 'Диагностика', duration: '30 мин', desc: 'На бесплатной консультации определяем ваш путь: szkolenie okresowe, kwalifikacja wstępna przyspieszona или полная.' },
        { title: 'Обмен иностранных прав', duration: '14–30 дней', desc: 'Если у вас права СНГ — оформляем обмен на польские (присяжные переводы, badania lekarskie, заявление в starostwo).' },
        { title: 'Медкомиссия + психотест', duration: '1–2 дня', desc: 'Записываем на badania lekarskie категории 2 (для водителей-профессионалов) и psychotechnikę у аккредитованного психолога.' },
        { title: 'Запись в OSK', duration: '1–7 дней', desc: 'Подбираем ośrodek szkolenia с занятиями на удобном для вас языке (часто доступен русскоязычный преподаватель) и удобным графиком.' },
        { title: 'Обучение', duration: '35–280 ч', desc: 'Szkolenie okresowe — обычно 5 дней по 7 часов или модулями. Kwalifikacja wstępna — несколько недель с разрывом на работу.' },
        { title: 'Экзамен в WORD', duration: '1 день', desc: 'Только для kwalifikacji wstępnej. Тест на 30 вопросов, проходной балл — 16. Сопровождаем нашим специалистом, при провале — пересдача.' },
        { title: 'Внесение Kod 95 в права', duration: '14 дней', desc: 'Подаём wniosek в starostwo, оплачиваем opłatę 100 PLN. На обороте prawa jazdy появляется «95» с датой окончания через 5 лет.' }
      ]
    },
    documents: {
      title: 'Что от вас нужно',
      subtitle: 'Базовый пакет. Точный список адаптируем под ваш путь и текущую ситуацию.',
      items: [
        'Польское prawo jazdy категории C/CE/D/DE (или иностранные права для обмена)',
        'PESEL и karta pobytu (либо другой документ, подтверждающий легальное пребывание)',
        'Загранпаспорт + ксерокопия страницы с фото',
        'Orzeczenie lekarskie (медкомиссия для водителей-профессионалов, действительно 5 лет)',
        'Orzeczenie psychologiczne (psychotechnika) — действительно 5 лет',
        'Если есть Kod 95 из ЕС — оригинал + присяжный перевод',
        'Если был курс в стране ЕС — Świadectwo CPC + перевод',
        '2 актуальные фотографии 35×45 мм (для обмена прав)'
      ]
    },
    pricing: {
      title: 'Сколько стоит наша работа',
      subtitle: 'Прозрачные фиксированные гонорары. Подписываем договор до начала.',
      items: [
        { label: 'Консультация и подбор пути', value: 'Бесплатно', note: '30 минут · оценка ситуации' },
        { label: 'Сопровождение Kod 95 под ключ', value: 'от 1 200 PLN', note: 'Подбор OSK, документы, медкомиссия, экзамен' },
        { label: 'Только обмен прав на польские', value: 'от 600 PLN', note: 'Переводы, медкомиссия, starostwo' },
        { label: 'Apelacja при отказе starosty', value: 'от 1 200 PLN', note: 'Отдельный договор на оспаривание' }
      ],
      note: 'Указаны гонорары LegalWin. Стоимость курсов в OSK (от 1 800 PLN за szkolenie okresowe, от 5 500 PLN за kwalifikację wstępną przyspieszoną), badań lekarskich (~250 PLN), psychotechniki (~200 PLN) и opłaty skarbowej (100 PLN) — отдельно по фактическим тарифам поставщиков.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (rozdz. 7a — kwalifikacja zawodowa)',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami',
        'Rozporządzenie Ministra Infrastruktury w sprawie szkolenia kierowców wykonujących przewóz drogowy',
        'Dyrektywa 2003/59/WE Parlamentu Europejskiego i Rady (z późniejszymi zmianami przez 2018/645)',
        'Rozporządzenie MS w sprawie egzaminowania osób ubiegających się o uprawnienia do kierowania pojazdami'
      ]
    },
    faq: [
      {
        q: 'Сколько по факту стоит получить Kod 95 в Польше?',
        a: 'Szkolenie okresowe (35 ч) под ключ — около 3 200–3 700 PLN всего: ~1 800 PLN сам курс, ~250 PLN badania lekarskie, ~200 PLN psychotechnika, 100 PLN opłata skarbowa и наш гонорар от 1 200 PLN. Kwalifikacja wstępna przyspieszona (140 ч) выходит в 7 500–9 000 PLN, полная (280 ч) — 11 000+ PLN.'
      },
      {
        q: 'Можно ли пройти Kod 95 без знания польского языка?',
        a: 'Курс — да, есть OSK с русскоязычными преподавателями и материалами (особенно в Варшаве, Вроцлаве и Гданьске). Государственный экзамен в WORD — только на польском, украинском или английском (зависит от воеводства). Подбираем школу и WORD с подходящим вам языком экзамена.'
      },
      {
        q: 'Признаётся ли Kod 95, полученный в Украине или Беларуси?',
        a: 'Нет. CPC из стран вне ЕС/ЕЭЗ официально не признаётся в Польше. Даже если у вас 20 лет опыта — придётся проходить kwalifikację wstępną przyspieszoną (если вам уже есть 21 год для C / 23 для D). Стаж в Украине, увы, не считается.'
      },
      {
        q: 'Что если у меня нет польских prawa jazdy?',
        a: 'Сначала нужно обменять иностранные права на польские (или сдать с нуля, если вашей категории нет в обмене). Это 14–30 дней через starostwo. Делаем это первым шагом, параллельно с записью на курс — экономим время.'
      },
      {
        q: 'Что если у меня есть Kod 95 из Германии, Литвы, Чехии?',
        a: 'Признаётся автоматически — Kod 95 из любой страны ЕС/ЕЭЗ действителен на всей территории ЕС. Достаточно показать его при перевозках. Если истекает — szkolenie okresowe можно проходить в Польше или в стране выдачи.'
      },
      {
        q: 'Какой штраф за работу без Kod 95?',
        a: 'Водителю — до 8 000 PLN, перевозчику — до 12 000 PLN, за каждое нарушение. ITD (Inspekcja Transportu Drogowego) проверяет на дорогах и в фирмах. Кроме того, страховые отказывают в выплатах при ДТП без действующего CPC.'
      },
      {
        q: 'Можно ли начать работу до получения нового Kod 95, если старый истёк?',
        a: 'Нет. С даты окончания Kod 95 вы не имеете права коммерческого вождения — даже если уже записались на szkolenie okresowe. Поэтому начинайте за 2–3 месяца до истечения. Берём напоминание и ведём за полгода до даты — частая услуга для логистических фирм.'
      },
      {
        q: 'Как часто меняется законодательство по Kod 95?',
        a: 'Серьёзные изменения были в 2020 (Dyrektywa 2018/645) — новые модули по экологии, безопасности и цифровым тахографам. С 2024 — обязательные практические занятия по 2,5 ч за каждые 35 ч. Следим за актуальной программой и подбираем OSK с обновлённой лицензией.'
      }
    ],
    related: ['karta-pobytu', 'apelacje', 'karta-stalego-pobytu'],
    ctaTitle: 'Получим Kod 95 без беготни и переводов',
    ctaSubtitle: 'Бесплатная диагностика за 30 минут: подберём оптимальный путь, посчитаем точный бюджет и составим график. От первого звонка до новой «95» в правах — 6–10 недель.'
  },
  pl: {
    slug: 'kod-95',
    group: 'documents',
    icon: 'id-card',
    badge: 'C/CE/D/DE · CPC UE',
    title: 'Kod 95',
    subtitle: 'Świadectwo kwalifikacji zawodowej kierowcy',
    lead: 'Kod 95 to wpis „95" na odwrocie polskiego prawa jazdy, potwierdzający kwalifikację zawodową kierowcy zgodnie z dyrektywą UE 2003/59/WE. Obowiązkowy dla wszystkich kierowców pojazdów powyżej 3,5 t (kat. C, CE) i autobusów (kat. D, DE). Bez niego — kara do 8 000 PLN dla kierowcy i do 12 000 PLN dla przewoźnika.',
    facts: [
      { label: 'Ważność', value: '5 lat', note: 'odnawiana szkoleniem okresowym' },
      { label: 'Kategorie', value: 'C / CE / D / DE', note: 'pojazdy >3,5 t i autobusy' },
      { label: 'Minimum godzin', value: '35 h', note: 'szkolenie okresowe · co 5 lat' },
      { label: 'Gdzie', value: 'OSK + WORD', note: 'akredytowany ośrodek + egzamin państwowy' }
    ],
    grounds: {
      title: 'Trzy ścieżki uzyskania Kod 95',
      subtitle: 'Która jest dla Ciebie — zależy od wieku, doświadczenia i tego, czy posiadałeś już CPC w innym kraju UE.',
      items: [
        {
          title: 'Kwalifikacja wstępna (pełna) — 280 godzin',
          desc: 'Dla osób bez wcześniejszego Kod 95, chcących pracować z kat. C od 18 r.ż. lub D od 21 r.ż. 260 h teorii i praktyki + 20 h jazdy. Kończy się egzaminem państwowym w WORD.'
        },
        {
          title: 'Kwalifikacja wstępna przyspieszona — 140 godzin',
          desc: 'Skrócony kurs dla osób, które ukończyły 21 lat (kat. C, CE) lub 23 lata (D, DE). 130 h teorii + 10 h jazdy. Ten sam egzamin w WORD.'
        },
        {
          title: 'Szkolenie okresowe — 35 godzin',
          desc: 'Szkolenie cykliczne co 5 lat dla tych, którzy mają Kod 95 i kończy się jego ważność. Bez egzaminu. Można realizować modułami po 7 h przez cały okres pięciu lat.'
        },
        {
          title: 'Uznanie zagranicznego CPC',
          desc: 'Kod 95 / CPC wydany w innym państwie UE/EOG jest uznawany w Polsce automatycznie. CPC z Ukrainy, Białorusi, Rosji czy Kazachstanu — formalnie nieuznawane: trzeba przejść kwalifikację wstępną od zera.'
        }
      ]
    },
    timeline: {
      title: 'Jak prowadzimy sprawę pod klucz',
      subtitle: 'Od pierwszego telefonu do nowego wpisu 95 w prawie jazdy. Od Ciebie — paszport, prawo jazdy i chęć jeżdżenia.',
      steps: [
        { title: 'Diagnoza', duration: '30 min', desc: 'Na bezpłatnej konsultacji ustalamy ścieżkę: szkolenie okresowe, kwalifikacja wstępna przyspieszona czy pełna.' },
        { title: 'Wymiana zagranicznego prawa jazdy', duration: '14–30 dni', desc: 'Jeśli masz prawo jazdy WNP — organizujemy wymianę na polskie (tłumaczenia przysięgłe, badania lekarskie, wniosek do starostwa).' },
        { title: 'Badania lekarskie i psychotechniczne', duration: '1–2 dni', desc: 'Zapisujemy na badania lekarskie kat. 2 (kierowcy zawodowi) i psychotechnikę u akredytowanego psychologa.' },
        { title: 'Zapis do OSK', duration: '1–7 dni', desc: 'Dobieramy ośrodek szkolenia z zajęciami w wygodnym dla Ciebie języku (często jest rosyjskojęzyczny lektor) i pasującym terminarzem.' },
        { title: 'Szkolenie', duration: '35–280 h', desc: 'Szkolenie okresowe to zwykle 5 dni po 7 h lub moduły. Kwalifikacja wstępna — kilka tygodni z przerwami na pracę.' },
        { title: 'Egzamin w WORD', duration: '1 dzień', desc: 'Tylko dla kwalifikacji wstępnej. Test 30 pytań, próg zdawalności 16. Asystuje konsultant, w razie niepowodzenia — poprawka.' },
        { title: 'Wpis Kod 95 do prawa jazdy', duration: '14 dni', desc: 'Składamy wniosek w starostwie, opłata 100 PLN. Na odwrocie prawa jazdy pojawia się „95" z datą ważności za 5 lat.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Zestaw bazowy. Dokładną listę dostosowujemy do Twojej ścieżki.',
      items: [
        'Polskie prawo jazdy kat. C/CE/D/DE (lub zagraniczne do wymiany)',
        'PESEL i karta pobytu (lub inny dokument legalnego pobytu)',
        'Paszport + kopia strony ze zdjęciem',
        'Orzeczenie lekarskie (badania kierowców zawodowych, ważne 5 lat)',
        'Orzeczenie psychologiczne (psychotechnika) — ważne 5 lat',
        'Jeśli masz Kod 95 z UE — oryginał + tłumaczenie przysięgłe',
        'Jeśli był kurs w UE — Świadectwo CPC + tłumaczenie',
        '2 aktualne zdjęcia 35×45 mm (do wymiany prawa jazdy)'
      ]
    },
    pricing: {
      title: 'Wycena naszej pracy',
      subtitle: 'Przejrzyste, stałe honoraria. Umowę podpisujemy przed startem.',
      items: [
        { label: 'Konsultacja i dobór ścieżki', value: 'Gratis', note: '30 minut · ocena sytuacji' },
        { label: 'Pełna obsługa Kod 95 pod klucz', value: 'od 1 200 PLN', note: 'OSK, dokumenty, badania, egzamin' },
        { label: 'Sama wymiana prawa jazdy', value: 'od 600 PLN', note: 'Tłumaczenia, badania, starostwo' },
        { label: 'Apelacja od decyzji starosty', value: 'od 1 200 PLN', note: 'Osobna umowa na zaskarżenie' }
      ],
      note: 'Powyżej honoraria LegalWin. Koszty kursów w OSK (od 1 800 PLN za szkolenie okresowe, od 5 500 PLN za kwalifikację wstępną przyspieszoną), badań lekarskich (~250 PLN), psychotechniki (~200 PLN) i opłaty skarbowej (100 PLN) — osobno, według taryf dostawców.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (rozdz. 7a — kwalifikacja zawodowa)',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami',
        'Rozporządzenie Ministra Infrastruktury w sprawie szkolenia kierowców wykonujących przewóz drogowy',
        'Dyrektywa 2003/59/WE Parlamentu Europejskiego i Rady (zmieniona dyrektywą 2018/645)',
        'Rozporządzenie MS w sprawie egzaminowania osób ubiegających się o uprawnienia do kierowania pojazdami'
      ]
    },
    faq: [
      {
        q: 'Ile faktycznie kosztuje uzyskanie Kod 95 w Polsce?',
        a: 'Szkolenie okresowe (35 h) pod klucz — około 3 200–3 700 PLN łącznie: ~1 800 PLN sam kurs, ~250 PLN badania lekarskie, ~200 PLN psychotechnika, 100 PLN opłata skarbowa i nasze honorarium od 1 200 PLN. Kwalifikacja wstępna przyspieszona (140 h) — 7 500–9 000 PLN, pełna (280 h) — od 11 000 PLN.'
      },
      {
        q: 'Czy można przejść Kod 95 bez znajomości polskiego?',
        a: 'Sam kurs — tak, są OSK z lektorami i materiałami w języku rosyjskim/ukraińskim (zwłaszcza w Warszawie, Wrocławiu, Gdańsku). Egzamin państwowy w WORD — tylko po polsku, ukraińsku lub angielsku (zależnie od województwa). Dobieramy szkołę i WORD z odpowiednim językiem.'
      },
      {
        q: 'Czy uznawany jest Kod 95 z Ukrainy lub Białorusi?',
        a: 'Nie. CPC z państw spoza UE/EOG nie jest formalnie uznawany w Polsce. Nawet z 20-letnim doświadczeniem trzeba przejść kwalifikację wstępną przyspieszoną (jeśli ukończyłeś 21 lat dla C / 23 dla D). Staż w UA, niestety, nie liczy się.'
      },
      {
        q: 'Co jeśli nie mam polskiego prawa jazdy?',
        a: 'Najpierw wymieniamy zagraniczne prawo jazdy na polskie (lub zdajesz od zera, jeśli Twojej kategorii nie da się wymienić). To 14–30 dni przez starostwo. Robimy to w pierwszym kroku, równolegle z zapisem na kurs — oszczędzamy czas.'
      },
      {
        q: 'Co jeśli mam Kod 95 z Niemiec, Litwy, Czech?',
        a: 'Uznawany automatycznie — Kod 95 z każdego państwa UE/EOG jest ważny w całej UE. Wystarczy okazać przy przewozach. Jeśli kończy się ważność — szkolenie okresowe można odbyć w Polsce lub w państwie wydania.'
      },
      {
        q: 'Jaka kara za pracę bez Kod 95?',
        a: 'Kierowcy — do 8 000 PLN, przewoźnikowi — do 12 000 PLN za każde naruszenie. ITD (Inspekcja Transportu Drogowego) kontroluje na drogach i w firmach. Dodatkowo — ubezpieczyciele odmawiają wypłat przy wypadkach bez ważnego CPC.'
      },
      {
        q: 'Czy mogę zacząć pracę przed odebraniem nowego Kod 95, gdy stary wygasł?',
        a: 'Nie. Od daty wygaśnięcia Kod 95 nie masz prawa do przewozów komercyjnych — nawet po zapisie na szkolenie okresowe. Dlatego startuj 2–3 miesiące przed wygaśnięciem. Bierzemy przypomnienie i prowadzimy z półrocznym wyprzedzeniem — częsta usługa dla firm logistycznych.'
      },
      {
        q: 'Jak często zmieniają się przepisy o Kod 95?',
        a: 'Poważne zmiany były w 2020 (Dyrektywa 2018/645) — nowe moduły o ekologii, bezpieczeństwie i tachografach cyfrowych. Od 2024 — obowiązkowe zajęcia praktyczne po 2,5 h na każde 35 h. Śledzimy aktualny program i wybieramy OSK z odnowioną licencją.'
      }
    ],
    related: ['karta-pobytu', 'apelacje', 'karta-stalego-pobytu'],
    ctaTitle: 'Załatwimy Kod 95 bez biegania i tłumaczeń',
    ctaSubtitle: 'Bezpłatna diagnoza w 30 minut: dobierzemy optymalną ścieżkę, policzymy budżet i ustalimy harmonogram. Od pierwszego telefonu do nowego „95" w prawie jazdy — 6–10 tygodni.'
  },
  en: {
    slug: 'kod-95',
    group: 'documents',
    icon: 'id-card',
    badge: 'C/CE/D/DE · EU CPC',
    title: 'Code 95',
    subtitle: 'Driver Certificate of Professional Competence (Polish Kod 95)',
    lead: 'Kod 95 — the "95" entry on the back of a Polish prawo jazdy — certifies a driver\'s professional competence under EU Directive 2003/59/EC. It\'s mandatory for everyone driving HGVs above 3.5 t (categories C, CE) and buses (D, DE) commercially. Without it: fines up to 8,000 PLN for the driver and 12,000 PLN for the operator.',
    facts: [
      { label: 'Validity', value: '5 years', note: 'renewed via szkolenie okresowe' },
      { label: 'Categories', value: 'C / CE / D / DE', note: 'HGVs >3.5 t and buses' },
      { label: 'Minimum hours', value: '35 h', note: 'periodic training · every 5 years' },
      { label: 'Where', value: 'OSK + WORD', note: 'accredited training centre + state exam' }
    ],
    grounds: {
      title: 'Three paths to Kod 95',
      subtitle: 'Which one fits depends on your age, experience, and whether you already held a CPC in another EU country.',
      items: [
        {
          title: 'Kwalifikacja wstępna (full) — 280 hours',
          desc: 'For those who never held a Kod 95 and want to drive C from age 18 or D from age 21. 260 h theory + practice + 20 h driving. Ends with a state exam at WORD.'
        },
        {
          title: 'Kwalifikacja wstępna przyspieszona — 140 hours',
          desc: 'Accelerated route for drivers who reached 21 (C, CE) or 23 (D, DE). 130 h theory + 10 h driving. Same WORD exam.'
        },
        {
          title: 'Szkolenie okresowe — 35 hours',
          desc: 'Periodic training every 5 years for those whose Kod 95 already exists and is expiring. No exam. Can be split into 7 h modules across the full five-year window.'
        },
        {
          title: 'Recognition of foreign CPC',
          desc: 'Kod 95 / CPC issued in another EU/EEA state is recognised in Poland automatically. CPCs from Ukraine, Belarus, Russia or Kazakhstan are not officially recognised — you have to take kwalifikację wstępną from scratch.'
        }
      ]
    },
    timeline: {
      title: 'How we run it end-to-end',
      subtitle: 'From first call to the new "95" entry in your licence. We need your passport, your licence, and your willingness to drive.',
      steps: [
        { title: 'Diagnosis', duration: '30 min', desc: 'In the free consultation we identify your route: szkolenie okresowe, accelerated initial qualification or the full one.' },
        { title: 'Foreign licence exchange', duration: '14–30 days', desc: 'If you hold a CIS licence — we organise the swap to a Polish one (sworn translations, medical exam, application to starostwo).' },
        { title: 'Medical & psych exams', duration: '1–2 days', desc: 'We book badania lekarskie cat. 2 (professional drivers) and psychotechnika with an accredited psychologist.' },
        { title: 'OSK enrolment', duration: '1–7 days', desc: 'We pick a training centre with classes in your preferred language (Russian-speaking instructors are common) and a schedule that fits your work.' },
        { title: 'Training', duration: '35–280 h', desc: 'Periodic training is usually 5 days × 7 h or modular. Initial qualification spans several weeks with breaks for work.' },
        { title: 'WORD exam', duration: '1 day', desc: 'Initial qualification only. 30-question test, pass mark 16. We attend with a consultant; on a fail — retake support.' },
        { title: 'Code 95 entry into the licence', duration: '14 days', desc: 'We file with starostwo, pay the 100 PLN opłata. The "95" appears on the back of your prawo jazdy with a 5-year expiry.' }
      ]
    },
    documents: {
      title: 'What we need from you',
      subtitle: 'Base set. Exact list adjusted to your route.',
      items: [
        'Polish prawo jazdy cat. C/CE/D/DE (or your foreign licence to exchange)',
        'PESEL and karta pobytu (or another document proving legal residence)',
        'Passport + photo-page copy',
        'Orzeczenie lekarskie (medical exam for professional drivers, valid 5 years)',
        'Orzeczenie psychologiczne (psychotechnika) — valid 5 years',
        'If you hold an EU Kod 95 — original + sworn translation',
        'If a course was taken in the EU — CPC certificate + translation',
        '2 recent 35×45 mm photos (for licence exchange)'
      ]
    },
    pricing: {
      title: 'Our fees',
      subtitle: 'Transparent, fixed honoraria. Contract signed before we start.',
      items: [
        { label: 'Consultation & route mapping', value: 'Free', note: '30 minutes · case assessment' },
        { label: 'Full Kod 95 turnkey', value: 'from 1,200 PLN', note: 'OSK, paperwork, exams, WORD' },
        { label: 'Licence exchange only', value: 'from 600 PLN', note: 'Translations, medicals, starostwo' },
        { label: 'Appeal against starosta refusal', value: 'from 1,200 PLN', note: 'Separate retainer for the challenge' }
      ],
      note: 'Above are LegalWin fees. OSK course fees (from 1,800 PLN for periodic training, from 5,500 PLN for accelerated initial qualification), medical exam (~250 PLN), psychotechnika (~200 PLN) and opłata skarbowa (100 PLN) are billed separately at provider rates.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Act of 6 September 2001 on road transport (chapter 7a — professional qualification)',
        'Act of 5 January 2011 on persons driving vehicles',
        'Regulation of the Minister of Infrastructure on training of professional drivers',
        'Directive 2003/59/EC of the European Parliament and Council (as amended by 2018/645)',
        'Regulation of the Minister of Justice on the examination of driver licence candidates'
      ]
    },
    faq: [
      {
        q: 'What does Kod 95 actually cost in Poland?',
        a: 'Periodic training (35 h) turnkey runs about 3,200–3,700 PLN total: ~1,800 PLN for the course, ~250 PLN medical, ~200 PLN psych, 100 PLN state fee, plus our 1,200 PLN+ retainer. Accelerated initial qualification (140 h) is 7,500–9,000 PLN; the full 280 h route — from 11,000 PLN.'
      },
      {
        q: 'Can I take Kod 95 without speaking Polish?',
        a: 'The course — yes; OSKs with Russian-speaking instructors and materials are common (especially in Warsaw, Wrocław, Gdańsk). The state WORD exam is in Polish, Ukrainian or English (varies by voivodeship). We pick the school and the WORD with the language that works for you.'
      },
      {
        q: 'Is Ukrainian or Belarusian CPC recognised?',
        a: 'No. CPCs from non-EU/EEA countries are not formally recognised in Poland. Even with 20 years of experience you have to take the accelerated initial qualification (if you\'re 21+ for C / 23+ for D). Foreign service years don\'t count, sadly.'
      },
      {
        q: "What if I don't hold a Polish prawo jazdy?",
        a: 'We exchange your foreign licence for a Polish one first (or you sit a fresh test if your category cannot be swapped). That takes 14–30 days through starostwo. We do it as step one in parallel with course booking — saves time.'
      },
      {
        q: 'What if I have a Code 95 from Germany, Lithuania, Czechia?',
        a: 'Recognised automatically — Code 95 issued in any EU/EEA state is valid across the EU. Just present it during transports. If it\'s expiring, periodic training can be done in Poland or in the issuing country.'
      },
      {
        q: 'What is the fine for working without Kod 95?',
        a: 'Up to 8,000 PLN for the driver and 12,000 PLN for the carrier per offence. ITD (Inspekcja Transportu Drogowego) checks at roadside and at firms. Insurers also refuse pay-outs after accidents if CPC is invalid.'
      },
      {
        q: 'Can I drive while my old Kod 95 has just expired and the new one is pending?',
        a: 'No. From the expiry date you cannot drive commercially — even after enrolling in periodic training. Start 2–3 months before expiry. We track expiry dates six months ahead — a frequent service for fleet operators.'
      },
      {
        q: 'How often does Kod 95 legislation change?',
        a: 'Big changes came in 2020 (Directive 2018/645) — new modules on ecology, safety and digital tachographs. Since 2024 — mandatory practical sessions of 2.5 h per every 35 h. We track the current syllabus and pick OSKs with up-to-date licences.'
      }
    ],
    related: ['karta-pobytu', 'apelacje', 'karta-stalego-pobytu'],
    ctaTitle: 'Sort Kod 95 without paperwork chases',
    ctaSubtitle: 'Free 30-minute diagnosis: we map the optimal route, calculate the exact budget and lay out the schedule. From first call to a fresh "95" on your licence — 6–10 weeks.'
  }
};

export default kod95;
