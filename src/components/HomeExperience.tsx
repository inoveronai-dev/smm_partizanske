"use client";

import { useCallback, useState } from "react";
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
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />
      <Header revealed={splashDone} />
      <main>
        <Hero revealed={splashDone} />
        <QuickAccess revealed={splashDone} />
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
