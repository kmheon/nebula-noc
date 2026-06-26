/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceInterfacesCard
 * Module: Inventory
 *
 * Responsibility:
 * Displays network interfaces for the selected device.
 *
 * Features:
 * - Interface status
 * - Link speed
 * - VLAN
 * - PoE status
 * - Shared Card components
 * - Shared StatusDot
 *
 * Dependencies:
 * - Card
 * - CardHeader
 * - Badge
 * - StatusDot
 * ------------------------------------------------------------
 */

import {
  Activity,
  Cable,
  EthernetPort,
  Zap,
} from "lucide-react";

import {
  Badge,
  Card,
  CardHeader,
  StatusDot,
} from "@/components/ui";

export default function DeviceInterfacesCard({
  device,
}) {
  if (!device) return null;

  const interfaces = device.interfaces ?? [];

  return (
    <Card noPadding>
      <CardHeader
        title="Interfaces"
        description={`${interfaces.length} Interface${
          interfaces.length !== 1 ? "s" : ""
        }`}
        icon={EthernetPort}
      />

      {interfaces.length === 0 ? (
        <div className="p-6 text-center text-sm text-slate-500">
          No interface information available.
        </div>
      ) : (
        <div className="divide-y divide-white/10">
          {interfaces.map((iface, index) => (
            <div
              key={iface.id ?? index}
              className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between"
            >
              {/* ---------------------------------------- */}
              {/* Interface Identity                       */}
              {/* ---------------------------------------- */}

              <div>
                <div className="flex items-center gap-2">
                  <Cable className="h-4 w-4 text-cyan-400" />

                  <span className="font-medium text-white">
                    {iface.name}
                  </span>

                  <StatusDot
                    status={
                      iface.status || "unknown"
                    }
                    compact
                  />
                </div>

                {iface.description && (
                  <p className="mt-2 text-sm text-slate-500">
                    {iface.description}
                  </p>
                )}
              </div>

              {/* ---------------------------------------- */}
              {/* Interface Metadata                       */}
              {/* ---------------------------------------- */}

              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  icon={Activity}
                  variant="info"
                >
                  {iface.speed || "Unknown"}
                </Badge>

                <Badge
                  variant="default"
                >
                  VLAN {iface.vlan ?? "-"}
                </Badge>

                {iface.poe && (
                  <Badge
                    icon={Zap}
                    variant="warning"
                  >
                    PoE
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}