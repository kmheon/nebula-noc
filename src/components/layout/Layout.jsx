import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#05070B] text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">

        <Topbar />

        <main className="flex-1 overflow-auto p-2">
          {children}
        </main>

      </div>

    </div>
  );
}