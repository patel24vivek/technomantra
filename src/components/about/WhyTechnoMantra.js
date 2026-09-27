"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const WHY_POINTS = [
  {
    title: "Business-first thinking",
    description: "Technology decisions start with the actual business problem.",
  },
  {
    title: "One connected team",
    description: "Development, design, automation and digital growth can work together.",
  },
  {
    title: "Built around your workflow",
    description: "Solutions can be adapted to the way the business actually operates.",
  },
  {
    title: "Long-term thinking",
    description: "Build systems that can evolve instead of solving only today's problem.",
  },
];

const WORKFLOW_STEPS = ["BUSINESS", "DESIGN", "TECHNOLOGY", "EXECUTION", "GROWTH"];

export default function WhyTechnoMantra() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal text
      gsap.fromTo(
        ".why-reveal",
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

      // Workflow nodes stagger
      gsap.fromTo(
        ".why-node",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-technomantra-title"
      className="relative w-full bg-[#F8FAFC] text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="why-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              WHY TECHNOMANTRA
            </span>
          </div>

          <h2
            id="why-technomantra-title"
            className="why-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            Technology and execution, <br />
            working together.
          </h2>

          <p className="why-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            We combine business understanding, design, development and digital growth to create solutions that
            work in the real world.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_POINTS.map((point, idx) => (
            <div
              key={point.title}
              className="why-reveal p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-sky-500/40 hover:shadow-xl transition-all duration-300 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-sky-600">0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-sky-500" />
              </div>

              <h3 className="text-xl font-display font-medium text-slate-900">
                {point.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connected Step Diagram Visual */}
        <div aria-hidden="true" className="why-reveal pt-8 border-t border-slate-200/80">
          <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-6 text-center">
            END-TO-END EXECUTION FLOW
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div key={step} className="flex items-center gap-2 sm:gap-4">
                <div className="why-node px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono text-xs sm:text-sm font-semibold shadow-sm hover:border-sky-500 hover:text-sky-600 transition-colors">
                  {step}
                </div>
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <span className="text-sky-500 font-bold text-sm">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
