import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  HelpCircle,
  WifiOff,
} from "lucide-react";

const HEALTH = {
  online: {
    label: "Online",
    icon: CheckCircle2,
    dot: "bg-emerald-500",
    iconColor: "text-emerald-500",
    text: "text-emerald-300",
    ring: "ring-emerald-500/20",
    bg: "bg-emerald-500/10",
  },
  warning: {
    label: "Warning",
    icon: AlertTriangle,
    dot: "bg-amber-500",
    iconColor: "text-amber-500",
    text: "text-amber-300",
    ring: "ring-amber-500/20",
    bg: "bg-amber-500/10",
  },
  offline: {
    label: "Offline",
    icon: WifiOff,
    dot: "bg-red-500",
    iconColor: "text-red-500",
    text: "text-red-300",
    ring: "ring-red-500/20",
    bg: "bg-red-500/10",
  },
  provisioning: {
    label: "Provisioning",
    icon: Clock3,
    dot: "bg-sky-500 animate-pulse",
    iconColor: "text-sky-500",
    text: "text-sky-300",
    ring: "ring-sky-500/20",
    bg: "bg-sky-500/10",
  },
  updating: {
    label: "Updating",
    icon: Activity,
    dot: "bg-violet-500 animate-pulse",
    iconColor: "text-violet-500",
    text: "text-violet-300",
    ring: "ring-violet-500/20",
    bg: "bg-violet-500/10",
  },
  unknown: {
    label: "Unknown",
    icon: HelpCircle,
    dot: "bg-slate-500",
    iconColor: "text-slate-400",
    text: "text-slate-400",
    ring: "ring-slate-500/20",
    bg: "bg-slate-500/10",
  },
};

export default function DeviceHealth({
  status = "unknown",
  lastSeen,
  compact = false,
}) {
  const health = HEALTH[status?.toLowerCase()] ?? HEALTH.unknown;
  const Icon = health.icon;

  if (compact) {
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-white/5 px-2.5 py-1 ${health.bg}`}
      >
        <span
          className={`h-2 w-2 rounded-full ${health.dot}`}
          aria-hidden="true"
        />

        <Icon className={`h-3.5 w-3.5 ${health.iconColor}`} />

        <span className={`text-xs font-medium ${health.text}`}>
          {health.label}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`
        inline-flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/5
        px-3
        py-2
        ring-1
        ${health.ring}
        ${health.bg}
        transition-colors
      `}
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${health.dot}`}
        aria-hidden="true"
      />

      <Icon className={`h-4 w-4 ${health.iconColor}`} />

      <div className="flex flex-col leading-tight">
        <span className={`text-sm font-semibold ${health.text}`}>
          {health.label}
        </span>

        {lastSeen && (
          <span className="text-[11px] text-slate-500">
            Last seen {lastSeen}
          </span>
        )}
      </div>
    </div>
  );
}