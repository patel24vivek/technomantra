"use client";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6 lg:gap-8 max-w-full sm:max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
      {/* Main Headline */}
      <h1 className="font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.75rem] 2xl:text-[6.5rem] font-light tracking-tight text-white leading-[0.98] sm:leading-[0.95] xl:leading-[0.92] text-glow-white flex flex-col">
        <span className="block">Ideas</span>
        <span className="block">Deserve a</span>
        <span className="block">Bigger Universe.</span>
      </h1>
    </div>
  );
}
