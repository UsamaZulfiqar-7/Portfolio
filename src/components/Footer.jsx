import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { socialLinks } from "../data/config";
import { useState, useEffect } from "react";
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", toggleVisibility);
      }
    };
  }, []);
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-white font-bold mb-3">About</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Resources</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#education"
                  className="hover:text-white transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="hover:text-white transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Follow Me</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Legal</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 border-t border-gray-800/30">
          <p className="text-sm mb-4 sm:mb-0">
            © 2024 Usama Zulfiqar. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-110 ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
