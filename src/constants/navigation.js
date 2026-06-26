/**************************************************************************
 * File: navigation.js
 * Folder: src/constants
 * Project: Nebula NOC
 * Version: 1.0.0
 *
 * Description
 * ------------------------------------------------------------------------
 * Defines every sidebar navigation item.
 *
 * The sidebar component should render this array instead of creating
 * navigation links manually.
 *
 * Future Enhancements
 * ------------------------------------------------------------------------
 * - User permissions
 * - Nested navigation
 * - Favorites
 * - Notifications
 **************************************************************************/

/**************************************************************************
 * SECTION: NAVIGATION
 **************************************************************************/

export const NAVIGATION = [

    {
        id: "dashboard",
        label: "Dashboard",
        icon: "LayoutDashboard",
        route: "/"
    },

    {
        id: "monitoring",
        label: "Monitoring",
        icon: "Activity",
        route: "/monitoring"
    },

    {
        id: "devices",
        label: "Devices",
        icon: "Monitor",
        route: "/devices"
    },

    {
        id: "network",
        label: "Network",
        icon: "Network",
        route: "/network"
    },

    {
        id: "security",
        label: "Security",
        icon: "Shield",
        route: "/security"
    },

    {
        id: "traffic",
        label: "Traffic",
        icon: "BarChart3",
        route: "/traffic"
    },

    {
        id: "reports",
        label: "Reports",
        icon: "FileText",
        route: "/reports"
    },

    {
        id: "settings",
        label: "Settings",
        icon: "Settings",
        route: "/settings"
    }

];