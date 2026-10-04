"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import InsightFilters from "./InsightFilters";
import InsightRow from "./InsightRow";
import { INSIGHT_CATEGORIES, INSIGHTS_DATA } from "@/data/insights";

export default function InsightList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);

  // Filtered insights
  const filteredInsights = useMemo(() => {
    return INSIGHTS_DATA.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Animate on filter change / initial scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".insight-row-item",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [selectedCategory, searchQuery]);

  return (
    <section
      ref={containerRef}
      aria-labelledby="all-insights-heading"
      className="relative w-full bg-[#F7F7F4] text-[#111111] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-[rgba(17,17,17,0.08)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-[0.2em] text-slate-500 uppercase font-semibold">
              INDEX OF ESSAYS & CASE STUDIES
            </span>
            <span className="w-12 h-px bg-slate-300" />
          </div>
          <h2
            id="all-insights-heading"
            className="text-3xl sm:text-4xl font-display font-light text-[#111111] tracking-tight"
          >
            Latest Insights
          </h2>
          <p className="text-sm sm:text-base text-[#62645F] font-sans max-w-xl">
            Practical ideas from the work we do across technology, business systems, web engineering and digital growth.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <InsightFilters
          categories={INSIGHT_CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Editorial Rows Container */}
        {filteredInsights.length > 0 ? (
          <div className="divide-y divide-transparent">
            {filteredInsights.map((article, idx) => (
              <InsightRow key={article.slug} article={article} index={idx} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-3 bg-white rounded-3xl border border-[rgba(17,17,17,0.08)] p-8">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
              0 RESULTS FOUND
            </span>
            <p className="text-base text-slate-700 font-sans">
              No matching articles found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-mono text-sky-700 hover:text-sky-900 underline font-semibold mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
