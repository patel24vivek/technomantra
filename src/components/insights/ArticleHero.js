"use client";

import Link from "next/link";
import Image from "next/image";

export default function ArticleHero({ article }) {
  if (!article) return null;

  return (
    <header className="relative w-full bg-[#030712] text-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-[var(--border-subtle)]/30 overflow-hidden">
      {/* Subtle Cosmic Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Back Link */}
        <div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-slate-400 hover:text-sky-400 transition-colors"
          >
            <span>←</span>
            <span>BACK TO ALL INSIGHTS</span>
          </Link>
        </div>

        {/* Metadata & Category */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-sky-400/30 text-xs font-mono font-bold tracking-wider text-sky-400 uppercase shadow-sm">
              {article.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {article.date} · {article.readTime}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-light text-white tracking-tight leading-[1.08]">
            {article.title}
          </h1>

          {/* Intro Excerpt */}
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-sans leading-relaxed pt-2">
            {article.excerpt}
          </p>

          {/* Author Byline */}
          {article.author && (
            <div className="pt-4 flex items-center gap-3 text-xs font-mono text-slate-400 border-t border-slate-800">
              <span className="font-semibold text-white">{article.author.name}</span>
              <span>/</span>
              <span>{article.author.role}</span>
            </div>
          )}
        </div>

        {/* Featured Image */}
        {article.image && (
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 mt-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </header>
  );
}
