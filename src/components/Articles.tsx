"use client";

import { blogPosts } from "@/data/content";
import { FadeAtTop } from "@/components/FadeAtTop";
import { ScrollFadeSection } from "@/components/ScrollFadeSection";
import { RevealItem, ScrollReveal } from "@/components/ScrollReveal";

export function Articles() {
  return (
    <ScrollFadeSection
      id="articles"
      className="scroll-mt-24 py-[120px]"
      style={{ backgroundColor: "color-mix(in srgb, #E8E5E0 50%, #F5F4F0)" }}
      aria-labelledby="articles-heading"
    >
      <ScrollReveal className="mx-auto max-w-[1200px] px-6" stagger>
        <RevealItem>
          <FadeAtTop>
            <h2
              id="articles-heading"
              className="text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl"
            >
              Articles
            </h2>
          </FadeAtTop>
        </RevealItem>
        <div className="mt-12 max-w-[680px] space-y-10">
          {blogPosts.map((post, index) => (
            <RevealItem key={post.slug} delay={index * 0.06}>
              <FadeAtTop>
                <article className="group pb-10 last:pb-0">
                  <time
                    className="text-[13px] font-medium tracking-wide"
                    style={{ color: "var(--color-muted)" }}
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
                  <p className="mt-2 text-[17px] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {post.excerpt}
                  </p>
                  <p className="mt-2 text-[13px] font-medium tracking-wide" style={{ color: "var(--color-muted)" }}>
                    {post.tags.join(" · ")}
                  </p>
                </article>
              </FadeAtTop>
            </RevealItem>
          ))}
        </div>
      </ScrollReveal>
    </ScrollFadeSection>
  );
}
