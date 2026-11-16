"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { Reveal, KickerBadge, ActionPill, LimeTag } from "./primitives";

export default function V2WhatIs() {
  const { copy } = useLanguage();
  const w = copy.whatIsIt;
  const studentQuote = copy.testimonials.quotes[1] || copy.testimonials.quotes[0];

  const bars = [
    { h: "42%", active: false },
    { h: "68%", active: true },
    { h: "54%", active: false },
    { h: "88%", active: true },
    { h: "76%", active: true },
    { h: "48%", active: false },
    { h: "95%", active: true },
    { h: "62%", active: false },
  ];

  return (
    <section id="what-is-it" className="scroll-mt-24 py-14 sm:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Rounded Visual + Overlapping White Bar-Chart Card */}
          <Reveal className="lg:col-span-5 flex">
            <div className="relative w-full min-h-[480px] sm:min-h-[540px] rounded-[28px] overflow-hidden bg-[#dce8fb] flex flex-col justify-end p-4 sm:p-6 shadow-[0_20px_50px_rgba(12,16,23,0.08)]">
              <Image
                src="/images/board-closeup.webp"
                alt="Mobility Era board game with Happy Points and Health Points"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0c1017]/50 via-transparent to-transparent"
              />

              {/* Overlapping White Analytics Card — exact match to reference */}
              <div className="relative z-10 rounded-[22px] bg-white p-5 sm:p-6 shadow-[0_20px_45px_rgba(12,16,23,0.18)]">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[12px] font-medium text-[#0c1017]/55">
                    {w.specs.academic} · EU Pilot
                  </span>
                  <LimeTag>+95%</LimeTag>
                </div>

                <div className="mt-1.5 font-display text-4xl sm:text-[42px] leading-none tracking-[-0.02em] text-[#0c1017]">
                  41 Countries
                </div>
                <p className="mt-1 text-[11.5px] text-[#0c1017]/50">
                  Real gross &amp; net income + tax rates in EKU currency
                </p>

                {/* Mini Bar Chart */}
                <div className="mt-5 h-16 flex items-end gap-2 pt-2">
                  {bars.map((b, i) => (
                    <div
                      key={i}
                      style={{ height: b.h }}
                      className={`flex-1 rounded-t-md transition-all duration-500 ${
                        b.active ? "bg-[#155eef]" : "bg-[#d4e3fc]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Editorial Headline + CTA Row + Stat & Sky Quote Card */}
          <Reveal className="lg:col-span-7 flex flex-col justify-between" delay={100}>
            <div>
              <KickerBadge text={w.badge} />

              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.04] tracking-[-0.025em] text-[#0c1017]">
                {w.title} —{" "}
                <em className="font-normal text-[#0c1017]/90">
                  {w.specs.prep.toLowerCase()}, {w.specs.players.toLowerCase()}.
                </em>
              </h2>

              <p className="mt-5 text-[15.5px] sm:text-[16.5px] leading-[1.65] text-[#0c1017]/75">
                {w.description1}
              </p>
              <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#0c1017]/60">
                {w.description2}
              </p>

              {/* CTA Pill + Lime Tags Row */}
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <ActionPill href="#framework" label={copy.hero.btnCurriculum} variant="dark" />

                <div className="flex flex-wrap items-center gap-1.5">
                  <LimeTag>{w.specs.players}</LimeTag>
                  <LimeTag>{w.specs.prep}</LimeTag>
                  <LimeTag>{w.specs.academic}</LimeTag>
                </div>
              </div>
            </div>

            {/* Bottom Sub-Grid: Left Giant Stat + Right Sky-Blue Quote Card */}
            <div className="mt-10 pt-8 border-t border-black/[0.07] grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
              <div className="sm:col-span-5 flex flex-col justify-between h-full">
                <div className="w-11 h-11 rounded-full bg-[#eaf3ff] border border-[#cfe0fc] grid place-items-center text-base">
                  ⏱️
                </div>

                <div className="mt-6">
                  <div className="font-display text-5xl sm:text-[54px] leading-none tracking-[-0.03em] text-[#0c1017]">
                    {w.specs.time}
                  </div>
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-[#0c1017]/60">
                    {w.specs.timeDesc}
                  </p>
                </div>
              </div>

              <div className="sm:col-span-7 rounded-[24px] bg-[#eaf3ff] p-6 sm:p-7">
                <div className="text-[#155eef] font-display text-4xl leading-none select-none">
                  “
                </div>
                <p className="mt-2 text-[13.5px] sm:text-[14px] font-medium leading-[1.55] text-[#0c1017]">
                  {studentQuote.quote}
                </p>
                <div className="mt-5 flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#155eef] text-white text-[11px] font-bold grid place-items-center">
                    LU
                  </span>
                  <div className="text-[11.5px] leading-tight">
                    <span className="font-semibold text-[#0c1017]">{studentQuote.author}</span>
                    <span className="text-[#0c1017]/55"> · {studentQuote.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
