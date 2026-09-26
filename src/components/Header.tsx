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

function DesktopItem({
  item,
  solid,
}: {
  item: NavItem;
  solid: boolean;
}) {
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

  const linkTone = solid
    ? "text-ink hover:text-[#2563eb]"
    : "text-cream/95 hover:text-white";

  if (!item.children?.length) {
    return (
      <a
        href={item.href}
        className={`font-sans text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] ${linkTone}`}
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
        className={`inline-flex min-h-11 items-center gap-1.5 font-sans text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] ${linkTone}`}
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
            className="block px-4 py-3 font-sans text-base tracking-wide text-ink transition-colors hover:bg-warm hover:text-[#2563eb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2563eb]"
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
        className="py-3.5 font-sans text-base font-semibold text-ink transition-colors hover:text-[#2563eb]"
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
        className="flex min-h-12 w-full items-center justify-between py-3.5 font-sans text-base font-semibold text-ink"
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
              className="py-2.5 font-sans text-base tracking-wide text-muted transition-colors hover:text-[#2563eb]"
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
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 48 || menuOpen);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const showSolid = solid || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,opacity,transform,box-shadow] duration-500 ${
        revealed ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      } ${
        showSolid
          ? "border-b border-line bg-surface/95 shadow-sm shadow-ink/5 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-4 px-5 py-2.5 sm:min-h-[4.5rem] sm:px-8 lg:px-10">
        <a
          href="#top"
          className="flex shrink-0 flex-col leading-none transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
          aria-label="SMM Partizánske — domov"
        >
          <span
            className={`font-serif text-2xl font-bold tracking-[0.04em] sm:text-[1.65rem] ${
              showSolid ? "text-[#2563eb]" : "text-cream"
            }`}
          >
            SMM
          </span>
          <span
            className={`mt-1 font-sans text-xs font-medium sm:text-sm ${
              showSolid ? "text-muted" : "text-cream/75"
            }`}
          >
            Partizánske
          </span>
        </a>

        <nav
          className="ml-auto hidden items-center gap-7 lg:flex"
          aria-label="Hlavná navigácia"
        >
          {NAV_ITEMS.map((item) => (
            <DesktopItem key={item.label} item={item} solid={showSolid} />
          ))}
        </nav>

        <button
          type="button"
          className={`relative ml-auto flex h-10 w-10 items-center justify-center lg:hidden ${
            showSolid ? "text-ink" : "text-cream"
          }`}
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
