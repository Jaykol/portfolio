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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jesutofunmi (John) Ajekola — DevSecOps Engineer & Cloud Security Specialist" },
      { name: "description", content: "DevSecOps engineer with 7 years securing infrastructure — AWS, Kubernetes, Terraform, and security-gated CI/CD pipelines. Based in Lagos, Nigeria." },
      { property: "og:title", content: "Jesutofunmi (John) Ajekola — DevSecOps Engineer" },
      { property: "og:description", content: "Cloud security, infrastructure automation, and DevSecOps." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap",
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
