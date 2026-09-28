export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

/**
 * Homepage section links use /#… so they work from any page.
 * Dedicated content pages use real routes — never empty hash placeholders.
 */
export const NAV_ITEMS: NavItem[] = [
  {
    label: "O nás",
    href: "/#o-nas",
    children: [
      { label: "O organizácii", href: "/#o-organizacii" },
      { label: "Kontakty", href: "/#kontakty" },
      { label: "Kde nás nájdete", href: "/#kde-nas-najdete" },
    ],
  },
  {
    label: "Spravujeme",
    href: "/#objekty-smm",
    children: [
      { label: "Objekty SMM", href: "/#objekty-smm" },
      { label: "Prenájom priestorov", href: "/#volne-priestory" },
    ],
  },
  {
    label: "Oznamy",
    href: "/oznamy",
    children: [
      { label: "Všetky oznamy", href: "/oznamy" },
      { label: "Na úvodnej stránke", href: "/#oznamy" },
    ],
  },
  {
    label: "OVS",
    href: "/ovs",
    children: [
      { label: "Aktuálne OVS", href: "/ovs" },
      { label: "Archív OVS", href: "/ovs#archiv" },
      { label: "Protokoly", href: "/ovs#protokoly" },
    ],
  },
  {
    label: "Zverejňovanie",
    children: [
      { label: "Zmluvy", href: "/#zmluvy" },
      { label: "Faktúry a objednávky", href: "/#faktury-objednavky" },
      { label: "Výročné správy", href: "/#vyrocne-spravy" },
      { label: "Výberové konania", href: "/#vyberove-konania" },
      { label: "Legislatíva", href: "/#legislativa" },
    ],
  },
  { label: "Kontakty", href: "/#kontakty" },
];

/** Anchors that have dedicated visible sections (used for scroll targets). */
export const SECTION_ANCHORS = [
  "o-organizacii",
  "kontakty",
  "objekty-smm",
  "prenajom-priestorov",
  "zmluvy",
  "faktury-objednavky",
  "vyrocne-spravy",
  "vyberove-konania",
  "legislativa",
  "oznamy",
  "volne-priestory",
  "kde-nas-najdete",
] as const;
