import {
  Cable,
  EthernetPort,
  PlugZap,
  Wifi,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function DeviceInterfacesCard({ device }) {
  if (!device) return null;

  const interfaces = device.interfaces ?? [
    {
      id: 1,
      name: "Port 1",
      type: "RJ45",
      speed: "1 Gbps",
      poe: true,
      status: "up",
      connectedTo: "Core Switch",
    },
    {
      id: 2,
      name: "Port 2",
      type: "RJ45",
      speed: "1 Gbps",
      poe: false,
      status: "up",
      connectedTo: "Office AP",
    },
    {
      id: 3,
      name: "SFP+ 1",
      type: "SFP+",
      speed: "10 Gbps",
      poe: false,
      status: "down",
      connectedTo: null,
    },
  ];

  const activePorts = interfaces.filter(
    (port) => port.status === "up"
  ).length;

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Interfaces
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Physical ports and network connections.
            </p>
          </div>

          <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
            {activePorts} / {interfaces.length} Active
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-white/10 bg-white/[0.02]">
            <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
              <th className="px-6 py-3">Port</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Speed</th>
              <th className="px-6 py-3">PoE</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Connected Device</th>
            </tr>
          </thead>

          <tbody>
            {interfaces.map((port) => (
              <PortRow key={port.id} port={port} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PortRow({ port }) {
  const online = port.status === "up";

  return (
    <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.03]">
      {/* Port */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">
            <EthernetPort className="h-4 w-4 text-cyan-400" />
          </div>

          <span className="font-medium text-white">
            {port.name}
          </span>
        </div>
      </td>

      {/* Type */}
      <td className="px-6 py-4">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          {port.type}
        </span>
      </td>

      {/* Speed */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <Cable className="h-4 w-4 text-slate-500" />

          <span className="text-slate-200">
            {port.speed}
          </span>
        </div>
      </td>

      {/* PoE */}
      <td className="px-6 py-4">
        {port.poe ? (
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
            <PlugZap className="h-3.5 w-3.5" />
            Enabled
          </div>
        ) : (
          <span className="text-slate-500">—</span>
        )}
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        {online ? (
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Up
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-300">
            <XCircle className="h-3.5 w-3.5" />
            Down
          </div>
        )}
      </td>

      {/* Connected Device */}
      <td className="px-6 py-4">
        {port.connectedTo ? (
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-cyan-400" />

            <span className="text-slate-200">
              {port.connectedTo}
            </span>
          </div>
        ) : (
          <span className="text-slate-500">
            Not Connected
          </span>
        )}
      </td>
    </tr>
  );
}