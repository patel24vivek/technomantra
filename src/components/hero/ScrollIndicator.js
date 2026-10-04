"use client";

export default function ScrollIndicator() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.scrollTo(nextSection, { offset: 0, duration: 1.2 });
      } else {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.scrollTo(window.innerHeight, { duration: 1.2 });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleScrollDown}
      aria-label="Scroll down to explore"
      className="group inline-flex items-center gap-3 py-2 text-slate-400 hover:text-white transition-colors duration-300 pointer-events-auto cursor-pointer focus:outline-none"
    >
      {/* Sleek Minimal Mouse Capsule */}
      <div className="w-4 h-7 rounded-full border border-white/20 group-hover:border-white/60 flex items-start justify-center p-1 transition-colors duration-300">
        <div className="w-0.5 h-1.5 rounded-full bg-white/70 group-hover:bg-white animate-[bounce_2s_infinite]" />
      </div>

      {/* Understated Monospace Text */}
      <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-light text-slate-400 group-hover:text-white transition-colors duration-300">
        SCROLL
      </span>

      {/* Minimal Down Arrow */}
      <span className="text-xs text-slate-500 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-300">
        ↓
      </span>
    </button>
  );
}
