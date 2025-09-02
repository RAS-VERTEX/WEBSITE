import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "RAS-VERTEX | Sunshine Coast Painting & Rope Access Specialists",
  description:
    "Professional painting, cleaning, waterproofing & maintenance experts serving residential and commercial properties across the Sunshine Coast. IRATA-certified rope access specialists with 25+ years experience.",
  keywords:
    "painting sunshine coast, commercial painting, residential painting, rope access, waterproofing, building maintenance, IRATA certified, height safety",
  authors: [{ name: "RAS-VERTEX" }],
  creator: "RAS-VERTEX",
  publisher: "RAS-VERTEX",
  robots: "index, follow",
  openGraph: {
    title: "RAS-VERTEX | Sunshine Coast Painting & Rope Access Specialists",
    description:
      "Professional painting, cleaning, waterproofing & maintenance experts with 25+ years Sunshine Coast experience.",
    url: "https://rasvertex.com.au",
    siteName: "RAS-VERTEX",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAS-VERTEX | Sunshine Coast Painting Specialists",
    description:
      "Professional painting & rope access specialists serving the Sunshine Coast",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.variable, poppins.variable)}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
