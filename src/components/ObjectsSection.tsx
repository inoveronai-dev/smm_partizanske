"use client";

import { useEffect, useId, useMemo, useState } from "react";
import {
  BUILDINGS,
  CATEGORY_META,
  type Building,
  type BuildingCategory,
} from "@/lib/objects";

const CATEGORIES: BuildingCategory[] = ["residential", "commercial"];

const cardClassName =
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
      <span className="flex flex-1 flex-col gap-3 px-5 py-5">
        <span className="font-serif text-xl font-semibold leading-snug text-ink">
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
  onOpen,
}: {
  building: Building;
  onOpen: (building: Building) => void;
}) {
  if (building.href) {
    return (
      <a
        href={building.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
      >
        <BuildingCardContent building={building} />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(building)}
      className={cardClassName}
    >
      <BuildingCardContent building={building} />
    </button>
  );
}

function BuildingModal({
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

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [buildings, hasNext, hasPrev, index, onClose, onSelect]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/45 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-ink/20 md:grid-cols-[1.2fr_0.8fr]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[4/3] bg-[#eef2ff] md:aspect-auto md:min-h-[22rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={building.image}
            alt={building.imageAlt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
          <div>
            <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
              Objekt SMM
            </p>
            <h3
              id={titleId}
              className="mt-3 font-serif text-2xl leading-snug text-ink sm:text-3xl"
            >
              {building.address}
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
              Mestský bytový dom v správe Správy majetku mesta, n.o.,
              Partizánske. Pre bližšie informácie o bytoch alebo údržbe nás
              kontaktujte.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center bg-[#2563eb] px-4 py-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-surface transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!hasPrev}
              onClick={() => hasPrev && onSelect(buildings[index - 1])}
            >
              Predchádzajúci
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center border border-line bg-surface px-4 py-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:border-[#2563eb] hover:text-[#2563eb] disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!hasNext}
              onClick={() => hasNext && onSelect(buildings[index + 1])}
            >
              Ďalší
            </button>
            <a
              href="#kontakty"
              className="inline-flex items-center justify-center border border-[#2563eb]/30 bg-[#eff6ff] px-4 py-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#2563eb] transition-colors hover:bg-[#2563eb] hover:text-surface"
              onClick={onClose}
            >
              Kontakt
            </a>
          </div>
        </div>

        <button
          type="button"
          aria-label="Zavrieť"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface/95 text-ink shadow-sm transition-colors hover:text-[#2563eb]"
          onClick={onClose}
        >
          <span aria-hidden className="text-xl leading-none">
            ×
          </span>
        </button>
      </div>
    </div>
  );
}

export function ObjectsSection() {
  const [category, setCategory] = useState<BuildingCategory>("residential");
  const [selected, setSelected] = useState<Building | null>(null);

  const filtered = useMemo(
    () => BUILDINGS.filter((building) => building.category === category),
    [category],
  );

  return (
    <section
      id="objekty-smm"
      className="scroll-mt-24 bg-[#fcfcfc]"
      aria-labelledby="objekty-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mb-12 max-w-2xl sm:mb-14">
          <p className="section-label">Spravujeme</p>
          <h2
            id="objekty-heading"
            className="section-heading mt-5 text-3xl sm:text-4xl md:text-5xl"
          >
            Objekty SMM
          </h2>
          <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-ink">
            Vyberte kategóriu a pozrite si mestské objekty v správe SMM
            Partizánske. Pri nebytových objektoch otvoríte detail kliknutím na
            kartu.
          </p>
        </div>

        <div
          className="grid gap-4 sm:grid-cols-2"
          role="tablist"
          aria-label="Kategórie objektov"
        >
          {CATEGORIES.map((key) => {
            const active = category === key;
            const meta = CATEGORY_META[key];
            const count = BUILDINGS.filter((item) => item.category === key)
              .length;

            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(key)}
                className={`flex flex-col items-start rounded-2xl border p-6 text-left transition-[border-color,box-shadow,background-color] duration-300 sm:p-8 ${
                  active
                    ? "border-[#2563eb] bg-surface shadow-md shadow-[#2563eb]/15"
                    : "border-line bg-surface shadow-sm shadow-ink/5 hover:border-[#2563eb]/40"
                }`}
              >
                <span
                  className={`font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${
                    active ? "text-[#2563eb]" : "text-muted"
                  }`}
                >
                  {count} objektov
                </span>
                <span className="mt-3 font-serif text-2xl text-ink sm:text-3xl">
                  {meta.title}
                </span>
                <span className="mt-2 font-sans text-sm leading-relaxed text-muted">
                  {meta.description}
                </span>
                <span
                  className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-md px-6 py-2.5 font-sans text-sm font-bold uppercase tracking-[0.16em] transition-colors ${
                    active
                      ? "bg-[#2563eb] text-surface"
                      : "border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-surface"
                  }`}
                >
                  Zobraziť
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="mt-10 sm:mt-12"
          role="tabpanel"
          aria-label={CATEGORY_META[category].title}
        >
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              {CATEGORY_META[category].title}
            </h3>
            <p className="font-sans text-base font-medium text-ink/70">
              {filtered.length > 0
                ? `${filtered.length} ${filtered.length === 1 ? "objekt" : "objektov"}`
                : "Zatiaľ bez položiek"}
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((building) => (
                <BuildingCard
                  key={building.id}
                  building={building}
                  onOpen={setSelected}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center">
              <p className="font-serif text-2xl text-ink">
                Pripravujeme prehľad nebytových objektov
              </p>
              <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-muted sm:text-base">
                Zoznam mestských nebytových domov bude doplnený. Medzitým
                môžete pozrieť bytové domy alebo nás kontaktovať.
              </p>
              <button
                type="button"
                className="mt-6 inline-flex items-center justify-center bg-[#2563eb] px-5 py-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-surface transition-colors hover:bg-ink"
                onClick={() => setCategory("residential")}
              >
                Zobraziť bytové domy
              </button>
            </div>
          )}
        </div>
      </div>

      {selected ? (
        <BuildingModal
          building={selected}
          buildings={filtered}
          onClose={() => setSelected(null)}
          onSelect={setSelected}
        />
      ) : null}
    </section>
  );
}
