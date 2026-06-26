/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: Modal
 * Module: Shared UI
 *
 * Responsibility:
 * Generic modal dialog used throughout Nebula.
 *
 * Features:
 * - Backdrop overlay
 * - ESC key support
 * - Click outside to close
 * - Scroll locking
 * - Configurable size
 * - Optional footer actions
 *
 * Used By:
 * - Settings
 * - Create Device
 * - Edit Device
 * - Site Management
 * - User Management
 * - Reports
 *
 * Future:
 * - Focus trap
 * - Framer Motion animations
 * - Nested modal support
 * ------------------------------------------------------------
 */

import { useEffect } from "react";
import clsx from "clsx";
import { X } from "lucide-react";

const sizes = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export default function Modal({
  open = false,
  title,
  description,
  size = "md",
  children,
  footer,
  showClose = true,
  closeOnOverlay = true,
  onClose,
}) {
  /**
   * Lock page scrolling while the modal is open.
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
   * Close the modal with the Escape key.
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
          "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {/* ------------------------------------------------ */}
        {/* Modal                                             */}
        {/* ------------------------------------------------ */}

        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "mx-4 flex max-h-[90vh] w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220] shadow-2xl transition-all duration-300",
            sizes[size],
            open
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0"
          )}
        >
          {/* -------------------------------------------- */}
          {/* Header                                       */}
          {/* -------------------------------------------- */}

          {(title || description || showClose) && (
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
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          )}

          {/* -------------------------------------------- */}
          {/* Content                                      */}
          {/* -------------------------------------------- */}

          <div className="flex-1 overflow-y-auto p-6">
            {children}
          </div>

          {/* -------------------------------------------- */}
          {/* Footer                                       */}
          {/* -------------------------------------------- */}

          {footer && (
            <div className="border-t border-white/10 px-6 py-5">
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  );
}