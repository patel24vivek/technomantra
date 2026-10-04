"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function ProjectsCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proj-cta-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="projects-cta-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden text-center"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.06),transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Eyebrow */}
        <div className="proj-cta-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-mono font-semibold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          START A PROJECT
        </div>

        {/* Heading */}
        <h2
          id="projects-cta-title"
          className="proj-cta-reveal text-3xl sm:text-5xl lg:text-6xl font-display font-light text-slate-900 leading-[1.04] tracking-tight"
        >
          Have something worth building?
        </h2>

        {/* Supporting Text */}
        <p className="proj-cta-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
          Tell us what you’re trying to solve. We’ll help turn it into a digital product, business system or experience that works in the real world.
        </p>

        {/* Action Buttons */}
        <div className="proj-cta-reveal pt-4 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          <Link
            href="/request-a-proposal"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-sm transition-all duration-200 shadow-lg shadow-slate-900/10 group"
          >
            <span>Request a Proposal</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-800 hover:border-slate-400 font-sans font-medium text-sm transition-all duration-200 shadow-sm"
          >
            <span>Talk to Us</span>
            <span>→</span>
          </Link>
        </div>

        {/* Micro guarantees */}
        <div className="proj-cta-reveal pt-8 flex items-center justify-center gap-8 text-xs font-mono text-slate-400 flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Engineering-led scoping
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Fixed-timeline sprints
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            No vendor lock-in
          </span>
        </div>
      </div>
    </section>
  );
}
