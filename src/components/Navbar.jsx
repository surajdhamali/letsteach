"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = isHome
    ? scrolled
      ? "bg-zinc-950/95 backdrop-blur-md border-b border-white/5"
      : "bg-transparent"
    : "bg-white border-b border-zinc-200";

  const linkColor = isHome ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-zinc-900";
  const logoColor = isHome ? "text-white" : "text-zinc-900";
  const signinColor = isHome ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-zinc-900";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`font-display text-xl font-semibold tracking-tight ${logoColor}`}>
          lets<span className="text-amber-500">teach</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname === l.href
                  ? "text-amber-500 font-medium"
                  : linkColor
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className={`text-sm transition-colors ${signinColor}`}>
            Sign in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-semibold bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-500 transition-colors"
          >
            Start free →
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 transition-all ${isHome ? "bg-white" : "bg-zinc-800"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 transition-all ${isHome ? "bg-white" : "bg-zinc-800"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 transition-all ${isHome ? "bg-white" : "bg-zinc-800"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-5 pt-2 flex flex-col gap-4 ${isHome ? "bg-zinc-950 border-t border-white/5" : "bg-white border-t border-zinc-100"}`}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${pathname === l.href ? "text-amber-500" : linkColor}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2 border-t border-white/5">
            <Link href="/login" className={`text-sm ${signinColor}`} onClick={() => setMenuOpen(false)}>Sign in</Link>
            <Link href="/signup" className="text-sm font-semibold bg-amber-600 text-white px-4 py-1.5 rounded-full" onClick={() => setMenuOpen(false)}>
              Start free →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}