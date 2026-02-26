import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageState {
  language: "fa" | "en";
  setLanguage: (lang: "fa" | "en") => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "fa",
      setLanguage: (lang) => {
        set({ language: lang });
      },
    }),
    { name: "language" },
  ),
);
