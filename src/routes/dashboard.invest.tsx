import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { events, investmentTiers } from "@/lib/mock-data";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Download, Check } from "lucide-react";

export const Route = createFileRoute("/dashboard/invest")({
  head: () => ({ meta: [{ title: "Invest — ArtBridge Dashboard" }] }),
  component: Invest,
});

const portfolioData = [
  { m: "Q1", v: 100 }, { m: "Q2", v: 108 }, { m: "Q3", v: 122 }, { m: "Q4", v: 138 },
  { m: "Q5", v: 156 }, { m: "Q6", v: 178 },
];

function Invest() {
  const [amount, setAmount] = useState(50000);
  const [tier, setTier] = useState("Silver");
  const event = events[0];

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-gold">Investor</p>
        <h1 className="mt-1 font-display text-4xl">Portfolio & opportunities</h1>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-glass p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Portfolio value</p>
          <p className="mt-2 font-display text-3xl">$1.42M</p>
          <p className="mt-1 text-xs text-emerald">+24.3% YTD</p>
        </div>
        <div className="rounded-2xl bg-glass p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Active investments</p>
          <p className="mt-2 font-display text-3xl">8</p>
          <p className="mt-1 text-xs text-muted-foreground">Across 5 events</p>
        </div>
        <div className="rounded-2xl bg-glass p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Next distribution</p>
          <p className="mt-2 font-display text-3xl">$48K</p>
          <p className="mt-1 text-xs text-muted-foreground">Q4 2026</p>
        </div>
      </div>

      <div className="rounded-2xl bg-glass p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-xl">ROI timeline</h3>
          <span className="text-xs text-emerald inline-flex items-center gap-1"><TrendingUp className="h-3 w-3" />Outperforming benchmark</span>
        </div>
        <div className="h-56">
          <ResponsiveContainer>
            <LineChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
              <XAxis dataKey="m" stroke="oklch(0.72 0.02 80)" fontSize={11} />
              <YAxis stroke="oklch(0.72 0.02 80)" fontSize={11} />
              <Tooltip contentStyle={{ background: "oklch(0.22 0.04 255)", border: "1px solid oklch(0.78 0.13 80 / 0.3)", borderRadius: 8 }} />
              <Line type="monotone" dataKey="v" stroke="oklch(0.78 0.13 80)" strokeWidth={2.5} dot={{ fill: "oklch(0.78 0.13 80)" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl bg-glass p-6">
        <h3 className="font-display text-xl">New opportunity · {event.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">Projected ROI <span className="text-emerald">+{event.roiEstimate}%</span> · Capacity {event.capacity.toLocaleString()}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {investmentTiers.map((t) => (
            <button key={t.name} onClick={() => { setTier(t.name); setAmount(t.min); }} className={`rounded-2xl border p-4 text-left transition ${tier === t.name ? "border-gold bg-gold/5 shadow-glow" : "border-border hover:border-gold/40"}`}>
              <p className="font-display text-lg">{t.name}</p>
              <p className="mt-1 text-2xl text-gradient-gold">${(t.min / 1000).toFixed(0)}K+</p>
              <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                {t.perks.map((p) => <li key={p} className="flex gap-1.5"><Check className="h-3 w-3 shrink-0 text-gold" />{p}</li>)}
              </ul>
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-card/50 p-5">
          <label className="block">
            <div className="mb-2 flex justify-between">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Custom amount</span>
              <span className="font-display text-2xl text-gradient-gold">${amount.toLocaleString()}</span>
            </div>
            <input type="range" min={5000} max={1000000} step={5000} value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-[oklch(0.78_0.13_80)]" />
          </label>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">Projected return: <span className="font-semibold text-emerald">${Math.round(amount * (event.roiEstimate / 100)).toLocaleString()}</span></p>
            <div className="flex gap-2">
              <button className="rounded-md border border-border px-4 py-2 text-sm">Preview term sheet</button>
              <button className="rounded-md bg-gold-gradient px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow">Confirm investment</button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-glass p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl">Quarterly impact reports</h3>
          <button className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm"><Download className="h-4 w-4" />Download all</button>
        </div>
        <ul className="mt-4 divide-y divide-border">
          {["Q3 2026 Impact Report", "Q2 2026 Impact Report", "Q1 2026 Impact Report"].map((r) => (
            <li key={r} className="flex items-center justify-between py-3 text-sm"><span>{r}</span><button className="text-gold story-link">Download PDF →</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
