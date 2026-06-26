/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceNetworkCard
 * Module: Inventory
 *
 * Responsibility:
 * Displays the network configuration of the selected device.
 *
 * Features:
 * - IP information
 * - MAC information
 * - Gateway
 * - DNS
 * - VLAN
 * - Shared Card components
 *
 * Dependencies:
 * - Card
 * - CardHeader
 * - Badge
 * ------------------------------------------------------------
 */

import {
  Badge,
  Card,
  CardHeader,
} from "@/components/ui";

import {
  Globe,
  Network,
  Router,
  Hash,
} from "lucide-react";

export default function DeviceNetworkCard({ device }) {
  if (!device) return null;

  const {
    ip,
    subnet,
    gateway,
    dns,
    vlan,
    mac,
  } = device;

  return (
    <Card noPadding>
      <CardHeader
        title="Network"
        description="Network Configuration"
        icon={Network}
      />

      <div className="grid gap-px bg-white/5 md:grid-cols-2">
        <InfoItem
          icon={Globe}
          label="IP Address"
          value={ip}
          mono
        />

        <InfoItem
          icon={Hash}
          label="MAC Address"
          value={mac}
          mono
        />

        <InfoItem
          icon={Network}
          label="Subnet Mask"
          value={subnet}
          mono
        />

        <InfoItem
          icon={Router}
          label="Gateway"
          value={gateway}
          mono
        />

        <InfoItem
          icon={Globe}
          label="DNS Server"
          value={dns}
          mono
        />

        <div className="bg-[#0f172a]/40 p-5">
          <div className="mb-3 flex items-center gap-2 text-slate-500">
            <Network className="h-4 w-4" />

            <span className="text-xs font-medium uppercase tracking-wider">
              VLAN
            </span>
          </div>

          <Badge variant="primary">
            {vlan || "Default"}
          </Badge>
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