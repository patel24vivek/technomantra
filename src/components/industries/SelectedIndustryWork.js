"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { VERIFIED_PROJECTS } from "@/data/industries";

export default function SelectedIndustryWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-header-reveal",
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
        ".project-editorial-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
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
      id="selected-industry-work"
      ref={sectionRef}
      aria-labelledby="selected-work-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="work-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              SELECTED WORK
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              PROVEN DEPLOYMENTS
            </span>
          </div>

          <h2
            id="selected-work-title"
            className="work-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Technology built for real businesses.
          </h2>

          <p className="work-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Explore selected projects where digital products, business systems and technology were built around real business requirements.
          </p>
        </div>

        {/* Editorial Project Showcases (Staggered Big Visuals) */}
        <div className="space-y-16 lg:space-y-24">
          {VERIFIED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={project.id}
                className="project-editorial-card grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40"
              >
                {/* Visual Image Column */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 650px"
                      className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-104"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4">
                      <span className="font-mono text-[10px] sm:text-xs text-white bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative Description Column */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono tracking-widest text-sky-700 font-semibold uppercase">
                      {project.industry}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-slate-900 tracking-tight">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* Scope Deliverables */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                      ENGINEERED DELIVERABLES
                    </div>
                    <div className="space-y-2">
                      {project.deliverables.map((deliv) => (
                        <div key={deliv} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-xs transition-all duration-200 group"
                    >
                      <span>Explore Case Study</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>

                    <Link
                      href="/contact"
                      className="text-xs font-sans text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Request Similar Architecture →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
