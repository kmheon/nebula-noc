/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: ActivityFeed
 * Module: Monitoring
 *
 * Responsibility:
 * Displays real-time system and device activity logs.
 *
 * NOTE:
 * Placeholder feed for Phase 4.1.
 * Will later connect to live event stream (WebSocket).
 * ------------------------------------------------------------
 */

import {
  Activity,
  ArrowUpRight,
  RefreshCw,
  Server,
} from "lucide-react";

import {
  Badge,
  Card,
  CardHeader,
} from "@/components/ui";

const EVENTS = [
  {
    id: 1,
    title: "Gateway Restarted",
    description: "Core Gateway reboot completed successfully",
    time: "19:25",
    type: "system",
  },
  {
    id: 2,
    title: "Camera Offline",
    description: "Parking Camera 03 lost connection",
    time: "19:22",
    type: "alert",
  },
  {
    id: 3,
    title: "Firmware Upgrade",
    description: "Switch firmware updated to v2.4.1",
    time: "19:18",
    type: "system",
  },
  {
    id: 4,
    title: "Device Adopted",
    description: "New Access Point added to network",
    time: "19:10",
    type: "system",
  },
];

export default function ActivityFeed() {
  return (
    <Card noPadding>
      <CardHeader
        title="Recent Activity"
        description="Live system events"
        actions={
          <Badge variant="info">
            Live
          </Badge>
        }
      />

      <div className="space-y-1 p-5">

        {EVENTS.map((event) => (
          <div
            key={event.id}
            className="group flex gap-4 rounded-xl p-4 transition-colors hover:bg-white/[0.03]"
          >
            {/* Icon */}

            <div className="mt-1 rounded-xl bg-white/5 p-2">
              <Activity className="h-5 w-5 text-cyan-400" />
            </div>

            {/* Content */}

            <div className="min-w-0 flex-1">

              <div className="flex items-center justify-between gap-3">

                <h4 className="truncate font-semibold text-white">
                  {event.title}
                </h4>

                <span className="text-xs text-slate-500">
                  {event.time}
                </span>

              </div>

              <p className="mt-1 text-sm text-slate-400">
                {event.description}
              </p>

              <div className="mt-3 flex items-center gap-2">

                <Badge
                  size="sm"
                  variant={
                    event.type === "alert"
                      ? "danger"
                      : "success"
                  }
                >
                  {event.type}
                </Badge>

                <span className="text-xs text-slate-500">
                  system event
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>
    </Card>
  );
}