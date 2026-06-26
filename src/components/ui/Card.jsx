/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: Card
 * Module: Shared UI
 *
 * Responsibility:
 * Base surface container used throughout Nebula.
 *
 * Features:
 * - Consistent spacing
 * - Premium glass appearance
 * - Optional padding
 * - Hover support
 * ------------------------------------------------------------
 */

import clsx from "clsx";

export default function Card({
  children,
  className = "",
  noPadding = false,
  hover = false,
}) {
  return (
    <section
      className={clsx(
        `
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#111827]/70
        backdrop-blur-xl
        shadow-lg
        shadow-black/20
        transition-all
        duration-200
        `,
        hover &&
          `
          hover:border-cyan-500/20
          hover:bg-[#131d2f]
          hover:shadow-cyan-500/5
          `,
        !noPadding && "p-6",
        className
      )}
    >
      {children}
    </section>
  );
}