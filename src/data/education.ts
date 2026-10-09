export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeType: string;
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    degree: "B.Tech — Computer Science Engineering",
    field: "Computer Science & Engineering",
    institution: "IES IPS Academy",
    location: "Indore, Madhya Pradesh",
    period: "2022 – 2026",
    grade: "7.7 / 10",
    gradeType: "CGPA",
    highlights: [
      "Rigorous coursework in Data Structures & Algorithms, Database Management Systems, and OOP",
      "Focused practical exploration on Java backend ecosystems, Spring Boot, and relational databases",
      "Participated in technical projects, algorithm problem solving, and software engineering labs",
    ],
  },
  {
    degree: "Senior Secondary (Class 12) — MP Board",
    institution: "Digambar Jain Higher Secondary School",
    location: "Mandsaur, Madhya Pradesh",
    period: "Completed",
    grade: "76.2%",
    gradeType: "Percentage",
    highlights: [
      "Solid mathematical and analytical foundation",
      "Physics, Chemistry, and Mathematics curriculum",
    ],
  },
];

