import {
  Home,
  Search,
  PlusSquare,
  Heart,
  User,
  Moon,
  Sun,
  Languages,
} from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "@/lib/cn";
import { useState } from "react";

const menuItems = [
  { icon: Home, label: "خانه", to: "/" },
  { icon: Search, label: "جستجو", to: "/search" },
  { icon: PlusSquare, label: "ایجاد", to: "/create" },
  { icon: Heart, label: "اعلان‌ها", to: "/notifications" },
  { icon: User, label: "پروفایل", to: "/profile" },
];

export function Sidebar() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <aside
        className={cn(
          "hidden md:flex fixed start-4 top-4 bottom-4 z-50 group/sidebar",
          "bg-main-surface border border-main-border shadow-2xl rounded-3xl",
          "flex-col transition-all duration-300 ease-in-out",
          "md:w-20 md:hover:w-64 lg:w-64"
        )}
      >
        <div className="flex flex-col h-full py-6">
          <div className="flex items-center justify-between px-4 mb-8">
            <span className="text-2xl font-black text-brand-primary uppercase">
              s
            </span>
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => setDark((v) => !v)}
                className="p-2 rounded-xl hover:bg-main-bg transition-colors"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="p-2 rounded-xl hover:bg-main-bg transition-colors">
                <Languages size={18} />
              </button>
            </div>
          </div>

          <nav className="flex-1 flex flex-col gap-2 px-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer",
                    "hover:bg-main-bg hover:scale-[1.02] active:scale-95",
                    isActive
                      ? "bg-main-bg text-brand-primary"
                      : "text-main-text"
                  )
                }
              >
                <item.icon size={24} className="shrink-0" />
                <span
                  className="
                    whitespace-nowrap overflow-hidden
                    w-0 opacity-0
                    md:group-hover/sidebar:w-auto md:group-hover/sidebar:opacity-100
                    lg:w-auto lg:opacity-100
                    transition-all duration-300
                  "
                >
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="px-4 pt-4 border-t border-main-border flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-main-bg flex items-center justify-center text-sm font-bold">
              R
            </div>
            <div
              className="
                flex flex-col overflow-hidden
                w-0 opacity-0
                md:group-hover/sidebar:w-auto md:group-hover/sidebar:opacity-100
                lg:w-auto lg:opacity-100
                transition-all duration-300
              "
            >
              <span className="text-sm font-bold">Reza</span>
              <span className="text-xs text-main-muted">مشاهده پروفایل</span>
            </div>
          </div>
        </div>
      </aside>

      <nav className="md:hidden fixed bottom-2 left-2 right-2 z-50 bg-main-surface border border-main-border rounded-2xl h-18 px-4 flex items-center justify-around shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "p-3 transition-transform active:scale-90",
                isActive ? "text-brand-primary scale-110" : "text-main-text"
              )
            }
          >
            <item.icon size={24} />
          </NavLink>
        ))}
        <button
          onClick={() => setDark((v) => !v)}
          className="p-3 transition-transform active:scale-90 text-main-muted"
        >
          {dark ? <Sun size={22} /> : <Moon size={22} />}
        </button>
        <button className="p-3 transition-transform active:scale-90 text-main-muted">
          <Languages size={22} />
        </button>
      </nav>
    </>
  );
}
