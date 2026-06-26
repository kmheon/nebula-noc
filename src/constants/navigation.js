/**************************************************************************
 * File: navigation.js
 * Folder: src/constants
 * Project: Nebula NOC
 * Version: 2.0.0
 *
 * Description
 * ------------------------------------------------------------------------
 * Defines the application's primary navigation.
 *
 * This file is the single source of truth for every module that appears
 * inside the sidebar.
 *
 * Future modules should ONLY be added here.
 *
 * Future Enhancements
 * ------------------------------------------------------------------------
 * ✔ Role-based permissions
 * ✔ Plugin modules
 * ✔ Nested navigation
 * ✔ Notification badges
 * ✔ Favorites
 * ✔ Feature flags
 **************************************************************************/

import {
  Activity,
  BarChart3,
  FileText,
  LayoutDashboard,
  Monitor,
  Network,
  Settings,
  Shield,
} from "lucide-react";

export const NAVIGATION = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    enabled: true,
    badge: null,
    category: "core",
    description: "Network overview",
  },

  {
    id: "monitoring",
    title: "Monitoring",
    path: "/monitoring",
    icon: Activity,
    enabled: true,
    badge: null,
    category: "core",
    description: "System health monitoring",
  },

  {
    id: "devices",
    title: "Devices",
    path: "/devices",
    icon: Monitor,
    enabled: true,
    badge: null,
    category: "core",
    description: "Connected devices",
  },

  {
    id: "network",
    title: "Network",
    path: "/network",
    icon: Network,
    enabled: true,
    badge: null,
    category: "core",
    description: "Infrastructure management",
  },

  {
    id: "security",
    title: "Security",
    path: "/security",
    icon: Shield,
    enabled: true,
    badge: null,
    category: "core",
    description: "Threat detection & policies",
  },

  {
    id: "traffic",
    title: "Traffic",
    path: "/traffic",
    icon: BarChart3,
    enabled: true,
    badge: null,
    category: "analytics",
    description: "Traffic analytics",
  },

  {
    id: "reports",
    title: "Reports",
    path: "/reports",
    icon: FileText,
    enabled: true,
    badge: null,
    category: "analytics",
    description: "Reports & exports",
  },

  {
    id: "settings",
    title: "Settings",
    path: "/settings",
    icon: Settings,
    enabled: true,
    badge: null,
    category: "system",
    description: "Application settings",
  },
];