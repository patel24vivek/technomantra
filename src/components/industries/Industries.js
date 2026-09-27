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
        <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase font-semibold">
          INDUSTRY ARCHITECTURE // {activeIndustry.id}
        </span>
        <span className="text-[10px] font-mono text-emerald-400 tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          TAILORED DOMAIN
        </span>
      </div>

      {/* Main Preview Container */}
      <div className="flex-1 my-4 rounded-xl border border-sky-500/20 bg-black/60 p-6 flex flex-col justify-between relative overflow-hidden shadow-inner">
        {/* Subtle grid background lines */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Active Industry Title & Description */}
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
            <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight font-display">
              {activeIndustry.title}
            </h4>
          </div>

          <p className="text-sm text-slate-200 font-sans leading-relaxed max-w-md">
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
                className="text-xs font-mono tracking-wide px-3 py-1 rounded border font-medium text-sky-300 border-sky-500/30 bg-sky-500/10"
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
        <span className="text-sky-400 font-medium uppercase">DOMAIN ADAPTABILITY</span>
      </div>
    </div>
  );
}

export default function Industries() {
  const [activeIndustryId, setActiveIndustryId] = useState("01");
  const sectionRef = useRef(null);

  useEffect(() => {
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

      // ScrollTrigger active state switching for each industry item
      INDUSTRIES_LIST.forEach((ind) => {
        const el = document.getElementById(`industry-item-${ind.id}`);
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => setActiveIndustryId(ind.id),
          onEnterBack: () => setActiveIndustryId(ind.id),
        });
      });
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
      <div className="w-full max-w-7xl mx-auto space-y-16 lg:space-y-24 relative z-10">
        {/* Header: Eyebrow, Main Heading & Supporting Copy */}
        <div className="max-w-3xl space-y-6">
          <div className="industries-reveal flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          {/* Left Column: 10 Industries */}
          <div className="lg:col-span-7 xl:col-span-7 divide-y divide-[var(--border-subtle)]/40">
            {INDUSTRIES_LIST.map((ind) => {
              const isActive = ind.id === activeIndustryId;
              return (
                <div
                  key={ind.id}
                  id={`industry-item-${ind.id}`}
                  onMouseEnter={() => setActiveIndustryId(ind.id)}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`group py-5 sm:py-6 transition-colors duration-300 cursor-pointer ${
                    isActive ? "bg-sky-500/[0.04] px-4 -mx-4 rounded-xl" : ""
                  }`}
                >
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-xs font-mono font-semibold transition-colors duration-300 ${
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

                    {/* Mobile Accordion Content */}
                    {isActive && (
                      <div className="block lg:hidden space-y-3 pt-2 pl-8 border-l border-sky-500/40">
                        <p className="text-xs text-slate-200 leading-relaxed font-sans">
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
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 sticky top-28 self-start z-20">
            <div className="w-full h-[450px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)]/80 backdrop-blur-xl p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden">
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
