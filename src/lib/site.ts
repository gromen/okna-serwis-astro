const businessAddress = "ul. Targowa 15, 07-300 Ostrów Mazowiecka";

export const site = {
  name: "Perfokno",
  shortName: "Perfokno",
  domain: "perfokno.pl",
  url: "https://perfokno.pl",
  description:
    "Regionalny serwis naprawy okien PCV i drewnianych. Regulacja, uszczelnianie, wymiana szyb i okuć — dojazd tego samego dnia w Warszawie i regionie.",
  locale: "pl-PL",
  gtmId: import.meta.env.PUBLIC_GTM_ID ?? "",

  legal: {
    name: "Krystian Piórkowski Serwis",
    nip: "7591760449",
    regon: "528637600",
    address: businessAddress,
  },

  map: {
    label: "Perfokno — siedziba",
    address: businessAddress,
    query: businessAddress,
  },

  contact: {
    phone: "732 960 727",
    // TODO placeholder — replace with the real business email before launch.
    // email: 'kontakt@perfokno.pl',
    hours: "Pon–Sob 7:00–20:00 · Niedziela: zgłoszenia awaryjne",
  },

  whatsapp: "https://wa.me/48732960727",

  serviceArea: [
    "Warszawa",
    "Łomża",
    "Ostrołęka",
    "Zambrów",
    "Wyszków",
    "Ostrów Mazowiecka",
  ],

  stats: [
    { value: "12", suffix: "+", label: "lat doświadczenia" },
    { value: "8400", suffix: "+", label: "wykonanych napraw" },
    { value: "4.9", suffix: "", label: "ocena Google · 312 opinii" },
    { value: "24", suffix: "", label: "miesiące gwarancji" },
  ],

  nav: [
    { href: "/#uslugi", label: "Usługi" },
    { href: "/#obszar", label: "Obszar działania" },
    // TODO: przywrócić po dodaniu prawdziwych zdjęć realizacji — sekcja jest zakomentowana w index.astro.
    // { href: '/#realizacje', label: 'Realizacje' },
    { href: "/#faq", label: "FAQ" },
    { href: "/#kontakt", label: "Kontakt" },
  ] as const,
};
