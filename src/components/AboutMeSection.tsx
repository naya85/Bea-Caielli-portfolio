import { corePrinciples } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutMeSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 rounded-t-[80px] bg-stone-50 px-6 pb-28 pt-20 sm:rounded-t-[100px] sm:pt-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* My core principles */}
        <ScrollReveal className="mt-24 sm:mt-32">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#3C3F3D]">
            Design philosophy
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            My core principles
          </h2>
          <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {corePrinciples.map((principle, i) => (
              <div
                key={i}
                className="group relative border-b border-stone-200 p-8 sm:border-r sm:last:border-r-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(4)]:border-r lg:[&:nth-child(5)]:border-r lg:[&:nth-child(n+4)]:border-b-0 sm:[&:nth-child(n+5)]:border-b-0 lg:[&:nth-child(n+4)]:border-b-0"
              >
                <span className="text-xs tabular-nums tracking-wide text-[#3C3F3D]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold leading-tight tracking-tight text-stone-900">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#3C3F3D]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
