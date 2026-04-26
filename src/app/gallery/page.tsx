"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Phone } from "lucide-react";

const categories = ["All", "Nail Art", "Acrylic", "Gel Nails", "Pedicures", "Salon"];

const galleryItems = [
  // ── Nail Art ────────────────────────────────────────────────────────────
  {
    id: 1,
    category: "Nail Art",
    label: "Pink Butterfly Glitter",
    src: "/gallery/nail-art-pink-butterfly.jpg",
    alt: "Long coffin nails with pink glitter, butterfly accent and white V-tip design by Nails by Ken",
  },
  {
    id: 2,
    category: "Nail Art",
    label: "Purple Lightning Stiletto",
    src: "/gallery/nail-art-purple-lightning.jpg",
    alt: "Dark purple stiletto nails with holographic lightning vein design by Nails by Ken",
  },
  {
    id: 3,
    category: "Nail Art",
    label: "Fall Autumn Nails",
    src: "/gallery/nail-art-fall-oval.jpg",
    alt: "Short oval nails with fall autumn leaf art, red glitter and gold foil by Nails by Ken",
  },
  {
    id: 4,
    category: "Nail Art",
    label: "Black & Gold Clock",
    src: "/gallery/nail-art-black-gold-clock.jpg",
    alt: "Long coffin nails with black tips, gold glitter, clock face design and crystal rhinestones by Nails by Ken",
  },
  {
    id: 5,
    category: "Nail Art",
    label: "Fall Leaves Coffin",
    src: "/gallery/nail-art-fall-leaves-coffin.jpg",
    alt: "Long coffin nails with deep red and fall leaf nail art design by Nails by Ken",
  },
  {
    id: 6,
    category: "Nail Art",
    label: "Christmas Holiday Nails",
    src: "/gallery/nail-art-christmas.jpg",
    alt: "Long coffin nails with red and white Christmas nail art — snowflakes, candy canes and sweater pattern by Nails by Ken",
  },
  {
    id: 7,
    category: "Nail Art",
    label: "Royal Blue Floral",
    src: "/gallery/nail-art-blue-floral.jpg",
    alt: "Long square nails with royal blue tips, white floral designs, gold swirls and crystal rhinestones by Nails by Ken",
  },
  {
    id: 8,
    category: "Nail Art",
    label: "Heart & Smiley Stiletto",
    src: "/gallery/nail-art-heart-smiley-stiletto.jpg",
    alt: "Stiletto nails with red chrome tips, white base with heart and smiley face nail art and rhinestones by Nails by Ken",
  },
  {
    id: 9,
    category: "Nail Art",
    label: "Checker Red & Gold",
    src: "/gallery/nail-art-checker-red.jpg",
    alt: "Almond nails with red holographic and black and white checkerboard nail art with crystals by Nails by Ken",
  },
  {
    id: 10,
    category: "Nail Art",
    label: "3D Bow French",
    src: "/gallery/nail-art-3d-bow-coffin.jpg",
    alt: "Long coffin nails with white French tip, 3D pink bow and marble effect by Nails by Ken",
  },
  {
    id: 11,
    category: "Nail Art",
    label: "Celestial Stars",
    src: "/gallery/nail-art-celestial-stars.jpg",
    alt: "Almond nails with nude and black celestial star nail art design by Nails by Ken",
  },
  // ── Acrylic ─────────────────────────────────────────────────────────────
  {
    id: 12,
    category: "Acrylic",
    label: "Pink Chrome Aurora",
    src: "/gallery/acrylic-pink-chrome-stiletto.jpg",
    alt: "Long pink stiletto acrylic nails with aurora chrome effect and rhinestone accents by Nails by Ken",
  },
  {
    id: 14,
    category: "Acrylic",
    label: "Soft Pink French Tip",
    src: "/gallery/acrylic-soft-pink-french.jpg",
    alt: "Square acrylic nails with soft pink base and white French tips by Nails by Ken, El Cerrito",
  },
  {
    id: 15,
    category: "Acrylic",
    label: "Gold Chrome French",
    src: "/gallery/acrylic-gold-french-tip.jpg",
    alt: "Square nails with nude base and metallic gold chrome French tips by Nails by Ken",
  },
  // ── Gel Nails ───────────────────────────────────────────────────────────
  {
    id: 16,
    category: "Gel Nails",
    label: "Pink Glitter Gel",
    src: "/gallery/gel-pink-red-glitter.jpg",
    alt: "Short round nails with pink and red glitter gel polish by Nails by Ken",
  },
  {
    id: 17,
    category: "Gel Nails",
    label: "Red Holographic Coffin",
    src: "/gallery/gel-red-holographic-coffin.jpg",
    alt: "Long coffin nails with red and burgundy holographic glitter gel and orange accent nail by Nails by Ken",
  },
  {
    id: 18,
    category: "Gel Nails",
    label: "Chocolate Gold Tips",
    src: "/gallery/gel-chocolate-gold-french.jpg",
    alt: "Short almond gel nails with chocolate nude base and gold chrome French tips by Nails by Ken",
  },
  // ── Pedicures ────────────────────────────────────────────────────────────
  {
    id: 21,
    category: "Pedicures",
    label: "French Tip Pedicure",
    src: "/gallery/pedicure-french-tip-sandals.png",
    alt: "French tip pedicure in white braided sandals by Nails by Ken, El Cerrito CA",
  },
  {
    id: 22,
    category: "Pedicures",
    label: "Bright Yellow Pedicure",
    src: "/gallery/pedicure-yellow.jpg",
    alt: "Bright yellow pedicure with silver sandals by Nails by Ken, El Cerrito CA",
  },
  {
    id: 23,
    category: "Pedicures",
    label: "Red Glitter Pedicure",
    src: "/gallery/pedicure-red-glitter.jpg",
    alt: "Red glitter pedicure by Nails by Ken, El Cerrito CA",
  },
  {
    id: 24,
    category: "Pedicures",
    label: "Silver Glitter Pedicure",
    src: "/gallery/pedicure-silver-glitter.jpg",
    alt: "Silver glitter pedicure by Nails by Ken, El Cerrito CA",
  },
  // ── Salon ────────────────────────────────────────────────────────────────
  {
    id: 19,
    category: "Salon",
    label: "Our Salon",
    src: "/gallery/salon-interior.jpg",
    alt: "Interior of Nails by Ken salon in El Cerrito CA — clean white stations and pedicure chairs",
  },
  {
    id: 20,
    category: "Salon",
    label: "Pedicure Chairs",
    src: "/gallery/salon-pedicure-chairs.jpg",
    alt: "Clients relaxing in massage pedicure chairs at Nails by Ken salon in El Cerrito CA",
  },
  {
    id: 25,
    category: "Salon",
    label: "Pedicure in Progress",
    src: "/gallery/salon-client-pedicure.png",
    alt: "Client enjoying a pedicure service in massage chair at Nails by Ken, El Cerrito CA",
  },
  {
    id: 26,
    category: "Salon",
    label: "Friends Day at the Salon",
    src: "/gallery/salon-clients-toasting.jpg",
    alt: "Two clients toasting with drinks in pedicure massage chairs at Nails by Ken, El Cerrito CA",
  },
  {
    id: 27,
    category: "Salon",
    label: "Salon Floor",
    src: "/gallery/salon-busy-floor.jpg",
    alt: "Busy salon floor with clients getting pedicures at Nails by Ken, El Cerrito CA",
  },
  {
    id: 28,
    category: "Salon",
    label: "Storefront",
    src: "/gallery/salon-exterior.jpg",
    alt: "Nails by Ken storefront at 9925 San Pablo Ave, El Cerrito CA",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-28 pb-16 px-6 text-center"
        style={{ background: "linear-gradient(160deg, #FFF8F8 0%, #FFE8E8 100%)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="gold-line" />
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2D0A0A" }}
          >
            Gallery
          </h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "#7A2020" }}>
            Real work by our team. Browse nail art, acrylics, gel sets, and a look
            inside our salon in El Cerrito.
          </p>
        </motion.div>
      </section>

      {/* Filter tabs */}
      <section
        className="py-6 px-6 sticky top-16 z-30"
        style={{ background: "#fff", borderBottom: "1px solid #FFE8E8" }}
      >
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={
                activeCategory === cat
                  ? { background: "#CC3333", color: "#fff", border: "2px solid #CC3333" }
                  : { background: "transparent", color: "#7A2020", border: "2px solid #FFD0D0" }
              }
            >
              {cat}
              <span
                className="ml-1.5 text-xs opacity-70"
              >
                ({cat === "All"
                  ? galleryItems.length
                  : galleryItems.filter((g) => g.category === cat).length})
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6" style={{ background: "#FFF8F8" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                  className="gallery-item"
                  onClick={() => setLightbox(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightbox(item)}
                  aria-label={`View ${item.label}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={0}
                    height={0}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-label">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(45,24,32,0.9)", backdropFilter: "blur(10px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ maxWidth: "min(90vw, 520px)", maxHeight: "85vh", width: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
                style={{ background: "rgba(45,24,32,0.75)" }}
                aria-label="Close image"
              >
                <X size={18} color="white" />
              </button>

              {/* Image */}
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={0}
                height={0}
                sizes="(max-width: 640px) 90vw, 520px"
                className="w-full h-auto block"
                style={{ maxHeight: "80vh", objectFit: "contain" }}
                priority
              />

              {/* Caption */}
              <div className="px-5 py-4" style={{ background: "#2D0A0A" }}>
                <p
                  className="text-white font-semibold text-base"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {lightbox.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#E88888" }}>
                  {lightbox.category} · Nails by Ken, El Cerrito CA
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #2D0A0A 0%, #4A1010 100%)" }}
      >
        <h2
          className="text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Love What You See?
        </h2>
        <p className="mb-8" style={{ color: "#B06060" }}>
          Book your appointment and let us create something beautiful for you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">Book an Appointment</Link>
          <a href="tel:+15105294357" className="btn-gold">
            <Phone size={15} /> Call Now
          </a>
        </div>
      </section>
    </>
  );
}
