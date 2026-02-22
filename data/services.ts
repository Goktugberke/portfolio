import { Brain, Code, Cpu } from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
  {
    title: "AI & ML Development",
    icon: Brain,
    desc: "End-to-end AI systems with machine learning, deep learning, RAG pipelines, MCP integration and real-time prediction APIs.",
  },
  {
    title: "Software Development",
    icon: Code,
    desc: "Scalable backend services with Spring Boot and FastAPI, responsive frontends with React, and full-stack integration.",
  },
  {
    title: "Embedded Systems",
    icon: Cpu,
    desc: "STM32-based embedded control software, CAN-BUS communication and telemetry infrastructure for engineering and TEKNOFEST projects.",
  },
];
