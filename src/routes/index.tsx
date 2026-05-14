import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

const SITE_URL = "https://john-codes-live.jesutofunmi.app";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jesutofunmi Ajekola — Cloud, DevOps & DevSecOps Engineer" },
      { name: "description", content: "Senior cloud & infrastructure consultant — Systems Administration, Cloud Engineering, DevOps and DevSecOps. AWS, Kubernetes, Terraform, security-gated CI/CD. Lagos, Nigeria." },
      { property: "og:title", content: "Jesutofunmi Ajekola — Cloud, DevOps & DevSecOps Engineer" },
      { property: "og:description", content: "Senior cloud & infrastructure consultant across Sysadmin, Cloud, DevOps and DevSecOps." },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jesutofunmi Ajekola",
          alternateName: "John Ajekola",
          jobTitle: "DevSecOps Engineer",
          url: SITE_URL,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lagos",
            addressCountry: "NG",
          },
          sameAs: [
            "https://www.linkedin.com/in/jesutofunmi-ajekola",
            "https://github.com/jesutofunmi-ajekola",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
