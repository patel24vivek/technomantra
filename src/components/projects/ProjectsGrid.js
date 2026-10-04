"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { PROJECTS_LIST, PROJECTS_CATEGORIES } from "@/data/projects";

export default function ProjectsGrid() {
  const sectionRef = useRef(null);
  const gridContainerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("bento"); // "bento" | "cinematic" | "compact"
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Filter projects by category and search query
  const filteredProjects = PROJECTS_LIST.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.industry.toLowerCase().includes(query) ||
      p.technologies.some((t) => t.toLowerCase().includes(query)) ||
      p.services.some((s) => s.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bento-header-reveal",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".bento-card-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridContainerRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [viewMode, selectedCategory]);

  return (
    <section
      id="projects-grid"
      ref={sectionRef}
      aria-labelledby="projects-grid-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(14,165,233,0.05),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(214,168,95,0.03),transparent_60%)] pointer-events-none" />

      {/* Subtle micro grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <div className="bento-header-reveal flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
                CURATED WORK SHOWCASE
              </span>
              <span className="text-slate-300 font-mono text-xs">/</span>
              <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                EDITORIAL BENTO GRID
              </span>
            </div>

            <h2
              id="projects-grid-title"
              className="bento-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.05] tracking-tight"
            >
              Engineered for impact. <br />
              Built for real business.
            </h2>

            <p className="bento-header-reveal text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Explore our delivered systems across industries. Click any system to inspect its architecture, deliverables, and measurable outcomes.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="bento-header-reveal flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200/90 shadow-sm">
              <button
                onClick={() => setViewMode("bento")}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  viewMode === "bento"
                    ? "bg-slate-900 text-white font-semibold shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                title="Bento Grid View"
              >
                <span>🍱 Bento</span>
              </button>

              <button
                onClick={() => setViewMode("cinematic")}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  viewMode === "cinematic"
                    ? "bg-slate-900 text-white font-semibold shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                title="Cinematic Deck View"
              >
                <span>🎬 Deck</span>
              </button>

              <button
                onClick={() => setViewMode("compact")}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  viewMode === "compact"
                    ? "bg-slate-900 text-white font-semibold shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                title="Compact Matrix View"
              >
                <span>⚡ Matrix</span>
              </button>
            </div>

            <span className="text-xs font-mono text-slate-400">
              {filteredProjects.length} / {PROJECTS_LIST.length} SYSTEMS
            </span>
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
            role="tablist"
          >
            {PROJECTS_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === "All"
                  ? PROJECTS_LIST.length
                  : PROJECTS_LIST.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 shrink-0 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-md font-semibold"
                      : "bg-white hover:bg-slate-50 text-slate-600 border border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? "bg-sky-500 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Query Input */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech, ERP, CRM..."
              className="w-full px-4 py-2 pl-9 rounded-full bg-white border border-slate-200/90 text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-xs"
            />
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-mono"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Project Display depending on View Mode */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white border border-dashed border-slate-300 space-y-4">
            <p className="text-base text-slate-600 font-sans">
              No systems match your active filter or search query: <strong className="text-slate-900">“{searchQuery}”</strong>
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-mono hover:bg-sky-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "bento" ? (
          /* 1. Bento Showcase Mode */
          <div
            ref={gridContainerRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
          >
            {filteredProjects.map((proj) => (
              <BentoCard
                key={proj.id}
                project={proj}
                onInspect={() => setActiveModalProject(proj)}
              />
            ))}
          </div>
        ) : viewMode === "cinematic" ? (
          /* 2. Cinematic Visual Deck Mode */
          <div
            ref={gridContainerRef}
            className="space-y-8 sm:space-y-10"
          >
            {filteredProjects.map((proj) => (
              <CinematicDeckCard
                key={proj.id}
                project={proj}
                onInspect={() => setActiveModalProject(proj)}
              />
            ))}
          </div>
        ) : (
          /* 3. Compact Studio Matrix Mode */
          <div
            ref={gridContainerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((proj) => (
              <StudioMatrixCard
                key={proj.id}
                project={proj}
                onInspect={() => setActiveModalProject(proj)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Interactive Project Inspection Modal */}
      {activeModalProject && (
        <ProjectInspectionModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}

// -------------------------------------------------------------
// 1. Bento Card Component (Clean, Premium & Refined)
// -------------------------------------------------------------
function BentoCard({ project, onInspect }) {
  return (
    <div
      className={`bento-card-reveal ${
        project.gridSpan || "lg:col-span-6"
      } group relative rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-slate-300 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out`}
      onClick={onInspect}
    >
      {/* Top Image Showcase */}
      <div
        className={`relative w-full ${
          project.aspect || "aspect-[16/10]"
        } overflow-hidden bg-slate-950`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold bg-slate-900/85 backdrop-blur-md text-sky-400 px-3 py-1 rounded-full border border-sky-400/20 shadow-md">
              {project.number} • {project.category.toUpperCase()}
            </span>
            {project.status && (
              <span className="hidden sm:inline-block text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                {project.status}
              </span>
            )}
          </div>

          <span className="text-[10px] font-mono text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {project.year}
          </span>
        </div>

        {/* Bottom Floating Title in Image */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <span className="text-xs font-mono tracking-widest text-sky-300 uppercase font-semibold block mb-1">
            {project.industry}
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight drop-shadow-md group-hover:text-sky-200 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content Narrative Card */}
      <div className="p-6 sm:p-7 space-y-4 bg-white relative z-10 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          <p className="text-sm font-sans text-sky-950 font-semibold leading-snug">
            {project.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills & Action Bar */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-mono font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded-lg bg-slate-100 text-slate-500 text-[10px] font-mono">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Button */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
            <span className="text-sky-700 font-semibold group-hover:text-sky-900 flex items-center gap-1.5">
              <span>Inspect Architecture</span>
              <span className="transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform font-sans">
                ↗
              </span>
            </span>

            <span className="text-slate-400 group-hover:text-slate-700 font-medium">
              VIEW CASE STUDY →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. Cinematic Deck Card Component
// -------------------------------------------------------------
function CinematicDeckCard({ project, onInspect }) {
  return (
    <div
      onClick={onInspect}
      className="bento-card-reveal group rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-slate-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 cursor-pointer transition-all duration-300 ease-out"
    >
      {/* Left 7 Cols Image Showcase */}
      <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto bg-slate-950 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent hidden lg:block" />

        {/* Badges */}
        <div className="absolute top-5 left-5 flex items-center gap-2">
          <span className="text-xs font-mono font-bold bg-slate-900/85 backdrop-blur-md text-sky-400 px-3 py-1 rounded-full border border-sky-400/20">
            {project.number} • {project.industry.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Right 5 Cols Detail Card */}
      <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between space-y-5 bg-white">
        <div className="space-y-3">
          <div className="space-y-1">
            <span className="text-xs font-mono text-sky-600 uppercase tracking-widest font-semibold">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 tracking-tight group-hover:text-sky-900 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm font-sans text-slate-800 font-medium leading-relaxed">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            {project.description}
          </p>

          {/* Outcome highlight */}
          <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100/90 text-xs text-slate-700 space-y-1">
            <span className="font-mono font-semibold text-sky-800 block uppercase tracking-wider text-[10px]">
              VERIFIED BUSINESS OUTCOME
            </span>
            <p className="leading-snug">{project.outcome}</p>
          </div>
        </div>

        {/* Bottom Tech Stack & CTA */}
        <div className="space-y-3 pt-3 border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-mono"
              >
                {t}
              </span>
            ))}
          </div>

          <button className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-mono tracking-wide transition-colors flex items-center justify-center gap-2">
            <span>Explore Architecture Schematics</span>
            <span>↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. Compact Studio Matrix Card Component
// -------------------------------------------------------------
function StudioMatrixCard({ project, onInspect }) {
  return (
    <div
      onClick={onInspect}
      className="bento-card-reveal group rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 p-5 space-y-4 cursor-pointer transition-all duration-300 flex flex-col justify-between"
    >
      <div className="space-y-3">
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="400px"
            className="object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[9px] font-mono text-sky-300">
            {project.number}
          </div>
        </div>

        <div>
          <span className="text-[10px] font-mono text-sky-600 uppercase font-semibold block">
            {project.industry}
          </span>
          <h3 className="text-base font-display font-medium text-slate-900 group-hover:text-sky-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 font-sans line-clamp-2 mt-1">
            {project.subtitle}
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
        <span className="text-slate-400">{project.year}</span>
        <span className="text-sky-600 font-semibold group-hover:translate-x-0.5 transition-transform">
          Inspect →
        </span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. Interactive Project Deep-Dive Inspection Modal
// -------------------------------------------------------------
function ProjectInspectionModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("architecture");
  const [activeImage, setActiveImage] = useState(project.image);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-10 space-y-8 animate-in zoom-in-95 duration-200 text-[#0F172A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors text-lg font-mono focus:outline-none z-20 shadow-sm"
          aria-label="Close Project Inspection Modal"
        >
          ✕
        </button>

        {/* Modal Top Header */}
        <div className="space-y-3 border-b border-slate-200/80 pb-6 pr-12">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-xs font-mono font-bold bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-200">
              {project.number} • {project.category.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
              {project.industry}
            </span>
            {project.status && (
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {project.status}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-medium text-slate-900 tracking-tight">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed max-w-3xl">
            {project.subtitle} — {project.description}
          </p>
        </div>

        {/* Multi-Image Gallery Switcher */}
        <div className="space-y-3">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
            <Image
              src={activeImage}
              alt={project.title}
              fill
              className="object-cover object-center transition-all duration-300"
            />
          </div>

          {/* Thumbnail preview buttons */}
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveImage(project.image)}
              className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                activeImage === project.image ? "border-sky-500 scale-105" : "border-slate-200 opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={project.image} alt="Primary Preview" fill className="object-cover" />
            </button>

            {project.secondaryImage && (
              <button
                onClick={() => setActiveImage(project.secondaryImage)}
                className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                  activeImage === project.secondaryImage ? "border-sky-500 scale-105" : "border-slate-200 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={project.secondaryImage} alt="Secondary Preview" fill className="object-cover" />
              </button>
            )}

            {project.thirdImage && (
              <button
                onClick={() => setActiveImage(project.thirdImage)}
                className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                  activeImage === project.thirdImage ? "border-sky-500 scale-105" : "border-slate-200 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={project.thirdImage} alt="Tertiary Preview" fill className="object-cover" />
              </button>
            )}
          </div>
        </div>

        {/* Modal Interactive Inspection Tabs */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "architecture", label: "01 Architecture" },
              { id: "deliverables", label: "02 Deliverables" },
              { id: "metrics", label: "03 Business Impact" },
              { id: "tech", label: "04 Full Tech Stack" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all shrink-0 ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-white font-semibold shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          {activeTab === "architecture" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-150">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-[10px] font-mono text-sky-700 uppercase font-bold tracking-wider">
                  FRONTEND LAYER
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-sans">
                  {project.architecture?.frontend || "Next.js App Router, Tailwind CSS, Responsive WebSockets"}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-[10px] font-mono text-sky-700 uppercase font-bold tracking-wider">
                  BACKEND & WORKFLOW
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-sans">
                  {project.architecture?.backend || "Node.js Microservices, Python Async Queues, Redis Caching"}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-[10px] font-mono text-sky-700 uppercase font-bold tracking-wider">
                  DATABASE & PERSISTENCE
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-sans">
                  {project.architecture?.database || "PostgreSQL with Partitioned Tables & Role-Based Access"}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-[10px] font-mono text-sky-700 uppercase font-bold tracking-wider">
                  EXTERNAL INTEGRATIONS
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-sans">
                  {project.architecture?.integrations || "REST APIs, Webhooks, Barcode Hardware & Payment Gateways"}
                </p>
              </div>
            </div>
          )}

          {activeTab === "deliverables" && (
            <div className="space-y-3 animate-in fade-in duration-150">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "metrics" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                <span className="text-[10px] font-mono text-emerald-800 uppercase font-bold tracking-wider">
                  VERIFIED OUTCOME
                </span>
                <p className="text-sm sm:text-base text-slate-800 font-sans font-medium">
                  {project.outcome}
                </p>
              </div>

              {project.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                      <div className="text-xl font-display font-semibold text-slate-900">
                        {m.value}
                      </div>
                      <div className="text-xs font-mono text-slate-500 uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "tech" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 font-mono text-xs font-medium border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-sans space-y-1">
                <span className="font-mono font-bold text-slate-700 block uppercase">
                  Service Domains Applied:
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.services.map((s) => (
                    <span key={s} className="text-sky-700 font-medium font-sans">
                      • {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Action CTA Footer */}
        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400 text-center sm:text-left">
            PRESS <kbd className="px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-slate-700">ESC</kbd> TO RETURN TO GRID
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono transition-colors"
            >
              Close
            </button>

            <Link
              href={`/contact?project=${project.id}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-sky-600 text-white text-xs font-mono font-semibold transition-all shadow-md shadow-slate-900/10"
            >
              <span>Request Similar Architecture</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
