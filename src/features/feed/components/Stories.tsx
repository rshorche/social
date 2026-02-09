import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

const stories = [
  {
    id: 1,
    user: "reza_dev",
    avatar: "https://i.pravatar.cc/150?u=1",
    seen: false,
  },
  {
    id: 2,
    user: "ali_designer",
    avatar: "https://i.pravatar.cc/150?u=2",
    seen: false,
  },
  {
    id: 3,
    user: "sara_art",
    avatar: "https://i.pravatar.cc/150?u=3",
    seen: true,
  },
  {
    id: 4,
    user: "mina_vlog",
    avatar: "https://i.pravatar.cc/150?u=4",
    seen: true,
  },
  {
    id: 5,
    user: "john_doe",
    avatar: "https://i.pravatar.cc/150?u=5",
    seen: false,
  },
  {
    id: 6,
    user: "mobi_tech",
    avatar: "https://i.pravatar.cc/150?u=6",
    seen: true,
  },
];

export function Stories() {
  return (
    <div className="max-w-xl mx-auto flex gap-4 overflow-x-auto scrollbar-hide select-none">
      <div className="flex flex-col items-center gap-2 cursor-pointer group">
        <div className="w-16 h-16 rounded-full p-0.5 border-2 border-dashed border-main-border group-hover:border-brand-primary transition-colors flex items-center justify-center bg-main-bg">
          <Plus
            size={24}
            className="text-main-muted group-hover:text-brand-primary transition-colors"
          />
        </div>
        <span className="text-xs font-medium text-main-muted">استوری شما</span>
      </div>

      {stories.map((story) => (
        <div
          key={story.id}
          className="flex flex-col items-center gap-2 cursor-pointer active:scale-90 transition-transform"
        >
          <div
            className={cn(
              "w-16 h-16 rounded-full p-0.5",
              story.seen
                ? "bg-main-border"
                : "bg-linear-to-tr from-brand-primary ",
            )}
          >
            <div className="w-full h-full rounded-full border-2 border-main-surface overflow-hidden ">
              <img
                src={story.avatar}
                alt={story.user}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="text-xs font-medium text-main-text w-16 text-center">
            {story.user}
          </span>
        </div>
      ))}
    </div>
  );
}
