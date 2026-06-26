/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceDistribution
 * Module: Monitoring
 *
 * Responsibility:
 * Displays device distribution by type.
 *
 * NOTE:
 * Placeholder visualization.
 * Will be replaced with a real chart in Phase 4.2.
 * ------------------------------------------------------------
 */

import {
  Camera,
  Network,
  Router,
  Server,
  Wifi,
} from "lucide-react";

import {
  Badge,
  Card,
  CardHeader,
} from "@/components/ui";

const DATA = [
  {
    icon: Router,
    label: "Gateways",
    value: 8,
    color: "primary",
    width: "w-[92%]",
  },
  {
    icon: Network,
    label: "Switches",
    value: 46,
    color: "purple",
    width: "w-[78%]",
  },
  {
    icon: Wifi,
    label: "Access Points",
    value: 128,
    color: "info",
    width: "w-full",
  },
  {
    icon: Camera,
    label: "Cameras",
    value: 61,
    color: "success",
    width: "w-[58%]",
  },
  {
    icon: Server,
    label: "Servers",
    value: 9,
    color: "warning",
    width: "w-[28%]",
  },
];

export default function DeviceDistribution() {
  return (
    <Card noPadding>
      <CardHeader
        title="Device Distribution"
        description="Managed Infrastructure"
      />

      <div className="space-y-6 p-6">
        {DATA.map((item) => (
          <div
            key={item.label}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-slate-400" />

                <span className="font-medium text-white">
                  {item.label}
                </span>
              </div>

              <Badge variant={item.color}>
                {item.value}
              </Badge>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/5">
              <div
                className={`h-full rounded-full bg-cyan-400 ${item.width}`}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}