"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, Terminal, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "How I Build", href: "#how-i-build" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = navItems
        .map((item) => item.href.replace("#", ""))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-neutral-950/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Mukul Patidar - Home"
          >
            <div className="h-9 w-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all">
              <Terminal className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Mukul Patidar
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                Java Full Stack Dev
              </span>
            </div>
          </Link>

          {/* Status Indicator Badge (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to opportunities</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 bg-neutral-900/60 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Resume & GitHub */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="text-xs font-medium"
            >
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown className="h-3.5 w-3.5 mr-1 text-emerald-400" />
                Resume ↗
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-neutral-900/80 border border-white/10 text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-white/10 bg-neutral-950/95 backdrop-blur-xl px-4 py-5 shadow-2xl"
          >
            {/* Status in mobile drawer */}
            <div className="flex items-center gap-2 px-3 py-2 mb-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to opportunities • Pune, Maharashtra</span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                        : "text-neutral-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2">
              <Button variant="default" size="sm" asChild className="w-full">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="h-4 w-4 mr-2" />
                  View Resume ↗
                </a>
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 text-xs"
                >
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-3.5 w-3.5 mr-1" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 text-xs"
                >
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-3.5 w-3.5 mr-1" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

