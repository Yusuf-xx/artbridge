import { createFileRoute } from "@tanstack/react-router";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Download, Landmark } from "lucide-react";

export const Route = createFileRoute("/dashboard/impact")({
  head: () => ({ meta: [{ title: "Impact — ArtBridge Government" }] }),
  component: Impact,
});

const economicData = [
  { y: "2022", v: 24 }, { y: "2023", v: 38 }, { y: "2024", v: 52 }, { y: "2025", v: 68 }, { y: "2026", v: 84 },
];
const employmentData = [
  { y: "2022", v: 3200 }, { y: "2023", v: 5800 }, { y: "2024", v: 8200 }, { y: "2025", v: 10400 }, { y: "2026", v: 12480 },
];

function Impact() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold">Government dashboard</p>
          <h1 className="mt-1 font-display text-4xl">National cultural impact</h1>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"><Download className="h-4 w-4" />Export report</button>
      </header>

      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { l: "Economic impact", v: "$84M" },
          { l: "Jobs generated", v: "12,480" },
          { l: "Tourism multiplier", v: "4.2x" },
          { l: "Diversity index", v: "0.87" },
        ].map((k) => (
          <div key={k.l} className="rounded-2xl bg-glass p-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{k.l}</p>
            <p className="mt-2 font-display text-3xl text-gradient-gold">{k.v}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl bg-glass p-6">
          <h3 className="font-display text-xl">Economic impact (M USD)</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <AreaChart data={economicData}>
                <defs>
                  <linearGradient id="ig" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.55 0.12 160)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.55 0.12 160)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
                <XAxis dataKey="y" stroke="oklch(0.72 0.02 80)" fontSize={11} />
                <YAxis stroke="oklch(0.72 0.02 80)" fontSize={11} />
                <Tooltip contentStyle={{ background: "oklch(0.22 0.04 255)", border: "1px solid oklch(0.78 0.13 80 / 0.3)", borderRadius: 8 }} />
                <Area type="monotone" dataKey="v" stroke="oklch(0.55 0.12 160)" strokeWidth={2} fill="url(#ig)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl bg-glass p-6">
          <h3 className="font-display text-xl">Employment generated</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <LineChart data={employmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
                <XAxis dataKey="y" stroke="oklch(0.72 0.02 80)" fontSize={11} />
                <YAxis stroke="oklch(0.72 0.02 80)" fontSize={11} />
                <Tooltip contentStyle={{ background: "oklch(0.22 0.04 255)", border: "1px solid oklch(0.78 0.13 80 / 0.3)", borderRadius: 8 }} />
                <Line type="monotone" dataKey="v" stroke="oklch(0.78 0.13 80)" strokeWidth={2.5} dot={{ fill: "oklch(0.78 0.13 80)" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-glass p-6">
        <h3 className="font-display text-xl">Grant allocation</h3>
        <ul className="mt-4 divide-y divide-border">
          {[
            { name: "Heritage Revival Fund", v: 4200000, pct: 84 },
            { name: "Youth Arts Initiative", v: 2800000, pct: 62 },
            { name: "Indigenous Voices Grant", v: 3500000, pct: 71 },
            { name: "Regional Tour Subsidy", v: 1900000, pct: 45 },
          ].map((g) => (
            <li key={g.name} className="py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-2"><Landmark className="h-4 w-4 text-gold" />{g.name}</span>
                <span className="text-muted-foreground">${(g.v / 1e6).toFixed(1)}M allocated</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div className="h-full bg-gold-gradient" style={{ width: `${g.pct}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
