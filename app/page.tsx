"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";

export default function HomePage() {
  return (
    <main className="container">
      <section className="section hero" style={{ alignItems: "center" }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="avatar hero-avatar">
            <div className="avatar-inner" style={{ width: 220 }}>
              <Image src="/img/avatar2.jpg" alt="Emanuel" width={220} height={200} className="avatar-img" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="h1">
            Hoi, ik ben <span className="name h1 name" style={{ color: "var(--accent)" }}>Emanuel</span>{" "}
            <span style={{ display: "inline-block", marginLeft: 8 }}>
              <Typewriter words={["Software Engineer", "App Designer", "Front-End Developer"]} />
            </span>
          </h1>

          <p className="lead">
            Ik bouw moderne, snelle webapps met React en Next.js. Op dit moment studeer ik aan het
            Mediacollege Amsterdam en oefen ik met zowel frontend als backend projecten.
          </p>

          <div className="cta-row">
            <Link href="/projects" className="btn btn-primary">Bekijk mijn projecten</Link>
            <Link href="/contact" className="btn btn-ghost">Contact opnemen</Link>
          </div>
        </motion.div>
      </section>

      <motion.section className="section" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ minWidth: 120 }}>
          </div>
          <div>
            <h2 style={{ margin: 0 }}>Kort over mij</h2>
            <p className="lead" style={{ marginTop: 8 }}>
              Ik maak projecten om te leren, niet om perfect te zijn. Van een to-do tot een fullstack app: ik wil dingen bouwen die werken en gebruikers blij maken.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="section" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 style={{ marginTop: 0 }}>Uitgelichte projecten</h2>

        <div className="grid-2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Portfolio Website</h3>
            <p className="lead">Mijn persoonlijke site gebouwd met Next.js — hier vind je al mijn projecten en contactinfo.</p>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <span className="badge">Next.js</span>
              <span className="badge">React</span>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>To-Do App</h3>
            <p className="lead">Een nette todo-app met local storage / auth-stub voor oefening in state management en UX.</p>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <span className="badge">React</span>
              <span className="badge">JavaScript</span>
            </div>
          </div>
        </div>

      </motion.section>

      <motion.section className="section" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 style={{ marginTop: 0 }}>Skills</h2>
        <div className="skills" style={{ marginTop: 8 }}>
          {["JavaScript", "React", "Next.js", "Node.js", "CSS", "HTML"].map((s) => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
        </div>
      </motion.section>

      <motion.section className="section contact-preview" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 style={{ marginTop: 0 }}>Laten we connecten!</h2>
        <p className="lead">Heb je een vraag of wil je samenwerken? Stuur me een bericht.</p>
        <Link href="/contact" className="btn btn-primary">Naar contactpagina</Link>
      </motion.section>
    </main>
  );
}
