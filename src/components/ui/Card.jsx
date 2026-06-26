/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: Card
 * Module: Shared UI
 *
 * Responsibility:
 * Provides the base card container used throughout Nebula.
 *
 * Features:
 * - Nebula glass styling
 * - Optional hover effect
 * - Optional padding removal
 * - Optional clickable state
 * - Reusable across all modules
 *
 * Used By:
 * - Inventory
 * - Monitoring
 * - Alerts
 * - Assets
 * - Settings
 * - Device Drawer
 *
 * ------------------------------------------------------------
 */

import clsx from "clsx";

export default function Card({
  children,
  className = "",
  hover = false,
  clickable = false,
  noPadding = false,
  noBorder = false,
  transparent = false,
  as: Component = "section",
  ...props
}) {
  return (
    <Component
      className={clsx(
        // ----------------------------------------------------
        // Base Nebula Card
        // ----------------------------------------------------
        "overflow-hidden rounded-2xl",

        // ----------------------------------------------------
        // Surface
        // ----------------------------------------------------
        transparent
          ? "bg-transparent"
          : "bg-white/[0.03] backdrop-blur-xl",

        // ----------------------------------------------------
        // Border
        // ----------------------------------------------------
        !noBorder && "border border-white/10",

        // ----------------------------------------------------
        // Padding
        // ----------------------------------------------------
        !noPadding && "p-6",

        // ----------------------------------------------------
        // Interaction
        // ----------------------------------------------------
        hover &&
          "transition-all duration-200 hover:border-cyan-500/20 hover:bg-white/[0.045]",

        clickable &&
          "cursor-pointer transition-all duration-200 hover:border-cyan-500/20 hover:bg-white/[0.045] active:scale-[0.995]",

        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}