const dashboardStats = [
  {
    title: "Connected Devices",
    value: "127",
    icon: "HardDrive",
    color: "text-cyan-400",
  },
  {
    title: "Live Traffic",
    value: "842 Mbps",
    icon: "Activity",
    color: "text-green-400",
  },
  {
    title: "CPU Usage",
    value: "18%",
    icon: "Cpu",
    color: "text-yellow-400",
  },
  {
    title: "Critical Alerts",
    value: "3",
    icon: "AlertTriangle",
    color: "text-red-400",
  },
];

const trafficData = [
  { time: "09:00", traffic: 35 },
  { time: "09:05", traffic: 50 },
  { time: "09:10", traffic: 45 },
  { time: "09:15", traffic: 70 },
  { time: "09:20", traffic: 82 },
  { time: "09:25", traffic: 68 },
  { time: "09:30", traffic: 90 },
  { time: "09:35", traffic: 76 },
  { time: "09:40", traffic: 55 },
  { time: "09:45", traffic: 71 },
  { time: "09:50", traffic: 88 },
  { time: "09:55", traffic: 95 },
];

const alerts = [
  {
    level: "Critical",
    message: "Firewall blocked repeated login attempts.",
    time: "2 min ago",
  },
  {
    level: "Warning",
    message: "WAN bandwidth exceeded 80%.",
    time: "6 min ago",
  },
  {
    level: "Info",
    message: "New MikroTik device discovered.",
    time: "12 min ago",
  },
];

const devices = [
  {
    name: "Core Router",
    vendor: "MikroTik",
    ip: "192.168.0.1",
    interface: "ether1",
    rx: "412 Mbps",
    tx: "186 Mbps",
    latency: "1 ms",
    status: "Online",
  },
  {
    name: "Distribution Switch",
    vendor: "TP-Link",
    ip: "192.168.0.2",
    interface: "SFP+1",
    rx: "218 Mbps",
    tx: "142 Mbps",
    latency: "2 ms",
    status: "Online",
  },
  {
    name: "Access Point",
    vendor: "UniFi",
    ip: "192.168.0.31",
    interface: "wlan1",
    rx: "61 Mbps",
    tx: "38 Mbps",
    latency: "9 ms",
    status: "Warning",
  },
  {
    name: "Office NAS",
    vendor: "Synology",
    ip: "192.168.0.20",
    interface: "LAN",
    rx: "0 Mbps",
    tx: "0 Mbps",
    latency: "--",
    status: "Offline",
  },
];

export function getDashboardStats() {
  return dashboardStats;
}

export function getTrafficData() {
  return trafficData;
}

export function getRecentAlerts() {
  return alerts;
}

export function getDevices() {
  return devices;
}