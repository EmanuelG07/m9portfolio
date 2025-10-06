"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Kaarten spel",
    description: "Een leuke kaartenspel die echt werkt.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EmanuelG07/kaartenspelM7.git",
    image: "/img/kaarten.png",
  },
  {
    title: "Kalender",
    description: "Een mooie simpele kalender.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/EmanuelG07/m7kalender.git",
    image: "/img/kalender.png",
  },
  {
    title: "Social media opdracht",
    description:
      "Een comment sectie op mijn zelfgemaakte Reddit die unlimited reacties genereert!",
    tech: ["HTML", "CSS", "JS", "JSON"],
    github: "https://github.com/EmanuelG07/BO2-Social-Media.git",
    image: "/img/socialmedia.png",
  },
  {
    title: "Raad het getal!",
    description:
      "Een klein spelletje waar je moet raden welk getal de computer kiest.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/EmanuelG07/raadhetgetal.git",
    image: "/img/raadhetgetal.png",
  },
 
];

export default function ProjectsPage() {
  return (
    <section style={{ padding: "40px 20px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.2rem", marginBottom: 40 }}>Mijn Projecten</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
        {projects.map((p, i) => (
          <div
            key={p.title}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 30,
              alignItems: "center",
              direction: i % 2 === 1 ? "rtl" : "ltr",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                borderRadius: 12,
                boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                transition: "transform 0.4s ease",
              }}
              className="project-image"
            >
              <Image
                src={p.image}
                alt={p.title}
                width={500}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: 12,
                  transition: "transform 0.5s ease",
                }}
                className="hover-zoom"
              />
            </div>

            <div style={{ direction: "ltr" }}>
              <h2 style={{ marginTop: 0 }}>{p.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>{p.description}</p>

              <div style={{ display: "flex", gap: 10, margin: "12px 0" }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "6px 12px",
                      borderRadius: 20,
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={p.github}
                target="_blank"
                style={{
                  display: "inline-block",
                  marginTop: 14,
                  padding: "10px 18px",
                  background: "var(--accent)",
                  borderRadius: 8,
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                }}
                className="btn-project"
              >
                Bekijk op GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Hover effecten */
        .project-image:hover .hover-zoom {
          transform: scale(1.08);
        }
        .btn-project:hover {
          background: #00ffff; /* lichtere variant */
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
}
