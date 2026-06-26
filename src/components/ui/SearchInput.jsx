/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: SearchInput
 * Module: Shared UI
 *
 * Responsibility:
 * Standard search field used throughout Nebula.
 *
 * Features:
 * - Built-in search icon
 * - Clear button
 * - Optional loading indicator
 * - Keyboard friendly
 * - Full width support
 *
 * Used By:
 * - Inventory
 * - Monitoring
 * - Alerts
 * - Assets
 * - Sites
 * - Settings
 *
 * Future:
 * - Global Search
 * - Command Palette
 * - AI Search
 * ------------------------------------------------------------
 */

import clsx from "clsx";
import { Loader2, Search, X } from "lucide-react";

export default function SearchInput({
  value = "",
  onChange,
  placeholder = "Search...",
  loading = false,
  disabled = false,
  fullWidth = true,
  className = "",
  onClear,
  ...props
}) {
  /**
   * Clears the search box.
   */
  const handleClear = () => {
    if (onClear) {
      onClear();
      return;
    }

    onChange?.("");
  };

  return (
    <div
      className={clsx(
        "relative",
        fullWidth && "w-full",
        className
      )}
    >
      {/* ---------------------------------------------------- */}
      {/* Left Icon                                             */}
      {/* ---------------------------------------------------- */}

      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

      {/* ---------------------------------------------------- */}
      {/* Input                                                 */}
      {/* ---------------------------------------------------- */}

      <input
        type="text"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          h-11
          w-full
          rounded-xl
          border
          border-white/10
          bg-white/5
          pl-10
          pr-10
          text-sm
          text-white
          outline-none
          transition-all
          duration-200
          placeholder:text-slate-500
          focus:border-cyan-500/30
          focus:bg-white/[0.07]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
        {...props}
      />

      {/* ---------------------------------------------------- */}
      {/* Right Action                                          */}
      {/* ---------------------------------------------------- */}

      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center">
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
        ) : (
          value && (
            <button
              type="button"
              onClick={handleClear}
              className="
                rounded-md
                p-1
                text-slate-500
                transition-colors
                hover:bg-white/10
                hover:text-white
              "
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )
        )}
      </div>
    </div>
  );
}