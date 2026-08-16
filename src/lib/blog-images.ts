// Maps blog post slugs to existing service webp covers.
// Images intentionally repeat across posts - see CLAUDE.md and product brief.
// The matcher reads as: "which service practice does this article most align with".

const SLUG_TO_IMAGE: Record<string, string> = {
  // Existing posts
  'apostille-v-polshe': '/services/apostille.webp',
  'brak-s-polyakom-registratsiya': '/services/warszawa-defilad-noc.webp',
  'cheklist-novopribyvshih-v-polshu': '/services/gdansk-aerial.webp',
  'jdg-dlya-inostrancev-v-polshe': '/services/warszawa-spire.webp',
  'kak-podat-zayavlenie-mos-2-0': '/services/karta-pobytu.webp',
  'karta-cukr-dlya-ukraincev': '/services/karta-pobytu.webp',
  'karta-pobytu-2026-poshagovaya-instrukciya': '/services/karta-pobytu.webp',
  'karta-pobytu-privyazka-k-rabotodatelyu': '/services/karta-pobytu.webp',
  'karta-polaka-kak-poluchit': '/services/warszawa-swiatynia.webp',
  'karta-stalego-pobytu-pmzh-polsha-2026': '/services/warszawa-pkin-noc.webp',
  'kod-95-polsha-kak-poluchit': '/services/kod-95.webp',
  'legalizacja-w-polshe-warszawa': '/services/warszawa-pkin-noc.webp',
  'obmen-azerbajdzhanskih-prav-na-polskie': '/services/wymiana-prawa-jazdy.webp',
  'obmen-prav-na-polskie-2026': '/services/wymiana-prawa-jazdy.webp',
  'obmen-tureckih-prav-na-polskie': '/services/wymiana-prawa-jazdy.webp',
  'otkaz-po-karte-pobytu': '/services/apelacje.webp',
  'otkrytie-bankovskogo-scheta-v-polshe': '/services/warszawa-spire.webp',
  'otkrytie-sp-z-o-o-polsha-instrukciya': '/services/warszawa-spire.webp',
  'pesel-profil-zaufany-mdowod-posle-karty-pobytu': '/services/pesel.webp',
  'zapis-detei-v-polskuyu-shkolu': '/services/zapis-dzieci-do-szkoly.webp',

  // New series - 22 articles
  'razreshenie-mswia-pokupka-nedvizhimosti-inostrancem': '/services/warszawa-tramwaj.webp',
  'nalogovoye-rezidentstvo-polsha-183-dnya': '/services/warszawa-spire.webp',
  'vozvrat-nalogov-pit-37-pit-11-inostrancam': '/services/zaswiadczenia-zus-us.webp',
  'eu-blue-card-vs-karta-pobytu-2026': '/services/karta-pobytu.webp',
  'perehod-so-studencheskoy-vizy-na-kartu-pobytu': '/services/karta-pobytu.webp',
  'nevyplata-zarplaty-zaschita-prav-inostranca-pip': '/services/pomoc-w-zatrudnieniu.webp',
  'vossoedinenie-semi-polsha-2026-prava-suprugov': '/services/karta-pobytu.webp',
  'shtrafy-rabotodatelyam-nelegalnoye-trudoustroystvo': '/services/pomoc-w-zatrudnieniu.webp',
  'karta-stalego-pobytu-vs-rezident-eu': '/services/karta-stalego-pobytu.webp',
  'ees-system-vyezd-vyezd-evrosoyuz': '/services/odbior-z-lotniska.webp',
  'nalogovye-lgoty-estonian-cit-ip-box': '/services/warszawa-spire.webp',
  'karta-pobytu-dlya-detey-2026': '/services/zapis-dzieci-do-szkoly.webp',
  'perehod-s-ukr-na-rabochuyu-kartu-pobytu': '/services/karta-pobytu.webp',
  'apostille-nostryfikacja-tlumaczenia-przysiegle': '/services/tlumaczenia-przysiegle.webp',
  'likvidaciya-sp-z-oo-instrukciya': '/services/pomoc-w-zatrudnieniu.webp',
  'arenda-kommercheskoy-nedvizhimosti-varshava': '/services/warszawa-spire.webp',
  'uskorenie-karty-pobytu-ponaglenie-wsa': '/services/apelacje.webp',
  'smena-rabotodatelya-15-30-dney': '/services/karta-pobytu.webp',
  'pravilo-185-dney-itd-shtrafy': '/services/wymiana-prawa-jazdy.webp',
  'zamena-prav-ssha-uk-india-word-ekzamen': '/services/wymiana-prawa-jazdy.webp',
  'shtrafy-itd-bag-12000-pln-vodiel': '/services/kod-95.webp',
  'kod-95-kwalifikacja-wstepna-vs-szkolenie-okresowe': '/services/kod-95.webp',

  // 2026-Q2 series - 5 new articles
  'karta-pobytu-wygasla-co-delat': '/services/apelacje.webp',
  'skladka-zdrowotna-2026-reforma': '/services/warszawa-spire.webp',
  'ksef-luty-2026-e-faktury': '/services/warszawa-spire.webp',
  'polski-b1-egzamin-do-obywatelstwa': '/services/warszawa-swiatynia.webp',
  'nfz-dla-cudzoziemca-2026': '/services/pesel.webp',

  // 2026-Q2 Warsaw series - karta pobytu + licence exchange spokes
  'zapis-na-karte-pobytu-varshava-2026': '/services/karta-pobytu.webp',
  'skolko-stoit-karta-pobytu-varshava-2026': '/services/karta-pobytu.webp',
  'obmen-ukrainskih-prav-na-polskie-2026': '/services/wymiana-prawa-jazdy.webp',
  'obmen-belorusskih-prav-na-polskie-2026': '/services/wymiana-prawa-jazdy.webp',
  'obmen-rossijskih-prav-na-polskie-2026': '/services/wymiana-prawa-jazdy.webp',

  // 2026-Q2 professional-driver series
  'karta-kierowcy-tachograf-polsha-2026': '/services/kod-95.webp',
  'kak-stat-voditelem-v-polshe-2026': '/services/wymiana-prawa-jazdy.webp',

  // 2026-Q2 apostille + KRK series
  'spravka-o-nesudimosti-polsha-krk': '/services/zaswiadczenie-o-niekaralnosci.webp',
  'spravka-o-nesudimosti-grazhdanstvo-pmzh': '/services/zaswiadczenie-o-niekaralnosci.webp',
  'spravka-o-nesudimosti-iz-strany-proishozhdeniya': '/services/zaswiadczenie-o-niekaralnosci.webp',
  'apostille-spravki-o-nesudimosti': '/services/apostille.webp',
  'apostille-svidetelstv-usc-wojewoda': '/services/apostille.webp',
  'apostille-i-nesudimost-klienty-iz-raznyh-stran': '/services/warszawa-spire.webp',

  // 2026-Q3 series - 25 new articles (ВНЖ/ПМЖ/несудимость/апостиль/права/фирмы/JDG)
  'karta-pobytu-utrata-kradzha-wtornik-2026': '/services/karta-pobytu.webp',
  'zmiana-celu-pobytu-bez-vyezda-2026': '/services/karta-pobytu.webp',
  'karta-pobytu-60-dney-na-otbor-2026': '/services/karta-pobytu.webp',
  'stempel-w-paszporcie-ozhidanie-karty-pobytu-2026': '/services/karta-pobytu.webp',
  'otkaz-po-karte-stalego-pobytu-odwolanie-2026': '/services/apelacje.webp',
  'pmzh-po-polskomu-proishozhdeniyu-2026': '/services/karta-stalego-pobytu.webp',
  'pmzh-nepreryvnost-5-let-vyezdy-2026': '/services/karta-stalego-pobytu.webp',
  'spravka-o-nesudimosti-e-krk-online-2026': '/services/zaswiadczenie-o-niekaralnosci.webp',
  'spravka-o-nesudimosti-dlya-raboty-2026': '/services/zaswiadczenie-o-niekaralnosci.webp',
  'krk-dlya-inostranca-bez-pesel-2026': '/services/zaswiadczenie-o-niekaralnosci.webp',
  'apostille-na-diplom-nawa-kuratorium-2026': '/services/tlumaczenia-przysiegle.webp',
  'apostille-doverennosti-notarialnyh-dokumentov-2026': '/services/apostille.webp',
  'apostille-inostrannyh-dokumentov-dlya-polshi-2026': '/services/apostille.webp',
  'obmen-prav-pkk-zapis-na-egzamin-word-2026': '/services/wymiana-prawa-jazdy.webp',
  'obmen-prav-medspravka-i-kategorii-2026': '/services/wymiana-prawa-jazdy.webp',
  'obmen-prav-uteryany-prosrocheny-drugaya-familiya-2026': '/services/wymiana-prawa-jazdy.webp',
  'registraciya-sp-z-oo-s24-bez-pesel-2026': '/services/warszawa-spire.webp',
  'jdg-ili-sp-z-oo-chto-vybrat-inostrancu-2026': '/services/warszawa-spire.webp',
  'crbr-beneficjent-rzeczywisty-2026': '/services/warszawa-spire.webp',
  'gotowa-spolka-pokupka-gotovoy-firmy-2026': '/services/warszawa-tramwaj.webp',
  'jdg-nalogi-2026-skala-liniowy-ryczalt': '/services/zaswiadczenia-zus-us.webp',
  'przeksztalcenie-jdg-v-sp-z-oo-2026': '/services/warszawa-spire.webp',
  'relokaciya-biznesa-v-polshu-przedstawicielstwo-2026': '/services/gdansk-aerial.webp',
  'zakrytie-ili-zawieszenie-jdg-2026': '/services/pomoc-w-zatrudnieniu.webp',
  'prodat-ili-likvidirovat-sp-z-oo-2026': '/services/pomoc-w-zatrudnieniu.webp',

  // 2026-Q3 - три новые услуги
  'status-rezidenta-es-polsha-2026': '/services/karta-stalego-pobytu.webp',
  'nulevye-deklaracii-polsha-2026': '/services/zaswiadczenia-zus-us.webp',
  'konto-firmowe-v-polshe-2026': '/services/warszawa-spire.webp',

  // 2026-Q3/Q4 - кластер из 25 статей (meldunek, апостиль, KRK, тренды)
  'meldunek-dlya-inostranca-2026': '/services/meldunek.webp',
  'zameldowanie-bez-soglasiya-sobstvennika-2026': '/services/meldunek.webp',
  'meldunek-czasowy-vs-staly-2026': '/services/meldunek.webp',
  'zaswiadczenie-o-zameldowaniu-2026': '/services/meldunek.webp',
  'wymeldowanie-i-fiktivnaya-propiska-2026': '/services/meldunek.webp',
  'apostille-ili-legalizacja-konsularna-2026': '/services/apostille.webp',
  'apostille-na-korporativnye-dokumenty-krs-2026': '/services/apostille.webp',
  'pochemu-otkazyvayut-v-apostile-2026': '/services/apostille.webp',
  'e-apostille-elektronnye-dokumenty-2026': '/services/apostille.webp',
  'krk-i-rstpn-rabota-s-detmi-2026': '/services/zaswiadczenie-o-niekaralnosci.webp',
  'krk-o-podmiocie-zbiorowym-dlya-firmy-2026': '/services/zaswiadczenie-o-niekaralnosci.webp',
  'krk-dlya-litsenziy-i-professiy-2026': '/services/zaswiadczenie-o-niekaralnosci.webp',
  'pesel-ukr-aktualizacja-danych-31-avgusta-2026': '/services/pesel.webp',
  'obywatelstwo-polskie-2026-reforma-10-let': '/services/obywatelstwo.webp',
  'karta-pobytu-udalennaya-rabota-2026': '/services/karta-pobytu.webp',
  'zmiana-danych-wymiana-karty-pobytu-2026': '/services/karta-pobytu.webp',
  'zezwolenie-na-prace-2026-praca-gov-pl': '/services/pomoc-w-zatrudnieniu.webp',
  'etias-2026-kogo-kasaetsya': '/services/odbior-z-lotniska.webp',
  'transkrypcja-aktu-w-usc-2026': '/services/akty-stanu-cywilnego.webp',
  'arenda-kvartiry-najem-okazjonalny-2026': '/services/wyszukiwanie-mieszkania.webp',
  'zaswiadczenia-zus-us-o-niezaleganiu-2026': '/services/zaswiadczenia-zus-us.webp',
  'pokupka-kvartiry-v-polshe-inostrancem-2026': '/services/warszawa-tramwaj.webp',
  'registraciya-avto-i-oc-v-polshe-2026': '/services/wymiana-prawa-jazdy.webp',
  'licenciya-taxi-bolt-uber-dlya-inostranca-2026': '/services/wymiana-prawa-jazdy.webp',
  'zaproszenie-dlya-inostranca-v-polshu-2026': '/services/zaproszenia.webp',

  // Основания и продление карты побыту
  'karta-pobytu-na-osnovanii-braka-s-polyakom-2026': '/services/warszawa-swiatynia.webp',
  'karta-pobytu-po-biznesu-jdg-sp-z-oo-2026': '/services/warszawa-spire.webp',
  'karta-pobytu-prodlenie-2026-kogda-podavat': '/services/karta-pobytu.webp',
  'zezwolenie-typu-a-vs-oswiadczenie-2026': '/services/pomoc-w-zatrudnieniu.webp'
};

const FALLBACK = '/services/blog.webp';

export function getCoverForSlug(slug: string): string {
  return SLUG_TO_IMAGE[slug] ?? FALLBACK;
}
