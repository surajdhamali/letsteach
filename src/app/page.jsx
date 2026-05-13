"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import CTABand from "@/components/CTABand";
import { COURSES, CATEGORIES, STATS, TESTIMONIALS, TRUST_LOGOS } from "@/data/siteData";

const TABS = ["All", "Design", "Engineering", "Data", "Marketing", "Product"];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All" ? COURSES.slice(0, 6) : COURSES.filter((c) => c.category === activeTab);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-zinc-950 pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              New courses added every week
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08] mb-5">
              Learn skills that<br />
              <em className="not-italic text-amber-400">get you hired.</em>
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed max-w-md mb-6">
              Practical courses taught by working professionals. No fluff, no outdated content — just skills you can use from day one.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-sm">★★★★★</span>
                <span className="text-sm text-zinc-400">
                  <span className="text-white font-medium">4.8/5</span> avg rating
                </span>
              </div>
              <div className="w-px h-4 bg-zinc-700" />
              <span className="text-sm text-zinc-400">
                <span className="text-white font-medium">12,000+</span> learners enrolled
              </span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Link href="/courses" className="text-sm font-semibold bg-amber-600 text-white px-5 py-2.5 rounded-full hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/30">
                Browse courses
              </Link>
              <Link href="/signup" className="text-sm font-medium text-zinc-400 hover:text-white border-b border-zinc-600 hover:border-zinc-400 transition-colors pb-0.5">
                Start for free →
              </Link>
            </div>
          </div>

          {/* Floating cards */}
          <div className="flex flex-col gap-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold bg-amber-400/20 text-amber-400 px-2.5 py-1 rounded-full tracking-wide">ENGINEERING</span>
                <span className="text-xs text-amber-400 font-medium">★ 4.8</span>
              </div>
              <p className="text-sm font-semibold text-white mb-3">React.js for Beginners</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-amber-400">₹1,199</span>
                <span className="text-xs text-zinc-500">3,200 enrolled</span>
              </div>
              <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[72%] bg-amber-500 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
              <span className="text-xs text-zinc-400">
                <span className="text-white font-medium">Arjun M.</span> just completed Python for Data Analysis · 5 min ago
              </span>
            </div>
            <div className="bg-amber-600/10 border border-amber-600/20 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded-full tracking-wide">NEW</span>
                <span className="text-xs text-zinc-500">Just launched</span>
              </div>
              <p className="text-sm font-semibold text-white mb-3">UI/UX Design: Figma to Portfolio</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-amber-400">₹1,199</span>
                <span className="text-xs text-amber-600/70 font-medium">Limited seats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEARNERS WORK AT ─── */}
<div className="bg-white border-y border-zinc-100 px-6 py-5">
  <div className="max-w-6xl mx-auto flex items-center gap-8 overflow-x-auto scrollbar-hide">
    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-widest whitespace-nowrap flex-shrink-0">
      Learners work at
    </span>
    <div className="w-px h-5 bg-zinc-100 flex-shrink-0" />
    <div className="flex items-center gap-10 flex-1 justify-between">
      {TRUST_LOGOS.map((logo) => (
        <span
          key={logo}
          className="text-sm font-bold text-zinc-300 whitespace-nowrap tracking-wide hover:text-zinc-500 transition-colors cursor-default"
        >
          {logo}
        </span>
      ))}
    </div>
  </div>
</div>

      {/* ─── STATS ─── */}
      <div className="bg-white border-b border-zinc-200 px-6 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold tracking-tight text-zinc-900 mb-0.5">{s.value}</div>
              <div className="text-xs text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CATEGORIES ─── */}
      <section className="bg-white px-6 py-14 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Browse by topic</div>
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-display text-4xl font-semibold tracking-tight">
              Whatever you want<br />to <em className="not-italic text-amber-600">learn</em>, it's here.
            </h2>
            <Link href="/courses" className="text-sm font-medium text-zinc-500 hover:text-amber-600 transition-colors border-b border-zinc-300 pb-0.5 hidden md:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                href={`/courses?category=${encodeURIComponent(cat.name)}`}
                className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl border ${cat.color} hover:shadow-md transition-all`}
              >
                <span className="text-xl">{cat.icon}</span>
                <div>
                  <div className="text-sm font-semibold">{cat.name}</div>
                  <div className="text-xs opacity-70">{cat.count} courses</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COURSES ─── */}
      <section className="bg-zinc-50 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Top picks</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight leading-tight mb-8">
            Courses people are<br /><em className="not-italic text-amber-600">loving right now.</em>
          </h2>
          <div className="flex gap-2 flex-wrap mb-8">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all ${
                  activeTab === tab
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/courses" className="inline-block text-sm font-semibold bg-zinc-900 text-white px-6 py-2.5 rounded-full hover:bg-amber-600 transition-colors">
              See all courses →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SPLIT: LEARNER / INSTRUCTOR ─── */}
      <section className="border-t border-zinc-200 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">

          {/* Left — white */}
          <div className="bg-white px-8 py-14 border-b md:border-b-0 md:border-r border-zinc-200">
            <div className="max-w-lg ml-auto pr-8">
              <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">For learners</div>
              <div className="font-display text-5xl font-bold tracking-tight text-zinc-900 mb-0.5">12,000+</div>
              <div className="text-sm text-zinc-500 mb-8">people learning on letsteach</div>
              <ul className="space-y-3 mb-8">
                {[
                  "Short, focused courses you can finish in a weekend",
                  "Taught by people actually doing the job",
                  "Affordable pricing — no subscription needed",
                  "Certificate when you complete a course",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-600 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 border-b border-amber-300 hover:border-amber-600 pb-0.5 transition-colors">
                Start learning for free →
              </Link>
            </div>
          </div>

          {/* Right — dark */}
          <div className="bg-zinc-950 px-8 py-14">
            <div className="max-w-lg mr-auto pl-8">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">For instructors</div>
              <div className="font-display text-5xl font-bold tracking-tight text-white mb-0.5">800+</div>
              <div className="text-sm text-zinc-500 mb-8">instructors already teaching</div>
              <ul className="space-y-3 mb-8">
                {[
                  "Publish your first course in a day",
                  "Keep 70% of every sale you make",
                  "We handle payments, certificates, and support",
                  "Your course in front of 12,000+ active learners",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-300 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/teach" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-400 border-b border-amber-600 hover:border-amber-400 pb-0.5 transition-colors">
                Start teaching today →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─── WHY LETSTEACH ─── */}
      <section className="bg-white px-6 py-16 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Why letsteach</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-10">
            We keep it <em className="not-italic text-amber-600">simple.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "◎", title: "Practical, not theoretical", desc: "Every course is built around real skills. No filler content, no 40-hour courses that could be 6." },
              { icon: "◈", title: "Made for Indian learners", desc: "Pricing in INR, examples relevant to the Indian job market, instructors who understand the context." },
              { icon: "⬡", title: "Learn at your pace",         desc: "Buy once, access forever. No monthly subscriptions. Come back whenever you need a refresher." },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-zinc-100 px-6 py-16 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Student stories</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight leading-tight mb-10">
            What our students say.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white border border-zinc-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xs">★</span>
                  ))}
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${t.bg} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to learn something"
        highlight="useful?"
        sub="Join 12,000+ learners. Pay once, learn forever."
      />
    </>
  );
}