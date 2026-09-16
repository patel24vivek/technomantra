"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full py-6 sm:py-8 border-b border-[var(--border-subtle)]/40 pointer-events-none">
      <div className="layout-container flex items-center justify-between pointer-events-auto">
        {/* Left: Brand & Descriptor */}
        <Link href="/" className="flex items-center gap-4 group text-decoration-none">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--background-deep)] border border-[var(--border-subtle)] flex items-center justify-center font-bold text-xs text-[var(--accent-gold)] text-glow-gold transition-colors duration-300 group-hover:border-[var(--border-highlight)]">
              N
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <span className="font-logo text-base sm:text-lg tracking-[0.35em] text-[#F5F5F5] text-glow-white">
                NOVA
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--text-muted)] border-l border-[var(--border-subtle)] pl-2.5 hidden sm:inline-block">
                Build Beyond
              </span>
            </div>
          </div>
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface)] backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative text-xs tracking-wider uppercase transition-colors duration-300 flex items-center gap-1.5 ${
                link.active
                  ? "text-[#F5F5F5] font-medium"
                  : "text-[var(--text-secondary)] hover:text-[#F5F5F5]"
              }`}
            >
              {link.active && (
                <span className="w-1 h-1 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Button href="#contact" variant="primary" className="text-xs px-5 py-2.5">
            Let's Talk <span className="text-xs ml-1">→</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[#F5F5F5] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--background-deep)]/95 backdrop-blur-xl border-b border-[var(--border-subtle)] py-6 px-6 flex flex-col gap-4 z-40">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm tracking-wider uppercase flex items-center gap-2 ${
                link.active
                  ? "text-[#F5F5F5] font-medium"
                  : "text-[var(--text-secondary)]"
              }`}
            >
              {link.active && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
              )}
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-[var(--border-subtle)]">
            <Button href="#contact" variant="primary" className="w-full text-xs justify-center">
              Let's Talk <span className="text-xs ml-1">→</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
