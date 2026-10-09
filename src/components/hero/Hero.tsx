"use client";

import { motion } from "framer-motion";
import {
  FileDown,
  ArrowRight,
  MapPin,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroTerminal } from "./HeroTerminal";

export function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Meta Row: Status & Location */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge
                variant="glow"
                className="py-1 px-3 text-xs font-medium flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personalInfo.status}</span>
              </Badge>

              <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 px-3 py-1 rounded-full bg-neutral-900/60 border border-white/10">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Engineer Name & Subtitle */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-3">
              MUKUL <span className="text-emerald-400">PATIDAR</span>
            </h1>

            <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-neutral-300 mb-4 font-mono">
              <span className="text-emerald-400">Java Full Stack Developer</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400 text-base sm:text-lg font-normal">
                {personalInfo.tagline}
              </span>
            </div>

            {/* Primary Positioning Statement */}
            <div className="text-xl sm:text-2xl font-medium text-white/95 leading-relaxed mb-4 max-w-2xl border-l-2 border-emerald-500/50 pl-4 py-0.5">
              &ldquo;{personalInfo.primaryPositioning}&rdquo;
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base text-neutral-400 leading-relaxed max-w-2xl mb-8">
              {personalInfo.supportingParagraph}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <Button
                variant="default"
                size="lg"
                onClick={() => handleScrollTo("projects")}
                className="group w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto border-white/15 hover:border-emerald-500/40"
              >
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="h-4 w-4 mr-2 text-emerald-400" />
                  View Resume ↗
                </a>
              </Button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 w-full text-xs text-neutral-400">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4 text-neutral-400" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4 text-neutral-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                aria-label="Email Mukul Patidar"
              >
                <Mail className="h-4 w-4 text-neutral-400" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                aria-label="Call Mukul Patidar"
              >
                <Phone className="h-4 w-4 text-neutral-400" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Hero Right Visual: Developer Identity Terminal */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <HeroTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

