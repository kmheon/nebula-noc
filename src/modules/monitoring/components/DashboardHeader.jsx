/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DashboardHeader
 * Module: Monitoring
 *
 * Responsibility:
 * Top section of the Monitoring Dashboard.
 *
 * Features:
 * - Dashboard title
 * - Live status indicator
 * - Last refresh
 * - Search
 * - Refresh
 * - Discover Devices
 * ------------------------------------------------------------
 */

import {
  Activity,
  RefreshCw,
  Radar,
} from "lucide-react";

import {
  Button,
  Card,
  SearchInput,
  StatusDot,
} from "@/components/ui";

export default function DashboardHeader({
  search = "",
  onSearch,
  onRefresh,
  onDiscover,
  lastUpdated = "Just now",
}) {
  return (
    <Card>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

        {/* ------------------------------------------------ */}
        {/* Left                                             */}
        {/* ------------------------------------------------ */}

        <div className="space-y-3">

          <div className="flex items-center gap-3">

            <div>
              <h1 className="text-3xl font-bold text-white">
                Monitoring Dashboard
              </h1>

              <p className="mt-1 text-sm text-slate-400">
                Live network overview and operational status
              </p>
            </div>

          </div>

          <div className="flex flex-wrap items-center gap-4">

            <StatusDot
              status="online"
            />

            <span className="text-sm text-slate-400">
              Last updated {lastUpdated}
            </span>

          </div>

        </div>

        {/* ------------------------------------------------ */}
        {/* Right                                            */}
        {/* ------------------------------------------------ */}

        <div className="flex flex-col gap-3 xl:items-end">

          <div className="w-full xl:w-[420px]">

            <SearchInput
              value={search}
              onChange={onSearch}
              placeholder="Search devices..."
            />

          </div>

          <div className="flex flex-wrap justify-end gap-3">

            <Button
              variant="secondary"
              leftIcon={RefreshCw}
              onClick={onRefresh}
            >
              Refresh
            </Button>

            <Button
              leftIcon={Radar}
              onClick={onDiscover}
            >
              Discover Devices
            </Button>

          </div>

        </div>

      </div>
    </Card>
  );
}