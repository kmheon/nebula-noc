/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: Tooltip
 * Module: Shared UI
 *
 * Responsibility:
 * Displays contextual information for controls,
 * icons and actions.
 *
 * Features:
 * - Top / Bottom / Left / Right placement
 * - Hover & keyboard focus support
 * - Accessible
 * - Lightweight (no external dependency)
 *
 * Used By:
 * - Inventory
 * - Monitoring
 * - Alerts
 * - Device Drawer
 * - Settings
 * - Navigation
 *
 * Future:
 * - Smart viewport collision detection
 * - Delay configuration
 * - Rich content support
 * ------------------------------------------------------------
 */

import clsx from "clsx";

const positions = {
  top: {
    tooltip:
      "bottom-full left-1/2 -translate-x-1/2 mb-2",
    arrow:
      "top-full left-1/2 -translate-x-1/2 border-t-black/90 border-x-transparent border-b-transparent",
  },

  bottom: {
    tooltip:
      "top-full left-1/2 -translate-x-1/2 mt-2",
    arrow:
      "bottom-full left-1/2 -translate-x-1/2 border-b-black/90 border-x-transparent border-t-transparent",
  },

  left: {
    tooltip:
      "right-full top-1/2 -translate-y-1/2 mr-2",
    arrow:
      "left-full top-1/2 -translate-y-1/2 border-l-black/90 border-y-transparent border-r-transparent",
  },

  right: {
    tooltip:
      "left-full top-1/2 -translate-y-1/2 ml-2",
    arrow:
      "right-full top-1/2 -translate-y-1/2 border-r-black/90 border-y-transparent border-l-transparent",
  },
};

export default function Tooltip({
  content,
  children,
  placement = "top",
  disabled = false,
}) {
  if (disabled || !content) {
    return children;
  }

  const config =
    positions[placement] ?? positions.top;

  return (
    <div className="group relative inline-flex">
      {/* ---------------------------------------------------- */}
      {/* Trigger                                               */}
      {/* ---------------------------------------------------- */}

      {children}

      {/* ---------------------------------------------------- */}
      {/* Tooltip                                               */}
      {/* ---------------------------------------------------- */}

      <div
        className={clsx(
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-lg bg-black/90 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-xl transition-all duration-150 group-hover:opacity-100 group-focus-within:opacity-100",
          config.tooltip
        )}
        role="tooltip"
      >
        {content}

        {/* ------------------------------------------------ */}
        {/* Arrow                                            */}
        {/* ------------------------------------------------ */}

        <div
          className={clsx(
            "absolute h-0 w-0 border-[6px]",
            config.arrow
          )}
        />
      </div>
    </div>
  );
}