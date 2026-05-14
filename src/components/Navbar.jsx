"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Palette, BarChart2, Megaphone, ClipboardList, LayoutGrid, ChevronDown, X, Menu,
} from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Courses", href: "/courses", mega: true,
    cols: [
      {
        heading: "By topic",
        links: [
          { label: "Engineering",  href: "/courses?category=Engineering",  desc: "98 courses", icon: <Code2 className="w-4 h-4" /> },
          { label: "Design & UX",  href: "/courses?category=Design",       desc: "42 courses", icon: <Palette className="w-4 h-4" /> },
          { label: "Data Science", href: "/courses?category=Data+Science", desc: "34 courses", icon: <BarChart2 className="w-4 h-4" /> },
          { label: "Marketing",    href: "/courses?category=Marketing",    desc: "28 courses", icon: <Megaphone className="w-4 h-4" /> },
          { label: "Product",      href: "/courses?category=Product",      desc: "19 courses", icon: <ClipboardList className="w-4 h-4" /> },
        ],
      },
      {
        heading: "Popular right now",
        links: [
          { label: "React.js for Beginners",       href: "/courses/react-for-beginners",         badge: "Bestseller" },
          { label: "System Design for Engineers",  href: "/courses/system-design-for-engineers", badge: "Advanced"   },
          { label: "UI/UX: Figma to Portfolio",    href: "/courses/uiux-design-zero-to-job",     badge: "New"        },
          { label: "Python for Data Analysis",     href: "/courses/python-data-analysis",        badge: null         },
        ],
      },
    ],
    cta: { label: "Browse all 480+ courses →", href: "/courses" },
  },
  { label: "Teach",     href: "/teach"   },
  { label: "For Teams", href: "/teams"   },
  { label: "Pricing",   href: "/pricing" },
  { label: "Blog",      href: "/blog"    },
];

const BADGE_COLORS = {
  Bestseller: "bg-amber-100 text-amber-700",
  Advanced:   "bg-violet-100 text-violet-700",
  New:        "bg-emerald-100 text-emerald-700",
};

const MOBILE_COURSE_LINKS = [
  { label: "All Courses",  href: "/courses",                       icon: <LayoutGrid className="w-4 h-4" /> },
  { label: "Engineering",  href: "/courses?category=Engineering",  icon: <Code2 className="w-4 h-4" /> },
  { label: "Design & UX",  href: "/courses?category=Design",       icon: <Palette className="w-4 h-4" /> },
  { label: "Data Science", href: "/courses?category=Data+Science", icon: <BarChart2 className="w-4 h-4" /> },
  { label: "Marketing",    href: "/courses?category=Marketing",    icon: <Megaphone className="w-4 h-4" /> },
  { label: "Product",      href: "/courses?category=Product",      icon: <ClipboardList className="w-4 h-4" /> },
];

export default function Navbar() {
  const [openMega,          setOpenMega]          = useState(false);
  const [mobileOpen,        setMobileOpen]        = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const pathname  = usePathname();
  const megaRef   = useRef(null);
  const timerRef  = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close everything on route change
  useEffect(() => {
    setOpenMega(false);
    setMobileOpen(false);
    setMobileCoursesOpen(false);
  }, [pathname]);

  // Close mega on outside click
  useEffect(() => {
    const handler = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setOpenMega(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMegaEnter = () => { clearTimeout(timerRef.current); setOpenMega(true); };
  const handleMegaLeave = () => { timerRef.current = setTimeout(() => setOpenMega(false), 120); };

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("?")[0]);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 border-b border-white/8"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-display text-xl font-semibold text-white tracking-tight">
                lets<span className="text-amber-400">teach</span>
              </span>
            </Link>

            {/* Desktop nav — hidden below lg */}
            <nav className="hidden lg:flex items-center gap-1" ref={megaRef}>
              {NAV_ITEMS.map((item) =>
                item.mega ? (
                  <div key={item.label}
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                    className="relative"
                  >
                    <button
                      onClick={() => setOpenMega((v) => !v)}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                        isActive(item.href) || openMega
                          ? "text-white bg-white/10"
                          : "text-zinc-400 hover:text-white hover:bg-white/6"
                      }`}
                    >
                      {item.label}
                      <motion.div animate={{ rotate: openMega ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openMega && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          onMouseEnter={handleMegaEnter}
                          onMouseLeave={handleMegaLeave}
                          className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[560px] bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                        >
                          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                          <div className="grid grid-cols-2">
                            {item.cols.map((col, ci) => (
                              <div key={ci} className={`p-5 ${ci === 0 ? "border-r border-white/6" : ""}`}>
                                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">{col.heading}</p>
                                <ul className="space-y-0.5">
                                  {col.links.map((link) => (
                                    <li key={link.label}>
                                      <Link href={link.href} onClick={() => setOpenMega(false)}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/6 transition-colors"
                                      >
                                        {link.icon && (
                                          <span className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-amber-500/20 group-hover:text-amber-400 transition-colors flex-shrink-0">
                                            {link.icon}
                                          </span>
                                        )}
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">{link.label}</div>
                                          {link.desc && <div className="text-xs text-zinc-600">{link.desc}</div>}
                                        </div>
                                        {link.badge && (
                                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${BADGE_COLORS[link.badge]}`}>
                                            {link.badge}
                                          </span>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="border-t border-white/6 px-5 py-3 bg-white/2">
                            <Link href={item.cta.href} onClick={() => setOpenMega(false)}
                              className="flex items-center justify-between text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors group"
                            >
                              <span>{item.cta.label}</span>
                              <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={item.label} href={item.href}
                    className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive(item.href) ? "text-white bg-white/10" : "text-zinc-400 hover:text-white hover:bg-white/6"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.span layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/10 -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop right actions — hidden below lg */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/login"
                className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/6">
                Sign in
              </Link>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/signup"
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-colors shadow-md shadow-amber-900/30">
                  Get started
                  <span className="text-amber-300 text-xs">→</span>
                </Link>
              </motion.div>
            </div>

            {/* Tablet + mobile right side */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Show sign in on tablet (md) but hide on mobile (sm) */}
              <Link href="/signup"
                className="hidden sm:flex items-center text-xs font-semibold bg-amber-600 text-white px-3.5 py-2 rounded-full hover:bg-amber-500 transition-colors">
                Get started
              </Link>
              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white/8 transition-colors text-white"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* ─── MOBILE / TABLET MENU ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer — full width on mobile, 320px on tablet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-full sm:w-80 bg-zinc-950 border-l border-white/8 flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-14 border-b border-white/8 flex-shrink-0">
                <span className="font-display text-lg font-semibold text-white">
                  lets<span className="text-amber-400">teach</span>
                </span>
                <button onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-3 py-3">

                {/* Courses accordion */}
                <div className="mb-1">
                  <button
                    onClick={() => setMobileCoursesOpen((v) => !v)}
                    className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive("/courses") ? "bg-white/10 text-white" : "text-zinc-300 hover:text-white hover:bg-white/6"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <LayoutGrid className="w-4 h-4 text-zinc-500" />
                      Courses
                    </span>
                    <motion.div animate={{ rotate: mobileCoursesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-4 h-4 opacity-40" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileCoursesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 pt-1 pb-1 space-y-0.5">
                          {MOBILE_COURSE_LINKS.map((link) => (
                            <Link key={link.label} href={link.href}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-white/6 transition-colors"
                            >
                              <span className="text-zinc-500 flex-shrink-0">{link.icon}</span>
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other nav items */}
                {[
                  { label: "Teach",     href: "/teach",   emoji: "◎" },
                  { label: "For Teams", href: "/teams",   emoji: "⬡" },
                  { label: "Pricing",   href: "/pricing", emoji: "◈" },
                  { label: "Blog",      href: "/blog",    emoji: "✦" },
                ].map((item, i) => (
                  <motion.div key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                  >
                    <Link href={item.href}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-colors mb-1 ${
                        isActive(item.href) ? "bg-white/10 text-white" : "text-zinc-300 hover:text-white hover:bg-white/6"
                      }`}
                    >
                      <span className="text-zinc-500 text-sm w-4 flex-shrink-0">{item.emoji}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="border-t border-white/6 my-3" />

                {/* Popular courses quick links */}
                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest px-3 mb-2">Popular courses</p>
                {[
                  { label: "React.js for Beginners",      href: "/courses/react-for-beginners",         badge: "Bestseller" },
                  { label: "System Design for Engineers", href: "/courses/system-design-for-engineers", badge: "Advanced"   },
                  { label: "UI/UX: Figma to Portfolio",   href: "/courses/uiux-design-zero-to-job",     badge: "New"        },
                ].map((c) => (
                  <Link key={c.label} href={c.href}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-white/6 transition-colors mb-0.5"
                  >
                    <span className="truncate pr-2">{c.label}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${BADGE_COLORS[c.badge]}`}>
                      {c.badge}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Bottom CTAs */}
              <div className="px-4 pb-8 pt-3 border-t border-white/8 space-y-2 flex-shrink-0">
                <Link href="/login"
                  className="block w-full text-center py-2.5 text-sm font-medium text-zinc-400 hover:text-white border border-white/10 rounded-full hover:bg-white/6 transition-colors">
                  Sign in
                </Link>
                <Link href="/signup"
                  className="block w-full text-center py-3 text-sm font-semibold bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-colors">
                  Get started →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}