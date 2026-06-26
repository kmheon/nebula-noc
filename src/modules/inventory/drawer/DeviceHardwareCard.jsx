/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceHardwareCard
 * Module: Inventory
 *
 * Responsibility:
 * Displays hardware information and resource utilization for
 * the selected device.
 *
 * Features:
 * - CPU
 * - Memory
 * - Storage
 * - Temperature
 * - Shared ProgressBar
 * - Shared Card components
 *
 * Dependencies:
 * - Card
 * - CardHeader
 * - ProgressBar
 * ------------------------------------------------------------
 */

import {
  Card,
  CardHeader,
  ProgressBar,
} from "@/components/ui";

import {
  Cpu,
  HardDrive,
  MemoryStick,
  Thermometer,
} from "lucide-react";

export default function DeviceHardwareCard({ device }) {
  if (!device) return null;

  const {
    cpu = 0,
    memory = 0,
    storage = 0,
    temperature,
    architecture,
    platform,
    serial,
  } = device;

  return (
    <Card noPadding>
      <CardHeader
        title="Hardware"
        description="System Resources"
        icon={Cpu}
      />

      <div className="space-y-6 p-6">
        {/* ------------------------------------------------ */}
        {/* Hardware Information                             */}
        {/* ------------------------------------------------ */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard
            icon={Cpu}
            label="Platform"
            value={platform}
          />

          <InfoCard
            icon={MemoryStick}
            label="Architecture"
            value={architecture}
          />

          <InfoCard
            icon={HardDrive}
            label="Serial"
            value={serial}
            mono
          />

          <InfoCard
            icon={Thermometer}
            label="Temperature"
            value={
              temperature
                ? `${temperature}°C`
                : "Unknown"
            }
          />
        </div>

        {/* ------------------------------------------------ */}
        {/* Utilization                                      */}
        {/* ------------------------------------------------ */}

        <div className="space-y-5">
          <ProgressBar
            label="CPU Utilization"
            value={cpu}
          />

          <ProgressBar
            label="Memory Utilization"
            value={memory}
            variant="purple"
          />

          <ProgressBar
            label="Storage Utilization"
            value={storage}
            variant="warning"
          />
        </div>
      </div>
    </Card>
  );
}

/**
 * ------------------------------------------------------------
 * Hardware Information Card
 * ------------------------------------------------------------
 */

function InfoCard({
  icon: Icon,
  label,
  value,
  mono = false,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-2 flex items-center gap-2 text-slate-500">
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
        {value || "—"}
      </p>
    </div>
  );
}