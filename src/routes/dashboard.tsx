import { createFileRoute, Outlet, Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { LayoutDashboard, Calendar, TrendingUp, Building2, BarChart3, Landmark, Users, Settings, Bell, Search, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — ArtBridge" }] }),
  component: DashboardLayout,
});

const ROLES = [
  { id: "artist", label: "Artist" },
  { id: "manager", label: "Manager" },
  { id: "investor", label: "Investor" },
  { id: "sponsor", label: "Sponsor" },
  { id: "government", label: "Government" },
  { id: "admin", label: "Admin" },
] as const;

const navItems: { to: string; label: string; icon: any; exact?: boolean }[] = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/dashboard/slots", label: "Slots", icon: Calendar },
  { to: "/dashboard/invest", label: "Invest", icon: TrendingUp },
  { to: "/dashboard/sponsor", label: "Sponsor", icon: Building2 },
  { to: "/dashboard/survey-analytics", label: "Survey Analytics", icon: BarChart3 },
  { to: "/dashboard/impact", label: "Impact", icon: Landmark },
];

function DashboardLayout() {
  const [role, setRole] = useState<typeof ROLES[number]["id"]>("artist");
  const loc = useLocation();

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-glass p-3">
            <div className="mb-2 px-3 pt-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Viewing as</p>
              <select value={role} onChange={(e) => setRole(e.target.value as typeof role)} className="mt-1 w-full rounded-md border border-border bg-input px-3 py-2 text-sm">
                {ROLES.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
              </select>
            </div>
            <nav className="mt-2 space-y-0.5">
              {navItems.map((n) => {
                const active = n.exact ? loc.pathname === n.to : loc.pathname.startsWith(n.to) && n.to !== "/dashboard";
                return (
                  <Link key={n.to} to={n.to} className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${active ? "bg-gold/10 text-gold" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
                    <n.icon className="h-4 w-4" />{n.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="mt-4 rounded-2xl bg-glass p-4">
            <p className="text-xs uppercase tracking-widest text-gold">Profile</p>
            <p className="mt-1 text-sm">Completion <span className="font-semibold">72%</span></p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className="h-full bg-gold-gradient" style={{ width: "72%" }} />
            </div>
          </div>
        </aside>

        <main>
          <div className="mb-6 flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Search dashboard..." className="w-full rounded-md border border-border bg-input py-2.5 pl-10 pr-4 text-sm" />
            </div>
            <button className="relative rounded-md border border-border p-2.5"><Bell className="h-4 w-4" /><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-gold" /></button>
            <button className="rounded-md border border-border p-2.5"><Settings className="h-4 w-4" /></button>
          </div>

          {/* Pass role via outlet context */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
