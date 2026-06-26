import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";

const Placeholder = ({ title }) => (
  <div className="p-10">
    <h1 className="text-4xl font-bold text-cyan-400">{title}</h1>
    <p className="mt-3 text-gray-400">
      Module under construction.
    </p>
  </div>
);

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/monitoring" element={<Placeholder title="Monitoring" />} />
        <Route path="/devices" element={<Placeholder title="Devices" />} />
        <Route path="/network" element={<Placeholder title="Network" />} />
        <Route path="/security" element={<Placeholder title="Security" />} />
        <Route path="/traffic" element={<Placeholder title="Traffic" />} />
        <Route path="/reports" element={<Placeholder title="Reports" />} />
        <Route path="/settings" element={<Placeholder title="Settings" />} />
      </Routes>
    </Layout>
  );
}