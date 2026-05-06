import { createFileRoute } from "@tanstack/react-router";
import { events, artists } from "@/lib/mock-data";
import { Check, Clock, X } from "lucide-react";

export const Route = createFileRoute("/dashboard/slots")({
  head: () => ({ meta: [{ title: "Slots — ArtBridge Dashboard" }] }),
  component: Slots,
});

const slots = events.flatMap((e, i) =>
  e.artists.slice(0, 2).map((aid, j) => ({
    id: `${e.id}-${aid}`,
    event: e,
    artist: artists.find((a) => a.id === aid)!,
    time: `${18 + j}:00`,
    status: i % 3 === 0 ? "pending" : i % 3 === 1 ? "approved" : "negotiating",
  }))
);

function Slots() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold">Slot management</p>
          <h1 className="mt-1 font-display text-4xl">Schedule & approvals</h1>
        </div>
        <button className="rounded-md bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">+ Create slot</button>
      </header>

      <div className="rounded-2xl bg-glass p-6">
        <div className="grid grid-cols-7 gap-2 text-center text-xs text-muted-foreground">
          {["S","M","T","W","T","F","S"].map((d, i) => <div key={i}>{d}</div>)}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => {
            const has = [4, 9, 12, 18, 22, 27].includes(i);
            const conflict = i === 18;
            return (
              <div key={i} className={`flex aspect-square flex-col items-center justify-center rounded-lg p-1 text-xs ${conflict ? "bg-destructive/20 text-destructive" : has ? "bg-gold/15 text-gold" : "bg-secondary text-muted-foreground"}`}>
                <span>{i + 1}</span>
                {has && <span className="mt-0.5 h-1 w-1 rounded-full bg-current" />}
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-gold/15" /> Booked</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-destructive/20" /> Conflict</span>
        </div>
      </div>

      <div className="rounded-2xl bg-glass p-6">
        <h3 className="font-display text-xl">Slot requests</h3>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr><th className="pb-3">Artist</th><th className="pb-3">Event</th><th className="pb-3">Time</th><th className="pb-3">Status</th><th className="pb-3 text-right">Action</th></tr>
            </thead>
            <tbody className="divide-y divide-border">
              {slots.slice(0, 8).map((s) => (
                <tr key={s.id}>
                  <td className="py-3"><div className="flex items-center gap-3"><img src={s.artist.image} className="h-9 w-9 rounded-lg object-cover" alt="" /><span className="font-medium">{s.artist.stageName}</span></div></td>
                  <td className="py-3 text-muted-foreground">{s.event.title}</td>
                  <td className="py-3 text-muted-foreground">{s.time}</td>
                  <td className="py-3">
                    {s.status === "approved" && <span className="inline-flex items-center gap-1 rounded-full bg-emerald/20 px-2 py-0.5 text-xs text-emerald"><Check className="h-3 w-3" />Approved</span>}
                    {s.status === "pending" && <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-2 py-0.5 text-xs text-gold"><Clock className="h-3 w-3" />Pending</span>}
                    {s.status === "negotiating" && <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs">Negotiating</span>}
                  </td>
                  <td className="py-3 text-right">
                    <button className="rounded-md border border-border px-3 py-1 text-xs hover:border-gold/40">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
