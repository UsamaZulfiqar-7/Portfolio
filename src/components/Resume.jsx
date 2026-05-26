import { useRef } from "react";
import { personalInfo } from "../data/config";
import { useInView } from "../hooks/useInView";
import { FileText, Download, Briefcase, Sparkles } from "lucide-react";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);
  const keyHighlights = [
    {
      title: "React.js Developer",
      details:
        "Intensive training in modern hooks, standard REST APIs, and client-side structures.",
    },
    {
      title: "Data Analyst Specialist",
      details:
        "Certified in Python analytics (Coursera/Google) and Microsoft Power BI pipelines.",
    },
    {
      title: "Full-Stack Project Work",
      details:
        "Practical MySQL database integrations and modular Node.js backend controllers.",
    },
  ];
  return (
    <section
      id="resume"
      ref={ref}
      className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gray-900/20"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 bg-violet-600 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3 block">
              My Resume
            </span>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">
              Looking for a <br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Professional?
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              I am open to both Frontend Development and Data Analyst
              opportunities. With solid computer science fundamentals,
              full-stack database knowledge, and hands-on coding expertise, I
              can quickly integrate and deliver value to your engineering team.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert("Resume file is currently unavailable."); }}
                download="Usama_Zulfiqar_CV.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-400 hover:to-violet-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:scale-105 duration-200"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="p-4 rounded-xl bg-gray-800/20 border border-gray-700/30 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-black uppercase tracking-widest text-white">
                Qualifications Highlights
              </span>
            </div>
            {keyHighlights.map((hl, i) => (
              <div
                key={hl.title}
                className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:border-gray-600/70 hover:bg-gray-800/60 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-md">
                  <Briefcase className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1.5 group-hover:text-blue-400 transition-colors">
                    {hl.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {hl.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
