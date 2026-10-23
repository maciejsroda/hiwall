import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import PageHero from "@/components/site/PageHero";
import ProjectGrid from "@/components/site/ProjectGrid";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import { DEMO_PROJECTS, PROJECT_CATEGORIES, IMAGES } from "@/lib/content";
import { listProjects } from "@/lib/server-fns";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_site/realizacje")({
  validateSearch: (search) => ({
    kategoria: typeof search.kategoria === "string" ? search.kategoria : undefined,
  }),
  loader: async () => ({ projects: await listProjects() }),
  head: () => ({
    meta: [
      { title: "Realizacje – Kuchnie i Meble na Wymiar | HiWall Wrocław" },
      {
        name: "description",
        content:
          "Galeria realizacji HiWall: kuchnie, szafy, zabudowy i meble na wymiar. Zobacz przykłady rozwiązań, w których estetyka spotyka się z funkcjonalnością.",
      },
      { property: "og:title", content: "Realizacje – Kuchnie i Meble na Wymiar | HiWall" },
      { property: "og:locale", content: "pl_PL" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { projects } = Route.useLoaderData();
  const { kategoria } = Route.useSearch();
  const navigate = useNavigate();
  const items = projects.length ? projects : DEMO_PROJECTS;
  const visible = kategoria ? items.filter((project) => project.category === kategoria) : items;

  const filters = ["Wszystkie", ...PROJECT_CATEGORIES];

  return (
    <>
      <PageHero
        eyebrow="Portfolio · Wrocław i okolice"
        title="Realizacje, które mówią same za siebie."
        description="Poznaj przykłady rozwiązań, w których estetyka spotyka się z funkcjonalnością."
        image={IMAGES.realizacje_hero}
        imageAlt="Zabudowa garderoby na wymiar z mosiężnymi uchwytami i podświetleniem"
      />

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
          <div
            role="group"
            aria-label="Filtruj realizacje według kategorii"
            className="flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-charcoal/10 pb-6"
          >
            {filters.map((filter) => {
              const active = filter === "Wszystkie" ? !kategoria : kategoria === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    navigate({
                      to: "/realizacje",
                      search: filter === "Wszystkie" ? {} : { kategoria: filter },
                      resetScroll: false,
                    })
                  }
                  className={cn(
                    "relative text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                    active
                      ? "text-charcoal"
                      : "text-graphite/60 hover:text-charcoal"
                  )}
                >
                  {filter}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-[25px] left-0 h-px w-full transition-colors",
                      active ? "bg-oak" : "bg-transparent"
                    )}
                  />
                </button>
              );
            })}
            <p className="ml-auto text-[0.68rem] uppercase tracking-[0.16em] text-graphite/50">
              {visible.length} {visible.length === 1 ? "realizacja" : "realizacje"}
            </p>
          </div>

          {visible.length ? (
            <Reveal className="mt-12">
              <ProjectGrid projects={visible} />
            </Reveal>
          ) : (
            <p className="mt-16 max-w-lg text-[0.95rem] leading-relaxed text-graphite">
              W tej kategorii nie ma jeszcze opublikowanych realizacji. Zobacz
              pozostałe przykłady lub napisz do nas — opowiemy o możliwościach.
            </p>
          )}

        </div>
      </section>

      <CtaBand
        title="Twoje wnętrze może wyglądać tak samo dobrze."
        description="Napisz, czego potrzebujesz — od kuchni po zabudowę całego pomieszczenia."
        secondary={{ label: "Kuchnie na wymiar", to: "/kuchnie-na-wymiar" }}
      />
    </>
  );
}