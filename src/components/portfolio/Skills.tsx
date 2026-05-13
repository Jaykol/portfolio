import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const groups: { label: string; skills: string[] }[] = [
  { label: "Cloud & IaC", skills: ["AWS (EC2, RDS, VPC, IAM, S3, CloudTrail, CloudWatch, WAF)", "Terraform"] },
  { label: "Containers & Orchestration", skills: ["Docker", "Kubernetes", "Helm", "Minikube", "Docker Compose"] },
  { label: "CI/CD & DevSecOps", skills: ["GitHub Actions", "GitLab CI", "Gitleaks", "Semgrep", "Snyk", "Trivy", "SARIF"] },
  { label: "Monitoring", skills: ["Prometheus", "Grafana", "Alertmanager"] },
  { label: "Security", skills: ["Incident Response", "Penetration Testing", "Vulnerability Assessment", "SAST", "Container Scanning", "CVE Triage", "Cloud Forensics", "Fortinet Firewall", "VPN", "IAM Hardening"] },
  { label: "Infrastructure & Ops", skills: ["FinOps / Cloud Cost Optimization", "Access Control Systems", "CCTV", "Office 365", "Active Directory", "Project Leadership"] },
  { label: "Scripting", skills: ["Bash", "Python", "PowerShell", "ShellCheck"] },
  { label: "OS & Networking", skills: ["Linux (Ubuntu/CentOS/Kali)", "TCP/IP", "DNS", "DHCP", "Wireless", "Firewall Admin"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal><SectionHeading>skills --list</SectionHeading></Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 60}>
              <div className="bg-surface rounded-lg p-6 glow-border h-full">
                <div className="font-mono text-xs text-success mb-4">[ {g.label} ]</div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-background/40 text-muted-foreground tag-glow cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
