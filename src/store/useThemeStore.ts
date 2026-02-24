import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: localStorage.getItem("theme") === "dark",

      toggleTheme: () =>
        set((state) => {
          const nextMode = !state.isDark;
          document.documentElement.classList.toggle("dark", nextMode);

          return { isDark: nextMode };
        }),
    }),
    { name: "theme" },
  ),
);
