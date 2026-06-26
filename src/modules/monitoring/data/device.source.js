/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Core: Device Source Layer (FINAL CONNECTED VERSION)
 *
 * Now fully connected to:
 * Nebula Bridge (Node.js)
 * → DecoConnector system
 * ------------------------------------------------------------
 */

export class DeviceSource {
  constructor() {
    this.baseURL = "http://localhost:5050";
  }

  /**
   * MAIN ENTRY — REAL DATA ONLY
   */
  async fetchDevices() {
    try {
      const res = await fetch(`${this.baseURL}/api/devices`);

      const data = await res.json();

      return data.devices || [];
    } catch (err) {
      console.error("Bridge unreachable:", err);

      return [];
    }
  }

  async fetchBandwidth() {
    try {
      const res = await fetch(`${this.baseURL}/api/devices`);

      const data = await res.json();

      return data.bandwidth || null;
    } catch (err) {
      return null;
    }
  }

  async fetchHealth() {
    try {
      const res = await fetch(`${this.baseURL}/api/health`);

      const data = await res.json();

      return data.health || null;
    } catch (err) {
      return null;
    }
  }
}

/**
 * Singleton
 */
export const deviceSource = new DeviceSource();