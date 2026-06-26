import DeviceRow from "./DeviceRow";

export default function DeviceTable({
  devices = [],
  selectedDevices = [],
  onSelectDevice,
  onSelectAll,
  onRowClick,
}) {
  const totalDevices = devices.length;

  const allSelected =
    totalDevices > 0 &&
    selectedDevices.length === totalDevices;

  const indeterminate =
    selectedDevices.length > 0 &&
    selectedDevices.length < totalDevices;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/70 backdrop-blur-xl">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="border-b border-white/10 bg-white/[0.03]">
            <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
              {/* Select */}
              <th className="w-14 px-5 py-4">
                <input
                  ref={(el) => {
                    if (el) {
                      el.indeterminate = indeterminate;
                    }
                  }}
                  type="checkbox"
                  checked={allSelected}
                  onChange={onSelectAll}
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
              </th>

              <th className="px-5 py-4">Device</th>
              <th className="px-5 py-4">Vendor</th>
              <th className="px-5 py-4">Model</th>
              <th className="px-5 py-4">Type</th>
              <th className="px-5 py-4">MAC Address</th>
              <th className="px-5 py-4">Site</th>
              <th className="px-5 py-4">Health</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {devices.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-6 py-20 text-center"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="rounded-full border border-white/10 bg-white/5 p-4">
                      <svg
                        className="h-8 w-8 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7M9 11h6"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        No devices found
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Devices will appear here once they are
                        discovered or added.
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            ) : (
              devices.map((device) => (
                <DeviceRow
                  key={device.id}
                  device={device}
                  selected={selectedDevices.includes(device.id)}
                  onSelect={onSelectDevice}
                  onClick={onRowClick}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}