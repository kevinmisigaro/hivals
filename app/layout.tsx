import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Hivals Foundation | Expert Consultancy Services",
  description: "Multi-disciplinary consultancy offering expert services in Design & Construction, project management, risk assessment, and sustainable solutions.",
  keywords: ["construction consultancy", "project management", "sustainable building", "risk assessment", "building surveying"],
  authors: [{ name: "The Hivals Foundation" }],
  openGraph: {
    title: "The Hivals Foundation | Expert Consultancy Services",
    description: "Multi-disciplinary consultancy offering expert services in Design & Construction, project management, risk assessment, and sustainable solutions.",
    type: "website",
    locale: "en_GB",
    siteName: "The Hivals Foundation",
  },
    icons: {
    icon: "/hivals-svg.svg",
    shortcut: "/hivals-svg.svg",
    apple: "/hivals-svg.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
