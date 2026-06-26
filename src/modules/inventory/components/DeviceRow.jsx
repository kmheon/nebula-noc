/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: DeviceRow
 * Module: Inventory
 *
 * Responsibility:
 * Renders a single device row.
 * ------------------------------------------------------------
 */

import { MapPin } from "lucide-react";

import DeviceTypeChip from "./DeviceTypeChip";

import {
  Badge,
  StatusDot,
} from "@/components/ui";

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

  return (
    <tr
      onClick={() => onClick?.(device)}
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

      <td className="w-14 px-6 py-5">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onSelect?.(id)}
          onClick={(e) => e.stopPropagation()}
          className="h-4 w-4 rounded border-white/20 bg-transparent text-cyan-500"
        />
      </td>

      {/* ------------------------------------------------ */}
      {/* Device                                           */}
      {/* ------------------------------------------------ */}

      <td className="px-6 py-5">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-white transition-colors duration-200 group-hover:text-cyan-300">
            {name}
          </span>

          <Badge
            size="sm"
            variant="info"
            icon={MapPin}
            className="w-fit"
          >
            {site || "Default Site"}
          </Badge>
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

      {/* Type */}

      <td className="px-6 py-5">
        <DeviceTypeChip type={type} />
      </td>

      {/* ------------------------------------------------ */}
      {/* Management IP                                    */}
      {/* ------------------------------------------------ */}

      <td className="px-6 py-5">
        <span className="font-mono text-sm text-cyan-300">
          {ip || "—"}
        </span>
      </td>

      {/* ------------------------------------------------ */}
      {/* MAC Address                                      */}
      {/* ------------------------------------------------ */}

      <td className="px-6 py-5">
        <span className="font-mono text-sm text-slate-400">
          {mac || "—"}
        </span>
      </td>

      {/* ------------------------------------------------ */}
      {/* Status                                            */}
      {/* ------------------------------------------------ */}

      <td className="px-6 py-5">
        <div className="flex flex-col items-start gap-1">
          <StatusDot
            status={normalizedStatus}
          />

          <span className="pl-5 text-[11px] text-slate-500">
            {lastSeen || "Unknown"}
          </span>
        </div>
      </td>
    </tr>
  );
}