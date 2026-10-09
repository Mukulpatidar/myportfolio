import { certificateLinks } from "./links";

export interface CertificationItem {
  title: string;
  version: string;
  issuer: string;
  instructor?: string;
  status: string;
  badge: string;
  topics: string[];
  description: string;
  certificateUrl?: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "Java Programming Masterclass",
    version: "Java 11 & Java 17",
    issuer: "Udemy Verified",
    instructor: "Tim Buchalka",
    status: "Completed & Verified",
    badge: "Mastery Level",
    topics: [
      "Collections Framework",
      "Multithreading & Concurrency",
      "OOP Design Patterns",
      "Lambda Expressions & Functional Interfaces",
      "Stream API",
      "Exception Handling & File I/O",
    ],
    description:
      "Comprehensive deep dive into modern Java idioms, memory model fundamentals, multithreaded concurrency utilities, functional programming with lambdas and streams, and enterprise-grade object-oriented architectural patterns.",
    certificateUrl: certificateLinks.javaMasterclass,
  },
];

