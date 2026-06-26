/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceStatusCard
 * Module: Inventory
 *
 * Responsibility:
 * Displays the operational health of the selected device.
 *
 * Features:
 * - Current device status
 * - Uptime
 * - Firmware version
 * - Last seen
 * - Shared ProgressBar
 * - Shared StatusDot
 *
 * Dependencies:
 * - Card
 * - CardHeader
 * - ProgressBar
 * - StatusDot
 * ------------------------------------------------------------
 */

import {
  Activity,
  Clock3,
  Cpu,
  ShieldCheck,
} from "lucide-react";

import {
  Card,
  CardHeader,
  ProgressBar,
  StatusDot,
} from "@/components/ui";

export default function DeviceStatusCard({ device }) {
  if (!device) return null;

  const {
    status,
    uptime,
    firmware,
    cpu = 0,
    memory = 0,
    lastSeen,
  } = device;

  return (
    <Card noPadding>
      <CardHeader
        title="Device Status"
        description="Operational Health"
        icon={ShieldCheck}
        actions={
          <StatusDot
            status={status}
            compact
          />
        }
      />

      <div className="space-y-6 p-6">
        {/* ------------------------------------------------ */}
        {/* Information                                      */}
        {/* ------------------------------------------------ */}

        <div className="grid gap-4 md:grid-cols-3">
          <StatusItem
            icon={Clock3}
            label="Uptime"
            value={uptime || "Unknown"}
          />

          <StatusItem
            icon={Activity}
            label="Last Seen"
            value={lastSeen || "Unknown"}
          />

          <StatusItem
            icon={Cpu}
            label="Firmware"
            value={firmware || "Unknown"}
          />
        </div>

        {/* ------------------------------------------------ */}
        {/* Resource Usage                                   */}
        {/* ------------------------------------------------ */}

        <div className="space-y-5">
          <ProgressBar
            label="CPU Usage"
            value={cpu}
            variant={
              cpu >= 90
                ? "danger"
                : cpu >= 75
                ? "warning"
                : "primary"
            }
          />

          <ProgressBar
            label="Memory Usage"
            value={memory}
            variant={
              memory >= 90
                ? "danger"
                : memory >= 75
                ? "warning"
                : "primary"
            }
          />
        </div>
      </div>
    </Card>
  );
}

/**
 * ------------------------------------------------------------
 * Status Information Item
 * ------------------------------------------------------------
 */

function StatusItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-2 flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4" />

        <span className="text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>

      <p className="text-sm font-medium text-white">
        {value}
      </p>
    </div>
  );
}