import { socialLinks, resumeLink } from "./links";

export interface PersonalInfo {
  name: string;
  role: string;
  title: string;
  tagline: string;
  primaryPositioning: string;
  supportingParagraph: string;
  status: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resumeUrl: string;
  stats: {
    value: string;
    label: string;
    description: string;
    highlight?: boolean;
    linkUrl?: string;
    linkLabel?: string;
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Mukul Patidar",
  role: "Java Full Stack Developer",
  title: "Java Full Stack Developer | Spring Boot & Backend Specialist",
  tagline: "Spring Boot • REST APIs • MySQL",
  primaryPositioning: "Building secure, scalable backend systems with Java and Spring Boot.",
  supportingParagraph:
    "Java Full Stack Developer targeting Java Backend / Spring Boot roles, with a web development internship and 3 projects built end-to-end using Spring Boot, Spring Security, JWT, REST APIs, MySQL, and Redis. Solved 200+ DSA problems on LeetCode (Arrays, Trees, Recursion, DP).",
  status: "Open to opportunities",
  location: socialLinks.location,
  email: socialLinks.emailPlain,
  phone: socialLinks.phonePlain,
  github: socialLinks.github,
  linkedin: socialLinks.linkedin,
  leetcode: socialLinks.leetcode,
  resumeUrl: resumeLink.url,
  stats: [
    {
      value: "200+",
      label: "LeetCode Problems",
      description: "Data Structures & Algorithms in Java",
      highlight: true,
      linkUrl: socialLinks.leetcode,
      linkLabel: "View LeetCode Profile ↗",
    },
    {
      value: "3",
      label: "Full-Stack Projects",
      description: "Java/Spring Boot & Modern Web Platforms",
      highlight: true,
    },
    {
      value: "7.7",
      label: "B.Tech CGPA",
      description: "Computer Science Engineering",
    },
    {
      value: "2025",
      label: "Internship Year",
      description: "Web Development @ EncoreSky Technologies",
    },
  ],
};
