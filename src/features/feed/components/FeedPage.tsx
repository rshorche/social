import { PostCard } from "./PostCard";

export function FeedPage() {
  return (
    <div className="py-8">
      <PostCard
        username="ali_dev"
        avatarUrl="/image1.jpeg"
        postImage="/image.jpeg"
        caption="اولین پست با سیستم رنگی و فونت جدید وزیر! چطور شده؟ 🚀"
        time="2 ساعت قبل"
      />

      <PostCard
        username="frontend_master"
        avatarUrl="/image2.jpg"
        caption="گاهی اوقات یک پست ساده متنی بدون تصویر هم می‌تواند جذاب باشد. تمرکز روی خوانایی و تایپوگرافی وزیر."
        time="5 ساعت قبل"
      />
    </div>
  );
}
