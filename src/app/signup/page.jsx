"use client";

import { useState } from "react";
import Link from "next/link";
import { useFormSubmit } from "@/lib/useFormSubmit";

export default function SignupPage() {
  const [role, setRole]         = useState("learner");
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [mobile, setMobile]     = useState("");
  const [password, setPassword] = useState("");

  const { loading, success, error, submitForm } = useFormSubmit();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({
      name,
      email,
      mobile,
      company:   "",
      subject:   `Signup — ${role === "learner" ? "Learner" : "Instructor"}`,
      query:     `New ${role} account registration on letsteach.com`,
      form_name: `Signup Form — ${role === "learner" ? "Learner" : "Instructor"}`,  // ← identifies this form
    });
  };

  if (success) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 pt-14">
        <div className="w-full max-w-md text-center">
          <Link href="/" className="font-display text-2xl font-semibold text-white block mb-8">
            lets<span className="text-amber-400">teach</span>
          </Link>
          <div className="bg-white rounded-2xl p-10">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-semibold text-zinc-900 mb-2">You're on the list!</h2>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Our team will connect with you shortly to get your account set up.
            </p>
            <Link href="/" className="inline-block text-sm font-semibold bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-500 transition-colors">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 pt-14 pb-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-display text-2xl font-semibold text-white">
            lets<span className="text-amber-400">teach</span>
          </Link>
          <p className="text-zinc-500 text-sm mt-2">Create your free account</p>
        </div>

        <div className="bg-white rounded-2xl p-8">
          {/* Role toggle */}
          <div className="flex gap-2 mb-6 bg-zinc-100 p-1 rounded-full">
            {["learner", "instructor"].map((r) => (
              <button key={r} onClick={() => setRole(r)}
                className={`flex-1 text-sm font-medium py-2 rounded-full transition-all capitalize ${role === r ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"}`}>
                I want to {r === "learner" ? "learn" : "teach"}
              </button>
            ))}
          </div>

          {error && (
            <div className="mb-5 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Full name *</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Email address *</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Mobile number *</label>
              <input type="tel" required value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="10-digit number" maxLength={10}
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Password *</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min. 8 characters"
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-amber-600 text-white text-sm font-semibold py-3 rounded-full hover:bg-amber-500 transition-colors disabled:opacity-60">
              {loading ? "Submitting..." : `Create ${role} account →`}
            </button>
          </form>

          <p className="text-center text-xs text-zinc-400 mt-4">
            By signing up you agree to our{" "}
            <Link href="/terms" className="underline">Terms</Link> and{" "}
            <Link href="/privacy" className="underline">Privacy Policy</Link>
          </p>
          <p className="text-center text-sm text-zinc-500 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-600 font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}