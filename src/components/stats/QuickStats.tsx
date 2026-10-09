"use client";

import { motion } from "framer-motion";
import { Code2, Layers, GraduationCap, Briefcase, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const icons = [Code2, Layers, GraduationCap, Briefcase];

export function QuickStats() {
  return (
    <section className="relative py-12 border-y border-white/10 bg-neutral-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {personalInfo.stats.map((stat, idx) => {
            const Icon = icons[idx] || Code2;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col p-4 sm:p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors">
                    {stat.value}
                  </span>
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="text-sm font-semibold text-neutral-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-400 leading-snug">
                  {stat.description}
                </div>
                {stat.linkUrl && (
                  <div className="mt-2.5 pt-2 border-t border-white/5">
                    <a
                      href={stat.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors font-medium group/statlink"
                    >
                      <span>{stat.linkLabel || "View LeetCode Profile ↗"}</span>
                      <ExternalLink className="h-3 w-3 transition-transform group-hover/statlink:translate-x-0.5 group-hover/statlink:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

