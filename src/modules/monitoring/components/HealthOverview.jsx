/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: HealthOverview
 * Module: Monitoring
 *
 * Responsibility:
 * Displays an overall network health summary.
 *
 * NOTE:
 * This uses placeholder visuals for now.
 * In Phase 4.2 it will be replaced with a real chart.
 * ------------------------------------------------------------
 */

import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

import {
  Card,
  CardHeader,
  ProgressBar,
} from "@/components/ui";

export default function HealthOverview() {
  return (
    <Card noPadding>
      <CardHeader
        title="Network Health"
        description="Overall Infrastructure Status"
      />

      <div className="space-y-8 p-6">

        {/* ------------------------------------------------ */}
        {/* Overall Health                                  */}
        {/* ------------------------------------------------ */}

        <div className="text-center">

          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-8 border-cyan-500/20 bg-cyan-500/5">

            <div>

              <h2 className="text-5xl font-bold text-white">
                98%
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Healthy
              </p>

            </div>

          </div>

        </div>

        {/* ------------------------------------------------ */}
        {/* Device Summary                                  */}
        {/* ------------------------------------------------ */}

        <div className="grid gap-4 md:grid-cols-3">

          <HealthItem
            icon={CheckCircle2}
            color="text-emerald-400"
            label="Online"
            value="248"
          />

          <HealthItem
            icon={AlertTriangle}
            color="text-amber-400"
            label="Warning"
            value="7"
          />

          <HealthItem
            icon={XCircle}
            color="text-red-400"
            label="Offline"
            value="3"
          />

        </div>

        {/* ------------------------------------------------ */}
        {/* Health Metrics                                  */}
        {/* ------------------------------------------------ */}

        <div className="space-y-5">

          <ProgressBar
            label="Device Availability"
            value={98}
            variant="success"
          />

          <ProgressBar
            label="Network Stability"
            value={96}
            variant="primary"
          />

          <ProgressBar
            label="Service Health"
            value={94}
            variant="warning"
          />

        </div>

      </div>
    </Card>
  );
}

/* ---------------------------------------------------------- */
/* Health Item                                                 */
/* ---------------------------------------------------------- */

function HealthItem({
  icon: Icon,
  color,
  label,
  value,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">

      <div className="flex items-center gap-3">

        <Icon className={`h-5 w-5 ${color}`} />

        <div>

          <p className="text-xs uppercase tracking-wider text-slate-500">
            {label}
          </p>

          <p className="text-2xl font-semibold text-white">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
}