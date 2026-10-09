"use client";

import { motion } from "framer-motion";
import {
  Server,
  ShieldCheck,
  Database,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const corePillars = [
  {
    icon: Server,
    title: "Java & Spring Boot Core",
    description:
      "Architecting clean, layered backend services with Spring Boot, dependency injection, and RESTful APIs.",
  },
  {
    icon: ShieldCheck,
    title: "Stateless Security & RBAC",
    description:
      "Enforcing stateless authentication with JWT tokens, filter chains, and granular role-based authorization.",
  },
  {
    icon: Database,
    title: "MySQL & Database Optimization",
    description:
      "Designing normalized relational schemas (3NF), indexing query filters, and utilizing Hibernate & Spring Data JPA.",
  },
  {
    icon: Cpu,
    title: "Data Structures & Algorithms",
    description:
      "Strong algorithmic discipline with 200+ LeetCode problems solved in Java focusing on optimal time-space complexity.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <span>01 //</span>
            <span className="uppercase tracking-widest">ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Building with Java. <br className="hidden sm:block" />
            <span className="text-emerald-400">Thinking in systems.</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Focused on crafting robust, maintainable backend architectures and
            database-driven applications that prioritize correctness, security,
            and query performance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-neutral-300 text-base leading-relaxed"
          >
            <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm space-y-4">
              <p>
                I am a <strong className="text-white">Java Full Stack Developer</strong> pursuing
                my <strong className="text-white">B.Tech in Computer Science and Engineering</strong> at{" "}
                <span className="text-emerald-300">IES IPS Academy, Indore</span> (2022 – 2026, CGPA 7.7).
                My core engineering drive centers on backend systems, RESTful API design, and relational database integrity.
              </p>

              <p>
                My technical foundation is built on modern <strong className="text-white">Java</strong> and
                the <strong className="text-white">Spring Boot</strong> ecosystem. I specialize in
                implementing stateless authentication with <strong className="text-white">JWT</strong>,
                securing endpoints via <strong className="text-white">Spring Security</strong>, and
                managing data persistence through <strong className="text-white">Hibernate</strong> and{" "}
                <strong className="text-white">Spring Data JPA</strong>.
              </p>

              <p>
                In my full-stack projects—such as my <em>Real Estate Management Platform</em>, <em>Smart Contact Manager</em>, and <em>Music Streaming Platform</em>—I
                have handled complex domain rules, implemented role-based authorization for distinct personas, Clerk authentication,
                and tuned <strong className="text-white">MySQL</strong> and <strong className="text-white">Redis</strong> caching across datasets of 10,000+ records.
              </p>

              <p>
                I approach problem solving with a solid grounding in <strong className="text-white">Data Structures and Algorithms</strong> (with
                over 200+ LeetCode problems solved in Java), ensuring that every API and data structure choice is backed by reasoned time-and-space complexity analysis.
              </p>
            </div>

            {/* Career Objective / Targeted Roles Callout */}
            <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  Targeted Career Direction
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Actively seeking opportunities as a <span className="text-emerald-400 font-medium">Java Backend Developer</span> or{" "}
                  <span className="text-emerald-400 font-medium">Spring Boot Developer</span> where I can apply my deep skills in REST API
                  architecture, Spring Security, and database optimization to build dependable enterprise systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Technical System Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2 pl-1">
              Engineering Focus Areas
            </div>
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="border-white/10 bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-emerald-500/30 transition-all group">
                    <CardContent className="p-4 sm:p-5 flex items-start gap-3.5">
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

