import { useState } from "react";
import {
  Router,
  Network,
  Wifi,
  HardDrive,
  Server,
  CircleCheckBig,
  CircleAlert,
  CircleX,
} from "lucide-react";

import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import PageHeader from "@/components/ui/PageHeader/PageHeader";

import { discoverDevices } from "@/services/discovery/deviceDiscovery";

const deviceIcons = {
  Router,
  Switch: Network,
  "Access Point": Wifi,
  NAS: HardDrive,
  Server,
};

export default function Devices() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleScan() {
    setLoading(true);
    const result = await discoverDevices();
    setDevices(result);
    setLoading(false);
  }

  function StatusIcon(status) {
    switch (status) {
      case "Online":
        return (
          <CircleCheckBig
            size={18}
            className="text-green-400"
          />
        );

      case "Warning":
        return (
          <CircleAlert
            size={18}
            className="text-yellow-400"
          />
        );

      default:
        return (
          <CircleX
            size={18}
            className="text-red-500"
          />
        );
    }
  }

  return (
    <div className="space-y-8 p-8">

      <PageHeader
        title="Network Inventory"
        subtitle="Discover and manage every device on your network."
        actions={
          <Button onClick={handleScan}>
            {loading ? "Scanning..." : "Scan Network"}
          </Button>
        }
      />

      <Card>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="border-b border-cyan-500/20 text-left text-sm text-gray-400">

              <tr>
                <th className="pb-4">Device</th>
                <th className="pb-4">IP Address</th>
                <th className="pb-4">MAC Address</th>
                <th className="pb-4">Health</th>
              </tr>

            </thead>

            <tbody>

              {devices.length === 0 ? (

                <tr>

                  <td
                    colSpan={4}
                    className="py-14 text-center text-gray-500"
                  >
                    Press <strong>Scan Network</strong> to discover devices.
                  </td>

                </tr>

              ) : (

                devices.map((device) => {

                  const Icon =
                    deviceIcons[device.type] || Server;

                  return (

                    <tr
                      key={device.id}
                      className="border-b border-cyan-500/10 transition hover:bg-cyan-500/5"
                    >

                      <td className="py-5">

                        <div className="flex items-center gap-4">

                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">

                            <Icon
                              size={22}
                              className="text-cyan-400"
                            />

                          </div>

                          <div>

                            <div className="flex items-center gap-2">

                              <div
                                className={`h-2.5 w-2.5 rounded-full ${
                                  device.status === "Online"
                                    ? "bg-green-400 animate-pulse"
                                    : device.status === "Warning"
                                    ? "bg-yellow-400 animate-pulse"
                                    : "bg-red-500"
                                }`}
                              />

                              <p className="font-semibold">
                                {device.hostname}
                              </p>

                            </div>

                            <div className="mt-1 flex gap-2 text-xs">

                              <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-cyan-300">
                                {device.type}
                              </span>

                              <span className="rounded-full bg-white/5 px-2 py-1 text-gray-400">
                                {device.vendor}
                              </span>

                              <span className="rounded-full bg-white/5 px-2 py-1 text-gray-400">
                                {device.model}
                              </span>

                            </div>

                          </div>

                        </div>

                      </td>

                      <td className="font-mono text-gray-300">
                        {device.ip}
                      </td>

                      <td className="font-mono text-gray-500">
                        {device.mac}
                      </td>

                      <td>

                        <div className="flex items-center gap-2">

                          {StatusIcon(device.status)}

                          <span
                            className={
                              device.status === "Online"
                                ? "text-green-400"
                                : device.status === "Warning"
                                ? "text-yellow-400"
                                : "text-red-500"
                            }
                          >
                            {device.status}
                          </span>

                        </div>

                      </td>

                    </tr>

                  );

                })

              )}

            </tbody>

          </table>

        </div>

      </Card>

    </div>
  );
}