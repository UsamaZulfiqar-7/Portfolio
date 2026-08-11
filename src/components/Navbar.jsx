import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "../App";
const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#education", label: "Journey" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];
export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <nav
      className={`fixed top-3 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300`}
    >
      <div
        className={`w-full max-w-6xl flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-slate-200/50 dark:border-gray-700/50 shadow-2xl shadow-slate-200/50 dark:shadow-black/40" : "bg-transparent"}`}
      >
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-sm font-black shadow-lg group-hover:scale-110 transition-transform duration-200">
            UZ
          </div>
          <span className="font-black text-slate-900 dark:text-white text-sm tracking-wide hidden sm:block">
            USAMA<span className="text-blue-400">.</span>DEV
          </span>
        </button>
        <ul className="hidden lg:flex items-center gap-1 relative">
          {links.map(({ href, label }) => (
            <li key={href} className="relative">
              {active === href.slice(1) && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-500/10 dark:bg-gray-800 rounded-lg"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <button
                onClick={() => scrollTo(href)}
                className={`relative z-10 px-3 py-1.5 text-sm rounded-lg font-medium transition-all duration-200 ${active === href.slice(1) ? "text-blue-500 dark:text-white" : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-lg transition-all duration-200 hover:scale-110"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-400 hover:to-violet-500 text-slate-900 dark:text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Hire Me
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden w-9 h-9 rounded-lg bg-slate-100 dark:bg-gray-800 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block w-5 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden absolute top-full mt-2 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-slate-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="p-3 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className="w-full text-left px-4 py-2.5 text-sm text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
