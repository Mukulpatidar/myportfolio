"use client";

import { ArrowUp, Terminal, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-neutral-950 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono text-xs">
              <Terminal className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold text-white">Mukul Patidar</div>
              <div className="text-[11px] font-mono text-neutral-400">
                Java Full Stack Developer
              </div>
            </div>
          </div>

          {/* System Status Ping */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 font-mono text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-neutral-300">Open to Java Backend / Spring Boot Roles</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors flex items-center gap-1 text-xs"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-neutral-400 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} Mukul Patidar. Built with Next.js, TypeScript, Tailwind CSS, &amp; Framer Motion.
          </div>
          <div>
            Verified resume-driven portfolio • Pune, Maharashtra
          </div>
        </div>
      </div>
    </footer>
  );
}

