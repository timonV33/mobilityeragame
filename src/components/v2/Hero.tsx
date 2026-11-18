"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { Button } from "@/components/ui/button";
import { Users, Clock, Trophy, Globe, ArrowRight, Download } from "lucide-react";
import { PILOT_PDF } from "./labels";

export default function V2Hero() {
  const { copy } = useLanguage();

  return (
    <section
      id="top"
      className="relative w-full bg-white overflow-hidden border-b border-slate-200"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column Content */}
        <div className="relative z-10 w-full lg:w-[45%] xl:w-[44%] pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-12 xl:pl-[max(3rem,calc((100vw-1440px)/2+3rem))] lg:pr-6 py-10 lg:py-12 flex flex-col items-start text-left space-y-5">
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

        {/* Right Column: Full Uncropped Photo Flush to Top, Right, and Bottom Edges */}
        <div className="relative w-full lg:w-[55%] xl:w-[56%] shrink-0 self-stretch pointer-events-none select-none">
          <Image
            src="/images/hero-banner-scene.jpg"
            alt="Mobility Era Board Game with Eiffel Tower and European Journey"
            width={2032}
            height={1442}
            priority
            unoptimized
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}
