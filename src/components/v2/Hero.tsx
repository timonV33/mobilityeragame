"use client";

import { useLanguage } from "@/components/LanguageContext";
import { Button } from "@/components/ui/button";
import { Users, Clock, Trophy, Globe, ArrowRight, Download } from "lucide-react";
import { PILOT_PDF } from "./labels";
import HeroBanner3D from "./HeroBanner3D";

export default function V2Hero() {
  const { copy } = useLanguage();

  return (
    <section
      id="top"
      className="relative w-full min-h-[calc(100vh-5.5rem)] bg-white flex items-center overflow-hidden border-b border-slate-200"
    >
      {/* Full-Bleed Right-Side Interactive 3D GLB Scene on Desktop (stretched to top, right, and bottom edges) */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[48%] xl:w-[50%] 2xl:w-[50%] h-full z-0 overflow-hidden select-none">
        <div className="absolute top-0 bottom-0 left-0 w-16 xl:w-24 bg-gradient-to-r from-white via-white/30 to-transparent pointer-events-none z-10" />
        <HeroBanner3D />
      </div>

      {/* Left Column Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16 flex flex-col lg:flex-row items-center justify-between pointer-events-none">
        <div className="w-full lg:w-[48%] xl:w-[46%] 2xl:w-[44%] flex flex-col items-start text-left space-y-5 lg:space-y-6 pr-4 lg:pr-6 pointer-events-auto">
          {/* Designer Typography Title */}
          <div className="space-y-0.5">
            <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight uppercase leading-[0.9] text-[#0f172a]">
              <span>{copy.hero.title1}</span>
              <br />
              <span className="text-[#1a66ff]">{copy.hero.title2}</span>
            </h1>
            <p className="font-[family-name:var(--font-caveat)] text-3xl sm:text-5xl lg:text-4xl xl:text-5xl text-[#0f172a] font-bold tracking-tight pl-0.5 select-none leading-tight mt-1">
              {copy.hero.subtitle}
            </p>
          </div>

          {/* Description Subtitle */}
          <p className="text-sm sm:text-base lg:text-[15px] xl:text-[16px] text-slate-600 leading-relaxed font-normal max-w-lg">
            {copy.hero.description}
          </p>

          {/* Institutional Framework Note */}
          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 leading-relaxed font-medium max-w-lg">
            🇪🇺 {copy.hero.frameworkNote}
          </div>

          {/* Game Specs Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0f7ff] border border-blue-100/60 text-xs sm:text-[13px] font-semibold text-slate-700">
              <Users className="w-3.5 h-3.5 text-[#1a66ff]" />
              <span>2-5 Players</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0f7ff] border border-blue-100/60 text-xs sm:text-[13px] font-semibold text-slate-700">
              <Clock className="w-3.5 h-3.5 text-[#1a66ff]" />
              <span>60–90 Min</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0f7ff] border border-blue-100/60 text-xs sm:text-[13px] font-semibold text-slate-700">
              <Trophy className="w-3.5 h-3.5 text-[#1a66ff]" />
              <span>Age 14+</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0f7ff] border border-blue-100/60 text-xs sm:text-[13px] font-semibold text-slate-700">
              <Globe className="w-3.5 h-3.5 text-[#1a66ff]" />
              <span>41 Countries</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="group rounded-full px-7 py-6 text-sm sm:text-base font-bold bg-[#1a66ff] hover:bg-[#1255db] text-white shadow-[0_10px_25px_rgba(26,102,255,0.35)] hover:shadow-[0_14px_30px_rgba(26,102,255,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center"
            >
              <a href="#framework" className="flex items-center gap-2">
                <span>{copy.hero.btnCurriculum}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-6 py-6 text-sm sm:text-base font-bold border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <a href={PILOT_PDF} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Download className="w-4 h-4 text-slate-500" />
                <span>{copy.hero.btnStudy}</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Hero 3D Scene */}
        <div className="lg:hidden w-full relative mt-8 pointer-events-auto">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#ebf0f5]">
            <HeroBanner3D />
          </div>
        </div>
      </div>
    </section>
  );
}
