"use client";

import HeroActions from "./HeroActions";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start gap-6 sm:gap-8 max-w-xl lg:max-w-2xl text-left">
      {/* Eyebrow */}
      <div className="flex items-center gap-3">
        <span className="w-8 sm:w-12 h-[1px] bg-[var(--border-highlight)] inline-block opacity-70" />
        <span className="text-label text-[var(--text-secondary)] opacity-80 font-mono tracking-[0.25em]">
          SOFTWARE DEVELOPMENT COMPANY
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.25rem] xl:text-[6rem] font-light tracking-tight text-[#F5F5F5] leading-[0.96] text-glow-white flex flex-col">
        <span className="block">Ideas</span>
        <span className="block">Deserve a</span>
        <span className="block">Bigger Universe.</span>
      </h1>

      {/* Description */}
      <p className="text-body text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg font-normal">
        We build websites, web applications, full-stack solutions, ERP systems and custom software that move businesses forward.
      </p>

      {/* CTA Buttons */}
      <div className="pointer-events-auto">
        <HeroActions />
      </div>
    </div>
  );
}

