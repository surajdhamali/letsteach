"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import CTABand from "@/components/CTABand";

const STEPS = [
  { n: "01", icon: "◈", title: "Outline your course",  body: "Pick your topic and map out your lessons. Keep it focused — a tight 10-hour course outperforms a bloated 40-hour one every time." },
  { n: "02", icon: "◎", title: "Record and upload",     body: "Record with your phone or laptop, upload your videos, add a few quizzes. Our builder makes it straightforward." },
  { n: "03", icon: "⬡", title: "Publish and earn",      body: "Go live, set your price, and start earning. You keep 70% of every sale. Payments are processed monthly." },
];

const PERKS = [
  { icon: "◆", title: "70% revenue share",    desc: "You earn 70% of every sale. No caps, no tiers, no platform fees eating into your income." },
  { icon: "◎", title: "Payments handled",      desc: "We handle all payment processing in INR. You get a monthly payout — no invoicing, no chasing." },
  { icon: "◈", title: "Simple course builder", desc: "Upload videos, add quizzes, write descriptions. Takes less than a day to publish your first course." },
  { icon: "▲", title: "Real audience",          desc: "Your course goes live in front of 12,000+ active learners from day one. Not starting from zero." },
  { icon: "◉", title: "Student insights",      desc: "See how many people enrolled, where they drop off, and what they're saying in reviews." },
  { icon: "✦", title: "Auto certificates",     desc: "Students get a certificate on completion. We generate and send it automatically." },
];

const STATS = [
  { value: "800+",    label: "Active instructors" },
  { value: "70%",     label: "Revenue share" },
  { value: "₹1,499",  label: "Avg course price" },
  { value: "Monthly", label: "Payout schedule" },
];

function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Smooth animated number for calculator
function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    const start = prev.current;
    const end = value;
    const duration = 400;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    prev.current = value;
  }, [value]);

  return <span>₹{display.toLocaleString()}</span>;
}

export default function TeachPage() {
  const [income, setIncome]     = useState(1499);
  const [students, setStudents] = useState(50);
  const estimated = Math.round(income * students * 0.7);

  return (
    <div className="pt-14 min-h-screen">
      {/* Hero */}
      <section className="bg-zinc-950 px-6 py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            800+ instructors already teaching
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.08] mb-5"
          >
            Teach what you know.<br />
            <em className="not-italic text-amber-400">Get paid for it.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto mb-8"
          >
            If you're good at something, you can teach it. No studio, no production crew, no audience to build first.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/signup?role=instructor" className="inline-block text-sm font-semibold bg-amber-600 text-white px-7 py-3.5 rounded-full hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/30 hover:scale-105 active:scale-95">
              Start teaching for free →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl font-bold tracking-tight text-zinc-900 mb-0.5">{s.value}</div>
              <div className="text-xs text-zinc-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">How it works</div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight mb-12">
              Three steps to your<br /><em className="not-italic text-amber-600">first sale.</em>
            </h2>
          </FadeUp>
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-8 py-8 border-b border-zinc-100 last:border-0 group hover:bg-zinc-50 -mx-6 px-6 transition-colors rounded-xl"
            >
              <span className="font-display text-4xl font-bold text-zinc-200 group-hover:text-amber-300 transition-colors min-w-[3rem]">{s.n}</span>
              <div>
                <div className="text-xl mb-1">{s.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-lg">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="bg-zinc-50 px-6 py-16 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">What you get</div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight mb-10">
              Everything you need,<br /><em className="not-italic text-amber-600">nothing you don't.</em>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERKS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-zinc-200 rounded-2xl p-5 hover:border-amber-300 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-semibold text-zinc-900 mb-1.5">{p.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-zinc-950 px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">Earnings calculator</div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl font-semibold text-white tracking-tight mb-3">
              How much could<br />you <em className="not-italic text-amber-400">make?</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-zinc-500 text-sm mb-10">Adjust to estimate your monthly earnings.</p>
          </FadeUp>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm text-zinc-400">Course price</label>
                <span className="text-sm font-semibold text-white">₹{income.toLocaleString()}</span>
              </div>
              <input type="range" min="499" max="4999" step="100" value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer" />
              <div className="flex justify-between text-xs text-zinc-600 mt-1"><span>₹499</span><span>₹4,999</span></div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm text-zinc-400">Students per month</label>
                <span className="text-sm font-semibold text-white">{students}</span>
              </div>
              <input type="range" min="5" max="500" step="5" value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer" />
              <div className="flex justify-between text-xs text-zinc-600 mt-1"><span>5</span><span>500</span></div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-amber-600/10 border border-amber-600/20 rounded-2xl p-6 text-center"
            >
              <div className="text-sm text-zinc-400 mb-1">Your estimated monthly earnings</div>
              <div className="font-display text-5xl font-bold text-amber-400 tracking-tight">
                <AnimatedNumber value={estimated} />
              </div>
              <div className="text-xs text-zinc-500 mt-2">
                {students} students × ₹{income.toLocaleString()} × 70% revenue share
              </div>
            </motion.div>
          </motion.div>

          <FadeUp delay={0.3} className="mt-8 text-center">
            <Link href="/signup?role=instructor" className="inline-block text-sm font-semibold bg-amber-600 text-white px-7 py-3 rounded-full hover:bg-amber-500 transition-colors hover:scale-105 active:scale-95">
              Create your first course →
            </Link>
          </FadeUp>
        </div>
      </section>

      <CTABand title="Ready to start" highlight="teaching?" sub="Free to join. You only pay when you earn."
        showEmailInput={false} primaryCta={{ label: "Get started for free →", href: "/signup?role=instructor" }} />
    </div>
  );
}