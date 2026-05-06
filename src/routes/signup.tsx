import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mic2, TrendingUp, Building2, Landmark, Users, Briefcase, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Join ArtBridge — Choose your role" }] }),
  component: Signup,
});

const roles = [
  { id: "artist", icon: Mic2, title: "Artist", desc: "Perform, collaborate, get booked." },
  { id: "manager", icon: Briefcase, title: "Manager / Marketer", desc: "Book artists & analyze trends." },
  { id: "investor", icon: TrendingUp, title: "Investor", desc: "Back events, track ROI." },
  { id: "sponsor", icon: Building2, title: "Sponsor", desc: "Brand reach via cultural events." },
  { id: "government", icon: Landmark, title: "Government", desc: "Measure impact, allocate grants." },
  { id: "fan", icon: Users, title: "Fan", desc: "Discover, vote, attend." },
];

function Signup() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string | null>(null);
  const [onBehalf, setOnBehalf] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-10 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        {[1, 2, 3].map((n) => (
          <span key={n} className={`h-1.5 flex-1 rounded-full transition ${step >= n ? "bg-gold-gradient" : "bg-secondary"}`} />
        ))}
      </div>

      {step === 1 && (
        <>
          <h1 className="font-display text-4xl sm:text-5xl">Choose your <span className="text-gradient-gold italic">role</span></h1>
          <p className="mt-3 text-muted-foreground">You can always add more later.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setRole(r.id)}
                className={`group rounded-2xl border p-6 text-left transition ${role === r.id ? "border-gold bg-gold/5 shadow-glow" : "border-border bg-card/50 hover:border-gold/40"}`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                {role === r.id && <Check className="mt-3 h-4 w-4 text-gold" />}
              </button>
            ))}
          </div>
          {role === "artist" && (
            <label className="mt-6 inline-flex items-center gap-2 text-sm">
              <input type="checkbox" checked={onBehalf} onChange={(e) => setOnBehalf(e.target.checked)} className="h-4 w-4 rounded border-border bg-input" />
              I'm registering on behalf of an artist
            </label>
          )}
          <div className="mt-10 flex justify-end">
            <button disabled={!role} onClick={() => setStep(2)} className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-40">
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="font-display text-4xl sm:text-5xl">Tell us about <span className="text-gradient-gold italic">you</span></h1>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Field label="Full name" placeholder="Your full name" />
            <Field label={role === "artist" ? "Stage name" : role === "investor" ? "Company" : "Organization"} placeholder="Optional" />
            <Field label="Email" type="email" placeholder="you@example.com" />
            <Field label="Country / Region" placeholder="Malaysia" />
            {role === "artist" && (
              <>
                <Field label="Primary genre" placeholder="Jazz, Indie, Heritage…" />
                <Field label="Performance fee range" placeholder="$5K – $20K" />
                <Field label="Portfolio link" placeholder="https://" />
                <Field label="Social media" placeholder="@yourhandle" />
              </>
            )}
            {role === "investor" && (
              <>
                <Field label="Accreditation status" placeholder="Accredited / Pending" />
                <Field label="Investment capacity" placeholder="$25K – $500K" />
              </>
            )}
            {role === "sponsor" && (
              <>
                <Field label="Brand category" placeholder="Beverage, Telco, Bank…" />
                <Field label="Target audience" placeholder="18–35 urban" />
              </>
            )}
            {role === "government" && (
              <>
                <Field label="Agency / Ministry" placeholder="Ministry of Tourism, Arts & Culture" />
                <Field label="Verification ID" placeholder="To be verified" />
              </>
            )}
          </div>
          <div className="mt-10 flex justify-between">
            <button onClick={() => setStep(1)} className="text-sm text-muted-foreground story-link">← Back</button>
            <button onClick={() => setStep(3)} className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold animate-glow">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl">Welcome to <span className="text-gradient-gold italic">ArtBridge.</span></h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Your account is being prepared. Verification (where required) typically takes 24–48 hours.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/dashboard" className="rounded-md bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Go to dashboard</Link>
            <Link to="/events" className="rounded-md border border-border px-6 py-3 text-sm font-semibold">Browse events</Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <input type={type} placeholder={placeholder} className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
    </label>
  );
}
