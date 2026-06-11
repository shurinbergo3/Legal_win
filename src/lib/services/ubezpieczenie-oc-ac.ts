import type { ServiceEntry } from './types';

const ubezpieczenieOcAc: ServiceEntry = {
  ru: {
    slug: 'ubezpieczenie-oc-ac',
    group: 'auto',
    icon: 'shield',
    badge: 'OC обязательна · UFG · 2026',
    title: 'Автостраховка OC / AC',
    subtitle: 'Оформим полис OC и AC даже без PESEL - подберём, переведём, заключим',
    lead: 'OC (ubezpieczenie odpowiedzialności cywilnej) - аналог ОСАГО и обязательна в Польше для каждого авто непрерывно, без единого дня разрыва. За отсутствие OC фонд UFG в 2026 году штрафует на 1 920-9 610 PLN, а при ДТП по вашей вине без полиса предъявит регресс - в среднем около 24 000 PLN. Главная проблема иностранца: онлайн-калькуляторы требуют PESEL, скидки из Украины и Беларуси переносят не все страховщики, а при покупке б/у авто полис продавца действует лишь до конца его периода. Мы подбираем выгодный тариф у нескольких страховщиков, оформляем OC/AC/NNW даже без PESEL через брокера, переносим бонусы из-за рубежа и говорим по-русски.',
    facts: [
      { label: 'OC', value: 'Обязательна', note: 'непрерывно · с дня владения' },
      { label: 'Средняя OC', value: '~679 PLN/год', note: 'реально 400-900 · 2025' },
      { label: 'Штраф UFG (2026)', value: 'до 9 610 PLN', note: '14+ дней без OC · легковое авто' },
      { label: 'Без PESEL', value: 'Оформим', note: 'через брокера · по паспорту' }
    ],
    grounds: {
      title: 'Что оформляем и решаем',
      subtitle: 'OC - обязательный минимум. Остальное - по ситуации. Помогаем там, где иностранец упирается в PESEL, язык и зарубежные скидки.',
      items: [
        { title: 'OC - обязательная ответственность', desc: 'Покрывает ущерб, который вы причинили третьим лицам. Должна быть всегда, без разрыва. Подбираем самый выгодный тариф у нескольких страховщиков.' },
        { title: 'AC - каско (добровольно)', desc: 'Защищает вашу машину: угон, ДТП по вашей вине, повреждения. Рекомендуем для новых и дорогих авто. Считаем, окупается ли в вашем случае.' },
        { title: 'NNW и Assistance', desc: 'NNW - страховка от травм водителя и пассажиров. Assistance - помощь на дороге, эвакуатор, подменное авто. Добавляем пакетом со скидкой.' },
        { title: 'OC без PESEL / для иностранца', desc: 'Большинство калькуляторов требуют PESEL. Оформляем через брокера, который страхует иностранцев по загранпаспорту. Польские права для страхования авто не нужны.' },
        { title: 'Перенос скидок из Украины / Беларуси', desc: 'Не все польские страховщики засчитывают зарубежный безаварийный стаж. Знаем, кто принимает, - нужен зарубежный полис и справка истории страхования с присяжным переводом.' },
        { title: 'Зелёная карта и OC graniczne', desc: 'Зелёная карта - продление польской OC за границу. OC graniczne - краткосрочная польская OC для авто на иностранных номерах без зелёной карты (от ~60 PLN/мес, минимум 30 дней).' },
        { title: 'Покупка б/у - что с полисом', desc: 'OC продавца автоматически переходит к вам до конца её периода (но не продлевается). Можно расторгнуть в любой момент или оставить - но новую OC нужно успеть оформить до окончания, иначе разрыв и штраф.' }
      ]
    },
    timeline: {
      title: 'Как мы оформляем полис',
      subtitle: 'Стандартно - в день обращения. С переносом зарубежных скидок - 1-3 дня (нужен перевод справки).',
      steps: [
        { title: 'Консультация', duration: '20 мин', desc: 'Уточняем авто, стаж, статус (PESEL/без), наличие зарубежной истории. Определяем нужный набор: OC, AC, NNW, Assistance.' },
        { title: 'Подбор тарифа', duration: '1 час', desc: 'Сравниваем предложения нескольких страховщиков (PZU, Warta, Link4, Allianz и др.), считаем с учётом вашего профиля. Показываем варианты с ценами.' },
        { title: 'Перенос скидок (если есть)', duration: '1-2 дня', desc: 'Берём зарубежный полис и справку истории страхования, делаем присяжный перевод, подаём страховщику, который засчитывает безаварийный стаж.' },
        { title: 'Оформление полиса', duration: '30 мин', desc: 'Заключаем договор - онлайн или через брокера, если нет PESEL. Полис OC вступает в силу сразу. Оплата картой или переводом.' },
        { title: 'Выдача и напоминания', duration: 'день в день', desc: 'Отдаём полис и сертификат. Ставим напоминание о продлении - OC не продлевается автоматически при покупке б/у, разрыв = штраф.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Базовый набор. Для переноса скидок - дополнительно зарубежные документы.',
      items: [
        'Техпаспорт авто (dowód rejestracyjny) - марка, модель, VIN, год',
        'Загранпаспорт + karta pobytu / документ легального пребывания',
        'PESEL - если есть (без него оформим через брокера)',
        'Данные водителей: возраст, водительский стаж',
        'Договор купли-продажи или fakturę - при покупке б/у',
        'Текущий полис OC продавца - при покупке б/у',
        'Для переноса скидок: зарубежный полис + справка истории страхования (zaświadczenie o przebiegu ubezpieczenia)',
        'Присяжный перевод зарубежной справки - готовим мы'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Гонорар за подбор и оформление. Сама премия страховки оплачивается страховщику отдельно.',
      items: [
        { label: 'Консультация и расчёт', value: 'Бесплатно', note: '20 минут · сравнение тарифов' },
        { label: 'Подбор и оформление OC', value: 'от 150 PLN', note: 'В т.ч. без PESEL через брокера' },
        { label: 'Пакет OC + AC + NNW + Assistance', value: 'от 250 PLN', note: 'Полная защита под ключ' },
        { label: 'Перенос зарубежных скидок', value: 'от 200 PLN', note: 'Со справкой и присяжным переводом' }
      ],
      note: 'Указаны гонорары LegalWin за услугу. Сама премия OC (в среднем ~679 PLN/год, реально 400-900 PLN в зависимости от авто, возраста и стажа) и AC оплачиваются напрямую страховщику. Присяжный перевод справки истории страхования (~80 PLN) - отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych, UFG i PBUK',
        'Obowiązek ciągłości OC - kara UFG za brak (rebasowana corocznie wg płacy minimalnej)',
        'Regres UFG - art. 110 ww. ustawy (zwrot wypłaconego odszkodowania)',
        'Automatyczne przejście OC na nabywcę pojazdu (art. 31) - bez automatycznego wznowienia',
        'Zielona Karta / OC graniczne - dla pojazdów na zagranicznych tablicach'
      ]
    },
    faq: [
      { q: 'Можно ли оформить OC без PESEL?', a: 'Да. Онлайн-калькуляторы обычно требуют PESEL, но мы оформляем OC через брокера, который страхует иностранцев по загранпаспорту. Польские водительские права для страхования самого авто не нужны - страхуется машина, а не водитель.' },
      { q: 'Сколько стоит страховка в 2026 году?', a: 'Средняя OC в 2025 - около 679 PLN в год, реальный разброс 400-900 PLN. Дешёвые предложения - от ~158 PLN, для молодых и рисковых водителей - 1 200+ PLN. Цена зависит от возраста, стажа, истории аварий, города, авто и объёма двигателя. AC (каско) считается отдельно.' },
      { q: 'Какой штраф за отсутствие или просрочку OC?', a: 'Штрафы UFG для легкового авто в 2026 году: 1-3 дня без OC - 1 920 PLN, 4-14 дней - 4 810 PLN, более 14 дней - 9 610 PLN. Но опаснее штрафа регресс: если без OC вы попали в ДТП по своей вине, UFG выплатит пострадавшему и взыщет всю сумму с вас - в среднем около 24 000 PLN.' },
      { q: 'В чём разница между OC, AC, NNW и Assistance?', a: 'OC (обязательная) - покрывает ущерб, который вы нанесли другим. AC (каско, добровольно) - повреждения и угон вашего авто. NNW - травмы водителя и пассажиров. Assistance - помощь на дороге, эвакуатор, подменное авто. OC обязательна всегда, остальное - по желанию.' },
      { q: 'Можно ли перенести скидки из Украины или Беларуси?', a: 'Иногда да - но не все польские страховщики засчитывают зарубежный безаварийный стаж. Нужен зарубежный полис и справка истории страхования с присяжным переводом. Мы знаем, какие страховщики принимают зарубежную историю, и подаём документы им.' },
      { q: 'Купил б/у авто - нужно ли переоформлять OC?', a: 'Полис OC продавца автоматически переходит к вам и действует до конца оплаченного периода - но НЕ продлевается автоматически. Вы можете расторгнуть его сразу (wypowiedzenie) и оформить свой, либо оставить, но обязательно заключить новый до даты окончания - иначе разрыв и штраф UFG. Продавец, в свою очередь, должен уведомить страховщика о продаже в течение 14 дней.' },
      { q: 'Зелёная карта или OC graniczne - что выбрать для иностранных номеров?', a: 'Зелёная карта - это расширение действующей польской OC на поездки за границу. OC graniczne - отдельная краткосрочная польская страховка для авто на иностранных (например украинских) номерах, у которого нет зелёной карты: от ~60 PLN в месяц, минимум 30 дней. Подскажем, что подходит в вашем случае.' },
      { q: 'Какие документы нужны для оформления?', a: 'Техпаспорт авто (марка, модель, VIN, год), загранпаспорт и документ пребывания, данные водителей (возраст, стаж). При покупке б/у - договор и полис продавца. Для переноса скидок - зарубежная справка истории страхования с присяжным переводом (делаем сами).' }
    ],
    related: ['rejestracja-pojazdu', 'wymiana-prawa-jazdy', 'przeglad-techniczny'],
    ctaTitle: 'Оформим OC выгодно - даже без PESEL',
    ctaSubtitle: 'Бесплатная консультация: сравним тарифы нескольких страховщиков, посчитаем с вашими скидками, оформим полис в день обращения. Говорим по-русски, разбираемся в зарубежной истории страхования.'
  },
  pl: {
    slug: 'ubezpieczenie-oc-ac',
    group: 'auto',
    icon: 'shield',
    badge: 'OC obowiązkowe · UFG · 2026',
    title: 'Ubezpieczenie OC / AC',
    subtitle: 'Załatwimy polisę OC i AC nawet bez numeru PESEL - dobierzemy, przetłumaczymy, zawrzemy umowę',
    lead: 'OC (ubezpieczenie odpowiedzialności cywilnej) jest w Polsce obowiązkowe dla każdego pojazdu w sposób ciągły, bez ani jednego dnia przerwy. Za brak OC Ubezpieczeniowy Fundusz Gwarancyjny (UFG) w 2026 r. nakłada karę od 1 920 do 9 610 PLN, a jeśli spowodujesz wypadek bez polisy - wystąpi z regresem, średnio około 24 000 PLN. Największy problem cudzoziemca: kalkulatory online wymagają numeru PESEL, nie wszyscy ubezpieczyciele przenoszą zniżki z Ukrainy czy Białorusi, a przy zakupie auta używanego polisa sprzedającego działa tylko do końca jego okresu. Dobieramy korzystną stawkę u kilku ubezpieczycieli, zawieramy OC/AC/NNW nawet bez PESEL przez brokera, przenosimy zniżki z zagranicy i obsługujemy klienta w jego języku.',
    facts: [
      { label: 'OC', value: 'Obowiązkowe', note: 'w sposób ciągły · od dnia posiadania' },
      { label: 'Średnie OC', value: '~679 PLN/rok', note: 'realnie 400-900 · 2025' },
      { label: 'Kara UFG (2026)', value: 'do 9 610 PLN', note: '14+ dni bez OC · samochód osobowy' },
      { label: 'Bez PESEL', value: 'Załatwimy', note: 'przez brokera · na paszport' }
    ],
    grounds: {
      title: 'Co zawieramy i co rozwiązujemy',
      subtitle: 'OC to obowiązkowe minimum. Reszta - zależnie od sytuacji. Pomagamy tam, gdzie cudzoziemiec utyka na PESEL, języku i zagranicznych zniżkach.',
      items: [
        { title: 'OC - obowiązkowa odpowiedzialność cywilna', desc: 'Pokrywa szkody wyrządzone osobom trzecim. Musi obowiązywać zawsze, bez przerwy. Dobieramy najkorzystniejszą stawkę u kilku ubezpieczycieli.' },
        { title: 'AC - autocasco (dobrowolne)', desc: 'Chroni Twój pojazd: kradzież, wypadek z Twojej winy, uszkodzenia. Polecamy do aut nowych i drogich. Liczymy, czy w Twoim przypadku się opłaca.' },
        { title: 'NNW i Assistance', desc: 'NNW - ubezpieczenie od następstw nieszczęśliwych wypadków kierowcy i pasażerów. Assistance - pomoc na drodze, holowanie, auto zastępcze. Dodajemy w pakiecie ze zniżką.' },
        { title: 'OC bez PESEL / dla cudzoziemca', desc: 'Większość kalkulatorów wymaga numeru PESEL. Zawieramy przez brokera, który ubezpiecza cudzoziemców na paszport. Polskie prawo jazdy do ubezpieczenia samego auta nie jest potrzebne.' },
        { title: 'Przeniesienie zniżek z Ukrainy / Białorusi', desc: 'Nie wszyscy polscy ubezpieczyciele uznają zagraniczny przebieg bezszkodowy. Wiemy, kto przyjmuje - potrzebna jest zagraniczna polisa i zaświadczenie o przebiegu ubezpieczenia z tłumaczeniem przysięgłym.' },
        { title: 'Zielona Karta i OC graniczne', desc: 'Zielona Karta - rozszerzenie polskiego OC na zagranicę. OC graniczne - krótkoterminowe polskie OC dla aut na zagranicznych tablicach bez Zielonej Karty (od ~60 PLN/mies., minimum 30 dni).' },
        { title: 'Zakup auta używanego - co z polisą', desc: 'OC sprzedającego automatycznie przechodzi na Ciebie do końca jego okresu (ale się nie wznawia). Możesz je wypowiedzieć w każdej chwili albo zostawić - ale nowe OC trzeba zawrzeć przed końcem, inaczej przerwa i kara.' }
      ]
    },
    timeline: {
      title: 'Jak zawieramy polisę',
      subtitle: 'Standardowo - w dniu zgłoszenia. Z przeniesieniem zagranicznych zniżek - 1-3 dni (potrzebne tłumaczenie zaświadczenia).',
      steps: [
        { title: 'Konsultacja', duration: '20 min', desc: 'Ustalamy auto, staż, status (PESEL/bez), zagraniczną historię. Określamy potrzebny zakres: OC, AC, NNW, Assistance.' },
        { title: 'Dobór stawki', duration: '1 godz.', desc: 'Porównujemy oferty kilku ubezpieczycieli (PZU, Warta, Link4, Allianz i in.), liczymy pod Twój profil. Pokazujemy warianty z cenami.' },
        { title: 'Przeniesienie zniżek (jeśli są)', duration: '1-2 dni', desc: 'Bierzemy zagraniczną polisę i zaświadczenie o przebiegu ubezpieczenia, robimy tłumaczenie przysięgłe, składamy ubezpieczycielowi, który uznaje przebieg bezszkodowy.' },
        { title: 'Zawarcie polisy', duration: '30 min', desc: 'Zawieramy umowę - online lub przez brokera, gdy brak PESEL. OC wchodzi w życie od razu. Płatność kartą lub przelewem.' },
        { title: 'Wydanie i przypomnienia', duration: 'tego samego dnia', desc: 'Wydajemy polisę i certyfikat. Ustawiamy przypomnienie o wznowieniu - przy zakupie auta używanego OC nie wznawia się automatycznie, przerwa = kara.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Pakiet bazowy. Do przeniesienia zniżek - dodatkowo dokumenty zagraniczne.',
      items: [
        'Dowód rejestracyjny pojazdu - marka, model, VIN, rok',
        'Paszport + karta pobytu / dokument legalnego pobytu',
        'PESEL - jeśli jest (bez niego zawrzemy przez brokera)',
        'Dane kierowców: wiek, staż za kierownicą',
        'Umowa kupna-sprzedaży lub faktura - przy zakupie używanego',
        'Aktualna polisa OC sprzedającego - przy zakupie używanego',
        'Do przeniesienia zniżek: zagraniczna polisa + zaświadczenie o przebiegu ubezpieczenia',
        'Tłumaczenie przysięgłe zagranicznego zaświadczenia - przygotowujemy my'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Honorarium za dobór i zawarcie. Sama składka opłacana ubezpieczycielowi osobno.',
      items: [
        { label: 'Konsultacja i kalkulacja', value: 'Gratis', note: '20 minut · porównanie stawek' },
        { label: 'Dobór i zawarcie OC', value: 'od 150 PLN', note: 'W tym bez PESEL przez brokera' },
        { label: 'Pakiet OC + AC + NNW + Assistance', value: 'od 250 PLN', note: 'Pełna ochrona pod klucz' },
        { label: 'Przeniesienie zagranicznych zniżek', value: 'od 200 PLN', note: 'Z zaświadczeniem i tłumaczeniem przysięgłym' }
      ],
      note: 'Powyżej honoraria LegalWin za usługę. Sama składka OC (średnio ~679 PLN/rok, realnie 400-900 PLN zależnie od auta, wieku i stażu) oraz AC opłacane są bezpośrednio ubezpieczycielowi. Tłumaczenie przysięgłe zaświadczenia o przebiegu ubezpieczenia (~80 PLN) - osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych, UFG i PBUK',
        'Obowiązek ciągłości OC - kara UFG za brak (rebasowana corocznie wg płacy minimalnej)',
        'Regres UFG - art. 110 ww. ustawy (zwrot wypłaconego odszkodowania)',
        'Automatyczne przejście OC na nabywcę pojazdu (art. 31) - bez automatycznego wznowienia',
        'Zielona Karta / OC graniczne - dla pojazdów na zagranicznych tablicach'
      ]
    },
    faq: [
      { q: 'Ile kosztuje OC w 2026 roku?', a: 'Średnie OC w 2025 r. to około 679 PLN rocznie, realny rozrzut 400-900 PLN. Tanie oferty - od ~158 PLN, dla młodych i ryzykownych kierowców - 1 200+ PLN. Cena zależy od wieku, stażu, historii szkód, miasta, auta i pojemności silnika. AC (autocasco) liczy się osobno.' },
      { q: 'Co to jest OC i AC i czym się różnią?', a: 'OC (obowiązkowe) - pokrywa szkody wyrządzone innym. AC (autocasco, dobrowolne) - uszkodzenia i kradzież Twojego auta. NNW - obrażenia kierowcy i pasażerów. Assistance - pomoc na drodze, holowanie, auto zastępcze. OC jest obowiązkowe zawsze, reszta - do wyboru.' },
      { q: 'Jaka jest kara za brak OC w 2026 roku?', a: 'Kary UFG dla samochodu osobowego w 2026 r.: 1-3 dni bez OC - 1 920 PLN, 4-14 dni - 4 810 PLN, powyżej 14 dni - 9 610 PLN. Groźniejszy od kary jest jednak regres: jeśli bez OC spowodujesz wypadek, UFG wypłaci poszkodowanemu i ściągnie całość od Ciebie - średnio około 24 000 PLN.' },
      { q: 'Kupiłem samochód używany - co z OC sprzedającego?', a: 'Polisa OC sprzedającego automatycznie przechodzi na Ciebie i działa do końca opłaconego okresu - ale NIE wznawia się automatycznie. Możesz ją od razu wypowiedzieć (wypowiedzenie) i zawrzeć własną albo zostawić, ale koniecznie zawrzeć nową przed datą końca - inaczej przerwa i kara UFG. Sprzedający z kolei ma obowiązek powiadomić ubezpieczyciela o sprzedaży w ciągu 14 dni.' },
      { q: 'Jak wypowiedzieć OC po zakupie auta używanego?', a: 'OC przejęte po sprzedającym możesz wypowiedzieć (wypowiedzenie) w każdej chwili i zawrzeć własną polisę - nie musisz czekać do końca okresu jak przy własnej umowie. Pamiętaj tylko, że odziedziczone OC nie wznawia się samo, więc nową polisę trzeba zawrzeć przed datą końca, inaczej grozi przerwa i kara UFG.' },
      { q: 'Czy kalkulator OC zadziała bez numeru PESEL?', a: 'Kalkulatory online zwykle wymagają numeru PESEL, więc bez niego policzysz OC z trudem. My zawieramy OC przez brokera, który ubezpiecza cudzoziemców na paszport. Polskie prawo jazdy do ubezpieczenia samego auta nie jest potrzebne - ubezpiecza się pojazd, a nie kierowcę.' },
      { q: 'Zielona Karta czy OC graniczne - co wybrać dla zagranicznych tablic?', a: 'Zielona Karta to rozszerzenie obowiązującego polskiego OC na wyjazdy za granicę. OC graniczne to osobne, krótkoterminowe polskie ubezpieczenie dla aut na zagranicznych (np. ukraińskich) tablicach, które nie ma Zielonej Karty: od ~60 PLN miesięcznie, minimum 30 dni. Podpowiemy, co pasuje w Twoim przypadku.' },
      { q: 'Czy mogę przenieść zniżki za bezszkodową jazdę z zagranicy?', a: 'Czasem tak - ale nie wszyscy polscy ubezpieczyciele uznają zagraniczny przebieg bezszkodowy. Potrzebna jest zagraniczna polisa i zaświadczenie o przebiegu ubezpieczenia z tłumaczeniem przysięgłym. Wiemy, którzy ubezpieczyciele przyjmują zagraniczną historię, i im składamy dokumenty.' }
    ],
    related: ['rejestracja-pojazdu', 'wymiana-prawa-jazdy', 'przeglad-techniczny'],
    ctaTitle: 'Zawrzemy OC korzystnie - nawet bez PESEL',
    ctaSubtitle: 'Bezpłatna konsultacja: porównamy stawki kilku ubezpieczycieli, policzymy z Twoimi zniżkami, zawrzemy polisę w dniu zgłoszenia. Znamy się na zagranicznej historii ubezpieczenia.'
  },
  en: {
    slug: 'ubezpieczenie-oc-ac',
    group: 'auto',
    icon: 'shield',
    badge: 'OC compulsory · UFG · 2026',
    title: 'Car insurance OC / AC',
    subtitle: 'We arrange OC and AC even without a PESEL number - we compare, translate and sign the policy for you',
    lead: 'OC (ubezpieczenie odpowiedzialności cywilnej - the compulsory third-party liability cover, the Polish equivalent of mandatory motor insurance) is required in Poland for every vehicle continuously, without a single day of gap. For driving without OC the guarantee fund UFG (Ubezpieczeniowy Fundusz Gwarancyjny) fines you 1 920-9 610 PLN in 2026, and if you cause an accident while uninsured it pursues you for recourse - on average around 24 000 PLN. The foreigner\'s core headache: online calculators demand a PESEL, not every insurer transfers no-claims discounts from Ukraine or Belarus, and when you buy a used car the seller\'s policy only runs to the end of his term. We compare the best rate across several insurers, sign OC/AC/NNW even without a PESEL through a broker, transfer your overseas no-claims bonus and handle everything in your language.',
    facts: [
      { label: 'OC', value: 'Compulsory', note: 'continuously · from day of ownership' },
      { label: 'Average OC', value: '~679 PLN/year', note: 'realistically 400-900 · 2025' },
      { label: 'UFG fine (2026)', value: 'up to 9 610 PLN', note: '14+ days without OC · passenger car' },
      { label: 'Without PESEL', value: 'We arrange it', note: 'via broker · on your passport' }
    ],
    grounds: {
      title: 'What we arrange and solve',
      subtitle: 'OC is the compulsory minimum. The rest depends on your situation. We step in exactly where a foreigner hits the wall - PESEL, language and foreign discounts.',
      items: [
        { title: 'OC - compulsory third-party liability', desc: 'Covers damage you cause to other people. It must be in force at all times, with no gap. We find the cheapest rate across several insurers.' },
        { title: 'AC - comprehensive cover (optional)', desc: 'Protects your own car: theft, your-fault crash, damage. We recommend it for new and expensive cars. We work out whether it pays off in your case.' },
        { title: 'NNW and Assistance', desc: 'NNW (następstwa nieszczęśliwych wypadków) - accident cover for the driver and passengers. Assistance - roadside help, towing, a courtesy car. We add them as a discounted bundle.' },
        { title: 'OC without PESEL / for foreigners', desc: 'Most calculators demand a PESEL. We sign through a broker who insures foreigners on a passport. A Polish driving licence is not needed to insure the car itself.' },
        { title: 'Transferring no-claims discounts from Ukraine / Belarus', desc: 'Not every Polish insurer credits a foreign claims-free record. We know who accepts it - you need the foreign policy and a no-claims certificate (zaświadczenie o przebiegu ubezpieczenia) with a sworn translation.' },
        { title: 'Green Card and OC graniczne', desc: 'The Green Card (Zielona Karta) extends your Polish OC abroad. OC graniczne is short-term Polish OC for cars on foreign plates that have no Green Card (from ~60 PLN/month, minimum 30 days).' },
        { title: 'Buying a used car - what about the policy', desc: 'The seller\'s OC passes to you automatically until the end of its term (but does not auto-renew). You can cancel it any time (wypowiedzenie) or keep it - but you must sign new OC before it expires, or you get a gap and a fine.' }
      ]
    },
    timeline: {
      title: 'How we sign the policy',
      subtitle: 'Standard - the same day you ask. With a foreign no-claims transfer - 1-3 days (the certificate needs translating).',
      steps: [
        { title: 'Consultation', duration: '20 min', desc: 'We confirm the car, your driving years, your status (PESEL or not) and any overseas history. We settle the right set: OC, AC, NNW, Assistance.' },
        { title: 'Rate comparison', duration: '1 hour', desc: 'We compare offers from several insurers (PZU, Warta, Link4, Allianz and others), priced to your profile. We show you the options with figures.' },
        { title: 'Discount transfer (if any)', duration: '1-2 days', desc: 'We take your foreign policy and no-claims certificate, get a sworn translation and submit it to an insurer that credits your claims-free record.' },
        { title: 'Signing the policy', duration: '30 min', desc: 'We conclude the contract - online or through the broker if you have no PESEL. OC takes effect immediately. Payment by card or transfer.' },
        { title: 'Handover and reminders', duration: 'same day', desc: 'We hand over the policy and certificate. We set a renewal reminder - on a used-car purchase OC does not auto-renew, and a gap means a fine.' }
      ]
    },
    documents: {
      title: 'What you bring',
      subtitle: 'Base set. For a discount transfer - your foreign documents on top.',
      items: [
        'Vehicle registration (dowód rejestracyjny) - make, model, VIN, year',
        'Passport + karta pobytu / proof of legal residence',
        'PESEL - if you have one (without it we sign through a broker)',
        'Driver details: age, years behind the wheel',
        'Purchase contract or invoice (faktura) - for a used-car purchase',
        'The seller\'s current OC policy - for a used-car purchase',
        'For a discount transfer: foreign policy + no-claims certificate (zaświadczenie o przebiegu ubezpieczenia)',
        'Sworn translation of the foreign certificate - we handle this'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'A fee for sourcing and signing. The premium itself is paid to the insurer separately.',
      items: [
        { label: 'Consultation and quote', value: 'Free', note: '20 minutes · rate comparison' },
        { label: 'Sourcing and signing OC', value: 'from 150 PLN', note: 'Including without PESEL via broker' },
        { label: 'OC + AC + NNW + Assistance bundle', value: 'from 250 PLN', note: 'Full turnkey protection' },
        { label: 'Foreign no-claims transfer', value: 'from 200 PLN', note: 'With certificate and sworn translation' }
      ],
      note: 'Above are LegalWin\'s service fees. The OC premium itself (on average ~679 PLN/year, realistically 400-900 PLN depending on the car, age and driving years) and AC are paid directly to the insurer. The sworn translation of the no-claims certificate (~80 PLN) is separate.'
    },
    legalBase: {
      title: 'The law behind it',
      items: [
        'Act of 22 May 2003 on compulsory insurance, UFG and PBUK (Ustawa o ubezpieczeniach obowiązkowych)',
        'Continuity-of-OC duty - the UFG fine for a gap (re-based each year against the minimum wage)',
        'UFG recourse - Art. 110 of the same Act (recovery of paid-out compensation)',
        'Automatic transfer of OC to the vehicle\'s buyer (Art. 31) - with no automatic renewal',
        'Green Card / OC graniczne - for vehicles on foreign plates'
      ]
    },
    faq: [
      { q: 'How much does car insurance cost in Poland?', a: 'Average OC in 2025 was around 679 PLN a year, with a realistic spread of 400-900 PLN. Cheap offers start from ~158 PLN; for young, higher-risk drivers it runs to 1 200+ PLN. The price depends on age, driving years, claims history, city, car and engine size. AC (comprehensive) is priced separately.' },
      { q: 'Can a foreigner get car insurance without a PESEL?', a: 'Yes. Online calculators usually demand a PESEL, but we sign OC through a broker who insures foreigners on a passport. A Polish driving licence is not needed to insure the car itself - it is the vehicle that is insured, not the driver.' },
      { q: 'What is the difference between OC and AC in Poland?', a: 'OC (compulsory) - covers damage you cause to others. AC (comprehensive, optional) - damage to and theft of your own car. NNW - injury to the driver and passengers. Assistance - roadside help, towing, a courtesy car. OC is always compulsory; the rest is your choice.' },
      { q: 'What is the fine for driving without OC in Poland?', a: 'UFG fines for a passenger car in 2026: 1-3 days without OC - 1 920 PLN, 4-14 days - 4 810 PLN, more than 14 days - 9 610 PLN. But recourse is worse than the fine: if you cause an accident while uninsured, UFG pays the victim and recovers the full amount from you - on average around 24 000 PLN.' },
      { q: 'I am buying a used car in Poland - what happens to the insurance?', a: 'The seller\'s OC passes to you automatically and runs to the end of the paid period - but it does NOT auto-renew. You can cancel it at once (wypowiedzenie) and take out your own, or keep it, but you must sign new OC before the end date - otherwise there is a gap and a UFG fine. The seller, in turn, must notify the insurer of the sale within 14 days.' },
      { q: 'Can I transfer my no-claims bonus to Poland?', a: 'Sometimes yes - but not every Polish insurer credits a foreign claims-free record. You need the foreign policy and a no-claims certificate (zaświadczenie o przebiegu ubezpieczenia) with a sworn translation. We know which insurers accept a foreign history and submit to them.' },
      { q: 'Do I need a Green Card or OC graniczne for a car on foreign plates?', a: 'The Green Card extends your existing Polish OC for trips abroad. OC graniczne is separate, short-term Polish cover for a car on foreign (e.g. Ukrainian) plates that has no Green Card: from ~60 PLN a month, minimum 30 days. We will tell you which fits your case.' },
      { q: 'What documents do I need to insure a car in Poland?', a: 'The vehicle registration (make, model, VIN, year), your passport and residence document, driver details (age, years). For a used-car purchase - the contract and the seller\'s policy. For a discount transfer - the foreign no-claims certificate with a sworn translation (we do it ourselves).' }
    ],
    related: ['rejestracja-pojazdu', 'wymiana-prawa-jazdy', 'przeglad-techniczny'],
    ctaTitle: 'We will set up OC at a good rate - even without a PESEL',
    ctaSubtitle: 'Free consultation: we compare rates across several insurers, factor in your discounts and sign the policy the same day. We work in English and understand foreign insurance histories.'
  },
  tr: {
    slug: 'ubezpieczenie-oc-ac',
    group: 'auto',
    icon: 'shield',
    badge: 'OC zorunlu · UFG · 2026',
    title: 'Araç sigortası OC / AC',
    subtitle: 'PESEL numarası olmadan bile OC ve AC poliçesi yapıyoruz - karşılaştırır, tercüme eder, sözleşmeyi imzalarız',
    lead: 'OC (ubezpieczenie odpowiedzialności cywilnej - zorunlu trafik sigortası) Polonya\'da her araç için kesintisiz, tek bir günlük boşluk olmadan zorunludur. OC eksikliğinde Sigorta Garanti Fonu UFG (Ubezpieczeniowy Fundusz Gwarancyjny) 2026\'da 1 920-9 610 PLN ceza keser; sigortasızken kazaya sebep olursanız rücu hakkını kullanır - ortalama yaklaşık 24 000 PLN. Yabancının asıl sorunu: online hesaplayıcılar PESEL numarası ister, Ukrayna veya Belarus\'tan gelen hasarsızlık indirimlerini her sigortacı kabul etmez ve ikinci el araç alımında satıcının poliçesi yalnızca kendi dönemi sonuna kadar geçerlidir. Birkaç sigortacıda en uygun tarifeyi karşılaştırır, PESEL olmadan bile broker aracılığıyla OC/AC/NNW yapar, yurt dışı indirimlerini taşır ve sizinle kendi dilinizde ilgileniriz.',
    facts: [
      { label: 'OC', value: 'Zorunlu', note: 'kesintisiz · sahiplik gününden itibaren' },
      { label: 'Ortalama OC', value: '~679 PLN/yıl', note: 'fiilen 400-900 · 2025' },
      { label: 'UFG cezası (2026)', value: '9 610 PLN\'ye kadar', note: '14+ gün OC\'siz · binek araç' },
      { label: 'PESEL\'siz', value: 'Yapıyoruz', note: 'broker aracılığıyla · pasaportla' }
    ],
    grounds: {
      title: 'Neyi yapıyor, neyi çözüyoruz',
      subtitle: 'OC zorunlu asgaridir. Gerisi duruma göre. Yabancının PESEL, dil ve yurt dışı indirimlerinde tıkandığı yerde devreye giriyoruz.',
      items: [
        { title: 'OC - zorunlu mali sorumluluk', desc: 'Üçüncü kişilere verdiğiniz zararı karşılar. Her zaman, kesintisiz geçerli olmalıdır. Birkaç sigortacıda en uygun tarifeyi buluyoruz.' },
        { title: 'AC - kasko (isteğe bağlı)', desc: 'Kendi aracınızı korur: çalınma, kendi kusurunuzla kaza, hasar. Yeni ve pahalı araçlar için öneriyoruz. Sizin durumunuzda karşılığını verip vermediğini hesaplıyoruz.' },
        { title: 'NNW ve Assistance', desc: 'NNW (następstwa nieszczęśliwych wypadków) - sürücü ve yolcular için kaza sigortası. Assistance - yolda yardım, çekici, ikame araç. İndirimli paket olarak ekliyoruz.' },
        { title: 'PESEL\'siz OC / yabancılar için', desc: 'Hesaplayıcıların çoğu PESEL numarası ister. Yabancıları pasaportla sigortalayan broker aracılığıyla yapıyoruz. Aracın kendisini sigortalamak için Polonya ehliyeti gerekmez.' },
        { title: 'Ukrayna / Belarus indirimlerinin taşınması', desc: 'Polonyalı sigortacıların hepsi yurt dışı hasarsızlık geçmişini kabul etmez. Kimin kabul ettiğini biliyoruz - yurt dışı poliçesi ve hasarsızlık belgesi (zaświadczenie o przebiegu ubezpieczenia) yeminli tercümeyle gerekir.' },
        { title: 'Yeşil Kart ve OC graniczne', desc: 'Yeşil Kart (Zielona Karta) - Polonya OC\'sini yurt dışına genişletir. OC graniczne - Yeşil Kartı olmayan, yabancı plakalı araçlar için kısa süreli Polonya OC\'si (~60 PLN/ay\'dan, en az 30 gün).' },
        { title: 'İkinci el araç alımı - poliçe ne olur', desc: 'Satıcının OC\'si kendi dönemi sonuna kadar otomatik size geçer (ama yenilenmez). İstediğiniz an feshedebilir (wypowiedzenie) veya bırakabilirsiniz - ama yeni OC\'yi süre dolmadan yapmalısınız, yoksa boşluk ve ceza.' }
      ]
    },
    timeline: {
      title: 'Poliçeyi nasıl yapıyoruz',
      subtitle: 'Standart - başvuru günü. Yurt dışı indirimlerinin taşınmasıyla - 1-3 gün (belgenin tercümesi gerekir).',
      steps: [
        { title: 'Danışmanlık', duration: '20 dk', desc: 'Aracı, sürüş geçmişini, statünüzü (PESEL var/yok) ve yurt dışı geçmişini belirleriz. Gerekli kapsamı saptarız: OC, AC, NNW, Assistance.' },
        { title: 'Tarife karşılaştırması', duration: '1 saat', desc: 'Birkaç sigortacının (PZU, Warta, Link4, Allianz vb.) tekliflerini karşılaştırır, profilinize göre hesaplarız. Fiyatlı seçenekleri gösteririz.' },
        { title: 'İndirim taşıma (varsa)', duration: '1-2 gün', desc: 'Yurt dışı poliçesi ve hasarsızlık belgesini alır, yeminli tercüme yapar, hasarsızlık geçmişini kabul eden sigortacıya sunarız.' },
        { title: 'Poliçenin yapılması', duration: '30 dk', desc: 'Sözleşmeyi yaparız - online veya PESEL yoksa broker aracılığıyla. OC hemen yürürlüğe girer. Kart veya havaleyle ödeme.' },
        { title: 'Teslim ve hatırlatma', duration: 'aynı gün', desc: 'Poliçe ve sertifikayı veririz. Yenileme hatırlatması kurarız - ikinci el alımında OC otomatik yenilenmez, boşluk = ceza.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Temel paket. İndirim taşıma için - ek olarak yurt dışı belgeleri.',
      items: [
        'Araç ruhsatı (dowód rejestracyjny) - marka, model, VIN, yıl',
        'Pasaport + karta pobytu / yasal ikamet belgesi',
        'PESEL - varsa (yoksa broker aracılığıyla yaparız)',
        'Sürücü bilgileri: yaş, direksiyon geçmişi',
        'Alım-satım sözleşmesi veya fatura (faktura) - ikinci el alımında',
        'Satıcının güncel OC poliçesi - ikinci el alımında',
        'İndirim taşıma için: yurt dışı poliçesi + hasarsızlık belgesi (zaświadczenie o przebiegu ubezpieczenia)',
        'Yurt dışı belgesinin yeminli tercümesi - biz hazırlıyoruz'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Dobör ve poliçe yapımı için ücret. Primin kendisi sigortacıya ayrıca ödenir.',
      items: [
        { label: 'Danışmanlık ve hesaplama', value: 'Ücretsiz', note: '20 dakika · tarife karşılaştırması' },
        { label: 'OC dobör ve yapımı', value: '150 PLN\'den', note: 'PESEL\'siz broker aracılığıyla dahil' },
        { label: 'OC + AC + NNW + Assistance paketi', value: '250 PLN\'den', note: 'Anahtar teslim tam koruma' },
        { label: 'Yurt dışı indirimlerinin taşınması', value: '200 PLN\'den', note: 'Belge ve yeminli tercümeyle' }
      ],
      note: 'Belirtilen ücretler LegalWin\'in hizmet bedelidir. OC priminin kendisi (ortalama ~679 PLN/yıl, araç, yaş ve geçmişe göre fiilen 400-900 PLN) ve AC doğrudan sigortacıya ödenir. Hasarsızlık belgesinin yeminli tercümesi (~80 PLN) ayrıdır.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych, UFG i PBUK (Zorunlu Sigortalar Kanunu)',
        'OC sürekliliği yükümlülüğü - boşluk için UFG cezası (her yıl asgari ücrete göre güncellenir)',
        'UFG rücu hakkı - aynı kanunun 110. maddesi (ödenen tazminatın geri alınması)',
        'OC\'nin aracın alıcısına otomatik geçişi (31. madde) - otomatik yenileme olmadan',
        'Yeşil Kart / OC graniczne - yabancı plakalı araçlar için'
      ]
    },
    faq: [
      { q: 'OC nedir, Polonya\'da zorunlu mu?', a: 'OC (zorunlu mali sorumluluk) - başkalarına verdiğiniz zararı karşılar ve Polonya\'da her araç için kesintisiz zorunludur. AC (kasko, isteğe bağlı) - kendi aracınızın hasarı ve çalınması. NNW - sürücü ve yolcuların yaralanması. Assistance - yolda yardım, çekici, ikame araç. OC her zaman zorunludur, gerisi tercihe bağlı.' },
      { q: 'PESEL olmadan araç sigortası yaptırabilir miyim?', a: 'Evet. Online hesaplayıcılar genelde PESEL numarası ister, ama biz OC\'yi yabancıları pasaportla sigortalayan broker aracılığıyla yapıyoruz. Aracın kendisini sigortalamak için Polonya ehliyeti gerekmez - sigortalanan araçtır, sürücü değil.' },
      { q: 'Polonya\'da araç sigortası ne kadar?', a: '2025\'te ortalama OC yılda yaklaşık 679 PLN, fiili aralık 400-900 PLN. Ucuz teklifler ~158 PLN\'den; genç ve riskli sürücüler için 1 200+ PLN. Fiyat yaşa, sürüş geçmişine, hasar geçmişine, şehre, araca ve motor hacmine bağlıdır. AC (kasko) ayrı hesaplanır.' },
      { q: 'OC\'siz araç kullanmanın cezası nedir?', a: 'Binek araç için 2026 UFG cezaları: 1-3 gün OC\'siz - 1 920 PLN, 4-14 gün - 4 810 PLN, 14 günden fazla - 9 610 PLN. Ama cezadan tehlikelisi rücudur: OC\'siz kendi kusurunuzla kazaya karışırsanız UFG mağdura öder ve tüm tutarı sizden tahsil eder - ortalama yaklaşık 24 000 PLN.' },
      { q: 'İkinci el araç aldım - satıcının OC\'si bana geçer mi?', a: 'Satıcının OC poliçesi otomatik size geçer ve ödenmiş dönem sonuna kadar geçerlidir - ama otomatik YENİLENMEZ. Hemen feshedip (wypowiedzenie) kendi poliçenizi yapabilir veya bırakabilirsiniz, ama yeni OC\'yi bitiş tarihinden önce yapmak zorundasınız - yoksa boşluk ve UFG cezası. Satıcı da satışı 14 gün içinde sigortacıya bildirmek zorundadır.' },
      { q: 'Türkiye veya başka ülkeden hasarsızlık indirimimi taşıyabilir miyim?', a: 'Bazen evet - ama Polonyalı sigortacıların hepsi yurt dışı hasarsızlık geçmişini kabul etmez. Yurt dışı poliçesi ve hasarsızlık belgesi (zaświadczenie o przebiegu ubezpieczenia) yeminli tercümeyle gerekir. Hangi sigortacıların yurt dışı geçmişini kabul ettiğini biliyor ve belgeleri onlara sunuyoruz.' },
      { q: 'Yabancı plakalı araç için Yeşil Kart mı OC graniczne mi gerekir?', a: 'Yeşil Kart, geçerli Polonya OC\'nizi yurt dışı seyahatlerine genişletir. OC graniczne ise Yeşil Kartı olmayan, yabancı (örn. Ukrayna) plakalı araçlar için ayrı, kısa süreli Polonya sigortasıdır: ayda ~60 PLN\'den, en az 30 gün. Durumunuza neyin uyduğunu söyleriz.' },
      { q: 'Araç sigortası için hangi belgeler gerekir?', a: 'Araç ruhsatı (marka, model, VIN, yıl), pasaport ve ikamet belgesi, sürücü bilgileri (yaş, geçmiş). İkinci el alımında - sözleşme ve satıcının poliçesi. İndirim taşıma için - yurt dışı hasarsızlık belgesi yeminli tercümeyle (kendimiz yapıyoruz).' }
    ],
    related: ['rejestracja-pojazdu', 'wymiana-prawa-jazdy', 'przeglad-techniczny'],
    ctaTitle: 'OC\'yi uygun fiyata yapalım - PESEL olmadan bile',
    ctaSubtitle: 'Ücretsiz danışmanlık: birkaç sigortacının tarifelerini karşılaştırır, indirimlerinizle hesaplar, poliçeyi başvuru günü yaparız. Türkçe konuşuyor, yurt dışı sigorta geçmişine hâkimiz.'
  },
  uk: {
    slug: 'ubezpieczenie-oc-ac',
    group: 'auto',
    icon: 'shield',
    badge: 'OC обов’язкове · UFG · 2026',
    title: 'Автострахування OC / AC',
    subtitle: 'Оформимо поліс OC і AC навіть без PESEL - підберемо, перекладемо, укладемо',
    lead: 'OC (ubezpieczenie odpowiedzialności cywilnej) - аналог ОСЦПВ і обов’язкове в Польщі для кожного авто безперервно, без жодного дня розриву. За відсутність OC фонд UFG у 2026 році штрафує на 1 920-9 610 PLN, а при ДТП з вашої вини без поліса висуне регрес - у середньому близько 24 000 PLN. Головна проблема іноземця: онлайн-калькулятори вимагають PESEL, знижки з України та Білорусі переносять не всі страховики, а при купівлі вживаного авто поліс продавця діє лише до кінця його періоду. Ми підбираємо вигідний тариф у кількох страховиків, оформлюємо OC/AC/NNW навіть без PESEL через брокера, переносимо бонуси з-за кордону та говоримо українською.',
    facts: [
      { label: 'OC', value: 'Обов’язкове', note: 'безперервно · з дня володіння' },
      { label: 'Середнє OC', value: '~679 PLN/рік', note: 'реально 400-900 · 2025' },
      { label: 'Штраф UFG (2026)', value: 'до 9 610 PLN', note: '14+ днів без OC · легкове авто' },
      { label: 'Без PESEL', value: 'Оформимо', note: 'через брокера · за паспортом' }
    ],
    grounds: {
      title: 'Що оформлюємо і вирішуємо',
      subtitle: 'OC - обов’язковий мінімум. Решта - за ситуацією. Допомагаємо там, де іноземець упирається в PESEL, мову та закордонні знижки.',
      items: [
        { title: 'OC - обов’язкова відповідальність', desc: 'Покриває шкоду, яку ви завдали третім особам. Має бути завжди, без розриву. Підбираємо найвигідніший тариф у кількох страховиків.' },
        { title: 'AC - каско (добровільно)', desc: 'Захищає вашу машину: викрадення, ДТП з вашої вини, пошкодження. Рекомендуємо для нових і дорогих авто. Рахуємо, чи окупається у вашому випадку.' },
        { title: 'NNW та Assistance', desc: 'NNW - страхування від травм водія та пасажирів. Assistance - допомога на дорозі, евакуатор, підмінне авто. Додаємо пакетом зі знижкою.' },
        { title: 'OC без PESEL / для іноземця', desc: 'Більшість калькуляторів вимагають PESEL. Оформлюємо через брокера, який страхує іноземців за закордонним паспортом. Польські права для страхування авто не потрібні.' },
        { title: 'Перенесення знижок з України / Білорусі', desc: 'Не всі польські страховики зараховують закордонний безаварійний стаж. Знаємо, хто приймає, - потрібен закордонний поліс і довідка про безаварійний стаж (zaświadczenie o przebiegu ubezpieczenia) з присяжним перекладом.' },
        { title: 'Зелена карта і OC graniczne', desc: 'Зелена карта - продовження польського OC за кордон. OC graniczne - короткострокове польське OC для авто на іноземних номерах без зеленої карти (від ~60 PLN/міс., мінімум 30 днів).' },
        { title: 'Купівля вживаного - що з полісом', desc: 'OC продавця автоматично переходить до вас до кінця його періоду (але не продовжується). Можна розірвати будь-коли або залишити - але нове OC потрібно встигнути оформити до закінчення, інакше розрив і штраф.' }
      ]
    },
    timeline: {
      title: 'Як ми оформлюємо поліс',
      subtitle: 'Стандартно - у день звернення. З перенесенням закордонних знижок - 1-3 дні (потрібен переклад довідки).',
      steps: [
        { title: 'Консультація', duration: '20 хв', desc: 'Уточнюємо авто, стаж, статус (PESEL/без), наявність закордонної історії. Визначаємо потрібний набір: OC, AC, NNW, Assistance.' },
        { title: 'Підбір тарифу', duration: '1 година', desc: 'Порівнюємо пропозиції кількох страховиків (PZU, Warta, Link4, Allianz та ін.), рахуємо з урахуванням вашого профілю. Показуємо варіанти з цінами.' },
        { title: 'Перенесення знижок (якщо є)', duration: '1-2 дні', desc: 'Беремо закордонний поліс і довідку про безаварійний стаж, робимо присяжний переклад, подаємо страховику, який зараховує безаварійний стаж.' },
        { title: 'Оформлення поліса', duration: '30 хв', desc: 'Укладаємо договір - онлайн або через брокера, якщо немає PESEL. Поліс OC набуває чинності одразу. Оплата карткою або переказом.' },
        { title: 'Видача та нагадування', duration: 'того ж дня', desc: 'Віддаємо поліс і сертифікат. Ставимо нагадування про продовження - OC не продовжується автоматично при купівлі вживаного, розрив = штраф.' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Базовий набір. Для перенесення знижок - додатково закордонні документи.',
      items: [
        'Техпаспорт авто (dowód rejestracyjny) - марка, модель, VIN, рік',
        'Закордонний паспорт + karta pobytu / документ легального перебування',
        'PESEL - якщо є (без нього оформимо через брокера)',
        'Дані водіїв: вік, водійський стаж',
        'Договір купівлі-продажу або faktura - при купівлі вживаного',
        'Чинний поліс OC продавця - при купівлі вживаного',
        'Для перенесення знижок: закордонний поліс + довідка про безаварійний стаж (zaświadczenie o przebiegu ubezpieczenia)',
        'Присяжний переклад закордонної довідки - готуємо ми'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Гонорар за підбір та оформлення. Сама премія страховки сплачується страховику окремо.',
      items: [
        { label: 'Консультація та розрахунок', value: 'Безкоштовно', note: '20 хвилин · порівняння тарифів' },
        { label: 'Підбір та оформлення OC', value: 'від 150 PLN', note: 'У т.ч. без PESEL через брокера' },
        { label: 'Пакет OC + AC + NNW + Assistance', value: 'від 250 PLN', note: 'Повний захист під ключ' },
        { label: 'Перенесення закордонних знижок', value: 'від 200 PLN', note: 'З довідкою та присяжним перекладом' }
      ],
      note: 'Зазначено гонорари LegalWin за послугу. Сама премія OC (у середньому ~679 PLN/рік, реально 400-900 PLN залежно від авто, віку та стажу) та AC сплачуються безпосередньо страховику. Присяжний переклад довідки про безаварійний стаж (~80 PLN) - окремо.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych, UFG i PBUK',
        'Obowiązek ciągłości OC - kara UFG za brak (rebasowana corocznie wg płacy minimalnej)',
        'Regres UFG - art. 110 ww. ustawy (zwrot wypłaconego odszkodowania)',
        'Automatyczne przejście OC na nabywcę pojazdu (art. 31) - bez automatycznego wznowienia',
        'Zielona Karta / OC graniczne - dla pojazdów na zagranicznych tablicach'
      ]
    },
    faq: [
      { q: 'Скільки коштує OC у Польщі для українця?', a: 'Середнє OC у 2025 - близько 679 PLN на рік, реальний розкид 400-900 PLN. Дешеві пропозиції - від ~158 PLN, для молодих і ризикових водіїв - 1 200+ PLN. Ціна залежить від віку, стажу, історії аварій, міста, авто та об’єму двигуна. AC (каско) рахується окремо.' },
      { q: 'Чи можна оформити OC без PESEL?', a: 'Так. Онлайн-калькулятори зазвичай вимагають PESEL, але ми оформлюємо OC через брокера, який страхує іноземців за закордонним паспортом. Польські водійські права для страхування самого авто не потрібні - страхується машина, а не водій.' },
      { q: 'Зелена карта чи OC graniczne для авто на українських номерах?', a: 'Зелена карта - це розширення чинного польського OC на поїздки за кордон. OC graniczne - окреме короткострокове польське страхування для авто на іноземних (наприклад українських) номерах, у якого немає зеленої карти: від ~60 PLN на місяць, мінімум 30 днів. Підкажемо, що підходить у вашому випадку.' },
      { q: 'Чи можна перенести знижки за безаварійну їзду з України?', a: 'Іноді так - але не всі польські страховики зараховують закордонний безаварійний стаж. Потрібен закордонний поліс і довідка про безаварійний стаж (zaświadczenie o przebiegu ubezpieczenia) з присяжним перекладом. Ми знаємо, які страховики приймають закордонну історію, і подаємо документи їм.' },
      { q: 'Який штраф UFG за відсутність OC у 2026 році?', a: 'Штрафи UFG для легкового авто у 2026 році: 1-3 дні без OC - 1 920 PLN, 4-14 днів - 4 810 PLN, понад 14 днів - 9 610 PLN. Але небезпечніший за штраф регрес: якщо без OC ви потрапили в ДТП з власної вини, UFG виплатить постраждалому і стягне всю суму з вас - у середньому близько 24 000 PLN.' },
      { q: 'Купив вживане авто - що з OC продавця?', a: 'Поліс OC продавця автоматично переходить до вас і діє до кінця оплаченого періоду - але НЕ продовжується автоматично. Ви можете розірвати його одразу (wypowiedzenie) та оформити свій або залишити, але обов’язково укласти новий до дати закінчення - інакше розрив і штраф UFG. Продавець, своєю чергою, має повідомити страховика про продаж протягом 14 днів.' },
      { q: 'У чому різниця між OC, AC, NNW та Assistance?', a: 'OC (обов’язкове) - покриває шкоду, яку ви завдали іншим. AC (каско, добровільно) - пошкодження та викрадення вашого авто. NNW - травми водія та пасажирів. Assistance - допомога на дорозі, евакуатор, підмінне авто. OC обов’язкове завжди, решта - за бажанням.' },
      { q: 'Які документи потрібні для оформлення OC?', a: 'Техпаспорт авто (марка, модель, VIN, рік), закордонний паспорт і документ перебування, дані водіїв (вік, стаж). При купівлі вживаного - договір і поліс продавця. Для перенесення знижок - закордонна довідка про безаварійний стаж з присяжним перекладом (робимо самі).' }
    ],
    related: ['rejestracja-pojazdu', 'wymiana-prawa-jazdy', 'przeglad-techniczny'],
    ctaTitle: 'Оформимо OC вигідно - навіть без PESEL',
    ctaSubtitle: 'Безкоштовна консультація: порівняємо тарифи кількох страховиків, порахуємо з вашими знижками, оформимо поліс у день звернення. Говоримо українською, розбираємося в закордонній історії страхування.'
  }
};

export default ubezpieczenieOcAc;
