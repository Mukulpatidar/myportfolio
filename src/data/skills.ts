export interface SkillCategory {
  title: string;
  category: "languages" | "backend" | "database" | "tools" | "frontend" | "devops";
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    badge?: string;
    isPrimary?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Languages",
    category: "languages",
    description: "Strong foundation in typed object-oriented programming, system languages, and scripting.",
    iconName: "Code2",
    skills: [
      { name: "Java", badge: "Core & Advanced", isPrimary: true },
      { name: "C++", badge: "DSA & Problem Solving", isPrimary: false },
      { name: "C", badge: "Systems Programming", isPrimary: false },
      { name: "SQL", badge: "Relational Queries", isPrimary: true },
      { name: "JavaScript", badge: "ES6+ Web & Full-Stack", isPrimary: true },
    ],
  },
  {
    title: "Backend & Frameworks",
    category: "backend",
    description: "Enterprise backend development with the Spring ecosystem, REST services, and persistence.",
    iconName: "Server",
    skills: [
      { name: "Spring Boot", badge: "Enterprise Microservices", isPrimary: true },
      { name: "Spring Security", badge: "Auth & RBAC", isPrimary: true },
      { name: "Spring Data JPA", badge: "Persistence Layer", isPrimary: true },
      { name: "Hibernate", badge: "ORM Mapping", isPrimary: true },
      { name: "REST APIs", badge: "API Design", isPrimary: true },
      { name: "Microservices", badge: "Architecture", isPrimary: false },
      { name: "JWT", badge: "Stateless Auth", isPrimary: true },
      { name: "MVC Architecture", badge: "Layered Design", isPrimary: false },
      { name: "JDBC", badge: "Low-level DB Access", isPrimary: false },
      { name: "Node.js", badge: "Runtime", isPrimary: false },
      { name: "Express", badge: "REST Framework", isPrimary: false },
    ],
  },
  {
    title: "Database Engineering",
    category: "database",
    description: "Relational, document, and in-memory data modeling, schema indexing, and query performance tuning.",
    iconName: "Database",
    skills: [
      { name: "MySQL", badge: "Primary Relational DB", isPrimary: true },
      { name: "PostgreSQL", badge: "Relational Enterprise DB", isPrimary: true },
      { name: "MongoDB", badge: "Document / NoSQL DB", isPrimary: true },
      { name: "Redis", badge: "In-Memory Caching", isPrimary: true },
      { name: "Query Optimization", badge: "Performance Tuning", isPrimary: true },
      { name: "Normalized Schema Design", badge: "3NF & Integrity", isPrimary: true },
    ],
  },
  {
    title: "Tools & Core Concepts",
    category: "tools",
    description: "Engineering methodologies, version control, build tools, and computer science fundamentals.",
    iconName: "Cpu",
    skills: [
      { name: "Git", badge: "Version Control", isPrimary: true },
      { name: "Maven", badge: "Build & Lifecycle", isPrimary: true },
      { name: "Postman", badge: "API Testing & Docs", isPrimary: true },
      { name: "IntelliJ IDEA", badge: "Primary IDE", isPrimary: false },
      { name: "Eclipse", badge: "Java IDE", isPrimary: false },
      { name: "OOP", badge: "Object-Oriented Design", isPrimary: true },
      { name: "Collections", badge: "Framework", isPrimary: true },
      { name: "Multithreading", badge: "Concurrency", isPrimary: true },
      { name: "DSA", badge: "Algorithms", isPrimary: true },
    ],
  },
  {
    title: "Frontend UI",
    category: "frontend",
    description: "Clean, responsive client interfaces integrated seamlessly with backend endpoints.",
    iconName: "Layout",
    skills: [
      { name: "HTML5", badge: "Semantic Markup", isPrimary: false },
      { name: "CSS3", badge: "Responsive Styling", isPrimary: false },
      { name: "Bootstrap", badge: "Component UI", isPrimary: true },
      { name: "JSP", badge: "Server-side Templates", isPrimary: true },
      { name: "JavaScript", badge: "Client Interactivity", isPrimary: true },
      { name: "React", badge: "Component Architecture", isPrimary: true },
      { name: "Tailwind CSS", badge: "Utility Styling", isPrimary: true },
    ],
  },
  {
    title: "DevOps & Deployment",
    category: "devops",
    description: "Containerization, automated deployment pipelines, and continuous integration workflows.",
    iconName: "GitBranch",
    skills: [
      { name: "Docker", badge: "Containerization", isPrimary: true },
      { name: "CI/CD", badge: "Automated Delivery", isPrimary: true },
      { name: "GitHub Actions", badge: "Workflows & Automation", isPrimary: true },
    ],
  },
];
