import { blogPosts } from "@/data/content";

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-600">
          Blog
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Thoughts & writing
        </h2>
        <p className="mt-4 max-w-2xl text-base text-stone-500">
          Reflections on product design, research, accessibility, and the
          journey from designer to maker.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-6 transition-all hover:border-stone-300 hover:shadow-md"
            >
              <time className="text-xs font-medium text-stone-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h3 className="mt-3 text-lg font-semibold text-stone-900 group-hover:text-violet-600">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
                {post.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-stone-200/60 px-3 py-1 text-xs font-medium text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
