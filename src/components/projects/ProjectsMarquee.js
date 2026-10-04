"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { PROJECTS_LIST } from "@/data/projects";

export default function ProjectsMarquee() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Smooth scroll parallax linking scroll to slight displacement
      gsap.to(".marquee-track-left", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".marquee-track-right", {
        xPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const firstHalf = PROJECTS_LIST.slice(0, 5);
  const secondHalf = PROJECTS_LIST.slice(5);

  const leftItems = [...firstHalf, ...firstHalf, ...firstHalf];
  const rightItems = [...secondHalf, ...secondHalf, ...secondHalf];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full py-16 sm:py-24 bg-[#090D1A] text-white border-y border-slate-800/80 overflow-hidden"
    >
      {/* Dynamic background lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.12),transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(214,168,95,0.06),transparent_65%)] pointer-events-none" />

      {/* Header bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
          <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase font-semibold">
            LIVE SYSTEMS IN CONTINUOUS MOTION
          </span>
          <span className="text-slate-500 font-mono text-xs hidden sm:inline">/</span>
          <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase hidden sm:inline">
            DUAL-DIRECTION MOTION REEL
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-400">
            {isPaused ? "PAUSED ON HOVER" : "VELOCITY FLOW"}
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>

      <div className="space-y-6">
        {/* Track 1: Moving Left */}
        <div className="overflow-hidden relative w-full mask-gradient-x">
          <div
            className={`marquee-track-left flex items-center gap-6 w-max pl-4 transition-all ${
              isPaused ? "animate-none" : "animate-marquee-slow"
            }`}
            style={{
              animation: isPaused ? "none" : "marqueeLeft 40s linear infinite",
            }}
          >
            {leftItems.map((proj, idx) => (
              <MarqueeCard key={`track1-${proj.id}-${idx}`} project={proj} />
            ))}
          </div>
        </div>

        {/* Track 2: Moving Right */}
        <div className="overflow-hidden relative w-full mask-gradient-x">
          <div
            className={`marquee-track-right flex items-center gap-6 w-max pl-4 transition-all ${
              isPaused ? "animate-none" : "animate-marquee-slow"
            }`}
            style={{
              animation: isPaused ? "none" : "marqueeRight 45s linear infinite",
            }}
          >
            {rightItems.map((proj, idx) => (
              <MarqueeCard key={`track2-${proj.id}-${idx}`} project={proj} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}

function MarqueeCard({ project }) {
  return (
    <Link
      href={`/contact?project=${project.id}`}
      className="group relative w-72 sm:w-88 aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-900 shrink-0 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:shadow-sky-500/20"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="360px"
        className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

      {/* Top status */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
        <span className="text-[9px] font-mono font-bold bg-black/60 backdrop-blur-md text-sky-300 px-2.5 py-0.5 rounded-full border border-sky-400/20">
          {project.category}
        </span>
        <span className="text-[9px] font-mono text-white/80 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
          {project.year}
        </span>
      </div>

      {/* Bottom Overlay Info */}
      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono text-sky-400 uppercase tracking-widest block font-bold">
            {project.industry}
          </span>
          <span className="text-xs font-display font-medium text-white group-hover:text-sky-300 transition-colors block truncate max-w-[190px]">
            {project.title}
          </span>
        </div>
        <span className="text-xs text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform font-sans">
          ↗
        </span>
      </div>
    </Link>
  );
}
