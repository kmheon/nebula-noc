import StatCard from "./StatCard";

import {
  CheckCircle2,
  AlertTriangle,
  Building2,
  Clock3,
} from "lucide-react";

export default function StatsGrid({ data }) {
  if (!data) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Online Devices"
        value={data.online}
        icon={CheckCircle2}
        color="success"
        subtitle="Currently Connected"
      />

      <StatCard
        title="Active Alerts"
        value={data.alerts}
        icon={AlertTriangle}
        color="warning"
        subtitle="Require Attention"
      />

      <StatCard
        title="Managed Sites"
        value={data.sites}
        icon={Building2}
        color="primary"
        subtitle="Across Organization"
      />

      <StatCard
        title="Network Uptime"
        value={`${data.uptime}%`}
        icon={Clock3}
        color="info"
        subtitle="Last 30 Days"
      />

    </div>
  );
}