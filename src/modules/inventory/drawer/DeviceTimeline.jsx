/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceTimeline
 * Module: Inventory
 *
 * Responsibility:
 * Displays the activity timeline for the selected device.
 *
 * Features:
 * - Chronological activity
 * - Status changes
 * - User actions
 * - Firmware events
 * - Discovery events
 *
 * Dependencies:
 * - Card
 * - CardHeader
 * - Badge
 * ------------------------------------------------------------
 */

import {
  Activity,
  Clock3,
} from "lucide-react";

import {
  Badge,
  Card,
  CardHeader,
} from "@/components/ui";

export default function DeviceTimeline({
  device,
}) {
  if (!device) return null;

  const events = device.timeline ?? [];

  return (
    <Card noPadding>
      <CardHeader
        title="Activity Timeline"
        description={`${events.length} Event${
          events.length !== 1 ? "s" : ""
        }`}
        icon={Clock3}
      />

      {events.length === 0 ? (
        <div className="p-6 text-center text-sm text-slate-500">
          No activity recorded for this device.
        </div>
      ) : (
        <div className="divide-y divide-white/10">
          {events.map((event, index) => (
            <div
              key={event.id ?? index}
              className="flex gap-4 p-5"
            >
              {/* Timeline Indicator */}

              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                <Activity className="h-5 w-5 text-cyan-400" />
              </div>

              {/* Timeline Content */}

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-medium text-white">
                    {event.title}
                  </h4>

                  {event.category && (
                    <Badge
                      size="sm"
                      variant="primary"
                    >
                      {event.category}
                    </Badge>
                  )}
                </div>

                {event.description && (
                  <p className="mt-2 text-sm text-slate-400">
                    {event.description}
                  </p>
                )}

                <p className="mt-3 text-xs text-slate-500">
                  {event.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}