"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { PROCESS_STEPS } from "@/data/contact";

export default function ContactProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-header-reveal",
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
        ".process-step-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // Animate the connecting line width on scroll
      gsap.fromTo(
        ".process-progress-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact-process"
      ref={sectionRef}
      aria-labelledby="contact-process-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="process-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              WHAT HAPPENS NEXT
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              DELIVERY ROADMAP
            </span>
          </div>

          <h2
            id="contact-process-title"
            className="process-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            A simple process from <br className="hidden sm:inline" />
            conversation to execution.
          </h2>

          <p className="process-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            We respect your time. Here is what you can expect from the moment you submit your inquiry to when engineering begins.
          </p>
        </div>

        {/* Desktop Progress Connecting Line */}
        <div className="hidden lg:block relative w-full pt-4">
          <div className="absolute top-10 left-10 right-10 h-0.5 bg-slate-200" />
          <div className="process-progress-line absolute top-10 left-10 right-10 h-0.5 bg-gradient-to-r from-sky-500 via-sky-400 to-amber-400" />
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="process-step-card p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-5 hover:border-sky-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Step Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white font-mono text-sm font-bold flex items-center justify-center shadow-md group-hover:bg-sky-600 transition-colors">
                    {step.num}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-display font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-sky-700 font-medium">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>EST: 24-48 HRS</span>
                <span className="text-sky-600 font-bold group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
