import DeviceHealth from "./DeviceHealth";
import DeviceTypeChip from "./DeviceTypeChip";

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

  const handleRowClick = (e) => {
    // Don't trigger row click when clicking the checkbox
    if (e.target.closest("input")) return;

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
        transition-colors
        duration-150
        hover:bg-white/[0.035]
        ${selected ? "bg-cyan-500/8" : ""}
      `}
    >
      {/* Select */}
      <td className="px-5 py-4">
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

      {/* Device Identity */}
      <td className="px-5 py-4">
        <div className="flex flex-col">
          <span className="font-medium text-white transition-colors group-hover:text-cyan-300">
            {name}
          </span>

          <span className="mt-1 font-mono text-xs text-slate-500">
            {ip}
          </span>
        </div>
      </td>

      {/* Vendor */}
      <td className="px-5 py-4">
        <span className="text-slate-200">
          {vendor || "—"}
        </span>
      </td>

      {/* Model */}
      <td className="px-5 py-4">
        <span className="font-medium text-slate-300">
          {model || "—"}
        </span>
      </td>

      {/* Device Type */}
      <td className="px-5 py-4">
        <DeviceTypeChip type={type} />
      </td>

      {/* MAC */}
      <td className="px-5 py-4">
        <span className="font-mono text-sm text-slate-400">
          {mac || "—"}
        </span>
      </td>

      {/* Site */}
      <td className="px-5 py-4">
        <span className="text-slate-300">
          {site || "Default"}
        </span>
      </td>

      {/* Health */}
      <td className="px-5 py-4">
        <DeviceHealth
          status={status}
          lastSeen={lastSeen}
          compact
        />
      </td>
    </tr>
  );
}