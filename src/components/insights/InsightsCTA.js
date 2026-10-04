"use client";

import Link from "next/link";

export default function InsightsCTA() {
  return (
    <section
      aria-label="Insights Call to Action"
      className="relative w-full bg-[#F7F7F4] text-[#111111] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-[rgba(17,17,17,0.08)] overflow-hidden text-center"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
            HAVE A PROJECT IN MIND?
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-[#111111] tracking-tight leading-[1.12]">
          Turn an idea into something useful.
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#62645F] font-sans leading-relaxed max-w-xl mx-auto">
          If you are working on a digital product, custom business system, or high-performance website, let’s explore how we can engineer it together.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 pt-4 flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-sans font-semibold text-xs tracking-wide hover:bg-sky-600 transition-all shadow-lg shadow-slate-900/10 group"
          >
            <span>Start a Conversation</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-sans text-xs font-medium border border-[rgba(17,17,17,0.12)] transition-colors shadow-sm"
          >
            <span>View Our Work</span>
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
