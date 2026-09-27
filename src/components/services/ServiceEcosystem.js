"use client";

import { useRef, useEffect } from "react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { gsap } from "@/lib/gsap";

export default function ServiceEcosystem() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".eco-reveal",
        { opacity: 0, y: 25 },
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

      // Cards staggered reveal
      gsap.fromTo(
        ".eco-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
      ref={sectionRef}
      aria-labelledby="service-ecosystem-title"
      className="relative w-full bg-white text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="eco-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              CONNECTED CAPABILITIES
            </span>
          </div>

          <h2
            id="service-ecosystem-title"
            className="eco-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            Everything connects.
          </h2>

          <p className="eco-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Modern digital projects rarely depend on a single capability. Development, business systems,
            automation, marketing and creative work often come together to solve a larger business problem.
          </p>
        </div>

        {/* 3 Major Category Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.name}
              className="eco-card group p-8 rounded-3xl bg-[#FAF9F6] border border-slate-200/80 hover:bg-white hover:border-sky-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="font-mono text-xs font-bold text-sky-600">
                    PILLAR 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                </div>

                <h3 className="text-2xl font-display font-semibold text-slate-900">
                  {cat.name}
                </h3>

                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {cat.tagline}
                </p>

                {/* Services in this category */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    INCLUDED SERVICES:
                  </span>
                  {cat.services.map((srv) => (
                    <div
                      key={srv}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 text-xs font-mono text-slate-700 font-medium group-hover:border-sky-300 transition-colors"
                    >
                      {srv}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/60 text-xs font-mono text-sky-600 font-semibold flex items-center justify-between">
                <span>Integrated Architecture</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
