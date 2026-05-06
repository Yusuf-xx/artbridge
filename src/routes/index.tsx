import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Users,
  Building2,
  Landmark,
  Mic2,
  Quote,
  Globe2,
  ShieldCheck,
  Zap,
  PlayCircle,
} from "lucide-react";
import { events, artists, heroStats, surveyTrends, testimonials } from "@/lib/mock-data";
import {
  EventCard,
  ArtistCard,
  StatCard,
  SectionHeading,
  TrendBars,
  DecorOrbs,
  Pill,
  Marquee,
  Spotlight,
} from "@/components/ui-bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ArtBridge — Where Culture Meets Capital" },
      { name: "description", content: "The national platform uniting artists, investors, sponsors and governments to power cultural events with measurable impact." },
    ],
  }),
  component: Index,
});

const roles = [
  { icon: Mic2, title: "Artists", body: "Showcase your craft, book national stages, collaborate across genres.", color: "from-gold/20 to-gold/0" },
  { icon: TrendingUp, title: "Investors", body: "Back culturally significant events with transparent ROI tracking.", color: "from-emerald/20 to-emerald/0" },
  { icon: Building2, title: "Sponsors", body: "Reach engaged audiences with dynamic, performance-based packages.", color: "from-magenta/20 to-magenta/0" },
  { icon: Landmark, title: "Government", body: "Measure economic impact, allocate grants, shape national strategy.", color: "from-gold/20 to-gold/0" },
];

const steps = [
  { n: "01", t: "Discover", d: "Browse events, artists and themes shaped by national survey trends." },
  { n: "02", t: "Engage", d: "Vote, book, invest or sponsor — every role finds their place." },
  { n: "03", t: "Collaborate", d: "Cross-genre partnerships powered by transparent matching." },
  { n: "04", t: "Impact", d: "Track cultural and economic outcomes in real time." },
];

const partners = ["PETRONAS", "Khazanah", "Maybank", "MAS", "Astro", "Tourism Malaysia", "Spotify", "Heineken", "CIMB", "Genting"];

function Index() {
  return (
    <>
      {/* ============= HERO ============= */}
      <section className="relative isolate overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-mesh opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <DecorOrbs />
        {/* aurora ring */}
        <div className="pointer-events-none absolute -top-[30%] left-1/2 h-[1100px] w-[1100px] -translate-x-1/2 rounded-full bg-aurora opacity-20 blur-3xl animate-spin-slow" />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
          {/* breadcrumbs / status row */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground animate-fade-up">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" /> Live · Season 2026</span>
            <span>Index No. 001 / Volume IV</span>
          </div>

          {/* HEADLINE */}
          <h1 className="mt-10 font-display text-display animate-fade-up delay-100">
            Where{" "}
            <span className="text-gradient-aurora">Culture</span>
            <br />
            Meets{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold italic">Capital.</span>
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                <path d="M2 8 Q 75 2, 150 7 T 298 6" stroke="url(#g)" strokeWidth="2" strokeLinecap="round" />
                <defs><linearGradient id="g" x1="0" x2="1"><stop stopColor="oklch(0.85 0.15 85)" /><stop offset="1" stopColor="oklch(0.62 0.22 340)" /></linearGradient></defs>
              </svg>
            </span>
          </h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="max-w-xl text-lg text-muted-foreground animate-fade-up delay-200 sm:text-xl">
                One stage. Every voice. Infinite impact. ArtBridge unites artists, investors, sponsors and governments to power the next generation of national cultural events.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up delay-300">
                <Link to="/signup" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                  Join as Artist
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link to="/dashboard/invest" className="rounded-full border border-gold/30 bg-card/40 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:border-gold/60 hover:bg-card/70">Invest in Culture</Link>
                <Link to="/dashboard/sponsor" className="rounded-full border border-border bg-card/30 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:border-emerald/40">Sponsor an Event</Link>
                <Link to="/events" className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:text-gold">
                  <PlayCircle className="h-4 w-4" /> Watch the film
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-4 animate-fade-up delay-400">
                <div className="flex -space-x-2">
                  {artists.slice(0, 4).map((a) => (
                    <img key={a.id} src={a.image} alt={a.stageName} className="h-10 w-10 rounded-full border-2 border-background object-cover" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-mono text-gold">2,840+</span> artists already on the platform
                </p>
              </div>
            </div>

            {/* Right: bento featured */}
            <div className="relative lg:col-span-5">
              <div className="grid grid-cols-6 grid-rows-6 gap-3 animate-fade-up delay-300">
                <div className="relative col-span-6 row-span-4 overflow-hidden rounded-3xl shadow-elegant ring-gold-soft">
                  <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1000&q=85" alt="Cultural performance" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <Pill variant="emerald">● Live · 18,420 watching</Pill>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Now trending</p>
                    <p className="mt-1 font-display text-3xl">Harmoni Nusantara</p>
                    <p className="text-xs text-muted-foreground">73% of capacity sold · KL · June 2026</p>
                  </div>
                </div>

                <div className="col-span-3 row-span-2 rounded-3xl bg-glass p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Avg ROI</p>
                  <p className="mt-1 font-display text-4xl text-gradient-gold">+28%</p>
                  <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald">
                    <TrendingUp className="h-3 w-3" /> +6.2 YoY
                  </div>
                </div>

                <div className="relative col-span-3 row-span-2 overflow-hidden rounded-3xl bg-glass p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Impact Score</p>
                  <p className="mt-1 font-display text-4xl">92<span className="text-base text-muted-foreground">/100</span></p>
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span key={i} className={`h-1.5 flex-1 rounded-full ${i < 9 ? "bg-gold-gradient" : "bg-secondary"}`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* floating chip */}
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-glass-strong p-4 shadow-elegant sm:block animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/15 text-emerald">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Audited</p>
                    <p className="font-display text-sm">Transparent funding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* stats strip */}
          <div className="mt-24 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {heroStats.map((s) => <StatCard key={s.label} {...s} />)}
          </div>
        </div>

        {/* bottom marquee */}
        <Marquee className="border-t border-border/40 py-5 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {["Artists", "Investors", "Sponsors", "Government", "Public", "Event Managers"].map((w) => (
            <span key={w} className="inline-flex items-center gap-6">
              <span>{w}</span>
              <span className="text-gold">✦</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* ============= PARTNERS ============= */}
      <section className="relative border-b border-border/40 bg-card/20 py-10">
        <Marquee>
          {partners.map((n) => (
            <span key={n} className="font-display text-3xl tracking-widest text-muted-foreground/70 transition hover:text-gold">{n}</span>
          ))}
        </Marquee>
      </section>

      {/* ============= MANIFESTO STRIP ============= */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 dotted-bg opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold">Manifesto · 001</p>
          <p className="mx-auto mt-8 max-w-5xl font-display text-3xl leading-[1.2] sm:text-5xl md:text-6xl">
            Culture is not a <span className="italic text-outline">cost center.</span> It is the
            <span className="text-gradient-gold"> infrastructure </span>
            of national identity, soft power, and the next generation of <span className="italic">economic growth.</span>
          </p>
          <p className="mx-auto mt-10 max-w-xl text-sm text-muted-foreground">
            ArtBridge is the operating system that makes it measurable, fundable, and shared.
          </p>
        </div>
      </section>

      {/* ============= HOW IT WORKS ============= */}
      <section className="relative border-y border-border/40 bg-card/20 py-28">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The flow"
            title={<>Four steps. <span className="italic text-gradient-gold">Every</span> stakeholder.</>}
            subtitle="A unified flow connecting creators, capital and culture — from discovery to measurable impact."
          />
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Spotlight key={s.n} className="group relative overflow-hidden rounded-3xl bg-glass p-7 hover-lift">
                <div className="flex items-start justify-between">
                  <p className="font-display text-6xl text-gradient-gold">{s.n}</p>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                <div className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold via-magenta to-emerald transition-transform duration-500 group-hover:scale-x-100" />
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-4 bg-gold/30 lg:block" />
                )}
              </Spotlight>
            ))}
          </div>
        </div>
      </section>

      {/* ============= ROLES ============= */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="The ecosystem" title={<>Built for every <span className="italic text-gradient-gold">role</span> in culture</>} />
            <Link to="/about" className="story-link text-sm text-gold">Learn the model →</Link>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {roles.map((r, i) => (
              <div key={r.title} className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-7 transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${r.color} blur-2xl`} />
                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">0{i + 1}</p>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold transition group-hover:rotate-6 group-hover:bg-gold/20">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= UPCOMING EVENTS — bento ============= */}
      <section className="relative border-y border-border/40 bg-card/20 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="On stage" title={<>Upcoming <span className="italic text-gradient-gold">events</span></>} subtitle="Curated, booked and audited through ArtBridge." />
            <Link to="/events" className="rounded-full border border-gold/40 px-5 py-2.5 text-sm text-gold transition hover:bg-gold hover:text-primary-foreground">All events →</Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
            <EventCard event={events[0]} featured />
            {events.slice(1, 5).map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        </div>
      </section>

      {/* ============= TRENDING SURVEY ============= */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 batik-pattern opacity-60" />
        <DecorOrbs />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Pill><Zap className="h-3 w-3" /> Live trend engine</Pill>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl">
              Who do <span className="italic">you</span> want to see <span className="text-gradient-gold">on stage</span> next?
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Public votes shape the lineup. Event managers see real-time demand by region, genre and artist — and book accordingly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/survey" className="rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Take the survey</Link>
              <Link to="/dashboard/survey-analytics" className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-gold/40">View analytics</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { l: "Votes / mo", v: "84.2K" },
                { l: "Regions", v: "14" },
                { l: "Genres", v: "26" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border/60 bg-card/40 p-4 text-center">
                  <p className="font-display text-2xl text-gradient-gold">{s.v}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl bg-glass-strong p-8 shadow-elegant">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-gold/30 via-transparent to-emerald/20 opacity-40 blur-xl" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <p className="font-display text-lg">Top artist demand</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald/15 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-emerald">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" /> live · 30d
                </span>
              </div>
              <TrendBars data={surveyTrends} />
            </div>
          </div>
        </div>
      </section>

      {/* ============= FEATURED ARTISTS ============= */}
      <section className="relative border-y border-border/40 bg-card/20 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Talent" title={<>Featured <span className="italic text-gradient-gold">artists</span></>} subtitle="A curated rotation across regions, genres and generations." />
            <Link to="/artists" className="story-link text-sm text-gold">Full directory →</Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {artists.slice(0, 4).map((a) => <ArtistCard key={a.id} artist={a} />)}
          </div>
        </div>
      </section>

      {/* ============= IMPACT NUMBERS ============= */}
      <section className="relative py-28">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Impact"
            title={<>Cultural value, <span className="italic text-gradient-gold">measured.</span></>}
            align="center"
            subtitle="Independent metrics shared with every stakeholder, in real time."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Jobs generated" value={12480} suffix="+" icon={<Users className="h-5 w-5" />} />
            <StatCard label="Tourism multiplier" value={4} suffix=".2x" icon={<TrendingUp className="h-5 w-5" />} />
            <StatCard label="Debut artists hosted" value={328} icon={<Mic2 className="h-5 w-5" />} />
            <StatCard label="Grants allocated" value={18} suffix="M" icon={<Landmark className="h-5 w-5" />} />
          </div>
        </div>
      </section>

      {/* ============= TESTIMONIALS ============= */}
      <section className="relative border-y border-border/40 bg-card/20 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Voices" title={<>What the <span className="italic text-gradient-gold">ecosystem</span> is saying</>} />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-3xl bg-glass p-10 hover-lift">
                <Quote className="h-10 w-10 text-gold/40" />
                <blockquote className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
                  "<span className="shimmer-text">{t.quote}</span>"
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-display text-base">{t.author}</p>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{t.role}</p>
                  </div>
                  <span className="font-mono text-[11px] text-gold">0{i + 1} / 0{testimonials.length}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CTA ============= */}
      <section className="relative px-4 py-28 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-gold/30 bg-hero p-10 text-center shadow-elegant sm:p-20">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <DecorOrbs />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-aurora opacity-25 blur-3xl animate-spin-slow" />
          <div className="relative">
            <Pill><Globe2 className="h-3 w-3" /> National Cultural Platform</Pill>
            <h2 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl">
              Ready to <span className="italic text-gradient-gold">join the stage?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground sm:text-lg">
              Whether you create, invest, sponsor, govern or simply love culture — there's a role waiting for you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/signup" className="rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow">Create your account</Link>
              <Link to="/about" className="rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold backdrop-blur transition hover:border-gold/40">Learn more</Link>
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <Sparkles className="mr-1 inline h-3 w-3 text-gold" /> 2,840 artists · 412 investors · 186 events live
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
