"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { FEATURED_PROJECT } from "@/data/projects";
import ProjectLens from "./ProjectLens";

const STAGES = [
  { id: 0, label: "01 Context", title: "Business Context" },
  { id: 1, label: "02 Challenge", title: "Operational Challenge" },
  { id: 2, label: "03 Solution", title: "Engineered Solution" },
  { id: 3, label: "04 Build", title: "System Architecture" },
  { id: 4, label: "05 Result", title: "Business Outcome" },
];

export default function FeaturedProjectStage() {
  const sectionRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".featured-header-reveal",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const project = FEATURED_PROJECT;

  return (
    <section
      id="featured-project-stage"
      ref={sectionRef}
      aria-labelledby="featured-project-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
        {/* Section Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 flex-wrap gap-4">
          <div className="featured-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              FEATURED CASE STUDY
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              PROJECT IN MOTION
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-200/80">
              {project.industry.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Stage Timeline Stepper Bar */}
        <div
          className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none"
          role="tablist"
          aria-label="Case Study Stages"
        >
          {STAGES.map((stg) => {
            const isActive = activeStage === stg.id;
            return (
              <button
                key={stg.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveStage(stg.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wide transition-all duration-200 shrink-0 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md font-semibold scale-105"
                    : "bg-white/80 hover:bg-white text-slate-600 border border-slate-200/90"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-sky-400" : "bg-slate-300"
                  }`}
                />
                <span>{stg.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Stage Grid (Left: Dynamic Narrative Content, Right: Interactive Project Lens Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Stage Narrative Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-sky-700 uppercase font-semibold">
                STAGE {activeStage + 1} OF 5 • {STAGES[activeStage].title.toUpperCase()}
              </span>
              <h2
                id="featured-project-title"
                className="text-3xl sm:text-4xl font-display font-light text-slate-900 tracking-tight leading-tight"
              >
                {project.title}
              </h2>
            </div>

            {/* Stage 01: Context */}
            {activeStage === 0 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-lg font-sans text-sky-900 font-medium leading-snug">
                  {project.context.heading}
                </p>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {project.context.description}
                </p>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    CLIENT SCOPE
                  </div>
                  <div className="text-xs text-slate-700 font-sans leading-relaxed">
                    Precision engineering firm requiring custom manufacturing resource planning (MRP) and real-time inventory synchronization.
                  </div>
                </div>
              </div>
            )}

            {/* Stage 02: Challenge */}
            {activeStage === 1 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-lg font-sans text-amber-900 font-medium leading-snug">
                  {project.challenge.heading}
                </p>
                <div className="space-y-2.5">
                  {project.challenge.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="text-amber-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stage 03: Solution */}
            {activeStage === 2 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-lg font-sans text-emerald-900 font-medium leading-snug">
                  {project.solution.heading}
                </p>
                <div className="space-y-2.5">
                  {project.solution.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stage 04: Build */}
            {activeStage === 3 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-lg font-sans text-sky-900 font-medium leading-snug">
                  {project.build.heading}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.build.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-mono font-medium shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Stage 05: Outcome */}
            {activeStage === 4 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-lg font-sans text-slate-900 font-medium leading-snug">
                  {project.outcome.heading}
                </p>
                <div className="space-y-2.5">
                  {project.outcome.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                disabled={activeStage === 0}
                className="px-4 py-2 rounded-full border border-slate-200 text-xs font-mono disabled:opacity-30 hover:bg-white transition-colors"
              >
                ← Previous Stage
              </button>

              <button
                type="button"
                onClick={() => setActiveStage((prev) => Math.min(STAGES.length - 1, prev + 1))}
                disabled={activeStage === STAGES.length - 1}
                className="px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-mono disabled:opacity-30 hover:bg-sky-600 transition-colors"
              >
                Next Stage →
              </button>
            </div>
          </div>

          {/* Right Column: Project Lens Visual with Inspection HUD */}
          <div className="lg:col-span-7">
            <ProjectLens
              imageSrc={
                activeStage === 1
                  ? project.images.detail
                  : activeStage === 3
                  ? project.images.secondary
                  : project.images.hero
              }
              alt={`${project.title} — ${STAGES[activeStage].title}`}
            >
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  <span className="font-mono text-[11px] font-semibold text-slate-900">
                    STAGE: {STAGES[activeStage].label.toUpperCase()}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500 hidden sm:inline">
                  HOVER TO INSPECT UI LENS
                </span>
              </div>
            </ProjectLens>
          </div>
        </div>
      </div>
    </section>
  );
}
