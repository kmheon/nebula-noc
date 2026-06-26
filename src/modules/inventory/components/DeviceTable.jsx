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
 * - Premium enterprise table
 * - Responsive layout
 * - Shared Card component
 * - Shared EmptyState component
 * - Reusable DeviceRow rendering
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
      {devices.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            {/* ------------------------------------------------ */}
            {/* Table Header                                     */}
            {/* ------------------------------------------------ */}

            <thead className="border-b border-white/10 bg-white/[0.03]">
              <tr className="text-left">
                <th className="w-14 px-6 py-4" />

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Device
                </th>

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Vendor
                </th>

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Model
                </th>

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Type
                </th>

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  MAC Address
                </th>

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Site
                </th>

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Health
                </th>
              </tr>
            </thead>

            {/* ------------------------------------------------ */}
            {/* Table Body                                       */}
            {/* ------------------------------------------------ */}

            <tbody className="divide-y divide-white/5">
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