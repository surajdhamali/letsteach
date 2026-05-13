export const metadata = {
  title: "Press",
  description: "Press resources and media coverage for letsteach.",
};

const COVERAGE = [
  {
    outlet: "YourStory",
    title: "letsteach raises seed round to make practical education affordable in India",
    date: "Feb 2024",
    href: "#",
  },
  {
    outlet: "Inc42",
    title: "How letsteach is building an edtech platform for working professionals",
    date: "Nov 2023",
    href: "#",
  },
  {
    outlet: "The Ken",
    title: "The case for short, focused online courses",
    date: "Sep 2023",
    href: "#",
  },
];

const ASSETS = [
  { label: "Logo — Light (PNG)",  desc: "For use on dark backgrounds",  href: "#" },
  { label: "Logo — Dark (PNG)",   desc: "For use on light backgrounds", href: "#" },
  { label: "Logo — SVG",          desc: "Vector format, all variants",  href: "#" },
  { label: "Brand guidelines",    desc: "Colours, fonts, usage rules",  href: "#" },
  { label: "Founder photos",      desc: "High-res headshots",           href: "#" },
  { label: "Product screenshots", desc: "Platform UI screenshots",      href: "#" },
];

const FACTS = [
  { value: "2023",    label: "Founded" },
  { value: "12,000+", label: "Learners" },
  { value: "480+",    label: "Courses" },
  { value: "800+",    label: "Instructors" },
  { value: "Bangalore", label: "Headquarters" },
  { value: "India",   label: "Market" },
];

export default function PressPage() {
  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-zinc-950 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">Press</div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Press & <em className="not-italic text-amber-400">Media.</em>
          </h1>
          <p className="text-zinc-400 text-base max-w-xl mb-6">
            For press enquiries, interviews, or partnership requests, reach out to our team.
          </p>
          <a
            href="mailto:press@letsteach.com"
            className="inline-block text-sm font-semibold bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-500 transition-colors"
          >
            press@letsteach.com
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-14">

        {/* Fast facts */}
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight mb-6">Fast facts</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {FACTS.map((f) => (
              <div key={f.label} className="bg-white border border-zinc-200 rounded-xl p-5">
                <div className="font-display text-2xl font-bold text-zinc-900 mb-0.5">{f.value}</div>
                <div className="text-xs text-zinc-500">{f.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* About blurb */}
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight mb-4">About letsteach</h2>
          <div className="bg-white border border-zinc-200 rounded-2xl p-7 space-y-4">
            <p className="text-sm text-zinc-600 leading-relaxed">
              letsteach is an online learning platform built for India's working professionals. Founded in 2023, the company offers short, practical courses taught by people currently working in their fields — covering engineering, design, data science, marketing, and more.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              All courses are priced in INR and designed to be completed in under 25 hours. Learners pay once and own the course forever. Instructors keep 70% of every sale.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              letsteach is headquartered in Bangalore, India. The company serves learners across India and the Indian diaspora globally.
            </p>
          </div>
        </div>

        {/* Coverage */}
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight mb-6">Media coverage</h2>
          <div className="space-y-3">
            {COVERAGE.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-start justify-between gap-6 bg-white border border-zinc-200 rounded-xl p-5 hover:border-amber-300 transition-all"
              >
                <div>
                  <div className="text-xs font-semibold text-amber-600 mb-1">{item.outlet}</div>
                  <h3 className="text-sm font-semibold text-zinc-900 leading-snug group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-zinc-400">{item.date}</span>
                  <span className="text-zinc-300 text-sm">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Brand assets */}
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight mb-2">Brand assets</h2>
          <p className="text-sm text-zinc-500 mb-6">
            Please follow our brand guidelines when using these assets. Do not alter the logo or use it in a misleading context.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {ASSETS.map((asset) => (
              <a
                key={asset.label}
                href={asset.href}
                className="group bg-white border border-zinc-200 rounded-xl p-4 hover:border-amber-300 transition-all flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors mb-0.5">
                    {asset.label}
                  </div>
                  <div className="text-xs text-zinc-400">{asset.desc}</div>
                </div>
                <span className="text-zinc-300 group-hover:text-amber-500 transition-colors text-lg">↓</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-zinc-950 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-1">Need something else?</h3>
            <p className="text-zinc-400 text-sm">Interview requests, speaker enquiries, or custom assets.</p>
          </div>
          <a
            href="mailto:press@letsteach.com"
            className="flex-shrink-0 text-sm font-semibold bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-500 transition-colors"
          >
            press@letsteach.com
          </a>
        </div>

      </div>
    </div>
  );
}