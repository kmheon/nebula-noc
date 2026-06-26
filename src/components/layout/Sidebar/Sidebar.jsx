/**************************************************************************
 * File: Sidebar.jsx
 * Folder: src/components/layout/Sidebar
 * Project: Nebula NOC
 * Version: 1.0.0
 *
 * Description
 * ------------------------------------------------------------------------
 * Main application sidebar.
 *
 * Responsibilities
 * ------------------------------------------------------------------------
 * - Display application branding
 * - Render navigation items
 * - Display system status
 *
 * This component NEVER contains hardcoded navigation.
 * All navigation comes from src/constants/navigation.js
 **************************************************************************/

import { NAVIGATION } from "../../../constants/navigation";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-[#0B1220] border-r border-cyan-500/20 flex flex-col">

      {/* ------------------------------------------------------------------
          Logo
      ------------------------------------------------------------------- */}

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

      {/* ------------------------------------------------------------------
          Navigation
      ------------------------------------------------------------------- */}

      <nav className="flex-1 py-6 space-y-2 px-4">

        {NAVIGATION
          .filter(item => item.enabled)
          .map(item => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              active={item.id === "dashboard"}
              onClick={() => {}}
            />
          ))}

      </nav>

      {/* ------------------------------------------------------------------
          Footer
      ------------------------------------------------------------------- */}

      <div className="p-6 border-t border-cyan-500/20">

        <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-4">

          <p className="text-sm text-cyan-300">
            Nebula Core
          </p>

          <div className="flex items-center gap-2 mt-2">

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            <span className="text-sm text-white">
              Operational
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}