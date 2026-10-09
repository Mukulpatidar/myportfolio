import { personalInfo } from "@/data/portfolio";

export function JsonLd() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    description: personalInfo.supportingParagraph,
    url: "https://mukulpatidar.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    email: personalInfo.email,
    telephone: personalInfo.phone,
    sameAs: [personalInfo.github, personalInfo.linkedin],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JWT Authentication",
      "MySQL",
      "Hibernate",
      "Spring Data JPA",
      "Data Structures and Algorithms",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mukul Patidar | Java Full Stack Developer Portfolio",
    url: "https://mukulpatidar.dev",
    description: personalInfo.supportingParagraph,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}

