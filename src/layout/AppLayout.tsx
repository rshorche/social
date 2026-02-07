import { Sidebar } from "@/components";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="bg-main min-h-screen">
      <Sidebar />
      <main className="md:ms-28 lg:ms-72 p-4 pb-24 md:pb-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
