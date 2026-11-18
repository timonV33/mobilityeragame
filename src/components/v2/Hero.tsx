"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { Button } from "@/components/ui/button";
import { Users, Clock, Trophy, Globe, ArrowRight, Download } from "lucide-react";
import { PILOT_PDF } from "./labels";

const HERO_BLUR_DATA_URL =
  "data:image/webp;base64,UklGRtIAAABXRUJQVlA4IMYAAAAwBQCdASogABIAPp1InkslpCKhqAgAsBOJZADDNFbQskThl7MN/cgQRjuE4pjuR6J9gAD+/sLIw8Ezddcr3MCtwG4ZkFX1hyCm/5TfunaKt9LQrEzXNQvLGLWbFP3vgRfrKqhV3bkq8HeokS3l0xm4ZQTYGmSP7H9EMWAyqrW9QtKzY9/dymjug0pDGFj/wRMujZ9Cmsf7z6u+JXVDZs4lpIHc+IF6lWiNiymWJ5k85YPmmU0zxPYlqf04n561r7aBXSOaAAA=";

export default function V2Hero() {
  const { copy } = useLanguage();

  return (
    <section
      id="top"
      className="relative w-full min-h-[calc(100vh-5.5rem)] bg-white flex items-center overflow-hidden border-b border-slate-200"
    >
      {/* Full-Bleed Right-Side Hero Scene on Desktop (Stretched to top, right, and bottom edges, zero visible borders, 3440x1920 4K/FullHD+ resolution) */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[60%] xl:w-[64%] 2xl:w-[66%] h-full pointer-events-none select-none z-0">
        <Image
          src="/images/hero-banner-fullhd.webp"
          alt="Mobility Era Board Game with Eiffel Tower and European Journey"
          fill
          priority
          fetchPriority="high"
          unoptimized
          placeholder="blur"
          blurDataURL={HERO_BLUR_DATA_URL}
          className="object-cover object-right"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </div>

      {/* Left Column Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-xl xl:max-w-2xl flex flex-col items-start text-left space-y-6">
          {/* Designer Typography Title */}
          <div className="space-y-0.5">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[5.5rem] font-black tracking-tight uppercase leading-[0.88] text-[#0f172a]">
              <span>{copy.hero.title1}</span>
              <br />
              <span className="text-[#1a66ff]">{copy.hero.title2}</span>
            </h1>
            <p className="font-[family-name:var(--font-caveat)] text-4xl sm:text-5xl lg:text-6xl text-[#0f172a] font-bold tracking-tight pl-0.5 select-none leading-tight mt-1">
              {copy.hero.subtitle}
            </p>
          </div>

          {/* Description Subtitle */}
          <p className="text-sm sm:text-base lg:text-[16px] text-slate-600 leading-relaxed font-normal max-w-xl">
            {copy.hero.description}
          </p>

          {/* Institutional Framework Note */}
          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 leading-relaxed font-medium max-w-xl">
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
              className="group rounded-full px-8 py-6 text-sm sm:text-base font-bold bg-[#1a66ff] hover:bg-[#1255db] text-white shadow-[0_10px_25px_rgba(26,102,255,0.35)] hover:shadow-[0_14px_30px_rgba(26,102,255,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center"
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

        {/* Mobile Hero Image */}
        <div className="lg:hidden w-full aspect-[16/9] sm:aspect-[2/1] relative mt-10 pointer-events-none select-none">
          <Image
            src="/images/hero-banner-fullhd.webp"
            alt="Mobility Era Board Game with Eiffel Tower and European Journey"
            fill
            priority
            unoptimized
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
            className="object-cover object-right"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
