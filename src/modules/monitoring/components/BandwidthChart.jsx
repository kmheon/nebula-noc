/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: BandwidthChart
 * Module: Monitoring
 *
 * Responsibility:
 * Displays current WAN utilization.
 *
 * NOTE:
 * Placeholder widget.
 * Will be replaced with a real chart in Phase 4.2.
 * ------------------------------------------------------------
 */

import {
  Download,
  Upload,
  Wifi,
} from "lucide-react";

import {
  Badge,
  Card,
  CardHeader,
  ProgressBar,
} from "@/components/ui";

export default function BandwidthChart() {
  return (
    <Card noPadding>
      <CardHeader
        title="Network Throughput"
        description="Current WAN Utilization"
      />

      <div className="space-y-8 p-6">

        {/* Current Speed */}

        <div className="grid gap-4 md:grid-cols-2">

          <MetricCard
            icon={Download}
            title="Download"
            value="842 Mbps"
            color="text-cyan-400"
          />

          <MetricCard
            icon={Upload}
            title="Upload"
            value="214 Mbps"
            color="text-emerald-400"
          />

        </div>

        {/* Utilization */}

        <div className="space-y-5">

          <ProgressBar
            label="WAN Utilization"
            value={68}
            variant="primary"
          />

          <ProgressBar
            label="LAN Utilization"
            value={42}
            variant="success"
          />

        </div>

        {/* Placeholder Chart */}

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <div className="mb-5 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Wifi className="h-5 w-5 text-cyan-400" />

              <span className="font-medium text-white">
                Live Traffic
              </span>

            </div>

            <Badge variant="info">
              Last 60 Minutes
            </Badge>

          </div>

          <div className="flex h-48 items-end gap-2">

            {[
              32,
              48,
              54,
              60,
              45,
              72,
              68,
              84,
              78,
              70,
              56,
              62,
              74,
              81,
              76,
              69,
              58,
              63,
              71,
              66,
            ].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-md bg-cyan-400/80 transition-all duration-300 hover:bg-cyan-300"
                style={{
                  height: `${height}%`,
                }}
              />
            ))}

          </div>

        </div>

      </div>
    </Card>
  );
}

/* ---------------------------------------------------------- */
/* Metric Card                                                 */
/* ---------------------------------------------------------- */

function MetricCard({
  icon: Icon,
  title,
  value,
  color,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-wider text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            {value}
          </p>

        </div>

        <div className="rounded-xl bg-white/5 p-3">

          <Icon className={`h-6 w-6 ${color}`} />

        </div>

      </div>

    </div>
  );
}