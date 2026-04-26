import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nails by Ken | Nail Salon in El Cerrito, CA",
  description:
    "Nails by Ken — El Cerrito's trusted nail salon. Manicures, pedicures, gel nails, acrylics, nail art, and waxing. Walk-ins welcome. Serving the East Bay: El Cerrito, Albany, Berkeley, Richmond & Kensington.",
  keywords: [
    "nail salon El Cerrito",
    "manicure pedicure East Bay",
    "gel nails El Cerrito",
    "acrylic nails Berkeley",
    "nail art East Bay",
    "nail salon near me El Cerrito",
    "Nails by Ken",
  ],
  openGraph: {
    title: "Nails by Ken | Nail Salon in El Cerrito, CA",
    description:
      "Beautiful nails, relaxing experience. Visit us at 9925 San Pablo Ave, El Cerrito. Walk-ins welcome!",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "Nails by Ken",
  telephone: "+15105294357",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9925 San Pablo Ave",
    addressLocality: "El Cerrito",
    addressRegion: "CA",
    postalCode: "94530",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "44",
  },
  priceRange: "$$",
  areaServed: ["El Cerrito", "Albany", "Berkeley", "Richmond", "Kensington"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
