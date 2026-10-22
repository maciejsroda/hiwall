import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { SERVICES } from "@/lib/content";
import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";
import { cn } from "@/lib/utils";

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
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.number}
              delay={index * 0.08}
              className={cn("group", index === 1 && "md:mt-14", index === 2 && "md:mt-6")}
            >
              <Link
                to={service.to}
                search={service.search}
                className="block focus-visible:outline-none"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    originWidth={1200}
                    originHeight={1500}
                  />
                  <span className="absolute left-4 top-4 bg-ivory/95 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-charcoal">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-6 text-[1.32rem] font-normal tracking-[-0.01em] text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-graphite">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 border-b border-oak/60 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors group-hover:border-charcoal">
                  {service.cta}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}