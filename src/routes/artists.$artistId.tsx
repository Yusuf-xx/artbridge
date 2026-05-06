import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { artists, events } from "@/lib/mock-data";
import { Star, Users, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Pill, EventCard } from "@/components/ui-bits";

export const Route = createFileRoute("/artists/$artistId")({
  loader: ({ params }) => {
    const a = artists.find((x) => x.id === params.artistId);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.stageName ?? "Artist"} — ArtBridge` },
      { name: "description", content: loaderData?.bio ?? "" },
      { property: "og:image", content: loaderData?.image ?? "" },
    ],
  }),
  component: ArtistDetail,
});

function ArtistDetail() {
  const a = Route.useLoaderData();
  const upcoming = events.filter((e) => e.artists.includes(a.id));

  return (
    <>
      <section className="relative overflow-hidden bg-hero batik-pattern">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elegant">
            <img src={a.image} alt={a.stageName} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{a.region}</p>
            <h1 className="mt-3 font-display text-5xl sm:text-7xl">{a.stageName}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{a.name}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {a.genre.map((g: string) => <Pill key={g}>{g}</Pill>)}
            </div>
            <p className="mt-6 text-muted-foreground">{a.bio}</p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground"><Users className="h-4 w-4" />{(a.followers / 1000).toFixed(0)}K followers</span>
              <span className="inline-flex items-center gap-1.5 text-gold"><Star className="h-4 w-4 fill-current" />{a.rating} rating</span>
              <span className="text-muted-foreground">Fee: <span className="text-foreground">{a.feeRange}</span></span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
                Request booking <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold">Follow</button>
              <Link to="/collaborate" className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold">Collaborate</Link>
            </div>
          </div>
        </div>
      </section>

      {upcoming.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl">Upcoming performances</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl">Availability</h2>
        <div className="mt-6 grid grid-cols-7 gap-2">
          {Array.from({ length: 28 }).map((_, i) => {
            const booked = [3, 4, 5, 12, 19, 20].includes(i);
            return (
              <div key={i} className={`flex aspect-square items-center justify-center rounded-lg text-xs ${booked ? "bg-gold/20 text-gold" : "bg-secondary text-muted-foreground"}`}>
                {i + 1}
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-gold/20" /> Booked</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-secondary" /> Available</span>
        </div>
      </section>
    </>
  );
}
