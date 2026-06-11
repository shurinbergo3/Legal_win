import { readFileSync, writeFileSync } from 'node:fs';

// NOTE: every string is wrapped in DOUBLE quotes so straight apostrophes
// (uk/ru/tr/en) never break the literal. No double quotes appear inside texts.
const data = {
  ru: {
    eyebrow: "Вопросы",
    title: "Что спрашивают чаще всего",
    items: [
      { tag: "Консультация", q: "Сколько стоит первая консультация?", a: "Первая консультация — бесплатно. Разберём вашу ситуацию, скажем, какие документы реально нужны, и назовём сроки и стоимость ещё до того, как вы что-то оплатите. Глубокий разбор документов или письменное заключение — от 200 PLN в зависимости от сложности." },
      { tag: "Сроки", q: "Сколько времени занимает получение карты побыту?", a: "Средний срок — 6–8 месяцев. По закону у воеводы (wojewoda) есть до 90 дней, но в Mazowieckim Urzędzie Wojewódzkim в 2026 году решение реально приходит за 6–14 месяцев. Полный пакет и корректная подача через MOS v2.0 держат вас ближе к нижней границе. При затягивании подаём ponaglenie (требование рассмотрения), а при необходимости — skargę na bezczynność (жалобу на бездействие) в WSA." },
      { tag: "Отказ", q: "Из-за чего чаще всего отказывают в карте побыту?", a: "Типичные причины — turystyka pobytowa (когда инспектор не видит реальной цели пребывания), нестыковки в документах, неполный пакет, проблемы с налогами или подозрение в фиктивности основания. Мы закрываем эти риски заранее, а если decyzja odmowna (решение об отказе) уже пришла — подаём odwołanie (апелляцию) в течение 14 дней." },
      { tag: "Права и авто", q: "Можно ли обменять белорусские права на польские без экзамена?", a: "Да. Беларусь — участник Венской конвенции, поэтому обмен идёт без сдачи теории и практики. Нужны присяжный перевод, заявление в wydziale komunikacji и оплата (100,50 PLN). Урядники направляют запрос в МВД Беларуси через консульство — ответ в среднем 60–90 дней. Если вы живёте в Польше больше 185 дней в году, обмен обязателен. Ведём весь процесс и делаем tłumaczenie przysięgłe (присяжный перевод)." },
      { tag: "Оплата", q: "Что входит в стоимость и как проходит оплата?", a: "Гонорар фирмы и государственные сборы (opłata skarbowa) — это разные суммы, и мы всегда показываем их отдельно, без скрытых доплат. По большинству дел оплата поэтапная: часть в начале, часть — на ключевых этапах. После первой консультации вы получаете фиксированную смету под вашу ситуацию." },
      { tag: "Бизнес", q: "Можно ли открыть Sp. z o.o. (польское ООО) удалённо?", a: "Да, через S24 (онлайн-портал KRS) с квалифицированной электронной подписью или по нотариальной доверенности — регистрация занимает 5–10 рабочих дней. Возьмём на себя устав, коды PKD, регистрацию в KRS и постановку на учёт в US и ZUS, а при необходимости — бухгалтерию." },
      { tag: "ПМЖ и гражданство", q: "Когда можно подавать на ПМЖ или гражданство?", a: "Зависит от основания. На kartę stałego pobytu (ПМЖ) чаще всего выходят через 5 лет непрерывного легального проживания, на гражданство — после периода с ПМЖ и при подтверждённом знании польского (сертификат B1). У польского происхождения, брака и статуса беженца — свои сроки. На консультации посчитаем именно ваш срок и проверим непрерывность пребывания." },
      { tag: "Формат работы", q: "Работаете ли вы удалённо и из других городов?", a: "Да. Клиенты из других городов Польши и из-за границы ведут дела полностью онлайн: нотариальная доверенность, прямой контакт с куратором дела и клиентский портал со статусами. Приезжать в офис на ul. Świętokrzyska 30 в Варшаве не обязательно." },
      { tag: "Языки", q: "На каких языках вы работаете?", a: "Польский, русский, украинский, английский. Все документы получаете с переводом на ваш язык, а присяжные переводы (tłumaczenia przysięgłe) делаем сразу под подачу в urząd." }
    ],
    moreText: "Не нашли свой вопрос?",
    moreCta: "Напишите нам — ответим в тот же день"
  },
  uk: {
    eyebrow: "Питання",
    title: "Що запитують найчастіше",
    items: [
      { tag: "Консультація", q: "Скільки коштує перша консультація?", a: "Перша консультація — безкоштовна. Розберемо вашу ситуацію, скажемо, які документи справді потрібні, і назвемо строки та вартість ще до того, як ви щось сплатите. Глибокий розбір документів або письмовий висновок — від 200 PLN залежно від складності." },
      { tag: "Тимчасовий захист", q: "До якого терміну продовжено тимчасовий захист?", a: "Легальне перебування за статусом UKR продовжено до 4 березня 2027 року, але умови посилилися: загальний строк проживання за весь період захисту обмежено, а виплати прив'язані до офіційної роботи. Допоможемо не випасти зі статусу й вчасно перейти на стабільнішу підставу перебування." },
      { tag: "Карта CUKR", q: "Як перейти з PESEL UKR на карту побуту?", a: "Передбачено перехід зі статусу UKR на трирічний дозвіл (CUKR). Базові умови — активний статус тимчасового захисту станом на 4 червня 2025 року і безперервний статус UKR щонайменше 365 днів поспіль. Перевіримо вашу історію перебування, зберемо пакет і подамо через MOS, щоб не загубити безперервність." },
      { tag: "Права та авто", q: "Чи потрібно міняти українські права на польські?", a: "Так, якщо ви живете в Польщі понад 185 днів на рік: спрощені правила для PESEL UKR скасовано, тепер діє загальне правило. Обмін — без іспитів: присяжний переклад, заява у wydziale komunikacji, оплата 100,50 PLN і консульський збір близько 125 PLN. Зробимо tłumaczenie przysięgłe (присяжний переклад) і подамо без зайвих візитів." },
      { tag: "Робота", q: "Чи можна працювати після змін у спецзаконі?", a: "Так, але вже не за спрощеним повідомленням, як раніше. Тепер працевлаштування йде за стандартними підставами — oświadczenie (заява роботодавця) або zezwolenie na pracę (дозвіл на роботу). Підкажемо, який документ потрібен саме під ваш статус, і оформимо його разом із роботодавцем." },
      { tag: "Виплати 800+", q: "Що зараз із виплатами 800+?", a: "Програму збережено, але прив'язано до двох умов: опікун офіційно працює, а дитина відвідує польську школу. Допоможемо із записом дитини до школи й легалізацією зайнятості, щоб право на виплати не зникло." },
      { tag: "Відмова", q: "Що робити, якщо прийшла відмова?", a: "Розберемо причини відмови (decyzja odmowna) і подамо апеляцію (odwołanie) протягом 14 днів — це законний строк. У нас успішні апеляції щодо TRC, ПМП, громадянства та міжнародного захисту, зокрема через Wojewódzki Sąd Administracyjny (Воєводський адміністративний суд). Навіть коли строк підтискає, спершу покажіть нам рішення." },
      { tag: "Формат роботи", q: "Чи працюєте ви дистанційно і з інших міст?", a: "Так. Клієнти з інших міст Польщі та з-за кордону ведуть справи повністю онлайн: нотаріальна довіреність, прямий контакт із куратором справи та клієнтський портал зі статусами. Приїжджати в офіс на ul. Świętokrzyska 30 у Варшаві не обов'язково." },
      { tag: "Мови", q: "Якими мовами ви працюєте?", a: "Польська, українська, російська, англійська. Усі документи отримуєте з перекладом вашою мовою, а присяжні переклади (tłumaczenia przysięgłe) робимо одразу під подачу в urząd." }
    ],
    moreText: "Не знайшли свого питання?",
    moreCta: "Напишіть нам — відповімо того ж дня"
  },
  pl: {
    eyebrow: "Pytania",
    title: "Najczęściej zadawane",
    items: [
      { tag: "Konsultacja", q: "Ile kosztuje pierwsza konsultacja?", a: "Pierwsza konsultacja jest bezpłatna. Przeanalizujemy sytuację, powiemy, jakie dokumenty są naprawdę potrzebne, i podamy terminy oraz koszt, zanim cokolwiek zapłacisz. Głęboka analiza dokumentów lub pisemna opinia — od 200 PLN w zależności od złożoności." },
      { tag: "Zatrudnienie", q: "Czy legalny pobyt oznacza legalną pracę?", a: "Nie. To dwie odrębne kwestie. Cudzoziemiec może przebywać legalnie, ale do pracy potrzebuje osobnej podstawy — oświadczenia o powierzeniu pracy albo zezwolenia na pracę. Sprawdzimy status pobytowy pracownika i dobierzemy właściwy dokument." },
      { tag: "Ukraińcy", q: "Jak zatrudnić obywatela Ukrainy po zmianach w 2026?", a: "Ustawa z 23 stycznia 2026 r. wygasiła uproszczenia specustawy z 2022 r. Zatrudnienie obywatela Ukrainy nie opiera się już na prostym powiadomieniu — wymagane są standardowe procedury: oświadczenie lub zezwolenie na pracę. Przeprowadzimy przejście bez przerwy w legalności zatrudnienia." },
      { tag: "Obowiązki", q: "Co pracodawca musi sprawdzić przed zatrudnieniem?", a: "Status pobytowy i jego podstawę, okres legalnego pobytu, podstawę do wykonywania pracy oraz zgodność stanowiska, wynagrodzenia i wymiaru czasu z dokumentami legalizacyjnymi. Od 1 czerwca 2026 r. powiadomienia składa się wyłącznie elektronicznie przez praca.gov.pl. Zajmiemy się tym za Ciebie." },
      { tag: "Kary", q: "Jakie są kary za nielegalne zatrudnienie cudzoziemca?", a: "Grzywna od 3000 zł za pojedynczy przypadek do nawet 50 000 zł, ustalana proporcjonalnie do liczby nielegalnie zatrudnionych osób. Audyt dokumentów pracowników kosztuje znacznie mniej niż kara — robimy go i wskazujemy, co poprawić." },
      { tag: "Terminy", q: "Ile trwa uzyskanie zezwolenia na pracę?", a: "Ustawowo 30 dni, a w sprawach wymagających postępowania wyjaśniającego do 60 dni. W praktyce bywa dłużej — pilnujemy terminów i w razie przewlekłości składamy ponaglenie." },
      { tag: "Kod 95", q: "Którzy kierowcy potrzebują kodu 95?", a: "Każdy kierowca zawodowy przewożący zarobkowo rzeczy (kat. C) lub osoby (kat. D). Droga: orzeczenia lekarza medycyny pracy i psychologa → Profil Kierowcy Zawodowego (PKZ) → kwalifikacja wstępna i egzamin państwowy z 30 pytań. Prowadzimy proces dla kierowców i firm transportowych." },
      { tag: "Tryb pracy", q: "Czy obsługujecie klientów zdalnie i z innych miast?", a: "Tak. Klienci z innych miast Polski i z zagranicy prowadzą sprawy całkowicie online: pełnomocnictwo notarialne, bezpośredni kontakt z opiekunem sprawy i portal klienta ze statusami. Wizyta w biurze przy ul. Świętokrzyskiej 30 w Warszawie nie jest konieczna." },
      { tag: "Języki", q: "W jakich językach pracujecie?", a: "Polski, rosyjski, ukraiński, angielski. Wszystkie dokumenty otrzymujesz z tłumaczeniem na swój język, a tłumaczenia przysięgłe wykonujemy od razu pod złożenie w urzędzie." }
    ],
    moreText: "Nie znalazłeś swojego pytania?",
    moreCta: "Napisz do nas — odpowiemy tego samego dnia"
  },
  en: {
    eyebrow: "Questions",
    title: "Frequently asked",
    items: [
      { tag: "Consultation", q: "How much is the first consultation?", a: "The first consultation is free. We review your situation, tell you which documents you actually need, and lay out timing and cost before you pay anything. If deep document review or a written opinion is required, follow-up sessions start at 200 PLN depending on complexity." },
      { tag: "Timing", q: "How long does a residence permit take?", a: "On average 6–8 months. The statutory deadline for the wojewoda (regional governor) is 90 days, but in Mazowieckie Voivodeship in 2026 decisions realistically take 6–14 months. A full document pack and a clean MOS v2.0 filing keep you closer to the lower bound. If it drags, we file a ponaglenie (motion to expedite) and, if needed, a skarga na bezczynność (complaint of inaction) to the Voivodeship Administrative Court." },
      { tag: "Work permit", q: "Is a residence permit the same as a work permit?", a: "No — they are separate. A residence permit lets you stay; to work you generally also need a basis such as an oświadczenie (employer's declaration) or a zezwolenie na pracę (work permit). We check your situation and arrange the right one alongside your stay." },
      { tag: "Blue Card", q: "Do I qualify for the EU Blue Card?", a: "If you have higher qualifications (a degree or equivalent experience) and a job offer paying at least 150% of the national average — about 160,264 PLN gross a year for 2026 applications. The permit runs up to 3 years, the state fee is 440 PLN, and after 12 months you gain EU mobility. We assess eligibility and file through the MOS portal." },
      { tag: "Driving", q: "Can I exchange my non-EU driving licence for a Polish one?", a: "Yes. You will need a sworn translation (tłumacz przysięgły), an application at the wydział komunikacji (traffic department) and the fee (100.50 PLN); licences from non–Vienna-Convention countries also need a medical certificate. Total cost is usually 180–300 PLN. Once you have lived here over 185 days a year, the exchange is required — we handle the paperwork end to end." },
      { tag: "Payment", q: "What's included in the price and how does payment work?", a: "Our fee and the government charges (opłata skarbowa) are separate amounts — we always show them apart, with no hidden add-ons. For most cases payment is staged: part at the start, part at key milestones. After the first consultation you receive a fixed quote tailored to your case." },
      { tag: "Appeal", q: "What should I do if I'm denied?", a: "We analyse the grounds for refusal (decyzja odmowna) and file an appeal (odwołanie) within 14 days — the statutory window. We have successful appeals on TRC, permanent residence, citizenship and international protection, including through the Voivodeship Administrative Court. Even when the clock is tight, show us the decision first." },
      { tag: "Remote", q: "Do you work remotely and with other cities?", a: "Yes. Clients from other Polish cities and from abroad run their cases entirely online: notarial power of attorney, a direct line to your case manager and a client portal with live statuses. A visit to our office at ul. Świętokrzyska 30 in Warsaw is not required." },
      { tag: "Languages", q: "What languages do you work in?", a: "Polish, Russian, Ukrainian, English. All documents come translated into your language, and we produce sworn translations (tłumaczenia przysięgłe) ready for filing with the urząd." }
    ],
    moreText: "Didn't find your question?",
    moreCta: "Write to us — we reply the same day"
  },
  tr: {
    eyebrow: "Sorular",
    title: "En çok sorulanlar",
    items: [
      { tag: "Danışmanlık", q: "İlk danışmanlık ne kadar?", a: "İlk danışmanlık ücretsizdir. Durumunuzu inceler, gerçekte hangi belgelerin gerektiğini söyler ve siz hiçbir ödeme yapmadan önce süre ile ücreti belirtiriz. Belgelerin derinlemesine incelemesi ya da yazılı görüş gerekiyorsa sonraki görüşmeler karmaşıklığa göre 200 PLN'den başlar." },
      { tag: "Oturum izni", q: "Karta Pobytu kaç ayda alınıyor?", a: "Ortalama 6–8 ay. Yasal olarak wojewoda'nın (eyalet valisi) 90 günü vardır, ancak 2026'da Mazowiecki Urząd Wojewódzki kararı gerçekte 6–14 ayda veriyor. Eksiksiz dosya ve MOS v2.0 üzerinden doğru başvuru sizi alt sınıra yaklaştırır. Süreç uzarsa ponaglenie (acil değerlendirme talebi), gerekirse skarga na bezczynność (idari ihmal şikâyeti) ile WSA'ya başvuruyoruz." },
      { tag: "Çalışma izni", q: "Oturum iznim çalışma hakkı veriyor mu?", a: "Hayır. Oturum izni almış olmak tek başına çalışma hakkı sağlamaz; ayrıca bir çalışma izni (zezwolenie na pracę) ya da işveren beyanı (oświadczenie) gerekir. Durumunuza uygun belgeyi belirleyip oturum süreciyle birlikte hallederiz." },
      { tag: "Öğrenciler", q: "Öğrenci olarak oturum ve çalışma kurallarım nedir?", a: "Haziran 2025'ten itibaren öğrenciler artık doğrudan çalışma temelinde oturum kartına başvuramıyor; öğrenci oturumuyla çalışma kuralları da değişti. Mevcut durumunuza göre hangi geçiş yolunun açık olduğunu birlikte planlarız." },
      { tag: "Ehliyet", q: "Türk ehliyetimi Polonya ehliyetine nasıl çeviririm?", a: "Türk ehliyeti Polonya'da 6 ay geçerlidir; uzun süreli kalıyorsanız değiştirmeniz gerekir. Eski tip ehliyetin önce yeni tip olarak yenilenmesi gerekir. Sonra yeminli tercüme, wydział komunikacji'ye başvuru ve 100,50 PLN ücretle ortalama 3–6 ayda Polonya ehliyetini alırsınız. Tüm süreci ve tłumaczenie przysięgłe'yi (yeminli tercüme) biz yürütürüz." },
      { tag: "Şirket", q: "Polonya'da uzaktan şirket (Sp. z o.o.) kurabilir miyim?", a: "Evet — S24 (KRS çevrimiçi portalı) üzerinden nitelikli e-imza ile ya da noter vekaletnamesiyle; kuruluş 5–10 iş günü sürer. Ana sözleşme, PKD kodları, KRS tescili ve US ile ZUS kaydını, gerekirse muhasebeyi de üstleniriz." },
      { tag: "Vatandaşlık", q: "Daimi oturum ve vatandaşlığa ne zaman başvurabilirim?", a: "Dayanağa bağlı. Daimi oturuma genelde 5 yıl kesintisiz yasal ikametten sonra, vatandaşlığa ise daimi oturum süresi ve B1 düzeyinde Lehçe sertifikasıyla geçilir. Köken, evlilik ve koruma statüsünün kendine özgü süreleri vardır. Sizin sürenizi hesaplar ve kesintisizliği kontrol ederiz." },
      { tag: "Çalışma şekli", q: "Uzaktan ve başka şehirlerden çalışıyor musunuz?", a: "Evet. Polonya'nın diğer şehirlerinden ve yurt dışından müvekkiller dosyalarını tamamen çevrimiçi yürütür: noter onaylı vekaletname, dosya sorumlusuyla doğrudan iletişim ve süreç takibi için müvekkil paneli. Varşova'daki ul. Świętokrzyska 30 ofisimize gelmeniz şart değildir." },
      { tag: "Diller", q: "Hangi dillerde çalışıyorsunuz?", a: "Lehçe, Rusça, Ukraynaca ve İngilizce. Tüm belgeleri kendi dilinizdeki tercümeyle alırsınız; yeminli tercümeleri (tłumaczenia przysięgłe) doğrudan urząd'a sunuma hazır şekilde yaparız." }
    ],
    moreText: "Sorunuzu bulamadınız mı?",
    moreCta: "Bize yazın — aynı gün yanıtlıyoruz"
  }
};

for (const [locale, faq] of Object.entries(data)) {
  const path = `messages/${locale}.json`;
  const text = readFileSync(path, 'utf8');
  const startIdx = text.indexOf('  "Faq": {');
  const contactIdx = text.indexOf('  "Contact": {');
  if (startIdx === -1 || contactIdx === -1 || contactIdx < startIdx) {
    throw new Error(`Could not locate Faq/Contact boundaries in ${path}`);
  }
  const body = JSON.stringify(faq, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : '  ' + line))
    .join('\n');
  const newBlock = '  "Faq": ' + body + ',\n';
  const newText = text.slice(0, startIdx) + newBlock + text.slice(contactIdx);
  JSON.parse(newText); // sanity
  // guard: RU/Russia must not be mentioned in any locale's FAQ text
  const faqJson = JSON.stringify(faq);
  for (const banned of ['Росси', 'россия', 'россиян', 'Rosjan', 'Russia', 'Russian Fed', 'Rusya vatanda']) {
    if (faqJson.includes(banned)) throw new Error(`Banned token "${banned}" in ${locale}`);
  }
  writeFileSync(path, newText);
  console.log(`updated ${path}: ${faq.items.length} items`);
}
