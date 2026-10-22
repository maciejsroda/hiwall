import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

export default function ProjectLightbox({ projects, activeIndex, onClose, onNavigate }) {
  const project = activeIndex === null ? null : projects[activeIndex];

  useEffect(() => {
    if (!project) return;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate(1);
      if (event.key === "ArrowLeft") onNavigate(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose, onNavigate]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Realizacja: ${project.title}`}
      className="fixed inset-0 z-[90] flex flex-col bg-charcoal/98 px-4 py-5 md:px-8"
    >
      <div className="flex items-center justify-between text-ivory">
        <p className="text-[0.62rem] uppercase tracking-[0.22em] text-ivory/70">
          {activeIndex + 1} / {projects.length} · {project.category}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Zamknij powiększenie"
          className="flex h-11 w-11 items-center justify-center text-ivory/80 transition-colors hover:text-ivory"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center py-4">
        <Image
          src={project.image}
          alt={project.alt || project.title}
          className="max-h-full max-w-full object-contain"
          fittingType="fit"
          originWidth={1200}
          originHeight={1500}
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-ivory/15 pt-4 text-ivory sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-xl font-light">{project.title}</h2>
          {project.description ? (
            <p className="mt-1 max-w-lg text-sm text-ivory/70">{project.description}</p>
          ) : null}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onNavigate(-1)}
            aria-label="Poprzednia realizacja"
            className={cn(
              "flex h-11 w-11 items-center justify-center border border-ivory/25 text-ivory/80 transition-colors hover:border-ivory/70 hover:text-ivory"
            )}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => onNavigate(1)}
            aria-label="Następna realizacja"
            className="flex h-11 w-11 items-center justify-center border border-ivory/25 text-ivory/80 transition-colors hover:border-ivory/70 hover:text-ivory"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}