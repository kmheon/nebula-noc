/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: AlertsPanel
 * Module: Monitoring
 *
 * Responsibility:
 * Displays active alerts requiring operator attention.
 *
 * NOTE:
 * Uses mock data for Phase 4.1.
 * Will connect to the alert service later.
 * ------------------------------------------------------------
 */

import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ShieldAlert,
} from "lucide-react";

import {
  Badge,
  Button,
  Card,
  CardHeader,
} from "@/components/ui";

const ALERTS = [
  {
    id: 1,
    title: "Gateway Offline",
    device: "Core Gateway",
    severity: "Critical",
    time: "2 min ago",
    color: "danger",
    icon: ShieldAlert,
  },
  {
    id: 2,
    title: "High CPU Usage",
    device: "Distribution Switch",
    severity: "Warning",
    time: "6 min ago",
    color: "warning",
    icon: AlertTriangle,
  },
  {
    id: 3,
    title: "Camera Reconnected",
    device: "Parking Camera 03",
    severity: "Resolved",
    time: "12 min ago",
    color: "success",
    icon: CheckCircle2,
  },
];

export default function AlertsPanel() {
  return (
    <Card noPadding>
      <CardHeader
        title="Active Alerts"
        description="Latest infrastructure events"
        actions={
          <Badge variant="danger">
            {ALERTS.length} Active
          </Badge>
        }
      />

      <div className="divide-y divide-white/10">

        {ALERTS.map((alert) => {
          const Icon = alert.icon;

          return (
            <div
              key={alert.id}
              className="flex items-start gap-4 p-5 transition-colors hover:bg-white/[0.03]"
            >
              <div className="mt-1 rounded-xl bg-white/5 p-2">
                <Icon className="h-5 w-5 text-red-400" />
              </div>

              <div className="min-w-0 flex-1">

                <div className="flex items-center justify-between gap-3">

                  <h4 className="truncate font-semibold text-white">
                    {alert.title}
                  </h4>

                  <Badge variant={alert.color} size="sm">
                    {alert.severity}
                  </Badge>

                </div>

                <p className="mt-1 text-sm text-slate-400">
                  {alert.device}
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">

                  <Clock3 className="h-3.5 w-3.5" />

                  {alert.time}

                </div>

              </div>

            </div>
          );
        })}

      </div>

      <div className="border-t border-white/10 p-4">
        <Button
          variant="secondary"
          className="w-full"
        >
          View All Alerts
        </Button>
      </div>
    </Card>
  );
}