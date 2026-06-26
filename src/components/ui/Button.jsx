/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: Button
 * Module: Shared UI
 *
 * Responsibility:
 * Standard action button used throughout Nebula.
 *
 * Features:
 * - Multiple variants
 * - Multiple sizes
 * - Optional icons
 * - Loading state
 * - Disabled state
 * - Premium hover interactions
 * ------------------------------------------------------------
 */

import clsx from "clsx";
import { Loader2 } from "lucide-react";

const variants = {
  primary: `
    bg-cyan-500
    text-white
    hover:bg-cyan-400
    hover:shadow-lg
    hover:shadow-cyan-500/20
    active:scale-[0.98]
  `,

  secondary: `
    border
    border-white/10
    bg-white/[0.04]
    text-slate-200
    hover:border-white/20
    hover:bg-white/[0.08]
    hover:text-white
    active:scale-[0.98]
  `,

  success: `
    bg-emerald-500
    text-white
    hover:bg-emerald-400
    hover:shadow-lg
    hover:shadow-emerald-500/20
    active:scale-[0.98]
  `,

  warning: `
    bg-amber-500
    text-black
    hover:bg-amber-400
    hover:shadow-lg
    hover:shadow-amber-500/20
    active:scale-[0.98]
  `,

  danger: `
    bg-red-500
    text-white
    hover:bg-red-400
    hover:shadow-lg
    hover:shadow-red-500/20
    active:scale-[0.98]
  `,

  ghost: `
    text-slate-300
    hover:bg-white/5
    hover:text-white
    active:scale-[0.98]
  `,
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        font-medium
        transition-all
        duration-200
        select-none
        disabled:pointer-events-none
        disabled:opacity-50
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-500/20
        `,
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        LeftIcon && <LeftIcon className="h-4 w-4" />
      )}

      <span>{children}</span>

      {!loading && RightIcon && (
        <RightIcon className="h-4 w-4" />
      )}
    </button>
  );
}