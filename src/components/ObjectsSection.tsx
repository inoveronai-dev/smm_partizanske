"use client";

import { useEffect, useId, useMemo, useState } from "react";
import {
  BUILDINGS,
  CATEGORY_META,
  type Building,
  type BuildingCategory,
} from "@/lib/objects";

const CATEGORIES: BuildingCategory[] = ["residential", "commercial"];

/** Verified showcase plates from public/objects + objects.ts mappings */
const SHOWCASE = {
  large: {
    id: "februarova-945",
    category: "residential" as BuildingCategory,
    image: "/objects/februarova-945.png",
    label: "Februárová 945/20–20A",
    alt: "Bytový dom Februárová 945/20-20A",
  },
  top: {
    id: "nabrezna-204",
    category: "residential" as BuildingCategory,
    image: "/objects/nabrezna-204.png",
    label: "Nábrežná 204/14,16",
    alt: "Bytový dom Nábrežná 204/14,16",
  },
  bottom: {
    id: "nebyt-mestska-poliklinika",
    category: "commercial" as BuildingCategory,
    image: "/objects/mestska-poliklinika.jpg",
    label: "Mestská poliklinika",
    alt: "Mestská poliklinika, Hrnčírikova 222/6, Partizánske",
  },
} as const;

const buildingCardClassName =
  "group flex w-full flex-col overflow-hidden border border-line bg-surface text-left transition-[border-color] duration-200 hover:border-[#2563eb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]";

function BuildingCardContent({ building }: { building: Building }) {
  return (
    <>
      <span className="relative aspect-[4/3] overflow-hidden bg-warm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={building.image}
          alt={building.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </span>
      <span className="flex flex-1 flex-col gap-2 px-4 py-4 sm:px-5 sm:py-5">
        <span className="font-serif text-lg font-semibold leading-snug text-ink sm:text-xl">
          {building.address}
        </span>
        <span className="font-sans text-sm font-semibold text-[#2563eb]">
          {building.href ? "Otvoriť detail →" : "Zobraziť detail →"}
        </span>
      </span>
    </>
  );
}

function BuildingCard({
  building,
  onOpenDetail,
}: {
  building: Building;
  onOpenDetail: (building: Building) => void;
}) {
  if (building.href) {
    return (
      <a
        href={building.href}
        target="_blank"
        rel="noopener noreferrer"
        className={buildingCardClassName}
      >
        <BuildingCardContent building={building} />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpenDetail(building)}
      className={buildingCardClassName}
    >
      <BuildingCardContent building={building} />
    </button>
  );
}

function CategoryGalleryModal({
  category,
  buildings,
  onClose,
  onOpenDetail,
}: {
  category: BuildingCategory;
  buildings: Building[];
  onClose: () => void;
  onOpenDetail: (building: Building) => void;
}) {
  const titleId = useId();
  const meta = CATEGORY_META[category];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-navy/50 p-0 backdrop-blur-sm sm:items-center sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="flex max-h-[100svh] w-full max-w-6xl flex-col overflow-hidden rounded-t-2xl border border-line bg-paper shadow-2xl shadow-navy/30 sm:max-h-[90svh] sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-surface/95 px-5 py-5 backdrop-blur-md sm:px-8 sm:py-6">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#2563eb]">
              Objekty SMM
            </p>
            <h3
              id={titleId}
              className="mt-2 font-serif text-2xl font-semibold text-ink sm:text-3xl md:text-4xl"
            >
              {meta.title}
            </h3>
            <p className="mt-2 font-sans text-sm text-muted sm:text-base">
              {meta.description} · {buildings.length} objektov v prehľade
            </p>
          </div>

          <button
            type="button"
            aria-label="Zavrieť"
            className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-surface text-2xl leading-none text-ink transition-colors hover:border-[#2563eb] hover:text-[#2563eb]"
            onClick={onClose}
          >
            <span aria-hidden>×</span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          {buildings.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {buildings.map((building) => (
                <BuildingCard
                  key={building.id}
                  building={building}
                  onOpenDetail={onOpenDetail}
                />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-line bg-surface px-6 py-16 text-center">
              <p className="font-serif text-2xl text-ink">
                Zatiaľ bez objektov v tejto kategórii
              </p>
              <p className="mx-auto mt-3 max-w-md font-sans text-base leading-relaxed text-muted">
                Zoznam bude doplnený. Medzitým môžete pozrieť druhú kategóriu
                alebo nás kontaktovať.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BuildingDetailModal({
  building,
  buildings,
  onClose,
  onSelect,
}: {
  building: Building;
  buildings: Building[];
  onClose: () => void;
  onSelect: (building: Building) => void;
}) {
  const titleId = useId();
  const index = buildings.findIndex((item) => item.id === building.id);
  const hasPrev = index > 0;
  const hasNext = index >= 0 && index < buildings.length - 1;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasPrev) onSelect(buildings[index - 1]);
      if (event.key === "ArrowRight" && hasNext) onSelect(buildings[index + 1]);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [buildings, hasNext, hasPrev, index, onClose, onSelect]);

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-navy/50 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-4xl overflow-hidden border border-line bg-surface shadow-2xl shadow-navy/30 md:grid-cols-[1.2fr_0.8fr]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[4/3] bg-warm md:aspect-auto md:min-h-[22rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={building.image}
            alt={building.imageAlt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#2563eb]">
              Objekt SMM
            </p>
            <h3
              id={titleId}
              className="mt-3 font-serif text-2xl font-semibold leading-snug text-ink sm:text-3xl"
            >
              {building.address}
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-muted">
              Mestský objekt v správe Správy majetku mesta, n.o., Partizánske.
              Pre bližšie informácie nás kontaktujte.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-sm bg-[#2563eb] px-4 py-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-surface transition-colors hover:bg-navy disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!hasPrev}
              onClick={() => hasPrev && onSelect(buildings[index - 1])}
            >
              Predchádzajúci
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-sm border border-line bg-surface px-4 py-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-[#2563eb] hover:text-[#2563eb] disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!hasNext}
              onClick={() => hasNext && onSelect(buildings[index + 1])}
            >
              Ďalší
            </button>
            <a
              href="#kontakty"
              className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[#2563eb]/30 bg-royal-soft px-4 py-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#2563eb] transition-colors hover:bg-[#2563eb] hover:text-surface"
              onClick={onClose}
            >
              Kontakt
            </a>
          </div>
        </div>

        <button
          type="button"
          aria-label="Zavrieť detail"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center border border-line bg-surface text-xl leading-none text-ink transition-colors hover:border-[#2563eb] hover:text-[#2563eb]"
          onClick={onClose}
        >
          <span aria-hidden>×</span>
        </button>
      </div>
    </div>
  );
}

function ShowcasePlate({
  image,
  alt,
  label,
  onActivate,
  className,
  objectPosition = "object-center",
}: {
  image: string;
  alt: string;
  label: string;
  onActivate: () => void;
  className?: string;
  objectPosition?: string;
}) {
  return (
    <button
      type="button"
      onClick={onActivate}
      className={`group relative block w-full overflow-hidden bg-warm text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${objectPosition}`}
        loading="lazy"
        decoding="async"
      />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/25 to-transparent px-4 pb-4 pt-16">
        <span className="block font-sans text-sm font-semibold tracking-wide text-cream sm:text-base">
          {label}
        </span>
      </span>
    </button>
  );
}

export function ObjectsSection() {
  const [openCategory, setOpenCategory] = useState<BuildingCategory | null>(
    null,
  );
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(
    null,
  );

  const modalBuildings = useMemo(
    () =>
      openCategory
        ? BUILDINGS.filter((building) => building.category === openCategory)
        : [],
    [openCategory],
  );

  const openCategoryOverview = (category: BuildingCategory) => {
    setSelectedBuilding(null);
    setOpenCategory(category);
  };

  const openFromShowcase = (category: BuildingCategory, buildingId: string) => {
    const building = BUILDINGS.find((item) => item.id === buildingId);
    setOpenCategory(category);
    if (building && !building.href) {
      setSelectedBuilding(building);
    } else {
      setSelectedBuilding(null);
    }
  };

  const closeCategoryModal = () => {
    setSelectedBuilding(null);
    setOpenCategory(null);
  };

  return (
    <section
      id="objekty-smm"
      className="scroll-mt-24 bg-paper"
      aria-labelledby="objekty-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Spravujeme</p>
            <h2
              id="objekty-heading"
              className="section-heading mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            >
              Objekty SMM
            </h2>
            <p className="mt-4 max-w-xl font-sans text-lg leading-relaxed text-muted">
              Autentické fotografie mestských bytových a nebytových objektov v
              správe SMM Partizánske.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {CATEGORIES.map((key) => (
              <button
                key={key}
                type="button"
                className="btn-secondary inline-flex min-h-12 items-center justify-center bg-surface px-6"
                onClick={() => openCategoryOverview(key)}
              >
                {CATEGORY_META[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric editorial photo composition — ~2/3 + two stacked supports */}
        <div
          className="grid gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-4"
          aria-label="Fotografický prehľad objektov"
        >
          <ShowcasePlate
            image={SHOWCASE.large.image}
            alt={SHOWCASE.large.alt}
            label={SHOWCASE.large.label}
            objectPosition="object-[center_35%]"
            className="aspect-[4/5] sm:aspect-[16/11] lg:col-span-8 lg:aspect-auto lg:min-h-[28rem] xl:min-h-[32rem]"
            onActivate={() =>
              openFromShowcase(SHOWCASE.large.category, SHOWCASE.large.id)
            }
          />
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-4 lg:grid-cols-1 lg:gap-4">
            <ShowcasePlate
              image={SHOWCASE.top.image}
              alt={SHOWCASE.top.alt}
              label={SHOWCASE.top.label}
              className="aspect-[16/11] lg:aspect-auto lg:min-h-[13.5rem] xl:min-h-[15.25rem]"
              onActivate={() =>
                openFromShowcase(SHOWCASE.top.category, SHOWCASE.top.id)
              }
            />
            <ShowcasePlate
              image={SHOWCASE.bottom.image}
              alt={SHOWCASE.bottom.alt}
              label={SHOWCASE.bottom.label}
              objectPosition="object-[center_40%]"
              className="aspect-[16/11] lg:aspect-auto lg:min-h-[13.5rem] xl:min-h-[15.25rem]"
              onActivate={() =>
                openFromShowcase(
                  SHOWCASE.bottom.category,
                  SHOWCASE.bottom.id,
                )
              }
            />
          </div>
        </div>
      </div>

      {openCategory ? (
        <CategoryGalleryModal
          category={openCategory}
          buildings={modalBuildings}
          onClose={closeCategoryModal}
          onOpenDetail={setSelectedBuilding}
        />
      ) : null}

      {selectedBuilding ? (
        <BuildingDetailModal
          building={selectedBuilding}
          buildings={modalBuildings}
          onClose={() => setSelectedBuilding(null)}
          onSelect={setSelectedBuilding}
        />
      ) : null}
    </section>
  );
}
