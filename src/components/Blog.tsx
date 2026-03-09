import { blogPosts } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 border-t border-stone-200 py-28">
      <ScrollReveal className="mx-auto max-w-4xl px-6">
        <div>
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-stone-400">
          Blog
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
          Writing
        </h2>
        <p className="mt-3 max-w-xl text-[15px] text-stone-500">
          Reflections on product design and the journey from designer to maker.
        </p>

        <div className="mt-12 space-y-10">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-stone-200 pb-10 transition-all duration-300 last:border-0 last:pb-0 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <time className="text-[13px] font-medium text-stone-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h3 className="mt-2 text-lg font-bold text-stone-900">
                {post.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-500">
                {post.excerpt}
              </p>
              <p className="mt-3 text-[13px] font-medium text-stone-400">
                {post.tags.join(" · ")}
              </p>
            </article>
          ))}
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
