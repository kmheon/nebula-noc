/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Module: Monitoring
 * File: monitoring.mock.js
 *
 * Responsibility:
 * Base mock dataset for live simulation engine.
 * ------------------------------------------------------------
 */

export const initialMonitoringState = {
  stats: {
    online: 248,
    offline: 3,
    alerts: 7,
    sites: 14,
    uptime: 99.98,
  },

  alerts: [
    {
      id: 1,
      title: "Gateway Offline",
      device: "Core Gateway",
      severity: "critical",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "High CPU Usage",
      device: "Switch-01",
      severity: "warning",
      time: "5 min ago",
    },
  ],

  activity: [
    {
      id: 1,
      title: "Device Restarted",
      description: "Core Gateway rebooted successfully",
      time: "19:25",
    },
    {
      id: 2,
      title: "Camera Offline",
      description: "Parking Camera 03 disconnected",
      time: "19:22",
    },
  ],

  bandwidth: {
    download: 842,
    upload: 214,
    utilization: 68,
  },

  devices: [
    {
      id: 1,
      name: "Core Gateway",
      status: "online",
      cpu: 32,
      memory: 41,
    },
    {
      id: 2,
      name: "Switch-01",
      status: "warning",
      cpu: 78,
      memory: 65,
    },
    {
      id: 3,
      name: "Camera Hub",
      status: "offline",
      cpu: 0,
      memory: 0,
    },
  ],
};