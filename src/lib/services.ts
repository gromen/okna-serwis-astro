export interface Service {
  slug: string;
  letter: string;
  category: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  priceNote: string;
}

export const services: Service[] = [
  {
    slug: 'naprawa-okien',
    letter: 'A',
    category: 'Naprawa',
    title: 'Naprawa okien',
    shortDesc: 'Kompleksowa diagnostyka i naprawa usterek.',
    longDesc:
      'Diagnozujemy przyczynę usterki na miejscu — zacinające się skrzydło, uszkodzone okucia, nieszczelności — i naprawiamy tylko to, co faktycznie wymaga naprawy. Obsługujemy okna PCV, aluminiowe i drewniane wszystkich popularnych producentów.',
    priceNote: 'wycena indywidualna',
  },
  {
    slug: 'regulacja-okien',
    letter: 'B',
    category: 'Regulacja',
    title: 'Regulacja okien',
    shortDesc: 'Okno zacina się lub przewiewa — regulujemy okucia.',
    longDesc:
      'Z czasem okucia się rozregulowują — okno zaczyna zacinać się przy zamykaniu, przewiewać lub trudniej domykać. Regulacja zawiasów i zaczepów zwykle zajmuje 20–30 minut i przywraca oknu pełną sprawność bez wymiany jakichkolwiek elementów.',
    priceNote: 'wycena indywidualna',
  },
  {
    slug: 'wymiana-szyb',
    letter: 'C',
    category: 'Szyby',
    title: 'Wymiana szyb',
    shortDesc: 'Pęknięta lub zaparowana szyba zespolona.',
    longDesc:
      'Pęknięta szyba lub zaparowany pakiet szybowy (oznaka rozszczelnienia) to zwykle wymiana samej szyby zespolonej — bez wymiany całego okna. Dobieramy pakiet o odpowiednich parametrach termicznych i montujemy na miejscu.',
    priceNote: 'wycena indywidualna',
  },
  {
    slug: 'uszczelnianie-okien',
    letter: 'D',
    category: 'Uszczelki',
    title: 'Uszczelnianie okien',
    shortDesc: 'Mniej strat ciepła i hałasu z zewnątrz.',
    longDesc:
      'Stwardniałe lub uszkodzone uszczelki to najczęstsza przyczyna przewiewów i wyższych rachunków za ogrzewanie. Wymieniamy uszczelki obwodowe na nowe, dopasowane do profilu okna, co od razu poprawia szczelność i wycisza dźwięki z zewnątrz.',
    priceNote: 'wycena indywidualna',
  },
  {
    slug: 'konserwacja-okien',
    letter: 'E',
    category: 'Konserwacja',
    title: 'Konserwacja okien',
    shortDesc: 'Przegląd i smarowanie okuć raz w roku.',
    longDesc:
      'Regularny przegląd i smarowanie okuć wydłuża żywotność okna i zapobiega awariom, zanim się pojawią. Sprawdzamy stan uszczelek, okuć i mechanizmów, smarujemy ruchome elementy i informujemy o wszystkim, co warto naprawić wcześniej niż później.',
    priceNote: 'wycena indywidualna',
  },
  {
    slug: 'rozwierno-uchylne',
    letter: 'F',
    category: 'Przeróbka',
    title: 'Rozwierno-uchylne',
    shortDesc: 'Zmiana trybu otwierania istniejącego okna.',
    longDesc:
      'Przerabiamy istniejące okno na tryb rozwierno-uchylny, montując odpowiednie okucia bez konieczności wymiany całej stolarki. To praktyczne rozwiązanie dla starszych okien, które mają tylko jeden tryb otwierania.',
    priceNote: 'wycena indywidualna',
  },
  {
    slug: 'wymiana-elementow',
    letter: 'G',
    category: 'Elementy',
    title: 'Wymiana elementów',
    shortDesc: 'Klamki, zawiasy, rolki, ograniczniki.',
    longDesc:
      'Wymieniamy pojedyncze elementy okucia — klamki, zawiasy, rolki, ograniczniki rozwarcia — gdy tylko one uległy zużyciu lub uszkodzeniu. Dobieramy zamienniki pasujące do istniejącego systemu okuć, bez zbędnych kosztów.',
    priceNote: 'wycena indywidualna',
  },
  {
    slug: 'instalacja-elementow',
    letter: 'H',
    category: 'Instalacja',
    title: 'Instalacja elementów',
    shortDesc: 'Montaż nawiewników, moskitier, klamek z kluczem.',
    longDesc:
      'Montujemy dodatkowe wyposażenie okien: nawiewniki higrosterowane poprawiające wentylację, moskitiery na wymiar oraz klamki z kluczem podnoszące bezpieczeństwo mieszkania. Montaż zwykle wykonujemy tego samego dnia.',
    priceNote: 'wycena indywidualna',
  },
];
