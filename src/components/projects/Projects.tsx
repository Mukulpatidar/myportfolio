"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";

export function Projects() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(
    null
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <span>03 //</span>
            <span className="uppercase tracking-widest">FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Featured Projects &amp; <br className="hidden sm:block" />
            <span className="text-emerald-400">Engineering Case Studies</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Production-grade systems engineered with Spring Boot, Java, React, Clerk Auth,
            stateless JWT security, and optimized database persistence layers.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenCaseStudy={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Dialog Modal */}
      <ProjectCaseStudyModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

