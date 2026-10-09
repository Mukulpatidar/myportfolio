"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { engineeringSteps } from "@/data/engineering";

const stepIcons = [Code2, Database, ShieldCheck, Zap];

export function HowIBuild() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = engineeringSteps[activeStepIndex];

  return (
    <section id="how-i-build" className="py-24 relative bg-neutral-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <span>04 //</span>
            <span className="uppercase tracking-widest">ENGINEERING METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            How I Build
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            A disciplined, systems-first engineering process for transforming product
            requirements into robust, secure, and verifiable Java Spring Boot backend services.
          </p>
        </div>

        {/* 4 Interactive Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {engineeringSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Code2;
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-5 rounded-xl border transition-all relative overflow-hidden group ${
                  isActive
                    ? "border-emerald-500/50 bg-neutral-900 shadow-lg shadow-emerald-500/10"
                    : "border-white/10 bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-white/20"
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeStepLine"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400"
                  />
                )}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xl font-bold text-emerald-400">
                    {step.number}
                  </span>
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-white/5 text-neutral-400 group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {step.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Dive Panel */}
        <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 sm:p-8 backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Side: Detail & Best Practices */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-emerald-400">
                    {activeStep.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {activeStep.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400">
                      {activeStep.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {activeStep.description}
                </p>

                <div>
                  <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2.5">
                    Engineering Practices:
                  </h4>
                  <ul className="space-y-2">
                    {activeStep.practices.map((practice, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2">
                    Tooling & Ecosystem:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeStep.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Sample Implementation Snippet */}
              <div className="lg:col-span-5 rounded-xl border border-white/10 bg-neutral-950 p-4 font-mono text-xs overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-neutral-400 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Implementation Example</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">Java / SQL / Maven</span>
                </div>
                <pre className="text-neutral-300 leading-relaxed overflow-x-auto text-[11px] sm:text-xs">
                  <code>{activeStep.techCodeSnippet}</code>
                </pre>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

