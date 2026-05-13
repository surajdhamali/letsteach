"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CTABand from "@/components/CTABand";

const PLANS = [
  {
    name: "Free", monthlyPrice: "₹0", yearlyPrice: "₹0",
    desc: "Browse and preview any course before you buy.",
    cta: "Get started", ctaHref: "/signup", featured: false,
    features: ["Browse all 480+ courses", "Preview first 2 lessons of any course", "Community forum access", "Mobile app access", "Basic progress tracking"],
    missing: ["Full course access", "Certificate", "Assignments & projects", "Instructor Q&A"],
  },
  {
    name: "Pay per course", monthlyPrice: "₹499–₹1,999", yearlyPrice: "₹499–₹1,999",
    priceSuffix: "per course",
    desc: "Buy only what you need. Own it forever.",
    cta: "Browse courses", ctaHref: "/courses", featured: true,
    features: ["Lifetime access to that course", "All lessons, projects & assignments", "Certificate on completion", "Instructor Q&A", "Free updates when course is updated"],
    missing: [],
  },
  {
    name: "Teams", monthlyPrice: "₹399", yearlyPrice: "₹399",
    priceSuffix: "/ user / month", minSeats: "Min. 10 seats",
    desc: "Upskill your team with admin controls and reporting.",
    cta: "Contact us", ctaHref: "/contact", featured: false,
    features: ["Access to all courses for every seat", "Team admin dashboard", "Progress tracking per employee", "Custom learning paths", "Dedicated support", "Invoice billing"],
    missing: [],
  },
];

const FAQS = [
  { q: "Do courses expire?",              a: "No. When you buy a course you own it forever. Come back anytime — there's no expiry date." },
  { q: "What if I don't like a course?",  a: "We offer a 7-day refund if you're not happy. No questions asked." },
  { q: "Are courses updated?",            a: "Yes. Instructors update their courses as things change. You get all updates for free." },
  { q: "Is there a subscription option?", a: "Not right now. We prefer the pay-per-course model — you only pay for what you actually want to learn." },
  { q: "How does team billing work?",     a: "Teams are billed monthly per seat. We send a single invoice for the whole team." },
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

export default function PricingPage() {
  const [yearly, setYearly]   = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      {/* Header */}
      <section className="bg-zinc-950 px-6 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-5xl font-semibold text-white tracking-tight mb-3">
            Pay once.<br /><em className="not-italic text-amber-400">Own it forever.</em>
          </h1>
          <p className="text-zinc-400 text-base mb-8 max-w-md mx-auto">
            No subscriptions, no monthly fees. Buy a course, keep it for life.
          </p>
        </motion.div>
      </section>

      {/* Plans */}
      <section className="px-6 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: plan.featured ? -6 : -4, transition: { duration: 0.2 } }}
              className={`bg-white rounded-2xl p-7 flex flex-col relative ${plan.featured ? "border-2 border-amber-400 shadow-xl shadow-amber-100" : "border border-zinc-200"}`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-semibold bg-amber-400 text-white px-4 py-1 rounded-full whitespace-nowrap">
                  Most popular
                </span>
              )}
              <div className="mb-5">
                <h2 className="font-display text-xl font-semibold mb-1">{plan.name}</h2>
                <p className="text-sm text-zinc-500 mb-4">{plan.desc}</p>
                <div>
                  <motion.span
                    key={plan.monthlyPrice}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display text-3xl font-bold tracking-tight"
                  >
                    {plan.monthlyPrice}
                  </motion.span>
                  {plan.priceSuffix && <span className="text-sm text-zinc-400 ml-1">{plan.priceSuffix}</span>}
                </div>
                {plan.minSeats && <p className="text-xs text-zinc-400 mt-1">{plan.minSeats}</p>}
              </div>
              <Link href={plan.ctaHref}
                className={`block w-full text-center text-sm font-semibold py-2.5 rounded-full transition-all mb-6 hover:scale-[1.02] active:scale-95 ${plan.featured ? "bg-amber-600 text-white hover:bg-amber-500" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`}>
                {plan.cta}
              </Link>
              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f, fi) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fi * 0.05 + i * 0.1 + 0.3 }}
                    className="flex items-start gap-2.5"
                  >
                    <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-700">{f}</span>
                  </motion.li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 opacity-35">
                    <div className="w-4 h-4 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-500">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ with accordion animation */}
      <section className="bg-white border-t border-zinc-100 px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-center mb-10">Common questions</h2>
          </FadeUp>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-zinc-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-zinc-800">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-zinc-400 text-xl flex-shrink-0 ml-4"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4">
                        <p className="text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Not sure where to"
        highlight="start?"
        sub="Browse our most popular courses — preview them for free before buying."
        showEmailInput={false}
        primaryCta={{ label: "Browse courses →", href: "/courses" }}
      />
    </div>
  );
}