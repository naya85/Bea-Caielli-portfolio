import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./global.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Beatrice Caielli — Senior Product Designer",
  description:
    "Portfolio of Beatrice Caielli, a Senior Product Designer specializing in EdTech, Fintech, and SaaS. Based in Milan.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Portfolio",
    "Milan",
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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
        />
      </head>
      <body
        className={`${plusJakarta.className} antialiased`}
        style={{ backgroundColor: "#F5F4F0", color: "#1A1A1A" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
