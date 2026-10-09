"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cpu,
  Layout,
  Layers,
  GitBranch,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

const categoryIcons = {
  languages: Code2,
  backend: Server,
  database: Database,
  tools: Cpu,
  frontend: Layout,
  devops: GitBranch,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-neutral-950/40">
      {/* Background Subtle Tech Detail */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <span>02 //</span>
            <span className="uppercase tracking-widest">TECHNICAL STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Specialized in Java &amp; <br className="hidden sm:block" />
            <span className="text-emerald-400">Spring Boot Architecture</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Strictly verified technical skills covering modern object-oriented
            programming, secure enterprise REST APIs, relational persistence, and
            computer science fundamentals.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === "all"
                ? "bg-emerald-500 text-neutral-950 font-semibold shadow-md shadow-emerald-500/20"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/10"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>All Categories ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})</span>
          </button>

          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.category] || Code2;
            const isSelected = selectedCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-emerald-500 text-neutral-950 font-semibold shadow-md shadow-emerald-500/20"
                    : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/10"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.title} ({cat.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => {
              const Icon = categoryIcons[cat.category] || Code2;
              return (
                <motion.div
                  key={cat.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-md hover:border-emerald-500/30 hover:bg-neutral-900/80 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Category Title & Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                          {cat.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {cat.skills.length} skills
                      </span>
                    </div>

                    <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-all ${
                            skill.isPrimary
                              ? "bg-white/[0.05] border-emerald-500/30 text-white hover:border-emerald-400 hover:bg-emerald-500/10"
                              : "bg-white/[0.02] border-white/10 text-neutral-300 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          <span className="font-medium">{skill.name}</span>
                          {skill.badge && (
                            <span className="text-[10px] text-neutral-400 font-mono pl-1 border-l border-white/10">
                              {skill.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Micro Footer for Category */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                    <span className="text-emerald-400/80">
                      {cat.category === "backend"
                        ? "Enterprise Core"
                        : cat.category === "database"
                        ? "Relational Engine"
                        : cat.category === "devops"
                        ? "Pipelines & Infra"
                        : "Verified Stack"}
                    </span>
                    <span>resume-verified</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

