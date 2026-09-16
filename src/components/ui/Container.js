"use client";

export default function Container({
  children,
  className = "",
  as: Component = "div",
  ...props
}) {
  return (
    <Component className={`layout-container ${className}`} {...props}>
      {children}
    </Component>
  );
}
