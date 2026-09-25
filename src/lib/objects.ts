export type BuildingCategory = "residential" | "commercial";

export type Building = {
  id: string;
  category: BuildingCategory;
  address: string;
  image: string;
  imageAlt: string;
  /** External detail page when present — card links out instead of opening modal */
  href?: string;
};

export const BUILDINGS: Building[] = [
  // —— Mestské bytové domy ——
  {
    id: "nabrezna-204",
    category: "residential",
    address: "Nábrežná 204/14,16",
    image: "/objects/nabrezna-204.png",
    imageAlt: "Bytový dom Nábrežná 204/14,16",
  },
  {
    id: "jasika-652",
    category: "residential",
    address: "R. Jašíka 652/14",
    image: "/objects/jasika-652.jpg",
    imageAlt: "Bytový dom R. Jašíka 652/14",
  },
  {
    id: "skultetyho-173",
    category: "residential",
    address: "Škultétyho 173/10",
    image: "/objects/skultetyho-173.png",
    imageAlt: "Bytový dom Škultétyho 173/10",
  },
  {
    id: "druzstevna-833",
    category: "residential",
    address: "Družstevná 833/22",
    image: "/objects/druzstevna-833.png",
    imageAlt: "Bytový dom Družstevná 833/22",
  },
  {
    id: "pod-sipkom-2357",
    category: "residential",
    address: "Pod Šípkom 2357/13,15",
    image: "/objects/pod-sipkom-2357.png",
    imageAlt: "Bytový dom Pod Šípkom 2357/13,15",
  },
  {
    id: "nadrazna-686",
    category: "residential",
    address: "Nádražná 686/4",
    image: "/objects/nadrazna-686.png",
    imageAlt: "Bytový dom Nádražná 686/4",
  },
  {
    id: "februarova-152",
    category: "residential",
    address: "Februárová 152/1, Partizánske",
    image: "/objects/februarova-152.jpg",
    imageAlt: "Bytový dom Februárová 152/1",
  },
  {
    id: "jasika-156",
    category: "residential",
    address: "R. Jašíka 156/4",
    image: "/objects/jasika-156.png",
    imageAlt: "Bytový dom R. Jašíka 156/4",
  },
  {
    id: "nabrezna-208",
    category: "residential",
    address: "Nábrežná 208/4",
    image: "/objects/nabrezna-208.png",
    imageAlt: "Bytový dom Nábrežná 208/4",
  },
  {
    id: "februarova-945",
    category: "residential",
    address: "Februárová 945/20-20A",
    image: "/objects/februarova-945.png",
    imageAlt: "Bytový dom Februárová 945/20-20A",
  },

  // —— Mestské nebytové domy / objekty ——
  {
    id: "nebyt-februarova-945",
    category: "commercial",
    address: "Februárová 945/20, Partizánske",
    image: "/objects/februarova-945.png",
    imageAlt: "Objekt Februárová 945/20, Partizánske",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/februarova-945-20-partizanske/",
  },
  {
    id: "nebyt-jasika-652",
    category: "commercial",
    address: "R. Jašíka 652/14, Partizánske",
    image: "/objects/jasika-652.jpg",
    imageAlt: "Objekt R. Jašíka 652/14, Partizánske",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/r-jasika-652-14-partizanske/",
  },
  {
    id: "nebyt-janka-krala-1549",
    category: "commercial",
    address: "Janka Kráľa 1549/44-46, Partizánske",
    image: "/objects/janka-krala-1549.png",
    imageAlt: "Objekt Janka Kráľa 1549/44-46, Partizánske",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/janka-krala-1549-44-46-partizanske/",
  },
  {
    id: "nebyt-smm-hq",
    category: "commercial",
    address: "SMM, n.o., Partizánske",
    image: "/objects/smm-hq.jpg",
    imageAlt: "Sídlo SMM, n.o., Partizánske",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/smm-n-o-partizanske-2/",
  },
  {
    id: "nebyt-jasika-156",
    category: "commercial",
    address: "R. Jašíka 156/4, Partizánske",
    image: "/objects/jasika-156.png",
    imageAlt: "Objekt R. Jašíka 156/4, Partizánske",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/r-jasika-156-4-2/",
  },
  {
    id: "nebyt-namestie-snp-210",
    category: "commercial",
    address: "Námestie SNP 210, Partizánske",
    image: "/objects/namestie-snp-210.jpg",
    imageAlt: "Objekt Námestie SNP 210, Partizánske",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/namestie-snp-210-partizanske-3/",
  },
  {
    id: "nebyt-druzstevna-833",
    category: "commercial",
    address: "Družstevná 833/22, Partizánske",
    image: "/objects/druzstevna-833.png",
    imageAlt: "Objekt Družstevná 833/22, Partizánske",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/druzstevna-833-22-2/",
  },
  {
    id: "nebyt-sc-male-bielice",
    category: "commercial",
    address: "SC Malé Bielice, Kúpeľná 213/11, Partizánske",
    image: "/objects/sc-male-bielice.webp",
    imageAlt: "SC Malé Bielice, Kúpeľná 213/11, Partizánske",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/sc-male-bielice-kupelna-213-11-partizanske/",
  },
  {
    id: "nebyt-velka-okruzna-1107",
    category: "commercial",
    address: "Hospodárska budova – bývalá MŠ, Veľká okružná 1107/15",
    image: "/objects/velka-okruzna-1107.jpg",
    imageAlt: "Hospodárska budova – bývalá MŠ, Veľká okružná 1107/15",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/hospodarska-budova-byvala-ms-velka-okruzna-1107-15-2/",
  },
  {
    id: "nebyt-garaze-sipok",
    category: "commercial",
    address: "Garáže Šípok",
    image: "/objects/garaze-sipok.jpg",
    imageAlt: "Garáže Šípok",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/garaze-sipok/",
  },
  {
    id: "nebyt-hrncirikova-1070",
    category: "commercial",
    address: "Hrnčírikova 1070, Partizánske",
    image: "/objects/hrncirikova-1070.jpg",
    imageAlt: "Objekt Hrnčírikova 1070, Partizánske",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/hrncirikova-1070-partizanske/",
  },
  {
    id: "nebyt-mestska-poliklinika",
    category: "commercial",
    address: "Mestská poliklinika, Hrnčírikova 222/6, Partizánske",
    image: "/objects/mestska-poliklinika.jpg",
    imageAlt: "Mestská poliklinika, Hrnčírikova 222/6, Partizánske",
    href: "https://smmpartizanske.sk/index.php/2026/09/18/mestska-poliklinika-hrncirikova-222-6-partizanske-2/",
  },
];

export const CATEGORY_META: Record<
  BuildingCategory,
  { title: string; description: string }
> = {
  residential: {
    title: "Mestské bytové domy",
    description: "Bytový fond spravovaný SMM Partizánske",
  },
  commercial: {
    title: "Mestské nebytové domy",
    description: "Nebytové priestory a mestské objekty",
  },
};
