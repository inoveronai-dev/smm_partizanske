export type BuildingCategory = "residential" | "commercial";

export type Building = {
  id: string;
  category: BuildingCategory;
  address: string;
  image: string;
  imageAlt: string;
};

export const BUILDINGS: Building[] = [
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
    description: "Nebytové priestory a objekty mesta",
  },
};
