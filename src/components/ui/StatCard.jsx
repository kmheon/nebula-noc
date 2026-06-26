/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: StatCard
 * Module: Shared UI
 *
 * Responsibility:
 * Standard KPI / metric card used throughout Nebula.
 *
 * Features:
 * - Optional icon
 * - Trend indicator
 * - Status badge
 * - Footer content
 * - Uses Card component
 *
 * Used By:
 * - Monitoring Dashboard
 * - Inventory
 * - Sites
 * - Alerts
 * - Assets
 * - Reports
 *
 * Dependencies:
 * - Card
 * - Badge
 *
 * ------------------------------------------------------------
 */

import clsx from "clsx";
import {
  TrendingDown,
  TrendingUp,
  Minus,
} from "lucide-react";

import Card from "./Card";
import Badge from "./Badge";

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  badge,
  trend,
  trendValue,
  footer,
  className = "",
}) {
  return (
    <Card
      hover
      className={clsx("flex flex-col", className)}
    >
      {/* ------------------------------------------------ */}
      {/* Header                                           */}
      {/* ------------------------------------------------ */}

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-slate-500">
              {subtitle}
            </p>
          )}
        </div>

        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
            <Icon className="h-6 w-6 text-cyan-400" />
          </div>
        )}
      </div>

      {/* ------------------------------------------------ */}
      {/* Footer                                           */}
      {/* ------------------------------------------------ */}

      {(badge || trend || footer) && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            {badge && (
              <Badge
                variant={badge.variant ?? "primary"}
                icon={badge.icon}
                size="sm"
              >
                {badge.label}
              </Badge>
            )}

            {trend && (
              <TrendIndicator
                trend={trend}
                value={trendValue}
              />
            )}
          </div>

          {footer && (
            <div className="text-xs text-slate-500">
              {footer}
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

/**
 * ------------------------------------------------------------
 * Trend Indicator
 * ------------------------------------------------------------
 */

function TrendIndicator({
  trend,
  value,
}) {
  const config = {
    up: {
      icon: TrendingUp,
      color: "text-emerald-400",
    },

    down: {
      icon: TrendingDown,
      color: "text-red-400",
    },

    neutral: {
      icon: Minus,
      color: "text-slate-400",
    },
  };

  const current =
    config[trend] ?? config.neutral;

  const Icon = current.icon;

  return (
    <div
      className={clsx(
        "flex items-center gap-1 text-xs font-medium",
        current.color
      )}
    >
      <Icon className="h-3.5 w-3.5" />

      {value}
    </div>
  );
}