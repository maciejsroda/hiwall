import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { IMAGES, SERVICES } from "@/lib/content";
import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";
import { cn } from "@/lib/utils";

// Trzy karty oferty są rozpisane pojedynczo (bez pętli), aby każde zdjęcie
// było osobnym elementem i można było podmieniać je jedno po drugim.
const [kitchenService, wardrobeService, furnitureService] = SERVICES;

const linkClass = "block focus-visible:outline-none";
const imageClass =
  "h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]";
const numberClass =
  "absolute left-4 top-4 bg-ivory/95 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-charcoal";
const titleClass = "mt-6 text-[1.32rem] font-normal tracking-[-0.01em] text-charcoal";
const textClass = "mt-3 text-[0.95rem] leading-relaxed text-graphite";
const ctaClass =
  "mt-5 inline-flex items-center gap-2 border-b border-oak/60 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors group-hover:border-charcoal";

function CardCta({ label }) {
  return (
    <span className={ctaClass}>
      {label}
      <ArrowRight
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.5}
      />
    </span>
  );
}

export default function ServicesSection() {
  return (
    <section id="oferta" className="border-t border-charcoal/10 bg-surface py-20 lg:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Oferta"
            title="Meble dopasowane do Twojego wnętrza"
            description="Projektujemy rozwiązania, które porządkują przestrzeń i podkreślają charakter wnętrza."
          />
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-20 lg:gap-10">
          <Reveal className="group">
            <Link to={kitchenService.to} className={linkClass}>
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={IMAGES.service_kitchen}
                  alt="Kuchnia na wymiar z zabudową do sufitu i kamiennym blatem"
                  className={imageClass}
                  originWidth={1200}
                  originHeight={1500}
                />
                <span className={numberClass}>{kitchenService.number}</span>
              </div>
              <h3 className={titleClass}>{kitchenService.title}</h3>
              <p className={textClass}>{kitchenService.description}</p>
              <CardCta label={kitchenService.cta} />
            </Link>
          </Reveal>

          <Reveal delay={0.08} className={cn("group", "md:mt-14")}>
            <Link
              to={wardrobeService.to}
              search={wardrobeService.search}
              className={linkClass}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={IMAGES.service_wardrobe}
                  alt="Szafa na wymiar z frontami w okleinie dębowej w sypialni"
                  className={imageClass}
                  originWidth={1200}
                  originHeight={1500}
                />
                <span className={numberClass}>{wardrobeService.number}</span>
              </div>
              <h3 className={titleClass}>{wardrobeService.title}</h3>
              <p className={textClass}>{wardrobeService.description}</p>
              <CardCta label={wardrobeService.cta} />
            </Link>
          </Reveal>

          <Reveal delay={0.16} className={cn("group", "md:mt-6")}>
            <Link to={furnitureService.to} className={linkClass}>
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={IMAGES.service_furniture}
                  alt="Meble na wymiar — zabudowa z otwartymi półkami w salonie"
                  className={imageClass}
                  originWidth={1200}
                  originHeight={1500}
                />
                <span className={numberClass}>{furnitureService.number}</span>
              </div>
              <h3 className={titleClass}>{furnitureService.title}</h3>
              <p className={textClass}>{furnitureService.description}</p>
              <CardCta label={furnitureService.cta} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}