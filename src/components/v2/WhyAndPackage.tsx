"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { Reveal, LimeTag } from "./primitives";

export function V2Why() {
  const { copy } = useLanguage();
  const w = copy.whyMatters;
  const g = copy.whatYouGet;

  // 15 dots for the 3x5 dot-matrix visual (matching the reference image)
  const dots = [
    "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "pale", "blue", "pale",
    "pale", "lime", "pale", "pale", "pale",
  ] as const;

  return (
    <section id="why-matters" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* Top Row: Two-Tone Grey-to-Dark-Italic Editorial Headline + Avatars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] leading-[1.05] tracking-[-0.025em]">
              <span className="text-[#8b929e]">{w.title} — </span>
              <em className="font-normal text-[#0c1017]">{g.title.toLowerCase()}.</em>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-4 flex flex-col lg:items-end justify-end" delay={80}>
            <div className="flex items-center -space-x-2 mb-3">
              <span className="w-9 h-9 rounded-full bg-[#155eef] text-white text-xs font-bold grid place-items-center ring-2 ring-white">
                🇪🇺
              </span>
              <span className="w-9 h-9 rounded-full bg-[#b4f48c] text-[#0c1017] text-xs font-bold grid place-items-center ring-2 ring-white">
                🎓
              </span>
              <span className="w-9 h-9 rounded-full bg-[#0c1017] text-white text-xs font-bold grid place-items-center ring-2 ring-white">
                10
              </span>
            </div>
            <p className="text-[12.5px] leading-relaxed text-[#0c1017]/55 lg:text-right max-w-xs">
              {copy.framework.coordinatorsNote}
            </p>
          </Reveal>
        </div>

        {/* 4-Column Visual Bento Grid — exact match to reference */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Dot-Matrix Visualization Card */}
          <Reveal className="rounded-[26px] bg-[#eaf3ff] p-6 flex flex-col justify-between min-h-[360px]">
            <div className="grid grid-cols-5 gap-2.5">
              {dots.map((kind, idx) => {
                if (kind === "lime") {
                  return (
                    <span
                      key={idx}
                      className="aspect-square rounded-full bg-[#b4f48c] text-[#0c1017] font-bold text-sm grid place-items-center shadow-xs"
                    >
                      +
                    </span>
                  );
                }
                return (
                  <span
                    key={idx}
                    className={`aspect-square rounded-full ${
                      kind === "blue" ? "bg-[#155eef]" : "bg-[#cce0fc]"
                    }`}
                  />
                );
              })}
            </div>

            <div className="mt-8">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#155eef]">
                {w.items[3]?.tag}
              </span>
              <div className="mt-1 flex items-baseline gap-3">
                <span className="font-display text-5xl leading-none tracking-[-0.03em] text-[#0c1017]">
                  52%
                </span>
                <span className="text-[12px] leading-snug text-[#0c1017]/65">
                  volunteered to play again
                </span>
              </div>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-[#0c1017]/60">
                {w.items[3]?.desc}
              </p>
            </div>
          </Reveal>

          {/* Card 2: Floating Tag Cloud Card */}
          <Reveal
            delay={70}
            className="rounded-[26px] bg-[#f4f5f8] p-6 flex flex-col justify-between min-h-[360px]"
          >
            <div className="text-center">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0c1017]/45">
                {w.items[2]?.tag}
              </span>
              <h3 className="mt-1 text-[17px] font-semibold text-[#0c1017]">
                {w.items[2]?.title}
              </h3>
            </div>

            {/* Scattered Tag Cloud */}
            <div className="my-6 flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white text-[11.5px] text-[#0c1017]/65 shadow-2xs">
                Economics
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[11.5px] text-[#0c1017]/65 shadow-2xs">
                300+ Banknotes
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[11.5px] text-[#0c1017]/45">
                Geography
              </span>
              <LimeTag className="shadow-xs font-semibold">Public Budget</LimeTag>
              <span className="px-3 py-1 rounded-full bg-white text-[11.5px] text-[#0c1017]/65 shadow-2xs">
                42 Country Cards
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[11.5px] text-[#0c1017]/65 shadow-2xs">
                Civic Rights
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[11.5px] text-[#0c1017]/45">
                Tax Literacy
              </span>
            </div>

            <p className="text-center text-[12.5px] leading-relaxed text-[#0c1017]/60">
              {w.items[2]?.desc}
            </p>
          </Reveal>

          {/* Card 3: Visual Card with Top Lime Pill & Bottom White Stat Bar */}
          <Reveal
            delay={140}
            className="relative rounded-[26px] overflow-hidden min-h-[360px] p-4 flex flex-col justify-between bg-[#dce8fb]"
          >
            <Image
              src="/images/game-composition.jpg"
              alt="Mobility Era board and cards"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#0c1017]/45 via-transparent to-[#0c1017]/15"
            />

            <div className="relative z-10">
              <LimeTag>{w.items[1]?.tag}</LimeTag>
            </div>

            <div className="relative z-10 rounded-[18px] bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.16)] flex items-baseline gap-3">
              <span className="font-display text-4xl leading-none text-[#0c1017] shrink-0">
                1 hr
              </span>
              <span className="text-[12px] leading-snug text-[#0c1017]/65">
                <strong className="font-semibold text-[#0c1017] block">{w.items[1]?.title}</strong>
                Zero teacher prep needed
              </span>
            </div>
          </Reveal>

          {/* Card 4: EU Standards Card */}
          <Reveal
            delay={210}
            className="relative rounded-[26px] overflow-hidden min-h-[360px] p-6 flex flex-col justify-between bg-[#0c1017] text-white"
          >
            <Image
              src="/images/box.webp"
              alt="Mobility Era Box"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-contain p-6 opacity-35"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/60 to-transparent"
            />

            <div className="relative z-10 flex items-center justify-between">
              <LimeTag>{w.items[0]?.tag}</LimeTag>
              <span className="font-display text-3xl text-white/80">EU</span>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="font-display text-3xl leading-tight text-white">
                {w.items[0]?.title}
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-white/70">
                {w.items[0]?.desc}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function V2Package() {
  const { copy } = useLanguage();
  const g = copy.whatYouGet;

  return (
    <section id="what-you-get" className="scroll-mt-24 pb-16 sm:pb-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="rounded-[28px] bg-[#f4f5f8] p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {g.items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 60}
              className="rounded-[22px] bg-white p-6 flex flex-col justify-between shadow-[0_6px_20px_rgba(12,16,23,0.04)]"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-[#eaf3ff] text-[#155eef] font-mono text-xs font-bold grid place-items-center">
                  0{i + 1}
                </span>
                <LimeTag>{g.badge}</LimeTag>
              </div>
              <div className="mt-6">
                <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[#0c1017]">
                  {it.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#0c1017]/60">
                  {it.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
