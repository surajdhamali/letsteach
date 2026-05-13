export const metadata = {
  title: "Cookie Policy",
  description: "How letsteach uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      <div className="bg-zinc-950 px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">Legal</div>
          <h1 className="font-display text-4xl font-semibold text-white tracking-tight mb-3">Cookie Policy</h1>
          <p className="text-zinc-400 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">What are cookies?</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help the website remember information about your visit — like whether you're logged in or what's in your cart. They are widely used to make websites work more efficiently.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">How we use cookies</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-5">We use the following types of cookies:</p>
          <div className="space-y-4">
            {[
              {
                type: "Essential cookies",
                desc: "Required for the platform to function. These keep you logged in, remember your cart, and enable secure areas of the site. You cannot opt out of these.",
                badge: "Required",
                badgeColor: "bg-zinc-100 text-zinc-600",
              },
              {
                type: "Analytics cookies",
                desc: "Help us understand how visitors use the platform — which pages are popular, where people drop off, and how to improve the experience. We use anonymised data only.",
                badge: "Optional",
                badgeColor: "bg-amber-100 text-amber-700",
              },
              {
                type: "Preference cookies",
                desc: "Remember your settings — like your preferred language or whether you've dismissed a banner — so you don't have to set them every time.",
                badge: "Optional",
                badgeColor: "bg-amber-100 text-amber-700",
              },
              {
                type: "Marketing cookies",
                desc: "Used to show you relevant advertisements and track the effectiveness of our marketing campaigns. We only use these with your consent.",
                badge: "Optional",
                badgeColor: "bg-amber-100 text-amber-700",
              },
            ].map((c) => (
              <div key={c.type} className="bg-white border border-zinc-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-zinc-900">{c.type}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.badgeColor}`}>{c.badge}</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">Managing cookies</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-3">
            You can control cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "See what cookies are stored and delete them individually.",
              "Block third-party cookies.",
              "Block all cookies from specific sites.",
              "Block all cookies from being set.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Note that blocking essential cookies may prevent parts of the platform from working correctly.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">Contact</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Questions about our use of cookies? Email us at{" "}
            <a href="mailto:privacy@letsteach.com" className="text-amber-600 hover:underline">
              privacy@letsteach.com
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  );
}