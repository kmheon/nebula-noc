/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: EmptyState
 * Module: Shared UI
 *
 * Responsibility:
 * Displays a consistent empty state across the application.
 *
 * Features:
 * - Optional icon
 * - Title & description
 * - Primary action
 * - Secondary action
 * - Reusable illustration container
 *
 * Used By:
 * - Inventory
 * - Monitoring
 * - Alerts
 * - Sites
 * - Assets
 * - Reports
 * - Search Results
 * - Device Drawer
 *
 * Dependencies:
 * - Button
 *
 * ------------------------------------------------------------
 */

import { Inbox } from "lucide-react";

import Button from "./Button";

export default function EmptyState({
  icon: Icon = Inbox,
  title = "Nothing to show",
  description = "There is currently no data available.",
  action,
  secondaryAction,
  children,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center px-8 py-16 text-center ${className}`}
    >
      {/* ---------------------------------------------------- */}
      {/* Illustration                                          */}
      {/* ---------------------------------------------------- */}

      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
        {children ? (
          children
        ) : (
          <Icon className="h-10 w-10 text-slate-500" />
        )}
      </div>

      {/* ---------------------------------------------------- */}
      {/* Content                                               */}
      {/* ---------------------------------------------------- */}

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-md leading-7 text-slate-400">
        {description}
      </p>

      {/* ---------------------------------------------------- */}
      {/* Actions                                               */}
      {/* ---------------------------------------------------- */}

      {(action || secondaryAction) && (
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {action && (
            <Button
              variant={action.variant ?? "primary"}
              leftIcon={action.icon}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          )}

          {secondaryAction && (
            <Button
              variant={
                secondaryAction.variant ?? "secondary"
              }
              leftIcon={secondaryAction.icon}
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}