"use client";

import { useState } from "react";
import Link from "next/link";

export default function CTABand({
  title = "Start learning.",
  highlight = "For free. Today.",
  sub = "Join 1.2 million learners. No credit card required.",
  showEmailInput = true,
  primaryCta = null,
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-zinc-950 px-6 py-20 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-white/4 pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-3">
          {title}{" "}
          <em className="not-italic text-amber-400">{highlight}</em>
        </h2>
        <p className="text-sm text-zinc-500 mb-8">{sub}</p>

        {showEmailInput ? (
          submitted ? (
            <div className="inline-flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 px-5 py-3 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              You're on the list — check your inbox!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/7 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <button
                type="submit"
                className="text-sm font-semibold bg-amber-600 text-white px-5 py-2.5 rounded-full hover:bg-amber-500 transition-colors whitespace-nowrap"
              >
                Get started →
              </button>
            </form>
          )
        ) : primaryCta ? (
          <Link
            href={primaryCta.href}
            className="inline-block text-sm font-semibold bg-amber-600 text-white px-7 py-3 rounded-full hover:bg-amber-500 transition-colors"
          >
            {primaryCta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}