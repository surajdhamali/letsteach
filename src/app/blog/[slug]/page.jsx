import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blogdata";
import BlogDetailClient from "@/components/BlogDetailClient";

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

  return <BlogDetailClient post={post} related={related} />;
}