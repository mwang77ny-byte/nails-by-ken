import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#100000", borderTop: "1px solid rgba(201,169,110,0.1)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <p className="font-display text-xl mb-3" style={{ color: "rgba(250,250,248,0.9)" }}>
              Nails <em style={{ color: "#CC3333" }}>by Ken</em>
            </p>
            <p style={{ color: "rgba(250,250,248,0.35)", fontWeight: 300, fontSize: "0.82rem", lineHeight: 1.6 }}>
              El Cerrito's neighborhood nail salon — skilled hands, clean space, relaxing vibes.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(201,169,110,0.6)" }}>Pages</p>
            <ul className="space-y-3">
              {[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/about",label:"About"},{href:"/gallery",label:"Gallery"},{href:"/contact",label:"Book Now"}].map((l) => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(201,169,110,0.6)" }}>Services</p>
            <ul className="space-y-3">
              {["Manicures & Pedicures","Gel Nails","Acrylic & Dip","Nail Art","Extensions","Waxing & Treatments"].map((s) => (
                <li key={s} className="footer-link" style={{ cursor: "default" }}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(201,169,110,0.6)" }}>Visit</p>
            <ul className="space-y-4">
              <li className="flex gap-2.5 text-xs" style={{ color: "rgba(250,250,248,0.4)" }}>
                <MapPin size={13} className="shrink-0 mt-0.5" style={{ color: "#CC3333" }} />
                <span>9925 San Pablo Ave<br />El Cerrito, CA 94530</span>
              </li>
              <li className="flex gap-2.5 text-xs" style={{ color: "rgba(250,250,248,0.4)" }}>
                <Phone size={13} style={{ color: "#CC3333" }} />
                <a href="tel:+15105294357" className="footer-link">(510) 529-4357</a>
              </li>
              <li className="flex gap-2.5 text-xs" style={{ color: "rgba(250,250,248,0.4)" }}>
                <Clock size={13} className="shrink-0 mt-0.5" style={{ color: "#CC3333" }} />
                <span>Open Daily · Closes 6 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(201,169,110,0.1)" }}>
          <p style={{ color: "rgba(250,250,248,0.2)", fontSize: "0.75rem" }}>© {new Date().getFullYear()} Nails by Ken · El Cerrito, CA</p>
          <p style={{ color: "rgba(250,250,248,0.2)", fontSize: "0.75rem" }}>El Cerrito · Albany · Berkeley · Kensington · Richmond</p>
        </div>
      </div>
    </footer>
  );
}
