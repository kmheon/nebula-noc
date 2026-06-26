/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceTypeChip
 * Module: Inventory
 *
 * Responsibility:
 * Standardized device type badge.
 *
 * This component wraps the shared Badge component so the rest
 * of the application doesn't need to know how device types
 * are rendered.
 *
 * Dependencies:
 * - Badge
 * ------------------------------------------------------------
 */

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

import { Badge } from "@/components/ui";

const DEVICE_TYPES = {
  gateway: {
    label: "Gateway",
    icon: Router,
    variant: "primary",
  },

  router: {
    label: "Router",
    icon: Router,
    variant: "primary",
  },

  switch: {
    label: "Switch",
    icon: Network,
    variant: "purple",
  },

  accesspoint: {
    label: "Access Point",
    icon: Wifi,
    variant: "info",
  },

  ap: {
    label: "Access Point",
    icon: Wifi,
    variant: "info",
  },

  firewall: {
    label: "Firewall",
    icon: Shield,
    variant: "danger",
  },

  camera: {
    label: "Camera",
    icon: Camera,
    variant: "success",
  },

  nvr: {
    label: "NVR",
    icon: HardDrive,
    variant: "warning",
  },

  dvr: {
    label: "DVR",
    icon: HardDrive,
    variant: "warning",
  },

  server: {
    label: "Server",
    icon: Server,
    variant: "purple",
  },

  workstation: {
    label: "Workstation",
    icon: MonitorSmartphone,
    variant: "info",
  },

  computer: {
    label: "Computer",
    icon: MonitorSmartphone,
    variant: "info",
  },

  nas: {
    label: "NAS",
    icon: HardDrive,
    variant: "warning",
  },

  cable: {
    label: "Cable",
    icon: Cable,
    variant: "default",
  },

  controller: {
    label: "Controller",
    icon: Cpu,
    variant: "primary",
  },

  default: {
    label: "Device",
    icon: Box,
    variant: "default",
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
    DEVICE_TYPES[normalize(type)] ??
    DEVICE_TYPES.default;

  return (
    <Badge
      icon={config.icon}
      variant={config.variant}
      size="sm"
      className={className}
    >
      {config.label}
    </Badge>
  );
}