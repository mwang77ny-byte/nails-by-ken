"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ArrowUpRight, MapPin, Clock, Star, Sparkles, Shield, Users, Heart } from "lucide-react";

/* ── Animation helper ─────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay },
});

/* ── Data ─────────────────────────────────────── */
const serviceCards = [
  {
    img: "/gallery/acrylic-soft-pink-french.jpg",
    title: "Manicures",
    desc: "Classic, spa, and gel manicures tailored to your style.",
  },
  {
    img: "/gallery/pedicure-red-glitter.jpg",
    title: "Pedicures",
    desc: "Relax in our massage chairs with a classic or deluxe pedicure.",
  },
  {
    img: "/gallery/nail-art-3d-bow-coffin.jpg",
    title: "Nail Art & Extensions",
    desc: "Custom designs, acrylics, dip powder, and gel extensions.",
  },
];

const reviews = [
  { name: "Mimi S.",    stars: 5, text: "Best pedicure place in town! Love the massage chairs." },
  { name: "Teri W.",    stars: 5, text: "Great pedicure, good price, nice environment with massage chairs." },
  { name: "Ana P.",     stars: 5, text: "Their skills as technicians and customer service are top notch." },
  { name: "Jessica T.", stars: 5, text: "Ken and his team are amazing! My nails always look perfect and the atmosphere is so relaxing." },
  { name: "Maria R.",   stars: 5, text: "I've been coming here for 3 years. Consistent, clean, and the massage chairs are everything." },
  { name: "Sandra L.",  stars: 5, text: "Great service and fair prices. They take their time and never rush. My go-to in the East Bay." },
];

const galleryPreview = [
  { src: "/gallery/nail-art-3d-bow-coffin.jpg",    alt: "3D bow French tip coffin nails" },
  { src: "/gallery/acrylic-gold-french-tip.jpg",   alt: "Gold chrome French tip" },
  { src: "/gallery/nail-art-purple-lightning.jpg",  alt: "Purple lightning stiletto nails" },
  { src: "/gallery/nail-art-black-gold-clock.jpg",  alt: "Black and gold clock nail art" },
  { src: "/gallery/gel-chocolate-gold-french.jpg",  alt: "Chocolate gold French tips" },
  { src: "/gallery/nail-art-celestial-stars.jpg",   alt: "Celestial star nail art" },
];

const marqueeItems = [
  "Gel Manicures", "Acrylic Sets", "Nail Art", "Pedicures",
  "Dip Powder", "3D Designs", "Paraffin Treatments", "Brow Wax",
  "Walk-ins Welcome", "El Cerrito · East Bay",
];

/* ─────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════════ */}
      <section
        className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden"
        style={{ background: "var(--cream)" }}
      >
        {/* Soft radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(251,240,241,0.8), transparent)" }} />

        <div className="container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="rule" style={{ marginBottom: 0 }} />
                <span className="eyebrow">El Cerrito, CA · Est. 2016</span>
              </motion.div>

              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ y: "105%" }} animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.08, ease: [0.16,1,0.3,1] }}
                  className="font-display text-5xl md:text-6xl xl:text-7xl leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  Beautiful Nails.
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ y: "105%" }} animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.16, ease: [0.16,1,0.3,1] }}
                  className="font-display text-5xl md:text-6xl xl:text-7xl leading-tight italic"
                  style={{ color: "var(--rose)" }}
                >
                  Real Care.
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg leading-relaxed mb-8 max-w-md"
                style={{ color: "var(--ink-muted)", fontWeight: 300 }}
              >
                El Cerrito's neighborhood nail salon — skilled technicians, a spotlessly
                clean space, and massage chairs that make every visit a treat.
                Walk-ins always welcome.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link href="/contact" className="btn btn-primary">
                  Book an Appointment <ArrowRight size={14} />
                </Link>
                <a href="tel:+15105294357" className="btn btn-outline">
                  <Phone size={13} /> Call Now
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-2"
              >
                {[
                  { icon: Shield, text: "Clean & Sanitary" },
                  { icon: Users, text: "Walk-ins Welcome" },
                  { icon: Heart, text: "Massage Chairs" },
                ].map(({ icon: Icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(204,51,51,0.1)", color: "var(--mauve)" }}>
                    <Icon size={12} style={{ color: "var(--rose)" }} /> {text}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16,1,0.3,1] }}
              className="relative order-first lg:order-last"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "4/5", boxShadow: "0 32px 80px rgba(61,10,10,0.18)" }}>
                <Image src="/hero-red-nails.png" alt="Red chrome stiletto nail art by Nails by Ken, El Cerrito CA"
                  fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              {/* Floating review badge */}
              <div className="absolute -bottom-5 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl"
                style={{ border: "1px solid rgba(204,51,51,0.15)" }}>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#E8A045" stroke="none" />)}
                </div>
                <p className="text-xs font-bold" style={{ color: "var(--ink)" }}>4.5 Stars · 44+ Reviews</p>
                <p className="text-xs" style={{ color: "var(--ink-faint)" }}>Google Reviews</p>
              </div>
              {/* Floating city badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg hidden md:block"
                style={{ border: "1px solid rgba(201,169,110,0.2)" }}>
                <Sparkles size={18} style={{ color: "var(--rose)", marginBottom: 4 }} />
                <p className="text-xs font-bold" style={{ color: "var(--ink)" }}>El Cerrito, CA</p>
                <p className="text-xs" style={{ color: "var(--ink-faint)" }}>Mon–Sat 9:30–7 · Sun 10–6</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═════════════════════════════════════ */}
      <section style={{ background: "var(--mauve-dark)", borderTop: "1px solid rgba(201,169,110,0.1)" }}>
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
            {[
              { val: "4.5 ★", label: "Google Rating" },
              { val: "44+",   label: "Reviews" },
              { val: "Daily", label: "Open 7 Days" },
              { val: "6 PM",  label: "Closes" },
            ].map((s) => (
              <div key={s.label} className="text-center px-4">
                <p className="font-display text-2xl font-bold text-white leading-none mb-1">{s.val}</p>
                <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ════════════════════════════════════════ */}
      <div className="overflow-hidden py-3" style={{ background: "var(--blush)", borderBottom: "1px solid rgba(204,51,51,0.15)" }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((tag, i) => (
            <span key={i} className="flex items-center gap-3 px-5 text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
              style={{ color: "var(--rose)" }}>
              {tag} <span style={{ color: "var(--gold)", fontSize: "0.45rem" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══ SERVICES CARDS ════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="rule rule-center" />
            <motion.h2 {...fadeUp(0)} className="font-display text-4xl md:text-5xl mb-4" style={{ color: "var(--ink)" }}>
              Our Services
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-lg max-w-xl mx-auto" style={{ color: "var(--ink-muted)", fontWeight: 300 }}>
              From a quick polish refresh to a full pampering session — we do it all.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(i * 0.1)} className="card">
                <div className="relative" style={{ aspectRatio: "4/3" }}>
                  <Image src={s.img} alt={s.title} fill sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2" style={{ color: "var(--ink)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--ink-muted)", fontWeight: 300 }}>{s.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase"
                    style={{ color: "var(--rose)" }}>
                    Learn more <ArrowUpRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-outline-rose">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT TEASER ══════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: "var(--blush)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp(0)} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: "4/5" }}>
                <Image src="/gallery/salon-interior.jpg" alt="Nails by Ken salon interior in El Cerrito CA"
                  fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden md:block bg-white rounded-2xl px-5 py-4 shadow-lg"
                style={{ border: "1px solid rgba(204,51,51,0.15)" }}>
                <p className="font-display text-2xl font-bold" style={{ color: "var(--ink)" }}>8+</p>
                <p className="text-xs" style={{ color: "var(--ink-faint)" }}>Years Serving<br />the East Bay</p>
              </div>
            </motion.div>

            <div>
              <span className="rule" />
              <motion.h2 {...fadeUp(0)} className="font-display text-4xl md:text-5xl leading-tight mb-6"
                style={{ color: "var(--ink)" }}>
                Welcome to<br /><em>Nails by Ken</em>
              </motion.h2>
              <motion.p {...fadeUp(0.1)} className="text-lg leading-relaxed mb-4"
                style={{ color: "var(--ink-muted)", fontWeight: 300 }}>
                We opened Nails by Ken with one goal: give East Bay residents a nail salon
                that actually feels like a treat — clean, skilled, and unhurried.
              </motion.p>
              <motion.p {...fadeUp(0.15)} className="text-base leading-relaxed mb-8"
                style={{ color: "var(--ink-muted)", fontWeight: 300 }}>
                Located on San Pablo Ave in the heart of El Cerrito, we've built a loyal
                community of clients from Albany, Berkeley, Kensington, and beyond. Our
                massage chairs, meticulous technicians, and welcoming atmosphere keep them
                coming back.
              </motion.p>
              <motion.div {...fadeUp(0.2)}>
                <Link href="/about" className="btn btn-primary">
                  Read Our Story <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY PREVIEW ═══════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="rule" />
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--ink)" }}>Our Work</h2>
            </div>
            <Link href="/gallery" className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--rose)" }}>
              View Full Gallery <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)} className="gallery-item rounded-2xl" style={{ aspectRatio: "1" }}>
                <Image src={item.src} alt={item.alt} fill
                  sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-overlay-label">{item.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="btn btn-outline-rose">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ══════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ background: "var(--blush)" }}>
        <div className="container mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="rule" />
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--ink)" }}>
                What Clients Say
              </h2>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#E8A045" stroke="none" />)}
                <span className="text-sm font-bold ml-1" style={{ color: "var(--ink)" }}>4.5</span>
              </div>
              <p className="text-xs" style={{ color: "var(--ink-faint)" }}>44+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Scrolling review strip */}
        <div className="overflow-hidden mb-10">
          <div className="marquee-track gap-5" style={{ animationDuration: "40s" }}>
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="flex-shrink-0 w-80 mx-2.5 bg-white rounded-2xl p-6"
                style={{ border: "1px solid rgba(204,51,51,0.15)", boxShadow: "0 2px 12px rgba(61,10,10,0.06)" }}>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.stars)].map((_, s) => <Star key={s} size={13} fill="#E8A045" stroke="none" />)}
                </div>
                <p className="text-sm leading-relaxed mb-4 font-display italic" style={{ color: "var(--ink-mid)" }}>
                  "{r.text}"
                </p>
                <p className="text-xs font-semibold" style={{ color: "var(--ink)" }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container text-center">
          <a href="https://www.google.com/maps/search/Nails+by+Ken+El+Cerrito" target="_blank"
            rel="noopener noreferrer" className="btn btn-outline">
            Read All Google Reviews <ArrowUpRight size={13} />
          </a>
        </div>
      </section>

      {/* ═══ CTA BAND ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 text-center" style={{ background: "var(--mauve-dark)" }}>
        <div className="container">
          <hr className="hr-gold mb-10 max-w-xs mx-auto" />
          <motion.h2 {...fadeUp(0)} className="font-display text-4xl md:text-6xl text-white mb-5 leading-tight">
            Ready to Treat<br />
            <em style={{ color: "var(--rose)" }}>Yourself?</em>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-base mb-10 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
            Book online or just walk in — we'd love to see you.
          </motion.p>
          <motion.div {...fadeUp(0.15)} className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-rose" style={{ fontSize: "0.85rem", padding: "1rem 2rem" }}>
              Book an Appointment <ArrowRight size={15} />
            </Link>
            <a href="tel:+15105294357" className="btn btn-light" style={{ fontSize: "0.85rem", padding: "1rem 2rem" }}>
              <Phone size={15} /> (510) 529-4357
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTACT PREVIEW ═══════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Map */}
            <div>
              <span className="rule" />
              <h2 className="font-display text-3xl md:text-4xl mb-8" style={{ color: "var(--ink)" }}>Find Us</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "1px solid rgba(204,51,51,0.15)" }}>
                <iframe
                  title="Nails by Ken map"
                  src="https://maps.google.com/maps?q=9925+San+Pablo+Ave,+El+Cerrito,+CA+94530&output=embed"
                  width="100%" height="340" style={{ border: 0, display: "block" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Info */}
            <div className="pt-0 lg:pt-14">
              <ul className="space-y-7 mb-10">
                {[
                  { icon: MapPin,  label: "Address", lines: ["9925 San Pablo Ave", "El Cerrito, CA 94530"] },
                  { icon: Phone,   label: "Phone",   lines: ["(510) 529-4357"], href: "tel:+15105294357" },
                  { icon: Clock,   label: "Hours",   lines: ["Mon–Sat  9:30 AM–7:00 PM", "Sun  10:00 AM–6:00 PM"] },
                ].map(({ icon: Icon, label, lines, href }) => (
                  <li key={label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--blush)" }}>
                      <Icon size={17} style={{ color: "var(--rose)" }} />
                    </div>
                    <div>
                      <p className="eyebrow mb-1">{label}</p>
                      {href
                        ? <a href={href} className="font-display text-lg leading-tight hover:underline" style={{ color: "var(--ink)" }}>{lines[0]}</a>
                        : <p className="font-display text-lg leading-tight" style={{ color: "var(--ink)" }}>{lines[0]}</p>}
                      {lines[1] && <p className="text-sm mt-0.5" style={{ color: "var(--ink-faint)", fontWeight: 300 }}>{lines[1]}</p>}
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Request an Appointment <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STORE HOURS ═══════════════════════════════════ */}
      <section className="py-20 md:py-24" style={{ background: "var(--blush)" }}>
        <div className="container max-w-lg mx-auto text-center">
          <span className="rule rule-center" />
          <h2 className="font-display text-4xl md:text-5xl mb-10" style={{ color: "var(--ink)" }}>
            Store Hours
          </h2>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(204,51,51,0.2)" }}>
            {[
              { days: "Monday – Saturday", hours: "9:30 AM – 7:00 PM" },
              { days: "Sunday",            hours: "10:00 AM – 6:00 PM" },
            ].map((row, i) => (
              <div
                key={row.days}
                className="flex items-center justify-between px-8 py-5"
                style={{
                  background: i % 2 === 0 ? "#fff" : "var(--blush)",
                  borderBottom: i === 0 ? "1px solid rgba(204,51,51,0.15)" : "none",
                }}
              >
                <span
                  className="text-base font-semibold"
                  style={{ color: "var(--mauve-dark)", fontFamily: "'Inter', sans-serif" }}
                >
                  {row.days}
                </span>
                <span
                  className="text-base font-medium"
                  style={{ color: "var(--ink-muted)", fontFamily: "'Inter', sans-serif" }}
                >
                  {row.hours}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm" style={{ color: "var(--ink-faint)" }}>
            Walk-ins welcome · <a href="tel:+15105294357" className="underline" style={{ color: "var(--rose)" }}>(510) 529-4357</a>
          </p>
        </div>
      </section>
    </>
  );
}
