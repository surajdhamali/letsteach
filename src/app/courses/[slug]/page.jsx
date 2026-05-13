import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CourseCard from "@/components/CourseCard";
import CTABand from "@/components/CTABand";
import CourseDetailClient from "@/components/CourseDetailClient";
import { COURSES } from "@/data/siteData";

export async function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return {};
  return { title: course.title, description: course.description };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) notFound();

  const related = COURSES.filter(
    (c) => c.category === course.category && c.id !== course.id
  ).slice(0, 3);

  const discount = Math.round(
    (1 - parseInt(course.price.replace(/\D/g, "")) / parseInt(course.originalPrice.replace(/\D/g, ""))) * 100
  );

  return (
    <div className="pt-14 min-h-screen">
      <CourseDetailClient course={course} related={related} discount={discount} />

      <CTABand title="Ready to get started?" highlight="Enroll today."
        sub="7-day money-back guarantee. No questions asked."
        showEmailInput={false} primaryCta={{ label: "Browse all courses →", href: "/courses" }} />
    </div>
  );
}