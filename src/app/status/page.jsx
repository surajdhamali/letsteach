export const metadata = {
  title: "System Status",
  description: "Current status of letsteach services.",
};

const SERVICES = [
  { name: "Website & App",         status: "operational", uptime: "99.9%" },
  { name: "Course Player",         status: "operational", uptime: "99.8%" },
  { name: "Payments",              status: "operational", uptime: "100%" },
  { name: "User Authentication",   status: "operational", uptime: "99.9%" },
  { name: "Certificate Generation",status: "operational", uptime: "99.7%" },
  { name: "Email Notifications",   status: "operational", uptime: "99.6%" },
];

const INCIDENTS = [
  {
    date: "12 Jan 2025",
    title: "Course videos slow to load",
    status: "Resolved",
    detail: "Some users experienced slow video loading between 14:00 and 15:30 IST. The issue was caused by a CDN configuration error. Resolved at 15:30 IST.",
  },
  {
    date: "3 Dec 2024",
    title: "Email notifications delayed",
    status: "Resolved",
    detail: "Purchase confirmation emails were delayed by up to 2 hours between 09:00 and 11:00 IST. Caused by a third-party email provider outage. Resolved at 11:15 IST.",
  },
];

export default function StatusPage() {
  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-zinc-950 px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">System Status</div>
          <div className="flex items-center gap-4">
            <h1 className="font-display text-4xl font-semibold text-white tracking-tight">
              All systems operational
            </h1>
            <span className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          </div>
          <p className="text-zinc-400 text-sm mt-3">Last checked: just now</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-12">

        {/* Services */}
        <div>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-5">Services</h2>
          <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden">
            {SERVICES.map((s, i) => (
              <div
                key={s.name}
                className={`flex items-center justify-between px-5 py-4 ${i !== SERVICES.length - 1 ? "border-b border-zinc-100" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-zinc-800">{s.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs text-zinc-400">{s.uptime} uptime</span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Operational
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Uptime bar */}
        <div>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-2">90-day uptime</h2>
          <p className="text-sm text-zinc-500 mb-4">Each bar represents one day. Green = fully operational.</p>
          <div className="flex gap-0.5">
            {Array.from({ length: 90 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-8 rounded-sm ${[12, 45].includes(i) ? "bg-amber-300" : "bg-emerald-400"}`}
                title={[12, 45].includes(i) ? "Partial outage" : "Operational"}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-zinc-400 mt-2">
            <span>90 days ago</span>
            <span>Today</span>
          </div>
        </div>

        {/* Past incidents */}
        <div>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-5">Past incidents</h2>
          <div className="space-y-4">
            {INCIDENTS.map((inc) => (
              <div key={inc.title} className="bg-white border border-zinc-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-sm font-semibold text-zinc-900">{inc.title}</h3>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex-shrink-0">
                    {inc.status}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mb-2">{inc.date}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">{inc.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-400 mt-4">No incidents in the last 30 days.</p>
        </div>

        {/* Subscribe */}
        <div className="bg-zinc-950 rounded-2xl p-8 text-center">
          <h2 className="font-display text-xl font-semibold text-white mb-2">Get status updates</h2>
          <p className="text-zinc-400 text-sm mb-6">We'll email you when there's an incident or scheduled maintenance.</p>
          <a
            href="mailto:support@letsteach.com?subject=Subscribe to status updates"
            className="inline-block text-sm font-semibold bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-500 transition-colors"
          >
            Subscribe via email →
          </a>
        </div>

      </div>
    </div>
  );
}