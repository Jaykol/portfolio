import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-11 h-11 rounded-full border bg-background/80 backdrop-blur text-cyber transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      style={{ borderColor: "color-mix(in oklab, var(--primary) 50%, transparent)" }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
