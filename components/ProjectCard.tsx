import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

export default function ProjectCard({ title, description, tech, github }: ProjectCardProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      className="project-card"
    >
      <h3 style={{ marginTop: 0, fontSize: "1.4rem" }}>{title}</h3>
      <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>{description}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "14px 0" }}>
        {tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: "0.85rem",
              padding: "6px 12px",
              borderRadius: "20px",
              background: "rgba(0,139,139,0.2)",
              color: "#00FFFF",
              border: "1px solid rgba(0,139,139,0.5)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <Link
        href={github}
        target="_blank"
        style={{
          display: "inline-block",
          padding: "10px 14px",
          background: "#008B8B",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: 600,
          textDecoration: "none",
          transition: "background 0.25s ease",
        }}
      >
        Bekijk op GitHub
      </Link>
    </div>
  );
}
