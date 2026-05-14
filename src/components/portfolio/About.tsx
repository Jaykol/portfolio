import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

const stats = [
  { value: 7, suffix: "+", label: "Years across Sysadmin, Cloud & DevSecOps" },
  { value: 52.4, suffix: "%", decimals: 1, label: "AWS Monthly Spend Reduced" },
  { value: 3500, suffix: "+", label: "Nodes Administered at Scale" },
];

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal><SectionHeading prompt=">">whoami</SectionHeading></Reveal>
        <Reveal delay={100}>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
            I operate at the intersection of <span className="text-foreground">systems administration, cloud engineering, DevOps, and security</span>. Over seven years I've built and run production infrastructure end-to-end — from administering 3,500-node enterprise networks and Active Directory estates, to architecting AWS landing zones, automating delivery with Terraform and GitHub Actions, and orchestrating workloads on Kubernetes. I traced a live AWS account compromise through CloudTrail, contained it, and recovered the full spend from AWS. I cut monthly AWS spend by 52.4% through disciplined right-sizing and FinOps. I lead with a senior consultant's lens: clear trade-offs, measurable outcomes, and security gated into every layer — not bolted on after.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={150 + i * 100}>
              <div className="bg-surface rounded-lg p-6 glow-border">
                <div className="font-mono text-4xl md:text-5xl font-bold text-cyber">
                  <CountUp end={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
