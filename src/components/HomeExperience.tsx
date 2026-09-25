"use client";

import { AboutSection } from "@/components/AboutSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NoticesSection } from "@/components/NoticesSection";
import { ObjectsSection } from "@/components/ObjectsSection";
import { QuickAccess } from "@/components/QuickAccess";
import { SiteFooter } from "@/components/SiteFooter";
import { SplashScreen } from "@/components/SplashScreen";
import { SECTION_ANCHORS } from "@/lib/navigation";

export function HomeExperience() {
  return (
    <>
      <SplashScreen />
      {/* Content is always visible — splash is only a temporary overlay */}
      <Header revealed />
      <main>
        <Hero revealed />
        <QuickAccess revealed />
        <AboutSection />
        <ObjectsSection />
        <NoticesSection />
        <SiteFooter />
        {SECTION_ANCHORS.filter(
          (id) =>
            ![
              "o-organizacii",
              "oznamenia",
              "aktualne-ovs",
              "kontakty",
              "kde-nas-najdete",
              "objekty-smm",
            ].includes(id),
        ).map((id) => (
          <div key={id} id={id} className="h-0 scroll-mt-24" aria-hidden />
        ))}
      </main>
    </>
  );
}
