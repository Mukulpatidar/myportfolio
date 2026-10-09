"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  UserCheck,
  CheckCircle2,
  Award,
  ExternalLink,
} from "lucide-react";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <span>05 //</span>
            <span className="uppercase tracking-widest">EXPERIENCE & JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Hands-on technical exposure to software engineering standards, team
            collaboration, and production workflows verified strictly by resume.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 h-6 w-6 rounded-full border-2 border-emerald-500 bg-neutral-950 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.5)]">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-md hover:border-emerald-500/30 hover:bg-neutral-900/70 transition-all">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-emerald-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="font-mono text-xs flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-emerald-400" />
                      <span>{exp.period}</span>
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {exp.type}
                    </Badge>
                    {exp.certificateUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="h-7 px-3 border-emerald-500/30 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/50 group/cert"
                      >
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-mono font-medium"
                        >
                          <span>View Certificate</span>
                          <ExternalLink className="h-3 w-3 transition-transform group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Mentorship Line */}
                {exp.mentor && (
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 mb-4 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <UserCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Mentorship: {exp.mentor}</span>
                  </div>
                )}

                {/* Overview Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-3">
                    Core Contributions & Exposure:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formal Recognition Card */}
                {exp.recognition && (
                  <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex items-start gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-0.5">
                        Performance Recognition:
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                        {exp.recognition}
                      </p>
                    </div>
                  </div>
                )}

                {/* Gained Skills / Exposure Pills */}
                <div>
                  <div className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2">
                    Competencies Developed:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skillsGained.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

