"use client";

export default function ScrollIndicator() {
  return (
    <div className="flex items-center gap-3 text-label text-[var(--text-muted)] opacity-70 hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
      {/* Minimal Mouse / Scroll Icon */}
      <div className="w-5 h-8 rounded-full border border-[var(--border-subtle)] flex justify-center p-1">
        <div className="w-1 h-2 rounded-full bg-[var(--text-muted)] mt-0.5" />
      </div>
      <div className="flex flex-col text-[9px] font-mono leading-tight tracking-[0.2em] uppercase">
        <span>Scroll</span>
        <span className="text-[var(--text-secondary)]">To Explore</span>
      </div>
    </div>
  );
}
