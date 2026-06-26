import {
  Activity,
  AlertTriangle,
  Cpu,
  HardDrive,
} from "lucide-react";

import StatCard from "../../ui/StatCard/StatCard";

const stats = [
  {
    title: "Connected Devices",
    value: "127",
    icon: HardDrive,
    color: "text-cyan-400",
  },
  {
    title: "Live Traffic",
    value: "842 Mbps",
    icon: Activity,
    color: "text-green-400",
  },
  {
    title: "CPU Usage",
    value: "18%",
    icon: Cpu,
    color: "text-yellow-400",
  },
  {
    title: "Critical Alerts",
    value: "3",
    icon: AlertTriangle,
    color: "text-red-400",
  },
];

export default function OverviewCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          iconColor={stat.color}
        />
      ))}
    </div>
  );
}