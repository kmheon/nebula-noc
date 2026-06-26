/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: Badge
 * Module: Shared UI
 *
 * Responsibility:
 * Premium badge component for labels, status and metadata.
 *
 * Features:
 * - Multiple variants
 * - Optional icon
 * - Multiple sizes
 * - Consistent Nebula styling
 * ------------------------------------------------------------
 */

import clsx from "clsx";

const variants = {
  primary:
    "border border-cyan-500/20 bg-cyan-500/10 text-cyan-300",

  success:
    "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300",

  warning:
    "border border-amber-500/20 bg-amber-500/10 text-amber-300",

  danger:
    "border border-red-500/20 bg-red-500/10 text-red-300",

  info:
    "border border-sky-500/20 bg-sky-500/10 text-sky-300",

  purple:
    "border border-violet-500/20 bg-violet-500/10 text-violet-300",

  default:
    "border border-white/10 bg-white/[0.04] text-slate-300",
};

const sizes = {
  sm: "h-6 px-2.5 text-[11px]",
  md: "h-7 px-3 text-xs",
  lg: "h-8 px-3.5 text-sm",
};

export default function Badge({
  children,
  icon: Icon,
  variant = "default",
  size = "md",
  className = "",
}) {
  return (
    <span
      className={clsx(
        `
        inline-flex
        items-center
        gap-1.5
        rounded-full
        whitespace-nowrap
        font-medium
        tracking-wide
        transition-all
        duration-200
        `,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {Icon && (
        <Icon className="h-3.5 w-3.5 shrink-0" />
      )}

      {children}
    </span>
  );
}