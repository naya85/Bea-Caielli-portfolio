import { blogPosts } from "@/data/content";

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7353B8]">
          Blog
        </p>
        <h1 className="ui-heading ui-heading--page">
          Thoughts & writing
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-stone-600">
          Reflections on product design, research, accessibility, and the
          journey from designer to maker.
        </p>

        <div className="mt-16 space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-stone-200 bg-white p-8 transition-all hover:border-stone-300 hover:shadow-md"
            >
              <time className="text-sm font-medium text-stone-600">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="ui-heading ui-heading--card mt-3 transition-colors group-hover:text-[#5C3E9B]">
                {post.title}
              </h2>
              <p className="mt-3 text-[20px] leading-relaxed text-stone-600">
                {post.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
