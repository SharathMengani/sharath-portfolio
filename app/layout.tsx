import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Sharath Chandra Mengani | Senior Frontend Developer • React.js • Next.js • Angular • TypeScript",
  description:
    "Portfolio of Sharath Chandra Mengani, a Senior Frontend Developer with 5+ years of experience engineering high-performance FinTech, Crypto, AI, and SaaS applications. Specialized in React.js, Next.js (App Router, SSR), Angular, TypeScript, real-time trading terminals, and AI conversational/voice agent platforms.",
  keywords: [
    "Sharath Mengani",
    "Sharath Chandra Mengani",
    "Senior Frontend Developer",
    "React.js",
    "Next.js",
    "Angular",
    "TypeScript",
    "WebSockets",
    "CEX DEX Trading Terminal",
    "AI Conversational Voice Agents",
    "STT TTS",
    "Redux",
    "Zustand",
    "NgRx",
    "FinTech",
    "Crypto",
    "Hyderabad",
  ],
  authors: [{ name: "Sharath Chandra Mengani" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


