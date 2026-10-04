"use client";

import { CONTACT_SERVICES } from "@/data/contact";

export default function ServiceSelector({ selectedServices = [], onToggleService }) {
  // Find currently active service objects to display contextual tips
  const activeObjects = CONTACT_SERVICES.filter((s) => selectedServices.includes(s.label));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono tracking-wider uppercase font-semibold text-slate-700 flex items-center gap-2">
          <span>WHAT DO YOU NEED?</span>
          <span className="text-slate-400 font-normal lowercase">(select all that apply)</span>
        </label>

        {selectedServices.length > 0 && (
          <span className="text-[11px] font-mono text-sky-700 font-semibold bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
            {selectedServices.length} SELECTED
          </span>
        )}
      </div>

      {/* Pill Grid */}
      <div
        className="flex flex-wrap gap-2 sm:gap-2.5"
        role="group"
        aria-label="Select capabilities needed"
      >
        {CONTACT_SERVICES.map((srv) => {
          const isSelected = selectedServices.includes(srv.label);

          return (
            <button
              key={srv.id}
              type="button"
              role="checkbox"
              aria-checked={isSelected}
              onClick={() => onToggleService(srv.label)}
              className={`px-4 py-2.5 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 select-none ${
                isSelected
                  ? "bg-slate-900 text-white shadow-md font-semibold scale-102 border border-slate-900"
                  : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 hover:border-slate-300"
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] transition-colors ${
                  isSelected
                    ? "bg-sky-500 text-white font-bold"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {isSelected ? "✓" : "+"}
              </span>
              <span>{srv.label}</span>
            </button>
          );
        })}
      </div>

      {/* Contextual description for active selections */}
      {activeObjects.length > 0 && (
        <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/80 space-y-1.5 animate-in fade-in duration-200">
          <div className="text-[10px] font-mono font-bold text-sky-800 uppercase tracking-wider">
            SELECTED SCOPE FOCUS:
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700 font-sans">
            {activeObjects.map((item) => (
              <span key={item.id} className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <strong>{item.label}:</strong> {item.desc}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
