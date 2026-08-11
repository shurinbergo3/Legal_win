// FAQ data for blog posts - keyed by slug, then locale.
// Each entry powers both the visible FAQ section in <BlogArticle /> and the
// FAQPage JSON-LD emitted on the post page. Sourced from real Google "People
// also ask" suggestions for each topic, refined for the 2026 legal landscape
// in Poland (MOS v2.0, eDoręczenia, KSeF, EES, ITD/BAG fines, etc.).

import { BLOG_FAQ_2026_Q4 } from './blog-faq-2026-q4';

export type BlogFaqItem = { q: string; a: string };
export type BlogFaqLocale = 'ru' | 'pl' | 'en' | 'tr' | 'uk';

type Map = Record<string, Partial<Record<BlogFaqLocale, BlogFaqItem[]>>>;

export const BLOG_FAQ: Map = {
  // ─── Karta Pobytu (TRC) ──────────────────────────────────────────────
  'karta-pobytu-2026-poshagovaya-instrukciya': {
    ru: [
      { q: 'Какие документы нужны на карту побыту в Польше в 2026 году?', a: 'Заполненный wniosek (заявление) по форме MOS v2.0, загранпаспорт, 4 биометрических фото 35×45 мм, подтверждение основания (umowa o pracę (трудовой договор) / договор Sp. z o.o. (ООО) / справка из вуза), подтверждение жилья и meldunkу (регистрации по адресу), медстраховка с покрытием от 30 000 €, подтверждение оплаты opłaty skarbowej (госпошлины) 340 PLN. Полный пакет адаптируется под основание.' },
      { q: 'Сколько ждать решение по karcie pobytu в Mazowieckim Urzędzie Wojewódzkim?', a: 'Официальный срок - до 90 дней. Реально в Mazowieckim Urzędzie Wojewódzkim (Мазовецком воеводском управлении) в 2026 году решение выдаётся за 8-14 месяцев. При корректной подаче через MOS v2.0 и без uzupełnień (дозапросов документов) первая стадия (przyjęcie wniosku - приём заявления) занимает 3-6 недель.' },
      { q: 'Что такое MOS v2.0 и обязательно ли подавать через него?', a: 'MOS v2.0 - это новая государственная электронная система для иностранцев, заменившая inPOL с декабря 2025. С 2026 года это единственный канал подачи wniosku (заявления) о karcie czasowego pobytu (карте временного пребывания). Бумажную подачу воеводы больше не принимают.' },
      { q: 'Можно ли работать во время рассмотрения karta pobytu?', a: 'Да, если вы подавались на основании работы и на момент подачи уже имели zezwolenie na pracę (разрешение на работу). В остальных случаях нужно соблюдать правила вашего предыдущего разрешения на пребывание. UPO (электронное подтверждение приёма) легализует пребывание, но не автоматически даёт право на работу.' },
      { q: 'Какая минимальная зарплата для основания "работа" в 2026 году?', a: '4 806 PLN brutto в месяц (минимальная зарплата с 1 января 2026). Контракты, подписанные на меньшую сумму в 2025, нужно обновить через aneks (дополнительное соглашение). Для Niebieskiej Karty UE (Голубой карты ЕС) - 1,5× средней зарплаты по Польше.' },
      { q: 'Можно ли подать на karta pobytu, находясь за границей?', a: 'Нет. Заявление подаётся лично в Польше - на момент подачи у вас должно быть законное основание пребывания (виза D или безвиз). Подготовить пакет можно дистанционно, и подать в день приезда.' }
    ],
    uk: [
      { q: 'Які документи потрібні на карту побиту в Польщі у 2026 році?', a: 'Заповнений wniosek (заява) за формою MOS v2.0, закордонний паспорт, 4 біометричні фото 35×45 мм, підтвердження підстави (umowa o pracę (трудовий договір) / договір Sp. z o.o. (ТОВ) / довідка з вишу), підтвердження житла та meldunku (реєстрації за адресою), медстрахування з покриттям від 30 000 €, підтвердження оплати opłaty skarbowej (держмита) 340 PLN. Повний пакет адаптується під підставу.' },
      { q: 'Скільки чекати рішення щодо karty pobytu в Mazowieckim Urzędzie Wojewódzkim?', a: 'Офіційний строк - до 90 днів. Реально в Mazowieckim Urzędzie Wojewódzkim (Мазовецькому воєводському управлінні) у 2026 році рішення видається за 8-14 місяців. За коректної подачі через MOS v2.0 і без uzupełnień (дозапитів документів) перша стадія (przyjęcie wniosku - прийняття заяви) займає 3-6 тижнів.' },
      { q: 'Що таке MOS v2.0 і чи обов’язково подавати через нього?', a: 'MOS v2.0 - це нова державна електронна система для іноземців, що замінила inPOL з грудня 2025. З 2026 року це єдиний канал подачі wniosku (заяви) про kartę czasowego pobytu (карту тимчасового перебування). Паперову подачу воєводи більше не приймають.' },
      { q: 'Чи можна працювати під час розгляду karty pobytu?', a: 'Так, якщо ви подавалися на підставі роботи і на момент подачі вже мали zezwolenie na pracę (дозвіл на роботу). В інших випадках треба дотримуватися правил вашого попереднього дозволу на перебування. UPO (електронне підтвердження прийняття) легалізує перебування, але не дає автоматично права на роботу.' },
      { q: 'Яка мінімальна зарплата для підстави «робота» у 2026 році?', a: '4 806 PLN brutto на місяць (мінімальна зарплата з 1 січня 2026). Контракти, підписані на меншу суму у 2025, треба оновити через aneks (додаткову угоду). Для Niebieskiej Karty UE (Блакитної карти ЄС) - 1,5× середньої зарплати по Польщі.' },
      { q: 'Чи можна подати на kartę pobytu, перебуваючи за кордоном?', a: 'Ні. Заява подається особисто в Польщі - на момент подачі у вас має бути законна підстава перебування (віза D або безвіз). Підготувати пакет можна дистанційно, а подати в день приїзду.' }
    ],
    pl: [
      { q: 'Jakie dokumenty są potrzebne do karty pobytu w 2026?', a: 'Wniosek z systemu MOS v2.0, paszport, 4 zdjęcia biometryczne 35×45 mm, potwierdzenie podstawy (umowa o pracę / udziały w Sp. z o.o. / zaświadczenie z uczelni), umowa najmu lub zameldowanie, ubezpieczenie zdrowotne min. 30 000 €, dowód opłaty skarbowej 340 PLN. Lista zależy od podstawy.' },
      { q: 'Ile czeka się na decyzję o karcie pobytu w Mazowieckim UW?', a: 'Ustawowo do 90 dni. W praktyce w Mazowieckim Urzędzie Wojewódzkim w 2026 - od 8 do 14 miesięcy. Pierwszy etap (przyjęcie wniosku w MOS v2.0) - 3-6 tygodni.' },
      { q: 'Czym jest MOS v2.0 i czy trzeba składać tylko przez ten system?', a: 'MOS v2.0 to nowa rządowa platforma dla cudzoziemców, która od grudnia 2025 zastąpiła inPOL. Od 2026 to jedyny kanał składania wniosków o kartę czasowego pobytu - papierowe wnioski u wojewody nie są już przyjmowane.' },
      { q: 'Czy mogę pracować w trakcie rozpatrywania wniosku?', a: 'Tak, jeśli podstawą jest praca i miałeś zezwolenie w chwili złożenia. UPO legalizuje pobyt, ale nie automatycznie daje prawo do pracy.' },
      { q: 'Jakie jest minimalne wynagrodzenie dla "pracy" w 2026?', a: '4 806 PLN brutto miesięcznie (płaca minimalna od 1 stycznia 2026). Niższe stare umowy trzeba aneksować. Dla Niebieskiej Karty UE - 1,5× średniej krajowej.' },
      { q: 'Czy mogę złożyć wniosek z zagranicy?', a: 'Nie. Wniosek składa się osobiście w Polsce - w chwili złożenia musisz mieć ważną podstawę pobytu (wiza D lub ruch bezwizowy). Pakiet możemy przygotować zdalnie i odebrać Cię w dniu przylotu.' }
    ],
    en: [
      { q: 'What documents are needed for a Polish residence card in 2026?', a: 'A MOS v2.0 application form (wniosek), passport, four biometric photos 35×45 mm, proof of grounds (employment contract / Sp. z o.o. (LLC) shareholding / university confirmation), proof of accommodation and meldunek (address registration), health insurance with at least €30,000 cover, and proof of the 340 PLN stamp duty. Specifics depend on the grounds.' },
      { q: 'How long does the residence card decision take in Mazowieckie Voivodeship?', a: 'Statutory limit: 90 days. In practice in Mazowieckie in 2026, the decision arrives in 8-14 months. The first stage - acceptance in MOS v2.0 - takes 3-6 weeks.' },
      { q: 'What is MOS v2.0 and is it the only filing channel?', a: 'MOS v2.0 is the new state e-platform for foreigners, replacing inPOL from December 2025. From 2026 it is the only channel - wojewody (regional governors) no longer accept paper applications.' },
      { q: 'Can I work while my Karta Pobytu (residence card) is being processed?', a: 'Yes, if your grounds are work-based and you already had a work permit when filing. The UPO certificate legalises stay but does not automatically grant a work right.' },
      { q: 'What is the minimum salary for the "work" basis in 2026?', a: 'PLN 4,806 gross per month (the minimum wage from 1 January 2026). Older contracts at lower amounts need an amendment (aneks). EU Blue Card (Niebieska Karta UE) requires 1.5× the national average.' },
      { q: 'Can I apply for Karta Pobytu from outside Poland?', a: 'No. The application is filed in person in Poland - you must have a valid stay basis (D-visa or visa-free) at the moment of filing. We can prepare the file remotely and meet you on arrival.' }
    ],
    tr: [
      { q: 'Polonya oturum kartı için 2026\'da hangi belgeler gereklidir?', a: 'MOS v2.0 sistemindeki yeni format wniosek, pasaport, 35x45 mm 4 biyometrik fotoğraf, gerekçe belgesi (umowa o pracę, Sp. z o.o. ortaklığı veya üniversite kayıt belgesi), konut belgesi ve meldunek, en az 30.000 € teminatlı sağlık sigortası, 340 PLN opłata skarbowa makbuzu. Belge listesi gerekçeye göre değişir.' },
      { q: 'Mazowiecki eyaletinde Karta Pobytu kararı kaç ay sürer?', a: 'Yasal süre 90 güne kadardır. Mazowiecki Urząd Wojewódzki\'de 2026 yılındaki gerçek süre 8-14 ay arasındadır. MOS v2.0 üzerinden doğru başvuru ve eksik belge talebi olmaması durumunda ilk aşama (przyjęcie wniosku - başvurunun kabulü) 3-6 hafta sürer.' },
      { q: 'MOS v2.0 nedir ve başvuru zorunlu olarak bu sistem üzerinden mi yapılır?', a: 'MOS v2.0 yabancılar için yeni devlet elektronik başvuru sistemidir. Aralık 2025\'te inPOL\'un yerini almıştır. 2026\'dan itibaren karta czasowego pobytu wniosek başvuruları için tek kanaldır. Kâğıt başvurular eyalet valiliklerince artık kabul edilmez.' },
      { q: 'Karta Pobytu değerlendirmesi sırasında çalışmak mümkün mü?', a: 'Evet, başvuru iş gerekçesiyle yapıldıysa ve teslim sırasında zezwolenie na pracę mevcutsa. Diğer durumlarda önceki ikamet izninizin kuralları geçerlidir. UPO (elektronik teslim belgesi) ikametinizi yasallaştırır ancak otomatik olarak çalışma hakkı vermez.' },
      { q: '2026\'da iş gerekçesi için asgari maaş ne kadar?', a: '1 Ocak 2026\'dan itibaren aylık 4.806 PLN brüttür. 2025\'te daha düşük tutarla imzalanan sözleşmelerin Aneks ile güncellenmesi gerekir. Niebieska Karta UE için Polonya geneli ortalama maaşının 1,5 katı (yaklaşık 11.200 PLN brüt) gereklidir.' },
      { q: 'Karta Pobytu başvurusu yurt dışından yapılabilir mi?', a: 'Hayır. Wniosek Polonya\'da bizzat verilir. Teslim anında yasal ikamet gerekçeniz (D vizesi veya vize muafiyeti) bulunmalıdır. Belge paketi uzaktan hazırlanabilir, Polonya\'ya geliş gününüzde teslim yapılabilir.' }
    ]
  },

  'karta-pobytu-dlya-detey-2026': {
    ru: [
      { q: 'Кто подаёт заявление на karta pobytu для ребёнка-иностранца?', a: 'Wniosek (заявление) подают оба законных представителя - обычно родители. Если родитель один, нужно решение суда об ограничении прав другого родителя или согласие на выезд / пребывание. Подача - через MOS v2.0 от имени ребёнка.' },
      { q: 'Сколько стоит карта побыту для ребёнка?', a: 'Госпошлина - 340 PLN за wniosek (заявление) + 100 PLN за пластик. Дети до 16 лет освобождаются от opłaty skarbowej (госпошлины) по части оснований (łączenie rodzin - воссоединение семьи). Точную сумму проверяет wojewoda (воевода) при подаче.' },
      { q: 'Можно ли получить TRC ребёнку, если у родителей только виза D?', a: 'Только если родитель подаёт на TRC одновременно или уже подал. Без основания у одного из родителей у ребёнка нет своего основания. Исключение - польское происхождение или гражданство второго родителя.' },
      { q: 'На какой срок выдаётся карта побыту ребёнку?', a: 'До совершеннолетия родителя-обладателя TRC, но не дольше 3 лет. После 18 лет ребёнок подаёт самостоятельно - обычно по студенческому или рабочему основанию.' }
    ],
    uk: [
      { q: 'Хто подає заяву на karta pobytu для дитини-іноземця?', a: 'Wniosek (заяву) подають обидва законні представники — зазвичай батьки. Якщо батько чи мати одна, потрібне рішення суду про обмеження прав іншого з батьків або згода на виїзд / перебування. Подача — через MOS v2.0 від імені дитини.' },
      { q: 'Скільки коштує karta pobytu для дитини?', a: 'Держмито — 340 PLN за wniosek (заяву) + 100 PLN за пластик. Діти до 16 років звільняються від opłaty skarbowej (держмита) за певними підставами (łączenie rodzin — возз\'єднання сім\'ї). Точну суму перевіряє wojewoda (воєвода) під час подачі.' },
      { q: 'Чи може дитина отримати TRC, якщо батьки мають лише візу D?', a: 'Тільки якщо один із батьків подає на TRC одночасно або вже подав. Без підстави у когось із батьків у дитини немає власної підстави. Виняток — польське походження або громадянство другого з батьків.' },
      { q: 'На який строк видається karta pobytu дитині?', a: 'До повноліття батька-власника TRC, але не довше ніж на 3 роки. Після 18 років дитина подає самостійно — зазвичай за студентською або робочою підставою.' }
    ],

    pl: [
      { q: 'Kto składa wniosek o kartę pobytu dla dziecka cudzoziemca?', a: 'Wniosek składają oboje przedstawiciele ustawowi - zwykle rodzice. Jeśli rodzic jest sam, potrzebny jest wyrok sądu lub zgoda drugiego rodzica. Wniosek składa się przez MOS v2.0 w imieniu dziecka.' },
      { q: 'Ile kosztuje karta pobytu dla dziecka?', a: 'Opłata skarbowa - 340 PLN + 100 PLN za blankiet. Dzieci do 16 lat są zwolnione z części opłat (łączenie rodzin). Wojewoda weryfikuje przy złożeniu.' },
      { q: 'Czy dziecko może otrzymać TRC, gdy rodzice mają tylko wizę D?', a: 'Tylko jeśli rodzic składa wniosek o TRC równolegle lub już złożył. Bez podstawy u rodzica dziecko nie ma własnej podstawy. Wyjątek - polskie pochodzenie lub obywatelstwo drugiego rodzica.' },
      { q: 'Na jaki okres wydawana jest karta pobytu dziecku?', a: 'Maksymalnie do końca ważności karty rodzica, ale nie dłużej niż 3 lata. Po 18. roku życia dziecko składa wniosek samodzielnie - najczęściej student lub praca.' }
    ],
    en: [
      { q: 'Who applies for a Polish residence card on behalf of a foreign child?', a: 'Both legal representatives apply - usually parents. A single parent needs a court decision restricting the other parent or written consent. Filing goes through MOS v2.0 on the child\'s behalf.' },
      { q: 'How much does a residence card cost for a child?', a: 'PLN 340 stamp duty plus PLN 100 for the card. Children under 16 are exempt from part of the fees on family-reunification (łączenie rodzin) grounds. The wojewoda (regional governor) confirms the amount on filing.' },
      { q: 'Can a child get a TRC if the parents only hold D-visas?', a: 'Only if a parent files for a TRC at the same time or has already filed. Without a parental basis the child has no own ground. Exception: Polish heritage or second-parent citizenship.' },
      { q: 'How long is a residence card issued to a child?', a: 'Up to the parent\'s card expiry, capped at three years. After 18 the child files independently - usually on student or employment grounds.' }
    ],
    tr: [
      { q: '2026 yılında yabancı bir çocuk için Karta Pobytu başvurusunu kim yapar?', a: 'Wniosek (başvuru), her iki yasal temsilci tarafından yapılır - genellikle anne ve baba. Tek ebeveyn varsa, diğer ebeveynin haklarını sınırlayan mahkeme kararı veya yazılı muvafakat (apostilli) gereklidir. Başvuru, MOS v2.0 (yabancılar için yeni e-başvuru sistemi) üzerinden çocuk adına yapılır.' },
      { q: 'Çocuk için Karta Pobytu ücreti ne kadar?', a: 'Wniosek için 340 PLN opłata skarbowa (damga vergisi) + plastik kart için 100 PLN. 16 yaş altı çocuklar, łączenie rodzin (aile birleşimi) gerekçesinde harcın bir kısmından muaftır. Kesin tutarı wojewoda (eyalet valisi) başvuruda doğrular.' },
      { q: 'Ebeveynler yalnızca D vizesi sahibiyse çocuk Karta Pobytu alabilir mi?', a: 'Yalnızca ebeveyn aynı anda Karta Czasowego Pobytu başvurusu yaptıysa veya zaten yaptıysa. Ebeveynde gerekçe yoksa çocuğun da kendi gerekçesi olmaz. İstisna: ikinci ebeveynin Polonya kökü veya vatandaşlığı.' },
      { q: 'Çocuğa Karta Pobytu hangi süreyle verilir?', a: 'Karta sahibi ebeveynin kartı geçerli olduğu süre kadar, ancak en fazla 3 yıl. 18 yaşından sonra çocuk başvuruyu kendi adına yapar - genellikle öğrenci veya iş gerekçesiyle.' }
    ]
  },

  'karta-pobytu-privyazka-k-rabotodatelyu': {
    ru: [
      { q: 'Привязана ли карта побыту к работодателю?', a: 'Да, jednolity TRC по основанию "работа" привязана к конкретному работодателю, должности и зарплате (przyznana decyzją - присвоена решением). При смене любого из этих параметров нужно подать zmianę zezwolenia (изменение разрешения) в течение 15 рабочих дней.' },
      { q: 'Что делать при увольнении с работы по karcie pobytu?', a: 'У вас 30 дней с момента ustanie zatrudnienia (прекращения трудовых отношений), чтобы письменно уведомить wojewodę (воеводу). Карта остаётся действительной, но если за 90 дней (по zwykłej TRC - обычной TRC) или 30 дней (Niebieska Karta UE - Голубая карта ЕС) не найдёте новую работу - воевода может отозвать decyzję (решение).' },
      { q: 'Сколько дней даётся на поиск новой работы по karcie pobytu?', a: 'По обычной karcie czasowego pobytu (карте временного пребывания) - 30 дней с увольнения, чтобы уведомить wojewodę (воеводу), и до 90 дней без работы суммарно за время действия карты. По Niebieskiej Karcie UE (Голубой карте ЕС) - те же 30 дней, всего до 6 месяцев за весь срок карты.' },
      { q: 'Нужно ли менять karta pobytu при смене работодателя?', a: 'Не нужно менять сам пластик, но нужно подать zmianę zezwolenia (изменение разрешения) - форма проще, чем nowy wniosek (новое заявление). Госпошлина - 220 PLN, без сдачи биометрии. Решение - обычно 30-60 дней.' }
    ],
    uk: [
      { q: 'Чи прив\'язана karta pobytu до роботодавця?', a: 'Так, jednolity TRC за підставою «робота» прив\'язана до конкретного роботодавця, посади та зарплати. При зміні будь-якого з цих параметрів необхідно подати zmianę zezwolenia (зміну дозволу) протягом 15 робочих днів.' },
      { q: 'Що робити при звільненні з роботи за karta pobytu?', a: 'У вас є 30 днів з моменту ustanie zatrudnienia (припинення трудових відносин), щоб письмово повідомити wojewodę (воєводу). Картка залишається дійсною, але якщо протягом 90 днів (TRC) або 30 днів (Niebieska Karta UE) не знайдете нову роботу — воєвода може відкликати decyzję.' },
      { q: 'Скільки днів відводиться на пошук нової роботи за karta pobytu?', a: 'За звичайною karta czasowego pobytu — 30 днів з дня звільнення, щоб повідомити wojewodę, і до 90 днів без роботи сумарно за час дії картки. За Niebieska Karta UE — ті самі 30 днів для повідомлення, і загалом до 6 місяців за весь строк дії картки.' },
      { q: 'Чи потрібно міняти karta pobytu при зміні роботодавця?', a: 'Сам пластик міняти не потрібно, але необхідно подати zmianę zezwolenia (зміну дозволу). Держмито — 220 PLN, без здачі біометрії. Рішення — зазвичай 30–60 днів.' }
    ],

    pl: [
      { q: 'Czy karta pobytu jest powiązana z pracodawcą?', a: 'Tak, jednolite TRC na podstawie pracy jest przyznawane konkretnemu pracodawcy, stanowisku i wynagrodzeniu. Każda zmiana wymaga wniosku o zmianę zezwolenia w ciągu 15 dni roboczych.' },
      { q: 'Co zrobić po utracie pracy na karcie pobytu?', a: 'Masz 30 dni od ustania zatrudnienia na pisemne zawiadomienie wojewody. Karta pozostaje ważna, ale jeśli w ciągu 90 dni (TRC) lub 30 dni (Niebieska Karta UE) nie znajdziesz nowej pracy - wojewoda może cofnąć zezwolenie.' },
      { q: 'Ile dni jest na znalezienie nowej pracy?', a: 'Przy zwykłym TRC - 30 dni na zawiadomienie wojewody, łącznie do 90 dni bez pracy w okresie ważności karty. Przy Niebieskiej Karcie UE - te same 30 dni i łącznie do 6 miesięcy.' },
      { q: 'Czy trzeba wymieniać kartę pobytu przy zmianie pracodawcy?', a: 'Plastiku nie wymienia się, ale trzeba złożyć wniosek o zmianę zezwolenia. Opłata - 220 PLN, bez nowej biometrii. Decyzja - zwykle 30-60 dni.' }
    ],
    en: [
      { q: 'Is a Polish residence card tied to a specific employer?', a: 'Yes - a single TRC granted on employment grounds is tied to a specific employer, position and salary. Any change requires a zmiana zezwolenia (change-of-permit) application within 15 working days.' },
      { q: 'What to do after losing a job on a residence card?', a: 'You have 30 days from termination (ustanie zatrudnienia) to notify the wojewoda (regional governor) in writing. The card stays valid, but if you don\'t find new work within 90 days (TRC) or 30 days (EU Blue Card), the wojewoda can revoke the decyzja (decision).' },
      { q: 'How many days do I have to find new employment?', a: 'On a standard TRC: 30 days to notify the wojewoda (regional governor) and up to 90 days without work cumulatively. On an EU Blue Card: the same 30 days, with up to 6 months unemployment cumulative.' },
      { q: 'Do I need a new card when I change employer?', a: 'The card itself is not reissued, but you must file an application for change of permit (zmiana zezwolenia). Fee: PLN 220, no new biometrics. Decision typically 30-60 days.' }
    ],
    tr: [
      { q: 'Polonya oturum kartı belirli bir işverene mi bağlıdır?', a: 'Evet, praca (çalışma) gerekçesiyle verilen Karta Czasowego Pobytu somut bir işverene, pozisyona ve maaşa bağlıdır. Bu unsurlardan herhangi biri değişirse 15 iş günü içinde zmiana zezwolenia (izin değişikliği) başvurusu yapılmalıdır.' },
      { q: 'Karta Pobytu sahibiyken işten çıkarılırsam ne yapmalıyım?', a: 'İş ilişkisinin sona ermesinden itibaren 30 gün içinde wojewoda\'yı yazılı olarak bilgilendirmek zorundasınız. Karta geçerli kalır, ancak 90 gün içinde (sıradan TRC) ya da 30 gün içinde (Niebieska Karta UE) yeni iş bulunmazsa izin geri alınabilir.' },
      { q: 'Karta Pobytu ile yeni iş bulmak için kaç gün vardır?', a: 'Sıradan Karta Czasowego Pobytu\'da işten çıkarıldıktan sonra wojewoda\'ya bildirim için 30 gün ve karta\'nın geçerlilik süresi içinde toplam 90 güne kadar işsizlik. Niebieska Karta UE (AB Mavi Kartı)\'da 30 gün bildirim, toplamda 6 aya kadar işsizlik.' },
      { q: 'İşveren değişikliğinde Karta Pobytu yenilenir mi?', a: 'Plastik kart yenilenmez, ancak zmiana zezwolenia başvurusu yapılır - yeni wnioskten daha basittir. Harç 220 PLN\'dir, biyometri tekrar alınmaz. Karar genellikle 30-60 günde verilir.' }
    ]
  },

  'karta-stalego-pobytu-pmzh-polsha-2026': {
    ru: [
      { q: 'Кто может получить karta stałego pobytu (карту постоянного пребывания) в 2026 году?', a: 'Постоянное пребывание оформляют по 5 базовым основаниям: 5 лет непрерывного пребывания, брак с гражданином Польши более 3 лет, польское происхождение, статус беженца с 5 годами проживания, дети граждан Польши. Каждое основание имеет свой пакет документов.' },
      { q: 'Засчитывается ли время на студенческой визе в 5 лет для PMŻ?', a: 'Только наполовину - по Art. 65 ust. 2 Ustawy o cudzoziemcach (Закона об иностранцах). 4 года на студенческой karcie pobytu (карте пребывания) = 2 года в зачёт 5-летнего срока для karta stałego pobytu (карты постоянного пребывания).' },
      { q: 'Нужен ли польский язык для karta stałego pobytu?', a: 'Нет - по 5-летнему сроку или браку язык не требуется. Польский B1 нужен только для гражданства (uznanie / nadanie obywatelstwa - признание / предоставление гражданства).' },
      { q: 'Сколько ждать karta stałego pobytu в Mazowieckim UW в 2026?', a: 'Официальный срок - до 60 дней. На практике в Mazowieckim Urzędzie Wojewódzkim (Мазовецком воеводском управлении) - 12-18 месяцев. Можно ускорить через ponaglenie (жалобу на бездействие) do Szefa UdSC (Главе Управления по делам иностранцев) и далее skargę na bezczynność (жалобу на бездействие) do WSA (Воеводского административного суда).' },
      { q: 'Можно ли работать в Польше с karta stałego pobytu без zezwoleniа?', a: 'Да. Karta stałego pobytu (карта постоянного пребывания) даёт безусловное право работать на любого работодателя без zezwolenia na pracę (разрешения на работу) и без обязанности уведомлять wojewodę (воеводу) о смене работы.' }
    ],
    uk: [
      { q: 'Хто може отримати kartę stałego pobytu (карту постійного перебування) у 2026 році?', a: 'Постійне перебування оформлюють за 5 базовими підставами: 5 років безперервного перебування, шлюб із громадянином Польщі понад 3 роки, польське походження, статус біженця з 5 роками проживання, діти громадян Польщі. Кожна підстава має свій пакет документів.' },
      { q: 'Чи зараховується час на студентській візі у 5 років для PMŻ?', a: 'Лише наполовину - за Art. 65 ust. 2 Ustawy o cudzoziemcach (Закону про іноземців). 4 роки на студентській karcie pobytu (карті перебування) = 2 роки в зарахування 5-річного строку для karty stałego pobytu (карти постійного перебування).' },
      { q: 'Чи потрібна польська мова для karty stałego pobytu?', a: 'Ні - за 5-річним строком або шлюбом мова не потрібна. Польську B1 потрібно лише для громадянства (uznanie / nadanie obywatelstwa - визнання / надання громадянства).' },
      { q: 'Скільки чекати kartę stałego pobytu в Mazowieckim UW у 2026?', a: 'Офіційний строк - до 60 днів. На практиці в Mazowieckim Urzędzie Wojewódzkim (Мазовецькому воєводському управлінні) - 12-18 місяців. Можна прискорити через ponaglenie (скаргу на бездіяльність) do Szefa UdSC (Голові Управління у справах іноземців) і далі skargę na bezczynność (скаргу на бездіяльність) do WSA (Воєводського адміністративного суду).' },
      { q: 'Чи можна працювати в Польщі з kartą stałego pobytu без zezwolenia?', a: 'Так. Karta stałego pobytu (карта постійного перебування) дає безумовне право працювати на будь-якого роботодавця без zezwolenia na pracę (дозволу на роботу) і без обов’язку повідомляти wojewodę (воєводу) про зміну роботи.' }
    ],
    pl: [
      { q: 'Kto może otrzymać kartę stałego pobytu w 2026?', a: '5 podstaw: 5 lat nieprzerwanego pobytu, małżeństwo z obywatelem RP powyżej 3 lat, polskie pochodzenie, status uchodźcy + 5 lat pobytu, dzieci obywateli RP. Każda podstawa ma własny pakiet dokumentów.' },
      { q: 'Czy okres na karcie studenckiej liczy się do 5 lat?', a: 'Tylko w połowie - zgodnie z art. 65 ust. 2 Ustawy o cudzoziemcach. 4 lata na karcie studenckiej = 2 lata zaliczone do okresu 5-letniego.' },
      { q: 'Czy do karty stałego pobytu wymagany jest polski język?', a: 'Nie - przy podstawie 5-letniej ani małżeńskiej. Polski B1 jest wymagany tylko przy obywatelstwie (uznanie / nadanie).' },
      { q: 'Ile się czeka na decyzję o karcie stałego pobytu w 2026?', a: 'Ustawowo 60 dni. W Mazowieckim UW w praktyce 12-18 miesięcy. Można skrócić przez ponaglenie do Szefa UdSC i skargę na bezczynność do WSA.' },
      { q: 'Czy z kartą stałego pobytu można pracować bez zezwolenia?', a: 'Tak. Karta stałego pobytu daje pełne prawo do pracy u każdego pracodawcy bez zezwolenia i bez obowiązku zawiadamiania wojewody o zmianie pracy.' }
    ],
    en: [
      { q: 'Who is eligible for Karta Stałego Pobytu (permanent residence card) in 2026?', a: 'Five primary bases: 5 years of continuous residence, marriage to a Polish citizen for over 3 years, Polish heritage, refugee status with 5 years of stay, and children of Polish citizens. Each basis has its own document set.' },
      { q: 'Does student-visa time count toward the 5 years for permanent residence?', a: 'Only at half-rate under Article 65(2) of the Law on Foreigners. Four years on a student card counts as two toward the 5-year requirement.' },
      { q: 'Is Polish language required for permanent residence?', a: 'No - neither for the 5-year nor the marriage basis. A Polish B1 certificate is required only for citizenship (uznanie / nadanie - recognition / grant).' },
      { q: 'How long does the permanent-residence decision take in 2026?', a: 'Statutory limit: 60 days. In Mazowieckie Voivodeship: 12-18 months in practice. Acceleration is possible via a ponaglenie (urgency motion) to the Szef UdSC (Head of the Office for Foreigners) and a skarga na bezczynność (complaint about inaction) to the WSA (Voivodeship Administrative Court).' },
      { q: 'Can I work without a permit on a Karta Stałego Pobytu?', a: 'Yes. Permanent residence grants the unconditional right to work for any employer without a zezwolenie na pracę (work permit) and without notifying the wojewoda (regional governor) of changes.' }
    ],
    tr: [
      { q: '2026\'da Karta Stałego Pobytu kimler alabilir?', a: 'Daimi oturum 5 temel gerekçeyle alınır: 5 yıl kesintisiz ikamet, Polonya vatandaşıyla 3 yıldan uzun evlilik, Polonya kökü, mülteci statüsü ile 5 yıl ikamet ve Polonya vatandaşlarının çocukları. Her gerekçenin kendi belge paketi vardır.' },
      { q: 'Daimi oturum için 5 yılın hesabında öğrenci vizesi süresi sayılır mı?', a: 'Yalnızca yarı oranında - Ustawa o cudzoziemcach (Yabancılar Kanunu) art. 65 fıkra 2 uyarınca. 4 yıl öğrenci Karta Pobytu\'su, Karta Stałego Pobytu için 5 yıllık sürede 2 yıl olarak sayılır.' },
      { q: 'Karta Stałego Pobytu için Lehçe gerekli midir?', a: 'Hayır - 5 yıllık ikamet ya da evlilik gerekçesiyle dil sınavı şartı yoktur. Lehçe B1 yalnızca obywatelstwo (Polonya vatandaşlığı) için, uznanie/nadanie (tanıma/verme) yoluyla istenir.' },
      { q: '2026\'da Mazowieckie Urząd Wojewódzki\'de Karta Stałego Pobytu kararı ne kadar sürer?', a: 'Yasal süre 60 gündür. Pratikte Mazowieckie Urząd Wojewódzki (Mazowiecki Eyalet İdaresi)\'nde 12-18 ay sürer. Süreç Szef UdSC (Yabancılar Dairesi Başkanı)\'na ponaglenie (acele talebi) ve WSA (Eyalet İdare Mahkemesi)\'ne skarga na bezczynność (eylemsizlik şikayeti) ile hızlandırılabilir.' },
      { q: 'Karta Stałego Pobytu ile zezwolenie olmadan çalışılabilir mi?', a: 'Evet. Karta Stałego Pobytu (daimi oturum kartı), herhangi bir işverende zezwolenie na pracę (çalışma izni) olmadan ve iş değişikliğini wojewoda\'ya bildirme yükümlülüğü olmadan çalışma hakkı verir.' }
    ]
  },

  'karta-stalego-pobytu-vs-rezident-eu': {
    ru: [
      { q: 'В чём разница karta stałego pobytu (карта постоянного пребывания) и długoterminowy rezydent UE (долгосрочный резидент ЕС)?', a: 'Karta stałego pobytu действует только в Польше, выдаётся за связь с РП (брак, происхождение, длительное пребывание). Rezydent długoterminowy UE - европейский статус по Директиве 2003/109/EC, даёт право жить и работать в любой стране ЕС после 12 месяцев в новой стране.' },
      { q: 'Что лучше - PMŻ или статус długoterminowego rezydenta UE (долгосрочного резидента ЕС)?', a: 'Если планируете жить только в Польше - PMŻ оформляется быстрее и по тем же основаниям. Если есть планы на Германию, Францию или другую страну ЕС - статус długoterminowy rezydent UE даёт мобильность.' },
      { q: 'Можно ли иметь karta stałego pobytu (карту постоянного пребывания) и długoterminowy rezydent UE одновременно?', a: 'Нет. По польскому праву это разные пластики, и статус rezydenta UE заменяет PMŻ. На практике большинство иностранцев выбирают одну из двух карт по своему сценарию.' }
    ],
    uk: [
      { q: 'У чому різниця між karta stałego pobytu та długoterminowy rezydent UE?', a: 'Karta stałego pobytu діє лише в Польщі та видається за зв\'язок з РП. Rezydent długoterminowy UE — це європейський статус відповідно до Директиви 2003/109/EC, який надає право жити та працювати в будь-якій країні ЄС після 12 місяців у новій країні.' },
      { q: 'Що краще — PMŻ чи статус długoterminowego rezydenta UE?', a: 'Якщо плануєте жити лише в Польщі — PMŻ оформляється швидше і за тими самими підставами. Якщо є плани переїхати до Німеччини, Франції чи іншої країни ЄС — статус długoterminowy rezydent UE дає мобільність.' },
      { q: 'Чи можна мати karta stałego pobytu та długoterminowy rezydent UE одночасно?', a: 'Ні. За польським законодавством це різні картки, і статус rezydenta UE замінює PMŻ. На практиці більшість іноземців обирають одну з двох карток залежно від свого сценарію.' }
    ],

    pl: [
      { q: 'Czym różni się karta stałego pobytu od rezydenta długoterminowego UE?', a: 'Karta stałego pobytu obowiązuje tylko w Polsce, wydawana za więź z RP. Rezydent długoterminowy UE to status unijny z dyrektywy 2003/109/WE - pozwala żyć i pracować w innym państwie UE po 12 miesiącach pobytu tam.' },
      { q: 'Co lepiej - pobyt stały czy rezydent długoterminowy UE?', a: 'Plan na Polskę - PR jest szybszy i ma więcej podstaw. Plan na Niemcy, Francję, Niderlandy - rezydent UE daje mobilność.' },
      { q: 'Czy można mieć kartę stałego pobytu i rezydenta UE jednocześnie?', a: 'Nie. To dwa różne dokumenty i status rezydenta UE zastępuje PR. W praktyce wybiera się jeden z nich.' }
    ],
    en: [
      { q: 'What is the difference between Karta Stałego Pobytu and an EU long-term resident card?', a: 'Karta Stałego Pobytu is valid only in Poland and granted for ties with Poland (marriage, heritage, long stay). The EU long-term resident card under Directive 2003/109/EC grants mobility - you can live and work in another EU state after 12 months there.' },
      { q: 'Which is better - Polish PR or EU long-term resident status?', a: 'For someone planning to stay in Poland, PR is faster and has more bases. For someone considering Germany, France or the Netherlands, the EU status offers mobility.' },
      { q: 'Can you hold both cards at the same time?', a: 'No - they are two different cards and the EU status replaces PR. Foreigners pick one based on their plans.' }
    ],
    tr: [
      { q: 'Karta Stałego Pobytu ile AB Uzun Süreli Mukim kartı arasındaki fark nedir?', a: 'Karta Stałego Pobytu yalnızca Polonya\'da geçerlidir; Polonya ile bağ (evlilik, köken, uzun ikamet) gerekçesiyle verilir. Karta Rezydenta Długoterminowego UE ise 2003/109/EC sayılı Direktife dayalı AB statüsüdür ve yeni AB ülkesinde 12 ay sonra orada yaşama ve çalışma hakkı verir.' },
      { q: 'Hangisi daha avantajlı: daimi oturum mu, AB uzun süreli mukim statüsü mü?', a: 'Yalnızca Polonya\'da yaşamayı planlıyorsanız Karta Stałego Pobytu daha hızlı verilir ve daha çok gerekçesi vardır. Almanya, Fransa veya başka bir AB ülkesine geçiş düşünülüyorsa AB uzun süreli mukim kartı mobilite sağlar.' },
      { q: 'Aynı anda hem Karta Stałego Pobytu hem AB uzun süreli mukim kartı tutulabilir mi?', a: 'Hayır. Polonya hukukunda bunlar farklı kartlardır ve AB mukim statüsü daimi oturumun yerine geçer. Pratikte yabancıların çoğu, kendi senaryolarına göre iki karttan birini seçer.' }
    ]
  },

  'kak-podat-zayavlenie-mos-2-0': {
    ru: [
      { q: 'Как зайти в систему MOS v2.0?', a: 'Логин - через Profil Zaufany (доверенный профиль), login.gov.pl, e-dowód или mDowód. Без одного из этих идентификаторов в систему не попадёшь. Profil Zaufany оформляется через банк (mBank, PKO, ING) или в urzędzie gminy (городском управлении) с PESEL.' },
      { q: 'Что делать, если MOS v2.0 не принимает документы?', a: 'Проверьте формат (PDF/A или JPG до 5 MB на файл), правильность подписи (ePUAP / qualified signature) и совпадение данных в wniosku (заявлении) и załącznikach (приложениях). Большинство ошибок - это слишком тяжёлые сканы или несовпадающие даты рождения.' },
      { q: 'Можно ли подать wniosek в MOS v2.0 без PESEL?', a: 'Можно, но в анкете нужно указать причину отсутствия PESEL и приложить копию паспорта со штампом въезда. Чаще всего PESEL получают параллельно - без него трудно с zameldowaniem (регистрацией по адресу) и медстраховкой.' },
      { q: 'Как отслеживать статус заявления в MOS v2.0?', a: 'В личном кабинете MOS v2.0 - раздел "Status sprawy" (статус дела). Параллельно уведомления приходят на eDoręczenia. Звонить в wojewodę (воеводу) или через biuro podawcze (канцелярию) больше нельзя - все коммуникации через систему.' }
    ],
    uk: [
      { q: 'Як увійти до системи MOS v2.0?', a: 'Вхід — через Profil Zaufany, login.gov.pl, e-dowód або mDowód. Без одного з цих ідентифікаторів потрапити до системи не вийде. Profil Zaufany можна оформити через банк (mBank, PKO, ING) або в urzędzie gminy за наявності PESEL.' },
      { q: 'Що робити, якщо MOS v2.0 не приймає документи?', a: 'Перевірте формат (PDF/A або JPG до 5 MB на файл), правильність підпису (ePUAP / qualified signature) і збіг даних у wniosku та załącznikach. Більшість помилок — це надто важкі скани або невідповідність дат народження.' },
      { q: 'Чи можна подати wniosek у MOS v2.0 без PESEL?', a: 'Можна, але в анкеті потрібно вказати причину відсутності PESEL і додати копію паспорта зі штампом в\'їзду. Найчастіше PESEL отримують паралельно — без нього виникають труднощі із zameldowaniem і медичним страхуванням.' },
      { q: 'Як відстежувати статус заяви в MOS v2.0?', a: 'В особистому кабінеті MOS v2.0 — розділ "Status sprawy". Паралельно сповіщення надходять на eDoręczenia. Телефонувати до воєводи більше не можна — вся комунікація відбувається через систему.' }
    ],

    pl: [
      { q: 'Jak zalogować się do MOS v2.0?', a: 'Logowanie przez Profil Zaufany, login.gov.pl, e-dowód lub mDowód. Bez tych identyfikatorów nie wejdziesz. Profil Zaufany założysz przez bank (mBank, PKO, ING) lub w urzędzie gminy.' },
      { q: 'Co zrobić, gdy MOS v2.0 nie przyjmuje dokumentów?', a: 'Sprawdź format (PDF/A lub JPG do 5 MB), prawidłowość podpisu (ePUAP / podpis kwalifikowany) i zgodność danych. Najczęstsze błędy: zbyt ciężkie skany i niezgodne daty.' },
      { q: 'Czy można złożyć wniosek w MOS v2.0 bez PESEL?', a: 'Tak, ale we wniosku trzeba wskazać powód i dołączyć kopię paszportu ze stemplem wjazdu. Zwykle PESEL bierze się równolegle - bez niego trudno o meldunek i ubezpieczenie.' },
      { q: 'Jak śledzić status wniosku w MOS v2.0?', a: 'W panelu MOS v2.0 - sekcja "Status sprawy". Powiadomienia idą też na eDoręczenia. Telefon do wojewody nie pomaga - wszystko przez system.' }
    ],
    en: [
      { q: 'How do I log into MOS v2.0?', a: 'Login goes through Profil Zaufany (Trusted Profile), login.gov.pl, e-dowód or mDowód. Without one of these identifiers you cannot enter. Profil Zaufany can be set up via Polish banks (mBank, PKO, ING) or at a gmina (municipal) office.' },
      { q: 'What to do when MOS v2.0 rejects documents?', a: 'Check the format (PDF/A or JPG up to 5 MB), the signature (ePUAP or a qualified e-signature), and that the data on the application matches the attachments. Common errors: oversized scans and date-of-birth mismatches.' },
      { q: 'Can I file via MOS v2.0 without PESEL?', a: 'Yes, but the form requires a reason and a passport copy with the entry stamp. Most applicants obtain PESEL in parallel - without it, meldunek (address registration) and health insurance are difficult.' },
      { q: 'How do I track the status of a MOS v2.0 application?', a: 'Inside the MOS v2.0 cabinet, in "Status sprawy" (Case status). Notifications also arrive via eDoręczenia. Phone calls to the voivodeship are no longer effective - all communication is through the platform.' }
    ],
    tr: [
      { q: 'MOS v2.0 sistemine nasıl giriş yapılır?', a: 'Giriş Profil Zaufany (güvenilir profil), login.gov.pl, e-dowód veya mDowód üzerinden yapılır. Bu kimlik doğrulayıcılardan biri olmadan sisteme girilemez. Profil Zaufany Polonya bankaları (mBank, PKO, ING) üzerinden veya PESEL ile urząd gminy (belediye ofisi)\'nde açılır.' },
      { q: 'MOS v2.0 belgeleri kabul etmiyorsa ne yapılmalı?', a: 'Format (PDF/A veya dosya başına 5 MB\'a kadar JPG), imza doğruluğu (ePUAP / kalifiye imza) ve wniosku ile załącznikler arasında veri uyumu kontrol edilmelidir. En sık hatalar: çok büyük taramalar ve uyumsuz doğum tarihleri.' },
      { q: 'MOS v2.0\'da PESEL olmadan başvuru yapılabilir mi?', a: 'Yapılabilir, ancak başvuruda PESEL\'in olmama nedeni belirtilmeli ve giriş damgalı pasaport kopyası eklenmelidir. PESEL genelde paralel olarak alınır - bunsuz zameldowanie (adres kaydı) ve sağlık sigortası işlemleri zorlaşır.' },
      { q: 'MOS v2.0\'da başvuru durumu nasıl takip edilir?', a: 'MOS v2.0 panelinde \'Status sprawy\' (dosya durumu) bölümünde takip edilir. Bildirimler eDoręczenia\'ya da gelir. Wojewoda\'ya telefon etmek ya da biuro podawcze (kayıt ofisi) üzerinden iletişim artık geçerli değildir - tüm yazışmalar sistem üzerinden yürür.' }
    ]
  },

  'eu-blue-card-vs-karta-pobytu-2026': {
    ru: [
      { q: 'В чём разница EU Blue Card и обычной karta pobytu?', a: 'EU Blue Card - европейская карта для высококвалифицированных специалистов с зарплатой от 1,5× средней по стране и высшим образованием. Обычная karta czasowego pobytu (карта временного пребывания) - национальный документ Польши, без требования по образованию. Blue Card даёт мобильность по ЕС после 12 месяцев.' },
      { q: 'Какая зарплата нужна для EU Blue Card в Польше в 2026?', a: 'Минимум 1,5× средней зарплаты по Польше. В 2026 это около 12 750 PLN brutto/месяц. Для дефицитных профессий (IT, инженерия) - снижено до 1,2× средней. Точную цифру публикует Главное статистическое управление (GUS).' },
      { q: 'Можно ли с EU Blue Card работать в Германии или Нидерландах?', a: 'Да, после 12 месяцев работы в Польше по Blue Card вы можете подать на Blue Card в любой другой стране ЕС по упрощённой процедуре. Это главное преимущество перед национальной karcie pobytu (картой пребывания).' },
      { q: 'Сколько стоит и как долго оформляется EU Blue Card?', a: 'Госпошлина - 440 PLN (340 wniosek (заявление) + 100 пластик). Срок - официально до 60 дней (для Blue Card), реально 3-5 месяцев в Mazowieckim UW (Мазовецком воеводском управлении). Это быстрее обычной TRC за счёт ускоренной процедуры.' }
    ],
    uk: [
      { q: 'У чому різниця між EU Blue Card і звичайною karta pobytu?', a: 'EU Blue Card — це європейська картка для висококваліфікованих фахівців із зарплатою від 1,5× середньої по країні та вищою освітою. Звичайна karta czasowego pobytu — національний документ Польщі без вимог до освіти. Blue Card надає мобільність у межах ЄС після 12 місяців.' },
      { q: 'Яка зарплата потрібна для EU Blue Card у Польщі в 2026 році?', a: 'Мінімум 1,5× середньої зарплати по Польщі. У 2026 році це близько 12 750 PLN brutto на місяць. Для дефіцитних професій (IT, інженерія) — знижено до 1,2× середньої. Точну цифру публікує GUS.' },
      { q: 'Чи можна з EU Blue Card працювати в Німеччині або Нідерландах?', a: 'Так, після 12 місяців роботи в Польщі за Blue Card ви можете подати на Blue Card у будь-якій іншій країні ЄС за спрощеною процедурою. Це головна перевага перед національною karta pobytu.' },
      { q: 'Скільки коштує і як довго оформляється EU Blue Card?', a: 'Державне мито — 440 PLN (340 за wniosek + 100 за картку). Термін — офіційно до 60 днів, реально 3–5 місяців у Mazowieckim UW. Це швидше, ніж звичайна TRC.' }
    ],

    pl: [
      { q: 'Jaka jest różnica między Niebieską Kartą UE a kartą pobytu?', a: 'Niebieska Karta UE - unijny dokument dla wysoko wykwalifikowanych pracowników z pensją 1,5× średniej krajowej i wyższym wykształceniem. Standardowa karta czasowego pobytu - krajowa, bez wymogu wykształcenia. Niebieska Karta daje mobilność w UE po 12 miesiącach.' },
      { q: 'Jakie wynagrodzenie jest wymagane dla Niebieskiej Karty UE w 2026?', a: 'Co najmniej 1,5× średniej krajowej - w 2026 około 12 750 PLN brutto. Dla zawodów deficytowych (IT, inżynieria) - 1,2×. Aktualną liczbę podaje GUS.' },
      { q: 'Czy z Niebieską Kartą UE mogę pracować w Niemczech?', a: 'Tak - po 12 miesiącach z Niebieską Kartą UE w Polsce możesz złożyć wniosek w innym państwie UE w trybie uproszczonym.' },
      { q: 'Ile kosztuje i ile trwa wydanie Niebieskiej Karty UE?', a: 'Opłata 440 PLN. Termin ustawowy 60 dni (dla Niebieskiej Karty), w Mazowieckim UW realnie 3-5 miesięcy. Szybciej niż zwykła TRC.' }
    ],
    en: [
      { q: 'What\'s the difference between an EU Blue Card and a Karta Pobytu?', a: 'The EU Blue Card is an EU-wide card for highly qualified professionals earning 1.5× the national average with a degree. The standard Karta Czasowego Pobytu is a national Polish card with no degree requirement. The Blue Card grants EU mobility after 12 months.' },
      { q: 'What salary is needed for the EU Blue Card in Poland in 2026?', a: 'At least 1.5× the national average - about PLN 12,750 gross in 2026. For shortage occupations (IT, engineering) it drops to 1.2×. The number is published by GUS.' },
      { q: 'Can I work in Germany or the Netherlands with a Polish Blue Card?', a: 'Yes - after 12 months in Poland on the Blue Card, you can apply in another EU state under a simplified procedure. That mobility is the main advantage over a national residence card.' },
      { q: 'How long and how much for an EU Blue Card?', a: 'Fee: PLN 440. Statutory deadline 60 days for the Blue Card; realistically 3-5 months in Mazowieckie. Faster than a standard TRC.' }
    ],
    tr: [
      { q: 'AB Mavi Kartı ile Karta Pobytu arasındaki fark nedir?', a: 'AB Mavi Kartı (Niebieska Karta UE), yüksek nitelikli yabancılar için Polonya\'nın ekonomik ortalamasına bağlı bir maaş eşiği ve diploma veya 5 yıl deneyim şartı içeren AB seviyesinde bir karttır. Standart Karta czasowego pobytu (Polonya geçici oturum kartı) ise eğitim şartı olmayan ulusal bir belgedir. Mavi Kart, başka AB ülkelerinde 90 güne kadar çalışma hakkı tanır.' },
      { q: '2026\'da Polonya AB Mavi Kartı için hangi maaş şartı vardır?', a: 'Polonya, direktifin alt sınırı olan 1,0 katı uygular - 2026 yılında yaklaşık 11.700 PLN brüt aylık maaş. Maaşın iş sözleşmesi üzerinden ödendiğinden ve bonus veya prim olarak parçalanmadığından emin olun, aksi takdirde wojewoda yalnızca temel kısmı dikkate alır.' },
      { q: 'Polonya AB Mavi Kartı ile Almanya veya Hollanda\'da çalışılabilir mi?', a: 'Evet. Mavi Kart sahibi, ek izin gerekmeden 180 günde 90 güne kadar başka bir AB ülkesinde çalışabilir. Daha uzun süreler için 12 ayın ardından hedef ülkede kolaylaştırılmış prosedürle Mavi Kart başvurusu yapılabilir. Bu hareketlilik standart Karta Pobytu\'da bulunmaz.' },
      { q: 'Polonya\'da AB Mavi Kartı ne kadar sürer ve ne kadara mal olur?', a: 'Devlet harcı 440 PLN, kart plastiği 100 PLN\'dir. Yasal süre 60 gündür, gerçek süre Mazowieckie eyaletinde 4-8 aydır. Bu, standart Karta czasowego pobytu için geçerli olan 8-14 aylık süreden belirgin biçimde kısadır.' }
    ]
  },

  'otkaz-po-karte-pobytu': {
    ru: [
      { q: 'Что делать при отказе в karcie pobytu?', a: 'У вас 14 дней с момента доставки decyzji (решения) через eDoręczenia, чтобы подать odwołanie (апелляцию) do Szefa Urzędu do Spraw Cudzoziemców (Главе Управления по делам иностранцев). Срок жёсткий - пропуск означает прекращение дела. Параллельно остановите выезд из Польши.' },
      { q: 'Какие самые частые причины отказа в karcie pobytu в 2026?', a: 'Niespełnienie wynagrodzenia (несоответствие зарплаты - ниже минимальной или средней для Blue Card), несоответствие основания работы, ошибки в meldunku (регистрации по адресу), недостающие документы (zaświadczenie z ZUS - справка из ZUS, страховка), непрохождение rozmowy weryfikacyjnej (верификационного собеседования) в Urzędzie (управлении).' },
      { q: 'Сколько стоит апелляция karta pobytu?', a: 'Сама подача odwołania (апелляции) - бесплатно. Услуги консультанта по сопровождению - от 1 800 до 4 500 PLN в зависимости от сложности. При выходе на skargę do WSA (жалобу в Воеводский административный суд) - добавится opłata sądowa (судебный сбор) 200 PLN.' },
      { q: 'Могу ли я остаться в Польше во время апелляции?', a: 'Да. Подача odwołania (апелляции) в срок продлевает право на пребывание до решения Szefa UdSC (Главы Управления по делам иностранцев). UPO остаётся действительным. Но право на работу - нет: оно прекращается с decyzją odmowną (отказным решением), если основание было - работа.' }
    ],
    uk: [
      { q: 'Що робити при відмові в karcie pobytu?', a: 'У вас 14 днів з моменту доставки decyzji (рішення) через eDoręczenia, щоб подати odwołanie (апеляцію) do Szefa Urzędu do Spraw Cudzoziemców (Голові Управління у справах іноземців). Строк жорсткий - пропуск означає припинення справи. Паралельно зупиніть виїзд із Польщі.' },
      { q: 'Які найчастіші причини відмови в karcie pobytu у 2026?', a: 'Niespełnienie wynagrodzenia (невідповідність зарплати - нижче мінімальної чи середньої для Blue Card), невідповідність підстави роботи, помилки в meldunku (реєстрації за адресою), брак документів (zaświadczenie z ZUS - довідка із ZUS, страховка), непроходження rozmowy weryfikacyjnej (верифікаційної співбесіди) в Urzędzie (управлінні).' },
      { q: 'Скільки коштує апеляція karty pobytu?', a: 'Сама подача odwołania (апеляції) - безкоштовно. Послуги консультанта із супроводу - від 1 800 до 4 500 PLN залежно від складності. При виході на skargę do WSA (скаргу до Воєводського адміністративного суду) - додасться opłata sądowa (судовий збір) 200 PLN.' },
      { q: 'Чи можу я залишитися в Польщі під час апеляції?', a: 'Так. Подача odwołania (апеляції) у строк продовжує право на перебування до рішення Szefa UdSC (Голови Управління у справах іноземців). UPO залишається чинним. Але право на роботу - ні: воно припиняється з decyzją odmowną (відмовним рішенням), якщо підставою була робота.' }
    ],
    pl: [
      { q: 'Co zrobić przy odmowie karty pobytu?', a: 'Masz 14 dni od doręczenia przez eDoręczenia, by złożyć odwołanie do Szefa UdSC. Termin nie podlega przywróceniu. Równolegle wstrzymaj wyjazd z Polski.' },
      { q: 'Jakie są najczęstsze przyczyny odmowy w 2026?', a: 'Niespełnienie wynagrodzenia, niezgodna podstawa pracy, błędy w meldunku, brak zaświadczeń ZUS / ubezpieczenia, niepowodzenie rozmowy weryfikacyjnej.' },
      { q: 'Ile kosztuje apelacja od decyzji odmownej?', a: 'Samo odwołanie - bezpłatne. Usługa konsultanta 1 800-4 500 PLN. Skarga do WSA - opłata sądowa 200 PLN.' },
      { q: 'Czy mogę zostać w Polsce w trakcie apelacji?', a: 'Tak. Odwołanie w terminie przedłuża pobyt do rozstrzygnięcia Szefa UdSC. UPO jest ważne, ale prawo do pracy gaśnie z chwilą odmowy.' }
    ],
    en: [
      { q: 'What do you do after a Karta Pobytu refusal?', a: 'You have 14 days from delivery of the decyzja (decision) via eDoręczenia to file an odwołanie (appeal) to the Szef UdSC (Head of the Office for Foreigners). The deadline is strict - missing it ends the case. In parallel, postpone any travel out of Poland.' },
      { q: 'What are the most common reasons for refusal in 2026?', a: 'Salary below the minimum or below 1.5× the national average for the Blue Card, mismatch between the work basis and the actual contract, meldunek (address registration) errors, missing ZUS or insurance certificates, and failed verification interviews.' },
      { q: 'How much does an appeal cost?', a: 'The odwołanie (appeal) itself is free. Consultant services run PLN 1,800-4,500. A WSA (Voivodeship Administrative Court) complaint adds a PLN 200 court fee.' },
      { q: 'Can I stay in Poland during the appeal?', a: 'Yes. A timely odwołanie (appeal) extends your right of residence until the Szef UdSC (Head of the Office for Foreigners) rules. The UPO remains valid, but the work right is lost the moment of the negative decision if the basis was employment.' }
    ],
    tr: [
      { q: 'Karta Pobytu reddedilirse ne yapmalı?', a: 'eDoręczenia (elektronik resmi yazışma sistemi) üzerinden tebligatın yapıldığı andan itibaren 14 gün içinde Szef Urzędu do Spraw Cudzoziemców\'e (Yabancılar Dairesi Başkanlığı\'na) odwołanie (itiraz) sunmanız gerekir. Süre kesindir, kaçırılırsa karar prawomocna (kesin) hâle gelir. Aynı zamanda Polonya\'dan ayrılmayı erteleyin.' },
      { q: '2026\'da Karta Pobytu için en sık ret nedenleri nelerdir?', a: 'Yetersiz gelir (asgari ücretin altı veya Mavi Kart eşiğinin altı), iş esasının fiili sözleşme ile uyumsuzluğu, meldunek (adres kaydı) hataları, ZUS ve sigorta belgelerinin eksikliği, doğrulama görüşmesinin başarısız olması ve obejście prawa (hukuku dolanma) şüphesi.' },
      { q: 'Karta Pobytu itirazı ne kadara mal olur?', a: 'Odwołanie sunumu ücretsizdir. Avukatla destek 1.500-2.500 PLN aralığındadır. WSA\'ya skarga aşamasında 200 PLN mahkeme harcı eklenir, avukat ücreti 3.000-5.000 PLN\'dir. Avukatla birlikte UDSC\'de kazanma oranı %60-70\'tir, bireysel başvuruda %25-30\'dur.' },
      { q: 'İtiraz sürecinde Polonya\'da kalabilir miyim?', a: 'Evet. Süresi içinde sunulan odwołanie, Şefin kararına kadar yasal ikametinizi otomatik olarak uzatır - vizeniz veya eski kartınız sona ermiş olsa bile UPO geçerlidir. Ancak çalışma hakkı ret kararıyla birlikte sona erer (esas iş ise). Polonya dışına uzun süre çıkış riskli olabilir.' }
    ]
  },

  'uskorenie-karty-pobytu-ponaglenie-wsa': {
    ru: [
      { q: 'Как ускорить выдачу karta pobytu?', a: 'Если wojewoda (воевода) нарушил срок (60-90 дней) - подавайте ponaglenie (жалобу на бездействие) do Szefa Urzędu do Spraw Cudzoziemców (Главе Управления по делам иностранцев). Если ponaglenie не помогло - skargę na bezczynność (жалобу на бездействие) do Wojewódzkiego Sądu Administracyjnego (Воеводского административного суда, WSA). Суд может обязать воеводу решить дело за 14-30 дней.' },
      { q: 'Что такое ponaglenie и когда его подавать?', a: 'Ponaglenie (жалоба на бездействие) - это формальная жалоба на bezczynność (бездействие) органа. Подаётся через того же wojewodу (воеводу), который рассматривает дело, на адрес Szefa Urzędu do Spraw Cudzoziemców (Главы Управления по делам иностранцев). Подавать имеет смысл по истечении ustawowego termin (установленного законом срока - 60 или 90 дней).' },
      { q: 'Сколько стоит skarga do WSA?', a: 'Opłata sądowa (судебный сбор) - 200 PLN (фиксированная для skarg na bezczynność - жалоб на бездействие). Услуги адвоката - от 1 500 PLN. При выигрыше суд возвращает opłatę (сбор) и часть расходов на представителя.' }
    ],
    uk: [
      { q: 'Як прискорити видачу karta pobytu?', a: 'Якщо воєвода порушив строк — подавайте ponaglenie (скаргу на бездіяльність) do Szefa Urzędu do Spraw Cudzoziemców. Якщо ponaglenie не допомогло — skargę na bezczynność do WSA. Суд може зобов\'язати воєводу вирішити справу впродовж 14–30 днів.' },
      { q: 'Що таке ponaglenie і коли його подавати?', a: 'Ponaglenie — це формальна скарга на bezczynność (бездіяльність) органу. Подається через того самого воєводу на адресу Szefa UdSC. Має сенс подавати після закінчення встановленого строку — 60 або 90 днів.' },
      { q: 'Скільки коштує skarga do WSA?', a: 'Opłata sądowa — 200 PLN (фіксована для skarg na bezczynność). Послуги адвоката — від 1 500 PLN. У разі виграшу суд повертає opłatę та частину витрат на представника.' }
    ],

    pl: [
      { q: 'Jak przyspieszyć wydanie karty pobytu?', a: 'Po przekroczeniu terminu ustawowego (60 lub 90 dni) złóż ponaglenie do Szefa UdSC. Jeśli to nie pomoże - skarga na bezczynność do WSA. Sąd może zobowiązać wojewodę do rozstrzygnięcia w 14-30 dni.' },
      { q: 'Czym jest ponaglenie i kiedy się je składa?', a: 'Ponaglenie - formalna skarga na bezczynność. Składa się przez wojewodę do Szefa UdSC po upływie ustawowego terminu.' },
      { q: 'Ile kosztuje skarga do WSA?', a: 'Opłata sądowa - 200 PLN. Usługi konsultanta od 1 500 PLN. Po wygranej sąd zwraca opłatę i część kosztów zastępstwa.' }
    ],
    en: [
      { q: 'How can I accelerate a residence-card decision?', a: 'After the statutory deadline (60 or 90 days), file a ponaglenie (urgency motion) to the Szef UdSC (Head of the Office for Foreigners). If that fails, file a skarga na bezczynność (complaint about inaction) with the WSA (Voivodeship Administrative Court) - the court can order the wojewoda (regional governor) to decide within 14-30 days.' },
      { q: 'What is a ponaglenie and when do you file it?', a: 'A ponaglenie (urgency motion) is a formal complaint about the authority\'s inaction. It is filed through the same wojewoda and addressed to the Szef UdSC (Head of the Office for Foreigners) after the statutory deadline expires.' },
      { q: 'How much does a WSA complaint cost?', a: 'A flat court fee of PLN 200. Legal representation from PLN 1,500. If you win, the court refunds the fee and part of the representation cost.' }
    ],
    tr: [
      { q: 'Karta Pobytu süreci nasıl hızlandırılır?', a: 'Wojewoda yasal süreyi (60 veya 90 gün) aştıysa Szef UDSC\'ye ponaglenie (resmi hatırlatma) sunun. Ponaglenie sonuç vermezse Wojewódzki Sąd Administracyjny\'a (Eyalet İdare Mahkemesi WSA) skarga na bezczynność (eylemsizlik şikâyeti) sunulur. Mahkeme, wojewoda\'yı 14-30 gün içinde karar vermeye zorlayabilir ve gecikme için tazminata hükmedebilir.' },
      { q: 'Ponaglenie nedir ve ne zaman sunulur?', a: 'Ponaglenie, dosyayı yürüten organın eylemsizliğine karşı sunulan resmi bir hatırlatmadır. Mevcut wojewoda üzerinden Szef UDSC\'ye iletilir. Yasal süre (60 veya 90 gün) dolduğunda anlamlıdır. Doğru kronoloji ve KPA madde 35\'e atıf gereklidir; internetten alınan şablonlar genelde reddedilir.' },
      { q: 'WSA\'ya skarga ne kadara mal olur?', a: 'Mahkeme harcı sabittir: 100 PLN. Avukatlık hizmeti 1.800 PLN\'den başlar. Davayı kazanırsanız mahkeme harcı iade edilir ve gecikmenin her ayı için ortalama 1.000-5.000 PLN tazminat ödenir. Mazowieckie\'de skarga davalarının yaklaşık %78\'i başvurucu lehine sonuçlanmaktadır.' }
    ]
  },

  'perehod-s-ukr-na-rabochuyu-kartu-pobytu': {
    ru: [
      { q: 'Как украинцу перейти с UKR на рабочую karta pobytu?', a: 'Найти польского работодателя, получить zezwolenie na pracę (разрешение на работу) типа A или powiadomienie (уведомление, для работы с польским пасспортом по UKR), подать wniosek (заявление) через MOS v2.0 в течение действия статуса UKR. Статус UKR продлён до 4 марта 2026.' },
      { q: 'Когда заканчивается статус UKR в Польше?', a: 'Текущая редакция Ustawy o pomocy obywatelom Ukrainy (Закона о помощи гражданам Украины) продлевает статус UKR до 4 марта 2026. Дальнейшие продления зависят от решений ЕС и польского правительства.' },
      { q: 'Можно ли подать на TRC, оставаясь на UKR?', a: 'Да, и это рекомендуется. Подача wniosku (заявления) через MOS v2.0 не отменяет статус UKR - оба статуса действуют параллельно до получения karta pobytu (карты пребывания) или решения по ней.' }
    ],
    uk: [
      { q: 'Як українцю перейти з UKR на робочу karta pobytu?', a: 'Знайти польського роботодавця, отримати zezwolenie na pracę (дозвіл на роботу) типу A або powiadomienie, подати wniosek через MOS v2.0 упродовж дії статусу UKR. Статус UKR продовжено до 4 березня 2026.' },
      { q: 'Коли закінчується статус UKR у Польщі?', a: 'Чинна редакція Ustawy o pomocy obywatelom Ukrainy продовжує статус UKR до 4 березня 2026. Подальші продовження залежать від рішень ЄС та польського уряду.' },
      { q: 'Чи можна подати на TRC, залишаючись на UKR?', a: 'Так, і це рекомендовано. Подача wniosku через MOS v2.0 не скасовує статус UKR — обидва статуси діють паралельно до отримання karta pobytu або рішення по ній.' }
    ],

    pl: [
      { q: 'Jak Ukrainiec może przejść z UKR na kartę pobytu pracowniczą?', a: 'Znaleźć polskiego pracodawcę, uzyskać zezwolenie na pracę typu A lub powiadomienie, złożyć wniosek przez MOS v2.0 w trakcie ważności statusu UKR.' },
      { q: 'Kiedy kończy się status UKR w Polsce?', a: 'Obecnie do 4 marca 2026 - zgodnie z ustawą o pomocy obywatelom Ukrainy. Dalsze przedłużenia zależą od decyzji UE i polskiego rządu.' },
      { q: 'Czy mogę złożyć wniosek o TRC pozostając na UKR?', a: 'Tak. Złożenie wniosku przez MOS v2.0 nie anuluje statusu UKR - oba statusy działają równolegle do decyzji.' }
    ],
    en: [
      { q: 'How does a Ukrainian switch from UKR status to a work-based residence card?', a: 'Find a Polish employer, obtain a type-A work permit or a powiadomienie (notification) filing, and submit a residence-card application via MOS v2.0 while the UKR status is still valid. UKR is extended to 4 March 2026.' },
      { q: 'When does UKR status end in Poland?', a: 'The current version of the Ukrainian Assistance Act extends UKR status to 4 March 2026. Further extensions depend on EU and Polish government decisions.' },
      { q: 'Can I apply for a TRC while still on UKR?', a: 'Yes, and it is recommended. Filing in MOS v2.0 does not cancel UKR status - the two statuses run in parallel until the decision.' }
    ],
    tr: [
      { q: 'Ukrayna vatandaşı PESEL UKR\'den iş esaslı Karta Pobytu\'ya nasıl geçer?', a: 'Polonyalı bir işveren bulun, A tipi zezwolenie na pracę (çalışma izni) veya powiadomienie (bildirim, UKR ile çalışma için) düzenletin ve UKR statüsü geçerliyken MOS v2.0 üzerinden başvuru sunun. Karta alındığında PESEL UKR statüsü tüm avantajlarıyla otomatik olarak sona erer.' },
      { q: 'Polonya\'da PESEL UKR statüsü ne zaman sona eriyor?', a: 'Mevcut Ustawa o pomocy obywatelom Ukrainy hükmüne göre PESEL UKR 4 Mart 2027\'ye kadar geçerlidir. Sonraki uzatmalar AB ve Polonya hükümetinin kararlarına bağlıdır. 4 Mayıs 2026 - 4 Mart 2027 arasında 3 yıllık Karta CUKR alternatif olarak sunulmaktadır.' },
      { q: 'UKR statüsünü koruyarak Karta Pobytu başvurusu yapılabilir mi?', a: 'Hayır - başvuru sürecinde UKR otomatik olarak askıya alınabilir. Standart Karta Pobytu alındığında UKR\'nin tüm özel avantajları sona erer. Yine UKR\'de kalmak isteyenler için CUKR daha güvenli bir seçenektir, çünkü 4 Mayıs 2026\'dan itibaren paralel olarak başvurulabilir.' }
    ]
  },

  'perehod-so-studencheskoy-vizy-na-kartu-pobytu': {
    ru: [
      { q: 'Можно ли перейти со студенческой визы на karta pobytu в Польше?', a: 'Да. Подача wniosku (заявления) через MOS v2.0 возможна в любой момент, пока ваша студенческая виза или karta pobytu studencka (студенческая карта пребывания) действительна. Основания: продолжение учёбы, работа, бизнес, брак.' },
      { q: 'Засчитывается ли студенческое время в стаж для PMŻ?', a: 'Только наполовину - по Art. 65 ust. 2 Ustawy o cudzoziemcach (Закона об иностранцах). Это значит 4 года студенческой karty pobytu (карты пребывания) = 2 года в зачёт 5-летнего срока для karta stałego pobytu (карты постоянного пребывания).' },
      { q: 'Можно ли работать на студенческой karcie pobytu?', a: 'Да, без zezwolenia na pracę (разрешения на работу) - на любой должности, включая umowę o pracę (трудовой договор), zlecenie (договор поручения), dzieło (договор подряда) и собственную JDG (ИП, с TRC). Но карта остаётся выданной по основанию учёбы - отчисление приведёт к её отзыву.' }
    ],
    uk: [
      { q: 'Чи можна перейти зі студентської візи на karta pobytu у Польщі?', a: 'Так. Подача wniosku через MOS v2.0 можлива будь-коли, поки ваша студентська віза або karta pobytu studencka є дійсною. Підстави: продовження навчання, робота, бізнес, шлюб.' },
      { q: 'Чи зараховується студентський час до стажу для PMŻ?', a: 'Лише наполовину — згідно з Art. 65 ust. 2 Ustawy o cudzoziemcach. Це означає, що 4 роки студентської karty pobytu = 2 роки в залік 5-річного строку для karta stałego pobytu.' },
      { q: 'Чи можна працювати на студентській karcie pobytu?', a: 'Так, без zezwolenia na pracę — на будь-якій посаді, включно з umową o pracę, zlecenie, dzieło та власною JDG. Проте картка залишається виданою на підставі навчання — відрахування призведе до її відкликання.' }
    ],

    pl: [
      { q: 'Czy mogę przejść ze studenckiej karty pobytu na rezydenta?', a: 'Tak. Wniosek przez MOS v2.0 można złożyć w trakcie ważności karty studenckiej. Podstawy: kontynuacja studiów, praca, biznes, małżeństwo.' },
      { q: 'Czy okres studencki liczy się do pobytu stałego?', a: 'Tylko w połowie - art. 65 ust. 2 ustawy o cudzoziemcach. 4 lata na karcie studenckiej = 2 lata zaliczone do 5-letniego okresu PR.' },
      { q: 'Czy na karcie studenckiej można pracować?', a: 'Tak, bez zezwolenia na pracę - na umowie o pracę, zleceniu, dziele lub na JDG. Karta pozostaje jednak na podstawie studiów - skreślenie spowoduje jej cofnięcie.' }
    ],
    en: [
      { q: 'Can I switch from a student visa to a residence card in Poland?', a: 'Yes. You can file a MOS v2.0 application any time while your student visa or student residence card is valid. Grounds: continued study, employment, business, marriage.' },
      { q: 'Does student time count toward permanent residence?', a: 'Only at half-rate, per Article 65(2). Four years of student status counts as two toward the 5-year permanent-residence requirement.' },
      { q: 'Can I work on a student residence card?', a: 'Yes - without a separate work permit, on employment contracts, mandate contracts, specific-task contracts, or a sole proprietorship (JDG). But the card is granted on study grounds - being expelled triggers withdrawal.' }
    ],
    tr: [
      { q: 'Polonya\'da öğrenci vizesinden Karta Pobytu\'ya geçilebilir mi?', a: 'Evet. Öğrenci vizeniz veya öğrenci Karta Pobytu süreniz geçerliyken MOS v2.0 üzerinden başvuru sunabilirsiniz. Gerekçe seçenekleri: eğitime devam, iş, işletme veya evlilik. Vize bitmeden başvurmanız gerekir, aksi halde kayıt dışı ikamet başlar.' },
      { q: 'Öğrencilik dönemi daimi oturum süresine sayılır mı?', a: 'Yalnızca yarısı sayılır - Ustawa o cudzoziemcach madde 65 fıkra 2 uyarınca. Yani öğrenci Karta Pobytu\'da 4 yıl, Karta stałego pobytu (daimi oturum kartı) için gereken 5 yıllık sürenin yalnızca 2 yılına denk gelir. İş esaslı süre ise tam sayılır.' },
      { q: 'Öğrenci Karta Pobytu ile Polonya\'da çalışılabilir mi?', a: 'Evet, zezwolenie na pracę gerekmeden - umowa o pracę (iş sözleşmesi), umowa zlecenie (hizmet sözleşmesi), umowa o dzieło (eser sözleşmesi) veya kart sahipleri için JDG (şahıs şirketi) açılabilir. Ancak kartın esası eğitimdir - okuldan çıkarılma kartın iptaline yol açar.' }
    ]
  },

  'vossoedinenie-semi-polsha-2026-prava-suprugov': {
    ru: [
      { q: 'Кто может подать на воссоединение семьи в Польше?', a: 'Łączenie rodzin (воссоединение семьи) доступно супругам, несовершеннолетним детям и зависимым родителям следующих категорий: граждан РП, обладателей PMŻ, długoterminowego rezydenta UE (долгосрочного резидента ЕС), beneficjenta международной защиты, обладателей TRC старше 2 лет.' },
      { q: 'Сколько ждать решение по воссоединению семьи?', a: 'По łączeniu rodzin (воссоединению семьи) срок ускоренный - официально до 6 месяцев (по Директиве 2003/86/EC). На практике в Mazowieckim UW (Мазовецком воеводском управлении) - 8-14 месяцев. Можно ускорить через ponaglenie (жалобу на бездействие) + WSA (Воеводский административный суд).' },
      { q: 'Нужен ли супругу польский язык для воссоединения?', a: 'Нет. Польский B1 не требуется ни на TRC по łączeniu rodzin (воссоединению семьи), ни на PMŻ для супруга гражданина Польши со стажем 3+ года брака.' },
      { q: 'Может ли супруг работать после получения karta pobytu?', a: 'Да. TRC по łączeniu rodzin (воссоединению семьи) даёт неограниченное право на работу - без zezwolenia na pracę (разрешения на работу) и без необходимости менять основание при смене работодателя.' }
    ],
    uk: [
      { q: 'Хто може подати на возз\'єднання сім\'ї у Польщі?', a: 'Łączenie rodzin доступне подружжю, неповнолітнім дітям та залежним батькам власників PMŻ, długoterminowego rezydenta UE, beneficjenta захисту, а також власників TRC старше 2 років.' },
      { q: 'Скільки чекати рішення щодо возз\'єднання сім\'ї?', a: 'За łączeniem rodzin строк — офіційно до 6 місяців. На практиці в Mazowieckim UW — 8–14 місяців. Можна пришвидшити через ponaglenie + WSA.' },
      { q: 'Чи потрібна чоловіку/дружині польська мова для возз\'єднання?', a: 'Ні. Польська B1 не вимагається ні для TRC за łączeniem rodzin, ні для PMŻ для подружжя громадянина Польщі зі стажем шлюбу 3+ роки.' },
      { q: 'Чи може чоловік/дружина працювати після отримання karta pobytu?', a: 'Так. TRC за łączeniem rodzin надає необмежене право на роботу — без zezwolenia na pracę і без необхідності змінювати підставу при зміні роботодавця.' }
    ],

    pl: [
      { q: 'Kto może złożyć wniosek o łączenie rodzin w Polsce?', a: 'Małżonkowie, małoletnie dzieci, zależni rodzice obywateli RP, posiadaczy karty stałego pobytu, rezydenta długoterminowego UE, beneficjentów ochrony międzynarodowej i posiadaczy TRC z 2-letnim stażem.' },
      { q: 'Ile czeka się na decyzję w łączeniu rodzin?', a: 'Ustawowo 6 miesięcy (dyrektywa 2003/86/WE). W Mazowieckim UW realnie 8-14 miesięcy. Można skrócić przez ponaglenie i skargę do WSA.' },
      { q: 'Czy małżonek musi znać polski przy łączeniu rodzin?', a: 'Nie. Polski B1 nie jest wymagany ani przy TRC, ani przy PR dla małżonka obywatela RP z 3-letnim stażem małżeńskim.' },
      { q: 'Czy małżonek może pracować po otrzymaniu karty?', a: 'Tak. TRC z łączenia rodzin daje pełne prawo do pracy - bez zezwolenia i bez zmiany podstawy przy zmianie pracodawcy.' }
    ],
    en: [
      { q: 'Who can apply for family reunification in Poland?', a: 'Spouses, minor children and dependent parents of: Polish citizens, permanent-residence holders, EU long-term residents, beneficiaries of international protection, and TRC holders with 2+ years of stay.' },
      { q: 'How long does the family-reunification decision take?', a: 'Statutory: 6 months under Directive 2003/86/EC. In Mazowieckie in practice: 8-14 months. Acceleration through a ponaglenie (urgency motion) + WSA (Voivodeship Administrative Court) complaint is available.' },
      { q: 'Is Polish required for the spouse?', a: 'No. Polish B1 is not required for the family-reunification TRC or for permanent residence on the marriage basis (3+ years of marriage to a Polish citizen).' },
      { q: 'Can the spouse work after receiving the card?', a: 'Yes. A family-reunification TRC carries an unlimited right to work - no work permit needed and no change of basis when switching employers.' }
    ],
    tr: [
      { q: 'Polonya\'da aile birleşimine kimler başvurabilir?', a: 'Łączenie rodzin (aile birleşimi) şu kişilerin eşlerine, reşit olmayan çocuklarına ve bağımlı ebeveynlerine sunulur: Polonya vatandaşları, karta stałego pobytu (daimi oturum kartı) sahipleri, AB uzun süreli mukimleri, uluslararası koruma yararlanıcıları ve 2 yıldan fazla geçerli TRC sahipleri.' },
      { q: 'Aile birleşimi başvurusu kaç ay sürer?', a: 'Łączenie rodzin için yasal süre 6 aydır (2003/86/EC Direktifi). Pratikte Mazowieckie eyaletinde 8-14 ay sürer. Ponaglenie (acele talebi) ve WSA (Voyvodalık İdare Mahkemesi) şikâyetiyle hızlandırılabilir.' },
      { q: 'Aile birleşimi başvurusunda eşin Polonyaca bilmesi şart mıdır?', a: 'Hayır. Łączenie rodzin temelli TRC veya 3+ yıl evlilikten sonra Polonya vatandaşı eş için karta stałego pobytu başvurusunda Polonyaca B1 zorunlu değildir.' },
      { q: 'Aile birleşimi karta pobytu eşe çalışma hakkı verir mi?', a: 'Evet. Łączenie rodzin temelli TRC, sınırsız çalışma hakkı taşır - zezwolenie na pracę (çalışma izni) gerekmez ve işveren değiştirildiğinde temel değişikliği gerekmez.' }
    ]
  },

  'smena-rabotodatelya-15-30-dney': {
    ru: [
      { q: 'В какой срок нужно уведомить воеводу о смене работодателя?', a: '15 рабочих дней с момента подписания нового договора. Уведомление подаётся через MOS v2.0 - формат "zmiana decyzji w sprawie zezwolenia na pobyt" (изменение решения о разрешении на пребывание). Опоздание = потенциальная утрата karta pobytu.' },
      { q: 'Что будет, если не сообщить о смене работы по karcie pobytu?', a: 'Wojewoda (воевода) вправе отозвать decyzję (решение) о karcie pobytu. На практике используется выборочно - через 6-18 месяцев с момента смены, при перепроверке status quo. Чтобы избежать риска - подайте zmianę (изменение).' },
      { q: 'Сколько стоит zmiana zezwolenia (изменение разрешения) после смены работы?', a: 'Opłata skarbowa (госпошлина) - 220 PLN. Биометрия не нужна. Решение приходит обычно за 30-90 дней. Сам пластик karty не меняется.' }
    ],
    uk: [
      { q: 'У який термін потрібно повідомити воєводу про зміну роботодавця?', a: '15 робочих днів з моменту підписання нового договору. Повідомлення подається через MOS v2.0. Запізнення = потенційна втрата karta pobytu.' },
      { q: 'Що буде, якщо не повідомити про зміну роботи по karcie pobytu?', a: 'Wojewoda має право скасувати decyzję про kartę pobytu. На практиці — вибірково, через 6–18 місяців з моменту зміни. Щоб уникнути ризику — подайте zmianę.' },
      { q: 'Скільки коштує zmiana zezwolenia після зміни роботи?', a: 'Opłata skarbowa — 220 PLN. Біометрія не потрібна. Рішення — зазвичай 30–90 днів. Сам пластик karty не змінюється.' }
    ],

    pl: [
      { q: 'W jakim terminie zawiadomić wojewodę o zmianie pracodawcy?', a: '15 dni roboczych od podpisania nowej umowy - przez MOS v2.0, jako "zmiana decyzji w sprawie zezwolenia na pobyt". Spóźnienie = ryzyko utraty karty.' },
      { q: 'Co się stanie, jeśli nie zgłoszę zmiany pracy?', a: 'Wojewoda może cofnąć decyzję. W praktyce stosowane wyrywkowo - przy weryfikacji w 6-18. miesiącu od zmiany. Aby uniknąć ryzyka, złóż wniosek o zmianę.' },
      { q: 'Ile kosztuje zmiana zezwolenia po zmianie pracy?', a: 'Opłata 220 PLN. Bez biometrii. Decyzja zwykle 30-90 dni. Karta nie jest wymieniana.' }
    ],
    en: [
      { q: 'How quickly must I notify the wojewoda (regional governor) about a change of employer?', a: '15 working days from signing the new contract - via MOS v2.0 as a zmiana zezwolenia (change of permit decision). Late notification can void the card.' },
      { q: 'What happens if I don\'t report the job change?', a: 'The wojewoda (regional governor) can revoke the permit. Enforcement is selective - typically during checks 6-18 months after the change. Filing the change is the safe path.' },
      { q: 'How much does the change-of-permit application cost?', a: 'PLN 220. No new biometrics. Decision usually within 30-90 days. The plastic card is not reissued.' }
    ],
    tr: [
      { q: 'Karta pobytu sahibi yabancı işveren değişikliğini wojewoda\'ya kaç gün içinde bildirmelidir?', a: 'Yeni iş sözleşmesinin imzalanmasından itibaren 15 iş günü. Bildirim MOS v2.0 üzerinden "zmiana decyzji w sprawie zezwolenia na pobyt" (oturma izni kararının değiştirilmesi) formatında sunulur. Geç bildirim karta pobytu\'nun kaybedilmesi riskini doğurur.' },
      { q: 'İşveren değişikliği karta pobytu üzerinde bildirilmezse ne olur?', a: 'Wojewoda (eyalet valisi) karta pobytu kararını geri alma yetkisine sahiptir. Pratikte seçici uygulanır - değişiklikten 6-18 ay sonra status quo doğrulamasında. Riski önlemek için zmianę (değişiklik başvurusu) sunun.' },
      { q: 'İş değişikliği sonrası zmiana zezwolenia (izin değişikliği) ne kadar tutar?', a: 'Opłata skarbowa (devlet harcı) 220 PLN. Biyometri gerekmez. Karar genellikle 30-90 günde gelir. Karta plastiği yenilenmez.' }
    ]
  },

  // ─── Karta Polaka ────────────────────────────────────────────────────
  'karta-polaka-kak-poluchit': {
    ru: [
      { q: 'Кому положена Karta Polaka?', a: 'Лицам, у которых хотя бы один родитель, дед, бабушка или прадед/прабабушка были польской национальности (не путать с гражданством). Plus подтверждение языка (минимум A2 устно), активной связи с польской культурой и декларация о принадлежности к польской нации.' },
      { q: 'Какие документы нужны для Karty Polaka?', a: 'Метрики предков польской национальности (свидетельства о рождении, браке), архивные справки, школьные/армейские документы с указанием narodowości "polska" (национальности "польская"), ваш паспорт, фото 35×45 мм, biografia (1-2 страницы), wniosek (заявление) по форме консульства.' },
      { q: 'Как сдать собеседование на Karta Polaka?', a: 'Беседа с консулом длится 30-60 минут на польском (A2 уровня). Темы: личные данные, семейная история, польская культура (3 короля, 3 поэта, главные праздники), причины обращения. Вопросы - простые, но без польского никак.' },
      { q: 'Сколько ждать решение по Karta Polaka?', a: 'Официальный срок - 60 дней с момента подачи в консульство. На практике 3-9 месяцев в зависимости от очереди. После положительного решения - выдача карты обычно 4-8 недель.' },
      { q: 'Даёт ли Karta Polaka гражданство Польши?', a: 'Нет, но даёт ускоренный путь: владелец Karty Polaka после переезда в Польшу подаёт сразу на karta stałego pobytu (карту постоянного пребывания, без 5-летнего стажа), а через 1 год - на nadanie obywatelstwa polskiego (предоставление польского гражданства).' }
    ],
    uk: [
      { q: 'Кому належить Karta Polaka?', a: 'Особам, у яких хоча б один із батьків, дід, баба або прадід/прабаба були польської національності (не плутати з громадянством). Plus підтвердження мови (мінімум A2 усно), активного зв’язку з польською культурою та декларація про належність до польської нації.' },
      { q: 'Які документи потрібні для Karty Polaka?', a: 'Метрики предків польської національності (свідоцтва про народження, шлюб), архівні довідки, шкільні/армійські документи із зазначенням narodowości «polska» (національності «польська»), ваш паспорт, фото 35×45 мм, biografia (1-2 сторінки), wniosek (заява) за формою консульства.' },
      { q: 'Як скласти співбесіду на Karta Polaka?', a: 'Бесіда з консулом триває 30-60 хвилин польською (рівня A2). Теми: особисті дані, родинна історія, польська культура (3 королі, 3 поети, головні свята), причини звернення. Питання прості, але без польської ніяк.' },
      { q: 'Скільки чекати рішення щодо Karty Polaka?', a: 'Офіційний строк - 60 днів з моменту подачі в консульство. На практиці 3-9 місяців залежно від черги. Після позитивного рішення - видача карти зазвичай 4-8 тижнів.' },
      { q: 'Чи дає Karta Polaka громадянство Польщі?', a: 'Ні, але дає прискорений шлях: власник Karty Polaka після переїзду до Польщі подає одразу на kartę stałego pobytu (карту постійного перебування, без 5-річного стажу), а через 1 рік - на nadanie obywatelstwa polskiego (надання польського громадянства).' }
    ],
    pl: [
      { q: 'Komu przysługuje Karta Polaka?', a: 'Osobom, których co najmniej jedno z rodziców, dziadków lub pradziadków było narodowości polskiej (nie obywatelstwa). Plus polski na poziomie A2 ustnie, aktywne związki z kulturą polską i deklaracja przynależności do narodu polskiego.' },
      { q: 'Jakie dokumenty są potrzebne do Karty Polaka?', a: 'Metryki przodków narodowości polskiej (akty urodzenia, ślubu), zaświadczenia archiwalne, dokumenty szkolne / wojskowe wskazujące "narodowość polska", paszport, zdjęcie 35×45 mm, biografia 1-2 strony, wniosek konsularny.' },
      { q: 'Jak wygląda rozmowa z konsulem o Kartę Polaka?', a: 'Rozmowa 30-60 minut po polsku na poziomie A2. Tematy: dane osobowe, historia rodziny, kultura polska (3 królów, 3 poetów, główne święta), powód wnioskowania. Pytania proste, ale po polsku.' },
      { q: 'Ile czeka się na decyzję o Karcie Polaka?', a: 'Ustawowo 60 dni od złożenia w konsulacie. Realnie 3-9 miesięcy. Wydanie karty po pozytywnej decyzji - zwykle 4-8 tygodni.' },
      { q: 'Czy Karta Polaka daje obywatelstwo polskie?', a: 'Nie bezpośrednio, ale skraca drogę: posiadacz po przyjeździe składa od razu wniosek o pobyt stały (bez 5 lat) i po 1 roku - wniosek o nadanie obywatelstwa.' }
    ],
    en: [
      { q: 'Who is eligible for Karta Polaka?', a: 'Anyone with at least one parent, grandparent or great-grandparent of Polish nationality (not citizenship), confirmed Polish at A2 spoken level, active connections to Polish culture, and a declaration of belonging to the Polish nation.' },
      { q: 'What documents are needed for Karta Polaka?', a: 'Birth/marriage certificates of Polish-nationality ancestors, archival records, school or military documents listing "narodowość polska" (Polish nationality), your passport, a 35×45 mm photo, a 1-2-page biography, and the consular application form.' },
      { q: 'What is the Karta Polaka interview like?', a: '30-60 minutes with a consul, in Polish at A2 level. Topics: personal data, family history, Polish culture (three kings, three poets, main holidays), motivation. Simple questions - but in Polish.' },
      { q: 'How long does the Karta Polaka decision take?', a: 'Statutory: 60 days from filing at the consulate. Realistically 3-9 months. Issuance of the physical card after a positive decision: usually 4-8 weeks.' },
      { q: 'Does Karta Polaka grant Polish citizenship?', a: 'Not directly, but it shortens the path: holders can apply for permanent residence on arrival (no 5-year wait) and for citizenship one year later.' }
    ],
    tr: [
      { q: 'Karta Polaka için kimler başvurabilir?', a: 'En az bir ebeveyni, büyükanne/büyükbabası veya büyük büyükannesi/büyük büyükbabası Polonya milliyetinden olan kişiler (vatandaşlık ile karıştırılmamalıdır). Ek olarak temel düzey Lehçe (en az A2 sözlü), Polonya kültürüyle aktif bağ ve Polonya milletine mensubiyet beyannamesi gereklidir.' },
      { q: 'Karta Polaka için hangi belgeler gereklidir?', a: 'Polonya milliyetinden ataların metrika belgeleri (doğum, evlilik), arşiv kayıtları, narodowość "polska" ("Polonya" milliyeti) ifadeli okul/askerlik belgeleri, pasaportunuz, 35×45 mm fotoğraf, biografia (1-2 sayfa), konsolosluk wniosek formu.' },
      { q: 'Karta Polaka mülakatı nasıl geçer?', a: 'Konsolosla görüşme 30-60 dakika sürer ve A2 düzeyinde Lehçe yapılır. Konular: kişisel veriler, aile geçmişi, Polonya kültürü (3 kral, 3 şair, başlıca bayramlar), başvuru gerekçesi. Sorular basittir, ancak Lehçe olmadan geçilmez.' },
      { q: 'Karta Polaka kararı ne kadar sürede çıkar?', a: 'Yasal süre konsolosluğa sunumdan itibaren 60 gündür. Pratikte sıraya bağlı olarak 3-9 ay. Olumlu karar sonrası kart teslimi genellikle 4-8 hafta.' },
      { q: 'Karta Polaka Polonya vatandaşlığı verir mi?', a: 'Hayır, ancak hızlı yol sağlar: Karta Polaka sahibi Polonya\'ya taşındıktan sonra doğrudan karta stałego pobytu\'ya (5 yıl beklemeden daimi oturum kartı) başvurur, 1 yıl sonra ise nadanie obywatelstwa polskiego (Polonya vatandaşlığı tahsisi) için başvuru yapar.' }
    ]
  },

  'karta-cukr-dlya-ukraincev': {
    ru: [
      { q: 'Что такое karta CUKR в Польше?', a: 'Это новый формат TRC специально для граждан Украины, заменяющий статус UKR с 4 марта 2026. Подача - через MOS v2.0, ускоренная процедура без проверки минимальной зарплаты в первый год.' },
      { q: 'Чем karta CUKR отличается от обычной karta pobytu?', a: 'Karta CUKR выдаётся только украинцам, имеет упрощённую процедуру и не требует подтверждения занятости в первый год. После 12 месяцев - переход на стандартную TRC по работе или другому основанию.' },
      { q: 'Когда заканчивается статус UKR и начинается karta CUKR?', a: 'UKR действует до 4 марта 2026. С этой даты подача - только на karta CUKR через MOS v2.0. Перевод автоматическим не будет - нужно подать новый wniosek (заявление).' }
    ],
    uk: [
      { q: 'Що таке karta CUKR у Польщі?', a: 'Новий формат TRC спеціально для громадян України, що замінює статус UKR з 4 березня 2026. Подача — через MOS v2.0, прискорена процедура без перевірки мінімальної зарплати в перший рік.' },
      { q: 'Чим karta CUKR відрізняється від звичайної karta pobytu?', a: 'Karta CUKR видається лише українцям, має спрощену процедуру та не вимагає підтвердження зайнятості в перший рік. Після 12 місяців — перехід на стандартну TRC.' },
      { q: 'Коли закінчується статус UKR і починається karta CUKR?', a: 'UKR діє до 4 березня 2026. З цієї дати подача — лише на karta CUKR через MOS v2.0. Перенесення автоматичним не буде — потрібно подати новий wniosek.' }
    ],

    pl: [
      { q: 'Czym jest karta CUKR w Polsce?', a: 'Nowy format TRC dla obywateli Ukrainy, zastępujący status UKR od 4 marca 2026. Złożenie - przez MOS v2.0, procedura uproszczona, bez wymogu minimalnego wynagrodzenia w pierwszym roku.' },
      { q: 'Czym karta CUKR różni się od zwykłej karty pobytu?', a: 'Tylko dla Ukraińców, uproszczona procedura, brak wymogu zatrudnienia w pierwszym roku. Po 12 miesiącach przejście na standardowe TRC.' },
      { q: 'Kiedy kończy się UKR i zaczyna CUKR?', a: 'UKR - do 4 marca 2026. Od tej daty wniosek tylko o CUKR przez MOS v2.0. Przejście nie jest automatyczne - trzeba złożyć nowy wniosek.' }
    ],
    en: [
      { q: 'What is the CUKR card in Poland?', a: 'A new TRC format specifically for Ukrainian citizens, replacing UKR status from 4 March 2026. Filed via MOS v2.0 in a simplified procedure with no minimum-salary check in the first year.' },
      { q: 'How does CUKR differ from a standard residence card?', a: 'Issued only to Ukrainians, simpler procedure, no employment requirement in year one. After 12 months you transfer to a standard TRC.' },
      { q: 'When does UKR status end and CUKR begin?', a: 'UKR runs until 4 March 2026. After that date, only CUKR applications via MOS v2.0. The transition is not automatic - a new application is required.' }
    ],
    tr: [
      { q: 'Polonya\'da karta CUKR nedir?', a: '4 Mart 2026\'dan itibaren UKR statüsünün yerini alan, Ukrayna vatandaşlarına özel yeni TRC formatıdır. Başvuru MOS v2.0 üzerinden yapılır, ilk yıl asgari maaş kontrolü olmadan basitleştirilmiş prosedürle ilerler.' },
      { q: 'Karta CUKR standart karta pobytu\'dan nasıl ayrılır?', a: 'Karta CUKR yalnızca Ukraynalılara verilir, basitleştirilmiş prosedüre tabidir ve ilk yıl istihdam koşulu aranmaz. 12 aydan sonra çalışma veya başka gerekçeyle standart TRC\'ye geçilir.' },
      { q: 'UKR statüsü ne zaman biter ve karta CUKR ne zaman başlar?', a: 'UKR 4 Mart 2026\'ya kadar geçerlidir. Bu tarihten itibaren başvuru yalnızca MOS v2.0 üzerinden karta CUKR için yapılır. Geçiş otomatik değildir - yeni bir wniosek (başvuru) sunmak gerekir.' }
    ]
  },

  // ─── Citizenship & marriage ─────────────────────────────────────────
  'brak-s-polyakom-registratsiya': {
    ru: [
      { q: 'Какие документы нужны для регистрации брака с гражданином Польши?', a: 'Свидетельство о рождении с apostille и присяжным переводом, справка о семейном положении (zaświadczenie o zdolności prawnej do zawarcia małżeństwa - справка о правовой способности заключить брак) - не старше 6 месяцев, паспорт, при необходимости - судебное решение о расторжении предыдущего брака.' },
      { q: 'Сколько ждать после свадьбы до получения karta pobytu?', a: 'Wniosek (заявление) о TRC по łączeniu rodzin (воссоединению семьи) можно подавать сразу после заключения брака через MOS v2.0. Решение в Mazowieckim UW (Мазовецком воеводском управлении) - 8-14 месяцев. Через 3 года брака открывается путь к karta stałego pobytu (карте постоянного пребывания).' },
      { q: 'Можно ли подать на гражданство сразу после брака?', a: 'Нет. Брак не даёт гражданства напрямую. После 3 лет брака с гражданином РП и 2 лет на karcie stałego pobytu (карте постоянного пребывания) можно подать на uznanie za obywatela polskiego (признание польским гражданином) - это самый короткий путь к польскому паспорту через брак.' }
    ],
    uk: [
      { q: 'Які документи потрібні для реєстрації шлюбу з громадянином Польщі?', a: 'Свідоцтво про народження з apostille та присяжним перекладом, довідка про сімейний стан не старша 6 місяців, паспорт, за потреби — судове рішення про розірвання попереднього шлюбу.' },
      { q: 'Скільки чекати після весілля до отримання karta pobytu?', a: 'Wniosek про TRC по łączeniu rodzin можна подавати одразу після укладення шлюбу через MOS v2.0. Рішення в Mazowieckim UW — 8–14 місяців. Через 3 роки шлюбу відкривається шлях до karta stałego pobytu.' },
      { q: 'Чи можна подати на громадянство одразу після шлюбу?', a: 'Ні. Шлюб не дає громадянства безпосередньо. Після 3 років шлюбу з громадянином РП та 2 років на karcie stałego pobytu можна подати на uznanie za obywatela polskiego.' }
    ],

    pl: [
      { q: 'Jakie dokumenty są potrzebne do ślubu z obywatelem Polski?', a: 'Akt urodzenia z apostille i tłumaczeniem przysięgłym, zaświadczenie o zdolności prawnej do zawarcia małżeństwa nie starsze niż 6 miesięcy, paszport, ewentualnie wyrok rozwodowy.' },
      { q: 'Ile po ślubie czeka się na kartę pobytu?', a: 'Wniosek o TRC z łączenia rodzin można złożyć od razu po ślubie przez MOS v2.0. Decyzja w Mazowieckim UW - 8-14 miesięcy. Po 3 latach małżeństwa otwiera się ścieżka PR.' },
      { q: 'Czy można od razu po ślubie złożyć wniosek o obywatelstwo?', a: 'Nie. Ślub sam w sobie nie daje obywatelstwa. Po 3 latach małżeństwa i 2 latach pobytu stałego można złożyć wniosek o uznanie za obywatela polskiego.' }
    ],
    en: [
      { q: 'What documents are needed for a marriage with a Polish citizen?', a: 'Birth certificate with apostille and a sworn translation, a zaświadczenie o zdolności prawnej do zawarcia małżeństwa (certificate of legal capacity to marry) not older than 6 months, passport, and if applicable a divorce decree.' },
      { q: 'How long after marriage until you get a residence card?', a: 'You can file the family-reunification (łączenie rodzin) TRC immediately after the wedding via MOS v2.0. Decision in Mazowieckie: 8-14 months. After 3 years of marriage you can apply for permanent residence.' },
      { q: 'Can I apply for citizenship right after marriage?', a: 'No. Marriage alone does not grant citizenship. After 3 years of marriage and 2 years of permanent residence, you can apply for recognition as a Polish citizen (uznanie za obywatela polskiego) - the shortest path through marriage.' }
    ],
    tr: [
      { q: 'Polonya vatandaşı ile evlilik tescili için hangi belgeler gereklidir?', a: 'Apostille ve yeminli tercümeli doğum belgesi, 6 aydan eski olmayan zaświadczenie o zdolności prawnej do zawarcia małżeństwa (evlenme ehliyet belgesi), pasaport ve gerekirse önceki evliliğin sona erdiğini gösteren mahkeme kararı.' },
      { q: 'Nikahtan karta pobytu\'ya kadar ne kadar beklenir?', a: 'Łączeniu rodzin (aile birleşimi) gerekçeli TRC için wniosek (başvuru) nikah hemen ardından MOS v2.0 üzerinden sunulabilir. Mazowieckim UW (Mazowiecki eyalet idaresi) kararı 8-14 ay sürer. 3 yıllık evlilikten sonra karta stałego pobytu yolu açılır.' },
      { q: 'Nikahtan hemen sonra vatandaşlık başvurusu yapılabilir mi?', a: 'Hayır. Evlilik doğrudan vatandaşlık vermez. Polonya vatandaşıyla 3 yıl evlilik ve karta stałego pobytu üzerinde 2 yıl ikametten sonra uznanie za obywatela polskiego (Polonya vatandaşı olarak tanınma) başvurusu yapılabilir - bu, evlilik yoluyla Polonya pasaportuna en kısa yoldur.' }
    ]
  },

  // ─── Driving licences & Code 95 ─────────────────────────────────────
  'kod-95-polsha-kak-poluchit': {
    ru: [
      { q: 'Что такое Kod 95 и кому он нужен?', a: 'Kod 95 - это код в водительских правах, подтверждающий право работать профессиональным водителем (грузовики C/CE и автобусы D/DE). Обязателен для всех платных перевозок в ЕС с 2018 года. Без него работа водителем-дальнобойщиком в Польше невозможна.' },
      { q: 'Какие три пути получения Kod 95 в Польше?', a: 'Kwalifikacja wstępna (начальная квалификация) 280 часов (для новичков 18+), kwalifikacja wstępna przyspieszona (ускоренная начальная квалификация) 140 часов (после 23 для C, 21 для D), либо szkolenie okresowe (периодическое обучение) 35 часов раз в 5 лет (для тех, у кого Kod 95 уже был).' },
      { q: 'Сколько стоит Kod 95 в Польше в 2026?', a: 'Kwalifikacja wstępna pełna (полная начальная квалификация) - от 4 500 PLN, przyspieszona (ускоренная) - от 2 500 PLN, szkolenie okresowe (периодическое обучение) - от 1 200 PLN. Плюс badania lekarskie i psychologiczne (медосмотр и психологические обследования, около 600 PLN) и государственный экзамен в WORD (Воеводском центре дорожного движения, 50 PLN).' },
      { q: 'Можно ли получить Kod 95 без польских прав?', a: 'Нет. Сначала нужно обменять иностранные права на польские (категория C, CE, D или DE), потом проходить kwalifikacja (квалификацию) или szkolenie okresowe (периодическое обучение). Иностранный CPC из ЕС признаётся автоматически.' }
    ],
    uk: [
      { q: 'Що таке Kod 95 і кому він потрібен?', a: 'Kod 95 — код у водійському посвідченні, що підтверджує право працювати професійним водієм (C/CE та D/DE). Обов\'язковий для всіх платних перевезень у ЄС з 2018 року.' },
      { q: 'Які три способи отримання Kod 95 у Польщі?', a: 'Kwalifikacja wstępna 280 годин (для початківців від 18 років), kwalifikacja wstępna przyspieszona 140 годин, або szkolenie okresowe 35 годин раз на 5 років (для тих, хто вже мав Kod 95).' },
      { q: 'Скільки коштує Kod 95 у Польщі у 2026 році?', a: 'Kwalifikacja wstępna pełna — від 4 500 PLN, przyspieszona — від 2 500 PLN, szkolenie okresowe — від 1 200 PLN. Плюс badania lekarskie (~600 PLN) та іспит у WORD (50 PLN).' },
      { q: 'Чи можна отримати Kod 95 без польського водійського посвідчення?', a: 'Ні. Спочатку потрібно обміняти іноземне посвідчення на польське (C, CE, D або DE), а потім проходити kwalifikacja або szkolenie okresowe. Іноземний CPC з ЄС визнається автоматично.' }
    ],

    pl: [
      { q: 'Czym jest Kod 95 i komu jest potrzebny?', a: 'Kod 95 to wpis w prawie jazdy potwierdzający kwalifikację zawodową kierowcy (C/CE i D/DE). Obowiązkowy w UE od 2018 dla wszystkich przewozów zarobkowych. Bez niego nie da się pracować w międzynarodowym transporcie.' },
      { q: 'Jakie są trzy ścieżki uzyskania Kod 95?', a: 'Kwalifikacja wstępna 280 h (od 18 lat), kwalifikacja wstępna przyspieszona 140 h (od 23 dla C, od 21 dla D), albo szkolenie okresowe 35 h co 5 lat dla osób z istniejącym wpisem.' },
      { q: 'Ile kosztuje Kod 95 w Polsce w 2026?', a: 'Kwalifikacja pełna - od 4 500 PLN, przyspieszona - od 2 500 PLN, szkolenie okresowe - od 1 200 PLN. Plus badania lekarskie i psychologiczne (~600 PLN) i egzamin państwowy w WORD (50 PLN).' },
      { q: 'Czy można dostać Kod 95 bez polskiego prawa jazdy?', a: 'Nie. Najpierw wymiana praw na polskie (C, CE, D, DE), potem kwalifikacja albo szkolenie. CPC z innego państwa UE jest uznawany automatycznie.' }
    ],
    en: [
      { q: 'What is Code 95 and who needs it?', a: 'Code 95 is an entry on the driving licence confirming professional-driver qualification (C/CE trucks, D/DE buses). It has been mandatory across the EU since 2018 for all paid transport. Without it you cannot work as a long-haul driver in Poland.' },
      { q: 'What are the three routes to Code 95 in Poland?', a: 'Initial qualification 280 hours (from 18 yrs), accelerated initial qualification 140 hours (from 23 for C, 21 for D), or periodic training 35 hours every 5 years for drivers who already hold Code 95.' },
      { q: 'How much does Code 95 cost in Poland in 2026?', a: 'Full initial qualification: from PLN 4,500. Accelerated: from PLN 2,500. Periodic training: from PLN 1,200. Plus medical/psychological tests (~PLN 600) and the state exam at WORD (regional driving-test centre, PLN 50).' },
      { q: 'Can I get Code 95 without a Polish licence?', a: 'No. First exchange your foreign licence to a Polish one (C, CE, D or DE), then take the qualification or periodic training. EU-issued CPCs are recognised automatically.' }
    ],
    tr: [
      { q: 'Kod 95 nedir ve kimler için zorunludur?', a: 'Kod 95, ehliyette yer alan ve profesyonel sürücü olarak çalışma hakkını (C/CE kamyon ve D/DE otobüs) onaylayan bir kayıttır. 2018\'den beri AB\'deki tüm ücretli taşımacılık için zorunludur. Onsuz Polonya\'da uluslararası nakliyede sürücü olarak çalışılamaz.' },
      { q: 'Polonya\'da Kod 95 alımının üç yolu nedir?', a: 'Kwalifikacja wstępna (başlangıç yeterliliği) 280 saat (18 yaş üstü yeni başlayanlar için), kwalifikacja wstępna przyspieszona (hızlandırılmış başlangıç yeterliliği) 140 saat (C için 23, D için 21 yaş üstü), veya 5 yılda bir szkolenie okresowe (periyodik eğitim) 35 saat (Kod 95\'i halihazırda olanlar için).' },
      { q: '2026\'da Polonya\'da Kod 95 ne kadar tutar?', a: 'Kwalifikacja wstępna pełna (tam başlangıç yeterliliği) 4.500 PLN\'den, przyspieszona (hızlandırılmış) 2.500 PLN\'den, szkolenie okresowe (periyodik eğitim) 1.200 PLN\'den başlar. Ek olarak badania lekarskie i psychologiczne (tıbbi ve psikolojik muayeneler, yaklaşık 600 PLN) ve WORD\'de (Eyalet Trafik Merkezi) devlet sınavı (50 PLN).' },
      { q: 'Polonya ehliyeti olmadan Kod 95 alınabilir mi?', a: 'Hayır. Önce yabancı ehliyet Polonya ehliyetine (C, CE, D veya DE kategorisi) değiştirilmelidir, sonra kwalifikacja (yeterlilik) veya szkolenie okresowe (periyodik eğitim) yapılır. AB\'den gelen yabancı CPC otomatik olarak tanınır.' }
    ]
  },

  'kod-95-kwalifikacja-wstepna-vs-szkolenie-okresowe': {
    ru: [
      { q: 'В чём разница kwalifikacja wstępna (начальная квалификация) и szkolenie okresowe (периодическое обучение)?', a: 'Kwalifikacja wstępna - для тех, кто впервые получает Kod 95 (280 или 140 часов теории + практика + государственный экзамен). Szkolenie okresowe - продление существующего Kod 95 каждые 5 лет (35 часов теории, без экзамена).' },
      { q: 'Сколько раз нужно проходить szkolenie okresowe (периодическое обучение)?', a: 'Каждые 5 лет с момента последнего прохождения. После szkolenia делается отметка в правах с новой датой действия Kod 95. Пропуск срока = потеря права работать водителем до прохождения.' },
      { q: 'Можно ли заменить kwalifikację wstępnа szkolenia okresowe?', a: 'Нет. Это разные процедуры. Если Kod 95 истёк больше года назад, нужно заново пройти kwalifikację wstępną (начальную квалификацию) - szkolenie okresowe (периодическое обучение) не годится.' }
    ],
    uk: [
      { q: 'У чому різниця між kwalifikacja wstępna та szkolenie okresowe?', a: 'Kwalifikacja wstępna — для тих, хто вперше отримує Kod 95 (280 або 140 годин теорії + практика + державний іспит). Szkolenie okresowe — продовження наявного Kod 95 кожні 5 років (35 годин, без іспиту).' },
      { q: 'Як часто потрібно проходити szkolenie okresowe?', a: 'Кожні 5 років з моменту останнього проходження. Після szkolenie у посвідченні робиться відмітка з новою датою дії Kod 95. Пропуск терміну означає втрату права працювати водієм до проходження курсу.' },
      { q: 'Чи можна замінити kwalifikację wstępną на szkolenie okresowe?', a: 'Ні. Це різні процедури. Якщо Kod 95 прострочений більш ніж на рік, потрібно заново пройти kwalifikację wstępną — szkolenie okresowe для цього не підходить.' }
    ],

    pl: [
      { q: 'Czym różni się kwalifikacja wstępna od szkolenia okresowego?', a: 'Kwalifikacja wstępna - dla tych, którzy uzyskują Kod 95 po raz pierwszy (280 lub 140 godzin + egzamin państwowy). Szkolenie okresowe - przedłużenie co 5 lat (35 godzin, bez egzaminu).' },
      { q: 'Co ile lat robi się szkolenie okresowe?', a: 'Co 5 lat od ostatniego ukończenia. Wpis w prawie jazdy z nową datą Kod 95. Przekroczenie terminu = utrata uprawnień do czasu ukończenia szkolenia.' },
      { q: 'Czy można zamienić kwalifikację wstępną na szkolenie okresowe?', a: 'Nie. Po wygaśnięciu Kod 95 powyżej roku - wymagana nowa kwalifikacja wstępna, szkolenie okresowe nie wystarczy.' }
    ],
    en: [
      { q: 'What\'s the difference between initial qualification and periodic training?', a: 'Initial qualification is for new Code 95 holders (280 or 140 hours plus state exam). Periodic training renews an existing Code 95 every 5 years (35 hours, no exam).' },
      { q: 'How often is periodic training required?', a: 'Every 5 years from the last completion. The licence is updated with a new Code 95 expiry. Missing the deadline blocks professional driving until renewal.' },
      { q: 'Can periodic training replace initial qualification?', a: 'No. If Code 95 has been expired for over a year, a fresh initial qualification is required - periodic training is not enough.' }
    ],
    tr: [
      { q: 'Kwalifikacja wstępna ile szkolenie okresowe arasındaki fark nedir?', a: 'Kwalifikacja wstępna (başlangıç yeterlilik kursu), Kod 95\'i ilk kez alacaklar içindir: 280 veya 140 saat teori artı uygulama ve devlet sınavı. Szkolenie okresowe (periyodik eğitim), mevcut Kod 95\'in her 5 yılda bir uzatılmasıdır: 35 saat teori, sınavsız.' },
      { q: 'Polonya\'da szkolenie okresowe (periyodik eğitim) ne sıklıkla yapılır?', a: 'Son tamamlamadan itibaren her 5 yılda bir. Eğitim sonrası ehliyete yeni Kod 95 geçerlilik tarihi işlenir. Süreyi geçirmek, eğitimi tamamlayana kadar profesyonel sürücülük hakkının kaybı anlamına gelir.' },
      { q: 'Kwalifikacja wstępna yerine szkolenie okresowe yapılabilir mi?', a: 'Hayır. Bunlar farklı süreçlerdir. Kod 95 bir yıldan fazla süredir geçersiz ise yeniden kwalifikacja wstępna (başlangıç yeterlilik kursu) tamamlanmalıdır - szkolenie okresowe yeterli değildir.' }
    ]
  },

  'obmen-prav-na-polskie-2026': {
    ru: [
      { q: 'Кому нужно менять водительские права на польские в 2026?', a: 'Иностранцам с TRC, PMŻ или Karta Polaka после 185 дней проживания в Польше. Безвиз и UKR временно позволяют ездить с украинскими/молдавскими правами, но при длительном пребывании обмен обязателен.' },
      { q: 'Сколько стоит обмен водительских прав в Польше?', a: 'Pozwolenie starostwa (разрешение старосты) - 100,50 PLN. Присяжный перевод иностранных прав - 50-150 PLN. Badania lekarskie (медосмотр) - 200 PLN. Если нужен экзамен теории WORD (Воеводского центра дорожного движения) - 50 PLN. Итого 350-500 PLN.' },
      { q: 'Какие страны меняют права без экзамена в 2026?', a: 'Без экзамена меняются: Украина (по Венской конвенции 1968), Беларусь, Грузия, Армения, Молдова, Узбекистан, Казахстан, Кыргызстан и страны ЕЭП. Россия - ситуативно (некоторые starostwa (старостаты) требуют теорию).' },
      { q: 'Какие страны требуют экзамен теории WORD?', a: 'США (категория B сдаётся теория WORD - в Воеводском центре дорожного движения), Великобритания, Индия, Австралия, ОАЭ, Турция (теория). Точный список - в Rozporządzeniu Ministra Infrastruktury z 24 lutego 2016 r. (Постановлении Министра инфраструктуры от 24 февраля 2016 г.).' }
    ],
    uk: [
      { q: 'Кому потрібно міняти водійські права на польські у 2026?', a: 'Іноземцям із TRC, PMŻ або Karta Polaka після 185 днів проживання в Польщі. Безвіз і UKR тимчасово дозволяють їздити з українськими/молдовськими правами, але за тривалого перебування обмін обов’язковий.' },
      { q: 'Скільки коштує обмін водійських прав у Польщі?', a: 'Pozwolenie starostwa (дозвіл старости) - 100,50 PLN. Присяжний переклад іноземних прав - 50-150 PLN. Badania lekarskie (медогляд) - 200 PLN. Якщо потрібен іспит теорії WORD (Воєводського центру дорожнього руху) - 50 PLN. Разом 350-500 PLN.' },
      { q: 'Які країни міняють права без іспиту у 2026?', a: 'Без іспиту міняються: Україна (за Віденською конвенцією 1968), Білорусь, Грузія, Вірменія, Молдова, Узбекистан, Казахстан, Киргизстан і країни ЄЕП. Росія - ситуативно (деякі starostwa (старостати) вимагають теорію).' },
      { q: 'Які країни вимагають іспит теорії WORD?', a: 'США (категорія B - складається теорія WORD у Воєводському центрі дорожнього руху), Велика Британія, Індія, Австралія, ОАЕ, Туреччина (теорія). Точний список - у Rozporządzeniu Ministra Infrastruktury z 24 lutego 2016 r. (Розпорядженні Міністра інфраструктури від 24 лютого 2016 р.).' }
    ],
    pl: [
      { q: 'Kto musi wymienić prawo jazdy na polskie w 2026?', a: 'Cudzoziemcy z TRC, PR lub Kartą Polaka po 185 dniach pobytu. Ruch bezwizowy i UKR pozwalają tymczasowo jeździć na zagranicznych prawach, ale przy długim pobycie wymiana jest obowiązkowa.' },
      { q: 'Ile kosztuje wymiana prawa jazdy?', a: 'Opłata starostwa - 100,50 PLN. Tłumaczenie przysięgłe - 50-150 PLN. Badania lekarskie - 200 PLN. Egzamin teoretyczny WORD jeśli wymagany - 50 PLN. Łącznie 350-500 PLN.' },
      { q: 'Jakie kraje wymieniają bez egzaminu w 2026?', a: 'Bez egzaminu: Ukraina (Wiedeń 1968), Białoruś, Gruzja, Armenia, Mołdawia, Uzbekistan, Kazachstan, Kirgistan i państwa EOG. Rosja - sytuacyjnie.' },
      { q: 'Które kraje wymagają teorii WORD?', a: 'USA, Wielka Brytania, Indie, Australia, ZEA, Turcja. Pełna lista w Rozporządzeniu MI z 24 lutego 2016 r.' }
    ],
    en: [
      { q: 'Who needs to exchange a driving licence in Poland in 2026?', a: 'Foreigners on TRC, PR or Karta Polaka after 185 days of residence. Visa-free and UKR allow temporary use of Ukrainian or Moldovan licences, but long-term stay requires exchange.' },
      { q: 'How much does exchanging a driving licence cost?', a: 'Starostwo (county office) fee PLN 100.50. Sworn translation PLN 50-150. Medical exam PLN 200. WORD (regional driving-test centre) theory test if required: PLN 50. Total: PLN 350-500.' },
      { q: 'Which countries can exchange without a test in 2026?', a: 'No test: Ukraine (Vienna 1968), Belarus, Georgia, Armenia, Moldova, Uzbekistan, Kazakhstan, Kyrgyzstan, and EEA states. Russia: case-by-case.' },
      { q: 'Which countries require a WORD theory exam?', a: 'USA, UK, India, Australia, UAE, Turkey. The full list is in the Regulation of the Minister of Infrastructure of 24 February 2016.' }
    ],
    tr: [
      { q: '2026\'da Polonya\'da ehliyet değişimi kimler için zorunludur?', a: 'TRC, karta stałego pobytu veya Karta Polaka sahibi yabancılar için 185 gün ikametten sonra zorunludur. Vizesiz giriş ve UKR statüsü, Ukrayna ve Moldova ehliyetlerinin geçici kullanımına izin verir, ancak uzun süreli kalış için değişim yapılmalıdır.' },
      { q: 'Polonya\'da ehliyet değişimi ücreti ne kadardır?', a: 'Starostwo (il/ilçe idaresi) harcı 100,50 PLN. Yeminli tercüme 50-150 PLN. Sağlık raporu (badania lekarskie) 200 PLN. Gerekirse WORD (Voyvodalık Sürücü Sınav Merkezi) teorik sınav harcı 50 PLN. Toplam 350-500 PLN.' },
      { q: 'Hangi ülkelerin ehliyetleri 2026\'da sınavsız değiştirilir?', a: 'Sınavsız değişim: Ukrayna (1968 Viyana Sözleşmesi), Beyaz Rusya, Gürcistan, Ermenistan, Moldova, Özbekistan, Kazakistan, Kırgızistan ve AEA üyesi devletler. Rusya - duruma göre (bazı starostwa teorik sınav ister).' },
      { q: 'Türk ehliyetinde Polonya WORD teorik sınavı zorunlu mudur?', a: 'Evet. Türkiye Viyana Sözleşmesi\'ni sınavsız değişim için tam onaylamadığından B kategorisi için bile WORD teorik sınavı zorunludur (50 PLN). C, CE, D, DE kategorileri için teorik + pratik sınav istenir. ABD, Birleşik Krallık, Hindistan, Avustralya ve BAE de WORD teorik sınavı gerektirir. Tam liste 24 Şubat 2016 tarihli Altyapı Bakanlığı Yönetmeliği\'ndedir.' }
    ]
  },

  'obmen-azerbajdzhanskih-prav-na-polskie': {
    ru: [
      { q: 'Можно ли обменять азербайджанские права на польские без экзамена?', a: 'Да. Азербайджан подписал Венскую конвенцию 1968 года, поэтому категории A и B меняются без сдачи теории и практики. Обмен через starostwo (старостат) по месту жительства за 100,50 PLN.' },
      { q: 'Какие документы нужны для обмена азербайджанских прав?', a: 'Оригинал водительских прав, присяжный перевод, паспорт, karta pobytu / PESEL, фото 35×45 мм, badania lekarskie (медосмотр, ~200 PLN), wniosek (заявление) по форме starostwa.' },
      { q: 'Меняются ли категории C и D из Азербайджана?', a: 'C и D меняются с экзаменом теории WORD (Воеводского центра дорожного движения). На практике многие starostwa (старостаты) также требуют экзамен на категории C, CE, D, DE - несмотря на Венскую конвенцию.' }
    ],
    uk: [
      { q: 'Чи можна обміняти азербайджанське водійське посвідчення на польське без іспиту?', a: 'Так. Азербайджан підписав Віденську конвенцію 1968 року, тому категорії A та B обмінюються без складання теорії та практики. Обмін здійснюється через starostwo за місцем проживання за 100,50 PLN.' },
      { q: 'Які документи потрібні для обміну азербайджанського посвідчення?', a: 'Оригінал водійського посвідчення, присяжний переклад, паспорт, karta pobytu / PESEL, фото 35×45 мм, badania lekarskie (~200 PLN), wniosek за формою starostwa.' },
      { q: 'Чи обмінюються категорії C та D з Азербайджану?', a: 'C та D обмінюються зі складанням теоретичного іспиту у WORD. На практиці багато starostwa вимагають іспит для категорій C, CE, D, DE навіть незважаючи на Віденську конвенцію.' }
    ],

    pl: [
      { q: 'Czy można wymienić azerbejdżańskie prawo jazdy bez egzaminu?', a: 'Tak. Azerbejdżan jest stroną Konwencji Wiedeńskiej 1968 - kategorie A i B wymienia się bez egzaminu. Wymiana w starostwie za 100,50 PLN.' },
      { q: 'Jakie dokumenty potrzebne do wymiany?', a: 'Oryginał prawa jazdy, tłumaczenie przysięgłe, paszport, karta pobytu / PESEL, zdjęcie 35×45 mm, badania lekarskie (~200 PLN), wniosek starostwa.' },
      { q: 'Czy kategorie C i D wymienia się z Azerbejdżanu?', a: 'Z egzaminem teorii WORD. W praktyce wiele starostw wymaga egzaminu nawet przy Wiedniu 1968.' }
    ],
    en: [
      { q: 'Can an Azerbaijani driving licence be exchanged without an exam?', a: 'Yes. Azerbaijan is a party to the 1968 Vienna Convention, so categories A and B are exchanged without theory or practical tests. Exchange at the local starostwo (county office) costs PLN 100.50.' },
      { q: 'What documents are needed?', a: 'Original licence, sworn translation, passport, residence card or PESEL, 35×45 mm photo, medical exam (~PLN 200), and the starostwo (county office) application form.' },
      { q: 'Are C and D categories exchangeable?', a: 'With a WORD (regional driving-test centre) theory exam. In practice many starostwo offices require an exam even under the Vienna Convention.' }
    ],
    tr: [
      { q: 'Azerbaycan ehliyeti Polonya\'da sınavsız değiştirilebilir mi?', a: 'Evet. Azerbaycan, 1968 Viyana Sözleşmesi\'ni imzaladığı için A ve B sınıfı belgeler teorik ve uygulamalı sınav olmadan değiştirilir. Değişim, ikamet yerinizdeki starostwo (eyalet alt birimi) üzerinden 100,50 PLN karşılığında yapılır.' },
      { q: 'Azerbaycan ehliyetinin değiştirilmesi için hangi belgeler gereklidir?', a: 'Sürücü belgesinin orijinali, yeminli tercüme, pasaport, karta pobytu veya PESEL, 35×45 mm fotoğraf, badania lekarskie (sağlık raporu, yaklaşık 200 PLN) ve starostwo başvuru formu (wniosek).' },
      { q: 'Azerbaycan\'dan C ve D sınıfı belgeler değiştirilebilir mi?', a: 'C ve D sınıfları WORD (Eyalet Trafik Eğitim Merkezi) teorik sınavıyla değiştirilir. Pratikte birçok starostwo, Viyana Sözleşmesi\'ne rağmen C, CE, D ve DE sınıfları için sınav talep eder.' }
    ]
  },

  'obmen-tureckih-prav-na-polskie': {
    ru: [
      { q: 'Какие условия обмена турецких прав на польские в 2026?', a: 'Турция не подписала Венскую конвенцию для обмена без экзамена. Категория B меняется через сдачу теории WORD (Воеводского центра дорожного движения, 50 PLN). Категории C, CE, D, DE - теория + практический экзамен.' },
      { q: 'Сколько стоит обмен турецких прав?', a: 'Starostwo (старостат) - 100,50 PLN, перевод 50-150 PLN, badania lekarskie (медосмотр) 200 PLN, экзамен теории WORD 50 PLN. Категория B итого ~400-500 PLN. С практическим экзаменом - до 700 PLN.' }
    ],
    uk: [
      { q: 'Які умови обміну турецьких прав на польські у 2026 році?', a: 'Туреччина не підписала Віденську конвенцію, тому обмін без іспиту неможливий. Категорія B обмінюється через складання теоретичного іспиту WORD (50 PLN). Категорії C, CE, D, DE — теорія плюс практичний іспит.' },
      { q: 'Скільки коштує обмін турецьких прав?', a: 'Starostwo — 100,50 PLN, переклад 50–150 PLN, badania lekarskie 200 PLN, теоретичний іспит WORD 50 PLN. Категорія B загалом ~400–500 PLN. З практичним іспитом — до 700 PLN.' }
    ],

    pl: [
      { q: 'Jakie są warunki wymiany tureckich praw jazdy w 2026?', a: 'Turcja nie ratyfikowała Konwencji Wiedeńskiej w pełni - kategoria B wymaga teorii WORD. Kategorie C, CE, D, DE - teoria plus egzamin praktyczny.' },
      { q: 'Ile kosztuje wymiana tureckiego prawa jazdy?', a: 'Starostwo 100,50 PLN, tłumaczenie 50-150 PLN, badania 200 PLN, teoria WORD 50 PLN. Kategoria B łącznie 400-500 PLN. Z egzaminem praktycznym do 700 PLN.' }
    ],
    en: [
      { q: 'How does Turkish licence exchange work in 2026?', a: 'Turkey is not a Vienna Convention party for exchange without exams. Category B requires the WORD (regional driving-test centre) theory test (PLN 50). Categories C, CE, D, DE require theory plus a practical exam.' },
      { q: 'How much does it cost to exchange a Turkish licence?', a: 'Starostwo (county office) PLN 100.50, sworn translation PLN 50-150, medical exam PLN 200, WORD (regional driving-test centre) theory PLN 50. Category B total: PLN 400-500. With practical exam, up to PLN 700.' }
    ],
    tr: [
      { q: 'Türk ehliyetinin Polonya\'da 2026\'da hangi koşullarda değiştirilir?', a: 'Türkiye 2013\'te Viyana Sözleşmesi\'ni onayladığı için 2016 sonrası \'yeni tip\' belgelerle A ve B sınıfı değişimi sınavsız yapılır. Süreç 45-90 gün, devlet harcı 100,50 PLN, yeminli tercüme 80-130 PLN. 2016 öncesi \'eski tip\' belgelerde apostille veya konsolosluk onayı zorunludur.' },
      { q: 'Türk ehliyeti değişimi ne kadar tutar?', a: 'Yeni tip A/B için toplam 180-230 PLN: opłata komunikacyjna 100,50 PLN, yeminli tercüme 80-130 PLN. Eski tip için apostille 60-80 PLN ek olarak gelir. C ve D sınıflarında sağlık raporu (180-250 PLN) ve psikoteknik (130-180 PLN) ile toplam 490-740 PLN\'ye çıkar.' }
    ]
  },

  'zamena-prav-ssha-uk-india-word-ekzamen': {
    ru: [
      { q: 'Нужно ли сдавать экзамен WORD (Воеводский центр дорожного движения) при обмене прав США/UK/Индии?', a: 'Да. США, Великобритания и Индия не входят в страны автоматического обмена. Категория B сдаётся теория WORD (30 вопросов, 75% правильных). Практика обычно не требуется для B, но C и D - с практикой.' },
      { q: 'Сколько стоит экзамен теории в WORD?', a: '50 PLN за подачу. Записаться можно онлайн на сайте WORD (Воеводского центра дорожного движения) по месту жительства. Очередь - 2-6 недель в Варшаве. Можно сдавать на польском, английском, русском, украинском или немецком.' },
      { q: 'Можно ли получить международные права в Польше?', a: 'Да, после обмена иностранных прав на польские - за 35 PLN в starostwie (старостате). Действительны 3 года (Вена) или 1 год (Женева). Нужны для поездок в страны вне ЕС.' }
    ],
    uk: [
      { q: 'Чи потрібно складати іспит WORD при обміні прав США/Великобританії/Індії?', a: 'Так. США, Великобританія та Індія не входять до країн автоматичного обміну. Категорія B — теоретичний іспит WORD (30 питань, 75% правильних відповідей). Практика для категорії B зазвичай не потрібна, але для C і D — обов\'язкова.' },
      { q: 'Скільки коштує теоретичний іспит у WORD?', a: '50 PLN за подачу заяви. Записатися можна онлайн на сайті WORD за місцем проживання. Черга у Варшаві — 2–6 тижнів. Іспит можна складати польською, англійською, російською, українською або німецькою мовою.' },
      { q: 'Чи можна отримати міжнародні права у Польщі?', a: 'Так, після обміну іноземних прав на польські — за 35 PLN у starostwie. Дійсні 3 роки (Віденська конвенція) або 1 рік (Женевська конвенція). Потрібні для поїздок до країн поза ЄС.' }
    ],

    pl: [
      { q: 'Czy potrzebny jest egzamin WORD przy wymianie praw USA / UK / Indii?', a: 'Tak. USA, Wielka Brytania, Indie nie są w wykazie automatycznej wymiany. Kategoria B - teoria WORD (30 pytań, 75% poprawnych). Praktyka zwykle nie dla B, ale C i D - z praktyką.' },
      { q: 'Ile kosztuje egzamin teoretyczny w WORD?', a: '50 PLN. Zapis online na stronie WORD. Kolejka 2-6 tygodni w Warszawie. Egzamin po polsku, angielsku, rosyjsku, ukraińsku lub niemiecku.' },
      { q: 'Czy w Polsce można wyrobić międzynarodowe prawo jazdy?', a: 'Tak, po wymianie praw na polskie - 35 PLN w starostwie. Ważność 3 lata (Wiedeń) lub 1 rok (Genewa). Potrzebne do jazdy poza UE.' }
    ],
    en: [
      { q: 'Do US, UK or Indian licences require a WORD exam?', a: 'Yes. The US, UK and India are not in the automatic-exchange list. Category B requires the WORD (regional driving-test centre) theory test (30 questions, 75% pass). Practical not usually required for B; required for C and D.' },
      { q: 'How much does the WORD theory exam cost?', a: 'PLN 50. Booking is online via the regional WORD (driving-test centre) site. The queue is 2-6 weeks in Warsaw. The exam is available in Polish, English, Russian, Ukrainian or German.' },
      { q: 'Can I get an international driving permit in Poland?', a: 'Yes - once your foreign licence is exchanged for a Polish one, you can get an IDP at the starostwo (county office) for PLN 35. Valid 3 years (Vienna) or 1 year (Geneva). Required for non-EU travel.' }
    ],
    tr: [
      { q: 'ABD, İngiltere ve Hindistan ehliyetlerinin değişiminde WORD sınavı zorunlu mu?', a: 'Evet. ABD, Brexit sonrası İngiltere ve Hindistan, otomatik değişim listesinde yer almaz. B sınıfı için WORD\'de teorik sınav zorunludur (30 soru, 74 üzerinden 68 puan ile geçilir). Pratik sınav genellikle B için aranmaz; C ve D için zorunludur.' },
      { q: 'WORD\'de teorik sınav ücreti ne kadar?', a: 'Sınav 50 PLN\'dir. Kayıt info-car.pl üzerinden çevrimiçi yapılır. Varşova\'da bekleme süresi 2-6 haftadır. Sınav Lehçe veya İngilizce verilir; Mazowieckim\'de İngilizce dil seçeneği rutin olarak sunulur.' },
      { q: 'Polonya\'dan uluslararası ehliyet alınabilir mi?', a: 'Evet. Yabancı ehliyetinizi Polonya ehliyetine çevirdikten sonra starostwo\'da 35 PLN karşılığında uluslararası ehliyet alınır. Geçerlilik 3 yıl (Viyana) veya 1 yıl (Cenevre); AB dışına seyahatlerde gereklidir.' }
    ]
  },

  'pravilo-185-dney-itd-shtrafy': {
    ru: [
      { q: 'Что такое правило 185 дней для водительских прав в Польше?', a: 'По польскому праву иностранец, проживший в Польше более 185 дней в году, обязан обменять иностранные права на польские. Без обмена - езда считается prowadzeniem pojazdu bez uprawnień (управлением транспортным средством без прав).' },
      { q: 'Какой штраф за езду без польских прав после 185 дней?', a: 'Mandat (штраф) ITD (Дорожной транспортной инспекции) от 1 500 до 5 000 PLN, в случае повторных нарушений - суд и до 30 000 PLN или ограничение свободы. На дороге автомобиль могут эвакуировать на postój policyjny (полицейскую стоянку).' },
      { q: 'Как ITD (Дорожная транспортная инспекция) проверяет 185 дней пребывания?', a: 'По штампам в паспорте, базе MOS v2.0, meldunku (регистрации по адресу), базе ZUS и записям таможни. При проверке инспектор вправе требовать подтверждения адреса и работы. Игнорирование чревато mandatем (штрафом).' }
    ],
    uk: [
      { q: 'Що таке правило 185 днів для водійських прав у Польщі?', a: 'Іноземець, який прожив у Польщі понад 185 днів на рік, зобов\'язаний обміняти іноземні права на польські. Без обміну керування автомобілем вважається prowadzeniem pojazdu bez uprawnień.' },
      { q: 'Який штраф за керування без польських прав після 185 днів?', a: 'Mandat ITD від 1 500 до 5 000 PLN, у разі повторних порушень — суд і до 30 000 PLN або обмеження волі. На дорозі автомобіль можуть евакуювати.' },
      { q: 'Як ITD перевіряє 185 днів перебування?', a: 'За штампами у паспорті, базою MOS v2.0, meldunkiem, базою ZUS та записами митниці. Під час перевірки інспектор має право вимагати підтвердження адреси проживання та місця роботи.' }
    ],

    pl: [
      { q: 'Czym jest zasada 185 dni dla wymiany prawa jazdy?', a: 'Cudzoziemiec mieszkający w Polsce ponad 185 dni w roku ma obowiązek wymienić prawo jazdy na polskie. Bez wymiany - jazda traktowana jako prowadzenie bez uprawnień.' },
      { q: 'Jaki jest mandat za jazdę bez polskiego prawa po 185 dniach?', a: 'Mandat ITD 1 500-5 000 PLN, w przypadku recydywy sąd i kara do 30 000 PLN lub ograniczenie wolności. Auto może być odholowane na parking policyjny.' },
      { q: 'Jak ITD sprawdza 185 dni pobytu?', a: 'Po stemplach w paszporcie, bazie MOS v2.0, meldunku, ZUS i straży granicznej. Inspektor może żądać potwierdzeń adresu i pracy.' }
    ],
    en: [
      { q: 'What is the 185-day rule for driving licences in Poland?', a: 'Under Polish law, a foreigner who has lived in Poland for more than 185 days in a calendar year is obliged to exchange the foreign licence for a Polish one. Driving without the exchange counts as driving without authorisation.' },
      { q: 'What\'s the fine for driving without a Polish licence past 185 days?', a: 'ITD (road transport inspection) fine PLN 1,500-5,000; for repeat offences, court fines up to PLN 30,000 or restriction of liberty. The vehicle can be towed to a police impound lot.' },
      { q: 'How does ITD verify 185 days of residence?', a: 'Through passport stamps, the MOS v2.0 database, meldunek (address registration) records, ZUS, and border-guard logs. Inspectors can request proof of address and employment.' }
    ],
    tr: [
      { q: 'Polonya\'da ehliyet için 185 gün kuralı nedir?', a: 'Polonya hukukuna göre yılda 185 günden fazla Polonya\'da ikamet eden yabancı, ulusal ehliyetini Polonya ehliyetine çevirmek zorundadır. Değişim olmadan araç kullanmak prowadzenie pojazdu bez uprawnień (ehliyetsiz araç kullanma) olarak değerlendirilir.' },
      { q: '185 gün sonrası Polonya ehliyetsiz araç kullanmanın cezası ne kadar?', a: 'ITD (Karayolu Ulaşım Müfettişliği) tarafından 1.500-5.000 PLN para cezası kesilir. Tekerrür durumunda mahkeme yoluyla 30.000 PLN\'ye kadar ceza veya özgürlük kısıtlaması uygulanabilir. Yol kontrolünde araç polis otoparkına çekilebilir.' },
      { q: 'ITD 185 günlük ikamet süresini nasıl doğrular?', a: 'Pasaport damgaları, MOS v2.0 sistemi, meldunek (adres kaydı), ZUS kayıtları ve sınır verilerinden doğrular. 2026 itibarıyla başlangıç tarihi ilk karta pobytu\'nun verildiği tarihtir; bu bilgi otomatik olarak ITD veri tabanında görünür. Kontrol sırasında müfettiş adres ve iş kanıtı isteyebilir.' }
    ]
  },

  'shtrafy-itd-bag-12000-pln-vodiel': {
    ru: [
      { q: 'Какие штрафы ITD и BAG для водителей грузовиков в 2026?', a: 'ITD (Inspekcja Transportu Drogowego - Дорожная транспортная инспекция) - польские дорожные штрафы до 12 000 PLN на одно нарушение. BAG (Bundesamt für Güterverkehr - Федеральная служба грузовых перевозок ФРГ) - немецкие штрафы за пересечение границы без правильных документов: tachograph, минимальная зарплата по MiLoG, EES.' },
      { q: 'Какие нарушения тахографа штрафуются больше всего?', a: 'Manipulacja tachografem (манипуляция тахографом) - 12 000 PLN на водителя + 12 000 PLN на фирму. Brak karty kierowcy (отсутствие карты водителя) - 2 000 PLN. Превышение времени работы - 100-500 PLN за каждый час.' },
      { q: 'Что грозит за нарушение MiLoG (минимальная зарплата ФРГ)?', a: 'BAG (Федеральная служба грузовых перевозок ФРГ) штрафует фирму до 500 000 EUR за неуплату немецкой минимальной зарплаты водителю при доставке в Германию. Дополнительно - Verbot закупочных контрактов с госорганами ФРГ.' }
    ],
    uk: [
      { q: 'Які штрафи ITD і BAG для водіїв вантажівок у 2026?', a: 'ITD — польські дорожні штрафи до 12 000 PLN за одне порушення. BAG — німецькі штрафи за перетин кордону без належних документів: tachograph, мінімальна зарплата за MiLoG, EES.' },
      { q: 'За які порушення тахографа штрафують найбільше?', a: 'Manipulacja tachografem — 12 000 PLN на водія + 12 000 PLN на фірму. Brak karty kierowcy — 2 000 PLN. Перевищення часу роботи — 100–500 PLN за кожну годину.' },
      { q: 'Що загрожує за порушення MiLoG?', a: 'BAG штрафує фірму до 500 000 EUR за несплату німецької мінімальної зарплати водієві під час доставки до Німеччини. Додатково — заборона державних контрактів у ФРН.' }
    ],

    pl: [
      { q: 'Jakie są kary ITD i BAG dla kierowców ciężarowych w 2026?', a: 'ITD - kary do 12 000 PLN za naruszenie. BAG (niemiecki urząd transportu) - kary za niezgodność z tachografem, MiLoG, EES.' },
      { q: 'Które naruszenia tachografu są najwyżej karane?', a: 'Manipulacja tachografem - 12 000 PLN na kierowcę + 12 000 PLN na firmę. Brak karty kierowcy - 2 000 PLN. Przekroczenie czasu pracy - 100-500 PLN za każdą godzinę.' },
      { q: 'Co grozi za naruszenie MiLoG?', a: 'BAG karze firmę nawet do 500 000 EUR za niewypłacenie niemieckiej płacy minimalnej. Dodatkowo zakaz kontraktów publicznych w Niemczech.' }
    ],
    en: [
      { q: 'What ITD and BAG fines apply to truck drivers in 2026?', a: 'ITD (Polish road inspection) issues fines up to PLN 12,000 per offence. BAG (German Federal Office for Goods Transport) fines cover tachograph violations, MiLoG minimum wage, and EES.' },
      { q: 'Which tachograph violations carry the highest fines?', a: 'Tachograph manipulation: PLN 12,000 per driver + PLN 12,000 per company. Missing driver card: PLN 2,000. Driving-time overrun: PLN 100-500 per hour.' },
      { q: 'What\'s the penalty for breaching German MiLoG?', a: 'BAG fines companies up to EUR 500,000 for unpaid German minimum wage on deliveries to Germany. Plus a ban on public contracts in Germany.' }
    ],
    tr: [
      { q: 'ITD ve BAG cezaları 2026\'da Türk şoförler için ne kadar?', a: 'ITD (Inspekcja Transportu Drogowego - Polonya Karayolu Taşımacılığı Müfettişliği) tek bir ihlal için 12.000 PLN\'ye kadar idari para cezası verebilir. BAG (Bundesamt für Logistik und Mobilität - Almanya Federal Lojistik ve Mobilite Dairesi), takograf, MiLoG asgari ücret ve EES uyumsuzluklarında Almanya\'ya teslimat yapan firmalara ceza keser. Türk uluslararası nakliye firmaları için her iki kurum da yüksek risk taşır.' },
      { q: 'Hangi takograf ihlalleri en yüksek ceza ile sonuçlanır?', a: 'Takograf manipülasyonu (manipulacja tachografem) - şoföre 12.000 PLN + şirkete 12.000 PLN. Şoför kartının (karta kierowcy) eksik olması - 2.000 PLN. Sürüş süresinin aşılması - saat başı 100-500 PLN. Başkasının kartını kullanmak en ciddi ihlal kategorisinde (NN) sayılır ve 3 ay ehliyet alıkoyma riski getirir.' },
      { q: 'Almanya\'da MiLoG (asgari ücret) ihlalinde ne olur?', a: 'BAG, Almanya\'ya teslimat yapan şoföre Alman asgari ücretini ödemeyen firmaya 500.000 EUR\'ya kadar ceza verir. Buna ek olarak Almanya\'da kamu ihalelerinden men edilme riski doğar. Türk merkezli nakliye firmaları için MiLoG uyumu zorunludur.' }
    ]
  },

  // ─── Apostille / legalisation / docs ──────────────────────────────────
  'apostille-v-polshe': {
    ru: [
      { q: 'Что такое apostille и зачем он нужен?', a: 'Apostille - упрощённая международная легализация публичных документов по Гаагской конвенции 1961 года. Нужен для использования польских документов за рубежом и иностранных в Польше - гражданство, брак, бизнес, трудоустройство.' },
      { q: 'Кто ставит apostille в Польше?', a: 'MSZ (Министерство иностранных дел) - на акты USC (отделов записи актов гражданского состояния) и судов. MEiN (Министерство образования) - на дипломы. KRK (справку из реестра судимости) - самообложима apostille MSZ. Документы консульства проходят через MSZ страны выдачи.' },
      { q: 'Сколько стоит apostille в Польше в 2026?', a: 'Opłata skarbowa (госпошлина) - 60 PLN за один документ MSZ. Срочно (24-48 часов) - +50%. Услуги консультанта по сбору и подаче - от 250 PLN за документ. Курьерская доставка - 25-60 PLN.' },
      { q: 'Сколько ждать apostille в MSZ?', a: 'Стандартный срок - 5-7 рабочих дней при подаче лично или по почте. Срочно - 24-48 часов с дополнительной оплатой. Полностью онлайн пока не работает - нужен оригинал документа.' }
    ],
    uk: [
      { q: 'Що таке apostille і навіщо він потрібен?', a: 'Apostille — спрощена міжнародна легалізація публічних документів за Гаагською конвенцією 1961 року. Потрібен для використання польських документів за кордоном і іноземних у Польщі — громадянство, шлюб, бізнес, працевлаштування.' },
      { q: 'Хто проставляє apostille у Польщі?', a: 'MSZ — на акти USC і судових органів. MEiN — на дипломи. KRK — самостійно легалізується через MSZ. Документи консульства оформлюються через MSZ країни видачі.' },
      { q: 'Скільки коштує apostille у Польщі у 2026?', a: 'Opłata skarbowa — 60 PLN за один документ MSZ. Терміново (24–48 годин) — +50%. Послуги консультанта — від 250 PLN за документ. Кур\'єрська доставка — 25–60 PLN.' },
      { q: 'Скільки чекати apostille в MSZ?', a: 'Стандартний термін — 5–7 робочих днів при поданні особисто або поштою. Терміново — 24–48 годин з додатковою оплатою. Повністю онлайн поки не працює — потрібен оригінал документа.' }
    ],

    pl: [
      { q: 'Czym jest apostille i po co jest potrzebne?', a: 'Apostille - uproszczona legalizacja dokumentów urzędowych zgodnie z Konwencją Haską 1961. Potrzebne do używania polskich dokumentów za granicą i zagranicznych w Polsce - obywatelstwo, ślub, biznes, praca.' },
      { q: 'Kto wydaje apostille w Polsce?', a: 'MSZ - akty USC i sądowe. MEiN - dyplomy. KRK - z apostille MSZ. Dokumenty konsularne - przez MSZ państwa wystawienia.' },
      { q: 'Ile kosztuje apostille w Polsce w 2026?', a: 'Opłata skarbowa - 60 PLN za dokument w MSZ. Tryb pilny (24-48 h) - +50%. Usługa konsultanta 250 PLN+. Kurier 25-60 PLN.' },
      { q: 'Ile się czeka na apostille w MSZ?', a: 'Standardowo 5-7 dni roboczych. Tryb pilny - 24-48 h z dodatkową opłatą. Pełnego trybu online jeszcze nie ma - wymagany oryginał.' }
    ],
    en: [
      { q: 'What is an apostille and why do you need it?', a: 'Apostille is a simplified international legalisation of public documents under the 1961 Hague Convention. Required to use Polish documents abroad or foreign documents in Poland - citizenship, marriage, business, employment.' },
      { q: 'Who issues apostilles in Poland?', a: 'MSZ (Ministry of Foreign Affairs) for USC (civil registry) and court records. MEiN (Education Ministry) for diplomas. KRK (criminal record) certificates are apostilled by MSZ. Consular documents go through the MSZ of the issuing country.' },
      { q: 'How much does an apostille cost in Poland in 2026?', a: 'PLN 60 stamp duty per document at MSZ. Express (24-48 hours): +50%. Consultant service from PLN 250. Courier PLN 25-60.' },
      { q: 'How long does an apostille take at MSZ?', a: 'Standard 5-7 working days when filed in person or by post. Express 24-48 hours with extra fee. Full online filing is not yet available - the original document is required.' }
    ],
    tr: [
      { q: 'Apostille nedir ve neden gereklidir?', a: 'Apostille, 1961 Lahey Sözleşmesi\'ne göre kamuya açık belgelerin uluslararası basitleştirilmiş legalizasyonudur. Polonya belgelerinin yurtdışında ve yabancı belgelerin Polonya\'da kullanılması için gereklidir - vatandaşlık, evlilik, iş, çalışma izni süreçlerinde. Türk vatandaşları için Türkiye\'de düzenlenen belgenin Polonya\'da geçerli olması için apostil zorunludur.' },
      { q: 'Türk belgelerinde apostili kim verir?', a: 'Türkiye\'de düzenlenen belgelerde apostili Valilik (il valiliği) verir. Medeni hal belgeleri (doğum, evlilik), adli sicil ve diplomalar için Valilik yetkilidir. Bazı idari belgeler için Kaymakamlık da apostille basabilir. Polonya\'da düzenlenen belgelerin apostili ise MSZ (Polonya Dışişleri Bakanlığı) tarafından verilir.' },
      { q: 'Polonya\'da apostille 2026\'da ne kadara mal olur?', a: 'Polonya\'da MSZ apostili belge başına 60 PLN damga vergisidir. Hızlandırılmış işlem (24-48 saat) +%50. Danışman hizmeti belge başına 250 PLN\'den başlar. Kurye 25-60 PLN. Türkiye\'de Valilik üzerinden apostille genellikle ücretsiz veya damga vergisi karşılığında yapılır.' },
      { q: 'Polonya\'da MSZ apostili kaç gün sürer?', a: 'Standart süre, şahsen veya posta yoluyla başvuruda 5-7 iş günüdür. Hızlandırılmış işlem 24-48 saat (ek ücretle). Tam çevrimiçi başvuru henüz mümkün değil - belgenin orijinali şarttır. Türk belgeleri için apostille Türkiye\'de Valilik üzerinden alınmalıdır, Polonya\'da değil.' }
    ]
  },

  'apostille-nostryfikacja-tlumaczenia-przysiegle': {
    ru: [
      { q: 'В чём разница apostille, nostryfikacji (нострификации) и присяжного перевода?', a: 'Apostille - международная легализация подлинности печати/подписи. Nostryfikacja - признание иностранного диплома польским вузом. Присяжный перевод - заверенный TEPISем перевод текста. Все три часто требуются вместе для дипломов и документов.' },
      { q: 'Когда нужен присяжный перевод документа с apostille?', a: 'Когда документ из страны, не подписавшей Гаагскую конвенцию, или когда польский urząd (государственное учреждение) прямо требует tłumaczenie przysięgłe (присяжный перевод). Apostille легализует оригинал, а перевод делает текст пригодным для польского чиновника.' },
      { q: 'Сколько стоит nostryfikacja (нострификация) диплома в Польше?', a: 'Госпошлина wuź - 50% от minimalnego wynagrodzenia (минимальной зарплаты, около 2 400 PLN в 2026). Услуги bывшего вуза по сбору - варьируются. Срок - 90-180 дней. Часто нужны дополнительные документы из страны выдачи.' }
    ],
    uk: [
      { q: 'У чому різниця між apostille, nostryfikacją і присяжним перекладом?', a: 'Apostille — міжнародна легалізація справжності печатки/підпису. Nostryfikacja — визнання іноземного диплома польським вишем. Присяжний переклад — завірений TEPISом переклад тексту. Усі три часто потрібні разом для дипломів.' },
      { q: 'Коли потрібен присяжний переклад документа з apostille?', a: 'Коли документ із країни, що не підписала Гаагську конвенцію, або коли польський urząd прямо вимагає tłumaczenie przysięgłe. Apostille легалізує оригінал, а переклад робить текст зрозумілим для чиновника.' },
      { q: 'Скільки коштує nostryfikacja диплома у Польщі?', a: 'Держмито — 50% від мінімальної зарплати (~2 400 PLN у 2026). Термін — 90–180 днів. Часто потрібні додаткові документи з країни видачі.' }
    ],

    pl: [
      { q: 'Czym różni się apostille, nostryfikacja i tłumaczenie przysięgłe?', a: 'Apostille - międzynarodowa legalizacja pieczęci/podpisu. Nostryfikacja - uznanie zagranicznego dyplomu przez polską uczelnię. Tłumaczenie przysięgłe - uwierzytelnione przez TEPIS. Często są wymagane łącznie.' },
      { q: 'Kiedy potrzebne tłumaczenie przysięgłe z apostille?', a: 'Gdy dokument pochodzi z państwa nie-Hagi lub gdy urząd wprost żąda tłumaczenia. Apostille legalizuje oryginał, tłumaczenie czyni go czytelnym.' },
      { q: 'Ile kosztuje nostryfikacja dyplomu w Polsce?', a: 'Opłata uczelni - 50% minimalnego wynagrodzenia (~2 400 PLN w 2026). Termin 90-180 dni. Często potrzebne dodatkowe dokumenty z kraju wydania.' }
    ],
    en: [
      { q: 'What\'s the difference between apostille, nostrification and sworn translation?', a: 'An apostille legalises a stamp or signature. Nostrification is a Polish university\'s recognition of a foreign degree. A sworn translation is a TEPIS-certified rendering of the text. They are often required together for diplomas.' },
      { q: 'When does a sworn translation with apostille become necessary?', a: 'When the document is issued by a non-Hague state or when the Polish urząd (office) explicitly requires tłumaczenie przysięgłe (sworn translation). The apostille legalises the original; the translation makes it usable.' },
      { q: 'How much does a Polish nostrification of a diploma cost?', a: 'University fee - 50% of the minimum wage (~PLN 2,400 in 2026). Term 90-180 days. Often requires extra documents from the issuing country.' }
    ],
    tr: [
      { q: 'Apostille, nostryfikacja (diploma denkliği) ve yeminli tercüme arasındaki fark nedir?', a: 'Apostille, mührün/imzanın uluslararası legalizasyonudur. Nostryfikacja, yabancı diplomanın bir Polonya üniversitesi veya NAWA tarafından tanınmasıdır. Yeminli tercüme (tłumaczenie przysięgłe) ise metnin TEPIS yetkili tercüman tarafından onaylı çevirisidir. Türk diplomaları için üçü çoğu zaman birlikte gerekir - özellikle düzenlenmiş mesleklerde.' },
      { q: 'Apostilli belgeye yeminli tercüme ne zaman gereklidir?', a: 'Belge Lahey Sözleşmesi\'ne taraf olmayan bir ülkeden geldiğinde ya da Polonya urząd\'ı (resmi dairesi) açıkça yeminli tercüme talep ettiğinde gereklidir. Apostille orijinal belgeyi legalize eder, tercüme metni Polonya yetkilisi için anlaşılır kılar. Türk belgeleri için tercüme mutlaka Polonya\'da kayıtlı tłumacz przysięgły z j. tureckiego (Türkçeden yeminli tercüman) tarafından yapılmalıdır.' },
      { q: 'Polonya\'da diploma nostryfikacji (denkliği) ne kadara mal olur?', a: 'Üniversite ücreti asgari ücretin %50\'si kadardır (2026\'da yaklaşık 2.400 PLN). NAWA üzerinden yapıldığında inceleme süresi 90-180 gün arasıdır. Sıkça düzenlendiği ülkeden ek belgeler istenir. Yazılım, pazarlama, tasarım gibi düzenlenmemiş meslekler için nostryfikacja gerekmez - apostille + tercüme yeterlidir.' }
    ]
  },

  'legalizacja-w-polshe-warszawa': {
    ru: [
      { q: 'С чего начать легализацию в Варшаве в 2026?', a: 'Сначала выбираете основание (работа, бизнес, учёба, брак), потом подаёте wniosek (заявление) через MOS v2.0, оформляете meldunek (регистрацию по адресу), PESEL, ZUS / медстраховку. Параллельно - обмен прав, трудовой договор, открытие счёта.' },
      { q: 'Сколько стоит полная легализация в Польше?', a: 'Государственные пошлины - около 800-1 200 PLN (TRC + meldunek (регистрация по адресу) + PESEL + права). Услуги консультанта - от 2 500 PLN за TRC. Если добавить PESEL, права и ZUS - обычно 4 000-7 000 PLN под ключ.' },
      { q: 'С чего начать легализацию иностранцу в Варшаве?', a: 'Запишитесь на консультацию у иммиграционного консультанта, чтобы определить основание. Без правильно подобранного основания подача в MOS v2.0 закончится отказом, а 14-дневное окно apelacji (апелляции) жёсткое.' }
    ],
    uk: [
      { q: 'З чого почати легалізацію у Варшаві у 2026?', a: 'Спочатку обираєте підставу (робота, бізнес, навчання, шлюб), потім подаєте wniosek через MOS v2.0, оформлюєте meldunek, PESEL, ZUS / медичне страхування. Паралельно — обмін прав, трудовий договір, відкриття рахунку.' },
      { q: 'Скільки коштує повна легалізація в Польщі?', a: 'Державне мито — близько 800–1 200 PLN. Послуги консультанта — від 2 500 PLN за TRC. Якщо додати PESEL, права та ZUS — зазвичай 4 000–7 000 PLN під ключ.' },
      { q: 'З чого почати легалізацію іноземцю у Варшаві?', a: 'Запишіться на консультацію до імміграційного консультанта, щоб визначити підставу. Без правильно обраної підстави подача до MOS v2.0 завершиться відмовою, а 14-денне вікно apelacji дуже жорстке.' }
    ],

    pl: [
      { q: 'Od czego zacząć legalizację w Warszawie w 2026?', a: 'Najpierw wybór podstawy (praca, biznes, studia, małżeństwo), potem wniosek w MOS v2.0, meldunek, PESEL, ZUS / ubezpieczenie. Równolegle - wymiana praw, umowa, konto bankowe.' },
      { q: 'Ile kosztuje pełna legalizacja w Polsce?', a: 'Opłaty skarbowe ~800-1 200 PLN (TRC + meldunek + PESEL + prawo jazdy). Honorarium konsultanta od 2 500 PLN za TRC. Pakiet pełny pod klucz 4 000-7 000 PLN.' },
      { q: 'Od czego zacząć cudzoziemcowi w Warszawie?', a: 'Konsultacja prawna, aby określić podstawę. Bez właściwej podstawy MOS v2.0 odmówi, a 14-dniowy termin odwołania jest sztywny.' }
    ],
    en: [
      { q: 'Where do I start legalising my stay in Warsaw in 2026?', a: 'First choose the basis (work, business, study, marriage), then file in MOS v2.0, register meldunek (address registration), get PESEL, sort ZUS or insurance. In parallel: exchange the driving licence, sign a contract, open a bank account.' },
      { q: 'How much does full legalisation in Poland cost?', a: 'State fees about PLN 800-1,200 (TRC + meldunek (address registration) + PESEL + licence). Consultant fees from PLN 2,500 for TRC. A turnkey package usually runs PLN 4,000-7,000.' },
      { q: 'Where do foreigners start in Warsaw?', a: 'A legal consultation to identify the right basis. Without it the MOS v2.0 filing risks refusal, and the 14-day appeal window is unforgiving.' }
    ],
    tr: [
      { q: 'Türk vatandaşı 2026\'da Varşova\'da legalizasyona nereden başlamalı?', a: 'Önce dayanağı seçin (iş, şirket kuruluşu, eğitim, evlilik). Ardından MOS v2.0 sistemi üzerinden wniosek (başvuru) sunun, meldunek (adres kaydı), PESEL ve ZUS / sağlık sigortası işlemlerini halledin. Paralel olarak ehliyet değişimi, iş sözleşmesi ve banka hesabı açılışı yürütülür.' },
      { q: 'Polonya\'da tam legalizasyon ne kadar tutar?', a: 'Devlet harçları yaklaşık 800-1.200 PLN (TRC + meldunek + PESEL + ehliyet). TRC için danışman ücreti 2.500 PLN\'den başlar. PESEL, ehliyet ve ZUS dahil tam paket genellikle 4.000-7.000 PLN tutar. Türkçe yeminli tercüme ve apostille hizmetleri ek olarak hesaplanır.' },
      { q: 'Türk vatandaşları için Varşova\'da legalizasyona nereden başlamak en doğrusu?', a: 'İlk olarak göç danışmanı ile randevu alın ve dayanağı belirleyin. Yanlış dayanak seçimi MOS v2.0 başvurusunun reddine yol açar; itiraz için yalnızca 14 gün vardır ve bu süre kesindir. Türkiye-Polonya çifte vatandaşlık gibi avantajlı yolları erken aşamada planlamak süreci hızlandırır.' }
    ]
  },

  // ─── PESEL, registration, EES ───────────────────────────────────────
  'pesel-profil-zaufany-mdowod-posle-karty-pobytu': {
    ru: [
      { q: 'Как получить PESEL после karta pobytu?', a: 'PESEL получают в urzędzie gminy (городском управлении) с действующей karta pobytu, паспортом и подтверждением цели (зарплата, налоги, банк). Услуга бесплатная, выдаётся на месте за 1-3 рабочих дня.' },
      { q: 'Что такое Profil Zaufany (доверенный профиль) и как его оформить?', a: 'Profil Zaufany - польский цифровой ID. Получают через банк (mBank, PKO, ING, Pekao) онлайн за 5 минут с активным польским счётом, или в urzędzie gminy (городском управлении) с PESEL и паспортом.' },
      { q: 'Чем mDowód отличается от dowoda osobistego (удостоверения личности)?', a: 'mDowód - мобильная версия польского удостоверения личности в приложении mObywatel. Доступен только гражданам РП и обладателям karty stałego pobytu (карты постоянного пребывания). Иностранцам с TRC mDowód временно недоступен - используйте Profil Zaufany (доверенный профиль).' }
    ],
    uk: [
      { q: 'Як отримати PESEL після karta pobytu?', a: 'PESEL отримують в urzędzie gminy з чинною karta pobytu, паспортом та підтвердженням мети перебування. Послуга безкоштовна, видається протягом 1–3 робочих днів.' },
      { q: 'Що таке Profil Zaufany і як його оформити?', a: 'Profil Zaufany — польський цифровий ID. Отримують через банк (mBank, PKO, ING, Pekao) онлайн за 5 хвилин за наявності активного польського рахунку, або в urzędzie gminy з PESEL і паспортом.' },
      { q: 'Чим mDowód відрізняється від dowodu osobistego?', a: 'mDowód — мобільна версія польського посвідчення особи в додатку mObywatel. Доступний лише громадянам РП та власникам karty stałego pobytu. Іноземцям з TRC mDowód наразі недоступний — використовуйте Profil Zaufany.' }
    ],

    pl: [
      { q: 'Jak otrzymać PESEL po karcie pobytu?', a: 'W urzędzie gminy z ważną kartą pobytu, paszportem i potwierdzeniem celu (umowa, podatki, bank). Bezpłatnie, 1-3 dni robocze.' },
      { q: 'Czym jest Profil Zaufany i jak go założyć?', a: 'Profil Zaufany - polski cyfrowy identyfikator. Przez bank (mBank, PKO, ING, Pekao) online w 5 minut lub w urzędzie gminy z PESEL i paszportem.' },
      { q: 'Czym mDowód różni się od dowodu osobistego?', a: 'mDowód - mobilna wersja dowodu w aplikacji mObywatel. Dostępny tylko dla obywateli RP i posiadaczy karty stałego pobytu. Cudzoziemcy z TRC korzystają z Profilu Zaufanego.' }
    ],
    en: [
      { q: 'How do I get PESEL after the residence card?', a: 'At the gmina (municipal) office with a valid Karta Pobytu, passport, and proof of purpose (employment, taxes, bank). Free, issued in 1-3 working days.' },
      { q: 'What is Profil Zaufany and how do you set it up?', a: 'Profil Zaufany (Trusted Profile) is the Polish digital ID. You can set it up via a Polish bank (mBank, PKO, ING, Pekao) online in 5 minutes, or at a gmina (municipal) office with PESEL and passport.' },
      { q: 'How does mDowód differ from the dowód osobisty?', a: 'mDowód is the mobile version of the Polish ID (dowód osobisty) inside the mObywatel app. Available only to Polish citizens and Karta Stałego Pobytu holders. TRC foreigners use Profil Zaufany (Trusted Profile) instead.' }
    ],
    tr: [
      { q: 'Karta Pobytu sonrası PESEL nasıl alınır?', a: 'PESEL Urząd Gminy\'de geçerli Karta Pobytu, pasaport ve amaç belgesi (maaş, vergi, banka) ile alınır. İşlem ücretsizdir, 1-3 iş gününde yerinde verilir.' },
      { q: 'Profil Zaufany nedir ve nasıl açılır?', a: 'Profil Zaufany Polonya\'nın dijital kimlik aracıdır. Banka aracılığıyla (mBank, PKO, ING, Pekao) aktif Polonya hesabıyla 5 dakikada çevrimiçi alınabilir. PESEL ve pasaportla Urząd Gminy\'de de açılabilir.' },
      { q: 'mDowód, dowód osobisty\'den nasıl ayrılır?', a: 'mDowód mObywatel uygulamasındaki Polonya kimliğinin mobil sürümüdür. Yalnızca Polonya vatandaşları ve Karta Stałego Pobytu sahipleri için açıktır. TRC sahibi yabancılar için mDowód şimdilik kullanılabilir değildir, bunun yerine Profil Zaufany kullanılır.' }
    ]
  },

  'cheklist-novopribyvshih-v-polshu': {
    ru: [
      { q: 'Что нужно сделать в первые 30 дней в Польше?', a: 'Meldunek (регистрация по адресу) в гмине (обязательно при пребывании > 30 дней), PESEL, открытие банковского счёта, подача wniosku (заявления) о TRC через MOS v2.0 (если виза D), подключение медстраховки и SIM-карты, регистрация в ZUS при работе.' },
      { q: 'Какие документы нужны новоприбывшему иностранцу?', a: 'Загранпаспорт с действующей визой/штампом, договор аренды или согласие хозяина на meldunek (регистрацию по адресу), paszport, фото 35×45 мм для PESEL и karty pobytu, медстраховка с покрытием от 30 000 €, договор работы при наличии.' },
      { q: 'С чего начать новоприбывшему в Польше?', a: 'Meldunek (регистрация по адресу) и PESEL - основа. Без них трудно с банком, медициной и налогами. Их можно получить за 1-3 рабочих дня в urzędzie gminy (городском управлении). Параллельно - wniosek (заявление) о TRC, чтобы не упустить срок.' }
    ],
    uk: [
      { q: 'Що потрібно зробити в перші 30 днів у Польщі?', a: 'Meldunek у гміні, PESEL, відкриття банківського рахунку, подача wniosku про TRC через MOS v2.0 (якщо віза D), підключення медичного страхування та SIM-картки, реєстрація в ZUS при працевлаштуванні.' },
      { q: 'Які документи потрібні новоприбулому іноземцю?', a: 'Закордонний паспорт з чинною візою/штампом, договір оренди або згода власника на meldunek, фото 35×45 мм, медичне страхування з покриттям від 30 000 €, трудовий договір за наявності.' },
      { q: 'З чого почати новоприбулому в Польщі?', a: 'Meldunek і PESEL — це основа. Без них складно з банком, медициною та податками. Їх можна отримати за 1–3 робочих дні в urzędzie gminy. Паралельно — wniosek про TRC, щоб не пропустити строк.' }
    ],

    pl: [
      { q: 'Co zrobić w pierwsze 30 dni w Polsce?', a: 'Meldunek w gminie, PESEL, konto bankowe, wniosek o TRC w MOS v2.0 (jeśli wiza D), ubezpieczenie zdrowotne, karta SIM, rejestracja w ZUS przy zatrudnieniu.' },
      { q: 'Jakie dokumenty potrzebne nowoprzybyłemu?', a: 'Paszport z wizą / stemplem, umowa najmu lub zgoda właściciela na meldunek, zdjęcia 35×45 mm, ubezpieczenie 30 000 €, umowa o pracę jeśli jest.' },
      { q: 'Od czego zacząć nowoprzybyłemu w Polsce?', a: 'Meldunek i PESEL. Bez nich trudno o bank, medycynę i podatki. W urzędzie gminy 1-3 dni robocze. Równolegle wniosek o TRC.' }
    ],
    en: [
      { q: 'What needs doing in the first 30 days in Poland?', a: 'Meldunek (address registration, mandatory if staying > 30 days), PESEL, opening a bank account, filing TRC via MOS v2.0 (if on D-visa), health insurance, SIM card, ZUS registration if employed.' },
      { q: 'What documents does a newcomer need?', a: 'Passport with valid visa or stamp, lease or landlord consent for meldunek (address registration), 35×45 mm photos, insurance covering at least €30,000, employment contract if applicable.' },
      { q: 'Where should a newcomer start in Poland?', a: 'Meldunek (address registration) and PESEL - without them banking, healthcare and taxes are difficult. They take 1-3 working days at the gmina (municipal) office. File the TRC in parallel.' }
    ],
    tr: [
      { q: 'Polonya\'da ilk 30 günde Türk vatandaşı ne yapmalı?', a: 'Gminada (belediye) meldunek (30 günden uzun kalışta zorunlu adres kaydı), PESEL, banka hesabı açılışı, D vizesi ile geldiyseniz MOS v2.0 üzerinden TRC başvurusu, sağlık sigortası bağlanması, SIM kart ve iş başlanmışsa ZUS kaydı yapılmalı. Türkiye\'den getirilen belgeler Valilik apostili ile birlikte olmalı.' },
      { q: 'Polonya\'ya yeni gelen Türk vatandaşına hangi belgeler gerekli?', a: 'Geçerli vize/damga ile pasaport, kira sözleşmesi veya ev sahibinin meldunek için onayı, PESEL ve karta pobytu için 35×45 mm fotoğraf, en az 30.000 € kapsamlı sağlık sigortası, varsa iş sözleşmesi. Türkiye\'den Valilik apostilli doğum, evlilik, adli sicil belgeleri ve diploma gerekli.' },
      { q: 'Türk vatandaşı Polonya\'ya geldiğinde nereden başlamalı?', a: 'Meldunek (adres kaydı) ve PESEL temeldir. Bunlar olmadan banka, sağlık ve vergi işlemleri zordur. Urząd Dzielnicy\'de (ilçe belediyesi) 1-3 iş gününde alınır. Paralel olarak TRC başvurusu yapılmalı - vize bitimini kaçırmamak için.' }
    ]
  },

  'ees-system-vyezd-vyezd-evrosoyuz': {
    ru: [
      { q: 'Что такое система EES в Евросоюзе?', a: 'EES (Entry/Exit System) - единая электронная система ЕС для отслеживания въезда и выезда граждан третьих стран по краткосрочным визам и безвизу. Запущена с 12 октября 2025. Заменяет штампы в паспорте на биометрические данные.' },
      { q: 'Касается ли EES обладателей karta pobytu?', a: 'Нет. EES работает только для краткосрочных пребываний (до 90/180 дней). Обладатели TRC, PMŻ или Karty Polaka проходят границу как резиденты - без сканирования EES.' },
      { q: 'Какие данные EES сохраняет о въезде?', a: 'Биометрические - лицо и отпечатки пальцев. Хранятся 3 года, потом автоматически удаляются. Данные передаются между странами Шенгена для проверки соблюдения 90-дневного безвизового лимита.' }
    ],
    uk: [
      { q: 'Що таке система EES у Євросоюзі?', a: 'EES — єдина електронна система ЄС для відстеження в\'їзду та виїзду громадян третіх країн за короткостроковими візами та безвізом. Запущена з 12 жовтня 2025 року. Замінює штампи в паспорті на біометричні дані.' },
      { q: 'Чи стосується EES власників karta pobytu?', a: 'Ні. EES діє лише для короткострокового перебування (до 90/180 днів). Власники TRC, PMŻ або Karty Polaka перетинають кордон як резиденти — без сканування EES.' },
      { q: 'Які дані EES зберігає про в\'їзд?', a: 'Біометричні — обличчя та відбитки пальців. Зберігаються 3 роки, після чого автоматично видаляються. Дані передаються між країнами Шенгену для перевірки дотримання 90-денного безвізового ліміту.' }
    ],

    pl: [
      { q: 'Czym jest system EES w Unii Europejskiej?', a: 'EES (Entry/Exit System) - wspólny elektroniczny rejestr UE dla obywateli państw trzecich przy krótkim pobycie. Działa od 12 października 2025. Zastępuje stemple paszportowe danymi biometrycznymi.' },
      { q: 'Czy EES dotyczy posiadaczy karty pobytu?', a: 'Nie. EES dotyczy tylko krótkich pobytów (do 90/180 dni). TRC, PR, Karta Polaka - granica jak rezydent.' },
      { q: 'Jakie dane EES zachowuje?', a: 'Biometryczne - twarz i odciski palców. Przechowywane 3 lata. Wymieniane między państwami Schengen dla pilnowania limitu 90 dni.' }
    ],
    en: [
      { q: 'What is the EU EES system?', a: 'The Entry/Exit System is the EU\'s single electronic register for third-country nationals on short stays. Live since 12 October 2025. It replaces passport stamps with biometric data.' },
      { q: 'Does EES apply to residence-card holders?', a: 'No. EES covers short stays only (up to 90 / 180 days). TRC, PR and Karta Polaka holders cross the border as residents - no EES scan.' },
      { q: 'What data does EES store on entry?', a: 'Biometrics - face and fingerprints. Retained for 3 years, then auto-deleted. Shared between Schengen states to enforce the 90-day limit.' }
    ],
    tr: [
      { q: 'EES sistemi nedir ve Türk vatandaşlarını nasıl etkiler?', a: 'EES (Entry/Exit System), AB\'nin kısa süreli vize veya vizesiz rejimle giren üçüncü ülke vatandaşlarının Schengen sınırı geçişlerini izlediği elektronik bir kayıt sistemidir. 12 Ekim 2024\'ten itibaren aşamalı olarak devreye girdi. Pasaport mühürlerinin yerini biyometrik veriler (yüz + 4 parmak izi) aldı. Türkiye\'den Schengen\'e kısa süreli vizeyle giren Türk vatandaşları sistem tarafından kayıt altına alınır.' },
      { q: 'EES Karta Pobytu sahiplerini de etkiler mi?', a: 'Hayır. EES yalnızca kısa süreli kalışlar (180 günde 90 gün) için çalışır. Karta czasowego pobytu, Karta stałego pobytu veya geçerli ulusal D vizesi sahibi yabancılar Schengen sınırını AB sakini gibi geçer - EES taraması yapılmaz. Ancak normal pasaportla çıkış yaparsanız tekrar girişte sistem devreye girer.' },
      { q: 'EES giriş sırasında hangi verileri saklar ve ne kadar süreyle?', a: 'Yüz fotoğrafı ve 4 parmak izi biyometrik verisi kaydedilir. Veriler son giriş tarihinden itibaren 3 yıl boyunca saklanır, ardından otomatik olarak silinir. Tüm Schengen ülkeleri arasında paylaşılır ve 180 günde 90 gün kuralının takibinde kullanılır. 12 yaşın altındaki çocuklar parmak izi vermekten muaftır.' }
    ]
  },

  // ─── Sp. z o.o., JDG, business ───────────────────────────────────────
  'otkrytie-sp-z-o-o-polsha-instrukciya': {
    ru: [
      { q: 'Сколько стоит открыть Sp. z o.o. (ООО) в Польше в 2026?', a: 'KRS S24 (Государственный судебный реестр) онлайн - 250 PLN, бумажная подача - 500 PLN. Минимальный капитал - 5 000 PLN (вносится на счёт). Услуги консультанта по сопровождению - от 1 800 PLN под ключ. Открытие банковского счёта в Польше - бесплатно.' },
      { q: 'Сколько ждать регистрацию Sp. z o.o. (ООО)?', a: 'Через KRS S24 (онлайн) - 1 рабочий день при правильно оформленном wniosku (заявлении). Через бумажную подачу - 7-14 дней. Параллельно автоматически присваиваются NIP и REGON. VAT - отдельная регистрация, 7-30 дней.' },
      { q: 'Можно ли открыть Sp. z o.o. в Польше иностранцу без TRC?', a: 'Да. В отличие от JDG (ИП), Sp. z o.o. (ООО) не требует TRC - учредителем может быть нерезидент. Но при работе в фирме в Польше понадобится zezwolenie na pracę (разрешение на работу) или TRC. Управлять можно дистанционно.' },
      { q: 'Какие налоги платит Sp. z o.o. в 2026?', a: 'CIT 9% при доходе до 2 млн EUR, иначе 19%. Estonian CIT (эстонский налог на прибыль, от 10% при выплате дивидендов) - для малого бизнеса с reinwestycjami (реинвестициями). VAT 23% (8% и 5% для отдельных категорий). PIT 19% - на дивиденды.' }
    ],
    uk: [
      { q: 'Скільки коштує відкрити Sp. z o.o. у Польщі в 2026 році?', a: 'KRS S24 онлайн — 250 PLN, паперова подача — 500 PLN. Мінімальний капітал — 5 000 PLN. Послуги консультанта — від 1 800 PLN під ключ. Відкриття банківського рахунку — безкоштовно.' },
      { q: 'Скільки чекати реєстрацію Sp. z o.o.?', a: 'Через KRS S24 (онлайн) — 1 робочий день за умови правильно оформленого wniosku. Через паперову подачу — 7–14 днів. NIP і REGON присвоюються автоматично. VAT — окрема реєстрація, 7–30 днів.' },
      { q: 'Чи може іноземець без TRC відкрити Sp. z o.o. у Польщі?', a: 'Так. На відміну від JDG, Sp. z o.o. не вимагає TRC — засновником може бути нерезидент. Але для роботи в компанії в Польщі знадобиться zezwolenie na pracę або TRC. Управляти можна дистанційно.' },
      { q: 'Які податки сплачує Sp. z o.o. у 2026 році?', a: 'CIT 9% при доході до 2 млн EUR, інакше 19%. Estonian CIT від 10% при виплаті дивідендів. VAT 23% (8% і 5% для окремих категорій). PIT 19% на дивіденди.' }
    ],

    pl: [
      { q: 'Ile kosztuje założenie Sp. z o.o. w 2026?', a: 'KRS S24 online - 250 PLN, papierowo - 500 PLN. Kapitał minimalny 5 000 PLN. Honorarium konsultanta od 1 800 PLN. Konto bankowe - bezpłatnie.' },
      { q: 'Ile czeka się na rejestrację Sp. z o.o.?', a: 'Przez S24 - 1 dzień roboczy. Papierowo 7-14 dni. NIP i REGON przyznaje się automatycznie. VAT osobno 7-30 dni.' },
      { q: 'Czy cudzoziemiec bez TRC może założyć Sp. z o.o.?', a: 'Tak. W przeciwieństwie do JDG, Sp. z o.o. nie wymaga TRC. Praca w firmie w Polsce wymaga zezwolenia lub TRC. Zarządzanie zdalnie.' },
      { q: 'Jakie podatki płaci Sp. z o.o. w 2026?', a: 'CIT 9% do 2 mln EUR, 19% powyżej. Estoński CIT od 10% przy wypłacie dywidendy. VAT 23%, 8% i 5%. PIT 19% od dywidendy.' }
    ],
    en: [
      { q: 'How much does opening a Sp. z o.o. (LLC) in Poland cost in 2026?', a: 'KRS S24 (National Court Register) online: PLN 250. Paper filing: PLN 500. Minimum share capital: PLN 5,000. Consultant service from PLN 1,800 turnkey. Polish bank account: free.' },
      { q: 'How long does Sp. z o.o. (LLC) registration take?', a: 'Via S24 online - 1 working day with a clean application. Paper filing 7-14 days. NIP and REGON assigned automatically. VAT registration separately, 7-30 days.' },
      { q: 'Can a non-resident open a Sp. z o.o. in Poland?', a: 'Yes. Unlike JDG (sole proprietorship), Sp. z o.o. (LLC) does not require a residence card - a non-resident can be a founder. To work in the company you\'ll need a work permit or TRC. Management can be remote.' },
      { q: 'What taxes does a Sp. z o.o. pay in 2026?', a: 'CIT 9% up to EUR 2M, 19% above. Estonian CIT (deferred CIT regime) from 10% on dividend distribution. VAT 23%, with 8% and 5% reduced rates. PIT 19% on dividends.' }
    ],
    tr: [
      { q: 'Polonya\'da Sp. z o.o. kuruluşu 2026\'da ne kadara mal olur?', a: 'KRS S24 (çevrimiçi şirket kuruluş portalı) üzerinden 250 PLN, kâğıt başvuruyla 500 PLN. Asgari sermaye 5.000 PLN\'dir (hesaba yatırılır). Anahtar teslim danışmanlık 1.800 PLN\'den başlar. Polonya\'da banka hesabı açılışı ücretsizdir.' },
      { q: 'Sp. z o.o. tescili kaç gün sürer?', a: 'KRS S24 üzerinden doğru hazırlanmış bir wniosek ile 1 iş gününde tamamlanır. Kâğıt başvuruyla 7-14 gün sürer. NIP ve REGON otomatik atanır. VAT kaydı ayrı bir süreçtir, 7-30 gün alır.' },
      { q: 'Karta Pobytu olmadan yabancı bir Türk vatandaşı Sp. z o.o. açabilir mi?', a: 'Evet. JDG\'nin aksine Sp. z o.o. için Karta Pobytu gerekmez - yerleşik olmayan bir kişi de kurucu olabilir. Şirket içinde Polonya\'da çalışmak için zezwolenie na pracę veya Karta Pobytu gerekir. Yönetim uzaktan yapılabilir.' },
      { q: 'Sp. z o.o. 2026\'da hangi vergileri öder?', a: '2 milyon EUR\'a kadar gelir için CIT %9, üzeri için %19\'dur. Estonian CIT (temettü dağıtımında %10\'dan başlar) yeniden yatırım yapan KOBİ\'ler için uygundur. VAT %23 (bazı kategorilerde %8 ve %5). Temettüler üzerinde %19 PIT alınır.' }
    ]
  },

  'jdg-dlya-inostrancev-v-polshe': {
    ru: [
      { q: 'Может ли иностранец открыть JDG (ИП) в Польше?', a: 'Только обладатели TRC по основанию работы или бизнеса, PMŻ, długoterminowego rezydenta UE (долгосрочного резидента ЕС) или Karta Polaka. На студенческой karcie pobytu JDG нельзя. Для регистрации - CEIDG (Центральный реестр предпринимателей) онлайн через ePUAP за 1 день.' },
      { q: 'Какие налоговые льготы есть на JDG в 2026?', a: 'Ulga na start (льгота для стартующих) - освобождение от ZUS на 6 месяцев. Mały ZUS Plus (Малый ZUS Плюс) - пониженные взносы при доходе до 120 000 PLN/год. IP Box - 5% ставка PIT для разработчиков ПО. Riccio - линейная 19% или прогрессивная 12/32%.' },
      { q: 'Сколько стоит обслуживание JDG в год?', a: 'ZUS - около 500-1 700 PLN/мес в зависимости от opcji (опции). Бухгалтерия - от 200 PLN/мес. ZUS zdrowotny (медицинский взнос) - 9% от dochodu (дохода, минимум ~370 PLN). При нулевом доходе - около 6 000 PLN/год минимум.' }
    ],
    uk: [
      { q: 'Чи може іноземець відкрити JDG у Польщі?', a: 'Лише власники TRC на підставі роботи або бізнесу, PMŻ, długoterminowego rezydenta UE або Karta Polaka. На студентській karcie pobytu JDG відкрити не можна. Реєстрація — CEIDG онлайн через ePUAP за 1 день.' },
      { q: 'Які податкові пільги доступні на JDG у 2026 році?', a: 'Ulga na start — звільнення від ZUS на 6 місяців. Mały ZUS Plus — знижені внески при доході до 120 000 PLN на рік. IP Box — ставка PIT 5% для розробників ПЗ. Лінійна 19% або прогресивна 12/32%.' },
      { q: 'Скільки коштує обслуговування JDG на рік?', a: 'ZUS — близько 500–1 700 PLN на місяць залежно від обраної опції. Бухгалтерія — від 200 PLN на місяць. ZUS zdrowotny — 9% від dochodu (мінімум ~370 PLN). При нульовому доході — близько 6 000 PLN на рік мінімум.' }
    ],

    pl: [
      { q: 'Czy cudzoziemiec może założyć JDG w Polsce?', a: 'Tylko z TRC na podstawie pracy lub biznesu, PR, rezydent UE lub Karta Polaka. Na karcie studenckiej nie. Rejestracja w CEIDG online przez ePUAP w 1 dzień.' },
      { q: 'Jakie ulgi podatkowe ma JDG w 2026?', a: 'Ulga na start - zwolnienie z ZUS przez 6 m-cy. Mały ZUS Plus dla przychodów do 120 000 PLN. IP Box 5% PIT dla programistów. Liniowy 19% lub skala 12/32%.' },
      { q: 'Ile kosztuje prowadzenie JDG rocznie?', a: 'ZUS 500-1 700 PLN/m-c zależnie od opcji. Księgowość od 200 PLN/m-c. ZUS zdrowotny 9% dochodu (min. ~370 PLN). Bez przychodu rocznie ok. 6 000 PLN.' }
    ],
    en: [
      { q: 'Can a foreigner open a JDG (sole proprietorship) in Poland?', a: 'Only those with a TRC on work or business basis, PR, EU long-term resident, or Karta Polaka. Not available on a student card. CEIDG (business register) registration is online via ePUAP and takes one day.' },
      { q: 'What tax breaks does JDG offer in 2026?', a: 'Ulga na start (start-up relief): 6-month ZUS exemption. Mały ZUS Plus (Small ZUS Plus): reduced contributions up to PLN 120,000 income. IP Box: 5% PIT for software developers. Linear 19% or progressive 12/32% scale.' },
      { q: 'What does running a JDG cost annually?', a: 'ZUS PLN 500-1,700 per month depending on option. Accounting from PLN 200/month. Health-ZUS 9% of income (min. ~PLN 370). With zero income, ~PLN 6,000 per year minimum.' }
    ],
    tr: [
      { q: 'Yabancı bir Türk vatandaşı Polonya\'da JDG açabilir mi?', a: 'Yalnızca iş veya iş kurma gerekçesiyle Karta Pobytu, Karta Stałego Pobytu, AB uzun süreli ikamet sahibi ya da Karta Polaka sahipleri JDG açabilir. Öğrenci kartıyla JDG açılamaz. Kayıt CEIDG (Merkezi İşletme Sicili) üzerinden ePUAP ile çevrimiçi yapılır ve 1 gün sürer.' },
      { q: 'JDG için 2026\'da hangi vergi avantajları vardır?', a: 'Ulga na start (başlangıç indirimi) 6 ay ZUS muafiyeti sağlar. Mały ZUS Plus, yıllık 120.000 PLN\'e kadar gelir için indirimli prim sunar. IP Box yazılım geliştiricileri için %5 PIT oranı sağlar. Vergi türü olarak doğrusal %19 veya 12/32 dilimi seçilebilir.' },
      { q: 'JDG yıllık ne kadara mal olur?', a: 'ZUS seçilen modele göre aylık 500-1.700 PLN tutar. Muhasebe aylık 200 PLN\'den başlar. ZUS zdrowotny (sağlık primi) gelirin %9\'u kadardır (asgari yaklaşık 370 PLN). Sıfır gelirde bile yıllık asgari 6.000 PLN civarındadır.' }
    ]
  },

  'likvidaciya-sp-z-oo-instrukciya': {
    ru: [
      { q: 'Сколько длится likwidacja Sp. z o.o. (ликвидация ООО) в Польше?', a: 'Минимум 6 месяцев (по статье 286 KSH - Кодекса торговых обществ). Полная процедура - 9-18 месяцев. Включает уведомление KRS (Государственного судебного реестра), объявление в Monitor Sądowy i Gospodarczy (Судебно-хозяйственном вестнике), ожидание 3 месяца для wierzycieli (кредиторов), бухгалтерскую отчётность.' },
      { q: 'Что дешевле - likwidacja или sprzedaż Sp. z o.o.?', a: 'Sprzedaż udziałów (продажа долей) - 2-4 недели и от 800 PLN. Likwidacja (ликвидация) - 6+ месяцев и от 5 000 PLN. Sprzedaż подходит, если есть покупатель и нет долгов. Likwidacja - единственный путь при долгах перед ZUS / US.' },
      { q: 'Какие налоги при ликвидации Sp. z o.o.?', a: 'CIT на нераспределённую прибыль (9% или 19%). PIT 19% на ликвидационные выплаты учредителям. PCC 0,5% от sumy nettoa imienia. VAT - окончательная декларация перед wykreśleniem (исключением из реестра).' }
    ],
    uk: [
      { q: 'Скільки триває likwidacja Sp. z o.o. у Польщі?', a: 'Мінімум 6 місяців (згідно зі статтею 286 KSH). Повна процедура — 9–18 місяців. Включає повідомлення KRS, оголошення в Monitor Sądowy i Gospodarczy, очікування 3 місяці для wierzycieli, бухгалтерську звітність.' },
      { q: 'Що дешевше — likwidacja чи sprzedaż Sp. z o.o.?', a: 'Sprzedaż udziałów — 2–4 тижні та від 800 PLN. Likwidacja — 6+ місяців та від 5 000 PLN. Sprzedaż підходить, якщо є покупець і немає боргів. Likwidacja — єдиний шлях при боргах перед ZUS / US.' },
      { q: 'Які податки сплачуються при ліквідації Sp. z o.o.?', a: 'CIT на нерозподілений прибуток (9% або 19%). PIT 19% на ліквідаційні виплати засновникам. PCC 0,5%. VAT — остаточна декларація перед wykreśleniem.' }
    ],

    pl: [
      { q: 'Ile trwa likwidacja Sp. z o.o.?', a: 'Minimum 6 miesięcy (art. 286 KSH). Pełen cykl 9-18 miesięcy. Obejmuje wpis do KRS, ogłoszenie w MSiG, 3-miesięczne oczekiwanie na wierzycieli, sprawozdawczość.' },
      { q: 'Co tańsze - likwidacja czy sprzedaż?', a: 'Sprzedaż udziałów 2-4 tygodnie i od 800 PLN. Likwidacja 6+ miesięcy i od 5 000 PLN. Sprzedaż gdy jest kupiec i brak długów. Likwidacja przy zaległościach ZUS / US.' },
      { q: 'Jakie podatki przy likwidacji Sp. z o.o.?', a: 'CIT od niepodzielonego zysku (9% lub 19%). PIT 19% od wypłat likwidacyjnych. PCC 0,5%. VAT - ostateczna deklaracja przed wykreśleniem.' }
    ],
    en: [
      { q: 'How long does liquidating a Polish Sp. z o.o. take?', a: 'Minimum 6 months under Article 286 of the Commercial Code. Full cycle 9-18 months. Includes KRS (National Court Register) notice, MSiG (Polish Court & Commercial Gazette) publication, 3-month creditor wait, accounting reports.' },
      { q: 'What\'s cheaper - liquidation or sale?', a: 'A share sale takes 2-4 weeks and starts at PLN 800. Liquidation takes 6+ months and starts at PLN 5,000. Sale fits where there\'s a buyer and no debts. Liquidation is required with ZUS / US debt.' },
      { q: 'What taxes apply during Sp. z o.o. liquidation?', a: 'CIT on undistributed profit (9% or 19%). PIT 19% on distributions. PCC 0.5%. VAT - final return before deregistration.' }
    ],
    tr: [
      { q: 'Polonya\'da Sp. z o.o. tasfiyesi ne kadar sürer?', a: 'Minimum 6 ay (Ticaret Şirketleri Kanunu - KSH madde 286). Tam süreç 6-8 ay, karmaşık durumlarda 9-18 aydır. KRS bildirimi, Monitor Sądowy i Gospodarczy ilanı, alacaklılar için 3 aylık bekleme süresi ve muhasebe raporlamasını kapsar.' },
      { q: 'Sp. z o.o. tasfiyesi mi yoksa satışı mı daha avantajlıdır?', a: 'Hisse satışı 2-4 hafta sürer ve 1.500 PLN\'den başlar. Tasfiye 6 aydan fazla sürer ve 5.000 PLN\'den başlar. Borçsuz ve alıcısı bulunan şirketler için satış mantıklıdır. ZUS veya US borcu olan şirketler için tasfiye zorunlu yoldur.' },
      { q: 'Sp. z o.o. tasfiyesinde hangi vergiler ödenir?', a: 'Dağıtılmamış kâr üzerinden CIT (%9 veya %19). Ortaklara yapılan tasfiye ödemelerinde %19 PIT. Tasfiye paylaşımının net tutarı üzerinden %0,5 PCC. KRS\'den silinmeden önce nihai VAT beyannamesi sunulur.' }
    ]
  },

  'nalogovye-lgoty-estonian-cit-ip-box': {
    ru: [
      { q: 'Что такое Estonian CIT в Польше?', a: 'Estonian CIT (эстонский налог на прибыль) - режим налогообложения, при котором налог платится только при выплате дивидендов (10% для малых, 20% для остальных), а не на прибыль за год. Подходит малому и среднему бизнесу с reinwestycjami (реинвестициями).' },
      { q: 'Кому подходит IP Box 5% в Польше?', a: 'IP Box - для разработчиков ПО, патентов и других kwalifikowanych prawa własności intelektualnej (квалифицированных прав интеллектуальной собственности). Снижает PIT/CIT с 19% до 5% на доход от лицензий и продаж IP. Требует ewidencji R&D (учёта НИОКР) и kalkulacji nexus (расчёта nexus).' },
      { q: 'Можно ли совмещать IP Box и Estonian CIT?', a: 'Нет. Estonian CIT (эстонский налог на прибыль) исключает применение IP Box, ulgi B+R (льготы НИОКР) i innych ulg. Нужно выбирать стратегию: либо отсрочка налога (Estonian), либо льготная ставка на IP (IP Box).' }
    ],
    uk: [
      { q: 'Що таке Estonian CIT у Польщі?', a: 'Estonian CIT — режим оподаткування, за якого податок сплачується лише при виплаті дивідендів (10% для малих підприємств, 20% для інших), а не з річного прибутку. Підходить малому бізнесу з реінвестиціями.' },
      { q: 'Кому підходить IP Box 5% у Польщі?', a: 'IP Box — для розробників ПЗ, патентів та інших kwalifikowanych prawa własności intelektualnej. Знижує PIT/CIT з 19% до 5% на дохід від ліцензій та продажу IP. Потребує ewidencji R&D та kalkulacji nexus.' },
      { q: 'Чи можна поєднувати IP Box та Estonian CIT?', a: 'Ні. Estonian CIT виключає застосування IP Box, ulgi B+R та інших пільг. Потрібно обирати стратегію: або відстрочення податку (Estonian), або пільгова ставка на IP (IP Box).' }
    ],

    pl: [
      { q: 'Czym jest estoński CIT w Polsce?', a: 'Estoński CIT - opodatkowanie wyłącznie przy wypłacie dywidendy (10% mali, 20% pozostali). Pasuje MŚP z reinwestycjami.' },
      { q: 'Komu pasuje IP Box 5%?', a: 'Programistom, patentom, innym kwalifikowanym prawom IP. Zmniejsza PIT / CIT z 19% do 5% od dochodu z licencji i sprzedaży IP. Wymaga ewidencji B+R i kalkulacji nexus.' },
      { q: 'Czy można łączyć IP Box i estoński CIT?', a: 'Nie. Estoński CIT wyklucza IP Box, ulgę B+R i inne. Wybór: odroczenie podatku albo niższa stawka na IP.' }
    ],
    en: [
      { q: 'What is Estonian CIT in Poland?', a: 'A tax regime where corporate tax is paid only on dividend distribution (10% for small, 20% otherwise), not on annual profit. Suits SMEs that reinvest earnings.' },
      { q: 'Who benefits from the 5% IP Box in Poland?', a: 'Software developers, patents, and other qualifying IP rights. Reduces PIT/CIT from 19% to 5% on licence/IP-sale income. Requires R&D records and a nexus calculation.' },
      { q: 'Can IP Box and Estonian CIT be combined?', a: 'No. Estonian CIT excludes IP Box, R&D relief and other reliefs. You choose: tax deferral (Estonian) or lower IP rate (IP Box).' }
    ],
    tr: [
      { q: 'Polonya\'da Estonian CIT nedir?', a: 'Estonian CIT (ryczałt od dochodów spółek), kurumlar vergisinin yıllık kâr üzerinden değil, yalnızca temettü dağıtımı sırasında ödendiği bir rejimdir. Küçük mükellefler için %10, diğerleri için %20 oran uygulanır. Yeniden yatırım yapan KOBİ\'ler için uygundur. JDG için kullanılamaz.' },
      { q: 'Polonya\'da %5 IP Box rejimi kimler için uygundur?', a: 'IP Box yazılım geliştiricileri, patent sahipleri ve diğer nitelikli fikri mülkiyet haklarına sahip mükellefler içindir. Lisans ve IP satış gelirinde PIT/CIT\'i %19\'dan %5\'e indirir. Ar-Ge kayıtları ve nexus hesaplaması zorunludur. Sipariş üzerine yazılım geliştiren JDG\'ler için en yaygın rejimdir.' },
      { q: 'IP Box ile Estonian CIT birlikte kullanılabilir mi?', a: 'Hayır. Estonian CIT, IP Box, B+R muafiyeti ve diğer indirimleri devre dışı bırakır. Strateji seçimi yapılmalıdır: ya vergi ertelemesi (Estonian) ya da IP gelirinde indirimli oran (IP Box). İki rejim aynı anda uygulanamaz.' }
    ]
  },

  'nalogovoye-rezidentstvo-polsha-183-dnya': {
    ru: [
      { q: 'Что такое правило 183 дней для налогового резидентства Польши?', a: 'По польскому Ustawe о PIT (Закону о PIT, art. 3 ust. 1a), вы считаетесь налоговым резидентом РП, если живёте в Польше более 183 дней в году или ваш центр жизненных интересов в Польше - независимо от visa status.' },
      { q: 'Какие налоги платит налоговый резидент Польши?', a: 'PIT по прогрессивной шкале 12/32% либо линейный 19% (на JDG - ИП). Налогом облагается доход всего мира. Дивиденды - 19%. ZUS обязателен при работе. Декларация PIT-37 / PIT-36 - до 30 апреля следующего года.' },
      { q: 'Как избежать двойного налогообложения с Россией / Украиной?', a: 'У Польши есть умовы o unikaniu podwójnego opodatkowania (соглашения об избежании двойного налогообложения) с большинством стран СНГ (с РФ - приостановлено с 2024). Применяется метод pro rata или wyłączenie (исключение), в зависимости от типа дохода. Подача PIT-ZG.' }
    ],
    uk: [
      { q: 'Що таке правило 183 днів для податкового резидентства Польщі?', a: 'Згідно з Ustawą про PIT (art. 3 ust. 1a), ви вважаєтеся податковим резидентом РП, якщо проживаєте в Польщі більше 183 днів на рік або якщо ваш центр життєвих інтересів перебуває в Польщі.' },
      { q: 'Які податки сплачує податковий резидент Польщі?', a: 'PIT за прогресивною шкалою 12/32% або лінійний 19% (для JDG). Оподатковується дохід з усього світу. Дивіденди — 19%. ZUS обов\'язковий при роботі. Декларація PIT-37 / PIT-36 — до 30 квітня.' },
      { q: 'Як уникнути подвійного оподаткування з Україною?', a: 'Польща має umowy o unikaniu podwójnego opodatkowania з більшістю країн СНД. Застосовується метод pro rata або wyłączenie залежно від виду доходу. Подається PIT-ZG.' }
    ],

    pl: [
      { q: 'Czym jest zasada 183 dni dla rezydencji podatkowej?', a: 'Zgodnie z art. 3 ust. 1a ustawy o PIT, rezydentem RP jest osoba mieszkająca w Polsce ponad 183 dni w roku lub mająca centrum interesów życiowych w Polsce - niezależnie od statusu wizowego.' },
      { q: 'Jakie podatki płaci rezydent podatkowy?', a: 'PIT skala 12/32% lub liniowy 19% (JDG). Podatek od dochodów światowych. Dywidendy 19%. ZUS przy pracy. Deklaracja PIT-37 / PIT-36 do 30 kwietnia.' },
      { q: 'Jak uniknąć podwójnego opodatkowania z Rosją / Ukrainą?', a: 'Polska ma umowy z większością państw WNP (z RF - zawieszona od 2024). Metoda pro rata lub wyłączenie. Załącznik PIT-ZG.' }
    ],
    en: [
      { q: 'What is the 183-day rule for Polish tax residency?', a: 'Under Article 3(1a) of the PIT Act, you are a Polish tax resident if you live in Poland for more than 183 days a year or your centre of vital interests is in Poland - regardless of visa status.' },
      { q: 'What taxes does a Polish tax resident pay?', a: 'PIT on the 12/32% scale or 19% flat (JDG). Worldwide income is taxed. Dividends 19%. ZUS when employed. PIT-37 or PIT-36 filed by 30 April.' },
      { q: 'How do I avoid double taxation with Russia or Ukraine?', a: 'Poland has DTAs with most CIS states (the one with Russia has been suspended since 2024). Pro-rata or exemption method applies depending on income type. File PIT-ZG annex.' }
    ],
    tr: [
      { q: 'Polonya vergi mukimliği için 183 gün kuralı nedir?', a: 'PIT Yasası madde 3/1a uyarınca, bir takvim yılında Polonya\'da 183 günden fazla yaşıyorsanız veya hayati menfaat merkeziniz Polonya\'da ise vergi mukimi sayılırsınız. Vize statüsünden bağımsızdır. Mukim olarak dünya genelindeki tüm gelirlerinizi Polonya\'da beyan etmekle yükümlüsünüz.' },
      { q: 'Polonya vergi mukimi olan Türk vatandaşı hangi vergileri öder?', a: '12/32% artan oranlı PIT veya JDG için %19 sabit oran. Tüm dünya geliri vergiye tabidir. Temettü %19, ZUS çalışırken zorunludur. Beyanname (PIT-37 veya PIT-36) izleyen yılın 30 Nisan tarihine kadar verilir. 1993\'ten beri yürürlükteki Türkiye-Polonya ÇVÖA çifte vergilendirmeyi önler.' },
      { q: 'Türkiye-Polonya çifte vergilendirme nasıl önlenir?', a: 'Türkiye-Polonya ÇVÖA *(çifte vergilendirmeyi önleme anlaşması)* 1993\'ten beri yürürlüktedir. Her iki ülke de mukim sayarsa anlaşmanın tiebreaker kuralları sırayla uygulanır: daimi konut, hayati menfaat merkezi, kalış süresi, vatandaşlık. Yurt dışı gelir için PIT-36\'ya załącznik ZG eklenir. Türkiye\'de ödenen vergi orantılı mahsup yöntemi ile düşülür.' }
    ]
  },

  'vozvrat-nalogov-pit-37-pit-11-inostrancam': {
    ru: [
      { q: 'Может ли иностранец получить возврат налога PIT в Польше?', a: 'Да. Любой налоговый резидент РП с доходом, на который удерживался PIT, имеет право подать PIT-37 / PIT-36 и получить zwrot (возврат). Базовая kwota wolna (необлагаемая сумма) - 30 000 PLN/год (PIT 0% на эту сумму).' },
      { q: 'Что такое PIT-11 и зачем он нужен?', a: 'PIT-11 - справка от работодателя о зарплате и удержанном налоге за прошлый год. Выдаётся до 28 февраля. На её основе заполняется PIT-37. Без PIT-11 zwrot (возврат) невозможен.' },
      { q: 'Какие льготы можно использовать в PIT в 2026?', a: 'Ulga prorodzinna (детская льгота, 1 112,04 PLN на ребёнка), ulga na internet (льгота за интернет), ulga termomodernizacyjna (льгота за термомодернизацию), ulga rehabilitacyjna (реабилитационная льгота), ulga dla młodych (льгота для молодёжи, PIT 0% до 26 лет), wspólne rozliczenie z małżonkiem (совместная декларация с супругом).' }
    ],
    uk: [
      { q: 'Чи може іноземець отримати повернення податку PIT у Польщі?', a: 'Так. Будь-який податковий резидент РП з доходом, з якого утримувався PIT, має право подати PIT-37 / PIT-36 і отримати zwrot. Базова kwota wolna — 30 000 PLN на рік.' },
      { q: 'Що таке PIT-11 і навіщо він потрібен?', a: 'PIT-11 — довідка від роботодавця про зарплату та утриманий податок за минулий рік. Видається до 28 лютого. На її основі заповнюється PIT-37. Без PIT-11 zwrot неможливий.' },
      { q: 'Які пільги можна використати в PIT у 2026 році?', a: 'Ulga prorodzinna (1 112,04 PLN на дитину), ulga na internet, ulga termomodernizacyjna, ulga rehabilitacyjna, ulga dla młodych (PIT 0% до 26 років), wspólne rozliczenie z małżonkiem.' }
    ],

    pl: [
      { q: 'Czy cudzoziemiec może odzyskać podatek w Polsce?', a: 'Tak. Każdy rezydent podatkowy z pobranym PIT może złożyć PIT-37 / PIT-36. Kwota wolna - 30 000 PLN rocznie.' },
      { q: 'Czym jest PIT-11 i po co?', a: 'PIT-11 - informacja od pracodawcy o pensji i pobranym PIT. Wydawana do 28 lutego. Bez PIT-11 zwrot niemożliwy.' },
      { q: 'Jakie ulgi w PIT w 2026?', a: 'Ulga prorodzinna (1 112,04 PLN na dziecko), ulga na internet, termomodernizacyjna, rehabilitacyjna, dla młodych (do 26 lat), wspólne rozliczenie małżonków.' }
    ],
    en: [
      { q: 'Can foreigners reclaim PIT in Poland?', a: 'Yes. Any Polish tax resident whose income had PIT withheld can file PIT-37 or PIT-36 and obtain a refund. The base tax-free allowance is PLN 30,000 a year.' },
      { q: 'What is PIT-11 and why does it matter?', a: 'PIT-11 is the employer\'s certificate of salary and PIT withheld last year. Issued by 28 February. PIT-37 is built on it; without PIT-11 the refund is not possible.' },
      { q: 'Which 2026 PIT reliefs can I claim?', a: 'Child relief (PLN 1,112.04 per child), internet relief, thermal-modernisation, rehabilitation, youth relief (under 26), joint filing with spouse.' }
    ],
    tr: [
      { q: 'Yabancılar Polonya\'da PIT iadesi alabilir mi?', a: 'Evet. PIT kesintisi yapılmış geliri olan her Polonya vergi mukimi PIT-37 veya PIT-36 verip zwrot (iade) alabilir. Temel kwota wolna (vergiden muaf tutar) yıllık 30.000 PLN\'dir (bu tutar için PIT %0).' },
      { q: 'PIT-11 nedir ve ne işe yarar?', a: 'PIT-11, işverenin bir önceki yıl içinde ödediği maaş ve kestiği PIT\'i bildiren belgedir. 28 Şubat\'a kadar düzenlenir. PIT-37, PIT-11 üzerine kurulur; PIT-11 olmadan iade alınmaz.' },
      { q: '2026\'da PIT\'te hangi indirimler kullanılabilir?', a: 'Ulga prorodzinna (çocuk indirimi, çocuk başına 1.112,04 PLN), ulga na internet (internet indirimi), ulga termomodernizacyjna (ısı yalıtımı indirimi), ulga rehabilitacyjna (rehabilitasyon indirimi), ulga dla młodych (26 yaş altı için PIT %0), wspólne rozliczenie z małżonkiem (eşle ortak beyan).' }
    ]
  },

  'otkrytie-bankovskogo-scheta-v-polshe': {
    ru: [
      { q: 'Какой банк выбрать иностранцу в Польше в 2026?', a: 'mBank, PKO BP, ING, Pekao SA, Santander принимают иностранцев с karta pobytu или PESEL. Revolut и WIO работают как digital-альтернативы. Лучший - зависит от языка обслуживания и tarif на международные переводы.' },
      { q: 'Какие документы нужны для открытия счёта?', a: 'Паспорт, karta pobytu / визa D / PESEL, подтверждение адреса (договор аренды или meldunek - регистрация по адресу), подтверждение дохода (umowa o pracę - трудовой договор, оборот фирмы). Иногда - telefon польский для SMS-кода.' },
      { q: 'Можно ли открыть счёт в Польше дистанционно?', a: 'Mало банков принимают полностью удалённое открытие - большинство требует визита в отделение. Revolut, ZEN и WIO позволяют открывать через app, но с верификацией паспорта и видеосвязью.' }
    ],
    uk: [
      { q: 'Який банк обрати іноземцю в Польщі у 2026 році?', a: 'mBank, PKO BP, ING, Pekao SA, Santander приймають іноземців з karta pobytu або PESEL. Revolut і WIO працюють як цифрові альтернативи. Найкращий вибір залежить від мови обслуговування та тарифів на міжнародні перекази.' },
      { q: 'Які документи потрібні для відкриття рахунку?', a: 'Паспорт, karta pobytu / віза D / PESEL, підтвердження адреси (договір оренди або meldunek), підтвердження доходу. Іноді — польський номер телефону для SMS-коду.' },
      { q: 'Чи можна відкрити рахунок у Польщі дистанційно?', a: 'Лише небагато банків допускають повністю віддалене відкриття — більшість вимагає візиту до відділення. Revolut, ZEN і WIO дозволяють відкрити рахунок через застосунок з верифікацією паспорта та відеозв\'язком.' }
    ],

    pl: [
      { q: 'Który bank wybrać cudzoziemcowi w 2026?', a: 'mBank, PKO BP, ING, Pekao, Santander przyjmują cudzoziemców z kartą pobytu lub PESEL. Revolut i WIO jako alternatywy cyfrowe.' },
      { q: 'Jakie dokumenty potrzebne do założenia konta?', a: 'Paszport, karta pobytu / wiza / PESEL, potwierdzenie adresu (umowa najmu, meldunek), potwierdzenie dochodu, czasem polski numer telefonu.' },
      { q: 'Czy można założyć konto zdalnie?', a: 'Niewiele banków pozwala na pełne zdalne założenie. Revolut, ZEN, WIO przez aplikację z weryfikacją paszportu i wideo.' }
    ],
    en: [
      { q: 'Which Polish bank should a foreigner pick in 2026?', a: 'mBank, PKO BP, ING, Pekao, and Santander accept foreigners with a residence card or PESEL. Revolut and WIO are digital alternatives. The best choice depends on the service language and international-transfer fees.' },
      { q: 'What documents are needed to open a Polish account?', a: 'Passport, residence card or D-visa or PESEL, proof of address (lease or meldunek - address registration), proof of income (employment contract, company turnover). Sometimes a Polish phone number for SMS.' },
      { q: 'Can I open a Polish bank account remotely?', a: 'Few banks allow fully remote onboarding - most require a branch visit. Revolut, ZEN and WIO open through the app with passport verification and video.' }
    ],
    tr: [
      { q: 'Yabancılar için 2026\'da hangi Polonya bankası en uygundur?', a: 'mBank, PKO BP, ING, Pekao SA ve Santander, karta pobytu veya PESEL sahibi yabancıları kabul eder. Revolut ve WIO dijital alternatifler olarak çalışır. En iyi seçim hizmet diline ve uluslararası havale ücretlerine bağlıdır.' },
      { q: 'Polonya\'da hesap açmak için hangi belgeler gereklidir?', a: 'Pasaport, karta pobytu / D-vize / PESEL, adres kanıtı (kira sözleşmesi veya meldunek - adres kaydı), gelir kanıtı (umowa o pracę - iş sözleşmesi, şirket cirosu). Bazen SMS kodu için Polonya cep telefonu numarası istenir.' },
      { q: 'Polonya\'da banka hesabını uzaktan açmak mümkün müdür?', a: 'Az sayıda banka tamamen uzaktan açılışa izin verir; çoğunluğu şube ziyareti ister. Revolut, ZEN ve WIO uygulama üzerinden pasaport doğrulaması ve görüntülü görüşmeyle hesap açar.' }
    ]
  },

  'shtrafy-rabotodatelyam-nelegalnoye-trudoustroystvo': {
    ru: [
      { q: 'Какой штраф работодателю за нелегальное трудоустройство иностранца?', a: 'PIP (Государственная инспекция труда) штрафует работодателя от 1 000 до 30 000 PLN за каждого нелегально занятого иностранца. При повторных нарушениях - до 60 000 PLN. Также возможно уголовное дело по art. 218-219 Kodeksu karnego (Уголовного кодекса).' },
      { q: 'Что считается нелегальным трудоустройством иностранца?', a: 'Работа без zezwolenia na pracę (разрешения на работу), истёкшее или несоответствующее zezwolenie (разрешение), занятость по основанию визой не разрешено, отсутствие договора. Также - фиктивное оформление через JDG (ИП) для замаскированной работы.' },
      { q: 'Кто проверяет легальность работы иностранца?', a: 'PIP (Państwowa Inspekcja Pracy - Государственная инспекция труда) - основной контролёр. ZUS - за неуплату взносов. Straż Graniczna (Пограничная служба) - на дорогах и стройках. Urząd Skarbowy (Налоговая служба) - за уход от PIT. Все могут проверять одновременно.' }
    ],
    uk: [
      { q: 'Який штраф загрожує роботодавцю за нелегальне працевлаштування іноземця?', a: 'PIP штрафує роботодавця від 1 000 до 30 000 PLN за кожного нелегально зайнятого іноземця. При повторних порушеннях — до 60 000 PLN. Також можливе кримінальне провадження.' },
      { q: 'Що вважається нелегальним працевлаштуванням іноземця?', a: 'Робота без zezwolenia na pracę, прострочений або невідповідний zezwolenie, зайнятість за підставою, яку віза не дозволяє, відсутність договору. Також — фіктивне оформлення через JDG.' },
      { q: 'Хто перевіряє легальність роботи іноземця?', a: 'PIP — основний контролюючий орган. ZUS — за несплату внесків. Straż Graniczna — на дорогах і будівництвах. Urząd Skarbowy — за ухилення від PIT. Усі можуть перевіряти одночасно.' }
    ],

    pl: [
      { q: 'Jaka kara dla pracodawcy za nielegalne zatrudnienie cudzoziemca?', a: 'PIP - od 1 000 do 30 000 PLN za każdego cudzoziemca. Recydywa - do 60 000 PLN. Możliwe sprawy karne z art. 218-219 KK.' },
      { q: 'Co liczy się jako nielegalne zatrudnienie?', a: 'Praca bez zezwolenia, zezwolenie wygasłe lub niezgodne, praca poza dozwoloną podstawą wizową, brak umowy. Również fikcyjne JDG.' },
      { q: 'Kto kontroluje legalność pracy cudzoziemca?', a: 'PIP - główny inspektorat. ZUS - składki. Straż Graniczna - drogi i budowy. US - PIT. Mogą sprawdzać równolegle.' }
    ],
    en: [
      { q: 'What\'s the fine for illegal foreign employment in Poland?', a: 'PIP (State Labour Inspectorate) fines employers PLN 1,000-30,000 per illegally employed foreigner. Repeat offences: up to PLN 60,000. Criminal liability under Articles 218-219 of the Penal Code is possible.' },
      { q: 'What counts as illegal employment of a foreigner?', a: 'Work without a zezwolenie na pracę (work permit), expired or mismatched permit, employment outside the visa basis, missing contract. Sham JDG (sole proprietorship) to hide employment also qualifies.' },
      { q: 'Who checks the legality of foreign employment?', a: 'PIP (State Labour Inspectorate) is the main authority. ZUS for contributions. Straż Graniczna (Border Guard) at roads and sites. Urząd Skarbowy (tax office) for PIT. They can check in parallel.' }
    ],
    tr: [
      { q: 'Polonya\'da yabancıyı yasadışı çalıştıran işverenin cezası nedir?', a: 'PIP (Devlet İş Müfettişliği) yasadışı çalıştırılan her yabancı için 3.000 PLN\'den 30.000 PLN\'ye kadar idari para cezası verir. Tekrarlanan ihlallerde 5 yıla kadar yabancı çalıştırma yasağı uygulanır. Ayrıca işveren işçinin sınır dışı maliyetini 4.200 PLN\'ye kadar karşılamak zorundadır.' },
      { q: 'Yabancının yasadışı istihdamı sayılan durumlar nelerdir?', a: 'Zezwolenie na pracę olmadan çalışma, süresi dolmuş veya gerçek pozisyona uymayan zezwolenie, vize temelinin izin vermediği iş, sözleşme eksikliği. Aynı zamanda gerçek istihdamı gizlemek için kullanılan paravan JDG düzenlemeleri ve beyan edilenden düşük maaş ödemeleri de ihlal sayılır.' },
      { q: 'Yabancı istihdamının yasallığını hangi kurumlar denetler?', a: 'PIP (Devlet İş Müfettişliği) ana denetim kurumudur. ZUS prim ödemelerini denetler. Straż Graniczna (sınır muhafızı) inşaat, lojistik ve depolarda çalışma yasallığını kontrol eder. Urząd Skarbowy (vergi dairesi) PIT beyanlarını denetler. Dört kurum aynı anda denetim yapabilir ve 2025\'ten beri MOS v2.0 üzerinden veri paylaşır.' }
    ]
  },

  'nevyplata-zarplaty-zaschita-prav-inostranca-pip': {
    ru: [
      { q: 'Что делать, если работодатель не выплатил зарплату в Польше?', a: 'Подайте skargę (жалобу) в PIP (Państwowa Inspekcja Pracy - Государственная инспекция труда) онлайн или лично. PIP вправе провести kontrolę (проверку), наложить mandat (штраф) на работодателя и потребовать выплату. Параллельно - pozew do sądu pracy (иск в суд по трудовым делам) с возмещением + 0,12% за каждый день задержки.' },
      { q: 'Сколько времени даётся на pozew o niewypłaconą zarplatę (иск о невыплаченной зарплате)?', a: '3 года с момента, когда зарплата должна была быть выплачена (art. 291 § 1 Kodeksu pracy - Трудового кодекса). После - претензия признаётся przedawnioną (истёкшей по сроку давности). Не тяните - сразу обращайтесь.' },
      { q: 'Можно ли получить zarplatę без польского языка?', a: 'Да. Услуги PIP (Государственной инспекции труда) бесплатны и доступны переводчики (ukraiński, rosyjski, angielski). Юридическая помощь по trudному делу - от 1 500 PLN. На стадии sąd pracy (суда по трудовым делам) - обязателен польский или адвокат.' }
    ],
    uk: [
      { q: 'Що робити, якщо роботодавець не виплатив зарплату в Польщі?', a: 'Подайте skargę до PIP онлайн або особисто. PIP має право провести kontrolę, накласти mandat на роботодавця та вимагати виплати. Паралельно — pozew do sądu pracy з відшкодуванням + 0,12% за кожен день затримки.' },
      { q: 'Скільки часу є на pozew про невиплачену зарплату?', a: '3 роки з моменту, коли зарплата мала бути виплачена (art. 291 § 1 Kodeksu pracy). Після — вимога вважається przedawnioną. Не зволікайте — звертайтесь одразу.' },
      { q: 'Чи можна отримати zarplatę без знання польської мови?', a: 'Так. Послуги PIP безкоштовні та доступні перекладачі (українська, російська, англійська). Юридична допомога у складній справі — від 1 500 PLN. У sąd pracy обов\'язкова польська або адвокат.' }
    ],

    pl: [
      { q: 'Co zrobić, gdy pracodawca nie wypłaca pensji?', a: 'Skarga do PIP online lub osobiście. PIP może skontrolować, nałożyć mandat i żądać wypłaty. Równolegle pozew do sądu pracy z odsetkami 0,12% za każdy dzień zwłoki.' },
      { q: 'Ile czasu na pozew o niewypłaconą pensję?', a: '3 lata od dnia, w którym pensja miała być wypłacona (art. 291 § 1 KP). Po przedawnieniu - koniec.' },
      { q: 'Czy można odzyskać pensję bez polskiego?', a: 'Tak. PIP jest bezpłatny, są tłumacze (ukraiński, rosyjski, angielski). Konsultant od 1 500 PLN. W sądzie pracy potrzebny polski lub pełnomocnik.' }
    ],
    en: [
      { q: 'What should I do if my Polish employer hasn\'t paid the wage?', a: 'File a skarga (complaint) with PIP (State Labour Inspectorate) online or in person. PIP can audit the employer, issue a fine, and demand payment. In parallel: file a labour-court (sąd pracy) suit with damages plus 0.12% per day of delay.' },
      { q: 'What\'s the deadline for a wage suit?', a: '3 years from the date the wage was due (Article 291 §1 of the Kodeks pracy - Labour Code). After that, the claim is barred.' },
      { q: 'Can I recover wages without Polish?', a: 'Yes. PIP (State Labour Inspectorate) services are free and interpreters are available (Ukrainian, Russian, English). Legal services from PLN 1,500. In sąd pracy (labour court), Polish or an attorney is essential.' }
    ],
    tr: [
      { q: 'Polonya\'da işveren maaş ödemiyorsa ne yapmalı?', a: 'PIP *(Państwowa Inspekcja Pracy - Polonya Devlet İş Müfettişliği)*\'e çevrimiçi veya elden skarga *(şikayet)* sunun. PIP, işvereni denetleyebilir, mandat *(para cezası)* kesebilir ve ödeme yapılmasını talep edebilir. Paralel olarak - sąd pracy *(iş mahkemesi)*\'ne her gecikme günü için %0,12 faizle birlikte pozew *(dava)* açın.' },
      { q: 'Polonya\'da ödenmemiş maaş için dava süresi ne kadar?', a: 'Maaşın ödenmesi gerektiği günden itibaren 3 yıl (Kodeks pracy *(İş Kanunu)* madde 291 § 1). Bu süreden sonra talep przedawniona *(zamanaşımına uğramış)* sayılır. Geciktirmeyin - hemen başvurun.' },
      { q: 'Polonyaca bilmeden ücret alabilir miyim?', a: 'Evet. PIP hizmetleri ücretsizdir ve Türkçe, Ukraynaca, Rusça, İngilizce tercüman bulunmaktadır. Karmaşık dosya için hukuki destek 1.500 PLN\'den başlar. Sąd pracy aşamasında - Lehçe veya avukat zorunludur.' }
    ]
  },

  // ─── Real estate ─────────────────────────────────────────────────────
  'razreshenie-mswia-pokupka-nedvizhimosti-inostrancem': {
    ru: [
      { q: 'Когда нужно zezwolenie MSWiA (разрешение МВД) для покупки недвижимости?', a: 'Гражданам не-ЕС/ЕЭП - почти всегда, кроме исключений: квартира в общей kondominacie (кондоминиуме, без отдельной księgi wieczystej - поземельной книги), брак с гражданином РП и проживание 2+ года, Karta Polaka, наследство, приобретение Sp. z o.o. (ООО) с польским управлением.' },
      { q: 'Сколько ждать решения MSWiA (МВД)?', a: 'Официальный срок - 2 месяца. Реально - 3-6 месяцев. Сложные кейсы (большой участок, strefa nadgraniczna - приграничная зона) - до 12 месяцев. Подача документов - через ePUAP или письменно.' },
      { q: 'Сколько стоит zezwolenie MSWiA?', a: 'Госпошлина - 1 570 PLN. Услуги консультанта - от 3 500 PLN. Документы из страны гражданства, переводы, апостили - отдельно. Strefa nadgraniczna (приграничная зона) - обязательно консультация ABW (Агентства внутренней безопасности).' }
    ],
    uk: [
      { q: 'Коли потрібне zezwolenie MSWiA для купівлі нерухомості?', a: 'Громадянам не-ЄС/ЄЕП — майже завжди, крім винятків: квартира у спільній kondominacie без окремої KW, шлюб із громадянином РП та проживання 2+ роки, Karta Polaka, спадщина.' },
      { q: 'Скільки чекати рішення MSWiA?', a: 'Офіційний строк — 2 місяці. Реально — 3-6 місяців. Складні випадки (велика ділянка, strefa nadgraniczna) — до 12 місяців.' },
      { q: 'Скільки коштує zezwolenie MSWiA?', a: 'Держмито — 1 570 PLN. Послуги консультанта — від 3 500 PLN. Документи з країни громадянства, переклади, апостилі — окремо.' }
    ],

    pl: [
      { q: 'Kiedy potrzebne zezwolenie MSWiA na zakup nieruchomości?', a: 'Obywatelom spoza UE/EOG - niemal zawsze. Wyjątki: lokal w wspólnocie bez własnej KW, małżeństwo z obywatelem RP + 2 lata pobytu, Karta Polaka, dziedziczenie, kupno udziałów w polskiej Sp. z o.o.' },
      { q: 'Ile czeka się na decyzję MSWiA?', a: 'Ustawowo 2 miesiące. Realnie 3-6 miesięcy. Trudne sprawy (duża działka, strefa nadgraniczna) - do 12 miesięcy.' },
      { q: 'Ile kosztuje zezwolenie MSWiA?', a: 'Opłata 1 570 PLN. Konsultant od 3 500 PLN. Dokumenty z kraju obywatelstwa, tłumaczenia, apostille - osobno. Strefa nadgraniczna - konsultacja ABW.' }
    ],
    en: [
      { q: 'When is MSWiA (Ministry of Interior) permission required to buy property in Poland?', a: 'Almost always for non-EU/EEA buyers. Exceptions: an apartment in a condominium without its own land register, marriage to a Polish citizen with 2+ years of residence, Karta Polaka, inheritance, or buying shares in a Polish Sp. z o.o. (LLC).' },
      { q: 'How long does the MSWiA decision take?', a: 'Statutory 2 months. Realistically 3-6 months. Complex cases (large plots, strefa nadgraniczna - border zone) up to 12 months.' },
      { q: 'How much does an MSWiA permit cost?', a: 'PLN 1,570 stamp duty. Consultant fees from PLN 3,500. Country-of-citizenship documents, translations, apostilles are extra. Border zone requires ABW (Internal Security Agency) consultation.' }
    ],
    tr: [
      { q: 'Polonya\'da yabancılar için MSWiA *(İçişleri Bakanlığı)* izni ne zaman gereklidir?', a: 'AB/AEA dışı vatandaşlar (Türk vatandaşları dahil) için neredeyse her zaman gereklidir. İstisnalar: ortak bir kondominyumdaki kendi księga wieczysta *(tapu sicili)*\'ı olmayan daire, Polonya vatandaşıyla evlilik + 2+ yıl ikamet, Karta Polaka *(Polonyalı Kartı)*, miras, Polonya yönetimine sahip Sp. z o.o. *(limited şirket)* hisselerinin alımı.' },
      { q: 'MSWiA kararı için ne kadar beklenir?', a: 'Yasal süre - 2 ay. Pratikte - 3-6 ay. Karmaşık dosyalar (büyük arsa, strefa nadgraniczna *(sınır bölgesi)*) - 12 aya kadar. Belgeler ePUAP üzerinden veya yazılı olarak sunulur.' },
      { q: 'MSWiA izni ne kadara mal olur?', a: 'Damga vergisi - 1.570 PLN. Danışman ücreti - 3.500 PLN\'den başlar. Vatandaşlık ülkesinden belgeler, çeviriler ve apostille ayrıca. Strefa nadgraniczna - ABW *(Polonya İç Güvenlik Ajansı)* danışmanlığı zorunlu.' }
    ]
  },

  'arenda-kommercheskoy-nedvizhimosti-varshava': {
    ru: [
      { q: 'Какие риски при аренде коммерческого помещения в Варшаве?', a: 'Service charge без верхнего предела (5-25% от czynszu - арендной платы), klauzula konkurencji (пункт о неконкуренции), automatyczne przedłużenie umowy (автоматическое продление договора), kara umowna (договорной штраф) за досрочный выход (до 12 czynszów), повышение по wskaźnikowi GUS (индексу Главного статистического управления), обязанность fit-out за арендатора.' },
      { q: 'Сколько стоит najem (аренда) офиса в центре Варшавы в 2026?', a: 'Klasa A - 22-28 EUR/м²/мес + service charge 5-7 EUR/м². Класс B - 14-18 EUR. Bemowo, Mokotów - 16-20 EUR. На периферии - от 10 EUR. Контракты в EUR, оплата в PLN по NBP.' },
      { q: 'Можно ли расторгнуть najem досрочно?', a: 'Только по основаниям из umowy (договора): wypowiedzenie (расторжение) с okresem (3-6 месяцев), wypowiedzenie z winy wynajmującego (расторжение по вине арендодателя - запущенный technical defect, нарушение). В остальных случаях - kara umowna (договорной штраф) до 12 czynszów (арендных плат).' }
    ],
    uk: [
      { q: 'Які ризики при оренді комерційного приміщення у Варшаві?', a: 'Service charge без верхньої межі, klauzula konkurencji, automatyczne przedłużenie umowy, kara umowna за дострокове розірвання (до 12 czynszów), підвищення за wskaźnikiem GUS, обов\'язок fit-out за рахунок орендаря.' },
      { q: 'Скільки коштує najem офісу в центрі Варшави у 2026 році?', a: 'Klasa A — 22-28 EUR/м²/міс + service charge 5-7 EUR/м². Клас B — 14-18 EUR. Bemowo, Mokotów — 16-20 EUR. На периферії — від 10 EUR. Контракти в EUR, оплата в PLN за курсом NBP.' },
      { q: 'Чи можна розірвати najem достроково?', a: 'Лише на підставах, передбачених umową: wypowiedzenie з терміном 3-6 місяців, wypowiedzenie z winy wynajmującego. В інших випадках — kara umowna до 12 czynszów.' }
    ],

    pl: [
      { q: 'Jakie ryzyka przy najmie komercyjnym w Warszawie?', a: 'Service charge bez górnego limitu, klauzula konkurencji, automatyczne przedłużenie, kara umowna za wcześniejsze wyjście (do 12 czynszów), waloryzacja GUS, fit-out po stronie najemcy.' },
      { q: 'Ile kosztuje najem biura w centrum Warszawy w 2026?', a: 'Klasa A 22-28 EUR/m²/m-c + service 5-7 EUR. Klasa B 14-18 EUR. Mokotów, Bemowo 16-20 EUR. Peryferie od 10 EUR. Umowy w EUR, płatne w PLN po NBP.' },
      { q: 'Czy można rozwiązać najem komercyjny przed terminem?', a: 'Tylko z umowy: wypowiedzenie z okresem 3-6 m-cy, wypowiedzenie z winy wynajmującego. W innych przypadkach - kara do 12 czynszów.' }
    ],
    en: [
      { q: 'What are the risks of commercial leasing in Warsaw?', a: 'Service charge with no cap, non-compete clauses, auto-renewal, exit penalty (up to 12 months\' rent), GUS-index escalation, tenant-funded fit-out.' },
      { q: 'How much does an office lease cost in central Warsaw in 2026?', a: 'Class A: EUR 22-28/m²/month plus service charge EUR 5-7. Class B: EUR 14-18. Mokotów / Bemowo: EUR 16-20. Periphery from EUR 10. Contracts in EUR, paid in PLN at NBP rate.' },
      { q: 'Can a commercial lease be terminated early?', a: 'Only on grounds in the contract: notice period 3-6 months, fault-based termination by landlord. Otherwise an exit penalty up to 12 months\' rent applies.' }
    ],
    tr: [
      { q: 'Varşova\'da ticari kira riskleri nelerdir?', a: 'Üst sınırı olmayan service charge (czynsz *(kira)*\'ın %5-25\'i), klauzula konkurencji *(rekabet yasağı)*, automatyczne przedłużenie umowy *(otomatik sözleşme uzatma)*, erken çıkış için kara umowna *(cezai şart)* - 12 aya kadar kira, GUS *(Polonya İstatistik Kurumu)* endeksiyle artış, fit-out yükümlülüğü kiracıda.' },
      { q: '2026\'da Varşova merkezde ofis kirası ne kadar?', a: 'A sınıfı - aylık 22-28 EUR/m² + service charge 5-7 EUR/m². B sınıfı - 14-18 EUR. Bemowo, Mokotów - 16-20 EUR. Çevre semtler - 10 EUR\'dan. Sözleşmeler EUR cinsinden, ödeme NBP *(Polonya Merkez Bankası)* kuruyla PLN olarak yapılır.' },
      { q: 'Ticari kira sözleşmesi erken feshedilebilir mi?', a: 'Yalnızca sözleşmedeki gerekçelerle: 3-6 ay bildirim süresiyle wypowiedzenie *(fesih)*, kiraya verenin kusurlu eyleminden dolayı wypowiedzenie z winy wynajmującego *(kiraya verenin kusuruyla fesih)*. Diğer durumlarda - 12 aylık kira tutarına kadar kara umowna uygulanır.' }
    ]
  },

  // ─── 2026-Q2 series ─────────────────────────────────────────────────
  'karta-pobytu-wygasla-co-delat': {
    ru: [
      { q: 'Что делать, если карта побыту истекла в 2026?', a: 'В первые 7-14 дней - срочно подайте wniosek (заявление) о новой karcie pobytu через MOS v2.0 с pisemnym uzasadnieniem (письменным обоснованием) причины просрочки. Не выезжайте из Польши до решения вопроса. Подача wniosku приостанавливает депортацию по art. 305 ust. 1 Ustawy o cudzoziemcach (Закона об иностранцах). После 14 дней риск получить zobowiązanie do powrotu (обязательство покинуть страну) и запрет Шенгена 1-3 года резко возрастает.' },
      { q: 'Грозит ли депортация при истёкшей karcie pobytu?', a: 'При активной подаче нового wniosku (заявления) в первые 7 дней - практически нет (по данным практики LegalWin, депортация коснулась 3 из 87 клиентов в этом окне). После 14 дней без действий - 31% случаев. Главный фактор - не сама просрочка, а ваше поведение после неё.' },
      { q: 'Можно ли выехать из Польши с истёкшей kartą pobytu?', a: 'Технически да, но это худший выбор. На границе Straż Graniczna (Пограничная служба) фиксирует nielegalny pobyt (нелегальное пребывание) в системе SIS, и при следующей попытке въезда в любую страну Шенгена вы получите отказ. Запрет - обычно 1-3 года.' },
      { q: 'Сколько стоит экстренная подача нового wniosku?', a: 'Госпошлины те же, что при стандартной подаче: 340 PLN за wniosek (заявление) + 100 PLN за пластик. Услуги юриста по экстренной легализации в LegalWin - от 3 500 PLN, включая подачу в течение 24 часов и подготовку odwołania (апелляции).' },
      { q: 'Что считается уважительной причиной для просрочки?', a: 'Wojewody (воеводы) и Szef UdSC (Глава Управления по делам иностранцев) принимают: госпитализацию, тяжёлую болезнь, операцию (с wypisami ze szpitala - выписками из больницы), задержку работодателя с zezwoleniem na pracę (разрешением на работу), потерю документов с заявлением в полицию, технические сбои MOS v2.0 со screenshots. Не работают: «забыл», «думал, что есть время», «уезжал на родину».' }
    ],
    uk: [
      { q: 'Що робити, якщо karta pobytu закінчилась у 2026?', a: 'У перші 7-14 днів терміново подайте wniosek на нову kartę pobytu через MOS v2.0 з pisemnym uzasadnieniem. Не виїжджайте з Польщі. Подача wniosku зупиняє депортацію. Після 14 днів ризик zobowiązanie do powrotu та заборони Шенгену на 1-3 роки різко зростає.' },
      { q: 'Чи загрожує депортація при простроченій karcie pobytu?', a: 'Якщо ви активно подаєте новий wniosek у перші 7 днів — практично ні. Після 14 днів без дій — у 31% випадків. Головний чинник — не сам факт прострочення, а ваша поведінка після нього.' },
      { q: 'Чи можна виїхати з Польщі з простроченою kartą pobytu?', a: 'Технічно так, але це найгірший вибір. На кордоні Straż Graniczna фіксує nielegalny pobyt у системі SIS, і при наступній спробі в\'їзду до будь-якої країни Шенгену ви отримаєте відмову. Заборона — зазвичай 1-3 роки.' },
      { q: 'Скільки коштує термінова подача нового wniosku?', a: 'Держмито залишається тим самим: 340 PLN за wniosek + 100 PLN за пластик. Послуги юриста з термінової легалізації в LegalWin — від 3 500 PLN, включаючи подачу протягом 24 годин.' },
      { q: 'Що вважається поважною причиною прострочення?', a: 'Госпіталізація, тяжка хвороба, операція (з виписками з лікарні), затримка роботодавця з zezwoleniem na pracę, втрата документів із заявою до поліції, технічні збої MOS v2.0. Не приймається: «забув», «думав, що є час».' }
    ],

    pl: [
      { q: 'Co robić, gdy karta pobytu wygasła w 2026?', a: 'W pierwszych 7-14 dniach - pilnie złóż wniosek o nową kartę pobytu w MOS v2.0 z pisemnym uzasadnieniem opóźnienia. Nie wyjeżdżaj z Polski. Wniosek wstrzymuje deportację (art. 305 ust. 1 ustawy o cudzoziemcach). Po 14 dniach ryzyko zobowiązania do powrotu i zakazu Schengen 1-3 lata gwałtownie rośnie.' },
      { q: 'Czy grozi deportacja przy wygasłej karcie pobytu?', a: 'Przy aktywnym złożeniu wniosku w pierwszych 7 dniach - praktycznie nie (z praktyki LegalWin: 3 z 87 klientów). Po 14 dniach bez działań - 31% przypadków. Decyduje nie sam fakt wygaśnięcia, ale Twoje zachowanie po nim.' },
      { q: 'Czy można wyjechać z Polski z wygasłą kartą?', a: 'Technicznie tak, ale to najgorszy wybór. Na granicy Straż Graniczna fiksuje nielegalny pobyt w SIS, a przy następnej próbie wjazdu do dowolnego państwa Schengen otrzymasz odmowę. Zakaz - zwykle 1-3 lata.' },
      { q: 'Ile kosztuje pilne złożenie nowego wniosku?', a: 'Opłaty państwowe takie same: 340 PLN za wniosek + 100 PLN za blankiet. Usługa pilnej legalizacji LegalWin - od 3 500 PLN, w tym złożenie w 24 godziny i przygotowanie odwołania.' },
      { q: 'Co jest uznawane za uzasadnioną przyczynę opóźnienia?', a: 'Wojewodowie i Szef UdSC przyjmują: hospitalizację, ciężką chorobę, operację (z wypisami ze szpitala), opóźnienie pracodawcy z zezwoleniem na pracę, utratę dokumentów ze zgłoszeniem na policji, awarie MOS v2.0 ze screenshotami. Nie działają: „zapomniałem", „myślałem, że jest czas", „byłem za granicą".' }
    ],
    en: [
      { q: 'What do you do when your Polish residence card has expired in 2026?', a: 'In the first 7-14 days, urgently file a new MOS v2.0 wniosek (application) with a written justification for the delay. Don\'t leave Poland. Filing suspends deportation under Article 305(1) of the Foreigners Act. After 14 days the risk of a zobowiązanie do powrotu (return order) and a 1-3-year Schengen ban rises sharply.' },
      { q: 'Is deportation likely with an expired Karta Pobytu?', a: 'With active filing in the first 7 days - almost never (from LegalWin practice: 3 out of 87 clients). After 14 days without action - 31% of cases. What matters isn\'t the expiry itself, but your behaviour afterwards.' },
      { q: 'Can I leave Poland with an expired residence card?', a: 'Technically yes, but it\'s the worst choice. At the border the Straż Graniczna (Border Guard) records unlawful stay in SIS, and the next entry attempt into any Schengen state will be denied. Ban - usually 1-3 years.' },
      { q: 'How much does an emergency new filing cost?', a: 'State fees are the same as standard: PLN 340 for the application + PLN 100 for the card. LegalWin emergency-legalisation service from PLN 3,500, including filing within 24 hours and odwołanie (appeal) preparation.' },
      { q: 'What counts as a valid reason for the delay?', a: 'Wojewody (regional governors) and the Szef UdSC (Head of the Office for Foreigners) accept: hospitalisation, serious illness, surgery (with discharge papers), employer delay with the work permit, lost documents with a police report, MOS v2.0 outages with screenshots. Not accepted: "I forgot", "I thought I had time", "I was abroad".' }
    ],
    tr: [
      { q: '2026\'da karta pobytu süresi dolduğunda ne yapmalı?', a: 'İlk 7-14 gün içinde - MOS v2.0 *(yabancılar için yeni e-başvuru sistemi)* üzerinden gecikme nedenini açıklayan pisemne uzasadnienie *(yazılı gerekçe)* ile yeni karta pobytu için wniosek *(başvuru)* sunun. Konu çözülene kadar Polonya\'dan çıkmayın. Wniosek sunmak, Ustawa o cudzoziemcach *(Yabancılar Kanunu)* madde 305 fıkra 1 uyarınca sınır dışı işlemini durdurur. 14 günden sonra zobowiązanie do powrotu *(geri dönüş yükümlülüğü)* alma ve 1-3 yıl Schengen yasağı riski keskin biçimde artar.' },
      { q: 'Süresi dolmuş karta pobytu ile sınır dışı edilme riski var mı?', a: 'İlk 7 gün içinde aktif yeni wniosek başvurusu yapıldığında - neredeyse yok (LegalWin pratiğine göre, bu pencerede 87 müşteriden yalnızca 3\'ünde sınır dışı edilme yaşandı). 14 günden sonra eylemsiz kalanlarda - vakaların %31\'i. Asıl belirleyici, gecikmenin kendisi değil sonraki davranıştır.' },
      { q: 'Süresi dolmuş karta pobytu ile Polonya\'dan çıkılabilir mi?', a: 'Teknik olarak evet, ancak bu en kötü seçimdir. Sınırda Straż Graniczna *(Sınır Muhafaza)* nielegalny pobyt *(kayıt dışı ikamet)*\'i SIS *(Schengen Bilgi Sistemi)*\'de kayda alır ve bir sonraki Schengen ülkesine giriş girişiminde reddedilirsiniz. Yasak genellikle 1-3 yıldır.' },
      { q: 'Acil yeni wniosek sunmak ne kadara mal olur?', a: 'Devlet harçları standart başvurudaki ile aynı: wniosek için 340 PLN + kart için 100 PLN. LegalWin\'de acil yasallaştırma hizmeti - 24 saat içinde başvuru ve odwołanie *(itiraz)* hazırlığı dahil 3.500 PLN\'den başlar.' },
      { q: 'Gecikme için geçerli neden sayılan durumlar nelerdir?', a: 'Wojewody *(eyalet valileri)* ve Szef UdSC *(Yabancılar Dairesi Başkanı)* şu durumları kabul eder: hastane yatışı, ağır hastalık, ameliyat (wypisy ze szpitala *(taburcu raporu)* ile), işverenin zezwolenie na pracę *(çalışma izni)*\'de gecikmesi, polise zayi başvurusuyla belge kaybı, ekran görüntüleriyle MOS v2.0 teknik arızaları. Kabul edilmeyenler: \'unuttum\', \'vakit var sandım\', \'memlekete gittim\'.' }
    ]
  },

  'skladka-zdrowotna-2026-reforma': {
    ru: [
      { q: 'Как изменилась składka zdrowotna (медицинский взнос) для JDG (ИП) с 1 января 2026?', a: 'Введён фиксированный минимум 9% от 75% минимальной зарплаты - в 2026 это 324,40 PLN/мес (3 893 PLN/год). И прогрессивный потолок: для линейного 19% - около 1 500 PLN/мес. Низкодоходные JDG платят чуть больше, высокодоходные - резко меньше. Перелом - около 240 000 PLN dochodu (дохода) в год.' },
      { q: 'Сколько платит JDG на ryczałcie 12% (упрощёнке) в 2026?', a: 'До 60 000 PLN выручки - 324 PLN/мес (новый минимум, было 419 PLN). 60 000 - 300 000 PLN - 698 PLN/мес. Свыше 300 000 - 1 256 PLN/мес. Главная экономия - на самом низком уровне дохода (-95 PLN/мес).' },
      { q: 'Что меняется для Sp. z o.o. (ООО) с 2026?', a: 'Сама ставка 9% от kwoty wynagrodzenia (суммы вознаграждения) члена zarządu (правления) не изменилась. Но с 2026 ZUS получил доступ к данным KSeF и автоматически выявляет выплаты członkowi zarządu (члену правления) без uchwały (решения собрания). Доначисляется składka (взнос) с karą (штрафом) 20%. Совет: оформите uchwałę o powołaniu z wynagrodzeniem (решение о назначении с вознаграждением, даже минимальным 500 PLN/мес).' },
      { q: 'Освобождает ли Estonian CIT (эстонский налог на прибыль) от składki zdrowotnej (медицинского взноса)?', a: 'Да. На этапе reinwestycji (реинвестиций) - 0 PLN składki zdrowotnej. Только при wypłaty dywidendy (выплате дивидендов) - 10% (mali podatnicy - малые плательщики) или 20% налога. Для одноосновной Sp. z o.o. с прибылью 200 000 PLN/год экономия по сравнению с klasycznym CIT - около 56 000 PLN/год.' },
      { q: 'Когда платится składka zdrowotna и куда?', a: 'Ежемесячно через PUE ZUS (платформу электронных услуг ZUS) до 20 числа следующего месяца. Расчёт 2026 - на основе dochodu (дохода) предыдущего года (для нового JDG - на основе минимума). Годовая декларация ZUS DRA подаётся до 30 апреля 2027 за 2026 год.' }
    ],
    uk: [
      { q: 'Як змінилась składka zdrowotna для JDG з 1 січня 2026?', a: 'Запроваджено фіксований мінімум 9% від 75% мінімальної зарплати — у 2026 році це 324,40 PLN/міс. А також прогресивна стеля: для лінійного 19% — близько 1 500 PLN/міс. Переломний рівень — приблизно 240 000 PLN dochodu на рік.' },
      { q: 'Скільки платить JDG на ryczałcie 12% у 2026?', a: 'До 60 000 PLN виручки — 324 PLN/міс (новий мінімум). Від 60 000 до 300 000 PLN — 698 PLN/міс. Понад 300 000 — 1 256 PLN/міс. Головна економія — на найнижчому рівні доходу (-95 PLN/міс).' },
      { q: 'Що змінюється для Sp. z o.o. з 2026?', a: 'ZUS отримав доступ до даних KSeF і автоматично виявляє виплати członkowi zarządu без uchwały. Донараховується składka з karą 20%. Порада: оформіть uchwałę про призначення з винагородою, навіть мінімальною 500 PLN/міс.' },
      { q: 'Чи звільняє Estonian CIT від składki zdrowotnej?', a: 'Так. На етапі реінвестицій — 0 PLN składki. Лише при wypłacie dywidendy — 10% (малі платники) або 20% податку. Для єдиного учасника Sp. z o.o. з прибутком 200 000 PLN/рік економія становить близько 56 000 PLN/рік.' },
      { q: 'Коли та куди сплачується składka zdrowotna?', a: 'Щомісяця через PUE ZUS до 20 числа наступного місяця. Розрахунок за 2026 рік — на основі доходу попереднього року. Річна декларація ZUS DRA подається до 30 квітня 2027 за 2026 рік.' }
    ],

    pl: [
      { q: 'Jak zmieniła się składka zdrowotna dla JDG od 1 stycznia 2026?', a: 'Wprowadzono stałe minimum 9% od 75% płacy minimalnej - w 2026 to 324,40 PLN/m-c. Plus progresywny sufit: dla podatku liniowego 19% - ok. 1 500 PLN/m-c. JDG o niskich dochodach płaci nieco więcej, wysokodochodowi - wyraźnie mniej. Punkt równowagi - ok. 240 000 PLN dochodu rocznie.' },
      { q: 'Ile płaci JDG na ryczałcie 12% w 2026?', a: 'Do 60 000 PLN przychodu - 324 PLN/m-c (nowe minimum, było 419 PLN). 60 000 - 300 000 PLN - 698 PLN/m-c. Powyżej 300 000 - 1 256 PLN/m-c. Główna oszczędność - w najniższym przedziale (-95 PLN/m-c).' },
      { q: 'Co zmienia się dla Sp. z o.o. od 2026?', a: 'Stawka 9% od wynagrodzenia członka zarządu bez zmian. Ale od 2026 ZUS ma dostęp do KSeF i automatycznie wykrywa wypłaty bez uchwały o powołaniu. Doliczana jest składka z karą 20%. Rada: miej uchwałę o powołaniu z wynagrodzeniem (choćby minimalnym 500 PLN/m-c).' },
      { q: 'Czy CIT estoński zwalnia ze składki zdrowotnej?', a: 'Tak. Na etapie reinwestycji - 0 PLN składki. Tylko przy wypłacie dywidendy - 10% (mali podatnicy) lub 20%. Dla jednoosobowej Sp. z o.o. z zyskiem 200 000 PLN/rok oszczędność wobec klasycznego CIT - ok. 56 000 PLN/rok.' },
      { q: 'Kiedy płatna jest składka zdrowotna?', a: 'Co miesiąc przez PUE ZUS do 20. dnia następnego miesiąca. Wyliczenie 2026 - na podstawie dochodu poprzedniego roku (dla nowego JDG - minimum). Roczna deklaracja ZUS DRA - do 30 kwietnia 2027 za rok 2026.' }
    ],
    en: [
      { q: 'How did the JDG (sole proprietorship) health contribution change on 1 January 2026?', a: 'A fixed minimum of 9% of 75% of the minimum wage was introduced - PLN 324.40/month in 2026. Plus a progressive cap: about PLN 1,500/month for the 19% flat rate. Low-income JDGs pay slightly more, high-income - significantly less. Break-even is around PLN 240,000 annual income.' },
      { q: 'What does a JDG on ryczałt 12% (lump-sum tax) pay in 2026?', a: 'Up to PLN 60,000 revenue - PLN 324/month (new minimum, was PLN 419). PLN 60,000-300,000 - PLN 698/month. Above PLN 300,000 - PLN 1,256/month. The main saving sits in the lowest bracket (-PLN 95/month).' },
      { q: 'What changes for Sp. z o.o. (LLC) from 2026?', a: 'The 9% rate on zarząd (board) member remuneration is unchanged. But from 2026 ZUS has KSeF access and automatically detects payments without an uchwała (appointment resolution). The contribution is reassessed with a 20% penalty. Tip: have a resolution appointing yourself with even a minimal PLN 500/month salary.' },
      { q: 'Does Estonian CIT exempt me from the health contribution?', a: 'Yes. During reinvestment - PLN 0 contribution. Only on dywidenda (dividend) payouts - 10% (small taxpayers) or 20%. For a single-shareholder Sp. z o.o. with PLN 200,000 profit, savings vs classic CIT are around PLN 56,000/year.' },
      { q: 'When and where is the health contribution paid?', a: 'Monthly via PUE ZUS (ZUS e-services platform) by the 20th of the following month. The 2026 calculation is based on the previous year\'s income (for new JDGs - on the minimum). The annual ZUS DRA return is filed by 30 April 2027 for fiscal 2026.' }
    ],
    tr: [
      { q: 'JDG *(şahıs şirketi)* için składka zdrowotna *(sağlık primi)* 1 Ocak 2026\'dan itibaren nasıl değişti?', a: 'Asgari ücretin %75\'inin %9\'u oranında sabit asgari prim getirildi - 2026\'da 324,40 PLN/ay (yıllık 3.893 PLN). Ayrıca aşamalı tavan: doğrusal %19 vergide yaklaşık 1.500 PLN/ay. Düşük gelirli JDG\'ler biraz daha fazla, yüksek gelirliler keskin biçimde daha az ödüyor. Denge noktası - yıllık yaklaşık 240.000 PLN dochód *(gelir)*.' },
      { q: '2026\'da ryczałt %12 *(götürü vergi)* üzerinden JDG ne kadar öder?', a: '60.000 PLN ciroya kadar - 324 PLN/ay (yeni asgari, önceden 419 PLN\'di). 60.000 - 300.000 PLN - 698 PLN/ay. 300.000 PLN üzeri - 1.256 PLN/ay. Asıl tasarruf en düşük gelir seviyesinde (-95 PLN/ay).' },
      { q: 'Sp. z o.o. *(limited şirket)* için 2026\'dan itibaren ne değişiyor?', a: 'Członek zarządu *(yönetim kurulu üyesi)* ücretinin %9 oranı değişmedi. Ancak 2026\'dan itibaren ZUS, KSeF *(Polonya elektronik fatura sistemi)* verilerine erişim kazandı ve uchwała o powołaniu *(atama kararı)* olmadan członkowi zarządu yapılan ödemeleri otomatik olarak tespit ediyor. Składka *(prim)* %20 cezayla birlikte ek tahakkuk ediliyor. Tavsiye: uchwałę o powołaniu z wynagrodzeniem (asgari 500 PLN/ay bile olsa) çıkarın.' },
      { q: 'Estonya CIT *(CIT estoński)* składka zdrowotna\'dan muaf tutar mı?', a: 'Evet. Reinwestycja *(yeniden yatırım)* aşamasında - 0 PLN składka. Yalnızca dywidendy *(temettü)* dağıtımında - %10 (mali podatnicy *(küçük mükellefler)*) veya %20 vergi. Yıllık 200.000 PLN kârlı tek ortaklı Sp. z o.o. için klasyczny CIT\'e *(klasik CIT)* karşı yıllık tasarruf yaklaşık 56.000 PLN\'dir.' },
      { q: 'Składka zdrowotna ne zaman ve nereye ödenir?', a: 'PUE ZUS *(ZUS elektronik hizmet platformu)* üzerinden takip eden ayın 20\'sine kadar aylık olarak. 2026 hesabı bir önceki yılın dochód\'una dayalıdır (yeni JDG için - asgari üzerinden). Yıllık ZUS DRA beyannamesi 2026 yılı için 30 Nisan 2027\'ye kadar verilir.' }
    ]
  },

  'ksef-luty-2026-e-faktury': {
    ru: [
      { q: 'С какой даты обязателен KSeF (Национальная система электронных счетов-фактур) в Польше?', a: 'С 1 февраля 2026 года все B2B-фактуры в Польше выставляются исключительно через KSeF. Это касается всех Sp. z o.o. (ООО), JDG-плательщиков VAT (ИП), spółek komandytowych (коммандитных товариществ), jawnych (полных товариществ) и иностранных фирм с польским stałym miejscem prowadzenia działalności (постоянным местом ведения деятельности). Бумажные фактуры и PDF по почте больше не считаются legalnymi dokumentami (юридически действительными документами).' },
      { q: 'Кто пока освобождён от KSeF?', a: 'До конца 2026 освобождены: JDG на zwolnieniu z VAT (освобождении от НДС, чистый ryczałt без VAT-rejestracji - упрощёнка без регистрации НДС), B2C-поставщики (для физлиц-потребителей), faktury z kas fiskalnych (фактуры с фискальных касс - paragony, чеки). Эти категории получат обязательство с 2027 года.' },
      { q: 'Какие штрафы за невыставление faktury через KSeF?', a: 'До 100% kwoty VAT (суммы НДС) с одной фактуры за невыставление через KSeF. До 18 000 PLN за факт выставления fakury papierowej (бумажной фактуры) в B2B. До 7 000 PLN за niezarejestrowanie się (нерегистрацию) в KSeF. До 5 000 PLN за nieprawidłowy format (некорректный формат). С 1 апреля 2026 - automatyczna kontrola (автоматический контроль) сравнивает JPK_VAT с KSeF в реальном времени.' },
      { q: 'Как иностранцу подключиться к KSeF?', a: '4 шага: 1) получить Profil Zaufany (доверенный профиль) через польский банк или podpis kwalifikowany (квалифицированную электронную подпись, от 200 PLN/год); 2) заполнить ZAW-FA в e-Urzędzie Skarbowym (электронной налоговой) и назначить uprawnione osoby (уполномоченных лиц); 3) интегрировать бухгалтерскую программу (iFirma, wFirma, Comarch - уже интегрированы); 4) обучить сотрудников новой структуре XML-фактур. Подключение должно быть до 31 января 2026.' },
      { q: 'Что меняется для входящих фактур от ЕС-контрагентов?', a: 'Контрагенты из других стран ЕС не находятся в KSeF, поэтому для UE-faktur (фактур из ЕС) нужны отдельные шаблоны. Большинство польских ERP-систем (Comarch, Subiekt) автоматически генерируют UE-fakturę отдельно. Faktury получаемые от ЕС остаются в обычном формате PDF/electronic.' }
    ],
    uk: [
      { q: 'З якої дати KSeF є обов\'язковим у Польщі?', a: 'З 1 лютого 2026 року всі B2B-фактури в Польщі виставляються виключно через KSeF. Це стосується всіх Sp. z o.o., JDG-платників VAT, spółek komandytowych та іноземних фірм із постійним місцем ведення діяльності в Польщі.' },
      { q: 'Хто поки що звільнений від KSeF?', a: 'До кінця 2026 року звільнені: JDG на zwolnieniu z VAT, постачальники B2C (для фізичних осіб-споживачів), faktury z kas fiskalnych. Ці категорії отримають обов\'язок з 2027 року.' },
      { q: 'Які штрафи за невиставлення faktury через KSeF?', a: 'До 100% kwoty VAT з однієї фактури за невиставлення через KSeF. До 18 000 PLN за паперову B2B-фактуру. До 7 000 PLN за нереєстрацію в KSeF. До 5 000 PLN за некоректний формат.' },
      { q: 'Як іноземцю підключитися до KSeF?', a: '4 кроки: 1) отримати Profil Zaufany через польський банк або podpis kwalifikowany; 2) заповнити ZAW-FA в e-Urzędzie Skarbowym; 3) інтегрувати бухгалтерську програму (iFirma, wFirma, Comarch); 4) навчити співробітників новій структурі XML-фактур.' },
      { q: 'Що змінюється для вхідних фактур від контрагентів із ЄС?', a: 'Контрагенти з інших країн ЄС не перебувають у KSeF, тому для UE-faktur потрібні окремі шаблони. Більшість польських ERP (Comarch, Subiekt) автоматично генерують UE-fakturę окремо.' }
    ],

    pl: [
      { q: 'Od kiedy obowiązkowy jest KSeF w Polsce?', a: 'Od 1 lutego 2026 wszystkie faktury B2B w Polsce wystawiane są wyłącznie przez KSeF. Dotyczy wszystkich Sp. z o.o., JDG płatników VAT, spółek komandytowych, jawnych i zagranicznych firm ze stałym miejscem prowadzenia działalności w Polsce. Faktury papierowe i PDF mailem przestają być legalnymi dokumentami.' },
      { q: 'Kto jest zwolniony z KSeF do 2027?', a: 'Zwolnieni: JDG na zwolnieniu z VAT (czysty ryczałt bez rejestracji VAT), dostawcy B2C (osoby fizyczne), faktury z kas fiskalnych (paragony). Ta grupa zostanie objęta obowiązkiem od 2027.' },
      { q: 'Jakie kary za niewystawienie faktury w KSeF?', a: 'Do 100% kwoty VAT z faktury za niewystawienie. Do 18 000 PLN za fakturę papierową w B2B. Do 7 000 PLN za brak rejestracji. Do 5 000 PLN za niewłaściwy format. Od 1 kwietnia 2026 - automatyczna kontrola porównuje JPK_VAT z KSeF w czasie rzeczywistym.' },
      { q: 'Jak cudzoziemiec może podłączyć się do KSeF?', a: '4 kroki: 1) Profil Zaufany przez polski bank lub podpis kwalifikowany (od 200 PLN/rok); 2) ZAW-FA w e-Urzędzie Skarbowym z osobami uprawnionymi; 3) integracja programu księgowego (iFirma, wFirma, Comarch - już zintegrowane); 4) szkolenie zespołu w nowej strukturze XML. Podłączenie do 31 stycznia 2026.' },
      { q: 'Co zmienia się dla faktur od kontrahentów UE?', a: 'Kontrahenci z innych państw UE nie są w KSeF, więc do UE-faktur potrzebne są osobne szablony. Większość polskich ERP (Comarch, Subiekt) generuje UE-fakturę osobno. Faktury otrzymywane z UE pozostają w zwykłym formacie PDF/elektronicznym.' }
    ],
    en: [
      { q: 'When does KSeF (National e-Invoicing System) become mandatory in Poland?', a: 'From 1 February 2026, every B2B invoice in Poland is issued exclusively through KSeF. It applies to all Sp. z o.o. (LLCs), JDG (sole proprietor) VAT payers, spółki komandytowe (limited partnerships), jawne (general partnerships), and foreign companies with a Polish fixed place of business. Paper invoices and PDF-by-email are no longer legal documents.' },
      { q: 'Who is exempt from KSeF until 2027?', a: 'Exempt until end of 2026: JDGs on VAT exemption (pure ryczałt - lump-sum tax - without VAT registration), B2C suppliers (individuals), receipts from fiscal cash registers (paragony). These groups will be obligated from 2027.' },
      { q: 'What are the penalties for not issuing an invoice via KSeF?', a: 'Up to 100% of the VAT amount on the invoice for non-issuance. Up to PLN 18,000 per paper B2B invoice. Up to PLN 7,000 for failure to register. Up to PLN 5,000 for incorrect format. From 1 April 2026 - automated audits reconcile JPK_VAT with KSeF in real time.' },
      { q: 'How can a foreigner connect to KSeF?', a: '4 steps: 1) Profil Zaufany (Trusted Profile) via a Polish bank or a qualified e-signature (from PLN 200/year); 2) ZAW-FA in e-Urząd Skarbowy (online tax office) with authorised persons; 3) accounting-software integration (iFirma, wFirma, Comarch - already integrated); 4) team training on the new XML structure. Connection by 31 January 2026.' },
      { q: 'What changes for invoices from EU counterparties?', a: 'EU counterparties aren\'t in KSeF, so EU-invoice templates are needed separately. Most Polish ERPs (Comarch, Subiekt) generate EU invoices separately. Invoices received from the EU remain in standard PDF/electronic format.' }
    ],
    tr: [
      { q: 'Polonya\'da KSeF zorunluluğu hangi tarihte başlıyor?', a: '1 Şubat 2026 tarihinden itibaren Polonya\'daki tüm B2B faturalar yalnızca KSeF (Krajowy System e-Faktur) *(Polonya elektronik fatura sistemi)* üzerinden düzenlenir. Bu zorunluluk tüm Sp. z o.o. *(limited şirket)*, VAT mükellefi JDG *(şahıs şirketi)*, spółki komandytowe *(komandit ortaklık)*, jawne *(kollektif ortaklık)* ve Polonya\'da stałe miejsce prowadzenia działalności *(daimi iş yeri)* bulunan yabancı şirketleri kapsar. Kağıt veya posta yoluyla PDF faturalar artık geçerli belge sayılmaz.' },
      { q: 'KSeF zorunluluğundan şimdilik kimler muaf?', a: '2026 sonuna kadar muaf olanlar: VAT\'tan muaf JDG\'ler (zwolnienie z VAT - VAT kaydı olmayan saf ryczałt *(götürü vergi)* mükellefleri), B2C tedarikçileri (gerçek kişi son tüketiciye satış yapanlar) ve kasa fiş makinelerinden düzenlenen faktury z kas fiskalnych (paragony) *(yazar kasa fişleri)*. Bu kategoriler 2027\'den itibaren yükümlülüğe alınacaktır.' },
      { q: 'KSeF üzerinden fatura düzenlememenin cezası ne kadar?', a: 'Fatura başına VAT *(KDV)* tutarının %100\'üne kadar para cezası uygulanır. B2B\'de kağıt fatura kullanımı olay başına 18.000 PLN\'ye kadar, KSeF\'e kayıt yaptırmamak 7.000 PLN\'ye kadar, yanlış formatta fatura ise 5.000 PLN\'ye kadar cezalandırılır. 1 Nisan 2026\'dan itibaren otomatik denetim, JPK_VAT *(VAT tek kayıt dosyası)* ile KSeF kayıtlarını gerçek zamanlı karşılaştırır.' },
      { q: 'Türk girişimci KSeF\'e nasıl bağlanır?', a: '4 adım: 1) Polonya bankası üzerinden Profil Zaufany *(güvenilir profil)* veya nitelikli elektronik imza (200 PLN/yıldan başlayan) edinin; 2) e-Urząd Skarbowy *(elektronik vergi dairesi)* üzerinden ZAW-FA formu doldurun ve uprawnione osoby *(yetkili kişiler)* atayın; 3) muhasebe yazılımınızı entegre edin (iFirma, wFirma, Comarch hâlihazırda entegredir); 4) ekibinizi yeni XML fatura yapısı konusunda eğitin. Tüm bağlantı 31 Ocak 2026\'ya kadar tamamlanmalıdır.' },
      { q: 'AB\'deki müşterilerden gelen faturalar için ne değişiyor?', a: 'Diğer AB ülkelerindeki iş ortakları KSeF\'te yer almaz; bu nedenle UE-faktur *(AB faturaları)* için ayrı şablonlara ihtiyaç vardır. Polonya\'daki ERP sistemlerinin çoğu (Comarch, Subiekt) AB faturalarını ayrı olarak otomatik üretir. AB\'den alınan faturalar standart PDF veya elektronik formatta kalmaya devam eder.' }
    ]
  },

  'polski-b1-egzamin-do-obywatelstwa': {
    ru: [
      { q: 'Кому нужен сертификат B1 для гражданства Польши?', a: 'B1 от Państwowej Komisji (Государственной комиссии) обязателен для uznania za obywatela polskiego (признания польским гражданином - натурализация после 2 лет PMŻ или 3 лет TRC) и nadania obywatelstwa przez Prezydenta RP (предоставления гражданства Президентом РП). Не нужен для karty stałego pobytu (карты постоянного пребывания, только в некоторых случаях) и для Karty Polaka (там устный A2 с консулом).' },
      { q: 'Из каких частей состоит экзамен B1?', a: '4 части за один день (около 5 часов): rozumienie ze słuchu (понимание на слух, 30 мин), rozumienie tekstów pisanych (понимание письменных текстов, 45 мин), poprawność gramatyczna (грамматика, 60 мин), pisanie + mówienie (письмо + говорение, 90 мин + 15 мин). Самая сложная для русско- и украиноязычных - gramatyka (грамматика), особенно miejscownik (предложный падеж) и aspekty czasownika (виды глагола).' },
      { q: 'Сколько стоит экзамен B1 в 2026?', a: '150 EUR (около 640 PLN) за регистрацию. Pisemna копия сертификата - 60 PLN, с apostille MSZ (МИД) +60 PLN. Срочная выдача +50%. При повторной сдаче после niezdania (несдачи) - снова 150 EUR полностью.' },
      { q: 'Когда сдавать экзамен B1 в 2026?', a: 'Три сессии в году: 16-17 мая, 8-9 августа, 7-8 ноября 2026. Регистрация открывается за 3 месяца и закрывается за 6 недель. Места заканчиваются за 1-2 недели до этого. Центры в Польше - 8 (Варшава, Краков, Познань, Гданьск, Вроцлав, Люблин, Лодзь, Катовице) + 23 за рубежом.' },
      { q: 'Можно ли заменить B1 дипломом польского ВУЗа?', a: 'Да - диплом полностью законченного licencjat (бакалавриата) / magistra (магистратуры) / studiów podyplomowych (последипломного образования) на польском заменяет B1. Также подходит matura z języka polskiego (выпускной экзамен по польскому), сертификат C1/C2 от Państwowej Komisji (Государственной комиссии). Karta Polaka НЕ заменяет B1 - это распространённое заблуждение.' }
    ],
    uk: [
      { q: 'Кому потрібен сертифікат B1 для громадянства Польщі?', a: 'B1 від Państwowej Komisji є обов\'язковим для uznania za obywatela polskiego (після 2 років PMŻ або 3 років TRC) та nadania obywatelstwa przez Prezydenta RP. Не потрібен для karta stałego pobytu і для Karty Polaka.' },
      { q: 'З яких частин складається іспит B1?', a: '4 частини за один день (~5 годин): rozumienie ze słuchu (30 хв), rozumienie tekstów pisanych (45 хв), poprawność gramatyczna (60 хв), pisanie + mówienie (90 + 15 хв). Найскладніша для україномовних — gramatyka, особливо miejscownik та aspekty czasownika.' },
      { q: 'Скільки коштує іспит B1 у 2026 році?', a: '150 EUR (близько 640 PLN) за реєстрацію. Копія сертифіката — 60 PLN, з apostille MSZ +60 PLN. Термінова видача +50%. При повторній здачі після невдачі — знову 150 EUR.' },
      { q: 'Коли складати іспит B1 у 2026 році?', a: 'Три сесії на рік: 16–17 травня, 8–9 серпня, 7–8 листопада 2026. Реєстрація відкривається за 3 місяці та закривається за 6 тижнів. Центри в Польщі — 8 (Варшава, Краків, Познань, Гданськ, Вроцлав, Люблін, Лодзь, Катовіце) + 23 за кордоном.' },
      { q: 'Чи можна замінити B1 дипломом польського ВНЗ?', a: 'Так — диплом закінченого licencjat / magistra / studiów podyplomowych польською мовою замінює B1. Також підходить matura z języka polskiego, сертифікат C1/C2. Karta Polaka НЕ замінює B1 — це поширена помилка.' }
    ],

    pl: [
      { q: 'Komu jest potrzebny certyfikat B1 do obywatelstwa polskiego?', a: 'B1 z Państwowej Komisji jest obowiązkowy do uznania za obywatela polskiego (po 2 latach PR lub 3 latach TRC) i nadania obywatelstwa przez Prezydenta RP. Nie jest potrzebny do karty stałego pobytu (tylko w niektórych podstawach) ani do Karty Polaka (tam ustny A2 z konsulem).' },
      { q: 'Z czego składa się egzamin B1?', a: '4 części w jeden dzień (ok. 5 godzin): rozumienie ze słuchu (30 min), rozumienie tekstów pisanych (45 min), poprawność gramatyczna (60 min), pisanie + mówienie (90 + 15 min). Najtrudniejsza dla rosyjsko- i ukraińskojęzycznych - gramatyka, zwłaszcza miejscownik i aspekty czasownika.' },
      { q: 'Ile kosztuje egzamin B1 w 2026?', a: '150 EUR (ok. 640 PLN) rejestracji. Pisemna kopia certyfikatu - 60 PLN, z apostille MSZ +60 PLN. Pilne wydanie +50%. Po niezdaniu - kolejne 150 EUR pełnej kwoty.' },
      { q: 'Kiedy jest egzamin B1 w 2026?', a: 'Trzy sesje: 16-17 maja, 8-9 sierpnia, 7-8 listopada 2026. Rejestracja otwiera się 3 miesiące przed i zamyka 6 tygodni przed. Miejsca kończą się 1-2 tygodnie wcześniej. Centra w Polsce - 8 (Warszawa, Kraków, Poznań, Gdańsk, Wrocław, Lublin, Łódź, Katowice) plus 23 zagraniczne.' },
      { q: 'Czy dyplom polskiej uczelni zastępuje B1?', a: 'Tak - dyplom ukończonych studiów licencjackich / magisterskich / podyplomowych po polsku zastępuje B1. Pasuje też matura z języka polskiego, certyfikat C1/C2 z Państwowej Komisji. Karta Polaka NIE zastępuje B1 - to częste nieporozumienie.' }
    ],
    en: [
      { q: 'Who needs the B1 certificate for Polish citizenship?', a: 'B1 from the Państwowa Komisja (State Commission) is mandatory for uznanie za obywatela polskiego (recognition as a Polish citizen - after 2 years of PR or 3 years of TRC) and nadanie obywatelstwa (citizenship by Presidential decree). Not required for permanent residence (only on some bases) or Karta Polaka (which uses an A2 oral test with the consul).' },
      { q: 'What does the B1 exam consist of?', a: 'Four parts in one day (~5 hours): listening (30 min), reading (45 min), grammar (60 min), writing + speaking (90 + 15 min). The hardest for Russian and Ukrainian speakers is grammar - particularly the locative case and verbal aspect.' },
      { q: 'How much does the B1 exam cost in 2026?', a: 'EUR 150 (~PLN 640) for registration. A written certificate copy - PLN 60, with MSZ apostille +PLN 60. Express issuance +50%. A resit after failing costs the full EUR 150 again.' },
      { q: 'When is the B1 exam in 2026?', a: 'Three sessions: 16-17 May, 8-9 August, 7-8 November 2026. Registration opens 3 months before and closes 6 weeks before. Slots fill 1-2 weeks earlier. Polish centres - 8 (Warsaw, Kraków, Poznań, Gdańsk, Wrocław, Lublin, Łódź, Katowice) plus 23 foreign ones.' },
      { q: 'Can a Polish university degree substitute for B1?', a: 'Yes - a completed bachelor\'s, master\'s or postgraduate degree in Polish substitutes for B1. Polish-language matura, C1 or C2 certificate from the State Commission also count. Karta Polaka does NOT substitute B1 - a common misconception.' }
    ],
    tr: [
      { q: 'Polonya vatandaşlığı için B1 sertifikası kimler için zorunludur?', a: 'Państwowa Komisja tarafından verilen B1 sertifikası uznanie za obywatela polskiego (2 yıl PMŻ veya 3 yıl TRC sonrası vatandaşlık) ve nadanie obywatelstwa przez Prezydenta RP süreçlerinde zorunludur. Karta Stałego Pobytu için (yalnızca bazı gerekçelerde) zorunlu değildir, Karta Polaka için de gerekli değildir (orada konsoloslukla A2 sözlü sınav yapılır).' },
      { q: 'B1 sınavı kaç bölümden oluşur ve ne kadar sürer?', a: 'Sınav tek günde yaklaşık 5 saat sürer ve 4 bölümden oluşur: rozumienie ze słuchu (dinleme, 30 dk), rozumienie tekstów pisanych (okuma, 45 dk), poprawność gramatyczna (dilbilgisi, 60 dk), pisanie + mówienie (yazma + konuşma, 90 dk + 15 dk). Türkçe konuşanlar için en zor bölüm dilbilgisidir, özellikle miejscownik (bulunma hali) ve fiil görünüşleri.' },
      { q: 'B1 sınavı 2026\'da ne kadar?', a: 'Kayıt ücreti 150 € (yaklaşık 640 PLN). Sertifikanın yazılı kopyası 60 PLN, MSZ apostille ile +60 PLN. Acil çıkartmada %50 ek ücret alınır. Niezdaniu (başarısız olma) sonrası yeniden sınava giriş tam 150 € olarak ödenir.' },
      { q: 'B1 sınavı 2026\'da ne zaman yapılacak?', a: 'Yıl içinde 3 oturum vardır: 16-17 Mayıs, 8-9 Ağustos ve 7-8 Kasım 2026. Kayıt 3 ay önce açılır ve 6 hafta önce kapanır. Yerler 1-2 hafta öncesinden tükenir. Polonya\'da 8 merkez (Varşova, Krakov, Poznań, Gdańsk, Wrocław, Lublin, Łódź, Katowice) ve 23 yurt dışı merkezi vardır. Türk vatandaşları için en yakın merkez İstanbul\'dur.' },
      { q: 'Polonya üniversitesi diploması B1 yerine geçer mi?', a: 'Evet. Lehçe tamamlanmış licencjat (lisans), magister (yüksek lisans) veya studia podyplomowe (yüksek lisans sonrası eğitim) diploması B1\'in yerine geçer. Lehçe matura, Państwowa Komisja\'dan C1 veya C2 sertifikası da geçerlidir. Karta Polaka B1\'in yerini TUTMAZ - bu yaygın bir yanlış anlamadır.' }
    ]
  },

  'nfz-dla-cudzoziemca-2026': {
    ru: [
      { q: 'Как иностранцу зарегистрироваться в NFZ (Национальном фонде здоровья) в 2026?', a: '5 шагов: 1) получить PESEL и karta pobytu; 2) подключиться к ZUS через umowę o pracę (трудовой договор) / JDG (ИП) / договор dobrowolnego ubezpieczenia (добровольного страхования); 3) проверить status на eWUŚ через mObywatel или pacjent.gov.pl (Интернет-кабинет пациента); 4) выбрать lekarza POZ (врача первичной помощи) и подать deklarację (декларацию) в przychodni (поликлинике); 5) подключить IKP (Интернет-кабинет пациента). Регистрация бесплатная.' },
      { q: 'Кто имеет право на бесплатную медицину NFZ?', a: 'Работники по umowie o pracę (трудовому договору) или zlecenie (договору поручения) с ZUS, JDG-предприниматели (ИП) платящие składkę zdrowotną (медицинский взнос), студенты дневной формы с польской strony платой, члены семьи застрахованных (через DRA-2), беженцы UKR (украинцы), обладатели Karty Polaka и dobrowolnie ubezpieczeni (добровольно застрахованные, ~720 PLN/мес). Туристы и краткосрочные визиты - нет.' },
      { q: 'Сколько стоит добровольное страхование NFZ?', a: 'В 2026: 720 PLN/мес базового тарифа. При перерыве в страховании менее 3 месяцев - без kary (штрафа). От 3 до 12 месяцев - +20% kary (864 PLN/мес). Свыше 12 месяцев - +50% (1 080 PLN/мес). Для большинства иностранцев частная страховка (PZU, Allianz, Medicover) дешевле - около 200-500 PLN/мес.' },
      { q: 'Какие сроки ожидания специалистов в NFZ в 2026?', a: 'POZ (первичная помощь) - до 1 недели. Дерматолог - 4-8 недель. Гинеколог профилактика - 1-2 месяца. Кардиолог, невролог - 3-8 месяцев. Эндокринолог, ортопед, психиатр - 6-14 месяцев. Для острых случаев - pilne skierowanie (срочное направление) от POZ (1-4 недели) или SOR (отделение неотложной помощи). Запись через mObywatel или IKP (Интернет-кабинет пациента).' },
      { q: 'Что такое IKP и как его подключить?', a: 'IKP (Internetowe Konto Pacjenta - Интернет-кабинет пациента) - личный кабинет пациента на pacjent.gov.pl. Доступ - через Profil Zaufany (доверенный профиль) или mObywatel. В IKP: e-skierowania (электронные направления), e-recepty (электронные рецепты), история визитов, результаты анализов, статус NFZ. С 2026 интегрирован с mObywatel - рецепты и направления прямо в приложении.' }
    ],
    uk: [
      { q: 'Як іноземцю зареєструватися в NFZ у 2026 році?', a: '5 кроків: 1) отримати PESEL та karta pobytu; 2) приєднатися до ZUS через umowę o pracę / JDG / добровільне страхування; 3) перевірити статус в eWUŚ; 4) обрати lekarza POZ і подати deklarację у przychodni; 5) підключити IKP. Реєстрація безкоштовна.' },
      { q: 'Хто має право на безкоштовну медицину NFZ?', a: 'Працівники за umową o pracę або zlecenie із ZUS, підприємці на JDG, які сплачують składkę zdrowotną, студенти денної форми навчання, члени сім\'ї застрахованих (через DRA-2), beneficjenci UKR, власники Karty Polaka, добровільно застраховані (~720 PLN/міс).' },
      { q: 'Скільки коштує добровільне страхування NFZ?', a: 'У 2026 році: 720 PLN/міс базового тарифу. При перерві менше 3 місяців — без штрафу. Від 3 до 12 місяців — +20% (864 PLN/міс). Понад 12 місяців — +50% (1 080 PLN/міс). Для більшості іноземців приватна страховка (PZU, Allianz, Medicover) обходиться дешевше.' },
      { q: 'Які строки очікування до фахівців NFZ у 2026 році?', a: 'POZ — до 1 тижня. Дерматолог — 4–8 тижнів. Гінеколог — 1–2 місяці. Кардіолог, невролог — 3–8 місяців. Ендокринолог, ортопед, психіатр — 6–14 місяців. У гострих випадках — pilne skierowanie від POZ або SOR.' },
      { q: 'Що таке IKP і як його підключити?', a: 'IKP (Internetowe Konto Pacjenta) — особистий кабінет пацієнта на pacjent.gov.pl. Доступ — через Profil Zaufany або mObywatel. В IKP: e-skierowania, e-recepty, історія візитів, результати аналізів, статус NFZ.' }
    ],

    pl: [
      { q: 'Jak cudzoziemiec zarejestruje się w NFZ w 2026?', a: '5 kroków: 1) zdobyć PESEL i kartę pobytu; 2) podłączyć się do ZUS przez umowę o pracę / JDG / dobrowolne ubezpieczenie; 3) sprawdzić status w eWUŚ przez mObywatel lub pacjent.gov.pl; 4) wybrać lekarza POZ i złożyć deklarację w przychodni; 5) podłączyć IKP. Rejestracja bezpłatna.' },
      { q: 'Kto ma prawo do bezpłatnej medycyny NFZ?', a: 'Pracownicy na umowie o pracę lub zlecenie z ZUS, przedsiębiorcy JDG płacący składkę zdrowotną, studenci dzienni z opłaconym ubezpieczeniem, członkowie rodziny ubezpieczonych (przez DRA-2), beneficjenci UKR, posiadacze Karty Polaka, dobrowolnie ubezpieczeni (~720 PLN/m-c). Turyści i krótkie pobyty - nie.' },
      { q: 'Ile kosztuje dobrowolne ubezpieczenie NFZ?', a: 'W 2026: 720 PLN/m-c bazowo. Przerwa <3 m-ce - bez kary. Przerwa 3-12 m-cy - +20% kary (864 PLN/m-c). Przerwa >12 m-cy - +50% (1 080 PLN/m-c). Dla większości cudzoziemców prywatne ubezpieczenie (PZU, Allianz, Medicover) jest tańsze - 200-500 PLN/m-c.' },
      { q: 'Jakie są kolejki do specjalistów w NFZ w 2026?', a: 'POZ - do 1 tygodnia. Dermatolog - 4-8 tygodni. Ginekolog profilaktyka - 1-2 miesiące. Kardiolog, neurolog - 3-8 miesięcy. Endokrynolog, ortopeda, psychiatra - 6-14 miesięcy. Stany pilne - pilne skierowanie od POZ (1-4 tygodnie) lub SOR. Zapisy przez mObywatel lub IKP.' },
      { q: 'Czym jest IKP i jak je podłączyć?', a: 'IKP (Internetowe Konto Pacjenta) - panel pacjenta na pacjent.gov.pl. Logowanie - Profil Zaufany lub mObywatel. W IKP: e-skierowania, e-recepty, historia wizyt, wyniki badań, status NFZ. Od 2026 zintegrowane z mObywatel - recepty i skierowania w aplikacji.' }
    ],
    en: [
      { q: 'How does a foreigner register with NFZ (national health fund) in 2026?', a: '5 steps: 1) get PESEL and a residence card; 2) connect to ZUS via employment / JDG (sole proprietorship) / voluntary insurance; 3) check status in eWUŚ via mObywatel or pacjent.gov.pl; 4) choose a POZ (primary-care) doctor and file a declaration at the practice; 5) connect IKP (Internet Patient Account). Registration is free.' },
      { q: 'Who is eligible for free NFZ healthcare?', a: 'Employees on umowa o pracę (employment contract) or zlecenie (mandate contract) with ZUS, JDG entrepreneurs paying the składka zdrowotna (health contribution), full-time students with paid insurance, family members of insured persons (via DRA-2), UKR-status beneficiaries, Karta Polaka holders, and voluntarily insured (~PLN 720/month). Tourists and short stays - no.' },
      { q: 'How much does voluntary NFZ insurance cost?', a: 'In 2026: PLN 720/month base. Break under 3 months - no penalty. Break 3-12 months - +20% penalty (PLN 864/month). Break over 12 months - +50% (PLN 1,080/month). For most foreigners, private insurance (PZU, Allianz, Medicover) is cheaper - PLN 200-500/month.' },
      { q: 'What are NFZ specialist waiting times in 2026?', a: 'POZ (primary care) - up to 1 week. Dermatology - 4-8 weeks. Gynaecology screening - 1-2 months. Cardiology, neurology - 3-8 months. Endocrinology, orthopedics, psychiatry - 6-14 months. Urgent cases - POZ pilne skierowanie (urgent referral, 1-4 weeks) or SOR (emergency department). Booking via mObywatel or IKP (Internet Patient Account).' },
      { q: 'What is IKP and how do you connect it?', a: 'IKP (Internetowe Konto Pacjenta - Internet Patient Account) is the patient panel at pacjent.gov.pl. Login via Profil Zaufany (Trusted Profile) or mObywatel. IKP holds e-skierowania (e-referrals), e-recepty (e-prescriptions), visit history, lab results and NFZ status. From 2026 it\'s integrated with mObywatel - prescriptions and referrals in the app.' }
    ],
    tr: [
      { q: 'Yabancı 2026\'da NFZ\'ye nasıl kayıt olur?', a: '5 adım: 1) PESEL *(kişisel kimlik numarası)* ve Karta Pobytu *(Polonya oturum kartı)* edinin; 2) ZUS *(Polonya Sosyal Güvenlik Kurumu)* sistemine umowa o pracę *(iş sözleşmesi)*, JDG *(şahıs şirketi)* veya isteğe bağlı sigorta sözleşmesi yoluyla bağlanın; 3) statünüzü mObywatel veya pacjent.gov.pl üzerinden eWUŚ *(hak sahipliği doğrulama sistemi)* ile kontrol edin; 4) POZ *(birinci basamak)* hekiminizi seçin ve poliklinikte deklaracja *(seçim beyannamesi)* doldurun; 5) IKP *(internet hasta hesabı)* hesabınızı aktive edin. Kayıt ücretsizdir.' },
      { q: 'NFZ ücretsiz sağlık hizmetinden kimler yararlanabilir?', a: 'ZUS kayıtlı umowa o pracę veya umowa zlecenie *(hizmet sözleşmesi)* ile çalışanlar, składka zdrowotna *(sağlık katkı payı)* ödeyen JDG sahipleri, üniversite tarafından sigortası yatırılan tam zamanlı öğrenciler, sigortalı bir aile üyesinin yakını (DRA-2 formu ile), UKR statüsündeki Ukraynalılar, Karta Polaka *(Polonyalı Kartı)* sahipleri ve isteğe bağlı sigortalananlar (yaklaşık 720 PLN/ay). Turistler ve kısa süreli ziyaretçiler kapsam dışıdır.' },
      { q: 'İsteğe bağlı NFZ sigortası ne kadar?', a: '2026 yılında temel tarife ayda 720 PLN\'dir. 3 aydan kısa sigorta kesintisinde ek ücret yoktur. 3-12 ay arası kesintide %20 ceza eklenir (864 PLN/ay). 12 aydan uzun kesintide %50 ceza uygulanır (1.080 PLN/ay). Çoğu yabancı için özel sağlık sigortası (PZU, Allianz, Medicover) daha uygundur - aylık 200-500 PLN arası.' },
      { q: 'NFZ\'de uzman hekim bekleme süreleri 2026\'da ne kadar?', a: 'POZ *(birinci basamak)* için 1 haftaya kadar. Dermatolog 4-8 hafta. Jinekolog koruyucu muayene 1-2 ay. Kardiyolog ve nörolog 3-8 ay. Endokrinolog, ortopedist ve psikiyatrist 6-14 ay. Acil durumlarda POZ hekiminin pilne skierowanie *(acil sevk)* yetkisi süreyi 1-4 haftaya indirir; akut vakalar için SOR *(hastane acil servisi)* ücretsizdir. Randevular mObywatel veya IKP üzerinden alınır.' },
      { q: 'IKP nedir ve nasıl bağlanır?', a: 'IKP (Internetowe Konto Pacjenta) *(internet hasta hesabı)*, pacjent.gov.pl üzerindeki kişisel hasta panelidir. Giriş Profil Zaufany veya mObywatel uygulaması ile yapılır. IKP\'de e-skierowania *(elektronik sevkler)*, e-recepty *(elektronik reçeteler)*, ziyaret geçmişi, tahlil sonuçları ve NFZ statüsü bulunur. 2026 itibarıyla mObywatel ile entegredir; reçete ve sevkler doğrudan uygulamadan görüntülenir.' }
    ]
  },

  // ─── Karta Pobytu - kontynuacja / przedłużenie ─────────────────────
  'karta-pobytu-prodlenie-2026-kogda-podavat': {
    ru: [
      { q: 'За сколько дней до истечения karty pobytu нужно подавать на продление?', a: 'Минимум за 45 дней до истечения - тогда воевода ставит дело в приоритетную очередь "kontynuacja" (продолжение), а UPO (электронная квитанция MOS v2.0) приходит до конца действия старой карты, легализуя пребывание на весь период рассмотрения. Если осталось 15 дней или меньше - дело могут zostawić bez rozpoznania (оставить без рассмотрения).' },
      { q: 'Нужно ли заново сдавать биометрию при продлении karty pobytu?', a: 'Да. По ст. 99 Ustawy o cudzoziemcach (Закона об иностранцах) отпечатки и фото - неотъемлемая часть каждого wniosku (заявления). Вызов на биометрию приходит в eDoręczenia через 4-12 недель после UPO. В Mazowieckim - чаще всего на al. Solidarności 81.' },
      { q: 'Сколько ждать продление karty pobytu в Mazowieckim воеводстве в 2026?', a: '6-10 месяцев в среднем - примерно на 2-3 недели быстрее первой подачи, т.к. inspektor видит вашу историю в системе. По закону - до 90 дней. Если ожидание превысит 12 месяцев - можно подать ponaglenie (жалобу на бездействие) do Szefa Urzędu do Spraw Cudzoziemców.' },
      { q: 'Что делать, если karta pobytu уже истекла, а UPO ещё нет?', a: 'Формально вы в nielegalnym pobycie (нелегальном пребывании). Не выезжайте из Польши - подавайте wniosek через MOS v2.0 как можно быстрее с pismem wyjaśniającym (объяснительным письмом). В Mazowieckim в 60-70% случаев такие дела рассматривают по существу, если задержка не больше 30 дней и есть уважительная причина.' },
      { q: 'Сколько стоит продление karty pobytu в 2026?', a: 'Госпошлины - 340 PLN за wniosek + 100 PLN за пластик новой karty. Сопровождение LegalWin - от 2 200 PLN. С тłumaczeniami przysięgłymi (присяжными переводами) и mediastraховкой минимальная общая сумма - около 2 940 PLN.' }
    ],
    uk: [
      { q: 'За скільки днів до закінчення karty pobytu потрібно подавати на продовження?', a: 'Мінімум за 45 днів до закінчення — тоді воєвода ставить справу в пріоритетну чергу "kontynuacja", а UPO надходить до кінця дії старої картки, легалізуючи перебування на весь час розгляду.' },
      { q: 'Чи потрібно повторно здавати біометрію при продовженні?', a: 'Так. Відповідно до ст. 99 Ustawy o cudzoziemcach відбитки пальців і фото є обов\'язковою частиною кожного wniosku. Виклик на біометрію надходить в eDoręczenia через 4–12 тижнів після отримання UPO.' },
      { q: 'Скільки чекати на продовження в Мазовецькому воєводстві у 2026 році?', a: 'У середньому 6–10 місяців — приблизно на 2–3 тижні швидше, ніж при першій подачі. За законом — до 90 днів. Якщо очікування перевищить 12 місяців — можна подати ponaglenie do Szefa UdSC.' },
      { q: 'Що робити, якщо karta pobytu вже закінчилася, а UPO ще немає?', a: 'Формально ви перебуваєте в nielegalnym pobycie. Не виїжджайте з Польщі — подавайте wniosek через MOS v2.0 з pismem wyjaśniającym. У Мазовецькому воєводстві в 60–70% випадків такі справи розглядають по суті.' },
      { q: 'Скільки коштує продовження karty pobytu у 2026 році?', a: 'Державне мито — 340 PLN за wniosek + 100 PLN за пластик нової karty. Супровід LegalWin — від 2 200 PLN. З перекладами та медичною страховкою мінімальна загальна сума складає близько 2 940 PLN.' }
    ],

    pl: [
      { q: 'Ile dni przed wygaśnięciem karty pobytu należy złożyć wniosek o kontynuację?', a: 'Minimum 45 dni przed wygaśnięciem - wojewoda ustawia sprawę w priorytetowej kolejce "kontynuacja", a UPO (urzędowe poświadczenie odbioru z MOS v2.0) przychodzi przed końcem ważności starej karty, legalizując pobyt na cały okres rozpatrywania. Jeśli zostało 15 dni lub mniej - wniosek może zostać pozostawiony bez rozpoznania.' },
      { q: 'Czy trzeba ponownie pobierać biometrię przy kontynuacji karty pobytu?', a: 'Tak. Zgodnie z art. 99 Ustawy o cudzoziemcach odciski i zdjęcie są integralną częścią każdego wniosku. Wezwanie przychodzi w eDoręczeniach po 4-12 tygodniach od UPO. W Mazowieckim - najczęściej na al. Solidarności 81.' },
      { q: 'Ile czeka się na kontynuację karty pobytu w Mazowieckim w 2026?', a: '6-10 miesięcy średnio - około 2-3 tygodnie szybciej niż pierwsza sprawa, bo inspektor widzi historię w systemie. Ustawowo do 90 dni. Po 12 miesiącach można złożyć ponaglenie do Szefa Urzędu do Spraw Cudzoziemców.' },
      { q: 'Co zrobić, gdy karta pobytu wygasła a UPO jeszcze nie ma?', a: 'Formalnie jesteś w nielegalnym pobycie. Nie wyjeżdżaj z Polski - złóż wniosek przez MOS v2.0 jak najszybciej z pismem wyjaśniającym. W Mazowieckim w 60-70% przypadków takie sprawy są rozpatrywane merytorycznie, jeśli opóźnienie nie przekracza 30 dni i jest uzasadniona przyczyna.' },
      { q: 'Ile kosztuje kontynuacja karty pobytu w 2026?', a: 'Opłaty urzędowe - 340 PLN za wniosek + 100 PLN za blankiet nowej karty. Obsługa LegalWin - od 2 200 PLN. Razem z tłumaczeniami przysięgłymi i ubezpieczeniem - minimum około 2 940 PLN.' }
    ],
    en: [
      { q: 'How many days before karta pobytu expiry should I file the continuation?', a: 'At least 45 days before expiry - the wojewoda then places the case in the priority "kontynuacja" queue and the UPO (MOS v2.0 acknowledgement) arrives before the old card expires, legalising stay throughout the review. With 15 days or less remaining, the wniosek may be left bez rozpoznania (without examination).' },
      { q: 'Do I need to give fingerprints again when renewing karta pobytu?', a: 'Yes. Under art. 99 of the Ustawa o cudzoziemcach (Law on Foreigners) fingerprints and a photo are integral to every wniosek. The summons arrives in eDoręczenia 4-12 weeks after UPO. In Mazowieckie, most appointments are at al. Solidarności 81.' },
      { q: 'How long does karta pobytu continuation take in Mazowieckie in 2026?', a: '6-10 months on average - roughly 2-3 weeks faster than a first application, since the inspektor sees your history in the system. Statutory limit: 90 days. If you wait more than 12 months, you can file a ponaglenie (inactivity complaint) with Szefa Urzędu do Spraw Cudzoziemców.' },
      { q: 'What if karta pobytu has expired but UPO has not arrived yet?', a: 'You are formally in irregular stay. Do not leave Poland - file via MOS v2.0 as fast as possible with a pismo wyjaśniające (cover letter). In Mazowieckie, 60-70% of such cases are examined on the merits when the delay is under 30 days and a justified reason exists.' },
      { q: 'How much does karta pobytu continuation cost in 2026?', a: 'Official fees: 340 PLN stamp duty + 100 PLN for the new card blank. LegalWin handling: from 2,200 PLN. Including sworn translations and insurance, the minimum total is about 2,940 PLN.' }
    ],
    tr: [
      { q: 'Karta pobytu yenileme başvurusu süresi dolmadan kaç gün önce yapılmalı?', a: 'Sona ermesinden en az 45 gün önce - wojewoda *(eyalet valisi)* dosyayı öncelikli "kontynuacja" *(devam ettirme)* sırasına koyar ve UPO *(MOS v2.0 elektronik teslim belgesi)* eski kart bitmeden gelir; tüm değerlendirme süresince ikamet yasallaşır. 15 günden az kaldıysa - wniosek *(başvuru)* bez rozpoznania *(incelemeden iade)* bırakılabilir.' },
      { q: 'Karta pobytu yenilemesinde biyometri tekrar alınır mı?', a: 'Evet. Ustawa o cudzoziemcach *(Yabancılar Kanunu)*\'nun 99. maddesine göre parmak izi ve fotoğraf her wniosek\'in ayrılmaz parçasıdır. UPO\'dan 4-12 hafta sonra eDoręczenia\'ya çağrı gelir. Mazowieckie\'de genellikle al. Solidarności 81\'de yapılır.' },
      { q: '2026\'da Mazowieckie eyaletinde karta pobytu yenileme süresi ne kadar?', a: 'Ortalama 6-10 ay - ilk başvurudan yaklaşık 2-3 hafta daha hızlı, çünkü müfettiş geçmişinizi sistemde görür. Yasal süre 90 gün. 12 aydan uzun beklerseniz - Szef Urzędu do Spraw Cudzoziemców *(Yabancılar Dairesi Başkanı)*\'na ponaglenie *(eylemsizlik şikayeti)* verilebilir.' },
      { q: 'Karta pobytu süresi doldu ama UPO henüz gelmediyse ne yapmalı?', a: 'Resmen düzensiz ikamettesiniz. Polonya\'yı terk etmeyin - MOS v2.0 üzerinden mümkün olan en kısa sürede pismo wyjaśniające *(açıklayıcı dilekçe)* ile birlikte başvurun. Mazowieckie\'de gecikme 30 günün altındaysa ve haklı bir neden varsa, dosyaların yüzde 60-70\'i esastan incelenir.' },
      { q: 'Karta pobytu yenileme 2026\'da ne kadar tutar?', a: 'Resmi harçlar - wniosek için 340 PLN + yeni karta plastik bedeli 100 PLN. LegalWin paket hizmeti 2.200 PLN\'den başlar. Yeminli tercümeler ve sigortayla minimum toplam yaklaşık 2.940 PLN.' }
    ]
  },

  // ─── Karta Pobytu - business grounds (JDG vs Sp. z o.o.) ───────────
  'karta-pobytu-po-biznesu-jdg-sp-z-oo-2026': {
    ru: [
      { q: 'Какая форма бизнеса лучше для karta pobytu в 2026 - JDG или sp. z o.o.?', a: 'Если работаете один как фрилансер/IT-разработчик с доходом 100 000+ PLN/год - выгоднее JDG (jednoosobowa działalność gospodarcza - ИП). Если 2+ партнёров, нанимаете сотрудников или планируете оборот выше 200 000 PLN - предпочтительнее sp. z o.o. Финансовый порог для karta pobytu одинаковый - 12-кратная средняя зарплата (~89 952 PLN/год в 2026) или 2 сотрудника-резидента.' },
      { q: 'Сколько нужно зарабатывать для karta pobytu по бизнесу в 2026?', a: 'По ст. 142 Ustawy o cudzoziemcach (Закона об иностранцах) - брутто доход в 12 раз больше средней зарплаты по экономике за год. В 2026 это **89 952 PLN brutto** (12 × 7 496 PLN). Альтернатива - найм минимум 2 сотрудников-резидентов на pełen etat (полную ставку).' },
      { q: 'Когда лучше открывать JDG до подачи на karta pobytu?', a: 'Минимум за 6 месяцев. Воевода смотрит финансовую историю, faktury, банковские выписки. Если JDG зарегистрирован за месяц - основание считается "несуществующим" и отказывают.' },
      { q: 'Можно ли получить karta pobytu по sp. z o.o. без сотрудников?', a: 'Только если доход компании достиг 89 952 PLN/год. Sp. z o.o. с 1 udziałowcem-иностранцем и без сотрудников - воевода почти всегда требует либо такой доход, либо 2 пасажников-резидентов. Без этого - odmowa (отказ).' },
      { q: 'Сколько ждать karta pobytu по бизнесу в Mazowieckim?', a: 'JDG с достаточным доходом - 8-12 месяцев. Sp. z o.o. с достаточным доходом - 10-14 месяцев. Sp. z o.o. на 2+ сотрудниках - 12-18 месяцев (воевода проверяет ZUS, KRS и контракты сотрудников).' }
    ],
    uk: [
      { q: 'Яка форма бізнесу краща для karta pobytu у 2026 — JDG чи sp. z o.o.?', a: 'Якщо працюєте самостійно як фрілансер із доходом 100 000+ PLN/рік — вигідніше JDG. Якщо 2+ партнери або планується оборот понад 200 000 PLN — краще sp. z o.o. Фінансовий поріг однаковий: 12× середня зарплата (~89 952 PLN/рік у 2026) або 2 наймані працівники-резиденти.' },
      { q: 'Скільки потрібно заробляти для karta pobytu по бізнесу у 2026?', a: 'Згідно зі ст. 142 Ustawy o cudzoziemcach — брутто-дохід у 12 разів більший за середню зарплату по економіці за рік. У 2026 це 89 952 PLN brutto (12 × 7 496 PLN). Альтернатива — найм щонайменше 2 працівників-резидентів на pełen etat.' },
      { q: 'Коли краще відкривати JDG перед подачею на karta pobytu?', a: 'Мінімум за 6 місяців. Воєвода перевіряє фінансову історію, faktury, банківські виписки. Якщо JDG зареєстровано за місяць — підстава вважається «неіснуючою» і у виданні відмовляють.' },
      { q: 'Чи можна отримати karta pobytu по sp. z o.o. без працівників?', a: 'Тільки якщо дохід компанії досяг 89 952 PLN/рік. Sp. z o.o. з 1 іноземним учасником і без працівників — воєвода майже завжди вимагає або такий дохід, або 2 працівників-резидентів. Без цього — odmowa.' },
      { q: 'Скільки чекати karta pobytu по бізнесу в Mazowieckim?', a: 'JDG із достатнім доходом — 8–12 місяців. Sp. z o.o. із достатнім доходом — 10–14 місяців. Sp. z o.o. з 2+ працівниками — 12–18 місяців.' }
    ],

    pl: [
      { q: 'Która forma działalności jest lepsza do karty pobytu w 2026 - JDG czy sp. z o.o.?', a: 'Jeśli pracujesz sam jako freelancer/programista IT z dochodem 100 000+ PLN/rok - bardziej opłaca się JDG. Jeśli 2+ wspólników, zatrudniasz pracowników lub planujesz obrót powyżej 200 000 PLN - lepsza sp. z o.o. Próg finansowy do karty pobytu jest taki sam - 12-krotność średniej krajowej (~89 952 PLN/rok w 2026) lub 2 pracowników-rezydentów.' },
      { q: 'Ile trzeba zarabiać do karty pobytu na działalności w 2026?', a: 'Zgodnie z art. 142 Ustawy o cudzoziemcach - dochód brutto 12-krotności średniego wynagrodzenia w gospodarce za rok. W 2026 to **89 952 PLN brutto** (12 × 7 496 PLN). Alternatywa - zatrudnienie co najmniej 2 pracowników-rezydentów na pełny etat.' },
      { q: 'Kiedy najlepiej otworzyć JDG przed wnioskiem o kartę pobytu?', a: 'Minimum 6 miesięcy wcześniej. Wojewoda patrzy na historię finansową, faktury, wyciągi bankowe. Jeśli JDG zarejestrowane miesiąc wcześniej - podstawa traktowana jest jako "nieistniejąca" i jest odmowa.' },
      { q: 'Czy można dostać kartę pobytu na sp. z o.o. bez pracowników?', a: 'Tylko jeśli dochód spółki osiągnął 89 952 PLN/rok. Sp. z o.o. z 1 udziałowcem-cudzoziemcem bez pracowników - wojewoda prawie zawsze wymaga albo tego dochodu, albo 2 pracowników-rezydentów. Bez tego - odmowa.' },
      { q: 'Ile czeka się na kartę pobytu na działalności w Mazowieckim?', a: 'JDG z dochodem - 8-12 miesięcy. Sp. z o.o. z dochodem - 10-14 miesięcy. Sp. z o.o. na 2+ pracowników - 12-18 miesięcy (wojewoda sprawdza ZUS, KRS i umowy pracowników).' }
    ],
    en: [
      { q: 'Which business form is better for karta pobytu in 2026 - JDG or Sp. z o.o.?', a: 'If you work solo as a freelancer/IT developer with income of PLN 100,000+/year, JDG (sole proprietorship) is more efficient. If you have 2+ partners, hire employees or plan turnover over PLN 200,000, Sp. z o.o. (LLC) is preferable. The karta pobytu financial threshold is identical: 12× the average national wage (~PLN 89,952/year in 2026) or 2 resident employees.' },
      { q: 'How much do I need to earn for a karta pobytu on business grounds in 2026?', a: 'Under art. 142 of the Ustawa o cudzoziemcach - gross income of 12× the national average wage per year. In 2026 that equals **PLN 89,952 gross** (12 × PLN 7,496). The alternative: hiring at least 2 resident workers on full-time contracts.' },
      { q: 'How long before filing karta pobytu should I open JDG?', a: 'At least 6 months before. The wojewoda reviews financial history, invoices, bank statements. If JDG was registered a month earlier, the grounds are treated as "non-existent" and the application is refused.' },
      { q: 'Can I get karta pobytu via Sp. z o.o. without employees?', a: 'Only if the company\'s income hit PLN 89,952/year. A Sp. z o.o. with a single foreign shareholder and no staff almost always faces refusal unless either that income level or 2 resident employees are documented.' },
      { q: 'How long does business-grounds karta pobytu take in Mazowieckie?', a: 'JDG with sufficient income - 8-12 months. Sp. z o.o. with sufficient income - 10-14 months. Sp. z o.o. on the 2+ employees route - 12-18 months (the wojewoda audits ZUS, KRS and the employee contracts).' }
    ],
    tr: [
      { q: '2026\'da karta pobytu için hangi iş formu daha iyi - JDG mı, sp. z o.o. mu?', a: 'Yılda 100.000+ PLN gelirli freelancer/IT geliştiricisiyseniz - JDG *(şahıs şirketi)* daha avantajlı. 2+ ortağınız varsa, çalışan istihdam ediyorsanız veya yıllık 200.000 PLN üzeri ciro planlıyorsanız - sp. z o.o. *(limited şirket)* tercih edilir. Karta pobytu finansal eşiği aynıdır - ülke ortalamasının 12 katı (~2026\'da 89.952 PLN/yıl) veya 2 yerleşik çalışan.' },
      { q: '2026\'da iş gerekçeli karta pobytu için ne kadar kazanmak gerekir?', a: 'Ustawa o cudzoziemcach *(Yabancılar Kanunu)*\'nun 142. maddesine göre - ekonomide ortalama maaşın 12 katı yıllık brüt gelir. 2026\'da bu **89.952 PLN brüt** (12 × 7.496 PLN). Alternatif - tam zamanlı en az 2 yerleşik çalışan istihdamı.' },
      { q: 'Karta pobytu başvurusundan önce JDG\'yi ne kadar erken açmak gerekir?', a: 'En az 6 ay önce. Wojewoda *(eyalet valisi)* mali geçmişi, faktury *(faturaları)* ve banka ekstrelerini kontrol eder. JDG bir ay önce kayıtlıysa - gerekçe "yok hükmünde" sayılır ve ret verilir.' },
      { q: 'Çalışansız sp. z o.o. ile karta pobytu alınabilir mi?', a: 'Sadece şirketin yıllık geliri 89.952 PLN\'e ulaştıysa. Tek yabancı ortaklı ve çalışansız sp. z o.o. - wojewoda neredeyse her zaman ya bu geliri ya da 2 yerleşik çalışanı talep eder. İkisi de yoksa - odmowa *(ret)*.' },
      { q: 'Mazowieckie\'de iş gerekçeli karta pobytu ne kadar sürer?', a: 'Yeterli gelirli JDG - 8-12 ay. Yeterli gelirli sp. z o.o. - 10-14 ay. 2+ çalışanlı sp. z o.o. - 12-18 ay (wojewoda ZUS, KRS ve çalışan sözleşmelerini denetler).' }
    ]
  },

  // ─── Karta Pobytu - marriage to Polish citizen ─────────────────────
  'karta-pobytu-na-osnovanii-braka-s-polyakom-2026': {
    ru: [
      { q: 'Какие документы нужны для karta pobytu по браку с поляком в 2026?', a: 'Главное - odpis zupełny aktu małżeństwa (полная копия записи о браке) из польского USC (Urzędu Stanu Cywilnego - ЗАГСа), не старше 6 месяцев. Если брак заключён за границей - сначала нужна транскрипция в польский USC. Плюс паспорт супруга-поляка, подтверждение совместного проживания (meldunek по одному адресу), медстраховка, госпошлина 340 PLN. Зарплата и работа НЕ требуются.' },
      { q: 'Через сколько лет брака можно karta stałego pobytu (ПМЖ)?', a: 'Через 3 года брака с гражданином Польши плюс 2 года непрерывного пребывания на karte czasowego pobytu (карте временного пребывания) в Польше. B1 польского НЕ требуется - в отличие от классической 5-летней дороги. Срок рассмотрения в Mazowieckim - 12-18 месяцев.' },
      { q: 'Что такое fikcyjne małżeństwo (фиктивный брак) и как воевода это проверяет?', a: 'По ст. 169 Ustawy o cudzoziemcach (Закона об иностранцах) воевода может отказать, если małżeństwo zostało zawarte w celu obejścia przepisów o pobycie (брак заключён для обхода правил пребывания). Признаки риска: знакомство меньше 6 месяцев до свадьбы, разница в возрасте >25 лет, раздельный meldunek (регистрация). При сомнениях - wywiad środowiskowy (бытовое расследование). В Mazowieckim ~12% дел по браку проходят через wywiad.' },
      { q: 'Что происходит с karta pobytu при разводе?', a: 'Карта действует до даты, указанной на пластике. На следующую karta надо подавать по другому основанию (praca, biznes, łączenie rodzin). Если есть общие дети с польским гражданством - можно karta pobytu по основанию "родитель ребёнка-гражданина Польши" (т.н. "дитя-якорь"). При смерти супруга карта остаётся в силе, если брак длился минимум 2 года.' },
      { q: 'Нужно ли знание польского для karta pobytu по браку?', a: 'Нет, для karta czasowego pobytu (карты временного пребывания) и karta stałego pobytu (ПМЖ) по браку польский не требуется. Только для гражданства (uznanie / nadanie obywatelstwa) обязателен B1 от Państwowej Komisji.' }
    ],
    uk: [
      { q: 'Які документи потрібні для karta pobytu по шлюбу з поляком у 2026?', a: 'Odpis zupełny aktu małżeństwa з польського USC, не старший 6 місяців. Якщо шлюб укладено за кордоном — спочатку потрібна транскрипція. Також паспорт чоловіка/дружини-поляка, підтвердження спільного проживання, медична страховка, держмито 340 PLN. Зарплата й робота НЕ вимагаються.' },
      { q: 'Через скільки років шлюбу можна отримати karta stałego pobytu?', a: 'Через 3 роки шлюбу з громадянином Польщі + 2 роки безперервного перебування на karte czasowego pobytu. Рівень B1 польської мови НЕ вимагається. Термін розгляду в Mazowieckim — 12–18 місяців.' },
      { q: 'Що таке fikcyjne małżeństwo і як воєвода це перевіряє?', a: 'Згідно зі ст. 169 Ustawy o cudzoziemcach воєвода може відмовити, якщо шлюб укладено для обходу правил перебування. Ознаки ризику: знайомство менше 6 місяців до весілля, різниця у віці понад 25 років, роздільний meldunek. У Mazowieckim ~12% справ проходять через wywiad środowiskowy.' },
      { q: 'Що відбувається з karta pobytu після розлучення?', a: 'Картка діє до дати, зазначеної на пластику. На наступну karta потрібно подавати за іншою підставою. Якщо є спільні діти з польським громадянством — можна отримати karta pobytu на підставі «батьків дитини-громадянина Польщі». У разі смерті чоловіка/дружини картка залишається чинною, якщо шлюб тривав щонайменше 2 роки.' },
      { q: 'Чи потрібне знання польської для karta pobytu по шлюбу?', a: 'Ні. Польська мова не вимагається ні для karta czasowego pobytu, ні для karta stałego pobytu по шлюбу. Лише для громадянства (uznanie / nadanie obywatelstwa) обов\'язковий рівень B1.' }
    ],

    pl: [
      { q: 'Jakie dokumenty są potrzebne do karty pobytu na podstawie małżeństwa w 2026?', a: 'Najważniejsze - odpis zupełny aktu małżeństwa z polskiego USC (Urząd Stanu Cywilnego), nie starszy niż 6 miesięcy. Jeśli ślub za granicą - najpierw transkrypcja do polskiego USC. Dodatkowo paszport małżonka-Polaka, potwierdzenie wspólnego zamieszkania (meldunek pod jednym adresem), ubezpieczenie zdrowotne, opłata skarbowa 340 PLN. Wynagrodzenie i praca NIE są wymagane.' },
      { q: 'Po ilu latach małżeństwa można złożyć o kartę stałego pobytu?', a: 'Po 3 latach małżeństwa z obywatelem RP plus 2 latach nieprzerwanego pobytu na karcie czasowego pobytu w Polsce. Egzamin z polskiego B1 NIE jest wymagany - inaczej niż przy klasycznej drodze 5-letniej. Czas rozpatrywania w Mazowieckim - 12-18 miesięcy.' },
      { q: 'Czym jest fikcyjne małżeństwo i jak wojewoda to sprawdza?', a: 'Zgodnie z art. 169 Ustawy o cudzoziemcach wojewoda może odmówić, jeśli małżeństwo zostało zawarte w celu obejścia przepisów o pobycie. Sygnały ryzyka: znajomość krócej niż 6 miesięcy przed ślubem, różnica wieku >25 lat, osobny meldunek. Przy wątpliwościach - wywiad środowiskowy. W Mazowieckim ~12% spraw przechodzi przez wywiad.' },
      { q: 'Co dzieje się z kartą pobytu po rozwodzie?', a: 'Karta obowiązuje do daty na blankiecie. Na kolejną kartę trzeba składać na innej podstawie (praca, biznes, łączenie rodzin). Jeśli są wspólne dzieci z polskim obywatelstwem - można karta pobytu na podstawie "rodzic dziecka-obywatela RP" (tzw. "dziecko-kotwica"). Przy śmierci małżonka karta pozostaje ważna, jeśli małżeństwo trwało min. 2 lata.' },
      { q: 'Czy do karty pobytu na małżeństwie potrzebny jest polski język?', a: 'Nie, do karty czasowego pobytu ani karty stałego pobytu na małżeństwie polski nie jest wymagany. Tylko do obywatelstwa (uznanie / nadanie) obowiązkowy jest B1 z Państwowej Komisji.' }
    ],
    en: [
      { q: 'What documents are required for karta pobytu via marriage to a Polish citizen in 2026?', a: 'The core item is an odpis zupełny aktu małżeństwa (full marriage record) from a Polish USC (Urząd Stanu Cywilnego, civil registry), no older than 6 months. Marriages registered abroad first need transcription into the Polish USC. Add the Polish spouse\'s passport, proof of shared residence (joint meldunek), health insurance and 340 PLN stamp duty. Salary and employment are NOT required.' },
      { q: 'After how many years of marriage can I apply for karta stałego pobytu (PRC)?', a: 'After 3 years of marriage to a Polish citizen plus 2 years of uninterrupted stay on karta czasowego pobytu in Poland. The B1 Polish exam is NOT required - unlike the classic 5-year route. Processing in Mazowieckie: 12-18 months.' },
      { q: 'What is fikcyjne małżeństwo and how does the wojewoda verify it?', a: 'Under art. 169 of the Ustawa o cudzoziemcach, the wojewoda may refuse if "the marriage was concluded to circumvent rules on residence." Risk signals: acquaintance under 6 months before the wedding, age gap >25 years, separate meldunek. In doubt, the wojewoda orders a wywiad środowiskowy (community interview). In Mazowieckie ~12% of marriage cases go through a wywiad.' },
      { q: 'What happens to karta pobytu after a divorce?', a: 'The card remains valid until the printed date. The next karta application must use other grounds (employment, business, family reunification). If there are shared children with Polish citizenship, you can file on "parent of a Polish-citizen child" grounds (the so-called "anchor child"). On the death of the Polish spouse, the card stays valid if the marriage lasted at least 2 years.' },
      { q: 'Is Polish required for karta pobytu via marriage?', a: 'No. Neither karta czasowego pobytu nor karta stałego pobytu via marriage requires Polish. Only Polish citizenship (uznanie / nadanie obywatelstwa) requires a B1 certificate from Państwowa Komisja.' }
    ],
    tr: [
      { q: '2026\'da Polonyalı eşle evlilik gerekçeli karta pobytu için hangi belgeler gerekir?', a: 'En önemlisi - Polonya USC *(Urząd Stanu Cywilnego, nüfus müdürlüğü)*\'sinden alınan odpis zupełny aktu małżeństwa *(tam evlilik kaydı sureti)*, 6 aydan eski olmayan. Yurtdışında yapılan evlilik için önce Polonya USC\'sine transkripsiyon gerekir. Ek olarak Polonyalı eşin pasaportu, ortak yaşama belgesi (aynı adreste meldunek), sağlık sigortası, 340 PLN opłata skarbowa *(damga vergisi)*. Maaş ve iş şartı YOKTUR.' },
      { q: 'Kaç yıl evlilikten sonra karta stałego pobytu *(daimi oturum)* başvurusu yapılabilir?', a: 'Polonya vatandaşıyla 3 yıllık evlilik + Polonya\'da karta czasowego pobytu üzerinde kesintisiz 2 yıllık ikamet sonrası. Polonyaca B1 sınavı GEREKMEZ - klasik 5 yıllık yoldan farklı olarak. Mazowieckie\'de değerlendirme süresi 12-18 ay.' },
      { q: 'Fikcyjne małżeństwo *(fiktif evlilik)* nedir ve wojewoda nasıl kontrol eder?', a: 'Ustawa o cudzoziemcach\'in 169. maddesine göre wojewoda, "evliliğin ikamet kurallarını dolanmak için akdedilmesi" durumunda reddedebilir. Risk sinyalleri: düğünden önce 6 aydan kısa tanışıklık, 25 yıldan fazla yaş farkı, ayrı meldunek. Şüphe halinde - wywiad środowiskowy *(komşuluk araştırması)*. Mazowieckie\'de evlilik dosyalarının yaklaşık yüzde 12\'si wywiad\'a yönlendirilir.' },
      { q: 'Boşanma durumunda karta pobytu\'ya ne olur?', a: 'Karta plastik üzerindeki tarihe kadar geçerlidir. Sonraki kart için başka gerekçeyle başvuru gerekir (praca *(çalışma)*, biznes *(iş)*, łączenie rodzin *(aile birleşimi)*). Polonya vatandaşı ortak çocuk varsa - "Polonya vatandaşı çocuğun ebeveyni" gerekçesiyle karta pobytu alınabilir (sözde "çapa-çocuk"). Polonyalı eşin vefatında, evlilik en az 2 yıl sürdüyse karta geçerli kalır.' },
      { q: 'Evlilik gerekçeli karta pobytu için Polonyaca gerekli mi?', a: 'Hayır. Evlilik gerekçeli karta czasowego pobytu *(geçici oturum)* veya karta stałego pobytu *(daimi oturum)* için Polonyaca şart değildir. Sadece vatandaşlık *(uznanie / nadanie obywatelstwa, vatandaşlığa kabul / verme)* için Państwowa Komisja *(Devlet Komisyonu)* B1 belgesi zorunludur.' }
    ]
  },

  // ─── Work permits reform - zezwolenie typu A vs oświadczenie 2026 ──
  'zezwolenie-typu-a-vs-oswiadczenie-2026': {
    ru: [
      { q: 'Кто потерял право на oświadczenie с 1 января 2026?', a: 'Граждане Армении, Азербайджана, Бангладеша, Грузии, Индии, Индонезии, Казахстана, Кыргызстана, Непала, Таджикистана, Туркменистана, Узбекистана и Филиппин. Россия исключена из упрощённой процедуры с 2022 года. Право на oświadczenie сохранили только граждане Беларуси, Молдовы и Украины.' },
      { q: 'Чем zezwolenie typu A отличается от oświadczenia?', a: 'Zezwolenie typu A оформляется у wojewody (воеводы) за 1-3 месяца с госпошлиной 200 PLN, требует test rynku pracy (теста рынка труда) и минимальной зарплаты 4 806 PLN brutto. Oświadczenie оформляется в PUP (Powiatowy Urząd Pracy - районном управлении труда) за 7 рабочих дней с госпошлиной 100 PLN и без привязки к минималке. Срок действия zezwolenia - до 36 месяцев, oświadczenia - до 24 месяцев.' },
      { q: 'Что такое test rynku pracy (тест рынка труда) и нужен ли он всем?', a: 'Test rynku pracy - проверка PUP, можно ли заполнить вакансию поляком или гражданином ЕС. Срок - 2-3 недели. Если такой кандидат найден - воевода может отказать в zezwolenie typu A. Не требуется для около 60 профессий: врачи, медсёстры, программисты, преподаватели, исследователи, спортсмены и другие профессии из списка priorytetowych (приоритетных).' },
      { q: 'Что происходит со старыми oświadczeniami, выданными до 2026?', a: 'Старые oświadczenia остаются в силе до даты их истечения. То есть oświadczenie на 24 месяца, выданное в декабре 2025 для гражданина Грузии, действует до декабря 2027. После истечения - нужно оформить zezwolenie typu A. При смене работодателя - старое сразу прекращает действовать.' },
      { q: 'Сколько добавляется к timeline-у karta pobytu из-за нового требования zezwolenia typu A?', a: 'От 1 до 3 месяцев. Раньше для гражданина Грузии: oświadczenie (7 дней) → подача на karta pobytu. Теперь: zezwolenie typu A (1-3 месяца) → подача. В сумме общий timeline до получения karty pobytu в Mazowieckim - 9-17 месяцев вместо 8-14 раньше.' }
    ],
    uk: [
      { q: 'Хто втратив право на oświadczenie з 1 січня 2026?', a: 'Громадяни Вірменії, Азербайджану, Бангладеш, Грузії, Індії, Індонезії, Казахстану, Киргизстану, Непалу, Таджикистану, Туркменістану, Узбекистану та Філіппін. Право на oświadczenie зберегли лише громадяни Білорусі, Молдови та України.' },
      { q: 'Чим zezwolenie typu A відрізняється від oświadczenia?', a: 'Zezwolenie typu A оформлюється у wojewody за 1-3 місяці з держмитом 200 PLN, вимагає test rynku pracy та мінімальної зарплати 4 806 PLN brutto. Oświadczenie оформлюється в PUP за 7 робочих днів з держмитом 100 PLN. Термін дії zezwolenia — до 36 місяців, oświadczenia — до 24 місяців.' },
      { q: 'Що таке test rynku pracy і чи потрібен він усім?', a: 'Test rynku pracy — перевірка PUP, чи можна заповнити вакансію поляком або громадянином ЄС. Термін — 2-3 тижні. Не потрібен для близько 60 професій: лікарі, медсестри, програмісти, викладачі, дослідники.' },
      { q: 'Що відбувається зі старими oświadczeniami, виданими до 2026 року?', a: 'Старі oświadczenia залишаються чинними до дати їх закінчення. Після закінчення — потрібно оформити zezwolenie typu A. У разі зміни роботодавця — старе oświadczenie одразу припиняє дію.' },
      { q: 'Наскільки збільшується timeline karta pobytu через нову вимогу zezwolenia typu A?', a: 'Від 1 до 3 місяців. Для громадянина Грузії: раніше oświadczenie (7 днів) → подача на karta pobytu. Тепер: zezwolenie typu A (1-3 місяці) → подача. Загальний timeline у Mazowieckim — 9-17 місяців.' }
    ],

    pl: [
      { q: 'Kto stracił prawo do oświadczenia od 1 stycznia 2026?', a: 'Obywatele Armenii, Azerbejdżanu, Bangladeszu, Gruzji, Indii, Indonezji, Kazachstanu, Kirgistanu, Nepalu, Tadżykistanu, Turkmenistanu, Uzbekistanu i Filipin. Rosja jest wyłączona z procedury uproszczonej od 2022. Prawo do oświadczenia zachowali tylko obywatele Białorusi, Mołdawii i Ukrainy.' },
      { q: 'Czym zezwolenie typu A różni się od oświadczenia?', a: 'Zezwolenie typu A wydaje wojewoda w 1-3 miesiące, opłata 200 PLN, wymaga testu rynku pracy i minimum wynagrodzenia 4 806 PLN brutto. Oświadczenie wydaje PUP w 7 dni roboczych, opłata 100 PLN, bez minimum. Termin zezwolenia - do 36 miesięcy, oświadczenia - do 24 miesięcy.' },
      { q: 'Czym jest test rynku pracy i czy wymagany jest dla wszystkich?', a: 'Test rynku pracy to weryfikacja PUP, czy wakat można obsadzić Polakiem lub obywatelem UE. Trwa 2-3 tygodnie. Jeśli znajdzie się taki kandydat - wojewoda może odmówić zezwolenia. Nie wymagany dla około 60 zawodów: lekarze, pielęgniarki, programiści, nauczyciele, naukowcy, sportowcy i inne zawody z listy priorytetowych.' },
      { q: 'Co dzieje się ze starymi oświadczeniami wydanymi przed 2026?', a: 'Stare oświadczenia obowiązują do daty wygaśnięcia. Oświadczenie na 24 miesiące wydane w grudniu 2025 dla obywatela Gruzji działa do grudnia 2027. Po wygaśnięciu - trzeba zezwolenie typu A. Przy zmianie pracodawcy stare od razu przestaje obowiązywać.' },
      { q: 'O ile wydłuża się termin karty pobytu z powodu nowego wymogu zezwolenia typu A?', a: 'O 1-3 miesiące. Wcześniej dla obywatela Gruzji: oświadczenie (7 dni) → wniosek o kartę. Teraz: zezwolenie typu A (1-3 mies.) → wniosek. Łącznie termin do otrzymania karty w Mazowieckim - 9-17 miesięcy zamiast 8-14 wcześniej.' }
    ],
    en: [
      { q: 'Who lost the right to use oświadczenie from 1 January 2026?', a: 'Nationals of Armenia, Azerbaijan, Bangladesh, Georgia, India, Indonesia, Kazakhstan, Kyrgyzstan, Nepal, Tajikistan, Turkmenistan, Uzbekistan and the Philippines. Russia was excluded from the simplified procedure back in 2022. Only nationals of Belarus, Moldova and Ukraine retained oświadczenie eligibility.' },
      { q: 'How does zezwolenie typu A differ from oświadczenie?', a: 'Zezwolenie typu A is issued by the wojewoda over 1-3 months for a 200 PLN stamp duty, requires a labour market test (test rynku pracy) and a minimum salary of 4,806 PLN gross. Oświadczenie is issued by PUP (Powiatowy Urząd Pracy, district labour office) in 7 working days for 100 PLN with no minimum-wage tie. Zezwolenie valid up to 36 months; oświadczenie up to 24 months.' },
      { q: 'What is the test rynku pracy and does everyone need it?', a: 'The labour market test is PUP\'s check on whether a vacancy can be filled by a Pole or EU national. It takes 2-3 weeks. If a suitable candidate is found, the wojewoda may refuse the zezwolenie. Not required for around 60 occupations: doctors, nurses, software developers, teachers, researchers, athletes and others on the priority list.' },
      { q: 'What happens to existing oświadczenia issued before 2026?', a: 'Existing oświadczenia stay valid until their expiry date. A 24-month oświadczenie issued in December 2025 for a Georgian national runs until December 2027. After expiry, a zezwolenie typu A is needed. On a change of employer the old oświadczenie ends immediately.' },
      { q: 'How much does the new zezwolenie typu A requirement add to the karta pobytu timeline?', a: '1 to 3 months. Previously, for a Georgian national: oświadczenie (7 days) → karta pobytu filing. Now: zezwolenie typu A (1-3 months) → filing. The total karta pobytu timeline in Mazowieckie becomes 9-17 months instead of the previous 8-14.' }
    ],
    tr: [
      { q: '1 Ocak 2026\'dan itibaren oświadczenie hakkını kim kaybetti?', a: 'Ermenistan, Azerbaycan, Bangladeş, Gürcistan, Hindistan, Endonezya, Kazakistan, Kırgızistan, Nepal, Tacikistan, Türkmenistan, Özbekistan ve Filipinler vatandaşları. Rusya 2022\'den beri zaten basitleştirilmiş prosedürün dışında. Oświadczenie hakkını yalnızca Belarus, Moldova ve Ukrayna vatandaşları korudu.' },
      { q: 'Zezwolenie typu A ile oświadczenie arasındaki fark nedir?', a: 'Zezwolenie typu A wojewoda *(eyalet valisi)* tarafından 1-3 ayda 200 PLN harçla verilir, rynek pracy *(işgücü piyasası)* testi ve 4.806 PLN brüt asgari maaş gerektirir. Oświadczenie PUP *(Powiatowy Urząd Pracy, ilçe iş kurumu)* tarafından 7 iş gününde 100 PLN harçla verilir, asgariye bağlı değildir. Zezwolenie\'nin geçerlilik süresi 36 aya kadar, oświadczenie\'nin 24 aya kadar.' },
      { q: 'Rynek pracy testi *(işgücü piyasası testi)* nedir ve herkes için gerekli mi?', a: 'Rynek pracy testi, PUP\'un boş pozisyonun Polonyalı veya AB vatandaşıyla doldurulup doldurulamayacağını kontrol ettiği prosedürdür. Süre - 2-3 hafta. Uygun aday bulunursa - wojewoda zezwolenie\'yi reddedebilir. Yaklaşık 60 meslek için gerekli değildir: doktorlar, hemşireler, yazılım geliştiriciler, öğretmenler, araştırmacılar, sporcular ve priorytetowych *(öncelikli)* listedeki diğer meslekler.' },
      { q: '2026 öncesi verilen eski oświadczeniami\'lara ne olur?', a: 'Eski oświadczeniami\'lar geçerlilik tarihine kadar yürürlüktedir. Aralık 2025\'te Gürcü bir vatandaşa 24 ay için verilen oświadczenie, Aralık 2027\'ye kadar geçerlidir. Süresi dolduktan sonra - zezwolenie typu A gerekir. İşveren değişikliğinde eski oświadczenie hemen geçersiz olur.' },
      { q: 'Yeni zezwolenie typu A zorunluluğu karta pobytu timeline\'ına ne kadar ekler?', a: '1 ila 3 ay. Önceden Gürcü vatandaşı için: oświadczenie (7 gün) → karta pobytu başvurusu. Şimdi: zezwolenie typu A (1-3 ay) → başvuru. Mazowieckie\'de karta pobytu alımına kadar toplam süre 9-17 ay (önceden 8-14).' }
    ]
  },

  // ─── Schools, kids ───────────────────────────────────────────────────
  'zapis-detei-v-polskuyu-shkolu': {
    ru: [
      { q: 'Как записать ребёнка-иностранца в польскую школу?', a: 'В urzędzie gminy (городском управлении) подаёте wniosek (заявление) в школу по месту жительства (по obowiązku szkolnym - обязательному школьному обучению). Нужны: meldunek (регистрация по адресу) или подтверждение адреса, паспорт ребёнка, свидетельство о рождении с переводом, прививочная карта, при необходимости - оценки из предыдущей школы.' },
      { q: 'Что такое klasa powitalna (приветственный класс)?', a: 'Klasa powitalna - adaptacyjny класс для иностранных детей, не знающих польского. До года интенсивного польского языка, потом интеграция в обычный класс. Включает социальную поддержку и психолога.' },
      { q: 'Можно ли записать ребёнка в польскую школу без знания польского?', a: 'Да. Obowiązek szkolny (обязательное школьное обучение) действует для всех детей в Польше с 7 до 18 лет, независимо от языка. Школа обязана принять и предоставить дополнительные занятия польским (минимум 4 часа в неделю).' }
    ],
    uk: [
      { q: 'Як записати дитину-іноземця до польської школи?', a: 'В urzędzie gminy або безпосередньо в школі за місцем проживання. Потрібні: meldunek або підтвердження адреси, паспорт дитини, свідоцтво про народження з перекладом, щеплення карта, за потреби — оцінки з попередньої школи.' },
      { q: 'Що таке klasa powitalna?', a: 'Klasa powitalna — адаптаційний клас для іноземних дітей, які не знають польської мови. До року інтенсивного вивчення польської, потім інтеграція у звичайний клас. Включає соціальну підтримку та психолога.' },
      { q: 'Чи можна записати дитину до польської школи без знання польської мови?', a: 'Так. Obowiązek szkolny поширюється на всіх дітей у Польщі від 7 до 18 років, незалежно від мови. Школа зобов\'язана прийняти дитину та забезпечити додаткові заняття з польської мови (мінімум 4 години на тиждень).' }
    ],

    pl: [
      { q: 'Jak zapisać dziecko cudzoziemca do polskiej szkoły?', a: 'W urzędzie gminy lub szkole rejonowej. Dokumenty: meldunek lub potwierdzenie adresu, paszport dziecka, akt urodzenia z tłumaczeniem, karta szczepień, ewentualnie świadectwo z poprzedniej szkoły.' },
      { q: 'Czym jest klasa powitalna?', a: 'Klasa powitalna - klasa adaptacyjna dla cudzoziemskich dzieci bez polskiego. Do roku intensywnej nauki polskiego, potem integracja. Wsparcie społeczne i psycholog w pakiecie.' },
      { q: 'Czy można zapisać dziecko bez znajomości polskiego?', a: 'Tak. Obowiązek szkolny obejmuje wszystkie dzieci 7-18 lat. Szkoła musi przyjąć i zapewnić dodatkowe lekcje polskiego (min. 4 h/tydzień).' }
    ],
    en: [
      { q: 'How do I enrol a foreign child in a Polish school?', a: 'At the gmina (municipal) office or directly in the catchment school. Required: meldunek (address registration) or proof of address, the child\'s passport, birth certificate with translation, vaccination record, and previous school grades if available.' },
      { q: 'What is a klasa powitalna?', a: 'A klasa powitalna (welcome class) - an adaptation class for foreign children without Polish. Up to a year of intensive Polish, then integration into a regular class. Includes social support and a psychologist.' },
      { q: 'Can I enrol a child who doesn\'t speak Polish?', a: 'Yes. Compulsory schooling applies to all children aged 7-18 in Poland regardless of language. The school must accept and provide additional Polish lessons (at least 4 hours weekly).' }
    ],
    tr: [
      { q: 'Yabancı bir çocuğu Polonya okuluna nasıl kaydederim?', a: 'Belediyenin urząd gminy biriminde veya bölge okulunda (rejon okulu) wniosek (başvuru) sunarsınız. Belgeler: meldunek (adres kaydı) veya adres kanıtı, çocuğun pasaportu, doğum belgesi (yeminli tercüme + Türkiye için apostille), aşı kartı, varsa önceki okulun karnesi.' },
      { q: 'Klasa powitalna nedir?', a: 'Klasa powitalna, Polonyaca bilmeyen yabancı çocuklar için açılan adaptasyon sınıfıdır. Bir yıla kadar yoğun Polonyaca eğitimi verilir, ardından çocuk olağan sınıfa geçer. Sosyal destek ve psikolog hizmeti pakettedir.' },
      { q: 'Çocuğum Polonyaca bilmiyorsa okula kaydolabilir mi?', a: 'Evet. Obowiązek szkolny (zorunlu eğitim) Polonya\'daki 7-18 yaş tüm çocukları kapsar; dil koşulu yoktur. Okul kabul etmek ve haftada en az 4 saat ek Polonyaca dersi vermek zorundadır.' }
    ]
  },

  // ─── 2026-Q2 Warsaw series: karta pobytu termin/cost + licence spokes ──
  'zapis-na-karte-pobytu-varshava-2026': {
    ru: [
      { q: 'Как записаться на подачу документов на карту побыту в Варшаве в 2026?', a: 'Отдельная запись на подачу больше не нужна. С 1 декабря 2025 inPOL свёрнут, и wniosek подаётся онлайн через MOS v2.0 (mos.cudzoziemcy.gov.pl). Вы входите через Profil Zaufany, login.gov.pl, e-dowód или mDowód, заполняете заявление, загружаете документы и подписываете его электронно. После подписи получаете UPO с номером дела.' },
      { q: 'Нужно ли ловить очередь (kolejka), как было в inPOL?', a: 'Нет. Старая игра «поймать слот kolejki» осталась в прошлом вместе с inPOL. В MOS v2.0 подача полностью электронная и доступна в любой день, хоть ночью, без визита в урząd. Единственный очный визит, который остался, - это termin на биометрию, и его назначает сам Mazowiecki Urząd, а не заявитель.' },
      { q: 'Когда назначают termin на биометрию после подачи через MOS v2.0?', a: 'После того как воевода примет дело к рассмотрению, в eDoręczenia приходит вызов на сдачу отпечатков пальцев. Дату Mazowiecki Urząd Wojewódzki подбирает сам, обычно через 30-60 дней после UPO. Ловить слот не нужно - термин назначается автоматически. Проверяйте eDoręczenia раз в неделю, чтобы не пропустить вызов.' },
      { q: 'Где в Варшаве сдают биометрию и забирают готовую карту?', a: 'Биометрию в Мазовецком воеводстве принимают по адресу al. Solidarności 81 или в filii на ul. Kruczej 5/11 - конкретный адрес зависит от района вашего meldunku. Готовую karta pobytu выдают по другому адресу - ul. Marszałkowska 3/5, независимо от того, где вы сдавали отпечатки. Для получения карты отдельная запись не нужна.' },
      { q: 'Что делать, если termin на биометрию долго не приходит?', a: 'Сначала проверьте eDoręczenia: вызов приходит именно туда, и SMS дублирует только первое сообщение. Убедитесь, что нет запроса на uzupełnienie - тогда дело «висит». Если справа давно не двигается вообще, можно подать ponaglenie по статье 37 KPA, а при дальнейшем молчании - skargę в Wojewódzki Sąd Administracyjny.' },
      { q: 'Можно ли перенести назначенный termin?', a: 'Да, один раз termin на биометрию переносится бесплатно - через личный кабинет или обращение в урząd. Дальнейшие переносы уже на усмотрение урzędа. Учтите: пока биометрия не сдана, decyzja не выносится, поэтому систематические переносы только затягивают дело. Первый бесплатный перенос лучше держать на действительно непредвиденную ситуацию.' }
    ],
    pl: [
      { q: 'Jak zapisać się na złożenie dokumentów na kartę pobytu w Warszawie w 2026?', a: 'Osobny zapis na złożenie nie jest już potrzebny. Od 1 grudnia 2025 inPOL wyłączono, a wniosek składa się online przez MOS v2.0 (mos.cudzoziemcy.gov.pl). Logujesz się przez Profil Zaufany, login.gov.pl, e-dowód lub mDowód, wypełniasz wniosek, wgrywasz dokumenty i podpisujesz go elektronicznie. Po podpisie otrzymujesz UPO z numerem sprawy.' },
      { q: 'Czy trzeba polować na kolejkę, jak było w inPOL?', a: 'Nie. Stara gra w „złapanie slotu kolejki” odeszła wraz z inPOL. W MOS v2.0 składanie jest w pełni elektroniczne i dostępne każdego dnia, nawet w nocy, bez wizyty w urzędzie. Jedyna wizyta stacjonarna, która została, to termin na biometrię, a wyznacza go sam Mazowiecki Urząd, nie wnioskodawca.' },
      { q: 'Kiedy wyznaczają termin na biometrię po złożeniu przez MOS v2.0?', a: 'Po przyjęciu sprawy do rozpoznania przez wojewodę na eDoręczenia przychodzi wezwanie na pobranie odcisków palców. Datę Mazowiecki Urząd Wojewódzki dobiera sam, zwykle 30-60 dni po UPO. Polowanie na slot jest zbędne - termin wyznaczany jest automatycznie. Zaglądaj na eDoręczenia raz w tygodniu, żeby nie przegapić wezwania.' },
      { q: 'Gdzie w Warszawie pobiera się biometrię i odbiera gotową kartę?', a: 'Biometrię na Mazowszu przyjmują pod adresem al. Solidarności 81 lub w filii przy ul. Kruczej 5/11 - dokładny adres zależy od dzielnicy Twojego meldunku. Gotową kartę pobytu wydają pod innym adresem - ul. Marszałkowska 3/5, niezależnie od tego, gdzie pobierano odciski. Do odbioru karty osobny zapis nie jest potrzebny.' },
      { q: 'Co zrobić, gdy termin na biometrię długo nie przychodzi?', a: 'Najpierw sprawdź eDoręczenia: wezwanie trafia właśnie tam, a SMS dubluje tylko pierwszą wiadomość. Upewnij się, że nie ma wezwania do uzupełnienia braków - wtedy sprawa „wisi”. Jeśli sprawa od dawna w ogóle nie rusza, można złożyć ponaglenie z art. 37 KPA, a przy dalszym milczeniu - skargę do Wojewódzkiego Sądu Administracyjnego.' },
      { q: 'Czy można przenieść wyznaczony termin?', a: 'Tak, raz termin biometrii przekłada się bezpłatnie - przez konto lub kontakt z urzędem. Kolejne przesunięcia zależą już od uznania urzędu. Pamiętaj: dopóki biometria nie jest pobrana, decyzja nie zapada, więc systematyczne przekładanie tylko wydłuża sprawę. Pierwsze bezpłatne przełożenie lepiej zachować na naprawdę nieprzewidzianą sytuację.' }
    ],
    en: [
      { q: 'How do I book an appointment to submit karta pobytu documents in Warsaw in 2026?', a: 'A separate booking to submit is no longer needed. Since 1 December 2025 inPOL has been shut down, and the wniosek is filed online through MOS v2.0 (mos.cudzoziemcy.gov.pl). You log in via Profil Zaufany, login.gov.pl, e-dowód or mDowód, complete the application, upload documents and sign it electronically. After signing you receive a UPO with the case number.' },
      { q: 'Do I still need to hunt for a queue (kolejka) like in inPOL?', a: 'No. The old game of catching a kolejka slot went away with inPOL. In MOS v2.0 filing is fully electronic and available any day, even at night, with no visit to the office. The only in-person visit that remains is the biometrics termin, and the Mazowiecki Urząd sets it itself, not the applicant.' },
      { q: 'When is the biometrics termin assigned after filing through MOS v2.0?', a: 'Once the wojewoda admits the case for examination, a summons for fingerprints arrives in eDoręczenia. The Mazowiecki Urząd Wojewódzki picks the date itself, usually 30-60 days after the UPO. There is no slot to hunt for - the termin is assigned automatically. Check eDoręczenia once a week so you do not miss the summons.' },
      { q: 'Where in Warsaw are biometrics taken and the finished card collected?', a: 'Biometrics in Mazovia are collected at al. Solidarności 81 or at the filia on ul. Krucza 5/11 - the exact address depends on the district of your meldunek. The finished karta pobytu is issued at a different address, ul. Marszałkowska 3/5, regardless of where you gave your prints. No separate booking is needed to collect the card.' },
      { q: 'What should I do if the biometrics termin takes too long?', a: 'First check eDoręczenia: the summons lands there, and an SMS duplicates only the first message. Make sure there is no request to uzupełnienie - if there is, the case is on hold. If the case has not moved at all for a long time, you can file a ponaglenie under article 37 of the KPA, and if silence continues, a skarga before the Wojewódzki Sąd Administracyjny.' },
      { q: 'Can I reschedule the assigned termin?', a: 'Yes, a biometrics termin can be moved once for free - through your account or by contacting the office. Further postponements are at the office\'s discretion. Note: until biometrics are taken, no decyzja is issued, so repeated rescheduling only drags the case out. It is best to keep the first free postponement for a genuinely unforeseen situation.' }
    ],
    tr: [
      { q: '2026 yılında Varşova\'da karta pobytu belgeleri için randevu nasıl alınır?', a: 'Teslim için ayrı bir randevu artık gerekmez. 1 Aralık 2025\'ten itibaren inPOL kapatıldı; wniosek MOS v2.0 (mos.cudzoziemcy.gov.pl) üzerinden çevrimiçi yapılır. Profil Zaufany, login.gov.pl, e-dowód veya mDowód ile giriş yapar, başvuruyu doldurur, belgeleri yükler ve elektronik imzalarsınız. İmzadan sonra dosya numaralı UPO alırsınız.' },
      { q: 'inPOL\'deki gibi kuyruk (kolejka) avlamak hâlâ gerekir mi?', a: 'Hayır. Kuyruk slotu yakalama oyunu inPOL ile birlikte sona erdi. MOS v2.0\'da başvuru tamamen elektroniktir ve idareye gitmeden her gün, hatta gece yapılabilir. Geriye kalan tek yüz yüze ziyaret biyometri termini\'dir ve onu başvuran değil, Mazowiecki Urząd kendisi belirler.' },
      { q: 'MOS v2.0 ile başvurudan sonra biyometri termini ne zaman verilir?', a: 'Wojewoda dosyayı incelemeye aldıktan sonra eDoręczenia\'ya parmak izi çağrısı gelir. Tarihi Mazowiecki Urząd Wojewódzki kendisi seçer, genellikle UPO sonrası 30-60 gün içinde. Avlanacak slot yoktur - termin otomatik verilir. Çağrıyı kaçırmamak için eDoręczenia\'ya haftada bir bakın.' },
      { q: 'Varşova\'da biyometri nerede verilir ve hazır kart nereden alınır?', a: 'Mazowieckie eyaletinde biyometri al. Solidarności 81 adresinde veya ul. Krucza 5/11\'deki filiada alınır; tam adres meldunek\'inizin bağlı olduğu ilçeye göre değişir. Hazır karta pobytu farklı bir adreste, ul. Marszałkowska 3/5\'te verilir; parmak izini nerede verdiğinizden bağımsızdır. Kartı almak için ayrı randevu gerekmez.' },
      { q: 'Biyometri termini uzun süre gelmezse ne yapmalı?', a: 'Önce eDoręczenia\'yı kontrol edin: çağrı oraya düşer ve SMS yalnızca ilk iletiyi tekrarlar. Uzupełnienie (eksik belge) talebi olmadığından emin olun; varsa dosya askıdadır. Dosya uzun süredir hiç ilerlemiyorsa KPA 37. maddeye dayalı ponaglenie verilebilir; sessizlik sürerse Wojewódzki Sąd Administracyjny nezdinde skarga açılır.' },
      { q: 'Verilen termin ertelenebilir mi?', a: 'Evet, biyometri termini bir kez ücretsiz ertelenebilir - hesap üzerinden veya idareyle iletişim kurarak. Sonraki ertelemeler idarenin takdirindedir. Unutmayın: biyometri alınmadan decyzja verilmez, bu yüzden sürekli erteleme dosyayı yalnızca uzatır. İlk ücretsiz ertelemeyi gerçekten beklenmedik bir durum için saklamak en iyisidir.' }
    ],
    uk: [
      { q: 'Як записатися на подання документів на карту побиту у Варшаві у 2026?', a: 'Окремий запис на подання більше не потрібен. З 1 грудня 2025 inPOL згорнуто, а wniosek подається онлайн через MOS v2.0 (mos.cudzoziemcy.gov.pl). Ви входите через Profil Zaufany, login.gov.pl, e-dowód або mDowód, заповнюєте заяву, завантажуєте документи й підписуєте її електронно. Після підпису отримуєте UPO з номером справи.' },
      { q: 'Чи треба ловити чергу (kolejka), як було в inPOL?', a: 'Ні. Стара гра «упіймати слот kolejki» відійшла разом з inPOL. У MOS v2.0 подання повністю електронне й доступне будь-якого дня, навіть уночі, без візиту в urząd. Єдиний очний візит, що залишився, - це termin на біометрію, і його призначає сам Mazowiecki Urząd, а не заявник.' },
      { q: 'Коли призначають termin на біометрію після подання через MOS v2.0?', a: 'Після того як воєвода прийме справу до розгляду, в eDoręczenia приходить виклик на здачу відбитків пальців. Дату Mazowiecki Urząd Wojewódzki добирає сам, зазвичай через 30-60 днів після UPO. Ловити слот не потрібно - termin призначається автоматично. Перевіряйте eDoręczenia раз на тиждень, щоб не пропустити виклик.' },
      { q: 'Де у Варшаві здають біометрію й забирають готову карту?', a: 'Біометрію в Мазовецькому воєводстві приймають за адресою al. Solidarności 81 або у filii на ul. Krucza 5/11 - конкретна адреса залежить від району вашого meldunku. Готову karta pobytu видають за іншою адресою - ul. Marszałkowska 3/5, незалежно від того, де ви здавали відбитки. Для отримання карти окремий запис не потрібен.' },
      { q: 'Що робити, якщо termin на біометрію довго не приходить?', a: 'Спершу перевірте eDoręczenia: виклик приходить саме туди, а SMS дублює лише перше повідомлення. Переконайтеся, що немає запиту на uzupełnienie - тоді справа «висить». Якщо справа давно взагалі не рухається, можна подати ponaglenie за статтею 37 KPA, а за подальшого мовчання - skargę у Wojewódzki Sąd Administracyjny.' },
      { q: 'Чи можна перенести призначений termin?', a: 'Так, один раз termin на біометрію переноситься безкоштовно - через особистий кабінет або звернення в urząd. Подальші перенесення вже на розсуд urzędu. Зважте: поки біометрія не здана, decyzja не виноситься, тому систематичні перенесення лише затягують справу. Перше безкоштовне перенесення краще тримати на справді непередбачувану ситуацію.' }
    ]
  },

  'skolko-stoit-karta-pobytu-varshava-2026': {
    ru: [
      { q: 'Сколько стоит карта побыту в Варшаве в 2026 году?', a: 'Для основания «работа» при самостоятельной подаче жёсткие расходы складываются примерно в 600-900 PLN: opłata skarbowa 340 PLN, пластик 100 PLN, фото и присяжные переводы. Плюс медстраховка 80-150 PLN в месяц, если нет ZUS. С юристом под ключ добавляется от 2 500 PLN сверху.' },
      { q: 'Сколько составляет opłata skarbowa и пластик карты?', a: 'Opłata skarbowa (госпошлина за рассмотрение wniosku) - 340 PLN, вносится при подаче и не возвращается при отказе. Пластик karty - ещё 100 PLN, его платят уже после положительной decyzji. Сама подача через MOS v2.0 онлайн бесплатна, эти платежи идут отдельными переводами.' },
      { q: 'Нужно ли платить за tłumaczenia przysięgłe и сколько?', a: 'Да, присяжные переводы нужны на все документы не на польском - паспорт, диплом, свидетельства. Tłumacz przysięgły ставит печать, без которой воевода документ не примет. Итого обычно 200-400 PLN в зависимости от числа документов. Не переводите паспорт целиком - часто достаточно двух страниц.' },
      { q: 'Сколько стоит медстраховка, если нет ZUS?', a: 'Polisa medyczna с покрытием минимум 30 000 € стоит 80-150 PLN в месяц. Она нужна только тем, кто ещё не подключён к ZUS/NFZ через работу. Поскольку decyzja в Mazowieckim ждётся 8-14 месяцев, страховку держат помесячно весь этот срок - в сумме это заметная статья бюджета.' },
      { q: 'Сколько стоит помощь юриста и когда она оправдана?', a: 'Полное сопровождение под ключ в LegalWin - от 2 500 PLN: диагностика основания, сбор пакета, подача в MOS v2.0, переписка с воеводой. Оправдано при семейном или бизнес-основании, прошлом отказе, неопытном работодателе или сложных нюансах. На фоне 8-14 месяцев ожидания цена ошибки выше цены сопровождения.' },
      { q: 'Какие скрытые расходы возникают при отказе или дозапросе?', a: 'При uzupełnieniu braków возможны новые переводы на 100-200 PLN. При odmowie повторная подача - это ещё одна opłata skarbowa 340 PLN, старая не возвращается. Apostille задним числом - около 60 PLN и недели ожидания. При удалённой работе с юристом может понадобиться нотариальное pełnomocnictwo.' }
    ],
    pl: [
      { q: 'Ile kosztuje karta pobytu w Warszawie w 2026 roku?', a: 'Dla podstawy „praca” przy samodzielnym złożeniu koszty twarde to około 600-900 PLN: opłata skarbowa 340 PLN, plastik 100 PLN, zdjęcia i tłumaczenia przysięgłe. Plus ubezpieczenie 80-150 PLN miesięcznie, jeśli nie ma ZUS. Z prawnikiem pod klucz dochodzi do tego od 2 500 PLN.' },
      { q: 'Ile wynosi opłata skarbowa i plastik karty?', a: 'Opłata skarbowa za rozpatrzenie wniosku to 340 PLN, płaci się przy złożeniu i nie wraca przy odmowie. Plastik karty to kolejne 100 PLN, płatne dopiero po pozytywnej decyzji. Samo złożenie przez MOS v2.0 online jest bezpłatne, te opłaty idą osobnymi przelewami.' },
      { q: 'Czy trzeba płacić za tłumaczenia przysięgłe i ile?', a: 'Tak, tłumaczenia przysięgłe są potrzebne do wszystkich dokumentów nie po polsku - paszport, dyplom, akty. Tłumacz przysięgły przybija pieczęć, bez której wojewoda dokumentu nie przyjmie. Łącznie zwykle 200-400 PLN, zależnie od liczby dokumentów. Nie tłumacz całego paszportu - często wystarczą dwie strony.' },
      { q: 'Ile kosztuje ubezpieczenie medyczne, jeśli nie ma ZUS?', a: 'Polisa medyczna z pokryciem minimum 30 000 € kosztuje 80-150 PLN miesięcznie. Potrzebują jej tylko ci, którzy nie są jeszcze objęci ZUS/NFZ przez pracę. Ponieważ na decyzję w Mazowieckim czeka się 8-14 miesięcy, ubezpieczenie utrzymuje się miesięcznie przez cały ten czas - to zauważalna pozycja budżetu.' },
      { q: 'Ile kosztuje pomoc prawnika i kiedy się opłaca?', a: 'Pełne wsparcie pod klucz w LegalWin to od 2 500 PLN: diagnoza podstawy, zebranie kompletu, złożenie w MOS v2.0, korespondencja z wojewodą. Opłaca się przy podstawie rodzinnej lub biznesowej, wcześniejszej odmowie, niedoświadczonym pracodawcy lub niuansach. Przy 8-14 miesiącach oczekiwania koszt błędu jest wyższy niż koszt wsparcia.' },
      { q: 'Jakie ukryte koszty pojawiają się przy odmowie lub uzupełnieniu?', a: 'Przy uzupełnieniu braków możliwe nowe tłumaczenia za 100-200 PLN. Przy odmowie ponowne złożenie to kolejna opłata skarbowa 340 PLN, stara nie wraca. Apostille z opóźnieniem to około 60 PLN i tygodnie oczekiwania. Przy zdalnej pracy z prawnikiem może być potrzebne notarialne pełnomocnictwo.' }
    ],
    en: [
      { q: 'How much does a karta pobytu in Warsaw cost in 2026?', a: 'For the "work" basis, doing it yourself, hard costs come to roughly 600-900 PLN: opłata skarbowa 340 PLN, the card 100 PLN, photos and sworn translations. Plus medical insurance at 80-150 PLN a month if you have no ZUS. With a lawyer, turnkey support adds from 2,500 PLN on top.' },
      { q: 'How much is the opłata skarbowa and the card itself?', a: 'The opłata skarbowa (stamp duty for processing the wniosek) is 340 PLN, paid at filing and not refunded on refusal. The plastik karty is another 100 PLN, paid only after a positive decyzja. Filing online through MOS v2.0 is free; these payments go as separate transfers.' },
      { q: 'Do you have to pay for tłumaczenia przysięgłe, and how much?', a: 'Yes, sworn translations are needed for every document not in Polish - passport, diploma, certificates. A tłumacz przysięgły applies a seal, without which the wojewoda will not accept the document. The total is usually 200-400 PLN, depending on the number of documents. Do not translate the whole passport - two pages often suffice.' },
      { q: 'How much is medical insurance if you have no ZUS?', a: 'A polisa medyczna with minimum cover of 30,000 € costs 80-150 PLN a month. It is needed only by those not yet covered by ZUS/NFZ through work. Since a decyzja in Mazowieckie takes 8-14 months, the insurance is kept monthly for that whole period - a noticeable budget item.' },
      { q: 'How much does a lawyer cost and when is it worth it?', a: 'Full turnkey support at LegalWin is from 2,500 PLN: diagnosing the basis, gathering the set, filing in MOS v2.0, correspondence with the wojewoda. It is worth it for a family or business basis, a past refusal, an inexperienced employer, or complications. Against 8-14 months of waiting, the cost of a mistake exceeds the cost of support.' },
      { q: 'What hidden costs arise on refusal or a document request?', a: 'A uzupełnienie braków may mean new translations at 100-200 PLN. On an odmowa, re-filing is another opłata skarbowa of 340 PLN, with the old one not refunded. A late apostille is around 60 PLN plus weeks of waiting. Working with a lawyer remotely may require a notarial pełnomocnictwo.' }
    ],
    tr: [
      { q: 'Varşova\'da karta pobytu 2026 yılında ne kadar tutar?', a: '„Çalışma" temeline göre kendiniz başvurursanız sabit masraflar yaklaşık 600-900 PLN\'dir: opłata skarbowa 340 PLN, kart 100 PLN, fotoğraf ve yeminli tercümeler. ZUS yoksa aylık 80-150 PLN sağlık sigortası eklenir. Avukatla anahtar teslim hizmette üstüne 2.500 PLN\'den başlayan bir tutar gelir.' },
      { q: 'Opłata skarbowa ve kart bedeli ne kadardır?', a: 'Wniosek incelemesi için opłata skarbowa 340 PLN\'dir, başvuruda ödenir ve rette iade edilmez. Plastik karty ise 100 PLN olup yalnızca olumlu decyzja sonrası ödenir. MOS v2.0 üzerinden çevrimiçi başvurunun kendisi ücretsizdir; bu ödemeler ayrı havalelerle yapılır.' },
      { q: 'Tłumaczenia przysięgłe ücreti ödenir mi, ne kadar?', a: 'Evet, Lehçe olmayan tüm belgeler için yeminli tercüme gerekir: pasaport, diploma, belgeler. Tłumacz przysięgły bir mühür basar; bu mühür olmadan wojewoda belgeyi kabul etmez. Toplam, belge sayısına göre genellikle 200-400 PLN\'dir. Pasaportun tamamını çevirtmeyin, çoğu zaman iki sayfa yeter.' },
      { q: 'ZUS yoksa sağlık sigortası ne kadar tutar?', a: 'En az 30.000 € teminatlı polisa medyczna aylık 80-150 PLN\'dir. Yalnızca iş üzerinden henüz ZUS/NFZ kapsamında olmayanlar için gerekir. Mazowiecki eyaletinde decyzja 8-14 ay sürdüğü için sigorta bu sürenin tamamında aylık tutulur; bu da gözle görülür bir bütçe kalemidir.' },
      { q: 'Avukat yardımı ne kadar tutar ve ne zaman mantıklıdır?', a: 'LegalWin\'de anahtar teslim tam destek 2.500 PLN\'den başlar: temelin teşhisi, evrak toplama, MOS v2.0 başvurusu, wojewoda ile yazışma. Aile veya iş temeli, geçmiş ret, deneyimsiz işveren ya da özel durumlarda mantıklıdır. 8-14 ay bekleme karşısında hatanın maliyeti, desteğin maliyetini aşar.' },
      { q: 'Ret veya belge talebinde hangi gizli masraflar doğar?', a: 'Uzupełnienie braków, 100-200 PLN tutarında yeni tercüme demek olabilir. Odmowa halinde yeniden başvuru bir 340 PLN\'lik opłata skarbowa daha demektir, eskisi iade edilmez. Sonradan apostil yaklaşık 60 PLN ve haftalarca beklemedir. Avukatla uzaktan çalışırken noter onaylı pełnomocnictwo gerekebilir.' }
    ],
    uk: [
      { q: 'Скільки коштує карта побиту у Варшаві у 2026 році?', a: 'Для підстави «робота» при самостійній подачі тверді витрати складають близько 600-900 PLN: opłata skarbowa 340 PLN, пластик 100 PLN, фото та присяжні переклади. Плюс медстраховка 80-150 PLN на місяць, якщо немає ZUS. З юристом під ключ додається від 2 500 PLN зверху.' },
      { q: 'Скільки становить opłata skarbowa і пластик карти?', a: 'Opłata skarbowa (мито за розгляд wniosku) - 340 PLN, вноситься при подачі й не повертається при відмові. Пластик karty - ще 100 PLN, його сплачують уже після позитивної decyzji. Сама подача через MOS v2.0 онлайн безкоштовна, ці платежі йдуть окремими переказами.' },
      { q: 'Чи потрібно платити за tłumaczenia przysięgłe і скільки?', a: 'Так, присяжні переклади потрібні на всі документи не польською - паспорт, диплом, свідоцтва. Tłumacz przysięgły ставить печатку, без якої воєвода документ не прийме. Разом зазвичай 200-400 PLN залежно від кількості документів. Не перекладайте весь паспорт - часто достатньо двох сторінок.' },
      { q: 'Скільки коштує медстраховка, якщо немає ZUS?', a: 'Polisa medyczna з покриттям мінімум 30 000 € коштує 80-150 PLN на місяць. Вона потрібна лише тим, хто ще не підключений до ZUS/NFZ через роботу. Оскільки decyzja в Mazowieckim чекається 8-14 місяців, страховку тримають помісячно весь цей строк - це помітна стаття бюджету.' },
      { q: 'Скільки коштує допомога юриста і коли вона виправдана?', a: 'Повний супровід під ключ у LegalWin - від 2 500 PLN: діагностика підстави, збір пакета, подача в MOS v2.0, листування з воєводою. Виправдано при сімейній чи бізнес-підставі, минулій відмові, недосвідченому роботодавці або складних нюансах. На тлі 8-14 місяців очікування ціна помилки вища за ціну супроводу.' },
      { q: 'Які приховані витрати виникають при відмові чи дозапиті?', a: 'При uzupełnieniu braków можливі нові переклади на 100-200 PLN. При odmowie повторна подача - це ще одна opłata skarbowa 340 PLN, стара не повертається. Apostille заднім числом - близько 60 PLN і тижні очікування. При віддаленій роботі з юристом може знадобитися нотаріальне pełnomocnictwo.' }
    ]
  },

  'obmen-ukrainskih-prav-na-polskie-2026': {
    ru: [
      { q: 'Нужно ли менять украинские права на польские, если есть PESEL UKR?', a: 'Для управления личным авто украинские права остаются действительными до конца временной защиты (горизонт - март 2027), даже без обмена. Но это исключение касается только вождения для себя. Чтобы работать водителем - курьером, в такси, дальнобойщиком - польские права нужны всегда, независимо от PESEL UKR.' },
      { q: 'Нужно ли сдавать экзамены при обмене украинских прав?', a: 'Для категорий A и B - нет. Украина в Венской конвенции 1968 года, поэтому обмен идёт без теории и практики, достаточно подтверждения от МВД Украины. Для профессиональных категорий C, D, C+E, D+E сам обмен тоже без экзаменов, но для работы дополнительно нужны Kod 95, badania lekarskie и badania psychologiczne.' },
      { q: 'Сколько стоит обмен украинских прав в Польше?', a: 'Госпошлина - 100,50 PLN (100,00 opłata komunikacyjna + 0,50 opłata ewidencyjna). Присяжный перевод с украинского - 60-80 PLN. Итого для категории B обычно 160-210 PLN. Для C/D добавляются медкомиссия 180-250 PLN и психолог 130-180 PLN. С сопровождением юриста - плюс 400-600 PLN.' },
      { q: 'Сколько времени занимает обмен украинских прав?', a: 'Обычно 30-60 дней - это самый быстрый канал среди стран СНГ. МВД Украины отвечает на запрос польского urzędu через прямой онлайн-канал в системе CEPiK. Старые бумажные права могут потребовать дополнительного подтверждения выдачи, что добавит несколько недель. Статус проверяется на info-car.pl по PESEL и фамилии.' },
      { q: 'Где в Варшаве поменять украинские права?', a: 'В Wydziale Komunikacji того Urzędu Dzielnicy, к которому относится ваш meldunek: Śródmieście (Nowogrodzka 43), Mokotów (Rakowiecka 25/27), Ursynów (KEN 61), Wola (al. Solidarności 90), Praga-Południe (Grochowska 274), Bemowo (Powstańców Śląskich 70). Запись через warszawa19115.pl; в горячий сезон - за 3 недели.' },
      { q: 'Что делать с просроченными украинскими правами?', a: 'Польша не обменивает просроченное удостоверение. Сначала продлите его - через консульство Украины; часть продлений возможна и из Украины. Только после восстановления срока действия можно подавать на обмен. Если оригинал утерян, его сначала восстанавливают в Украине, либо сдают экзамены в WORD как новый кандидат.' }
    ],
    en: [
      { q: 'Do I need to exchange a Ukrainian licence if I have PESEL UKR?', a: 'For driving a private car, the Ukrainian licence stays valid until the end of temporary protection (horizon - March 2027), even without exchange. But this exception covers personal driving only. To work as a driver - courier, taxi, truck driver - a Polish licence is always required, regardless of PESEL UKR.' },
      { q: 'Do I have to take exams to exchange a Ukrainian licence?', a: 'For categories A and B - no. Ukraine is a party to the 1968 Vienna Convention, so the exchange happens without theory or practical exams; confirmation from Ukraine\'s MIA is enough. For professional categories C, D, C+E, D+E the exchange is also exam-free, but to work you additionally need Kod 95, badania lekarskie, and badania psychologiczne.' },
      { q: 'How much does exchanging a Ukrainian licence in Poland cost?', a: 'The fee is 100.50 PLN (100.00 opłata komunikacyjna + 0.50 opłata ewidencyjna). A sworn translation from Ukrainian is 60-80 PLN. Total for category B is usually 160-210 PLN. For C/D add badania lekarskie 180-250 PLN and badania psychologiczne 130-180 PLN. With a lawyer - plus 400-600 PLN.' },
      { q: 'How long does the Ukrainian licence exchange take?', a: 'Usually 30-60 days - the fastest channel among CIS countries. Ukraine\'s MIA answers the Polish office\'s request via a direct online channel in the CEPiK system. Old paper licences may require extra confirmation of issuance, adding a few weeks. You can check the status on info-car.pl by PESEL and surname.' },
      { q: 'Where in Warsaw can I exchange a Ukrainian licence?', a: 'At the Wydział Komunikacji of the Urząd Dzielnicy your meldunek belongs to: Śródmieście (Nowogrodzka 43), Mokotów (Rakowiecka 25/27), Ursynów (KEN 61), Wola (al. Solidarności 90), Praga-Południe (Grochowska 274), Bemowo (Powstańców Śląskich 70). Book via warszawa19115.pl; in the hot season - 3 weeks ahead.' },
      { q: 'What should I do with an expired Ukrainian licence?', a: 'Poland does not exchange an expired document. First renew it - via the Ukrainian consulate; some renewals are also possible from Ukraine. Only once validity is restored can you apply for the exchange. If the original is lost, you first restore it in Ukraine or sit the exams at WORD as a new candidate.' }
    ],
    uk: [
      { q: 'Чи потрібно міняти українські права на польські, якщо є PESEL UKR?', a: 'Для керування особистим авто українські права залишаються дійсними до завершення тимчасового захисту (горизонт - березень 2027), навіть без обміну. Але цей виняток стосується лише водіння для себе. Щоб працювати водієм - кур\'єром, у таксі, далекобійником - польські права потрібні завжди, незалежно від PESEL UKR.' },
      { q: 'Чи потрібно складати іспити при обміні українських прав?', a: 'Для категорій A та B - ні. Україна є учасницею Віденської конвенції 1968 року, тому обмін іде без теорії та практики, достатньо підтвердження від МВС України. Для професійних категорій C, D, C+E, D+E сам обмін теж без іспитів, але для роботи додатково потрібні Kod 95, badania lekarskie та badania psychologiczne.' },
      { q: 'Скільки коштує обмін українських прав у Польщі?', a: 'Держмито - 100,50 PLN (100,00 opłata komunikacyjna + 0,50 opłata ewidencyjna). Присяжний переклад з української - 60-80 PLN. Разом для категорії B зазвичай 160-210 PLN. Для C/D додаються медкомісія 180-250 PLN і психолог 130-180 PLN. Із супроводом юриста - плюс 400-600 PLN.' },
      { q: 'Скільки часу займає обмін українських прав?', a: 'Зазвичай 30-60 днів - це найшвидший канал серед країн СНД. МВС України відповідає на запит польського urzędu через прямий онлайн-канал у системі CEPiK. Старі паперові права можуть потребувати додаткового підтвердження видачі, що додасть кілька тижнів. Статус перевіряється на info-car.pl за PESEL та прізвищем.' },
      { q: 'Де у Варшаві поміняти українські права?', a: 'У Wydziale Komunikacji того Urzędu Dzielnicy, до якого належить ваш meldunek: Śródmieście (Nowogrodzka 43), Mokotów (Rakowiecka 25/27), Ursynów (KEN 61), Wola (al. Solidarności 90), Praga-Południe (Grochowska 274), Bemowo (Powstańців Śląskich 70). Запис через warszawa19115.pl; у гарячий сезон - за 3 тижні.' },
      { q: 'Що робити з простроченими українськими правами?', a: 'Польща не обмінює прострочене посвідчення. Спершу подовжіть його - через консульство України; частина подовжень можлива і з України. Тільки після відновлення строку дії можна подавати на обмін. Якщо оригінал втрачено, його спершу відновлюють в Україні, або складають іспити у WORD як новий кандидат.' }
    ]
  },

  'obmen-belorusskih-prav-na-polskie-2026': {
    ru: [
      { q: 'Нужно ли сдавать экзамены при обмене белорусских прав?', a: 'Нет. Беларусь - участник Венской конвенции 1968 года, поэтому для категорий A и B обмен идёт без теории и практики. Экзамены не требуются. Дополнительные требования возникают только для профессиональных категорий C, D, C+E, D+E: там нужны Kod 95 и действующие badania - медицинская и психологическая справки.' },
      { q: 'Сколько ждать обмен белорусских прав и почему дольше украинских?', a: 'Обычно 60-90 дней против украинских 30-60. Причина в канале проверки: запрос на подтверждение подлинности идёт в МВД Беларуси через консульство в Варшаве или через urząd по системе CEPiK, и этот межведомственный канал отвечает медленнее, чем прямая система МВД Украины. Статус отслеживается на info-car.pl по PESEL и фамилии.' },
      { q: 'Нужен ли apostille на белорусские права старого образца?', a: 'Может понадобиться. По старым форматам выше риск, что urząd запросит дополнительное подтверждение выдачи - apostille (~60 PLN) или нотариально заверенную копию с подтверждением. Новые пластиковые ID-1 права обычно проходят без apostille. Если права старого образца, мы советуем готовить apostille заранее, параллельно с переводом, чтобы не терять 2-3 месяца.' },
      { q: 'Сколько стоит обмен белорусских прав в Польше?', a: 'Для категории B обычно 180-260 PLN: госпошлина 100,50 PLN (opłata komunikacyjna плюс ewidencyjna) и присяжный перевод с белорусского 80-110 PLN. Если нужен apostille - добавьте ~60 PLN и время. Для категорий C, D с badania выходит 490-740 PLN. Сопровождение юриста - плюс 400-600 PLN.' },
      { q: 'Где поменять белорусские права в Варшаве?', a: 'В Wydziale Komunikacji того Urzędu Dzielnicy, к которому относится ваш meldunek: Śródmieście - ul. Nowogrodzka 43, Mokotów - ul. Rakowiecka 25/27, Ursynów - al. KEN 61, Wola - al. Solidarności 90, Praga-Południe - ul. Grochowska 274, Bemowo - ul. Powstańców Śląskich 70. Запись через warszawa19115.pl, в горячий сезон - за 3 недели.' },
      { q: 'Что делать, если МВД Беларуси не подтверждает выдачу прав?', a: 'В этом случае urząd может потребовать дополнительное доказательство выдачи: apostille на удостоверение или справку из Беларуси, либо нотариально заверенную копию с подтверждением. Чтобы дело не зависло, мы советуем готовить apostille заранее. Если процесс затянулся дольше нормы, имеет смысл подключить юриста для контроля сроков и переписки с urzędem.' }
    ],
    en: [
      { q: 'Do you have to take exams when exchanging a Belarusian licence?', a: 'No. Belarus is a party to the 1968 Vienna Convention, so for categories A and B the exchange happens without theory or practice. No exams are required. Extra requirements arise only for the professional categories C, D, C+E, D+E: there you need Kod 95 and valid badania - medical and psychological certificates.' },
      { q: 'How long does a Belarusian licence exchange take, and why longer than Ukrainian?', a: 'Usually 60-90 days versus the Ukrainian 30-60. The reason is the verification channel: the authenticity request goes to the Belarusian MIA via the Warsaw consulate or through the urząd over the CEPiK system, and this inter-agency channel responds more slowly than Ukraine\'s direct MIA system. You track status on info-car.pl by PESEL and surname.' },
      { q: 'Is an apostille needed for an older-format Belarusian licence?', a: 'It may be. Older formats carry a higher risk that the urząd will request additional proof of issuance - an apostille (~60 PLN) or a notarised copy with confirmation. New plastic ID-1 licences usually pass without an apostille. If your licence is an older format, we advise preparing the apostille in advance, in parallel with the translation, to avoid losing 2-3 months.' },
      { q: 'How much does a Belarusian licence exchange cost in Poland?', a: 'For category B usually 180-260 PLN: the 100.50 PLN fee (opłata komunikacyjna plus ewidencyjna) and a sworn translation from Belarusian at 80-110 PLN. If an apostille is needed, add ~60 PLN and time. For categories C, D with badania it comes to 490-740 PLN. Lawyer support is a further 400-600 PLN.' },
      { q: 'Where do you exchange a Belarusian licence in Warsaw?', a: 'At the Wydział Komunikacji of the Urząd Dzielnicy your meldunek belongs to: Śródmieście - ul. Nowogrodzka 43, Mokotów - ul. Rakowiecka 25/27, Ursynów - al. KEN 61, Wola - al. Solidarności 90, Praga-Południe - ul. Grochowska 274, Bemowo - ul. Powstańców Śląskich 70. Book via warszawa19115.pl; in the busy season, 3 weeks ahead.' },
      { q: 'What if the Belarusian MIA does not confirm the licence was issued?', a: 'In that case the urząd may require additional proof of issuance: an apostille on the licence or a certificate from Belarus, or a notarised copy with confirmation. To keep the case from stalling, we advise preparing the apostille in advance. If the process drags on beyond the norm, it makes sense to bring in a lawyer to manage timelines and correspondence with the urząd.' }
    ],
    uk: [
      { q: 'Чи потрібно складати іспити при обміні білоруських прав?', a: 'Ні. Білорусь - учасниця Віденської конвенції 1968 року, тому для категорій A і B обмін іде без теорії та практики. Іспити не потрібні. Додаткові вимоги виникають лише для професійних категорій C, D, C+E, D+E: там потрібні Kod 95 і чинні badania - медична та психологічна довідки.' },
      { q: 'Скільки чекати обмін білоруських прав і чому довше за українські?', a: 'Зазвичай 60-90 днів проти українських 30-60. Причина в каналі перевірки: запит на справжність іде до МВС Білорусі через консульство у Варшаві або через urząd системою CEPiK, і цей міжвідомчий канал відповідає повільніше, ніж пряма система МВС України. Статус відстежуєте на info-car.pl за PESEL і прізвищем.' },
      { q: 'Чи потрібен apostille на білоруські права старого зразка?', a: 'Може знадобитися. За старими форматами вищий ризик, що urząd запросить додаткове підтвердження видачі - apostille (~60 PLN) або нотаріально завірену копію з підтвердженням. Нові пластикові права ID-1 зазвичай проходять без apostille. Якщо права старого зразка, радимо готувати apostille заздалегідь, паралельно з перекладом, щоб не втратити 2-3 місяці.' },
      { q: 'Скільки коштує обмін білоруських прав у Польщі?', a: 'Для категорії B зазвичай 180-260 PLN: держмито 100,50 PLN (opłata komunikacyjna плюс ewidencyjna) і присяжний переклад з білоруської 80-110 PLN. Якщо потрібен apostille - додайте ~60 PLN і час. Для категорій C, D з badania виходить 490-740 PLN. Супровід юриста - плюс 400-600 PLN.' },
      { q: 'Де поміняти білоруські права у Варшаві?', a: 'У Wydziale Komunikacji того Urzędu Dzielnicy, до якого належить ваш meldunek: Śródmieście - ul. Nowogrodzka 43, Mokotów - ul. Rakowiecka 25/27, Ursynów - al. KEN 61, Wola - al. Solidarności 90, Praga-Południe - ul. Grochowska 274, Bemowo - ul. Powstańців Śląskich 70. Запис через warszawa19115.pl, у гарячий сезон - за 3 тижні.' },
      { q: 'Що робити, якщо МВС Білорусі не підтверджує видачу прав?', a: 'У цьому разі urząd може вимагати додатковий доказ видачі: apostille на посвідченні або довідці з Білорусі, або нотаріально завірену копію з підтвердженням. Щоб справа не зависла, радимо готувати apostille заздалегідь. Якщо процес затягнувся довше норми, має сенс підключити юриста для контролю строків і листування з urzędem.' }
    ]
  },

  'obmen-rossijskih-prav-na-polskie-2026': {
    ru: [
      { q: 'Можно ли обменять российские права на польские без экзамена?', a: 'Да. Россия - участник Венской конвенции о дорожном движении 1968 года, поэтому для категорий A и B обмен идёт без теории и практики, на той же правовой базе, что украинские и белорусские права. Экзамены не нужны. Для профессиональных категорий C, D, C+E, D+E дополнительно потребуются badania и сертификат Kod 95.' },
      { q: 'Сколько времени занимает обмен российских прав в 2026?', a: 'Реалистично 90-120+ дней, иногда дольше. Прямого электронного канала верификации с Россией у польской системы CEPiK нет, поэтому запрос на подтверждение выдачи идёт консульским путём и обрабатывается медленнее, чем для соседних стран. Статус можно отслеживать на info-car.pl по PESEL и фамилии.' },
      { q: 'Нужен ли apostille или нотариальное подтверждение российских прав?', a: 'Не всегда, но риск выше, чем для соседних стран. Поскольку прямого ответа из реестра нет, urząd чаще запрашивает дополнительное доказательство подлинности - apostille или нотариальное подтверждение, особенно для прав старого образца. Новые пластиковые права формата ID-1 обычно принимаются без этого. Оформляйте apostille заранее.' },
      { q: 'Сколько стоит обмен российских прав в Польше?', a: 'Для категории B - около 180-270 PLN: opłata komunikacyjna 100,00 + opłata ewidencyjna 0,50 + tłumaczenie przysięgłe 70-110 PLN. Apostille, если потребуется, добавит ~60 PLN. Для категорий C/D с медициной выходит 490-740 PLN. Сопровождение юриста - плюс 400-600 PLN.' },
      { q: 'Где в Варшаве поменять российские права?', a: 'В Wydziale Komunikacji того Urzędu Dzielnicy, к которому относится ваш meldunek: Śródmieście (Nowogrodzka 43), Mokotów (Rakowiecka 25/27), Ursynów (KEN 61), Wola (Solidarności 90), Praga-Południe (Grochowska 274), Bemowo (Powstańców Śląskich 70). Запись - через warszawa19115.pl, в горячий сезон за 3 недели.' },
      { q: 'Действительны ли российские права в Польше первые 185 дней?', a: 'Да, для управления автомобилем российские права действуют, пока ваше фактическое проживание в Польше не превысило 185 дней за календарный год. После этого порога вы обязаны обменять их на польские, и иностранные права теряют силу для вождения. Просрочка - штраф от 200 до 2 000 PLN.' }
    ],
    en: [
      { q: 'Can you exchange a Russian licence for a Polish one without an exam?', a: 'Yes. Russia is a party to the 1968 Vienna Convention on Road Traffic, so for categories A and B the exchange happens without theory or practice, on the same legal basis as Ukrainian and Belarusian licences. No exams are needed. Professional categories C, D, C+E, D+E additionally require badania and a Kod 95 certificate.' },
      { q: 'How long does a Russian licence exchange take in 2026?', a: 'Realistically 90-120+ days, sometimes longer. The Polish CEPiK system has no direct electronic verification channel with Russia, so the issuance-confirmation request goes via a consular route and is processed more slowly than for neighbouring countries. You can track the status on info-car.pl by PESEL and surname.' },
      { q: 'Is an apostille or notarised confirmation of the Russian licence required?', a: 'Not always, but the risk is higher than for neighbouring countries. Because there is no direct registry answer, the urząd more often requests additional proof of authenticity - an apostille or a notarised confirmation, especially for older-format licences. New plastic ID-1 licences are usually accepted without it. Obtain the apostille in advance.' },
      { q: 'How much does a Russian licence exchange cost in Poland?', a: 'For category B, about 180-270 PLN: opłata komunikacyjna 100.00 + opłata ewidencyjna 0.50 + tłumaczenie przysięgłe 70-110 PLN. An apostille, if needed, adds about 60 PLN. For categories C/D with medical exams it comes to 490-740 PLN. Lawyer assistance is an extra 400-600 PLN.' },
      { q: 'Where in Warsaw can you exchange a Russian licence?', a: 'At the Wydział Komunikacji of the Urząd Dzielnicy that covers your meldunek: Śródmieście (Nowogrodzka 43), Mokotów (Rakowiecka 25/27), Ursynów (KEN 61), Wola (Solidarności 90), Praga-Południe (Grochowska 274), Bemowo (Powstańców Śląskich 70). Book via warszawa19115.pl, 3 weeks ahead in the busy season.' },
      { q: 'Is a Russian licence valid in Poland for the first 185 days?', a: 'Yes, for driving a Russian licence is valid until your actual residence in Poland exceeds 185 days in a calendar year. Past that threshold you must exchange it for a Polish one, and the foreign licence loses its force for driving. Driving late carries a fine of 200 to 2,000 PLN.' }
    ],
    uk: [
      { q: 'Чи можна обміняти російські права на польські без іспиту?', a: 'Так. Росія - учасниця Віденської конвенції про дорожній рух 1968 року, тож для категорій A та B обмін відбувається без теорії та практики, на тій самій правовій базі, що українські та білоруські права. Іспити не потрібні. Для категорій C, D, C+E, D+E додатково потрібні badania і сертифікат Kod 95.' },
      { q: 'Скільки часу займає обмін російських прав у 2026?', a: 'Реалістично 90-120+ днів, іноді довше. Прямого електронного каналу верифікації з Росією у польської системи CEPiK немає, тож запит на підтвердження видачі йде консульським шляхом і обробляється повільніше, ніж для сусідніх країн. Статус можна відстежувати на info-car.pl за PESEL і прізвищем.' },
      { q: 'Чи потрібен apostille або нотаріальне підтвердження російських прав?', a: 'Не завжди, але ризик вищий, ніж для сусідніх країн. Оскільки прямої відповіді з реєстру немає, urząd частіше запитує додатковий доказ автентичності - apostille або нотаріальне підтвердження, особливо для прав старого зразка. Нові пластикові права формату ID-1 зазвичай приймаються без цього. Оформлюйте apostille заздалегідь.' },
      { q: 'Скільки коштує обмін російських прав у Польщі?', a: 'Для категорії B - близько 180-270 PLN: opłata komunikacyjna 100,00 + opłata ewidencyjna 0,50 + tłumaczenie przysięгłe 70-110 PLN. Apostille, якщо знадобиться, додасть ~60 PLN. Для категорій C/D з медициною виходить 490-740 PLN. Супровід юриста - плюс 400-600 PLN.' },
      { q: 'Де у Варшаві поміняти російські права?', a: 'У Wydziale Komunikacji того Urzędu Dzielnicy, до якого належить ваш meldunek: Śródmieście (Nowogrodzka 43), Mokotów (Rakowiecka 25/27), Ursynów (KEN 61), Wola (Solidarності 90), Praga-Południe (Grochowska 274), Bemowo (Powstańців Śląskich 70). Запис - через warszawa19115.pl, у гарячий сезон за 3 тижні.' },
      { q: 'Чи дійсні російські права в Польщі перші 185 днів?', a: 'Так, для керування автомобілем російські права діють, доки ваше фактичне проживання в Польщі не перевищило 185 днів за календарний рік. Після цього порогу ви зобов\'язані обміняти їх на польські, і іноземні права втрачають силу для водіння. Прострочення - штраф від 200 до 2 000 PLN.' }
    ]
  },

  // ─── 2026-Q2 professional-driver series: karta kierowcy + pillar ──────
  'karta-kierowcy-tachograf-polsha-2026': {
    ru: [
      { q: 'Что такое karta kierowcy и зачем она нужна?', a: 'Karta kierowcy - это персональная чип-карта для тахографа цифрового (tachograf cyfrowy), которая записывает время вождения и отдыха водителя. Это не права и не Kod 95, а отдельный третий документ. Без вставленной карты тахограф фиксирует нарушение, и при контроле ITD это штраф. Карта обязательна для коммерческих перевозок категориями C/CE/D/DE.' },
      { q: 'Чем karta kierowcy отличается от Kod 95 и водительских прав?', a: 'Профессиональному водителю нужны все три документа сразу. Prawo jazdy разрешает управлять грузовиком или автобусом, Kod 95 разрешает делать это за деньги (коммерческие перевозки в ЕС), а karta kierowcy идентифицирует водителя в тахографе и ведёт учёт времени работы. Они не заменяют друг друга, и отсутствие любого останавливает работу.' },
      { q: 'Сколько стоит karta kierowcy в Польше в 2026?', a: 'Карта стоит 172,20 PLN brutto - это 140,00 PLN netto плюс 23% VAT. Одна оплата за одно заявление, доставка почтой включена. Если заявление отклонят, PWPW возвращает не всё: удерживается 25,83 PLN. Поэтому документы стоит подготовить аккуратно с первого раза, чтобы не платить повторно.' },
      { q: 'Может ли иностранец получить karta kierowcy без обмена прав на польские?', a: 'Да, с 19 мая 2023 можно подать с иностранными правами напрямую. К заявлению добавляют подтверждение подлинности прав - одно из четырёх: данные RESPER, подтверждение от органа выдачи, информация с портала страны либо польское świadectwo kierowcy или карта Kod 95 из ЕС. Последний вариант быстрее. Но при проживании свыше 185 дней права всё равно надо обменять.' },
      { q: 'Сколько ждать изготовление карты водителя?', a: 'Онлайн через info-car с Profil Zaufany карту делают около 7 рабочих дней - система проверяет данные сама. Бумажное заявление, отправленное в PWPW почтой, занимает до 30 dni из-за пересылки и ручной обработки. Статус готовности отслеживается на info-car.pl. Карта действует 5 лет независимо от срока прав и Kod 95.' },
      { q: 'Как продлить (odnowić) karta kierowcy?', a: 'Карта не продлевается автоматически. Заявление подают заново не позднее чем за 15 рабочих дней до окончания срока, а сделать это можно уже за 60 дней до конца. Стоимость и срок те же: 172,20 PLN и снова 5 лет. Онлайн через info-car быстрее. Если упустить срок, карта станет недействительной и работать с тахографом легально нельзя.' }
    ],
    pl: [
      { q: 'Czym jest karta kierowcy i do czego służy?', a: 'Karta kierowcy to osobista karta z chipem do tachografu cyfrowego (tachograf cyfrowy), która rejestruje czas jazdy i odpoczynku kierowcy. To nie prawo jazdy i nie Kod 95, lecz osobny, trzeci dokument. Bez włożonej karty tachograf zapisuje naruszenie, a podczas kontroli ITD to kara. Karta jest obowiązkowa przy przewozach komercyjnych kategoriami C/CE/D/DE.' },
      { q: 'Czym karta kierowcy różni się od Kodu 95 i prawa jazdy?', a: 'Zawodowy kierowca potrzebuje wszystkich trzech dokumentów naraz. Prawo jazdy pozwala kierować ciężarówką lub autobusem, Kod 95 pozwala robić to zarobkowo (przewozy komercyjne w UE), a karta kierowcy identyfikuje kierowcę w tachografie i prowadzi ewidencję czasu pracy. Nie zastępują się nawzajem, a brak któregokolwiek zatrzymuje pracę.' },
      { q: 'Ile kosztuje karta kierowcy w Polsce w 2026?', a: 'Karta kosztuje 172,20 PLN brutto - to 140,00 PLN netto plus 23% VAT. Jedna płatność za jeden wniosek, dostawa pocztą wliczona. Jeśli wniosek zostanie odrzucony, PWPW nie zwraca całości - zatrzymuje 25,83 PLN. Dlatego dokumenty warto przygotować starannie za pierwszym razem, by nie płacić ponownie.' },
      { q: 'Czy cudzoziemiec może uzyskać kartę kierowcy bez wymiany prawa jazdy?', a: 'Tak, od 19 maja 2023 można złożyć wniosek z zagranicznym prawem jazdy bezpośrednio. Do wniosku dołącza się potwierdzenie autentyczności - jedno z czterech: dane RESPER, potwierdzenie organu wydającego, informacja z portalu kraju albo polskie świadectwo kierowcy lub karta Kod 95 z UE. Ta ostatnia droga jest szybsza. Ale przy pobycie ponad 185 dni prawo jazdy i tak trzeba wymienić.' },
      { q: 'Ile trwa wydanie karty kierowcy?', a: 'Online przez info-car z Profilem Zaufanym kartę wydaje się około 7 dni roboczych - system sam weryfikuje dane. Wniosek papierowy wysłany pocztą do PWPW trwa do 30 dni z powodu przesyłki i ręcznego przetwarzania. Status gotowości sprawdza się na info-car.pl. Karta jest ważna 5 lat, niezależnie od ważności prawa jazdy i Kodu 95.' },
      { q: 'Jak odnowić kartę kierowcy?', a: 'Karta nie odnawia się automatycznie. Wniosek składa się ponownie nie później niż 15 dni roboczych przed upływem ważności, a można to zrobić już 60 dni przed końcem. Koszt i okres są takie same: 172,20 PLN i kolejne 5 lat. Online przez info-car jest szybciej. Jeśli przegapisz termin, karta straci ważność i nie można legalnie pracować z tachografem.' }
    ],
    en: [
      { q: 'What is a karta kierowcy and why do you need it?', a: 'A karta kierowcy is a personal chip card for the digital tachograph (tachograf cyfrowy) that records the driver\'s driving and rest time. It is not a licence and not Code 95, but a separate third document. Without the card inserted, the tachograph logs a violation, and on an ITD check that means a fine. The card is mandatory for commercial transport in categories C/CE/D/DE.' },
      { q: 'How does karta kierowcy differ from Code 95 and the driving licence?', a: 'A professional driver needs all three documents at once. The prawo jazdy lets you drive a truck or bus, Code 95 lets you do it for money (commercial transport in the EU), and the karta kierowcy identifies the driver in the tachograph and records working time. They do not replace one another, and missing any one of them stops you from working.' },
      { q: 'How much does a karta kierowcy cost in Poland in 2026?', a: 'The card costs 172.20 PLN gross - that is 140.00 PLN net plus 23% VAT. One payment per application, postal delivery included. If the application is rejected, PWPW does not refund everything - it keeps 25.83 PLN. So it is worth preparing the documents carefully the first time to avoid paying again.' },
      { q: 'Can a foreigner get a karta kierowcy without exchanging the licence?', a: 'Yes, since 19 May 2023 you may apply with a foreign licence directly. You attach proof of authenticity - one of four: RESPER data, confirmation from the issuing authority, information from the country\'s portal, or a Polish świadectwo kierowcy or an EU Code 95 card. The last route is the fastest. But if you live in Poland over 185 days, you must exchange the licence anyway.' },
      { q: 'How long does it take to issue a driver card?', a: 'Online via info-car with Profil Zaufany, the card is issued in about 7 working days - the system verifies the data itself. A paper application posted to PWPW takes up to 30 days due to mailing and manual processing. The readiness status is tracked on info-car.pl. The card is valid for 5 years, independent of the licence\'s or Code 95\'s validity.' },
      { q: 'How do you renew (odnowić) a karta kierowcy?', a: 'The card does not renew automatically. You reapply no later than 15 working days before expiry, and you may do so as early as 60 days before. The cost and term are the same: 172.20 PLN and another 5 years. Online via info-car is faster. If you miss the deadline, the card becomes invalid and you cannot legally work with the tachograph.' }
    ],
    tr: [
      { q: 'Karta kierowcy nedir ve ne işe yarar?', a: 'Karta kierowcy, dijital takograf (tachograf cyfrowy) için kişisel bir çipli karttır ve sürücünün sürüş ile dinlenme süresini kaydeder. Bu bir ehliyet ve Kod 95 değildir, ayrı bir üçüncü belgedir. Kart takılı olmadan takograf bir ihlal kaydeder ve ITD kontrolünde bu bir cezadır. Kart, C/CE/D/DE kategorileriyle ticari taşımacılıkta zorunludur.' },
      { q: 'Karta kierowcy, Kod 95 ve ehliyetten nasıl ayrılır?', a: 'Profesyonel bir sürücüye üç belge de aynı anda gerekir. Prawo jazdy kamyon veya otobüs kullanmanıza izin verir, Kod 95 bunu para karşılığı yapmanıza izin verir (AB ticari taşımacılığı), karta kierowcy ise sürücüyü takografta tanımlar ve çalışma süresini kaydeder. Birbirinin yerine geçmezler ve herhangi birinin eksikliği çalışmanızı durdurur.' },
      { q: 'Polonya\'da 2026\'da karta kierowcy ücreti ne kadar?', a: 'Kart 172,20 PLN brüt tutar - bu 140,00 PLN net artı %23 KDV demektir. Başvuru başına tek ödeme, posta teslimatı dahildir. Başvuru reddedilirse PWPW tutarın tamamını iade etmez - 25,83 PLN\'yi tutar. Bu yüzden tekrar ödememek için belgeleri ilk seferde dikkatlice hazırlamak önemlidir.' },
      { q: 'Yabancı, ehliyet değişimi olmadan karta kierowcy alabilir mi?', a: 'Evet, 19 Mayıs 2023\'ten itibaren yabancı ehliyetle doğrudan başvurabilirsiniz. Başvuruya gerçeklik kanıtı eklersiniz - dört seçenekten biri: RESPER verileri, düzenleyen makamdan teyit, ülke portalından bilgi veya Polonya świadectwo kierowcy ya da AB Kod 95 kartı. Son yol en hızlısıdır. Ancak Polonya\'da 185 günden fazla yaşıyorsanız ehliyeti yine de değiştirmeniz gerekir.' },
      { q: 'Sürücü kartının düzenlenmesi ne kadar sürer?', a: 'Profil Zaufany ile info-car üzerinden online olarak kart yaklaşık 7 iş gününde düzenlenir - sistem verileri kendi doğrular. PWPW\'ye posta ile gönderilen kağıt başvuru, posta ve elle işleme nedeniyle 30 güne kadar sürer. Hazırlık durumu info-car.pl üzerinden takip edilir. Kart, ehliyet ve Kod 95\'ten bağımsız olarak 5 yıl geçerlidir.' },
      { q: 'Karta kierowcy nasıl uzatılır (odnowić)?', a: 'Kart otomatik olarak yenilenmez. Başvuruyu geçerlilik bitiminden en geç 15 iş günü önce yeniden yaparsınız ve bunu en erken 60 gün önce yapabilirsiniz. Ücret ve süre aynıdır: 172,20 PLN ve yeniden 5 yıl. info-car üzerinden online daha hızlıdır. Süreyi kaçırırsanız kart geçersiz olur ve takografla yasal olarak çalışamazsınız.' }
    ],
    uk: [
      { q: 'Що таке karta kierowcy і навіщо вона потрібна?', a: 'Karta kierowcy - це персональна чип-картка для тахографа цифрового (tachograf cyfrowy), яка записує час водіння та відпочинку водія. Це не права і не Kod 95, а окремий третій документ. Без вставленої картки тахограф фіксує порушення, і під час контролю ITD це штраф. Картка обов\'язкова для комерційних перевезень категоріями C/CE/D/DE.' },
      { q: 'Чим karta kierowcy відрізняється від Kod 95 і водійських прав?', a: 'Професійному водієві потрібні всі три документи одразу. Prawo jazdy дозволяє керувати вантажівкою чи автобусом, Kod 95 дозволяє робити це за гроші (комерційні перевезення в ЄС), а karta kierowcy ідентифікує водія в тахографі й веде облік робочого часу. Вони не замінюють один одного, і відсутність будь-якого зупиняє роботу.' },
      { q: 'Скільки коштує karta kierowcy в Польщі у 2026?', a: 'Картка коштує 172,20 PLN brutto - це 140,00 PLN netto плюс 23% VAT. Одна оплата за одну заяву, доставка поштою включена. Якщо заяву відхилять, PWPW повертає не все - утримується 25,83 PLN. Тому документи варто підготувати акуратно з першого разу, щоб не платити повторно.' },
      { q: 'Чи може іноземець отримати karta kierowcy без обміну прав?', a: 'Так, з 19 травня 2023 можна подати з іноземними правами безпосередньо. До заяви додають підтвердження справжності - одне з чотирьох: дані RESPER, підтвердження від органу видачі, інформація з порталу країни або польське świadectwo kierowcy чи картка Kod 95 з ЄС. Останній шлях швидший. Але при проживанні понад 185 днів права все одно треба обміняти.' },
      { q: 'Скільки чекати виготовлення картки водія?', a: 'Онлайн через info-car з Profil Zaufany картку роблять близько 7 робочих днів - система перевіряє дані сама. Паперова заява, надіслана до PWPW поштою, займає до 30 dni через пересилання та ручну обробку. Статус готовності відстежується на info-car.pl. Картка діє 5 років, незалежно від терміну прав і Kod 95.' },
      { q: 'Як продовжити (odnowić) karta kierowcy?', a: 'Картка не продовжується автоматично. Заяву подають заново не пізніше ніж за 15 робочих днів до закінчення терміну, а зробити це можна вже за 60 днів до кінця. Вартість і термін ті самі: 172,20 PLN і знову 5 років. Онлайн через info-car швидше. Якщо пропустити термін, картка стане недійсною і працювати з тахографом легально не можна.' }
    ]
  },

  'kak-stat-voditelem-v-polshe-2026': {
    ru: [
      { q: 'Что нужно, чтобы легально работать водителем грузовика или автобуса в Польше?', a: 'Нужны три отдельных документа: польские права категории C/CE или D/DE (иностранные обменивают), Kod 95 - свидетельство профессиональной квалификации, и karta kierowcy для тахографа. Все три обязательны: без любого из них работодатель не выпустит вас в рейс, а ITD на дороге выпишет штраф. Для категории B такой набор не требуется.' },
      { q: 'Чем Kod 95 отличается от karta kierowcy и от водительских прав?', a: 'Это три разные вещи. Права дают право управлять транспортом. Kod 95 даёт право возить груз или пассажиров за оплату как профессию. Karta kierowcy - персональная смарт-карта, которая записывает ваше рабочее время в тахограф. Один документ не заменяет другой, поэтому профессиональному водителю нужны все три сразу.' },
      { q: 'Нужно ли менять иностранные права перед получением Kod 95?', a: 'Да. PKZ - профиль профессионального водителя, без которого нельзя записаться на курс Kod 95, оформляют только на польские права категории C/D. После 185 дней проживания иностранные права теряют силу для управления, поэтому сначала обмен (госпошлина 100,50 PLN, обмен C/D ~600-900 PLN), затем Kod 95.' },
      { q: 'Сколько стоит весь путь: права + Kod 95 + karta kierowcy?', a: 'Ориентировочно от 1 900 до 4 000 PLN без услуг сопровождения. Обмен прав C/D - ~600-900 PLN, karta kierowcy - 172,20 PLN. Главная переменная - Kod 95: короткий путь Szkolenie Okresowe ~800-1 200 PLN, длинный Kwalifikacja Wstępna ~2 500-3 200 PLN. Плюс пластик karty kwalifikacji 100,50 PLN.' },
      { q: 'Сколько времени занимает оформить всё с нуля?', a: 'От 2 до 5 месяцев. Самые долгие части - обмен прав (Украина 30-60 дней, Беларусь 60-90 дней, ждём ответ МВД страны выдачи) и государственный экзамен на Kwalifikację Wstępną (7-9 недель). Karta kierowcy оформляется онлайн около 7 дней. Параллельное оформление сокращает общий срок.' },
      { q: 'Нужен ли Kod 95 и karta kierowcy для категории B или для своего авто?', a: 'Нет. Kod 95 нужен только для категорий C/CE и D/DE. Для категории B (легковые, доставка до 3,5 тонн) хватает обмена прав. Karta kierowcy нужна для транспорта с тахографом, то есть для грузовиков и автобусов. Личное вождение того же грузовика без оплаты тоже не требует Kod 95.' }
    ],
    pl: [
      { q: 'Co jest potrzebne, aby legalnie pracować jako kierowca ciężarówki lub autobusu w Polsce?', a: 'Potrzebne są trzy osobne dokumenty: polskie prawo jazdy kat. C/CE lub D/DE (zagraniczne się wymienia), Kod 95 - świadectwo kwalifikacji zawodowej, oraz karta kierowcy do tachografu. Wszystkie trzy są obowiązkowe: bez któregokolwiek pracodawca nie wyśle Pana w trasę, a ITD na drodze wystawi mandat. Dla kategorii B taki zestaw nie jest wymagany.' },
      { q: 'Czym różni się Kod 95 od karty kierowcy i od prawa jazdy?', a: 'To trzy różne rzeczy. Prawo jazdy pozwala prowadzić pojazd. Kod 95 daje prawo przewozić towar lub pasażerów za pieniądze jako zawód. Karta kierowcy to osobista karta inteligentna, która zapisuje czas pracy w tachografie. Jeden dokument nie zastępuje drugiego, dlatego zawodowy kierowca potrzebuje wszystkich trzech naraz.' },
      { q: 'Czy trzeba wymienić zagraniczne prawo jazdy przed uzyskaniem Kodu 95?', a: 'Tak. PKZ - profil kierowcy zawodowego, bez którego nie da się zapisać na kurs Kod 95, zakłada się tylko na polskie prawo jazdy kat. C/D. Po 185 dniach zamieszkania zagraniczne prawo jazdy traci ważność do kierowania, więc najpierw wymiana (opłata 100,50 PLN, wymiana C/D ~600-900 PLN), a potem Kod 95.' },
      { q: 'Ile kosztuje cała droga: prawo jazdy + Kod 95 + karta kierowcy?', a: 'Orientacyjnie od 1 900 do 4 000 PLN bez obsługi prawnej. Wymiana prawa jazdy C/D - ~600-900 PLN, karta kierowcy - 172,20 PLN. Główna zmienna to Kod 95: krótka droga Szkolenie Okresowe ~800-1 200 PLN, długa Kwalifikacja Wstępna ~2 500-3 200 PLN. Do tego plastik karty kwalifikacji 100,50 PLN.' },
      { q: 'Ile czasu zajmuje załatwienie wszystkiego od zera?', a: 'Od 2 do 5 miesięcy. Najdłuższe części to wymiana prawa jazdy (Ukraina 30-60 dni, Białoruś 60-90 dni, czekamy na odpowiedź MSW kraju wydania) oraz egzamin państwowy na Kwalifikację Wstępną (7-9 tygodni). Karta kierowcy powstaje online w około 7 dni. Równoległe załatwianie skraca łączny termin.' },
      { q: 'Czy Kod 95 i karta kierowcy są potrzebne dla kategorii B lub do własnego auta?', a: 'Nie. Kod 95 jest potrzebny tylko dla kategorii C/CE i D/DE. Dla kategorii B (samochody osobowe, dostawa do 3,5 tony) wystarczy wymiana prawa jazdy. Karta kierowcy jest potrzebna do pojazdów z tachografem, czyli ciężarówek i autobusów. Prywatna jazda tą samą ciężarówką bez opłaty również nie wymaga Kodu 95.' }
    ],
    en: [
      { q: 'What do you need to work legally as a truck or bus driver in Poland?', a: 'You need three separate documents: a Polish licence of category C/CE or D/DE (foreign ones are exchanged), Kod 95 - the certificate of professional competence, and a karta kierowcy for the tachograph. All three are mandatory: without any one, an employer cannot send you on a run and ITD will fine you on the road. For category B this set is not required.' },
      { q: 'How does Kod 95 differ from the karta kierowcy and from the licence?', a: 'They are three different things. The licence lets you drive the vehicle. Kod 95 gives you the right to carry goods or passengers for money as a profession. The karta kierowcy is a personal smart card that records your working time in the tachograph. One document does not replace another, so a professional driver needs all three at once.' },
      { q: 'Do you need to exchange a foreign licence before getting Kod 95?', a: 'Yes. The PKZ - professional driver profile, without which you cannot enrol on the Kod 95 course, is set up only on a Polish category C/D licence. After 185 days of residence the foreign licence loses validity for driving, so first the exchange (fee 100.50 PLN, C/D exchange ~600-900 PLN), then Kod 95.' },
      { q: 'How much does the whole route cost: licence + Kod 95 + karta kierowcy?', a: 'Roughly 1,900 to 4,000 PLN without legal support. Licence exchange for C/D is ~600-900 PLN, the karta kierowcy is 172.20 PLN. The main variable is Kod 95: the short Szkolenie Okresowe path ~800-1,200 PLN, the long Kwalifikacja Wstępna ~2,500-3,200 PLN. Plus the karta kwalifikacji plastic card at 100.50 PLN.' },
      { q: 'How long does it take to arrange everything from scratch?', a: 'From 2 to 5 months. The longest parts are the licence exchange (Ukraine 30-60 days, Belarus 60-90 days, awaiting the issuing country interior ministry reply) and the state exam for Kwalifikacja Wstępna (7-9 weeks). The karta kierowcy is produced online in about 7 days. Arranging things in parallel shortens the total time.' },
      { q: 'Are Kod 95 and the karta kierowcy needed for category B or for your own car?', a: 'No. Kod 95 is needed only for categories C/CE and D/DE. For category B (cars, delivery up to 3.5 tonnes) the licence exchange is enough. The karta kierowcy is needed for vehicles with a tachograph, that is trucks and buses. Driving the same truck privately without payment also does not require Kod 95.' }
    ],
    tr: [
      { q: 'Polonya\'da kamyon veya otobüs şoförü olarak yasal çalışmak için ne gerekir?', a: 'Üç ayrı belge gerekir: C/CE veya D/DE sınıfı Polonya ehliyeti (yabancı ehliyet değiştirilir), Kod 95 - mesleki yeterlilik belgesi, ve takograf için karta kierowcy. Üçü de zorunludur: biri eksikse işveren sizi sefere çıkaramaz, ITD yolda ceza keser. B sınıfı için bu set gerekmez.' },
      { q: 'Kod 95, karta kierowcy ve ehliyetten nasıl farklıdır?', a: 'Bunlar üç farklı şeydir. Ehliyet aracı kullanmanıza izin verir. Kod 95 meslek olarak para karşılığı yük veya yolcu taşıma hakkı verir. Karta kierowcy, çalışma sürenizi takografa kaydeden kişisel bir akıllı karttır. Biri diğerinin yerini tutmaz; bu yüzden profesyonel şoförün üçüne birden ihtiyacı vardır.' },
      { q: 'Kod 95 almadan önce yabancı ehliyeti değiştirmek gerekir mi?', a: 'Evet. Kod 95 kursuna kayıt için şart olan PKZ - profesyonel şoför profili, yalnızca Polonya C/D ehliyeti üzerine açılır. 185 günlük ikametten sonra yabancı ehliyet sürüş için geçersiz olur. Bu yüzden önce değişim (harç 100,50 PLN, C/D değişimi ~600-900 PLN), sonra Kod 95.' },
      { q: 'Tüm yol ne kadar tutar: ehliyet + Kod 95 + karta kierowcy?', a: 'Hukuki destek hariç yaklaşık 1.900 ile 4.000 PLN. C/D ehliyet değişimi ~600-900 PLN, karta kierowcy 172,20 PLN. Ana değişken Kod 95\'tir: kısa Szkolenie Okresowe yolu ~800-1.200 PLN, uzun Kwalifikacja Wstępna ~2.500-3.200 PLN. Ayrıca karta kwalifikacji plastik kartı 100,50 PLN.' },
      { q: 'Her şeyi sıfırdan halletmek ne kadar sürer?', a: '2 ile 5 ay arası. En uzun bölümler ehliyet değişimi (Ukrayna 30-60 gün, Belarus 60-90 gün, veren ülkenin içişleri bakanlığının cevabını bekleme) ve Kwalifikacja Wstępna devlet sınavıdır (7-9 hafta). Karta kierowcy çevrimiçi yaklaşık 7 günde hazırlanır. İşlemleri paralel yürütmek toplam süreyi kısaltır.' },
      { q: 'Kod 95 ve karta kierowcy B sınıfı için veya kendi aracınız için gerekli mi?', a: 'Hayır. Kod 95 yalnızca C/CE ve D/DE sınıfları için gereklidir. B sınıfı için (otomobil, 3,5 tona kadar dağıtım) ehliyet değişimi yeterlidir. Karta kierowcy takograflı araçlar, yani kamyon ve otobüsler için gerekir. Aynı kamyonu ücretsiz, kişisel amaçla kullanmak da Kod 95 gerektirmez.' }
    ],
    uk: [
      { q: 'Що потрібно, щоб легально працювати водієм вантажівки чи автобуса в Польщі?', a: 'Потрібні три окремі документи: польські права категорії C/CE або D/DE (іноземні обмінюють), Kod 95 - свідоцтво професійної кваліфікації, та karta kierowcy для тахографа. Усі три обовʼязкові: без будь-якого з них роботодавець не випустить вас у рейс, а ITD на дорозі випише штраф. Для категорії B такий набір не потрібен.' },
      { q: 'Чим Kod 95 відрізняється від karta kierowcy та від водійських прав?', a: 'Це три різні речі. Права дають право керувати транспортом. Kod 95 дає право возити вантаж чи пасажирів за оплату як професію. Karta kierowcy - персональна смарт-карта, що записує ваш робочий час у тахограф. Один документ не замінює інший, тому професійному водієві потрібні всі три одразу.' },
      { q: 'Чи потрібно міняти іноземні права перед отриманням Kod 95?', a: 'Так. PKZ - профіль професійного водія, без якого не можна записатися на курс Kod 95, оформлюють лише на польські права категорії C/D. Після 185 днів проживання іноземні права втрачають силу для керування, тому спочатку обмін (держмито 100,50 PLN, обмін C/D ~600-900 PLN), потім Kod 95.' },
      { q: 'Скільки коштує весь шлях: права + Kod 95 + karta kierowcy?', a: 'Орієнтовно від 1 900 до 4 000 PLN без послуг супроводу. Обмін прав C/D - ~600-900 PLN, karta kierowcy - 172,20 PLN. Головна змінна - Kod 95: короткий шлях Szkolenie Okresowe ~800-1 200 PLN, довгий Kwalifikacja Wstępna ~2 500-3 200 PLN. Плюс пластик karty kwalifikacji 100,50 PLN.' },
      { q: 'Скільки часу займає оформити все з нуля?', a: 'Від 2 до 5 місяців. Найдовші частини - обмін прав (Україна 30-60 днів, Білорусь 60-90 днів, чекаємо на відповідь МВС країни видачі) та державний іспит на Kwalifikację Wstępną (7-9 тижнів). Karta kierowcy оформлюється онлайн близько 7 днів. Паралельне оформлення скорочує загальний термін.' },
      { q: 'Чи потрібні Kod 95 та karta kierowcy для категорії B або для свого авто?', a: 'Ні. Kod 95 потрібен лише для категорій C/CE та D/DE. Для категорії B (легкові, доставка до 3,5 тонни) вистачає обміну прав. Karta kierowcy потрібна для транспорту з тахографом, тобто для вантажівок і автобусів. Особисте керування тією самою вантажівкою без оплати теж не потребує Kod 95.' }
    ]
  },

  // ─── Apostille + KRK series (2026-Q2) ────────────────────────────────
  'spravka-o-nesudimosti-polsha-krk': {
    ru: [
      { q: "Сколько стоит справка о несудимости в Польше?", a: "Через e-KRK онлайн - 20 PLN, бумажный wniosek в Biurze KRK или Sądzie Okręgowym - 30 PLN. Если подаёте через представителя, добавляется 17 PLN госпошлины за pełnomocnictwo. Наш гонорар за получение под ключ - от 300 PLN." },
      { q: "Как быстро выдают справку KRK?", a: "Электронная e-KRK через profil zaufany часто готова в тот же день, по закону - в считаные дни. Бумажная справка по форме 'Zapytanie o udzielenie informacji o osobie' выдаётся до 7 рабочих дней. Для срочных случаев есть приоритетная обработка." },
      { q: "Можно ли получить KRK без приезда в Польшу?", a: "Да. Если есть profil zaufany ePUAP - полностью онлайн через e-KRK. Если профиля нет, оформляем pełnomocnictwo (в том числе через консула) и получаем справку за вас. Личный визит в урзед не нужен." },
      { q: "Какую форму выбрать - частную или для трудоустройства?", a: "Для karty pobytu, ПМЖ и гражданства - всегда 'osoba prywatna' (частное лицо): она показывает все записи. Форма 'do celów zatrudnienia' фильтрует записи под конкретную должность и для иммиграции не подходит - справку завернут как неполную." },
      { q: "Сколько действует справка о несудимости?", a: "По умолчанию 6 месяцев, для гражданства Польши - 3 месяца, для тендеров - обычно тоже 3. Единого жёсткого срока в законе нет, ориентируйтесь на орган, который её принимает. Делайте справку максимально близко к дате подачи." }
    ],
    pl: [
      { q: "Ile kosztuje zaświadczenie o niekaralności w Polsce?", a: "Przez e-KRK online - 20 PLN, wniosek papierowy w Biurze KRK lub sądzie okręgowym - 30 PLN. Jeśli składa przedstawiciel, dochodzi 17 PLN opłaty skarbowej za pełnomocnictwo. Nasze honorarium za uzyskanie pod klucz - od 300 PLN." },
      { q: "Jak szybko wydawane jest zaświadczenie z KRK?", a: "Elektroniczne e-KRK przez profil zaufany często gotowe tego samego dnia, ustawowo - w kilka dni. Zaświadczenie papierowe na formularzu 'Zapytanie o udzielenie informacji o osobie' wydawane jest do 7 dni roboczych. Dla pilnych spraw jest przyspieszona obsługa." },
      { q: "Czy można uzyskać KRK bez przyjazdu do Polski?", a: "Tak. Z profilem zaufanym ePUAP - w pełni online przez e-KRK. Bez profilu sporządzamy pełnomocnictwo (także przed konsulem) i odbieramy zaświadczenie za Ciebie. Osobista wizyta w urzędzie nie jest potrzebna." },
      { q: "Który formularz wybrać - prywatny czy do zatrudnienia?", a: "Do karty pobytu, pobytu stałego i obywatelstwa - zawsze 'osoba prywatna': pokazuje wszystkie wpisy. Formularz 'do celów zatrudnienia' filtruje wpisy pod konkretne stanowisko i do imigracji się nie nadaje - zaświadczenie zostanie odrzucone jako niepełne." },
      { q: "Jak długo ważne jest zaświadczenie o niekaralności?", a: "Domyślnie 6 miesięcy, do obywatelstwa polskiego - 3 miesiące, do przetargów - zwykle też 3. Sztywnego terminu w przepisach nie ma, kieruj się organem, który je przyjmuje. Rób zaświadczenie możliwie blisko daty złożenia." }
    ],
    en: [
      { q: "How much does a certificate of no criminal record cost in Poland?", a: "Through e-KRK online it is 20 PLN; a paper wniosek at the Biuro KRK or a regional court is 30 PLN. If a representative files, add 17 PLN stamp duty for the pełnomocnictwo. Our end-to-end fee for obtaining it is from 300 PLN." },
      { q: "How quickly is the KRK certificate issued?", a: "An electronic e-KRK via profil zaufany is often ready the same day, and by law within a few days. A paper certificate on the 'Zapytanie o udzielenie informacji o osobie' form is issued within 7 working days. Priority handling is available for urgent cases." },
      { q: "Can I get the KRK without coming to Poland?", a: "Yes. With a profil zaufany on ePUAP it is fully online via e-KRK. Without a profile, we draw up a pełnomocnictwo (including before a consul) and collect the certificate for you. No personal visit to the office is needed." },
      { q: "Which form should I choose - private or for employment?", a: "For a karta pobytu, permanent residence and citizenship, always 'osoba prywatna' (private person): it shows all entries. The 'do celów zatrudnienia' form filters entries to a specific position and is not suitable for immigration - the certificate is bounced as incomplete." },
      { q: "How long is the certificate of no criminal record valid?", a: "By default 6 months, for Polish citizenship 3 months, for tenders usually 3 as well. There is no rigid statutory term, so follow the body that accepts it. Make the certificate as close as possible to the filing date." }
    ],
    tr: [
      { q: "Polonya'da adli sicil belgesi ne kadar?", a: "e-KRK ile online 20 PLN, Biuro KRK veya bölge mahkemesinde kâğıt wniosek 30 PLN. Başvuruyu bir temsilci yapıyorsa pełnomocnictwo için 17 PLN damga vergisi eklenir. Anahtar teslim alma ücretimiz 300 PLN'den başlar." },
      { q: "KRK belgesi ne kadar sürede verilir?", a: "profil zaufany ile elektronik e-KRK çoğu zaman aynı gün, yasaya göre birkaç gün içinde hazırdır. 'Zapytanie o udzielenie informacji o osobie' formuyla kâğıt belge 7 iş gününe kadar verilir. Acil durumlar için öncelikli işlem mevcuttur." },
      { q: "KRK'yi Polonya'ya gelmeden alabilir miyim?", a: "Evet. ePUAP'ta profil zaufany varsa e-KRK ile tamamen online. Profil yoksa pełnomocnictwo düzenler (konsolos önünde dâhil) ve belgeyi sizin adınıza alırız. Kuruma şahsen gitmeye gerek yoktur." },
      { q: "Hangi formu seçmeli - özel mi, istihdam mı?", a: "Karta pobytu, daimi ikamet ve vatandaşlık için her zaman 'osoba prywatna' (özel kişi): tüm kayıtları gösterir. 'Do celów zatrudnienia' formu kayıtları belirli pozisyona göre süzer ve göçmenliğe uygun değildir - belge eksik diye geri çevrilir." },
      { q: "Adli sicil belgesi ne kadar geçerli?", a: "Varsayılan 6 ay, Polonya vatandaşlığı için 3 ay, ihaleler için genellikle yine 3 ay. Kanunda katı bir süre yoktur, belgeyi kabul eden makamı esas alın. Belgeyi mümkün olduğunca başvuru tarihine yakın çıkarın." }
    ],
    uk: [
      { q: "Скільки коштує довідка про несудимість у Польщі?", a: "Через e-KRK онлайн - 20 PLN, паперовий wniosek у Biurze KRK чи sądzie okręgowym - 30 PLN. Якщо подає представник, додається 17 PLN держмита за pełnomocnictwo. Наш гонорар за отримання під ключ - від 300 PLN." },
      { q: "Як швидко видають довідку KRK?", a: "Електронна e-KRK через profil zaufany часто готова того ж дня, за законом - за кілька днів. Паперова довідка за формою 'Zapytanie o udzielenie informacji o osobie' видається до 7 робочих днів. Для термінових випадків є пріоритетна обробка." },
      { q: "Чи можна отримати KRK без приїзду до Польщі?", a: "Так. Якщо є profil zaufany ePUAP - повністю онлайн через e-KRK. Якщо профілю немає, оформлюємо pełnomocnictwo (зокрема через консула) і отримуємо довідку за вас. Особистий візит до уряду не потрібен." },
      { q: "Яку форму обрати - приватну чи для працевлаштування?", a: "Для karty pobytu, ПМП і громадянства - завжди 'osoba prywatna' (приватна особа): вона показує всі записи. Форма 'do celów zatrudnienia' фільтрує записи під конкретну посаду і для імміграції не підходить - довідку завернуть як неповну." },
      { q: "Скільки діє довідка про несудимість?", a: "За замовчуванням 6 місяців, для громадянства Польщі - 3 місяці, для тендерів - зазвичай теж 3. Єдиного жорсткого строку в законі немає, орієнтуйтеся на орган, який її приймає. Робіть довідку якомога ближче до дати подання." }
    ]
  },

  'spravka-o-nesudimosti-grazhdanstvo-pmzh': {
    ru: [
      { q: "Нужна ли справка о несудимости для гражданства Польши?", a: "Да, и для uznania za obywatela polskiego, и для nadania obywatelstwa Президентом РП справка KRK обязательна. Срок годности для гражданства - 3 месяца на момент подачи, а не привычные 6. Заказывать её нужно в самом конце сбора пакета." },
      { q: "Для karty stałego pobytu нужна справка из страны происхождения?", a: "По ряду оснований - да. Воевода ждёт польскую KRK, а дополнительно по части оснований (например, польское происхождение, rezydent UE) - справку из страны происхождения с apostille и присяжным переводом. Точный список зависит от воеводства." },
      { q: "Когда заказывать справку, чтобы она не просрочилась?", a: "Привязывайте её к дате подачи, а не к началу сбора. Решение по ПМЖ идёт 3-6 месяцев, по гражданству дольше, поэтому справку из страны происхождения (самую долгую) заказывают первой, а польскую KRK - последней, за 2-4 недели до подачи." },
      { q: "Что если в справке KRK есть запись о судимости?", a: "Это не автоматический отказ. Снятая судимость (zatarte) в частной форме может быть видна. При nadaniu Президент рассматривает всё досье. Лучше заранее подготовить wyjaśnienia и оценить шансы с юристом, чем 'прятать' запись и получить отказ." },
      { q: "Подойдёт ли справка из суда вместо KRK?", a: "Нет. Для иммиграции нужна KRK из центрального реестра Ministerstwa Sprawiedliwości, а не справка отдельного суда. Sądowe zaświadczenie воевода и канцелярия Президента не примут - везде требуется именно выписка из KRK." }
    ],
    pl: [
      { q: "Czy do obywatelstwa polskiego potrzebne jest zaświadczenie o niekaralności?", a: "Tak, i do uznania za obywatela polskiego, i do nadania obywatelstwa przez Prezydenta RP zaświadczenie z KRK jest obowiązkowe. Termin ważności do obywatelstwa to 3 miesiące na moment złożenia, a nie zwyczajowe 6. Zamawia się je na samym końcu kompletowania pakietu." },
      { q: "Czy do karty stałego pobytu potrzebne jest zaświadczenie z kraju pochodzenia?", a: "Przy szeregu podstaw - tak. Wojewoda oczekuje polskiego KRK, a dodatkowo przy części podstaw (np. polskie pochodzenie, rezydent UE) - zaświadczenia z kraju pochodzenia z apostille i tłumaczeniem przysięgłym. Dokładna lista zależy od województwa." },
      { q: "Kiedy zamówić zaświadczenie, żeby się nie przeterminowało?", a: "Wiąż je z datą złożenia, a nie z początkiem kompletowania. Decyzja o pobycie stałym idzie 3-6 miesięcy, o obywatelstwie dłużej, więc zaświadczenie z kraju pochodzenia (najdłuższe) zamawia się pierwsze, a polskie KRK - ostatnie, na 2-4 tygodnie przed złożeniem." },
      { q: "Co jeśli w KRK jest wpis o skazaniu?", a: "To nie jest automatyczna odmowa. Skazanie zatarte w formie prywatnej może być widoczne. Przy nadaniu Prezydent rozpatruje całe akta. Lepiej wcześniej przygotować wyjaśnienia i ocenić szanse z prawnikiem, niż 'ukrywać' wpis i dostać odmowę." },
      { q: "Czy zaświadczenie z sądu zastąpi KRK?", a: "Nie. Do imigracji potrzebne jest KRK z rejestru centralnego Ministerstwa Sprawiedliwości, a nie zaświadczenie pojedynczego sądu. Zaświadczenia sądowego wojewoda i Kancelaria Prezydenta nie przyjmą - wszędzie wymagany jest wypis z KRK." }
    ],
    en: [
      { q: "Is a certificate of no criminal record needed for Polish citizenship?", a: "Yes, both for uznanie za obywatela polskiego and for nadanie by the President the KRK certificate is mandatory. The validity for citizenship is 3 months at the moment of filing, not the usual 6. It should be ordered at the very end of assembling the file." },
      { q: "Does the karta stałego pobytu need a home-country certificate?", a: "For a number of grounds, yes. The wojewoda expects the Polish KRK, and for some grounds additionally (e.g. Polish descent, EU resident) a home-country certificate with an apostille and a sworn translation. The exact list depends on the voivodeship." },
      { q: "When should I order the certificate so it does not expire?", a: "Tie it to the filing date, not the start of gathering. A permanent-residence decision takes 3-6 months, citizenship longer, so the home-country certificate (the longest) is ordered first and the Polish KRK last, 2-4 weeks before filing." },
      { q: "What if there is a conviction entry on the KRK?", a: "It is not an automatic refusal. A spent conviction (zatarte) may be visible on the private form. For nadanie the President reviews the whole file. It is better to prepare wyjaśnienia and weigh the odds with a lawyer than to hide an entry and get a refusal." },
      { q: "Will a court certificate replace the KRK?", a: "No. Immigration needs the KRK from the central register of the Ministerstwo Sprawiedliwości, not a single court's certificate. The wojewoda and the President's Office will not accept a court certificate - an extract from the KRK is required everywhere." }
    ],
    tr: [
      { q: "Polonya vatandaşlığı için adli sicil belgesi gerekir mi?", a: "Evet, hem uznanie za obywatela polskiego hem de Cumhurbaşkanı kararıyla nadanie için KRK belgesi zorunludur. Vatandaşlık için geçerlilik, başvuru anında 6 değil 3 aydır. Belge, dosyanın toplanmasının en sonunda sipariş edilir." },
      { q: "Karta stałego pobytu için menşe ülke belgesi gerekir mi?", a: "Bir dizi dayanak için evet. Wojewoda Polonya KRK'sini bekler, bazı dayanaklarda ek olarak (örneğin Polonya kökeni, AB mukimi) apostilli ve yeminli tercümeli menşe ülke belgesi ister. Kesin liste eyalete bağlıdır." },
      { q: "Belgeyi ne zaman sipariş etmeli ki süresi geçmesin?", a: "Toplamanın başına değil, başvuru tarihine bağlayın. Daimi ikamet kararı 3-6 ay, vatandaşlık daha uzun sürer; bu yüzden menşe ülke belgesi (en uzunu) ilk, Polonya KRK'si son, başvurudan 2-4 hafta önce sipariş edilir." },
      { q: "KRK'de bir mahkûmiyet kaydı varsa ne olur?", a: "Bu otomatik ret değildir. Silinmiş mahkûmiyet (zatarte) özel formda görünebilir. Nadanie'de Cumhurbaşkanı tüm dosyayı inceler. Bir kaydı gizlemek ve ret almaktansa önceden wyjaśnienia hazırlamak ve şansları avukatla değerlendirmek daha iyidir." },
      { q: "Mahkeme belgesi KRK'nin yerini tutar mı?", a: "Hayır. Göçmenlik için tek bir mahkemenin belgesi değil, Ministerstwo Sprawiedliwości merkezi sicilinden KRK gerekir. Wojewoda ve Cumhurbaşkanlığı Ofisi mahkeme belgesini kabul etmez - her yerde KRK dökümü istenir." }
    ],
    uk: [
      { q: "Чи потрібна довідка про несудимість для громадянства Польщі?", a: "Так, і для uznania za obywatela polskiego, і для nadania obywatelstwa Президентом РП довідка KRK обов'язкова. Строк придатності для громадянства - 3 місяці на момент подання, а не звичні 6. Замовляти її треба в самому кінці збору пакета." },
      { q: "Чи потрібна для karty stałego pobytu довідка з країни походження?", a: "За низкою підстав - так. Воєвода чекає польський KRK, а додатково за частиною підстав (наприклад, польське походження, rezydent UE) - довідку з країни походження з apostille та присяжним перекладом. Точний перелік залежить від воєводства." },
      { q: "Коли замовляти довідку, щоб вона не прострочилася?", a: "Прив'язуйте її до дати подання, а не до початку збору. Рішення по ПМП іде 3-6 місяців, по громадянству довше, тому довідку з країни походження (найдовшу) замовляють першою, а польський KRK - останнім, за 2-4 тижні до подання." },
      { q: "Що як у довідці KRK є запис про судимість?", a: "Це не автоматична відмова. Знята судимість (zatarte) у приватній формі може бути видно. При nadaniu Президент розглядає все досьє. Краще заздалегідь підготувати wyjaśnienia й оцінити шанси з юристом, ніж 'ховати' запис і отримати відмову." },
      { q: "Чи підійде довідка із суду замість KRK?", a: "Ні. Для імміграції потрібен KRK із центрального реєстру Ministerstwa Sprawiedliwości, а не довідка окремого суду. Sądowe zaświadczenie воєвода й канцелярія Президента не приймуть - скрізь потрібен саме витяг із KRK." }
    ]
  },

  'spravka-o-nesudimosti-iz-strany-proishozhdeniya': {
    ru: [
      { q: "Когда нужна справка о несудимости из страны происхождения?", a: "По ряду оснований karty stałego pobytu (особенно польское происхождение), для karty rezydenta długoterminowego UE, иногда под лицензии. Польская KRK закрывает только польский период, а справка с родины - то, что было до переезда. Точный список зависит от воеводства." },
      { q: "Как получить справку с родины, не выезжая туда?", a: "Через консульство своей страны в Польше, через онлайн-сервис страны (если он есть, как у Украины) или через местного партнёра по доверенности. Дальше документ нужно легализовать: apostille в стране выдачи и присяжный перевод на польский." },
      { q: "Где ставить apostille на справку из страны происхождения?", a: "Только в стране, которая её выдала. Польский MSZ иностранную справку не апостилирует. Например, на украинскую справку apostille ставит МВС Украины, на казахстанскую - Минюст. После apostille делается присяжный перевод на польский." },
      { q: "Сколько времени занимает справка с родины?", a: "Это самый долгий элемент пакета. С получением, apostille и переводом цикл легко уходит на 4-8 недель, а по России в 2024-2026 - дольше. Поэтому её заказывают первой, ещё до польской KRK." },
      { q: "Нужен ли apostille для справки из страны ЕС?", a: "Нет. Между странами ЕС по Регламенту 2016/1191 справка о несудимости не требует apostille - достаточно документа и, при необходимости, многоязычной формы или перевода. Для справок из СНГ это исключение не действует, apostille обязателен." }
    ],
    en: [
      { q: "When is a home-country criminal record certificate needed?", a: "For a number of karta stałego pobytu grounds (especially Polish descent), for the long-term EU resident card, and sometimes for licences. The Polish KRK covers only the Polish period, while the home-country certificate covers what came before. The exact list depends on the voivodeship." },
      { q: "How can I get the home-country certificate without travelling there?", a: "Through your country's consulate in Poland, through your country's online service (where it exists, as in Ukraine), or through a local partner under a power of attorney. The document then has to be legalised: an apostille in the issuing country and a sworn translation into Polish." },
      { q: "Where is the apostille affixed on a home-country certificate?", a: "Only in the country that issued it. The Polish MSZ does not apostille a foreign certificate. A Ukrainian certificate, for instance, is apostilled by Ukraine's MIA, a Kazakh one by the Ministry of Justice. After the apostille comes a sworn translation into Polish." },
      { q: "How long does the home-country certificate take?", a: "It is the longest element of the file. With issuance, apostille and translation the cycle easily runs 4-8 weeks, and for Russia in 2024-2026 longer. That is why it is ordered first, even before the Polish KRK." },
      { q: "Is an apostille needed for a certificate from an EU country?", a: "No. Between EU countries, under Regulation 2016/1191, a criminal record certificate needs no apostille - the document and, where needed, a multilingual form or translation are enough. For CIS certificates this exception does not apply and an apostille is mandatory." }
    ],
    uk: [
      { q: "Коли потрібна довідка про несудимість з країни походження?", a: "За низкою підстав karty stałego pobytu (особливо польське походження), для karty rezydenta długoterminowego UE, іноді під ліцензії. Польський KRK закриває лише польський період, а довідка з батьківщини - те, що було до переїзду. Точний перелік залежить від воєводства." },
      { q: "Як отримати довідку з батьківщини, не виїжджаючи туди?", a: "Через консульство своєї країни в Польщі, через онлайн-сервіс країни (якщо він є, як в Україні) або через місцевого партнера за довіреністю. Далі документ треба легалізувати: apostille в країні видачі та присяжний переклад польською." },
      { q: "Де ставити apostille на довідку з країни походження?", a: "Лише в країні, яка її видала. Польський MSZ іноземну довідку не апостилює. Наприклад, на українську довідку apostille ставить МВС України, на казахстанську - Мін'юст. Після apostille робиться присяжний переклад польською." },
      { q: "Скільки часу займає довідка з батьківщини?", a: "Це найдовший елемент пакета. З отриманням, apostille й перекладом цикл легко сягає 4-8 тижнів, а щодо Росії у 2024-2026 - довше. Тому її замовляють першою, ще до польського KRK." },
      { q: "Чи потрібен apostille для довідки з країни ЄС?", a: "Ні. Між країнами ЄС за Регламентом 2016/1191 довідка про несудимість не потребує apostille - достатньо документа і, за потреби, багатомовної форми чи перекладу. Для довідок із СНД цей виняток не діє, apostille обов'язковий." }
    ]
  },

  'apostille-spravki-o-nesudimosti': {
    ru: [
      { q: "Кто ставит apostille на справку о несудимости в Польше?", a: "Apostille на польскую справку KRK ставит Ministerstwo Spraw Zagranicznych (MSZ). Госпошлина - 60 PLN за документ, срок обычно 3-5 дней, для срочных - express tariff (+50%). Это не диплом (там NAWA) и не свидетельство USC (там wojewoda)." },
      { q: "В каком порядке делать apostille и перевод?", a: "Сначала свежая KRK, потом apostille в MSZ, и только затем присяжный перевод. Apostille - это штамп с собственным текстом, и переводить нужно уже готовый документ вместе с ним. Перевод до apostille означает повторный перевод." },
      { q: "Нужен ли apostille на KRK для стран ЕС?", a: "Нет. Внутри Евросоюза по Регламенту 2016/1191 apostille на польскую KRK не нужен с 2019 года - достаточно справки и многоязычной формы или перевода. Для США, Канады, Великобритании, ОАЭ apostille обязателен." },
      { q: "Сколько стоит apostille на справку о несудимости?", a: "Госпошлина MSZ - 60 PLN, express +50%, присяжный перевод - около 80 PLN за документ. Пакет 'KRK + apostille + перевод' под ключ у нас - от 720 PLN. Для ОАЭ добавляется консульская легализация - отдельно." },
      { q: "Электронную или бумажную KRK апостилировать?", a: "MSZ ставит apostille на бумажный документ, поэтому под зарубежные процедуры обычно берут бумажную KRK. Если у вас только e-KRK, подбираем корректный формат под требования конкретной страны, чтобы apostille приняли." }
    ],
    pl: [
      { q: "Kto przybija apostille na zaświadczeniu o niekaralności w Polsce?", a: "Apostille na polskim KRK przybija Ministerstwo Spraw Zagranicznych (MSZ). Opłata - 60 PLN za dokument, termin zwykle 3-5 dni, dla pilnych - tryb ekspresowy (+50%). To nie dyplom (tam NAWA) ani odpis USC (tam wojewoda)." },
      { q: "W jakiej kolejności robić apostille i tłumaczenie?", a: "Najpierw świeże KRK, potem apostille w MSZ, a dopiero później tłumaczenie przysięgłe. Apostille to klauzula z własnym tekstem, więc tłumaczy się gotowy dokument razem z nią. Tłumaczenie przed apostille oznacza powtórne tłumaczenie." },
      { q: "Czy do państw UE potrzebne jest apostille na KRK?", a: "Nie. Wewnątrz Unii na mocy Rozporządzenia 2016/1191 apostille na polskim KRK nie jest potrzebne od 2019 - wystarczy zaświadczenie i formularz wielojęzyczny albo tłumaczenie. Do USA, Kanady, Wielkiej Brytanii, ZEA apostille jest obowiązkowe." },
      { q: "Ile kosztuje apostille na zaświadczeniu o niekaralności?", a: "Opłata MSZ - 60 PLN, ekspres +50%, tłumaczenie przysięgłe - około 80 PLN za dokument. Pakiet 'KRK + apostille + tłumaczenie' pod klucz u nas - od 720 PLN. Do ZEA dochodzi legalizacja konsularna - osobno." },
      { q: "Elektroniczne czy papierowe KRK apostillować?", a: "MSZ przybija apostille na dokumencie papierowym, dlatego pod procedury zagraniczne zwykle bierze się papierowe KRK. Jeśli masz tylko e-KRK, dobieramy właściwy format pod wymogi konkretnego kraju, żeby apostille przyjęto." }
    ],
    en: [
      { q: "Who affixes the apostille on a certificate of no criminal record in Poland?", a: "The apostille on the Polish KRK is affixed by the Ministerstwo Spraw Zagranicznych (MSZ). The fee is 60 PLN per document, the term usually 3-5 days, with an express tariff (+50%) for urgent cases. This is not a diploma (NAWA) nor a USC certificate (the wojewoda)." },
      { q: "In what order do I do the apostille and the translation?", a: "First a fresh KRK, then the apostille at the MSZ, and only then a sworn translation. The apostille is a stamp with its own text, so you translate the finished document together with it. Translating before the apostille means translating again." },
      { q: "Is an apostille on the KRK needed for EU countries?", a: "No. Within the EU, under Regulation 2016/1191, an apostille on the Polish KRK has not been needed since 2019 - the certificate and a multilingual form or translation are enough. For the USA, Canada, the UK and the UAE the apostille is mandatory." },
      { q: "How much does an apostille on a certificate of no criminal record cost?", a: "The MSZ fee is 60 PLN, express +50%, and a sworn translation about 80 PLN per document. Our end-to-end 'KRK + apostille + translation' package is from 720 PLN. For the UAE, consular legalisation is added separately." },
      { q: "Should I apostille the electronic or the paper KRK?", a: "The MSZ affixes the apostille on a paper document, so for foreign procedures a paper KRK is usually taken. If you only have the e-KRK, we select the correct format for the specific country's requirements so the apostille is accepted." }
    ],
    tr: [
      { q: "Polonya'da adli sicil belgesine apostille'yi kim vurur?", a: "Polonya KRK'sine apostille'yi Ministerstwo Spraw Zagranicznych (MSZ) vurur. Ücret belge başına 60 PLN, süre genellikle 3-5 gün, acil için ekspres tarife (+%50). Bu bir diploma (NAWA) ya da USC belgesi (wojewoda) değildir." },
      { q: "Apostille ve tercümeyi hangi sırayla yapmalı?", a: "Önce taze KRK, sonra MSZ'de apostille, ancak ondan sonra yeminli tercüme. Apostille kendi metni olan bir şerhtir; bu yüzden hazır belge onunla birlikte tercüme edilir. Apostille'den önce tercüme, yeniden tercüme demektir." },
      { q: "AB ülkeleri için KRK'ye apostille gerekir mi?", a: "Hayır. Birlik içinde 2016/1191 sayılı Tüzük uyarınca Polonya KRK'sine apostille 2019'dan beri gerekmez - belge ve çok dilli form veya tercüme yeterli. ABD, Kanada, İngiltere, BAE için apostille zorunludur." },
      { q: "Adli sicil belgesine apostille ne kadar?", a: "MSZ ücreti 60 PLN, ekspres +%50, yeminli tercüme belge başına yaklaşık 80 PLN. Anahtar teslim 'KRK + apostille + tercüme' paketimiz 720 PLN'den. BAE için konsolosluk tasdiki ayrıca eklenir." },
      { q: "Elektronik mi kâğıt KRK mı apostille'lenmeli?", a: "MSZ apostille'yi kâğıt belgeye vurur; bu yüzden yurt dışı işlemler için genellikle kâğıt KRK alınır. Elinizde yalnızca e-KRK varsa, apostille'nin kabul edilmesi için ilgili ülkenin gerekliliklerine uygun biçimi seçeriz." }
    ],
    uk: [
      { q: "Хто ставить apostille на довідку про несудимість у Польщі?", a: "Apostille на польський KRK ставить Ministerstwo Spraw Zagranicznych (MSZ). Держмито - 60 PLN за документ, строк зазвичай 3-5 днів, для термінових - express tariff (+50%). Це не диплом (там NAWA) і не свідоцтво USC (там wojewoda)." },
      { q: "У якому порядку робити apostille і переклад?", a: "Спершу свіжий KRK, потім apostille в MSZ, і лише тоді присяжний переклад. Apostille - це штамп із власним текстом, тож перекладають уже готовий документ разом із ним. Переклад до apostille означає повторний переклад." },
      { q: "Чи потрібен apostille на KRK для країн ЄС?", a: "Ні. Усередині Євросоюзу за Регламентом 2016/1191 apostille на польський KRK не потрібен із 2019 року - достатньо довідки й багатомовної форми чи перекладу. Для США, Канади, Великої Британії, ОАЕ apostille обов'язковий." },
      { q: "Скільки коштує apostille на довідку про несудимість?", a: "Держмито MSZ - 60 PLN, express +50%, присяжний переклад - близько 80 PLN за документ. Пакет 'KRK + apostille + переклад' під ключ у нас - від 720 PLN. Для ОАЕ додається консульська легалізація - окремо." },
      { q: "Електронний чи паперовий KRK апостилювати?", a: "MSZ ставить apostille на паперовий документ, тому під закордонні процедури зазвичай беруть паперовий KRK. Якщо у вас лише e-KRK, підбираємо коректний формат під вимоги конкретної країни, щоб apostille прийняли." }
    ]
  },

  'apostille-svidetelstv-usc-wojewoda': {
    ru: [
      { q: "Кто ставит apostille на свидетельство о рождении или браке?", a: "На свидетельства USC (akt urodzenia, małżeństwa, zgonu) apostille ставит wojewoda по месту того USC, который выдал документ, а не MSZ. Это самая частая ошибка - идти со свидетельством в MSZ. Госпошлина - 60 PLN за документ." },
      { q: "Какой odpis нужен для apostille - skrócony или zupełny?", a: "Для большинства целей хватает odpisu skróconego (сокращённого). Odpis zupełny (полный) нужен, когда принимающая сторона хочет полную историю записи - например, после смены имени или внесённых правок. Уточните требования заранее." },
      { q: "Когда вместо apostille работает многоязычная форма?", a: "Внутри ЕС. По Регламенту 2016/1191 к польскому свидетельству можно бесплатно получить wielojęzyczny formularz, и тогда apostille и перевод не нужны. Для США, Канады, ОАЭ и стран СНГ форма не подойдёт - там нужен apostille." },
      { q: "В каком порядке делать apostille свидетельства для заграницы?", a: "Сначала свежий odpis из USC, потом apostille у воеводы, и только затем присяжный перевод вместе с текстом штампа. Перевод до apostille означает, что переводить придётся заново." },
      { q: "Можно ли поставить apostille в другом воеводстве?", a: "Apostille ставит wojewoda того воеводства, где находится USC, выдавший свидетельство. Если вы живёте в другом городе, мы оформляем подачу удалённо по доверенности, чтобы не ехать к нужному воеводе лично." }
    ],
    pl: [
      { q: "Kto przybija apostille na akcie urodzenia lub małżeństwa?", a: "Na odpisach USC (akt urodzenia, małżeństwa, zgonu) apostille przybija wojewoda właściwy dla USC, który wydał dokument, a nie MSZ. To najczęstszy błąd - iść z odpisem do MSZ. Opłata - 60 PLN za dokument." },
      { q: "Jaki odpis potrzebny do apostille - skrócony czy zupełny?", a: "Do większości celów wystarcza odpis skrócony. Odpis zupełny potrzebny jest, gdy strona przyjmująca chce pełną historię aktu - na przykład po zmianie imienia albo sprostowaniach. Sprawdź wymogi wcześniej." },
      { q: "Kiedy zamiast apostille działa formularz wielojęzyczny?", a: "Wewnątrz UE. Na mocy Rozporządzenia 2016/1191 do polskiego odpisu można bezpłatnie uzyskać formularz wielojęzyczny i wtedy apostille oraz tłumaczenie są zbędne. Do USA, Kanady, ZEA i państw WNP formularz się nie nada - tam potrzebne jest apostille." },
      { q: "W jakiej kolejności robić apostille odpisu za granicę?", a: "Najpierw świeży odpis z USC, potem apostille u wojewody, a dopiero później tłumaczenie przysięgłe razem z tekstem klauzuli. Tłumaczenie przed apostille oznacza, że trzeba będzie tłumaczyć ponownie." },
      { q: "Czy można przybić apostille w innym województwie?", a: "Apostille przybija wojewoda tego województwa, w którym znajduje się USC, który wydał odpis. Jeśli mieszkasz w innym mieście, składamy zdalnie na pełnomocnictwie, żebyś nie musiał jechać do właściwego wojewody osobiście." }
    ],
    en: [
      { q: "Who affixes the apostille on a birth or marriage certificate?", a: "On USC certificates (akt urodzenia, małżeństwa, zgonu) the apostille is affixed by the wojewoda for the USC that issued the document, not the MSZ. This is the most common mistake - going to the MSZ with the certificate. The fee is 60 PLN per document." },
      { q: "Which odpis is needed for the apostille - skrócony or zupełny?", a: "For most purposes an odpis skrócony (abridged) is enough. An odpis zupełny (full) is needed when the receiving side wants the record's full history - for instance after a name change or corrections. Check the requirements in advance." },
      { q: "When does the multilingual form work instead of an apostille?", a: "Within the EU. Under Regulation 2016/1191 a multilingual form can be obtained free of charge with a Polish certificate, and then the apostille and translation are unnecessary. For the USA, Canada, the UAE and the CIS the form will not do - an apostille is needed there." },
      { q: "In what order do I apostille a certificate for abroad?", a: "First a fresh odpis from the USC, then the apostille at the wojewoda, and only then a sworn translation together with the stamp text. Translating before the apostille means you will translate again." },
      { q: "Can the apostille be affixed in another voivodeship?", a: "The apostille is affixed by the wojewoda of the voivodeship where the issuing USC is located. If you live in another city, we file remotely under a power of attorney so you do not have to travel to that wojewoda in person." }
    ],
    tr: [
      { q: "Doğum veya evlilik belgesine apostille'yi kim vurur?", a: "USC belgelerine (akt urodzenia, małżeństwa, zgonu) apostille'yi MSZ değil, belgeyi veren USC için yetkili wojewoda vurur. En sık yapılan hata, belgeyle MSZ'ye gitmektir. Ücret belge başına 60 PLN." },
      { q: "Apostille için hangi odpis gerekir - skrócony mı zupełny mı?", a: "Çoğu amaç için odpis skrócony (kısa) yeterlidir. Odpis zupełny (tam), kabul eden taraf kaydın tam geçmişini istediğinde - örneğin ad değişikliği veya düzeltmeler sonrası - gerekir. Gereklilikleri önceden kontrol edin." },
      { q: "Apostille yerine çok dilli form ne zaman işler?", a: "AB içinde. 2016/1191 sayılı Tüzük uyarınca Polonya belgesiyle ücretsiz çok dilli form alınabilir ve o zaman apostille ile tercüme gereksizdir. ABD, Kanada, BAE ve BDT için form uygun olmaz - orada apostille gerekir." },
      { q: "Yurt dışı için belge apostille'sini hangi sırayla yapmalı?", a: "Önce USC'den taze odpis, sonra valilikte apostille, ancak ondan sonra şerh metniyle birlikte yeminli tercüme. Apostille'den önce tercüme, yeniden tercüme gerektirir." },
      { q: "Apostille başka bir eyalette vurulabilir mi?", a: "Apostille'yi, belgeyi veren USC'nin bulunduğu eyaletin valisi vurur. Başka bir şehirde yaşıyorsanız, yetkili valiye bizzat gitmeniz gerekmesin diye vekâletnameyle uzaktan başvururuz." }
    ],
    uk: [
      { q: "Хто ставить apostille на свідоцтво про народження чи шлюб?", a: "На свідоцтва USC (akt urodzenia, małżeństwa, zgonu) apostille ставить wojewoda за місцем того USC, який видав документ, а не MSZ. Це найчастіша помилка - іти зі свідоцтвом до MSZ. Держмито - 60 PLN за документ." },
      { q: "Який odpis потрібен для apostille - skrócony чи zupełny?", a: "Для більшості цілей вистачає odpisu skróconego (скороченого). Odpis zupełny (повний) потрібен, коли приймаюча сторона хоче повну історію запису - наприклад, після зміни імені чи виправлень. Уточніть вимоги заздалегідь." },
      { q: "Коли замість apostille працює багатомовна форма?", a: "Усередині ЄС. За Регламентом 2016/1191 до польського свідоцтва можна безкоштовно отримати wielojęzyczny formularz, і тоді apostille й переклад не потрібні. Для США, Канади, ОАЕ та країн СНД форма не підійде - там потрібен apostille." },
      { q: "У якому порядку робити apostille свідоцтва для закордону?", a: "Спершу свіжий odpis із USC, потім apostille у воєводи, і лише тоді присяжний переклад разом із текстом штампа. Переклад до apostille означає, що перекладати доведеться заново." },
      { q: "Чи можна поставити apostille в іншому воєводстві?", a: "Apostille ставить wojewoda того воєводства, де розташований USC, що видав свідоцтво. Якщо ви живете в іншому місті, ми оформлюємо подання віддалено за довіреністю, щоб не їхати до потрібного воєводи особисто." }
    ]
  },

  'apostille-i-nesudimost-klienty-iz-raznyh-stran': {
    ru: [
      { q: "Почему люди из разных стран заказывают именно apostille и справку KRK?", a: "Оба документа почти всегда нужны для перехода границы: эмиграция, виза, работа за рубежом, брак в другой стране, ПМЖ в Польше с документами с родины. Это самые 'пограничные' документы, поэтому к нам идут клиенты из СНГ, Турции, ЕС и США с одной по сути задачей." },
      { q: "Можно ли оформить apostille и справку удалённо?", a: "Да. Мы работаем по доверенности (pełnomocnictwo, при необходимости через консула), и почти весь процесс идёт дистанционно: получаем документ, ставим apostille в нужном органе, делаем присяжный перевод и передаём готовый пакет. Личные визиты в урзеды обычно не нужны." },
      { q: "Что чаще всего идёт не так при легализации документов?", a: "Не тот орган (на KRK - MSZ, на USC - wojewoda), перевод сделан до apostille, apostille заказан не в той стране, или документ устарел к моменту подачи. Внутри ЕС часто платят за лишний apostille, который по Регламенту 2016/1191 не нужен." },
      { q: "В какие страны чаще всего нужны эти документы?", a: "Польская KRK с apostille - в США, Канаду, Великобританию, ОАЭ, Австралию. Свидетельства USC - для брака и иммиграции за рубежом. Справки с родины с apostille - наоборот, для польских процедур вроде karty stałego pobytu." },
      { q: "Когда стоит делегировать, а когда справиться самому?", a: "Один простой документ в одну страну, особенно внутри ЕС, многие делают сами. Делегировать стоит, когда документов несколько, страна осложнена (РФ в 2024-2026), горит дедлайн или нужно состыковать сроки годности справки, apostille и перевода." }
    ],
    pl: [
      { q: "Dlaczego ludzie z różnych krajów zamawiają właśnie apostille i KRK?", a: "Oba dokumenty prawie zawsze potrzebne są do przekroczenia granicy: emigracja, wiza, praca za granicą, ślub w innym kraju, pobyt stały w Polsce z dokumentami z ojczyzny. To najbardziej 'graniczne' dokumenty, dlatego przychodzą do nas klienci z WNP, Turcji, UE i USA z jednym w istocie zadaniem." },
      { q: "Czy apostille i zaświadczenie można załatwić zdalnie?", a: "Tak. Pracujemy na pełnomocnictwie (w razie potrzeby przed konsulem), i niemal cały proces idzie zdalnie: uzyskujemy dokument, przybijamy apostille we właściwym organie, robimy tłumaczenie przysięgłe i przekazujemy gotowy pakiet. Osobiste wizyty w urzędach zwykle nie są potrzebne." },
      { q: "Co najczęściej idzie nie tak przy legalizacji dokumentów?", a: "Niewłaściwy organ (na KRK - MSZ, na USC - wojewoda), tłumaczenie zrobione przed apostille, apostille zamówione w niewłaściwym kraju albo dokument przeterminowany do złożenia. Wewnątrz UE często płaci się za zbędne apostille, które na mocy Rozporządzenia 2016/1191 nie jest potrzebne." },
      { q: "Do jakich krajów najczęściej potrzebne są te dokumenty?", a: "Polskie KRK z apostille - do USA, Kanady, Wielkiej Brytanii, ZEA, Australii. Odpisy USC - do ślubu i imigracji za granicą. Zaświadczenia z ojczyzny z apostille - odwrotnie, do polskich procedur jak karta stałego pobytu." },
      { q: "Kiedy warto zlecić, a kiedy poradzić sobie samemu?", a: "Jeden prosty dokument do jednego kraju, zwłaszcza w UE, wielu robi samodzielnie. Zlecić warto, gdy dokumentów jest kilka, kraj jest utrudniony (Rosja w 2024-2026), goni termin albo trzeba zgrać terminy ważności zaświadczenia, apostille i tłumaczenia." }
    ],
    en: [
      { q: "Why do people from different countries order exactly the apostille and the KRK?", a: "Both documents are almost always needed to cross a border: emigration, a visa, work abroad, a marriage in another country, permanent residence in Poland with documents from home. They are the most border-facing documents, so clients from the CIS, Turkey, the EU and the USA come to us with essentially one task." },
      { q: "Can the apostille and certificate be arranged remotely?", a: "Yes. We work on a power of attorney (a pełnomocnictwo, before a consul where needed), and almost the whole process runs remotely: we obtain the document, affix the apostille at the right body, do the sworn translation and hand over the finished package. Personal visits to offices are usually not needed." },
      { q: "What most often goes wrong in document legalisation?", a: "The wrong body (MSZ for the KRK, wojewoda for the USC), translation done before the apostille, the apostille ordered in the wrong country, or the document expiring by filing time. Within the EU people often pay for an unnecessary apostille that Regulation 2016/1191 makes redundant." },
      { q: "Which countries most often need these documents?", a: "The Polish KRK with an apostille - for the USA, Canada, the UK, the UAE, Australia. USC certificates - for marriage and immigration abroad. Home-country certificates with an apostille - the other way round, for Polish procedures like the karta stałego pobytu." },
      { q: "When is it worth delegating, and when can you manage yourself?", a: "One simple document to one country, especially within the EU, many do themselves. It is worth delegating when there are several documents, the country is difficult (Russia in 2024-2026), a deadline is tight, or you must align the validity of the certificate, apostille and translation." }
    ],
    tr: [
      { q: "Farklı ülkelerden insanlar neden tam da apostille ve KRK ister?", a: "İki belge de neredeyse her zaman bir sınırı geçmek için gerekir: göç, vize, yurt dışında iş, başka ülkede evlilik, ana vatandan belgelerle Polonya'da daimi ikamet. En sınıra yakın belgelerdir; bu yüzden BDT, Türkiye, AB ve ABD'den müşteriler özünde tek bir görevle bize gelir." },
      { q: "Apostille ve belge uzaktan halledilebilir mi?", a: "Evet. Vekâletnameyle çalışırız (gerektiğinde konsolos önünde) ve sürecin neredeyse tamamı uzaktan yürür: belgeyi alır, doğru makamda apostille vurdurur, yeminli tercüme yapar ve hazır paketi teslim ederiz. Kurumlara şahsen gitmeye genelde gerek yoktur." },
      { q: "Belge tasdikinde en sık ne ters gider?", a: "Yanlış makam (KRK için MSZ, USC için wojewoda), apostille'den önce tercüme, apostille'nin yanlış ülkede sipariş edilmesi ya da belgenin başvuru anına dek süresinin geçmesi. AB içinde 2016/1191 sayılı Tüzük uyarınca gereksiz olan apostille'ye sıkça para ödenir." },
      { q: "Bu belgeler en sık hangi ülkeler için gerekir?", a: "Apostilli Polonya KRK'si - ABD, Kanada, İngiltere, BAE, Avustralya için. USC belgeleri - yurt dışında evlilik ve göç için. Apostilli ana vatan belgeleri - tersine, karta stałego pobytu gibi Polonya işlemleri için." },
      { q: "Ne zaman devretmeli, ne zaman kendiniz halletmeli?", a: "Tek bir ülkeye tek bir basit belgeyi, özellikle AB içinde, çoğu kişi kendisi yapar. Birkaç belge varsa, ülke zorsa (2024-2026'da Rusya), süre sıkışıksa ya da belgenin, apostille'nin ve tercümenin geçerliliğini denk getirmek gerekiyorsa devretmek mantıklıdır." }
    ],
    uk: [
      { q: "Чому люди з різних країн замовляють саме apostille і довідку KRK?", a: "Обидва документи майже завжди потрібні для перетину кордону: еміграція, віза, робота за кордоном, шлюб в іншій країні, ПМП у Польщі з документами з батьківщини. Це найбільш 'прикордонні' документи, тому до нас ідуть клієнти зі СНД, Туреччини, ЄС і США з по суті одним завданням." },
      { q: "Чи можна оформити apostille і довідку віддалено?", a: "Так. Ми працюємо за довіреністю (pełnomocnictwo, за потреби через консула), і майже весь процес іде дистанційно: отримуємо документ, ставимо apostille в потрібному органі, робимо присяжний переклад і передаємо готовий пакет. Особисті візити до урядів зазвичай не потрібні." },
      { q: "Що найчастіше йде не так при легалізації документів?", a: "Не той орган (на KRK - MSZ, на USC - wojewoda), переклад зроблено до apostille, apostille замовлено не в тій країні, або документ застарів до моменту подання. Усередині ЄС часто платять за зайвий apostille, який за Регламентом 2016/1191 не потрібен." },
      { q: "У які країни найчастіше потрібні ці документи?", a: "Польський KRK з apostille - у США, Канаду, Велику Британію, ОАЕ, Австралію. Свідоцтва USC - для шлюбу та імміграції за кордоном. Довідки з батьківщини з apostille - навпаки, для польських процедур на кшталт karty stałego pobytu." },
      { q: "Коли варто делегувати, а коли впоратися самому?", a: "Один простий документ в одну країну, особливо всередині ЄС, багато хто робить сам. Делегувати варто, коли документів кілька, країна ускладнена (РФ у 2024-2026), горить дедлайн або треба зістикувати строки придатності довідки, apostille й перекладу." }
    ]
  },

  // ─── 2026-Q3: резидент ЕС, нулевые декларации, фирменный счёт ──────────
  'status-rezidenta-es-polsha-2026': {
    ru: [
      { q: 'Чем статус резидента ЕС отличается от карты сталего побыту?', a: 'Основанием. Pobyt stały (art. 195 u.o.c.) дают за связи с Польшей: брак с гражданином, польское происхождение, Karta Polaka. Статус резидента ЕС (art. 211 u.o.c.) - за экономическую интеграцию: 5 лет пребывания, стабильный доход и сертификат B1. Оба бессрочные, права внутри Польши почти одинаковые. Отличия: карта резидента ЕС меняется каждые 5 лет вместо 10, зато даёт упрощённый переезд в другую страну ЕС.' },
      { q: 'Засчитывается ли период по статусу UKR в пятилетний стаж?', a: 'Нет. По позиции Szefa Urzędu do Spraw Cudzoziemców время пребывания по ochronie czasowej для граждан Украины в стаж для резидента ЕС не входит. Счётчик стартует с момента перехода на обычное zezwolenie na pobyt czasowy - рабочую или бизнес-карту. Ochrona czasowa действует до 4 марта 2027 года, поэтому переход выгодно не откладывать.' },
      { q: 'Сколько стоит оформление статуса резидента ЕС?', a: 'Госпошлина 640 PLN за wniosek плюс 100 PLN за бланк карты. Экзамен B1 в государственной комиссии - около 300-400 PLN плюс 20 PLN за сертификат. Наш гонорар за ведение дела под ключ - от 2 000 PLN, подготовка к экзамену B1 - от 1 200 PLN. Присяжные переводы иностранных документов оплачиваются отдельно.' },
      { q: 'Обязателен ли сертификат B1 и чем его можно заменить?', a: 'Обязателен: это жёсткое условие art. 211, без сертификата воевода откажет. Заменить можно только свидетельством об окончании польской школы (podstawowa, liceum, technikum) или дипломом польского вуза с приложением, где польский указан языком обучения. Дети до 16 лет освобождены. Справки языковых курсов не подходят.' },
      { q: 'Сколько можно отсутствовать в Польше, не потеряв стаж?', a: 'Одна непрерывная поездка - максимум 6 месяцев, суммарно за пять лет - не больше 10 месяцев. Служебная delegacja до 6 месяцев считается пребыванием в Польше. При превышении любого из лимитов пятилетний счётчик начинается заново с даты возвращения - это самая частая причина отказов.' },
      { q: 'Через сколько после резидента ЕС можно подавать на гражданство?', a: 'Через 3 года. Uznanie za obywatela polskiego требует трёх лет непрерывного пребывания по pobytu stałemu, по статусу rezydenta długoterminowego UE или по prawie stałego pobytu, плюс стабильный доход, жильё и сертификат B1 - тот же, который вы уже сдали для резидента ЕС.' }
    ],
    en: [
      { q: 'How does EU long-term resident status differ from permanent residence?', a: 'By the grounds. Permanent residence (art. 195) is granted for ties to Poland: marriage to a citizen, Polish ancestry, Karta Polaka. EU long-term resident status (art. 211) is granted for economic integration: five years of residence, stable income and a B1 certificate. Both are indefinite and confer nearly identical rights in Poland. The differences: the EU resident card is replaced every five years instead of ten, but the status carries a simplified route to move to another EU member state.' },
      { q: 'Does time under UKR status count toward the five years?', a: 'No. Per the position of the Head of the Office for Foreigners, residence under temporary protection for Ukrainian citizens does not count toward EU long-term resident status. The clock starts when you switch to an ordinary temporary residence permit based on work or business. Temporary protection runs until 4 March 2027, so postponing the switch costs qualifying time.' },
      { q: 'What does EU long-term resident status cost?', a: 'A 640 PLN stamp duty for the application plus 100 PLN for the card blank. The state B1 exam costs roughly 300-400 PLN plus 20 PLN for the certificate. Our end-to-end fee starts at 2,000 PLN, and B1 exam preparation starts at 1,200 PLN. Sworn translations of foreign documents are billed separately.' },
      { q: 'Is the B1 certificate mandatory, and what can replace it?', a: 'It is mandatory: a hard condition of art. 211, and without it the voivode refuses. Only two documents substitute: a Polish school certificate (primary school, liceum, technikum) or a Polish university diploma whose supplement names Polish as the language of instruction. Children under 16 are exempt. Language-course certificates do not qualify.' },
      { q: 'How long can I be outside Poland without losing qualifying residence?', a: 'A single uninterrupted trip may not exceed six months, and all departures across the five years may not exceed ten months in total. A business posting of up to six months counts as residence in Poland. Exceeding either limit restarts the five-year count from your date of return, which is the most common reason for refusals.' },
      { q: 'How soon after this status can I apply for citizenship?', a: 'After three years. Recognition as a Polish citizen requires three years of uninterrupted residence on permanent residence, EU long-term resident status or a right of permanent residence, plus stable income, accommodation and the same B1 certificate you already sat for the EU resident application.' }
    ]
  },

  'nulevye-deklaracii-polsha-2026': {
    ru: [
      { q: 'Нужно ли сдавать JPK_V7, если оборотов не было?', a: 'Да, если вы czynny podatnik VAT. Обязанность растёт из статуса, а не из оборота: декларация идёт до 25 числа каждого месяца (JPK_V7M) или квартала (JPK_V7K) с нулями во всех полях. Исключение - период официального zawieszenia деятельности, и то при условии, что не было импорта услуг и WNT. Если VAT не нужен, снимитесь через VAT-Z.' },
      { q: 'Какой штраф за неподачу нулевой декларации в 2026 году?', a: 'Неподача - это wykroczenie skarbowe по art. 56 § 4 KKS: штраф от 1/10 до 20-кратной минимальной зарплаты, то есть от 480,60 до 96 120 PLN при минималке 4 806 PLN. Mandat karny на месте - до 9 612 PLN. Если бюджет недополучил больше 24 030 PLN, дело переквалифицируется в przestępstwo skarbowe с grzywną до 720 stawek dziennych.' },
      { q: 'Обязана ли спящая Sp. z o.o. сдавать CIT-8 и sprawozdanie finansowe?', a: 'CIT-8 - обязательно и без исключений, art. 27 ustawy o CIT требует декларацию за каждый налоговый год в течение 3 месяцев после его окончания. Со sprawozdaniem есть исключение: по art. 12 ust. 3b ustawy o rachunkowości книги можно не закрывать, если деятельность была приостановлена весь финансовый год и не было ни одной операции с имущественными или финансовыми последствиями, включая амортизацию.' },
      { q: 'Что будет, если не подавать декларации три месяца подряд?', a: 'Налоговая вычеркнет фирму из реестра VAT по art. 96 ust. 9a pkt 2 ustawy o VAT. Ваш NIP на białej liście станет неактивным, и контрагенты увидят это при проверке перед платежом от 15 000 PLN. Возврат в реестр - отдельная процедура с объяснениями, занимает недели.' },
      { q: 'Можно ли избежать штрафа за просроченные отчёты?', a: 'Да, через czynny żal по art. 16 KKS - добровольное заявление о нарушении вместе с подачей самих отчётов и уплатой недоимки. При правильно оформленном czynnym żalem наказание не применяется вообще. Условие: подать до того, как налоговая начала контроль или узнала о нарушении из другого источника.' },
      { q: 'Что дешевле для фирмы без работы: нули, приостановка или закрытие?', a: 'Для JDG почти всегда приостановка: с 2026 года её можно оформить бессрочно (лимит 24 месяца отменён), ZUS и JPK_V7 отпадают, остаётся годовой PIT. Для Sp. z o.o. приостановка может снять sprawozdanie, но CIT-8 остаётся, а лимит 24 месяца для spółek сохранился. Если планов нет вообще - ликвидация дешевле, потому что платится один раз.' }
    ],
    en: [
      { q: 'Do I have to file JPK_V7 if there was no turnover?', a: 'Yes, if you are an active VAT payer. The duty grows out of your status, not your turnover: the return is due by the 25th of every month (JPK_V7M) or quarter (JPK_V7K) with zeros in every field. The only exception is a period of formal suspension, and even then only if there was no import of services or intra-EU acquisition. If you do not need VAT, deregister with VAT-Z.' },
      { q: 'What is the penalty for not filing a nil return in 2026?', a: 'Non-filing is a fiscal offence under art. 56 § 4 of the Fiscal Penal Code: a fine of one-tenth to twenty times the minimum wage, meaning 480.60 to 96,120 PLN at the 4,806 PLN minimum wage. An on-the-spot penalty notice reaches 9,612 PLN. If the shortfall exceeds 24,030 PLN the act becomes a fiscal crime, with fines up to 720 daily rates.' },
      { q: 'Must a dormant Sp. z o.o. file CIT-8 and financial statements?', a: 'CIT-8 is mandatory with no exceptions: art. 27 of the CIT Act requires a return for every tax year within three months of its end. Financial statements have a carve-out: under art. 12(3b) of the Accounting Act the books need not be closed where activity was suspended for the entire financial year and no event with property or financial consequences occurred, depreciation included.' },
      { q: 'What happens if I miss returns for three consecutive months?', a: 'The tax office removes the company from the VAT register under art. 96(9a)(2) of the VAT Act. Your NIP shows as inactive on the white list, and counterparties see it when checking before any payment of 15,000 PLN or more. Getting reinstated is a separate procedure with explanations and takes weeks.' },
      { q: 'Can the penalty for overdue filings be avoided?', a: 'Yes, through czynny żal under art. 16 of the Fiscal Penal Code: a voluntary disclosure of the breach filed together with the returns themselves and payment of any arrears. Properly filed, no penalty is imposed at all. The condition is filing it before the tax office starts an inspection or learns of the breach from another source.' },
      { q: 'For a company with no work, is filing zeros, suspending or closing cheaper?', a: 'For a sole trader, almost always suspension: since 2026 it can be indefinite (the 24-month cap was lifted), ZUS and JPK_V7 fall away, and only the annual PIT remains. For an Sp. z o.o. suspension can remove the financial statements, but CIT-8 stays and the 24-month cap survives for companies. With no plans at all, liquidation is cheaper because it is paid once.' }
    ]
  },

  'konto-firmowe-v-polshe-2026': {
    ru: [
      { q: 'Можно ли работать с фирмой через личный счёт?', a: 'Формально JDG может, закон не запрещает. Практически нет: на białą listę podatników VAT попадают только rachunki rozliczeniowe, то есть фирменные. Если счёта нет в реестре, контрагент при платеже от 15 000 PLN брутто не сможет учесть сумму в расходах и попадёт под солидарную ответственность за ваш VAT. Для Sp. z o.o. отдельный счёт обязателен всегда.' },
      { q: 'Как заявить счёт на białą listę?', a: 'JDG заявляет номер счёта через CEIDG-1, spółka - через NIP-8 в налоговую, в течение 21 дня от регистрации в KRS. При смене счёта срок 7 дней. Реестр обновляется за один-два дня, после чего счёт видно на сайте Министерства финансов по NIP.' },
      { q: 'В каких банках можно открыть счёт без PESEL?', a: 'На 2026 год счёт по паспорту без PESEL реально открывают Bank Millennium, Santander Bank Polska, BNP Paribas и Alior. Нужны паспорт, документ о легальном пребывании (виза D, karta pobytu или UPO) и подтверждение адреса в Польше, обычно umowa najmu. Политики банков меняются без объявления, и решает конкретное отделение.' },
      { q: 'Что такое rachunek VAT и обязателен ли split payment?', a: 'Rachunek VAT - технический субсчёт, который банк автоматически открывает к каждому rachunkowi rozliczeniowemu; отдельной платы за него нет. Split payment обязателен при фактурах от 15 000 PLN брутто на товары и услуги из załącznika 15 ustawy o VAT: электроника, стройка, металлы, топливо, автозапчасти, уголь.' },
      { q: 'Почему банк отказывает в фирменном счёте?', a: 'Почти всегда из-за процедур AML, и банк не обязан объяснять решение. Типичные причины: нет реальной привязки к Польше (адрес, meldunek, договор аренды), непонятный источник средств, «рискованные» коды PKD (крипто, консалтинг, международная торговля), сложная структура собственности, отсутствие PESEL при слабом пакете документов. Возвращаться в тот же банк смысла мало.' },
      { q: 'Нужен ли счёт для регистрации Sp. z o.o. через S24?', a: 'Для самой регистрации нет: kapitał zakładowy 5 000 PLN можно объявить внесённым и внести позже, в том числе имуществом (art. 158 KSH). Но сразу после wpisu do KRS счёт нужен для внесения капитала деньгами, для NIP-8, для białej listy и для первых платежей и ZUS.' }
    ],
    en: [
      { q: 'Can I run a business through a personal account?', a: 'Formally a sole trader may; the law does not prohibit it. Practically, no: only settlement accounts - business accounts - reach the white list of VAT taxpayers. If your account is absent from the register, a counterparty paying 15,000 PLN gross or more cannot deduct the amount and takes on joint liability for your VAT. For an Sp. z o.o. a separate account is always mandatory.' },
      { q: 'How do I report an account to the white list?', a: 'A sole trader reports the account number through CEIDG-1; a company does it through NIP-8 to the tax office within 21 days of KRS registration. When changing accounts the deadline is seven days. The register updates within a day or two, after which the account is visible by NIP on the Ministry of Finance site.' },
      { q: 'Which banks open accounts without a PESEL?', a: 'As of 2026, Bank Millennium, Santander Bank Polska, BNP Paribas and Alior genuinely open passport-only accounts without PESEL. You need a passport, a document evidencing legal residence (a D visa, residence card or UPO) and proof of a Polish address, usually a lease agreement. Bank policies change without announcement, and the branch makes the call.' },
      { q: 'What is the VAT sub-account and is split payment mandatory?', a: 'The VAT sub-account is a technical sub-account the bank attaches automatically to every settlement account; there is no separate charge. Split payment is mandatory for invoices of 15,000 PLN gross or more covering goods and services from Annex 15 to the VAT Act: electronics, construction, metals, fuels, car parts and coal.' },
      { q: 'Why do banks refuse business accounts?', a: 'Almost always because of AML procedures, and the bank is not obliged to explain. Typical causes: no genuine link to Poland (address, registration, lease), an unclear source of funds, "risky" PKD activity codes such as crypto, consulting or international trade, a complex ownership structure, and no PESEL alongside a thin document pack. Returning to the same bank rarely helps.' },
      { q: 'Do I need an account to register an Sp. z o.o. through S24?', a: 'Not for the registration itself: the 5,000 PLN share capital can be declared as contributed and paid in later, including in kind (art. 158 of the Commercial Companies Code). But right after the KRS entry the account is needed to contribute the capital in cash, to file NIP-8, to get onto the white list, and for the first payments and ZUS.' }
    ]
  },

  ...BLOG_FAQ_2026_Q4
};

export function getBlogFaq(slug: string, locale: BlogFaqLocale): BlogFaqItem[] {
  return BLOG_FAQ[slug]?.[locale] ?? [];
}
