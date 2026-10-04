"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function InsightsHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".insights-hero-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      aria-labelledby="insights-hero-title"
      className="relative w-full bg-[#030712] text-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-[var(--border-subtle)]/30 overflow-hidden"
    >
      {/* Subtle Cosmic Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        {/* Eyebrow */}
        <div className="insights-hero-reveal flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
          <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase font-semibold">
            INSIGHTS & PERSPECTIVES
          </span>
          <span className="text-slate-600 font-mono text-xs">/</span>
          <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-medium">
            EDITORIAL JOURNAL
          </span>
        </div>

        {/* Main Heading */}
        <h1
          id="insights-hero-title"
          className="insights-hero-reveal text-3xl sm:text-5xl lg:text-6xl font-display font-light text-white tracking-tight leading-[1.08] max-w-4xl"
        >
          Ideas, perspectives and <br className="hidden sm:inline" />
          practical knowledge.
        </h1>

        {/* Supporting Narrative */}
        <p className="insights-hero-reveal text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] font-sans leading-relaxed max-w-2xl">
          Thoughts on technology, digital products, business systems, marketing and the work behind building better digital experiences.
        </p>
      </div>
    </section>
  );
}
