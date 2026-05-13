export const metadata = {
  title: "Refund Policy",
  description: "letsteach's refund and cancellation policy.",
};

export default function RefundsPage() {
  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      <div className="bg-zinc-950 px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">Legal</div>
          <h1 className="font-display text-4xl font-semibold text-white tracking-tight mb-3">Refund Policy</h1>
          <p className="text-zinc-400 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">

        {/* Highlight box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="text-sm font-semibold text-amber-800 mb-1">Our commitment</div>
          <p className="text-sm text-amber-700 leading-relaxed">
            If you're not happy with a course, we'll refund you — no questions asked — within 7 days of purchase. We'd rather you leave satisfied than stay frustrated.
          </p>
        </div>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">7-day refund guarantee</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-3">
            You are eligible for a full refund if:
          </p>
          <ul className="space-y-2">
            {[
              "You request the refund within 7 days of your purchase date.",
              "You have completed less than 30% of the course content.",
              "The course was purchased directly on letsteach (not through a third-party reseller).",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">How to request a refund</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-3">
            To request a refund, email us at{" "}
            <a href="mailto:support@letsteach.com" className="text-amber-600 hover:underline">
              support@letsteach.com
            </a>{" "}
            with:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Your registered email address.",
              "The name of the course you'd like a refund for.",
              "Your order ID (found in your purchase confirmation email).",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-zinc-500 leading-relaxed">
            We process refunds within 5–7 business days. The amount will be credited back to your original payment method.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">Exceptions</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-3">Refunds will not be issued if:</p>
          <ul className="space-y-2">
            {[
              "More than 7 days have passed since the purchase date.",
              "You have completed more than 30% of the course.",
              "The purchase was made using a discount code or promotional offer (unless the course is fundamentally different from its description).",
              "You have previously received a refund for the same course.",
              "The account shows signs of abuse of the refund policy.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">Team / bulk purchases</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Refund requests for team plans are handled on a case-by-case basis. Please contact us at{" "}
            <a href="mailto:teams@letsteach.com" className="text-amber-600 hover:underline">
              teams@letsteach.com
            </a>{" "}
            and we will work with you to find a resolution.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-zinc-900 mb-3">Still have questions?</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Email our support team at{" "}
            <a href="mailto:support@letsteach.com" className="text-amber-600 hover:underline">
              support@letsteach.com
            </a>
            . We typically respond within one business day.
          </p>
        </section>

      </div>
    </div>
  );
}