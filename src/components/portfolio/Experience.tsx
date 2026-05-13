import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const entries = [
  {
    role: "Information Technology Analyst",
    company: "Comercio Partners Limited · Lagos · Hybrid",
    duration: "May 2023 – Present",
    bullets: [
      "Traced a live AWS account compromise via CloudTrail; shut down the attack, rotated credentials, and recovered full cost from AWS",
      "Cut monthly AWS spend by 52.4% through EC2 right-sizing, idle resource decommissioning, and storage policy rewrites",
      "Blocked a DoS attack at Fortinet firewall, updated AWS security group rules, activated WAF, and audited patch levels",
      "Ran authenticated vulnerability assessments on internal apps; tracked every finding through to remediation",
      "Designed full network and physical security setup for a new office (Fortinet firewall, access control, CCTV, wireless APs) — zero service disruption",
      "Built and maintained CI/CD pipelines using GitHub Actions and GitLab CI for EC2 deployments",
      "Administered Office 365, Active Directory, and endpoint security for 60+ users. Maintained 99.9% uptime",
    ],
  },
  {
    role: "Network Operations Center Engineer",
    company: "Tizeti Network Limited · Lagos",
    duration: "Feb 2023 – May 2023",
    bullets: [
      "Monitored and maintained a 3,000+ node ISP network",
      "Executed strategic firmware upgrades across network hardware",
      "Provided advanced remote support for complex multi-platform integration issues",
    ],
  },
  {
    role: "Technical Support Engineer",
    company: "Tizeti Network Limited · Lagos",
    duration: "Aug 2018 – Jan 2023",
    bullets: [
      "Led a team of 6 to deploy 3,500 cloud-managed public Wi-Fi hotspots across two Nigerian states — on schedule",
      "Diagnosed and resolved hardware, software, power, and communications faults within SLA",
      "Installed structured cabling, wireless routers, and network access points across multiple sites",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal><SectionHeading>cat experience.log</SectionHeading></Reveal>
        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/30 to-transparent" style={{ background: "linear-gradient(to bottom, color-mix(in oklab, var(--primary) 60%, transparent), color-mix(in oklab, var(--primary) 10%, transparent))" }} />
          <div className="space-y-10">
            {entries.map((e, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative">
                  <span className="absolute -left-[27px] md:-left-[43px] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(0,212,255,0.7)]" />
                  <div className="bg-surface rounded-lg p-6 glow-border">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-mono text-lg md:text-xl font-semibold text-foreground">{e.role}</h3>
                      <span className="font-mono text-xs text-success">{e.duration}</span>
                    </div>
                    <p className="font-mono text-sm text-cyber mt-1">{e.company}</p>
                    <ul className="mt-4 space-y-2">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                          <span className="text-cyber font-mono mt-0.5 shrink-0">▹</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
