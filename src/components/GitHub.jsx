import { useRef } from "react";
import { githubUsername, socialLinks } from "../data/config";
import { useInView } from "../hooks/useInView";
import { GitPullRequest, GitFork, Star, Github } from "lucide-react";

export default function GitHub() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);

  const gitStats = [
    { label: "Total Contributions", value: "850+", icon: <GitPullRequest className="w-5 h-5 text-emerald-400" /> },
    { label: "Public Repositories", value: "20+", icon: <Github className="w-5 h-5 text-blue-400" /> },
    { label: "Starred Repos", value: "45+", icon: <Star className="w-5 h-5 text-yellow-400" /> },
    { label: "Total Forks Received", value: "8+", icon: <GitFork className="w-5 h-5 text-purple-400" /> },
  ];

  return (
    <section id="github" ref={ref} className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-5 bg-violet-600 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3 block">My Contributions</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            GitHub <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Activity</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left profile info card */}
          <div className={`p-8 rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 p-1 mb-4 shadow-xl">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-black text-white">
                  🐙
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">@{githubUsername}</h3>
              <p className="text-gray-400 text-xs mb-6">Open Source Enthusiast</p>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Active contributor in modern web platforms and machine learning frameworks. Sharing code is my philosophy.
              </p>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-850 hover:bg-gray-800 border border-gray-700 hover:border-blue-500/50 text-white text-sm font-semibold rounded-xl transition-all hover:scale-105 duration-200"
              >
                <Github className="w-4 h-4" />
                <span>Visit Profile</span>
              </a>
            </div>
          </div>

          {/* Right stats grid */}
          <div className={`lg:col-span-2 grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            {gitStats.map(({ label, value, icon }, i) => (
              <div
                key={label}
                className="p-6 rounded-2xl bg-gray-800/25 border border-gray-700/40 hover:border-blue-500/30 hover:bg-gray-800/40 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-md">
                  {icon}
                </div>
                <div>
                  <div className="text-2xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {value}
                  </div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              </div>
            ))}

            {/* Custom contribution calendar mockup */}
            <div className="sm:col-span-2 p-6 rounded-2xl bg-gray-800/25 border border-gray-700/40">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contributions Grid</span>
                <span className="flex items-center gap-1.5 text-xs text-green-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  Live Coding Active
                </span>
              </div>
              
              {/* Contribution matrix blocks */}
              <div className="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-1.5">
                {[...Array(96)].map((_, i) => {
                  const colors = ["bg-gray-800", "bg-green-900/40", "bg-green-700/60", "bg-green-500/80", "bg-green-400"];
                  const colIdx = Math.floor(Math.random() * colors.length);
                  return (
                    <div
                      key={i}
                      className={`h-2.5 rounded-sm ${colors[colIdx]} transition-colors hover:bg-white cursor-pointer`}
                      title={`${colIdx * 2} commits`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
