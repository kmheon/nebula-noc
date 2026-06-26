import Card from "../../ui/Card/Card";
import Badge from "../../ui/Badge/Badge";
import { getDevices } from "../../../services/providers";

const badgeVariant = {
  Online: "success",
  Warning: "warning",
  Offline: "danger",
};

export default function DeviceStatus() {
  const devices = getDevices();

  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Connected Devices
        </h2>

        <span className="text-sm text-gray-400">
          {devices.length} Devices
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">

          <thead className="border-b border-cyan-500/20 text-left text-sm text-gray-400">
            <tr>
              <th className="pb-4">Device</th>
              <th className="pb-4">Vendor</th>
              <th className="pb-4">IP Address</th>
              <th className="pb-4">Interface</th>
              <th className="pb-4">RX</th>
              <th className="pb-4">TX</th>
              <th className="pb-4">Latency</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {devices.map((device) => (
              <tr
                key={device.ip}
                className="border-b border-cyan-500/10 transition-colors hover:bg-cyan-500/5"
              >
                <td className="py-4 font-medium text-white">
                  {device.name}
                </td>

                <td className="text-gray-300">
                  {device.vendor}
                </td>

                <td className="text-gray-400">
                  {device.ip}
                </td>

                <td className="text-cyan-300">
                  {device.interface}
                </td>

                <td className="text-green-400">
                  {device.rx}
                </td>

                <td className="text-blue-400">
                  {device.tx}
                </td>

                <td className="text-gray-300">
                  {device.latency}
                </td>

                <td>
                  <Badge variant={badgeVariant[device.status]}>
                    {device.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </Card>
  );
}