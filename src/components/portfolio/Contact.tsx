import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:jekola.ajekola@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal><SectionHeading>./contact.sh</SectionHeading></Reveal>
        <div className="grid md:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Open to DevSecOps, Cloud Security, and Infrastructure roles. Let's talk.
              </p>
              <ul className="mt-8 space-y-4 font-mono text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyber" />
                  <a href="mailto:jekola.ajekola@gmail.com" className="hover:text-cyber">jekola.ajekola@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-cyber" />
                  <a href="https://linkedin.com/in/jesutofunmijohn" target="_blank" rel="noreferrer" className="hover:text-cyber">linkedin.com/in/jesutofunmijohn</a>
                </li>
                <li className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-cyber" />
                  <a href="https://github.com/Jaykol" target="_blank" rel="noreferrer" className="hover:text-cyber">github.com/Jaykol</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyber" />
                  <span>Lagos, Nigeria · Open to Remote</span>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="bg-surface rounded-lg p-6 glow-border space-y-4">
              <div>
                <label className="block font-mono text-xs text-success mb-1.5">name:</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-background/60 border border-border rounded-md px-3 py-2.5 text-sm font-mono focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(0,212,255,0.25)] transition-all"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-success mb-1.5">email:</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-background/60 border border-border rounded-md px-3 py-2.5 text-sm font-mono focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(0,212,255,0.25)] transition-all"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-success mb-1.5">message:</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-background/60 border border-border rounded-md px-3 py-2.5 text-sm font-mono focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(0,212,255,0.25)] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all"
              >
                Send <Send className="w-4 h-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
