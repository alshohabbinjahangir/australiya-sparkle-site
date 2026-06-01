import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Sparkles, ArrowRight, Star, Home, Building2, Sprout, Sofa, Truck, Square, Leaf, Award, Clock, ShieldCheck, Quote, Phone, Instagram, Facebook } from "lucide-react";
function BeforeAfterSlider({ before, after, label }) {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);
  useEffect(() => {
    const move = (clientX) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const p = (clientX - rect.left) / rect.width * 100;
      setPos(Math.min(100, Math.max(0, p)));
    };
    const onMove = (e) => dragging.current && move(e.clientX);
    const onTouch = (e) => dragging.current && move(e.touches[0].clientX);
    const stop = () => dragging.current = false;
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-muted-foreground uppercase tracking-widest", children: label }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: "relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lift select-none cursor-ew-resize",
        onMouseDown: () => dragging.current = true,
        onTouchStart: () => dragging.current = true,
        children: [
          /* @__PURE__ */ jsx("img", { src: after, alt: "After cleaning", className: "absolute inset-0 h-full w-full object-cover", draggable: false }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", style: { width: `${pos}%` }, children: /* @__PURE__ */ jsx(
            "img",
            {
              src: before,
              alt: "Before cleaning",
              className: "absolute inset-0 h-full w-full object-cover",
              style: { width: `${100 / pos * 100}%` },
              draggable: false
            }
          ) }),
          /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 rounded-full bg-navy-deep/80 px-3 py-1 text-xs font-semibold text-white tracking-wider", children: "BEFORE" }),
          /* @__PURE__ */ jsx("span", { className: "absolute top-4 right-4 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-navy-deep tracking-wider", children: "AFTER" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute top-0 bottom-0 w-1 bg-white shadow-lift pointer-events-none",
              style: { left: `${pos}%`, transform: "translateX(-50%)" },
              children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lift flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", className: "text-navy", children: /* @__PURE__ */ jsx("path", { d: "M8 7l-5 5 5 5M16 7l5 5-5 5" }) }) })
            }
          )
        ]
      }
    )
  ] });
}
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
const heroImg = "/assets/hero-clean-BF-L2p7q.jpg";
const kitchenBefore = "/assets/kitchen-before-3YJKASE6.jpg";
const kitchenAfter = "/assets/kitchen-after-CD3FE_Ja.jpg";
const bathroomBefore = "/assets/bathroom-before-DrKluKiO.jpg";
const bathroomAfter = "/assets/bathroom-after-B2e-qaA7.jpg";
const carpetBefore = "/assets/carpet-before-C6CXzSfR.jpg";
const carpetAfter = "/assets/carpet-after-Cnkt8fi3.jpg";
const services = [{
  Icon: Home,
  title: "Residential Cleaning",
  desc: "Weekly or one-off tidy-ups that keep your home feeling like a sanctuary."
}, {
  Icon: Building2,
  title: "Commercial Cleaning",
  desc: "Offices, retail and hospitality spaces presented immaculately, every day."
}, {
  Icon: Sprout,
  title: "Deep Cleaning",
  desc: "Top-to-bottom restoration for kitchens, bathrooms and high-traffic zones."
}, {
  Icon: Sofa,
  title: "Carpet & Upholstery",
  desc: "Hot-water extraction that lifts stains, allergens and years of wear."
}, {
  Icon: Truck,
  title: "Move-In / Move-Out",
  desc: "Bond-back guaranteed end-of-lease cleans handled with checklist precision."
}, {
  Icon: Square,
  title: "Window Cleaning",
  desc: "Streak-free interior and exterior windows for a brighter, sharper view."
}];
const stats = [{
  Icon: Leaf,
  title: "Eco-Friendly Products",
  desc: "Non-toxic, plant-based formulas safe for kids and pets."
}, {
  Icon: Award,
  title: "10+ Years Experience",
  desc: "A decade of perfecting the Australiya standard."
}, {
  Icon: Clock,
  title: "Same-Day Booking",
  desc: "Last-minute? We've got a team on the way."
}, {
  Icon: ShieldCheck,
  title: "Satisfaction Guaranteed",
  desc: "Not happy? We re-clean it free, no questions."
}];
const testimonials = [{
  name: "Olivia M.",
  role: "Bondi, NSW",
  quote: "Walked in after their deep clean and genuinely teared up. The kitchen looked brand new."
}, {
  name: "James W.",
  role: "Office Manager, Surry Hills",
  quote: "Reliable, discreet and meticulous. Our office has never looked sharper for client meetings."
}, {
  name: "Priya S.",
  role: "Melbourne, VIC",
  quote: "Got our full bond back thanks to their move-out clean. Worth every dollar."
}];
const beforeAfters = [{
  label: "Kitchen Restoration",
  before: kitchenBefore,
  after: kitchenAfter
}, {
  label: "Bathroom Deep Clean",
  before: bathroomBefore,
  after: bathroomAfter
}, {
  label: "Carpet Revival",
  before: carpetBefore,
  after: carpetAfter
}];
function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("header", { className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-transparent"}`, children: /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4", children: [
      /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2 min-w-0", children: [
        /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-teal text-navy-deep", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 sm:h-5 sm:w-5", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ jsx("span", { className: "font-serif text-base sm:text-xl text-navy truncate", children: "Australiya Cleaning" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "hidden lg:flex items-center gap-8 text-sm font-medium text-navy/80", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#services", className: "hover:text-teal transition-colors", children: "Services" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#before-after", className: "hover:text-teal transition-colors", children: "Before & After" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#why", className: "hover:text-teal transition-colors", children: "Why Us" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-teal transition-colors", children: "Contact" }) })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "#contact", className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-teal px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-navy-deep shadow-teal hover:scale-[1.03] transition-transform whitespace-nowrap", children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Get a Free Quote" }),
        /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Free Quote" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-[100svh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: `url(${heroImg})`
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-mesh" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-5 sm:px-6 pt-28 sm:pt-32 pb-44 sm:pb-24 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-3xl text-white", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-widest uppercase backdrop-blur", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5 text-teal" }),
            " Australia's premium clean"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-5 sm:mt-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]", children: [
            "Your Space,",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-teal", children: "Spotlessly" }),
            " Transformed."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-white/80", children: "Professional cleaning services trusted across Australia. Hotel-grade attention to detail, delivered by a team that treats your home like ours." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7 sm:mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 rounded-full bg-teal px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-navy-deep shadow-teal hover:scale-[1.03] transition-transform", children: [
              "Book Now ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "#before-after", className: "inline-flex items-center gap-2 rounded-full border border-white/40 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors", children: "See Our Work" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-5 right-5 bottom-8 sm:left-auto sm:right-12 sm:bottom-20 animate-float flex justify-center sm:block", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-lift flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 fill-teal text-teal" }, i)) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm font-semibold text-navy", children: "4.9 / 5 Rating" }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] sm:text-xs text-muted-foreground", children: "500+ Happy Clients" })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "services", className: "relative py-20 sm:py-28 noise-overlay", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl reveal", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-widest uppercase text-teal", children: "What we clean" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-navy", children: "Tailored cleans for every surface, every space." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm sm:text-base text-muted-foreground", children: "From weekly residential refreshes to commercial deep-cleans, every service is delivered with the same uncompromising standard." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6", children: services.map(({
        Icon,
        title,
        desc
      }, i) => /* @__PURE__ */ jsxs("div", { className: "reveal hover-lift bg-card rounded-2xl p-6 sm:p-7 shadow-soft border border-border/50", style: {
        transitionDelay: `${i * 60}ms`
      }, children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-teal/15 text-teal", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 sm:h-6 sm:w-6", strokeWidth: 2 }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 sm:mt-5 text-lg sm:text-xl text-navy", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: desc })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "before-after", className: "relative py-20 sm:py-28 bg-secondary/40 noise-overlay", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl reveal", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-widest uppercase text-teal", children: "Real results" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-navy", children: "See the Australiya Difference." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm sm:text-base text-muted-foreground", children: "Drag the slider to reveal the transformation. No filters, no staging — just our team's work." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 sm:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: beforeAfters.map((b, i) => /* @__PURE__ */ jsx("div", { className: "reveal", style: {
        transitionDelay: `${i * 100}ms`
      }, children: /* @__PURE__ */ jsx(BeforeAfterSlider, { ...b }) }, b.label)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "why", className: "relative py-20 sm:py-24 bg-gradient-cta text-white overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-mesh opacity-60" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-5 sm:px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl reveal", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-widest uppercase text-teal", children: "Why Australiya" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-3xl sm:text-4xl md:text-5xl", children: "The cleaning team Australians actually recommend." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6", children: stats.map(({
          Icon,
          title,
          desc
        }, i) => /* @__PURE__ */ jsxs("div", { className: "reveal rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 sm:p-6", style: {
          transitionDelay: `${i * 80}ms`
        }, children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-teal text-navy-deep", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 sm:h-6 sm:w-6", strokeWidth: 2 }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 sm:mt-5 text-lg sm:text-xl", children: title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/70 leading-relaxed", children: desc })
        ] }, title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative py-20 sm:py-28 noise-overlay", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl reveal", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-widest uppercase text-teal", children: "Kind words" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-navy", children: "Loved by hundreds of Australian homes." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 sm:mt-14 grid md:grid-cols-3 gap-5 sm:gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs("figure", { className: "reveal hover-lift relative bg-card rounded-2xl p-6 sm:p-8 shadow-soft border border-border/50", style: {
        transitionDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsx(Quote, { className: "absolute top-5 right-5 sm:top-6 sm:right-6 h-9 w-9 sm:h-10 sm:w-10 text-teal/20" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [...Array(5)].map((_, k) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-teal text-teal" }, k)) }),
        /* @__PURE__ */ jsxs("blockquote", { className: "mt-4 text-navy text-base sm:text-lg leading-relaxed", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("figcaption", { className: "mt-5 sm:mt-6", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-navy", children: t.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: t.role })
        ] })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-20 sm:py-28 bg-navy-deep text-white overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-mesh opacity-50" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-5 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "reveal", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-widest uppercase text-teal", children: "Get in touch" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-3xl sm:text-4xl md:text-6xl leading-tight", children: "Ready for a Cleaner Space?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 sm:mt-5 text-sm sm:text-base text-white/70 max-w-md", children: "Tell us about your space and we'll come back within the hour with a transparent quote. No call centres, no upsells." }),
          /* @__PURE__ */ jsxs("a", { href: "tel:18002532628", className: "mt-7 sm:mt-8 inline-flex items-center gap-3 text-teal hover:text-teal-glow transition-colors", children: [
            /* @__PURE__ */ jsx("span", { className: "flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-teal/15", children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-serif text-2xl sm:text-3xl md:text-4xl", children: "1800-CLEAN-AU" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          alert("Thanks! We'll be in touch within the hour.");
        }, className: "reveal space-y-4 bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 sm:p-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs uppercase tracking-widest text-white/60", children: "Name" }),
            /* @__PURE__ */ jsx("input", { required: true, type: "text", className: "mt-1 w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-teal text-white placeholder:text-white/40", placeholder: "Jane Doe" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs uppercase tracking-widest text-white/60", children: "Email" }),
            /* @__PURE__ */ jsx("input", { required: true, type: "email", className: "mt-1 w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-teal text-white placeholder:text-white/40", placeholder: "jane@example.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs uppercase tracking-widest text-white/60", children: "Message" }),
            /* @__PURE__ */ jsx("textarea", { required: true, rows: 4, className: "mt-1 w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-teal text-white placeholder:text-white/40 resize-none", placeholder: "Tell us about your space..." })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "submit", className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-teal py-3.5 text-sm font-semibold text-navy-deep shadow-teal hover:scale-[1.02] transition-transform", children: [
            "Request My Free Quote ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "bg-navy-deep border-t border-white/10 text-white/70", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-6 py-12 sm:py-14 grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-teal text-navy-deep", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5", strokeWidth: 2.5 }) }),
            /* @__PURE__ */ jsx("span", { className: "font-serif text-xl text-white", children: "Australiya Cleaning" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm max-w-xs", children: "Premium cleaning services for Australian homes and businesses. Spotless, every time." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-semibold uppercase tracking-widest", children: "Quick Links" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#services", className: "hover:text-teal", children: "Services" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#before-after", className: "hover:text-teal", children: "Before & After" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#why", className: "hover:text-teal", children: "Why Us" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-teal", children: "Contact" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-semibold uppercase tracking-widest", children: "Follow" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-3", children: [
            /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Instagram", className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-teal hover:text-navy-deep hover:border-teal transition-colors", children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Facebook", className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-teal hover:text-navy-deep hover:border-teal transition-colors", children: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-white/10 py-6 text-center text-xs text-white/50", children: "© 2025 Australiya Cleaning. All rights reserved." })
    ] })
  ] });
}
export {
  Index as component
};
