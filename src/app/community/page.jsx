import Link from "next/link";

export const metadata = {
  title: "Community",
  description: "Join the letsteach learner community.",
};

const CHANNELS = [
  {
    icon: "◎",
    title: "General Discussion",
    desc: "Talk about anything — courses, careers, learning tips, or just say hello.",
    members: "4,200 members",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: "⬡",
    title: "Engineering",
    desc: "Code reviews, debugging help, architecture discussions, and job prep.",
    members: "3,800 members",
    color: "bg-violet-50 border-violet-200",
    iconColor: "text-violet-600",
  },
  {
    icon: "◈",
    title: "Design & UX",
    desc: "Portfolio feedback, Figma tips, design critiques, and inspiration.",
    members: "2,100 members",
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-600",
  },
  {
    icon: "▲",
    title: "Marketing & Growth",
    desc: "Campaign ideas, SEO questions, analytics, and growth tactics.",
    members: "1,400 members",
    color: "bg-rose-50 border-rose-200",
    iconColor: "text-rose-600",
  },
  {
    icon: "◇",
    title: "Product & Career",
    desc: "PM interviews, career transitions, resume reviews, and job leads.",
    members: "1,800 members",
    color: "bg-sky-50 border-sky-200",
    iconColor: "text-sky-600",
  },
  {
    icon: "✦",
    title: "Show & Tell",
    desc: "Share what you've built, projects you've shipped, or courses you've finished.",
    members: "980 members",
    color: "bg-pink-50 border-pink-200",
    iconColor: "text-pink-600",
  },
];

const RULES = [
  "Be respectful. No harassment, discrimination, or personal attacks.",
  "Stay on topic. Keep discussions relevant to learning and careers.",
  "No spam. No self-promotion without prior approval from moderators.",
  "No plagiarism. Don't share course content from letsteach or elsewhere.",
  "Help others. If you know the answer, share it.",
];

export default function CommunityPage() {
  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-zinc-950 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">Community</div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Learn better <em className="not-italic text-amber-400">together.</em>
          </h1>
          <p className="text-zinc-400 text-base max-w-xl mx-auto mb-8">
            Join 12,000+ learners and instructors. Ask questions, share work, get feedback, and find people who are learning the same things you are.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/signup" className="text-sm font-semibold bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-500 transition-colors">
              Join the community →
            </Link>
            <span className="text-sm text-zinc-500">Free for all letsteach learners</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-6">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6">
          {[
            { value: "12,000+", label: "Members" },
            { value: "6",       label: "Channels" },
            { value: "Daily",   label: "Activity" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-bold tracking-tight text-zinc-900 mb-0.5">{s.value}</div>
              <div className="text-xs text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Channels */}
        <div className="mb-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight mb-2">Channels</h2>
          <p className="text-sm text-zinc-500 mb-8">Join the conversations that matter to you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHANNELS.map((ch) => (
              <div key={ch.title} className={`border rounded-2xl p-5 hover:shadow-md transition-shadow cursor-pointer ${ch.color}`}>
                <div className={`text-2xl mb-3 ${ch.iconColor}`}>{ch.icon}</div>
                <h3 className="font-semibold text-zinc-900 mb-1.5">{ch.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-3">{ch.desc}</p>
                <span className="text-xs text-zinc-400">{ch.members}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Community rules */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-8 max-w-2xl">
          <h2 className="font-display text-xl font-semibold tracking-tight mb-5">Community rules</h2>
          <ul className="space-y-3">
            {RULES.map((rule, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-xs font-bold text-amber-600 mt-0.5 min-w-[1.25rem]">{i + 1}.</span>
                <span className="text-sm text-zinc-600 leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}