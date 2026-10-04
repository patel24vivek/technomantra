"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, isReversed }) {
  return (
    <article
      id={`project-${project.id}`}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 group hover:border-slate-400/80 transition-all duration-300"
    >
      {/* Visual Image Column */}
      <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.subtitle}`}
            fill
            sizes="(max-width: 1024px) 100vw, 650px"
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-104"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Floating Metadata Tag */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
            <span className="font-mono text-[11px] bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {project.type.toUpperCase()}
            </span>
            <span className="font-mono text-[10px] text-white/70 hidden sm:inline">
              YEAR {project.year}
            </span>
          </div>
        </div>
      </div>

      {/* Narrative Description Column */}
      <div className={`lg:col-span-5 space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded-full border border-sky-200">
              {project.number}
            </span>
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
              {project.industry}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-light text-slate-900 tracking-tight group-hover:text-sky-950 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm font-sans text-sky-800 font-medium">
            {project.subtitle}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
          {project.description}
        </p>

        {/* Outcome Highlight Box */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
            KEY OUTCOME
          </span>
          <p className="text-xs text-slate-700 font-sans leading-relaxed">
            {project.outcome}
          </p>
        </div>

        {/* Services Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.services.map((srv) => (
            <span
              key={srv}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-mono"
            >
              {srv}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={project.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-xs transition-all duration-200 shadow-md group/btn"
          >
            <span>Discuss Similar Project</span>
            <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
          </Link>

          <span className="text-xs font-mono text-slate-400">
            {project.number} / 04
          </span>
        </div>
      </div>
    </article>
  );
}
