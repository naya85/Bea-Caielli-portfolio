import { cookies } from "next/headers";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EasterEgg } from "@/components/EasterEgg";
import { PasswordGate } from "@/components/PasswordGate";
import { ACCESS_COOKIE, hasAccess } from "@/lib/access";

export default async function Home() {
  const unlocked = await hasAccess((await cookies()).get(ACCESS_COOKIE)?.value);
  return (
    <div className="portfolio-home">
      <Hero />
      {unlocked && (
        <>
          <Projects />
          <About />
          <Contact />
          <EasterEgg />
        </>
      )}
      <PasswordGate locked={!unlocked} />
    </div>
  );
}
