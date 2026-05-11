import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Plastic Surgery in Colombia | International Patients",
  description:
    "World-class plastic surgery in Colombia for international patients. Rhinoplasty, liposuction, breast surgery — experienced surgeons, personalized care, and full travel support.",
  keywords:
    "plastic surgery Colombia, rhinoplasty Colombia, liposuction Colombia, breast surgery Colombia, medical tourism Colombia, cosmetic surgery international",
  openGraph: {
    title: "Premium Plastic Surgery in Colombia | International Patients",
    description:
      "Experienced surgeons, personalized care, and complete travel assistance in Colombia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1c1c1e]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

