import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blogdata";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.id !== post.id
  ).slice(0, 3);

  return (
    <div className="pt-14 min-h-screen bg-white">

      {/* ─── HERO ─── */}
      <div className="bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 pt-14 pb-0">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link href="/blog" className="text-xs text-zinc-500 hover:text-amber-400 transition-colors">
              Blog
            </Link>
            <span className="text-zinc-700 text-xs">›</span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.categoryColor}`}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-8 max-w-4xl">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-4 pb-10">
            <div className={`w-10 h-10 rounded-xl ${post.authorBg} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>
              {post.authorInitials}
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{post.author}</div>
              <div className="text-xs text-zinc-500">{post.authorRole}</div>
            </div>
            <div className="w-px h-8 bg-zinc-800 mx-2" />
            <div className="flex items-center gap-3 text-xs text-zinc-500">
              <span>{post.date}</span>
              <span className="text-zinc-700">·</span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Full-width hero image */}
        {post.image && (
          <div className="max-w-5xl mx-auto px-6 pb-0">
            <div className="aspect-video w-full relative overflow-hidden rounded-t-2xl">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            </div>
          </div>
        )}
      </div>

      {/* ─── ARTICLE BODY ─── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-14">

          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-8">

              {/* Share */}
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">Share</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Twitter / X", icon: "𝕏" },
                    { label: "LinkedIn",    icon: "in" },
                    { label: "Copy link",   icon: "⊕" },
                  ].map((s) => (
                    <button
                      key={s.label}
                      className="flex items-center gap-2.5 text-xs text-zinc-500 hover:text-amber-600 transition-colors group"
                    >
                      <span className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-xs font-bold group-hover:bg-amber-100 transition-colors">
                        {s.icon}
                      </span>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-zinc-100" />

              {/* Author */}
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">Written by</p>
                <div className={`w-12 h-12 rounded-xl ${post.authorBg} flex items-center justify-center text-sm font-bold text-white mb-3`}>
                  {post.authorInitials}
                </div>
                <p className="text-sm font-semibold text-zinc-900 mb-0.5">{post.author}</p>
                <p className="text-xs text-zinc-500 mb-3">{post.authorRole}</p>
                <Link href="/courses" className="text-xs font-semibold text-amber-600 hover:underline">
                  View courses →
                </Link>
              </div>

              <div className="w-full h-px bg-zinc-100" />

              {/* Category */}
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">Category</p>
                <Link
                  href="/blog"
                  className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${post.categoryColor}`}
                >
                  {post.category}
                </Link>
              </div>

            </div>
          </aside>

          {/* Article content */}
          <article className="lg:col-span-9">

            {/* Excerpt / Lead */}
            <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed font-medium mb-10 pb-10 border-b-2 border-amber-400">
              {post.excerpt}
            </p>

            {/* Content blocks */}
            <div className="space-y-0">
              {post.content.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight mt-14 mb-5 leading-tight"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "paragraph") {
                  return (
                    <p key={i} className="text-base md:text-lg text-zinc-600 leading-[1.85] mb-5">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="space-y-3 mb-6 pl-4">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-base text-zinc-600 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>

            {/* End of article */}
            <div className="mt-14 pt-10 border-t border-zinc-100">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Tags</span>
                {[post.category, "letsteach", "Learning"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-full hover:bg-amber-100 hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author card */}
              <div className="bg-zinc-950 rounded-2xl p-7 flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl ${post.authorBg} flex items-center justify-center text-base font-bold text-white flex-shrink-0`}>
                  {post.authorInitials}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">About the author</div>
                  <div className="text-base font-semibold text-white mb-1">{post.author}</div>
                  <div className="text-xs text-zinc-400 mb-4">{post.authorRole} at letsteach</div>
                  <Link
                    href="/courses"
                    className="inline-block text-xs font-semibold bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-500 transition-colors"
                  >
                    View courses by {post.author.split(" ")[0]} →
                  </Link>
                </div>
              </div>
            </div>

          </article>
        </div>
      </div>

      {/* ─── RELATED POSTS ─── */}
      {related.length > 0 && (
        <div className="bg-zinc-950 px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Continue reading</div>
                <h2 className="font-display text-2xl font-semibold text-white tracking-tight">
                  More in {post.category}
                </h2>
              </div>
              <Link href="/blog" className="text-sm font-medium text-zinc-500 hover:text-amber-400 transition-colors border-b border-zinc-700 pb-0.5">
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-600 transition-all"
                >
                  {p.image && (
                    <div className="aspect-video w-full relative overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.imageAlt || p.title}
                        fill
                        sizes="33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${p.categoryColor}`}>
                      {p.category}
                    </span>
                    <h3 className="font-display text-sm font-semibold text-white leading-snug mb-3 group-hover:text-amber-400 transition-colors">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-2 pt-3 border-t border-zinc-800">
                      <div className={`w-5 h-5 rounded-full ${p.authorBg} flex items-center justify-center text-[9px] font-bold text-white`}>
                        {p.authorInitials}
                      </div>
                      <span className="text-xs text-zinc-500">{p.author}</span>
                      <span className="text-zinc-700">·</span>
                      <span className="text-xs text-zinc-500">{p.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}