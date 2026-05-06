import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { events, artists } from "@/lib/mock-data";
import { Calendar, MapPin, Users, TrendingUp, Award, ArrowRight, Sparkles } from "lucide-react";
import { Pill, StatusBadge } from "@/components/ui-bits";

export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }) => {
    const ev = events.find((e) => e.id === params.eventId);
    if (!ev) throw notFound();
    return ev;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Event"} — ArtBridge` },
      { name: "description", content: loaderData?.description ?? "" },
      { property: "og:image", content: loaderData?.image ?? "" },
    ],
  }),
  component: EventDetail,
});

function EventDetail() {
  const ev = Route.useLoaderData();
  const lineup = artists.filter((a) => ev.artists.includes(a.id));
  const pct = Math.round((ev.ticketsSold / ev.capacity) * 100);
  const fundedPct = Math.round((ev.raised / ev.budget) * 100);

  return (
    <>
      <section className="relative h-[60vh] min-h-[460px] overflow-hidden">
        <img src={ev.image} alt={ev.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={ev.status} />
              <Pill>{ev.genre}</Pill>
            </div>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl">{ev.title}</h1>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{new Date(ev.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{ev.venue}, {ev.city}</span>
              <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4" />{ev.capacity.toLocaleString()} capacity</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="font-display text-3xl">About</h2>
            <p className="mt-3 text-muted-foreground">{ev.description}</p>
          </div>

          <div>
            <h2 className="font-display text-3xl">Lineup</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {lineup.map((a) => (
                <Link key={a.id} to="/artists/$artistId" params={{ artistId: a.id }} className="flex items-center gap-4 rounded-2xl bg-glass p-4 hover-lift">
                  <img src={a.image} alt={a.stageName} className="h-16 w-16 rounded-xl object-cover" />
                  <div>
                    <p className="font-display text-lg">{a.stageName}</p>
                    <p className="text-xs text-muted-foreground">{a.genre.join(" · ")}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl">Sponsors</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {ev.sponsors.map((s: string) => <Pill key={s} variant="muted">{s}</Pill>)}
            </div>
          </div>

          <div className="rounded-2xl bg-glass p-6">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold" />
              <p className="text-xs uppercase tracking-widest text-gold">Cultural Impact Score</p>
            </div>
            <div className="flex items-end gap-3">
              <p className="font-display text-6xl text-gradient-gold">{ev.impactScore}</p>
              <p className="pb-2 text-sm text-muted-foreground">/100 — diversity, debut artists, regional reach</p>
            </div>
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-glass p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Tickets sold</p>
            <p className="mt-1 font-display text-3xl">{ev.ticketsSold.toLocaleString()} <span className="text-sm text-muted-foreground">/ {ev.capacity.toLocaleString()}</span></p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full bg-gold-gradient" style={{ width: `${pct}%` }} />
            </div>
            <button className="mt-5 w-full rounded-md bg-gold-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">Join waitlist</button>
          </div>

          <div className="rounded-2xl bg-glass p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Funding raised</p>
            <p className="mt-1 font-display text-3xl">${(ev.raised / 1000).toFixed(0)}K <span className="text-sm text-muted-foreground">/ ${(ev.budget / 1000).toFixed(0)}K</span></p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full bg-emerald" style={{ width: `${fundedPct}%` }} />
            </div>
            <Link to="/dashboard/invest" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/40 px-4 py-2.5 text-sm font-semibold text-gold">
              Invest <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-2xl bg-glass p-6">
            <div className="flex items-center gap-2 text-emerald">
              <TrendingUp className="h-4 w-4" />
              <p className="text-xs uppercase tracking-widest">Projected ROI</p>
            </div>
            <p className="mt-2 font-display text-3xl text-emerald">+{ev.roiEstimate}%</p>
          </div>

          <div className="rounded-2xl bg-glass p-6">
            <div className="flex items-center gap-2 text-gold">
              <Award className="h-4 w-4" />
              <p className="text-xs uppercase tracking-widest">Sponsor placement</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Premium tier unlocks at 80% capacity. Currently at {pct}%.</p>
            <Link to="/dashboard/sponsor" className="mt-3 inline-flex text-sm text-gold story-link">Sponsor this event →</Link>
          </div>
        </aside>
      </section>
    </>
  );
}
