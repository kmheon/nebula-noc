import Card from "../../ui/Card/Card";
import Badge from "../../ui/Badge/Badge";

export default function RecentAlerts({ alerts }) {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">
        Recent Alerts
      </h2>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.message}
            className="rounded-xl border border-cyan-500/10 bg-[#05070B] p-4 transition-all duration-300 hover:border-cyan-400/30"
          >
            <div className="flex items-center justify-between">
              <Badge
                variant={
                  alert.level === "Critical"
                    ? "danger"
                    : alert.level === "Warning"
                    ? "warning"
                    : "info"
                }
              >
                {alert.level}
              </Badge>

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
    </Card>
  );
}