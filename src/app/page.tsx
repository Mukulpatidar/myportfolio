import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { QuickStats } from "@/components/stats/QuickStats";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { HowIBuild } from "@/components/engineering/HowIBuild";
import { Experience } from "@/components/experience/Experience";
import { Education } from "@/components/education/Education";
import { Certification } from "@/components/certification/Certification";
import { Achievements } from "@/components/achievements/Achievements";
import { GithubSection } from "@/components/github/GithubSection";
import { LeetCodeSection } from "@/components/leetcode/LeetCodeSection";
import { ResumeSection } from "@/components/resume/ResumeSection";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <QuickStats />
        <About />
        <Skills />
        <Projects />
        <HowIBuild />
        <Experience />
        <Education />
        <Certification />
        <Achievements />
        <GithubSection />
        <LeetCodeSection />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

