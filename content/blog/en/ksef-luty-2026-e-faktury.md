---
slug: ksef-luty-2026-e-faktury
title: 'KSeF 2026: When It Becomes Mandatory and Who Gets a Delay'
description: >-
  KSeF: 1 February 2026 for turnover above PLN 200m, 1 April for everyone else,
  micro-firms under PLN 10,000 can wait until year end. Penalties from 2027.
locale: en
publishDate: 2026-05-04T00:00:00.000Z
author: LegalWin
category: Tax
keywords:
  - KSeF 2026
  - Polish national e-invoicing system
  - mandatory KSeF February 2026
  - structured invoice Poland
  - KSeF onboarding foreign entrepreneur
  - Polish VAT 2026 compliance
relatedServices:
  - /en/uslugi/podatki-ksiegowosc
  - /en/uslugi/rejestracja-sp-z-oo
  - /en/uslugi/jdg
schema: Article
---

# KSeF: when it becomes mandatory and who gets a delay

There is a lot of panic and date confusion around KSeF, so here is the short version. The duty arrives in three waves: **1 February 2026** for firms with 2024 turnover above PLN 200 million, **1 April 2026** for everyone else including JDG and Sp. z o.o., and micro-firms whose invoiced sales stay at or below PLN 10,000 gross per month may keep invoicing the old way until **31 December 2026**.

The second thing that takes the edge off: **penalties only start on 1 January 2027**. Between 1 February and 31 December 2026 breaches of the KSeF duty carry no sanction. That is a transition window to get your processes right, not a reason to stall - you still have to receive incoming invoices through the system from day one.

Once your date arrives, B2B invoices go exclusively through **KSeF (Krajowy System e-Faktur)**. Paper invoices and PDF-by-email no longer count as legal purchase documents for VAT and CIT. For a foreign entrepreneur this means: connect to KSeF before your wave date, or your contracting parties cannot book your invoices.

## What KSeF is

KSeF is the Ministry of Finance's state e-platform for issuing, receiving and storing structured invoices (faktury ustrukturyzowane). All documents are stored for 10 years in the state archive and accessible to the tax authority at any time.

The reform aims to close VAT gaps (the Polish VAT gap was 12.1% in 2024 according to the Ministry of Finance), automate tax oversight, and lower documentation costs for businesses.

## Who is covered by the obligation

The date depends on the size of the business:

| Who | KSeF mandatory from |
|---|---|
| Turnover above PLN 200 million in 2024 | 1 February 2026 |
| Everyone else: Sp. z o.o., JDG, spółki komandytowe, jawne, partnerskie | 1 April 2026 |
| Micro-firms invoicing up to PLN 10,000 gross per month | 1 January 2027 (old rules until end of 2026) |

One detail on the micro-firm relief: the limit is counted month by month. Go over PLN 10,000 in a given month and the next invoice goes through KSeF, with no way back.

The duty also covers:

- **All Sp. z o.o.** regardless of turnover
- **All JDG VAT payers** (registered as active VAT taxpayers)
- **Spółki komandytowe, jawne, partnerskie** regardless of taxation form
- **Foreign companies with a Polish fixed place of business** (branches, representative offices)

Currently exempt (until end of 2026):

- JDGs on VAT exemption (pure ryczałt without VAT registration)
- B2C suppliers (to private individuals)
- Receipts from fiscal cash registers (paragony)

These groups will be covered from 2027.

## How a foreign entrepreneur connects

Connection steps - to be done before 1 April 2026 (or before 1 February if your turnover exceeds PLN 200 million):

### 1. Get a qualified e-signature or Profil Zaufany

To authenticate in KSeF you need one of:

- **Profil Zaufany** - free via Polish banks (mBank, PKO, ING) or a gmina office
- **Qualified e-signature** - paid e-signature from KIR, Certum, EuroCert (from PLN 200/year)
- **Qualified seal** - for Sp. z o.o. (from PLN 350/year)
- **KSeF token** - software token issued by MF (free, via e-Urząd Skarbowy)

For most foreign entrepreneurs, Profil Zaufany via a Polish bank is optimal (with PESEL and a residence card).

### 2. Designate authorised persons

KSeF requires explicit designation of who in the company can issue invoices. This is filed via the **ZAW-FA** form in e-Urząd Skarbowy. Without it, no one - not even a Sp. z o.o. owner - can act in KSeF.

Standard authorisations:

- **Issuing invoices** - primary right
- **Receiving invoices** - incoming
- **Viewing invoices** - view-only (for the accountant)

### 3. Integrate accounting software

Most Polish accounting platforms (iFirma, wFirma, Comarch ERP, Subiekt, inFakt) are already KSeF-integrated. Configuration takes 30-60 minutes.

If you run your own ERP/CRM, integration goes via the KSeF API. Documentation lives at podatki.gov.pl and the MF site lists certified integrators.

### 4. Train your team

The main user-facing change: invoices are issued in a new structure (XML). Old templates do not work. You move to UTF-8 with fields including NIP nabywcy, JPK_FA(2), country code, etc.

MF training is free at podatki.gov.pl. Duration: 4-8 hours for the basic level.

## Penalties for non-compliance

This is where the main misunderstanding sits. The penalties below are written into the VAT act, but they **only take effect on 1 January 2027**. Throughout 2026 breaches of the KSeF duty carry no sanction:

| Violation | Penalty |
|---|---|
| Failing to issue an invoice in KSeF | Up to 100% of VAT on the invoice |
| Paper invoice in B2B | Up to PLN 18,000 per occurrence |
| Failure to register in KSeF | Up to PLN 7,000 + ban on invoicing |
| Missing authorised persons | Up to PLN 3,500/month |
| Invoice in wrong format | Up to PLN 5,000 per invoice |

From 1 April 2026, **automated KSeF audits** kick in - the system reconciles JPK_VAT with KSeF invoices and flags mismatches automatically. Previously this required a tax inspection - now it's real-time.

## What this changes for foreign-owned business in Poland

Practical impact for JDG and Sp. z o.o. with foreign management:

**Pros:**

- Cost invoices stop disappearing - KSeF archives them for 10 years
- VAT refund accelerates from 60 to 25 days
- Clients no longer need PDF copies - the invoice is already in their KSeF
- Your accountant sees all invoices in real time

**Cons:**

- EU clients aren't in KSeF - separate templates for UE invoices
- A Polish fixed place of business is mandatory to connect
- No internet = no invoicing capability (a 24-hour offline mode exists)

## What to do right now

Steps before 1 April 2026:

1. **Today:** verify your registration in e-Urząd Skarbowy via PUE - must be active.
2. **This week:** set up Profil Zaufany or a qualified e-signature.
3. **Within a month:** file ZAW-FA and register authorised persons in KSeF.
4. **January 2026:** configure your accounting software integration and test 5-10 invoices via the KSeF sandbox.
5. **1 February:** switch fully to KSeF.

LegalWin onboarded over 150 clients to KSeF in Q4 2025. Standard onboarding service from PLN 800 - includes ZAW-FA, software setup and testing. [Get in touch](/en/uslugi/podatki-ksiegowosc) - there's still time to make 1 February 2026.

**Related articles:**
- [Polish health contribution 2026 - reform for JDG and Sp. z o.o.](/en/blog/skladka-zdrowotna-2026-reforma)
- [Polish tax breaks: Estonian CIT and IP Box](/en/blog/nalogovye-lgoty-estonian-cit-ip-box)
- [JDG for foreigners in Poland](/en/blog/jdg-dlya-inostrancev-v-polshe)
- Service: [Tax & accounting](/en/uslugi/podatki-ksiegowosc)
