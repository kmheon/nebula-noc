import { BaseConnector } from "./base.connector";

/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Connector: Deco Router
 *
 * This is the FIRST real implementation
 * of the universal connector system.
 *
 * Later we will replace mock parts with real scraping.
 * ------------------------------------------------------------
 */

export class DecoConnector extends BaseConnector {
  constructor(config = {}) {
    super(config);

    this.routerIP = config.routerIP || "192.168.0.1";
    this.mode = config.mode || "mock"; // mock | web (future real)
  }

  /**
   * Identify device type
   */
  async identify() {
    return {
      vendor: "TP-Link Deco",
      type: "mesh-router",
      model: "Deco System",
    };
  }

  /**
   * Get device list (CURRENT: mock-safe, future: real scrape)
   */
  async getDevices() {
    // REAL VERSION (future):
    // - login to router
    // - scrape connected devices page
    // - parse HTML

    return [
      {
        id: "deco-1",
        name: "Main Deco Router",
        ip: "192.168.0.1",
        status: "online",
        clients: 12,
      },
      {
        id: "deco-2",
        name: "Living Room Node",
        ip: "192.168.0.2",
        status: "online",
        clients: 5,
      },
      {
        id: "deco-3",
        name: "Bedroom Node",
        ip: "192.168.0.3",
        status: "warning",
        clients: 2,
      },
    ];
  }

  /**
   * Bandwidth (mock for now)
   */
  async getBandwidth() {
    return {
      download: 820,
      upload: 210,
      unit: "Mbps",
    };
  }

  /**
   * Clients
   */
  async getClients() {
    return [
      { id: 1, name: "Phone", ip: "192.168.0.10" },
      { id: 2, name: "Laptop", ip: "192.168.0.11" },
    ];
  }

  /**
   * Health check
   */
  async health() {
    return {
      status: "online",
      latency: 12,
    };
  }
}