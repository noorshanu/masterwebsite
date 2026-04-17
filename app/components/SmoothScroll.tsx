"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Apple-style inertial scroll: smoothes wheel/touch so scrub-linked motion
 * (e.g. frame sequences) advances fluidly like product pages such as
 * https://www.apple.com/in/airpods-4/
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      smoothWheel: true,
      /** Slightly softer interpolation — continuous, not stepped */
      lerp: 0.072,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.05,
      syncTouch: true,
      syncTouchLerp: 0.1,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
