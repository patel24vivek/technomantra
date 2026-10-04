"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { PROJECT_PROCESS_STEPS } from "@/data/projects";

export default function ProjectProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-header-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".process-step-item",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-we-build"
      ref={sectionRef}
      aria-labelledby="project-process-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="process-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              HOW WE BUILD
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              ENGINEERING METHODOLOGY
            </span>
          </div>

          <h2
            id="project-process-title"
            className="process-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Good projects are <br className="hidden sm:inline" />
            not accidents.
          </h2>

          <p className="process-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            We combine business understanding, design thinking and engineering to build systems that work reliably in the real world.
          </p>
        </div>

        {/* 6-Step Process Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className="process-step-item p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md shadow-slate-200/40 space-y-4 hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-light text-slate-300 group-hover:text-sky-600 transition-colors">
                    {step.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-sky-500 transition-colors" />
                </div>

                <h3 className="text-xl font-display font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400 uppercase">
                PHASE {step.num} / 06
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
