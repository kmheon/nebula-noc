import {
  Globe,
  Router,
  Network,
  Cable,
  Server,
  Wifi,
  EthernetPort,
} from "lucide-react";

export default function DeviceNetworkCard({ device }) {
  if (!device) return null;

  const {
    ip = "—",
    subnet = "255.255.255.0",
    gateway = "192.168.1.1",
    dns = ["8.8.8.8", "1.1.1.1"],
    vlan = "Default",
    interfaceName = "eth0",
    linkSpeed = "1 Gbps",
    duplex = "Full Duplex",
    mtu = 1500,
    hostname,
  } = device;

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4">
        <h3 className="text-lg font-semibold text-white">
          Network
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Network addressing, interface configuration and
          connectivity.
        </p>
      </div>

      <div className="space-y-6 p-6">
        {/* Primary Network Information */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <InfoCard
            icon={Globe}
            label="IP Address"
            value={ip}
            mono
          />

          <InfoCard
            icon={Network}
            label="Subnet Mask"
            value={subnet}
            mono
          />

          <InfoCard
            icon={Router}
            label="Gateway"
            value={gateway}
            mono
          />

          <InfoCard
            icon={Server}
            label="Hostname"
            value={hostname || "Not Assigned"}
          />

          <InfoCard
            icon={Cable}
            label="VLAN"
            value={vlan}
          />

          <InfoCard
            icon={Wifi}
            label="Link Speed"
            value={linkSpeed}
          />
        </div>

        {/* Interface */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="mb-4 flex items-center gap-2">
            <EthernetPort className="h-5 w-5 text-cyan-400" />

            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Primary Interface
            </h4>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Metric
              label="Interface"
              value={interfaceName}
            />

            <Metric
              label="Speed"
              value={linkSpeed}
            />

            <Metric
              label="Duplex"
              value={duplex}
            />
          </div>
        </div>

        {/* DNS */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="mb-4 flex items-center gap-2">
            <Server className="h-5 w-5 text-cyan-400" />

            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              DNS Servers
            </h4>
          </div>

          <div className="space-y-2">
            {dns.map((server, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/5 bg-black/20 px-3 py-2 font-mono text-sm text-slate-300"
              >
                {server}
              </div>
            ))}
          </div>
        </div>

        {/* MTU */}
        <div className="flex items-center justify-between rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-cyan-400">
              Maximum Transmission Unit
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {mtu} Bytes
            </p>
          </div>

          <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Standard Ethernet
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  mono = false,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4" />

        <span className="text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>

      <p
        className={`${
          mono ? "font-mono" : "font-medium"
        } break-all text-sm text-white`}
      >
        {value}
      </p>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-medium text-white">
        {value}
      </p>
    </div>
  );
}