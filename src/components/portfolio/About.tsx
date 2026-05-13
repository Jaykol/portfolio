import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

const stats = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 52.4, suffix: "%", decimals: 1, label: "AWS Cost Reduction Achieved" },
  { value: 7, suffix: "", label: "DevSecOps Portfolio Projects" },
];

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal><SectionHeading prompt=">">whoami</SectionHeading></Reveal>
        <Reveal delay={100}>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
            I'm a DevSecOps engineer with 7 years across IT infrastructure, network operations, and cloud security. I traced a live AWS account compromise through CloudTrail logs, shut it down, and recovered the full cost from AWS. I cut monthly AWS spend by 52.4% through systematic right-sizing. I've built a 7-project DevSecOps portfolio spanning Bash, Docker, GitHub Actions, Terraform, Kubernetes, Prometheus, and security-gated pipelines with Gitleaks, Semgrep, Snyk, and Trivy. I bring a genuine security-first mindset to every layer of infrastructure I build.
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
