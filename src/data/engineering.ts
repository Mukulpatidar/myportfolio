export interface EngineeringStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  practices: string[];
  toolsUsed: string[];
  techCodeSnippet: string;
}

export const engineeringSteps: EngineeringStep[] = [
  {
    number: "01",
    title: "Understand the Problem",
    tagline: "Deconstruct business requirements into domain models",
    description:
      "Before writing code, analyze system boundaries, identify actors and access patterns, and establish clear entity relationships with data integrity constraints.",
    practices: [
      "Entity and relationship identification",
      "Actor modeling (Admin, Agent, Buyer, User roles)",
      "Edge-case identification and boundary definitions",
      "State-machine flow analysis for domain entities",
    ],
    toolsUsed: ["Domain Modeling", "ER Diagrams", "OOP Principles"],
    techCodeSnippet: `@Entity
@Table(name = "properties")
public class Property {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Enumerated(EnumType.STRING)
    private PropertyStatus status;
}`,
  },
  {
    number: "02",
    title: "Design the API & Data Model",
    tagline: "Normalized schemas, indexed paths, and REST contracts",
    description:
      "Architect clean, RESTful resource paths with explicit DTOs. Structure 3NF normalized relational tables in MySQL with indexation on critical lookup filters.",
    practices: [
      "Standardized RESTful HTTP verbs and status codes",
      "Explicit DTO (Data Transfer Object) separation",
      "3NF relational normalization to eliminate redundancy",
      "Strategic indexing on query filters (price, location, user_id)",
    ],
    toolsUsed: ["MySQL", "Schema Normalization", "REST Contract Design", "DBeaver"],
    techCodeSnippet: `CREATE TABLE properties (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    location VARCHAR(120) NOT NULL,
    INDEX idx_filter (location, price)
);`,
  },
  {
    number: "03",
    title: "Build Secure Backend Systems",
    tagline: "Spring Boot, Spring Security, JWT, and JPA",
    description:
      "Implement layered business logic with Spring Boot. Enforce stateless security using JWT filter chains and role-based authorization guards across all sensitive operations.",
    practices: [
      "Custom JWT authentication filter chain",
      "Method-level and URL-level role authorization (@PreAuthorize)",
      "Transactional service boundaries with @Transactional",
      "Structured global exception handling with @RestControllerAdvice",
    ],
    toolsUsed: ["Spring Boot", "Spring Security", "JWT", "Spring Data JPA"],
    techCodeSnippet: `@PreAuthorize("hasRole('ADMIN') or hasRole('AGENT')")
@PostMapping("/api/v1/properties")
public ResponseEntity<PropertyResponse> createProperty(
    @Valid @RequestBody PropertyRequest req,
    @AuthenticationPrincipal UserDetails user
) {
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(propertyService.create(req, user));
}`,
  },
  {
    number: "04",
    title: "Test, Optimize & Ship",
    tagline: "Postman validation, query tuning, and Maven builds",
    description:
      "Rigorously test endpoints with Postman collections, resolve N+1 query overhead using JPA Fetch joins, and package repeatable artifacts using the Maven lifecycle.",
    practices: [
      "Comprehensive API endpoint validation with Postman",
      "JPA query tuning and execution plan inspection",
      "Pagination & projection for high-volume dataset reads",
      "Maven lifecycle management for reliable compilation and packaging",
    ],
    toolsUsed: ["Postman", "Query Profiler", "Maven", "Git"],
    techCodeSnippet: `<!-- Maven Build Lifecycle -->
<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
  </plugins>
</build>`,
  },
];

