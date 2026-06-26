/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: StatCard
 * Module: Monitoring
 *
 * Responsibility:
 * Reusable KPI card for dashboard statistics.
 *
 * Features:
 * - Icon
 * - Title
 * - Value
 * - Trend
 * - Subtitle
 * ------------------------------------------------------------
 */

import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import { Card } from "@/components/ui";

const COLOR_STYLES = {
  primary: {
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    trend: "text-cyan-400",
  },

  success: {
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    trend: "text-emerald-400",
  },

  warning: {
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    trend: "text-amber-400",
  },

  danger: {
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
    trend: "text-red-400",
  },

  info: {
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    trend: "text-blue-400",
  },
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  change,
  trend = "up",
  color = "primary",
}) {
  const style =
    COLOR_STYLES[color] ??
    COLOR_STYLES.primary;

  return (
    <Card
      hover
      className="relative overflow-hidden"
    >
      {/* Accent */}

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500/70 to-transparent" />

      <div className="flex items-start justify-between">
        {/* Left */}

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="text-sm text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        {/* Icon */}

        <div
          className={`
            flex h-14 w-14 items-center justify-center rounded-2xl
            ${style.iconBg}
          `}
        >
          <Icon
            className={`h-7 w-7 ${style.iconColor}`}
          />
        </div>
      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
        <div
          className={`flex items-center gap-1 text-sm font-semibold ${style.trend}`}
        >
          {trend === "up" ? (
            <ArrowUpRight className="h-4 w-4" />
          ) : (
            <ArrowDownRight className="h-4 w-4" />
          )}

          <span>{change}</span>
        </div>

        <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
          Since Yesterday
        </span>
      </div>
    </Card>
  );
}