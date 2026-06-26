import OverviewCards from "../components/dashboard/OverviewCards/OverviewCards";
import TrafficChart from "../components/dashboard/TrafficChart/TrafficChart";
import RecentAlerts from "../components/dashboard/RecentAlerts/RecentAlerts";
import DeviceStatus from "../components/dashboard/DeviceStatus/DeviceStatus";

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-cyan-400">
          Operations Overview
        </h1>

        <p className="mt-2 text-gray-400">
          Real-time overview of your network infrastructure.
        </p>
      </div>

      <OverviewCards />

      <div className="grid gap-8 xl:grid-cols-2">
        <TrafficChart />
        <RecentAlerts />
      </div>

      <DeviceStatus />

    </div>
  );
}