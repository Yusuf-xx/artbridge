import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-bits";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — ArtBridge" }] }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build <span className="italic text-gradient-gold">together</span></>}
        subtitle="Press, partnerships, government enquiries — we'd love to hear from you."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <form className="space-y-4 rounded-3xl bg-glass p-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" type="email" placeholder="you@example.com" />
            <Field label="Organization" placeholder="Optional" />
            <Field label="Subject" placeholder="Partnership, press, etc." />
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</span>
            <textarea rows={6} placeholder="Tell us more..." className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
          </label>
          <button type="button" className="rounded-md bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Send message</button>
        </form>

        <aside className="space-y-4">
          {[
            { icon: Mail, l: "Email", v: "hello@artbridge.my" },
            { icon: Phone, l: "Phone", v: "+60 3 1234 5678" },
            { icon: MapPin, l: "Office", v: "Level 28, Menara Budaya, Kuala Lumpur" },
          ].map((c) => (
            <div key={c.l} className="rounded-2xl bg-glass p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold"><c.icon className="h-5 w-5" /></div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.l}</p>
              <p className="mt-1">{c.v}</p>
            </div>
          ))}
        </aside>
      </section>
    </>
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
