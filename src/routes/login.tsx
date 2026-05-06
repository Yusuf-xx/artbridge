import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — ArtBridge" }] }),
  component: Login,
});

function Login() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="hidden lg:block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elegant">
          <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1000&q=85" alt="Stage" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-xs uppercase tracking-widest text-gold">Welcome back</p>
            <p className="mt-2 font-display text-3xl">The stage is set.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-md lg:px-10">
        <h1 className="font-display text-4xl">Sign in</h1>
        <p className="mt-2 text-sm text-muted-foreground">Continue your work in culture.</p>

        <form className="mt-8 space-y-4">
          <Field label="Email" type="email" placeholder="you@example.com" />
          <Field label="Password" type="password" placeholder="••••••••" />
          <button type="button" className="w-full rounded-md bg-gold-gradient px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Sign in</button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
        </div>
        <div className="space-y-2">
          <button className="w-full rounded-md border border-border bg-card/50 px-4 py-2.5 text-sm font-medium">Continue with Google</button>
          <button className="w-full rounded-md border border-border bg-card/50 px-4 py-2.5 text-sm font-medium">Continue with LinkedIn</button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          New here? <Link to="/signup" className="text-gold story-link">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <input type={type} placeholder={placeholder} className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
    </label>
  );
}
