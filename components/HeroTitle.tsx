"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroTitle() {
  const texts = ["Software Engineer", "App Designer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl font-bold text-center">
      Hoi, ik ben Emanuel{" "}
      <span style={{ marginLeft: "8px", display: "inline-block" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={texts[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
