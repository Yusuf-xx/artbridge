import { createFileRoute, Link } from "@tanstack/react-router";
import { collaborations } from "@/lib/mock-data";
import { PageHero, Pill } from "@/components/ui-bits";
import { Plus, Calendar } from "lucide-react";

export const Route = createFileRoute("/collaborate")({
  head: () => ({ meta: [{ title: "Collaborate — ArtBridge" }] }),
  component: Collaborate,
});

function Collaborate() {
  return (
    <>
      <PageHero
        eyebrow="Artist Collaboration Board"
        title={<>Find your <span className="italic text-gradient-gold">stage partner</span></>}
        subtitle="Post what you're looking for. Discover artists open to joint sets, studio EPs, and one-off collaborations."
      >
        <button className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
          <Plus className="h-4 w-4" /> Post collaboration
        </button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {collaborations.map((c) => (
            <article key={c.id} className="rounded-2xl bg-glass p-6 hover-lift">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-2xl">{c.artist}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.lookingFor}</p>
                </div>
                <Pill>{c.genre}</Pill>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" />{c.date}</span>
                <button className="rounded-md border border-gold/40 px-4 py-2 text-xs font-semibold text-gold">Connect</button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-glass p-10 text-center">
          <h2 className="font-display text-3xl">Looking to collaborate?</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">Post your availability, genre and what you're searching for. Verified artists respond directly.</p>
          <Link to="/signup" className="mt-6 inline-flex rounded-md bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Become an artist</Link>
        </div>
      </section>
    </>
  );
}
