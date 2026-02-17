import { ImageIcon } from "lucide-react";

export function CreatePost() {
  return (
    <div className="mx-auto max-w-xl px-6 py-10 min-h-screen flex flex-col">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-sm font-black uppercase tracking-widest text-main-text">
          پست جدید
        </h1>
        <div className="w-10" />
      </header>

      <main className="flex-1 space-y-10">
        <section className="space-y-4">
          <label className="text-xs font-black text-main-muted uppercase tracking-tighter px-1">
            ۱. افزودن تصویر (اختیاری)
          </label>
          <div className="relative aspect-square sm:aspect-video w-full bg-main-surface border border-main-border/10 rounded-3xl overflow-hidden group transition-all flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-main-text/5 rounded-2xl flex items-center justify-center group-hover:bg-main-text/10 transition-colors">
                <ImageIcon size={28} className="text-main-text opacity-40" />
              </div>
              <span className="text-xs font-bold text-main-muted">
                برای انتخاب عکس کلیک کنید
              </span>
            </div>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
              accept="image/*"
            />
          </div>
        </section>

        <section className="space-y-4">
          <label className="text-xs font-black text-main-muted uppercase tracking-tighter px-1">
            ۲. متن پست
          </label>
          <textarea
            dir="rtl"
            placeholder="داستان خود را اینجا بنویسید..."
            className="w-full h-48 p-6 bg-main-surface border border-main-border/10 rounded-3xl text-base font-medium text-main-text placeholder:text-main-muted/30 focus:outline-none focus:border-main-text/20 transition-all resize-none shadow-sm"
          />
        </section>

        <section className="pt-4">
          <button className="w-full py-5 bg-main-text text-main-surface rounded-3xl text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-main-text/10 hover:opacity-90 active:scale-[0.98] transition-all">
            انتشار پست
          </button>
          <p className="text-center text-[10px] text-main-muted mt-4 font-medium opacity-50">
            با انتشار پست، شما با قوانین پلتفرم موافقت می‌کنید
          </p>
        </section>
      </main>
    </div>
  );
}
