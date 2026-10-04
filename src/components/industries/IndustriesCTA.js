"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function IndustriesCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ind-cta-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="industries-cta-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden text-center"
    >
      {/* Background Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.06),transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Eyebrow */}
        <div className="ind-cta-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-mono font-semibold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          BUILD FOR YOUR BUSINESS
        </div>

        {/* Heading */}
        <h2
          id="industries-cta-title"
          className="ind-cta-reveal text-3xl sm:text-5xl lg:text-6xl font-display font-light text-slate-900 leading-[1.04] tracking-tight"
        >
          Your industry is different. <br />
          Your technology should be too.
        </h2>

        {/* Supporting Copy */}
        <p className="ind-cta-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
          Tell us how your business works, what you are trying to improve and where technology could help. We’ll explore the right approach with you.
        </p>

        {/* CTA Buttons */}
        <div className="ind-cta-reveal pt-4 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          <Link
            href="/request-a-proposal"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-sm transition-all duration-200 shadow-lg shadow-slate-900/10 group"
          >
            <span>Request a Proposal</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-800 hover:border-slate-400 font-sans font-medium text-sm transition-all duration-200 shadow-sm"
          >
            <span>Talk to Us</span>
            <span>→</span>
          </Link>
        </div>

        {/* Micro reassurance notes */}
        <div className="ind-cta-reveal pt-8 flex items-center justify-center gap-8 text-xs font-mono text-slate-400 flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            No generic off-the-shelf lock-in
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Built for your workflows
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Direct engineering consultation
          </span>
        </div>
      </div>
    </section>
  );
}
