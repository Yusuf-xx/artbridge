import { Link } from "@tanstack/react-router";
import { Calendar, MapPin, Users, Star, ArrowUpRight } from "lucide-react";
import type { Event, Artist } from "@/lib/mock-data";
import { useEffect, useRef, useState } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  kicker,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  kicker?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`mb-4 inline-flex items-center gap-2 ${align === "center" ? "" : ""}`}>
          <span className="h-px w-8 bg-gold/50" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
          <span className="h-px w-8 bg-gold/50" />
        </div>
      )}
      <h2 className="font-display text-4xl leading-[1.02] sm:text-5xl md:text-6xl">{title}</h2>
      {kicker && <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{kicker}</p>}
      {subtitle && <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}

export function StatusBadge({ status }: { status: Event["status"] }) {
  const map = {
    upcoming: { label: "Upcoming", cls: "bg-secondary/80 text-foreground" },
    selling: { label: "● Selling", cls: "bg-emerald/15 text-emerald border border-emerald/30" },
    "sold-out": { label: "Sold Out", cls: "bg-destructive/20 text-destructive border border-destructive/30" },
  } as const;
  const m = map[status];
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${m.cls}`}>{m.label}</span>;
}

export function EventCard({ event, featured = false }: { event: Event; featured?: boolean }) {
  const pct = Math.round((event.ticketsSold / event.capacity) * 100);
  return (
    <Link
      to="/events/$eventId"
      params={{ eventId: event.id }}
      className={`group relative block overflow-hidden rounded-3xl bg-glass hover-lift ${featured ? "lg:row-span-2" : ""}`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[4/5]" : "aspect-[16/11]"}`}>
        <img src={event.image} alt={event.title} className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <div className="flex flex-wrap gap-2">
            <StatusBadge status={event.status} />
            <span className="rounded-full border border-white/10 bg-background/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur">{event.genre}</span>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground opacity-0 transition group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        {featured && (
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Headline event</p>
            <h3 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">{event.title}</h3>
          </div>
        )}
      </div>
      {!featured && (
        <div className="space-y-3 p-5">
          <h3 className="font-display text-xl leading-tight">{event.title}</h3>
        </div>
      )}
      <div className={`space-y-3 px-5 pb-5 ${featured ? "pt-5" : ""}`}>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" />{new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold" />{event.city}</span>
          <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-gold" />{event.capacity.toLocaleString()}</span>
        </div>
        <div>
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-muted-foreground">{event.ticketsSold.toLocaleString()} sold</span>
            <span className="font-mono text-gold">{pct}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-secondary/60">
            <div className="h-full bg-gold-gradient transition-all duration-1000" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link to="/artists/$artistId" params={{ artistId: artist.id }} className="group relative block overflow-hidden rounded-3xl bg-glass hover-lift">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={artist.image} alt={artist.stageName} className="h-full w-full object-cover grayscale-[20%] transition duration-[1200ms] group-hover:scale-110 group-hover:grayscale-0" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">{artist.region}</p>
          <p className="mt-1 font-display text-2xl leading-tight">{artist.stageName}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {artist.genre.slice(0, 2).map((g) => (
              <span key={g} className="rounded-full border border-gold/30 bg-background/40 px-2 py-0.5 text-[10px] text-gold backdrop-blur">{g}</span>
            ))}
          </div>
        </div>
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-background/60 px-2 py-1 text-[10px] font-mono text-gold backdrop-blur">
          <Star className="h-3 w-3 fill-current" />{artist.rating}
        </div>
      </div>
    </Link>
  );
}

export function StatCard({ label, value, suffix = "", icon }: { label: string; value: number; suffix?: string; icon?: React.ReactNode }) {
  const n = useCountUp(value);
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-glass p-6 hover-lift">
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/10 blur-2xl transition group-hover:bg-gold/20" />
      {icon && <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">{icon}</div>}
      <p className="relative font-display text-5xl text-gradient-gold sm:text-6xl">{n.toLocaleString()}{suffix}</p>
      <p className="relative mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

export function useCountUp(end: number, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setV(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return v;
}

export function Pill({ children, variant = "gold" }: { children: React.ReactNode; variant?: "gold" | "emerald" | "muted" }) {
  const cls = {
    gold: "border-gold/30 text-gold bg-gold/5",
    emerald: "border-emerald/40 text-emerald bg-emerald/5",
    muted: "border-border text-muted-foreground bg-card/40",
  }[variant];
  return <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${cls}`}>{children}</span>;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  index,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  index?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/50 bg-hero batik-pattern">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <DecorOrbs />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex items-center justify-between">
          {eyebrow && (
            <div className="inline-flex items-center gap-3 animate-fade-up">
              <span className="h-px w-10 bg-gold/60" />
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
            </div>
          )}
          {index && <span className="font-mono text-xs text-muted-foreground">{index}</span>}
        </div>
        <h1 className="mt-6 max-w-5xl font-display text-display-sm animate-fade-up delay-100">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up delay-200 sm:text-xl">{subtitle}</p>}
        {children && <div className="mt-10 animate-fade-up delay-300">{children}</div>}
      </div>
    </section>
  );
}

export function DecorOrbs() {
  return (
    <>
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-emerald/10 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="pointer-events-none absolute right-1/3 top-1/3 h-72 w-72 rounded-full bg-magenta/10 blur-[100px] animate-float" style={{ animationDelay: "4s" }} />
    </>
  );
}

export function TrendBars({ data, max }: { data: { artist: string; votes: number }[]; max?: number }) {
  const m = max ?? Math.max(...data.map((d) => d.votes));
  return (
    <div className="space-y-4">
      {data.map((d, i) => (
        <div key={d.artist} className="animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
          <div className="mb-1.5 flex justify-between text-sm">
            <span className="font-medium">{d.artist}</span>
            <span className="font-mono text-xs text-muted-foreground">{d.votes.toLocaleString()}</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-secondary/60">
            <div className="h-full bg-gold-gradient shadow-glow transition-all duration-1000" style={{ width: `${(d.votes / m) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/** Spotlight container — follows the cursor with a soft gold glow. */
export function Spotlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={`spotlight ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/** Infinite horizontal marquee. Pass children once; we duplicate it. */
export function Marquee({ children, reverse = false, className = "" }: { children: React.ReactNode; reverse?: boolean; className?: string }) {
  return (
    <div className={`marquee ${reverse ? "marquee-reverse" : ""} ${className}`}>
      <div className="marquee-track">{children}</div>
      <div className="marquee-track" aria-hidden>{children}</div>
    </div>
  );
}
