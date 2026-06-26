/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Component: SearchInput
 * Module: Shared UI
 *
 * Responsibility:
 * Premium search input used throughout Nebula.
 *
 * Features:
 * - Search icon
 * - Clear button
 * - Loading indicator
 * - Better focus state
 * - Keyboard friendly
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
      {/* Search Icon */}

      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 transition-colors duration-200" />

      {/* Input */}

      <input
        type="text"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          h-12
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          pl-11
          pr-11
          text-sm
          font-medium
          text-white
          outline-none
          transition-all
          duration-200

          placeholder:text-slate-500

          hover:border-white/20
          hover:bg-white/[0.055]

          focus:border-cyan-400/40
          focus:bg-white/[0.07]
          focus:ring-2
          focus:ring-cyan-500/10

          disabled:cursor-not-allowed
          disabled:opacity-60
        "
        {...props}
      />

      {/* Right Action */}

      <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center">
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
        ) : (
          value && (
            <button
              type="button"
              onClick={handleClear}
              className="
                rounded-lg
                p-1.5
                text-slate-500
                transition-all
                duration-200
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