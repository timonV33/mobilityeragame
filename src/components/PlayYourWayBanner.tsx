"use client";

import { ChevronRight, Download, Sparkles, Train } from "lucide-react";

interface PlayYourWayBannerProps {
  onOpenPreorder: () => void;
}

export default function PlayYourWayBanner({ onOpenPreorder }: PlayYourWayBannerProps) {
  return (
    <section className="py-20 bg-black relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-14 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#107c10]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Mockup visual frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-black/60 border border-zinc-800 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#107c10]/20 text-[#22c55e] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(34,197,94,0.3)]">
                  <Train className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xl font-black text-white uppercase tracking-tight">
                    MOBILITY ERA // 2026
                  </div>
                  <div className="text-xs text-zinc-400 font-mono mt-1">
                    ALL-IN COLLECTOR&apos;S EDITION
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-[#22c55e] font-mono">
                  + 12 ЭКСКЛЮЗИВНЫХ ПРОМО-КАРТ «СТАРТАПЫ»
                </div>
              </div>
            </div>

            {/* Right: "Play your way" text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#107c10]/20 text-[#22c55e] border border-[#107c10]/40">
                <Sparkles className="w-3 h-3" />
                ОГРАНИЧЕННЫЙ ПЕРВЫЙ ТИРАЖ
              </div>

              <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                Твоя Транспортная Империя Ждет
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 max-w-xl font-normal leading-relaxed">
                Сделайте предзаказ сегодня, чтобы зафиксировать специальную цену краудфандинга
                и получить расширенный набор промо-карт бесплатно.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenPreorder}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#107c10] hover:bg-[#15803d] text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,124,16,0.5)] cursor-pointer active:scale-95"
                >
                  <span>Оформить предзаказ</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href="#rules"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/15 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Скачать правила PDF</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
