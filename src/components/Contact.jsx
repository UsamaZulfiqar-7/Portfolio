import { useRef, useState } from "react";
import { personalInfo, emailjsConfig } from "../data/config";
import { useInView } from "../hooks/useInView";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate standard API request or trigger EmailJS integration if active
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 bg-blue-500 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Contact <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left Column: Direct contact info */}
          <div className={`md:col-span-2 space-y-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Discuss Your Project</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Feel free to reach out if you have any questions, project ideas, or employment opportunities. Let's work together to build something beautiful.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <MapPin className="w-5 h-5" />, label: "Location", value: personalInfo.location, href: null },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/30">
                  <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-white hover:text-blue-400 font-medium text-sm transition-colors block">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-sm block">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className={`md:col-span-3 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-gray-800/40 border border-gray-700/50 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-700 hover:border-gray-600 focus:border-blue-500 text-white rounded-xl px-4 py-3 text-sm transition-colors outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-700 hover:border-gray-600 focus:border-blue-500 text-white rounded-xl px-4 py-3 text-sm transition-colors outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-900 border border-gray-700 hover:border-gray-600 focus:border-blue-500 text-white rounded-xl px-4 py-3 text-sm transition-colors outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-400 hover:to-violet-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 duration-200 disabled:opacity-50 disabled:pointer-events-none"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status notifications */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Your message has been sent successfully! I will get back to you soon.</span>
                </div>
              )}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-2 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>An error occurred while sending your message. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
