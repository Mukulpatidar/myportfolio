"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Github,
  Layers,
  ExternalLink,
} from "lucide-react";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectCaseStudyModal({
  project,
  isOpen,
  onClose,
}: ProjectCaseStudyModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl border-white/15 bg-neutral-950 p-6 sm:p-8 max-h-[88vh] overflow-y-auto">
        <DialogHeader className="space-y-3 pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="glow" className="font-mono text-[11px]">
              {project.year}
            </Badge>
            <Badge variant="secondary" className="text-[11px]">
              {project.category}
            </Badge>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-neutral-300">
            {project.subtitle}
          </DialogDescription>
        </DialogHeader>

        {/* Modal Body */}
        <div className="space-y-8 pt-4">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                  {m.value}
                </div>
                <div className="text-xs font-medium text-white">{m.label}</div>
                <div className="text-[11px] text-neutral-400 leading-tight">
                  {m.description}
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl border border-white/10 bg-neutral-900/60 space-y-2">
              <h4 className="text-xs font-mono uppercase text-red-400 tracking-wider flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                Problem Context
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-neutral-900/60 space-y-2">
              <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Engineering Solution
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.solutionSummary}
              </p>
            </div>
          </div>

          {/* Architecture Breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-3 flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-emerald-400" />
              System Architecture Layers
            </h4>
            <div className="space-y-2.5">
              {project.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-white/5 bg-white/[0.02] flex flex-col sm:flex-row sm:items-baseline gap-2 text-xs"
                >
                  <span className="font-mono font-semibold text-emerald-400 sm:w-36 shrink-0">
                    {item.layer}:
                  </span>
                  <span className="text-neutral-300 leading-relaxed">
                    {item.details}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              Key Implementation Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono border border-white/10 bg-white/5 text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveDemoUrl && (
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold"
                >
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo ↗
                  </a>
                </Button>
              )}
              {project.githubUrl ? (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View GitHub
                  </a>
                </Button>
              ) : (
                <div className="text-xs text-neutral-400 font-mono italic">
                  * Private enterprise/academic repository — GitHub coming soon
                </div>
              )}
            </div>
            <Button variant="outline" size="sm" onClick={onClose}>
              Close Case Study
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

