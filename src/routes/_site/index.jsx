import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/site/sections/Hero";
import BrandIntro from "@/components/site/sections/BrandIntro";
import ServicesSection from "@/components/site/sections/ServicesSection";
import PortfolioSection from "@/components/site/sections/PortfolioSection";
import ValuesSection from "@/components/site/sections/ValuesSection";
import ProcessSection from "@/components/site/sections/ProcessSection";
import StatementBanner from "@/components/site/sections/StatementBanner";
import FaqSection from "@/components/site/sections/FaqSection";
import { HOME_FAQ, DEMO_PROJECTS } from "@/lib/content";

export const Route = createFileRoute("/_site/")({
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
  return (
    <>
      <Hero />
      <BrandIntro />
      <ServicesSection />
      <PortfolioSection projects={DEMO_PROJECTS} />
      <ValuesSection />
      <ProcessSection />
      <StatementBanner />
      <FaqSection items={HOME_FAQ} />
    </>
  );
}