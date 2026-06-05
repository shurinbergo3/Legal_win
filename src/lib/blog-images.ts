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
  'kak-stat-voditelem-v-polshe-2026': '/services/wymiana-prawa-jazdy.webp'
};

const FALLBACK = '/services/blog.webp';

export function getCoverForSlug(slug: string): string {
  return SLUG_TO_IMAGE[slug] ?? FALLBACK;
}
