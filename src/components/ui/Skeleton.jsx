/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: Skeleton
 * Module: Shared UI
 *
 * Responsibility:
 * Displays lightweight loading placeholders while data
 * is being fetched.
 *
 * Features:
 * - Multiple predefined variants
 * - Custom width & height
 * - Rounded options
 * - Animated shimmer
 *
 * Used By:
 * - Inventory
 * - Monitoring
 * - Alerts
 * - Assets
 * - Device Drawer
 * - Reports
 *
 * ------------------------------------------------------------
 */

import clsx from "clsx";

const variants = {
  text: "h-4 rounded-md",
  title: "h-7 rounded-lg",
  avatar: "h-12 w-12 rounded-full",
  button: "h-11 rounded-xl",
  card: "h-40 rounded-2xl",
};

export default function Skeleton({
  variant,
  width,
  height,
  rounded = "rounded-xl",
  className = "",
}) {
  const customSize =
    width || height
      ? {
          width,
          height,
        }
      : undefined;

  return (
    <div
      className={clsx(
        // ----------------------------------------------------
        // Base Skeleton
        // ----------------------------------------------------
        "relative overflow-hidden bg-white/10",

        // ----------------------------------------------------
        // Preset Variant
        // ----------------------------------------------------
        variant
          ? variants[variant]
          : rounded,

        className
      )}
      style={customSize}
      aria-hidden="true"
    >
      {/* ---------------------------------------------------- */}
      {/* Shimmer Animation                                    */}
      {/* ---------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          -translate-x-full
          animate-[shimmer_1.8s_infinite]
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />
    </div>
  );
}

/**
 * ------------------------------------------------------------
 * Composite Skeleton Components
 * ------------------------------------------------------------
 */

/**
 * Standard card placeholder.
 */
Skeleton.Card = function SkeletonCard() {
  return (
    <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <Skeleton variant="title" width="40%" />
        <Skeleton variant="avatar" />
      </div>

      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="85%" />
      <Skeleton variant="text" width="60%" />
    </div>
  );
};

/**
 * Table row placeholder.
 */
Skeleton.Row = function SkeletonRow({
  columns = 6,
}) {
  return (
    <div className="flex items-center gap-4 py-4">
      {Array.from({ length: columns }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          className="flex-1"
        />
      ))}
    </div>
  );
};

/**
 * Statistic card placeholder.
 */
Skeleton.StatCard = function SkeletonStatCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <Skeleton
        variant="text"
        width="35%"
      />

      <Skeleton
        variant="title"
        width="55%"
        className="mt-5"
      />

      <Skeleton
        variant="text"
        width="45%"
        className="mt-4"
      />
    </div>
  );
};