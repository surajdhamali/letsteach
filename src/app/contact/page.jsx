"use client";

import { useState } from "react";
import { useFormSubmit } from "@/lib/useFormSubmit";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", mobile: "", company: "", subject: "", query: "",
  });

  const { loading, success, error, submitForm } = useFormSubmit();
  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({
      name:      form.name,
      email:     form.email,
      mobile:    form.mobile,
      company:   form.company,
      subject:   `Contact Form — ${form.subject || "General"}`,
      query:     form.query || "No message provided",
      form_name: "Contact Page",           // ← identifies this form in SparkTG email
    });
  };

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
            { icon: "◎", title: "General enquiries",  detail: "hello@letsteach.com",       href: "mailto:hello@letsteach.com" },
            { icon: "◈", title: "Support",             detail: "support@letsteach.com",     href: "mailto:support@letsteach.com" },
            { icon: "⬡", title: "Instructor support", detail: "instructors@letsteach.com", href: "mailto:instructors@letsteach.com" },
            { icon: "▲", title: "Team & enterprise",  detail: "teams@letsteach.com",       href: "mailto:teams@letsteach.com" },
            { icon: "◇", title: "Press & media",      detail: "press@letsteach.com",       href: "mailto:press@letsteach.com" },
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
              letsteach Pvt. Ltd.<br />Bangalore, Karnataka<br />India — 560001
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2">
          {success ? (
            <div className="bg-white border border-zinc-200 rounded-2xl p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-semibold text-zinc-900 mb-2">Message sent!</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Thank you for reaching out. Our team will connect with you shortly.
              </p>
            </div>
          ) : (
            <div className="bg-white border border-zinc-200 rounded-2xl p-8">
              <h2 className="font-display text-xl font-semibold text-zinc-900 mb-6">Send us a message</h2>

              {error && (
                <div className="mb-5 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl px-4 py-3">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Full name *</label>
                    <input type="text" required value={form.name} onChange={update("name")} placeholder="Your name"
                      className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Email address *</label>
                    <input type="email" required value={form.email} onChange={update("email")} placeholder="you@example.com"
                      className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Mobile number *</label>
                    <input type="tel" required value={form.mobile} onChange={update("mobile")} placeholder="10-digit number" maxLength={10}
                      className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Company / Organisation</label>
                    <input type="text" value={form.company} onChange={update("company")} placeholder="Where do you work?"
                      className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Subject</label>
                  <select value={form.subject} onChange={update("subject")}
                    className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-700 focus:outline-none focus:border-amber-400 transition-colors bg-white">
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
                  <textarea rows={5} value={form.query} onChange={update("query")} placeholder="Tell us how we can help..."
                    className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none" />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-amber-600 text-white text-sm font-semibold py-3 rounded-full hover:bg-amber-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? "Sending..." : "Send message →"}
                </button>
                <p className="text-xs text-zinc-400 text-center">Our team typically responds within one business day.</p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}