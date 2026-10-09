"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { leetCodeData } from "@/data/leetcode";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function LeetCodeSection() {
  return (
    <section id="dsa" className="py-24 relative bg-neutral-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
              <span>10 //</span>
              <span className="uppercase tracking-widest">DATA STRUCTURES &amp; ALGORITHMS</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Algorithmic Problem Solving
              </h2>
              <Badge variant="glow" className="font-mono text-sm px-3 py-1">
                {leetCodeData.totalSolved} Problems Solved in {leetCodeData.primaryLanguage}
              </Badge>
            </div>
            <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
              {leetCodeData.summary}
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            asChild
            className="shrink-0 border-emerald-500/30 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/50 group/btn font-mono"
          >
            <a
              href={leetCodeData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>
        </div>

        {/* DSA Topic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leetCodeData.topics.map((topic, idx) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-md hover:border-emerald-500/30 hover:bg-neutral-900/70 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">
                    Java Solutions
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                  {topic.name}
                </h3>
                <div className="text-xs font-mono text-emerald-400/90 mb-3">
                  {topic.focus}
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {topic.description}
                </p>

                <div className="space-y-1.5">
                  {topic.keyConcepts.map((concept, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-center gap-1.5 text-[11px] text-neutral-300 font-mono"
                    >
                      <span className="text-emerald-400">▹</span>
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>Time &amp; Space Optimal</span>
                <span className="text-emerald-400">Java 17</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

