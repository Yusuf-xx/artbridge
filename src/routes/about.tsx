import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/ui-bits";
import { Heart, Globe, Shield, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — ArtBridge" }] }),
  component: About,
});

const values = [
  { icon: Heart, t: "Culture-first", d: "Every decision starts with the artist and the audience." },
  { icon: Globe, t: "National in scope", d: "Built to unify regions, genres and generations." },
  { icon: Shield, t: "Radical transparency", d: "Open data on funding, ROI and impact." },
  { icon: Sparkles, t: "Excellence as standard", d: "World-class production for every show." },
];

const team = [
  { name: "Adlin Mokhtar", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
  { name: "Ravi Krishnan", role: "Head of Investments", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Sarah Lim", role: "VP, Cultural Programs", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Marcus Wong", role: "Government Relations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our mission"
        title={<>Bridging the worlds of <span className="italic text-gradient-gold">art</span> and <span className="italic text-gradient-gold">capital.</span></>}
        subtitle="ArtBridge is the connective tissue of national culture — uniting creators, funders, sponsors and policy makers under one transparent ecosystem."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Vision" title="A future where every voice can find its stage." subtitle="We believe culture is national infrastructure. ArtBridge is how it gets built." />
      </section>

      <section className="border-y border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Values" title="What guides us" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl bg-glass p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold"><v.icon className="h-5 w-5" /></div>
                <h3 className="font-display text-xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Team" title="The people behind the bridge" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <div key={p.name} className="text-center">
              <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-2xl">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 font-display text-lg">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
