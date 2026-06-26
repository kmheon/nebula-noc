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

const statusClass = {
  Online: "bg-green-500/20 text-green-400",
  Warning: "bg-yellow-500/20 text-yellow-400",
  Offline: "bg-red-500/20 text-red-400",
};

export default function DeviceStatus() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#0B1220]/80 backdrop-blur-xl p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Device Status
      </h2>

      <table className="w-full">
        <thead className="border-b border-cyan-500/20 text-left text-gray-400">
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
              className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors"
            >
              <td className="py-4 font-medium">
                {device.name}
              </td>

              <td className="text-gray-400">
                {device.ip}
              </td>

              <td>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${statusClass[device.status]}`}
                >
                  {device.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}