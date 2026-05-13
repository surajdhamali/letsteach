"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import CTABand from "@/components/CTABand";
import { COURSES, CATEGORIES, STATS, TESTIMONIALS, TRUST_LOGOS } from "@/data/siteData";

const TABS = ["All", "Design", "Engineering", "Data", "Marketing", "Product"];

// ─── Counter animation hook ───────────────────────────────────────────────────
function useCounter(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || started) return;
    setStarted(true);

    // Parse the end value — handle "12,000+", "4.8★", "480+"
    const numericStr = String(end).replace(/[^0-9.]/g, "");
    const target = parseFloat(numericStr);
    const suffix = String(end).replace(/[0-9.,]/g, "");
    const isDecimal = String(end).includes(".");

    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? (eased * target).toFixed(1)
        : Math.floor(eased * target).toLocaleString();
      setCount(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, started, end, duration]);

  return { count, ref };
}

// ─── Animated stat card ───────────────────────────────────────────────────────
function StatCard({ value, label, delay = 0 }) {
  const { count, ref } = useCounter(value, 1800);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="font-display text-3xl font-bold tracking-tight text-zinc-900 mb-0.5 tabular-nums">
        {count || "0"}
      </div>
      <div className="text-xs text-zinc-500">{label}</div>
    </motion.div>
  );
}

// ─── Fade up wrapper ──────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All" ? COURSES.slice(0, 6) : COURSES.filter((c) => c.category === activeTab);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-zinc-950 pt-28 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full mb-6 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              New courses added every week
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08] mb-5"
            >
              Learn skills that<br />
              <em className="not-italic text-amber-400">get you hired.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-zinc-400 leading-relaxed max-w-md mb-6"
            >
              Practical courses taught by working professionals. No fluff, no outdated content — just skills you can use from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <Link href="/courses" className="text-sm font-semibold bg-amber-600 text-white px-5 py-2.5 rounded-full hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/30 hover:scale-105 active:scale-95 transition-transform">
                Browse courses
              </Link>
              <Link href="/signup" className="text-sm font-medium text-zinc-400 hover:text-white border-b border-zinc-600 hover:border-zinc-400 transition-colors pb-0.5">
                Start for free →
              </Link>
            </motion.div>
          </div>

          {/* Floating cards */}
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/8 transition-colors"
            >
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
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  className="h-full bg-amber-500 rounded-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
              <span className="text-xs text-zinc-400">
                <span className="text-white font-medium">Arjun M.</span> just completed Python for Data Analysis · 5 min ago
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-amber-600/10 border border-amber-600/20 rounded-2xl p-4 hover:bg-amber-600/15 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded-full tracking-wide">NEW</span>
                <span className="text-xs text-zinc-500">Just launched</span>
              </div>
              <p className="text-sm font-semibold text-white mb-3">UI/UX Design: Figma to Portfolio</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-amber-400">₹1,199</span>
                <span className="text-xs text-amber-600/70 font-medium">Limited seats</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LEARNERS WORK AT ─── */}
      <div className="bg-zinc-900 px-6 py-4 overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center gap-6 overflow-x-auto scrollbar-hide">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest whitespace-nowrap flex-shrink-0">
            Learners work at
          </span>
          <div className="w-px h-4 bg-zinc-700 flex-shrink-0" />
          <div className="flex items-center gap-10 flex-1 justify-between">
            {TRUST_LOGOS.map((logo, i) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.08 + 0.3 }}
                className="text-sm font-semibold text-zinc-400 whitespace-nowrap tracking-wide hover:text-amber-400 transition-colors cursor-default"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── STATS with counter animation ─── */}
      <div className="bg-white border-b border-zinc-200 px-6 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* ─── CATEGORIES ─── */}
      <section className="bg-white px-6 py-14 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Browse by topic</div>
          </FadeUp>
          <div className="flex items-end justify-between mb-8">
            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl font-semibold tracking-tight">
                Whatever you want<br />to <em className="not-italic text-amber-600">learn</em>, it's here.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <Link href="/courses" className="text-sm font-medium text-zinc-500 hover:text-amber-600 transition-colors border-b border-zinc-300 pb-0.5 hidden md:block">
                View all →
              </Link>
            </FadeUp>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href={`/courses?category=${encodeURIComponent(cat.name)}`}
                  className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl border ${cat.color} hover:shadow-md hover:scale-[1.02] transition-all`}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <div>
                    <div className="text-sm font-semibold">{cat.name}</div>
                    <div className="text-xs opacity-70">{cat.count} courses</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COURSES ─── */}
      <section className="bg-zinc-50 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Top picks</div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight leading-tight mb-8">
              Courses people are<br /><em className="not-italic text-amber-600">loving right now.</em>
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex gap-2 flex-wrap mb-8">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all ${
                    activeTab === tab
                      ? "bg-zinc-900 text-white border-zinc-900 scale-105"
                      : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="mt-10 text-center">
              <Link href="/courses" className="inline-block text-sm font-semibold bg-zinc-900 text-white px-6 py-2.5 rounded-full hover:bg-amber-600 transition-colors hover:scale-105 active:scale-95">
                See all courses →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── SPLIT: LEARNER / INSTRUCTOR ─── */}
      <section className="border-t border-zinc-200 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white px-8 py-14 border-b md:border-b-0 md:border-r border-zinc-200"
          >
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
                ].map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-600 leading-relaxed">{f}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/signup" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 border-b border-amber-300 hover:border-amber-600 pb-0.5 transition-colors">
                Start learning for free →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950 px-8 py-14"
          >
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
                ].map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-300 leading-relaxed">{f}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/teach" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-400 border-b border-amber-600 hover:border-amber-400 pb-0.5 transition-colors">
                Start teaching today →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY LETSTEACH ─── */}
      <section className="bg-white px-6 py-16 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Why letsteach</div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight mb-10">
              We keep it <em className="not-italic text-amber-600">simple.</em>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "◎", title: "Practical, not theoretical", desc: "Every course is built around real skills. No filler content, no 40-hour courses that could be 6." },
              { icon: "◈", title: "Made for Indian learners",   desc: "Pricing in INR, examples relevant to the Indian job market, instructors who understand the context." },
              { icon: "⬡", title: "Learn at your pace",         desc: "Buy once, access forever. No monthly subscriptions. Come back whenever you need a refresher." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 cursor-default"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-zinc-100 px-6 py-16 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Student stories</div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight leading-tight mb-10">
              What our students say.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)", transition: { duration: 0.2 } }}
                className="bg-white border border-zinc-200 rounded-2xl p-5"
              >
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
              </motion.div>
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