/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: Button
 * Module: Shared UI
 *
 * Responsibility:
 * Standard button component used throughout Nebula.
 *
 * Features:
 * - Multiple variants
 * - Multiple sizes
 * - Loading state
 * - Disabled state
 * - Optional icons
 * - Semantic button types
 *
 * Used By:
 * - Inventory
 * - Monitoring
 * - Alerts
 * - Assets
 * - Settings
 * - Authentication
 * - Device Drawer
 *
 * ------------------------------------------------------------
 */

import clsx from "clsx";
import { Loader2 } from "lucide-react";

const variants = {
  primary:
    "bg-cyan-500 text-white hover:bg-cyan-400",

  secondary:
    "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10",

  ghost:
    "text-slate-300 hover:bg-white/5 hover:text-white",

  success:
    "bg-emerald-500 text-white hover:bg-emerald-400",

  warning:
    "bg-amber-500 text-black hover:bg-amber-400",

  danger:
    "bg-red-500 text-white hover:bg-red-400",
};

const sizes = {
  sm: "h-9 px-3 text-sm",

  md: "h-11 px-4 text-sm",

  lg: "h-12 px-6 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = "",
  type = "button",
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={clsx(
        // ----------------------------------------------------
        // Base
        // ----------------------------------------------------
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200",

        // ----------------------------------------------------
        // Variant
        // ----------------------------------------------------
        variants[variant],

        // ----------------------------------------------------
        // Size
        // ----------------------------------------------------
        sizes[size],

        // ----------------------------------------------------
        // Width
        // ----------------------------------------------------
        fullWidth && "w-full",

        // ----------------------------------------------------
        // States
        // ----------------------------------------------------
        isDisabled
          ? "cursor-not-allowed opacity-60"
          : "active:scale-[0.98]",

        className
      )}
      {...props}
    >
      {/* Loading Spinner */}
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin" />
      )}

      {/* Left Icon */}
      {!loading && LeftIcon && (
        <LeftIcon className="h-4 w-4" />
      )}

      {/* Button Text */}
      <span>{children}</span>

      {/* Right Icon */}
      {!loading && RightIcon && (
        <RightIcon className="h-4 w-4" />
      )}
    </button>
  );
}