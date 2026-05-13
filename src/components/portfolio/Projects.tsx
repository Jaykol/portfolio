import { useMemo, useState } from "react";
import { Github, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Category = "DevSecOps" | "Cloud" | "Containers" | "Security" | "Networking";

type Project = {
  title: string;
  description: string;
  tags: string[];
  categories: Category[];
  url?: string;
  highlight?: string;
};

const projects: Project[] = [
  {
    title: "AWS Breach Remediation",
    description:
      "Led incident response on a live AWS account compromise from leaked developer credentials. Traced the attack via CloudTrail, contained it, rotated all credentials, hardened IAM, and secured a full cost write-off from AWS — preventing financial loss.",
    tags: ["AWS", "CloudTrail", "IAM", "Incident Response", "Forensics"],
    categories: ["Cloud", "Security"],
    highlight: "2024",
  },
  {
    title: "Office Infrastructure Migration",
    description:
      "Designed and executed full network and physical security setup for Comercio Partners' new office — Fortinet firewall, access control, attendance systems, CCTV, and wireless APs. Zero service disruption during cutover.",
    tags: ["Fortinet", "Networking", "CCTV", "Access Control", "Wireless"],
    categories: ["Networking", "Security"],
    highlight: "2024",
  },
  {
    title: "Application Security Testing",
    description:
      "Conducted authenticated light penetration testing on internal organizational applications. Identified vulnerabilities, submitted prioritized report to management, and tracked every finding through to remediation.",
    tags: ["Pentesting", "OWASP", "Vulnerability Assessment", "SAST"],
    categories: ["Security", "DevSecOps"],
  },
  {
    title: "Cloud Cost Optimization",
    description:
      "Cut monthly AWS spend by 52.4% through systematic EC2 right-sizing, decommissioning of idle resources, and rewriting storage lifecycle policies — without degrading performance or availability.",
    tags: ["AWS", "FinOps", "EC2", "S3", "Cost Optimization"],
    categories: ["Cloud"],
  },
  {
    title: "Wi-Fi Hotspot Deployment",
    description:
      "Directed rollout of 3,500 cloud-managed public Wi-Fi hotspots across two Nigerian states. Led a 6-engineer team and shipped on schedule, enhancing network scalability and performance.",
    tags: ["Wireless", "Cloud Networking", "Project Leadership"],
    categories: ["Networking"],
  },
  {
    title: "Secure CI/CD Pipeline",
    description:
      "7-stage security-gated GitHub Actions pipeline. Gitleaks → Semgrep → Snyk → Build → Trivy → Deploy. Reduced HIGH/CRITICAL findings to zero before first production deployment.",
    tags: ["GitHub Actions", "Gitleaks", "Semgrep", "Snyk", "Trivy", "SARIF"],
    categories: ["DevSecOps", "Security"],
    url: "https://github.com/Jaykol/dockerized-app",
  },
  {
    title: "Kubernetes Monitoring Stack",
    description:
      "Prometheus, Grafana, and Alertmanager on Kubernetes via Helm. Custom PrometheusRule alerts routing to Slack for HighMemoryUsage, PodRestarting, and DeploymentReplicasMismatch.",
    tags: ["Prometheus", "Grafana", "Kubernetes", "Helm", "Alertmanager"],
    categories: ["Containers", "DevSecOps"],
    url: "https://github.com/Jaykol/monitoring-stack",
  },
  {
    title: "Kubernetes Three-Tier Deployment",
    description:
      "PostgreSQL StatefulSet, Flask with HPA (2→5 replicas at 70% CPU), Nginx NodePort. ConfigMap/Secret management with readiness and liveness probes.",
    tags: ["Kubernetes", "Flask", "PostgreSQL", "HPA", "Docker"],
    categories: ["Containers"],
    url: "https://github.com/Jaykol/k8s-deployment",
  },
  {
    title: "Terraform AWS Infrastructure",
    description:
      "15 AWS resources as code — VPC, subnets, EC2, RDS in private subnet, least-privilege security groups. Used sensitive=true for secrets and count for subnet replication.",
    tags: ["Terraform", "AWS", "IaC", "VPC", "RDS", "EC2"],
    categories: ["Cloud", "DevSecOps"],
    url: "https://github.com/Jaykol/terraform-aws-infra",
  },
  {
    title: "Dockerized Three-Tier App",
    description:
      "Flask + Gunicorn + Nginx + PostgreSQL on Docker Compose. GitHub Actions CI/CD: test → build → push to Docker Hub (latest + SHA tags) → deploy to EC2.",
    tags: ["Docker", "Flask", "Nginx", "GitHub Actions", "CI/CD"],
    categories: ["Containers", "DevSecOps"],
    url: "https://github.com/Jaykol/dockerized-app",
  },
  {
    title: "Bash Automation Toolkit",
    description:
      "Production-grade shell scripts — disk monitoring, user management, log parsing, backup rotation. Shared logging library, strict mode (set -euo pipefail), ShellCheck CI — green badge on all commits.",
    tags: ["Bash", "ShellCheck", "Automation", "Linux", "GitHub Actions"],
    categories: ["DevSecOps"],
    url: "https://github.com/Jaykol/bash-automation-toolkit",
  },
];

const filters: Array<"All" | Category> = ["All", "DevSecOps", "Cloud", "Containers", "Security", "Networking"];

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.categories.includes(active as Category))),
    [active],
  );

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading>ls projects/</SectionHeading>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => {
              const isActive = f === active;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-all ${
                    isActive
                      ? "border-cyan-400/60 text-cyber bg-cyan-400/10 shadow-[0_0_14px_rgba(0,212,255,0.35)]"
                      : "border-border text-muted-foreground hover:text-cyber hover:border-cyan-400/40"
                  }`}
                  style={isActive ? { borderColor: "color-mix(in oklab, var(--primary) 60%, transparent)" } : undefined}
                >
                  ./{f.toLowerCase()}
                </button>
              );
            })}
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="bg-surface rounded-lg p-6 glow-border h-full flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-mono text-lg font-semibold text-foreground">{p.title}</h3>
                  <span className="font-mono text-xs text-success shrink-0">
                    {p.highlight ?? ".proj"}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-1 rounded border border-border text-muted-foreground tag-glow"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-cyber hover:underline"
                  >
                    <Github className="w-4 h-4" /> View on GitHub →
                  </a>
                ) : (
                  <div className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-success" /> Internal engagement
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="font-mono text-sm text-muted-foreground mt-10">// no projects match this filter</p>
        )}
      </div>
    </section>
  );
}
