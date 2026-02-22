import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "TEKNOFEST Electric Vehicle Control System",
    desc: "Embedded vehicle control system and telemetry infrastructure with STM32, CAN-BUS motor control, ground station communication and a custom Nextion dashboard.",
    stack: ["C", "STM32", "Python", "CAN-BUS"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "SarıtayGPT AI Chatbot",
    desc: "Enterprise-grade internal AI chatbot with OpenAI integration, MCP & RAG-powered data retrieval, Azure cloud services and CI/CD pipelines.",
    stack: ["Spring Boot", "React", "Azure", "MCP", "RAG"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "Aircraft Takeoff Weight Prediction",
    desc: "End-to-end ML system trained on 20,000+ flight records achieving R² > 0.99 with Random Forest, served as a real-time prediction REST API via FastAPI.",
    stack: ["Python", "FastAPI", "Scikit-learn", "Pandas"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "Store Sales Time Series Forecasting",
    desc: "Kaggle competition: retail sales forecasting with LightGBM & LSTM ensemble models, lag features and moving statistics for improved accuracy.",
    stack: ["Python", "LightGBM", "LSTM"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "TTAG – VIP Tourist Transfer Platform",
    desc: "Full-stack real-time tourist transfer management system with secure authentication and live location tracking.",
    stack: ["React", ".NET", "PostgreSQL"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "CodeMerger & CodeBank",
    desc: "Engineering productivity tools for efficient source code management, merging, file processing and automation — packaged as standalone executables.",
    stack: ["Python"],
    links: { live: "#", repo: "#" },
  },
];
