"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [attempted, setAttempted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a short loading delay then show "no account" message
    setTimeout(() => {
      setLoading(false);
      setAttempted(true);
    }, 1000);
  };

  if (attempted) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 pt-14">
        <div className="w-full max-w-md text-center">
          <Link href="/" className="font-display text-2xl font-semibold text-white block mb-8">
            lets<span className="text-amber-400">teach</span>
          </Link>
          <div className="bg-white rounded-2xl p-10">
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
              </svg>
            </div>

            <h2 className="font-display text-2xl font-semibold text-zinc-900 mb-2">
              No account found
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed mb-2">
              We couldn't find an account linked to
            </p>
            <p className="text-sm font-semibold text-zinc-800 mb-4 break-all">{email}</p>
            <p className="text-sm text-zinc-500 leading-relaxed mb-8">
              Looks like you haven't signed up yet. Create a free account to get started — it only takes a minute.
            </p>

            <Link
              href="/signup"
              className="block w-full text-center text-sm font-semibold bg-amber-600 text-white py-3 rounded-full hover:bg-amber-500 transition-colors mb-3"
            >
              Create a free account →
            </Link>

            <button
              onClick={() => { setAttempted(false); setPassword(""); }}
              className="block w-full text-center text-sm text-zinc-400 hover:text-zinc-700 transition-colors py-2"
            >
              Try a different email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 pt-14">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-display text-2xl font-semibold text-white">
            lets<span className="text-amber-400">teach</span>
          </Link>
          <p className="text-zinc-500 text-sm mt-2">Welcome back</p>
        </div>

        <div className="bg-white rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-zinc-700">Password</label>
                <Link href="#" className="text-xs text-amber-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 text-white text-sm font-semibold py-3 rounded-full hover:bg-amber-500 transition-colors disabled:opacity-60"
            >
              {loading ? "Checking..." : "Sign in →"}
            </button>
          </form>

          <p className="text-center text-sm text-zinc-500 mt-5">
            Don't have an account?{" "}
            <Link href="/signup" className="text-amber-600 font-semibold hover:underline">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}