import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ course, variant = "default" }) {
  const compact = variant === "compact";

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-amber-400 hover:shadow-lg hover:shadow-amber-50 transition-all duration-200 flex flex-col"
    >
      {/* Thumbnail */}
      <div className={`${compact ? "h-28" : "aspect-video w-full"} relative flex-shrink-0 overflow-hidden rounded-t-2xl`}>
        {course.image ? (
          <Image
            src={course.image}
            alt={course.imageAlt || course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className={`${course.thumbBg} w-full h-full flex items-center justify-center`}>
            <span className={`${compact ? "text-3xl" : "text-4xl"} opacity-40`}>
              {course.thumbIcon}
            </span>
          </div>
        )}

        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${course.categoryColor} ${course.image ? "bg-black/50 text-white" : ""}`}>
          {course.category.toUpperCase()}
        </span>

        {course.featured && !compact && (
          <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${course.image ? "bg-amber-500 text-white" : "bg-amber-400/20 text-amber-300"}`}>
            BESTSELLER
          </span>
        )}
      </div>

      {/* Body */}
      <div className={`${compact ? "p-3" : "p-4"} flex flex-col flex-1`}>
        <h3 className={`font-semibold text-zinc-900 leading-snug mb-2 ${compact ? "text-xs" : "text-sm"} group-hover:text-amber-700 transition-colors`}>
          {course.title}
        </h3>

        {!compact && (
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-5 h-5 rounded-full ${course.avatarBg} flex items-center justify-center text-[9px] font-bold text-white`}>
              {course.initials}
            </div>
            <span className="text-xs text-zinc-500">{course.instructor}</span>
          </div>
        )}

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-amber-600">{course.rating}</span>
          <span className="text-amber-400 text-xs">★★★★★</span>
          <span className="w-1 h-1 rounded-full bg-zinc-300" />
          <span className="text-xs text-zinc-500">{course.students} students</span>
        </div>

        {!compact && (
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3">
            <span>{course.duration}</span>
            <span>·</span>
            <span>{course.lectures} lectures</span>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100">
          <span className={`font-bold text-zinc-900 ${compact ? "text-sm" : "text-base"}`}>
            {!compact && (
              <span className="text-xs font-normal text-zinc-400 line-through mr-1.5">
                {course.originalPrice}
              </span>
            )}
            {course.price}
          </span>
          <span className="text-xs text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full">
            {course.level}
          </span>
        </div>
      </div>
    </Link>
  );
}