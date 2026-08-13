import { useRef, useState } from "react";
import { useInView } from "../hooks/useInView";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from "lucide-react";
import { socialLinks, emailjsConfig } from "../data/config";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, 0.1);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-slate-50 dark:bg-gray-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 bg-blue-500 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            className={`space-y-8 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 group hover:scale-110 transition-transform duration-200">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold mb-1">Email</h3>
                
                 <a href={`mailto:${socialLinks.email}`}
                  className="text-slate-600 dark:text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {socialLinks.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 text-violet-400 group hover:scale-110 transition-transform duration-200">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold mb-1">Phone</h3>
                <p className="text-slate-600 dark:text-gray-400">+92 318 7499173</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 group hover:scale-110 transition-transform duration-200">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold mb-1">Location</h3>
                <p className="text-slate-600 dark:text-gray-400">Pakistan</p>
              </div>
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`space-y-4 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-100/70 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 rounded-xl text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-slate-100/70 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 rounded-xl text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-slate-100/70 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 rounded-xl text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-400 hover:to-violet-500 text-slate-900 dark:text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:scale-105 duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="w-4.5 h-4.5" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-emerald-500 text-sm font-medium justify-center pt-1">
                <CheckCircle className="w-4 h-4" />
                <span>Message sent successfully!</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-sm font-medium justify-center pt-1">
                <XCircle className="w-4 h-4" />
                <span>Something went wrong. Try again.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}