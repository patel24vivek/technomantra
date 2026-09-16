"use client";

import { Button } from "@/components/ui";

export default function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      {/* Primary CTA */}
      <Button href="#contact" variant="primary" className="group">
        Start Your Journey
        <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Button>

      {/* Secondary CTA */}
      <button
        type="button"
        className="btn-secondary group flex items-center gap-3"
        onClick={() => {}}
      >
        <span className="play-icon-circle text-xs text-[var(--foreground)] group-hover:text-white transition-colors">
          ▶
        </span>
        <span className="text-sm text-[var(--foreground)] group-hover:text-white transition-colors">
          Watch Our Story
        </span>
      </button>
    </div>
  );
}
