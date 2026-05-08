import type { ServiceEntry } from './types';

const zapisDzieciDoSzkoly: ServiceEntry = {
  ru: {
    slug: 'zapis-dzieci-do-szkoly',
    group: 'relocation',
    icon: 'home',
    badge: 'Klasa powitalna · Obowiązek szkolny · Przedszkole',
    title: 'Прописка детей в школу',
    subtitle: 'Оформление obowiązek szkolny и запись в klasę powitalną',
    lead: 'По польскому праву каждый ребёнок 7-18 лет, проживающий в Польше, обязан учиться - это obowiązek szkolny независимо от гражданства. Без записи в школу - административный штраф родителям до 5 000 PLN, а главное - ребёнок теряет годы обучения. LegalWin записывает детей иностранцев в klasę powitalną (адаптационный класс с польским как иностранным), польскую публичную школу или частную международную (Akademeia, BISC, ISW). Делаем под ключ: meldunek, документы, директор, перевод dyplomu.',
    facts: [
      { label: 'Срок записи', value: '7-14 дней', note: 'standard в публичную · 30+ для частных' },
      { label: 'Стоимость публичной', value: '0 PLN', note: 'обучение бесплатно для всех детей' },
      { label: 'Klasa powitalna', value: '1 год', note: 'польский B1 за год · до 2 лет в исключениях' },
      { label: 'Возраст', value: '7-18 лет', note: 'obowiązek szkolny · детсад с 3' }
    ],
    grounds: {
      title: 'Куда записываем детей',
      subtitle: 'Польская система - три уровня: предшколна (3-7), школа подставова (7-15), школа средня (15-18).',
      items: [
        { title: 'Klasa powitalna (адаптационная)', desc: 'Год погружения в польский с native speaker. До 15 человек в группе. Программа: язык + стандартные предметы. После - обычный класс по уровню.' },
        { title: 'Szkoła podstawowa (7-15 лет)', desc: 'Базовая 8-летняя школа. Бесплатная для всех. Запись по адресу zameldowania. Бесплатные обеды и учебники в большинстве школ.' },
        { title: 'Liceum / Technikum / Branżowa', desc: 'Школа средня после 8-го класса (15+ лет). 4 года liceum (общеобразовательная), 5 лет technikum (с профессией), 3 года branżowa.' },
        { title: 'Przedszkole (3-7 лет)', desc: 'Детский сад. Публичный - бесплатный, но конкуренция огромная. Частный - 1 200-3 500 PLN/мес. Запись в марте на сентябрь.' },
        { title: 'Школа międzynarodowa', desc: 'Akademeia HES, British International School (BISC), International School of Warsaw (ISW), Canadian School of Warsaw - 60 000-120 000 PLN/год. IB / Cambridge.' },
        { title: 'Społeczne / Niepubliczne', desc: 'Польская частная школа - 8 000-25 000 PLN/год. Меньше классы (15-20), больше внимания, часто лучше педагоги. Польская программа.' },
        { title: 'Edukacja domowa', desc: 'Если переехали в середине года или ребёнок не готов к польскому - официально оформляем edukację domową. Экзамены раз в год в школе.' },
        { title: 'Признание зарубежного образования', desc: 'Свидетельство о школе из страны происхождения - umiejscowienie в Польше для зачисления в правильный класс. Через kuratorium oświaty.' }
      ]
    },
    timeline: {
      title: 'Как записываем ребёнка',
      subtitle: 'От первого визита до начала занятий - обычно 7-14 дней.',
      steps: [
        { title: 'Консультация', duration: '30 мин', desc: 'Возраст, текущий уровень польского, страна предыдущей школы, район проживания. Подбираем 2-3 варианта школ.' },
        { title: 'Сбор документов', duration: '3-7 дней', desc: 'Свидетельство о рождении (присяжный перевод), школьный аттестат / справка из последней школы, медкарта, фото. Если есть orzeczenie psychologiczne - приложением.' },
        { title: 'Meldunek (если ещё нет)', duration: '1-2 дня', desc: 'Школа берёт детей по zameldowaniu. Если нет - оформляем pobyt czasowy ребёнка вместе с meldunkiem родителя.' },
        { title: 'Wniosek в школу', duration: '1 день', desc: 'Подаём wniosek o przyjęcie do klasy powitalnej / klasy I-VIII. Подача через ePUAP или физически в kanchelarii школы.' },
        { title: 'Решение dyrektora', duration: '3-7 дней', desc: 'Dyrektor szkoły принимает на основании zameldowania, возраста, уровня. Иногда - короткое interview родителей.' },
        { title: 'Постановка на учёт', duration: '1 день', desc: 'Подача в kuratorium через школу. Получение legitymacji szkolnej (бесплатные проезды).' },
        { title: 'Первый день', duration: '1 день', desc: 'Сопровождаем родителя на первое родительское собрание (zebrań). Знакомство с учителем (wychowawca), pedagogiem szkolnym, classmates.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Базовый пакет - точный список зависит от школы.',
      items: [
        'Паспорт ребёнка + копия страницы с фото',
        'Паспорт родителя (минимум одного)',
        'Свидетельство о рождении (присяжный перевод на польский)',
        'Школьный аттестат / справка из последней школы (с переводом)',
        'Медкарта или karta zdrowia (или согласие на её оформление в Польше)',
        '2 фото 30×42 мм (для legitymacji)',
        'PESEL ребёнка (или подтверждение пребывания)',
        'Zaświadczenie o zameldowaniu (для публичной школы - обязательно)'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Гонорар за запись. Школы бесплатные - кроме частных.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · подбор школ' },
        { label: 'Запись в публичную школу', value: 'от 600 PLN', note: 'Один ребёнок · документы + meldunek + школа' },
        { label: 'Запись в частную / международную', value: 'от 950 PLN', note: 'С admission interviews и подачей wniosków' },
        { label: 'Семейный пакет (2+ детей)', value: 'от 1 100 PLN', note: 'Скидка при подаче на нескольких детей' }
      ],
      note: 'Указаны гонорары LegalWin. Госпошлина за meldunek - 0 PLN, присяжный перевод (~80 PLN/документ), школьная плата частной школы (8 000-120 000 PLN/год) - отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 14 grudnia 2016 r. - Prawo oświatowe (rozdz. 4 - обovязок шкіllowy)',
        'Rozporządzenie MEN z dnia 23 sierpnia 2017 r. ws. kształcenia osób niebędących obywatelami polskimi',
        'Rozporządzenie MEN ws. organizacji kształcenia osób niebędących obywatelami polskimi (klasa powitalna)',
        'Konwencja o prawach dziecka ONZ z 20 listopada 1989 r. (art. 28 - prawo do edukacji)',
        'Kodeks postępowania administracyjnego (KPA - odwołania od decyzji dyrektora)'
      ]
    },
    faq: [
      { q: 'Что такое klasa powitalna и кому она подходит?', a: 'Klasa powitalna (приветственный/адаптационный класс) - это адаптационный класс на 1 год для детей-иностранцев, не владеющих польским. До 15 учеников. Учат польский с native speaker (10 часов в неделю) + стандартные предметы. Цель - за год дать B1 уровень польского, чтобы перейти в обычный класс. Доступна с 1-го по 8-й класс. Подходит, если ребёнок приехал недавно или не учил польский.' },
      { q: 'Какая школа лучше - публичная или частная?', a: 'Публичная: бесплатно, обширная программа, до 28 учеников в классе. Достаточно качественная в крупных городах (Warszawa, Wrocław). Частная niepubliczna (негосударственная): 8 000-25 000 PLN/год, до 20 учеников, индивидуальный подход, часто лучшие педагоги. Międzynarodowa (международная): 60 000-120 000 PLN/год, английская программа, IB, для возвращающихся в свою страну. Выбор - по бюджету и долгосрочным планам.' },
      { q: 'Что делать, если у ребёнка нет PESEL?', a: 'Запись возможна без PESEL - школа принимает по паспорту и подтверждению пребывания. Но для legitymacji szkolnej, eDziennika, льгот на проезд PESEL нужен. Делаем PESEL ребёнка одновременно с записью в школу.' },
      { q: 'Когда обязательная запись - школьный год начинается в сентябре?', a: 'Стандартная запись - март-апрель на следующий учебный год. Но школы принимают детей в течение всего года, если есть места - особенно в klasy powitalne. Если переехали в середине года - записываем в течение 7-14 дней.' },
      { q: 'Что если ребёнок в среднем-старшем классе и не знает польского?', a: 'Сложнее: liceum / technikum принимают через рекрутацию по баллам с egzaminu ósmoklasisty. Альтернативы: 1) klasa powitalna в szkole podstawowej (если возраст ≤ 15); 2) niepubliczne liceum с программой адаптации; 3) международная школа на английском; 4) edukacja domowa с экзаменами раз в год.' },
      { q: 'Бесплатные обеды в школе?', a: 'В большинстве szkół podstawowych - да, по вниоsku от MOPS для семей с доходом ≤ 600 PLN/чел./мес. Иначе - 6-12 PLN/обед, оплата раз в месяц. Помогаем оформить wniosek в MOPS.' },
      { q: 'Можно ли записать в школу в другом районе?', a: 'Школы podstawowe берут по zameldowaniu в районе (rejon). Если хотите в другой район - подача через rekrutację электронну в апреле-мае на сентябрь. После - только за zgodą dyrektora obu szkół. Liceum / technikum принимают свободно по баллам.' }
    ],
    related: ['meldunek', 'pesel', 'tlumacz-na-wizyty'],
    ctaTitle: 'Запишем ребёнка в школу за 7-14 дней',
    ctaSubtitle: 'Бесплатная консультация: подбор школ под ваш район и потребности, проверка документов, сопровождение к dyrektorovi. Klasa powitalna для не-польскоговорящих доступна везде.'
  },
  pl: {
    slug: 'zapis-dzieci-do-szkoly',
    group: 'relocation',
    icon: 'home',
    badge: 'Klasa powitalna · Obowiązek szkolny · Przedszkole',
    title: 'Zapis dzieci do szkoły',
    subtitle: 'Obowiązek szkolny i zapis do klasy powitalnej',
    lead: 'Wedle polskiego prawa każde dziecko 7-18 lat mieszkające w Polsce ma obowiązek szkolny - niezależnie od obywatelstwa. Bez zapisu - kara administracyjna do 5 000 PLN, a dziecko traci lata edukacji. LegalWin zapisuje dzieci cudzoziemców do klasy powitalnej (adaptacyjnej z polskim jako obcym), publicznej szkoły lub prywatnej / międzynarodowej (Akademeia, BISC, ISW). Pod klucz: meldunek, dokumenty, dyrektor, tłumaczenie świadectw.',
    facts: [
      { label: 'Termin zapisu', value: '7-14 dni', note: 'publiczna · 30+ prywatna' },
      { label: 'Koszt publicznej', value: '0 PLN', note: 'edukacja bezpłatna dla wszystkich' },
      { label: 'Klasa powitalna', value: '1 rok', note: 'polski B1 w rok · do 2 lat wyjątkowo' },
      { label: 'Wiek', value: '7-18 lat', note: 'obowiązek szkolny · przedszkole od 3' }
    ],
    grounds: {
      title: 'Gdzie zapisujemy',
      subtitle: 'Polski system - trzy poziomy: przedszkole (3-7), podstawowa (7-15), średnia (15-18).',
      items: [
        { title: 'Klasa powitalna', desc: 'Rok zanurzenia w polskim z native speakerem. Do 15 dzieci. Język + standardowe przedmioty. Po - zwykła klasa.' },
        { title: 'Szkoła podstawowa (7-15)', desc: '8-letnia bazowa. Bezpłatna. Po zameldowaniu. Często bezpłatne obiady i podręczniki.' },
        { title: 'Liceum / Technikum / Branżowa', desc: 'Po klasie 8 (15+). 4 lata liceum, 5 lat technikum, 3 lata branżowa.' },
        { title: 'Przedszkole (3-7)', desc: 'Publiczne bezpłatne (duża konkurencja). Prywatne 1 200-3 500 PLN/mies. Zapisy w marcu na wrzesień.' },
        { title: 'Szkoła międzynarodowa', desc: 'Akademeia HES, BISC, ISW, Canadian School - 60 000-120 000 PLN/rok. IB / Cambridge.' },
        { title: 'Społeczne / niepubliczne', desc: 'Polska prywatna - 8 000-25 000 PLN/rok. Mniejsze klasy, lepsi pedagogowie. Polski program.' },
        { title: 'Edukacja domowa', desc: 'Po przeprowadzce w środku roku lub gdy dziecko nieprzygotowane do polskiego. Egzaminy raz w roku.' },
        { title: 'Uznanie zagranicznej edukacji', desc: 'Świadectwo z kraju pochodzenia - uznanie w Polsce do zapisania w odpowiedniej klasie. Przez kuratorium oświaty.' }
      ]
    },
    timeline: {
      title: 'Przebieg zapisu',
      subtitle: 'Od konsultacji do pierwszego dnia - zwykle 7-14 dni.',
      steps: [
        { title: 'Konsultacja', duration: '30 min', desc: 'Wiek, polski, kraj poprzedniej szkoły, rejon. 2-3 opcje szkół.' },
        { title: 'Dokumenty', duration: '3-7 dni', desc: 'Akt urodzenia (tłumaczenie przysięgłe), świadectwo z poprzedniej szkoły, karta zdrowia, zdjęcia. Orzeczenie psychologiczne jeśli jest.' },
        { title: 'Meldunek', duration: '1-2 dni', desc: 'Szkoła bierze po zameldowaniu. Jeśli brak - czasowy pobyt dziecka razem z meldunkiem rodzica.' },
        { title: 'Wniosek do szkoły', duration: '1 dzień', desc: 'Wniosek o przyjęcie do klasy powitalnej / I-VIII. ePUAP lub osobiście w kancelarii.' },
        { title: 'Decyzja dyrektora', duration: '3-7 dni', desc: 'Po zameldowaniu, wieku, poziomie. Czasem krótki wywiad rodziców.' },
        { title: 'Rejestracja', duration: '1 dzień', desc: 'Kuratorium przez szkołę. Legitymacja szkolna (bezpłatne przejazdy).' },
        { title: 'Pierwszy dzień', duration: '1 dzień', desc: 'Pierwsze zebranie. Znajomość z wychowawcą, pedagogiem, kolegami.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Pakiet bazowy.',
      items: [
        'Paszport dziecka + kopia',
        'Paszport rodzica (min. jednego)',
        'Akt urodzenia (tłumaczenie przysięgłe)',
        'Świadectwo z poprzedniej szkoły (z tłumaczeniem)',
        'Karta zdrowia',
        '2 zdjęcia 30×42 mm (legitymacja)',
        'PESEL dziecka',
        'Zaświadczenie o zameldowaniu (publiczna - obowiązkowe)'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Honorarium za zapis. Szkoły publiczne bezpłatne.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · dobór szkoły' },
        { label: 'Zapis do publicznej', value: 'od 600 PLN', note: 'Jedno dziecko · dokumenty + meldunek + szkoła' },
        { label: 'Zapis do prywatnej / międzynarodowej', value: 'od 950 PLN', note: 'Z admission interview' },
        { label: 'Pakiet rodzinny (2+ dzieci)', value: 'od 1 100 PLN', note: 'Rabat' }
      ],
      note: 'Powyżej honoraria LegalWin. Meldunek 0 PLN, tłumaczenia (~80/dok.), czesne prywatnej szkoły (8 000-120 000 PLN/rok) - osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 14 grudnia 2016 r. - Prawo oświatowe (rozdz. 4)',
        'Rozporządzenie MEN z 23 sierpnia 2017 r. ws. kształcenia cudzoziemców',
        'Rozporządzenie MEN ws. klasy powitalnej',
        'Konwencja o prawach dziecka ONZ z 20 listopada 1989 r.',
        'Kodeks postępowania administracyjnego'
      ]
    },
    faq: [
      { q: 'Klasa powitalna - dla kogo?', a: 'Adaptacyjna na 1 rok dla cudzoziemców bez polskiego. Do 15 uczniów. Polski z native speakerem (10 h/tyg.) + standardowe przedmioty. Cel: B1 polskiego w rok. Klasy I-VIII.' },
      { q: 'Publiczna vs prywatna?', a: 'Publiczna: bezpłatna, do 28 dzieci w klasie. Niepubliczna: 8 000-25 000 PLN/rok, do 20 dzieci. Międzynarodowa: 60 000-120 000 PLN/rok, IB / Cambridge. Wybór wg budżetu i planów.' },
      { q: 'Bez PESEL?', a: 'Tak - szkoła przyjmuje z paszportem i dokumentem pobytu. Do legitymacji, eDziennika, ulg PESEL potrzebny. Załatwiamy razem.' },
      { q: 'Kiedy zapisy?', a: 'Standard marzec-kwiecień na następny rok. Szkoły przyjmują przez cały rok przy wolnych miejscach (klasy powitalne). Środek roku - 7-14 dni.' },
      { q: 'Liceum / technikum bez polskiego?', a: 'Trudniej: rekrutacja po egzaminie ósmoklasisty. Alternatywy: klasa powitalna w podstawowej (≤ 15 lat), niepubliczne liceum, międzynarodowa, edukacja domowa.' },
      { q: 'Bezpłatne obiady?', a: 'W większości podstawówek - tak, po wniosku do MOPS przy dochodzie ≤ 600 PLN/os./mies. Inaczej 6-12 PLN/obiad. Pomagamy z wnioskiem.' },
      { q: 'Inny rejon?', a: 'Podstawówki biorą po rejonie. Inny - przez rekrutację elektroniczną kwiecień-maj. Później - za zgodą obu dyrektorów. Liceum / technikum - wolny wybór po punktach.' }
    ],
    related: ['meldunek', 'pesel', 'tlumacz-na-wizyty'],
    ctaTitle: 'Zapis do szkoły w 7-14 dni',
    ctaSubtitle: 'Bezpłatna konsultacja: dobór pod rejon i potrzeby, weryfikacja dokumentów, asysta u dyrektora. Klasa powitalna dostępna wszędzie.'
  },
  en: {
    slug: 'zapis-dzieci-do-szkoly',
    group: 'relocation',
    icon: 'home',
    badge: 'Welcome class · Compulsory schooling · Kindergarten',
    title: 'School enrolment',
    subtitle: 'Compulsory schooling and welcome-class enrolment',
    lead: "Polish law obliges every child aged 7-18 living in Poland to attend school - regardless of citizenship. Without enrolment - administrative fines up to 5,000 PLN for parents, and worse, the child loses school years. LegalWin enrols expat kids in welcome classes (klasa powitalna - Polish-as-a-second-language adaptation), public Polish schools or private/international (Akademeia, BISC, ISW). Turnkey: meldunek, documents, school director, certificate translation.",
    facts: [
      { label: 'Enrolment time', value: '7-14 days', note: 'public · 30+ private' },
      { label: 'Public school cost', value: '0 PLN', note: 'free for all children' },
      { label: 'Welcome class', value: '1 year', note: 'B1 Polish in a year · up to 2 in exceptions' },
      { label: 'Age', value: '7-18 years', note: 'compulsory · kindergarten from 3' }
    ],
    grounds: {
      title: 'Where we enrol',
      subtitle: 'Polish system: kindergarten (3-7), primary (7-15), secondary (15-18).',
      items: [
        { title: 'Welcome class (klasa powitalna)', desc: 'A year of immersion in Polish with native speaker. Up to 15 students. Language + standard subjects. After - regular class by level.' },
        { title: 'Primary school (7-15)', desc: '8-year basic. Free. Enrolment by registered address. Often free meals and books.' },
        { title: 'Liceum / technikum / branżowa', desc: 'Secondary after grade 8 (15+). 4-year liceum, 5-year technikum, 3-year vocational.' },
        { title: 'Kindergarten (3-7)', desc: 'Public - free, fierce competition. Private - 1,200-3,500 PLN/month. Apply in March for September.' },
        { title: 'International schools', desc: 'Akademeia HES, BISC, ISW, Canadian School - 60,000-120,000 PLN/year. IB / Cambridge.' },
        { title: 'Społeczne / non-public', desc: 'Polish private - 8,000-25,000 PLN/year. Smaller classes, often better teachers. Polish curriculum.' },
        { title: 'Home education', desc: 'For mid-year arrivals or kids not ready for Polish. Annual exams at the school.' },
        { title: 'Foreign-education recognition', desc: 'School certificate from country of origin - recognised in Poland to place into the right grade. Via kuratorium oświaty.' }
      ]
    },
    timeline: {
      title: 'Enrolment timeline',
      subtitle: 'From first call to first day - typically 7-14 days.',
      steps: [
        { title: 'Consultation', duration: '30 min', desc: 'Age, Polish level, country of last school, district. 2-3 school options.' },
        { title: 'Documents', duration: '3-7 days', desc: 'Birth certificate (sworn translation), school transcript, health card, photos. Psych report if any.' },
        { title: 'Meldunek', duration: '1-2 days', desc: "Schools enrol by zameldowanie. We arrange child's temporary residence with parent's meldunek." },
        { title: 'School application', duration: '1 day', desc: 'Welcome class / grade I-VIII application. Via ePUAP or in person.' },
        { title: "Director's decision", duration: '3-7 days', desc: 'Based on registration, age, level. Sometimes a brief parent interview.' },
        { title: 'Registration', duration: '1 day', desc: 'Kuratorium via school. Legitymacja szkolna (free transit).' },
        { title: 'First day', duration: '1 day', desc: 'First parent meeting. Meet the wychowawca (homeroom), pedagog, classmates.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Base set.',
      items: [
        "Child's passport + photo-page copy",
        "Parent's passport (at least one)",
        'Birth certificate (sworn translation)',
        'Last school transcript (with translation)',
        'Health card or consent to issue one',
        '2 photos 30×42 mm (legitymacja)',
        "Child's PESEL or stay proof",
        'Zameldowanie certificate (mandatory for public)'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Enrolment fee. Public schools are free.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 minutes · school selection' },
        { label: 'Public-school enrolment', value: 'from 600 PLN', note: 'One child · documents + meldunek + school' },
        { label: 'Private / international', value: 'from 950 PLN', note: 'With admission interviews' },
        { label: 'Family pack (2+ kids)', value: 'from 1,100 PLN', note: 'Discount for joint enrolment' }
      ],
      note: 'LegalWin fees. Meldunek 0 PLN, sworn translations (~80 PLN/doc), private-school tuition (8,000-120,000 PLN/year) billed separately.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Education Law of 14 December 2016 (Chapter 4 - compulsory schooling)',
        'MEN Regulation of 23 August 2017 on educating non-citizens',
        'MEN Regulation on welcome-class organisation',
        'UN Convention on the Rights of the Child of 20 November 1989 (Art. 28)',
        'Code of Administrative Procedure (KPA - director-decision appeals)'
      ]
    },
    faq: [
      { q: "What is klasa powitalna and who's it for?", a: "A 1-year adaptation class for foreign children without Polish. Up to 15 students. Polish with native speaker (10 h/week) + standard subjects. Goal: B1 Polish in one year, then mainstream class. Available grades I-VIII. Right for kids who arrived recently or didn't study Polish." },
      { q: 'Public vs. private?', a: 'Public: free, broad curriculum, up to 28 per class. Quality decent in big cities. Polish private: 8,000-25,000 PLN/year, up to 20 per class, individualised, often better teachers. International: 60,000-120,000 PLN/year, English curriculum, IB - best for families planning to leave again. Pick by budget and long-term plans.' },
      { q: 'No PESEL?', a: 'Enrolment is possible without PESEL - schools accept passport plus stay proof. PESEL is needed for legitymacja, eDziennik, transit discounts. We arrange child PESEL alongside enrolment.' },
      { q: 'Enrolment timing - does the school year start in September?', a: 'Standard application - March/April for the next year. Schools accept mid-year if seats are available, especially welcome classes. Mid-year - 7-14 days from filing.' },
      { q: 'Older child without Polish?', a: 'Harder: liceum / technikum admit by 8th-grade exam scores. Alternatives: 1) welcome class in primary if ≤ 15; 2) private liceum with adaptation; 3) international school; 4) home education with annual exams.' },
      { q: 'Free school meals?', a: "Most primary schools - yes, via MOPS application for families earning ≤ 600 PLN/person/month. Otherwise 6-12 PLN/meal. We help file the MOPS application." },
      { q: 'Different district?', a: 'Primary schools enrol by district. Other districts - via electronic recruitment in April-May. Later - only with both directors\' consent. Liceum / technikum - open by score.' }
    ],
    related: ['meldunek', 'pesel', 'tlumacz-na-wizyty'],
    ctaTitle: 'School enrolment in 7-14 days',
    ctaSubtitle: 'Free consultation: school options for your district and needs, document review, accompaniment to the director. Welcome class available everywhere.'
  }
};

export default zapisDzieciDoSzkoly;
