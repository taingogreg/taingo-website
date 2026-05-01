import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taingo | AI Voice Receptionist for Home Service Businesses",
  description:
    "Taingo provides AI-powered voice receptionists for HVAC, plumbing, roofing, electricians, and other home service businesses. Never miss a call. Book more jobs. Grow faster.",
  keywords: [
    "AI receptionist",
    "AI phone answering service",
    "HVAC receptionist",
    "plumbing answering service",
    "home services AI",
    "virtual receptionist",
    "24/7 call answering",
    "appointment scheduling AI",
  ],
  openGraph: {
    title: "Taingo | AI Voice Receptionist for Home Service Businesses",
    description:
      "Never miss another call. Taingo's AI receptionist answers 24/7, books appointments, and captures every lead for your home service business.",
    type: "website",
    locale: "en_US",
    siteName: "Taingo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrainsMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
