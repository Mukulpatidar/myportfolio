"use client";

import { motion } from "framer-motion";
import { FileDown, ExternalLink, ShieldCheck } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-neutral-950 p-8 sm:p-12 text-center backdrop-blur-xl overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Verified ATS-Friendly Format</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Want the complete picture?
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Download my resume to explore my technical skills, projects,
              experience, and education.
            </p>

            {/* Resume Highlights Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 text-left">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-neutral-400">ROLE</div>
                <div className="text-xs font-semibold text-white">Java Full Stack</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-neutral-400">STACK</div>
                <div className="text-xs font-semibold text-emerald-400">Spring Boot / MySQL</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-neutral-400">DEGREE</div>
                <div className="text-xs font-semibold text-white">B.Tech CSE (7.7 CGPA)</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-neutral-400">LOCATION</div>
                <div className="text-xs font-semibold text-white">Pune, Maharashtra</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                asChild
                className="shadow-lg shadow-emerald-500/20 text-neutral-950 font-bold"
              >
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="h-5 w-5 mr-2" />
                  View Resume ↗
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/15 hover:border-emerald-500/40"
              >
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in Google Drive
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

