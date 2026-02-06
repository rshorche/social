import {
  Bookmark,
  EllipsisVertical,
  Heart,
  MessageCircleMore,
  Send,
} from "lucide-react";

interface PostCardProps {
  username: string;
  avatarUrl: string;
  postImage?: string;
  caption: string;
  time: string;
}

export function PostCard({
  username,
  avatarUrl,
  postImage,
  caption,
  time,
}: PostCardProps) {
  return (
    <div className="max-w-lg mx-auto bg-main-surface border border-main-border rounded-xl shadow-sm overflow-hidden mb-6">
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-3">
          <img
            src={avatarUrl}
            className="w-10 h-10 rounded-full object-cover border border-main-border"
            alt={username}
          />
          <div className="flex flex-col text-start">
            <span className="text-sm font-bold text-main-text">{username}</span>
            <span className="text-[11px] text-main-muted uppercase">
              {time}
            </span>
          </div>
        </div>
        <button className="p-1 hover:bg-main-bg rounded-full transition-colors">
          <EllipsisVertical
            size={20}
            className="text-main-muted hover:text-main-text"
          />
        </button>
      </div>

      {postImage && (
        <div className="bg-main-bg aspect-square overflow-hidden">
          <img
            src={postImage}
            className="w-full h-full object-cover"
            alt="Post"
          />
        </div>
      )}

      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex gap-4">
          <button className="hover:text-action-heart hover:scale-110 transition-all active:scale-90">
            <Heart size={24} />
          </button>
          <button className="hover:text-brand-primary hover:scale-110 transition-all active:scale-90">
            <MessageCircleMore size={24} />
          </button>
          <button className="hover:text-action-share hover:scale-110 transition-all active:scale-90">
            <Send size={24} />
          </button>
        </div>
        <button className="hover:text-action-save hover:scale-110 transition-all active:scale-90">
          <Bookmark size={24} />
        </button>
      </div>

      <div className="px-4 pb-4 text-start">
        <p className="text-sm leading-relaxed">
          <span className="font-bold text-main-text">{username}</span>
          <span className="text-main-text ms-1">{caption}</span>
        </p>
      </div>
    </div>
  );
}
