"use client";

import { useState } from "react";
import Link from "next/link";
import { useFormSubmit } from "@/lib/useFormSubmit";

export default function CTABand({
  title        = "Start learning.",
  highlight    = "For free. Today.",
  sub          = "Join 12,000+ learners. Our team will connect with you shortly.",
  showEmailInput = true,
  primaryCta   = null,
}) {
  const [name, setName]     = useState("");
  const [email, setEmail]   = useState("");
  const [mobile, setMobile] = useState("");

  const { loading, success, error, submitForm } = useFormSubmit();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({
      name,
      email,
      mobile,
      company:   "",
      subject:   "CTA Band — Homepage Enquiry",
      query:     "Interest from homepage CTA band on letsteach.com",
      form_name: "CTA Band — Homepage",   // ← identifies this form
    });
  };

  return (
    <section className="bg-zinc-950 px-6 py-20 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/4 pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-3">
          {title} <em className="not-italic text-amber-400">{highlight}</em>
        </h2>
        <p className="text-sm text-zinc-500 mb-8">{sub}</p>

        {showEmailInput ? (
          success ? (
            <div className="inline-flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 px-5 py-3 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Our team will connect with you shortly!
            </div>
          ) : (
            <>
              {error && (
                <p className="mb-4 text-sm text-rose-400 bg-rose-400/10 px-4 py-2 rounded-full inline-block">
                  {error}
                </p>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm mx-auto">
                <input
                  type="text" required placeholder="Your name" value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/7 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
                <input
                  type="email" required placeholder="Email address" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/7 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
                <div className="flex gap-2">
                  <input
                    type="tel" required placeholder="Mobile number" value={mobile}
                    onChange={(e) => setMobile(e.target.value)} maxLength={10}
                    className="flex-1 bg-white/7 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                  <button type="submit" disabled={loading}
                    className="text-sm font-semibold bg-amber-600 text-white px-5 py-2.5 rounded-full hover:bg-amber-500 transition-colors whitespace-nowrap disabled:opacity-60">
                    {loading ? "..." : "Get started →"}
                  </button>
                </div>
              </form>
            </>
          )
        ) : primaryCta ? (
          <Link href={primaryCta.href} className="inline-block text-sm font-semibold bg-amber-600 text-white px-7 py-3 rounded-full hover:bg-amber-500 transition-colors">
            {primaryCta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}