/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: StatusDot
 * Module: Shared UI
 *
 * Responsibility:
 * Displays a standardized status indicator with an optional
 * icon and label.
 *
 * Features:
 * - Standard status colors
 * - Optional animated state
 * - Optional label
 * - Optional icon
 * - Compact mode
 *
 * Used By:
 * - Inventory
 * - Monitoring
 * - Alerts
 * - Assets
 * - Device Drawer
 * - Sites
 *
 * Future Integrations:
 * - Live telemetry
 * - WebSocket updates
 * - SNMP status
 * - Alert engine
 * ------------------------------------------------------------
 */

import clsx from "clsx";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  HelpCircle,
  WifiOff,
} from "lucide-react";

const STATUS = {
  online: {
    label: "Online",
    color: "bg-emerald-500",
    text: "text-emerald-300",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    icon: CheckCircle2,
  },

  warning: {
    label: "Warning",
    color: "bg-amber-500",
    text: "text-amber-300",
    border: "border-amber-500/20",
    bg: "bg-amber-500/10",
    icon: AlertTriangle,
  },

  offline: {
    label: "Offline",
    color: "bg-red-500",
    text: "text-red-300",
    border: "border-red-500/20",
    bg: "bg-red-500/10",
    icon: WifiOff,
  },

  updating: {
    label: "Updating",
    color: "bg-cyan-500",
    text: "text-cyan-300",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
    icon: Activity,
    animated: true,
  },

  provisioning: {
    label: "Provisioning",
    color: "bg-violet-500",
    text: "text-violet-300",
    border: "border-violet-500/20",
    bg: "bg-violet-500/10",
    icon: Clock3,
    animated: true,
  },

  unknown: {
    label: "Unknown",
    color: "bg-slate-500",
    text: "text-slate-400",
    border: "border-white/10",
    bg: "bg-white/5",
    icon: HelpCircle,
  },
};

export default function StatusDot({
  status = "unknown",
  label = true,
  icon = true,
  pulse,
  compact = false,
  className = "",
}) {
  const config =
    STATUS[status?.toLowerCase()] ?? STATUS.unknown;

  const Icon = config.icon;

  const animate =
    pulse !== undefined ? pulse : config.animated;

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 border",
        compact ? "rounded-full px-2.5 py-1" : "rounded-xl px-3 py-2",
        config.border,
        config.bg,
        className
      )}
    >
      {/* Status Dot */}
      <span
        className={clsx(
          "h-2.5 w-2.5 rounded-full",
          config.color,
          animate && "animate-pulse"
        )}
      />

      {/* Status Icon */}
      {icon && (
        <Icon
          className={clsx(
            compact ? "h-3.5 w-3.5" : "h-4 w-4",
            config.text
          )}
        />
      )}

      {/* Status Label */}
      {label && (
        <span
          className={clsx(
            compact ? "text-xs" : "text-sm",
            "font-medium",
            config.text
          )}
        >
          {config.label}
        </span>
      )}
    </div>
  );
}