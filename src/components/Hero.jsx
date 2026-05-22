import { useState, useEffect } from "react";
import { personalInfo, socialLinks } from "../data/config";

const typingTexts = [
  "Frontend Web Developer",
  "Data Analyst",
  "React.js Developer",
  "Power BI Expert",
  "BSCS Final Year Student",
];

function useTypingEffect(texts, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    let timeout;
    const current = texts[idx];
    if (typing) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
      } else {
        setIdx((i) => (i + 1) % texts.length);
        setTyping(true);
      }
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, typing, idx, texts, speed, pause]);

  return display;
}

function FloatingShape({ style, className }) {
  return <div className={`absolute rounded-full opacity-20 animate-pulse ${className}`} style={style} />;
}

export default function Hero() {
  const typedText = useTypingEffect(typingTexts);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.12) 0%, transparent 50%)" }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {/* Floating orbs */}
      <FloatingShape className="w-64 h-64 bg-blue-500" style={{ top: "15%", left: "5%", animationDuration: "4s" }} />
      <FloatingShape className="w-96 h-96 bg-violet-500" style={{ bottom: "10%", right: "5%", animationDuration: "6s", animationDelay: "1s" }} />
      <FloatingShape className="w-48 h-48 bg-cyan-400" style={{ top: "60%", left: "15%", animationDuration: "5s", animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16 py-16">
        {/* Text */}
        <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Work
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Typing animation */}
          <div className="h-10 flex items-center justify-center lg:justify-start mb-6">
            <span className="text-xl sm:text-2xl text-gray-300 font-light">
              {typedText}
              <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
            <button
              onClick={() => scrollTo("#projects")}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-400 hover:to-violet-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
            >
              View Projects →
            </button>
            <a
              href={personalInfo.resumeLink}
              download
              className="px-6 py-3 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:bg-blue-500/10"
            >
              Download CV ↓
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-6 py-3 border border-gray-600 hover:border-violet-400 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:bg-violet-500/10"
            >
              Contact Me
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <a href={socialLinks.github} target="_blank" rel="noreferrer"
              className="w-11 h-11 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-1 text-xl">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"
              className="w-11 h-11 rounded-xl bg-gray-800 hover:bg-blue-600/20 border border-transparent hover:border-blue-500/30 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={socialLinks.gmail}
              className="w-11 h-11 rounded-xl bg-gray-800 hover:bg-red-500/20 border border-transparent hover:border-red-500/30 flex items-center justify-center text-gray-400 hover:text-red-400 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.908 1.528-1.147C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Developer illustration */}
        <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20 animate-spin"
              style={{ animationDuration: "20s" }} />
            {/* Inner ring */}
            <div className="absolute inset-6 rounded-full border border-violet-500/20 animate-spin"
              style={{ animationDuration: "15s", animationDirection: "reverse" }} />

            {/* Central card */}
            <div className="absolute inset-10 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 flex items-center justify-center shadow-2xl overflow-hidden">
              {/* Code editor mockup */}
              <div className="w-full h-full p-4">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-auto text-xs text-gray-500">portfolio.jsx</div>
                </div>
                <div className="space-y-1.5 text-xs font-mono">
                  <p><span className="text-violet-400">const</span> <span className="text-blue-300">dev</span> = {"{"}</p>
                  <p className="pl-3"><span className="text-green-400">name</span>: <span className="text-orange-300">"Usama"</span>,</p>
                  <p className="pl-3"><span className="text-green-400">role</span>: <span className="text-orange-300">"Full Stack"</span>,</p>
                  <p className="pl-3"><span className="text-green-400">passion</span>: [</p>
                  <p className="pl-6"><span className="text-orange-300">"React"</span>,</p>
                  <p className="pl-6"><span className="text-orange-300">"Python"</span>,</p>
                  <p className="pl-6"><span className="text-orange-300">"Data"</span>,</p>
                  <p className="pl-3">],</p>
                  <p>{"}"}</p>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            {[
              { label: "React", color: "text-cyan-400", pos: "top-4 right-0" },
              { label: "Python", color: "text-yellow-400", pos: "bottom-4 left-0" },
              { label: "Power BI", color: "text-orange-400", pos: "top-1/2 -left-4" },
              { label: "MySQL", color: "text-blue-400", pos: "bottom-16 right-0" },
            ].map(({ label, color, pos }) => (
              <div key={label}
                className={`absolute ${pos} px-3 py-1.5 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg text-xs font-semibold ${color} shadow-lg`}>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-blue-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
