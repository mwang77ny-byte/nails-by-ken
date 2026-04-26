"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Star, Heart, Users, MapPin, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const trust = [
  { icon: Shield,   title: "Strict Sanitation",    desc: "All tools sterilized between every client. You can relax completely." },
  { icon: Star,     title: "Skilled Technicians",  desc: "Trained in the latest techniques — from classics to intricate nail art." },
  { icon: Heart,    title: "Massage Chairs",       desc: "Premium pedicure chairs that make every visit feel like a true escape." },
  { icon: Users,    title: "Community Roots",      desc: "Serving El Cerrito and the East Bay for 8+ years with loyal returning clients." },
  { icon: Sparkles, title: "4.5-Star Rated",       desc: "44+ Google reviews from happy clients across the East Bay." },
  { icon: MapPin,   title: "Locally Owned",        desc: "An independent, neighborhood salon — not a chain. Every visit supports a local business." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-72 md:h-96 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/salon-interior.jpg" alt="Inside Nails by Ken salon in El Cerrito CA"
            fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(61,10,10,0.85) 0%, rgba(61,10,10,0.2) 70%, transparent 100%)" }} />
        </div>
        <div className="container relative z-10">
          <span className="rule" style={{ background: "rgba(201,169,110,0.9)" }} />
          <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-3">About Us</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 300, fontSize: "1.05rem" }}>
            A neighborhood nail salon built on skill, care, and community.
          </p>
        </div>
      </section>

      {/* Meet Ken */}
      <section className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp(0)} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
                <Image src="/gallery/salon-interior.jpg" alt="Ken inside Nails by Ken salon"
                  fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden md:block bg-white rounded-2xl px-5 py-4 shadow-lg"
                style={{ border: "1px solid rgba(204,51,51,0.15)" }}>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#E8A045" stroke="none" />)}
                </div>
                <p className="text-xs font-bold" style={{ color: "var(--ink)" }}>4.5 Stars · 44+ Reviews</p>
                <p className="text-xs" style={{ color: "var(--ink-faint)" }}>Google Reviews</p>
              </div>
            </motion.div>

            <div>
              <span className="rule" />
              <motion.h2 {...fadeUp(0)} className="font-display text-4xl md:text-5xl leading-tight mb-6" style={{ color: "var(--ink)" }}>
                The Story Behind<br /><em>Nails by Ken</em>
              </motion.h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--ink-muted)", fontWeight: 300 }}>
                <motion.p {...fadeUp(0.08)}>
                  Nails by Ken was born from a simple belief: everyone deserves to feel pampered without
                  the pretension. Ken opened this salon with a clear vision — a place where East Bay
                  residents could walk in, sit in a massage chair, and walk out with beautiful nails and
                  a smile on their face.
                </motion.p>
                <motion.p {...fadeUp(0.14)}>
                  Located on San Pablo Ave in the heart of El Cerrito, the salon has become a beloved
                  part of the local community. Clients come from Albany, Berkeley, Kensington, Richmond,
                  and beyond — many returning week after week because of the consistency, the care, and
                  the warmth they find here.
                </motion.p>
                <motion.p {...fadeUp(0.18)}>
                  What makes Nails by Ken different? It's the little things. Technicians who remember
                  your regular color. A clean space that never feels rushed. Attention to detail on every
                  nail, every time. And of course, those massage chairs that make waiting feel like part
                  of the treatment.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 md:py-24 text-center" style={{ background: "var(--mauve-dark)" }}>
        <div className="container max-w-3xl mx-auto">
          <div className="font-display text-7xl leading-none mb-4" style={{ color: "rgba(201,169,110,0.3)" }}>&ldquo;</div>
          <p className="font-display text-2xl md:text-3xl italic text-white leading-relaxed mb-6">
            Their skills as technicians and customer service are top notch. The massage chairs are a dream.
            Best nail salon in El Cerrito by far.
          </p>
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--rose)" }}>
            — Verified Google Review
          </p>
        </div>
      </section>

      {/* Trust factors */}
      <section className="py-24 md:py-32" style={{ background: "var(--blush)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="rule rule-center" />
            <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "var(--ink)" }}>Why Clients Love Us</h2>
            <p className="text-lg max-w-lg mx-auto" style={{ color: "var(--ink-muted)", fontWeight: 300 }}>
              We're more than a nail salon — we're your neighborhood self-care spot.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trust.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.08)}
                className="bg-white rounded-2xl p-7" style={{ border: "1px solid rgba(204,51,51,0.12)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--blush)" }}>
                  <item.icon size={21} style={{ color: "var(--rose)" }} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg mb-2" style={{ color: "var(--ink)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)", fontWeight: 300 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 text-center" style={{ background: "var(--cream)" }}>
        <div className="container">
          <span className="rule rule-center" />
          <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: "var(--ink)" }}>Proudly Serving the East Bay</h2>
          <p className="mb-8 text-base max-w-lg mx-auto" style={{ color: "var(--ink-muted)", fontWeight: 300 }}>
            Conveniently located on San Pablo Ave in El Cerrito, easy to get to from anywhere in the area.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["El Cerrito", "Albany", "Berkeley", "Richmond", "Kensington", "El Sobrante"].map((city) => (
              <span key={city} className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: "var(--blush)", color: "var(--mauve)" }}>{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "var(--mauve-dark)" }}>
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-3">Come See Us</h2>
          <p className="mb-2" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>9925 San Pablo Ave · El Cerrito, CA 94530</p>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>Open daily · Closes 6 PM · Walk-ins welcome</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-rose">Book an Appointment <ArrowRight size={14} /></Link>
            <a href="tel:+15105294357" className="btn btn-light">(510) 529-4357</a>
          </div>
        </div>
      </section>
    </>
  );
}
