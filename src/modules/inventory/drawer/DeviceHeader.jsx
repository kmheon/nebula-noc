import {
  Building2,
  Cpu,
  Globe,
  Hash,
  MapPin,
  Router,
} from "lucide-react";

import DeviceHealth from "../components/DeviceHealth";
import DeviceTypeChip from "../components/DeviceTypeChip";

export default function DeviceHeader({ device }) {
  if (!device) return null;

  const {
    name,
    vendor,
    model,
    type,
    site,
    ip,
    mac,
    serial,
    status,
    lastSeen,
  } = device;

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {/* Top */}
      <div className="border-b border-white/10 p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Identity */}
          <div className="flex gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
              <Router className="h-8 w-8 text-cyan-400" />
            </div>

            <div>
              <h1 className="text-2xl font-semibold text-white">
                {name}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <DeviceTypeChip type={type} />

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                  {vendor}
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                  {model}
                </span>
              </div>
            </div>
          </div>

          {/* Health */}
          <DeviceHealth
            status={status}
            lastSeen={lastSeen}
          />
        </div>
      </div>

      {/* Information Grid */}
      <div className="grid gap-px bg-white/5 md:grid-cols-2 xl:grid-cols-4">
        <InfoItem
          icon={Building2}
          label="Vendor"
          value={vendor}
        />

        <InfoItem
          icon={Cpu}
          label="Model"
          value={model}
        />

        <InfoItem
          icon={MapPin}
          label="Site"
          value={site}
        />

        <InfoItem
          icon={Globe}
          label="IP Address"
          value={ip}
        />

        <InfoItem
          icon={Hash}
          label="MAC Address"
          value={mac}
          mono
        />

        <InfoItem
          icon={Hash}
          label="Serial Number"
          value={serial || "Not Available"}
          mono
        />
      </div>
    </section>
  );
}

function InfoItem({
  icon: Icon,
  label,
  value,
  mono = false,
}) {
  return (
    <div className="bg-[#0f172a]/40 p-5">
      <div className="mb-3 flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4" />

        <span className="text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>

      <p
        className={`
          text-sm
          text-white
          ${mono ? "font-mono" : "font-medium"}
        `}
      >
        {value || "—"}
      </p>
    </div>
  );
}