"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Copy, Check, Sparkles, Play } from "lucide-react";

interface TerminalCommand {
  cmd: string;
  label: string;
  output: {
    key?: string;
    val: string;
    color?: string;
  }[];
}

const commands: Record<string, TerminalCommand> = {
  whoami: {
    cmd: "whoami",
    label: "whoami",
    output: [
      { key: "engineer", val: "Mukul Patidar", color: "text-white font-semibold" },
      { key: "role", val: "Java Full Stack Developer", color: "text-emerald-400" },
      { key: "focus", val: "Spring Boot • REST APIs • MySQL", color: "text-neutral-300" },
      { key: "location", val: "Pune, Maharashtra, India", color: "text-neutral-400" },
      { key: "education", val: "B.Tech CSE (IES IPS Academy, Indore)", color: "text-neutral-400" },
    ],
  },
  stack: {
    cmd: "stack --verified",
    label: "stack",
    output: [
      { key: "language", val: "Java (11 / 17), C++, SQL", color: "text-amber-400" },
      { key: "frameworks", val: "Spring Boot, Spring Security, Spring Data JPA", color: "text-emerald-400" },
      { key: "orm_db", val: "Hibernate, MySQL (Indexed 3NF schemas)", color: "text-cyan-400" },
      { key: "auth", val: "Stateless JWT, Role-Based Access Control", color: "text-purple-400" },
      { key: "build_tools", val: "Maven, Git, Postman, IntelliJ IDEA", color: "text-neutral-300" },
    ],
  },
  status: {
    cmd: "systemctl status career",
    label: "status",
    output: [
      { key: "state", val: "ACTIVE (Open to opportunities)", color: "text-emerald-400 font-semibold" },
      { key: "target_roles", val: "Java Backend Developer / Spring Boot Developer", color: "text-white" },
      { key: "readiness", val: "Ready for immediate hiring & technical interviews", color: "text-neutral-300" },
      { key: "dsa_solved", val: "200+ LeetCode problems (Arrays, Trees, DP)", color: "text-cyan-400" },
      { key: "projects", val: "3 full-stack production-style web platforms", color: "text-emerald-300" },
    ],
  },
  architecture: {
    cmd: "cat /etc/backend/architecture.json",
    label: "architecture",
    output: [
      { key: "layer_1", val: "Stateless Security Filter (JWT + Spring Security)", color: "text-purple-400" },
      { key: "layer_2", val: "REST Controller with DTO validation", color: "text-cyan-400" },
      { key: "layer_3", val: "Service Layer with @Transactional boundaries", color: "text-emerald-400" },
      { key: "layer_4", val: "Spring Data JPA Repositories & JPQL tuning", color: "text-amber-400" },
      { key: "layer_5", val: "MySQL Relational Engine (35% query latency gain)", color: "text-blue-400" },
    ],
  },
};

export function HeroTerminal() {
  const [activeTab, setActiveTab] = useState<string>("whoami");
  const [copied, setCopied] = useState(false);

  const activeCmd = commands[activeTab];

  const handleCopy = () => {
    const textToCopy = `$ ${activeCmd.cmd}\n` +
      activeCmd.output
        .map((line) => (line.key ? `${line.key}: ${line.val}` : line.val))
        .join("\n");
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Glow Backdrop */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-transparent blur-xl opacity-75" />

      {/* Terminal Container */}
      <div className="relative rounded-xl border border-white/10 bg-neutral-950/90 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs sm:text-sm">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/90 border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-[11px] text-neutral-400 flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-neutral-400" />
              mukul@developer: ~/workspace
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-1 rounded text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Copy terminal output"
              aria-label="Copy terminal text"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Quick Command Navigation Tabs */}
        <div className="flex items-center gap-1 px-3 py-2 bg-neutral-900/40 border-b border-white/5 overflow-x-auto text-[11px]">
          <span className="text-neutral-400 mr-1 select-none flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-emerald-400" /> Exec:
          </span>
          {Object.entries(commands).map(([key, cmd]) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 whitespace-nowrap ${
                  isActive
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5 border border-transparent"
                }`}
              >
                <Play className="h-2.5 w-2.5 opacity-60" />
                <span>${cmd.label}</span>
              </button>
            );
          })}
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-5 min-h-[260px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {/* Command Prompt Line */}
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="text-emerald-400 font-semibold select-none">➜</span>
                <span className="text-cyan-400 select-none">~/backend</span>
                <span className="text-neutral-300 font-medium">$ {activeCmd.cmd}</span>
              </div>

              {/* Output Content */}
              <div className="pt-2 pl-3 border-l-2 border-emerald-500/30 space-y-2">
                {activeCmd.output.map((line, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 leading-relaxed"
                  >
                    {line.key && (
                      <span className="text-neutral-400 text-xs sm:w-28 flex-shrink-0 select-none font-mono">
                        {line.key}:
                      </span>
                    )}
                    <span className={`text-xs sm:text-sm ${line.color || "text-neutral-200"}`}>
                      {line.val}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Terminal Input Prompt Footer */}
          <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-neutral-400 text-[11px] select-none">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">●</span>
              <span>Java 17 • Spring Boot 3 • MySQL 8</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-400 font-mono">
              <span>status: 200 OK</span>
              <span className="inline-block w-2 h-3.5 bg-emerald-400 animate-pulse-subtle ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

