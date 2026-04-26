"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

/* ── Pricing data ───────────────────────────────── */
const sections = [
  {
    title: "Manicures",
    items: [
      { name: "Classic Manicure",    price: "$20"       },
      { name: "Spa Manicure",        price: "$33"       },
      { name: "Manicure with Gel",   price: "$45"       },
    ],
  },
  {
    title: "Pedicures",
    items: [
      { name: "Spa Pedicure",        price: "$37"       },
      { name: "Pedicure with Gel",   price: "$48"       },
      { name: "Deluxe Pedicure",     price: "$60"       },
    ],
  },
  {
    title: "Nail Enhancements",
    items: [
      { name: "Acrylic / Fill",               price: "$45 / $40+" },
      { name: "Acrylic / Fill with Gel",      price: "$53 / $48+" },
      { name: "Powder Color / Fill",          price: "$58 / $53+" },
      { name: "Pink & White",                 price: "$60 / $55+" },
      { name: "Dipping Powder",               price: "$50+"       },
      { name: "Ombre / Fill",                 price: "$60 / $55+" },
      { name: "Gel X Extensions",             price: "$55+"       },
      { name: "Pro Hybrid Gel / Fill",        price: "$55 / $50+" },
      { name: "Gel Color Change",             price: "$25+"       },
      { name: "Lacquer Color Change",         price: "$15"        },
      { name: "Take Off Gel",                 price: "$10"        },
      { name: "Take Off Acrylic",             price: "$15"        },
      { name: "French Tip",                   price: "$7+"        },
      { name: "Designs",                      price: "$5+"        },
    ],
  },
  {
    title: "Waxing Services",
    items: [
      { name: "Eyebrows",      price: "$15"  },
      { name: "Lips",          price: "$10"  },
      { name: "Chin",          price: "$12"  },
      { name: "Face Combo",    price: "$40+" },
      { name: "Under Arms",    price: "$18+" },
      { name: "Full Arms",     price: "$40"  },
      { name: "Half Arms",     price: "$30"  },
      { name: "Full Legs",     price: "$55"  },
      { name: "Half Legs",     price: "$40"  },
      { name: "Bikini Line",   price: "$40"  },
      { name: "Brazilian",     price: "$50+" },
      { name: "Back",          price: "$45"  },
      { name: "Facial",        price: "$50+" },
      { name: "Eyelashes",     price: "$40+" },
      { name: "Eyebrow Tint",  price: "$25"  },
    ],
  },
];

/* ── Price row ──────────────────────────────────── */
function PriceRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-baseline gap-1 py-2.5" style={{ borderBottom: "1px solid rgba(61,10,10,0.07)" }}>
      <span className="text-sm md:text-base shrink-0" style={{ color: "#3D0A0A", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
        {name}
      </span>
      <span
        className="flex-1 mx-2"
        style={{
          borderBottom: "1.5px dotted rgba(61,10,10,0.25)",
          minWidth: 24,
          marginBottom: "0.25rem",
        }}
      />
      <span className="shrink-0 text-sm md:text-base font-semibold" style={{ color: "#3D0A0A", fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap" }}>
        {price}
      </span>
    </div>
  );
}

/* ── Section card ───────────────────────────────── */
function SectionCard({ section, index }: { section: typeof sections[0]; index: number }) {
  const isLarge = section.items.length > 6;
  const mid = isLarge ? Math.ceil(section.items.length / 2) : section.items.length;
  const col1 = section.items.slice(0, mid);
  const col2 = isLarge ? section.items.slice(mid) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="rounded-3xl px-8 py-8 md:px-12 md:py-10"
      style={{ background: "#ffe8e8" }}
    >
      {/* Category header */}
      <h2
        className="text-center text-lg md:text-xl font-bold tracking-[0.18em] uppercase mb-8"
        style={{ color: "#3D0A0A", fontFamily: "'Playfair Display', serif", letterSpacing: "0.2em" }}
      >
        {section.title}
      </h2>

      {/* Price rows — two columns for large sections */}
      {isLarge ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <div>{col1.map((item) => <PriceRow key={item.name} {...item} />)}</div>
          <div>{col2.map((item) => <PriceRow key={item.name} {...item} />)}</div>
        </div>
      ) : (
        <div className="max-w-xl mx-auto">
          {col1.map((item) => <PriceRow key={item.name} {...item} />)}
        </div>
      )}
    </motion.div>
  );
}

/* ── Page ───────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      {/* Page hero — no image, just clean heading on matching bg */}
      <section className="pt-28 pb-14 text-center" style={{ background: "#fff0f0" }}>
        <div className="container">
          <span className="rule rule-center" />
          <h1
            className="font-display text-5xl md:text-6xl mb-4"
            style={{ color: "#3D0A0A" }}
          >
            Services &amp; Pricing
          </h1>
          <p className="text-base max-w-md mx-auto" style={{ color: "#7A2020", fontWeight: 300 }}>
            All services performed by skilled technicians at our El Cerrito salon.
            Walk-ins welcome — call ahead to reserve your time.
          </p>
          <p className="text-xs mt-4" style={{ color: "#A86060" }}>
            Prices starting from those listed. <strong>+</strong> indicates price may vary by length, shape, or complexity.
          </p>
        </div>
      </section>

      {/* Price list */}
      <section className="py-12 md:py-20" style={{ background: "#fff0f0" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            {sections.map((section, i) => (
              <SectionCard key={section.title} section={section} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "#3D0A0A" }}>
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Ready to Book?</h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
            Walk in any day or call to reserve your preferred time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-rose">
              Book an Appointment <ArrowRight size={14} />
            </Link>
            <a href="tel:+15105294357" className="btn btn-light">
              <Phone size={14} /> (510) 529-4357
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
