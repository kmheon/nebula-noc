import { useEffect, useState } from "react";

import { monitoringStore } from "../data/monitoring.store";

import DashboardHeader from "../components/DashboardHeader";
import StatsGrid from "../components/StatsGrid";
import HealthOverview from "../components/HealthOverview";
import DeviceDistribution from "../components/DeviceDistribution";
import BandwidthChart from "../components/BandwidthChart";
import AlertsPanel from "../components/AlertsPanel";
import ActivityFeed from "../components/ActivityFeed";
import QuickActions from "../components/QuickActions";

export default function MonitoringPage() {
  const [state, setState] = useState(() =>
    monitoringStore.getState()
  );

  useEffect(() => {
    const unsubscribe = monitoringStore.subscribe(setState);

    monitoringStore.startSimulation();

    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-6">

      <DashboardHeader />

      <StatsGrid data={state.stats} />

      <div className="grid gap-6 xl:grid-cols-2">
        <HealthOverview data={state} />
        <DeviceDistribution data={state.devices} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <BandwidthChart data={state.bandwidth} />
        <AlertsPanel alerts={state.alerts} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <ActivityFeed activity={state.activity} />
        <QuickActions />
      </div>

    </div>
  );
}