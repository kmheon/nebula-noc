/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: Drawer
 * Module: Shared UI
 *
 * Responsibility:
 * Premium right-side drawer used throughout Nebula.
 *
 * Features:
 * - Backdrop
 * - Smooth animation
 * - Header
 * - Scrollable content
 * - Responsive widths
 * ------------------------------------------------------------
 */

import { X } from "lucide-react";
import clsx from "clsx";

const widths = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-full",
};

export default function Drawer({
  open = false,
  title,
  description,
  children,
  width = "lg",
  onClose,
}) {
  return (
    <>
      {/* ------------------------------------------------ */}
      {/* Backdrop                                         */}
      {/* ------------------------------------------------ */}

      <div
        onClick={onClose}
        className={clsx(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      {/* ------------------------------------------------ */}
      {/* Drawer                                           */}
      {/* ------------------------------------------------ */}

      <aside
        className={clsx(
          "fixed right-0 top-0 z-50 flex h-screen w-full flex-col border-l border-white/10 bg-[#0b1220]/95 shadow-2xl backdrop-blur-xl transition-transform duration-300",
          widths[width],
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* -------------------------------------------- */}
        {/* Header                                       */}
        {/* -------------------------------------------- */}

        <div className="flex items-start justify-between border-b border-white/10 px-8 py-6">
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-white">
              {title}
            </h2>

            {description && (
              <p className="mt-1 text-sm text-slate-400">
                {description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="
              rounded-xl
              p-2
              text-slate-400
              transition-all
              duration-200
              hover:bg-white/5
              hover:text-white
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* -------------------------------------------- */}
        {/* Content                                      */}
        {/* -------------------------------------------- */}

        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </aside>
    </>
  );
}