import {
  Cpu,
  MemoryStick,
  HardDrive,
  Thermometer,
  Zap,
  Fan,
  Package,
  CalendarClock,
} from "lucide-react";

export default function DeviceHardwareCard({ device }) {
  if (!device) return null;

  const {
    cpuModel = "Unknown Processor",
    memoryTotal = "8 GB",
    storageTotal = "128 GB",
    temperature = "42°C",
    powerSource = "PoE+",
    powerDraw = "11.8 W",
    fanStatus = "Normal",
    serial = "Unknown",
    manufactured = "N/A",
  } = device;

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4">
        <h3 className="text-lg font-semibold text-white">
          Hardware
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Physical hardware information and environmental
          status.
        </p>
      </div>

      <div className="space-y-6 p-6">
        {/* Hardware Overview */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <HardwareCard
            icon={Cpu}
            label="Processor"
            value={cpuModel}
          />

          <HardwareCard
            icon={MemoryStick}
            label="Installed Memory"
            value={memoryTotal}
          />

          <HardwareCard
            icon={HardDrive}
            label="Storage"
            value={storageTotal}
          />

          <HardwareCard
            icon={Package}
            label="Serial Number"
            value={serial}
            mono
          />
        </div>

        {/* Environment */}
        <div className="grid gap-5 lg:grid-cols-3">
          <EnvironmentTile
            icon={Thermometer}
            title="Temperature"
            value={temperature}
            accent="text-orange-300"
          />

          <EnvironmentTile
            icon={Zap}
            title="Power"
            value={powerSource}
            subtitle={powerDraw}
            accent="text-amber-300"
          />

          <EnvironmentTile
            icon={Fan}
            title="Cooling"
            value={fanStatus}
            accent="text-cyan-300"
          />
        </div>

        {/* Manufacturing */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="mb-4 flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-cyan-400" />

            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Manufacturing Information
            </h4>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <InfoRow
              label="Manufactured"
              value={manufactured}
            />

            <InfoRow
              label="Serial Number"
              value={serial}
              mono
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HardwareCard({
  icon: Icon,
  label,
  value,
  mono = false,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4" />

        <span className="text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>

      <p
        className={`text-sm text-white ${
          mono ? "font-mono" : "font-medium"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function EnvironmentTile({
  icon: Icon,
  title,
  value,
  subtitle,
  accent = "text-white",
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-slate-400" />

        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </span>
      </div>

      <div className={`text-xl font-semibold ${accent}`}>
        {value}
      </div>

      {subtitle && (
        <div className="mt-1 text-sm text-slate-400">
          {subtitle}
        </div>
      )}
    </div>
  );
}

function InfoRow({
  label,
  value,
  mono = false,
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-slate-500">
        {label}
      </div>

      <div
        className={`mt-1 text-sm text-white ${
          mono ? "font-mono" : "font-medium"
        }`}
      >
        {value}
      </div>
    </div>
  );
}