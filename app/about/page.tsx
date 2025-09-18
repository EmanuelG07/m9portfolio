import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Over mij",
  description: "Over mij — Emanuel, software development student",
};

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
];

const timeline = [
  {
    year: "",
    title: "Software Development studie",
    where: "Mediacollege Amsterdam",
    details: "Opleiding richting web development, frontend & backend basis, projecten en teamwork.",
  },
  {
    title: "Stage / Freelance",
    where: "Kleine opdrachten & praktijkprojecten",
    details: "Websites gebouwd en bugs opgelost voor lokale opdrachtgevers.",
  },
];

export default function AboutPage() {
  return (
    <section style={{ padding: "48px 20px", minHeight: "70vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 28 }}>
        <header style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{
            width: 160, height: 160, borderRadius: 18,
            overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
          }}>
            <Image
            src="/img/avatar.jpg"
            alt="Emanuel"
            width={160}
            height={200}
            />

          </div>

          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 style={{ margin: 0, fontSize: "2rem" }}>Over mij</h1>
            <p style={{ marginTop: 8, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
              Ik ben 18 jaar oud, ik hou van sporten en ik doe aan BJJ en Kickbox, Ik doe de studie Software development op het Media college Amsterdam. 
              Ik heb ervaring met Frond-end, klein beetje Back-end, node.js, react en next.
              Ik wil altijd nieuwe dingen leren om de beste te worden in dit vak!
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
              <Link href="/projects" style={{
                padding: "10px 14px",
                borderRadius: 10,
                textDecoration: "none",
                background: "linear-gradient(90deg,#0b6efd,#6c5cff)",
                color: "#fff",
                fontWeight: 700
              }}>
                Bekijk projecten
              </Link>

            </div>
          </div>
        </header>

        <div style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 12,
          padding: 18,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)"
        }}>
          <h2 style={{ marginTop: 0 }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
            {skills.map((s) => (
              <span key={s} style={{
                padding: "8px 12px",
                borderRadius: 999,
                background: "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.04)",
                color: "white",
                fontWeight: 600,
                fontSize: 14
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.02)",
          borderRadius: 12,
          padding: 18,
        }}>
          <h2 style={{ marginTop: 0 }}>Opleiding & ervaring</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
            {timeline.map((t, i) => (
              <div key={i} style={{
                padding: 12,
                borderRadius: 10,
                background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.00))",
                border: "1px solid rgba(255,255,255,0.03)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{t.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.7)" }}>{t.where}</div>
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>{t.year}</div>
                </div>
                <p style={{ marginTop: 8, color: "rgba(255,255,255,0.75)" }}>{t.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18 }}>
          <div>
            <h3 style={{ margin: 0 }}>Samenwerken?</h3>
            <p style={{ marginTop: 8, color: "rgba(255,255,255,0.75)" }}>
              Stuur een bericht via de contactpagina of mail direct naar <strong>emanuelghiorghita2@gmail.com</strong>.
            </p>
          </div>

          <Link href="/contact" style={{
            padding: "12px 16px",
            borderRadius: 10,
            background: "linear-gradient(90deg,#6c5cff,#0b6efd)",
            color: "#fff",
            fontWeight: 700,
            textDecoration: "none"
          }}>
            Contact 
          </Link>
        </div>
      </div>
    </section>
  );
}
