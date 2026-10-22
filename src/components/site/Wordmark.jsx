import { cn } from "@/lib/utils";

export default function Wordmark({ className, tone = "dark" }) {
  return (
    <span
      className={cn(
        "font-heading text-[1.3rem] font-semibold leading-none tracking-[-0.02em]",
        tone === "light" ? "text-ivory" : "text-charcoal",
        className
      )}
    >
      HiWall
      <span
        aria-hidden="true"
        className={cn(
          "ml-[3px] inline-block h-[5px] w-[5px] rounded-full align-baseline",
          tone === "light" ? "bg-oak" : "bg-oak"
        )}
      />
    </span>
  );
}