import Link from "next/link";

export const metadata = {
  title: "Careers",
  description: "Join the letsteach team.",
};

const OPENINGS = [
  {
    title: "Senior Frontend Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Bangalore / Remote",
    desc: "Build the learner experience. You'll work on the course player, dashboard, and all the surfaces learners interact with every day.",
  },
  {
    title: "Product Designer",
    team: "Design",
    type: "Full-time",
    location: "Bangalore / Remote",
    desc: "Own design across the platform — from onboarding to checkout to the learning experience. Work directly with the founders.",
  },
  {
    title: "Instructor Success Manager",
    team: "Operations",
    type: "Full-time",
    location: "Bangalore",
    desc: "Help instructors launch better courses. You'll onboard new instructors, review course quality, and be their first point of contact.",
  },
  {
    title: "Growth Marketing Manager",
    team: "Marketing",
    type: "Full-time",
    location: "Remote",
    desc: "Own learner acquisition. SEO, paid channels, content, and partnerships — you'll build the engine that brings learners to the platform.",
  },
  {
    title: "Content Writer",
    team: "Marketing",
    type: "Part-time / Contract",
    location: "Remote",
    desc: "Write blog posts, course descriptions, emails, and landing pages. You know how to write clearly and actually care about being understood.",
  },
];

const PERKS = [
  { icon: "◎", title: "Competitive salary",        desc: "Benchmarked against top Indian startups. We pay fairly and transparently." },
  { icon: "◈", title: "Remote-first",               desc: "Work from wherever you're most productive. We have an office in Bangalore if you want it." },
  { icon: "⬡", title: "Free letsteach access",      desc: "Full access to every course on the platform for you and one family member." },
  { icon: "▲", title: "Learning budget",            desc: "₹30,000 per year for books, courses, conferences, or anything that makes you better at your job." },
  { icon: "◇", title: "Health insurance",           desc: "Comprehensive health coverage for you and your immediate family." },
  { icon: "✦", title: "Meaningful work",            desc: "Small team, real ownership. What you build goes live and is used by thousands of people." },
];

export default function CareersPage() {
  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-zinc-950 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Careers</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.08] mb-5 max-w-2xl">
            Build something<br />
            <em className="not-italic text-amber-400">people actually use.</em>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            We're a small team building an online learning platform for India. If you care about education, move fast, and want real ownership over your work — we'd like to talk.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "18",     label: "Team size" },
            { value: "2023",   label: "Founded" },
            { value: "Remote", label: "Work style" },
            { value: "India",  label: "HQ" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold tracking-tight text-zinc-900 mb-0.5">{s.value}</div>
              <div className="text-xs text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Perks */}
      <section className="bg-white px-6 py-16 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Why join us</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-10">
            What we <em className="not-italic text-amber-600">offer.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERKS.map((p) => (
              <div key={p.title} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-5">
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-semibold text-zinc-900 mb-1.5">{p.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Open roles</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-10">
            We're hiring.
          </h2>
          <div className="space-y-3">
            {OPENINGS.map((job) => (
              <div key={job.title} className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-amber-300 hover:shadow-sm transition-all group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors">{job.title}</h3>
                      <span className="text-xs bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-full">{job.team}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full">{job.type}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mb-3">📍 {job.location}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">{job.desc}</p>
                  </div>
                  <a
                    href={`mailto:careers@letsteach.com?subject=Application: ${job.title}`}
                    className="flex-shrink-0 text-sm font-semibold bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-amber-600 transition-colors whitespace-nowrap self-start"
                  >
                    Apply →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* No role listed */}
          <div className="mt-8 bg-zinc-950 rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-white mb-2">Don't see a fit?</h3>
            <p className="text-zinc-400 text-sm mb-5">
              We hire for talent and attitude over specific roles. If you're exceptional at what you do, send us a note.
            </p>
            <a
              href="mailto:careers@letsteach.com"
              className="inline-block text-sm font-semibold bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-500 transition-colors"
            >
              careers@letsteach.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}