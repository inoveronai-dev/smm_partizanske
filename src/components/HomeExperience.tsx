"use client";

import { useCallback, useEffect, useState } from "react";
import { AboutSection } from "@/components/AboutSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NoticesCarousel } from "@/components/NoticesCarousel";
import { ObjectsSection } from "@/components/ObjectsSection";
import { QuickAccess } from "@/components/QuickAccess";
import { SiteFooter } from "@/components/SiteFooter";
import { SplashScreen } from "@/components/SplashScreen";
import { VisualInterlude } from "@/components/VisualInterlude";

export function HomeExperience() {
  // Start visible for SSR / no-JS; gate only after hydrate when a splash will run.
  const [revealed, setRevealed] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setRevealed(true);
      return;
    }
    // Hold entrance under the splash so the rise is visible when it lifts.
    setRevealed(false);
    const failsafe = window.setTimeout(() => setRevealed(true), 2800);
    return () => window.clearTimeout(failsafe);
  }, []);

  const onSplashComplete = useCallback(() => {
    setRevealed(true);
  }, []);

  return (
    <>
      <SplashScreen onComplete={onSplashComplete} />
      <Header revealed={revealed} />
      <main>
        <Hero revealed={revealed} />
        <QuickAccess revealed={revealed} />
        <ObjectsSection />
        <AboutSection />
        <VisualInterlude />
        <NoticesCarousel />
        <SiteFooter />
      </main>
    </>
  );
}
