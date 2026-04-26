"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MapPin, Clock, Send, CheckCircle, Star } from "lucide-react";

const services = [
  "Classic Manicure","Spa Manicure","Gel Manicure","Classic Pedicure","Deluxe Pedicure",
  "Acrylic Full Set","Acrylic Fill","Dip Powder Nails","Gel Extensions","Nail Art","Waxing","Other",
];

const hours = [
  ["Monday",    "9:30 AM – 7:00 PM"],
  ["Tuesday",   "9:30 AM – 7:00 PM"],
  ["Wednesday", "9:30 AM – 7:00 PM"],
  ["Thursday",  "9:30 AM – 7:00 PM"],
  ["Friday",    "9:30 AM – 7:00 PM"],
  ["Saturday",  "9:30 AM – 7:00 PM"],
  ["Sunday",    "10:00 AM – 6:00 PM"],
];

const inputStyle = {
  width: "100%", padding: "0.8rem 1rem", borderRadius: "0.75rem",
  border: "1.5px solid rgba(204,51,51,0.25)", background: "var(--blush)",
  color: "var(--ink)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem",
  outline: "none", transition: "border-color 0.2s",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:"", phone:"", email:"", service:"", date:"", time:"", notes:"" });
  const set = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 text-center" style={{ background: "var(--blush)" }}>
        <div className="container">
          <span className="rule rule-center" />
          <h1 className="font-display text-5xl md:text-6xl mb-4" style={{ color: "var(--ink)" }}>Book an Appointment</h1>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "var(--ink-muted)", fontWeight: 300 }}>
            Fill out the form and we'll confirm your appointment. Or just call us — we'd love to hear from you.
          </p>
          <a href="tel:+15105294357" className="btn btn-rose inline-flex">
            <Phone size={15} /> Call (510) 529-4357
          </a>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 md:py-28" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg" style={{ border: "1px solid rgba(204,51,51,0.12)" }}>
                <span className="rule" />
                <h2 className="font-display text-3xl mb-8" style={{ color: "var(--ink)" }}>Request an Appointment</h2>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 rounded-2xl" style={{ background: "var(--blush)" }}>
                    <CheckCircle size={52} className="mx-auto mb-4" style={{ color: "var(--rose)" }} />
                    <h3 className="font-display text-2xl mb-2" style={{ color: "var(--ink)" }}>Request Received!</h3>
                    <p style={{ color: "var(--ink-muted)", fontWeight: 300 }}>
                      Thank you, {form.name}! We'll reach out to confirm shortly. For immediate help, call{" "}
                      <a href="tel:+15105294357" className="font-semibold underline" style={{ color: "var(--rose)" }}>(510) 529-4357</a>.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: "var(--ink-muted)" }}>
                          Full Name <span style={{ color: "var(--rose)" }}>*</span>
                        </label>
                        <input id="name" name="name" type="text" required value={form.name} onChange={set}
                          placeholder="Your name" autoComplete="name" style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(204,51,51,0.25)")} />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: "var(--ink-muted)" }}>
                          Phone <span style={{ color: "var(--rose)" }}>*</span>
                        </label>
                        <input id="phone" name="phone" type="tel" required value={form.phone} onChange={set}
                          placeholder="(510) 555-0000" autoComplete="tel" style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(204,51,51,0.25)")} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: "var(--ink-muted)" }}>Email</label>
                      <input id="email" name="email" type="email" value={form.email} onChange={set}
                        placeholder="you@example.com" autoComplete="email" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(204,51,51,0.25)")} />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: "var(--ink-muted)" }}>
                        Service <span style={{ color: "var(--rose)" }}>*</span>
                      </label>
                      <select id="service" name="service" required value={form.service} onChange={set}
                        style={{ ...inputStyle, appearance: "none", color: form.service ? "var(--ink)" : "var(--ink-faint)" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(204,51,51,0.25)")}>
                        <option value="" disabled>Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="date" className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: "var(--ink-muted)" }}>Preferred Date</label>
                        <input id="date" name="date" type="date" value={form.date} onChange={set} style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(204,51,51,0.25)")} />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: "var(--ink-muted)" }}>Preferred Time</label>
                        <input id="time" name="time" type="time" value={form.time} onChange={set} min="09:00" max="17:30" style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(204,51,51,0.25)")} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="notes" className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: "var(--ink-muted)" }}>Notes</label>
                      <textarea id="notes" name="notes" rows={4} value={form.notes} onChange={set}
                        placeholder="Special requests, nail inspo, questions…"
                        style={{ ...inputStyle, resize: "none" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(204,51,51,0.25)")} />
                    </div>
                    <p className="text-xs" style={{ color: "var(--ink-faint)" }}>* Required. We'll contact you to confirm your appointment.</p>
                    <button type="submit" className="btn btn-primary w-full justify-center">
                      <Send size={14} /> Send Appointment Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <div className="bg-white rounded-2xl p-7 shadow-sm" style={{ border: "1px solid rgba(204,51,51,0.12)" }}>
                <h3 className="font-display text-xl mb-5" style={{ color: "var(--ink)" }}>Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone size={17} className="shrink-0 mt-0.5" style={{ color: "var(--rose)" }} />
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "var(--ink-faint)" }}>Phone</p>
                      <a href="tel:+15105294357" className="font-display text-lg hover:underline" style={{ color: "var(--ink)" }}>(510) 529-4357</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={17} className="shrink-0 mt-0.5" style={{ color: "var(--rose)" }} />
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "var(--ink-faint)" }}>Address</p>
                      <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>9925 San Pablo Ave<br />El Cerrito, CA 94530</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={17} className="shrink-0 mt-0.5" style={{ color: "var(--rose)" }} />
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ink-faint)" }}>Hours</p>
                      {hours.map(([day, time]) => (
                        <div key={day} className="flex justify-between text-xs gap-4 mb-1">
                          <span className="font-semibold" style={{ color: "var(--ink)" }}>{day}</span>
                          <span style={{ color: "var(--ink-muted)" }}>{time}</span>
                        </div>
                      ))}
                      <p className="text-xs font-semibold mt-2" style={{ color: "var(--rose)" }}>Walk-ins welcome!</p>
                    </div>
                  </li>
                </ul>
                <a href="tel:+15105294357" className="btn btn-primary w-full justify-center mt-6">
                  <Phone size={14} /> Call to Book Now
                </a>
              </div>

              {/* Rating */}
              <div className="rounded-2xl p-6" style={{ background: "var(--mauve-dark)" }}>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(4)].map((_, i) => <Star key={i} size={15} fill="#E8A045" stroke="none" />)}
                  <Star size={15} fill="#E8A045" stroke="none" style={{ opacity: 0.5 }} />
                </div>
                <p className="font-semibold text-white mb-1">4.5 Stars on Google</p>
                <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
                  44+ verified reviews from happy East Bay clients
                </p>
                <a href="https://www.google.com/maps/search/Nails+by+Ken+El+Cerrito" target="_blank"
                  rel="noopener noreferrer" className="btn btn-light w-full justify-center" style={{ fontSize: "0.75rem", padding: "0.65rem 1rem" }}>
                  Read Reviews on Google
                </a>
              </div>

              {/* Areas */}
              <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid rgba(204,51,51,0.12)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--ink-faint)" }}>Serving the East Bay</p>
                <div className="flex flex-wrap gap-2">
                  {["El Cerrito","Albany","Berkeley","Richmond","Kensington"].map((city) => (
                    <span key={city} className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "var(--blush)", color: "var(--mauve)" }}>{city}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-28" style={{ background: "var(--cream)" }}>
        <div className="container">
          <h3 className="font-display text-2xl mb-6 text-center" style={{ color: "var(--ink)" }}>Find Us</h3>
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "1px solid rgba(204,51,51,0.15)" }}>
            <iframe title="Nails by Ken location"
              src="https://maps.google.com/maps?q=9925+San+Pablo+Ave,+El+Cerrito,+CA+94530&output=embed"
              width="100%" height="420" style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <p className="text-center text-sm mt-3" style={{ color: "var(--ink-muted)" }}>
            9925 San Pablo Ave · El Cerrito, CA 94530 ·{" "}
            <a href="https://maps.google.com/maps?q=9925+San+Pablo+Ave,+El+Cerrito,+CA+94530"
              target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--rose)" }}>
              Get Directions
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
