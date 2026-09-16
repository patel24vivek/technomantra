"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { INSIGHTS_LIST } from "./insightsData";

export default function Insights() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".insights-reveal",
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
            toggleActions: "play none none reverse",
          },
        }
      );

      // Article item reveal
      gsap.fromTo(
        ".insight-article-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="insights"
      className="relative z-10 w-full min-h-screen bg-[#030712] text-[#F5F5F5] py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-t border-[var(--border-subtle)]/30 flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Header: Eyebrow, Main Heading & Supporting Copy */}
        <div className="max-w-3xl space-y-6">
          <div className="insights-reveal flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
              07
            </span>
            <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
              INSIGHTS
            </span>
          </div>

          <h2 className="insights-reveal font-display text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light tracking-tight text-white leading-[1.08]">
            Ideas, perspectives and practical knowledge.
          </h2>

          <p className="insights-reveal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans max-w-2xl">
            Thoughts on technology, digital products, business systems, marketing and the work
            behind building better digital experiences.
          </p>
        </div>

        {/* Separator Divider */}
        <div className="w-full h-px bg-[var(--border-subtle)]/40" />

        {/* Editorial Article List */}
        <div className="divide-y divide-[var(--border-subtle)]/40 max-w-5xl">
          {INSIGHTS_LIST.map((article) => (
            <div
              key={article.id}
              className="insight-article-item group py-8 sm:py-10 transition-colors duration-300 cursor-pointer hover:bg-sky-500/[0.02] px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl"
            >
              <Link href={article.href} className="block text-decoration-none">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Category, Title & Excerpt */}
                  <div className="space-y-3 flex-1 max-w-3xl">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-medium">
                        {article.category}
                      </span>
                      <span className="text-[11px] font-mono text-[var(--text-muted)]">
                        · {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-slate-200 group-hover:text-white transition-colors duration-300 font-display leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans leading-relaxed max-w-2xl">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read Article CTA Arrow */}
                  <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 group-hover:text-sky-300 transition-colors duration-300 self-start md:self-center">
                    <span>Read Article</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Section Footer Link / CTA */}
        <div className="pt-6 border-t border-[var(--border-subtle)]/30 flex items-center justify-between">
          <Link
            href="/insights"
            className="group inline-flex items-center gap-3 text-sm font-mono tracking-wider text-sky-400 hover:text-sky-300 transition-colors duration-300"
          >
            <span>View all insights</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
