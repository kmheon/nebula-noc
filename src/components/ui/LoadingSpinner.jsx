/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: LoadingSpinner
 * Module: Shared UI
 *
 * Responsibility:
 * Standard loading indicator used throughout Nebula.
 *
 * Features:
 * - Multiple sizes
 * - Optional label
 * - Inline or centered layouts
 * - Accessible
 *
 * Used By:
 * - Inventory
 * - Monitoring
 * - Alerts
 * - Assets
 * - Authentication
 * - Device Drawer
 * - Dialogs
 *
 * ------------------------------------------------------------
 */

import clsx from "clsx";
import { Loader2 } from "lucide-react";

const sizes = {
  sm: {
    spinner: "h-4 w-4",
    text: "text-xs",
  },

  md: {
    spinner: "h-6 w-6",
    text: "text-sm",
  },

  lg: {
    spinner: "h-8 w-8",
    text: "text-base",
  },

  xl: {
    spinner: "h-12 w-12",
    text: "text-lg",
  },
};

export default function LoadingSpinner({
  size = "md",
  label,
  centered = false,
  fullScreen = false,
  className = "",
}) {
  const config = sizes[size] ?? sizes.md;

  return (
    <div
      className={clsx(
        // ----------------------------------------------------
        // Base Layout
        // ----------------------------------------------------
        "flex flex-col items-center gap-3",

        // ----------------------------------------------------
        // Centered Container
        // ----------------------------------------------------
        centered && "justify-center",

        // ----------------------------------------------------
        // Full Screen
        // ----------------------------------------------------
        fullScreen && "min-h-screen justify-center",

        className
      )}
      role="status"
      aria-live="polite"
    >
      {/* ---------------------------------------------------- */}
      {/* Spinner                                               */}
      {/* ---------------------------------------------------- */}

      <Loader2
        className={clsx(
          config.spinner,
          "animate-spin text-cyan-400"
        )}
      />

      {/* ---------------------------------------------------- */}
      {/* Loading Label                                         */}
      {/* ---------------------------------------------------- */}

      {label && (
        <p
          className={clsx(
            config.text,
            "font-medium text-slate-400"
          )}
        >
          {label}
        </p>
      )}

      {/* Screen Reader */}
      <span className="sr-only">
        Loading...
      </span>
    </div>
  );
}