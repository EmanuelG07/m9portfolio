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
    background: "rgba(255,255,255,0.07)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }}
  className="project-card"
>
  {/* Titel */}
  <h3 style={{ marginBottom: "12px", fontSize: "1.6rem", color: "#fff" }}>
    {title}
  </h3>

  {/* Beschrijving */}
  <p style={{ marginBottom: "16px", lineHeight: 1.6, color: "#ddd" }}>
    {description}
  </p>

  {/* Tech badges */}
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "18px",
    }}
  >
    {tech.map((t, i) => (
      <span
        key={i}
        style={{
          background: "rgba(11,110,253,0.9)",
          color: "#fff",
          fontSize: "0.85rem",
          padding: "6px 12px",
          borderRadius: "10px",
        }}
      >
        {t}
      </span>
    ))}
  </div>

  {/* Knoppen */}
  <div style={{ display: "flex", gap: "14px" }}>
    {github && (
      <Link
        href={github}
        target="_blank"
        style={{
          padding: "10px 16px",
          background: "#111",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 600,
          flex: 1,
          textAlign: "center",
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
          padding: "10px 16px",
          background: "#0b6efd",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 600,
          flex: 1,
          textAlign: "center",
        }}
      >
        Live Demo
      </Link>
    )}
  </div>
</div>

  );
}
