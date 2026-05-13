export const metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of letsteach.",
};

export default function TermsPage() {
  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      <div className="bg-zinc-950 px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">Legal</div>
          <h1 className="font-display text-4xl font-semibold text-white tracking-tight mb-3">Terms of Service</h1>
          <p className="text-zinc-400 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">1. Acceptance of terms</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            By accessing or using letsteach, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. We may update these terms from time to time — continued use of the platform after changes constitutes your acceptance.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">2. Your account</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-3">When you create an account on letsteach:</p>
          <ul className="space-y-2">
            {[
              "You must provide accurate and complete information.",
              "You are responsible for maintaining the security of your account and password.",
              "You must be at least 13 years old to use the platform.",
              "You may not share your account with others or transfer it to another person.",
              "You are responsible for all activity that occurs under your account.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">3. Course purchases</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-3">
            When you purchase a course on letsteach, you receive a personal, non-transferable licence to access that course content. This means:
          </p>
          <ul className="space-y-2">
            {[
              "You may access the course content for your own personal learning.",
              "You may not share, copy, distribute, or resell course content.",
              "You may not use course content for commercial purposes without written permission.",
              "Your access is lifetime — you will not lose access unless you violate these terms.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">4. Instructor terms</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-3">If you publish courses as an instructor:</p>
          <ul className="space-y-2">
            {[
              "You retain ownership of your course content.",
              "You grant letsteach a licence to host, display, and sell your content on the platform.",
              "You are responsible for ensuring your content is accurate and does not infringe third-party rights.",
              "You will receive 70% of the revenue from course sales after payment processing fees.",
              "letsteach reserves the right to remove content that violates these terms.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">5. Prohibited conduct</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-3">You agree not to:</p>
          <ul className="space-y-2">
            {[
              "Use the platform for any unlawful purpose.",
              "Upload or share content that is harmful, offensive, or misleading.",
              "Attempt to gain unauthorised access to any part of the platform.",
              "Use automated tools to scrape or download course content.",
              "Impersonate another person or entity.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">6. Limitation of liability</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            letsteach provides the platform and course content on an "as is" basis. We do not guarantee that any course will result in a particular outcome, job, or skill level. To the maximum extent permitted by law, letsteach will not be liable for indirect, incidental, or consequential damages arising from your use of the platform.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">7. Governing law</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            These terms are governed by the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Bangalore, India.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">8. Contact</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Questions about these terms? Email us at{" "}
            <a href="mailto:legal@letsteach.com" className="text-amber-600 hover:underline">
              legal@letsteach.com
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  );
}