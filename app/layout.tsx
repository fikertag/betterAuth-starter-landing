import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import { Analytics } from "@vercel/analytics/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "betterAuth starter",
  description:
    "Get started in 60s with betterAuth the Nuxt.js Full-Stack SaaS Starter Kit.",
  openGraph: {
    title: "betterAuth starter",
    description:
      "Get started in 60s with betterAuth the Nuxt.js Full-Stack SaaS Starter Kit.",
    url: "https://better-auth-mongo-starter.vercel.app/",
    siteName: "betterAuth starter",
    images: [
      {
        url: "https://better-auth-mongo-starter.vercel.app/landing.png",
        width: 1200,
        height: 630,
        alt: "betterAuth Starter Kit",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
