import Card from "../../ui/Card/Card";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const trafficData = [
  { time: "09:00", traffic: 35 },
  { time: "09:05", traffic: 50 },
  { time: "09:10", traffic: 45 },
  { time: "09:15", traffic: 70 },
  { time: "09:20", traffic: 82 },
  { time: "09:25", traffic: 68 },
  { time: "09:30", traffic: 90 },
  { time: "09:35", traffic: 76 },
  { time: "09:40", traffic: 55 },
  { time: "09:45", traffic: 71 },
  { time: "09:50", traffic: 88 },
  { time: "09:55", traffic: 95 },
];

export default function TrafficChart() {
  return (
    <Card>

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold text-white">
            Live Traffic
          </h2>

          <p className="text-sm text-gray-400">
            Last 60 Minutes
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm text-green-400">
            Live
          </span>
        </div>

      </div>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={trafficData}>

            <defs>
              <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="time"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#0B1220",
                border: "1px solid rgba(34,211,238,.2)",
                borderRadius: 12,
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="traffic"
              stroke="#22d3ee"
              strokeWidth={3}
              fill="url(#trafficGradient)"
              animationDuration={1200}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </Card>
  );
}