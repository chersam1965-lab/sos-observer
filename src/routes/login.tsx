import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { signIn } from "@/lib/auth";
import { useI18n, LanguageSwitcher } from "@/lib/i18n";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "GSOS Observer — Login" },
      { name: "description", content: "Sign in to GSOS Observer V1." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (signIn(user, pass)) {
      navigate({ to: "/dashboard" });
    } else {
      setErr(t("invalidCredentials"));
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary" aria-hidden />
          <span className="font-semibold tracking-tight">{t("appName")}</span>
        </div>
        <LanguageSwitcher />
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">{t("login")}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{t("tagline")}</p>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="space-y-1.5">
              <label htmlFor="user" className="text-sm font-medium">
                {t("username")}
              </label>
              <input
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                autoComplete="username"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="pass" className="text-sm font-medium">
                {t("password")}
              </label>
              <input
                id="pass"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            {err && (
              <p className="text-sm text-[color:var(--status-red)]" role="alert">
                {err}
              </p>
            )}
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              {t("signIn")}
            </button>
            <p className="text-xs text-muted-foreground text-center">admin / admin</p>
          </form>
        </div>
      </main>
    </div>
  );
}
