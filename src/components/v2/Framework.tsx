"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { Reveal, KickerBadge, LimeTag, ActionPill } from "./primitives";
import { v2Labels, PILOT_PDF } from "./labels";

export default function V2Framework() {
  const { lang, copy } = useLanguage();
  const f = copy.framework;
  const t = v2Labels[lang];
  const [active, setActive] = useState(0);

  return (
    <section id="framework" className="scroll-mt-24 px-2.5 sm:px-4 py-6">
      <div className="mx-auto max-w-[1380px] rounded-[32px] bg-[#f4f5f8] p-6 sm:p-10 lg:p-14">
        {/* Top Header Row — exact match to reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <Reveal className="lg:col-span-6">
            <KickerBadge text={f.badge} />
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.35rem] leading-[1.03] tracking-[-0.025em] text-[#0c1017]">
              {f.title} —{" "}
              <em className="font-normal text-[#0c1017]/85">{f.subtitle}.</em>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:pl-6" delay={80}>
            <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#0c1017]/65">
              {f.pilotInfo}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-1.5">
              {f.areas.map((area, idx) => (
                <button
                  key={area.id}
                  onClick={() => setActive(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
                    active === idx
                      ? "bg-[#b4f48c] text-[#0c1017] font-semibold shadow-xs"
                      : "bg-white text-[#0c1017]/70 hover:text-[#0c1017]"
                  }`}
                >
                  {area.name}
                </button>
              ))}
              <a
                href={PILOT_PDF}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#0c1017] hover:bg-[#155eef] text-white text-xs font-bold grid place-items-center transition-colors"
                title={t.readPaper}
              >
                +
              </a>
            </div>
          </Reveal>
        </div>

        {/* Main 2-Column Interactive Showcase */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Interactive Competence Cards & Rows */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-2">
            {f.areas.map((area, idx) => {
              const isOpen = active === idx;
              if (isOpen) {
                return (
                  <div
                    key={area.id}
                    className="rounded-[24px] bg-white p-6 sm:p-7 shadow-[0_12px_35px_rgba(12,16,23,0.06)] border border-black/[0.04] transition-all"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-[7px] bg-[#155eef] text-white font-mono text-[11px] font-bold grid place-items-center">
                          {area.id}
                        </span>
                        <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[#0c1017]">
                          {area.name}
                        </h3>
                      </div>
                      <LimeTag>{area.coverage}</LimeTag>
                    </div>

                    <p className="mt-4 text-[14px] leading-[1.65] text-[#0c1017]/70">
                      {area.desc}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {area.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#0c1017]/75"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#155eef] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {area.highlight && (
                      <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between gap-2 text-[12.5px] font-medium text-[#155eef]">
                        <span>✦ {area.highlight}</span>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={area.id}
                  onClick={() => setActive(idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 rounded-2xl hover:bg-white/70 text-left border-b border-black/[0.06] last:border-b-0 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-[7px] bg-black/[0.06] group-hover:bg-[#155eef] group-hover:text-white text-[#0c1017]/60 font-mono text-[11px] font-semibold grid place-items-center transition-colors">
                      {area.id}
                    </span>
                    <span className="text-[15px] font-medium text-[#0c1017]/75 group-hover:text-[#0c1017]">
                      {area.name}
                    </span>
                  </div>
                  <span className="text-[12px] text-[#0c1017]/45">{area.coverage}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Visual Backdrop + Floating White Pilot Study Card */}
          <div id="study" className="lg:col-span-6 scroll-mt-24 flex">
            <div className="relative w-full min-h-[440px] rounded-[28px] overflow-hidden bg-[#101828] p-5 sm:p-8 flex flex-col justify-center items-center">
              <Image
                src="/images/full-game.webp"
                alt="Mobility Era Board Game"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-85"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-[#0c1017]/55 via-[#0c1017]/30 to-[#155eef]/30"
              />

              {/* Floating White Analytics Card (exact match to reference's "$817,062" card) */}
              <div className="relative z-10 w-full max-w-[430px] rounded-[24px] bg-white p-6 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[12px] font-medium text-[#0c1017]/55">
                    UNU-MERIT &amp; EIBI National Pilot
                  </span>
                  <LimeTag>+195 Pupils</LimeTag>
                </div>

                <div className="mt-2 font-display text-5xl sm:text-[54px] leading-none tracking-[-0.03em] text-[#0c1017]">
                  95.0%
                </div>
                <p className="mt-1 text-[12px] text-[#0c1017]/55">
                  {f.statsTitle}
                </p>

                {/* Two-column mini metrics + progress bar */}
                <div className="mt-5 grid grid-cols-2 gap-4 text-[12px]">
                  <div>
                    <div className="font-semibold text-[#0c1017] text-sm">
                      {f.stats[0]?.value ?? 40}% · {f.stats[0]?.label.split(" ")[0]}
                    </div>
                    <div className="text-[#0c1017]/50 text-[11px] truncate">
                      {f.stats[0]?.label}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-[#0c1017] text-sm">
                      {f.stats[1]?.value ?? 35}% · {f.stats[1]?.label.split(" ")[0]}
                    </div>
                    <div className="text-[#0c1017]/50 text-[11px] truncate">
                      {f.stats[1]?.label}
                    </div>
                  </div>
                </div>

                {/* Segmented Bar */}
                <div className="mt-3 h-5 w-full rounded-lg bg-[#eef2f8] overflow-hidden flex p-0.5 gap-0.5">
                  <div className="h-full rounded-l-md bg-[#155eef]" style={{ width: "40%" }} />
                  <div className="h-full bg-[#6da2f8]" style={{ width: "35%" }} />
                  <div className="h-full bg-[#b4f48c]" style={{ width: "19%" }} />
                  <div className="h-full rounded-r-md bg-[#dce6f7]" style={{ width: "6%" }} />
                </div>

                {/* Paper Citation & Download CTA */}
                <div className="mt-5 pt-4 border-t border-black/[0.07] flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[11.5px] font-semibold text-[#0c1017] truncate">
                      {f.paperTitle}
                    </div>
                    <div className="text-[11px] text-[#0c1017]/50 truncate">
                      Dr. Irina Burlacu-De Paoli · Luxembourg
                    </div>
                  </div>
                  <ActionPill href={PILOT_PDF} label="PDF" variant="dark" external />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
