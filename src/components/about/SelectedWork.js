"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const PROJECTS = [
  {
    name: "Riopak Engineers",
    category: "Industrial Machinery & Custom Web Platform",
    description: "Custom web platform & digital showcase built for high-precision industrial engineering.",
    href: "/#projects",
    tech: ["Web Development", "Custom UI/UX", "Brand System"],
  },
  {
    name: "Keyan Corporation",
    category: "Enterprise ERP & Operations System",
    description: "Unified enterprise management software streamlining operations, inventory and client workflows.",
    href: "/#projects",
    tech: ["Custom ERP", "CRM Integration", "Workflow Automation"],
  },
];

export default function SelectedWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-reveal",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="selected-work-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="work-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              SELECTED WORK
            </span>
          </div>

          <h2
            id="selected-work-title"
            className="work-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            Built around real <br />
            business needs.
          </h2>

          <p className="work-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            A selection of digital products, business systems and experiences built around real-world requirements.
          </p>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="work-reveal group p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between space-y-8"
            >
              {/* Project Header Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-200/80">
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-900 group-hover:text-sky-600 transition-colors"
                >
                  View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
