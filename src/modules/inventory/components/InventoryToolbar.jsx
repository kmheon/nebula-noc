import {
  Search,
  Filter,
  RefreshCw,
  Download,
  Plus,
  SlidersHorizontal,
  X,
} from "lucide-react";

export default function InventoryToolbar({
  search = "",
  onSearchChange,
  filter = "all",
  onFilterChange,
  totalDevices = 0,
  selectedCount = 0,
  onRefresh,
  onExport,
  onAddDevice,
  loading = false,
}) {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/70 backdrop-blur-xl">
      <div className="flex flex-col gap-5 p-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center">
          {/* Search */}
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              value={search}
              placeholder="Search devices, vendor, model, IP..."
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                py-2.5
                pl-10
                pr-10
                text-sm
                text-white
                placeholder:text-slate-500
                outline-none
                transition
                focus:border-cyan-500/40
                focus:bg-white/10
              "
            />

            {search && (
              <button
                onClick={() => onSearchChange?.("")}
                className="
                  absolute
                  right-2
                  top-1/2
                  -translate-y-1/2
                  rounded-md
                  p-1
                  text-slate-500
                  transition
                  hover:bg-white/5
                  hover:text-white
                "
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filter */}
          <div className="relative">
            <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

            <select
              value={filter}
              onChange={(e) => onFilterChange?.(e.target.value)}
              className="
                min-w-[180px]
                appearance-none
                rounded-xl
                border
                border-white/10
                bg-white/5
                py-2.5
                pl-10
                pr-10
                text-sm
                text-slate-200
                outline-none
                transition
                focus:border-cyan-500/40
                focus:bg-white/10
              "
            >
              <option value="all">All Devices</option>
              <option value="online">Online</option>
              <option value="warning">Warning</option>
              <option value="offline">Offline</option>
              <option value="provisioning">Provisioning</option>
              <option value="updating">Updating</option>
            </select>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center justify-end gap-3">
          <div className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 md:flex md:items-center md:gap-2">
            <SlidersHorizontal className="h-4 w-4 text-cyan-400" />

            <span>
              <span className="font-semibold text-white">
                {totalDevices}
              </span>{" "}
              Devices
            </span>

            {selectedCount > 0 && (
              <>
                <span className="text-slate-600">•</span>

                <span className="font-medium text-cyan-300">
                  {selectedCount} Selected
                </span>
              </>
            )}
          </div>

          <button
            onClick={onRefresh}
            disabled={loading}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-2.5
              text-sm
              text-slate-300
              transition
              hover:bg-white/10
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            <RefreshCw
              className={`h-4 w-4 ${
                loading ? "animate-spin" : ""
              }`}
            />

            Refresh
          </button>

          <button
            onClick={onExport}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-2.5
              text-sm
              text-slate-300
              transition
              hover:bg-white/10
              hover:text-white
            "
          >
            <Download className="h-4 w-4" />

            Export
          </button>

          <button
            onClick={onAddDevice}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-cyan-500
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-cyan-400
              active:scale-[0.98]
            "
          >
            <Plus className="h-4 w-4" />

            Add Device
          </button>
        </div>
      </div>
    </div>
  );
}