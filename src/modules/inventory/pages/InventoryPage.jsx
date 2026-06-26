import { useMemo, useState } from "react";

import InventoryToolbar from "../components/InventoryToolbar";
import DeviceTable from "../components/DeviceTable";

const mockDevices = [
  {
    id: 1,
    name: "Core Gateway",
    vendor: "Ubiquiti",
    model: "UXG-Pro",
    type: "Gateway",
    ip: "192.168.1.1",
    mac: "18:E8:29:11:AB:01",
    site: "Head Office",
    status: "online",
    lastSeen: "Just now",
  },
  {
    id: 2,
    name: "Distribution Switch",
    vendor: "Cisco",
    model: "CBS350-24P",
    type: "Switch",
    ip: "192.168.1.10",
    mac: "18:E8:29:11:AB:02",
    site: "Head Office",
    status: "online",
    lastSeen: "Just now",
  },
  {
    id: 3,
    name: "Lobby Access Point",
    vendor: "Ubiquiti",
    model: "U7 Pro",
    type: "Access Point",
    ip: "192.168.1.21",
    mac: "18:E8:29:11:AB:03",
    site: "Head Office",
    status: "warning",
    lastSeen: "3 min ago",
  },
  {
    id: 4,
    name: "Warehouse Camera",
    vendor: "Hikvision",
    model: "DS-2CD2387G2",
    type: "Camera",
    ip: "192.168.10.51",
    mac: "18:E8:29:11:AB:04",
    site: "Warehouse",
    status: "offline",
    lastSeen: "27 min ago",
  },
  {
    id: 5,
    name: "Recording Server",
    vendor: "Dell",
    model: "PowerEdge R550",
    type: "Server",
    ip: "192.168.5.10",
    mac: "18:E8:29:11:AB:05",
    site: "Server Room",
    status: "updating",
    lastSeen: "Updating...",
  },
];

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [loading, setLoading] = useState(false);

  const filteredDevices = useMemo(() => {
    return mockDevices.filter((device) => {
      const matchesSearch =
        [
          device.name,
          device.vendor,
          device.model,
          device.type,
          device.ip,
          device.mac,
          device.site,
        ]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all" || device.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const handleSelectDevice = (id) => {
    setSelectedDevices((current) =>
      current.includes(id)
        ? current.filter((deviceId) => deviceId !== id)
        : [...current, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedDevices.length === filteredDevices.length) {
      setSelectedDevices([]);
      return;
    }

    setSelectedDevices(filteredDevices.map((d) => d.id));
  };

  const handleRefresh = async () => {
    setLoading(true);

    // Placeholder for API refresh
    await new Promise((resolve) => setTimeout(resolve, 800));

    setLoading(false);
  };

  const handleExport = () => {
    console.log("Export inventory");
  };

  const handleAddDevice = () => {
    console.log("Add device");
  };

  const handleRowClick = (device) => {
    console.log("Open device", device);
  };

  return (
    <div className="space-y-6">
      <InventoryToolbar
        search={search}
        onSearchChange={setSearch}
        filter={filter}
        onFilterChange={setFilter}
        totalDevices={filteredDevices.length}
        selectedCount={selectedDevices.length}
        loading={loading}
        onRefresh={handleRefresh}
        onExport={handleExport}
        onAddDevice={handleAddDevice}
      />

      <DeviceTable
        devices={filteredDevices}
        selectedDevices={selectedDevices}
        onSelectDevice={handleSelectDevice}
        onSelectAll={handleSelectAll}
        onRowClick={handleRowClick}
      />
    </div>
  );
}