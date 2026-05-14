"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/data/blogdata";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = BLOG_POSTS.filter((p) => p.featured);
  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
     {/* Header */}
<div className="bg-zinc-950 px-6 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Blog</div>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.06] mb-5">
          Ideas worth<br />
          <em className="not-italic text-amber-400">learning.</em>
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed max-w-md">
          Practical advice on learning, design, engineering, and building a career you actually want.
        </p>
      </div>

      {/* Right side stats */}
      <div className="flex items-center gap-8 flex-shrink-0 pb-1">
        {[
          { value: "6",     label: "Articles" },
          { value: "4",     label: "Topics" },
          { value: "7 min", label: "Avg read" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-display text-2xl font-bold text-white tracking-tight mb-0.5">{s.value}</div>
            <div className="text-xs text-zinc-500">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      {/* Featured posts */}
      <div className="bg-white border-b border-zinc-100 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-6">Featured</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-zinc-950 rounded-2xl overflow-hidden hover:ring-2 hover:ring-amber-400 transition-all flex flex-col"
              >
                {/* Featured post thumbnail */}
                {post.image && (
                  <div className="aspect-video w-full relative overflow-hidden flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${post.categoryColor}`}>
                      {post.category}
                    </span>
                    <h2 className="font-display text-xl font-semibold text-white leading-snug mb-3 group-hover:text-amber-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
                    <div className={`w-7 h-7 rounded-full ${post.authorBg} flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0`}>
                      {post.authorInitials}
                    </div>
                    <span className="text-xs text-zinc-500">{post.author}</span>
                    <span className="text-zinc-700 text-xs">·</span>
                    <span className="text-xs text-zinc-500">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* All posts */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all ${
                activeCategory === cat
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-amber-400 hover:shadow-lg hover:shadow-amber-50 transition-all flex flex-col"
            >
              {/* Thumbnail */}
              <div className="aspect-video w-full relative overflow-hidden bg-zinc-100 flex-shrink-0">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-4xl text-zinc-300">{post.title[0]}</span>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit ${post.categoryColor}`}>
                  {post.category}
                </span>

                <h2 className="font-display text-base font-semibold text-zinc-900 leading-snug mb-2 group-hover:text-amber-700 transition-colors flex-1">
                  {post.title}
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center gap-2.5 pt-4 border-t border-zinc-100">
                  <div className={`w-6 h-6 rounded-full ${post.authorBg} flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0`}>
                    {post.authorInitials}
                  </div>
                  <span className="text-xs text-zinc-500">{post.author}</span>
                  <span className="text-zinc-300 text-xs">·</span>
                  <span className="text-xs text-zinc-400">{post.date}</span>
                  <span className="text-zinc-300 text-xs">·</span>
                  <span className="text-xs text-zinc-400">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-xl font-semibold text-zinc-400">No posts in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}