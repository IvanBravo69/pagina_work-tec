"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 8, prefix: "+", suffix: "", label: "Certificaciones ISO" },
  { value: 100, prefix: "", suffix: "%", label: "Compromiso con la Calidad" },
  { value: 10, prefix: "", suffix: "+", label: "Años de Experiencia" },
];

function Counter({ value, prefix, suffix, label }: typeof stats[0]) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center text-white">
      <div className="text-3xl lg:text-4xl font-bold tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-white/80 mt-1">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-[#4db6a9]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
