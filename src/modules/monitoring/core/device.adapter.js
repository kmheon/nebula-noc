/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Core: Device Adapter Layer
 *
 * Responsibility:
 * Normalizes ALL devices into a single Nebula format:
 * - Consumer routers (TP-Link, Deco, etc.)
 * - Enterprise devices
 * - CCTV systems
 * - Unknown OEM devices
 *
 * This is the bridge between raw probe data and UI layer.
 * ------------------------------------------------------------
 */

import { deviceProbe } from "./device.probe";

export class DeviceAdapter {
  /**
   * Convert ANY raw device into Nebula standard model
   */
  async normalize(device) {
    const probe = await deviceProbe.probeDevice(device);

    return {
      // Identity
      id: device.id,
      name: device.name || "Unknown Device",
      ip: device.ip,

      // Classification
      type: probe.type,
      vendor: probe.vendor,

      // Status
      status: probe.status,

      // Network Metrics
      bandwidth: probe.capabilities.bandwidth,
      clients: probe.capabilities.clients,
      uptime: probe.capabilities.uptime,

      // System Metrics
      cpu: probe.capabilities.cpu,
      memory: probe.capabilities.memory,

      // UI helpers
      lastSeen: this.getLastSeen(probe.status),

      // Raw probe (for debugging later)
      _raw: probe,
    };
  }

  /**
   * Bulk normalization (important for dashboards)
   */
  async normalizeAll(devices = []) {
    const results = await Promise.all(
      devices.map((d) => this.normalize(d))
    );

    return results;
  }

  /**
   * Convert status → human readable "last seen"
   */
  getLastSeen(status) {
    switch (status) {
      case "online":
        return "just now";
      case "slow":
        return "few seconds ago";
      case "offline":
        return "offline";
      default:
        return "unknown";
    }
  }
}

/**
 * Singleton instance
 */
export const deviceAdapter = new DeviceAdapter();