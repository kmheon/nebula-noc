import {
  Activity,
  AlertTriangle,
  Cpu,
  HardDrive,
} from "lucide-react";

import StatCard from "../../ui/StatCard/StatCard";
import { getDashboardStats } from "../../../services/providers";

const icons = {
  HardDrive,
  Activity,
  Cpu,
  AlertTriangle,
};

export default function OverviewCards() {
  const stats = getDashboardStats();

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={icons[stat.icon]}
          iconColor={stat.color}
        />
      ))}
    </div>
  );
}