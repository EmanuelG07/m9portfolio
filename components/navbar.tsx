"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  return (
     <header
        style={{
        borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
        padding: "14px 22px",
        background: "rgba(255, 255, 255, 0.55)", 
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)", 
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", 
        }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: 20,
            textDecoration: "none",
            color: "#111",
          }}
        >
          Portfolio Emanuel<span style={{ color: "blue" }}>.</span>
        </Link>

        <div>
          <Link
            href="/about"
            className={`nav-link ${pathname === "/about" ? "active" : ""}`}
          >
            Over mij
          </Link>
          <Link
            href="/projects"
            className={`nav-link ${pathname === "/projects" ? "active" : ""}`}
          >
            Projecten
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
