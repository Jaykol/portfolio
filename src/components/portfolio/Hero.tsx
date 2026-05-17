import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Typewriter } from "./Typewriter";
import { PortraitSwap } from "./PortraitSwap";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg className="absolute -right-20 top-10 w-[520px] h-[520px] opacity-[0.08]" viewBox="0 0 400 400" fill="none">
          <g stroke="currentColor" className="text-cyber" strokeWidth="1">
            <circle cx="200" cy="200" r="60" />
            <circle cx="200" cy="200" r="120" />
            <circle cx="200" cy="200" r="180" />
            <path d="M200 20 L200 380 M20 200 L380 200 M60 60 L340 340 M340 60 L60 340" />
            <rect x="180" y="180" width="40" height="40" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36 relative">
        <p className="font-mono text-sm text-success mb-6">$ ./init --portfolio</p>
        <div className="flex items-center gap-5 md:gap-7">
          <h1 className="font-mono text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Jesutofunmi <span className="gradient-text">(John)</span><br />Ajekola
          </h1>
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 shrink-0">
            <PortraitSwap />
          </div>
        </div>
        <div className="mt-6 font-mono text-xl md:text-2xl">
          <span className="text-muted-foreground">&gt; </span>
          <span className="text-cyber">
            <Typewriter words={["Cloud Engineer", "DevOps Engineer", "DevSecOps Engineer", "Systems Administrator", "Cloud Security Consultant"]} />
          </span>
        </div>
        <p className="mt-8 max-w-2xl text-muted-foreground text-lg leading-relaxed">
          Senior cloud and infrastructure consultant with 7 years designing, automating, and securing systems — from 3,500-node enterprise networks to zero-trust AWS environments. I help teams ship resilient, cost-efficient, security-gated infrastructure. Based in Lagos, Nigeria.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:shadow-[0_0_24px_rgba(0,212,255,0.5)] transition-all"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border font-mono text-sm text-cyber hover:bg-cyan-400/10 transition-all"
            style={{ borderColor: "color-mix(in oklab, var(--primary) 50%, transparent)" }}
          >
            Get In Touch
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a href="https://github.com/Jaykol" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-border text-muted-foreground hover:text-cyber tag-glow" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/jesutofunmijohn" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-border text-muted-foreground hover:text-cyber tag-glow" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:jekola.ajekola@gmail.com" className="p-2 rounded-md border border-border text-muted-foreground hover:text-cyber tag-glow" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
