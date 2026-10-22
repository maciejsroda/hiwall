import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/site/sections/Hero";
import BrandIntro from "@/components/site/sections/BrandIntro";
import ServicesSection from "@/components/site/sections/ServicesSection";
import PortfolioSection from "@/components/site/sections/PortfolioSection";
import ValuesSection from "@/components/site/sections/ValuesSection";
import ProcessSection from "@/components/site/sections/ProcessSection";
import StatementBanner from "@/components/site/sections/StatementBanner";
import FaqSection from "@/components/site/sections/FaqSection";
import ContactSection from "@/components/site/ContactSection";
import StructuredData, { localBusinessSchema } from "@/components/site/StructuredData";
import { HOME_FAQ, DEMO_PROJECTS } from "@/lib/content";
import { listProjects } from "@/lib/server-fns";

export const Route = createFileRoute("/_site/")({
  loader: async () => ({ projects: await listProjects() }),
  head: () => ({
    meta: [
      { title: "HiWall – Kuchnie i Meble na Wymiar Wrocław" },
      {
        name: "description",
        content:
          "Kuchnie, szafy i meble na wymiar we Wrocławiu. Poznaj możliwości indywidualnej zabudowy i skontaktuj się z HiWall, aby porozmawiać o swoim projekcie.",
      },
      { property: "og:title", content: "HiWall – Kuchnie i Meble na Wymiar Wrocław" },
      {
        property: "og:description",
        content:
          "Projektujemy kuchnie, szafy i meble na wymiar dla wnętrz we Wrocławiu i okolicach.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { projects } = Route.useLoaderData();
  const list = projects.length ? projects : DEMO_PROJECTS;

  return (
    <>
      <StructuredData data={localBusinessSchema()} />
      <Hero />
      <BrandIntro />
      <ServicesSection />
      <PortfolioSection projects={list} />
      <ValuesSection />
      <ProcessSection />
      <StatementBanner />
      <FaqSection items={HOME_FAQ} />
      <ContactSection />
    </>
  );
}