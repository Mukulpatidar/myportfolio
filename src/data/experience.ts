import { certificateLinks } from "./links";

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  mentor?: string;
  description: string;
  responsibilities: string[];
  skillsGained: string[];
  recognition: string;
  certificateUrl?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "encoresky-internship",
    role: "Web Development Intern",
    company: "EncoreSky Technologies",
    location: "Indore / Hybrid",
    period: "April 2025 – June 2025",
    type: "Internship",
    mentor: "Mr. Ravindra Singh Gautam",
    description:
      "Contributed to real-world web development tasks and practical software engineering workflows under the direct mentorship of Mr. Ravindra Singh Gautam. Developed foundational exposure to production workflows and collaborative software engineering standards.",
    responsibilities: [
      "Contributed to real-world web development tasks under the mentorship of Mr. Ravindra Singh Gautam.",
      "Gained hands-on exposure to production workflows, code reviews, and structured version management.",
      "Collaborated with cross-functional team members and stakeholders to understand feature delivery cycles.",
      "Participated in sprint planning, testing phases, and structured code verification.",
    ],
    skillsGained: [
      "Production Workflows",
      "Git & Version Control",
      "Cross-Functional Collaboration",
      "Code Reviews",
      "Problem Solving",
    ],
    recognition:
      "Recognized for punctuality, regularity, strong work ethic, and rapid ramp-up on software development practices.",
    certificateUrl: certificateLinks.internship,
  },
];

