"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { PROJECT_ARCHIVE, PROJECTS_LIST } from "@/data/projects";

export default function ProjectArchive() {
  const sectionRef = useRef(null);
  const floatingPreviewRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".archive-header-reveal",
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
        ".archive-row",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
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

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Find corresponding project image
  const getProjectImage = (itemName) => {
    const match = PROJECTS_LIST.find((p) =>
      itemName.toLowerCase().includes(p.title.toLowerCase().split(" ")[0])
    );
    return match ? match.image : "/images/industries/industries-hero.jpg";
  };

  return (
    <section
      id="project-archive"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      aria-labelledby="project-archive-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.04),transparent_60%)] pointer-events-none" />

      {/* Floating Cursor Thumbnail Preview */}
      {hoveredProject && (
        <div
          ref={floatingPreviewRef}
          className="hidden lg:block absolute pointer-events-none z-40 transition-opacity duration-200 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${cursorPos.x + 80}px`,
            top: `${cursorPos.y - 40}px`,
          }}
        >
          <div className="w-56 h-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/90 bg-slate-900 animate-in zoom-in-90 duration-150 relative">
            <Image
              src={getProjectImage(hoveredProject.name)}
              alt={hoveredProject.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-black/75 backdrop-blur-sm text-[9px] font-mono text-white truncate">
              {hoveredProject.name} • {hoveredProject.industry}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="archive-header-reveal flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              COMPLETE RECORD
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              STUDIO ARCHIVE DIRECTORY
            </span>
          </div>

          <h2
            id="project-archive-title"
            className="archive-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Studio Project Ledger
          </h2>

          <p className="archive-header-reveal text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            A chronological ledger of digital products, business platforms, and custom software architectures designed and delivered by TechnoMantra. Hover any system to preview interface.
          </p>
        </div>

        {/* Editorial Table */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
          {/* Table Header */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 p-5 sm:p-6 bg-slate-50 border-b border-slate-200/80 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
            <div className="md:col-span-1">Year</div>
            <div className="md:col-span-4">System Architecture</div>
            <div className="md:col-span-2">Industry</div>
            <div className="md:col-span-3">Domain / Tech Stack</div>
            <div className="md:col-span-2 text-right">Inquire</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-100">
            {PROJECT_ARCHIVE.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onMouseEnter={() => setHoveredProject(item)}
                onMouseLeave={() => setHoveredProject(null)}
                className="archive-row group block p-5 sm:p-6 hover:bg-slate-50 transition-all duration-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center">
                  {/* Year */}
                  <div className="md:col-span-1">
                    <span className="text-xs font-mono text-slate-400 font-medium group-hover:text-sky-600 transition-colors">
                      {item.year}
                    </span>
                  </div>

                  {/* Project Name */}
                  <div className="md:col-span-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-base sm:text-lg font-display font-medium text-slate-900 group-hover:text-sky-700 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {/* Industry */}
                  <div className="md:col-span-2">
                    <span className="text-xs font-mono text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/70 group-hover:bg-sky-50 group-hover:text-sky-800 transition-colors">
                      {item.industry}
                    </span>
                  </div>

                  {/* Service & Tech */}
                  <div className="md:col-span-3">
                    <div className="text-xs text-slate-800 font-sans font-medium">
                      {item.service}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      {item.tech}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="md:col-span-2 text-left md:text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 group-hover:text-slate-900 font-semibold group-hover:translate-x-1 transition-all">
                      <span>Inquire System</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
