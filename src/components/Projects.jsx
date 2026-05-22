import { useRef, useState } from "react";
import { projects } from "../data/config";
import { useInView } from "../hooks/useInView";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Development", "Machine Learning", "Data Analytics"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5 bg-blue-500 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3 block">My Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Filter buttons */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, i) => (
            <div
              key={p.id}
              className={`group relative rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:border-gray-600/70 overflow-hidden transition-all duration-500 flex flex-col ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card visual banner / gradient overlay */}
              <div className={`h-48 bg-gradient-to-br ${p.gradient} relative flex items-center justify-center p-6 text-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <span className="text-white/95 font-extrabold text-2xl tracking-wide drop-shadow-md z-10 transition-transform duration-300 group-hover:scale-105">
                  {p.title}
                </span>
                
                {/* Visual grid dots decoration */}
                <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              {/* Description & metadata */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {p.category}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gray-900/60 border border-gray-700/30 text-gray-300 text-xs font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer anchors */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-semibold transition-colors group/link"
                  >
                    <Github className="w-4.5 h-4.5" />
                    <span>Source</span>
                  </a>
                  <a
                    href={p.demo}
                    className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors group/link"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
