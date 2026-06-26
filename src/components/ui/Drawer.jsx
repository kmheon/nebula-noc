/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: Drawer
 * Module: Shared UI
 *
 * Responsibility:
 * Generic slide-over drawer used throughout Nebula.
 *
 * Features:
 * - Right-side slide panel
 * - Backdrop overlay
 * - ESC key support
 * - Click outside to close
 * - Scroll locking
 * - Configurable width
 * - Reusable header
 *
 * Used By:
 * - Device Details
 * - Alert Details
 * - Site Details
 * - Asset Details
 * - User Details
 * - Settings
 *
 * Future Integrations:
 * - Framer Motion
 * - Focus Trap
 * - Keyboard Navigation
 * ------------------------------------------------------------
 */

import { useEffect } from "react";
import clsx from "clsx";
import { X } from "lucide-react";

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
  width = "lg",
  children,
  actions,
  showClose = true,
  closeOnOverlay = true,
  onClose,
}) {
  /**
   * ----------------------------------------------------------
   * Lock body scrolling while drawer is open.
   * ----------------------------------------------------------
   */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /**
   * ----------------------------------------------------------
   * Close on Escape key.
   * ----------------------------------------------------------
   */
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [open, onClose]);

  return (
    <>
      {/* ---------------------------------------------------- */}
      {/* Overlay                                              */}
      {/* ---------------------------------------------------- */}

      <div
        onClick={
          closeOnOverlay ? onClose : undefined
        }
        className={clsx(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      {/* ---------------------------------------------------- */}
      {/* Drawer Panel                                         */}
      {/* ---------------------------------------------------- */}

      <aside
        className={clsx(
          "fixed right-0 top-0 z-50 flex h-screen w-full flex-col border-l border-white/10 bg-[#0b1220]/95 shadow-2xl backdrop-blur-xl transition-transform duration-300",
          widths[width],
          open
            ? "translate-x-0"
            : "translate-x-full"
        )}
      >
        {/* ------------------------------------------------ */}
        {/* Header                                           */}
        {/* ------------------------------------------------ */}

        {(title || description || actions || showClose) && (
          <>
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
              <div className="min-w-0 flex-1">
                {title && (
                  <h2 className="text-xl font-semibold text-white">
                    {title}
                  </h2>
                )}

                {description && (
                  <p className="mt-2 text-sm text-slate-400">
                    {description}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                {actions}

                {showClose && (
                  <button
                    onClick={onClose}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      p-2
                      text-slate-400
                      transition-colors
                      hover:bg-white/10
                      hover:text-white
                    "
                    aria-label="Close drawer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        {/* ------------------------------------------------ */}
        {/* Content                                          */}
        {/* ------------------------------------------------ */}

        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </aside>
    </>
  );
}