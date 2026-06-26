import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import DashboardPage from "./modules/dashboard/pages/DashboardPage";
import InventoryPage from "./modules/inventory/pages/InventoryPage";


const Placeholder = ({ title }) => (
  <div className="p-10">
    <h1 className="text-4xl font-bold text-cyan-400">
      {title}
    </h1>

    <p className="mt-3 text-gray-400">
      Module under construction.
    </p>
  </div>
);

export default function App() {
  return (
    <Layout>
      <Routes>

        <Route path="/" element={<DashboardPage />} />

        <Route
  path="/devices"
  element={<InventoryPage />}
/>

        <Route
          path="/monitoring"
          element={<Placeholder title="Monitoring" />}
        />

        <Route
          path="/network"
          element={<Placeholder title="Network" />}
        />

        <Route
          path="/security"
          element={<Placeholder title="Security" />}
        />

        <Route
          path="/traffic"
          element={<Placeholder title="Traffic" />}
        />

        <Route
          path="/reports"
          element={<Placeholder title="Reports" />}
        />

        <Route
          path="/settings"
          element={<Placeholder title="Settings" />}
        />

      </Routes>
    </Layout>
  );
}