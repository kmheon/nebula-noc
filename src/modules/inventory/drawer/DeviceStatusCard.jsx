import {
  Activity,
  Clock3,
  Cpu,
  HardDrive,
  MemoryStick,
  ShieldCheck,
} from "lucide-react";

export default function DeviceStatusCard({ device }) {
  if (!device) return null;

  const {
    uptime = "Unknown",
    firmware = "Unknown",
    adoptionState = "Managed",
    healthScore = 100,
    cpu = 24,
    memory = 58,
    storage = 41,
    lastSeen = "Just now",
  } = device;

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4">
        <h3 className="text-lg font-semibold text-white">
          Device Status
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Current health, firmware and resource utilization.
        </p>
      </div>

      <div className="space-y-6 p-6">
        {/* Top Status */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatusItem
            icon={ShieldCheck}
            label="Health Score"
            value={`${healthScore}%`}
            accent="text-emerald-400"
          />

          <StatusItem
            icon={Clock3}
            label="Uptime"
            value={uptime}
          />

          <StatusItem
            icon={Activity}
            label="Last Seen"
            value={lastSeen}
          />

          <StatusItem
            icon={Cpu}
            label="Firmware"
            value={firmware}
          />
        </div>

        {/* Adoption */}
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-cyan-400">
                Adoption State
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                {adoptionState}
              </p>
            </div>

            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">
              Healthy
            </span>
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-5">
          <UsageBar
            icon={Cpu}
            label="CPU Usage"
            value={cpu}
          />

          <UsageBar
            icon={MemoryStick}
            label="Memory Usage"
            value={memory}
          />

          <UsageBar
            icon={HardDrive}
            label="Storage Usage"
            value={storage}
          />
        </div>
      </div>
    </section>
  );
}

function StatusItem({
  icon: Icon,
  label,
  value,
  accent = "text-white",
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4" />

        <span className="text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>

      <p className={`text-lg font-semibold ${accent}`}>
        {value}
      </p>
    </div>
  );
}

function UsageBar({
  icon: Icon,
  label,
  value = 0,
}) {
  const percentage = Math.min(Math.max(value, 0), 100);

  const barColor =
    percentage >= 90
      ? "bg-red-500"
      : percentage >= 75
      ? "bg-amber-500"
      : "bg-cyan-500";

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-slate-400" />

          <span className="text-sm font-medium text-slate-300">
            {label}
          </span>
        </div>

        <span className="font-mono text-sm text-white">
          {percentage}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full transition-[width] duration-500 ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}