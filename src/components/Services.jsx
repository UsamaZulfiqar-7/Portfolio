import { useRef } from "react";
import { services } from "../data/config";
import { useInView } from "../hooks/useInView";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);

  return (
    <section id="services" ref={ref} className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 bg-blue-500 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Service Offerings</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`p-8 rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:border-gray-600/70 hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden group flex flex-col ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Backglow element */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.03] bg-gradient-to-br ${service.gradient} blur-2xl group-hover:opacity-[0.08] transition-opacity duration-300`} />

              {/* Icon widget */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20`}>
                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Custom card border highlight decoration */}
              <div className={`absolute left-0 bottom-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
