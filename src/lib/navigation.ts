export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

/**
 * Every href must land on a visible section with real content or an honest
 * pending-content panel. Dodávatelia is intentionally absent until SMM provides it.
 */
export const NAV_ITEMS: NavItem[] = [
  {
    label: "O nás",
    href: "#o-nas",
    children: [
      { label: "O organizácii", href: "#o-organizacii" },
      { label: "Kontakty", href: "#kontakty" },
      { label: "Kde nás nájdete", href: "#kde-nas-najdete" },
      { label: "Správna rada", href: "#spravna-rada" },
    ],
  },
  {
    label: "Spravujeme",
    href: "#objekty-smm",
    children: [
      { label: "Objekty SMM", href: "#objekty-smm" },
      { label: "Prenájom priestorov", href: "#volne-priestory" },
    ],
  },
  {
    label: "OVS",
    children: [
      { label: "Aktuálne OVS", href: "#aktualne-ovs" },
      { label: "Archív OVS", href: "#archiv-ovs" },
      { label: "Protokoly", href: "#protokoly" },
    ],
  },
  {
    label: "Zverejňovanie",
    children: [
      { label: "Zmluvy", href: "#zmluvy" },
      { label: "Faktúry a objednávky", href: "#faktury-objednavky" },
      { label: "Výročné správy", href: "#vyrocne-spravy" },
      { label: "Výberové konania", href: "#vyberove-konania" },
      { label: "Legislatíva", href: "#legislativa" },
    ],
  },
  { label: "Kontakty", href: "#kontakty" },
];

/** Anchors that have dedicated visible sections (used for scroll targets). */
export const SECTION_ANCHORS = [
  "o-organizacii",
  "kontakty",
  "spravna-rada",
  "objekty-smm",
  "prenajom-priestorov",
  "aktualne-ovs",
  "archiv-ovs",
  "protokoly",
  "zmluvy",
  "faktury-objednavky",
  "vyrocne-spravy",
  "vyberove-konania",
  "legislativa",
  "oznamenia",
  "volne-priestory",
  "kde-nas-najdete",
] as const;
