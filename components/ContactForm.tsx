"use client";

import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const validate = () => {
    if (!name.trim() || !email.trim() || !message.trim()) return false;
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!validate()) {
      setStatus("error");
      return;
    }

    setSending(true);

    if (!FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        if (res.ok) {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setStatus("error");
        }
      } catch (err) {
        setStatus("error");
      } finally {
        setSending(false);
      }
    } else {
      const mailto = `mailto:yourmail@example.com?subject=${encodeURIComponent(
        "Portfolio contact from " + name
      )}&body=${encodeURIComponent(message + "\n\n— " + name + " — " + email)}`;
      window.location.href = mailto;
      setSending(false);
      setStatus("success");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" aria-label="Contactformulier">
      <div className="glass-head">
      </div>

      <label className="input-wrap">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=" "
          required
        />
        <span className="floating">Naam</span>
      </label>

      <label className="input-wrap">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" "
          required
        />
        <span className="floating">E-mail</span>
      </label>

      <label className="input-wrap">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder=" "
          rows={6}
          required
        />
      </label>

      <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8 }}>
        <button
          type="submit"
          className="btn-neon"
          disabled={sending}
        >
          {sending ? "Versturen..." : "Verstuur bericht"}
        </button>

        {status === "success" && (
          <div className="msg success">Bedankt! Ik neem snel contact op.</div>
        )}
        {status === "error" && (
          <div className="msg error">Er ging iets mis — controleer je gegevens.</div>
        )}
      </div>

      <style jsx>{`
        .glass-head {
          margin-bottom: 12px;
          color: #eaf2ff;
        }
        .glass-head h2 {
          margin: 0 0 6px 0;
          font-size: 1.4rem;
        }
        .input-wrap {
          position: relative;
          margin-bottom: 18px;
        }
        input, textarea {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 14px 14px;
          color: #e9f0ff;
          border-radius: 10px;
          outline: none;
          resize: vertical;
          transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
          backdrop-filter: blur(6px);
        }
        input:focus, textarea:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(11,110,253,0.12), 0 2px 6px rgba(0,0,0,0.4);
          border-color: rgba(11,110,253,0.9);
        }

        .floating {
          position: absolute;
          left: 14px;
          top: 12px;
          pointer-events: none;
          font-size: 0.85rem;
          color: rgba(234,242,255,0.7);
          transform-origin: left top;
          transition: transform .15s ease, font-size .15s ease, top .15s ease;
        }
        input:not(:placeholder-shown) + .floating,
        textarea:not(:placeholder-shown) + .floating,
        input:focus + .floating,
        textarea:focus + .floating {
          transform: translateY(-22px) scale(.92);
          font-size: 0.75rem;
          top: 6px;
          color: #cfe3ff;
        }

        .btn-neon {
          background:#008b8b;
          color: white;
          border: none;
          padding: 12px 16px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: transform .12s ease, box-shadow .12s ease;
        }
        .btn-neon:active { transform: translateY(1px) scale(.995); }
        .btn-neon:disabled { opacity: 0.6; cursor: not-allowed; transform: none; box-shadow: none; }

        .msg { color: #dbeeff; font-weight: 600; }
        .msg.error { color: #ffd4d4; }
        .msg.success { color: #c9f7d1; }
      `}</style>
    </form>
  );
}
 