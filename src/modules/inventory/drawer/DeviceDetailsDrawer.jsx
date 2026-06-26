import { X } from "lucide-react";

import DeviceHeader from "./DeviceHeader";
import DeviceStatusCard from "./DeviceStatusCard";
import DeviceNetworkCard from "./DeviceNetworkCard";
import DeviceHardwareCard from "./DeviceHardwareCard";
import DeviceInterfacesCard from "./DeviceInterfacesCard";
import DeviceTimeline from "./DeviceTimeline";
import DeviceActions from "./DeviceActions";

export default function DeviceDetailsDrawer({
  open = false,
  device = null,
  onClose,
}) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40
          bg-black/60
          backdrop-blur-sm
          transition-all duration-300
          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-50
          flex
          h-screen
          w-full
          max-w-2xl
          flex-col
          border-l
          border-white/10
          bg-[#0b1220]/95
          backdrop-blur-2xl
          shadow-2xl
          transition-transform
          duration-300
          ${
            open ? "translate-x-0" : "translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Device Details
            </p>

            <h2 className="mt-1 text-xl font-semibold text-white">
              {device?.name || "No Device Selected"}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-2
              text-slate-400
              transition
              hover:bg-white/10
              hover:text-white
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {!device ? (
            <div className="flex h-full items-center justify-center px-8">
              <div className="max-w-sm text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <X className="h-8 w-8 text-slate-500" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  No Device Selected
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Select a device from the inventory table to
                  view detailed information, health metrics,
                  network configuration and available actions.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-5 p-6">
              <DeviceHeader device={device} />

              <DeviceStatusCard device={device} />

              <DeviceNetworkCard device={device} />

              <DeviceHardwareCard device={device} />

              <DeviceInterfacesCard device={device} />

              <DeviceTimeline device={device} />

              <DeviceActions device={device} />
            </div>
          )}
        </div>
      </aside>
    </>
  );
}