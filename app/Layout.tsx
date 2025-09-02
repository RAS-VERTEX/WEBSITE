// FILE PATH: /app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RAS-VERTEX | Sunshine Coast Painting & Rope Access Specialists",
    template: "%s | RAS-VERTEX",
  },
  description:
    "Professional painting, cleaning, waterproofing & maintenance experts serving residential and commercial properties across the Sunshine Coast. IRATA-certified rope access specialists with 25+ years experience.",
  keywords: [
    "painting sunshine coast",
    "commercial painting",
    "residential painting",
    "rope access",
    "waterproofing",
    "building maintenance",
    "IRATA certified",
    "height safety",
    "exterior painting",
    "interior painting",
    "Caloundra",
    "Maroochydore",
    "Noosa",
    "Nambour",
  ].join(", "),
  authors: [{ name: "RAS-VERTEX", url: "https://rasvertex.com.au" }],
  creator: "RAS-VERTEX",
  publisher: "RAS-VERTEX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://rasvertex.com.au",
    title: "RAS-VERTEX | Sunshine Coast Painting & Rope Access Specialists",
    description:
      "Professional painting, cleaning, waterproofing & maintenance experts with 25+ years Sunshine Coast experience.",
    siteName: "RAS-VERTEX",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RAS-VERTEX - Professional Painting and Rope Access Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAS-VERTEX | Sunshine Coast Painting Specialists",
    description:
      "Professional painting & rope access specialists serving the Sunshine Coast",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://rasvertex.com.au",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(bebasNeue.variable, poppins.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#002653" />
      </head>
      <body className="font-poppins antialiased">
        {children}

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "RAS-VERTEX",
              description:
                "Professional painting, cleaning, waterproofing & rope access specialists",
              url: "https://rasvertex.com.au",
              telephone: "0412345678",
              email: "info@rasvertex.com.au",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sunshine Coast",
                addressRegion: "QLD",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.65,
                longitude: 153.0667,
              },
              openingHours: "Mo-Fr 07:00-17:00, Sa 08:00-16:00",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -26.65,
                  longitude: 153.0667,
                },
                geoRadius: "50000",
              },
              areaServed: [
                "Sunshine Coast",
                "Caloundra",
                "Maroochydore",
                "Noosa",
                "Nambour",
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Painting and Maintenance Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Residential Painting",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Commercial Painting",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Rope Access Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Waterproofing",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
