import { useEffect, useState } from "react";
import { Download, Terminal } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const offset = window.scrollY + 120;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= offset && el.offsetTop + el.offsetHeight > offset) {
          setActive(l.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-mono text-sm">
          <Terminal className="w-4 h-4 text-cyber" />
          <span className="text-cyber">~/jaykol</span>
          <span className="blink-cursor" />
        </a>
        <nav className="hidden md:flex items-center gap-6 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`transition-colors hover:text-cyber ${active === l.id ? "text-cyber" : "text-muted-foreground"}`}
            >
              ./{l.label.toLowerCase()}
            </a>
          ))}
        </nav>
        <a
          href="https://drive.google.com/file/d/1vdMm6qSK6TRlo_rtkjrO5hoixEtIfTgg/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-cyan-400/40 text-cyber font-mono text-xs hover:bg-cyan-400/10 hover:shadow-[0_0_18px_rgba(0,212,255,0.35)] transition-all"
          style={{ borderColor: "color-mix(in oklab, var(--primary) 50%, transparent)" }}
        >
          <Download className="w-3.5 h-3.5" /> Download Resume
        </a>
        <button
          className="md:hidden font-mono text-cyber text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "[ x ]" : "[ ≡ ]"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3 font-mono text-sm">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className={active === l.id ? "text-cyber" : "text-muted-foreground"}>
                ./{l.label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
