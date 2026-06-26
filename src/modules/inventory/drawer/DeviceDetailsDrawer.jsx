/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceDetailsDrawer
 * Module: Inventory
 *
 * Responsibility:
 * Displays detailed information for the selected device.
 *
 * Features:
 * - Shared Drawer component
 * - Scrollable layout
 * - Composable detail cards
 * - Reusable across future modules
 *
 * Dependencies:
 * - Drawer
 * - DeviceHeader
 * - DeviceStatusCard
 * - DeviceNetworkCard
 * - DeviceHardwareCard
 * - DeviceInterfacesCard
 * - DeviceTimeline
 * - DeviceActions
 * ------------------------------------------------------------
 */

import { Drawer } from "@/components/ui";

import DeviceActions from "./DeviceActions";
import DeviceHardwareCard from "./DeviceHardwareCard";
import DeviceHeader from "./DeviceHeader";
import DeviceInterfacesCard from "./DeviceInterfacesCard";
import DeviceNetworkCard from "./DeviceNetworkCard";
import DeviceStatusCard from "./DeviceStatusCard";
import DeviceTimeline from "./DeviceTimeline";

export default function DeviceDetailsDrawer({
  open = false,
  device,
  onClose,
  onLocate,
  onRestart,
  onOpenWeb,
  onSSH,
  onEdit,
  onDelete,
}) {
  return (
    <Drawer
      open={open}
      width="xl"
      title={device?.name ?? "Device Details"}
      description={
        device
          ? `${device.vendor} • ${device.model}`
          : "No device selected"
      }
      onClose={onClose}
    >
      {/* ------------------------------------------------ */}
      {/* Drawer Content                                   */}
      {/* ------------------------------------------------ */}

      {device && (
        <div className="space-y-6 p-6">
          {/* Device Identity */}
          <DeviceHeader device={device} />

          {/* Operational Status */}
          <DeviceStatusCard device={device} />

          {/* Network */}
          <DeviceNetworkCard device={device} />

          {/* Hardware */}
          <DeviceHardwareCard device={device} />

          {/* Interfaces */}
          <DeviceInterfacesCard device={device} />

          {/* Timeline */}
          <DeviceTimeline device={device} />

          {/* Actions */}
          <DeviceActions
            device={device}
            onLocate={onLocate}
            onRestart={onRestart}
            onOpenWeb={onOpenWeb}
            onSSH={onSSH}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      )}
    </Drawer>
  );
}