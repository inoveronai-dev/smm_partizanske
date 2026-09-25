"use client";

import { useEffect, useId, useRef, useState } from "react";
import { NAV_ITEMS, type NavItem } from "@/lib/navigation";

type HeaderProps = {
  revealed?: boolean;
};

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`h-2.5 w-2.5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DesktopItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const panelId = useId();

  const clearClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearClose(), []);

  if (!item.children?.length) {
    return (
      <a
        href={item.href}
        className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:text-[#2563eb]"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        clearClose();
        setOpen(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:text-[#2563eb]"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <Chevron open={open} />
      </button>

      <div
        id={panelId}
        role="menu"
        className={`absolute left-1/2 top-full z-50 mt-3 min-w-[14rem] -translate-x-1/2 border border-line bg-surface py-2 shadow-lg shadow-ink/10 transition-[opacity,transform] duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        {item.children.map((child) => (
          <a
            key={child.href + child.label}
            href={child.href}
            role="menuitem"
            className="block px-4 py-3 font-sans text-sm tracking-wide text-ink transition-colors hover:bg-royal-soft hover:text-[#2563eb]"
            onClick={() => setOpen(false)}
          >
            {child.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  if (!item.children?.length) {
    return (
      <a
        href={item.href}
        className="py-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-ink/80 transition-colors hover:text-royal"
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="border-b border-line last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-ink/80"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <Chevron open={open} />
      </button>
      <div
        id={panelId}
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 pb-3 pl-1">
          {item.children.map((child) => (
            <a
              key={child.href + child.label}
              href={child.href}
              className="py-2 font-sans text-sm tracking-wide text-muted transition-colors hover:text-royal"
              onClick={onNavigate}
            >
              {child.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header({ revealed = true }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/95 backdrop-blur-md transition-[opacity,transform] duration-700 ${
        revealed ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-5 sm:h-[4.25rem] sm:px-8 lg:px-10">
        <a
          href="#top"
          className="flex shrink-0 items-baseline gap-2.5 transition-opacity hover:opacity-90"
          aria-label="SMM Partizánske — domov"
        >
          <span className="font-serif text-xl font-bold tracking-[0.12em] text-[#2563eb] sm:text-2xl">
            SMM
          </span>
          <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-ink sm:text-[0.7rem]">
            Partizánske
          </span>
        </a>

        <nav
          className="ml-auto hidden items-center gap-7 lg:flex"
          aria-label="Hlavná navigácia"
        >
          {NAV_ITEMS.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </nav>

        <button
          type="button"
          className="relative ml-auto flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`max-h-[calc(100svh-4.25rem)] overflow-y-auto border-t border-line bg-surface lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8"
          aria-label="Mobilná navigácia"
        >
          {NAV_ITEMS.map((item) => (
            <MobileItem
              key={item.label}
              item={item}
              onNavigate={() => setMenuOpen(false)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
