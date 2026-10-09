"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-neutral-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header Tag */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400">
            <span>11 //</span>
            <span className="uppercase tracking-widest">GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Let&apos;s build something <span className="text-emerald-400">useful.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            I&apos;m open to <span className="text-white font-medium">Java Backend Developer</span> and{" "}
            <span className="text-white font-medium">Spring Boot Developer</span> opportunities.
            Whether you have an open position or want to discuss backend architecture, my inbox is open.
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-left">
            {/* Email Card */}
            <div className="p-5 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-md flex flex-col justify-between group hover:border-emerald-500/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="text-xs font-mono text-neutral-400 mb-1">EMAIL</div>
                <div className="text-sm font-semibold text-white break-all">
                  {personalInfo.email}
                </div>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-4 text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>Compose email</span>
                <Send className="h-3 w-3" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-md flex flex-col justify-between group hover:border-emerald-500/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <button
                    onClick={copyPhone}
                    className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="text-xs font-mono text-neutral-400 mb-1">PHONE</div>
                <div className="text-sm font-semibold text-white">
                  {personalInfo.phone}
                </div>
              </div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="mt-4 text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>Direct call</span>
                <Phone className="h-3 w-3" />
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-md flex flex-col justify-between group hover:border-purple-500/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">
                    ● Available
                  </span>
                </div>
                <div className="text-xs font-mono text-neutral-400 mb-1">LOCATION</div>
                <div className="text-sm font-semibold text-white">
                  {personalInfo.location}
                </div>
              </div>
              <div className="mt-4 text-xs font-mono text-neutral-400">
                Open to Relocation / Hybrid
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              asChild
              className="text-neutral-950 font-bold shadow-lg shadow-emerald-500/20"
            >
              <a href={`mailto:${personalInfo.email}`}>
                <Send className="h-4 w-4 mr-2" />
                Send Email
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/15 hover:border-emerald-500/40"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 mr-2 text-blue-400" />
                LinkedIn Profile
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/15 hover:border-emerald-500/40"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

