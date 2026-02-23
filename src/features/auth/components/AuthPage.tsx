import { useState } from "react";
import type { InputHTMLAttributes, ElementType } from "react";
import {
  Mail,
  Lock,
  User,
  ArrowLeft,
  Fingerprint,
  RefreshCw,
} from "lucide-react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ElementType;
  label: string;
}

const AuthInput = ({ icon: Icon, label, ...props }: AuthInputProps) => (
  <div className="space-y-1 w-full text-start">
    <label className="text-[10px] font-black text-main-muted uppercase tracking-widest px-1 opacity-60">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-main-muted opacity-30 group-focus-within:text-brand-primary group-focus-within:opacity-100 transition-all">
        <Icon size={18} />
      </div>
      <input
        {...props}
        className="w-full py-3.5 pr-12 pl-5 bg-main-surface border border-main-border rounded-xl text-sm font-medium text-main-text placeholder:text-main-muted/20 focus:outline-none focus:border-brand-primary/40 transition-all shadow-sm"
      />
    </div>
  </div>
);

export function AuthPage() {
  const [authMode, setAuthMode] = useState<"login" | "signup" | "forgot">(
    "login",
  );

  return (
    <div
      className="mx-auto max-w-lg px-8 min-h-screen flex flex-col py-20 bg-main-bg"
      dir="rtl"
    >
      <header className="mb-8 flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-main-surface border border-main-border rounded-2xl flex items-center justify-center mb-4 shadow-sm">
          {authMode === "forgot" ? (
            <RefreshCw
              className="text-brand-primary animate-spin-slow"
              size={24}
            />
          ) : (
            <Fingerprint className="text-brand-primary" size={24} />
          )}
        </div>

        <h1 className="text-lg font-black text-main-text tracking-tight uppercase">
          {authMode === "login" && "ورود"}
          {authMode === "signup" && "ثبت‌نام"}
          {authMode === "forgot" && "بازیابی"}
        </h1>
        <p className="text-[11px] font-bold text-main-muted opacity-50 mt-1">
          {authMode === "login" && "به حساب خود وارد شوید"}
          {authMode === "signup" && "عضو جدید خانواده ما شوید"}
          {authMode === "forgot" && "ایمیل خود را تایید کنید"}
        </p>
      </header>

      <main>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-3">
            {authMode === "signup" && (
              <AuthInput
                icon={User}
                type="text"
                label="نام کاربری"
                placeholder="نام کاربری"
              />
            )}

            <AuthInput
              icon={Mail}
              type="email"
              label="پست الکترونیک"
              placeholder="name@example.com"
            />

            {authMode !== "forgot" && (
              <AuthInput
                icon={Lock}
                type="password"
                label="رمز عبور"
                placeholder="••••••••"
              />
            )}
          </div>

          {authMode === "login" && (
            <div className="flex justify-end px-1">
              <button
                type="button"
                onClick={() => setAuthMode("forgot")}
                className="text-[10px] font-black text-main-muted hover:text-brand-primary transition-colors"
              >
                فراموشی رمز؟
              </button>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 bg-main-text text-main-surface rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-brand-primary transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-main-text/5"
            >
              <span>
                {authMode === "login" && "ورود به حساب"}
                {authMode === "signup" && "ایجاد حساب"}
                {authMode === "forgot" && "ارسال لینک"}
              </span>
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>
          </div>
        </form>
      </main>

      <footer className="mt-10 text-center border-t border-main-border pt-6">
        <button
          type="button"
          onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
          className="group inline-flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] font-bold text-main-muted opacity-60 uppercase tracking-widest">
            {authMode === "login" ? "حساب ندارید؟" : "عضو هستید؟"}
          </span>
          <span className="text-xs font-black text-brand-primary border-b border-brand-primary/20 group-hover:border-brand-primary transition-all pb-0.5">
            {authMode === "login" ? "ثبت‌نام سریع" : "ورود به حساب"}
          </span>
        </button>
      </footer>
    </div>
  );
}
