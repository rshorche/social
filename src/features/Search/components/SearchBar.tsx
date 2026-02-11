import { Search as SearchIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function SearchBar() {
  return (
    <div className="group w-full">
      <input
        type="text"
        placeholder="جستجو کنید..."
        className={cn(
          "w-full bg-main-surface border border-main-border rounded-3xl py-4 ps-14 pe-6",
          "outline-none focus:border-brand-primary",
          "transition-all duration-300 font-medium text-sm shadow",
        )}
      />
      <SearchIcon
        className="absolute start-5 top-1/2 -translate-y-1/2 text-main-muted group-focus-within:text-brand-primary"
        size={20}
      />
    </div>
  );
}
