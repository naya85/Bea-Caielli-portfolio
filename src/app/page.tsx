import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { DesignPrinciples } from "@/components/DesignPrinciples";
import { About } from "@/components/About";
import { Articles } from "@/components/Articles";
import { Contact } from "@/components/Contact";
import { EasterEgg } from "@/components/EasterEgg";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <DesignPrinciples />
      <About />
      <Articles />
      <Contact />
      <EasterEgg />
    </>
  );
}
