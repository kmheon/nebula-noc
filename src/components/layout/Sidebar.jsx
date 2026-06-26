import {
  LayoutDashboard,
  Activity,
  Monitor,
  Shield,
  Network,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Monitoring", icon: Activity },
  { name: "Devices", icon: Monitor },
  { name: "Security", icon: Shield },
  { name: "Network", icon: Network },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-[#0B1220] border-r border-cyan-500/20 flex flex-col">
      <div className="h-20 flex items-center px-8 border-b border-cyan-500/20">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">
            Nebula NOC
          </h1>

          <p className="text-xs text-gray-400 mt-1">
            Network Operations Center
          </p>
        </div>
      </div>

      <nav className="flex-1 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="w-full flex items-center gap-4 px-8 py-4 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-cyan-500/20">
        <div className="rounded-xl bg-cyan-500/10 p-4 border border-cyan-500/20">
          <p className="text-sm text-cyan-300">System Status</p>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-sm text-white">
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}