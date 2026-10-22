import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SITE, isFilled, telHref } from "@/lib/site-config";

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-ivory/95 px-4 py-3 backdrop-blur-md transition-transform duration-500 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-2">
        <Link
          to="/kontakt"
          className="flex h-12 flex-1 items-center justify-center gap-2 bg-charcoal text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ivory"
        >
          Zapytaj o wycenę
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </Link>
        {isFilled(SITE.phone) ? (
          <a
            href={telHref(SITE.phone)}
            aria-label={`Zadzwoń: ${SITE.phone}`}
            className="flex h-12 w-12 items-center justify-center border border-charcoal/25 text-charcoal"
          >
            <span className="text-[0.7rem] font-semibold uppercase">Tel</span>
          </a>
        ) : (
          <Link
            to="/realizacje"
            className="flex h-12 items-center justify-center border border-charcoal/25 px-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-charcoal"
          >
            Realizacje
          </Link>
        )}
      </div>
    </div>
  );
}