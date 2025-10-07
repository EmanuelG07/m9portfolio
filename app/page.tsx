"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";

export default function HomePage() {
  return (
    <main className="container">
      <section
        className="section hero"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 32,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              width: 300,
              height: 220,
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          >
            <Image
              src="/img/avatar2.jpg"
              alt="Emanuel"
              width={300}
              height={220}
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ flex: 1, minWidth: 280 }}
        >
          <h1 className="h1 h1-stars">
            Hoi, ik ben{" "}
            <span
              className="name h1 name"
              style={{ color: "var(--accent, #008B8B)" }}
            >
              Emanuel
            </span>
            <br />
            <Typewriter
              words={[
                "Software Engineer",
                "App Designer",
                "Front-End Developer",
                "Web Designer",
              ]}
            />
          </h1>

          <p className="lead" style={{ maxWidth: 620 }}>
            Ik bouw moderne, snelle webapps met React en Next.js. Op dit moment
            studeer ik aan het Mediacollege Amsterdam en oefen ik met zowel
            frontend als backend projecten. Neem vooral een kijkje bij mijn
            projecten en laat weten wat je ervan vindt!
          </p>

          <div className="cta-row">
            <Link href="/projects" className="btn btn-primary">
              Bekijk mijn projecten
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact opnemen
            </Link>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="section"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={{ marginTop: 0 }}>Kort over mij</h2>
        <p className="lead" style={{ maxWidth: 700 }}>
          Ik ben Emanuel, 18 jaar. 
          Ik studeer bij het Media College Amsterdam en volg de opleiding Softare Development. 
          Mijn doel is om later mooie websites te maken voor bedrijven. 
        </p>
      </motion.section>

      <motion.section
        className="section"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={{ marginTop: 0 }}>Wat doe ik?</h2>

        <div className="grid-2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Stylen</h3>
            <p className="lead">
              Mijn doel is om uw website een clean look te geven naar al uw behoeftes!
            </p>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <span className="badge">HTML</span>
              <span className="badge">CSS</span>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Interactie & Functionaliteit</h3>
            <p className="lead">
              Ik voeg leven toe aan websites door interactieve functies te bouwen met JavaScript en React.
            </p>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <span className="badge">React</span>
              <span className="badge">JavaScript</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={{ marginTop: 0 }}>Waar ik mee werk</h2>
        <Skills />
      </motion.section>

      <motion.section
        className="section contact-preview"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={{ marginTop: 0 }}>Laten we connecten!</h2>
        <p className="lead">
          Heb je een vraag of wil je samenwerken? Stuur me een bericht.
        </p>
        <Link href="/contact" className="btn btn-primary">
          Naar contactpagina
        </Link>
      </motion.section>
    </main>
  );
}

function Skills() {
  return (
    <div className="skills flex gap-6 flex-wrap justify-center">
      <div className="skill-logo">
        <Image
          src="/skills/js.jpg"
          alt="JavaScript"
          width={60}
          height={60}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="skill-logo">
        <Image
          src="/skills/css.jpg"
          alt="CSS"
          width={60}
          height={60}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="skill-logo">
        <Image
          src="/skills/html.jpg"
          alt="HTML"
          width={60}
          height={60}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="skill-logo">
        <Image
          src="/skills/react.jpg"
          alt="React"
          width={60}
          height={60}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
    
  );
}
