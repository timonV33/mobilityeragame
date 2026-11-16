"use client";

import { useLanguage } from "@/components/LanguageContext";
import { Reveal } from "./primitives";

export default function V2Awards() {
  const { copy } = useLanguage();
  const a = copy.awards;

  const logos = [
    { name: a.tripleE, sub: a.tripleEDesc, mark: "✦" },
    { name: a.bafta, sub: a.baftaDesc, mark: "◈" },
    { name: "UNU-MERIT", sub: "Maastricht University", mark: "❖" },
    { name: "EIB Institute", sub: "European Investment Bank", mark: "🇪🇺" },
    { name: a.dutchEdTech, sub: "The Hague", mark: "▣" },
    { name: a.luxStartup, sub: "Luxembourg", mark: "▲" },
  ];

  return (
    <section aria-label={a.title} className="py-12 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-[12px] font-medium text-[#0c1017]/45 tracking-[-0.01em]">
            {a.title}
          </p>
        </Reveal>

        <div className="mt-7 pt-7 border-t border-black/[0.07] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 50}
              className="flex items-center justify-center sm:justify-start gap-2.5 text-[#0c1017]"
            >
              <span className="w-7 h-7 rounded-lg bg-[#f3f5f8] text-[#155eef] text-xs font-bold grid place-items-center shrink-0">
                {item.mark}
              </span>
              <div className="min-w-0">
                <div className="text-[13.5px] font-semibold tracking-[-0.02em] leading-tight truncate">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#0c1017]/45 truncate">{item.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
