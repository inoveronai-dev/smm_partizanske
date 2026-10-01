"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

type RevealVariant = "text" | "support" | "photo" | "card";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Extra delay in ms after the element enters view */
  delay?: number;
  variant?: RevealVariant;
  as?: ElementType;
  style?: CSSProperties;
  /**
   * Play a one-shot entrance even when already in view (e.g. modal grids).
   * Default skips animation for content already on screen so the first paint
   * never flashes hidden.
   */
  playWhenVisible?: boolean;
};

/**
 * Calm one-shot scroll reveal. Content stays visible without JS and when
 * prefers-reduced-motion is set. Only opacity + transform are animated.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "text",
  as: Tag = "div",
  style,
  playWhenVisible = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);
  const [skipAnim, setSkipAnim] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let showFrame = 0;
    const armFrame = window.requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const margin = window.innerHeight * 0.06;
      const inView =
        rect.top < window.innerHeight - margin && rect.bottom > margin;

      if (inView && !playWhenVisible) {
        setSkipAnim(true);
        setShown(true);
        return;
      }

      setArmed(true);
      if (inView && playWhenVisible) {
        showFrame = window.requestAnimationFrame(() => setShown(true));
      }
    });

    return () => {
      window.cancelAnimationFrame(armFrame);
      if (showFrame) window.cancelAnimationFrame(showFrame);
    };
  }, [reduced, playWhenVisible]);

  useEffect(() => {
    if (reduced || !armed || shown) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [armed, reduced, shown]);

  const pending = armed && !shown && !reduced;
  const animate = shown && !skipAnim && !reduced;
  const variantClass =
    variant === "photo"
      ? "reveal-photo"
      : variant === "card"
        ? "reveal-card"
        : variant === "support"
          ? "reveal-support"
          : "reveal-text";

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={[
        className,
        "reveal-base",
        variantClass,
        pending ? "reveal-pending" : "",
        animate ? "reveal-shown" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...style,
        ...(animate && delay > 0
          ? { animationDelay: `${delay}ms` }
          : undefined),
      }}
    >
      {children}
    </Tag>
  );
}
