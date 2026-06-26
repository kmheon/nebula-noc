/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Core: Base Connector Interface
 *
 * This defines the STANDARD all routers must follow.
 *
 * Every router (Deco, TP-Link, ASUS, etc.)
 * MUST implement this interface.
 * ------------------------------------------------------------
 */

export class BaseConnector {
  constructor(config = {}) {
    this.config = config;
  }

  /**
   * REQUIRED: Identify device type
   */
  async identify() {
    throw new Error("identify() not implemented");
  }

  /**
   * REQUIRED: Get device list
   */
  async getDevices() {
    throw new Error("getDevices() not implemented");
  }

  /**
   * OPTIONAL: Get bandwidth stats
   */
  async getBandwidth() {
    return null;
  }

  /**
   * OPTIONAL: Get connected clients
   */
  async getClients() {
    return null;
  }

  /**
   * OPTIONAL: Get uptime
   */
  async getUptime() {
    return null;
  }

  /**
   * OPTIONAL: Health check
   */
  async health() {
    return {
      status: "unknown",
    };
  }
}