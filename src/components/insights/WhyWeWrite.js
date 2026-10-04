"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function WhyWeWrite() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-reveal",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-we-write-title"
      className="relative w-full bg-[#F0F0EC] text-[#111111] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-[rgba(17,17,17,0.08)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="why-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-slate-900" />
            <span className="text-xs font-mono tracking-[0.25em] text-slate-700 uppercase font-semibold">
              WHY WE WRITE
            </span>
          </div>

          <h2
            id="why-we-write-title"
            className="why-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-[#111111] leading-[1.1] tracking-tight"
          >
            Technology changes quickly. <br className="hidden sm:inline" />
            Good thinking lasts longer.
          </h2>

          <p className="why-reveal text-base sm:text-lg text-[#62645F] font-sans leading-relaxed">
            We share practical ideas from the problems, projects, and technologies we work with every day.
          </p>
        </div>

        {/* 3 Editorial Reflection Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="why-reveal p-8 rounded-3xl bg-white border border-[rgba(17,17,17,0.06)] shadow-sm space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 block uppercase">
              PRINCIPLE 01
            </span>
            <h3 className="text-xl font-display font-medium text-slate-900">
              Deconstruct Complexity
            </h3>
            <p className="text-xs sm:text-sm text-[#62645F] font-sans leading-relaxed">
              We translate dense technical architecture into clear, actionable business reality. No buzzwords, no inflated hype—just disciplined engineering logic.
            </p>
          </div>

          <div className="why-reveal p-8 rounded-3xl bg-white border border-[rgba(17,17,17,0.06)] shadow-sm space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 block uppercase">
              PRINCIPLE 02
            </span>
            <h3 className="text-xl font-display font-medium text-slate-900">
              Document Real Trade-offs
            </h3>
            <p className="text-xs sm:text-sm text-[#62645F] font-sans leading-relaxed">
              Every architectural decision involves compromises. We openly discuss costs, maintenance, data models, and the long-term realities of software systems.
            </p>
          </div>

          <div className="why-reveal p-8 rounded-3xl bg-white border border-[rgba(17,17,17,0.06)] shadow-sm space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 block uppercase">
              PRINCIPLE 03
            </span>
            <h3 className="text-xl font-display font-medium text-slate-900">
              Empower Decision Makers
            </h3>
            <p className="text-xs sm:text-sm text-[#62645F] font-sans leading-relaxed">
              We write for founders, executives, and technical leaders who need trustworthy perspectives before investing capital into high-stakes digital initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
