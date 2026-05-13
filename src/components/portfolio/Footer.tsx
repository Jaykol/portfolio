import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <a href="https://github.com/Jaykol" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-border text-muted-foreground hover:text-cyber tag-glow" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/jesutofunmijohn" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-border text-muted-foreground hover:text-cyber tag-glow" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground text-center">
          © 2025 Jesutofunmi (John) Ajekola
        </p>
      </div>
    </footer>
  );
}
