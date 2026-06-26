import { Bell, Clock3, Search, ShieldCheck } from "lucide-react";

export default function Topbar() {
  const now = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-cyan-500/20 bg-[#05070B]/80 px-8 backdrop-blur-xl">

      <div>
        <h2 className="text-2xl font-bold text-white">
          Operations Overview
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Monitor • Analyze • Respond
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-[#0B1220] px-4 py-2">
          <Search size={18} className="text-gray-400" />

          <input
            className="w-64 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            placeholder="Search devices, IP, MAC..."
          />
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-[#0B1220] px-4 py-2">
          <Clock3 size={16} className="text-cyan-400" />
          <span className="text-sm">{now}</span>
        </div>

        <button className="relative rounded-xl border border-cyan-500/20 bg-[#0B1220] p-3 transition hover:border-cyan-400">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-2">
          <ShieldCheck size={18} className="text-green-400" />

          <span className="text-sm text-green-400">
            Secure
          </span>
        </div>

      </div>

    </header>
  );
}