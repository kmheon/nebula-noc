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

const alerts = [
  {
    level: "Critical",
    message: "Firewall blocked repeated login attempts.",
    time: "2 min ago",
  },
  {
    level: "Warning",
    message: "WAN bandwidth exceeded 80%.",
    time: "6 min ago",
  },
  {
    level: "Info",
    message: "New MikroTik device discovered.",
    time: "12 min ago",
  },
];

const devices = [
  {
    name: "Core Router",
    ip: "192.168.0.1",
    status: "Online",
  },
  {
    name: "Distribution Switch",
    ip: "192.168.0.2",
    status: "Online",
  },
  {
    name: "Access Point",
    ip: "192.168.0.31",
    status: "Warning",
  },
  {
    name: "Office NAS",
    ip: "192.168.0.20",
    status: "Offline",
  },
];

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-cyan-400">
          Operations Overview
        </h1>

        <p className="text-gray-400 mt-2">
          Live overview of your network infrastructure.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-cyan-500/20 bg-[#0B1220] p-6"
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

                <Icon className={item.color} size={34} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border border-cyan-500/20 bg-[#0B1220] p-6">
          <h2 className="text-xl font-semibold mb-6">
            Live Traffic
          </h2>

          <div className="h-64 flex items-end justify-between gap-2">
            {[35, 50, 45, 70, 82, 68, 90, 76, 55, 71, 88, 95].map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-cyan-400 transition-all"
                style={{
                  height: `${v}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-[#0B1220] p-6">
          <h2 className="text-xl font-semibold mb-6">
            Recent Alerts
          </h2>

          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.message}
                className="rounded-xl bg-[#05070B] border border-cyan-500/10 p-4"
              >
                <div className="flex justify-between">
                  <span className="font-semibold">
                    {alert.level}
                  </span>

                  <span className="text-sm text-gray-500">
                    {alert.time}
                  </span>
                </div>

                <p className="text-gray-400 mt-2">
                  {alert.message}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="rounded-2xl border border-cyan-500/20 bg-[#0B1220] p-6">
        <h2 className="text-xl font-semibold mb-6">
          Device Status
        </h2>

        <table className="w-full">
          <thead className="text-left text-gray-400">
            <tr>
              <th className="pb-3">Device</th>
              <th className="pb-3">IP Address</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {devices.map((device) => (
              <tr
                key={device.ip}
                className="border-t border-cyan-500/10"
              >
                <td className="py-4">{device.name}</td>

                <td>{device.ip}</td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      device.status === "Online"
                        ? "bg-green-500/20 text-green-400"
                        : device.status === "Warning"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {device.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}