"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { CONNECTED_OUTCOMES } from "@/data/solutions";

export default function WhyConnectedSolutions() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".why-reveal",
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

      // Outcomes items sequential reveal
      gsap.fromTo(
        ".outcome-item",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".outcomes-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-connected"
      ref={sectionRef}
      aria-labelledby="why-connected-title"
      className="relative w-full bg-white text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Editorial Narrative Header */}
        <div className="max-w-3xl space-y-6">
          <div className="why-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-emerald-600 uppercase font-semibold">
              WHY IT MATTERS
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              MEASURABLE BUSINESS OUTCOMES
            </span>
          </div>

          <h2
            id="why-connected-title"
            className="why-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Better connections create <br />
            better visibility.
          </h2>

          <p className="why-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            When systems communicate with each other, teams spend less time moving information between
            tools and more time using that information to make clear decisions.
          </p>
        </div>

        {/* 3 Horizontal Editorial Outcomes (No Generic Cards) */}
        <div className="outcomes-grid grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative pt-6 border-t border-slate-200/90">
          {CONNECTED_OUTCOMES.map((item) => (
            <div
              key={item.number}
              className="outcome-item group relative space-y-4 pt-4 transition-all duration-300"
            >
              {/* Top Accent Tracker Line */}
              <div className="w-12 h-1 bg-slate-200 group-hover:w-full group-hover:bg-sky-500 transition-all duration-500 rounded-full" />

              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-xs font-bold text-sky-600">
                  {item.number}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-2xl font-display font-semibold text-slate-900 group-hover:text-sky-900 transition-colors">
                {item.title}
              </h3>

              <h4 className="text-sm font-sans font-medium text-slate-800 leading-snug">
                {item.subtitle}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
