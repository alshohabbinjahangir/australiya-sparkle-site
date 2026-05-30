import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles, Home, Building2, Sprout, Sofa, Truck, Square,
  Leaf, Award, Clock, ShieldCheck, Star, Phone, Instagram, Facebook, Quote, ArrowRight
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Australiya Cleaning — Premium Cleaning Services Across Australia" },
      { name: "description", content: "Trusted by 500+ Australian homes and businesses. Eco-friendly, same-day cleaning that leaves every space spotlessly transformed." },
      { property: "og:title", content: "Australiya Cleaning — Your Space, Spotlessly Transformed" },
      { property: "og:description", content: "Premium residential, commercial and deep cleaning across Australia. 4.9★ rated, eco-friendly, same-day booking available." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const services = [
  { Icon: Home, title: "Residential Cleaning", desc: "Weekly or one-off tidy-ups that keep your home feeling like a sanctuary." },
  { Icon: Building2, title: "Commercial Cleaning", desc: "Offices, retail and hospitality spaces presented immaculately, every day." },
  { Icon: Sprout, title: "Deep Cleaning", desc: "Top-to-bottom restoration for kitchens, bathrooms and high-traffic zones." },
  { Icon: Sofa, title: "Carpet & Upholstery", desc: "Hot-water extraction that lifts stains, allergens and years of wear." },
  { Icon: Truck, title: "Move-In / Move-Out", desc: "Bond-back guaranteed end-of-lease cleans handled with checklist precision." },
  { Icon: Square, title: "Window Cleaning", desc: "Streak-free interior and exterior windows for a brighter, sharper view." },
];

const stats = [
  { Icon: Leaf, title: "Eco-Friendly Products", desc: "Non-toxic, plant-based formulas safe for kids and pets." },
  { Icon: Award, title: "10+ Years Experience", desc: "A decade of perfecting the Australiya standard." },
  { Icon: Clock, title: "Same-Day Booking", desc: "Last-minute? We've got a team on the way." },
  { Icon: ShieldCheck, title: "Satisfaction Guaranteed", desc: "Not happy? We re-clean it free, no questions." },
];

const testimonials = [
  { name: "Olivia M.", role: "Bondi, NSW", quote: "Walked in after their deep clean and genuinely teared up. The kitchen looked brand new." },
  { name: "James W.", role: "Office Manager, Surry Hills", quote: "Reliable, discreet and meticulous. Our office has never looked sharper for client meetings." },
  { name: "Priya S.", role: "Melbourne, VIC", quote: "Got our full bond back thanks to their move-out clean. Worth every dollar." },
];

const beforeAfters = [
  { label: "Kitchen Restoration", before: "https://picsum.photos/seed/kitchen-before/900/700", after: "https://picsum.photos/seed/kitchen-after/900/700" },
  { label: "Bathroom Deep Clean", before: "https://picsum.photos/seed/bathroom-before/900/700", after: "https://picsum.photos/seed/bathroom-after/900/700" },
  { label: "Carpet Revival", before: "https://picsum.photos/seed/carpet-before/900/700", after: "https://picsum.photos/seed/carpet-after/900/700" },
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-navy-deep">
              <Sparkles className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-serif text-xl text-navy">Australiya Cleaning</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-navy/80">
            <li><a href="#services" className="hover:text-teal transition-colors">Services</a></li>
            <li><a href="#before-after" className="hover:text-teal transition-colors">Before &amp; After</a></li>
            <li><a href="#why" className="hover:text-teal transition-colors">Why Us</a></li>
            <li><a href="#contact" className="hover:text-teal transition-colors">Contact</a></li>
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-teal hover:scale-[1.03] transition-transform"
          >
            Get a Free Quote
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/cleanhero/1920/1200')" }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-teal" /> Australia's premium clean
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05]">
              Your Space,<br />
              <span className="text-teal">Spotlessly</span> Transformed.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Professional cleaning services trusted across Australia. Hotel-grade attention to detail, delivered by a team that treats your home like ours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-teal hover:scale-[1.03] transition-transform">
                Book Now <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#before-after" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                See Our Work
              </a>
            </div>
          </div>

          {/* Floating trust badge */}
          <div className="absolute right-6 bottom-12 md:right-12 md:bottom-20 animate-float">
            <div className="glass rounded-2xl px-5 py-4 shadow-lift flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-teal text-teal" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">4.9 / 5 Rating</p>
                <p className="text-xs text-muted-foreground">500+ Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-28 noise-overlay">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal">
            <span className="text-xs font-semibold tracking-widest uppercase text-teal">What we clean</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-navy">Tailored cleans for every surface, every space.</h2>
            <p className="mt-4 text-muted-foreground">From weekly residential refreshes to commercial deep-cleans, every service is delivered with the same uncompromising standard.</p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ Icon, title, desc }, i) => (
              <div key={title} className="reveal hover-lift bg-card rounded-2xl p-7 shadow-soft border border-border/50" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/15 text-teal">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-xl text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section id="before-after" className="relative py-28 bg-secondary/40 noise-overlay">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal">
            <span className="text-xs font-semibold tracking-widest uppercase text-teal">Real results</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-navy">See the Australiya Difference.</h2>
            <p className="mt-4 text-muted-foreground">Drag the slider to reveal the transformation. No filters, no staging — just our team's work.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfters.map((b, i) => (
              <div key={b.label} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <BeforeAfterSlider {...b} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="relative py-24 bg-gradient-cta text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal">
            <span className="text-xs font-semibold tracking-widest uppercase text-teal">Why Australiya</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">The cleaning team Australians actually recommend.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ Icon, title, desc }, i) => (
              <div key={title} className="reveal rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal text-navy-deep">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-28 noise-overlay">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal">
            <span className="text-xs font-semibold tracking-widest uppercase text-teal">Kind words</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-navy">Loved by hundreds of Australian homes.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure key={t.name} className="reveal hover-lift relative bg-card rounded-2xl p-8 shadow-soft border border-border/50" style={{ transitionDelay: `${i * 80}ms` }}>
                <Quote className="absolute top-6 right-6 h-10 w-10 text-teal/20" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-teal text-teal" />)}
                </div>
                <blockquote className="mt-4 text-navy text-lg leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-28 bg-navy-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-widest uppercase text-teal">Get in touch</span>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl leading-tight">Ready for a Cleaner Space?</h2>
            <p className="mt-5 text-white/70 max-w-md">Tell us about your space and we'll come back within the hour with a transparent quote. No call centres, no upsells.</p>
            <a href="tel:18002532628" className="mt-8 inline-flex items-center gap-3 text-teal hover:text-teal-glow transition-colors">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/15">
                <Phone className="h-5 w-5" />
              </span>
              <span className="font-serif text-3xl md:text-4xl">1800-CLEAN-AU</span>
            </a>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch within the hour."); }} className="reveal space-y-4 bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">
            <div>
              <label className="text-xs uppercase tracking-widest text-white/60">Name</label>
              <input required type="text" className="mt-1 w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-teal text-white placeholder:text-white/40" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-white/60">Email</label>
              <input required type="email" className="mt-1 w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-teal text-white placeholder:text-white/40" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-white/60">Message</label>
              <textarea required rows={4} className="mt-1 w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-teal text-white placeholder:text-white/40 resize-none" placeholder="Tell us about your space..." />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-teal py-3.5 text-sm font-semibold text-navy-deep shadow-teal hover:scale-[1.02] transition-transform">
              Request My Free Quote <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep border-t border-white/10 text-white/70">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-navy-deep">
                <Sparkles className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-serif text-xl text-white">Australiya Cleaning</span>
            </div>
            <p className="mt-4 text-sm max-w-xs">Premium cleaning services for Australian homes and businesses. Spotless, every time.</p>
          </div>
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-widest">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-teal">Services</a></li>
              <li><a href="#before-after" className="hover:text-teal">Before &amp; After</a></li>
              <li><a href="#why" className="hover:text-teal">Why Us</a></li>
              <li><a href="#contact" className="hover:text-teal">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-widest">Follow</p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-teal hover:text-navy-deep hover:border-teal transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-teal hover:text-navy-deep hover:border-teal transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          © 2025 Australiya Cleaning. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
