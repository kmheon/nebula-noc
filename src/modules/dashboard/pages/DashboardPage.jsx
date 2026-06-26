import OverviewCards from "../../../components/dashboard/OverviewCards/OverviewCards";
import TrafficChart from "../../../components/dashboard/TrafficChart/TrafficChart";
import RecentAlerts from "../../../components/dashboard/RecentAlerts/RecentAlerts";
import DeviceStatus from "../../../components/dashboard/DeviceStatus/DeviceStatus";

import PageHeader from "../../../components/ui/PageHeader/PageHeader";

import useDashboardData from "../../../hooks/useDashboardData";

export default function DashboardPage() {
  const data = useDashboardData();

  return (
    <div className="space-y-8 p-8">

      <PageHeader
        title="Operations Overview"
        subtitle="Real-time overview of your network infrastructure."
      />

      <OverviewCards stats={data.stats} />

      <div className="grid gap-8 xl:grid-cols-2">
        <TrafficChart traffic={data.traffic} />
        <RecentAlerts alerts={data.alerts} />
      </div>

      <DeviceStatus devices={data.devices} />

    </div>
  );
}