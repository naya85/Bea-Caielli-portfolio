import type { Metadata } from "next";
import "./global.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothAnchorScroll } from "@/components/SmoothAnchorScroll";

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
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..900&family=Manrope:wght@300..800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
        />
      </head>
      <body className="antialiased" style={{ color: "#1A1A1A" }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <SmoothAnchorScroll />
      </body>
    </html>
  );
}
