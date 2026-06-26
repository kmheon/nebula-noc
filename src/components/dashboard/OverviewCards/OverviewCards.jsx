import {
  Activity,
  AlertTriangle,
  Cpu,
  HardDrive,
} from "lucide-react";

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
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-2xl border border-cyan-500/20 bg-[#0B1220]/80 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {item.value}
                </h2>
              </div>

              <Icon
                size={34}
                className={`${item.color} transition-transform duration-300 group-hover:scale-110`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}