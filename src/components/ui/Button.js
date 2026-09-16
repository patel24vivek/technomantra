"use client";

export default function Button({
  children,
  variant = "primary",
  className = "",
  icon,
  onClick,
  href,
  ...props
}) {
  const baseClass = variant === "secondary" ? "btn-secondary" : "btn-primary";
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="inline-flex items-center">{icon}</span>}
    </Component>
  );
}
