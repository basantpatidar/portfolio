import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/app/components/nav/Navbar";
import { ScrollProgress } from "@/app/components/ui/ScrollProgress";
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
  title: "Basant Patidar | Senior Software Engineer",
  description:
    "Senior Full-Stack Developer with 8+ years delivering Java/Spring Boot microservices at enterprise scale — 2.5M+ daily payment requests at Walmart Marketplace and millions of daily financial transactions at T. Rowe Price.",
  keywords: [
    "Basant Patidar",
    "Senior Software Engineer",
    "Java",
    "Spring Boot",
    "Distributed Systems",
    "Microservices",
    "Full Stack Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
