import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emanuel Portfolio",
  description: "Portfolio van Emanuel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="stars" aria-hidden>
          <div className="star" style={{ top: "20%", left: "80%" }} />
          <div className="star" style={{ top: "40%", left: "60%" }} />
          <div className="star" style={{ top: "70%", left: "90%" }} />
          <div className="star" style={{ top: "10%", left: "30%" }} />
          <div className="star" style={{ top: "50%", left: "10%" }} />
        </div>

        <Navbar />
        <main style={{ maxWidth: 1100, margin: "36px auto", padding: "0 18px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
