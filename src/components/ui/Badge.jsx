/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: Badge
 * Module: Shared UI
 *
 * Responsibility:
 * Standard badge/pill component used throughout Nebula
 * for labels, categories, states and metadata.
 *
 * Features:
 * - Multiple variants
 * - Multiple sizes
 * - Optional icon
 * - Rounded pill design
 *
 * Used By:
 * - Inventory
 * - Monitoring
 * - Alerts
 * - Assets
 * - Device Details
 * - Settings
 *
 * Future Uses:
 * - Device Vendor
 * - Device Model
 * - Device Tags
 * - Alert Severity
 * - Site Labels
 * - Firmware Channel
 * ------------------------------------------------------------
 */

import clsx from "clsx";

const variants = {
  default:
    "border-white/10 bg-white/5 text-slate-300",

  primary:
    "border-cyan-500/20 bg-cyan-500/10 text-cyan-300",

  success:
    "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",

  warning:
    "border-amber-500/20 bg-amber-500/10 text-amber-300",

  danger:
    "border-red-500/20 bg-red-500/10 text-red-300",

  info:
    "border-blue-500/20 bg-blue-500/10 text-blue-300",

  purple:
    "border-violet-500/20 bg-violet-500/10 text-violet-300",
};

const sizes = {
  sm: "px-2 py-0.5 text-[11px]",

  md: "px-3 py-1 text-xs",

  lg: "px-4 py-1.5 text-sm",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  icon: Icon,
  rounded = true,
  className = "",
}) {
  return (
    <span
      className={clsx(
        // ----------------------------------------------------
        // Base
        // ----------------------------------------------------
        "inline-flex items-center gap-2 border font-medium whitespace-nowrap transition-colors",

        // ----------------------------------------------------
        // Shape
        // ----------------------------------------------------
        rounded ? "rounded-full" : "rounded-xl",

        // ----------------------------------------------------
        // Variant
        // ----------------------------------------------------
        variants[variant],

        // ----------------------------------------------------
        // Size
        // ----------------------------------------------------
        sizes[size],

        className
      )}
    >
      {/* Optional Icon */}
      {Icon && (
        <Icon className="h-3.5 w-3.5 shrink-0" />
      )}

      {/* Badge Content */}
      {children}
    </span>
  );
}