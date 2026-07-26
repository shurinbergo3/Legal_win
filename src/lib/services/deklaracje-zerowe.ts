import type { ServiceEntry } from './types';

const deklaracjeZerowe: ServiceEntry = {
  ru: {
    slug: 'deklaracje-zerowe',
    group: 'business',
    icon: 'scale',
    badge: 'JPK_V7 · CIT-8 · sprawozdanie',
    title: 'Нулевые декларации и отчёты',
    subtitle: 'Отправка нулевой отчётности за спящую фирму: JPK_V7, PIT, CIT-8 и sprawozdanie finansowe',
    lead: 'Фирма без оборотов - это не фирма без обязанностей. Пока JDG или Sp. z o.o. числится в реестре, отчёты идут по расписанию: активный плательщик VAT сдаёт JPK_V7 до 25 числа даже с нулями, Sp. z o.o. сдаёт CIT-8 до 31 марта независимо от того, был ли хоть один счёт, а sprawozdanie finansowe утверждается до 30 июня и подаётся в KRS в течение 15 дней после утверждения. Цена молчания в 2026 году: за wykroczenie skarbowe штраф от 480,60 до 96 120 PLN (это 1/10-20 минимальных зарплат по 4 806 PLN), mandat karny на месте - до 9 612 PLN. А если не подавать JPK_V7 три месяца подряд, налоговая просто вычеркнет фирму из реестра VAT - и контрагенты узнают об этом раньше вас. Берём нулевую отчётность на себя: разово или за весь год, включая просроченную с czynnym żalem.',
    facts: [
      { label: 'JPK_V7 нулевой', value: 'до 25 числа', note: 'месячно или квартально · обязателен даже с нулями' },
      { label: 'CIT-8 + sprawozdanie', value: '31 марта', note: 'sprawozdanie в KRS - до 15 июля' },
      { label: 'Штраф за неподачу', value: '480-96 120 PLN', note: 'wykroczenie skarbowe · mandat до 9 612 PLN' },
      { label: 'Наш гонорар', value: 'от 800 PLN', note: 'разовая оплата за отчёт' }
    ],
    grounds: {
      title: 'Кто обязан сдавать нулевую отчётность',
      subtitle: 'Обязанность зависит не от оборота, а от того, что вы зарегистрировали и не закрыли.',
      items: [
        { title: 'Активный плательщик VAT без оборотов', desc: 'Если вы czynny podatnik VAT, JPK_V7M (месячный) или JPK_V7K (квартальный) сдаётся до 25 числа даже при полностью нулевом месяце. Это самая частая ошибка новых предпринимателей: зарегистрировали VAT-R «на будущее», работа не пошла, декларации никто не отправлял.' },
        { title: 'Sp. z o.o. без деятельности', desc: 'Спящая Sp. z o.o. обязана сдать CIT-8 за каждый налоговый год - даже если не было ни одной операции. Освобождения по нулевому обороту в CIT нет. Плюс годовой отчёт: sprawozdanie finansowe составляется до 31 марта, утверждается zgromadzeniem wspólników до 30 июня, подаётся в KRS в течение 15 дней после утверждения.' },
        { title: 'Sp. z o.o. в zawieszeniu', desc: 'Здесь есть реальное послабление, о котором мало кто знает: по art. 12 ust. 3b ustawy o rachunkowości можно не закрывать книги и не составлять sprawozdanie, если деятельность была приостановлена весь финансовый год И не было ни одной операции с имущественными или финансовыми последствиями (включая амортизацию). CIT-8 при этом сдавать всё равно нужно. Проверяем оба условия по вашим книгам - если проходят, экономите на годовом отчёте.' },
        { title: 'JDG в zawieszeniu', desc: 'Приостановленная JDG не сдаёт JPK_V7 и не платит ZUS - и с 2026 года приостановить её можно бессрочно, лимит 24 месяца для CEIDG отменён (минимум - 30 дней). Но годовой PIT за период приостановки подать всё равно нужно, до 30 апреля. И если в период zawieszenia был импорт услуг или WNT, JPK_V7 возвращается.' },
        { title: 'JDG активна, но без дохода', desc: 'Худший из вариантов: сдавать нужно всё - JPK_V7 (если VAT), ZUS DRA до 20 числа, взносы платить по общим правилам, годовой PIT-36, PIT-36L или PIT-28 до 30 апреля. Если работы нет и не планируется, приостановка или закрытие обычно дешевле, чем платить ZUS «в никуда». Считаем оба варианта на консультации.' },
        { title: 'Просроченная отчётность и czynny żal', desc: 'Если сроки прошли, ситуация ещё поправима: подаём отчёты вместе с czynnym żalem - добровольным заявлением в налоговую до того, как она сама обнаружила нарушение. При правильно оформленном czynnym żalem наказание не применяется. Работает только до начала контрольных действий, поэтому тянуть смысла нет.' }
      ]
    },
    timeline: {
      title: 'Как мы это делаем',
      subtitle: 'Для одного нулевого отчёта - 1-2 рабочих дня. Для годового пакета Sp. z o.o. с sprawozdaniem - 5-10 дней.',
      steps: [
        { title: 'Аудит обязанностей', duration: '30-60 мин', desc: 'Смотрим форму (JDG или Sp. z o.o.), статус VAT, налоговый режим, состояние в CEIDG/KRS. Составляем точный список: какие отчёты вы обязаны сдать, за какие периоды, и что уже просрочено. Бесплатно.' },
        { title: 'Доступ и полномочия', duration: '1-3 дня', desc: 'Оформляем pełnomocnictwo UPL-1 для электронной подачи в налоговую и PPS-1/ZUS-PEL при необходимости. Без этого мы не сможем подписать отчёт от вашего имени. Подписывается через ePUAP, podpis kwalifikowany или бумагой.' },
        { title: 'Подготовка отчётов', duration: '1-7 дней', desc: 'Готовим нулевой JPK_V7, декларации PIT/CIT, при необходимости sprawozdanie finansowe в структурированном формате XML для e-KRS. Для Sp. z o.o. готовим ещё uchwały zgromadzenia о утверждении отчёта и распределении результата.' },
        { title: 'Отправка и UPO', duration: '1 день', desc: 'Отправляем в e-Deklaracje / KAS и e-KRS. Получаем UPO - Urzędowe Poświadczenie Odbioru, электронную квитанцию с точной датой и временем. Это ваше доказательство, что отчёт сдан в срок. Присылаем вам PDF.' },
        { title: 'Календарь на год вперёд', duration: 'постоянно', desc: 'Ставим напоминания по всем вашим срокам: 20 число - ZUS, 25 - JPK_V7, 31 марта - CIT-8, 30 апреля - PIT, 30 июня - утверждение sprawozdania, 15 июля - подача в KRS. Пишем заранее, а не после дедлайна.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Для нулевых отчётов пакет минимальный - главное, доступ и подтверждение, что операций действительно не было.',
      items: [
        'NIP и выписка из CEIDG или KRS',
        'Pełnomocnictwo UPL-1 (готовим шаблон, вы подписываете)',
        'Выписки с фирменного счёта за отчётный период - подтверждают отсутствие операций',
        'Предыдущие сданные декларации, если были',
        'Для Sp. z o.o.: umowa spółki, данные о капитале, список wspólników',
        'Решение о zawieszeniu деятельности, если было',
        'Данные о налоговом режиме: VAT / ryczałt / KPiR / księgi handlowe'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Разовая оплата за отчёт. Годовые пакеты - дешевле, чем сумма разовых.',
      items: [
        { label: 'Консультация и аудит обязанностей', value: 'Бесплатно', note: '30-60 минут · список ваших отчётов' },
        { label: 'Нулевая декларация (разово)', value: 'от 800 PLN', note: 'JPK_V7 / PIT / CIT-8 · один отчёт' },
        { label: 'CIT-8 + sprawozdanie finansowe', value: 'от 1 500 PLN', note: 'Sp. z o.o. без деятельности · с подачей в KRS' },
        { label: 'Годовой пакет нулевой отчётности', value: 'от 2 500 PLN', note: 'Все обязательные отчёты за год' },
        { label: 'Просроченные отчёты + czynny żal', value: 'от 1 200 PLN', note: 'Восстановление за прошлые периоды' }
      ],
      note: 'Госпошлина за pełnomocnictwo UPL-1 не взимается. Подача sprawozdania в e-KRS - бесплатно. Если у фирмы накопились задолженности по ZUS или US, реструктуризация и rozłożenie na raty считаются отдельно. Штрафы и пени платит налогоплательщик, но при czynnym żalem в срок их обычно удаётся избежать полностью.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa o VAT - art. 99 (obowiązek składania deklaracji), art. 96 ust. 9a pkt 2 (wykreślenie z rejestru VAT po 3 miesiącach)',
        'Ustawa o CIT - art. 27 ust. 1 (CIT-8 w terminie 3 miesięcy od końca roku podatkowego)',
        'Ustawa o rachunkowości - art. 52 (sporządzenie), art. 53 (zatwierdzenie), art. 69 (złożenie do KRS)',
        'Ustawa o rachunkowości - art. 12 ust. 3b (brak obowiązku zamknięcia ksiąg przy zawieszeniu na cały rok)',
        'Kodeks karny skarbowy - art. 56 § 4 (niezłożenie deklaracji), art. 54, art. 80 § 1, art. 16 (czynny żal)',
        'Ustawa Prawo przedsiębiorców - zawieszenie działalności w CEIDG bez limitu 24 miesięcy',
        'Ustawa o KSeF - obowiązek odbioru e-faktur od 1 lutego 2026 r., wystawiania od 1 kwietnia 2026 r.'
      ]
    },
    faq: [
      { q: 'Нужно ли сдавать JPK_V7, если оборотов вообще не было?', a: 'Да, если вы зарегистрированы как czynny podatnik VAT. Обязанность возникает из статуса, а не из оборота: пока вы в реестре VAT, декларация идёт до 25 числа каждый месяц (JPK_V7M) или квартал (JPK_V7K), просто с нулями во всех полях. Единственное исключение - период официального zawieszenia деятельности, и то при условии, что не было импорта услуг или внутрисоюзных покупок. Если VAT вам не нужен, правильное решение - не молчать, а сняться с регистрации через VAT-Z.' },
      { q: 'Что будет, если не сдать нулевую декларацию?', a: 'Три уровня последствий. Первый: wykroczenie skarbowe по art. 56 § 4 KKS - штраф от 1/10 до 20-кратной минимальной зарплаты, то есть в 2026 году от 480,60 до 96 120 PLN; на месте налоговая может выписать mandat karny до 9 612 PLN. Второй: при неподаче деклараций за 3 месяца подряд налоговая вычёркивает фирму из реестра VAT по art. 96 ust. 9a - контрагенты видят это на białej liście и перестают с вами работать. Третий: если из-за неподачи бюджет недополучил больше 24 030 PLN, дело переквалифицируется в przestępstwo skarbowe с грzywną до 720 stawek dziennych.' },
      { q: 'Обязана ли спящая Sp. z o.o. сдавать CIT-8 и sprawozdanie finansowe?', a: 'CIT-8 - обязательно и без исключений: art. 27 ustawy o CIT требует декларацию за каждый налоговый год, даже с нулями, в течение 3 месяцев после его окончания. Со sprawozdaniem finansowym есть лазейка: по art. 12 ust. 3b ustawy o rachunkowości книги можно не закрывать, если деятельность была приостановлена весь финансовый год и не было ни одной операции с имущественными или финансовыми последствиями - включая амортизационные отчисления. Оба условия должны выполняться одновременно. Если проходят - sprawozdanie не составляется и в KRS не подаётся. Проверяем это по вашим книгам, а не на глаз.' },
      { q: 'Сколько стоит отправка нулевой декларации?', a: 'От 800 PLN за один отчёт - разовая оплата, никакой подписки. CIT-8 вместе со sprawozdaniem finansowym и подачей в e-KRS - от 1 500 PLN, потому что там ещё uchwały zgromadzenia и структурированный XML. Годовой пакет для спящей фирмы (все обязательные отчёты за год) - от 2 500 PLN, это дешевле, чем набирать по одному. Восстановление просроченных отчётов с czynnym żalem - от 1 200 PLN. Консультация и составление списка ваших обязанностей - бесплатно.' },
      { q: 'Можно ли исправить ситуацию, если отчёты просрочены на год-два?', a: 'Да, и лучше делать это самому, а не ждать письма из налоговой. Механизм - czynny żal по art. 16 KKS: добровольное заявление о нарушении плюс подача самих отчётов и уплата недоимки. При правильно оформленном czynnym żalem наказание не применяется вообще. Ключевое условие - подать его до того, как налоговая начала проверку или уже знает о нарушении. После начала контрольных действий czynny żal не работает, остаётся торговаться за размер штрафа.' },
      { q: 'Что выгоднее для фирмы без работы: сдавать нули, приостановить или закрыть?', a: 'Считается за 15 минут. Для JDG: если работы нет надолго, zawieszenie почти всегда выгоднее - с 2026 года его можно оформить бессрочно, ZUS и JPK_V7 отпадают, остаётся только годовой PIT. Для Sp. z o.o. приостановка спасает от sprawozdania (при выполнении условий art. 12 ust. 3b), но CIT-8 остаётся, а zawieszenie для spółek в KRS ограничено 24 месяцами. Если бизнес-плана нет вообще - дешевле закрыть: ликвидация Sp. z o.o. стоит один раз, а нулевая отчётность капает годами.' },
      { q: 'Касается ли KSeF фирму без оборотов?', a: 'Касается частично. С 1 февраля 2026 года все налогоплательщики обязаны быть готовы принимать структурированные e-фактуры через KSeF - даже если сами ничего не выставляют. Обязанность выставлять фактуры в KSeF начинается с 1 февраля 2026 для крупных (оборот за 2024 выше 200 млн PLN) и с 1 апреля 2026 для остальных; мелкие предприниматели, выставляющие менее 10 тыс. PLN брутто фактур в месяц, подключаются с 1 января 2027. Практический вывод для спящей фирмы: доступы и полномочия в KSeF стоит настроить заранее, чтобы не разбираться с этим в момент первой сделки.' },
      { q: 'Нужно ли сдавать ZUS DRA, если дохода нет?', a: 'Если JDG активна - да, отчёт и взносы идут до 20 числа следующего месяца, нулевого дохода закон не замечает. После реформы składki zdrowotnej база считается от дохода, поэтому DRA фактически подаётся каждый месяц. Если JDG приостановлена, вы снимаетесь со социального страхования и ни DRA, ни взносы не нужны - но и стажа не набегает, и NFZ не покрывает. Для Sp. z o.o. без сотрудников обязанностей по ZUS обычно нет, кроме случая единственного wspólnika, который приравнивается к самозанятому.' },
      { q: 'Можете ли вы вести отчётность, если бухгалтер уже был и всё запутал?', a: 'Да, это стандартная ситуация. Начинаем с восстановления картины: поднимаем историю поданных отчётов через доступ к e-Urząd Skarbowy, сверяем с книгами и выписками, находим пропущенные периоды и расхождения. Дальше два трека: сдаём просроченное с czynnym żalem и параллельно правим корректировками то, что было подано с ошибками. Только после этого фирму можно спокойно закрывать, продавать или снова запускать.' }
    ],
    related: ['podatki-ksiegowosc', 'jdg', 'likwidacja-sprzedaz'],
    ctaTitle: 'Сдадим нулевую отчётность за вас',
    ctaSubtitle: 'Напишите форму фирмы и с какого месяца не подавались отчёты - за 30 минут составим точный список обязанностей, посчитаем риск штрафа и скажем, что выгоднее: сдавать нули, приостановить или закрыть.'
  },
  pl: {
    slug: 'deklaracje-zerowe',
    group: 'business',
    icon: 'scale',
    badge: 'JPK_V7 · CIT-8 · sprawozdanie',
    title: 'Deklaracje i raporty zerowe',
    subtitle: 'Wysyłka zerowej sprawozdawczości za nieaktywną firmę: JPK_V7, PIT, CIT-8 i sprawozdanie finansowe',
    lead: 'Firma bez obrotów to nie firma bez obowiązków. Dopóki JDG albo Sp. z o.o. jest w rejestrze, terminy biegną: czynny podatnik VAT składa JPK_V7 do 25. dnia miesiąca nawet z zerami, Sp. z o.o. składa CIT-8 do 31 marca niezależnie od tego, czy wystawiła choć jedną fakturę, a sprawozdanie finansowe jest zatwierdzane do 30 czerwca i składane do KRS w ciągu 15 dni od zatwierdzenia. Cena milczenia w 2026 r.: za wykroczenie skarbowe grzywna od 480,60 do 96 120 PLN (od 1/10 do 20-krotności minimalnego wynagrodzenia 4 806 PLN), mandat karny na miejscu - do 9 612 PLN. A jeśli nie złożysz JPK_V7 za trzy kolejne miesiące, urząd wykreśli firmę z rejestru VAT - i kontrahenci dowiedzą się o tym szybciej niż Ty. Bierzemy zerową sprawozdawczość na siebie: jednorazowo albo za cały rok, łącznie z zaległą i czynnym żalem.',
    facts: [
      { label: 'JPK_V7 zerowy', value: 'do 25. dnia', note: 'miesięcznie lub kwartalnie · obowiązkowy nawet z zerami' },
      { label: 'CIT-8 + sprawozdanie', value: '31 marca', note: 'sprawozdanie do KRS - do 15 lipca' },
      { label: 'Grzywna za brak', value: '480-96 120 PLN', note: 'wykroczenie skarbowe · mandat do 9 612 PLN' },
      { label: 'Nasze honorarium', value: 'od 800 PLN', note: 'płatność jednorazowa za raport' }
    ],
    grounds: {
      title: 'Kto musi składać deklaracje zerowe',
      subtitle: 'Obowiązek wynika nie z obrotu, a z tego, co zarejestrowałeś i czego nie zamknąłeś.',
      items: [
        { title: 'Czynny podatnik VAT bez obrotów', desc: 'Jeśli jesteś czynnym podatnikiem VAT, JPK_V7M (miesięczny) lub JPK_V7K (kwartalny) składasz do 25. dnia nawet przy całkowicie zerowym miesiącu. To najczęstszy błąd nowych przedsiębiorców: rejestracja VAT-R "na przyszłość", działalność nie ruszyła, deklaracji nikt nie wysyłał.' },
        { title: 'Sp. z o.o. bez działalności', desc: 'Nieaktywna Sp. z o.o. musi złożyć CIT-8 za każdy rok podatkowy - także gdy nie było ani jednej operacji. Zwolnienia z tytułu zerowego obrotu w CIT nie ma. Do tego sprawozdanie finansowe: sporządzenie do 31 marca, zatwierdzenie przez zgromadzenie wspólników do 30 czerwca, złożenie do KRS w ciągu 15 dni od zatwierdzenia.' },
        { title: 'Sp. z o.o. w zawieszeniu', desc: 'Tu jest realne ułatwienie, o którym mało kto wie: zgodnie z art. 12 ust. 3b ustawy o rachunkowości można nie zamykać ksiąg i nie sporządzać sprawozdania, jeżeli działalność pozostawała zawieszona przez cały rok obrotowy I nie wystąpiło żadne zdarzenie wywołujące skutki majątkowe lub finansowe - w tym odpisy amortyzacyjne. CIT-8 trzeba jednak złożyć i tak. Sprawdzamy oba warunki na Twoich księgach - jeśli są spełnione, oszczędzasz na rocznym sprawozdaniu.' },
        { title: 'JDG w zawieszeniu', desc: 'Zawieszona JDG nie składa JPK_V7 i nie płaci ZUS - a od 2026 r. można ją zawiesić bezterminowo, limit 24 miesięcy dla CEIDG został zniesiony (minimum to 30 dni). Roczny PIT za okres zawieszenia trzeba jednak złożyć, do 30 kwietnia. A jeśli w okresie zawieszenia wystąpił import usług albo WNT, obowiązek JPK_V7 wraca.' },
        { title: 'JDG aktywna, ale bez dochodu', desc: 'Najgorszy wariant: składasz wszystko - JPK_V7 (jeśli VAT), ZUS DRA do 20. dnia, składki płacisz na zasadach ogólnych, roczny PIT-36, PIT-36L albo PIT-28 do 30 kwietnia. Jeśli pracy nie ma i nie zapowiada się, zawieszenie albo zamknięcie zwykle wychodzi taniej niż płacenie ZUS "w powietrze". Liczymy oba scenariusze na konsultacji.' },
        { title: 'Zaległa sprawozdawczość i czynny żal', desc: 'Jeśli terminy minęły, sytuacja jest do naprawienia: składamy raporty razem z czynnym żalem - dobrowolnym zawiadomieniem do urzędu, zanim sam wykryje naruszenie. Przy poprawnie złożonym czynnym żalu kara nie jest wymierzana. Działa tylko przed rozpoczęciem czynności kontrolnych, więc zwlekanie nie ma sensu.' }
      ]
    },
    timeline: {
      title: 'Jak to robimy',
      subtitle: 'Jedna deklaracja zerowa - 1-2 dni roboczych. Roczny pakiet Sp. z o.o. ze sprawozdaniem - 5-10 dni.',
      steps: [
        { title: 'Audyt obowiązków', duration: '30-60 min', desc: 'Sprawdzamy formę (JDG czy Sp. z o.o.), status VAT, reżim podatkowy, stan w CEIDG/KRS. Układamy precyzyjną listę: jakie raporty musisz złożyć, za jakie okresy i co już jest zaległe. Bezpłatnie.' },
        { title: 'Dostępy i pełnomocnictwa', duration: '1-3 dni', desc: 'Przygotowujemy pełnomocnictwo UPL-1 do składania e-deklaracji oraz PPS-1/ZUS-PEL, jeśli są potrzebne. Bez tego nie podpiszemy raportu w Twoim imieniu. Podpis przez ePUAP, podpis kwalifikowany albo papierowo.' },
        { title: 'Przygotowanie raportów', duration: '1-7 dni', desc: 'Przygotowujemy zerowy JPK_V7, deklaracje PIT/CIT, a w razie potrzeby sprawozdanie finansowe w strukturze XML dla e-KRS. Dla Sp. z o.o. dodatkowo uchwały zgromadzenia o zatwierdzeniu sprawozdania i podziale wyniku.' },
        { title: 'Wysyłka i UPO', duration: '1 dzień', desc: 'Wysyłamy do e-Deklaracji / KAS oraz e-KRS. Odbieramy UPO - Urzędowe Poświadczenie Odbioru z dokładną datą i godziną. To Twój dowód, że raport złożono w terminie. Przekazujemy PDF.' },
        { title: 'Kalendarz na rok do przodu', duration: 'na bieżąco', desc: 'Ustawiamy przypomnienia do wszystkich Twoich terminów: 20. - ZUS, 25. - JPK_V7, 31 marca - CIT-8, 30 kwietnia - PIT, 30 czerwca - zatwierdzenie sprawozdania, 15 lipca - złożenie do KRS. Piszemy przed terminem, nie po.' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy od Ciebie',
      subtitle: 'Do raportów zerowych pakiet jest minimalny - kluczowe są dostępy i potwierdzenie, że operacji faktycznie nie było.',
      items: [
        'NIP i wydruk z CEIDG albo KRS',
        'Pełnomocnictwo UPL-1 (przygotowujemy wzór, Ty podpisujesz)',
        'Wyciągi z konta firmowego za okres - potwierdzają brak operacji',
        'Wcześniej złożone deklaracje, jeśli były',
        'Dla Sp. z o.o.: umowa spółki, dane o kapitale, lista wspólników',
        'Wpis o zawieszeniu działalności, jeśli miało miejsce',
        'Dane o reżimie podatkowym: VAT / ryczałt / KPiR / księgi handlowe'
      ]
    },
    pricing: {
      title: 'Koszt obsługi',
      subtitle: 'Płatność jednorazowa za raport. Pakiety roczne są tańsze niż suma raportów pojedynczych.',
      items: [
        { label: 'Konsultacja i audyt obowiązków', value: 'Gratis', note: '30-60 min · lista Twoich raportów' },
        { label: 'Deklaracja zerowa (jednorazowo)', value: 'od 800 PLN', note: 'JPK_V7 / PIT / CIT-8 · jeden raport' },
        { label: 'CIT-8 + sprawozdanie finansowe', value: 'od 1 500 PLN', note: 'Sp. z o.o. bez działalności · ze złożeniem do KRS' },
        { label: 'Roczny pakiet raportów zerowych', value: 'od 2 500 PLN', note: 'Wszystkie obowiązkowe raporty za rok' },
        { label: 'Zaległe raporty + czynny żal', value: 'od 1 200 PLN', note: 'Nadrobienie okresów przeszłych' }
      ],
      note: 'Pełnomocnictwo UPL-1 jest wolne od opłaty skarbowej. Złożenie sprawozdania w e-KRS jest bezpłatne. Jeśli firma ma zaległości w ZUS lub US, restrukturyzacja i rozłożenie na raty liczone są osobno. Grzywny i odsetki płaci podatnik, ale przy czynnym żalu złożonym w czasie zwykle udaje się ich uniknąć w całości.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa o VAT - art. 99 (obowiązek składania deklaracji), art. 96 ust. 9a pkt 2 (wykreślenie z rejestru VAT)',
        'Ustawa o CIT - art. 27 ust. 1 (CIT-8 w terminie 3 miesięcy od końca roku podatkowego)',
        'Ustawa o rachunkowości - art. 52, art. 53, art. 69 (sporządzenie, zatwierdzenie, złożenie do KRS)',
        'Ustawa o rachunkowości - art. 12 ust. 3b (brak obowiązku zamknięcia ksiąg przy zawieszeniu na cały rok)',
        'Kodeks karny skarbowy - art. 56 § 4, art. 54, art. 80 § 1, art. 16 (czynny żal)',
        'Ustawa Prawo przedsiębiorców - zawieszenie działalności w CEIDG bez limitu 24 miesięcy',
        'Ustawa o KSeF - obowiązek odbioru e-faktur od 1 lutego 2026 r., wystawiania od 1 kwietnia 2026 r.'
      ]
    },
    faq: [
      { q: 'Czy trzeba składać JPK_V7, jeśli obrotów w ogóle nie było?', a: 'Tak, jeśli jesteś zarejestrowany jako czynny podatnik VAT. Obowiązek wynika ze statusu, nie z obrotu: dopóki jesteś w rejestrze VAT, deklaracja idzie do 25. dnia każdego miesiąca (JPK_V7M) albo kwartału (JPK_V7K), po prostu z zerami we wszystkich polach. Jedyny wyjątek to okres formalnego zawieszenia działalności, i to pod warunkiem braku importu usług oraz WNT. Jeśli VAT nie jest Ci potrzebny, właściwym rozwiązaniem jest nie milczenie, a wyrejestrowanie przez VAT-Z.' },
      { q: 'Co grozi za niezłożenie deklaracji zerowej?', a: 'Trzy poziomy konsekwencji. Pierwszy: wykroczenie skarbowe z art. 56 § 4 KKS - grzywna od 1/10 do 20-krotności minimalnego wynagrodzenia, czyli w 2026 r. od 480,60 do 96 120 PLN; na miejscu urząd może wystawić mandat karny do 9 612 PLN. Drugi: przy braku deklaracji za 3 kolejne miesiące urząd wykreśla firmę z rejestru VAT na podstawie art. 96 ust. 9a - kontrahenci widzą to na białej liście i przestają współpracować. Trzeci: jeśli uszczuplenie przekroczyło 24 030 PLN, czyn kwalifikuje się jako przestępstwo skarbowe z grzywną do 720 stawek dziennych.' },
      { q: 'Czy zawieszona Sp. z o.o. musi składać CIT-8 i sprawozdanie finansowe?', a: 'CIT-8 - obowiązkowo i bez wyjątków: art. 27 ustawy o CIT wymaga deklaracji za każdy rok podatkowy, także zerowej, w terminie 3 miesięcy od jego zakończenia. Ze sprawozdaniem finansowym jest furtka: zgodnie z art. 12 ust. 3b ustawy o rachunkowości ksiąg można nie zamykać, jeżeli działalność pozostawała zawieszona przez cały rok obrotowy i nie wystąpiło żadne zdarzenie wywołujące skutki majątkowe lub finansowe - w tym odpisy amortyzacyjne. Oba warunki muszą być spełnione łącznie. Jeśli tak jest, sprawozdania nie sporządza się i nie składa do KRS. Sprawdzamy to na księgach, nie na oko.' },
      { q: 'Ile kosztuje wysłanie deklaracji zerowej?', a: 'Od 800 PLN za jeden raport - płatność jednorazowa, bez abonamentu. CIT-8 razem ze sprawozdaniem finansowym i złożeniem w e-KRS - od 1 500 PLN, bo dochodzą uchwały zgromadzenia i struktura XML. Roczny pakiet dla nieaktywnej firmy (wszystkie obowiązkowe raporty za rok) - od 2 500 PLN, taniej niż zbierać pojedynczo. Nadrobienie zaległych raportów z czynnym żalem - od 1 200 PLN. Konsultacja i lista Twoich obowiązków - bezpłatnie.' },
      { q: 'Czy da się naprawić sytuację, jeśli raporty są zaległe od roku lub dwóch?', a: 'Da się, i lepiej zrobić to samemu niż czekać na pismo z urzędu. Mechanizm to czynny żal z art. 16 KKS: dobrowolne zawiadomienie o naruszeniu plus złożenie samych raportów i zapłata zaległości. Przy poprawnie złożonym czynnym żalu kara nie jest wymierzana w ogóle. Warunek kluczowy: złożyć go przed rozpoczęciem kontroli albo zanim urząd sam dowie się o naruszeniu. Po rozpoczęciu czynności kontrolnych czynny żal już nie działa - zostaje negocjowanie wysokości grzywny.' },
      { q: 'Co się bardziej opłaca dla firmy bez pracy: zera, zawieszenie czy zamknięcie?', a: 'Liczy się w 15 minut. Dla JDG: jeśli pracy nie ma na dłużej, zawieszenie prawie zawsze wygrywa - od 2026 r. można je zrobić bezterminowo, ZUS i JPK_V7 odpadają, zostaje tylko roczny PIT. Dla Sp. z o.o. zawieszenie ratuje przed sprawozdaniem (przy spełnieniu warunków art. 12 ust. 3b), ale CIT-8 zostaje, a zawieszenie spółek w KRS jest ograniczone do 24 miesięcy. Jeśli planu biznesowego nie ma wcale - taniej zamknąć: likwidacja Sp. z o.o. kosztuje raz, a zerowa sprawozdawczość kapie latami.' },
      { q: 'Czy KSeF dotyczy firmy bez obrotów?', a: 'Dotyczy częściowo. Od 1 lutego 2026 r. wszyscy podatnicy muszą być gotowi na odbiór faktur ustrukturyzowanych w KSeF - nawet jeśli sami nic nie wystawiają. Obowiązek wystawiania startuje 1 lutego 2026 dla dużych (sprzedaż za 2024 powyżej 200 mln PLN) i 1 kwietnia 2026 dla pozostałych; drobni przedsiębiorcy, wystawiający miesięcznie faktury poniżej 10 tys. PLN brutto, wchodzą od 1 stycznia 2027. Praktyczny wniosek dla nieaktywnej firmy: dostępy i uprawnienia w KSeF warto ustawić zawczasu, żeby nie robić tego w dniu pierwszej transakcji.' },
      { q: 'Czy trzeba składać ZUS DRA, jeśli nie ma dochodu?', a: 'Jeśli JDG jest aktywna - tak, raport i składki idą do 20. dnia następnego miesiąca, a zerowego dochodu ustawa nie zauważa. Po reformie składki zdrowotnej podstawa liczona jest od dochodu, więc DRA składa się faktycznie co miesiąc. Jeśli JDG jest zawieszona, wyrejestrowujesz się z ubezpieczeń społecznych i ani DRA, ani składek nie ma - ale nie rośnie też staż, a NFZ nie obejmuje. Dla Sp. z o.o. bez pracowników obowiązków w ZUS zwykle nie ma, poza sytuacją jedynego wspólnika, którego traktuje się jak osobę prowadzącą działalność.' },
      { q: 'Czy przejmiecie księgi, jeśli poprzedni księgowy wszystko zaplątał?', a: 'Tak, to standardowa sytuacja. Zaczynamy od odtworzenia obrazu: pobieramy historię złożonych raportów z e-Urzędu Skarbowego, zestawiamy z księgami i wyciągami, wyłapujemy brakujące okresy i rozbieżności. Dalej dwa tory: składamy zaległe z czynnym żalem i równolegle korygujemy to, co złożono z błędami. Dopiero po tym firmę można spokojnie zamknąć, sprzedać albo uruchomić ponownie.' }
    ],
    related: ['podatki-ksiegowosc', 'jdg', 'likwidacja-sprzedaz'],
    ctaTitle: 'Złożymy zerową sprawozdawczość za Ciebie',
    ctaSubtitle: 'Napisz formę firmy i od którego miesiąca nie składano raportów - w 30 minut ułożymy precyzyjną listę obowiązków, policzymy ryzyko grzywny i powiemy, co się bardziej opłaca: składać zera, zawiesić czy zamknąć.'
  },
  en: {
    slug: 'deklaracje-zerowe',
    group: 'business',
    icon: 'scale',
    badge: 'JPK_V7 · CIT-8 · financial statements',
    title: 'Nil returns and dormant-company filings',
    subtitle: 'Filing zero-activity reports for a dormant business: JPK_V7, PIT, CIT-8 and annual financial statements',
    lead: 'A company with no turnover is not a company with no obligations. As long as a JDG or Sp. z o.o. sits in the register, the deadlines keep running: an active VAT payer files JPK_V7 by the 25th even with zeros, an Sp. z o.o. files CIT-8 by 31 March whether or not it issued a single invoice, and the annual financial statements must be approved by 30 June and filed with the KRS within 15 days of approval. The price of silence in 2026: a fiscal offence carries a fine of 480.60 to 96,120 PLN (one-tenth to twenty times the 4,806 PLN minimum wage), with an on-the-spot penalty notice of up to 9,612 PLN. Miss JPK_V7 for three consecutive months and the tax office simply strikes the company from the VAT register - and your counterparties will notice before you do. We take nil filings off your hands: one-off, for a whole year, or as back-filing with a voluntary disclosure.',
    facts: [
      { label: 'Nil JPK_V7', value: 'by the 25th', note: 'monthly or quarterly · required even with zeros' },
      { label: 'CIT-8 + statements', value: '31 March', note: 'statements to KRS by 15 July' },
      { label: 'Fine for non-filing', value: '480-96,120 PLN', note: 'fiscal offence · penalty notice up to 9,612 PLN' },
      { label: 'Our fee', value: 'from 800 PLN', note: 'one-off payment per report' }
    ],
    grounds: {
      title: 'Who has to file nil returns',
      subtitle: 'The duty follows from what you registered and never closed, not from your turnover.',
      items: [
        { title: 'Active VAT payer with no turnover', desc: 'If you are a registered active VAT payer, JPK_V7M (monthly) or JPK_V7K (quarterly) is due by the 25th even for a completely empty month. This is the classic first-year mistake: VAT-R registration filed "for later", the business never started, and nobody sent the returns.' },
        { title: 'Dormant Sp. z o.o.', desc: 'A dormant Sp. z o.o. must file CIT-8 for every tax year, even with no single transaction. There is no zero-turnover exemption in corporate income tax. On top of that: financial statements prepared by 31 March, approved by the shareholders\' meeting by 30 June, and filed with the KRS within 15 days of approval.' },
        { title: 'Sp. z o.o. with suspended activity', desc: 'Here there is a genuine relief few people know about. Under art. 12(3b) of the Accounting Act you may skip closing the books and preparing financial statements if the activity was suspended for the entire financial year AND no event with property or financial consequences occurred - depreciation included. CIT-8 still has to be filed. We test both conditions against your books; if they hold, you save the cost of the annual statements.' },
        { title: 'Suspended JDG', desc: 'A suspended sole trader files no JPK_V7 and pays no social contributions - and from 2026 suspension in CEIDG can be indefinite, the old 24-month cap having been lifted (the minimum is 30 days). The annual PIT for the suspension period is still due by 30 April. And if an import of services or an intra-EU acquisition occurred during suspension, the JPK_V7 duty comes back.' },
        { title: 'Active JDG with no income', desc: 'The worst variant: everything is due - JPK_V7 if you are VAT-registered, ZUS DRA by the 20th, contributions payable under the general rules, and the annual PIT-36, PIT-36L or PIT-28 by 30 April. If there is no work and none in sight, suspension or closure normally costs less than paying contributions into thin air. We cost out both options during the consultation.' },
        { title: 'Overdue filings and voluntary disclosure', desc: 'If deadlines have passed, the situation is still fixable: we file the reports together with a czynny żal - a voluntary disclosure to the tax office made before it discovers the breach itself. A properly filed disclosure means no penalty is imposed. It only works before inspection activities begin, so delay costs nothing but options.' }
      ]
    },
    timeline: {
      title: 'How we run it',
      subtitle: 'A single nil return: 1-2 business days. A full-year Sp. z o.o. package with financial statements: 5-10 days.',
      steps: [
        { title: 'Obligations audit', duration: '30-60 min', desc: 'We check the legal form (JDG or Sp. z o.o.), VAT status, tax regime and the entry in CEIDG/KRS. You get a precise list: which reports you owe, for which periods, and what is already overdue. Free of charge.' },
        { title: 'Access and powers of attorney', duration: '1-3 days', desc: 'We prepare the UPL-1 power of attorney for electronic tax filings, plus PPS-1/ZUS-PEL where needed. Without it we cannot sign a report on your behalf. Signed via ePUAP, a qualified signature or on paper.' },
        { title: 'Preparing the reports', duration: '1-7 days', desc: 'We prepare the nil JPK_V7, PIT/CIT returns and, where required, the financial statements in the structured XML format for e-KRS. For an Sp. z o.o. we also draft the shareholder resolutions approving the statements and allocating the result.' },
        { title: 'Filing and the UPO receipt', duration: '1 day', desc: 'We submit to e-Deklaracje / KAS and e-KRS and collect the UPO - the official electronic receipt with the exact date and time. That is your proof the report was filed on time. We send you the PDF.' },
        { title: 'A calendar for the year ahead', duration: 'ongoing', desc: 'We set reminders for every deadline you have: the 20th for ZUS, the 25th for JPK_V7, 31 March for CIT-8, 30 April for PIT, 30 June for approving the statements, 15 July for filing with the KRS. We write before the deadline, not after.' }
      ]
    },
    documents: {
      title: 'What we need from you',
      subtitle: 'For nil filings the pack is minimal - what matters is access and evidence that nothing actually happened.',
      items: [
        'NIP and an extract from CEIDG or KRS',
        'UPL-1 power of attorney (we draft it, you sign)',
        'Business account statements for the period - they evidence the absence of transactions',
        'Previously filed returns, if any',
        'For an Sp. z o.o.: articles of association, capital details, shareholder list',
        'The suspension entry, if the activity was suspended',
        'Details of the tax regime: VAT / lump sum / KPiR / full ledgers'
      ]
    },
    pricing: {
      title: 'Our fees',
      subtitle: 'One-off payment per report. Annual packages cost less than the sum of individual filings.',
      items: [
        { label: 'Consultation and obligations audit', value: 'Free', note: '30-60 min · the list of reports you owe' },
        { label: 'Nil return (one-off)', value: 'from 800 PLN', note: 'JPK_V7 / PIT / CIT-8 · one report' },
        { label: 'CIT-8 + financial statements', value: 'from 1,500 PLN', note: 'Dormant Sp. z o.o. · including the KRS filing' },
        { label: 'Full-year nil filing package', value: 'from 2,500 PLN', note: 'Every mandatory report for the year' },
        { label: 'Back-filing + voluntary disclosure', value: 'from 1,200 PLN', note: 'Catching up on past periods' }
      ],
      note: 'The UPL-1 power of attorney is exempt from stamp duty. Filing statements in e-KRS is free. If the company has ZUS or tax arrears, restructuring and instalment arrangements are quoted separately. Fines and interest are payable by the taxpayer, but a timely voluntary disclosure usually avoids them entirely.'
    },
    legalBase: {
      title: 'Legal framework',
      items: [
        'VAT Act - art. 99 (duty to file returns), art. 96(9a)(2) (removal from the VAT register)',
        'Corporate Income Tax Act - art. 27(1) (CIT-8 within three months of the year end)',
        'Accounting Act - art. 52, art. 53, art. 69 (preparation, approval, KRS filing)',
        'Accounting Act - art. 12(3b) (no duty to close the books when activity is suspended all year)',
        'Fiscal Penal Code - art. 56 § 4, art. 54, art. 80 § 1, art. 16 (voluntary disclosure)',
        'Entrepreneurs\' Law - suspension of activity in CEIDG with no 24-month cap',
        'KSeF Act - mandatory e-invoice receipt from 1 February 2026, issuance from 1 April 2026'
      ]
    },
    faq: [
      { q: 'Do I have to file JPK_V7 if there was no turnover at all?', a: 'Yes, if you are registered as an active VAT payer. The duty follows from your status, not your turnover: while you sit in the VAT register the return is due by the 25th of every month (JPK_V7M) or quarter (JPK_V7K), simply with zeros in every field. The only exception is a period of formal suspension, and even then only if there was no import of services or intra-EU acquisition. If you do not need VAT, the right move is not silence but deregistration via VAT-Z.' },
      { q: 'What happens if I do not file a nil return?', a: 'Three levels of consequence. First: a fiscal offence under art. 56 § 4 of the Fiscal Penal Code - a fine of one-tenth to twenty times the minimum wage, meaning 480.60 to 96,120 PLN in 2026, with an on-the-spot penalty notice of up to 9,612 PLN. Second: miss returns for three consecutive months and the tax office removes the company from the VAT register under art. 96(9a) - counterparties see it on the white list and stop working with you. Third: if the shortfall exceeds 24,030 PLN the act is reclassified as a fiscal crime, with a fine of up to 720 daily rates.' },
      { q: 'Must a dormant Sp. z o.o. file CIT-8 and financial statements?', a: 'CIT-8: mandatory, no exceptions. Art. 27 of the CIT Act requires a return for every tax year, nil included, within three months of the year end. Financial statements have a genuine carve-out: under art. 12(3b) of the Accounting Act the books need not be closed if activity was suspended for the entire financial year and no event with property or financial consequences occurred - depreciation included. Both conditions must hold together. If they do, no statements are prepared and nothing goes to the KRS. We verify this against the books rather than by eye.' },
      { q: 'How much does filing a nil return cost?', a: 'From 800 PLN per report - a one-off payment, no subscription. CIT-8 together with the financial statements and the e-KRS filing: from 1,500 PLN, because that adds the shareholder resolutions and the structured XML. A full-year package for a dormant company (every mandatory report for the year): from 2,500 PLN, cheaper than buying them one at a time. Back-filing with a voluntary disclosure: from 1,200 PLN. The consultation and the list of your obligations are free.' },
      { q: 'Can it be fixed if filings are a year or two overdue?', a: 'It can, and it is better to do it yourself than to wait for a letter. The mechanism is czynny żal under art. 16 of the Fiscal Penal Code: a voluntary notification of the breach plus the filings themselves and payment of any arrears. Properly filed, it means no penalty at all. The critical condition is filing it before an inspection starts or before the office learns of the breach independently. Once inspection activities begin, the disclosure no longer works and only the size of the fine is negotiable.' },
      { q: 'For a company with no work, is it better to file zeros, suspend, or close?', a: 'It takes 15 minutes to work out. For a JDG: if there is no work for a while, suspension almost always wins - from 2026 it can be indefinite, ZUS and JPK_V7 fall away, and only the annual PIT remains. For an Sp. z o.o. suspension saves the financial statements (if the art. 12(3b) conditions hold), but CIT-8 stays and suspension for KRS-registered companies is capped at 24 months. If there is no business plan at all, closing is cheaper: liquidating an Sp. z o.o. costs once, whereas nil filings drip on for years.' },
      { q: 'Does KSeF apply to a company with no turnover?', a: 'Partly. From 1 February 2026 every taxpayer must be able to receive structured e-invoices through KSeF, even if they issue none. The duty to issue starts on 1 February 2026 for large businesses (2024 sales above 200 million PLN) and on 1 April 2026 for everyone else; small businesses issuing under 10,000 PLN gross of invoices a month join on 1 January 2027. The practical takeaway for a dormant company: set up KSeF access and authorisations in advance rather than on the day of your first deal.' },
      { q: 'Do I have to file ZUS DRA if there is no income?', a: 'If the JDG is active, yes: the report and the contributions are due by the 20th of the following month, and the law does not notice a zero income. Since the health-contribution reform the base is calculated from income, so DRA is effectively filed every month. If the JDG is suspended you are deregistered from social insurance and neither DRA nor contributions apply - but no insurance record accrues and NFZ cover stops. An Sp. z o.o. with no employees usually has no ZUS duties, except where there is a sole shareholder, who is treated as a self-employed person.' },
      { q: 'Will you take over books that the previous accountant left in a mess?', a: 'Yes, that is a routine engagement. We start by reconstructing the picture: we pull the filing history from the e-Tax Office, reconcile it against the books and bank statements, and identify missing periods and discrepancies. Then two tracks run in parallel: back-filing with a voluntary disclosure, and correcting whatever was filed with errors. Only after that can the company be safely closed, sold or restarted.' }
    ],
    related: ['podatki-ksiegowosc', 'jdg', 'likwidacja-sprzedaz'],
    ctaTitle: 'We will file your nil returns',
    ctaSubtitle: 'Tell us the legal form and the month filings stopped - within 30 minutes you will have a precise list of obligations, an estimate of the penalty exposure, and a recommendation: file zeros, suspend, or close.'
  },
  tr: {
    slug: 'deklaracje-zerowe',
    group: 'business',
    icon: 'scale',
    badge: 'JPK_V7 · CIT-8 · sprawozdanie',
    title: 'Sıfır beyan ve raporlar',
    subtitle: 'Faaliyeti olmayan şirket için sıfır beyan gönderimi: JPK_V7, PIT, CIT-8 ve sprawozdanie finansowe',
    lead: 'Cirosu olmayan şirket, yükümlülüğü olmayan şirket değildir. JDG veya Sp. z o.o. sicilde durduğu sürece süreler işler: aktif VAT mükellefi sıfırlarla bile ayın 25\'ine kadar JPK_V7 verir, Sp. z o.o. tek bir fatura kesmemiş olsa da 31 Mart\'a kadar CIT-8 verir, sprawozdanie finansowe ise 30 Haziran\'a kadar onaylanır ve onaydan sonra 15 gün içinde KRS\'ye sunulur. 2026\'da sessizliğin bedeli: wykroczenie skarbowe için 480,60 ile 96.120 PLN arası ceza (4.806 PLN asgari ücretin 1/10\'u ile 20 katı), yerinde mandat karny ise 9.612 PLN\'ye kadar. Üç ay üst üste JPK_V7 verilmezse vergi dairesi şirketi VAT sicilinden siler - ve iş ortaklarınız bunu sizden önce görür. Sıfır beyanları biz üstleniyoruz: tek seferlik, yıllık paket veya czynny żal ile geçmiş dönem tamamlama.',
    facts: [
      { label: 'Sıfır JPK_V7', value: 'ayın 25\'ine kadar', note: 'aylık veya üç aylık · sıfırlarla bile zorunlu' },
      { label: 'CIT-8 + sprawozdanie', value: '31 Mart', note: 'sprawozdanie KRS\'ye - 15 Temmuz\'a kadar' },
      { label: 'Vermeme cezası', value: '480-96.120 PLN', note: 'wykroczenie skarbowe · mandat 9.612 PLN\'ye kadar' },
      { label: 'Ücretimiz', value: '800 PLN\'den', note: 'rapor başına tek seferlik ödeme' }
    ],
    grounds: {
      title: 'Sıfır beyan vermek zorunda olanlar',
      subtitle: 'Yükümlülük ciroya değil, neyi kaydettiğinize ve neyi kapatmadığınıza bağlıdır.',
      items: [
        { title: 'Cirosu olmayan aktif VAT mükellefi', desc: 'Czynny podatnik VAT olarak kayıtlıysanız, tamamen boş bir ay için bile JPK_V7M (aylık) veya JPK_V7K (üç aylık) ayın 25\'ine kadar verilir. Yeni girişimcilerin en sık hatası: VAT-R "ileride gerekir" diye açılıyor, iş yürümüyor, beyanları kimse göndermiyor.' },
        { title: 'Faaliyeti olmayan Sp. z o.o.', desc: 'Uyuyan Sp. z o.o. her vergi yılı için CIT-8 vermek zorundadır - tek bir işlem olmasa dahi. CIT\'te sıfır ciro muafiyeti yoktur. Ayrıca yıllık rapor: sprawozdanie finansowe 31 Mart\'a kadar hazırlanır, 30 Haziran\'a kadar ortaklar kurulunca onaylanır, onaydan sonra 15 gün içinde KRS\'ye sunulur.' },
        { title: 'Faaliyeti durdurulmuş Sp. z o.o.', desc: 'Burada çok az bilinen gerçek bir kolaylık var: art. 12 ust. 3b ustawy o rachunkowości uyarınca, faaliyet tüm mali yıl boyunca durdurulmuşsa VE mal varlığı ya da finansal sonuç doğuran hiçbir işlem (amortisman dahil) olmamışsa defterler kapatılmaz ve sprawozdanie hazırlanmaz. CIT-8 yine de verilir. İki koşulu defterleriniz üzerinden kontrol ediyoruz - sağlanıyorsa yıllık rapordan tasarruf edersiniz.' },
        { title: 'Faaliyeti durdurulmuş JDG', desc: 'Durdurulmuş JDG ne JPK_V7 verir ne ZUS öder - ve 2026\'dan itibaren CEIDG\'de süresiz durdurma yapılabilir, 24 ay sınırı kaldırıldı (asgari 30 gün). Ancak durdurma dönemi için yıllık PIT 30 Nisan\'a kadar verilir. Durdurma sırasında hizmet ithali veya WNT olduysa JPK_V7 yükümlülüğü geri döner.' },
        { title: 'Aktif ama gelirsiz JDG', desc: 'En kötü senaryo: her şey verilir - JPK_V7 (VAT varsa), ayın 20\'sine kadar ZUS DRA, primler genel kurallara göre, yıllık PIT-36, PIT-36L veya PIT-28 30 Nisan\'a kadar. İş yoksa ve görünmüyorsa, durdurma veya kapatma genelde boşa ZUS ödemekten ucuza gelir. Her iki senaryoyu danışmada hesaplıyoruz.' },
        { title: 'Geciken beyanlar ve czynny żal', desc: 'Süreler geçtiyse durum düzeltilebilir: raporları czynny żal ile birlikte veriyoruz - daire ihlali kendisi tespit etmeden yapılan gönüllü bildirim. Doğru düzenlenmiş czynny żal ile ceza uygulanmaz. Yalnızca denetim işlemleri başlamadan önce işler, bu yüzden beklemenin anlamı yok.' }
      ]
    },
    timeline: {
      title: 'Nasıl yapıyoruz',
      subtitle: 'Tek sıfır beyan için 1-2 iş günü. Sprawozdanie ile Sp. z o.o. yıllık paketi için 5-10 gün.',
      steps: [
        { title: 'Yükümlülük denetimi', duration: '30-60 dk', desc: 'Şirket türünü (JDG veya Sp. z o.o.), VAT statüsünü, vergi rejimini, CEIDG/KRS kaydını inceliyoruz. Net liste çıkarıyoruz: hangi raporları vermek zorundasınız, hangi dönemler için, neler zaten gecikmiş. Ücretsiz.' },
        { title: 'Erişim ve vekaletler', duration: '1-3 gün', desc: 'Elektronik beyan için UPL-1 vekaletini, gerekirse PPS-1/ZUS-PEL\'i hazırlıyoruz. Bunlar olmadan raporu adınıza imzalayamayız. ePUAP, nitelikli imza veya kağıt üzerinden imzalanır.' },
        { title: 'Raporların hazırlanması', duration: '1-7 gün', desc: 'Sıfır JPK_V7, PIT/CIT beyanları, gerekiyorsa e-KRS için XML yapılı sprawozdanie finansowe hazırlıyoruz. Sp. z o.o. için raporun onayı ve sonucun dağıtımına ilişkin ortaklar kurulu kararlarını da düzenliyoruz.' },
        { title: 'Gönderim ve UPO', duration: '1 gün', desc: 'e-Deklaracje / KAS ve e-KRS\'ye gönderiyoruz. UPO alıyoruz - tarih ve saati kesin belirten resmi elektronik makbuz. Raporun süresinde verildiğinin kanıtıdır. PDF olarak iletiyoruz.' },
        { title: 'Bir yıllık takvim', duration: 'sürekli', desc: 'Tüm sürelerinize hatırlatma kuruyoruz: 20\'si ZUS, 25\'i JPK_V7, 31 Mart CIT-8, 30 Nisan PIT, 30 Haziran sprawozdanie onayı, 15 Temmuz KRS. Süre dolmadan yazıyoruz, sonrasında değil.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Sıfır raporlar için paket asgaridir - önemli olan erişim ve işlem olmadığının kanıtı.',
      items: [
        'NIP ve CEIDG veya KRS kaydı çıktısı',
        'UPL-1 vekaleti (şablonu biz hazırlarız, siz imzalarsınız)',
        'Dönem için şirket hesabı dökümleri - işlem olmadığını kanıtlar',
        'Daha önce verilmiş beyanlar, varsa',
        'Sp. z o.o. için: umowa spółki, sermaye bilgileri, ortak listesi',
        'Faaliyet durdurma kaydı, varsa',
        'Vergi rejimi bilgisi: VAT / ryczałt / KPiR / ticari defterler'
      ]
    },
    pricing: {
      title: 'Hizmet bedeli',
      subtitle: 'Rapor başına tek seferlik ödeme. Yıllık paketler tek tek almaktan ucuzdur.',
      items: [
        { label: 'Danışmanlık ve yükümlülük denetimi', value: 'Ücretsiz', note: '30-60 dk · raporlarınızın listesi' },
        { label: 'Sıfır beyan (tek seferlik)', value: '800 PLN\'den', note: 'JPK_V7 / PIT / CIT-8 · tek rapor' },
        { label: 'CIT-8 + sprawozdanie finansowe', value: '1.500 PLN\'den', note: 'Faaliyetsiz Sp. z o.o. · KRS sunumu dahil' },
        { label: 'Yıllık sıfır beyan paketi', value: '2.500 PLN\'den', note: 'Yıla ait tüm zorunlu raporlar' },
        { label: 'Geciken raporlar + czynny żal', value: '1.200 PLN\'den', note: 'Geçmiş dönemlerin tamamlanması' }
      ],
      note: 'UPL-1 vekaleti opłata skarbowa\'dan muaftır. Sprawozdanie\'nin e-KRS\'ye sunumu ücretsizdir. Şirketin ZUS veya US borcu varsa yapılandırma ve taksitlendirme ayrıca hesaplanır. Ceza ve faizleri mükellef öder, ancak zamanında verilen czynny żal ile bunlardan tamamen kaçınmak genelde mümkündür.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'VAT kanunu - art. 99 (beyan verme yükümlülüğü), art. 96 ust. 9a pkt 2 (VAT sicilinden silme)',
        'CIT kanunu - art. 27 ust. 1 (yıl sonundan 3 ay içinde CIT-8)',
        'Muhasebe kanunu - art. 52, art. 53, art. 69 (hazırlama, onay, KRS sunumu)',
        'Muhasebe kanunu - art. 12 ust. 3b (tüm yıl durdurmada defter kapatma yükümlülüğü yok)',
        'Vergi Ceza Kanunu - art. 56 § 4, art. 54, art. 80 § 1, art. 16 (czynny żal)',
        'Girişimciler Hukuku - CEIDG\'de 24 ay sınırı olmadan faaliyet durdurma',
        'KSeF kanunu - 1 Şubat 2026\'dan e-fatura alma, 1 Nisan 2026\'dan kesme zorunluluğu'
      ]
    },
    faq: [
      { q: 'Hiç ciro olmadıysa JPK_V7 vermek gerekir mi?', a: 'Czynny podatnik VAT olarak kayıtlıysanız evet. Yükümlülük cirodan değil statüden doğar: VAT sicilinde olduğunuz sürece beyan her ay (JPK_V7M) veya üç ayda (JPK_V7K) 25\'ine kadar, tüm alanlar sıfır olarak verilir. Tek istisna resmi faaliyet durdurma dönemidir, o da hizmet ithali ve WNT yoksa. VAT\'a ihtiyacınız yoksa doğru çözüm sessiz kalmak değil, VAT-Z ile kayıttan çıkmaktır.' },
      { q: 'Sıfır beyan verilmezse ne olur?', a: 'Üç kademeli sonuç. Birinci: KKS art. 56 § 4 uyarınca wykroczenie skarbowe - asgari ücretin 1/10\'u ile 20 katı arasında ceza, yani 2026\'da 480,60 ile 96.120 PLN arası; yerinde 9.612 PLN\'ye kadar mandat karny. İkinci: üç ay üst üste beyan verilmezse daire art. 96 ust. 9a uyarınca şirketi VAT sicilinden siler - iş ortakları bunu biała lista\'da görür ve çalışmayı bırakır. Üçüncü: hazine kaybı 24.030 PLN\'yi aşarsa fiil przestępstwo skarbowe olarak nitelendirilir, 720 stawka dzienna\'ya kadar ceza gelir.' },
      { q: 'Uyuyan Sp. z o.o. CIT-8 ve sprawozdanie finansowe vermek zorunda mı?', a: 'CIT-8 - istisnasız zorunlu: CIT kanunu art. 27, her vergi yılı için sıfır dahi olsa yıl sonundan 3 ay içinde beyan ister. Sprawozdanie finansowe\'de bir açık kapı var: art. 12 ust. 3b ustawy o rachunkowości uyarınca, faaliyet tüm mali yıl durdurulmuşsa ve mal varlığı veya finansal sonuç doğuran hiçbir işlem (amortisman dahil) olmamışsa defterler kapatılmaz. İki koşul birlikte sağlanmalıdır. Sağlanıyorsa sprawozdanie hazırlanmaz ve KRS\'ye sunulmaz. Bunu göz kararı değil, defterler üzerinden kontrol ediyoruz.' },
      { q: 'Sıfır beyan gönderimi ne kadar?', a: 'Rapor başına 800 PLN\'den - tek seferlik ödeme, abonelik yok. Sprawozdanie finansowe ve e-KRS sunumuyla birlikte CIT-8 için 1.500 PLN\'den, çünkü ortaklar kurulu kararları ve XML yapısı ekleniyor. Uyuyan şirket için yıllık paket (yıla ait tüm zorunlu raporlar) 2.500 PLN\'den, tek tek almaktan ucuz. Geciken raporların czynny żal ile tamamlanması 1.200 PLN\'den. Danışmanlık ve yükümlülük listesi ücretsiz.' },
      { q: 'Raporlar bir-iki yıl gecikmişse durum düzeltilebilir mi?', a: 'Düzeltilebilir ve daireden yazı beklemek yerine kendiniz yapmanız daha iyidir. Mekanizma KKS art. 16 uyarınca czynny żal: ihlalin gönüllü bildirimi artı raporların verilmesi ve borcun ödenmesi. Doğru düzenlenmiş czynny żal ile hiç ceza uygulanmaz. Kritik koşul: dairenin denetime başlamasından veya ihlali kendisi öğrenmesinden önce vermek. Denetim işlemleri başladıktan sonra czynny żal işlemez, yalnızca ceza tutarı pazarlık konusu olur.' },
      { q: 'İşi olmayan şirket için hangisi kârlı: sıfır vermek, durdurmak, kapatmak?', a: '15 dakikada hesaplanır. JDG için: iş uzun süre yoksa durdurma neredeyse her zaman kazanır - 2026\'dan itibaren süresiz yapılabilir, ZUS ve JPK_V7 düşer, yalnızca yıllık PIT kalır. Sp. z o.o. için durdurma sprawozdanie\'den kurtarır (art. 12 ust. 3b koşulları sağlanırsa) ama CIT-8 kalır ve KRS şirketlerinde durdurma 24 ayla sınırlıdır. Hiç iş planı yoksa kapatmak daha ucuz: Sp. z o.o. tasfiyesi bir kez ödenir, sıfır beyanlar yıllarca damlar.' },
      { q: 'KSeF cirosu olmayan şirketi ilgilendirir mi?', a: 'Kısmen ilgilendirir. 1 Şubat 2026\'dan itibaren tüm mükellefler KSeF üzerinden yapılandırılmış e-fatura almaya hazır olmak zorundadır - kendileri hiç fatura kesmese bile. Kesme yükümlülüğü büyükler için (2024 satışı 200 milyon PLN üzeri) 1 Şubat 2026\'da, diğerleri için 1 Nisan 2026\'da başlar; aylık 10 bin PLN brüt altında fatura kesen küçük girişimciler 1 Ocak 2027\'de dahil olur. Uyuyan şirket için pratik sonuç: KSeF erişim ve yetkilerini ilk işlem gününde değil, önceden ayarlamak gerekir.' },
      { q: 'Gelir yoksa ZUS DRA vermek gerekir mi?', a: 'JDG aktifse evet, rapor ve primler izleyen ayın 20\'sine kadar gider, kanun sıfır geliri fark etmez. Składka zdrowotna reformundan sonra matrah gelirden hesaplandığı için DRA fiilen her ay verilir. JDG durdurulmuşsa sosyal sigortadan çıkarsınız, ne DRA ne prim olur - ama kıdem de işlemez, NFZ de kapsamaz. Çalışanı olmayan Sp. z o.o. için genelde ZUS yükümlülüğü yoktur; istisna, serbest çalışan gibi değerlendirilen tek ortak durumudur.' },
      { q: 'Önceki muhasebeci her şeyi karıştırdıysa defterleri devralır mısınız?', a: 'Evet, bu standart bir iştir. Tabloyu yeniden kurmakla başlıyoruz: e-Urząd Skarbowy erişimiyle verilmiş rapor geçmişini çekiyor, defter ve dökümlerle karşılaştırıyor, eksik dönem ve tutarsızlıkları buluyoruz. Sonra iki hat paralel yürür: gecikenler czynny żal ile veriliyor, hatalı verilenler düzeltme beyanlarıyla onarılıyor. Ancak bundan sonra şirket rahatça kapatılabilir, satılabilir veya yeniden çalıştırılabilir.' }
    ],
    related: ['podatki-ksiegowosc', 'jdg', 'likwidacja-sprzedaz'],
    ctaTitle: 'Sıfır beyanlarınızı sizin yerinize veriyoruz',
    ctaSubtitle: 'Şirket türünü ve hangi aydan beri rapor verilmediğini yazın - 30 dakikada net yükümlülük listesi çıkarır, ceza riskini hesaplar ve hangisinin kârlı olduğunu söyleriz: sıfır vermek, durdurmak veya kapatmak.'
  },
  uk: {
    slug: 'deklaracje-zerowe',
    group: 'business',
    icon: 'scale',
    badge: 'JPK_V7 · CIT-8 · sprawozdanie',
    title: 'Нульові декларації та звіти',
    subtitle: 'Відправка нульової звітності за неактивну фірму: JPK_V7, PIT, CIT-8 і sprawozdanie finansowe',
    lead: 'Фірма без оборотів - це не фірма без обов\'язків. Поки JDG або Sp. z o.o. числиться в реєстрі, звіти йдуть за розкладом: активний платник VAT здає JPK_V7 до 25 числа навіть із нулями, Sp. z o.o. здає CIT-8 до 31 березня незалежно від того, чи був хоч один рахунок, а sprawozdanie finansowe затверджується до 30 червня і подається до KRS протягом 15 днів після затвердження. Ціна мовчання у 2026 році: за wykroczenie skarbowe штраф від 480,60 до 96 120 PLN (це 1/10-20 мінімальних зарплат по 4 806 PLN), mandat karny на місці - до 9 612 PLN. А якщо не подавати JPK_V7 три місяці підряд, податкова просто викреслить фірму з реєстру VAT - і контрагенти дізнаються про це раніше за вас. Беремо нульову звітність на себе: разово або за весь рік, включно з простроченою і czynnym żalem.',
    facts: [
      { label: 'JPK_V7 нульовий', value: 'до 25 числа', note: 'місячно або квартально · обов\'язковий навіть із нулями' },
      { label: 'CIT-8 + sprawozdanie', value: '31 березня', note: 'sprawozdanie до KRS - до 15 липня' },
      { label: 'Штраф за неподання', value: '480-96 120 PLN', note: 'wykroczenie skarbowe · mandat до 9 612 PLN' },
      { label: 'Наш гонорар', value: 'від 800 PLN', note: 'разова оплата за звіт' }
    ],
    grounds: {
      title: 'Хто зобов\'язаний здавати нульову звітність',
      subtitle: 'Обов\'язок залежить не від обороту, а від того, що ви зареєстрували і не закрили.',
      items: [
        { title: 'Активний платник VAT без оборотів', desc: 'Якщо ви czynny podatnik VAT, JPK_V7M (місячний) або JPK_V7K (квартальний) здається до 25 числа навіть за повністю нульового місяця. Це найчастіша помилка нових підприємців: зареєстрували VAT-R «на майбутнє», робота не пішла, декларації ніхто не відправляв.' },
        { title: 'Sp. z o.o. без діяльності', desc: 'Неактивна Sp. z o.o. зобов\'язана здати CIT-8 за кожен податковий рік - навіть якщо не було жодної операції. Звільнення за нульовим оборотом у CIT немає. Плюс річний звіт: sprawozdanie finansowe складається до 31 березня, затверджується zgromadzeniem wspólników до 30 червня, подається до KRS протягом 15 днів після затвердження.' },
        { title: 'Sp. z o.o. у zawieszeniu', desc: 'Тут є реальне послаблення, про яке мало хто знає: за art. 12 ust. 3b ustawy o rachunkowości можна не закривати книги і не складати sprawozdanie, якщо діяльність була припинена весь фінансовий рік І не було жодної операції з майновими або фінансовими наслідками (включно з амортизацією). CIT-8 при цьому здавати все одно потрібно. Перевіряємо обидві умови за вашими книгами - якщо проходять, економите на річному звіті.' },
        { title: 'JDG у zawieszeniu', desc: 'Припинена JDG не здає JPK_V7 і не платить ZUS - і з 2026 року припинити її можна безстроково, ліміт 24 місяці для CEIDG скасовано (мінімум - 30 днів). Але річний PIT за період припинення подати все одно потрібно, до 30 квітня. І якщо в період zawieszenia був імпорт послуг або WNT, JPK_V7 повертається.' },
        { title: 'JDG активна, але без доходу', desc: 'Найгірший із варіантів: здавати треба все - JPK_V7 (якщо VAT), ZUS DRA до 20 числа, внески платити за загальними правилами, річний PIT-36, PIT-36L або PIT-28 до 30 квітня. Якщо роботи немає і не планується, припинення або закриття зазвичай дешевше, ніж платити ZUS «у нікуди». Рахуємо обидва варіанти на консультації.' },
        { title: 'Прострочена звітність і czynny żal', desc: 'Якщо строки минули, ситуація ще виправна: подаємо звіти разом із czynnym żalem - добровільною заявою до податкової до того, як вона сама виявила порушення. За правильно оформленого czynnego żalu покарання не застосовується. Працює тільки до початку контрольних дій, тому тягнути немає сенсу.' }
      ]
    },
    timeline: {
      title: 'Як ми це робимо',
      subtitle: 'Для одного нульового звіту - 1-2 робочі дні. Для річного пакета Sp. z o.o. зі sprawozdaniem - 5-10 днів.',
      steps: [
        { title: 'Аудит обов\'язків', duration: '30-60 хв', desc: 'Дивимося форму (JDG чи Sp. z o.o.), статус VAT, податковий режим, стан у CEIDG/KRS. Складаємо точний список: які звіти ви зобов\'язані здати, за які періоди, і що вже прострочено. Безкоштовно.' },
        { title: 'Доступи і повноваження', duration: '1-3 дні', desc: 'Оформлюємо pełnomocnictwo UPL-1 для електронного подання до податкової і PPS-1/ZUS-PEL за потреби. Без цього ми не зможемо підписати звіт від вашого імені. Підписується через ePUAP, podpis kwalifikowany або папером.' },
        { title: 'Підготовка звітів', duration: '1-7 днів', desc: 'Готуємо нульовий JPK_V7, декларації PIT/CIT, за потреби sprawozdanie finansowe у структурованому форматі XML для e-KRS. Для Sp. z o.o. готуємо ще uchwały zgromadzenia про затвердження звіту і розподіл результату.' },
        { title: 'Відправка і UPO', duration: '1 день', desc: 'Відправляємо до e-Deklaracje / KAS і e-KRS. Отримуємо UPO - Urzędowe Poświadczenie Odbioru, електронну квитанцію з точною датою і часом. Це ваш доказ, що звіт зданий у строк. Надсилаємо вам PDF.' },
        { title: 'Календар на рік уперед', duration: 'постійно', desc: 'Ставимо нагадування за всіма вашими строками: 20 число - ZUS, 25 - JPK_V7, 31 березня - CIT-8, 30 квітня - PIT, 30 червня - затвердження sprawozdania, 15 липня - подання до KRS. Пишемо заздалегідь, а не після дедлайна.' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Для нульових звітів пакет мінімальний - головне, доступ і підтвердження, що операцій справді не було.',
      items: [
        'NIP і виписка з CEIDG або KRS',
        'Pełnomocnictwo UPL-1 (готуємо шаблон, ви підписуєте)',
        'Виписки з фірмового рахунку за звітний період - підтверджують відсутність операцій',
        'Попередні здані декларації, якщо були',
        'Для Sp. z o.o.: umowa spółki, дані про капітал, список wspólników',
        'Рішення про zawieszenie діяльності, якщо було',
        'Дані про податковий режим: VAT / ryczałt / KPiR / księgi handlowe'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Разова оплата за звіт. Річні пакети - дешевше, ніж сума разових.',
      items: [
        { label: 'Консультація і аудит обов\'язків', value: 'Безкоштовно', note: '30-60 хвилин · список ваших звітів' },
        { label: 'Нульова декларація (разово)', value: 'від 800 PLN', note: 'JPK_V7 / PIT / CIT-8 · один звіт' },
        { label: 'CIT-8 + sprawozdanie finansowe', value: 'від 1 500 PLN', note: 'Sp. z o.o. без діяльності · з поданням до KRS' },
        { label: 'Річний пакет нульової звітності', value: 'від 2 500 PLN', note: 'Усі обов\'язкові звіти за рік' },
        { label: 'Прострочені звіти + czynny żal', value: 'від 1 200 PLN', note: 'Відновлення за минулі періоди' }
      ],
      note: 'Держмито за pełnomocnictwo UPL-1 не стягується. Подання sprawozdania до e-KRS - безкоштовно. Якщо у фірми накопичилися заборгованості за ZUS чи US, реструктуризація і rozłożenie na raty рахуються окремо. Штрафи і пеню платить платник податків, але за czynnym żalem у строк їх зазвичай вдається уникнути повністю.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa o VAT - art. 99 (obowiązek składania deklaracji), art. 96 ust. 9a pkt 2 (wykreślenie z rejestru VAT)',
        'Ustawa o CIT - art. 27 ust. 1 (CIT-8 w terminie 3 miesięcy od końca roku podatkowego)',
        'Ustawa o rachunkowości - art. 52, art. 53, art. 69 (sporządzenie, zatwierdzenie, złożenie do KRS)',
        'Ustawa o rachunkowości - art. 12 ust. 3b (brak obowiązku zamknięcia ksiąg przy zawieszeniu na cały rok)',
        'Kodeks karny skarbowy - art. 56 § 4, art. 54, art. 80 § 1, art. 16 (czynny żal)',
        'Ustawa Prawo przedsiębiorców - zawieszenie działalności w CEIDG bez limitu 24 miesięcy',
        'Ustawa o KSeF - obowiązek odbioru e-faktur od 1 lutego 2026 r., wystawiania od 1 kwietnia 2026 r.'
      ]
    },
    faq: [
      { q: 'Чи потрібно здавати JPK_V7, якщо оборотів взагалі не було?', a: 'Так, якщо ви зареєстровані як czynny podatnik VAT. Обов\'язок виникає зі статусу, а не з обороту: поки ви в реєстрі VAT, декларація йде до 25 числа кожного місяця (JPK_V7M) або кварталу (JPK_V7K), просто з нулями в усіх полях. Єдиний виняток - період офіційного zawieszenia діяльності, і то за умови, що не було імпорту послуг чи внутрішньосоюзних покупок. Якщо VAT вам не потрібен, правильне рішення - не мовчати, а знятися з реєстрації через VAT-Z.' },
      { q: 'Що буде, якщо не здати нульову декларацію?', a: 'Три рівні наслідків. Перший: wykroczenie skarbowe за art. 56 § 4 KKS - штраф від 1/10 до 20-кратної мінімальної зарплати, тобто у 2026 році від 480,60 до 96 120 PLN; на місці податкова може виписати mandat karny до 9 612 PLN. Другий: за неподання декларацій три місяці підряд податкова викреслює фірму з реєстру VAT за art. 96 ust. 9a - контрагенти бачать це на białej liście і перестають із вами працювати. Третій: якщо через неподання бюджет недоотримав більше 24 030 PLN, справа перекваліфіковується у przestępstwo skarbowe з grzywną до 720 stawek dziennych.' },
      { q: 'Чи зобов\'язана «спляча» Sp. z o.o. здавати CIT-8 і sprawozdanie finansowe?', a: 'CIT-8 - обов\'язково і без винятків: art. 27 ustawy o CIT вимагає декларацію за кожен податковий рік, навіть із нулями, протягом 3 місяців після його закінчення. Зі sprawozdaniem finansowym є лазівка: за art. 12 ust. 3b ustawy o rachunkowości книги можна не закривати, якщо діяльність була припинена весь фінансовий рік і не було жодної операції з майновими чи фінансовими наслідками - включно з амортизаційними відрахуваннями. Обидві умови мають виконуватися одночасно. Якщо проходять - sprawozdanie не складається і до KRS не подається. Перевіряємо це за вашими книгами, а не на око.' },
      { q: 'Скільки коштує відправка нульової декларації?', a: 'Від 800 PLN за один звіт - разова оплата, жодної підписки. CIT-8 разом зі sprawozdaniem finansowym і поданням до e-KRS - від 1 500 PLN, бо там ще uchwały zgromadzenia і структурований XML. Річний пакет для сплячої фірми (усі обов\'язкові звіти за рік) - від 2 500 PLN, це дешевше, ніж набирати по одному. Відновлення прострочених звітів із czynnym żalem - від 1 200 PLN. Консультація і складання списку ваших обов\'язків - безкоштовно.' },
      { q: 'Чи можна виправити ситуацію, якщо звіти прострочені на рік-два?', a: 'Так, і краще робити це самому, а не чекати листа з податкової. Механізм - czynny żal за art. 16 KKS: добровільна заява про порушення плюс подання самих звітів і сплата недоїмки. За правильно оформленого czynnego żalu покарання не застосовується взагалі. Ключова умова - подати його до того, як податкова почала перевірку або вже знає про порушення. Після початку контрольних дій czynny żal не працює, залишається торгуватися за розмір штрафу.' },
      { q: 'Що вигідніше для фірми без роботи: здавати нулі, припинити чи закрити?', a: 'Рахується за 15 хвилин. Для JDG: якщо роботи немає надовго, zawieszenie майже завжди вигідніше - з 2026 року його можна оформити безстроково, ZUS і JPK_V7 відпадають, залишається тільки річний PIT. Для Sp. z o.o. припинення врятує від sprawozdania (за виконання умов art. 12 ust. 3b), але CIT-8 залишається, а zawieszenie для spółek у KRS обмежене 24 місяцями. Якщо бізнес-плану немає взагалі - дешевше закрити: ліквідація Sp. z o.o. коштує один раз, а нульова звітність капає роками.' },
      { q: 'Чи стосується KSeF фірми без оборотів?', a: 'Стосується частково. З 1 лютого 2026 року всі платники податків зобов\'язані бути готовими приймати структуровані e-фактури через KSeF - навіть якщо самі нічого не виставляють. Обов\'язок виставляти фактури в KSeF починається з 1 лютого 2026 для великих (оборот за 2024 вище 200 млн PLN) і з 1 квітня 2026 для решти; дрібні підприємці, які виставляють менше 10 тис. PLN брутто фактур на місяць, підключаються з 1 січня 2027. Практичний висновок для сплячої фірми: доступи і повноваження в KSeF варто налаштувати заздалегідь, щоб не розбиратися з цим у момент першої угоди.' },
      { q: 'Чи потрібно здавати ZUS DRA, якщо доходу немає?', a: 'Якщо JDG активна - так, звіт і внески йдуть до 20 числа наступного місяця, нульового доходу закон не помічає. Після реформи składki zdrowotnej база рахується від доходу, тому DRA фактично подається щомісяця. Якщо JDG припинена, ви знімаєтеся з соціального страхування і ні DRA, ні внески не потрібні - але й стаж не набігає, і NFZ не покриває. Для Sp. z o.o. без працівників обов\'язків за ZUS зазвичай немає, крім випадку єдиного wspólnika, який прирівнюється до самозайнятого.' },
      { q: 'Чи можете ви вести звітність, якщо бухгалтер уже був і все заплутав?', a: 'Так, це стандартна ситуація. Починаємо з відновлення картини: піднімаємо історію поданих звітів через доступ до e-Urząd Skarbowy, зіставляємо з книгами і виписками, знаходимо пропущені періоди і розбіжності. Далі два треки: здаємо прострочене з czynnym żalem і паралельно правимо коригуваннями те, що було подано з помилками. Тільки після цього фірму можна спокійно закривати, продавати або знову запускати.' }
    ],
    related: ['podatki-ksiegowosc', 'jdg', 'likwidacja-sprzedaz'],
    ctaTitle: 'Здамо нульову звітність за вас',
    ctaSubtitle: 'Напишіть форму фірми і з якого місяця не подавалися звіти - за 30 хвилин складемо точний список обов\'язків, порахуємо ризик штрафу і скажемо, що вигідніше: здавати нулі, припинити чи закрити.'
  }
};

export default deklaracjeZerowe;
