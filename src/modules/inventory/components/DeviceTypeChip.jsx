import {
  Router,
  Wifi,
  Shield,
  Camera,
  Server,
  HardDrive,
  MonitorSmartphone,
  Cable,
  Network,
  Cpu,
  Box,
} from "lucide-react";

const DEVICE_TYPES = {
  gateway: {
    label: "Gateway",
    icon: Router,
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },

  router: {
    label: "Router",
    icon: Router,
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },

  switch: {
    label: "Switch",
    icon: Network,
    color: "text-indigo-300",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },

  accesspoint: {
    label: "Access Point",
    icon: Wifi,
    color: "text-sky-300",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },

  ap: {
    label: "Access Point",
    icon: Wifi,
    color: "text-sky-300",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },

  firewall: {
    label: "Firewall",
    icon: Shield,
    color: "text-red-300",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },

  camera: {
    label: "Camera",
    icon: Camera,
    color: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },

  nvr: {
    label: "NVR",
    icon: HardDrive,
    color: "text-amber-300",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },

  dvr: {
    label: "DVR",
    icon: HardDrive,
    color: "text-orange-300",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },

  server: {
    label: "Server",
    icon: Server,
    color: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },

  workstation: {
    label: "Workstation",
    icon: MonitorSmartphone,
    color: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },

  computer: {
    label: "Computer",
    icon: MonitorSmartphone,
    color: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },

  nas: {
    label: "NAS",
    icon: HardDrive,
    color: "text-yellow-300",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },

  cable: {
    label: "Cable",
    icon: Cable,
    color: "text-slate-300",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
  },

  controller: {
    label: "Controller",
    icon: Cpu,
    color: "text-fuchsia-300",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/20",
  },

  default: {
    label: "Device",
    icon: Box,
    color: "text-slate-300",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
  },
};

function normalize(type = "") {
  return type.toLowerCase().replace(/\s+/g, "");
}

export default function DeviceTypeChip({
  type = "device",
  className = "",
}) {
  const config =
    DEVICE_TYPES[normalize(type)] ?? DEVICE_TYPES.default;

  const Icon = config.icon;

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        px-3
        py-1.5
        text-xs
        font-medium
        tracking-wide
        whitespace-nowrap
        transition-colors
        ${config.bg}
        ${config.border}
        ${config.color}
        ${className}
      `}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" />

      {config.label}
    </span>
  );
}