import { socialLinks } from "./links";

export interface AchievementItem {
  id: string;
  metric: string;
  title: string;
  category: string;
  source: string;
  description: string;
  details: string[];
  icon: string;
  linkUrl?: string;
  linkLabel?: string;
}

export const achievements: AchievementItem[] = [
  {
    id: "leetcode-problems",
    metric: "200+",
    title: "LeetCode Problems Solved",
    category: "Algorithmic Problem Solving",
    source: "LeetCode",
    description: "Consistent practice mastering data structures, algorithms, and optimal time-space complexity tradeoffs.",
    details: [
      "Mastery of core Java data structures (HashMaps, PriorityQueues, Deques)",
      "Algorithms in Arrays, Binary Trees, Recursion, and Dynamic Programming",
      "Focus on clean code, optimal runtime analysis, and edge case mitigation",
    ],
    icon: "Code2",
    linkUrl: socialLinks.leetcode,
    linkLabel: "View LeetCode Profile ↗",
  },
  {
    id: "java-projects",
    metric: "3",
    title: "Full-Stack Web & Backend Projects",
    category: "Engineering Architecture",
    source: "Portfolio Engineering",
    description: "Architected end-to-end full stack web platforms with Spring Boot, Java, React, Redux, and MySQL/MongoDB.",
    details: [
      "Real Estate Management Platform with 3-tier RBAC and 10,000+ records",
      "Full-Stack Music Streaming Platform with Clerk Auth, Redux, and Cloudinary",
      "Smart Contact Manager with 3NF database schema and 5,000+ records",
    ],
    icon: "Layers",
  },
  {
    id: "academic-cgpa",
    metric: "7.7",
    title: "B.Tech CGPA",
    category: "Academic Excellence",
    source: "IES IPS Academy, Indore",
    description: "Consistent academic performance in Computer Science Engineering curriculum.",
    details: [
      "Special focus on Systems Engineering, DBMS, and Object-Oriented Programming",
      "Active engagement in hands-on coding and lab implementations",
    ],
    icon: "GraduationCap",
  },
  {
    id: "internship-recognition",
    metric: "Recognition",
    title: "Internship Work Ethic Recognition",
    category: "Professional Execution",
    source: "EncoreSky Technologies",
    description: "Formally recognized for punctuality, regularity, fast learning pace, and dependable contributions.",
    details: [
      "Mentored by Mr. Ravindra Singh Gautam on real-world development tasks",
      "Quickly integrated into collaborative workflows and team deliverables",
    ],
    icon: "Award",
  },
];

