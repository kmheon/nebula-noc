import { useMemo } from "react";

import {
  getDashboardStats,
  getTrafficData,
  getRecentAlerts,
  getDevices,
} from "../services/providers";

export default function useDashboardData() {
  const data = useMemo(() => {
    return {
      stats: getDashboardStats(),
      traffic: getTrafficData(),
      alerts: getRecentAlerts(),
      devices: getDevices(),
    };
  }, []);

  return data;
}