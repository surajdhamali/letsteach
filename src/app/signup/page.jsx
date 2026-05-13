"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [role, setRole]         = useState("learner");
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

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
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 text-sm font-medium py-2 rounded-full transition-all capitalize ${
                  role === r ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                I want to {r === "learner" ? "learn" : "teach"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Full name</label>
              <input
                type="text" required value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Email address</label>
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Password</label>
              <input
                type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 8 characters"
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <button
              type="submit" disabled={loading}
              className="w-full bg-amber-600 text-white text-sm font-semibold py-3 rounded-full hover:bg-amber-500 transition-colors disabled:opacity-60"
            >
              {loading ? "Creating account..." : `Create ${role} account →`}
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