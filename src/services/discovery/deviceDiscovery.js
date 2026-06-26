/******************************************************************************
 * Device Discovery Engine
 *
 * This service is responsible for discovering devices on the network.
 *
 * Today:
 *  - Returns mock devices.
 *
 * Future:
 *  - MikroTik Neighbor Discovery
 *  - ARP Scan
 *  - SNMP
 *  - LLDP
 *  - CDP
 *  - ICMP Ping Sweep
 *  - Vendor Lookup
 ******************************************************************************/

export async function discoverDevices() {
  // Simulate network scan delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return [
    {
      id: 1,
      hostname: "Core Router",
      vendor: "MikroTik",
      model: "RB5009UG+S+",
      ip: "192.168.0.1",
      mac: "4C:5E:0C:AA:11:22",
      type: "Router",
      status: "Online",
    },
    {
      id: 2,
      hostname: "Distribution Switch",
      vendor: "TP-Link",
      model: "TL-SG3428X",
      ip: "192.168.0.2",
      mac: "F4:F2:6D:98:10:45",
      type: "Switch",
      status: "Online",
    },
    {
      id: 3,
      hostname: "Office AP",
      vendor: "Ubiquiti",
      model: "U6 Pro",
      ip: "192.168.0.10",
      mac: "24:5A:4C:9D:21:87",
      type: "Access Point",
      status: "Online",
    },
    {
      id: 4,
      hostname: "NAS",
      vendor: "Synology",
      model: "DS923+",
      ip: "192.168.0.20",
      mac: "90:09:D0:11:AB:44",
      type: "NAS",
      status: "Offline",
    },
  ];
}