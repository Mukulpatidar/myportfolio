"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck, BookOpen, ExternalLink, UserCheck } from "lucide-react";
import { certifications } from "@/data/certification";
import { Button } from "@/components/ui/button";

export function Certification() {
  return (
    <section id="certification" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <span>07 //</span>
            <span className="uppercase tracking-widest">TECHNICAL CERTIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Professional Certification
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Verified comprehensive training in modern Java architecture, concurrency,
            functional programming, and object-oriented design patterns.
          </p>
        </div>

        {/* Certificate Card — Enlarged & Prominent */}
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-neutral-950 p-8 sm:p-10 lg:p-12 backdrop-blur-xl overflow-hidden max-w-5xl shadow-2xl hover:border-emerald-500/50 transition-all group"
          >
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Top Right Issuer Pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{cert.issuer}</span>
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
                  {cert.badge}
                </span>
              </div>

              {cert.certificateUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-emerald-500/40 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-400 group/btn shadow-md shadow-emerald-500/10"
                >
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs font-semibold"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </Button>
              )}
            </div>

            {/* Core Header Content */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <Award className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {cert.version}
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-xs font-mono text-neutral-300">
                    {cert.status}
                  </span>
                  {cert.instructor && (
                    <>
                      <span className="text-neutral-600">•</span>
                      <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                        <UserCheck className="h-3 w-3 text-emerald-400" />
                        Instructor: {cert.instructor}
                      </span>
                    </>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {cert.description}
                </p>
              </div>
            </div>

            {/* Covered Topics */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-400" />
                Verified Syllabus &amp; Core Competencies:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cert.topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-neutral-200 hover:border-emerald-500/30 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

