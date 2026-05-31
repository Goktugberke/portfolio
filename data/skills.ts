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
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "CNN",
      "ANN",
      "Transformers",
      "Attention",
      "PyTorch",
      "RAG",
      "GraphRAG",
      "MCP",
    ],
  },
  {
    name: "Backend & Architecture",
    accent: "blue",
    skills: ["Spring Boot", "FastAPI", "REST API", "Microservices", "OOP", "Design Patterns"],
  },
  {
    name: "Frontend",
    accent: "violet",
    skills: ["React", "HTML/CSS"],
  },
  {
    name: "Embedded Systems",
    accent: "orange",
    skills: ["STM32", "CAN-BUS", "Embedded C", "LoRa", "Nextion", "Raspberry Pi", "Arduino"],
  },
  {
    name: "DevOps & Data",
    accent: "emerald",
    skills: [
      "Docker",
      "Kubernetes",
      "Kafka",
      "RabbitMQ",
      "PostgreSQL",
      "Neo4j",
      "Git",
      "GitLab",
      "Azure",
      "CI/CD",
      "Agile",
    ],
  },
];

// Flat list (auto-generated from categories, no need to edit)
export const skills: string[] = skillCategories.flatMap((c) => c.skills);
