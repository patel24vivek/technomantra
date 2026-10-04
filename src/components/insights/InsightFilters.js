"use client";

export default function InsightFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) {
  return (
    <div className="w-full space-y-6 pb-6 border-b border-[rgba(17,17,17,0.08)]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Category Pill Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-[rgba(17,17,17,0.08)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Inline Search Input */}
        <div className="relative w-full md:w-64 shrink-0">
          <input
            type="text"
            placeholder="Search insights..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white rounded-full border border-[rgba(17,17,17,0.08)] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
          <svg
            className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
