"use client";

export default function Badge({
  children,
  className = "",
  dotColor = "emerald", // emerald | gold | blue
  ...props
}) {
  const dotColors = {
    emerald: "bg-emerald-400",
    gold: "bg-[var(--accent-gold)]",
    blue: "bg-[var(--accent-blue)]",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1 text-label rounded-full border border-[var(--border-subtle)] bg-[var(--surface)] backdrop-blur-md ${className}`}
      {...props}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[dotColor] || dotColors.emerald} animate-pulse`} />
      {children}
    </div>
  );
}
