---
slug: ksef-luty-2026-e-faktury
title: 'KSeF 2026: обов’язкові e-фактури в Польщі'
description: >-
  З 1 лютого 2026 усі B2B-фактури в Польщі йдуть через KSeF. Підключення для
  іноземців, штрафи, що робити Sp. z o.o. і JDG.
locale: uk
publishDate: 2026-05-04T00:00:00.000Z
author: LegalWin
category: Податки
keywords:
  - KSeF 2026
  - krajowy system e-faktur
  - e-фактури Польща 2026
  - obowiązkowy KSeF
  - faktura ustrukturyzowana
  - VAT іноземець Польща 2026
relatedServices:
  - /uk/uslugi/podatki-ksiegowosc
  - /uk/uslugi/rejestracja-sp-z-oo
  - /uk/uslugi/jdg
schema: Article
---

# KSeF — обов’язкові e-фактури в Польщі з лютого 2026

З 1 лютого 2026 року всі польські підприємці — JDG, Sp. z o.o., spółki komandytowe — зобов’язані виставляти B2B-фактури виключно через **KSeF (Krajowy System e-Faktur)**. Паперові фактури і PDF поштою більше не вважаються legalnymi dokumentami zakupu для цілей VAT і CIT. Штраф за недотримання — до 100% kwoty VAT з однієї фактури. Для іноземного підприємця це означає: або ви підключаєтеся до KSeF до 31 січня 2026, або ваші контрагенти не зможуть прийняти ваші фактури до обліку.

## Що таке KSeF

KSeF — це державна електронна платформа Ministerstwa Finansów для виставлення, отримання та зберігання структурованих фактур (faktury ustrukturyzowane). Усі документи зберігаються 10 років у державному архіві й доступні податковому адміністратору в будь-який момент.

Ідея реформи — закрити luki у VAT (за даними MF, у 2024 році luka VAT у Польщі становила 12,1%), автоматизувати податковий нагляд і знизити вартість документообігу для бізнесу.

## Кого стосується обов’язок

Обов’язкове використання KSeF з 1 лютого 2026 року поширюється на:

- **Усі Sp. z o.o.** незалежно від обороту
- **Усіх JDG-платників VAT** (зареєстрованих як czynni podatnicy VAT)
- **Spółki komandytowe, jawne, partnerskie** незалежно від форми оподаткування
- **Іноземні фірми з польським stałym miejscem prowadzenia działalności** (oddziały, представництва)

Хто поки звільнений (до кінця 2026):

- JDG на zwolnieniu z VAT (чистий ryczałt без VAT-rejestracji)
- Постачальники B2C (для фізосіб-споживачів)
- Faktury z kas fiskalnych (paragony)

Ці категорії отримають обов’язок із 2027 року.

## Як іноземному підприємцю підключитися

Кроки для підключення до KSeF — обов’язкові до 31 січня 2026:

### 1. Отримати kwalifikowany podpis elektroniczny або Profil Zaufany

Для авторизації в KSeF потрібен один із ідентифікаторів:

- **Profil Zaufany** — безкоштовно через банк (mBank, PKO BP, ING) або urząd gminy
- **Podpis kwalifikowany** — платний електронний підпис від KIR, Certum, EuroCert (від 200 PLN/рік)
- **Pieczęć kwalifikowana** — для Sp. z o.o. (від 350 PLN/рік)
- **Token KSeF** — програмний токен від MF (безкоштовно, видається через e-Urząd Skarbowy)

Для більшості іноземних підприємців оптимально — Profil Zaufany через польський банк (якщо є PESEL і karta pobytu).

### 2. Призначити uprawnione osoby

У системі KSeF потрібно явно вказати, хто з членів компанії має право виставляти фактури. Це робиться через формуляр **ZAW-FA** в e-Urzędzie Skarbowym. Без цього документа ніхто, включно з власником Sp. z o.o., не може працювати в KSeF.

Стандартний набір uprawnień:

- **Wystawianie faktur** — основне право
- **Odbiór faktur** — отримання вхідних
- **Przeglądanie faktur** — лише перегляд (для бухгалтера)

### 3. Інтегрувати програму обліку

Більшість польських бухгалтерських програм (iFirma, wFirma, Comarch ERP, Subiekt, inFakt) уже інтегровані з KSeF. Якщо ви використовуєте їх — налаштування займає 30–60 хвилин.

Якщо у вас власна ERP/CRM — потрібна інтеграція через API KSeF. Документація на podatki.gov.pl, сертифіковані інтегратори — список на сайті MF.

### 4. Навчити співробітників

Головна зміна для користувачів — фактури виставляються за новою структурою (XML). Старі шаблони не працюють. Потрібно перейти на utf-8 з полями: NIP nabywcy, JPK_FA(2), kod kraju тощо.

Курси від MF — безкоштовні на podatki.gov.pl. Тривалість — 4–8 годин для базового рівня.

## Штрафи за недотримання

З 1 лютого 2026 діють такі санкції:

| Порушення | Штраф |
|---|---|
| Невиставлення faktury через KSeF | До 100% kwoty VAT з фактури |
| Faktura papierowa в B2B | До 18 000 PLN за факт |
| Niezarejestrowanie się do KSeF | До 7 000 PLN + zakaz wystawiania faktur |
| Brak uprawnionych osób | До 3 500 PLN/міс. відсутності |
| Faktura w nieprawidłowym formacie | До 5 000 PLN za fakturę |

З 1 квітня 2026 року до цього додається **automatyczna kontrola KSeF** — система порівнює всі JPK_VAT з фактурами в KSeF і автоматично виявляє розбіжності. Раніше для цього потрібна була kontrola skarbowa — тепер у реальному часі.

## Що це змінює для іноземного бізнесу в Польщі

Головні практичні наслідки для JDG і Sp. z o.o. з іноземним управлінням:

**Плюси:**

- Faktury kosztowe більше не губляться — усі зберігаються в KSeF 10 років
- Повернення VAT (zwrot VAT) пришвидшується з 60 до 25 днів
- Klientom не потрібно виставляти PDF-копії — фактура автоматично у їх KSeF
- Bukhalter бачить усі фактури в реальному часі

**Мінуси:**

- Якщо у вас є закордонні клієнти в ЄС — вони не в KSeF, потрібні окремі шаблони для UE-faktur
- Stałe miejsce prowadzenia działalności в Польщі — обов’язкове для підключення
- Немає інтернету = немає можливості виставити fakturę (є offline-tryb на 24 години)

## Що робити прямо зараз

Якщо ви підприємець у Польщі — дії до 31 січня 2026:

1. **Сьогодні:** перевірте реєстрацію в e-Urzędzie Skarbowym через PUE — має бути активна.
2. **Цього тижня:** оформіть Profil Zaufany або podpis kwalifikowany.
3. **Протягом місяця:** заповніть ZAW-FA і зареєструйте uprawnione osoby в KSeF.
4. **Січень 2026:** налаштуйте інтеграцію вашої бухгалтерської програми і протестуйте виставлення 5–10 testowych faktur через sandbox KSeF.
5. **1 лютого:** переключіться повністю на KSeF.

У LegalWin ми провели через підключення до KSeF понад 150 клієнтів у Q4 2025. Стандартна послуга підключення — від 800 PLN, включно з ZAW-FA, налаштуванням програми та тестуванням. [Зв’яжіться з нами](/uk/uslugi/podatki-ksiegowosc) — поки встигнути до 1 лютого 2026 ще реально.

**Пов’язані матеріали:**
- [Składka zdrowotna 2026 — реформа для JDG і Sp. z o.o.](/uk/blog/skladka-zdrowotna-2026-reforma)
- [Податкові пільги Польщі: Estonian CIT і IP Box](/uk/blog/nalogovye-lgoty-estonian-cit-ip-box)
- [JDG для іноземців у Польщі](/uk/blog/jdg-dlya-inostrancev-v-polshe)
- Послуга: [Податки і бухгалтерія](/uk/uslugi/podatki-ksiegowosc)
