import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { artists } from "@/lib/mock-data";
import { ArtistCard, PageHero } from "@/components/ui-bits";
import { Search } from "lucide-react";

export const Route = createFileRoute("/artists")({
  head: () => ({ meta: [{ title: "Artists — ArtBridge" }] }),
  component: ArtistsPage,
});

const genres = ["All", "Indie", "Electronic", "Jazz", "Fusion", "Classical", "World", "Heritage", "Vocal", "Indigenous"];

function ArtistsPage() {
  const [q, setQ] = useState("");
  const [g, setG] = useState("All");
  const filtered = artists.filter((a) => (g === "All" || a.genre.includes(g)) && (a.stageName.toLowerCase().includes(q.toLowerCase()) || a.name.toLowerCase().includes(q.toLowerCase())));

  return (
    <>
      <PageHero
        eyebrow="Talent Directory"
        title={<>Voices shaping <span className="italic text-gradient-gold">our culture</span></>}
        subtitle="From debut performers to national icons — discover, follow and book."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search artists..." className="w-full rounded-md border border-border bg-input py-2.5 pl-10 pr-4 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {genres.map((x) => (
            <button key={x} onClick={() => setG(x)} className={`rounded-full px-3 py-1.5 text-xs transition ${g === x ? "bg-gold-gradient text-primary-foreground" : "border border-border text-muted-foreground hover:border-gold/40"}`}>{x}</button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((a) => <ArtistCard key={a.id} artist={a} />)}
        </div>
      </section>
    </>
  );
}
