"use client";

import React, { useEffect, useState } from "react";

type Props = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

export default function Typewriter({ words, typeSpeed = 60, deleteSpeed = 40, pause = 1400 }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const current = words[index % words.length];

    if (!deleting) {
      if (text.length < current.length) {
        timer = window.setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timer = window.setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (text.length > 0) {
        timer = window.setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span style={{ whiteSpace: "nowrap", display: "inline-block" }}>
      {text}
      <span className="tw-cursor" aria-hidden>|</span>
    </span>
  );
}
