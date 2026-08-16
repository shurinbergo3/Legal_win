---
slug: ksef-luty-2026-e-faktury
title: 'KSeF 2026: od kiedy obowiązkowy i kto ma odroczenie'
description: >-
  Od 1 lutego 2026 wszystkie faktury B2B w Polsce wystawiane są przez KSeF.
  Podłączenie dla cudzoziemców, kary, kroki dla Sp. z o.o. i JDG.
locale: pl
publishDate: 2026-05-04T00:00:00.000Z
author: LegalWin
category: Podatki
keywords:
  - KSeF 2026
  - krajowy system e-faktur
  - obowiązkowy KSeF luty 2026
  - faktura ustrukturyzowana
  - podłączenie do KSeF
  - VAT cudzoziemiec Polska 2026
relatedServices:
  - /pl/uslugi/podatki-ksiegowosc
  - /pl/uslugi/rejestracja-sp-z-oo
  - /pl/uslugi/jdg
schema: Article
---

# KSeF: od kiedy obowiązkowy i kto ma odroczenie

Wokół KSeF jest sporo paniki i zamieszania z datami, więc od razu najważniejsze. Obowiązek wchodzi trzema falami: **od 1 lutego 2026** - tylko firmy z obrotem powyżej 200 mln zł za 2024 rok, **od 1 kwietnia 2026** - wszyscy pozostali, w tym JDG i Sp. z o.o., a mikroprzedsiębiorcy, u których sprzedaż udokumentowana fakturami nie przekracza 10 000 zł brutto miesięcznie, mogą do **31 grudnia 2026** wystawiać faktury po staremu.

Druga rzecz, która zdejmuje panikę: **sankcje ruszają dopiero 1 stycznia 2027 roku**. Od 1 lutego do 31 grudnia 2026 naruszenia obowiązków KSeF nie są karane. To okres przejściowy na ułożenie procesów, a nie powód do zwlekania - faktury przychodzące i tak trzeba odbierać przez system od pierwszego dnia.

## Czym jest KSeF

KSeF to państwowa platforma elektroniczna Ministerstwa Finansów do wystawiania, odbierania i przechowywania faktur ustrukturyzowanych. Dokumenty trzymane są 10 lat w archiwum państwowym i są dostępne dla organu skarbowego w każdej chwili.

Cel reformy - zamknąć luki VAT (według MF luka VAT w 2024 wynosiła 12,1%), zautomatyzować nadzór skarbowy i obniżyć koszt dokumentacji.

## Kogo dotyczy obowiązek

Daty zależą od wielkości firmy:

| Kto | Od kiedy KSeF obowiązkowy |
|---|---|
| Obrót powyżej 200 mln zł za 2024 rok | 1 lutego 2026 |
| Wszyscy pozostali: Sp. z o.o., JDG, spółki komandytowe, jawne, partnerskie | 1 kwietnia 2026 |
| Mikrofirmy ze sprzedażą fakturową do 10 000 zł brutto miesięcznie | 1 stycznia 2027 (do końca 2026 po staremu) |

Ważny szczegół przy mikrofirmach: limit liczy się miesięcznie. Przekroczysz 10 000 zł w danym miesiącu - od kolejnej faktury przechodzisz na KSeF i powrotu już nie ma.

Obowiązek dotyczy również:

- **Wszystkie Sp. z o.o.** niezależnie od obrotu
- **JDG płatnicy VAT** (czynni podatnicy VAT)
- **Spółki komandytowe, jawne, partnerskie** niezależnie od formy opodatkowania
- **Zagraniczne firmy ze stałym miejscem prowadzenia działalności w Polsce** (oddziały, przedstawicielstwa)

Zwolnieni do końca 2026:

- JDG na zwolnieniu z VAT (czysty ryczałt bez rejestracji VAT)
- Dostawcy B2C (do osób fizycznych)
- Faktury z kas fiskalnych (paragony)

Te grupy zostaną objęte obowiązkiem od 2027.

## Jak podłączyć się jako cudzoziemiec-przedsiębiorca

Kroki do podłączenia - trzeba zdążyć do 1 kwietnia 2026 (a przy obrocie powyżej 200 mln zł - już do 1 lutego):

### 1. Uzyskać kwalifikowany podpis lub Profil Zaufany

Do autoryzacji w KSeF potrzebujesz jednego z identyfikatorów:

- **Profil Zaufany** - bezpłatnie przez bank (mBank, PKO, ING) lub urząd gminy
- **Podpis kwalifikowany** - płatny e-podpis od KIR, Certum, EuroCert (od 200 PLN/rok)
- **Pieczęć kwalifikowana** - dla Sp. z o.o. (od 350 PLN/rok)
- **Token KSeF** - programowy token MF (bezpłatny, przez e-Urząd Skarbowy)

Dla większości cudzoziemców-przedsiębiorców optymalny jest Profil Zaufany przez polski bank (przy posiadaniu PESEL i karty pobytu).

### 2. Wskazać osoby uprawnione

W systemie KSeF trzeba jawnie wskazać, kto w firmie ma prawo wystawiać faktury. Robi się to formularzem **ZAW-FA** w e-Urzędzie Skarbowym. Bez tego nikt, łącznie z właścicielem Sp. z o.o., nie może działać w KSeF.

Standardowy zakres uprawnień:

- **Wystawianie faktur** - uprawnienie podstawowe
- **Odbiór faktur** - odbieranie przychodzących
- **Przeglądanie faktur** - sam podgląd (dla księgowego)

### 3. Zintegrować program księgowy

Większość polskich programów księgowych (iFirma, wFirma, Comarch ERP, Subiekt, inFakt) jest już zintegrowana z KSeF. Konfiguracja zajmuje 30-60 minut.

Jeśli masz własne ERP/CRM - wymagana integracja przez API KSeF. Dokumentacja na podatki.gov.pl, certyfikowani integratorzy - na stronie MF.

### 4. Przeszkolić zespół

Główna zmiana - faktury wystawiane są w nowej strukturze (XML). Stare szablony nie działają. Trzeba przejść na UTF-8 z polami: NIP nabywcy, JPK_FA(2), kod kraju itd.

Szkolenia MF są bezpłatne na podatki.gov.pl. Czas - 4-8 godzin dla poziomu podstawowego.

## Kary za niezgodność

Tu kryje się główne nieporozumienie. Poniższe sankcje są zapisane w ustawie o VAT, ale **wchodzą w życie dopiero 1 stycznia 2027 roku**. Przez cały 2026 rok naruszenia obowiązków KSeF formalnie nie są karane:

| Naruszenie | Kara |
|---|---|
| Niewystawienie faktury w KSeF | Do 100% kwoty VAT z faktury |
| Faktura papierowa B2B | Do 18 000 PLN za zdarzenie |
| Brak rejestracji w KSeF | Do 7 000 PLN + zakaz wystawiania faktur |
| Brak osób uprawnionych | Do 3 500 PLN/m-c |
| Faktura w niewłaściwym formacie | Do 5 000 PLN za fakturę |

Od 1 kwietnia 2026 dochodzi **automatyczna kontrola KSeF** - system porównuje JPK_VAT z fakturami w KSeF i automatycznie wykrywa niespójności. Wcześniej wymagało to kontroli skarbowej - teraz w czasie rzeczywistym.

## Co zmienia to dla zagranicznego biznesu w Polsce

Praktyczne skutki dla JDG i Sp. z o.o. z zagranicznym zarządem:

**Plusy:**

- Faktury kosztowe się nie gubią - 10 lat w archiwum KSeF
- Zwrot VAT przyspiesza z 60 do 25 dni
- Klientom nie trzeba wysyłać PDF - faktura jest już w ich KSeF
- Księgowy widzi wszystkie faktury na bieżąco

**Minusy:**

- Klienci zagraniczni z UE nie są w KSeF - potrzebne osobne szablony dla UE
- Stałe miejsce prowadzenia działalności w Polsce - obowiązkowe do podłączenia
- Brak internetu = brak możliwości wystawienia faktury (jest tryb offline na 24 h)

## Co zrobić od razu

Jeśli prowadzisz biznes w Polsce - kroki do 1 kwietnia 2026:

1. **Dziś:** sprawdź rejestrację w e-Urzędzie Skarbowym przez PUE - musi być aktywna.
2. **W tym tygodniu:** zrób Profil Zaufany lub podpis kwalifikowany.
3. **W ciągu miesiąca:** wypełnij ZAW-FA i zarejestruj osoby uprawnione w KSeF.
4. **Styczeń 2026:** skonfiguruj integrację programu księgowego i przetestuj 5-10 faktur testowych w sandbox KSeF.
5. **1 lutego:** przełącz się w pełni na KSeF.

LegalWin podłączyło ponad 150 klientów do KSeF w Q4 2025. Standardowa usługa podłączenia - od 800 PLN, w tym ZAW-FA, konfiguracja programu i testy. [Skontaktuj się](/pl/uslugi/podatki-ksiegowosc) - do 1 lutego 2026 zdążymy.

**Powiązane artykuły:**
- [Składka zdrowotna 2026 - reforma dla JDG i Sp. z o.o.](/pl/blog/skladka-zdrowotna-2026-reforma)
- [Ulgi podatkowe w Polsce: CIT estoński i IP Box](/pl/blog/nalogovye-lgoty-estonian-cit-ip-box)
- [JDG dla cudzoziemców w Polsce](/pl/blog/jdg-dlya-inostrancev-v-polshe)
- Usługa: [Podatki i księgowość](/pl/uslugi/podatki-ksiegowosc)
