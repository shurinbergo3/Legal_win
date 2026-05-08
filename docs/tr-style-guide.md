# LegalWin — Turkish (TR) Style Guide

> Internal reference for translating LegalWin into Turkish (`tr` locale).
> Sources: real Turkish-language sites covering Polish immigration/legal services
> (atlaslaw.pl, polonyaakademi.com, vizem.net, polonyadayiz.com, intepolska.com,
> ferhatkule.av.tr, gopoland.eu, polonyakonsoloslugu.istanbul, gov.pl/web/turkiye).

---

## 1. Voice & register

- **Formal "siz"** throughout. Address the reader as a future client.
- **Imperative-instructional, but soft.** "X yapmanız gerekir" (you need to do X), "Y için A başvurusunda bulunabilirsiniz" (you may apply for Y).
- **No anglicisms** when a native Turkish word exists: `başvuru` (application), `belge` (document), `süreç` (process), `şart` (condition), `harç` (fee).
- **Sentence length: short.** Turkish is agglutinative; over-long sentences are hard to parse. Break into 2-3 short sentences instead of one long one.
- **No exclamation marks** in legal copy. No emojis (per project rule).
- **Numerals:** Turkish format with **period thousands separator**, comma decimal: `4.806 PLN`, `30.000 €`, `8-14 ay` (months).
- **Months in Turkish:** Ocak, Şubat, Mart, Nisan, Mayıs, Haziran, Temmuz, Ağustos, Eylül, Ekim, Kasım, Aralık.
- **Dates:** `1 Ocak 2026`, `Aralık 2025'ten itibaren`.
- **Currency:** keep `PLN`, `€`, `$` symbols. Don't translate to `zł` in text; use `PLN` (this matches Turkish habit).
- **Quotation marks:** straight `"..."`. Match `en.json` style.
- **Hyphen rule:** project-wide. Only short hyphen-minus `-`. Never `—` `–` `‒`. Applies to TR too.

---

## 2. Glossary — Polish bureaucratic terms

**Rule:** Polish terms stay in Polish. On **first mention per page/section**, follow with Turkish gloss in parentheses. On subsequent mentions, use the Polish term alone (or the Turkish gloss alone) consistently.

### Immigration & residence

| Polish term | TR gloss (parenthetical, first mention) | Notes |
|---|---|---|
| Karta Pobytu | *(Polonya oturum kartı)* | The standard Turkish term is "oturum kartı" / "oturma izni". Use Polish in body, Turkish in titles for SEO. |
| Karta czasowego pobytu | *(geçici oturum kartı)* | |
| Karta stałego pobytu | *(daimi oturum kartı)* | |
| Wojewoda | *(eyalet valisi)* | Standard transliteration in TR press: `voyvoda`/`voyvodalık`. We use `wojewoda` *(eyalet valisi)*. |
| Urząd Wojewódzki (UW) | *(eyalet idaresi / Voyvodalık Ofisi)* | |
| Województwo | *(eyalet)* | Mazowieckie województwo *(Mazowiecki eyaleti)*. |
| MOS v2.0 | *(yabancılar için yeni e-başvuru sistemi)* | Newer term; explain on first mention in each post. |
| eDoręczenia | *(elektronik resmi yazışma sistemi)* | |
| inPOL | *(eski yabancılar e-başvuru sistemi)* | Mention only when contrasting with MOS v2.0. |
| zezwolenie na pobyt | *(oturma izni)* | |
| zezwolenie na pracę | *(çalışma izni)* | |
| Niebieska Karta UE | *(AB Mavi Kartı)* | |
| meldunek / zameldowanie | *(adres kaydı / ikamet beyanı)* | |
| Karta Polaka | *(Polonyalı Kartı)* | Document for Polish heritage applicants. |
| ulusal vize / D vizesi | — | Native Turkish; no Polish needed unless quoting `wiza krajowa typu D`. |
| obywatelstwo | *(vatandaşlık)* | Use `Polonya vatandaşlığı` in body. |

### Identifiers

| Polish term | TR gloss | Notes |
|---|---|---|
| PESEL | *(kişisel kimlik numarası)* | Keep as `PESEL`. |
| NIP | *(vergi kimlik numarası)* | Keep as `NIP`. |
| REGON | *(işletme istatistik numarası)* | |
| KRS | *(Ulusal Mahkeme Sicili)* | Keep as `KRS`. |

### Business

| Polish term | TR gloss | Notes |
|---|---|---|
| Sp. z o.o. | *(limited şirket)* | Standard. |
| S.A. | *(anonim şirket)* | |
| JDG / jednoosobowa działalność gospodarcza | *(şahıs şirketi / serbest meslek)* | |
| spółka cywilna | *(adi ortaklık)* | |
| umowa spółki | *(şirket sözleşmesi)* | |
| akt notarialny | *(noter senedi)* | |
| KSeF | *(Polonya elektronik fatura sistemi)* | Mandatory e-invoicing system. |
| S24 | *(çevrimiçi şirket kuruluş portalı)* | |

### Tax & accounting

| Polish term | TR gloss | Notes |
|---|---|---|
| ZUS | *(Polonya Sosyal Güvenlik Kurumu)* | Keep as `ZUS`. |
| US / Urząd Skarbowy | *(vergi dairesi)* | |
| PIT | *(gelir vergisi beyannamesi)* | Keep as `PIT-37`, `PIT-11`. |
| CIT | *(kurumlar vergisi)* | |
| VAT | *(KDV)* | Use `VAT (KDV)` once, then either. |
| opłata skarbowa | *(damga vergisi)* | |
| podatek od czynności cywilnoprawnych (PCC) | *(medeni hukuk işlem vergisi)* | |

### Employment & contracts

| Polish term | TR gloss | Notes |
|---|---|---|
| umowa o pracę | *(belirli/belirsiz süreli iş sözleşmesi)* | |
| umowa zlecenie | *(hizmet sözleşmesi)* | |
| umowa o dzieło | *(eser sözleşmesi)* | |
| pracodawca | *(işveren)* | |
| pracownik | *(işçi/çalışan)* | |
| wynagrodzenie minimalne | *(asgari ücret)* | |

### Documents & procedure

| Polish term | TR gloss | Notes |
|---|---|---|
| wniosek | *(başvuru formu / başvuru)* | |
| decyzja | *(karar)* | |
| odwołanie / apelacja | *(itiraz / temyiz)* | |
| pełnomocnictwo | *(vekaletname)* | |
| tłumacz przysięgły | *(yeminli tercüman)* | |
| apostille | — | Universal term. |
| zaświadczenie o niekaralności | *(adli sicil belgesi)* | |
| zaświadczenie o zameldowaniu | *(ikamet belgesi)* | |
| zaproszenie | *(davet mektubu)* | |
| upoważnienie | *(yetki belgesi)* | |

### Geographic & official

| Polish term | TR gloss | Notes |
|---|---|---|
| Warszawa | *(Varşova)* | Use Turkish form `Varşova` in body. |
| Kraków | *(Krakov)* | |
| Mazowieckie | *(Mazowiecki eyaleti)* | |
| Rzeczpospolita Polska | *(Polonya Cumhuriyeti)* | |

---

## 3. SEO patterns (real Turkish search habits)

Turkish search queries follow consistent structures. Use these in titles, H1s, meta descriptions, FAQ headers.

### Title/H1 templates

- **`Polonya [konu] nasıl alınır?`** — most common: how to obtain
  - `Polonya oturum kartı nasıl alınır?`
  - `Polonya vatandaşlığı nasıl alınır?`
  - `PESEL numarası nasıl alınır?`
- **`Polonya'da [konu]`** — locative pattern
  - `Polonya'da şirket kurmak`
  - `Polonya'da oturum izni`
  - `Polonya'da vergi sistemi`
- **`Polonya [konu]: Şartlar, [...]`** — colon + features
  - `Polonya Vatandaşlığı: Şartlar, Süreç ve Belgeler 2026`
- **`[Konu] Şartları Nelerdir?`** — what are the requirements
- **`[Konu] Başvurusu`** — application

### Meta description template

> `[Konu] hakkında 2026 rehberi: başvuru süreci, gerekli belgeler, harçlar ve süreler. LegalWin Varşova hukuk bürosundan profesyonel destek.`

### High-volume Turkish keyword clusters

| Cluster | Primary | Secondary |
|---|---|---|
| Residence permit | `Polonya oturma izni`, `Polonya oturum kartı`, `Karta pobytu` | `geçici oturum izni`, `daimi oturum izni`, `oturum izni başvurusu`, `oturum izni şartları`, `MOS v2.0 başvurusu` |
| Citizenship | `Polonya vatandaşlığı`, `Polonya pasaportu` | `Polonya vatandaşlığı şartları`, `evlilik yoluyla Polonya vatandaşlığı`, `Polonya çifte vatandaşlık` |
| Business | `Polonya'da şirket kurmak`, `Sp. z o.o. nasıl kurulur`, `JDG Polonya` | `Polonya limited şirket`, `Polonya şahıs şirketi`, `S24 sistemi`, `KRS kayıt` |
| Tax | `Polonya vergi sistemi`, `KDV Polonya`, `PIT-37 iadesi` | `Polonya gelir vergisi`, `KSeF zorunluluğu`, `Polonya muhasebe` |
| Identity docs | `PESEL nasıl alınır`, `meldunek nedir`, `NIP numarası` | `Polonya kimlik numarası`, `Polonya adres kaydı` |
| Employment | `Polonya çalışma izni`, `Polonya iş vizesi` | `umowa o pracę`, `Polonya asgari ücret 2026` |

### FAQ-question patterns (used in PAA)

- `[Konu] için hangi belgeler gereklidir?`
- `[Konu] kaç gün/ay sürer?`
- `[Konu] başvurusu nereye yapılır?`
- `[Konu] ücreti ne kadar?`
- `[Konu] nasıl uzatılır?`
- `[Konu] reddedilirse ne yapılır?`
- `[Konu] Türkiye'den yapılabilir mi?`
- `[Konu] yabancılar için geçerli mi?`

---

## 4. Cultural & audience adaptation

The Turkish audience for Polish legal services has **different concerns** than the CIS audience the RU content was written for. Adapt, do not translate literally.

| Adapt away | Adapt toward |
|---|---|
| References to "СНГ", "Россия", "Беларусь", post-Soviet context | Turkish-specific concerns: Schengen visa from Türkiye, Türkiye-Polonya çifte vatandaşlık (allowed), Türk vatandaşları için iş vizesi süreci |
| Russian-specific tax double-treaty examples | Türkiye-Polonya ÇVÖA *(çifte vergilendirmeyi önleme anlaşması)* — exists, mention it |
| Cyrillic name transliteration mentions | Latin transliteration; mention `tłumaczenie przysięgłe z j. tureckiego` *(Türkçeden yeminli tercüme)* |
| "русскоязычные адвокаты" framing | "Türkçe konuşan hukuk ekibi" — but be honest: LegalWin operates in PL/RU/EN. If TR-speaking staff is not a guarantee, position as: written communication in Turkish + interpreter for in-person. |
| Mentions of conscription, mobilization, sanctions | These don't apply to Turkish audience. Drop. |

### Things to **add** for the Turkish audience

- **Schengen + Polish work-permit visa** workflow (D-vize from Polish consulate in Istanbul/Ankara).
- **Halal-life remarks** are **not** typical in legal copy — don't add them. Stay neutral.
- **Türkiye-Polonya çifte vatandaşlık** is allowed by both sides — surface this in citizenship articles.
- **Türk vatandaşları için ulusal vize başvurusu** through the consulate in Istanbul (Beyoğlu) or Ankara.
- **Gümrük ve eşya nakli** mentions belong only in relocation articles.
- For business setup: Türkiye-Polonya ticaret hacmi context where relevant.

---

## 5. Linguistic dos & don'ts

### Do
- Use **vowel harmony** correctly. Suffix endings must match: `başvuru**nuz**`, `belge**lerin**iz`.
- Use possessive constructions: `başvurunuzun süresi`, `belgelerinin tamamı`.
- Use locative `-da/-de/-ta/-te` for "in Poland": `Polonya'da` (apostrophe before suffix on proper nouns).
- Use ablative `-dan/-den/-tan/-ten` for "from": `Türkiye'den`, `konsolosluktan`.
- Use **siz** form throughout: `başvurabilirsiniz`, `gerekecektir`, `yapmanız gerekir`.

### Don't
- Don't write `siz başvurabilirsiniz` — drop the pronoun, the suffix carries it.
- Don't use Russian/Slavic word order. Turkish is SOV.
- Don't translate `karta` as Turkish "kart" without context — `Karta Pobytu` ≠ `pobyt kartı`.
- Don't write English/French loanwords where a native Turkish word exists. `belgeler` not `dokümanlar`. `başvuru` not `aplikasyon`.
- Don't use the `e-` prefix for digital things if a Turkish word exists: `çevrimiçi başvuru` is more common than `e-başvuru` in long-form content.
- Don't use `prosedür` for a legal `procedure` — use `süreç` (process) or `usul` (procedure, formal).

---

## 6. Concrete before/after examples

### Example 1 — Service title
- **EN:** Karta Pobytu — Temporary Residence Card
- **DON'T:** "Karta Pobytu — Geçici İkamet Kartı" *(too literal, missed the SEO term)*
- **DO:** "Karta Pobytu — Polonya Geçici Oturum Kartı"

### Example 2 — Lead paragraph
- **RU:** "Карта побыту - биометрический документ, подтверждающий право иностранца проживать в Польше до 3 лет."
- **DON'T:** "Karta pobytu, yabancının Polonya'da 3 yıla kadar yaşama hakkını doğrulayan biyometrik bir belgedir." *(grammatically OK but reads like translation)*
- **DO:** "Karta Pobytu *(Polonya geçici oturum kartı)*, yabancılara Polonya'da 3 yıla kadar yasal ikamet hakkı veren biyometrik bir belgedir. 2026 itibarıyla başvurular yalnızca MOS v2.0 sistemi üzerinden alınmaktadır."

### Example 3 — FAQ question
- **DON'T:** "Какие документы нужны?" → "Hangi belgeler gereklidir?"
- **DO:** "2026 yılında Polonya oturum kartı için hangi belgeler gereklidir?" *(includes year + topic; matches Turkish PAA style)*

### Example 4 — CTA
- **EN:** "Start your application — book a 30-minute consultation."
- **DO:** "Başvurunuza başlayalım — 30 dakikalık ücretsiz danışmanlık için randevu alın."

---

## 7. Application checklist (per page/article)

Before saving any TR copy:
- [ ] All Polish terms wrapped per glossary (PL term + TR gloss in parens on first mention).
- [ ] Title and H1 follow a Turkish SEO template from §3.
- [ ] Numbers in Turkish format (`4.806 PLN`, not `4,806`).
- [ ] Months in Turkish.
- [ ] Cyrillic names not present (or transliterated).
- [ ] No CIS-specific references; Turkish-specific where relevant added (Türkiye-Polonya).
- [ ] Hyphen-minus only (no em/en dashes).
- [ ] FAQ rewritten under Turkish PAA patterns, not translated word-for-word.
- [ ] Reading test: a Turkish lawyer or marketing professional would not flag this as machine translation.
