"use client";

export default function GlassCard({
  children,
  className = "",
  glow = false,
  glowColor = "ambient", // ambient | warm | cool
  ...props
}) {
  let glowClass = "";
  if (glow) {
    if (glowColor === "warm") glowClass = "glow-warm";
    else if (glowColor === "cool") glowClass = "glow-cool";
    else glowClass = "glow-ambient";
  }

  return (
    <div
      className={`glass-panel rounded-2xl p-6 sm:p-8 ${glowClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
