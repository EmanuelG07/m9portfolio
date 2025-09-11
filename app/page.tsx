import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
        minHeight: "70vh",
      }}
    >
      <div style={{ flex: 2 }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Hoi, ik ben <span style={{ color: "#0b6efd" }}>Emanuel</span> 
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.6, marginBottom: "20px" }}>
          Ik ben software development student bij het Mediacollege Amsterdam.
          Ik bouw websites en applicaties met React, Next.js en Node.js.
        </p>
        <div style={{ display: "flex", gap: "15px" }}>
          <Link
            href="/projects"
            style={{
              padding: "10px 18px",
              background: "#0b6efd",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.2s",
            }}
          >
            Bekijk mijn projecten
          </Link>
          <Link
            href="/contact"
            style={{
              padding: "10px 18px",
              border: "2px solid #0b6efd",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              color: "#0b6efd",
              transition: "all 0.2s",
            }}
          >
            Contact opnemen
          </Link>
        </div>
      </div>
    </section>
  );
}
