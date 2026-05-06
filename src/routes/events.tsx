import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { events } from "@/lib/mock-data";
import { EventCard, PageHero } from "@/components/ui-bits";
import { Search } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Events — ArtBridge" }, { name: "description", content: "Discover upcoming national cultural events." }] }),
  component: EventsPage,
});

const genres = ["All", "World / Fusion", "Jazz / Contemporary", "Indigenous / Electronic", "Classical / Heritage", "Indie / Alternative", "Cultural / Heritage"];

function EventsPage() {
  const [q, setQ] = useState("");
  const [g, setG] = useState("All");
  const filtered = useMemo(() => events.filter((e) => (g === "All" || e.genre === g) && e.title.toLowerCase().includes(q.toLowerCase())), [q, g]);

  return (
    <>
      <PageHero
        eyebrow="Discover"
        title={<>Every <span className="italic text-gradient-gold">stage</span>. One platform.</>}
        subtitle="Filter by genre, city or date. Each event is curated, audited and transparently funded."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search events..." className="w-full rounded-md border border-border bg-input py-2.5 pl-10 pr-4 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
          </div>
          <div className="flex flex-wrap gap-2">
            {genres.map((x) => (
              <button key={x} onClick={() => setG(x)} className={`rounded-full px-3 py-1.5 text-xs transition ${g === x ? "bg-gold-gradient text-primary-foreground" : "border border-border text-muted-foreground hover:border-gold/40"}`}>{x}</button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => <EventCard key={e.id} event={e} />)}
        </div>

        {filtered.length === 0 && <p className="mt-12 text-center text-muted-foreground">No events match your filters.</p>}

        {/* Map placeholder */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-glass">
          <div className="grid lg:grid-cols-3">
            <div className="p-8 lg:col-span-1">
              <p className="text-xs uppercase tracking-widest text-gold">Discovery map</p>
              <h2 className="mt-2 font-display text-3xl">Find events near you</h2>
              <p className="mt-3 text-sm text-muted-foreground">Visualize national cultural activity across all regions. Filter by date, genre and capacity.</p>
              <ul className="mt-6 space-y-2 text-sm">
                {events.slice(0, 4).map((e) => (
                  <li key={e.id} className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-gold" /><span><span className="font-medium">{e.city}</span> · {e.title}</span></li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] lg:col-span-2 lg:aspect-auto">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80" alt="Map" className="h-full w-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
              {events.slice(0, 5).map((e, i) => (
                <span key={e.id} className="absolute h-3 w-3 animate-glow rounded-full bg-gold ring-4 ring-gold/20" style={{ left: `${20 + i * 14}%`, top: `${30 + (i % 3) * 20}%` }} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
