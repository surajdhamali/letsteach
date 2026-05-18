"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";
import { useFormSubmit } from "@/lib/useFormSubmit";

const FEATURES = [
  { icon: "◎", title: "Team dashboard",            desc: "See every team member's progress, completion rates, and time spent learning — all in one place." },
  { icon: "◈", title: "Custom learning paths",     desc: "Assign specific courses to specific roles. A frontend team gets one path, data analysts get another." },
  { icon: "⬡", title: "All 480+ courses included", desc: "Every seat gets full access to the entire course library. No per-course charges on top." },
  { icon: "▲", title: "Progress reporting",         desc: "Export completion reports, track who's finished what, and spot who needs extra support." },
  { icon: "◇", title: "Dedicated support",          desc: "A dedicated account manager for teams of 20+. Not a support ticket — a real person." },
  { icon: "✦", title: "Invoice billing",             desc: "Single monthly invoice for the whole team. GST-compliant, PO-friendly, no credit cards needed." },
];

const PLANS = [
  {
    size: "Starter", seats: "10–24 seats", price: "₹399", per: "/ user / month",
    features: ["Full course library access", "Team admin dashboard", "Progress tracking", "Email support"],
  },
  {
    size: "Growth", seats: "25–99 seats", price: "₹349", per: "/ user / month", featured: true,
    features: ["Everything in Starter", "Custom learning paths", "Completion reports", "Dedicated account manager", "SSO support"],
  },
  {
    size: "Enterprise", seats: "100+ seats", price: "Custom", per: "pricing",
    features: ["Everything in Growth", "Custom branding", "API access", "SLA guarantee", "Onboarding support", "Quarterly business reviews"],
  },
];

const STEPS = [
  { n: "01", title: "Talk to us",          body: "Fill in the form below or email teams@letsteach.com. We'll get back to you within one business day to understand what your team needs." },
  { n: "02", title: "Set up your account", body: "We create your team workspace, invite your members, and set up any custom learning paths you need. Takes less than an hour." },
  { n: "03", title: "Start learning",      body: "Your team gets immediate access to every course. You get a dashboard showing who's enrolled in what and how they're progressing." },
];

const TESTIMONIAL = {
  quote: "Our engineering team upskilled on cloud architecture in 6 weeks. The team dashboards made it easy to spot who needed extra support and who was flying ahead.",
  name: "Aiko Tanaka", role: "VP Engineering, Verve", initials: "AT", bg: "bg-violet-700",
};

const COMPANIES = ["TCS", "Infosys", "Wipro", "HCL", "Freshworks", "Zoho", "PhonePe", "Razorpay"];

const STATS = [
  { value: "480+", label: "Courses available" },
  { value: "50+",  label: "Companies using teams" },
  { value: "94%",  label: "Completion rate" },
  { value: "₹399", label: "Per user / month" },
];

// ─── Scroll helper ─────────────────────────────────────────────────────────────
const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
};

// ─── Teams contact form ────────────────────────────────────────────────────────
function TeamsForm() {
  const [form, setForm] = useState({
    name: "", email: "", mobile: "", company: "", teamSize: "", message: "",
  });
  const { loading, success, error, submitForm } = useFormSubmit();
  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({
      name:      form.name,
      email:     form.email,
      mobile:    form.mobile,
      company:   form.company,
      subject:   `Teams Enquiry — ${form.teamSize || "Not specified"}`,
      query:     form.message || "Team plan enquiry from letsteach.com",
      form_name: "Teams Page Form",
    });
  };

  if (success) {
    return (
      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-zinc-900 mb-2">Message received!</h3>
        <p className="text-sm text-zinc-500">Our team will connect with you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
      {error && (
        <div className="mb-5 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl px-4 py-3">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Your name *</label>
            <input type="text" required value={form.name} onChange={update("name")}
              placeholder="Rahul Sharma"
              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors bg-white" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Work email *</label>
            <input type="email" required value={form.email} onChange={update("email")}
              placeholder="rahul@company.com"
              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors bg-white" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Mobile number *</label>
            <input type="tel" required value={form.mobile} onChange={update("mobile")}
              placeholder="10-digit number" maxLength={10}
              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors bg-white" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Company name</label>
            <input type="text" value={form.company} onChange={update("company")}
              placeholder="Acme Inc."
              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors bg-white" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Team size</label>
          <select value={form.teamSize} onChange={update("teamSize")}
            className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-700 focus:outline-none focus:border-amber-400 transition-colors bg-white">
            <option value="">Select team size</option>
            <option>10–24 people</option>
            <option>25–49 people</option>
            <option>50–99 people</option>
            <option>100–249 people</option>
            <option>250+ people</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">What does your team need to learn?</label>
          <textarea rows={3} value={form.message} onChange={update("message")}
            placeholder="e.g. We want to upskill our frontend engineers in React and system design..."
            className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none bg-white" />
        </div>
        <button type="submit" disabled={loading}
          className="w-full text-center text-sm font-semibold bg-amber-600 text-white py-3 rounded-full hover:bg-amber-500 transition-colors hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed">
          {loading ? "Sending..." : "Send enquiry →"}
        </button>
        <p className="text-xs text-zinc-400 text-center">
          Or email us directly at{" "}
          <a href="mailto:teams@letsteach.com" className="text-amber-600 hover:underline">
            teams@letsteach.com
          </a>
        </p>
      </form>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function TeamsClient() {
  return (
    <div className="pt-14 min-h-screen">

      {/* ─── HERO ─── */}
      <section className="bg-zinc-950 px-6 py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Teams at 50+ companies use letsteach
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.08] mb-5"
          >
            Upskill your team.<br />
            <em className="not-italic text-amber-400">See the difference.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto mb-8"
          >
            Give your team access to 480+ practical courses. Track progress, assign learning paths, and build the skills your business actually needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-3 justify-center flex-wrap"
          >
            <button
              onClick={scrollToForm}
              className="text-sm font-semibold bg-amber-600 text-white px-7 py-3.5 rounded-full hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/30 hover:scale-105 active:scale-95"
            >
              Talk to sales →
            </button>
            <Link href="/courses"
              className="text-sm font-medium text-zinc-400 hover:text-white border-b border-zinc-600 hover:border-zinc-400 transition-colors pb-0.5">
              Browse courses first
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
      <div className="bg-zinc-900 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-6 overflow-x-auto scrollbar-hide">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest whitespace-nowrap flex-shrink-0">Teams at</span>
          <div className="w-px h-4 bg-zinc-700 flex-shrink-0" />
          <div className="flex items-center gap-10 flex-1 justify-between">
            {COMPANIES.map((c, i) => (
              <motion.span key={c}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.08 + 0.3 }}
                className="text-sm font-semibold text-zinc-400 opacity-50 whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── STATS ─── */}
      <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl font-bold tracking-tight text-zinc-900 mb-0.5">{s.value}</div>
              <div className="text-xs text-zinc-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── FEATURES ─── */}
      <section className="bg-white px-6 py-16 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <FadeUp><div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">What's included</div></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight mb-10">
              Everything your team<br /><em className="not-italic text-amber-600">needs to grow.</em>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 hover:border-amber-200 hover:shadow-sm transition-all cursor-default"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-zinc-50 px-6 py-16 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <FadeUp><div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Getting started</div></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight mb-12">
              Up and running<br /><em className="not-italic text-amber-600">in one day.</em>
            </h2>
          </FadeUp>
          {STEPS.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-8 py-8 border-b border-zinc-200 last:border-0 group hover:bg-white -mx-6 px-6 transition-colors rounded-xl"
            >
              <span className="font-display text-4xl font-bold text-zinc-200 group-hover:text-amber-300 transition-colors min-w-[3rem]">{s.n}</span>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-lg">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="bg-white px-6 py-16 border-b border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <FadeUp><div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Team pricing</div></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight mb-10">Simple per-seat pricing.</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANS.map((plan, i) => (
              <motion.div key={plan.size}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: plan.featured ? -6 : -4, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-7 flex flex-col relative ${plan.featured ? "bg-zinc-950 border-2 border-amber-400 shadow-xl" : "bg-zinc-50 border border-zinc-200"}`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-semibold bg-amber-400 text-white px-4 py-1 rounded-full whitespace-nowrap">
                    Most popular
                  </span>
                )}
                <div className="mb-5">
                  <h3 className={`font-display text-xl font-semibold mb-1 ${plan.featured ? "text-white" : "text-zinc-900"}`}>{plan.size}</h3>
                  <p className={`text-xs mb-4 ${plan.featured ? "text-zinc-400" : "text-zinc-500"}`}>{plan.seats}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`font-display text-3xl font-bold tracking-tight ${plan.featured ? "text-amber-400" : "text-zinc-900"}`}>{plan.price}</span>
                    <span className="text-sm text-zinc-400">{plan.per}</span>
                  </div>
                </div>
                <button
                  onClick={scrollToForm}
                  className={`block w-full text-center text-sm font-semibold py-2.5 rounded-full transition-all mb-6 hover:scale-[1.02] active:scale-95 ${
                    plan.featured ? "bg-amber-600 text-white hover:bg-amber-500" : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  Get started →
                </button>
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f, fi) => (
                    <motion.li key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fi * 0.06 + i * 0.1 + 0.3 }}
                      className="flex items-start gap-2.5"
                    >
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.featured ? "bg-amber-400/20" : "bg-amber-100"}`}>
                        <svg className={`w-2.5 h-2.5 ${plan.featured ? "text-amber-400" : "text-amber-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm ${plan.featured ? "text-zinc-300" : "text-zinc-700"}`}>{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-zinc-400 text-center mt-6">
            All plans billed monthly. Annual billing available — contact us for a quote.
          </p>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="bg-zinc-950 px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-3xl text-amber-400 mb-6 font-serif">"</div>
          <p className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-8">{TESTIMONIAL.quote}</p>
          <div className="flex items-center gap-3 justify-center">
            <div className={`w-10 h-10 rounded-full ${TESTIMONIAL.bg} flex items-center justify-center text-xs font-bold text-white`}>
              {TESTIMONIAL.initials}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-white">{TESTIMONIAL.name}</div>
              <div className="text-xs text-zinc-500">{TESTIMONIAL.role}</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section id="contact-form" className="bg-white px-6 py-16 border-t border-zinc-100">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Get in touch</div>
            <h2 className="font-display text-3xl font-semibold tracking-tight mb-2">Let's talk about your team.</h2>
            <p className="text-sm text-zinc-500 mb-8">Fill in the form and we'll get back to you within one business day.</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <TeamsForm />
          </FadeUp>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <div className="bg-zinc-950 px-6 py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/4 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/4 pointer-events-none" />
        <div className="relative z-10 max-w-lg mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-3">
            Ready to upskill{" "}
            <em className="not-italic text-amber-400">your team?</em>
          </h2>
          <p className="text-sm text-zinc-500 mb-8">
            Talk to us today. We'll have your team set up within 24 hours.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-block text-sm font-semibold bg-amber-600 text-white px-7 py-3 rounded-full hover:bg-amber-500 transition-colors hover:scale-105 active:scale-95"
          >
            Talk to our team →
          </button>
        </div>
      </div>

    </div>
  );
}