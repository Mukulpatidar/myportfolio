"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  FolderGit2,
  CheckCircle2,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { githubRepos } from "@/data/github";
import { Button } from "@/components/ui/button";

export function GithubSection() {
  return (
    <section id="github" className="py-24 relative overflow-hidden bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
              <span>09 //</span>
              <span className="uppercase tracking-widest">OPEN SOURCE &amp; CODE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
              Code. Build. Improve.
            </h2>
            <p className="text-neutral-400 max-w-xl text-base leading-relaxed">
              Explore public repositories and source code architectures on GitHub.
            </p>
          </div>

          <Button variant="outline" size="sm" asChild className="shrink-0 border-white/15 hover:border-emerald-500/40">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4 text-emerald-400" />
              <span>Visit @mukulpatidar</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
          </Button>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubRepos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 sm:p-7 backdrop-blur-md hover:border-emerald-500/30 hover:bg-neutral-900/70 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Repository Title Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold group-hover:text-emerald-300 transition-colors">
                    <FolderGit2 className="h-4 w-4 shrink-0" />
                    <span className="break-all">{repo.name}</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
                    aria-label={`Open repository ${repo.name} on GitHub`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Display Name & Short Description */}
                <h3 className="text-base font-bold text-white mb-2">
                  {repo.displayName}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Technology Stack Badges */}
                <div className="mb-5">
                  <div className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider mb-2">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {repo.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/10 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details Bullet Points (2-4 concise bullets) */}
                <div className="mb-6 space-y-2">
                  <div className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">
                    Project Details:
                  </div>
                  <ul className="space-y-1.5">
                    {repo.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Rebalanced Repo Footer (Stars/Forks removed, Language + Actions) */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${repo.languageColor} inline-block`}
                  />
                  <span className="text-neutral-300 font-medium">{repo.language}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {repo.liveDemoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="h-8 px-2.5 border-emerald-500/30 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/50 font-mono text-xs"
                    >
                      <a
                        href={repo.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="h-8 px-2.5 border-white/10 hover:border-white/20 font-mono text-xs text-neutral-200"
                  >
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Code</span>
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
