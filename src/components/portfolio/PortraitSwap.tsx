import { useEffect, useState } from "react";
import portrait from "@/assets/tofunmi-portrait.jpg";
import illustration from "@/assets/tofunmi-illustration.png";

const images = [
  { src: portrait, alt: "Jesutofunmi Ajekola portrait" },
  { src: illustration, alt: "Illustrated portrait of Jesutofunmi Ajekola" },
];

export function PortraitSwap() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative w-full max-w-[360px] mx-auto aspect-square">
      <div
        className="absolute -inset-4 rounded-full opacity-60 blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative w-full h-full rounded-full overflow-hidden border border-border glow-border">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out"
            style={{ opacity: i === idx ? 1 : 0 }}
          />
        ))}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 25%, transparent), transparent 60%)" }}
          aria-hidden
        />
      </div>
    </div>
  );
}
