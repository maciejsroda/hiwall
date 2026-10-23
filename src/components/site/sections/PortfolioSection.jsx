import { DEMO_PROJECTS } from "@/lib/content";
import ProjectGrid from "../ProjectGrid";
import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";
import ButtonLink from "../ButtonLink";

export default function PortfolioSection({ projects = DEMO_PROJECTS }) {
  return (
    <section id="realizacje" className="bg-ivory py-20 lg:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Portfolio"
            title="Realizacje, które mówią same za siebie."
            description="Poznaj przykłady rozwiązań, w których estetyka spotyka się z funkcjonalnością."
          />
          <Reveal delay={0.1} className="lg:pb-2">
            <ButtonLink to="/realizacje" variant="outline">
              Zobacz wszystkie realizacje
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14 lg:mt-20">
          <ProjectGrid projects={projects} featured />
        </Reveal>

      </div>
    </section>
  );
}