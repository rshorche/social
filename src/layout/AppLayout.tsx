import { Sidebar } from "@/components";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";
import { Outlet } from "react-router";

function AppLayout() {
  const isDark = useThemeStore((state) => state.isDark);
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark, language]);
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
