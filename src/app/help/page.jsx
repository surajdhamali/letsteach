export const metadata = {
  title: "Help Centre",
  description: "Find answers to common questions about letsteach.",
};

const FAQS = [
  {
    category: "Getting Started",
    items: [
      { q: "How do I create an account?", a: "Click 'Start free' in the top right corner. Enter your name, email, and a password. You can start browsing courses immediately after signing up." },
      { q: "Is letsteach free to use?", a: "Creating an account is free. You can browse all courses and preview the first two lessons of any course for free. To access full course content you purchase the course individually." },
      { q: "What devices can I use?", a: "letsteach works on any device with a browser — desktop, laptop, tablet, or mobile. We recommend using Chrome, Firefox, Safari, or Edge for the best experience." },
    ],
  },
  {
    category: "Courses & Learning",
    items: [
      { q: "Do courses expire?", a: "No. Once you purchase a course, you have lifetime access. Come back anytime — there's no expiry date." },
      { q: "Can I download course videos?", a: "Currently course content is available for streaming only. Offline downloads are available on our Teams plan." },
      { q: "How do I get my certificate?", a: "Complete all lessons in a course and pass the final assessment. Your certificate is generated automatically and emailed to you. You can also download it from your dashboard." },
      { q: "What if a course is not what I expected?", a: "We offer a 7-day money-back guarantee. If you're not satisfied, email support@letsteach.com within 7 days of purchase and we'll refund you in full." },
    ],
  },
  {
    category: "Payments & Billing",
    items: [
      { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, UPI, net banking, and wallets through our payment partner Razorpay. All transactions are in INR." },
      { q: "Is my payment information secure?", a: "Yes. We do not store your card details. All payments are processed securely through Razorpay, which is PCI-DSS compliant." },
      { q: "How do I get a receipt for my purchase?", a: "A receipt is emailed to you automatically after every purchase. You can also find all your receipts in your account under Purchase History." },
      { q: "Can I get a GST invoice?", a: "Yes. During checkout, enter your GST number and business name. A GST-compliant invoice will be generated and emailed to you." },
    ],
  },
  {
    category: "Instructors",
    items: [
      { q: "How do I become an instructor?", a: "Go to letsteach.com/teach and click 'Start teaching for free'. Fill in your profile and start building your first course. There's no approval process — you can publish immediately." },
      { q: "When do I get paid?", a: "Instructor payouts happen monthly. Earnings from the previous month are transferred to your bank account on the 10th of every month." },
      { q: "What percentage do I earn?", a: "You keep 70% of every sale. letsteach takes 30% to cover platform costs, payment processing, and support." },
    ],
  },
];

export default function HelpPage() {
  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-zinc-950 px-6 py-16 text-center">
        <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">Support</div>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
          How can we <em className="not-italic text-amber-400">help?</em>
        </h1>
        <p className="text-zinc-400 text-base mb-8 max-w-md mx-auto">
          Find answers to common questions below. Can't find what you need? Contact us directly.
        </p>
        <a
          href="mailto:support@letsteach.com"
          className="inline-block text-sm font-semibold bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-500 transition-colors"
        >
          Email support →
        </a>
      </div>

      {/* FAQ sections */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-12">
        {FAQS.map((section) => (
          <div key={section.category}>
            <h2 className="font-display text-xl font-semibold text-zinc-900 mb-5 pb-3 border-b border-zinc-200">
              {section.category}
            </h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.q} className="bg-white border border-zinc-200 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-zinc-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Contact card */}
        <div className="bg-zinc-950 rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-white mb-2">Still need help?</h2>
          <p className="text-zinc-400 text-sm mb-6">Our support team responds within one business day.</p>
          <a
            href="mailto:support@letsteach.com"
            className="inline-block text-sm font-semibold bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-500 transition-colors"
          >
            support@letsteach.com
          </a>
        </div>
      </div>
    </div>
  );
}