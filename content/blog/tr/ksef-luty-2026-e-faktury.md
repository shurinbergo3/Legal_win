---
slug: ksef-luty-2026-e-faktury
title: "KSeF - Polonya'da Şubat 2026'dan itibaren zorunlu e-fatura"
description: "1 Şubat 2026'dan itibaren Polonya'daki tüm B2B faturalar yalnızca KSeF üzerinden düzenleniyor. Türk girişimcinin sisteme nasıl bağlanacağı, cezalar, Sp. z o.o. ve JDG için adımlar."
locale: tr
publishDate: 2026-05-04
author: LegalWin
category: Vergi ve muhasebe
keywords:
  - KSeF 2026
  - Polonya e-fatura
  - krajowy system e-faktur
  - obowiązkowy KSeF
  - faktura ustrukturyzowana
  - Polonya KDV yabancı 2026
relatedServices:
  - /tr/uslugi/podatki-ksiegowosc
  - /tr/uslugi/rejestracja-sp-z-oo
  - /tr/uslugi/jdg
schema: Article
---

# KSeF - Polonya'da Şubat 2026'dan itibaren zorunlu e-fatura

1 Şubat 2026 tarihinden itibaren Polonya'daki tüm girişimciler - JDG *(şahıs şirketi)*, Sp. z o.o. *(limited şirket)*, spółki komandytowe *(komandit ortaklık)* - B2B faturalarını yalnızca **KSeF (Krajowy System e-Faktur) *(Polonya elektronik fatura sistemi)*** üzerinden düzenlemek zorundadır. Posta yoluyla gönderilen kağıt veya PDF faturalar artık VAT *(KDV)* ve CIT *(kurumlar vergisi)* açısından geçerli belge sayılmaz. Uyumsuzluk cezası, tek bir fatura için VAT tutarının %100'üne kadar çıkar. Türk girişimci için bu şu anlama gelir: ya 31 Ocak 2026 tarihine kadar KSeF'e bağlanırsınız ya da iş ortaklarınız faturalarınızı kayıtlarına alamaz.

## KSeF nedir?

KSeF, Polonya Maliye Bakanlığı'nın yapılandırılmış faturaların *(faktury ustrukturyzowane)* düzenlenmesi, alınması ve saklanması için kullandığı resmi elektronik platformdur. Tüm belgeler 10 yıl boyunca devlet arşivinde tutulur ve istenildiği zaman vergi idaresinin erişimine açıktır.

Reformun amacı VAT açığını kapatmak (Maliye Bakanlığı verilerine göre 2024'te Polonya'da VAT açığı %12,1 idi), vergi denetimini otomatikleştirmek ve işletmeler için belge dolaşım maliyetini düşürmektir.

## Zorunluluk kimleri kapsıyor?

1 Şubat 2026 itibarıyla KSeF kullanım zorunluluğu şunları kapsar:

- **Tüm Sp. z o.o. şirketleri** - ciroya bakılmaksızın
- **VAT mükellefi tüm JDG'ler** (czynni podatnicy VAT *(aktif VAT mükellefi)* olarak kayıtlı olanlar)
- **Spółki komandytowe, jawne, partnerskie** - vergilendirme şekli ne olursa olsun
- **Polonya'da stałe miejsce prowadzenia działalności *(daimi iş yeri)* bulunan yabancı şirketler** (oddziały *(şube)*, temsilcilikler)

2026 sonuna kadar muaf olanlar:

- VAT'tan muaf JDG'ler (KDV kaydı bulunmayan saf ryczałt *(götürü vergi)* mükellefleri)
- B2C tedarikçileri (son tüketici - gerçek kişiler için)
- Kasa fiş makinelerinden (paragony) düzenlenen faturalar

Bu kategoriler 2027'den itibaren yükümlülük kapsamına alınacaktır.

## Türk girişimci sisteme nasıl bağlanır?

KSeF'e bağlanmak için 31 Ocak 2026 tarihine kadar tamamlanması gereken adımlar:

### 1. Kwalifikowany podpis elektroniczny veya Profil Zaufany edinin

KSeF'te kimlik doğrulaması için aşağıdaki kimlik araçlarından biri gerekir:

- **Profil Zaufany *(güvenilir profil)*** - banka aracılığıyla (mBank, PKO, ING) veya urząd gminy *(belediye dairesi)* üzerinden ücretsiz alınır
- **Podpis kwalifikowany *(nitelikli elektronik imza)*** - KIR, Certum, EuroCert gibi sağlayıcılardan ücretli (200 PLN/yıl ve üzeri)
- **Pieczęć kwalifikowana *(nitelikli elektronik mühür)*** - Sp. z o.o. için (350 PLN/yıl ve üzeri)
- **KSeF tokenı** - Maliye Bakanlığı'nın ücretsiz yazılım tokenı (e-Urząd Skarbowy üzerinden verilir)

Türk girişimcilerin çoğu için en pratik seçenek, PESEL ve Karta Pobytu *(Polonya oturum kartı)* sahibi iseniz Polonya bankası üzerinden alınan Profil Zaufany'dir.

### 2. Uprawnione osoby (yetkili kişileri) atayın

KSeF sisteminde, şirket içinde kimlerin fatura düzenleme hakkına sahip olduğunu açıkça belirtmeniz gerekir. Bu işlem e-Urząd Skarbowy'deki **ZAW-FA** formu üzerinden yapılır. Bu belge olmadan, Sp. z o.o. sahibi dahil hiç kimse KSeF'te işlem yapamaz.

Standart yetki kümeleri:

- **Wystawianie faktur *(fatura düzenleme)*** - temel yetki
- **Odbiór faktur *(fatura alma)*** - gelen faturalar
- **Przeglądanie faktur *(fatura görüntüleme)*** - yalnızca okuma (muhasebeci için)

### 3. Muhasebe yazılımını entegre edin

Polonya'daki muhasebe yazılımlarının çoğu (iFirma, wFirma, Comarch ERP, Subiekt, inFakt) zaten KSeF ile entegredir. Bu yazılımlardan birini kullanıyorsanız ayar süresi 30-60 dakikadır.

Kendi ERP/CRM sisteminiz varsa KSeF API üzerinden entegrasyon gereklidir. Belgeler podatki.gov.pl adresinde, sertifikalı entegratörlerin listesi ise Maliye Bakanlığı sitesinde bulunur.

### 4. Çalışanları eğitin

Kullanıcılar açısından temel değişiklik, faturaların yeni bir yapıda (XML) düzenlenmesidir. Eski şablonlar çalışmaz. UTF-8 kodlamasına ve şu alanlara geçiş yapılmalıdır: NIP nabywcy *(alıcının vergi numarası)*, JPK_FA(2), kod kraju *(ülke kodu)* ve diğerleri.

Maliye Bakanlığı'nın ücretsiz eğitimleri podatki.gov.pl adresinde mevcuttur. Temel seviye için süre 4-8 saattir.

## Uyumsuzluk cezaları

1 Şubat 2026 itibarıyla geçerli yaptırımlar:

| İhlal | Ceza |
|---|---|
| KSeF üzerinden fatura düzenlememek | Faturadaki VAT tutarının %100'üne kadar |
| B2B'de kağıt fatura | Olay başına 18.000 PLN'ye kadar |
| KSeF'e kayıt olmamak | 7.000 PLN'ye kadar + fatura düzenleme yasağı |
| Yetkili kişi atanmaması | Aylık 3.500 PLN'ye kadar |
| Yanlış formatta fatura | Fatura başına 5.000 PLN'ye kadar |

1 Nisan 2026'dan itibaren bu yaptırımlara **otomatik KSeF kontrolü** eklenir - sistem tüm JPK_VAT *(VAT tek kayıt dosyası)* dosyalarını KSeF'teki faturalarla karşılaştırır ve uyuşmazlıkları otomatik tespit eder. Önceden bu işlem için kontrola skarbowa *(vergi denetimi)* gerekiyordu - artık gerçek zamanlı yapılır.

## Polonya'daki yabancı işletme için ne değişiyor?

Yabancı yönetimli JDG ve Sp. z o.o. şirketleri için temel pratik sonuçlar:

**Avantajlar:**

- Faktury kosztowe *(gider faturaları)* artık kaybolmaz - hepsi KSeF'te 10 yıl saklanır
- VAT iadesi *(zwrot VAT)* süresi 60 günden 25 güne iner
- Müşterilere PDF kopyası göndermeniz gerekmez - fatura otomatik olarak onların KSeF hesabına düşer
- Muhasebeci tüm faturaları gerçek zamanlı görür

**Dezavantajlar:**

- AB'deki müşterileriniz varsa onlar KSeF'te değildir - UE-faktur *(AB faturaları)* için ayrı şablonlar gerekir
- Polonya'da daimi iş yerinin bulunması bağlantı için zorunludur
- İnternet yoksa fatura düzenleyemezsiniz (24 saatlik offline modu vardır)

## Şu anda ne yapmalısınız?

Polonya'da girişimciyseniz, 31 Ocak 2026'ya kadar yapılacaklar:

1. **Bugün:** PUE *(elektronik müşteri platformu)* üzerinden e-Urząd Skarbowy kaydınızın aktif olduğunu kontrol edin.
2. **Bu hafta:** Profil Zaufany veya podpis kwalifikowany alın.
3. **Bir ay içinde:** ZAW-FA formunu doldurun ve KSeF'te yetkili kişileri kaydedin.
4. **Ocak 2026:** Muhasebe yazılımınızın entegrasyonunu yapılandırın ve KSeF sandbox ortamında 5-10 deneme faturası test edin.
5. **1 Şubat:** Tamamen KSeF'e geçin.

LegalWin olarak 2025 son çeyreğinde 150'yi aşkın müşterimizi KSeF'e bağladık. Standart bağlantı hizmeti 800 PLN'den başlar; ZAW-FA, yazılım ayarları ve test sürecini içerir. [Bizimle iletişime geçin](/tr/uslugi/podatki-ksiegowosc) - 1 Şubat 2026'ya yetişmek hâlâ mümkündür.

**İlgili materyaller:**
- [Składka zdrowotna 2026 - JDG ve Sp. z o.o. için reform](/tr/blog/skladka-zdrowotna-2026-reforma)
- [Polonya vergi avantajları: Estonian CIT ve IP Box](/tr/blog/nalogovye-lgoty-estonian-cit-ip-box)
- [Yabancılar için Polonya'da JDG](/tr/blog/jdg-dlya-inostrancev-v-polshe)
- Hizmet: [Vergi ve muhasebe](/tr/uslugi/podatki-ksiegowosc)
