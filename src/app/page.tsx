import { Hero } from "@/components/Hero";
import { AboutMeSection } from "@/components/AboutMeSection";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { WhatIBring } from "@/components/WhatIBring";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMeSection />
      <About />
      <Projects />
      <WhatIBring />
      <Contact />
    </>
  );
}
