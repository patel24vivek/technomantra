"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { PROJECTS_LIST } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".list-header-reveal",
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

  return (
    <section
      id="more-projects"
      ref={sectionRef}
      aria-labelledby="more-projects-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="list-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              MORE SELECTED PROJECTS
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              CASE ARCHITECTURE
            </span>
          </div>

          <h2
            id="more-projects-title"
            className="list-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Digital products engineered <br className="hidden sm:inline" />
            for operational impact.
          </h2>

          <p className="list-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Explore our work across custom enterprise resource planning, commercial trading hubs, headless storefronts, and cross-border logistics automation.
          </p>
        </div>

        {/* Alternating Project Cards Stack */}
        <div className="space-y-14 lg:space-y-20">
          {PROJECTS_LIST.map((proj, idx) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              isReversed={idx % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
