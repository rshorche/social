import {
  Home,
  Search,
  PlusSquare,
  User,
  Moon,
  Sun,
  Languages,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "@/lib/cn";
import { useState } from "react";

const menuItems = [
  { icon: Home, label: "خانه", to: "/" },
  { icon: Search, label: "جستجو", to: "/search" },
  { icon: PlusSquare, label: "ایجاد", to: "/create" },
  { icon: User, label: "پروفایل", to: "/profile" },
];

export function Sidebar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"fa" | "en">("fa");

  return (
    <>
      <aside
        className={cn(
          "hidden md:flex fixed start-4 top-4 bottom-4 z-40 group/sidebar",
          "bg-main-surface border border-main-border shadow-2xl rounded-3xl",
          "flex-col transition-all duration-300",
          "md:w-20 md:hover:w-64 lg:w-64",
        )}
      >
        <div className="flex flex-col h-full py-6">
          <div className="flex justify-center mb-10">
            <span className="text-2xl font-black text-brand-primary">s</span>
          </div>

          <nav className="flex-1 flex flex-col gap-2 px-3 overflow-y-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 p-4 rounded-2xl transition-all",
                    "hover:bg-main-bg active:scale-95",
                    isActive
                      ? "bg-main-bg text-brand-primary"
                      : "text-main-text",
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
            <div className="h-10 w-10 rounded-full bg-main-bg flex items-center justify-center font-bold shrink-0">
              R
            </div>

            <div
              className={cn(
                "flex flex-col",
                "max-w-32",
                "opacity-0 translate-x-2",
                "md:group-hover/sidebar:opacity-100 md:group-hover/sidebar:translate-x-0",
                "lg:opacity-100 lg:translate-x-0",
                "transition-all duration-300",
              )}
            >
              <span className="text-sm font-bold truncate">Reza</span>
              <span className="text-xs text-main-muted truncate">
                مشاهده پروفایل
              </span>
            </div>
          </div>
        </div>
      </aside>

      <nav className="md:hidden overflow-x-auto fixed bottom-2 left-2 right-2 z-40 bg-main-surface border border-main-border rounded-2xl h-16 px-4 flex items-center justify-around shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "p-3 transition-transform active:scale-90",
                isActive ? "text-brand-primary scale-110" : "text-main-text",
              )
            }
          >
            <item.icon size={24} />
          </NavLink>
        ))}
      </nav>

      <div className="fixed bottom-18 md:bottom-6 end-0 z-50">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "w-12 h-12 rounded-full bg-brand-primary text-white",
              "flex items-center justify-center shadow-xl",
              "transition-transform duration-300",
              open && "rotate-90",
            )}
          >
            <Settings size={22} />
          </button>

          <button
            onClick={() => setDark((v) => !v)}
            className={cn(
              "absolute w-10 h-10 rounded-full bg-main-surface border border-main-border",
              "flex items-center justify-center shadow-lg",
              "transition-all duration-300",
              open
                ? "-top-14 opacity-100 scale-100"
                : "top-0 opacity-0 scale-0 pointer-events-none",
            )}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setLang((v) => (v === "fa" ? "en" : "fa"))}
            className={cn(
              "absolute w-10 h-10 rounded-full bg-main-surface border border-main-border",
              "flex items-center justify-center shadow-lg",
              "transition-all duration-300",
              open
                ? "-top-6 -start-12 opacity-100 scale-100"
                : "top-0 start-0 opacity-0 scale-0 pointer-events-none",
            )}
          >
            <Languages
              size={18}
              className={lang === "en" ? "text-brand-primary" : ""}
            />
            <span className="absolute -bottom-4 text-[10px] font-bold text-main-muted">
              {lang.toUpperCase()}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
