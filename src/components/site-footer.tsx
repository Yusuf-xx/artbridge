import { Link } from "@tanstack/react-router";
import { Marquee } from "@/components/ui-bits";
import { ArrowUpRight, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const groups = [
  { title: "Discover", links: [
    { to: "/events", label: "Events" },
    { to: "/artists", label: "Artists" },
    { to: "/survey", label: "Trend survey" },
    { to: "/collaborate", label: "Collaborations" },
  ] },
  { title: "Ecosystem", links: [
    { to: "/dashboard/invest", label: "Investors" },
    { to: "/dashboard/sponsor", label: "Sponsors" },
    { to: "/dashboard/impact", label: "Government" },
    { to: "/dashboard/slots", label: "Managers" },
  ] },
  { title: "Company", links: [
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/login", label: "Sign in" },
  ] },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border/50 bg-card/40 batik-pattern">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* huge wordmark marquee */}
      <Marquee className="border-b border-border/40 py-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="font-display text-7xl text-outline sm:text-8xl">
            ArtBridge <span className="text-gold/60">✦</span>{" "}
          </span>
        ))}
      </Marquee>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient shadow-glow">
              <span className="font-display text-xl font-bold text-primary-foreground">A</span>
            </div>
            <span className="font-display text-2xl">Art<span className="text-gradient-gold italic">Bridge</span></span>
          </Link>
          <p className="mt-6 max-w-md text-base text-muted-foreground">
            One stage. Every voice. Infinite impact. ArtBridge unites the cultural ecosystem under a single, transparent platform.
          </p>
          <form className="mt-8 max-w-md">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Stay on the list</p>
            <div className="flex overflow-hidden rounded-full border border-gold/30 bg-background/40 backdrop-blur">
              <input type="email" required placeholder="your@email.com" className="flex-1 bg-transparent px-5 py-3 text-sm focus:outline-none" />
              <button type="submit" className="inline-flex items-center gap-1.5 bg-gold-gradient px-5 text-sm font-semibold text-primary-foreground shadow-glow">
                Subscribe <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </form>

          <div className="mt-8 flex gap-2">
            {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:border-gold/50 hover:text-gold">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.title} className="lg:col-span-2">
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">{g.title}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="story-link hover:text-foreground">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-1">
          <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">HQ</h4>
          <p className="text-sm text-muted-foreground">Menara KLCC<br/>Kuala Lumpur</p>
          <p className="mt-2 font-mono text-xs text-muted-foreground">3.1568° N, 101.7123° E</p>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p className="font-mono uppercase tracking-widest">© 2026 ArtBridge — National Cultural Platform</p>
          <p className="font-mono uppercase tracking-widest">Crafted with intention · v1.0</p>
        </div>
      </div>
    </footer>
  );
}
