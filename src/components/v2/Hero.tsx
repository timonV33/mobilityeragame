"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { v2Labels, PILOT_PDF } from "./labels";
import { KickerBadge, ActionPill } from "./primitives";

export default function V2Hero() {
  const { lang, copy } = useLanguage();
  const t = v2Labels[lang];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <section id="top" className="px-2.5 sm:px-4 pt-2.5 sm:pt-3">
      <div className="relative mx-auto max-w-[1400px] min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] rounded-[28px] sm:rounded-[34px] overflow-hidden bg-[#0c1017] flex flex-col justify-between p-6 sm:p-10 lg:p-14 shadow-[0_24px_60px_rgba(12,16,23,0.12)]">
        {/* Background video — plays once upon opening and stops on final frame */}
        <video
          ref={videoRef}
          src="/video.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => videoRef.current?.pause()}
          className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
        />

        {/* Editorial gradient vignette so typography and floating cards read effortlessly */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#080d17]/90 via-[#080d17]/30 to-[#080d17]/20 pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[#080d17]/65 via-transparent to-transparent pointer-events-none"
        />

        {/* Top-Right Floating Rating & Pilot Stat Card (exact match to reference) */}
        <div className="relative z-10 self-end mt-14 sm:mt-14 w-full max-w-[260px] sm:max-w-[275px] rounded-[24px] bg-white/95 backdrop-blur-xl p-5 sm:p-6 text-[#0c1017] shadow-[0_24px_60px_rgba(0,0,0,0.28)] border border-white/60">
          {/* Overlapping institutional badges */}
          <div className="flex items-center justify-end -space-x-2 mb-3">
            <span className="w-8 h-8 rounded-full bg-[#155eef] text-white text-xs font-bold grid place-items-center ring-2 ring-white">
              🇪🇺
            </span>
            <span className="w-8 h-8 rounded-full bg-[#0c1017] text-white text-xs font-bold grid place-items-center ring-2 ring-white">
              🇱🇺
            </span>
            <span className="w-8 h-8 rounded-full bg-[#b4f48c] text-[#0c1017] text-[11px] font-bold grid place-items-center ring-2 ring-white">
              EIB
            </span>
          </div>

          {/* 5 Gold Stars + rating label */}
          <div className="flex items-center gap-1 text-[#f59e0b] text-sm tracking-tight" aria-label="5 out of 5 stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <p className="mt-1 text-[11.5px] text-[#0c1017]/65">
            <strong className="font-semibold text-[#0c1017]">10 schools</strong> · National Pilot Study
          </p>

          <hr className="my-4 border-black/[0.08]" />

          {/* Giant Serif Stat + caption */}
          <div className="flex items-baseline gap-3">
            <span className="font-display text-5xl sm:text-[52px] leading-none tracking-[-0.03em] text-[#0c1017]">
              195
            </span>
            <span className="text-[11.5px] leading-snug text-[#0c1017]/65">
              {t.students}
            </span>
          </div>
        </div>

        {/* Bottom Hero Row: Left Headline + Right CTA Pill */}
        <div className="relative z-10 mt-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <KickerBadge tone="glass" text={copy.hero.badge} />

            <h1 className="mt-5 font-display text-white text-[3.1rem] sm:text-7xl lg:text-[5.25rem] leading-[0.94] tracking-[-0.025em]">
              <span className="block">
                {copy.hero.title1} {copy.hero.title2}:
              </span>
              <em className="font-normal text-white/95">{copy.hero.subtitle}.</em>
            </h1>

            <p className="mt-4 max-w-xl text-[14.5px] sm:text-[16px] leading-[1.6] text-white/80">
              {copy.hero.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <ActionPill href="#collaborate" label={copy.nav.requestQuote} variant="light" />
            <a
              href={PILOT_PDF}
              target="_blank"
              rel="noreferrer"
              className="h-11 px-5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-[13px] font-medium inline-flex items-center gap-2 border border-white/20 transition-colors"
            >
              <span>{copy.hero.btnStudy}</span>
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
