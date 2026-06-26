/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceHeader
 * Module: Inventory
 *
 * Responsibility:
 * Displays the identity of the selected device.
 *
 * Features:
 * - Device identity
 * - Vendor & model
 * - Device type
 * - Health indicator
 * - Basic inventory information
 *
 * Dependencies:
 * - Card
 * - CardHeader
 * - Badge
 * - StatusDot
 * - DeviceTypeChip
 * ------------------------------------------------------------
 */

import {
  Building2,
  Cpu,
  Globe,
  Hash,
  MapPin,
  Router,
} from "lucide-react";

import {
  Badge,
  Card,
  CardHeader,
  StatusDot,
} from "@/components/ui";

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
  } = device;

  return (
    <Card noPadding>
      <CardHeader
        title={name}
        description="Device Identity"
        icon={Router}
        actions={<StatusDot status={status} compact />}
      />

      {/* ------------------------------------------------ */}
      {/* Identity                                         */}
      {/* ------------------------------------------------ */}

      <div className="space-y-6 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <DeviceTypeChip type={type} />

          <Badge variant="default">
            {vendor}
          </Badge>

          <Badge variant="default">
            {model}
          </Badge>
        </div>

        {/* ------------------------------------------------ */}
        {/* Information Grid                                */}
        {/* ------------------------------------------------ */}

        <div className="grid gap-px overflow-hidden rounded-xl bg-white/5 md:grid-cols-2 xl:grid-cols-3">
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
      </div>
    </Card>
  );
}

/**
 * ------------------------------------------------------------
 * Information Item
 * ------------------------------------------------------------
 */

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
        className={`text-sm text-white ${
          mono ? "font-mono" : "font-medium"
        }`}
      >
        {value || "—"}
      </p>
    </div>
  );
}