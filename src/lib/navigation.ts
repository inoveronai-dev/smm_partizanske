export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

/**
 * Homepage section links use /#… so they work from any page.
 * Dedicated content pages use real routes — never empty hash placeholders.
 * Zverejňovanie menu is omitted until SMM publishes those documents here.
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
      { label: "Prenájom priestorov", href: "/oznamy" },
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
  { label: "Kontakty", href: "/#kontakty" },
];

/** Anchors that have dedicated visible sections (used for scroll targets). */
export const SECTION_ANCHORS = [
  "o-organizacii",
  "kontakty",
  "objekty-smm",
  "oznamy",
  "kde-nas-najdete",
] as const;
