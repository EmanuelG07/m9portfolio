import React from "react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(6px)",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        transition: "transform 0.2s ease-in-out",
      }}
      className="project-card"
    >
      <h3 style={{ marginBottom: "10px", fontSize: "1.4rem" }}>{title}</h3>
      <p style={{ marginBottom: "15px", lineHeight: 1.6 }}>{description}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "15px" }}>
        {tech.map((t, i) => (
          <span
            key={i}
            style={{
              background: "#0b6efd",
              color: "white",
              fontSize: "0.8rem",
              padding: "4px 10px",
              borderRadius: "8px",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        {github && (
          <Link
            href={github}
            target="_blank"
            style={{
              padding: "8px 14px",
              background: "#111",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            GitHub
          </Link>
        )}
        {demo && (
          <Link
            href={demo}
            target="_blank"
            style={{
              padding: "8px 14px",
              background: "#0b6efd",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
}
