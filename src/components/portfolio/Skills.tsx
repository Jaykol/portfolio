import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const groups: { label: string; skills: string[] }[] = [
  { label: "Cloud Engineering", skills: ["AWS (EC2, RDS, VPC, IAM, S3, CloudTrail, CloudWatch, WAF, Route53, ELB)", "Azure Fundamentals", "Landing Zones", "VPC Design", "High Availability", "Disaster Recovery", "Cloud Migration"] },
  { label: "Infrastructure as Code", skills: ["Terraform", "CloudFormation", "Ansible", "Modular IaC", "Remote State", "Drift Detection"] },
  { label: "DevOps & CI/CD", skills: ["GitHub Actions", "GitLab CI", "Jenkins", "Build Pipelines", "Release Automation", "Blue/Green Deploys", "GitOps", "Artifact Management"] },
  { label: "Containers & Orchestration", skills: ["Docker", "Kubernetes", "Helm", "Minikube", "Docker Compose", "EKS"] },
  { label: "DevSecOps & AppSec", skills: ["Gitleaks", "Semgrep", "Snyk", "Trivy", "SARIF", "SAST", "Container Scanning", "Policy as Code", "Shift-Left Security"] },
  { label: "Systems Administration", skills: ["Linux (Ubuntu/CentOS/Kali)", "Windows Server", "Active Directory", "Group Policy", "Microsoft 365", "Patch Management", "Backup & Recovery", "User Provisioning"] },
  { label: "Networking", skills: ["TCP/IP", "DNS", "DHCP", "VLANs", "Routing & Switching", "VPN", "Wireless", "Fortinet Firewall", "Juniper (JNCIA)", "Network Monitoring"] },
  { label: "Observability & SRE", skills: ["Prometheus", "Grafana", "Alertmanager", "CloudWatch", "Log Aggregation", "SLOs", "Incident Response"] },
  { label: "Security & Compliance", skills: ["Incident Response", "Cloud Forensics", "IAM Hardening", "Zero Trust", "Vulnerability Assessment", "Penetration Testing", "CVE Triage"] },
  { label: "FinOps & Leadership", skills: ["Cloud Cost Optimization", "Right-Sizing", "Reserved Capacity Planning", "Project Leadership", "Stakeholder Reporting", "Vendor Management"] },
  { label: "Scripting & Automation", skills: ["Bash", "Python", "PowerShell", "ShellCheck", "Cron", "Systemd"] },
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
