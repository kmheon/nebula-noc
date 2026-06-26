import {
  Globe,
  LocateFixed,
  Pencil,
  Power,
  RefreshCw,
  Terminal,
  Trash2,
} from "lucide-react";

export default function DeviceActions({
  device,
  onLocate,
  onRestart,
  onOpenWeb,
  onSSH,
  onEdit,
  onDelete,
}) {
  if (!device) return null;

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4">
        <h3 className="text-lg font-semibold text-white">
          Actions
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Execute common management actions for this device.
        </p>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
        <ActionButton
          icon={LocateFixed}
          title="Locate Device"
          description="Blink LEDs or identify the device."
          onClick={() => onLocate?.(device)}
        />

        <ActionButton
          icon={RefreshCw}
          title="Refresh"
          description="Reload the latest device information."
          onClick={() => window.location.reload()}
        />

        <ActionButton
          icon={Power}
          title="Restart"
          description="Reboot the device safely."
          onClick={() => onRestart?.(device)}
        />

        <ActionButton
          icon={Terminal}
          title="SSH"
          description="Open an SSH session."
          onClick={() => onSSH?.(device)}
        />

        <ActionButton
          icon={Globe}
          title="Open Web UI"
          description="Launch the device web interface."
          onClick={() => onOpenWeb?.(device)}
        />

        <ActionButton
          icon={Pencil}
          title="Edit"
          description="Modify device information."
          onClick={() => onEdit?.(device)}
        />
      </div>

      <div className="border-t border-red-500/10 bg-red-500/[0.03] p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="font-semibold text-red-300">
              Danger Zone
            </h4>

            <p className="mt-1 text-sm text-slate-400">
              Permanently remove this device from Nebula.
              This action cannot be undone.
            </p>
          </div>

          <button
            onClick={() => onDelete?.(device)}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-red-500/20
              bg-red-500/10
              px-5
              py-3
              text-sm
              font-medium
              text-red-300
              transition
              hover:bg-red-500/20
              hover:text-red-200
            "
          >
            <Trash2 className="h-4 w-4" />

            Delete Device
          </button>
        </div>
      </div>
    </section>
  );
}

function ActionButton({
  icon: Icon,
  title,
  description,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        group
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        text-left
        transition-all
        duration-200
        hover:border-cyan-500/20
        hover:bg-cyan-500/5
      "
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-cyan-500/20 group-hover:bg-cyan-500/10">
        <Icon className="h-5 w-5 text-cyan-400" />
      </div>

      <h4 className="font-semibold text-white">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </button>
  );
}