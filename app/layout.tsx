import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thehivalsgroup.co.uk'), // Replace with your actual domain
  title: {
    default: "The Hivals Foundation",
    template: "%s | The Hivals Foundation"
  },
  description: "Multi-disciplinary consultancy offering expert services in Design & Construction, project management, risk assessment, and sustainable solutions.",
  keywords: [
    "construction consultancy", 
    "project management", 
    "sustainable building", 
    "risk assessment", 
    "building surveying",
    "design consultancy",
    "construction project management",
    "building compliance",
    "feasibility studies",
    "UK consultancy"
  ],
  authors: [{ name: "The Hivals Foundation" }],
  creator: "The Hivals Foundation",
  publisher: "The Hivals Foundation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: "The Hivals Foundation",
      template: "%s | The Hivals Foundation"
    },
    description: "Multi-disciplinary consultancy offering expert services in Design & Construction, project management, risk assessment, and sustainable solutions.",
    type: "website",
    locale: "en_GB",
    url: "https://www.thehivalsgroup.co.uk/", // Replace with your actual domain
    siteName: "The Hivals Foundation",
    images: [
      {
        url: "/hivals-png.png", // Add an Open Graph image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "The Hivals Foundation - Expert Consultancy Services",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "The Hivals Foundation | Expert Consultancy Services",
  //   description: "Multi-disciplinary consultancy offering expert services in Design & Construction, project management, risk assessment, and sustainable solutions.",
  //   images: ["/og-image.jpg"], // Same image as OpenGraph
  //   creator: "@thehivalsfoundation", // Add your Twitter handle if you have one
  // },
  icons: {
    icon: [
      { url: "/hivals-svg.svg", sizes: "16x16", type: "image/svg" },
      { url: "/hivals-svg.svg", sizes: "32x32", type: "image/svg" },
    ],
    shortcut: "/hivals-svg.svg",
    apple: "/hivals-svg.svg",
  },
  // manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.thehivalsgroup.co.uk", // Replace with your actual domain
  },
  // verification: {
  //   google: "your-google-verification-code", // Add after setting up Google Search Console
  //   // yandex: "your-yandex-verification-code",
  //   // bing: "your-bing-verification-code",
  // },
  category: "Business Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://www.thehivalsgroup.co.uk" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}