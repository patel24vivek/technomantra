"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const STAGES = [
  {
    number: "01",
    name: "Understand",
    detail: "We learn about your business, users, workflows and goals.",
    extra: [
      "Stakeholder interviews & business goals alignment",
      "User workflow & operational requirements mapping",
      "Technical feasibility & constraint analysis",
    ],
    outcome: "Clear project scope & shared vision",
  },
  {
    number: "02",
    name: "Plan",
    detail: "We define the right structure, features and technology.",
    extra: [
      "System architecture & technology stack selection",
      "Detailed feature roadmap & milestone scheduling",
      "Data models, schema & integration planning",
    ],
    outcome: "Actionable roadmap & specifications",
  },
  {
    number: "03",
    name: "Design",
    detail: "We create an experience that is clear, useful and aligned with your brand.",
    extra: [
      "Intuitive wireframes & interactive UX prototypes",
      "Brand-aligned visual design & design system tokens",
      "Responsive interface layouts across all devices",
    ],
    outcome: "High-fidelity interactive prototypes",
  },
  {
    number: "04",
    name: "Build",
    detail: "We develop, integrate and test the product.",
    extra: [
      "Clean, maintainable frontend & backend engineering",
      "Third-party API, ERP/CRM & database integrations",
      "Rigorous quality assurance, testing & security audits",
    ],
    outcome: "Production-ready, battle-tested software",
  },
  {
    number: "05",
    name: "Improve",
    detail: "We refine the experience as your business and users evolve.",
    extra: [
      "Performance monitoring & optimization cycles",
      "User feedback collection & iterative enhancement",
      "Long-term support & system scalability upgrades",
    ],
    outcome: "Continuous business value & evolution",
  },
];

function StageCard({ stage, idx, isActive }) {
  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl border transition-all duration-500 ${
        isActive
          ? "bg-white border-sky-500/50 shadow-2xl shadow-sky-500/10 scale-[1.02] -translate-y-1"
          : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300 opacity-70 hover:opacity-100"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className={`text-[11px] font-mono tracking-widest uppercase font-semibold transition-colors ${
            isActive ? "text-sky-600" : "text-slate-500"
          }`}
        >
          STAGE {stage.number}
        </span>
        <span className="text-xs font-mono text-slate-400">
          0{idx + 1} / 05
        </span>
      </div>

      <h3
        className={`text-xl sm:text-2xl font-display font-medium transition-colors duration-300 ${
          isActive ? "text-slate-900 font-semibold" : "text-slate-700"
        }`}
      >
        {stage.name}
      </h3>

      <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed pt-2">
        {stage.detail}
      </p>

      {/* Vertically Expanding Information on Active Turn */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          isActive
            ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-slate-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
            KEY FOCUS & ACTIVITIES
          </div>
          <ul className="space-y-1.5 text-xs text-slate-600 font-sans">
            {stage.extra.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-sky-500 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <span className="inline-block px-3 py-1 rounded-md bg-sky-50 border border-sky-200/60 text-[11px] font-mono text-sky-800 font-medium">
              Outcome: {stage.outcome}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header text reveal
      gsap.fromTo(
        ".work-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Glowing progress line extending from top (01) all the way to bottom (05)
      if (lineRef.current && containerRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 65%",
          end: "bottom 50%",
          scrub: 0.2,
          onUpdate: (self) => {
            if (lineRef.current) {
              const p = Math.min(1, Math.max(0, self.progress));
              lineRef.current.style.height = `${p * 100}%`;

              // Dynamically sync the active stage up to the very last one
              const currentIdx = Math.min(
                STAGES.length - 1,
                Math.floor(p * STAGES.length)
              );
              setActiveStage(currentIdx);
            }
          },
        });
      }

      // Supplementary row trigger for direct click/jump focus
      const rows = gsap.utils.toArray(".work-step-row");
      rows.forEach((row, idx) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveStage(idx),
          onEnterBack: () => setActiveStage(idx),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="how-we-work-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16 lg:space-y-24">
        {/* Top Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="work-reveal inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/80">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              HOW WE WORK
            </span>
          </div>

          <h2
            id="how-we-work-title"
            className="work-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            From idea <br className="hidden sm:inline" />
            to working product.
          </h2>

          <p className="work-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Good digital work starts with understanding the problem. We move from discovery to execution through
            a process designed to keep business goals, users and technology aligned.
          </p>
        </div>

        {/* Alternating Two-Sided Vertical Timeline with Expanding Cards */}
        <div ref={containerRef} className="work-timeline-container relative max-w-5xl mx-auto py-4">
          {/* Central Vertical Spine Wrapper positioned from 1st badge center to 5th badge center */}
          <div className="absolute left-6 md:left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 pointer-events-none">
            {/* Base Background Line */}
            <div className="w-full h-full bg-slate-200/90 rounded-full" />

            {/* Glowing Blue Progress Line extending 0% to 100% */}
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-[3px] -translate-x-[0.5px] bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600 shadow-[0_0_12px_rgba(56,189,248,0.95)] z-10 rounded-full transition-[height] duration-75"
              style={{ height: "0%" }}
            />
          </div>

          <div className="space-y-12 md:space-y-20">
            {STAGES.map((stage, idx) => {
              const isLeft = idx % 2 === 0; // Stage 1, 3, 5 on Left; Stage 2, 4 on Right
              const isActive = activeStage === idx;
              const isPast = activeStage > idx;

              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStage(idx)}
                  className="work-step-row relative grid grid-cols-1 md:grid-cols-[1fr_96px_1fr] items-center cursor-pointer group"
                >
                  {/* Left Column Content */}
                  <div className="hidden md:block">
                    {isLeft ? (
                      <StageCard stage={stage} idx={idx} isActive={isActive} />
                    ) : null}
                  </div>

                  {/* Center Column: Node Badge */}
                  <div className="relative flex justify-center items-center">
                    <span
                      className={`w-10 h-10 rounded-full font-mono text-xs font-bold flex items-center justify-center transition-all duration-500 ring-4 ring-[#FAF9F6] z-20 ${
                        isActive
                          ? "bg-sky-500 text-white shadow-[0_0_16px_rgba(14,165,233,0.7)] scale-110"
                          : isPast
                          ? "bg-sky-100 text-sky-700 border border-sky-300"
                          : "bg-white text-slate-400 border border-slate-300"
                      }`}
                    >
                      {stage.number}
                    </span>
                  </div>

                  {/* Right Column Content */}
                  <div className="pl-14 md:pl-0">
                    {!isLeft || typeof window === "undefined" ? (
                      <StageCard stage={stage} idx={idx} isActive={isActive} />
                    ) : (
                      /* Mobile fallback for Left items */
                      <div className="md:hidden">
                        <StageCard stage={stage} idx={idx} isActive={isActive} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
