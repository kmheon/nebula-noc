/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceTable
 * Module: Inventory
 *
 * Responsibility:
 * Displays the inventory device list.
 *
 * Features:
 * - Shared Card component
 * - Shared EmptyState component
 * - Responsive table
 * - Reusable DeviceRow rendering
 *
 * Dependencies:
 * - Card
 * - EmptyState
 * - DeviceRow
 * ------------------------------------------------------------
 */

import DeviceRow from "./DeviceRow";

import {
  Card,
  EmptyState,
} from "@/components/ui";

export default function DeviceTable({
  devices = [],
  selectedDevice,
  onSelectDevice,
}) {
  return (
    <Card noPadding className="overflow-hidden">
      {/* ------------------------------------------------ */}
      {/* Table                                            */}
      {/* ------------------------------------------------ */}

      {devices.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            {/* ---------------------------------------- */}
            {/* Header                                   */}
            {/* ---------------------------------------- */}

            <thead className="border-b border-white/10 bg-white/[0.02]">
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="px-6 py-4">Device</th>

                <th className="px-6 py-4">Vendor</th>

                <th className="px-6 py-4">Model</th>

                <th className="px-6 py-4">Type</th>

                <th className="px-6 py-4">IP Address</th>

                <th className="px-6 py-4">Health</th>
              </tr>
            </thead>

            {/* ---------------------------------------- */}
            {/* Body                                     */}
            {/* ---------------------------------------- */}

            <tbody>
              {devices.map((device) => (
                <DeviceRow
                  key={device.id}
                  device={device}
                  selected={
                    selectedDevice?.id === device.id
                  }
                  onClick={() =>
                    onSelectDevice?.(device)
                  }
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState
          title="No Devices Found"
          description="Devices matching the current filters will appear here."
        />
      )}
    </Card>
  );
}