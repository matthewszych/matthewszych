"use client";

import { useEffect, useState, useRef } from "react";

export function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const increment = target / (duration / 16);
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setValue(target);
              clearInterval(interval);
            } else {
              setValue(Math.floor(current));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, elementRef };
}

export function useTypewriter(text: string, speed = 50) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
}
