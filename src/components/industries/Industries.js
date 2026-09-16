"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { INDUSTRIES_LIST } from "./industriesData";

// Minimal fine-grid graphic for Active Industry Preview
function IndustryPreviewGraphic({ activeIndustry }) {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-between relative overflow-hidden">
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)]/30 pb-3 z-10">
        <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase">
          INDUSTRY ARCHITECTURE // {activeIndustry.id}
        </span>
        <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
          WORKFLOW ADAPTATION
        </span>
      </div>

      {/* Main Preview Container */}
      <div className="flex-1 my-4 rounded-xl border border-sky-500/10 bg-black/50 p-6 flex flex-col justify-between relative overflow-hidden">
        {/* Subtle grid background lines */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Active Industry Title & Description */}
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
            <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight font-display">
              {activeIndustry.title}
            </h4>
          </div>

          <p className="text-sm text-slate-300 font-sans leading-relaxed max-w-md">
            {activeIndustry.description}
          </p>
        </div>

        {/* Relevant Solution Tags */}
        <div className="space-y-2 pt-4 border-t border-slate-800/80 relative z-10">
          <div className="text-[10px] font-mono tracking-wider text-[var(--text-muted)] uppercase">
            RELEVANT SOLUTION CAPABILITIES
          </div>
          <div className="flex flex-wrap gap-2">
            {activeIndustry.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono tracking-wide text-sky-300 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="pt-2 border-t border-[var(--border-subtle)]/30 flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
        <span>INDUSTRY → WORKFLOW → TECHNOLOGY</span>
        <span className="text-sky-400 font-medium uppercase">TAILORED DOMAIN</span>
      </div>
    </div>
  );
}

export default function Industries() {
  const [activeIndustryId, setActiveIndustryId] = useState("01");
  const sectionRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".industries-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeIndustry =
    INDUSTRIES_LIST.find((ind) => ind.id === activeIndustryId) || INDUSTRIES_LIST[0];

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative z-10 w-full min-h-screen bg-[#030712] text-[#F5F5F5] py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-t border-[var(--border-subtle)]/30 flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Header: Eyebrow, Main Heading & Supporting Copy */}
        <div className="max-w-3xl space-y-6">
          <div className="industries-reveal flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
              05
            </span>
            <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
              INDUSTRIES
            </span>
          </div>

          <h2 className="industries-reveal font-display text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light tracking-tight text-white leading-[1.08]">
            Built around the way your industry works.
          </h2>

          <p className="industries-reveal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans max-w-2xl">
            Every business has different workflows, customers and challenges. We build digital
            solutions around the realities of the industry behind them.
          </p>
        </div>

        {/* Separator Divider */}
        <div className="w-full h-px bg-[var(--border-subtle)]/40" />

        {/* Desktop & Mobile Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Refined 2-column or single editorial list for 10 industries */}
          <div className="lg:col-span-7 xl:col-span-7 divide-y divide-[var(--border-subtle)]/40">
            {INDUSTRIES_LIST.map((ind) => {
              const isActive = ind.id === activeIndustryId;
              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setActiveIndustryId(ind.id)}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`group py-5 sm:py-6 transition-colors duration-300 cursor-pointer ${
                    isActive ? "bg-sky-500/[0.03]" : ""
                  }`}
                >
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-xs font-mono font-medium transition-colors duration-300 ${
                            isActive ? "text-sky-400" : "text-[var(--text-muted)]"
                          }`}
                        >
                          {ind.id}
                        </span>
                        <h3
                          className={`text-lg sm:text-xl font-light tracking-tight transition-colors duration-300 font-sans ${
                            isActive
                              ? "text-white font-normal"
                              : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {ind.title}
                        </h3>
                      </div>

                      <span
                        className={`text-base transition-all duration-300 transform ${
                          isActive
                            ? "text-sky-400 translate-x-1"
                            : "text-[var(--text-muted)] group-hover:text-white group-hover:translate-x-1"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    {/* Mobile Accordion Content (Visible on mobile / small screens when active) */}
                    {isActive && (
                      <div className="block lg:hidden space-y-3 pt-2 pl-8 border-l border-sky-500/30">
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          {ind.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {ind.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono text-sky-300 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Sticky Preview Panel */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 sticky top-32">
            <div className="w-full h-[440px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)]/50 backdrop-blur-xl p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <IndustryPreviewGraphic activeIndustry={activeIndustry} />
            </div>
          </div>
        </div>

        {/* Section Footer Link / CTA */}
        <div className="pt-6 border-t border-[var(--border-subtle)]/30 flex items-center justify-between">
          <Link
            href="/industries"
            className="group inline-flex items-center gap-3 text-sm font-mono tracking-wider text-sky-400 hover:text-sky-300 transition-colors duration-300"
          >
            <span>See how we work across industries</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
