/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceTable
 * Module: Inventory
 *
 * Responsibility:
 * Displays the inventory device list.
 * ------------------------------------------------------------
 */

import DeviceRow from "./DeviceRow";

import {
  Card,
  EmptyState,
} from "@/components/ui";

export default function DeviceTable({
  devices = [],
  selectedDevices = [],
  onSelectDevice,
  onSelectAll,
}) {
  const allSelected =
    devices.length > 0 &&
    selectedDevices.length === devices.length;

  const partiallySelected =
    selectedDevices.length > 0 &&
    !allSelected;

  return (
    <Card noPadding className="overflow-hidden">
      {devices.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            {/* ------------------------------------------------ */}
            {/* Header                                           */}
            {/* ------------------------------------------------ */}

            <thead className="border-b border-white/10 bg-white/[0.03]">
              <tr className="text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">

                {/* Select All */}

                <th className="w-14 px-6 py-4">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    ref={(el) => {
                      if (el) {
                        el.indeterminate =
                          partiallySelected;
                      }
                    }}
                    onChange={onSelectAll}
                    className="h-4 w-4 rounded border-white/20 bg-transparent text-cyan-500"
                  />
                </th>

                <th className="px-6 py-4">
                  Device
                </th>

                <th className="px-6 py-4">
                  Vendor
                </th>

                <th className="px-6 py-4">
                  Model
                </th>

                <th className="px-6 py-4">
                  Type
                </th>

                <th className="px-6 py-4">
                  Management IP
                </th>

                <th className="px-6 py-4">
                  MAC Address
                </th>

                <th className="px-6 py-4">
                  Status
                </th>
              </tr>
            </thead>

            {/* ------------------------------------------------ */}
            {/* Body                                             */}
            {/* ------------------------------------------------ */}

            <tbody className="divide-y divide-white/5">
              {devices.map((device) => (
                <DeviceRow
                  key={device.id}
                  device={device}
                  selected={selectedDevices.includes(device.id)}
                  onSelect={onSelectDevice}
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