"use client";

import { useState } from "react";
import Link from "next/link";
import CTABand from "@/components/CTABand";

const PLANS = [
  {
    name: "Free",
    price: "₹0",
    desc: "Browse and preview any course before you buy.",
    cta: "Get started",
    ctaHref: "/signup",
    featured: false,
    features: ["Browse all 480+ courses", "Preview first 2 lessons of any course", "Community forum access", "Mobile app access"],
    missing: ["Full course access", "Certificate", "Assignments & projects", "Instructor Q&A"],
  },
  {
    name: "Pay per course",
    price: "₹499–₹1,999",
    priceSuffix: "per course",
    desc: "Buy only what you need. Own it forever.",
    cta: "Browse courses",
    ctaHref: "/courses",
    featured: true,
    features: ["Lifetime access to that course", "All lessons, projects & assignments", "Certificate on completion", "Instructor Q&A", "Free updates when course is updated"],
    missing: [],
  },
  {
    name: "Teams",
    price: "₹399",
    priceSuffix: "/ user / month",
    minSeats: "Min. 10 seats",
    desc: "Upskill your team with admin controls and reporting.",
    cta: "Contact us",
    ctaHref: "/contact",
    featured: false,
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

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      {/* Header */}
      <section className="bg-zinc-950 px-6 py-16 text-center">
        <h1 className="font-display text-5xl font-semibold text-white tracking-tight mb-3">
          Pay once.<br /><em className="not-italic text-amber-400">Own it forever.</em>
        </h1>
        <p className="text-zinc-400 text-base max-w-md mx-auto">
          No subscriptions, no monthly fees. Buy a course, keep it for life.
        </p>
      </section>

      {/* Plans */}
      <section className="px-6 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((plan) => (
            <div key={plan.name}
              className={`bg-white rounded-2xl p-7 flex flex-col relative ${plan.featured ? "border-2 border-amber-400 shadow-xl shadow-amber-100" : "border border-zinc-200"}`}>
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-semibold bg-amber-400 text-white px-4 py-1 rounded-full whitespace-nowrap">
                  Most popular
                </span>
              )}
              <div className="mb-5">
                <h2 className="font-display text-xl font-semibold mb-1">{plan.name}</h2>
                <p className="text-sm text-zinc-500 mb-4">{plan.desc}</p>
                <div>
                  <span className="font-display text-3xl font-bold tracking-tight">{plan.price}</span>
                  {plan.priceSuffix && <span className="text-sm text-zinc-400 ml-1">{plan.priceSuffix}</span>}
                </div>
                {plan.minSeats && <p className="text-xs text-zinc-400 mt-1">{plan.minSeats}</p>}
              </div>
              <Link href={plan.ctaHref}
                className={`block w-full text-center text-sm font-semibold py-2.5 rounded-full transition-colors mb-6 ${plan.featured ? "bg-amber-600 text-white hover:bg-amber-500" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`}>
                {plan.cta}
              </Link>
              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-700">{f}</span>
                  </li>
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
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-zinc-100 px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-center mb-10">Common questions</h2>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-zinc-200 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-zinc-50 transition-colors">
                  <span className="text-sm font-semibold text-zinc-800">{faq.q}</span>
                  <span className={`text-zinc-400 text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
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