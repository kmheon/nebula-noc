const trafficData = [35, 50, 45, 70, 82, 68, 90, 76, 55, 71, 88, 95];

export default function TrafficChart() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#0B1220]/80 backdrop-blur-xl p-6">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Live Traffic
          </h2>

          <p className="text-sm text-gray-400">
            Last 12 minutes
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-green-400 text-sm">
            Live
          </span>
        </div>
      </div>

      <div className="h-64 flex items-end gap-2">
        {trafficData.map((value, index) => (
          <div
            key={index}
            className="group flex-1"
          >
            <div
              className="rounded-t-lg bg-gradient-to-t from-cyan-600 to-cyan-300 transition-all duration-500 hover:brightness-125"
              style={{
                height: `${value}%`,
              }}
            />

            <div className="mt-2 text-center text-xs text-gray-500">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}