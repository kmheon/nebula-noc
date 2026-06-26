/**************************************************************************
 * File: theme.js
 * Folder: src/constants
 * Project: Nebula NOC
 * Version: 1.0.0
 *
 * Description
 * ------------------------------------------------------------------------
 * Central design system for Nebula NOC.
 *
 * This file contains application-wide design tokens such as colors,
 * spacing, border radius, shadows, transitions, typography, and layout
 * dimensions.
 *
 * IMPORTANT
 * ------------------------------------------------------------------------
 * Do NOT hard-code colors or spacing values inside components.
 * Always import values from this file.
 *
 * Future Enhancements
 * ------------------------------------------------------------------------
 * - Multiple themes
 * - Light mode
 * - Accessibility themes
 * - Customer branding
 **************************************************************************/

/**************************************************************************
 * SECTION: COLOR PALETTE
 **************************************************************************/

export const COLORS = {

    background: "#05070B",

    panel: "#0B1220",

    panelHover: "#111827",

    sidebar: "#0A101C",

    header: "#0D1525",

    border: "#1E293B",

    primary: "#22D3EE",

    secondary: "#3B82F6",

    accent: "#8B5CF6",

    success: "#10B981",

    warning: "#F59E0B",

    danger: "#EF4444",

    info: "#38BDF8",

    text: "#FFFFFF",

    textMuted: "#94A3B8"

};

/**************************************************************************
 * SECTION: BORDER RADIUS
 **************************************************************************/

export const RADIUS = {

    small: "8px",

    medium: "12px",

    large: "20px",

    pill: "999px"

};

/**************************************************************************
 * SECTION: LAYOUT
 **************************************************************************/

export const LAYOUT = {

    sidebarWidth: 280,

    headerHeight: 72,

    pagePadding: 24,

    cardGap: 20

};

/**************************************************************************
 * SECTION: SHADOWS
 **************************************************************************/

export const SHADOWS = {

    panel:

        "0 0 30px rgba(34,211,238,.08)",

    glow:

        "0 0 20px rgba(34,211,238,.35)"

};

/**************************************************************************
 * SECTION: ANIMATIONS
 **************************************************************************/

export const ANIMATION = {

    fast: "150ms",

    normal: "250ms",

    slow: "450ms"

};