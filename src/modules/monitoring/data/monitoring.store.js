import { initialMonitoringState } from "./monitoring.mock";
import { deviceAdapter } from "../core/device.adapter";

/**
 * ------------------------------------------------------------
 * Nebula NOC
 * Module: Monitoring Store
 *
 * NOW REAL PIPELINE MODE
 *
 * - No fake simulation engine
 * - Uses device adapter layer
 * - Designed for real network integration
 * ------------------------------------------------------------
 */

class MonitoringStore {
  constructor() {
    this.state = structuredClone(initialMonitoringState);
    this.listeners = new Set();

    this.devices = initialMonitoringState.devices;
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.add(listener);

    return () => this.listeners.delete(listener);
  }

  emit() {
    this.listeners.forEach((l) => l(this.state));
  }

  setState(partial) {
    this.state = {
      ...this.state,
      ...partial,
    };

    this.emit();
  }

  /**
   * ------------------------------------------------------------
   * REAL PIPELINE (NO FAKE SIMULATION)
   * ------------------------------------------------------------
   */

  async startSimulation() {
    // In Phase 4.3 we replace fake loop with real device polling

    await this.refreshDevices();

    // lightweight polling (real-world safe approach)
    setInterval(() => {
      this.refreshDevices();
    }, 5000);
  }

  /**
   * Core pipeline:
   * raw devices → adapter → normalized state
   */
  async refreshDevices() {
    const normalized =
      await deviceAdapter.normalizeAll(this.devices);

    this.state.devices = normalized;

    this.updateStatsFromDevices();
    this.emit();
  }

  /**
   * Derive stats from real device state
   */
  updateStatsFromDevices() {
    const online = this.state.devices.filter(
      (d) => d.status === "online"
    ).length;

    const offline = this.state.devices.filter(
      (d) => d.status === "offline"
    ).length;

    const alerts =
      this.state.alerts.length;

    this.state.stats = {
      ...this.state.stats,
      online,
      offline,
      alerts,
    };
  }
}

/**
 * Singleton
 */
export const monitoringStore = new MonitoringStore();