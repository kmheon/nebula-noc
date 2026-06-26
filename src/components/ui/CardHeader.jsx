/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: CardHeader
 * Module: Shared UI
 *
 * Responsibility:
 * Provides a standardized header for all Card components.
 *
 * Features:
 * - Title
 * - Description
 * - Optional icon
 * - Optional actions
 * - Optional divider
 *
 * Used By:
 * - Inventory
 * - Monitoring
 * - Alerts
 * - Assets
 * - Device Drawer
 * - Settings
 *
 * Dependencies:
 * - Card
 *
 * ------------------------------------------------------------
 */

import clsx from "clsx";

export default function CardHeader({
  title,
  description,
  icon: Icon,
  actions,
  divider = true,
  className = "",
}) {
  return (
    <>
      {/* ---------------------------------------------------- */}
      {/* Header                                                */}
      {/* ---------------------------------------------------- */}

      <div
        className={clsx(
          "flex items-start justify-between gap-4 px-6 py-5",
          className
        )}
      >
        {/* ------------------------------------------------ */}
        {/* Left Content                                     */}
        {/* ------------------------------------------------ */}

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                <Icon className="h-5 w-5 text-cyan-400" />
              </div>
            )}

            <div>
              <h2 className="text-lg font-semibold text-white">
                {title}
              </h2>

              {description && (
                <p className="mt-1 text-sm text-slate-400">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* Right Actions                                    */}
        {/* ------------------------------------------------ */}

        {actions && (
          <div className="flex shrink-0 items-center gap-2">
            {actions}
          </div>
        )}
      </div>

      {/* ---------------------------------------------------- */}
      {/* Divider                                               */}
      {/* ---------------------------------------------------- */}

      {divider && <div className="border-b border-white/10" />}
    </>
  );
}