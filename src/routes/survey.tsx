import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { artists, surveyTrends } from "@/lib/mock-data";
import { PageHero, TrendBars, Pill } from "@/components/ui-bits";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/survey")({
  head: () => ({ meta: [{ title: "Trend Survey — ArtBridge" }] }),
  component: Survey,
});

const cities = ["Kuala Lumpur", "Penang", "Johor Bahru", "Kota Kinabalu", "Ipoh", "Putrajaya"];
const themes = ["Heritage Revival", "Urban Pop", "Indigenous Futures", "Diaspora Stories", "Youth Rising", "Classical Reimagined"];

function Survey() {
  const [step, setStep] = useState(1);
  const [city, setCity] = useState("");
  const [theme, setTheme] = useState<string[]>([]);
  const [picks, setPicks] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const toggle = (arr: string[], v: string, set: (a: string[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  return (
    <>
      <PageHero
        eyebrow="Public Trend Engine"
        title={<>Shape the <span className="italic text-gradient-gold">national stage</span></>}
        subtitle="Tell us your city, your themes and your favourite artists. The data goes live to event managers — anonymously and instantly."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          {!done ? (
            <div className="rounded-3xl bg-glass p-8 sm:p-10">
              <div className="mb-8 flex gap-2">
                {[1, 2, 3].map((n) => (
                  <span key={n} className={`h-1.5 flex-1 rounded-full ${step >= n ? "bg-gold-gradient" : "bg-secondary"}`} />
                ))}
              </div>

              {step === 1 && (
                <>
                  <h2 className="font-display text-3xl">Which city moves you?</h2>
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {cities.map((c) => (
                      <button key={c} onClick={() => setCity(c)} className={`rounded-xl border p-4 text-sm transition ${city === c ? "border-gold bg-gold/10 text-gold" : "border-border hover:border-gold/40"}`}>{c}</button>
                    ))}
                  </div>
                  <Next disabled={!city} onClick={() => setStep(2)} />
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="font-display text-3xl">Pick your themes <span className="text-sm font-normal text-muted-foreground">(multi-select)</span></h2>
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {themes.map((t) => (
                      <button key={t} onClick={() => toggle(theme, t, setTheme)} className={`rounded-xl border p-4 text-sm transition ${theme.includes(t) ? "border-gold bg-gold/10 text-gold" : "border-border hover:border-gold/40"}`}>{t}</button>
                    ))}
                  </div>
                  <Next disabled={theme.length === 0} onClick={() => setStep(3)} back={() => setStep(1)} />
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="font-display text-3xl">Vote for the lineup</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {artists.map((a) => {
                      const sel = picks.includes(a.id);
                      return (
                        <button key={a.id} onClick={() => toggle(picks, a.id, setPicks)} className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${sel ? "border-gold bg-gold/10" : "border-border hover:border-gold/40"}`}>
                          <img src={a.image} alt={a.stageName} className="h-12 w-12 rounded-lg object-cover" />
                          <div className="flex-1">
                            <p className="font-medium">{a.stageName}</p>
                            <p className="text-xs text-muted-foreground">{a.genre.join(" · ")}</p>
                          </div>
                          {sel && <Check className="h-4 w-4 text-gold" />}
                        </button>
                      );
                    })}
                  </div>
                  <Next disabled={picks.length === 0} onClick={() => setDone(true)} back={() => setStep(2)} label="Submit" />
                </>
              )}
            </div>
          ) : (
            <div className="rounded-3xl bg-glass p-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald/20 text-emerald animate-glow">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-display text-3xl">Thank you.</h2>
              <p className="mt-3 text-muted-foreground">Your votes are now part of the national trend feed.</p>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-glass p-6">
            <Pill>Live</Pill>
            <h3 className="mt-3 font-display text-xl">Top picks · 30 days</h3>
            <div className="mt-5"><TrendBars data={surveyTrends.slice(0, 5)} /></div>
          </div>
          <div className="rounded-2xl bg-glass p-6">
            <h3 className="font-display text-xl">Why it matters</h3>
            <p className="mt-2 text-sm text-muted-foreground">Survey data is the source of truth for managers booking national stages. Your voice influences real bookings.</p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Next({ disabled, onClick, back, label = "Continue" }: { disabled?: boolean; onClick: () => void; back?: () => void; label?: string }) {
  return (
    <div className="mt-8 flex items-center justify-between">
      {back ? <button onClick={back} className="text-sm text-muted-foreground story-link">← Back</button> : <span />}
      <button disabled={disabled} onClick={onClick} className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-40">
        {label} <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
