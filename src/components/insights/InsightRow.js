"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function InsightRow({ article, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="insight-row-item group relative py-8 sm:py-10 border-b border-[rgba(17,17,17,0.08)] hover:bg-[#F0F0EC]/60 px-4 sm:px-8 -mx-4 sm:-mx-8 rounded-3xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/insights/${article.slug}`} className="block text-decoration-none">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Col 1: Number & Category */}
          <div className="md:col-span-3 flex items-center md:items-start gap-4">
            <span className="font-mono text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors transform group-hover:translate-x-1 duration-200">
              {article.id || `0${index + 1}`}
            </span>
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-md bg-white border border-[rgba(17,17,17,0.08)] text-[10px] font-mono font-bold tracking-wider text-sky-700 uppercase">
                {article.category}
              </span>
              <div className="text-[11px] font-mono text-slate-400 hidden md:block pt-1">
                {article.date} · {article.readTime}
              </div>
            </div>
          </div>

          {/* Col 2: Title & Excerpt */}
          <div className="md:col-span-6 space-y-2">
            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#111111] group-hover:text-sky-700 transition-colors duration-200 leading-snug tracking-tight">
              {article.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#62645F] font-sans leading-relaxed line-clamp-2">
              {article.excerpt}
            </p>
            <div className="text-[11px] font-mono text-slate-400 md:hidden pt-2">
              {article.date} · {article.readTime}
            </div>
          </div>

          {/* Col 3: Optional Desktop Hover Thumbnail & Arrow */}
          <div className="md:col-span-3 flex items-center justify-end gap-6 self-center">
            {/* Subtle Desktop Preview Thumbnail */}
            {article.image && (
              <div
                className={`hidden xl:block relative w-28 aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-[rgba(17,17,17,0.08)] transition-all duration-300 ${
                  isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            )}

            {/* Arrow Button */}
            <div className="w-10 h-10 rounded-full bg-white border border-[rgba(17,17,17,0.08)] flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300 shadow-sm shrink-0">
              <span className="text-sm transform group-hover:translate-x-0.5 transition-transform duration-200">
                →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
