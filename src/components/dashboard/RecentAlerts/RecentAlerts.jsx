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

const badgeColors = {
  Critical: "bg-red-500/20 text-red-400 border-red-500/30",
  Warning: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Info: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
};

export default function RecentAlerts() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#0B1220]/80 backdrop-blur-xl p-6">

      <h2 className="text-xl font-semibold mb-6">
        Recent Alerts
      </h2>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.message}
            className="rounded-xl border border-cyan-500/10 bg-[#05070B] p-4 transition-all duration-300 hover:border-cyan-400/30"
          >
            <div className="flex items-center justify-between">

              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeColors[alert.level]}`}
              >
                {alert.level}
              </span>

              <span className="text-xs text-gray-500">
                {alert.time}
              </span>

            </div>

            <p className="mt-3 text-gray-300">
              {alert.message}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}