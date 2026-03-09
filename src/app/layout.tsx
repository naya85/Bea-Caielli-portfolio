import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beatrice Caielli — Senior Product Designer",
  description:
    "Portfolio of Beatrice Caielli, a Senior Product Designer specializing in EdTech, Fintech, and SaaS products. Based in Barcelona.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Portfolio",
    "Barcelona",
    "EdTech",
    "Fintech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-stone-50 text-stone-800 antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
