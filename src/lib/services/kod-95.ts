import type { ServiceEntry } from './types';

const kod95: ServiceEntry = {
  ru: {
    slug: 'kod-95',
    group: 'documents',
    icon: 'id-card',
    badge: 'C/CE/D/DE · EU CPC',
    title: 'Kod 95',
    subtitle: 'Свидетельство профессиональной квалификации водителя (CPC)',
    lead: 'Kod 95 - это пометка «95» на обороте польского prawa jazdy, подтверждающая профессиональную квалификацию водителя по директиве ЕС 2003/59/WE. Обязательна для всех, кто работает на грузовиках свыше 3,5 т (категории C, CE) и автобусах (D, DE). Без неё за рулём в коммерческом рейсе - штраф до 8 000 PLN водителю и до 12 000 PLN перевозчику.',
    facts: [
      { label: 'Срок действия', value: '5 лет', note: 'нужно продлевать szkoleniem okresowym' },
      { label: 'Категории', value: 'C / CE / D / DE', note: 'грузовики >3,5 т и автобусы' },
      { label: 'Минимум часов', value: '35 ч', note: 'szkolenie okresowe · каждые 5 лет' },
      { label: 'Где оформляется', value: 'OSK + WORD', note: 'аккредитованный центр + госэкзамен' }
    ],
    grounds: {
      title: 'Три пути получения Kod 95',
      subtitle: 'Какой именно путь подойдёт - зависит от вашего возраста, опыта и того, был ли у вас CPC в стране ЕС.',
      items: [
        {
          title: 'Kwalifikacja wstępna (полная) - 280 часов',
          desc: 'Для тех, кто никогда не имел Kod 95 и хочет работать с C от 18 лет или с D от 21 года. 260 ч теории + практики + 20 ч вождения. Заканчивается государственным экзаменом в WORD.'
        },
        {
          title: 'Kwalifikacja wstępna przyspieszona - 140 часов',
          desc: 'Ускоренный курс для тех, кому уже исполнился 21 год (категории C, CE) или 23 года (D, DE). 130 ч теории + 10 ч вождения. Тот же экзамен в WORD.'
        },
        {
          title: 'Szkolenie okresowe - 35 часов',
          desc: 'Периодическое обучение каждые 5 лет для тех, у кого Kod 95 уже есть и заканчивается. Без экзамена. Можно проходить модулями по 7 часов в течение всего пятилетнего периода.'
        },
        {
          title: 'Признание иностранного CPC',
          desc: 'Если Kod 95 / CPC выдан в другой стране ЕС/ЕЭЗ - он признаётся в Польше автоматически. CPC из Украины, Беларуси, России, Казахстана официально не признаётся: придётся проходить kwalifikację wstępną с нуля.'
        }
      ]
    },
    timeline: {
      title: 'Как проходит работа под ключ',
      subtitle: 'Берём всё от первого звонка до новой пометки 95 в правах. От вас - паспорт, права и желание возить.',
      steps: [
        { title: 'Диагностика', duration: '30 мин', desc: 'На бесплатной консультации определяем ваш путь: szkolenie okresowe, kwalifikacja wstępna przyspieszona или полная.' },
        { title: 'Обмен иностранных прав', duration: '14-30 дней', desc: 'Если у вас права СНГ - оформляем обмен на польские (присяжные переводы, badania lekarskie, заявление в starostwo).' },
        { title: 'Медкомиссия + психотест', duration: '1-2 дня', desc: 'Записываем на badania lekarskie категории 2 (для водителей-профессионалов) и psychotechnikę у аккредитованного психолога.' },
        { title: 'Запись в OSK', duration: '1-7 дней', desc: 'Подбираем ośrodek szkolenia с занятиями на удобном для вас языке (часто доступен русскоязычный преподаватель) и удобным графиком.' },
        { title: 'Обучение', duration: '35-280 ч', desc: 'Szkolenie okresowe - обычно 5 дней по 7 часов или модулями. Kwalifikacja wstępna - несколько недель с разрывом на работу.' },
        { title: 'Экзамен в WORD', duration: '1 день', desc: 'Только для kwalifikacji wstępnej. Тест на 30 вопросов, проходной балл - 16. Сопровождаем нашим специалистом, при провале - пересдача.' },
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
        'Orzeczenie psychologiczne (psychotechnika) - действительно 5 лет',
        'Если есть Kod 95 из ЕС - оригинал + присяжный перевод',
        'Если был курс в стране ЕС - Świadectwo CPC + перевод',
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
      note: 'Указаны гонорары LegalWin. Стоимость курсов в OSK (от 1 800 PLN за szkolenie okresowe, от 5 500 PLN за kwalifikację wstępną przyspieszoną), badań lekarskich (~250 PLN), psychotechniki (~200 PLN) и opłaty skarbowej (100 PLN) - отдельно по фактическим тарифам поставщиков.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (rozdz. 7a - kwalifikacja zawodowa)',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami',
        'Rozporządzenie Ministra Infrastruktury w sprawie szkolenia kierowców wykonujących przewóz drogowy',
        'Dyrektywa 2003/59/WE Parlamentu Europejskiego i Rady (z późniejszymi zmianami przez 2018/645)',
        'Rozporządzenie MS w sprawie egzaminowania osób ubiegających się o uprawnienia do kierowania pojazdami'
      ]
    },
    faq: [
      {
        q: 'Сколько по факту стоит получить Kod 95 в Польше?',
        a: 'Szkolenie okresowe (периодическое обучение, 35 ч) под ключ - около 3 200-3 700 PLN всего: ~1 800 PLN сам курс, ~250 PLN badania lekarskie (медобследование), ~200 PLN psychotechnika (психотест), 100 PLN opłata skarbowa (госпошлина) и наш гонорар от 1 200 PLN. Kwalifikacja wstępna przyspieszona (ускоренная начальная квалификация, 140 ч) выходит в 7 500-9 000 PLN, полная (280 ч) - 11 000+ PLN.'
      },
      {
        q: 'Можно ли пройти Kod 95 без знания польского языка?',
        a: 'Курс - да, есть OSK (ośrodek szkolenia kierowców - автошкола) с русскоязычными преподавателями и материалами (особенно в Варшаве, Вроцлаве и Гданьске). Государственный экзамен в WORD (Wojewódzki Ośrodek Ruchu Drogowego - Воеводский центр дорожного движения) - только на польском, украинском или английском (зависит от воеводства). Подбираем школу и WORD с подходящим вам языком экзамена.'
      },
      {
        q: 'Признаётся ли Kod 95, полученный в Украине или Беларуси?',
        a: 'Нет. CPC из стран вне ЕС/ЕЭЗ официально не признаётся в Польше. Даже если у вас 20 лет опыта - придётся проходить kwalifikację wstępną przyspieszoną (ускоренную начальную квалификацию) (если вам уже есть 21 год для C / 23 для D). Стаж в Украине, увы, не считается.'
      },
      {
        q: 'Что если у меня нет польских prawa jazdy?',
        a: 'Сначала нужно обменять иностранные права (prawo jazdy - водительское удостоверение) на польские (или сдать с нуля, если вашей категории нет в обмене). Это 14-30 дней через starostwo (старостат - районная администрация). Делаем это первым шагом, параллельно с записью на курс - экономим время.'
      },
      {
        q: 'Что если у меня есть Kod 95 из Германии, Литвы, Чехии?',
        a: 'Признаётся автоматически - Kod 95 из любой страны ЕС/ЕЭЗ действителен на всей территории ЕС. Достаточно показать его при перевозках. Если истекает - szkolenie okresowe (периодическое обучение) можно проходить в Польше или в стране выдачи.'
      },
      {
        q: 'Какой штраф за работу без Kod 95?',
        a: 'Водителю - до 8 000 PLN, перевозчику - до 12 000 PLN, за каждое нарушение. ITD (Inspekcja Transportu Drogowego - Инспекция дорожного транспорта) проверяет на дорогах и в фирмах. Кроме того, страховые отказывают в выплатах при ДТП без действующего CPC.'
      },
      {
        q: 'Можно ли начать работу до получения нового Kod 95, если старый истёк?',
        a: 'Нет. С даты окончания Kod 95 вы не имеете права коммерческого вождения - даже если уже записались на szkolenie okresowe (периодическое обучение). Поэтому начинайте за 2-3 месяца до истечения. Берём напоминание и ведём за полгода до даты - частая услуга для логистических фирм.'
      },
      {
        q: 'Как часто меняется законодательство по Kod 95?',
        a: 'Серьёзные изменения были в 2020 (Dyrektywa 2018/645) - новые модули по экологии, безопасности и цифровым тахографам. С 2024 - обязательные практические занятия по 2,5 ч за каждые 35 ч. Следим за актуальной программой и подбираем OSK с обновлённой лицензией.'
      }
    ],
    related: ['karta-pobytu', 'apelacje', 'karta-stalego-pobytu'],
    ctaTitle: 'Получим Kod 95 без беготни и переводов',
    ctaSubtitle: 'Бесплатная диагностика за 30 минут: подберём оптимальный путь, посчитаем точный бюджет и составим график. От первого звонка до новой «95» в правах - 6-10 недель.'
  },
  pl: {
    slug: 'kod-95',
    group: 'documents',
    icon: 'id-card',
    badge: 'C/CE/D/DE · CPC UE',
    title: 'Kod 95',
    subtitle: 'Świadectwo kwalifikacji zawodowej kierowcy',
    lead: 'Kod 95 to wpis „95" na odwrocie polskiego prawa jazdy, potwierdzający kwalifikację zawodową kierowcy zgodnie z dyrektywą UE 2003/59/WE. Obowiązkowy dla wszystkich kierowców pojazdów powyżej 3,5 t (kat. C, CE) i autobusów (kat. D, DE). Bez niego - kara do 8 000 PLN dla kierowcy i do 12 000 PLN dla przewoźnika.',
    facts: [
      { label: 'Ważność', value: '5 lat', note: 'odnawiana szkoleniem okresowym' },
      { label: 'Kategorie', value: 'C / CE / D / DE', note: 'pojazdy >3,5 t i autobusy' },
      { label: 'Minimum godzin', value: '35 h', note: 'szkolenie okresowe · co 5 lat' },
      { label: 'Gdzie', value: 'OSK + WORD', note: 'akredytowany ośrodek + egzamin państwowy' }
    ],
    grounds: {
      title: 'Trzy ścieżki uzyskania Kod 95',
      subtitle: 'Która jest dla Ciebie - zależy od wieku, doświadczenia i tego, czy posiadałeś już CPC w innym kraju UE.',
      items: [
        {
          title: 'Kwalifikacja wstępna (pełna) - 280 godzin',
          desc: 'Dla osób bez wcześniejszego Kod 95, chcących pracować z kat. C od 18 r.ż. lub D od 21 r.ż. 260 h teorii i praktyki + 20 h jazdy. Kończy się egzaminem państwowym w WORD.'
        },
        {
          title: 'Kwalifikacja wstępna przyspieszona - 140 godzin',
          desc: 'Skrócony kurs dla osób, które ukończyły 21 lat (kat. C, CE) lub 23 lata (D, DE). 130 h teorii + 10 h jazdy. Ten sam egzamin w WORD.'
        },
        {
          title: 'Szkolenie okresowe - 35 godzin',
          desc: 'Szkolenie cykliczne co 5 lat dla tych, którzy mają Kod 95 i kończy się jego ważność. Bez egzaminu. Można realizować modułami po 7 h przez cały okres pięciu lat.'
        },
        {
          title: 'Uznanie zagranicznego CPC',
          desc: 'Kod 95 / CPC wydany w innym państwie UE/EOG jest uznawany w Polsce automatycznie. CPC z Ukrainy, Białorusi, Rosji czy Kazachstanu - formalnie nieuznawane: trzeba przejść kwalifikację wstępną od zera.'
        }
      ]
    },
    timeline: {
      title: 'Jak prowadzimy sprawę pod klucz',
      subtitle: 'Od pierwszego telefonu do nowego wpisu 95 w prawie jazdy. Od Ciebie - paszport, prawo jazdy i chęć jeżdżenia.',
      steps: [
        { title: 'Diagnoza', duration: '30 min', desc: 'Na bezpłatnej konsultacji ustalamy ścieżkę: szkolenie okresowe, kwalifikacja wstępna przyspieszona czy pełna.' },
        { title: 'Wymiana zagranicznego prawa jazdy', duration: '14-30 dni', desc: 'Jeśli masz prawo jazdy WNP - organizujemy wymianę na polskie (tłumaczenia przysięgłe, badania lekarskie, wniosek do starostwa).' },
        { title: 'Badania lekarskie i psychotechniczne', duration: '1-2 dni', desc: 'Zapisujemy na badania lekarskie kat. 2 (kierowcy zawodowi) i psychotechnikę u akredytowanego psychologa.' },
        { title: 'Zapis do OSK', duration: '1-7 dni', desc: 'Dobieramy ośrodek szkolenia z zajęciami w wygodnym dla Ciebie języku (często jest rosyjskojęzyczny lektor) i pasującym terminarzem.' },
        { title: 'Szkolenie', duration: '35-280 h', desc: 'Szkolenie okresowe to zwykle 5 dni po 7 h lub moduły. Kwalifikacja wstępna - kilka tygodni z przerwami na pracę.' },
        { title: 'Egzamin w WORD', duration: '1 dzień', desc: 'Tylko dla kwalifikacji wstępnej. Test 30 pytań, próg zdawalności 16. Asystuje konsultant, w razie niepowodzenia - poprawka.' },
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
        'Orzeczenie psychologiczne (psychotechnika) - ważne 5 lat',
        'Jeśli masz Kod 95 z UE - oryginał + tłumaczenie przysięgłe',
        'Jeśli był kurs w UE - Świadectwo CPC + tłumaczenie',
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
      note: 'Powyżej honoraria LegalWin. Koszty kursów w OSK (od 1 800 PLN za szkolenie okresowe, od 5 500 PLN za kwalifikację wstępną przyspieszoną), badań lekarskich (~250 PLN), psychotechniki (~200 PLN) i opłaty skarbowej (100 PLN) - osobno, według taryf dostawców.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (rozdz. 7a - kwalifikacja zawodowa)',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami',
        'Rozporządzenie Ministra Infrastruktury w sprawie szkolenia kierowców wykonujących przewóz drogowy',
        'Dyrektywa 2003/59/WE Parlamentu Europejskiego i Rady (zmieniona dyrektywą 2018/645)',
        'Rozporządzenie MS w sprawie egzaminowania osób ubiegających się o uprawnienia do kierowania pojazdami'
      ]
    },
    faq: [
      {
        q: 'Ile faktycznie kosztuje uzyskanie Kod 95 w Polsce?',
        a: 'Szkolenie okresowe (35 h) pod klucz - około 3 200-3 700 PLN łącznie: ~1 800 PLN sam kurs, ~250 PLN badania lekarskie, ~200 PLN psychotechnika, 100 PLN opłata skarbowa i nasze honorarium od 1 200 PLN. Kwalifikacja wstępna przyspieszona (140 h) - 7 500-9 000 PLN, pełna (280 h) - od 11 000 PLN.'
      },
      {
        q: 'Czy można przejść Kod 95 bez znajomości polskiego?',
        a: 'Sam kurs - tak, są OSK z lektorami i materiałami w języku rosyjskim/ukraińskim (zwłaszcza w Warszawie, Wrocławiu, Gdańsku). Egzamin państwowy w WORD - tylko po polsku, ukraińsku lub angielsku (zależnie od województwa). Dobieramy szkołę i WORD z odpowiednim językiem.'
      },
      {
        q: 'Czy uznawany jest Kod 95 z Ukrainy lub Białorusi?',
        a: 'Nie. CPC z państw spoza UE/EOG nie jest formalnie uznawany w Polsce. Nawet z 20-letnim doświadczeniem trzeba przejść kwalifikację wstępną przyspieszoną (jeśli ukończyłeś 21 lat dla C / 23 dla D). Staż w UA, niestety, nie liczy się.'
      },
      {
        q: 'Co jeśli nie mam polskiego prawa jazdy?',
        a: 'Najpierw wymieniamy zagraniczne prawo jazdy na polskie (lub zdajesz od zera, jeśli Twojej kategorii nie da się wymienić). To 14-30 dni przez starostwo. Robimy to w pierwszym kroku, równolegle z zapisem na kurs - oszczędzamy czas.'
      },
      {
        q: 'Co jeśli mam Kod 95 z Niemiec, Litwy, Czech?',
        a: 'Uznawany automatycznie - Kod 95 z każdego państwa UE/EOG jest ważny w całej UE. Wystarczy okazać przy przewozach. Jeśli kończy się ważność - szkolenie okresowe można odbyć w Polsce lub w państwie wydania.'
      },
      {
        q: 'Jaka kara za pracę bez Kod 95?',
        a: 'Kierowcy - do 8 000 PLN, przewoźnikowi - do 12 000 PLN za każde naruszenie. ITD (Inspekcja Transportu Drogowego) kontroluje na drogach i w firmach. Dodatkowo - ubezpieczyciele odmawiają wypłat przy wypadkach bez ważnego CPC.'
      },
      {
        q: 'Czy mogę zacząć pracę przed odebraniem nowego Kod 95, gdy stary wygasł?',
        a: 'Nie. Od daty wygaśnięcia Kod 95 nie masz prawa do przewozów komercyjnych - nawet po zapisie na szkolenie okresowe. Dlatego startuj 2-3 miesiące przed wygaśnięciem. Bierzemy przypomnienie i prowadzimy z półrocznym wyprzedzeniem - częsta usługa dla firm logistycznych.'
      },
      {
        q: 'Jak często zmieniają się przepisy o Kod 95?',
        a: 'Poważne zmiany były w 2020 (Dyrektywa 2018/645) - nowe moduły o ekologii, bezpieczeństwie i tachografach cyfrowych. Od 2024 - obowiązkowe zajęcia praktyczne po 2,5 h na każde 35 h. Śledzimy aktualny program i wybieramy OSK z odnowioną licencją.'
      }
    ],
    related: ['karta-pobytu', 'apelacje', 'karta-stalego-pobytu'],
    ctaTitle: 'Załatwimy Kod 95 bez biegania i tłumaczeń',
    ctaSubtitle: 'Bezpłatna diagnoza w 30 minut: dobierzemy optymalną ścieżkę, policzymy budżet i ustalimy harmonogram. Od pierwszego telefonu do nowego „95" w prawie jazdy - 6-10 tygodni.'
  },
  en: {
    slug: 'kod-95',
    group: 'documents',
    icon: 'id-card',
    badge: 'C/CE/D/DE · EU CPC',
    title: 'Code 95',
    subtitle: "Driver CPC for Poland (the Polish kod 95 entry)",
    lead: "Code 95 is the small \"95\" code on the back of your Polish licence next to category C, CE, D or DE. It proves you've cleared the Driver CPC training required by EU Directive 2003/59/EC. Same legal regime as the UK and Irish Driver CPC, with one twist: post-Brexit, UK CPC cards no longer work in the EU, and a US CDL gives you nothing at all. Drive an HGV or coach commercially in Poland without kod 95 and ITD will fine you up to 8,000 PLN on the spot. The operator catches a separate 12,000 PLN bill.",
    facts: [
      { label: 'Validity', value: '5 years', note: 'renewed by szkolenie okresowe' },
      { label: 'Categories', value: 'C / CE / D / DE', note: 'HGV (LGV) and coach' },
      { label: 'Periodic training', value: '35 hours', note: 'every 5 years, same as UK CPC' },
      { label: 'Where it happens', value: 'OSK + WORD', note: 'accredited school + state exam' }
    ],
    grounds: {
      title: 'Four routes onto your licence',
      subtitle: "Which one you take depends on age, whether you've held an EU CPC before, and what licence you're driving on today.",
      items: [
        {
          title: 'Kwalifikacja wstępna (full) - 280 hours',
          desc: "The long route. For drivers who never held an EU CPC and want a head start: category C from 18, D from 21. 260 hours of theory plus 20 hours behind the wheel, finished with a state test at WORD (the regional traffic exam centre). Most lorry drivers don't need this one."
        },
        {
          title: 'Kwalifikacja wstępna przyspieszona - 140 hours',
          desc: 'The accelerated route, and the one most adults end up on. Open from 21 (C/CE) or 23 (D/DE). 130 hours of theory, 10 hours of driving, same WORD test at the end. Roughly half the length of the UK Initial CPC, but the syllabus is recognisably the same.'
        },
        {
          title: 'Szkolenie okresowe - 35 hours',
          desc: "Periodic training, every 5 years. If you already hold kod 95 and just need to renew, this is your route. No exam, no WORD visit, no panic. You can split it into five 7-hour modules across the whole 5-year window - useful if you're juggling international runs."
        },
        {
          title: 'Recognition of a foreign CPC',
          desc: "Hold a German, Lithuanian, Irish or any other EU/EEA Driver CPC card? Polish operators will accept it without paperwork. UK DQC cards issued before Brexit work until they expire, but renewals must happen in Poland. Ukrainian, Belarusian, Russian or Kazakh CPCs aren't recognised at all - you start fresh on kwalifikacja wstępna przyspieszona."
        }
      ]
    },
    timeline: {
      title: 'How the whole thing actually runs',
      subtitle: 'From the first WhatsApp message to a new "95" stamped on your licence. You bring a passport, your current licence and time. We do everything else.',
      steps: [
        { title: 'Free diagnosis', duration: '30 min', desc: "We work out which route you're on (renewal vs. full vs. accelerated) and whether your current licence even qualifies for exchange. About 20% of UK and Irish drivers we see have surprises in their paperwork." },
        { title: 'Licence exchange (if needed)', duration: '14-30 days', desc: "If you're driving on a Ukrainian, Belarusian or non-EU licence, we swap it for a Polish prawo jazdy first. Sworn translation, badania lekarskie, application to starostwo. UK Photocard licences exchange directly without a retest under the bilateral arrangement; we handle that filing too." },
        { title: 'Medical + psychotechnika', duration: '1-2 days', desc: "Cat. 2 medical with a doctor licensed for professional drivers (around 250 PLN), and a psychotechnical assessment with an accredited psychologist (around 200 PLN). Both required, both valid 5 years. We book both for the same morning." },
        { title: 'OSK enrolment', duration: '1-7 days', desc: "We pick an OSK (ośrodek szkolenia kierowców - the licensed driver school) with the right language for you. English-only OSKs are rare; mixed Polish-Russian classes with materials in English do exist in Warsaw, Wrocław and Gdańsk. We've vetted the ones that actually deliver." },
        { title: 'The training itself', duration: '35-280 hours', desc: "Periodic training: usually five 7-hour days, sometimes spread over weekends if you're still driving. Full or accelerated initial qualification runs three to six weeks with built-in breaks. The 2024 update added 2.5 hours of mandatory practical per 35-hour block." },
        { title: 'WORD state exam', duration: '1 day', desc: "Only for initial qualification (not renewal). 30 multiple-choice questions, 16 right to pass. Available in English in most voivodeships, though Mazowieckie and Małopolska have the widest slots. Fail and you retake; the consultant who came with you the first time comes again." },
        { title: 'Kod 95 entered on your licence', duration: '14 days', desc: "We file the wniosek at starostwo and pay the 100 PLN opłata skarbowa. Your new licence (printed at PWPW, the state security printer) arrives with \"95\" on the back next to each professional category, with a fresh 5-year date." }
      ]
    },
    documents: {
      title: 'What you bring to the table',
      subtitle: 'Starting list. We adjust it once we know your route and which country issued your current licence.',
      items: [
        'Current driving licence: Polish prawo jazdy in cat. C/CE/D/DE, or your UK, Irish, EU, Ukrainian or other licence for exchange',
        'PESEL and karta pobytu (or any document proving legal residence - D-visa, EU registration certificate, etc.)',
        'Passport with the photo page copied',
        'Orzeczenie lekarskie - the medical certificate for professional drivers, valid 5 years (we book the doctor)',
        'Orzeczenie psychologiczne from a psychotechnika exam, also 5 years',
        'Existing EU CPC card or DQC, plus a sworn Polish translation if not already in EU format',
        "Świadectwo kwalifikacji or course completion certificate from any EU CPC training you've already done",
        'Two 35×45 mm biometric photos for the licence reprint at PWPW'
      ]
    },
    pricing: {
      title: 'Our fees, on the table',
      subtitle: "Fixed retainers. We sign a contract before any work starts so there's no \"oh by the way\" later.",
      items: [
        { label: 'Diagnosis call', value: 'Free', note: '30 minutes, route decided' },
        { label: 'Full kod 95 turnkey', value: 'from 1,200 PLN', note: 'OSK, medicals, exam, starostwo filing' },
        { label: 'Licence exchange only', value: 'from 600 PLN', note: 'Translations, medicals, starostwo wniosek' },
        { label: 'Appeal after a starosta refusal', value: 'from 1,200 PLN', note: 'Separate retainer, separate scope' }
      ],
      note: "Above is what LegalWin charges. Third-party costs run separately at the provider's rate: OSK course (from 1,800 PLN for szkolenie okresowe; from 5,500 PLN for kwalifikacja wstępna przyspieszona), badania lekarskie around 250 PLN, psychotechnika around 200 PLN, and 100 PLN opłata skarbowa at starostwo. Budget around 3,200-3,700 PLN all-in for a renewal."
    },
    legalBase: {
      title: 'The law behind it',
      items: [
        'Road Transport Act of 6 September 2001 (Ustawa o transporcie drogowym, chapter 7a on professional qualification)',
        'Drivers Act of 5 January 2011 (Ustawa o kierujących pojazdami)',
        "Minister of Infrastructure regulation on training drivers performing road transport - the syllabus rules",
        'EU Directive 2003/59/EC, as amended by Directive 2018/645 (the EU-wide Driver CPC framework)',
        "Minister of Justice regulation on driver examination at WORD"
      ]
    },
    faq: [
      {
        q: "I've held a UK Driver CPC for years. Does it still work in Poland?",
        a: "Sort of. If your UK DQC card was issued before 1 January 2021 it stays valid in the EU until it expires - and you can drive on it in Poland as a UK national or anyone else. But you cannot renew a UK CPC for EU work post-Brexit. When it expires, you do szkolenie okresowe (35 hours) here in Poland and the new kod 95 lands on your Polish licence. We've seen drivers cut it too fine and lose a fortnight of work."
      },
      {
        q: "I'm Irish, driving on an Irish licence with Irish CPC. Anything I need to do?",
        a: "Nothing legally, while your Irish CPC is valid - Ireland is in the EU and the card works in Poland straight away. The moment you settle in Poland and exchange your Irish licence for a Polish one, you'll want kod 95 entered on the new card too. Otherwise you end up presenting two documents at every roadside check. We do the entry at starostwo for 200-300 PLN if you already hold a valid Irish CPC certificate."
      },
      {
        q: 'My CPC came from Ukraine (or Belarus, Russia, Kazakhstan). Does any of it count here?',
        a: "Honestly, no. Polish law doesn't recognise CPCs from outside the EU/EEA, regardless of how many years you've been driving. You start on kwalifikacja wstępna przyspieszona (140 hours) if you're 21+ for C or 23+ for D. The good news: the accelerated route is far cheaper and shorter than the UK Initial CPC, and we'll match you to an OSK with a Russian-speaking instructor so the theory isn't a slog."
      },
      {
        q: 'What about a US CDL?',
        a: "US Commercial Driver's Licenses don't transfer to Poland at all - the EU has no recognition treaty with any US state. You'd start from scratch: convert to a Polish category B licence first, sit your category C theory and practical at WORD, then take kwalifikacja wstępna przyspieszona for the Driver CPC. Realistic timeline 6-9 months. Most Americans we see end up not bothering and hire local drivers for their Polish operations instead."
      },
      {
        q: "Can I do the course in English? My Polish is basic.",
        a: "The course itself, yes - English-language OSKs exist in Warsaw, and a couple in Kraków and Gdańsk. They're not advertised loudly, which is why most drivers default to Russian-speaking schools. The WORD state exam (Wojewódzki Ośrodek Ruchu Drogowego, the regional traffic authority) is available in English, Polish or Ukrainian. We file your exam application with the language preference and book a slot at a WORD where English isn't a six-week wait."
      },
      {
        q: 'What does it actually cost end-to-end?',
        a: "For a renewal (szkolenie okresowe, 35 hours): around 3,200-3,700 PLN total - 1,800 PLN course, 250 PLN medical, 200 PLN psychotechnika, 100 PLN state fee, 1,200 PLN+ our retainer. Accelerated initial qualification (140 hours): 7,500-9,000 PLN all-in. Full initial qualification (280 hours): 11,000 PLN and up. Cheaper than a UK CPC course of equivalent length, and the WORD exam fee is built into the OSK package."
      },
      {
        q: 'What happens if I keep driving after kod 95 expires?',
        a: "Don't. ITD (Inspekcja Transportu Drogowego, the Polish road transport inspectorate) runs spot checks at every motorway weighbridge and at depot gates. Driver fine: up to 8,000 PLN. Operator fine: up to 12,000 PLN. The bigger problem is insurance - if you have an accident with an expired CPC, your OC insurer pays the third party then turns around and recovers the full sum from you. We start tracking expiry dates 6 months out for fleet clients to avoid exactly this."
      },
      {
        q: "How much has the syllabus changed lately, and what's coming?",
        a: "The 2018/645 amendments landed in Poland in 2020: new modules on ecology, road safety, digital tachographs (the new Smart Tachograph 2 generation, in particular). From 2024, every 35-hour block must include at least 2.5 hours of practical driving - no more pure-classroom courses. The European Commission has consulted on adding alternative-fuel and ADAS modules from 2027; we'll know more by mid-2026. We pick OSKs whose licence and syllabus are already aligned with the latest update."
      }
    ],
    related: ['karta-pobytu', 'apelacje', 'karta-stalego-pobytu'],
    ctaTitle: "Get kod 95 sorted without losing a week to paperwork",
    ctaSubtitle: "Free 30-minute call. We map your route, price the whole thing, and lay out the calendar. From first call to a new \"95\" on your licence: typically 6-10 weeks for a renewal, longer if exchange or initial qualification is in the mix."
  },
  tr: {
    slug: 'kod-95',
    group: 'documents',
    icon: 'id-card',
    badge: 'C/CE/D/DE · AB CPC',
    title: 'Kod 95',
    subtitle: 'Sürücü mesleki yeterlilik belgesi (CPC)',
    lead: 'Kod 95, Polonya prawa jazdy\'nın (ehliyet) arkasında bulunan ve 2003/59/AT direktifi uyarınca sürücünün mesleki yeterliliğini belgeleyen "95" ibaresidir. 3,5 tonu aşan kamyon (C, CE) ve otobüs (D, DE) kategorilerinde çalışan tüm sürücüler için zorunludur. Kod 95 olmadan ticari sürüş yaparken ITD kontrolü halinde sürücüye 8.000 PLN, taşıyıcıya 12.000 PLN\'ye kadar ceza kesilir.',
    facts: [
      { label: 'Geçerlilik', value: '5 yıl', note: 'szkolenie okresowe ile yenilenir' },
      { label: 'Kategoriler', value: 'C / CE / D / DE', note: '3,5 t üzeri kamyon ve otobüs' },
      { label: 'Asgari saat', value: '35 sa', note: 'szkolenie okresowe · her 5 yılda' },
      { label: 'Yer', value: 'OSK + WORD', note: 'akredite kurs merkezi + devlet sınavı' }
    ],
    grounds: {
      title: 'Kod 95 almak için üç yol',
      subtitle: 'Hangi yolun size uygun olduğu yaşınıza, deneyiminize ve daha önce başka bir AB ülkesinde CPC sahibi olup olmadığınıza bağlıdır.',
      items: [
        {
          title: 'Kwalifikacja wstępna (tam) - 280 saat',
          desc: 'Hiç Kod 95 sahibi olmamış ve C kategorisinde 18, D kategorisinde 21 yaşından itibaren çalışmak isteyenler için. 260 saat teori ve uygulama + 20 saat sürüş. WORD\'da devlet sınavıyla biter.'
        },
        {
          title: 'Kwalifikacja wstępna przyspieszona - 140 saat',
          desc: 'C, CE için 21 yaşını veya D, DE için 23 yaşını dolduranlara hızlandırılmış kurs. 130 saat teori + 10 saat sürüş. WORD\'da aynı sınav.'
        },
        {
          title: 'Szkolenie okresowe - 35 saat',
          desc: 'Mevcut Kod 95\'i süresi dolacak olanlar için her 5 yılda bir periyodik eğitim. Sınav yoktur. 5 yıllık dönem içinde 7 saatlik modüller halinde alınabilir.'
        },
        {
          title: 'Yabancı CPC\'nin tanınması',
          desc: 'AB / EFTA ülkesinde verilen Kod 95 / CPC Polonya\'da otomatik olarak tanınır. Türkiye, Ukrayna, Belarus, Rusya veya Kazakistan CPC\'si resmen tanınmaz - sıfırdan kwalifikacja wstępna almak gerekir.'
        }
      ]
    },
    timeline: {
      title: 'Anahtar teslim süreç',
      subtitle: 'İlk görüşmeden ehliyetteki yeni "95" ibaresine kadar her şeyi yürütüyoruz. Sizden istenen: pasaport, ehliyet ve sürmek isteği.',
      steps: [
        { title: 'Tanı görüşmesi', duration: '30 dk', desc: 'Ücretsiz danışmanlıkta yolu birlikte belirleriz: szkolenie okresowe, kwalifikacja wstępna przyspieszona veya tam kwalifikacja.' },
        { title: 'Yabancı ehliyetin değişimi', duration: '14-30 gün', desc: 'Türkiye veya BDT ehliyetiniz varsa - Polonya ehliyetine çevirme işlemini hallederiz (yeminli tercüme, badania lekarskie, starostwo başvurusu).' },
        { title: 'Sağlık raporu + psikoteknik', duration: '1-2 gün', desc: 'Profesyonel sürücüler için kategori 2 badania lekarskie ve akredite psikolog psikotekniği için randevu alırız.' },
        { title: 'OSK\'ya kayıt', duration: '1-7 gün', desc: 'Size uygun dilde dersi olan (Varşova\'da Türkçe, Rusça konuşan eğitmen bulmak mümkün) ve programınıza uygun OSK seçeriz.' },
        { title: 'Eğitim', duration: '35-280 sa', desc: 'Szkolenie okresowe genelde 7\'şer saatlik 5 gün veya modüller halinde. Kwalifikacja wstępna - iş için molalarla birkaç hafta.' },
        { title: 'WORD sınavı', duration: '1 gün', desc: 'Yalnızca kwalifikacja wstępna için. 30 sorudan 16 doğruyla geçilir. Uzmanımız eşlik eder, başarısızlıkta yeniden sınava destek veririz.' },
        { title: 'Kod 95\'in ehliyete işlenmesi', duration: '14 gün', desc: 'Starostwo\'ya wniosek sunar, 100 PLN opłata\'yı öderiz. Prawa jazdy arkasında 5 yıl sonrası bitiş tarihiyle "95" görünür.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Asgari paket. Net liste yolunuza ve mevcut durumunuza göre uyarlanır.',
      items: [
        'Polonya prawa jazdy C/CE/D/DE kategorisi (veya değişim için yabancı ehliyet)',
        'PESEL ve karta pobytu (veya yasal ikametinizi kanıtlayan başka bir belge)',
        'Pasaport + fotoğraflı sayfa fotokopisi',
        'Orzeczenie lekarskie (profesyonel sürücüler için sağlık raporu, 5 yıl geçerli)',
        'Orzeczenie psychologiczne (psikoteknik) - 5 yıl geçerli',
        'AB Kod 95\'iniz varsa - orijinal + yeminli tercüme',
        'AB ülkesinde kursunuz olmuşsa - Świadectwo CPC + tercüme',
        'Ehliyet değişimi için 2 adet güncel 35×45 mm fotoğraf'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Şeffaf ve sabit ücretler. Başlamadan önce sözleşme imzalanır.',
      items: [
        { label: 'Danışmanlık ve yol seçimi', value: 'Ücretsiz', note: '30 dakika · durum değerlendirmesi' },
        { label: 'Anahtar teslim Kod 95', value: '1.200 PLN\'den', note: 'OSK seçimi, belgeler, sağlık raporu, sınav' },
        { label: 'Yalnızca ehliyet değişimi', value: '600 PLN\'den', note: 'Tercümeler, badania lekarskie, starostwo' },
        { label: 'Starosta ret kararına itiraz', value: '1.200 PLN\'den', note: 'İtiraz için ayrı sözleşme' }
      ],
      note: 'Belirtilen ücretler LegalWin danışmanlık bedelidir. OSK kurs ücretleri (szkolenie okresowe için 1.800 PLN\'den, kwalifikacja wstępna przyspieszona için 5.500 PLN\'den), badania lekarskie (~250 PLN), psikoteknik (~200 PLN) ve opłata skarbowa (100 PLN) sağlayıcı tarifelerine göre ayrıca ödenir.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (Karayolu Taşımacılığı Kanunu - bölüm 7a, mesleki yeterlilik)',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami (Sürücüler Kanunu)',
        'Rozporządzenie Ministra Infrastruktury w sprawie szkolenia kierowców wykonujących przewóz drogowy (Bayındırlık Bakanlığı sürücü eğitimi yönetmeliği)',
        '2003/59/AT Avrupa Parlamentosu ve Konseyi Direktifi (2018/645 ile değişik)',
        'Adalet Bakanlığı sınav uygulama yönetmeliği'
      ]
    },
    faq: [
      {
        q: 'Polonya\'da Kod 95 fiilen ne kadara mal olur?',
        a: 'Anahtar teslim szkolenie okresowe (35 sa) yaklaşık 3.200-3.700 PLN: ~1.800 PLN kursun kendisi, ~250 PLN badania lekarskie, ~200 PLN psikoteknik, 100 PLN opłata skarbowa ve 1.200 PLN\'den danışmanlık ücretimiz. Kwalifikacja wstępna przyspieszona (140 sa) 7.500-9.000 PLN, tam kwalifikacja (280 sa) 11.000+ PLN tutar.'
      },
      {
        q: 'Lehçe bilmeden Kod 95 alabilir miyim?',
        a: 'Kursu - evet, Türkçe veya Rusça bilen eğitmeni olan OSK\'lar Varşova, Wrocław ve Gdańsk\'ta yaygındır. WORD\'daki devlet sınavı (Wojewódzki Ośrodek Ruchu Drogowego - eyalet trafik merkezi) yalnızca Lehçe, Ukraynaca veya İngilizce yapılır (eyalete göre değişir). Size uygun dilde sınav veren OSK ve WORD seçiyoruz.'
      },
      {
        q: 'Türkiye\'den alınan Kod 95 / SRC tanınır mı?',
        a: 'Hayır. AB / EFTA dışı ülkelerin CPC\'si Polonya\'da resmen tanınmaz. 20 yıl deneyiminiz olsa dahi kwalifikacja wstępna przyspieszona kursu almanız gerekir (C için 21, D için 23 yaşı doldurmuşsanız). Türkiye\'deki tecrübe maalesef sayılmıyor.'
      },
      {
        q: 'Polonya ehliyetim yoksa ne yapmalıyım?',
        a: 'Önce yabancı ehliyetinizi Polonya ehliyetine çevirmemiz gerekir (kategori değişime uygun değilse sıfırdan sınav). Bu, starostwo üzerinden 14-30 gün sürer. İlk adım olarak yaparız ve eş zamanlı OSK kaydını hazırlayarak zaman kazandırırız.'
      },
      {
        q: 'Almanya, Litvanya veya Çekya\'dan Kod 95\'im varsa?',
        a: 'AB / EFTA\'dan herhangi bir Kod 95 otomatik tanınır - tüm AB\'de geçerlidir. Ticari taşımalarda göstermeniz yeterlidir. Süresi dolarsa - szkolenie okresowe\'yi Polonya\'da veya kartı veren ülkede alabilirsiniz.'
      },
      {
        q: 'Kod 95\'siz çalışmanın cezası nedir?',
        a: 'Sürücüye - 8.000 PLN\'ye kadar, taşıyıcıya - 12.000 PLN\'ye kadar, her ihlal için. ITD (Inspekcja Transportu Drogowego - Karayolu Taşımacılığı Müfettişliği) yolda ve firmalarda denetim yapar. Ayrıca sigorta şirketleri geçerli CPC olmadan kazada ödeme yapmıyor.'
      },
      {
        q: 'Eski Kod 95\'in süresi bitti, yenisi gelmeden çalışabilir miyim?',
        a: 'Hayır. Kod 95\'in bitiş tarihinden itibaren - şu an szkolenie okresowe\'ye kayıtlı olsanız bile - ticari sürüş yapma hakkınız yoktur. Bu nedenle bitişten 2-3 ay önce başlayın. Lojistik firmalar için 6 ay önceden hatırlatmalı takip yapıyoruz - sıkça talep edilen bir hizmettir.'
      },
      {
        q: 'Kod 95 mevzuatı ne sıklıkta değişiyor?',
        a: 'Büyük değişiklikler 2020\'de oldu (2018/645 Direktifi) - ekoloji, güvenlik ve dijital takograf modülleri eklendi. 2024\'ten itibaren her 35 saatlik eğitime 2,5 saatlik zorunlu uygulamalı oturum eklendi. Güncel programı takip ediyor, lisansı yenilenmiş OSK\'ları seçiyoruz.'
      }
    ],
    related: ['karta-pobytu', 'apelacje', 'karta-stalego-pobytu'],
    ctaTitle: 'Kod 95\'i koşturmaya gerek kalmadan halledelim',
    ctaSubtitle: 'Ücretsiz 30 dakikalık tanı görüşmesi: optimal yolu seçer, kesin bütçeyi hesaplar, takvimi belirleriz. İlk görüşmeden ehliyetteki yeni "95"e - 6-10 hafta.'
  },
  uk: {
    slug: 'kod-95',
    group: 'documents',
    icon: 'id-card',
    badge: 'C/CE/D/DE · EU CPC',
    title: 'Kod 95',
    subtitle: 'Свідоцтво професійної кваліфікації водія (CPC)',
    lead: 'Kod 95 — це позначка «95» на звороті польського prawa jazdy, що підтверджує професійну кваліфікацію водія за директивою ЄС 2003/59/WE. Обов’язкова для всіх, хто працює на вантажівках понад 3,5 т (категорії C, CE) і автобусах (D, DE). Без неї за кермом у комерційному рейсі — штраф до 8 000 PLN водієві та до 12 000 PLN перевізнику.',
    facts: [
      { label: 'Термін дії', value: '5 років', note: 'потрібно продовжувати szkoleniem okresowym' },
      { label: 'Категорії', value: 'C / CE / D / DE', note: 'вантажівки >3,5 т і автобуси' },
      { label: 'Мінімум годин', value: '35 год', note: 'szkolenie okresowe · кожні 5 років' },
      { label: 'Де оформлюється', value: 'OSK + WORD', note: 'акредитований центр + держіспит' }
    ],
    grounds: {
      title: 'Три шляхи отримання Kod 95',
      subtitle: 'Який саме шлях підійде — залежить від вашого віку, досвіду та того, чи був у вас CPC у країні ЄС.',
      items: [
        {
          title: 'Kwalifikacja wstępna (повна) — 280 годин',
          desc: 'Для тих, хто ніколи не мав Kod 95 і хоче працювати з C від 18 років або з D від 21 року. 260 год теорії + практики + 20 год водіння. Завершується державним іспитом у WORD.'
        },
        {
          title: 'Kwalifikacja wstępna przyspieszona — 140 годин',
          desc: 'Прискорений курс для тих, кому вже виповнився 21 рік (категорії C, CE) або 23 роки (D, DE). 130 год теорії + 10 год водіння. Той самий іспит у WORD.'
        },
        {
          title: 'Szkolenie okresowe — 35 годин',
          desc: 'Періодичне навчання кожні 5 років для тих, у кого Kod 95 уже є і закінчується. Без іспиту. Можна проходити модулями по 7 годин протягом усього п’ятирічного періоду.'
        },
        {
          title: 'Визнання іноземного CPC',
          desc: 'Якщо Kod 95 / CPC виданий в іншій країні ЄС/ЄЕЗ — він визнається в Польщі автоматично. CPC з України, Білорусі, Казахстану офіційно не визнається: доведеться проходити kwalifikację wstępną з нуля.'
        }
      ]
    },
    timeline: {
      title: 'Як проходить робота під ключ',
      subtitle: 'Беремо все від першого дзвінка до нової позначки 95 у правах. Від вас — паспорт, права і бажання їздити.',
      steps: [
        { title: 'Діагностика', duration: '30 хв', desc: 'На безкоштовній консультації визначаємо ваш шлях: szkolenie okresowe, kwalifikacja wstępna przyspieszona чи повна.' },
        { title: 'Обмін іноземних прав', duration: '14–30 днів', desc: 'Якщо у вас українські права — оформлюємо обмін на польські (присяжні переклади, badania lekarskie, заява в starostwo).' },
        { title: 'Медкомісія + психотест', duration: '1–2 дні', desc: 'Записуємо на badania lekarskie категорії 2 (для водіїв-професіоналів) і psychotechnikę в акредитованого психолога.' },
        { title: 'Запис в OSK', duration: '1–7 днів', desc: 'Підбираємо ośrodek szkolenia з заняттями зручною для вас мовою (часто доступний україномовний викладач) і зручним графіком.' },
        { title: 'Навчання', duration: '35–280 год', desc: 'Szkolenie okresowe — зазвичай 5 днів по 7 годин або модулями. Kwalifikacja wstępna — кілька тижнів з перервою на роботу.' },
        { title: 'Іспит у WORD', duration: '1 день', desc: 'Лише для kwalifikacji wstępnej. Тест на 30 питань, прохідний бал — 16. Супроводжуємо нашим спеціалістом, при провалі — перездача.' },
        { title: 'Внесення Kod 95 у права', duration: '14 днів', desc: 'Подаємо wniosek у starostwo, сплачуємо opłatę 100 PLN. На звороті prawa jazdy з’являється «95» з датою закінчення через 5 років.' }
      ]
    },
    documents: {
      title: 'Що від вас потрібно',
      subtitle: 'Базовий пакет. Точний перелік адаптуємо під ваш шлях і поточну ситуацію.',
      items: [
        'Польське prawo jazdy категорії C/CE/D/DE (або іноземні права для обміну)',
        'PESEL і karta pobytu (або інший документ, що підтверджує легальне перебування)',
        'Закордонний паспорт + ксерокопія сторінки з фото',
        'Orzeczenie lekarskie (медкомісія для водіїв-професіоналів, дійсне 5 років)',
        'Orzeczenie psychologiczne (psychotechnika) — дійсне 5 років',
        'Якщо є Kod 95 з ЄС — оригінал + присяжний переклад',
        'Якщо був курс у країні ЄС — Świadectwo CPC + переклад',
        '2 актуальні фотографії 35×45 мм (для обміну прав)'
      ]
    },
    pricing: {
      title: 'Скільки коштує наша робота',
      subtitle: 'Прозорі фіксовані гонорари. Підписуємо договір до початку.',
      items: [
        { label: 'Консультація і підбір шляху', value: 'Безкоштовно', note: '30 хвилин · оцінка ситуації' },
        { label: 'Супровід Kod 95 під ключ', value: 'від 1 200 PLN', note: 'Підбір OSK, документи, медкомісія, іспит' },
        { label: 'Лише обмін прав на польські', value: 'від 600 PLN', note: 'Переклади, медкомісія, starostwo' },
        { label: 'Apelacja при відмові starosty', value: 'від 1 200 PLN', note: 'Окремий договір на оскарження' }
      ],
      note: 'Зазначено гонорари LegalWin. Вартість курсів в OSK (від 1 800 PLN за szkolenie okresowe, від 5 500 PLN за kwalifikację wstępną przyspieszoną), badań lekarskich (~250 PLN), psychotechniki (~200 PLN) і opłaty skarbowej (100 PLN) — окремо за фактичними тарифами постачальників.'
    },
    legalBase: {
      title: 'Нормативна база',
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
        q: 'Скільки фактично коштує отримання Kod 95 у Польщі?',
        a: 'Szkolenie okresowe (періодичне навчання, 35 год) під ключ — близько 3 200–3 700 PLN загалом: ~1 800 PLN сам курс, ~250 PLN badania lekarskie (медогляд), ~200 PLN psychotechnika (психотест), 100 PLN opłata skarbowa (держмито) і наш гонорар від 1 200 PLN. Kwalifikacja wstępna przyspieszona (прискорена початкова кваліфікація, 140 год) виходить у 7 500–9 000 PLN, повна (280 год) — 11 000+ PLN.'
      },
      {
        q: 'Чи можна пройти Kod 95 без знання польської мови?',
        a: 'Курс — так, є OSK (ośrodek szkolenia kierowców — автошкола) з україномовними викладачами та матеріалами (особливо у Варшаві, Вроцлаві та Гданську). Державний іспит у WORD (Wojewódzki Ośrodek Ruchu Drogowego — Воєводський центр дорожнього руху) — лише польською, українською або англійською (залежить від воєводства). Підбираємо школу та WORD з відповідною вам мовою іспиту.'
      },
      {
        q: 'Чи визнається Kod 95, отриманий в Україні або Білорусі?',
        a: 'Ні. CPC з країн поза ЄС/ЄЕЗ офіційно не визнається в Польщі. Навіть якщо у вас 20 років досвіду — доведеться проходити kwalifikację wstępną przyspieszoną (прискорену початкову кваліфікацію) (якщо вам уже є 21 рік для C / 23 для D). Стаж в Україні, на жаль, не зараховується.'
      },
      {
        q: 'Що якщо у мене немає польських prawa jazdy?',
        a: 'Спершу потрібно обміняти іноземні права (prawo jazdy — водійське посвідчення) на польські (або скласти з нуля, якщо вашої категорії немає в обміні). Це 14–30 днів через starostwo (старостат — районна адміністрація). Робимо це першим кроком, паралельно із записом на курс — економимо час.'
      },
      {
        q: 'Що якщо у мене є Kod 95 з Німеччини, Литви, Чехії?',
        a: 'Визнається автоматично — Kod 95 з будь-якої країни ЄС/ЄЕЗ дійсний на всій території ЄС. Достатньо показати його при перевезеннях. Якщо закінчується — szkolenie okresowe (періодичне навчання) можна проходити в Польщі або в країні видачі.'
      },
      {
        q: 'Який штраф за роботу без Kod 95?',
        a: 'Водієві — до 8 000 PLN, перевізнику — до 12 000 PLN, за кожне порушення. ITD (Inspekcja Transportu Drogowego — Інспекція дорожного транспорту) перевіряє на дорогах і у фірмах. Крім того, страхові відмовляють у виплатах при ДТП без чинного CPC.'
      },
      {
        q: 'Чи можна почати роботу до отримання нового Kod 95, якщо старий закінчився?',
        a: 'Ні. Від дати закінчення Kod 95 ви не маєте права комерційного водіння — навіть якщо вже записалися на szkolenie okresowe (періодичне навчання). Тому починайте за 2–3 місяці до закінчення. Беремо нагадування і ведемо за півроку до дати — часта послуга для логістичних фірм.'
      },
      {
        q: 'Як часто змінюється законодавство щодо Kod 95?',
        a: 'Серйозні зміни були у 2020 (Dyrektywa 2018/645) — нові модулі з екології, безпеки та цифрових тахографів. З 2024 — обов’язкові практичні заняття по 2,5 год за кожні 35 год. Стежимо за актуальною програмою і підбираємо OSK з оновленою ліцензією.'
      }
    ],
    related: ['karta-pobytu', 'apelacje', 'karta-stalego-pobytu'],
    ctaTitle: 'Отримаємо Kod 95 без біганини й перекладів',
    ctaSubtitle: 'Безкоштовна діагностика за 30 хвилин: підберемо оптимальний шлях, порахуємо точний бюджет і складемо графік. Від першого дзвінка до нової «95» у правах — 6–10 тижнів.'
  }
};

export default kod95;
