/**************************************************************************
 * File: SidebarItem.jsx
 * Folder: src/components/layout/Sidebar
 * Project: Nebula NOC
 * Version: 1.0.0
 *
 * Description
 * ------------------------------------------------------------------------
 * Reusable sidebar navigation item.
 *
 * Every clickable item inside the sidebar should use this component.
 *
 * Future Enhancements
 * ------------------------------------------------------------------------
 * - Active route highlighting
 * - Role-based permissions
 * - Notification badges
 * - Keyboard shortcuts
 * - Nested navigation
 * - Tooltips (collapsed sidebar)
 **************************************************************************/

export default function SidebarItem({
  icon: Icon,
  title,
  active = false,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full
        flex
        items-center
        gap-4
        px-8
        py-4
        rounded-xl
        transition-all
        duration-200
        group

        ${
          active
            ? "bg-cyan-500/20 text-cyan-300 border-l-4 border-cyan-400"
            : "text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300"
        }
      `}
    >
      {Icon && (
        <Icon
          size={20}
          className="transition-transform duration-200 group-hover:scale-110"
        />
      )}

      <span className="font-medium tracking-wide">
        {title}
      </span>
    </button>
  );
}