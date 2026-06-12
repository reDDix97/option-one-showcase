import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Option One Interior" },
      { name: "description", content: "Schedule a consultation with Option One Interior in Uttara, Dhaka. Call +880 1711-371372." },
      { property: "og:title", content: "Contact Option One Interior" },
      { property: "og:description", content: "Visit our Uttara studio, call us or book a consultation online." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(6, "Enter a contact number").max(40),
  project: z.string().trim().min(1, "Select a project type").max(60),
  message: z.string().trim().min(10, "Tell us a little about your project").max(1500),
});

function ContactPage() {
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    // Open WhatsApp with composed message — no backend required.
    const text = encodeURIComponent(
      `Hello Option One Interior!\n\nName: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\nProject: ${parsed.data.project}\n\n${parsed.data.message}`,
    );
    window.open(`https://wa.me/8801711371372?text=${text}`, "_blank", "noopener,noreferrer");
    setDone(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's design your next space."
        description="Book a complimentary consultation with our principal designer, or simply send us a note."
      />

      <section className="container-luxe py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-10">
          <Reveal>
            <div>
              <p className="eyebrow">Studio</p>
              <p className="mt-3 font-display text-2xl flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-2 shrink-0" />
                House-01, Road-15, Sector-12,<br />Uttara, Dhaka-1230, Bangladesh
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div>
              <p className="eyebrow">Phone</p>
              <a href="tel:+8801711371372" className="mt-3 font-display text-2xl flex items-center gap-3 hover:text-accent">
                <Phone className="w-5 h-5 text-accent" /> +880 1711-371372
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="eyebrow">Email</p>
              <a href="mailto:hello@optiononeinterior.com" className="mt-3 font-display text-2xl flex items-center gap-3 hover:text-accent">
                <Mail className="w-5 h-5 text-accent" /> hello@optiononeinterior.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="https://wa.me/8801711371372"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-fit"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {done ? (
            <div className="bg-secondary p-12 text-center border border-border">
              <CheckCircle2 className="w-12 h-12 mx-auto text-accent" strokeWidth={1.25} />
              <h3 className="mt-6 font-display text-3xl">Thank you.</h3>
              <p className="mt-3 text-muted-foreground">We've opened WhatsApp with your message. Our team will reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-6">
              <Field name="name" label="Full Name" error={errors.name} />
              <Field name="email" label="Email" type="email" error={errors.email} />
              <Field name="phone" label="Phone" error={errors.phone} />
              <div className="flex flex-col gap-2">
                <label className="eyebrow !text-muted-foreground">Project Type</label>
                <select
                  name="project"
                  defaultValue=""
                  className="bg-transparent border-b border-border py-3 text-base focus:border-accent outline-none transition"
                >
                  <option value="" disabled>Select…</option>
                  <option>Residential Interior</option>
                  <option>Luxury Apartment</option>
                  <option>Duplex / Villa</option>
                  <option>Commercial Space</option>
                  <option>Corporate Office</option>
                  <option>Architectural Planning</option>
                  <option>Renovation</option>
                  <option>Other</option>
                </select>
                {errors.project && <p className="text-xs text-destructive">{errors.project}</p>}
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="eyebrow !text-muted-foreground">Tell us about your project</label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1500}
                  className="bg-transparent border-b border-border py-3 text-base focus:border-accent outline-none transition resize-none"
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-gold sm:col-span-2 w-fit">
                Send via WhatsApp <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="aspect-[16/7] w-full">
          <iframe
            title="Option One Interior — Uttara, Dhaka"
            src="https://www.google.com/maps?q=Sector+12+Uttara+Dhaka&output=embed"
            className="w-full h-full grayscale-[0.4] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="eyebrow !text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={200}
        className="bg-transparent border-b border-border py-3 text-base focus:border-accent outline-none transition"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}