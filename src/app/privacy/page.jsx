export const metadata = {
  title: "Privacy Policy",
  description: "How letsteach collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      <div className="bg-zinc-950 px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">Legal</div>
          <h1 className="font-display text-4xl font-semibold text-white tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-zinc-400 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">1. Who we are</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            letsteach is an online learning platform operated by letsteach Pvt. Ltd., registered in India. When you use our website or services, you are sharing information with us. This policy explains what we collect, why we collect it, and how we use it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">2. What we collect</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-3">We collect the following types of information:</p>
          <ul className="space-y-2">
            {[
              "Account information — your name, email address, and password when you register.",
              "Payment information — billing details processed securely through our payment partners. We do not store your card details.",
              "Usage data — pages you visit, courses you view, and how you interact with the platform.",
              "Device information — browser type, IP address, and operating system for security and analytics.",
              "Communications — messages you send to our support team.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">3. How we use your data</h2>
          <ul className="space-y-2">
            {[
              "To provide and improve our services.",
              "To process payments and send receipts.",
              "To send you course updates, platform news, and promotional offers (you can opt out at any time).",
              "To respond to your support requests.",
              "To detect and prevent fraud or abuse.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">4. Sharing your data</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            We do not sell your personal data to third parties. We may share data with trusted service providers (such as payment processors and analytics tools) who help us operate the platform. These providers are contractually required to protect your data and may not use it for their own purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">5. Cookies</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            We use cookies to keep you logged in, remember your preferences, and understand how people use our platform. You can control cookies through your browser settings. See our Cookie Policy for more details.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">6. Your rights</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-3">You have the right to:</p>
          <ul className="space-y-2">
            {[
              "Access the personal data we hold about you.",
              "Request correction of inaccurate data.",
              "Request deletion of your account and associated data.",
              "Opt out of marketing communications at any time.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">7. Data retention</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            We retain your data for as long as your account is active. If you delete your account, we will remove your personal data within 30 days, except where we are required to retain it for legal or financial compliance purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">8. Contact us</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            If you have questions about this policy or want to exercise your rights, email us at{" "}
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