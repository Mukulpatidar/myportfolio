"use client";

import { motion } from "framer-motion";
import { Code2, Layers, GraduationCap, Award, CheckCircle2, ExternalLink } from "lucide-react";
import { achievements } from "@/data/achievements";

const achievementIcons = {
  Code2: Code2,
  Layers: Layers,
  GraduationCap: GraduationCap,
  Award: Award,
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-neutral-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <span>08 //</span>
            <span className="uppercase tracking-widest">KEY MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engineering Achievements
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Measurable accomplishments and formal recognitions validated strictly
            by academic and project milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const Icon =
              achievementIcons[item.icon as keyof typeof achievementIcons] || Code2;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 sm:p-7 backdrop-blur-md hover:border-emerald-500/30 hover:bg-neutral-900/70 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400 tracking-tight">
                        {item.metric}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs font-mono text-neutral-400">
                        {item.source}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5">
                    {item.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2 text-xs text-neutral-400 leading-relaxed"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {item.linkUrl && (
                    <div className="mt-4 pt-3 border-t border-white/5">
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors font-medium group/link"
                      >
                        <span>{item.linkLabel || "View LeetCode Profile ↗"}</span>
                        <ExternalLink className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>{item.category}</span>
                  <span className="text-emerald-400/80">verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

