"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

/** Fades content in once when it scrolls into view. */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`v2-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/** Small royal-blue badge + caption kicker, just like the reference image. */
export function KickerBadge({
  text,
  tone = "dark",
  className = "",
}: {
  text: string;
  tone?: "dark" | "glass";
  className?: string;
}) {
  if (tone === "glass") {
    return (
      <div
        className={`inline-flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-md pl-2 pr-4 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ${className}`}
      >
        <span className="w-5 h-5 rounded-full bg-[#155eef] text-white grid place-items-center shrink-0">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
            <rect x="2" y="2" width="3.5" height="3.5" rx="0.7" fill="currentColor" />
            <rect x="6.5" y="2" width="3.5" height="3.5" rx="0.7" fill="currentColor" opacity="0.6" />
            <rect x="2" y="6.5" width="3.5" height="3.5" rx="0.7" fill="currentColor" opacity="0.6" />
            <rect x="6.5" y="6.5" width="3.5" height="3.5" rx="0.7" fill="currentColor" />
          </svg>
        </span>
        <span className="text-[12px] font-medium text-[#0c1017] tracking-[-0.01em]">{text}</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="w-5 h-5 rounded-[6px] bg-[#155eef] text-white grid place-items-center shrink-0 shadow-[0_3px_10px_rgba(21,94,239,0.3)]">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
          <rect x="2" y="2" width="3.5" height="3.5" rx="0.7" fill="currentColor" />
          <rect x="6.5" y="2" width="3.5" height="3.5" rx="0.7" fill="currentColor" opacity="0.65" />
          <rect x="2" y="6.5" width="3.5" height="3.5" rx="0.7" fill="currentColor" opacity="0.65" />
          <rect x="6.5" y="6.5" width="3.5" height="3.5" rx="0.7" fill="currentColor" />
        </svg>
      </span>
      <span className="text-[12.5px] font-medium text-[#0c1017]/80 tracking-[-0.01em]">{text}</span>
    </div>
  );
}

/** Signature pill CTA paired with a detached royal-blue circular ↗ icon button. */
export function ActionPill({
  href,
  label,
  variant = "dark",
  external = false,
}: {
  href: string;
  label: string;
  variant?: "dark" | "light";
  external?: boolean;
}) {
  const pillStyle =
    variant === "dark"
      ? "bg-[#0c1017] text-white hover:bg-[#1a2232]"
      : "bg-white text-[#0c1017] hover:bg-white/95 shadow-[0_12px_32px_rgba(0,0,0,0.16)]";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group inline-flex items-center gap-1.5"
    >
      <span
        className={`h-11 px-5 rounded-full inline-flex items-center text-[13px] font-medium tracking-[-0.01em] transition-colors ${pillStyle}`}
      >
        {label}
      </span>
      <span className="w-11 h-11 rounded-full bg-[#155eef] group-hover:bg-[#114fd1] text-white grid place-items-center shadow-[0_6px_18px_rgba(21,94,239,0.35)] transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M3.5 10.5L10.5 3.5M10.5 3.5H4.75M10.5 3.5V9.25"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

/** Signature lime-green pill tag from the reference design. */
export function LimeTag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-3.5 py-1 rounded-full bg-[#b4f48c] text-[#0c1017] text-[12px] font-medium tracking-[-0.01em] ${className}`}
    >
      {children}
    </span>
  );
}
