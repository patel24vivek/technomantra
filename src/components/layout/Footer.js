"use client";

import Link from "next/link";

export default function Footer() {
  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  const servicesColumn1 = [
    { label: "Website Development", href: "/services/website-development" },
    { label: "Custom ERP Development", href: "/services/erp-development" },
    { label: "CRM Development", href: "/services/crm-development" },
    { label: "Accounting Software", href: "/services/accounting-software" },
    { label: "Email Marketing", href: "/services/email-marketing" },
    { label: "SEO Services", href: "/services/seo-services" },
  ];

  const servicesColumn2 = [
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Graphic Design", href: "/services/graphic-design" },
    { label: "Packaging Design", href: "/services/packaging-design" },
    { label: "Corporate Video", href: "/services/corporate-video" },
    { label: "Dedicated Developers", href: "/services/dedicated-developers" },
  ];

  const solutionsLinks = [
    { label: "All Solutions Overview", href: "/solutions" },
    { label: "CRM Solutions", href: "/solutions#crm-solutions" },
    { label: "ERP Solutions", href: "/solutions#erp-solutions" },
    { label: "Business Automation", href: "/solutions#business-automation" },
    { label: "Ecommerce Solutions", href: "/solutions#ecommerce-solutions" },
    { label: "Marketing Automation", href: "/solutions#marketing-automation" },
  ];

  const industriesLinks = [
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Trading", href: "/industries/trading" },
    { label: "Ecommerce", href: "/industries/ecommerce" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Finance", href: "/industries/finance" },
    { label: "Education", href: "/industries/education" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Exporters & Importers", href: "/industries/exporters-importers" },
    { label: "Hospitality", href: "/industries/hospitality" },
    { label: "Non-profit Organisations", href: "/industries/non-profit" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ];

  return (
    <footer className="relative z-10 w-full bg-[#030712] text-[#F5F5F5] border-t border-[var(--border-subtle)]/30 font-sans">
      {/* SECTION 1: FINAL CTA AREA */}
      <section
        aria-labelledby="footer-cta-heading"
        className="relative py-24 lg:py-36 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-[var(--border-subtle)]/30 overflow-hidden text-center flex flex-col items-center justify-center"
      >
        {/* Ambient Radial Light Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(56,189,248,0.06),transparent)] pointer-events-none" />

        {/* Decorative SVG Orbital Trajectory */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-full max-w-4xl h-[380px] opacity-20"
            viewBox="0 0 800 400"
            fill="none"
          >
            <ellipse
              cx="400"
              cy="200"
              rx="380"
              ry="140"
              stroke="url(#footer-orbit-gradient)"
              strokeWidth="1.2"
              strokeDasharray="6 6"
            />
            <defs>
              <linearGradient id="footer-orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-8 flex flex-col items-center">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
              START SOMETHING
            </span>
          </div>

          <h2
            id="footer-cta-heading"
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]"
          >
            Have something worth building?
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans max-w-xl">
            Tell us what you're trying to solve. We'll help turn it into a digital product,
            business system or experience that works.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link
              href="/request-a-proposal"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-sky-400 text-slate-950 font-medium font-sans text-sm sm:text-base hover:bg-sky-300 transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)]"
            >
              <span>Request a Proposal</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-mono tracking-wider text-sky-400 hover:text-sky-300 transition-colors duration-300 py-2 px-4"
            >
              <span>Talk to Us</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BIG BEAUTIFUL BRAND WATERMARK TEXT (Full Screen Width, Glowing on Hover) */}
      <div
        aria-hidden="true"
        className="group relative w-full select-none pointer-events-auto cursor-default flex items-center justify-center py-4 lg:py-6 border-b border-[var(--border-subtle)]/20 overflow-hidden"
      >
        <svg
          className="w-full h-auto block filter drop-shadow-[0_0_30px_rgba(56,189,248,0.06)] group-hover:drop-shadow-[0_0_35px_rgba(56,189,248,0.75)] group-hover:drop-shadow-[0_0_80px_rgba(56,189,248,0.45)] transition-all duration-700 ease-out"
          viewBox="0 0 880 95"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Standard Ambient Gradient */}
            <linearGradient id="brand-watermark-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.01" />
            </linearGradient>

            {/* Glowing Hover Gradient */}
            <linearGradient id="brand-watermark-hover-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Normal State Text */}
          <text
            x="50%"
            y="76"
            textAnchor="middle"
            fill="url(#brand-watermark-gradient)"
            className="transition-opacity duration-700 ease-out group-hover:opacity-0"
            style={{
              fontFamily: "var(--font-display-main), 'Space Grotesk', sans-serif",
              fontSize: "92px",
              fontWeight: 700,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            TECHNOMANTRA
          </text>

          {/* Hover State Glowing Text */}
          <text
            x="50%"
            y="76"
            textAnchor="middle"
            fill="url(#brand-watermark-hover-gradient)"
            stroke="rgba(56,189,248,0.5)"
            strokeWidth="0.8"
            className="opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
            style={{
              fontFamily: "var(--font-display-main), 'Space Grotesk', sans-serif",
              fontSize: "92px",
              fontWeight: 700,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            TECHNOMANTRA
          </text>
        </svg>
      </div>

      {/* SECTION 2 & 3 & 4: MAIN FOOTER NAVIGATION & CONTENT */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-8 lg:px-16 xl:px-20 space-y-16">
        {/* Main Navigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Brand Logo & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
              <span className="font-display text-2xl font-light tracking-tight text-white group-hover:text-sky-300 transition-colors">
                TechnoMantra
              </span>
            </Link>

            <p className="text-sm text-[var(--text-secondary)] font-sans max-w-sm leading-relaxed">
              Technology. Designed around your business.
            </p>

            {/* SECTION 4: VERIFIED CONTACT */}
            <div className="pt-4 space-y-2">
              <div className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
                DIRECT CONTACT
              </div>
              <a
                href="mailto:hello@technomantra.in"
                className="text-sm font-mono text-sky-400 hover:text-sky-300 transition-colors block"
              >
                hello@technomantra.in
              </a>
            </div>
          </div>

          {/* Right Columns: 4 Nav Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: Company */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase font-semibold">
                COMPANY
              </h3>
              <ul className="space-y-2.5">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Services */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase font-semibold">
                SERVICES
              </h3>
              <ul className="space-y-2.5">
                {servicesColumn1.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: More Services */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase font-semibold">
                MORE SERVICES
              </h3>
              <ul className="space-y-2.5">
                {servicesColumn2.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Solutions */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase font-semibold">
                SOLUTIONS
              </h3>
              <ul className="space-y-2.5">
                {solutionsLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 3: INDUSTRIES SECONDARY ROW */}
        <div className="pt-10 border-t border-[var(--border-subtle)]/30 space-y-4">
          <div className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase font-semibold">
            INDUSTRIES
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {industriesLinks.map((ind, idx) => (
              <Link
                key={idx}
                href={ind.href}
                className="text-xs sm:text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200 font-sans"
              >
                {ind.label}
              </Link>
            ))}
          </div>
        </div>

        {/* SECTION 5: SOCIAL LINKS */}
        <div className="pt-6 border-t border-[var(--border-subtle)]/30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider uppercase font-semibold">
              FOLLOW
            </span>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
              {socialLinks.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  {soc.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 6: LEGAL / BOTTOM BAR */}
        <div className="pt-8 border-t border-[var(--border-subtle)]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div>© 2026 TechnoMantra. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <span>Designed & Developed by TechnoMantra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
