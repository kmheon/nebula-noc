import {
  Activity,
  CheckCircle2,
  Clock3,
  Download,
  Power,
  Settings2,
  ShieldAlert,
  WifiOff,
} from "lucide-react";

const EVENT_TYPES = {
  online: {
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  offline: {
    icon: WifiOff,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
  reboot: {
    icon: Power,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  firmware: {
    icon: Download,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  configuration: {
    icon: Settings2,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  alert: {
    icon: ShieldAlert,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  default: {
    icon: Activity,
    color: "text-slate-400",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
  },
};

export default function DeviceTimeline({ device }) {
  if (!device) return null;

  const timeline = device.timeline ?? [
    {
      id: 1,
      type: "online",
      title: "Device came online",
      description: "Heartbeat restored successfully.",
      time: "Just now",
    },
    {
      id: 2,
      type: "firmware",
      title: "Firmware updated",
      description: "Updated to version v2.8.1.",
      time: "2 hours ago",
    },
    {
      id: 3,
      type: "configuration",
      title: "Configuration changed",
      description: "Network settings were updated.",
      time: "Yesterday",
    },
    {
      id: 4,
      type: "reboot",
      title: "Device restarted",
      description: "Restart initiated by administrator.",
      time: "2 days ago",
    },
  ];

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4">
        <h3 className="text-lg font-semibold text-white">
          Activity Timeline
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Recent events and operational history.
        </p>
      </div>

      <div className="p-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-white/10" />

          <div className="space-y-6">
            {timeline.map((event) => (
              <TimelineItem
                key={event.id}
                event={event}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event }) {
  const config =
    EVENT_TYPES[event.type] ?? EVENT_TYPES.default;

  const Icon = config.icon;

  return (
    <div className="relative flex gap-5">
      {/* Timeline Marker */}
      <div
        className={`
          relative z-10
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          ${config.border}
          ${config.bg}
        `}
      >
        <Icon
          className={`h-5 w-5 ${config.color}`}
        />
      </div>

      {/* Event */}
      <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/[0.07]">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h4 className="font-semibold text-white">
              {event.title}
            </h4>

            {event.description && (
              <p className="mt-1 text-sm text-slate-400">
                {event.description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 whitespace-nowrap text-xs text-slate-500">
            <Clock3 className="h-3.5 w-3.5" />
            {event.time}
          </div>
        </div>
      </div>
    </div>
  );
}