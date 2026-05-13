"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="pt-14 min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-zinc-950 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">Get in touch</div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            We'd love to <em className="not-italic text-amber-400">hear from you.</em>
          </h1>
          <p className="text-zinc-400 text-base max-w-xl">
            Whether it's a question, a problem, or just feedback — we read every message and reply within one business day.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Contact info */}
        <div className="space-y-6">
          {[
            {
              icon: "◎",
              title: "General enquiries",
              detail: "hello@letsteach.com",
              href: "mailto:hello@letsteach.com",
            },
            {
              icon: "◈",
              title: "Support",
              detail: "support@letsteach.com",
              href: "mailto:support@letsteach.com",
            },
            {
              icon: "⬡",
              title: "Instructor support",
              detail: "instructors@letsteach.com",
              href: "mailto:instructors@letsteach.com",
            },
            {
              icon: "▲",
              title: "Team & enterprise",
              detail: "teams@letsteach.com",
              href: "mailto:teams@letsteach.com",
            },
            {
              icon: "◇",
              title: "Press & media",
              detail: "press@letsteach.com",
              href: "mailto:press@letsteach.com",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-600 text-sm">
                {item.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-0.5">{item.title}</div>
                <a href={item.href} className="text-sm font-medium text-zinc-800 hover:text-amber-600 transition-colors">
                  {item.detail}
                </a>
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-zinc-200">
            <div className="text-xs text-zinc-400 leading-relaxed">
              letsteach Pvt. Ltd.<br />
              Bangalore, Karnataka<br />
              India — 560001
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2">
          {submitted ? (
            <div className="bg-white border border-zinc-200 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">✦</div>
              <h2 className="font-display text-2xl font-semibold text-zinc-900 mb-2">Message sent!</h2>
              <p className="text-sm text-zinc-500">
                Thanks for reaching out. We'll get back to you within one business day.
              </p>
            </div>
          ) : (
            <div className="bg-white border border-zinc-200 rounded-2xl p-8">
              <h2 className="font-display text-xl font-semibold text-zinc-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Full name</label>
                    <input
                      type="text" required value={form.name} onChange={update("name")}
                      placeholder="Your name"
                      className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Email address</label>
                    <input
                      type="email" required value={form.email} onChange={update("email")}
                      placeholder="you@example.com"
                      className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Subject</label>
                  <select
                    required value={form.subject} onChange={update("subject")}
                    className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-700 focus:outline-none focus:border-amber-400 transition-colors bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option>Course question</option>
                    <option>Payment or billing</option>
                    <option>Refund request</option>
                    <option>Instructor support</option>
                    <option>Technical issue</option>
                    <option>Team or enterprise plan</option>
                    <option>Press or media</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Message</label>
                  <textarea
                    required rows={5} value={form.message} onChange={update("message")}
                    placeholder="Tell us how we can help..."
                    className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit" disabled={loading}
                  className="w-full bg-amber-600 text-white text-sm font-semibold py-3 rounded-full hover:bg-amber-500 transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send message →"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}