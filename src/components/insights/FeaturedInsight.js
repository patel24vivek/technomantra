"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

export default function FeaturedInsight({ article }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".featured-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!article) return null;

  return (
    <section
      ref={sectionRef}
      aria-label="Featured Editorial Insight"
      className="relative w-full bg-[#F7F7F4] text-[#111111] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-[rgba(17,17,17,0.08)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Eyebrow Label */}
        <div className="featured-reveal flex items-center gap-2">
          <span className="text-[11px] font-mono tracking-[0.2em] text-slate-500 uppercase font-semibold">
            FEATURED ESSAY
          </span>
          <span className="w-12 h-px bg-slate-300" />
        </div>

        {/* Two-Column Editorial Card */}
        <Link
          href={`/insights/${article.slug}`}
          className="featured-reveal group block bg-[#FFFFFF] rounded-3xl border border-[rgba(17,17,17,0.08)] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500 text-decoration-none"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Col: High-Res Editorial Image */}
            <div className="lg:col-span-7 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Category Tag on Image */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-mono font-bold tracking-wider text-slate-900 shadow-sm uppercase">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Right Col: Editorial Copy & Metadata */}
            <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Metadata Row */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-[#111111] group-hover:text-sky-700 transition-colors duration-300 leading-snug tracking-tight">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-[#62645F] font-sans leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Article Callout */}
              <div className="pt-4 flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-900 group-hover:text-sky-600 transition-colors">
                <span>READ ESSAY</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
