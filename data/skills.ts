import type { SkillCategory } from "../types";

// Edit these categories to update your skills section.
// accent options: "blue" | "violet" | "emerald" | "orange" | "cyan" | "rose"
export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    accent: "cyan",
    skills: ["Python", "Java", "C", "JavaScript"],
  },
  {
    name: "AI / Machine Learning",
    accent: "rose",
    skills: ["Machine Learning", "Deep Learning", "NLP", "CNN", "ANN", "RAG", "MCP"],
  },
  {
    name: "Backend & APIs",
    accent: "blue",
    skills: ["Spring Boot", "FastAPI", "REST API", "OOP", "Design Patterns"],
  },
  {
    name: "Frontend",
    accent: "violet",
    skills: ["React", "HTML/CSS"],
  },
  {
    name: "Embedded Systems",
    accent: "orange",
    skills: ["STM32", "CAN-BUS", "Embedded C", "Nextion Editor"],
  },
  {
    name: "DevOps & Data",
    accent: "emerald",
    skills: ["Git", "GitLab", "Azure", "CI/CD", "Pandas", "Agile"],
  },
];

// Flat list (auto-generated from categories, no need to edit)
export const skills: string[] = skillCategories.flatMap((c) => c.skills);
