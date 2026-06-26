/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceRow
 * Module: Inventory
 *
 * Responsibility:
 * Renders a single device row within the inventory table.
 *
 * Features:
 * - Device selection
 * - Device identity
 * - Vendor & model
 * - Device type
 * - Health status
 * - Row click navigation
 *
 * Dependencies:
 * - DeviceTypeChip
 * - StatusDot
 * ------------------------------------------------------------
 */

import DeviceTypeChip from "./DeviceTypeChip";

import { StatusDot } from "@/components/ui";

export default function DeviceRow({
  device,
  selected = false,
  onSelect,
  onClick,
}) {
  const {
    id,
    name,
    vendor,
    model,
    type,
    ip,
    mac,
    site,
    status,
    lastSeen,
  } = device;

  const normalizedStatus =
    (status || "unknown").toLowerCase();

  const handleRowClick = (event) => {
    if (event.target.closest("input")) {
      return;
    }

    onClick?.(device);
  };

  return (
    <tr
      onClick={handleRowClick}
      className={`
        group
        cursor-pointer
        border-b
        border-white/5
        transition-all
        duration-200
        hover:bg-white/[0.045]
        ${
          selected
            ? "border-l-2 border-cyan-400 bg-cyan-500/10"
            : ""
        }
      `}
    >
      {/* ------------------------------------------------ */}
      {/* Selection                                        */}
      {/* ------------------------------------------------ */}

      <td className="px-6 py-5">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onSelect?.(id)}
          className="
            h-4
            w-4
            rounded
            border-white/20
            bg-transparent
            text-cyan-500
            focus:ring-cyan-500
          "
        />
      </td>

      {/* ------------------------------------------------ */}
      {/* Device Identity                                  */}
      {/* ------------------------------------------------ */}

      <td className="px-6 py-5">
        <div className="flex flex-col gap-0.5">
          <span className="font-semibold text-white transition-colors duration-200 group-hover:text-cyan-300">
            {name}
          </span>

          <span className="font-mono text-xs tracking-wide text-slate-500">
            {ip}
          </span>
        </div>
      </td>

      {/* Vendor */}

      <td className="px-6 py-5">
        <span className="font-medium text-slate-300">
          {vendor || "—"}
        </span>
      </td>

      {/* Model */}

      <td className="px-6 py-5">
        <span className="text-slate-300">
          {model || "—"}
        </span>
      </td>

      {/* Device Type */}

      <td className="px-6 py-5">
        <DeviceTypeChip type={type} />
      </td>

      {/* MAC */}

      <td className="px-6 py-5">
        <span className="font-mono text-sm text-slate-400">
          {mac || "—"}
        </span>
      </td>

      {/* Site */}

      <td className="px-6 py-5">
        <span className="text-slate-300">
          {site || "Default"}
        </span>
      </td>

      {/* Health */}

      <td className="px-6 py-5">
        <div className="flex flex-col items-start gap-1">
          <StatusDot
            status={normalizedStatus}
            compact
          />

          {lastSeen && (
            <span className="pl-5 text-[11px] text-slate-500">
              {lastSeen}
            </span>
          )}
        </div>
      </td>
    </tr>
  );
}