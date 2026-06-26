import { useEffect, useState } from "react";

import {
  getDashboardStats,
  getTrafficData,
  getRecentAlerts,
  getDevices,
} from "../services/providers";

export default function useDashboardData() {
  const [data, setData] = useState({
    stats: [],
    traffic: [],
    alerts: [],
    devices: [],
  });

  useEffect(() => {
    loadDashboard();

    // Future:
    // websocket
    // polling
    // mikrotik api
  }, []);

  function loadDashboard() {
    setData({
      stats: getDashboardStats(),
      traffic: getTrafficData(),
      alerts: getRecentAlerts(),
      devices: getDevices(),
    });
  }

  return data;
}