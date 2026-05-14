import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Award, BookOpen } from "lucide-react";

const certs = [
  { name: "Google Cybersecurity Professional Certificate", issuer: "Google", year: "2026", status: "completed" },
  { name: "Google IT Support Professional Certificate", issuer: "Google", year: "2025", status: "completed" },
  { name: "Juniper JNCIA-Junos", issuer: "Juniper Networks", year: "2022", status: "completed" },
  { name: "AWS Solutions Architect Associate — Course Completion", issuer: "Stephane Maarek (Udemy)", year: "2025", status: "course" },
  { name: "Microsoft AZ-900 Azure Fundamentals — Course Completion", issuer: "Udemy", year: "2025", status: "course" },
  { name: "Microsoft 365 Administration", issuer: "LinkedIn Learning", year: "2025", status: "completed" },
] as const;

export function Certifications() {
  return (
    <section id="certifications" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal><SectionHeading>cat certifications.txt</SectionHeading></Reveal>
        <Reveal delay={80}>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl font-mono">
            <span className="text-success"># note:</span> entries marked <span className="text-warning">Course Completion</span> are training programs I finished — not proctored certification exams. Listed transparently for clarity.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="bg-surface rounded-lg p-5 glow-border h-full flex flex-col">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-background/60 border border-border">
                    {c.status === "completed" ? <Award className="w-5 h-5 text-cyber" /> : <BookOpen className="w-5 h-5 text-warning" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-sm font-semibold leading-snug">{c.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{c.issuer} · {c.year}</p>
                  </div>
                </div>
                <div className="mt-4">
                  {c.status === "completed" ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full border" style={{ borderColor: "color-mix(in oklab, var(--success) 50%, transparent)", color: "var(--success)" }}>
                      ✓ Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full border" style={{ borderColor: "color-mix(in oklab, var(--warning) 50%, transparent)", color: "var(--warning)" }}>
                      📘 Course Completion (not certified exam)
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
