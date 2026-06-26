import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex bg-[#05070B] text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}