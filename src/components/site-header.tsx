import { Link } from "@tanstack/react-router";
import { Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { to: "/events", label: "Events" },
  { to: "/artists", label: "Artists" },
  { to: "/survey", label: "Survey" },
  { to: "/collaborate", label: "Collaborate" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top ticker */}
      <div className="relative z-40 hidden border-b border-border/40 bg-background/80 backdrop-blur md:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between gap-6 px-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 text-gold"><Sparkles className="h-3 w-3" /> Season 2026 — open call for artists</span>
          <span className="font-mono">KL · 18:42 · 28°C — Harmoni Nusantara · 73% sold</span>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-2xl" : "bg-transparent"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient shadow-glow transition group-hover:scale-105">
                <span className="font-display text-xl font-bold text-primary-foreground">A</span>
              </div>
              <span className="absolute -inset-1 rounded-xl bg-gold/30 opacity-0 blur-md transition group-hover:opacity-100" />
            </div>
            <div className="leading-tight">
              <span className="font-display text-xl tracking-tight">
                Art<span className="text-gradient-gold italic">Bridge</span>
              </span>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">est. 2026 · culture × capital</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-background/40 p-1.5 backdrop-blur lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary/60 hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/login" className="text-sm text-muted-foreground transition hover:text-foreground">Sign in</Link>
            <Link to="/signup" className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">
              Join ArtBridge
              <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70 animate-pulse-ring" />
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="rounded-full border border-border/60 p-2 lg:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border/50 bg-background/95 px-4 py-5 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-1">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary/60 hover:text-foreground">
                  {n.label}
                </Link>
              ))}
              <div className="mt-3 flex gap-2 border-t border-border/50 pt-4">
                <Link to="/login" onClick={() => setOpen(false)} className="flex-1 rounded-full border border-border px-4 py-2.5 text-center text-sm">Sign in</Link>
                <Link to="/signup" onClick={() => setOpen(false)} className="flex-1 rounded-full bg-gold-gradient px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">Join</Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
