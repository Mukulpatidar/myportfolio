"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { educationList } from "@/data/education";
import { Badge } from "@/components/ui/badge";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <span>06 //</span>
            <span className="uppercase tracking-widest">ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Education
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Academic training in Computer Science Engineering, theoretical
            foundations, algorithms, and mathematics.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-md hover:border-emerald-500/30 hover:bg-neutral-900/70 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <Badge variant="glow" className="font-mono text-xs">
                    {edu.gradeType}: {edu.grade}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-emerald-400 mb-2">
                  {edu.institution}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mb-5 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-neutral-400" />
                    {edu.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-neutral-400" />
                    {edu.location}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {edu.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Verified Academic Record</span>
                <span className="text-emerald-400">Score: {edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

