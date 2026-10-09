"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  index: number;
}

export function ProjectCard({
  project,
  onOpenCaseStudy,
  index,
}: ProjectCardProps) {
  const [expandedDetails, setExpandedDetails] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md overflow-hidden hover:border-emerald-500/30 hover:bg-neutral-900/70 transition-all duration-300"
    >
      {/* Subtle top edge gradient highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
        {/* Header: Year, Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-emerald-400 font-semibold">
              {project.year}
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              {"//"} {project.category}
            </span>
          </div>
          {project.githubUrl ? (
            <Badge variant="glow" className="text-[11px]">
              Active Repository
            </Badge>
          ) : (
            <span className="text-[11px] font-mono text-neutral-400">
              Private Architecture
            </span>
          )}
        </div>

        {/* Project Title & Subtitle */}
        <div className="mb-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-300 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-neutral-300">
            {project.subtitle}
          </p>
        </div>

        {/* Main Description */}
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Verified Metrics Counter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 p-4 rounded-xl border border-white/5 bg-black/30">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                {metric.value}
              </span>
              <span className="text-xs font-medium text-white">
                {metric.label}
              </span>
              <span className="text-[11px] text-neutral-400">
                {metric.description}
              </span>
            </div>
          ))}
        </div>

        {/* Technology Badges */}
        <div className="mb-6">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2.5">
            Architecture &amp; Technologies:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/10 text-neutral-300 group-hover:border-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expandable Architecture & Highlights (Accessible on all devices) */}
        {expandedDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 pt-4 border-t border-white/10 space-y-4 text-xs"
          >
            <div>
              <div className="font-semibold text-white mb-2 text-xs uppercase font-mono tracking-wider text-emerald-400">
                Core Highlights:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1.5 text-neutral-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Project Card Footer: CTAs & Expand toggle */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="default"
              size="sm"
              onClick={() => onOpenCaseStudy(project)}
              className="group/btn"
            >
              <span>View Case Study</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </Button>

            {project.liveDemoUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-emerald-500/30 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/50"
              >
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo ↗</span>
                </a>
              </Button>
            )}

            {project.githubUrl ? (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                disabled
                className="opacity-50 cursor-not-allowed text-xs font-mono"
              >
                <Github className="h-4 w-4 mr-1" />
                GitHub coming soon
              </Button>
            )}
          </div>

          <button
            onClick={() => setExpandedDetails(!expandedDetails)}
            className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 font-mono transition-colors focus:outline-none"
            aria-expanded={expandedDetails}
          >
            <span>{expandedDetails ? "Less Details" : "Quick Details"}</span>
            {expandedDetails ? (
              <ChevronUp className="h-3.5 w-3.5" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
}

