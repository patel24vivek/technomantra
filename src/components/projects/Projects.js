"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { PROJECTS_LIST } from "./projectsData";

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
      className="relative z-10 w-full min-h-screen bg-[#030712] text-[#F5F5F5] py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-t border-[var(--border-subtle)]/30 flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16 lg:space-y-24 relative z-10">
        {/* Header: Eyebrow, Main Heading & Supporting Copy */}
        <div className="max-w-3xl space-y-6">
          <div className="projects-reveal flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
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
            <div className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-slate-900/90 shadow-2xl transition-all duration-500 group-hover:border-sky-400/60 group-hover:scale-[1.01]">
              {/* Top Browser Header Bar */}
              <div className="h-10 bg-slate-950 px-4 border-b border-slate-800 flex items-center justify-between z-10 relative">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-sky-400 tracking-wider">
                  CASE STUDY // MANUFACTURING ERP
                </span>
                <span className="text-xs font-mono text-slate-500">LIVE SYSTEM</span>
              </div>

              {/* Real High Definition Image */}
              <div className="relative w-full aspect-video min-h-[300px] sm:min-h-[420px] bg-slate-950">
                <img
                  src={featuredProject.imageSrc}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Metadata & Title */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pt-2">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-sky-400 font-semibold">
                    {featuredProject.id}
                  </span>
                  <span className="text-xs font-mono tracking-wider px-3 py-0.5 rounded border uppercase text-sky-300 border-sky-500/30 bg-sky-500/10">
                    {featuredProject.industry} · {featuredProject.service}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white font-display tracking-tight group-hover:text-sky-300 transition-colors duration-300">
                  {featuredProject.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
                  {featuredProject.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{featuredProject.outcome}</span>
                </div>
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
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl transition-all duration-500 group-hover:border-sky-500/40 group-hover:scale-[1.01]">
                    {/* Top Browser Header Bar */}
                    <div className="h-9 bg-slate-950 px-3 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[9px] font-mono text-slate-400 tracking-wider">
                        {proj.industry.toUpperCase()}
                      </span>
                    </div>

                    <div className="relative w-full aspect-video min-h-[220px] bg-slate-950">
                      <img
                        src={proj.imageSrc}
                        alt={proj.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-sky-400 font-medium">
                        {proj.id}
                      </span>
                      <span className="text-xs font-mono tracking-wider px-2.5 py-0.5 rounded border uppercase text-sky-300 border-sky-500/30 bg-sky-500/10">
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
