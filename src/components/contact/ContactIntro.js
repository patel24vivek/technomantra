"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function ContactIntro() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".intro-header-reveal",
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

      gsap.fromTo(
        ".intro-pillar-card",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="contact-intro-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="intro-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              START A CONVERSATION
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              FOUNDATIONAL ALIGNMENT
            </span>
          </div>

          <h2
            id="contact-intro-title"
            className="intro-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Every good project starts <br className="hidden sm:inline" />
            with a clear conversation.
          </h2>

          <p className="intro-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Whether you already have a detailed specification document or are exploring an early concept, we work backward from your operational reality to architect the right digital system.
          </p>
        </div>

        {/* 3 Alignment Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="intro-pillar-card p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-3">
            <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 inline-block">
              01 • NO SALES JARGON
            </span>
            <h3 className="text-xl font-display font-medium text-slate-900">
              Direct Engineering Dialogue
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              You speak directly with the architects and engineers who design and build your system, ensuring zero loss in translation.
            </p>
          </div>

          <div className="intro-pillar-card p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-3">
            <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 inline-block">
              02 • HONEST FEASIBILITY
            </span>
            <h3 className="text-xl font-display font-medium text-slate-900">
              Realistic Scopes & Costs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              We evaluate technical feasibility upfront, giving you transparent milestone roadmaps, fixed expectations, and clear deliverables.
            </p>
          </div>

          <div className="intro-pillar-card p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block">
              03 • TAILORED ARCHITECTURE
            </span>
            <h3 className="text-xl font-display font-medium text-slate-900">
              Systems Built for Your Reality
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              No generic off-the-shelf templates. Every web app, ERP, and automation pipeline is custom engineered around your business workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
