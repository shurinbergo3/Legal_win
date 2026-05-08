import type { ServiceEntry } from './types';

const ochrona: ServiceEntry = {
  ru: {
    slug: 'ochrona-miedzynarodowa',
    group: 'immigration',
    icon: 'shield',
    badge: 'TZTC · статус беженца',
    title: 'Международная защита',
    subtitle: 'Ochrona Międzynarodowa - убежище в Польше',
    lead: 'Если возвращение в страну происхождения угрожает жизни, свободе или здоровью - вы имеете право на защиту Польши. Есть два вида: статус беженца (по Женевской конвенции 1951 г.) и дополнительная защита.',
    facts: [
      { label: 'Заявление', value: 'в день пересечения границы', note: 'Straż Graniczna или UdSC' },
      { label: 'TZTC', value: '30 дней', note: 'временное удостоверение' },
      { label: 'Решение', value: '6 мес + 6 мес', note: 'стандарт + продление' },
      { label: 'Стоимость', value: 'бесплатно', note: 'процедура освобождена от пошлин' }
    ],
    grounds: {
      title: 'Основания для международной защиты',
      items: [
        { title: 'Статус беженца (Женевская конвенция 1951)', desc: 'Преследование по признакам расы, религии, национальности, политических взглядов или принадлежности к социальной группе.' },
        { title: 'Дополнительная защита (ochrona uzupełniająca)', desc: 'Реальная угроза серьёзного вреда: смертная казнь, пытки, нечеловеческое обращение, угроза жизни из-за вооружённого конфликта.' },
        { title: 'Толерантное пребывание (pobyt tolerowany)', desc: 'Когда депортация невозможна, но оснований для беженства/ochrony uzupełniającej недостаточно. Нет пути к ПМЖ.' },
        { title: 'Временная защита (ochrona czasowa)', desc: 'Действует для граждан Украины с 2022 года. Даёт PESEL UKR, доступ к работе, образованию, медицине, социальным выплатам.' }
      ]
    },
    timeline: {
      title: 'Порядок процедуры',
      steps: [
        { title: 'Заявление', duration: 'день 1', desc: 'Подаётся лично в Straży Granicznej или в воеводстве. Мы готовим вас к рассказу о вашей истории.' },
        { title: 'Выдача TZTC', duration: 'день 1-30', desc: 'Tymczasowe Zaświadczenie Tożsamości Cudzoziemca - легализует пребывание на время процедуры.' },
        { title: 'Размещение', duration: 'срок процедуры', desc: 'Ośrodek dla Cudzoziemców или вне - с финансовой помощью 750 PLN/мес. Мы помогаем выбрать.' },
        { title: 'Медицинский осмотр', duration: '14 дней', desc: 'Обязательное обследование у врача - свидетельство здоровья.' },
        { title: 'Интервью', duration: '1-4 мес', desc: 'Собеседование с urzędnikiem. Присутствует наш иммиграционный консультант. Записываем протокол.' },
        { title: 'Решение', duration: '3-6 мес', desc: 'Шеф Urzędu do Spraw Cudzoziemców. Отказ - есть odwołanie к Radzie do Spraw Uchodźców.' }
      ]
    },
    documents: {
      title: 'Что приносим на заявление',
      items: [
        'Документы, удостоверяющие личность (паспорт, ID, свидетельство о рождении)',
        'Доказательства преследования: фото, медицинские справки о травмах, свидетельские показания, публикации СМИ',
        'Документы о членстве в партии, религиозной общине, социальной группе - если применимо',
        'Справки о политической ситуации в стране (доклады Amnesty, Human Rights Watch, UNHCR)',
        'Документы о членах семьи, уже находящихся в ЕС',
        'Медицинская документация (при наличии ПТСР, травм)',
        'Любые другие доказательства риска при возвращении'
      ]
    },
    pricing: {
      title: 'Наша работа',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: 'Оценка оснований и стратегии' },
        { label: 'Сопровождение процедуры', value: 'от 3 000 PLN', note: 'Подготовка к интервью + представительство' },
        { label: 'Обжалование отказа', value: 'от 2 500 PLN', note: 'Rada do Spraw Uchodźców' },
        { label: 'Skarga в WSA', value: 'от 3 500 PLN', note: 'Судебная стадия' }
      ],
      note: 'Процедура международной защиты освобождена от госпошлин. Юридическая помощь у нас - платная; при отсутствии средств есть pomoc prawna z urzędu.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 13 czerwca 2003 r. o udzielaniu cudzoziemcom ochrony',
        'Konwencja Genewska z 1951 r. o statusie uchodźców',
        'Dyrektywa 2011/95/UE (kwalifikacja dla statusu uchodźcy)',
        'Dyrektywa 2013/32/UE (procedura)',
        'Rozporządzenie Dublin III 604/2013'
      ]
    },
    faq: [
      { q: 'Что даёт TZTC?', a: 'Tymczasowe Zaświadczenie Tożsamości Cudzoziemca (Временное удостоверение личности иностранца) легализует ваше пребывание в Польше на срок процедуры и даёт право на размещение и медицинскую помощь. Через 6 месяцев без решения - можно получить доступ к рынку труда.' },
      { q: 'Могу ли я выезжать из Польши?', a: 'Нет. Во время процедуры международной защиты вы не можете покидать Польшу - это может привести к прекращению процедуры и возврату в страну происхождения (по правилу Dublin III).' },
      { q: 'Что такое «безопасная страна»?', a: 'Если ваша страна происхождения или страна первого въезда считается «безопасной», процедура может быть ускоренной (до 30 дней) и шансы на отказ выше. Список безопасных стран ведёт UdSC.' },
      { q: 'Разрешат ли мне работать?', a: 'Если решение не вынесено через 6 месяцев не по вашей вине - да, вы получаете свидетельство tożsamości с правом работы. До этого - нет.' },
      { q: 'Что с детьми?', a: 'Дети - часть семейного заявления родителя. Если статус присвоен родителю, дети получают его автоматически. Несопровождаемые несовершеннолетние получают особые гарантии защиты.' },
      { q: 'Чем отличается от гуманитарной визы?', a: 'Международная защита - процедура внутри ЕС после въезда. Гуманитарная виза выдаётся посольством за границей - это отдельный инструмент.' }
    ],
    related: ['karta-pobytu', 'apelacje', 'karta-stalego-pobytu'],
    ctaTitle: 'Нужна защита в Польше - начнём сегодня',
    ctaSubtitle: 'Подготовим стратегию и подадим заявление в течение 24 часов. Каждый день в статусе нелегального пребывания уменьшает шансы.'
  },
  pl: {
    slug: 'ochrona-miedzynarodowa',
    group: 'immigration',
    icon: 'shield',
    badge: 'TZTC · status uchodźcy',
    title: 'Ochrona Międzynarodowa',
    subtitle: 'Azyl i ochrona uzupełniająca w Polsce',
    lead: 'Jeżeli powrót do kraju pochodzenia zagraża życiu, wolności lub zdrowiu - masz prawo do ochrony RP. Dwa rodzaje: status uchodźcy (Konwencja Genewska 1951) oraz ochrona uzupełniająca.',
    facts: [
      { label: 'Zgłoszenie', value: 'w dniu przekroczenia granicy', note: 'SG lub UdSC' },
      { label: 'TZTC', value: '30 dni', note: 'tymczasowe zaświadczenie' },
      { label: 'Decyzja', value: '6 mies + 6 mies', note: 'standard + przedłużenie' },
      { label: 'Koszt', value: 'gratis', note: 'procedura zwolniona z opłat' }
    ],
    grounds: {
      title: 'Podstawy ochrony międzynarodowej',
      items: [
        { title: 'Status uchodźcy (Konwencja Genewska 1951)', desc: 'Prześladowanie z powodu rasy, religii, narodowości, poglądów politycznych lub przynależności do grupy społecznej.' },
        { title: 'Ochrona uzupełniająca', desc: 'Realne ryzyko poważnej krzywdy: kara śmierci, tortury, nieludzkie traktowanie, zagrożenie z powodu konfliktu zbrojnego.' },
        { title: 'Pobyt tolerowany', desc: 'Gdy deportacja jest niemożliwa, lecz brak podstaw do uchodźstwa / ochrony uzupełniającej. Nie prowadzi do PR.' },
        { title: 'Ochrona czasowa', desc: 'Dla obywateli Ukrainy od 2022. PESEL UKR, praca, edukacja, ochrona zdrowia, świadczenia.' }
      ]
    },
    timeline: {
      title: 'Przebieg procedury',
      steps: [
        { title: 'Zgłoszenie', duration: 'dzień 1', desc: 'Osobiście w SG lub województwie. Przygotowujemy do opowieści życia.' },
        { title: 'Wydanie TZTC', duration: 'dzień 1-30', desc: 'Legalizuje pobyt na czas procedury.' },
        { title: 'Zakwaterowanie', duration: 'czas procedury', desc: 'Ośrodek lub poza ośrodkiem z pomocą 750 PLN/mies.' },
        { title: 'Badanie lekarskie', duration: '14 dni', desc: 'Obowiązkowe - świadectwo zdrowia.' },
        { title: 'Wywiad', duration: '1-4 mies', desc: 'Z urzędnikiem UdSC. Nasz konsultant imigracyjny obecny. Protokół.' },
        { title: 'Decyzja', duration: '3-6 mies', desc: 'Szef UdSC. Odmowa - odwołanie do Rady do Spraw Uchodźców.' }
      ]
    },
    documents: {
      title: 'Dokumenty przy zgłoszeniu',
      items: [
        'Dokumenty tożsamości (paszport, ID, akt urodzenia)',
        'Dowody prześladowania: zdjęcia, zaświadczenia medyczne, zeznania świadków, publikacje',
        'Dokumenty o członkostwie w partii, wspólnocie religijnej, grupie społecznej',
        'Raporty o sytuacji politycznej (Amnesty, HRW, UNHCR)',
        'Dokumenty o członkach rodziny w UE',
        'Dokumentacja medyczna (PTSD, urazy)',
        'Każde inne dowody ryzyka po powrocie'
      ]
    },
    pricing: {
      title: 'Nasza praca',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: 'Ocena podstaw i strategia' },
        { label: 'Prowadzenie procedury', value: 'od 3 000 PLN', note: 'Przygotowanie + reprezentacja' },
        { label: 'Odwołanie', value: 'od 2 500 PLN', note: 'Rada do Spraw Uchodźców' },
        { label: 'Skarga do WSA', value: 'od 3 500 PLN', note: 'Etap sądowy' }
      ],
      note: 'Procedura ochrony międzynarodowej - bez opłat urzędowych. Nasze honorarium - płatne; przy braku środków dostępna pomoc prawna z urzędu.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 13 czerwca 2003 r. o udzielaniu cudzoziemcom ochrony',
        'Konwencja Genewska z 1951 r.',
        'Dyrektywa 2011/95/UE',
        'Dyrektywa 2013/32/UE',
        'Rozporządzenie Dublin III 604/2013'
      ]
    },
    faq: [
      { q: 'Co daje TZTC?', a: 'Legalizuje pobyt na czas procedury, daje prawo do zakwaterowania i opieki medycznej. Po 6 miesiącach bez decyzji - dostęp do rynku pracy.' },
      { q: 'Czy mogę wyjeżdżać z Polski?', a: 'Nie. W trakcie procedury opuszczenie Polski może skutkować jej umorzeniem i powrotem do kraju pochodzenia (Dublin III).' },
      { q: 'Co to „kraj bezpieczny"?', a: 'Jeśli kraj pochodzenia lub tranzytu jest „bezpieczny", procedura może być przyspieszona (do 30 dni), a szanse odmowy wyższe. Lista UdSC.' },
      { q: 'Czy będę mógł pracować?', a: 'Jeśli brak decyzji po 6 miesiącach nie z Twojej winy - tak, otrzymasz zaświadczenie tożsamości z prawem do pracy.' },
      { q: 'Co z dziećmi?', a: 'Dzieci są częścią wniosku rodzinnego rodzica. Status automatyczny. Dzieci bez opieki - szczególne gwarancje.' },
      { q: 'Czym różni się od wizy humanitarnej?', a: 'Ochrona międzynarodowa - procedura w UE po wjeździe. Wiza humanitarna - wydawana przez konsula z zagranicy.' }
    ],
    related: ['karta-pobytu', 'apelacje', 'karta-stalego-pobytu'],
    ctaTitle: 'Potrzebujesz ochrony w Polsce - zaczynamy dziś',
    ctaSubtitle: 'Strategia i wniosek w 24 godziny. Każdy dzień w nielegalnym pobycie zmniejsza szanse.'
  },
  en: {
    slug: 'ochrona-miedzynarodowa',
    group: 'immigration',
    icon: 'shield',
    badge: 'TZTC · refugee status',
    title: 'International Protection',
    subtitle: 'Asylum and subsidiary protection in Poland',
    lead: 'If returning to your country of origin endangers your life, freedom or health, you have the right to Poland\'s protection. Two forms exist: refugee status (1951 Geneva Convention) and subsidiary protection.',
    facts: [
      { label: 'Application', value: 'day of border crossing', note: 'Border Guard or UdSC' },
      { label: 'TZTC', value: '30 days', note: 'temporary ID document' },
      { label: 'Decision', value: '6 + 6 months', note: 'standard + extension' },
      { label: 'Cost', value: 'free', note: 'no state fees' }
    ],
    grounds: {
      title: 'Grounds for international protection',
      items: [
        { title: 'Refugee status (1951 Geneva Convention)', desc: 'Persecution on grounds of race, religion, nationality, political opinion or social group membership.' },
        { title: 'Subsidiary protection', desc: 'Real risk of serious harm: death penalty, torture, inhuman treatment, threat to life from armed conflict.' },
        { title: 'Tolerated stay', desc: 'When deportation is impossible but refugee / subsidiary grounds are insufficient. No path to PR.' },
        { title: 'Temporary protection', desc: 'Active for Ukrainian nationals since 2022. PESEL UKR, work, education, healthcare, benefits.' }
      ]
    },
    timeline: {
      title: 'Procedure timeline',
      steps: [
        { title: 'Application', duration: 'day 1', desc: 'Filed in person with Border Guard or voivodeship. We prep you for the life-story interview.' },
        { title: 'TZTC issued', duration: 'day 1-30', desc: 'Legalises stay throughout the procedure.' },
        { title: 'Accommodation', duration: 'procedure', desc: 'Reception centre or off-site with PLN 750/month aid.' },
        { title: 'Medical exam', duration: '14 days', desc: 'Mandatory - health certificate.' },
        { title: 'Interview', duration: '1-4 months', desc: 'With UdSC officer. Our immigration consultant present. Transcript kept.' },
        { title: 'Decision', duration: '3-6 months', desc: 'UdSC Head. Denial - appeal to Refugee Board.' }
      ]
    },
    documents: {
      title: 'Documents at filing',
      items: [
        'Identity documents (passport, ID, birth certificate)',
        'Evidence of persecution: photos, medical reports, witness statements, media',
        'Party/religious/social group membership documents',
        'Country-situation reports (Amnesty, HRW, UNHCR)',
        'Documents on family members already in the EU',
        'Medical records (PTSD, injuries)',
        'Any other evidence of risk on return'
      ]
    },
    pricing: {
      title: 'Our work',
      items: [
        { label: 'Consultation', value: 'Free', note: 'Grounds & strategy' },
        { label: 'Procedure representation', value: 'from 3,000 PLN', note: 'Prep + representation' },
        { label: 'Appeal', value: 'from 2,500 PLN', note: 'Refugee Board' },
        { label: 'Complaint to WSA', value: 'from 3,500 PLN', note: 'Court stage' }
      ],
      note: 'Procedure itself is free from state fees. Our fee is payable; state-funded legal aid exists for the indigent.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Act of 13 June 2003 on Protection of Foreigners',
        '1951 Geneva Convention on refugee status',
        'Directive 2011/95/EU (qualification)',
        'Directive 2013/32/EU (procedure)',
        'Dublin III Regulation 604/2013'
      ]
    },
    faq: [
      { q: 'What does TZTC give me?', a: 'TZTC (Tymczasowe Zaświadczenie Tożsamości Cudzoziemca - Temporary Foreigner ID Certificate) legalises your stay during the procedure and entitles you to accommodation and medical care. After 6 months without a decision - labour market access.' },
      { q: 'Can I leave Poland?', a: 'No. Leaving Poland during the procedure may end it and trigger return to country of origin (Dublin III).' },
      { q: 'What is a "safe country"?', a: 'If your country of origin or transit is "safe", the procedure can be fast-tracked (up to 30 days) and denials more likely. UdSC maintains the list.' },
      { q: 'Will I be allowed to work?', a: 'If no decision is issued within 6 months through no fault of yours - yes, you receive an ID certificate with the right to work.' },
      { q: 'What about children?', a: 'Children are part of the parent\'s family application. Status flows automatically. Unaccompanied minors get special protection.' },
      { q: 'How is it different from a humanitarian visa?', a: 'International protection is an in-EU procedure after entry. A humanitarian visa is issued by a consulate abroad - a separate tool.' }
    ],
    related: ['karta-pobytu', 'apelacje', 'karta-stalego-pobytu'],
    ctaTitle: 'Need protection in Poland - we start today',
    ctaSubtitle: 'Strategy and filing in 24 hours. Every day of irregular stay reduces your chances.'
  }
};

export default ochrona;
