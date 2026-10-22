import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EasterEgg } from "@/components/EasterEgg";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <EasterEgg />
    </>
  );
}
