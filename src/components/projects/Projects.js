"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { PROJECTS_LIST } from "./projectsData";

// Sleek editorial mockup frame renderer
function ProjectVisualMockup({ type, title }) {
  switch (type) {
    case "erp":
      return (
        <div className="w-full h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] rounded-xl border border-sky-500/20 bg-gradient-to-br from-slate-900/90 via-[#0a1120] to-black p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-sky-500/40 transition-colors duration-500">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            </div>
            <span className="text-[10px] font-mono text-sky-400 tracking-widest uppercase">
              ENTERPRISE ERP CORE // LIVE SYSTEM
            </span>
          </div>

          {/* Central Mockup UI Elements */}
          <div className="my-6 grid grid-cols-12 gap-3 flex-1">
            <div className="col-span-4 rounded-lg border border-sky-500/20 bg-sky-500/5 p-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="h-2.5 w-16 bg-sky-400/50 rounded" />
                <div className="h-1.5 w-full bg-slate-700/50 rounded" />
                <div className="h-1.5 w-3/4 bg-slate-700/50 rounded" />
              </div>
              <div className="h-6 w-full bg-sky-500/10 rounded border border-sky-500/20 flex items-center px-2">
                <span className="text-[9px] font-mono text-sky-300">SYSTEM: ACTIVE</span>
              </div>
            </div>

            <div className="col-span-8 rounded-lg border border-slate-800 bg-slate-900/40 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="h-3 w-32 bg-slate-700/70 rounded" />
                <div className="h-2 w-12 bg-sky-400/60 rounded" />
              </div>
              <div className="space-y-2 my-3">
                <div className="h-2 w-full bg-slate-800 rounded" />
                <div className="h-2 w-4/5 bg-slate-800 rounded" />
                <div className="h-2 w-2/3 bg-slate-800 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-sky-500/40 rounded-full" />
                <div className="h-1.5 w-8 bg-sky-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/60 pt-2">
            <span>REAL-TIME INVENTORY & PRODUCTION</span>
            <span className="text-sky-400">99.98% UPTIME</span>
          </div>
        </div>
      );

    case "ecommerce":
      return (
        <div className="w-full h-full min-h-[260px] sm:min-h-[300px] rounded-xl border border-sky-500/20 bg-gradient-to-br from-slate-900/90 via-[#0a1120] to-black p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-sky-500/40 transition-colors duration-500">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-[10px] font-mono text-sky-400 tracking-widest uppercase">
              OMNICHANNEL STOREFRONT UI
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          </div>

          <div className="my-4 grid grid-cols-3 gap-3 flex-1 items-center">
            <div className="h-24 rounded-lg border border-sky-500/20 bg-sky-500/5 p-2 flex flex-col justify-between">
              <div className="h-2 w-10 bg-sky-400/40 rounded" />
              <div className="h-1.5 w-full bg-slate-700/50 rounded" />
            </div>
            <div className="h-28 rounded-lg border border-sky-400/40 bg-sky-500/10 p-2 flex flex-col justify-between shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              <div className="h-2.5 w-12 bg-sky-400/80 rounded" />
              <div className="h-1.5 w-full bg-slate-600 rounded" />
            </div>
            <div className="h-24 rounded-lg border border-sky-500/20 bg-sky-500/5 p-2 flex flex-col justify-between">
              <div className="h-2 w-10 bg-sky-400/40 rounded" />
              <div className="h-1.5 w-full bg-slate-700/50 rounded" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/60 pt-2">
            <span>AUTOMATED FULFILLMENT SYNC</span>
            <span className="text-sky-400">HIGH CONVERSION</span>
          </div>
        </div>
      );

    case "automation":
      return (
        <div className="w-full h-full min-h-[260px] sm:min-h-[300px] rounded-xl border border-sky-500/20 bg-gradient-to-br from-slate-900/90 via-[#0a1120] to-black p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-sky-500/40 transition-colors duration-500">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-[10px] font-mono text-sky-400 tracking-widest uppercase">
              WORKFLOW ENGINE // PIPELINE
            </span>
            <span className="text-[9px] font-mono text-slate-400">14 REGIONAL NODES</span>
          </div>

          <div className="my-4 flex items-center justify-between gap-2 flex-1 px-2">
            <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 text-center font-mono text-[10px] text-slate-400">
              INPUT
            </div>
            <div className="h-0.5 flex-1 bg-sky-500/40 relative">
              <div className="w-2 h-2 rounded-full bg-sky-400 absolute -top-0.75 left-1/2 -translate-x-1/2 shadow-[0_0_8px_#38bdf8]" />
            </div>
            <div className="p-3 rounded-lg border border-sky-400/50 bg-sky-500/20 text-center font-mono text-[10px] text-sky-300 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.2)]">
              AUTO ENGINE
            </div>
            <div className="h-0.5 flex-1 bg-sky-500/40 relative">
              <div className="w-2 h-2 rounded-full bg-sky-400 absolute -top-0.75 left-1/2 -translate-x-1/2 shadow-[0_0_8px_#38bdf8]" />
            </div>
            <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 text-center font-mono text-[10px] text-slate-400">
              OUTPUT
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/60 pt-2">
            <span>MANUAL TIME REDUCED BY 80%</span>
            <span className="text-sky-400">ZERO DATA LOSS</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".projects-reveal",
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

      // Projects card stagger reveal
      gsap.fromTo(
        ".project-card-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featuredProject = PROJECTS_LIST[0];
  const secondaryProjects = PROJECTS_LIST.slice(1);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10 w-full min-h-screen bg-[#030712] text-[#F5F5F5] py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-t border-[var(--border-subtle)]/30 flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Header: Eyebrow, Main Heading & Supporting Copy */}
        <div className="max-w-3xl space-y-6">
          <div className="projects-reveal flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
              06
            </span>
            <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
              SELECTED WORK
            </span>
          </div>

          <h2 className="projects-reveal font-display text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light tracking-tight text-white leading-[1.08]">
            Built for real businesses. Designed to make a difference.
          </h2>

          <p className="projects-reveal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans max-w-2xl">
            A selection of digital products, business systems and experiences we've built around
            real-world needs.
          </p>
        </div>

        {/* Separator Divider */}
        <div className="w-full h-px bg-[var(--border-subtle)]/40" />

        {/* Editorial Project Presentation */}
        <div className="space-y-16 lg:space-y-20">
          {/* 01: Large Featured Case Study */}
          <div className="project-card-item group cursor-pointer space-y-6">
            <div className="overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]">
              <ProjectVisualMockup
                type={featuredProject.visualType}
                title={featuredProject.title}
              />
            </div>

            {/* Metadata & Title */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pt-2">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-sky-400 font-medium">
                    {featuredProject.id}
                  </span>
                  <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                    {featuredProject.industry} · {featuredProject.service}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white font-display tracking-tight group-hover:text-sky-300 transition-colors duration-300">
                  {featuredProject.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              <Link
                href={featuredProject.href}
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 group-hover:text-sky-300 transition-colors duration-300 self-start md:self-center"
              >
                <span>View Case Study</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* 02 & 03: Secondary Projects 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-6 border-t border-[var(--border-subtle)]/30">
            {secondaryProjects.map((proj) => (
              <div
                key={proj.id}
                className="project-card-item group cursor-pointer space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                    <ProjectVisualMockup type={proj.visualType} title={proj.title} />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-sky-400 font-medium">
                        {proj.id}
                      </span>
                      <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                        {proj.industry} · {proj.service}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-white font-display tracking-tight group-hover:text-sky-300 transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <Link
                  href={proj.href}
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 group-hover:text-sky-300 transition-colors duration-300 pt-2"
                >
                  <span>View Case Study</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section Footer Link / CTA */}
        <div className="pt-6 border-t border-[var(--border-subtle)]/30 flex items-center justify-between">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm font-mono tracking-wider text-sky-400 hover:text-sky-300 transition-colors duration-300"
          >
            <span>Explore all projects</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
