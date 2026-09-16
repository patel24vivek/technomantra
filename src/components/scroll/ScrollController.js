"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { scrollProgressRef } from "@/lib/scrollState";

export default function ScrollController({ triggerRef }) {
  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const targetElement = triggerRef?.current || document.body;
    const width = window.innerWidth;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: targetElement,
        start: "top top",
        end: isMobile ? "+=40%" : isTablet ? "+=80%" : "+=120%",
        pin: !isMobile, // Pin hero on desktop & tablet during camera journey
        scrub: 1, // Smooth scrub dampening synchronized with Lenis
        onUpdate: (self) => {
          scrollProgressRef.current = self.progress;
        },
      });
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, [triggerRef]);

  return null;
}
