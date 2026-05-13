"use client";

import { useState, useMemo } from "react";
import CourseCard from "@/components/CourseCard";
import { COURSES, CATEGORIES } from "@/data/siteData";

const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const SORT_OPTIONS = ["Most Popular", "Highest Rated", "Newest", "Price: Low to High", "Price: High to Low"];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("Most Popular");

  const filtered = useMemo(() => {
    let result = [...COURSES];
    if (search) result = result.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase()));
    if (activeCategory !== "All") result = result.filter((c) => c.category === activeCategory);
    if (activeLevel !== "All Levels") result = result.filter((c) => c.level === activeLevel);
    if (sortBy === "Highest Rated") result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    if (sortBy === "Price: Low to High") result.sort((a, b) => parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, "")));
    if (sortBy === "Price: High to Low") result.sort((a, b) => parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, "")));
    return result;
  }, [search, activeCategory, activeLevel, sortBy]);

  return (
    <div className="pt-14 min-h-screen">
      {/* Header */}
      <div className="bg-zinc-950 px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3">
            All <em className="not-italic text-amber-400">Courses</em>
          </h1>
          <p className="text-zinc-400 text-base mb-8">6,800+ courses across 80+ topics. Something for every stage of your career.</p>
          <div className="relative max-w-xl">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search courses, instructors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/7 border border-white/10 rounded-full pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Filters row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex gap-2 flex-wrap flex-1">
            <button
              onClick={() => setActiveCategory("All")}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all ${activeCategory === "All" ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"}`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all ${activeCategory === cat.name ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <select
              value={activeLevel}
              onChange={(e) => setActiveLevel(e.target.value)}
              className="text-sm border border-zinc-200 rounded-full px-4 py-1.5 text-zinc-600 bg-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {LEVELS.map((l) => <option key={l}>{l}</option>)}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-zinc-200 rounded-full px-4 py-1.5 text-zinc-600 bg-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {SORT_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <p className="text-sm text-zinc-500 mb-6">
          Showing <span className="font-semibold text-zinc-900">{filtered.length}</span> courses
          {activeCategory !== "All" && <> in <span className="font-semibold text-zinc-900">{activeCategory}</span></>}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">◎</div>
            <p className="font-display text-xl font-semibold text-zinc-700 mb-2">No courses found</p>
            <p className="text-sm text-zinc-400">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}