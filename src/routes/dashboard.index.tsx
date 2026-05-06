import { createFileRoute } from "@tanstack/react-router";
import { events, surveyTrends } from "@/lib/mock-data";
import { useCountUp } from "@/components/ui-bits";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";
import { ArrowUpRight, Calendar, Users, DollarSign, Award } from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  component: Overview,
});

const revenueData = [
  { m: "Jan", v: 120000 }, { m: "Feb", v: 180000 }, { m: "Mar", v: 240000 },
  { m: "Apr", v: 320000 }, { m: "May", v: 410000 }, { m: "Jun", v: 580000 },
  { m: "Jul", v: 640000 }, { m: "Aug", v: 720000 },
];

const genreSplit = [
  { name: "Heritage", v: 32 },
  { name: "Jazz", v: 18 },
  { name: "Electronic", v: 22 },
  { name: "Indie", v: 15 },
  { name: "Classical", v: 13 },
];

const COLORS = ["oklch(0.78 0.13 80)", "oklch(0.55 0.12 160)", "oklch(0.62 0.14 220)", "oklch(0.7 0.18 30)", "oklch(0.65 0.18 320)"];

function Kpi({ label, value, suffix, delta, icon: Icon }: { label: string; value: number; suffix?: string; delta: string; icon: any }) {
  const v = useCountUp(value);
  return (
    <div className="rounded-2xl bg-glass p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold"><Icon className="h-4 w-4" /></div>
        <span className="inline-flex items-center gap-0.5 text-xs text-emerald"><ArrowUpRight className="h-3 w-3" />{delta}</span>
      </div>
      <p className="mt-4 font-display text-3xl">{v.toLocaleString()}{suffix}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Overview() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-gold">Welcome back</p>
        <h1 className="mt-1 font-display text-4xl">Your stage, in numbers.</h1>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi label="Upcoming events" value={6} delta="+2" icon={Calendar} />
        <Kpi label="Total followers" value={48200} delta="+8.4%" icon={Users} />
        <Kpi label="Earnings (YTD)" value={284000} suffix="$" delta="+22%" icon={DollarSign} />
        <Kpi label="Impact score" value={88} delta="+4" icon={Award} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl bg-glass p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-xl">Revenue trajectory</h3>
            <span className="text-xs text-muted-foreground">8 months</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.13 80)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.78 0.13 80)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
                <XAxis dataKey="m" stroke="oklch(0.72 0.02 80)" fontSize={11} />
                <YAxis stroke="oklch(0.72 0.02 80)" fontSize={11} />
                <Tooltip contentStyle={{ background: "oklch(0.22 0.04 255)", border: "1px solid oklch(0.78 0.13 80 / 0.3)", borderRadius: 8 }} />
                <Area type="monotone" dataKey="v" stroke="oklch(0.78 0.13 80)" strokeWidth={2} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl bg-glass p-6">
          <h3 className="font-display text-xl">Genre mix</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={genreSplit} dataKey="v" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                  {genreSplit.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "oklch(0.22 0.04 255)", border: "1px solid oklch(0.78 0.13 80 / 0.3)", borderRadius: 8 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5 text-xs">
            {genreSplit.map((g, i) => (
              <div key={g.name} className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ background: COLORS[i] }} /><span className="text-muted-foreground">{g.name}</span></div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl bg-glass p-6">
          <h3 className="font-display text-xl">Top demand · Survey feed</h3>
          <div className="mt-4 h-56">
            <ResponsiveContainer>
              <BarChart data={surveyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
                <XAxis dataKey="artist" stroke="oklch(0.72 0.02 80)" fontSize={10} />
                <YAxis stroke="oklch(0.72 0.02 80)" fontSize={11} />
                <Tooltip contentStyle={{ background: "oklch(0.22 0.04 255)", border: "1px solid oklch(0.78 0.13 80 / 0.3)", borderRadius: 8 }} />
                <Bar dataKey="votes" fill="oklch(0.78 0.13 80)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl bg-glass p-6">
          <h3 className="font-display text-xl">Upcoming bookings</h3>
          <ul className="mt-4 space-y-3">
            {events.slice(0, 4).map((e) => (
              <li key={e.id} className="flex items-center gap-4 rounded-xl bg-card/50 p-3">
                <img src={e.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{e.title}</p>
                  <p className="text-xs text-muted-foreground">{new Date(e.date).toLocaleDateString()} · {e.city}</p>
                </div>
                <span className="rounded-full bg-emerald/15 px-2 py-0.5 text-xs text-emerald">Confirmed</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
