import Link from "next/link";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "About",
  description: "About letsteach — who we are and why we built this.",
};

const TEAM = [
  { name: "Arjun Sharma",  role: "Co-founder & CEO",      initials: "AS", bg: "bg-amber-600" },
  { name: "Neha Joshi",    role: "Co-founder & CTO",      initials: "NJ", bg: "bg-violet-600" },
  { name: "Rahul Mehta",   role: "Head of Product",       initials: "RM", bg: "bg-teal-600" },
  { name: "Priya Kapoor",  role: "Head of Instructors",   initials: "PK", bg: "bg-rose-600" },
  { name: "Dev Bhatia",    role: "Lead Engineer",         initials: "DB", bg: "bg-sky-600" },
  { name: "Sneha Rao",     role: "Head of Marketing",     initials: "SR", bg: "bg-emerald-600" },
];

export default function AboutPage() {
  return (
    <div className="pt-14 min-h-screen">
      {/* Hero */}
      <section className="bg-zinc-950 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Our story</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.08] mb-6 max-w-2xl">
            Built by learners,<br />
            <em className="not-italic text-amber-400">for learners.</em>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            letsteach started in 2023 with a simple observation — most online courses are too long, too expensive, or too outdated. We set out to fix that by building a platform where working professionals teach exactly what they use on the job, and learners pay a fair price to access it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "2023",    label: "Founded" },
            { value: "12,000+", label: "Learners" },
            { value: "480+",    label: "Courses" },
            { value: "800+",    label: "Instructors" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold tracking-tight text-zinc-900 mb-0.5">{s.value}</div>
              <div className="text-xs text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">Our mission</div>
            <h2 className="font-display text-4xl font-semibold tracking-tight leading-tight mb-4">
              Make practical education<br />
              <em className="not-italic text-amber-600">affordable for India.</em>
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              Expensive bootcamps and long-winded courses shouldn't be the only path to a better career. We believe a well-made 15-hour course taught by someone who does the job every day is worth more than a ₹2 lakh programme.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Every course on letsteach is reviewed for quality, kept up to date, and priced so that anyone — whether you're in Mumbai or a Tier-3 town — can access it.
            </p>
          </div>
          <div className="bg-zinc-950 rounded-2xl p-8 text-center">
            <div className="font-display text-6xl font-bold text-amber-400 mb-2">4.8★</div>
            <div className="text-white font-medium mb-2">Average course rating</div>
            <div className="text-zinc-500 text-sm">across 480+ courses</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-50 px-6 py-16 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">What we believe</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-10">How we work.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "◈", title: "Short courses, real results",  desc: "We cap courses at what's needed. If it can be taught in 10 hours, it won't be stretched to 40." },
              { icon: "◎", title: "Instructors who actually do it", desc: "We only work with people currently working in their field. No retired experts teaching outdated tools." },
              { icon: "⬡", title: "Fair pricing always",           desc: "Our courses are priced for Indian salaries, not US salaries. Under ₹1,500 for most courses." },
              { icon: "▲", title: "No dark patterns",             desc: "No fake countdown timers, no hidden fees, no surprise subscriptions. What you see is what you pay." },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-zinc-200 rounded-2xl p-6">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{v.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white px-6 py-16 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">The team</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-10">Who we are.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TEAM.map((m) => (
              <div key={m.name} className="text-center group">
                <div className={`w-16 h-16 rounded-2xl ${m.bg} flex items-center justify-center text-lg font-bold text-white mx-auto mb-3 group-hover:scale-105 transition-transform`}>
                  {m.initials}
                </div>
                <div className="text-sm font-semibold text-zinc-900">{m.name}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Want to learn something"
        highlight="new?"
        sub="Join 12,000+ learners building real skills on letsteach."
      />
    </div>
  );
}