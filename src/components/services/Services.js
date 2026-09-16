"use client";

const TEMP_SERVICES = [
  { id: "01", name: "Websites" },
  { id: "02", name: "Web Applications" },
  { id: "03", name: "Full-Stack Development" },
  { id: "04", name: "Mobile & Desktop Applications" },
  { id: "05", name: "ERP & Business Systems" },
  { id: "06", name: "Custom Software & Integrations" },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 w-full min-h-screen bg-[#030712] text-[#F5F5F5] py-24 px-6 sm:px-10 lg:px-16 xl:px-20 flex flex-col justify-center items-center border-t border-[var(--border-subtle)]/30"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center space-y-6">
        {/* Eyebrow */}
        <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
          WHAT WE BUILD
        </span>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white font-display">
          Services
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl font-sans leading-relaxed">
          Digital products, systems and software built around the way your business works.
        </p>

        {/* Placeholder Service Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-12">
          {TEMP_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl border border-[var(--border-subtle)]/40 bg-[var(--surface)]/40 flex items-center gap-4 text-left transition-colors duration-300 hover:border-sky-500/30"
            >
              <span className="text-xs font-mono font-medium text-sky-400/80">
                {service.id}
              </span>
              <span className="text-sm font-medium text-slate-200">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
