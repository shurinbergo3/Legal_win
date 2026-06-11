import type { ServiceEntry } from './types';

const kartaKierowcy: ServiceEntry = {
  ru: {
    slug: 'karta-kierowcy',
    group: 'auto',
    icon: 'id-card',
    badge: 'Tachograf cyfrowy · PWPW · 5 lat',
    title: 'Карта водителя (тахограф)',
    subtitle: 'Karta kierowcy для цифрового тахографа - оформление через info-car',
    lead: 'Karta kierowcy (карта водителя) - это персональная смарт-карта для цифрового тахографа (tachograf cyfrowy), без которой профессиональный водитель не имеет права садиться за руль грузовика свыше 3,5 т или автобуса свыше 9 мест. Карта записывает время работы, отдыха и вождения - её требует Rozporządzenie (UE) nr 165/2014 на всей территории ЕС. Официальная стоимость - 172,20 PLN брутто (140 PLN нетто), выдаёт PWPW (Polska Wytwórnia Papierów Wartościowych - государственная типография), заявление подаётся через info-car (портал записи). Иностранцу без PESEL карту тоже оформляют - по данным паспорта.',
    facts: [
      { label: 'Срок действия', value: '5 лет', note: 'но не дольше срока prawa jazdy' },
      { label: 'Госпошлина PWPW', value: '172,20 PLN', note: '140 PLN нетто · оплата напрямую' },
      { label: 'Срок изготовления', value: '7-30 дней', note: 'online ~7 дней, бумажно ~26-30' },
      { label: 'Где оформляется', value: 'info-car + PWPW', note: 'портал записи + гостипография' }
    ],
    grounds: {
      title: 'Когда оформляют карту водителя',
      subtitle: 'Карта одна, но ситуаций несколько. От первой выдачи до обмена иностранной карты - разный пакет документов и сроки.',
      items: [
        {
          title: 'Кому нужна карта',
          desc: 'Всем, кто водит транспорт с цифровым тахографом: грузовики свыше 3,5 т (категории C, CE) и автобусы свыше 9 мест (D, DE). Без действующей karty kierowcy легально работать нельзя - ITD (дорожная инспекция) штрафует на месте.'
        },
        {
          title: 'Первая выдача (pierwsze wydanie)',
          desc: 'Для тех, кто получает карту впервые. Нужны польское prawo jazdy нужной категории, биометрическое фото, PESEL или данные паспорта (для иностранцев), подтверждение оплаты 172,20 PLN.'
        },
        {
          title: 'Продление (przedłużenie)',
          desc: 'Карта действует 5 лет (но не дольше прав). Подавать нужно примерно за 15 рабочих дней до окончания - на просроченной карте ездить нельзя, образуется простой.'
        },
        {
          title: 'Замена при утрате/повреждении (wymiana)',
          desc: 'Если карта потеряна, украдена или сломана - оформляем дубликат. При краже/утере дополнительно подаётся заявление; работать без карты в этот период нельзя.'
        },
        {
          title: 'Обмен иностранной карты (wymiana zagranicznej)',
          desc: 'Карта тахографа из другой страны ЕС/ЕЭЗ при переезде в Польшу обменивается на польскую. Карты из стран вне ЕС не признаются - оформляем польскую с нуля.'
        },
        {
          title: 'Иностранцы без PESEL и без польских прав',
          desc: 'Водителю без PESEL карту оформляют по данным паспорта. Для иностранцев без польского prawa jazdy существует маршрут через Kartę Kwalifikacji Kierowcy (KKK - карта квалификации водителя) - подскажем, что подойдёт именно вам.'
        }
      ]
    },
    timeline: {
      title: 'Как проходит оформление под ключ',
      subtitle: 'Берём всё: от записи на info-car до готовой карты в руках. От вас - права, паспорт и фото.',
      steps: [
        { title: 'Диагностика', duration: '30 мин', desc: 'На бесплатной консультации определяем тип заявления: первая выдача, продление, замена или обмен иностранной карты. Проверяем срок действия prawa jazdy - карта не выдаётся дольше его.' },
        { title: 'Сбор документов', duration: '1-3 дня', desc: 'Готовим биометрическое фото 35×45 мм, копию prawa jazdy, данные PESEL или паспорта, образец подписи. Для иностранцев - присяжные переводы при необходимости.' },
        { title: 'Оплата госпошлины', duration: '1 день', desc: 'Госпошлину PWPW 172,20 PLN (140 PLN нетто) вы оплачиваете напрямую - прикладываем подтверждение к заявлению.' },
        { title: 'Подача через info-car', duration: '1 день', desc: 'Заполняем wniosek на портале info-car (запись и подача онлайн) или подаём бумажно. Электронная подача быстрее.' },
        { title: 'Изготовление в PWPW', duration: '7-30 дней', desc: 'PWPW печатает карту: online-заявление - около 7 рабочих дней, бумажное - до 26-30 дней. Отслеживаем статус.' },
        { title: 'Получение карты', duration: '1 день', desc: 'Карта приходит по почте или выдаётся в пункте. Проверяем корректность данных, срока действия и категорий.' },
        { title: 'Напоминание о продлении', duration: 'за 15 дней', desc: 'Ставим напоминание за 15 рабочих дней до окончания, чтобы не было простоя. Частая услуга для логистических фирм с парком водителей.' }
      ]
    },
    documents: {
      title: 'Что от вас нужно',
      subtitle: 'Базовый пакет. Точный список адаптируем под тип заявления и вашу ситуацию.',
      items: [
        'Польское prawo jazdy нужной категории (обычно C/CE/D/DE)',
        'Биометрическое фото 35×45 мм (как на права)',
        'PESEL - либо для иностранцев без PESEL: номер паспорта и орган выдачи',
        'Образец подписи (wzór podpisu)',
        'Подтверждение оплаты 172,20 PLN на счёт PWPW',
        'При продлении - данные действующей/истекающей карты',
        'При утрате/краже - заявление об утрате (oświadczenie o utracie)',
        'При обмене - иностранная карта тахографа + присяжный перевод'
      ]
    },
    pricing: {
      title: 'Сколько стоит наша работа',
      subtitle: 'Госпошлину PWPW (172,20 PLN) оплачиваете напрямую; наш гонорар - после оценки.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут' },
        { label: 'Оформление под ключ', value: 'Индивидуально', note: 'После диагностики' }
      ]
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Rozporządzenie Parlamentu Europejskiego i Rady (UE) nr 165/2014 (tachografy)',
        'Ustawa z dnia 5 lipca 2018 r. o tachografach',
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami'
      ]
    },
    faq: [
      {
        q: 'Что такое карта водителя и кому она нужна?',
        a: 'Karta kierowcy (карта водителя) - персональная смарт-карта для цифрового тахографа (tachograf cyfrowy), которая записывает время вождения, работы и отдыха. Нужна всем, кто водит транспорт с тахографом: грузовики свыше 3,5 т (C, CE) и автобусы свыше 9 мест (D, DE) - по Rozporządzeniu (UE) nr 165/2014. Без неё легально работать нельзя.'
      },
      {
        q: 'Сколько стоит карта и кто её выдаёт?',
        a: 'Официальная госпошлина - 172,20 PLN брутто (140 PLN нетто). Выдаёт PWPW (Polska Wytwórnia Papierów Wartościowych - государственная типография). Заявление подаётся через портал info-car (запись и подача онлайн) или бумажно. Эту пошлину вы платите напрямую; наш гонорар за сопровождение - после оценки вашей ситуации.'
      },
      {
        q: 'Можно ли оформить карту иностранцу без PESEL?',
        a: 'Да. Водителю без PESEL карту оформляют по данным паспорта - номер и орган выдачи вместо PESEL. А для иностранцев без польского prawa jazdy существует более новый маршрут через Kartę Kwalifikacji Kierowcy (KKK - карта квалификации водителя). Берём на себя заявление на info-car и присяжные переводы.'
      },
      {
        q: 'Какие документы нужны?',
        a: 'Действующее prawo jazdy нужной категории (обычно C/CE/D/DE), биометрическое фото 35×45 мм (как на права), PESEL или - для иностранцев - данные паспорта, образец подписи и подтверждение оплаты 172,20 PLN. При продлении или замене список немного отличается - адаптируем под ваш случай.'
      },
      {
        q: 'Сколько ждать карту?',
        a: 'При подаче online через info-car - около 7 рабочих дней. При бумажной подаче - до 26-30 дней. Поэтому продлевать лучше заранее: рекомендуем подавать примерно за 15 рабочих дней до окончания срока действующей карты.'
      },
      {
        q: 'На сколько выдаётся карта и как продлить?',
        a: 'Карта действует 5 лет, но не дольше срока действия prawa jazdy. Продление - это новое заявление на info-car с оплатой 172,20 PLN. Важно: на просроченной карте ездить нельзя, поэтому подавайте за 15 рабочих дней до окончания, чтобы не было простоя.'
      },
      {
        q: 'Что будет за работу без карты водителя?',
        a: 'ITD (Inspekcja Transportu Drogowego - дорожная инспекция) проверяет на дорогах и в фирмах. За вождение транспорта с тахографом без действующей karty kierowcy - штраф водителю и перевозчику, остановка рейса. Кроме того, без карты тахограф не записывает данные корректно, что само по себе нарушение.'
      }
    ],
    related: ['kod-95', 'wymiana-prawa-jazdy', 'praca-kierowca-ciezarowka'],
    ctaTitle: 'Оформим карту водителя без очередей и ошибок',
    ctaSubtitle: 'Бесплатная диагностика за 30 минут: определим тип заявления, подготовим документы и подадим через info-car. Иностранцам без PESEL - тоже оформляем.'
  },
  pl: {
    slug: 'karta-kierowcy',
    group: 'auto',
    icon: 'id-card',
    badge: 'Tachograf cyfrowy · PWPW · 5 lat',
    title: 'Karta kierowcy (tachograf)',
    subtitle: 'Karta kierowcy do tachografu cyfrowego - wniosek przez info-car',
    lead: 'Karta kierowcy to osobista karta chipowa do tachografu cyfrowego, bez której kierowca zawodowy nie może prowadzić pojazdu powyżej 3,5 t ani autobusu powyżej 9 miejsc. Karta zapisuje czas pracy, odpoczynku i jazdy - wymaga jej Rozporządzenie (UE) nr 165/2014 na terenie całej UE. Opłata urzędowa to 172,20 PLN brutto (140 PLN netto), kartę wydaje PWPW (Polska Wytwórnia Papierów Wartościowych), a wniosek składa się przez info-car. Cudzoziemcowi bez numeru PESEL kartę także się wydaje - na podstawie danych paszportu.',
    facts: [
      { label: 'Ważność', value: '5 lat', note: 'ale nie dłużej niż prawo jazdy' },
      { label: 'Opłata PWPW', value: '172,20 PLN', note: '140 PLN netto · płacone bezpośrednio' },
      { label: 'Czas wydania', value: '7-30 dni', note: 'online ~7 dni, papierowo ~26-30' },
      { label: 'Gdzie', value: 'info-car + PWPW', note: 'portal wniosków + wytwórnia państwowa' }
    ],
    grounds: {
      title: 'Kiedy wydaje się kartę kierowcy',
      subtitle: 'Karta jest jedna, ale sytuacji kilka. Od pierwszego wydania po wymianę zagranicznej karty - inny zestaw dokumentów i terminy.',
      items: [
        {
          title: 'Kto potrzebuje karty',
          desc: 'Każdy kierowca pojazdu z tachografem cyfrowym: pojazdy powyżej 3,5 t (kat. C, CE) i autobusy powyżej 9 miejsc (D, DE). Bez ważnej karty kierowcy nie można legalnie pracować - ITD karze na miejscu.'
        },
        {
          title: 'Pierwsze wydanie',
          desc: 'Dla osób ubiegających się po raz pierwszy. Potrzebne: polskie prawo jazdy odpowiedniej kategorii, zdjęcie biometryczne, PESEL lub dane paszportu (dla cudzoziemców), potwierdzenie opłaty 172,20 PLN.'
        },
        {
          title: 'Przedłużenie',
          desc: 'Karta jest ważna 5 lat (ale nie dłużej niż prawo jazdy). Wniosek warto złożyć około 15 dni roboczych przed końcem ważności - na karcie z przeterminowaną datą jeździć nie wolno, powstaje przestój.'
        },
        {
          title: 'Wymiana przy utracie/uszkodzeniu',
          desc: 'Gdy karta zostanie zgubiona, skradziona lub uszkodzona - wydajemy duplikat. Przy kradzieży/utracie dodatkowo składa się oświadczenie; w tym czasie nie wolno pracować bez karty.'
        },
        {
          title: 'Wymiana zagranicznej karty',
          desc: 'Karta tachografu z innego kraju UE/EOG przy przeprowadzce do Polski wymieniana jest na polską. Karty spoza UE nie są uznawane - wyrabiamy polską od zera.'
        },
        {
          title: 'Cudzoziemcy bez PESEL i bez polskiego prawa jazdy',
          desc: 'Kierowcy bez numeru PESEL kartę wydaje się na podstawie danych paszportu. Dla cudzoziemców bez polskiego prawa jazdy istnieje ścieżka przez Kartę Kwalifikacji Kierowcy (KKK) - doradzimy, co pasuje w Twoim przypadku.'
        }
      ]
    },
    timeline: {
      title: 'Jak prowadzimy sprawę pod klucz',
      subtitle: 'Bierzemy wszystko: od zapisu na info-car po gotową kartę w ręku. Od Ciebie - prawo jazdy, paszport i zdjęcie.',
      steps: [
        { title: 'Diagnoza', duration: '30 min', desc: 'Na bezpłatnej konsultacji ustalamy typ wniosku: pierwsze wydanie, przedłużenie, wymiana czy wymiana karty zagranicznej. Sprawdzamy ważność prawa jazdy - karta nie jest wydawana dłużej niż ono.' },
        { title: 'Zebranie dokumentów', duration: '1-3 dni', desc: 'Przygotowujemy zdjęcie biometryczne 35×45 mm, kopię prawa jazdy, dane PESEL lub paszportu, wzór podpisu. Dla cudzoziemców - tłumaczenia przysięgłe w razie potrzeby.' },
        { title: 'Opłata urzędowa', duration: '1 dzień', desc: 'Opłatę PWPW 172,20 PLN (140 PLN netto) wpłacasz bezpośrednio - dołączamy potwierdzenie do wniosku.' },
        { title: 'Wniosek przez info-car', duration: '1 dzień', desc: 'Wypełniamy wniosek na portalu info-car (zapis i złożenie online) lub składamy papierowo. Forma elektroniczna jest szybsza.' },
        { title: 'Produkcja w PWPW', duration: '7-30 dni', desc: 'PWPW drukuje kartę: wniosek online - około 7 dni roboczych, papierowy - do 26-30 dni. Śledzimy status.' },
        { title: 'Odbiór karty', duration: '1 dzień', desc: 'Karta przychodzi pocztą lub jest wydawana w punkcie. Sprawdzamy poprawność danych, daty ważności i kategorii.' },
        { title: 'Przypomnienie o przedłużeniu', duration: '15 dni wcześniej', desc: 'Ustawiamy przypomnienie 15 dni roboczych przed końcem ważności, by uniknąć przestoju. Częsta usługa dla firm logistycznych z flotą kierowców.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Zestaw bazowy. Dokładną listę dostosowujemy do typu wniosku i sytuacji.',
      items: [
        'Polskie prawo jazdy odpowiedniej kategorii (zwykle C/CE/D/DE)',
        'Zdjęcie biometryczne 35×45 mm (jak do prawa jazdy)',
        'PESEL - lub dla cudzoziemców bez PESEL: numer paszportu i organ wydający',
        'Wzór podpisu',
        'Potwierdzenie opłaty 172,20 PLN na konto PWPW',
        'Przy przedłużeniu - dane aktualnej/wygasającej karty',
        'Przy utracie/kradzieży - oświadczenie o utracie',
        'Przy wymianie - zagraniczna karta tachografu + tłumaczenie przysięgłe'
      ]
    },
    pricing: {
      title: 'Wycena naszej pracy',
      subtitle: 'Opłatę PWPW (172,20 PLN) wpłacasz bezpośrednio; nasze honorarium - po ocenie.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 minut' },
        { label: 'Obsługa pod klucz', value: 'Indywidualnie', note: 'Po diagnozie' }
      ]
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Rozporządzenie Parlamentu Europejskiego i Rady (UE) nr 165/2014 (tachografy)',
        'Ustawa z dnia 5 lipca 2018 r. o tachografach',
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami'
      ]
    },
    faq: [
      {
        q: 'Czym jest karta kierowcy i kto jej potrzebuje?',
        a: 'Karta kierowcy to osobista karta chipowa do tachografu cyfrowego, która zapisuje czas jazdy, pracy i odpoczynku. Potrzebuje jej każdy kierowca pojazdu z tachografem: pojazdy powyżej 3,5 t (C, CE) i autobusy powyżej 9 miejsc (D, DE) - zgodnie z Rozporządzeniem (UE) nr 165/2014. Bez niej nie można legalnie pracować.'
      },
      {
        q: 'Ile kosztuje karta i kto ją wydaje?',
        a: 'Opłata urzędowa to 172,20 PLN brutto (140 PLN netto). Kartę wydaje PWPW (Polska Wytwórnia Papierów Wartościowych). Wniosek składa się przez portal info-car (zapis i złożenie online) lub papierowo. Tę opłatę wpłacasz bezpośrednio; nasze honorarium za obsługę - po ocenie sytuacji.'
      },
      {
        q: 'Czy można wyrobić kartę dla cudzoziemca bez PESEL?',
        a: 'Tak. Kierowcy bez numeru PESEL kartę wydaje się na podstawie danych paszportu - numer i organ wydający zamiast PESEL. A dla cudzoziemców bez polskiego prawa jazdy istnieje nowsza ścieżka przez Kartę Kwalifikacji Kierowcy (KKK). Bierzemy na siebie wniosek na info-car i tłumaczenia przysięgłe.'
      },
      {
        q: 'Jakie dokumenty są potrzebne?',
        a: 'Ważne prawo jazdy odpowiedniej kategorii (zwykle C/CE/D/DE), zdjęcie biometryczne 35×45 mm (jak do prawa jazdy), PESEL lub - dla cudzoziemców - dane paszportu, wzór podpisu i potwierdzenie opłaty 172,20 PLN. Przy przedłużeniu lub wymianie lista nieco się różni - dostosujemy ją do Twojego przypadku.'
      },
      {
        q: 'Ile czeka się na kartę?',
        a: 'Przy złożeniu online przez info-car - około 7 dni roboczych. Przy wniosku papierowym - do 26-30 dni. Dlatego lepiej przedłużać z wyprzedzeniem: zalecamy składanie wniosku około 15 dni roboczych przed końcem ważności aktualnej karty.'
      },
      {
        q: 'Na jak długo wydaje się kartę i jak ją przedłużyć?',
        a: 'Karta jest ważna 5 lat, ale nie dłużej niż prawo jazdy. Przedłużenie to nowy wniosek na info-car z opłatą 172,20 PLN. Ważne: na przeterminowanej karcie jeździć nie wolno, dlatego składaj wniosek 15 dni roboczych przed końcem, by uniknąć przestoju.'
      },
      {
        q: 'Co grozi za pracę bez karty kierowcy?',
        a: 'ITD (Inspekcja Transportu Drogowego) kontroluje na drogach i w firmach. Za prowadzenie pojazdu z tachografem bez ważnej karty kierowcy - kara dla kierowcy i przewoźnika, zatrzymanie kursu. Dodatkowo bez karty tachograf nie zapisuje danych poprawnie, co samo w sobie jest naruszeniem.'
      }
    ],
    related: ['kod-95', 'wymiana-prawa-jazdy', 'praca-kierowca-ciezarowka'],
    ctaTitle: 'Wyrobimy kartę kierowcy bez kolejek i błędów',
    ctaSubtitle: 'Bezpłatna diagnoza w 30 minut: ustalimy typ wniosku, przygotujemy dokumenty i złożymy przez info-car. Cudzoziemcom bez PESEL - również wyrabiamy.'
  },
  en: {
    slug: 'karta-kierowcy',
    group: 'auto',
    icon: 'id-card',
    badge: 'Digital tachograph · PWPW · 5 years',
    title: 'Driver card (tachograph)',
    subtitle: 'The Polish karta kierowcy for the digital tachograph - filed via info-car',
    lead: "The karta kierowcy (driver card) is the personal smart card for the digital tachograph (tachograf cyfrowy). Without it, a professional driver cannot legally operate a goods vehicle over 3.5 t or a passenger vehicle with more than 9 seats. The card logs your driving, working and rest time and is required EU-wide by Regulation (EU) No 165/2014. The official fee is 172.20 PLN gross (140 PLN net), the card is issued by PWPW (Polska Wytwórnia Papierów Wartościowych, the state security printer), and the application goes through info-car (the booking portal). A driver without a PESEL number can still get one - on the basis of passport details.",
    facts: [
      { label: 'Validity', value: '5 years', note: 'but never longer than your licence' },
      { label: 'PWPW fee', value: '172.20 PLN', note: '140 PLN net, paid directly' },
      { label: 'Issue time', value: '7-30 days', note: 'online ~7 days, paper ~26-30' },
      { label: 'Where it happens', value: 'info-car + PWPW', note: 'application portal + state printer' }
    ],
    grounds: {
      title: 'When a driver card gets issued',
      subtitle: "It's one card, but several scenarios. From a first issue to swapping a foreign card, each has a different document pack and timeline.",
      items: [
        {
          title: 'Who needs the card',
          desc: 'Anyone driving a vehicle fitted with a digital tachograph: goods vehicles over 3.5 t (cat. C, CE) and passenger vehicles with more than 9 seats (D, DE). Without a valid karta kierowcy you cannot work legally - ITD (the road transport inspectorate) fines on the spot.'
        },
        {
          title: 'First issue (pierwsze wydanie)',
          desc: 'For drivers applying for the first time. You need a Polish prawo jazdy of the right category, a biometric photo, a PESEL or passport details (for foreigners), and proof of the 172.20 PLN payment.'
        },
        {
          title: 'Renewal (przedłużenie)',
          desc: "The card is valid 5 years (but no longer than your licence). Apply roughly 15 working days before it expires - you cannot drive on an expired card, and a gap means lost work."
        },
        {
          title: 'Replacement for loss/damage (wymiana)',
          desc: 'If the card is lost, stolen or damaged, we file for a duplicate. For theft or loss an additional declaration is required; you may not work without the card in the meantime.'
        },
        {
          title: 'Exchange of a foreign card (wymiana zagranicznej)',
          desc: 'A tachograph card from another EU/EEA country is exchanged for a Polish one when you relocate. Cards from outside the EU are not recognised - we issue a Polish one from scratch.'
        },
        {
          title: 'Foreigners with no PESEL and no Polish licence',
          desc: 'A driver without a PESEL gets the card on passport details instead. For foreigners without a Polish prawo jazdy there is a route via the Karta Kwalifikacji Kierowcy (KKK, the Driver Qualification Card) - we will tell you which path fits.'
        }
      ]
    },
    timeline: {
      title: 'How the whole thing runs, turnkey',
      subtitle: 'We take everything: from booking on info-car to the finished card in your hand. You bring a licence, passport and photo.',
      steps: [
        { title: 'Free diagnosis', duration: '30 min', desc: "We work out the application type: first issue, renewal, replacement or foreign-card exchange. We check your prawo jazdy expiry - the card is never issued for longer than the licence." },
        { title: 'Document gathering', duration: '1-3 days', desc: 'We prepare the biometric photo 35×45 mm, a copy of the licence, PESEL or passport details, and a signature sample. For foreigners, sworn translations where needed.' },
        { title: 'Pay the official fee', duration: '1 day', desc: 'You pay the PWPW fee of 172.20 PLN (140 PLN net) directly - we attach the proof to the application.' },
        { title: 'File via info-car', duration: '1 day', desc: 'We complete the wniosek (application) on info-car (online booking and submission) or file on paper. The electronic route is faster.' },
        { title: 'Production at PWPW', duration: '7-30 days', desc: 'PWPW prints the card: an online application takes about 7 working days, a paper one up to 26-30. We track the status.' },
        { title: 'Collect the card', duration: '1 day', desc: 'The card arrives by post or is handed over at a collection point. We verify the data, validity date and categories.' },
        { title: 'Renewal reminder', duration: '15 days ahead', desc: 'We set a reminder 15 working days before expiry to avoid downtime. A popular service for logistics firms running a driver fleet.' }
      ]
    },
    documents: {
      title: 'What you bring to the table',
      subtitle: 'Starting list. We tailor the exact set to your application type and situation.',
      items: [
        'Polish prawo jazdy of the right category (usually C/CE/D/DE)',
        'Biometric photo 35×45 mm (same as for the licence)',
        'PESEL - or, for foreigners without one, passport number and issuing authority',
        'Signature sample (wzór podpisu)',
        'Proof of the 172.20 PLN payment to PWPW',
        "For a renewal - details of the current/expiring card",
        'For loss/theft - a declaration of loss (oświadczenie o utracie)',
        'For an exchange - the foreign tachograph card plus a sworn translation'
      ]
    },
    pricing: {
      title: 'Our fees, on the table',
      subtitle: 'You pay the PWPW fee (172.20 PLN) directly; our retainer is quoted after the assessment.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 minutes' },
        { label: 'Turnkey handling', value: 'Quoted individually', note: 'After the diagnosis' }
      ]
    },
    legalBase: {
      title: 'The law behind it',
      items: [
        'Regulation (EU) No 165/2014 of the European Parliament and of the Council (tachographs)',
        'Tachographs Act of 5 July 2018 (Ustawa o tachografach)',
        'Road Transport Act of 6 September 2001 (Ustawa o transporcie drogowym)',
        'Drivers Act of 5 January 2011 (Ustawa o kierujących pojazdami)'
      ]
    },
    faq: [
      {
        q: 'What is the driver card and who needs it?',
        a: 'The karta kierowcy (driver card) is the personal smart card for the digital tachograph (tachograf cyfrowy) that logs your driving, working and rest time. It is needed by every driver of a vehicle fitted with a tachograph: goods vehicles over 3.5 t (C, CE) and passenger vehicles with more than 9 seats (D, DE), under Regulation (EU) No 165/2014. You cannot work legally without it.'
      },
      {
        q: 'How much does the card cost and who issues it?',
        a: 'The official fee is 172.20 PLN gross (140 PLN net). The card is issued by PWPW (Polska Wytwórnia Papierów Wartościowych, the state security printer). The application is filed through the info-car portal (online booking and submission) or on paper. You pay this fee directly; our retainer for handling the case is quoted after we assess your situation.'
      },
      {
        q: 'Can a foreigner without a PESEL get the card?',
        a: 'Yes. A driver without a PESEL gets the card on passport details - the number and issuing authority in place of a PESEL. And for foreigners without a Polish prawo jazdy there is a newer route via the Karta Kwalifikacji Kierowcy (KKK, the Driver Qualification Card). We handle the info-car application and any sworn translations.'
      },
      {
        q: 'What documents are required?',
        a: 'A valid prawo jazdy of the right category (usually C/CE/D/DE), a biometric photo 35×45 mm (same as the licence), a PESEL or - for foreigners - passport details, a signature sample, and proof of the 172.20 PLN payment. For a renewal or replacement the list differs slightly - we adapt it to your case.'
      },
      {
        q: 'How long does the card take?',
        a: 'Filed online via info-car, about 7 working days. On paper, up to 26-30 days. That is why renewing early matters: we recommend applying roughly 15 working days before your current card expires.'
      },
      {
        q: 'How long is the card valid and how do I renew it?',
        a: "The card is valid for 5 years, but never beyond your prawo jazdy's validity. Renewal is a fresh application on info-car with the 172.20 PLN fee. Important: you cannot drive on an expired card, so file 15 working days before it runs out to avoid downtime."
      },
      {
        q: 'What happens if I drive without a driver card?',
        a: 'ITD (Inspekcja Transportu Drogowego, the road transport inspectorate) runs checks on the road and at depots. Driving a tachograph-fitted vehicle without a valid karta kierowcy means a fine for both driver and operator and a stopped run. On top of that, without the card the tachograph cannot record data correctly, which is itself a breach.'
      }
    ],
    related: ['kod-95', 'wymiana-prawa-jazdy', 'praca-kierowca-ciezarowka'],
    ctaTitle: 'We get the driver card sorted, no queues, no mistakes',
    ctaSubtitle: 'Free 30-minute diagnosis: we pin down the application type, prepare the documents and file via info-car. Foreigners without a PESEL - we handle you too.'
  },
  tr: {
    slug: 'karta-kierowcy',
    group: 'auto',
    icon: 'id-card',
    badge: 'Dijital takograf · PWPW · 5 yıl',
    title: 'Sürücü kartı (takograf)',
    subtitle: 'Dijital takograf için karta kierowcy - info-car üzerinden başvuru',
    lead: 'Karta kierowcy (sürücü kartı), dijital takograf (tachograf cyfrowy - dijital takograf) için kişisel çipli karttır; bu kart olmadan profesyonel sürücü 3,5 tonu aşan bir aracı veya 9 koltuktan fazla otobüsü yasal olarak kullanamaz. Kart; sürüş, çalışma ve dinlenme süresini kaydeder ve tüm AB genelinde 165/2014 sayılı (AB) Tüzük tarafından zorunlu kılınır. Resmi ücret 172,20 PLN brüt (140 PLN net), kartı PWPW (Polska Wytwórnia Papierów Wartościowych - devlet matbaası) verir, başvuru ise info-car (başvuru portalı) üzerinden yapılır. PESEL numarası olmayan yabancıya da kart pasaport bilgilerine göre verilir.',
    facts: [
      { label: 'Geçerlilik', value: '5 yıl', note: 'ancak ehliyetten uzun olamaz' },
      { label: 'PWPW ücreti', value: '172,20 PLN', note: '140 PLN net · doğrudan ödenir' },
      { label: 'Hazırlanma süresi', value: '7-30 gün', note: 'online ~7 gün, kağıt ~26-30' },
      { label: 'Yer', value: 'info-car + PWPW', note: 'başvuru portalı + devlet matbaası' }
    ],
    grounds: {
      title: 'Sürücü kartı ne zaman verilir',
      subtitle: 'Kart tek, ancak durum birkaç çeşit. İlk verilişten yabancı kartın değişimine kadar her birinin belge paketi ve süreleri farklıdır.',
      items: [
        {
          title: 'Karta kimin ihtiyacı var',
          desc: 'Dijital takograflı araç kullanan herkes: 3,5 tonu aşan araçlar (kat. C, CE) ve 9 koltuktan fazla otobüsler (D, DE). Geçerli karta kierowcy olmadan yasal çalışmak mümkün değil - ITD (karayolu denetimi) yerinde ceza keser.'
        },
        {
          title: 'İlk veriliş (pierwsze wydanie)',
          desc: 'İlk kez başvuranlar için. Gerekli: uygun kategoride Polonya prawo jazdy, biyometrik fotoğraf, PESEL veya pasaport bilgileri (yabancılar için), 172,20 PLN ödeme onayı.'
        },
        {
          title: 'Uzatma (przedłużenie)',
          desc: 'Kart 5 yıl geçerlidir (ancak ehliyetten uzun olamaz). Başvuru, bitişten yaklaşık 15 iş günü önce yapılmalı - süresi dolmuş kartla sürmek yasaktır, iş kaybı doğar.'
        },
        {
          title: 'Kayıp/hasar durumunda değişim (wymiana)',
          desc: 'Kart kaybolur, çalınır veya bozulursa - kopya çıkarırız. Hırsızlık/kayıpta ek olarak bildirim verilir; bu süreçte kartsız çalışmak yasaktır.'
        },
        {
          title: 'Yabancı kartın değişimi (wymiana zagranicznej)',
          desc: 'Başka bir AB/EFTA ülkesinin takograf kartı, Polonya\'ya taşınınca Polonya kartıyla değiştirilir. AB dışı kartlar tanınmaz - Polonya kartını sıfırdan çıkarırız.'
        },
        {
          title: 'PESEL\'siz ve Polonya ehliyetsiz yabancılar',
          desc: 'PESEL numarası olmayan sürücüye kart pasaport bilgilerine göre verilir. Polonya prawo jazdy\'si olmayan yabancılar için Karta Kwalifikacji Kierowcy (KKK - sürücü yeterlilik kartı) üzerinden bir yol vardır - size uyanı söyleriz.'
        }
      ]
    },
    timeline: {
      title: 'Anahtar teslim süreç',
      subtitle: 'Her şeyi üstleniriz: info-car kaydından elinizdeki hazır karta kadar. Sizden - ehliyet, pasaport ve fotoğraf.',
      steps: [
        { title: 'Tanı görüşmesi', duration: '30 dk', desc: 'Ücretsiz danışmanlıkta başvuru türünü belirleriz: ilk veriliş, uzatma, değişim veya yabancı kart değişimi. Prawo jazdy geçerlilik tarihini kontrol ederiz - kart ondan uzun süreli verilmez.' },
        { title: 'Belge toplama', duration: '1-3 gün', desc: 'Biyometrik 35×45 mm fotoğraf, ehliyet kopyası, PESEL veya pasaport bilgileri ve imza örneği hazırlarız. Yabancılar için gerekirse yeminli tercüme.' },
        { title: 'Resmi ücret ödemesi', duration: '1 gün', desc: 'PWPW ücreti 172,20 PLN\'yi (140 PLN net) doğrudan siz ödersiniz - onayı başvuruya ekleriz.' },
        { title: 'info-car üzerinden başvuru', duration: '1 gün', desc: 'info-car portalında wniosek (başvuru) doldururuz (online kayıt ve gönderim) veya kağıt olarak veririz. Elektronik yol daha hızlıdır.' },
        { title: 'PWPW\'de üretim', duration: '7-30 gün', desc: 'PWPW kartı basar: online başvuru yaklaşık 7 iş günü, kağıt başvuru 26-30 güne kadar. Durumu takip ederiz.' },
        { title: 'Kartın teslimi', duration: '1 gün', desc: 'Kart postayla gelir veya teslim noktasında verilir. Verilerin, geçerlilik tarihinin ve kategorilerin doğruluğunu kontrol ederiz.' },
        { title: 'Uzatma hatırlatması', duration: '15 gün önce', desc: 'İş kaybını önlemek için bitişten 15 iş günü önce hatırlatma kurarız. Sürücü filosu olan lojistik firmalar için sıkça talep edilen hizmet.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Asgari paket. Net listeyi başvuru türüne ve durumunuza göre uyarlarız.',
      items: [
        'Uygun kategoride Polonya prawo jazdy (genelde C/CE/D/DE)',
        'Biyometrik 35×45 mm fotoğraf (ehliyettekiyle aynı)',
        'PESEL - veya PESEL\'siz yabancılar için: pasaport numarası ve veren makam',
        'İmza örneği (wzór podpisu)',
        'PWPW hesabına 172,20 PLN ödeme onayı',
        'Uzatmada - mevcut/süresi dolan kartın bilgileri',
        'Kayıp/hırsızlıkta - kayıp bildirimi (oświadczenie o utracie)',
        'Değişimde - yabancı takograf kartı + yeminli tercüme'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'PWPW ücretini (172,20 PLN) doğrudan ödersiniz; bizim ücretimiz - değerlendirmeden sonra.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '30 dakika' },
        { label: 'Anahtar teslim işlem', value: 'Bireysel', note: 'Tanıdan sonra' }
      ]
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Avrupa Parlamentosu ve Konseyi 165/2014 sayılı (AB) Tüzük (takograflar)',
        'Ustawa z dnia 5 lipca 2018 r. o tachografach (Takograflar Kanunu)',
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym (Karayolu Taşımacılığı Kanunu)',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami (Sürücüler Kanunu)'
      ]
    },
    faq: [
      {
        q: 'Sürücü kartı nedir ve kimin ihtiyacı var?',
        a: 'Karta kierowcy (sürücü kartı), sürüş, çalışma ve dinlenme süresini kaydeden, dijital takograf (tachograf cyfrowy) için kişisel çipli karttır. Takograflı araç kullanan her sürücüye gerekir: 3,5 tonu aşan araçlar (C, CE) ve 9 koltuktan fazla otobüsler (D, DE) - 165/2014 sayılı (AB) Tüzük uyarınca. Onsuz yasal çalışmak mümkün değildir.'
      },
      {
        q: 'Kart ne kadar ve kim verir?',
        a: 'Resmi ücret 172,20 PLN brüt (140 PLN net). Kartı PWPW (Polska Wytwórnia Papierów Wartościowych - devlet matbaası) verir. Başvuru info-car portalı (online kayıt ve gönderim) veya kağıt yoluyla yapılır. Bu ücreti doğrudan siz ödersiniz; işlem için ücretimiz - durumunuzu değerlendirdikten sonra.'
      },
      {
        q: 'PESEL\'siz bir yabancı kart çıkarabilir mi?',
        a: 'Evet. PESEL numarası olmayan sürücüye kart pasaport bilgilerine göre verilir - PESEL yerine numara ve veren makam. Polonya prawo jazdy\'si olmayan yabancılar içinse Karta Kwalifikacji Kierowcy (KKK - sürücü yeterlilik kartı) üzerinden daha yeni bir yol vardır. info-car başvurusunu ve yeminli tercümeleri biz üstleniriz.'
      },
      {
        q: 'Hangi belgeler gerekir?',
        a: 'Uygun kategoride geçerli prawo jazdy (genelde C/CE/D/DE), biyometrik 35×45 mm fotoğraf (ehliyettekiyle aynı), PESEL veya - yabancılar için - pasaport bilgileri, imza örneği ve 172,20 PLN ödeme onayı. Uzatma veya değişimde liste biraz farklı olur - durumunuza uyarlarız.'
      },
      {
        q: 'Kart ne kadar sürede gelir?',
        a: 'info-car üzerinden online başvuruda yaklaşık 7 iş günü. Kağıt başvuruda 26-30 güne kadar. Bu nedenle erken uzatma önemlidir: mevcut kartın bitişinden yaklaşık 15 iş günü önce başvuru yapmanızı öneririz.'
      },
      {
        q: 'Kart ne kadar süreyle verilir ve nasıl uzatılır?',
        a: 'Kart 5 yıl geçerlidir, ancak prawo jazdy\'nin geçerliliğinden uzun olamaz. Uzatma, info-car\'da 172,20 PLN ücretle yapılan yeni bir başvurudur. Önemli: süresi dolmuş kartla sürmek yasaktır, bu yüzden iş kaybını önlemek için bitişten 15 iş günü önce başvurun.'
      },
      {
        q: 'Sürücü kartı olmadan çalışmanın cezası nedir?',
        a: 'ITD (Inspekcja Transportu Drogowego - Karayolu Taşımacılığı Müfettişliği) yolda ve firmalarda denetim yapar. Takograflı aracı geçerli karta kierowcy olmadan kullanmak - sürücüye ve taşıyıcıya ceza ve seferin durdurulması demektir. Ayrıca kart olmadan takograf verileri doğru kaydedemez ki bu da başlı başına bir ihlaldir.'
      }
    ],
    related: ['kod-95', 'wymiana-prawa-jazdy', 'praca-kierowca-ciezarowka'],
    ctaTitle: 'Sürücü kartını kuyruk ve hata olmadan çıkaralım',
    ctaSubtitle: 'Ücretsiz 30 dakikalık tanı görüşmesi: başvuru türünü belirler, belgeleri hazırlar ve info-car üzerinden veririz. PESEL\'siz yabancılara da çıkarıyoruz.'
  },
  uk: {
    slug: 'karta-kierowcy',
    group: 'auto',
    icon: 'id-card',
    badge: 'Tachograf cyfrowy · PWPW · 5 lat',
    title: 'Картка водія (тахограф)',
    subtitle: 'Karta kierowcy для цифрового тахографа - оформлення через info-car',
    lead: 'Karta kierowcy (картка водія) — це персональна смарт-картка для цифрового тахографа (tachograf cyfrowy), без якої професійний водій не має права сідати за кермо вантажівки понад 3,5 т або автобуса понад 9 місць. Картка записує час роботи, відпочинку та водіння — її вимагає Rozporządzenie (UE) nr 165/2014 на всій території ЄС. Офіційна вартість — 172,20 PLN брутто (140 PLN нетто), видає PWPW (Polska Wytwórnia Papierów Wartościowych — державна типографія), а заява подається через info-car (портал запису). Іноземцю без PESEL картку також оформлюють — за даними паспорта.',
    facts: [
      { label: 'Термін дії', value: '5 років', note: 'але не довше за термін prawa jazdy' },
      { label: 'Держмито PWPW', value: '172,20 PLN', note: '140 PLN нетто · оплата напряму' },
      { label: 'Термін виготовлення', value: '7-30 днів', note: 'online ~7 днів, паперово ~26-30' },
      { label: 'Де оформлюється', value: 'info-car + PWPW', note: 'портал запису + держтипографія' }
    ],
    grounds: {
      title: 'Коли оформлюють картку водія',
      subtitle: 'Картка одна, але ситуацій кілька. Від першої видачі до обміну іноземної картки — різний пакет документів і терміни.',
      items: [
        {
          title: 'Кому потрібна картка',
          desc: 'Усім, хто водить транспорт із цифровим тахографом: вантажівки понад 3,5 т (категорії C, CE) і автобуси понад 9 місць (D, DE). Без чинної karty kierowcy легально працювати не можна — ITD (дорожня інспекція) штрафує на місці.'
        },
        {
          title: 'Перша видача (pierwsze wydanie)',
          desc: 'Для тих, хто отримує картку вперше. Потрібні: польське prawo jazdy потрібної категорії, біометричне фото, PESEL або дані паспорта (для іноземців), підтвердження оплати 172,20 PLN.'
        },
        {
          title: 'Продовження (przedłużenie)',
          desc: 'Картка діє 5 років (але не довше за права). Подавати потрібно приблизно за 15 робочих днів до закінчення — на простроченій картці їздити не можна, утворюється простій.'
        },
        {
          title: 'Заміна при втраті/пошкодженні (wymiana)',
          desc: 'Якщо картку загублено, вкрадено чи зламано — оформлюємо дублікат. При крадіжці/втраті додатково подається заява; працювати без картки в цей період не можна.'
        },
        {
          title: 'Обмін іноземної картки (wymiana zagranicznej)',
          desc: 'Картка тахографа з іншої країни ЄС/ЄЕЗ при переїзді до Польщі обмінюється на польську. Картки з країн поза ЄС не визнаються — оформлюємо польську з нуля.'
        },
        {
          title: 'Іноземці без PESEL і без польських прав',
          desc: 'Водієві без PESEL картку оформлюють за даними паспорта. Для іноземців без польського prawa jazdy існує маршрут через Kartę Kwalifikacji Kierowcy (KKK — картка кваліфікації водія) — підкажемо, що підійде саме вам.'
        }
      ]
    },
    timeline: {
      title: 'Як проходить оформлення під ключ',
      subtitle: 'Беремо все: від запису на info-car до готової картки в руках. Від вас — права, паспорт і фото.',
      steps: [
        { title: 'Діагностика', duration: '30 хв', desc: 'На безкоштовній консультації визначаємо тип заяви: перша видача, продовження, заміна чи обмін іноземної картки. Перевіряємо термін дії prawa jazdy — картка не видається довше за нього.' },
        { title: 'Збір документів', duration: '1-3 дні', desc: 'Готуємо біометричне фото 35×45 мм, копію prawa jazdy, дані PESEL або паспорта, зразок підпису. Для іноземців — присяжні переклади за потреби.' },
        { title: 'Оплата держмита', duration: '1 день', desc: 'Держмито PWPW 172,20 PLN (140 PLN нетто) ви оплачуєте напряму — додаємо підтвердження до заяви.' },
        { title: 'Подача через info-car', duration: '1 день', desc: 'Заповнюємо wniosek на порталі info-car (запис і подача онлайн) або подаємо паперово. Електронна подача швидша.' },
        { title: 'Виготовлення в PWPW', duration: '7-30 днів', desc: 'PWPW друкує картку: online-заява — близько 7 робочих днів, паперова — до 26-30 днів. Відстежуємо статус.' },
        { title: 'Отримання картки', duration: '1 день', desc: 'Картка приходить поштою або видається в пункті. Перевіряємо коректність даних, терміну дії та категорій.' },
        { title: 'Нагадування про продовження', duration: 'за 15 днів', desc: 'Ставимо нагадування за 15 робочих днів до закінчення, щоб не було простою. Часта послуга для логістичних фірм із парком водіїв.' }
      ]
    },
    documents: {
      title: 'Що від вас потрібно',
      subtitle: 'Базовий пакет. Точний перелік адаптуємо під тип заяви і вашу ситуацію.',
      items: [
        'Польське prawo jazdy потрібної категорії (зазвичай C/CE/D/DE)',
        'Біометричне фото 35×45 мм (як на права)',
        'PESEL — або для іноземців без PESEL: номер паспорта й орган видачі',
        'Зразок підпису (wzór podpisu)',
        'Підтвердження оплати 172,20 PLN на рахунок PWPW',
        'При продовженні — дані чинної/добігаючої картки',
        'При втраті/крадіжці — заява про втрату (oświadczenie o utracie)',
        'При обміні — іноземна картка тахографа + присяжний переклад'
      ]
    },
    pricing: {
      title: 'Скільки коштує наша робота',
      subtitle: 'Держмито PWPW (172,20 PLN) оплачуєте напряму; наш гонорар — після оцінки.',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '30 хвилин' },
        { label: 'Оформлення під ключ', value: 'Індивідуально', note: 'Після діагностики' }
      ]
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Rozporządzenie Parlamentu Europejskiego i Rady (UE) nr 165/2014 (tachografy)',
        'Ustawa z dnia 5 lipca 2018 r. o tachografach',
        'Ustawa z dnia 6 września 2001 r. o transporcie drogowym',
        'Ustawa z dnia 5 stycznia 2011 r. o kierujących pojazdami'
      ]
    },
    faq: [
      {
        q: 'Що таке картка водія і кому вона потрібна?',
        a: 'Karta kierowcy (картка водія) — персональна смарт-картка для цифрового тахографа (tachograf cyfrowy), яка записує час водіння, роботи та відпочинку. Потрібна всім, хто водить транспорт із тахографом: вантажівки понад 3,5 т (C, CE) і автобуси понад 9 місць (D, DE) — за Rozporządzeniem (UE) nr 165/2014. Без неї легально працювати не можна.'
      },
      {
        q: 'Скільки коштує картка і хто її видає?',
        a: 'Офіційне держмито — 172,20 PLN брутто (140 PLN нетто). Видає PWPW (Polska Wytwórnia Papierów Wartościowych — державна типографія). Заява подається через портал info-car (запис і подача онлайн) або паперово. Це мито ви платите напряму; наш гонорар за супровід — після оцінки вашої ситуації.'
      },
      {
        q: 'Чи можна оформити картку іноземцю без PESEL?',
        a: 'Так. Водієві без PESEL картку оформлюють за даними паспорта — номер і орган видачі замість PESEL. А для іноземців без польського prawa jazdy існує новіший маршрут через Kartę Kwalifikacji Kierowcy (KKK — картка кваліфікації водія). Беремо на себе заяву на info-car і присяжні переклади.'
      },
      {
        q: 'Які документи потрібні?',
        a: 'Чинне prawo jazdy потрібної категорії (зазвичай C/CE/D/DE), біометричне фото 35×45 мм (як на права), PESEL або — для іноземців — дані паспорта, зразок підпису та підтвердження оплати 172,20 PLN. При продовженні чи заміні перелік трохи відрізняється — адаптуємо під ваш випадок.'
      },
      {
        q: 'Скільки чекати картку?',
        a: 'При подачі online через info-car — близько 7 робочих днів. При паперовій подачі — до 26-30 днів. Тому продовжувати краще заздалегідь: рекомендуємо подавати приблизно за 15 робочих днів до закінчення терміну чинної картки.'
      },
      {
        q: 'На скільки видається картка і як продовжити?',
        a: 'Картка діє 5 років, але не довше за термін дії prawa jazdy. Продовження — це нова заява на info-car з оплатою 172,20 PLN. Важливо: на простроченій картці їздити не можна, тому подавайте за 15 робочих днів до закінчення, щоб не було простою.'
      },
      {
        q: 'Що буде за роботу без картки водія?',
        a: 'ITD (Inspekcja Transportu Drogowego — дорожня інспекція) перевіряє на дорогах і у фірмах. За водіння транспорту з тахографом без чинної karty kierowcy — штраф водієві та перевізнику, зупинка рейсу. Крім того, без картки тахограф не записує дані коректно, що саме по собі є порушенням.'
      }
    ],
    related: ['kod-95', 'wymiana-prawa-jazdy', 'praca-kierowca-ciezarowka'],
    ctaTitle: 'Оформимо картку водія без черг і помилок',
    ctaSubtitle: 'Безкоштовна діагностика за 30 хвилин: визначимо тип заяви, підготуємо документи й подамо через info-car. Іноземцям без PESEL — теж оформлюємо.'
  }
};

export default kartaKierowcy;
