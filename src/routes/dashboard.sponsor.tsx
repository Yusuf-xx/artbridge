import { createFileRoute } from "@tanstack/react-router";
import { sponsorPackages, events } from "@/lib/mock-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Eye, Users, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/dashboard/sponsor")({
  head: () => ({ meta: [{ title: "Sponsor — ArtBridge Dashboard" }] }),
  component: Sponsor,
});

const reachData = [
  { m: "Wk 1", v: 24000 }, { m: "Wk 2", v: 38000 }, { m: "Wk 3", v: 52000 },
  { m: "Wk 4", v: 71000 }, { m: "Wk 5", v: 96000 }, { m: "Wk 6", v: 124000 },
];

function Sponsor() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-gold">Sponsor</p>
        <h1 className="mt-1 font-display text-4xl">Brand exposure & packages</h1>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { l: "Active sponsorships", v: "4", icon: Users },
          { l: "Total reach", v: "2.4M", icon: Eye },
          { l: "Avg engagement", v: "+34%", icon: TrendingUp },
        ].map((k) => (
          <div key={k.l} className="rounded-2xl bg-glass p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold"><k.icon className="h-4 w-4" /></div>
            <p className="mt-4 font-display text-3xl">{k.v}</p>
            <p className="mt-1 text-xs text-muted-foreground">{k.l}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-glass p-6">
        <h3 className="font-display text-xl">Reach trajectory · Last 6 weeks</h3>
        <div className="mt-4 h-56">
          <ResponsiveContainer>
            <BarChart data={reachData}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
              <XAxis dataKey="m" stroke="oklch(0.72 0.02 80)" fontSize={11} />
              <YAxis stroke="oklch(0.72 0.02 80)" fontSize={11} />
              <Tooltip contentStyle={{ background: "oklch(0.22 0.04 255)", border: "1px solid oklch(0.78 0.13 80 / 0.3)", borderRadius: 8 }} />
              <Bar dataKey="v" fill="oklch(0.55 0.12 160)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl bg-glass p-6">
        <h3 className="font-display text-xl">Sponsorship packages</h3>
        <p className="mt-1 text-sm text-muted-foreground">Dynamic pricing · adjusts with ticket sales & survey demand.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sponsorPackages.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card/50 p-5 transition hover:border-gold/40">
              <p className="font-display text-lg">{p.name}</p>
              <p className="mt-2 text-2xl text-gradient-gold">${p.price.toLocaleString()}</p>
              <p className="mt-1 text-xs text-muted-foreground">Reach: {p.reach}</p>
              <button className="mt-4 w-full rounded-md border border-gold/40 py-2 text-xs font-semibold text-gold">Select</button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-glass p-6">
        <h3 className="font-display text-xl">Active campaigns</h3>
        <ul className="mt-4 divide-y divide-border">
          {events.slice(0, 4).map((e) => (
            <li key={e.id} className="flex items-center gap-4 py-4">
              <img src={e.image} alt="" className="h-14 w-20 rounded-lg object-cover" />
              <div className="flex-1">
                <p className="font-medium">{e.title}</p>
                <p className="text-xs text-muted-foreground">{e.city} · {Math.round((e.ticketsSold / e.capacity) * 100)}% sold</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-emerald">+{20 + (e.ticketsSold % 15)}% reach</p>
                <p className="text-xs text-muted-foreground">vs projected</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
