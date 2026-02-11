import { SearchBar } from "./SearchBar";

export function SearchPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 px-4 md:px-0 animate-in fade-in duration-700">
      <div className=" pt-4 pb-2 bg-main-bg/80 backdrop-blur-md z-20 space-y-4">
        <SearchBar />
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-3xl overflow-hidden border border-main-border bg-main-surface group cursor-pointer relative"
          >
            <img
              src={`https://picsum.photos/500/${[700, 500, 800, 600][i % 4]}?random=${i + 100}`}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              alt="explore"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
}
