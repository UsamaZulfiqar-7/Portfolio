import { useState, useEffect } from "react";
import { useRef } from "react";
import { skills } from "../data/config";
import { useInView } from "../hooks/useInView";
function SkillBar({ name, level, icon, inView, delay = 0 }) {
  return (
    <div className="group" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-gray-300 font-medium text-sm">{name}</span>
        </div>
        <span className="text-blue-400 text-xs font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);
  const [activeTab, setActiveTab] = useState("all");
  const tabs = ["all", "frontend", "programming", "data", "tools"];
  const categories = [
    {
      title: "Frontend Development",
      icon: "🌐",
      key: "frontend",
      items: skills.frontend,
    },
    {
      title: "Programming Languages",
      icon: "💻",
      key: "programming",
      items: skills.programming,
    },
    { title: "Database", icon: "🗄️", key: "database", items: skills.database },
    {
      title: "Data Analytics",
      icon: "📊",
      key: "data",
      items: skills.dataAnalytics,
    },
    {
      title: "Tools & Platforms",
      icon: "🔧",
      key: "tools",
      items: skills.tools,
    },
  ];
  const filtered =
    activeTab === "all"
      ? categories
      : categories.filter(
          (c) =>
            c.key === activeTab ||
            (activeTab === "data" && c.key === "database"),
        );
  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 bg-violet-500 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3 block">
            What I Know
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A blend of frontend engineering and data analytics skills,
            continuously growing through real-world projects.
          </p>
        </div>
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-200 ${activeTab === tab ? "bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25" : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`}
            >
              {tab === "all" ? "All Skills" : tab}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((cat, i) => (
            <div
              key={cat.key}
              className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              <div className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-gray-600/60 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center text-xl">
                    {cat.icon}
                  </div>
                  <h3 className="text-white font-bold">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.items.map((skill, j) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      inView={inView}
                      delay={i * 150 + 400 + j * 100}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`mt-16 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-widest">
            Core Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Tailwind CSS",
              "Python",
              "Java",
              "MySQL",
              "MongoDB",
              "Power BI",
              "Excel",
              "Git",
              "GitHub",
              "VS Code",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/60 border border-gray-700/50 text-gray-300 text-sm rounded-xl hover:border-blue-500/40 hover:text-white hover:bg-gray-800 transition-all duration-200 cursor-default hover:-translate-y-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
