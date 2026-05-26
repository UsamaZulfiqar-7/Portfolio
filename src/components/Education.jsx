import { useRef } from "react";
import { education } from "../data/config";
import { useInView } from "../hooks/useInView";
import { Award, GraduationCap } from "lucide-react";
export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);
  const academicList = education.filter((e) => e.type === "education");
  const certificationList = education.filter((e) => e.type === "certification");
  return (
    <section
      id="education"
      ref={ref}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-5 bg-blue-500 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3 block">
            My Credentials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Academic Qualifications
              </h3>
            </div>
            <div className="relative pl-6 border-l border-gray-800 space-y-12">
              {academicList.map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gray-900 border-2 border-blue-500 group-hover:scale-125 transition-transform duration-200" />
                  <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold rounded-lg mb-3">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {item.degree}
                  </h4>
                  <div className="text-gray-400 text-sm font-semibold mb-3">
                    {item.institution}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Certifications & Training
              </h3>
            </div>
            <div className="relative pl-6 border-l border-gray-800 space-y-12">
              {certificationList.map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gray-900 border-2 border-violet-500 group-hover:scale-125 transition-transform duration-200" />
                  <span className="inline-block px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold rounded-lg mb-3">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">
                    {item.degree}
                  </h4>
                  <div className="text-gray-400 text-sm font-semibold mb-3">
                    {item.institution}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
