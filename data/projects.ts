import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "GoktugGPT",
    desc: "A GPT-based language model built from scratch in PyTorch (no OpenAI/Hugging Face): manual BPE tokenizer, Multi-Head Self-Attention and Transformer decoder blocks, plus a <think> chain-of-thought stage. Productized into a ChatGPT-style SaaS with 10+ event-driven Spring Boot microservices (Kafka Saga, Transactional Outbox, Idempotency-Key, CQRS, SSE token streaming).",
    stack: ["PyTorch", "Transformers", "Spring Boot", "Kafka", "Keycloak", "Docker"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "DerMind – Personalized Skincare Recommendation",
    desc: "Graduation project: end-to-end backend and AI platform for personalized cosmetic recommendations. Spring Boot microservices with PostgreSQL, Firebase auth, notifications, rate limiting and idempotency; a FastAPI AI server using XGBoost for skin/acne/allergy-aware scoring, SHAP + LLM for explainability (XAI), and a cosine-similarity KNN model with allergen filtering and cold-start handling.",
    stack: ["Spring Boot", "FastAPI", "XGBoost", "SHAP", "KNN", "PostgreSQL", "Docker"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "Order Service – Microservice Backend",
    desc: "Core order-management service of an end-to-end microservice backend. Inter-service communication over RabbitMQ with Transactional Outbox and Saga patterns for a scalable, resilient system; Docker and Kubernetes integration, validated with unit, integration and component tests.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "RabbitMQ"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "KG-Infused RAG",
    desc: "End-to-end Knowledge-Graph-infused RAG architecture using Neo4j, Ollama (LLaMA) and Wikidata5M. Multi-hop reasoning algorithms boost accuracy on complex queries where traditional RAG falls short, with an interactive Streamlit dashboard for step-by-step XAI exploration of the model's decision paths.",
    stack: ["Python", "Neo4j", "Ollama", "LLaMA", "Streamlit"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "SarıtayGPT AI Chatbot",
    desc: "Enterprise-grade internal AI chatbot with OpenAI integration, MCP & RAG-powered data retrieval, authentication, backend services, Azure cloud services and CI/CD pipelines.",
    stack: ["Spring Boot", "React", "Azure", "MCP", "RAG"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "TEKNOFEST Electric Vehicle Control System",
    desc: "Embedded vehicle control system and telemetry infrastructure with STM32, CAN-BUS motor control, ground station communication and a custom Nextion dashboard.",
    stack: ["C", "STM32", "Python", "CAN-BUS"],
    links: { live: "#", repo: "#" },
  },
];
