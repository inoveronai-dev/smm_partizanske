"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#o-nas", label: "O nás" },
  { href: "#sluzby", label: "Služby" },
  { href: "#volne-priestory", label: "Voľné priestory" },
  { href: "#oznamenia", label: "Oznámenia" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

type HeaderProps = {
  revealed?: boolean;
};

export function Header({ revealed = true }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,opacity,transform] duration-700 ${
        revealed
          ? "translate-y-0 opacity-100"
          : "-translate-y-2 opacity-0"
      } ${
        scrolled || menuOpen
          ? "border-b border-cream/10 bg-anthracite/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8 lg:px-10">
        <a
          href="#top"
          className="group flex items-baseline gap-2.5 text-cream transition-opacity hover:opacity-90"
          aria-label="SMM Partizánske — domov"
        >
          <span className="font-serif text-xl font-medium tracking-[0.12em] sm:text-2xl">
            SMM
          </span>
          <span className="hidden font-sans text-[0.65rem] font-medium uppercase tracking-[0.28em] text-cream/70 sm:inline">
            Partizánske
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hlavná navigácia">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.22em] text-cream/80 transition-colors hover:text-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center text-cream lg:hidden"
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
        className={`border-t border-cream/10 bg-anthracite/95 backdrop-blur-md lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6 sm:px-8"
          aria-label="Mobilná navigácia"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 font-sans text-sm font-medium uppercase tracking-[0.22em] text-cream/85 transition-colors hover:text-amber"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
