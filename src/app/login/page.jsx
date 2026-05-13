"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 pt-14">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-display text-2xl font-semibold text-white">lets<span className="text-amber-400">teach</span></Link>
          <p className="text-zinc-500 text-sm mt-2">Welcome back</p>
        </div>

        <div className="bg-white rounded-2xl p-8">
          {/* Social */}
          <div className="space-y-3 mb-6">
            {["Continue with Google", "Continue with GitHub"].map((label) => (
              <button key={label} className="w-full flex items-center justify-center gap-3 text-sm font-medium border border-zinc-200 rounded-full py-2.5 hover:bg-zinc-50 transition-colors">
                <span className="w-4 h-4 rounded-full bg-zinc-200 flex-shrink-0" />{label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-zinc-100" />
            <span className="text-xs text-zinc-400">or continue with email</span>
            <div className="flex-1 h-px bg-zinc-100" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Email address</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-zinc-700">Password</label>
                <Link href="/forgot-password" className="text-xs text-amber-600 hover:underline">Forgot password?</Link>
              </div>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-amber-600 text-white text-sm font-semibold py-3 rounded-full hover:bg-amber-500 transition-colors disabled:opacity-60">
              {loading ? "Signing in..." : "Sign in →"}
            </button>
          </form>

          <p className="text-center text-sm text-zinc-500 mt-5">
            Don't have an account?{" "}
            <Link href="/signup" className="text-amber-600 font-semibold hover:underline">Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}