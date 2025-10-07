"use client";

import { Mail, MessageSquare, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section
      style={{
        minHeight: "90vh",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, rgba(0,139,139,0.08), rgba(0,0,0,0))",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          background: "rgba(255,255,255,0.04)",
          padding: "40px",
          borderRadius: 16,
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: "2.2rem", marginBottom: 10 }}>Neem contact op</h1>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>
            Heb je een vraag, een idee of wil je samenwerken aan een project?  
            Laat het me weten via het formulier hieronder.
          </p>
        </div>

        <ContactForm />

        <div
          style={{
            marginTop: 40,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            textAlign: "center",
            gap: 24,
          }}
        >
          <div>
            <Mail size={24} color="#008B8B" />
            <p style={{ marginTop: 8, color: "rgba(255,255,255,0.8)" }}>
              <strong>Email</strong><br />
              webdevemanuel@gmail.com
            </p>
          </div>

          <div>
            <MessageSquare size={24} color="#00FFFF" />
            <p style={{ marginTop: 8, color: "rgba(255,255,255,0.8)" }}>
              <strong>Socials</strong><br />
              <a
                href="https://github.com/EmanuelG07"
                target="_blank"
                style={{
                  color: "var(--accent)",
                  textDecoration: "none",
                }}
              >
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                style={{
                  color: "var(--accent)",
                  textDecoration: "none",
                }}
              >
                LinkedIn
              </a>
            </p>
          </div>

          <div>
            <MapPin size={24} color="#008B8B" />
            <p style={{ marginTop: 8, color: "rgba(255,255,255,0.8)" }}>
              <strong>Locatie</strong><br />
              Amsterdam, Nederland
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        section {
          color: white;
        }
        a:hover {
          text-decoration: underline;
          color: #00ffff;
        }
        h1 {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
