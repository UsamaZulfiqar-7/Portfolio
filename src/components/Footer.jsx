import { personalInfo, socialLinks } from "../data/config";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo/Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-xs font-black shadow-lg">
              UZ
            </div>
            <span className="font-black text-white text-sm tracking-wide">
              USAMA<span className="text-blue-400">.</span>DEV
            </span>
          </div>
          <span className="text-gray-500 text-xs">
            Crafting elegance with React & Data Analytics.
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {[
            { icon: <Github className="w-5 h-5" />, href: socialLinks.github, label: "GitHub" },
            { icon: <Linkedin className="w-5 h-5" />, href: socialLinks.linkedin, label: "LinkedIn" },
            { icon: <Mail className="w-5 h-5" />, href: socialLinks.gmail, label: "Gmail" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Gmail" ? "_blank" : undefined}
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gray-800 border border-gray-850 hover:border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-250 shadow-md"
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-blue-500 hover:text-white border border-gray-850 hover:border-blue-400 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-105 shadow-md group"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
          </button>
          
          <span className="text-gray-500 text-xs text-center md:text-right">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
