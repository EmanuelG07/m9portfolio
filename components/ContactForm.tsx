"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "16px",
        padding: "32px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "16px",
          color: "var(--accent)",
          fontWeight: "700",
        }}
      >
        Neem contact op
      </h2>

      <form
        className="contact-form"
        action="https://formspree.io/f/manpdoyj"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Naam</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Je naam"
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Je e-mailadres"
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="message">Bericht</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Je bericht..."
            required
            style={{ ...inputStyle, resize: "none" }}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={buttonStyle}>
          Versturen
        </button>

        {status === "success" && (
          <p style={{ color: "#00FFFF", marginTop: "12px" }}>
            Dank voor uw bericht! Ik zal zo snel mogelijk een reactie terug sturen
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "tomato", marginTop: "12px" }}>
            ❌ Er ging iets mis, probeer het opnieuw.
          </p>
        )}
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  marginTop: "6px",
  marginBottom: "16px",
  outline: "none",
  transition: "all 0.2s ease",
};

const buttonStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, var(--accent), #00FFFF)",
  color: "#fff",
  border: "none",
  padding: "12px 24px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: 700,
  transition: "all 0.25s ease",
};
