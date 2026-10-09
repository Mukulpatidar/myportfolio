import { projectLinks } from "./links";

export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface ProjectArchitectureItem {
  layer: string;
  details: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  featured: boolean;
  description: string;
  overview: string;
  problemStatement: string;
  solutionSummary: string;
  technologies: string[];
  metrics: ProjectMetric[];
  highlights: string[];
  architecture: ProjectArchitectureItem[];
  githubUrl?: string;
  githubStatus?: "available" | "coming_soon";
  liveDemoUrl?: string;
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "real-estate-platform",
    title: "Real Estate Management Platform",
    subtitle: "Enterprise property catalog & multi-role transaction platform",
    year: "2026",
    category: "Full-Stack Java Enterprise",
    featured: true,
    description:
      "A robust, full-stack real estate system engineered with Spring Boot, Spring Security, and MySQL. Implements stateless JWT authentication, fine-grained role-based access control for 3 distinct user roles (Admin, Agent, Buyer), and optimized database querying for over 10,000 property records.",
    overview:
      "Designed and developed to streamline property listings, inquiries, and user management. Features complex multi-attribute property filtering, normalized relational schema, and secure RESTful endpoints built for performance and maintainability.",
    problemStatement:
      "Managing thousands of property listings with disparate user roles requires stringent security boundaries, zero data leakage between agent portfolios, and sub-second multi-criteria search response times across large property datasets.",
    solutionSummary:
      "Built a layered Spring Boot architecture with JWT authorization filters, Spring Data JPA query specifications with indexed MySQL tables, and responsive Bootstrap/JSP client templates managed cleanly via Maven lifecycle tooling.",
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
      "Bootstrap",
    ],
    metrics: [
      {
        label: "Search Latency",
        value: "~35%",
        description: "Faster property search retrieval",
      },
      {
        label: "Data Capacity",
        value: "10,000+",
        description: "Indexed property records handled",
      },
      {
        label: "UX Feedback",
        value: "~40%",
        description: "Fewer UI complaints during testing",
      },
      {
        label: "Environment Setup",
        value: "~60%",
        description: "Less manual setup time via Maven",
      },
    ],
    highlights: [
      "Reduced unauthorized access incidents to zero with JWT authentication and role-based authorization in Spring Security for 3 user roles (admin, agent, buyer)",
      "Improved property search response time by ~35% by optimizing REST APIs with advanced filtering over 10,000+ property records using Spring Data JPA",
      "Built a responsive UI with Bootstrap, JSP, and JavaScript, reducing page-load complaints during testing by ~40%; configured Maven to cut manual setup time by ~60%",
      "In-memory Redis caching and indexed MySQL database queries ensuring sub-second response times",
      "Layered Spring Boot architecture with clean separation of Controller, Service, and Repository components",
    ],
    architecture: [
      {
        layer: "Security Layer",
        details: "Spring Security filter chain verifying JWT bearer tokens and enforcing role policies (Admin, Agent, Buyer).",
      },
      {
        layer: "Controller Layer",
        details: "RESTful controllers exposing clean CRUD and multi-criteria search endpoints with validation.",
      },
      {
        layer: "Service Layer",
        details: "Encapsulated business logic handling transactional property workflows, booking inquiries, and validation.",
      },
      {
        layer: "Persistence Layer",
        details: "Spring Data JPA with Hibernate ORM communicating with normalized, indexed MySQL database schemas.",
      },
      {
        layer: "Client Presentation",
        details: "Responsive Bootstrap, JSP templates, and JavaScript for intuitive client interactions.",
      },
    ],
    keyFeatures: [
      {
        title: "Role-Based Security",
        description: "Three distinct personas: Admins manage users and catalog; Agents manage listings; Buyers query and save listings.",
        icon: "ShieldCheck",
      },
      {
        title: "Dynamic Property Filtering",
        description: "Multi-parameter search engine optimizing queries across price bounds, geographic zones, and property statuses.",
        icon: "Search",
      },
      {
        title: "Scale-Ready Persistence",
        description: "Database queries indexed for sub-second retrieval over 10,000+ active property records.",
        icon: "Database",
      },
      {
        title: "Maven Lifecycle Integration",
        description: "Streamlined build profiles, plugin chains, and dependency isolation reducing build inconsistencies.",
        icon: "Layers",
      },
    ],
    githubUrl: projectLinks.realEstate.github,
    githubStatus: "available",
  },
  {
    id: "smart-contact-manager",
    title: "Smart Contact Manager",
    subtitle: "Secure enterprise contact management & directory system",
    year: "2025",
    category: "Full-Stack Java Application",
    featured: true,
    description:
      "A secure, scalable contact management solution built with Spring Boot, Hibernate ORM, and Spring Security. Features stateless JWT token authentication, normalized relational database design in MySQL, and high-efficiency contact search across 5,000+ records.",
    overview:
      "Engineered to provide individual users and teams with a lightning-fast, secure directory. Includes full CRUD capabilities, pagination, contact grouping, and strict user-level data segregation to ensure complete data privacy.",
    problemStatement:
      "Contact systems frequently suffer from sluggish query speeds when searching across unindexed fields, alongside security vulnerabilities in session-based authentication when scaled horizontally.",
    solutionSummary:
      "Implemented stateless JWT authorization combined with Hibernate ORM and Spring Data JPA query tuning on a 3NF normalized MySQL database schema, accelerating query execution times by ~30%.",
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
    metrics: [
      {
        label: "Query Execution",
        value: "~30%",
        description: "Faster query execution time",
      },
      {
        label: "Contact Records",
        value: "5,000+",
        description: "Managed contacts supported",
      },
      {
        label: "Security Model",
        value: "JWT",
        description: "Stateless token-based authorization",
      },
      {
        label: "Data Integrity",
        value: "3NF",
        description: "Normalized relational MySQL schema",
      },
    ],
    highlights: [
      "Secured user data with JWT-based stateless authentication alongside Spring Security, with zero critical security issues across functional testing",
      "Reduced query execution time by ~30% by replacing raw JDBC with Hibernate ORM and Spring Data JPA, improving retrieval for 5,000+ contacts",
      "Delivered full CRUD with zero data loss using a normalized MySQL schema and MVC architecture",
      "Integrated Redis for rapid cache lookups and session state offloading",
      "Strict row-level user ownership boundaries preventing unauthorized access across accounts",
    ],
    architecture: [
      {
        layer: "Authentication Barrier",
        details: "Custom OncePerRequestFilter extracting JWT claims and establishing SecurityContextHolder authentication.",
      },
      {
        layer: "API Endpoints",
        details: "Stateless REST controllers handling paginated contact lists, search filters, and detail mutations.",
      },
      {
        layer: "Domain & Business Logic",
        details: "Service beans handling sanitization, uniqueness verification, and contact grouping logic.",
      },
      {
        layer: "Data Access Layer",
        details: "Spring Data JPA repositories executing optimized JPQL and native queries on MySQL 3NF schemas.",
      },
    ],
    keyFeatures: [
      {
        title: "Stateless JWT Auth",
        description: "Every request verified cryptographically with zero server-side session state overhead.",
        icon: "KeyRound",
      },
      {
        title: "Optimized Retrieval",
        description: "Indexed database lookups yielding ~30% faster search across 5,000+ directory records.",
        icon: "Zap",
      },
      {
        title: "Strict User Isolation",
        description: "Enforced multitenant-style row-level user ownership preventing unauthorized access across accounts.",
        icon: "Lock",
      },
      {
        title: "Normalized Schema (3NF)",
        description: "Carefully designed MySQL schema eliminating duplication and safeguarding relational integrity.",
        icon: "Table",
      },
    ],
    githubStatus: "coming_soon",
  },
  {
    id: "music-player",
    title: "Full-Stack Music Streaming Platform",
    subtitle: "Interactive audio streaming app with Clerk Auth, Redux state & Cloudinary media",
    year: "2025",
    category: "Full-Stack MERN Application",
    featured: true,
    description:
      "A modern, full-stack music streaming platform built with React, Vite, Node.js, Express, and MongoDB. Features Clerk authentication, Cloudinary-powered media storage, real-time audio playback controls with Redux Toolkit, dynamic playlists, and a responsive Tailwind CSS and ShadCN UI interface.",
    overview:
      "Engineered to deliver seamless, low-latency audio streaming with persistent queue management, album and song browsing, user authentication via Clerk, and cloud-hosted audio and artwork via Cloudinary.",
    problemStatement:
      "Audio web applications require persistent playback that does not drop during client-side page navigation, robust multi-provider user authentication, and rapid streaming delivery for high-bitrate audio assets and cover artwork without server bottlenecks.",
    solutionSummary:
      "Designed a decoupled MERN architecture with an Express/MongoDB REST backend, Cloudinary CDN asset pipelines, Clerk authentication middleware, and a responsive React client utilizing Redux Toolkit for uninterrupted audio state synchronization.",
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
    metrics: [
      {
        label: "Audio State",
        value: "Redux",
        description: "Centralized queue & persistent playback",
      },
      {
        label: "CDN Streaming",
        value: "Cloudinary",
        description: "High-bitrate audio & cover art delivery",
      },
      {
        label: "Auth Provider",
        value: "Clerk",
        description: "Stateless multi-provider authentication",
      },
      {
        label: "Database",
        value: "MongoDB",
        description: "Flexible document model with Mongoose & Redis",
      },
    ],
    highlights: [
      "Built and deployed a full-stack music streaming app on Vercel with audio playback, queue management, next/previous controls, and album pages with linked songs",
      "Integrated Clerk authentication with session tokens, and built an admin-only panel to upload and delete songs and albums using Cloudinary",
      "Developed Featured, Made for You, and Trending sections using MongoDB $sample aggregation, with a responsive dark UI built on Tailwind CSS and ShadCN",
      "High-performance media CDN delivery pipeline for high-bitrate audio streaming and album artwork on Cloudinary",
      "In-memory Redis caching alongside decoupled Express REST APIs and Mongoose document modeling",
    ],
    architecture: [
      {
        layer: "Client & Audio Player",
        details:
          "React with Vite, utilizing Redux Toolkit to manage global audio context and continuous playback without interruptions during route navigation.",
      },
      {
        layer: "Auth & Access Control",
        details:
          "Clerk SDK integration protecting routes, validating session tokens, and managing user profiles.",
      },
      {
        layer: "RESTful Backend API",
        details:
          "Node.js and Express REST services handling song catalog queries, album listings, and playlist operations with input validation.",
      },
      {
        layer: "Media & Asset Delivery",
        details:
          "Cloudinary API integration for optimized on-demand audio streaming and responsive album artwork CDN caching.",
      },
      {
        layer: "Persistence Layer",
        details:
          "MongoDB database with Mongoose schemas structuring song metadata, album relationships, and user playlists.",
      },
    ],
    keyFeatures: [
      {
        title: "Continuous Audio Playback",
        description:
          "Uninterrupted streaming engine with Redux Toolkit managing song queues, pause/play, next/prev, and progress tracking.",
        icon: "Play",
      },
      {
        title: "Cloud Media CDN",
        description:
          "High-fidelity audio streaming and optimized cover artwork delivery powered by Cloudinary.",
        icon: "Cloud",
      },
      {
        title: "Clerk Authentication",
        description:
          "Frictionless, secure sign-in and session verification protecting personalized user actions.",
        icon: "ShieldCheck",
      },
      {
        title: "Responsive Dark UI",
        description:
          "Crafted with Tailwind CSS and ShadCN UI components for desktop, tablet, and mobile displays.",
        icon: "Layout",
      },
    ],
    githubUrl: projectLinks.musicPlayer.github,
    githubStatus: "available",
    liveDemoUrl: projectLinks.musicPlayer.liveDemo,
  },
];

