import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";

type SubpageShellProps = {
  title: string;
  eyebrow: string;
  intro: string;
  children: ReactNode;
};

export function SubpageShell({
  title,
  eyebrow,
  intro,
  children,
}: SubpageShellProps) {
  return (
    <>
      <Header revealed solidAlways />
      <main className="bg-paper pt-[4.75rem] sm:pt-[5.25rem]">
        <div className="border-b border-line bg-warm">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <p className="section-label">{eyebrow}</p>
            <h1 className="section-heading mt-3 text-3xl sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <span className="mt-4 block h-0.5 w-14 bg-[#2563eb]" aria-hidden />
            <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted sm:text-lg">
              {intro}
            </p>
            <p className="mt-6">
              <Link
                href="/"
                className="font-sans text-base font-semibold text-[#2563eb] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
              >
                ← Späť na úvod
              </Link>
            </p>
          </div>
        </div>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
