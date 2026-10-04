"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ProjectLens({ imageSrc, alt, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group cursor-crosshair select-none"
    >
      {/* Base Primary Image */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 800px"
        className="object-cover object-center transition-transform duration-500 ease-out"
      />

      {/* Magnifying Detail Lens on Desktop Hover */}
      {isHovered && (
        <div
          className="hidden md:block absolute w-48 h-48 rounded-full border-2 border-white shadow-2xl pointer-events-none overflow-hidden bg-slate-900 z-30 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
          style={{
            left: `${lensPos.x}%`,
            top: `${lensPos.y}%`,
          }}
        >
          <div
            className="absolute w-[300%] h-[300%] max-w-none"
            style={{
              left: `${-lensPos.x * 2}%`,
              top: `${-lensPos.y * 2}%`,
            }}
          >
            <Image
              src={imageSrc}
              alt={`${alt} Magnified Lens Inspection`}
              fill
              className="object-cover object-center transform scale-150"
            />
          </div>
          <div className="absolute inset-0 bg-sky-500/10 pointer-events-none" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/80 text-[8px] font-mono text-white tracking-widest uppercase">
            2.5X LENS
          </div>
        </div>
      )}

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

      {/* Children Overlays (e.g. Stage Info Pill) */}
      {children}
    </div>
  );
}
