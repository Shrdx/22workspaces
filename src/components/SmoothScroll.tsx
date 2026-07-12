"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,        // scroll animation duration (seconds) — higher = smoother/slower
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out easing
      touchMultiplier: 1.5,  // sensitivity for touch devices
      wheelMultiplier: 0.75, // ← reduced from default 1.0 for gentler scroll per tick
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
