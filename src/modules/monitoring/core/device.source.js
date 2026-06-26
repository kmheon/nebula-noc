/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Core: Device Source Layer
 *
 * Responsibility:
 * Abstracts REAL network data sources:
 * - Deco / TP-Link web portal
 * - SNMP devices (future)
 * - Web scraping fallback
 * - Manual devices
 *
 * This is the FIRST real-world integration layer.
 * ------------------------------------------------------------
 */

export class DeviceSource {
  constructor(config = {}) {
    this.routerIP = config.routerIP || "192.168.0.1";
    this.mode = config.mode || "mock"; // mock | web | snmp
  }

  /**
   * MAIN ENTRY
   * Fetch raw devices from ANY source
   */
  async fetchDevices() {
    switch (this.mode) {
      case "web":
        return this.fetchFromWebRouter();

      case "snmp":
        return this.fetchFromSNMP();

      case "mock":
      default:
        return this.mockDevices();
    }
  }

  /**
   * ------------------------------------------------------------
   * WEB MODE (Deco / TP-Link / D-Link UI scraping)
   * ------------------------------------------------------------
   */
  async fetchFromWebRouter() {
  try {
    const res = await fetch("http://localhost:5050/api/devices");

    const data = await res.json();

    return data.devices || [];
  } catch (err) {
    console.warn("Bridge not reachable, using mock fallback");
    return this.mockDevices();
  }
}

  /**
   * ------------------------------------------------------------
   * SNMP MODE (future enterprise support)
   * ------------------------------------------------------------
   */
  async fetchFromSNMP() {
    // Placeholder for future SNMP integration
    return this.mockDevices();
  }

  /**
   * ------------------------------------------------------------
   * MOCK MODE (current fallback)
   * ------------------------------------------------------------
   */
  mockDevices() {
    return [
      {
        id: 1,
        name: "Core Gateway",
        ip: "192.168.0.1",
      },
      {
        id: 2,
        name: "Deco Mesh Node",
        ip: "192.168.0.2",
      },
      {
        id: 3,
        name: "CCTV NVR",
        ip: "192.168.0.10",
      },
    ];
  }
}

/**
 * Singleton
 */
export const deviceSource = new DeviceSource();