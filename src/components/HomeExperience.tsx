"use client";

import { AboutSection } from "@/components/AboutSection";
import { BlueHourBand } from "@/components/BlueHourBand";
import { DocumentHub } from "@/components/DocumentHub";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NoticesSection } from "@/components/NoticesSection";
import { ObjectsSection } from "@/components/ObjectsSection";
import { QuickAccess } from "@/components/QuickAccess";
import { SiteFooter } from "@/components/SiteFooter";
import { SplashScreen } from "@/components/SplashScreen";
import { VisualInterlude } from "@/components/VisualInterlude";

export function HomeExperience() {
  return (
    <>
      <SplashScreen />
      <Header revealed />
      <main>
        <Hero revealed />
        <QuickAccess revealed />
        <ObjectsSection />
        <AboutSection />
        <VisualInterlude />
        <NoticesSection />
        <DocumentHub />
        <BlueHourBand />
        <SiteFooter />
      </main>
    </>
  );
}
