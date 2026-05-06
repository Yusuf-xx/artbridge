import { createFileRoute } from "@tanstack/react-router";
import { surveyTrends } from "@/lib/mock-data";
import { TrendBars } from "@/components/ui-bits";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/dashboard/survey-analytics")({
  head: () => ({ meta: [{ title: "Survey Analytics — ArtBridge" }] }),
  component: SurveyAnalytics,
});

const regions = [
  { region: "KL", votes: 32000 }, { region: "Penang", votes: 18400 }, { region: "Sabah", votes: 14200 },
  { region: "Sarawak", votes: 12800 }, { region: "Johor", votes: 11200 }, { region: "Perak", votes: 9100 },
];

const heat = ["Heritage", "Jazz", "Indie", "Electronic", "Classical", "Indigenous", "Pop"];

function SurveyAnalytics() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-gold">Manager intelligence</p>
        <h1 className="mt-1 font-display text-4xl">Survey & demand analytics</h1>
      </header>

      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { l: "Total votes (30d)", v: "98,420" },
          { l: "Active surveys", v: "12" },
          { l: "Cities covered", v: "24" },
          { l: "Avg sentiment", v: "+82%" },
        ].map((k) => (
          <div key={k.l} className="rounded-2xl bg-glass p-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{k.l}</p>
            <p className="mt-2 font-display text-3xl text-gradient-gold">{k.v}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl bg-glass p-6">
          <h3 className="font-display text-xl">Top artist demand</h3>
          <div className="mt-5"><TrendBars data={surveyTrends} /></div>
        </div>
        <div className="rounded-2xl bg-glass p-6">
          <h3 className="font-display text-xl">Votes by region</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <BarChart data={regions} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
                <XAxis type="number" stroke="oklch(0.72 0.02 80)" fontSize={11} />
                <YAxis type="category" dataKey="region" stroke="oklch(0.72 0.02 80)" fontSize={11} width={70} />
                <Tooltip contentStyle={{ background: "oklch(0.22 0.04 255)", border: "1px solid oklch(0.78 0.13 80 / 0.3)", borderRadius: 8 }} />
                <Bar dataKey="votes" fill="oklch(0.78 0.13 80)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-glass p-6">
        <h3 className="font-display text-xl">Genre × region heatmap</h3>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr><th className="p-2 text-left text-muted-foreground">Genre</th>{regions.map((r) => <th key={r.region} className="p-2 text-muted-foreground">{r.region}</th>)}</tr>
            </thead>
            <tbody>
              {heat.map((g, gi) => (
                <tr key={g}>
                  <td className="p-2 font-medium">{g}</td>
                  {regions.map((r, ri) => {
                    const intensity = ((gi * 7 + ri * 3) % 10) / 10;
                    return <td key={r.region} className="p-1"><div className="h-10 rounded" style={{ background: `oklch(0.78 0.13 80 / ${0.1 + intensity * 0.7})` }} /></td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
