export function ProfilePage() {
  return (
    <div className="mx-auto max-w-xl">
      <header className="flex flex-col items-center">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-main-border p-1 shadow-sm ">
          <img
            src="/image1.jpeg"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div className="mt-5 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-main-text">
            reza shorche
          </h2>
          <p className="text-main-muted text-sm md:text-base font-bold tracking-widest opacity-70 mt-1">
            rshorche@
          </p>
        </div>

        <p className="mt-5 text-center max-w-80 text-base text-main-text font-medium leading-relaxed">
          توسعه‌دهنده فرانت اند و علاقه‌مند به دیزاین مینیمال. خالق تجربه‌های
          ساده در دنیای پیچیده
        </p>

        <div className="flex gap-2 my-8 w-full max-w-80">
          <button className="flex-1 h-12 bg-main-text text-main-surface rounded-full text-sm transition-all active:scale-95 shadow">
            ویرایش پروفایل
          </button>
        </div>
      </header>
      <div className="flex justify-around w-full py-6 my-4 border-y border-main-border/30 bg-main-surface/5 rounded-2xl">
        <div className="flex flex-col items-center">
          <span className="text-xl font-black text-main-text leading-none">
            42
          </span>
          <span className="text-[10px] md:text-xs font-bold text-main-muted uppercase tracking-tighter mt-2 opacity-60">
            پست‌ها
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xl font-black text-main-text leading-none">
            1.2k
          </span>
          <span className="text-[10px] md:text-xs font-bold text-main-muted uppercase tracking-tighter mt-2 opacity-60">
            دنبال‌کننده
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xl font-black text-main-text leading-none">
            850
          </span>
          <span className="text-[10px] md:text-xs font-bold text-main-muted uppercase tracking-tighter mt-2 opacity-60">
            دنبال‌شونده
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-2 mt-8">
        {[...Array(9)].map((_, i) => {
          const hasImage = i !== 1 && i !== 4;

          return (
            <div
              key={i}
              className="aspect-square bg-main-surface rounded-3xl overflow-hidden relative group cursor-pointer transition-all active:scale-95 flex items-center justify-center"
            >
              {hasImage ? (
                <img
                  src={`https://picsum.photos/500/500?random=${i + 200}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  alt="Post"
                />
              ) : (
                <div className="p-4 text-center">
                  <p className="text-xs md:text-sm font-bold text-main-text leading-relaxed opacity-80 line-clamp-4">
                    این یک پست متنی است که عکس ندارد اما استایل گرد صفحه را حفظ
                    کرده است.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
