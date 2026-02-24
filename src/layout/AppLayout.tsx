import { Sidebar } from "@/components";
import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";
import { Outlet } from "react-router";

function AppLayout() {
  const isDark = useThemeStore((state) => state.isDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
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
