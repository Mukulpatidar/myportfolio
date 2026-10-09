import { projectLinks } from "./links";

export interface GitHubRepo {
  name: string;
  displayName: string;
  description: string;
  language: string;
  languageColor: string;
  url: string;
  liveDemoUrl?: string;
  technologies: string[];
  details: string[];
}

export const githubRepos: GitHubRepo[] = [
  {
    name: "real-estate-management-system",
    displayName: "Real Estate Management Platform",
    description:
      "Enterprise property catalog and multi-role transaction platform engineered with Spring Boot, Spring Security, JWT, and MySQL.",
    language: "Java",
    languageColor: "bg-orange-500",
    url: projectLinks.realEstate.github,
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "JWT",
      "MySQL",
      "Redis",
      "REST APIs",
      "Maven",
    ],
    details: [
      "Reduced unauthorized access incidents to zero with JWT authentication and role-based authorization in Spring Security for 3 user roles (admin, agent, buyer).",
      "Improved property search response time by ~35% by optimizing REST APIs with advanced filtering over 10,000+ property records using Spring Data JPA.",
      "Built a responsive UI with Bootstrap, JSP, and JavaScript, reducing page-load complaints during testing by ~40%; configured Maven to cut manual setup time by ~60%.",
    ],
  },
  {
    name: "music-player",
    displayName: "Music Streaming Platform",
    description:
      "Modern full-stack audio streaming application deployed on Vercel with persistent queue state, Clerk authentication, and Cloudinary media delivery.",
    language: "React / Node.js",
    languageColor: "bg-emerald-400",
    url: projectLinks.musicPlayer.github,
    liveDemoUrl: projectLinks.musicPlayer.liveDemo,
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Clerk",
      "Cloudinary",
      "Tailwind CSS",
      "ShadCN UI",
      "Redis",
    ],
    details: [
      "Built and deployed a full-stack music streaming app on Vercel with audio playback, queue management, next/previous controls, and album pages with linked songs.",
      "Integrated Clerk authentication with session tokens, and built an admin-only panel to upload and delete songs and albums using Cloudinary.",
      "Developed Featured, Made for You, and Trending sections using MongoDB $sample aggregation, with a responsive dark UI built on Tailwind CSS and ShadCN.",
    ],
  },
  {
    name: "smart-contact-manager",
    displayName: "Smart Contact Manager",
    description:
      "Secure, scalable contact directory architecture built with Spring Boot, Hibernate ORM, and Spring Security.",
    language: "Java",
    languageColor: "bg-orange-500",
    url: "https://github.com/Mukulpatidar/smart-contact-manager",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "Spring Data JPA",
      "MySQL",
      "Redis",
      "REST APIs",
      "Maven",
    ],
    details: [
      "Secured user data with JWT-based stateless authentication alongside Spring Security, with zero critical security issues across functional testing.",
      "Reduced query execution time by ~30% by replacing raw JDBC with Hibernate ORM and Spring Data JPA, improving retrieval for 5,000+ contacts.",
      "Delivered full CRUD with zero data loss using a normalized MySQL schema and MVC architecture.",
    ],
  },
  {
    name: "whatsapp-chatbot-backend",
    displayName: "WhatsApp Chatbot Backend Service",
    description:
      "Java backend service handling automated messaging webhooks, payload parsing, and asynchronous response dispatch.",
    language: "Java",
    languageColor: "bg-orange-500",
    url: "https://github.com/Mukulpatidar/whatsapp-chatbot-backend",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Webhooks",
      "JSON",
      "Maven",
    ],
    details: [
      "Asynchronous webhook receiver processing incoming WhatsApp conversation events.",
      "Robust JSON payload parsing and dynamic routing based on incoming message intent.",
      "Clean service-layer design decoupling network transport from message dispatch logic.",
    ],
  },
];

