import { blogPosts } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Articles() {
  return (
    <section
      id="articles"
      className="scroll-mt-24 border-t border-[#1A1A1A]/08 bg-[#F5F4F0] py-[120px]"
      aria-labelledby="articles-heading"
    >
      <ScrollReveal className="mx-auto max-w-[1200px] px-6" stagger>
        <h2
          id="articles-heading"
          className="reveal reveal-child text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[#1A1A1A]"
        >
          Articles
        </h2>
        <div className="reveal reveal-child reveal-delay-1 mt-12 max-w-[680px] space-y-10">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-[#1A1A1A]/08 pb-10 last:border-b-0 last:pb-0"
            >
              <time
                className="text-[13px] font-medium tracking-wide text-[#1A1A1A]/6"
                dateTime={post.date}
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h3 className="mt-2 text-[20px] font-semibold leading-snug text-[#1A1A1A]">
                {post.title}
              </h3>
              <p className="mt-2 text-[17px] leading-relaxed text-[#1A1A1A]/80">
                {post.excerpt}
              </p>
              <p className="mt-2 text-[13px] font-medium tracking-wide text-[#1A1A1A]/5">
                {post.tags.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
