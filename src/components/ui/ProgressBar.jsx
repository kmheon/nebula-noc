/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: ProgressBar
 * Module: Shared UI
 *
 * Responsibility:
 * Displays progress or utilization values in a consistent,
 * reusable format across the application.
 *
 * Features:
 * - Automatic value clamping (0–100)
 * - Multiple color variants
 * - Optional label
 * - Optional percentage
 * - Optional icon
 * - Optional animated transition
 *
 * Used By:
 * - Monitoring Dashboard
 * - Device Status
 * - Hardware
 * - Assets
 * - Storage
 * - Backup Jobs
 * - Network Utilization
 *
 * ------------------------------------------------------------
 */

import clsx from "clsx";

const variants = {
  primary: "bg-cyan-500",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-red-500",
  purple: "bg-violet-500",
};

export default function ProgressBar({
  value = 0,
  label,
  icon: Icon,
  showValue = true,
  height = "md",
  variant,
  animated = true,
  className = "",
}) {
  // ----------------------------------------------------------
  // Clamp value between 0–100
  // ----------------------------------------------------------
  const percentage = Math.min(Math.max(value, 0), 100);

  // ----------------------------------------------------------
  // Auto-select variant if one isn't provided
  // ----------------------------------------------------------
  const color =
    variant ??
    (percentage >= 90
      ? "danger"
      : percentage >= 75
      ? "warning"
      : "primary");

  const heights = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-3.5",
  };

  return (
    <div className={clsx("space-y-2", className)}>
      {/* ---------------------------------------------------- */}
      {/* Header                                               */}
      {/* ---------------------------------------------------- */}

      {(label || showValue) && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Icon && (
              <Icon className="h-4 w-4 text-slate-400" />
            )}

            {label && (
              <span className="text-sm font-medium text-slate-300">
                {label}
              </span>
            )}
          </div>

          {showValue && (
            <span className="font-mono text-sm text-white">
              {percentage}%
            </span>
          )}
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* Progress Track                                       */}
      {/* ---------------------------------------------------- */}

      <div
        className={clsx(
          "overflow-hidden rounded-full bg-white/10",
          heights[height]
        )}
      >
        {/* ------------------------------------------------ */}
        {/* Progress Fill                                    */}
        {/* ------------------------------------------------ */}

        <div
          className={clsx(
            "h-full rounded-full",
            variants[color],
            animated &&
              "transition-[width] duration-500 ease-out"
          )}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}