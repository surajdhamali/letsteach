import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CourseCard from "@/components/CourseCard";
import CTABand from "@/components/CTABand";
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
  // Next.js 15 — params is a Promise, must be awaited
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) notFound();

  const related = COURSES.filter(
    (c) => c.category === course.category && c.id !== course.id
  ).slice(0, 3);

  const discount = Math.round(
    (1 -
      parseInt(course.price.replace(/\D/g, "")) /
        parseInt(course.originalPrice.replace(/\D/g, ""))) *
      100
  );

  return (
    <div className="pt-14 min-h-screen">
      {/* Hero */}
      <div className="bg-zinc-950 px-6 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Link href="/courses" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">Courses</Link>
              <span className="text-zinc-700">/</span>
              <Link href={`/courses?category=${course.category}`} className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">{course.category}</Link>
              <span className="text-zinc-700">/</span>
              <span className="text-xs text-zinc-400 truncate">{course.title}</span>
            </div>

            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${course.categoryColor}`}>
              {course.category.toUpperCase()}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight mb-4">
              {course.title}
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-2xl">
              {course.description}
            </p>
            <div className="flex items-center gap-4 flex-wrap mb-6">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">{course.rating}</span>
                <span className="text-amber-400 text-sm">★★★★★</span>
                <span className="text-zinc-500 text-sm">({course.reviews.toLocaleString()} reviews)</span>
              </div>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 text-sm">{course.students} students</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 text-sm">{course.duration}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 text-sm">{course.lectures} lectures</span>
            </div>
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full ${course.avatarBg} flex items-center justify-center text-xs font-bold text-white`}>
                {course.initials}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{course.instructor}</div>
                <div className="text-xs text-zinc-500">Course Instructor</div>
              </div>
            </div>
          </div>

          {/* Enroll card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-20">
              {/* Thumbnail — image or fallback */}
              <div className={`${course.image ? "" : course.thumbBg} h-40 rounded-xl flex items-center justify-center mb-5 overflow-hidden relative`}>
                {course.image ? (
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                ) : (
                  <span className="text-5xl opacity-30">{course.thumbIcon}</span>
                )}
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold text-zinc-900">{course.price}</span>
                <span className="text-lg text-zinc-400 line-through ml-2">{course.originalPrice}</span>
                <span className="ml-2 text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {discount}% off
                </span>
              </div>
              <p className="text-xs text-rose-500 font-medium mb-4">⏰ 2 days left at this price</p>
              <Link href="/signup" className="block w-full text-center text-sm font-semibold bg-amber-600 text-white py-3 rounded-full hover:bg-amber-500 transition-colors mb-3">
                Enroll now
              </Link>
              <Link href="/signup" className="block w-full text-center text-sm font-semibold bg-zinc-100 text-zinc-700 py-3 rounded-full hover:bg-zinc-200 transition-colors mb-4">
                Try free preview
              </Link>
              <p className="text-xs text-zinc-400 text-center mb-4">7-day money-back guarantee</p>
              <div className="border-t border-zinc-100 pt-4 space-y-2">
                {[
                  ["∞", "Lifetime access"],
                  ["📱", "Access on all devices"],
                  ["◎", `${course.lectures} lectures · ${course.duration}`],
                  ["✦", "Certificate of completion"],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-2 text-xs text-zinc-500">
                    <span>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-3xl space-y-10">
          {/* What you'll learn */}
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-5">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 bg-zinc-50 border border-zinc-100 rounded-xl p-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-700 leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-5">Course curriculum</h2>
            <div className="space-y-3">
              {course.curriculum.map((section, si) => (
                <div key={si} className="border border-zinc-200 rounded-xl overflow-hidden">
                  <div className="bg-zinc-50 px-4 py-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-zinc-800">{section.section}</span>
                    <span className="text-xs text-zinc-400">{section.lessons.length} lessons</span>
                  </div>
                  <div className="divide-y divide-zinc-100">
                    {section.lessons.map((lesson, li) => (
                      <div key={li} className="px-4 py-2.5 flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className="text-sm text-zinc-600">{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="bg-zinc-50 border-t border-zinc-100 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-6">
              More in {course.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((c) => <CourseCard key={c.id} course={c} />)}
            </div>
          </div>
        </div>
      )}

      <CTABand
        title="Ready to get started?"
        highlight="Enroll today."
        sub="7-day money-back guarantee. No questions asked."
        showEmailInput={false}
        primaryCta={{ label: "Browse all courses →", href: "/courses" }}
      />
    </div>
  );
}