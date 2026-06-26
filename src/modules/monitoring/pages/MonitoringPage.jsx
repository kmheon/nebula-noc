/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Module: Monitoring
 * Page: MonitoringPage
 *
 * Dashboard entry page.
 *
 * Phase 4.1
 * Dashboard Layout
 * ------------------------------------------------------------
 */

import DashboardHeader from "../components/DashboardHeader";
import StatsGrid from "../components/StatsGrid";
import HealthOverview from "../components/HealthOverview";
import DeviceDistribution from "../components/DeviceDistribution";
import BandwidthChart from "../components/BandwidthChart";
import AlertsPanel from "../components/AlertsPanel";
import ActivityFeed from "../components/ActivityFeed";
import QuickActions from "../components/QuickActions";

export default function MonitoringPage() {
  return (
    <div className="space-y-6">

      {/* ------------------------------------------------ */}
      {/* Dashboard Header                                */}
      {/* ------------------------------------------------ */}

      <DashboardHeader />

      {/* ------------------------------------------------ */}
      {/* Statistics                                       */}
      {/* ------------------------------------------------ */}

      <StatsGrid />

      {/* ------------------------------------------------ */}
      {/* Overview Charts                                 */}
      {/* ------------------------------------------------ */}

      <div className="grid gap-6 xl:grid-cols-2">

        <HealthOverview />

        <DeviceDistribution />

      </div>

      {/* ------------------------------------------------ */}
      {/* Monitoring                                       */}
      {/* ------------------------------------------------ */}

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">

        <BandwidthChart />

        <AlertsPanel />

      </div>

      {/* ------------------------------------------------ */}
      {/* Bottom Widgets                                   */}
      {/* ------------------------------------------------ */}

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">

        <ActivityFeed />

        <QuickActions />

      </div>

    </div>
  );
}