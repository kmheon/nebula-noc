/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: StatusDot
 * Module: Shared UI
 *
 * Responsibility:
 * Premium operational status indicator used throughout
 * the Nebula platform.
 *
 * Features:
 * - Online
 * - Offline
 * - Warning
 * - Error
 * - Unknown
 * - Compact mode
 * - Optional label
 * ------------------------------------------------------------
 */

import clsx from "clsx";

const STATUS = {
  online: {
    color: "bg-emerald-400",
    text: "Online",
    pulse: true,
  },

  warning: {
    color: "bg-amber-400",
    text: "Warning",
    pulse: false,
  },

  offline: {
    color: "bg-red-400",
    text: "Offline",
    pulse: false,
  },

  error: {
    color: "bg-red-500",
    text: "Error",
    pulse: false,
  },

  maintenance: {
    color: "bg-blue-400",
    text: "Maintenance",
    pulse: false,
  },

  unknown: {
    color: "bg-slate-500",
    text: "Unknown",
    pulse: false,
  },
};

export default function StatusDot({
  status = "unknown",
  compact = false,
  showLabel = true,
  className = "",
}) {
  const config =
    STATUS[(status || "").toLowerCase()] ??
    STATUS.unknown;

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2",
        className
      )}
    >
      {/* ------------------------------------------------ */}
      {/* Status Indicator                                 */}
      {/* ------------------------------------------------ */}

      <span className="relative flex h-3 w-3 items-center justify-center">
        {config.pulse && (
          <span
            className={clsx(
              "absolute inline-flex h-full w-full rounded-full opacity-60",
              config.color,
              "animate-ping"
            )}
          />
        )}

        <span
          className={clsx(
            "relative inline-flex rounded-full",
            compact ? "h-2.5 w-2.5" : "h-3 w-3",
            config.color
          )}
        />
      </span>

      {/* ------------------------------------------------ */}
      {/* Label                                             */}
      {/* ------------------------------------------------ */}

      {showLabel && (
        <span
          className={clsx(
            "text-sm font-medium",
            status === "online"
              ? "text-emerald-300"
              : status === "warning"
              ? "text-amber-300"
              : status === "offline" || status === "error"
              ? "text-red-300"
              : "text-slate-300"
          )}
        >
          {config.text}
        </span>
      )}
    </div>
  );
}