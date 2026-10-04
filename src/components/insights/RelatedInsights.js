"use client";

import Link from "next/link";
import InsightRow from "./InsightRow";

export default function RelatedInsights({ currentSlug, articles }) {
  const related = articles
    .filter((art) => art.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section
      aria-labelledby="related-insights-title"
      className="relative w-full bg-[#F7F7F4] text-[#111111] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-[rgba(17,17,17,0.08)]"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-mono tracking-[0.2em] text-slate-500 uppercase font-semibold block">
            KEEP READING
          </span>
          <h2
            id="related-insights-title"
            className="text-2xl sm:text-3xl font-display font-light text-[#111111] tracking-tight"
          >
            Related Perspectives & Essays
          </h2>
        </div>

        <div className="divide-y divide-transparent">
          {related.map((article, idx) => (
            <InsightRow key={article.slug} article={article} index={idx} />
          ))}
        </div>

        <div className="pt-4">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-900 hover:text-sky-600 transition-colors"
          >
            <span>VIEW COMPLETE INSIGHTS INDEX</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
