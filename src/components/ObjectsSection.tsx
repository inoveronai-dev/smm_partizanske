"use client";

import { useEffect, useId, useMemo, useState } from "react";
import {
  BUILDINGS,
  CATEGORY_META,
  type Building,
  type BuildingCategory,
} from "@/lib/objects";

const CATEGORIES: BuildingCategory[] = ["residential", "commercial"];

const buildingCardClassName =
  "group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-sm shadow-ink/5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#2563eb] hover:shadow-md hover:shadow-[#2563eb]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]";

function BuildingCardContent({ building }: { building: Building }) {
  return (
    <>
      <span className="relative aspect-[4/3] overflow-hidden bg-royal-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={building.image}
          alt={building.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </span>
      <span className="flex flex-1 flex-col gap-3 px-4 py-4 sm:px-5 sm:py-5">
        <span className="font-serif text-lg font-semibold leading-snug text-ink sm:text-xl">
          {building.address}
        </span>
        <span className="inline-flex w-fit items-center rounded-md bg-royal-soft px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#2563eb] transition-colors group-hover:bg-[#2563eb] group-hover:text-surface">
          {building.href ? "Otvoriť detail" : "Zobraziť detail"}
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
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/40 p-0 backdrop-blur-sm sm:items-center sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="flex max-h-[100svh] w-full max-w-6xl flex-col overflow-hidden rounded-t-3xl border border-line bg-[#fcfcfc] shadow-2xl shadow-ink/25 sm:max-h-[90svh] sm:rounded-3xl"
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
            <p className="mt-2 font-sans text-sm text-ink/70 sm:text-base">
              Prehľad objektov zverejnených na tomto webe · {meta.description}
            </p>
          </div>

          <button
            type="button"
            aria-label="Zavrieť"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-2xl leading-none text-ink transition-colors hover:border-[#2563eb] hover:text-[#2563eb]"
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
            <div className="rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center">
              <p className="font-serif text-2xl text-ink">
                Zatiaľ bez objektov v tejto kategórii
              </p>
              <p className="mx-auto mt-3 max-w-md font-sans text-base leading-relaxed text-ink/70">
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
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl shadow-ink/25 md:grid-cols-[1.2fr_0.8fr]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[4/3] bg-royal-soft md:aspect-auto md:min-h-[22rem]">
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
            <p className="mt-4 font-sans text-base leading-relaxed text-ink/75">
              Mestský bytový dom v správe Správy majetku mesta, n.o.,
              Partizánske. Pre bližšie informácie o bytoch alebo údržbe nás
              kontaktujte.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#2563eb] px-4 py-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-surface transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!hasPrev}
              onClick={() => hasPrev && onSelect(buildings[index - 1])}
            >
              Predchádzajúci
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-surface px-4 py-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-[#2563eb] hover:text-[#2563eb] disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!hasNext}
              onClick={() => hasNext && onSelect(buildings[index + 1])}
            >
              Ďalší
            </button>
            <a
              href="#kontakty"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#2563eb]/30 bg-royal-soft px-4 py-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#2563eb] transition-colors hover:bg-[#2563eb] hover:text-surface"
              onClick={onClose}
            >
              Kontakt
            </a>
          </div>
        </div>

        <button
          type="button"
          aria-label="Zavrieť detail"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-xl leading-none text-ink shadow-sm transition-colors hover:border-[#2563eb] hover:text-[#2563eb]"
          onClick={onClose}
        >
          <span aria-hidden>×</span>
        </button>
      </div>
    </div>
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

  const closeCategoryModal = () => {
    setSelectedBuilding(null);
    setOpenCategory(null);
  };

  return (
    <section
      id="objekty-smm"
      className="scroll-mt-24 bg-royal-soft/40"
      aria-labelledby="objekty-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="section-label">Spravujeme</p>
          <h2
            id="objekty-heading"
            className="section-heading mt-4 text-3xl sm:text-4xl md:text-5xl"
          >
            Objekty SMM
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-ink">
            Prehliadnite bytové a nebytové objekty zverejnené v tomto prehľade —
            adresy, fotografie a bližšie informácie. Otvorením kategórie
            zobrazíte zoznam bez nutnosti dlhého scrollovania stránky.
          </p>
        </div>

        <div
          className="grid gap-5 lg:grid-cols-2"
          aria-label="Kategórie objektov"
        >
          {CATEGORIES.map((key) => {
            const meta = CATEGORY_META[key];
            const lead = BUILDINGS.find((item) => item.category === key);
            const isOpen = openCategory === key;

            return (
              <article
                key={key}
                className={`overflow-hidden rounded-2xl border bg-surface transition-[border-color,box-shadow] duration-200 ${
                  isOpen
                    ? "border-[#2563eb] shadow-md shadow-[#2563eb]/15"
                    : "border-line shadow-sm shadow-ink/5 hover:border-[#2563eb]/50"
                }`}
              >
                {lead ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-royal-soft">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={lead.image}
                      alt={lead.imageAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : null}
                <div className="flex flex-col items-start p-6 sm:p-7">
                  <h3 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                    {meta.title}
                  </h3>
                  <p className="mt-2 font-sans text-base leading-relaxed text-muted sm:text-lg">
                    {meta.description}. V prehľade nájdete adresy a fotografie
                    objektov zverejnených na tomto webe.
                  </p>
                  <button
                    type="button"
                    className="btn-primary mt-5 inline-flex min-h-12 items-center justify-center px-7"
                    onClick={() => {
                      setSelectedBuilding(null);
                      setOpenCategory(key);
                    }}
                  >
                    Zobraziť prehľad
                  </button>
                </div>
              </article>
            );
          })}
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
