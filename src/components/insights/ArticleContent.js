"use client";

export default function ArticleContent({ article }) {
  if (!article || !article.content) return null;

  const { intro, sections, takeaways } = article.content;

  return (
    <article className="relative w-full bg-[#FFFFFF] text-[#111111] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 border-b border-[rgba(17,17,17,0.08)]">
      <div className="max-w-3xl mx-auto space-y-12 font-sans">
        {/* Lead In / Intro Paragraph */}
        {intro && (
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-sans font-normal border-l-2 border-sky-500 pl-6 italic">
            {intro}
          </p>
        )}

        {/* Content Sections */}
        {sections &&
          sections.map((section, idx) => (
            <div key={idx} className="space-y-6 pt-4">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#111111] tracking-tight leading-snug">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs &&
                section.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg text-[#374151] leading-relaxed font-sans"
                  >
                    {p}
                  </p>
                ))}

              {/* Blockquote Callout if present */}
              {section.quote && (
                <blockquote className="my-8 p-6 sm:p-8 rounded-2xl bg-[#F7F7F4] border border-[rgba(17,17,17,0.08)] text-slate-900">
                  <p className="text-lg sm:text-xl font-display font-medium italic leading-snug text-slate-900">
                    &ldquo;{section.quote}&rdquo;
                  </p>
                  <span className="block text-xs font-mono text-slate-500 uppercase tracking-wider mt-3 font-bold">
                    — Architectural Principle
                  </span>
                </blockquote>
              )}
            </div>
          ))}

        {/* Key Takeaways Card */}
        {takeaways && takeaways.length > 0 && (
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#F7F7F4] border border-[rgba(17,17,17,0.1)] space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-xs font-mono tracking-widest text-slate-800 uppercase font-bold">
                KEY ARCHITECTURAL TAKEAWAYS
              </span>
            </div>

            <ul className="space-y-3">
              {takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                  <span className="font-mono text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
