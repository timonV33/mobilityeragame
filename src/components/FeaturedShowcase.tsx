"use client";

import { ChevronRight, Check } from "lucide-react";
import { GAME_EDITIONS } from "@/data/gameData";
import { GameEdition } from "@/types/game";

interface FeaturedShowcaseProps {
  onSelectEdition: (edition: GameEdition) => void;
}

export default function FeaturedShowcase({ onSelectEdition }: FeaturedShowcaseProps) {
  const standard = GAME_EDITIONS[0];
  const deluxe = GAME_EDITIONS[1];

  return (
    <section className="py-24 bg-black relative border-b border-zinc-900 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#107c10]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Yellow Tag (Matching Reference: ROG Xbox Ally X & ROG Xbox Ally) */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-wider bg-[#ffd000] text-black mb-4">
          <span>ПРЕДЗАКАЗ 2026 ГОДА</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase max-w-3xl mx-auto">
          Mobility Era: Deluxe Edition & Standard Edition
        </h2>
        
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-normal leading-relaxed">
          Две комплектации флагманской настольной игры. Премиальные материалы, детальные фигурки
          транспорта и уникальные карты технологий.
        </p>

        {/* Green Action Button (Xbox Style) */}
        <div className="mt-6 mb-16">
          <button
            onClick={() => onSelectEdition(deluxe)}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#107c10] hover:bg-[#15803d] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,124,16,0.5)] cursor-pointer active:scale-95"
          >
            <span>Выбрать комплектацию</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Side-by-side Hardware/Edition Showcases (Xbox Black vs White style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Deluxe Edition (Dark theme) */}
          <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-between text-left relative overflow-hidden group hover:border-[#107c10] transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#107c10]/15 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#107c10]/20 text-[#22c55e] border border-[#107c10]/40">
                  DELUXE // ПРЕМИУМ
                </span>
                <span className="text-xl font-black text-white font-mono">
                  {deluxe.price.toLocaleString("ru-RU")} ₽
                </span>
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                Deluxe Издание с Металлом
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Двухслойные акриловые планшеты, 40 литых металлических монет и кастомный пластиковый органайзер.
              </p>

              {/* Visual simulated mockup of box & pieces */}
              <div className="h-48 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-4 flex flex-col justify-between mb-6 relative">
                <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>ЧЕРНЫЙ ОНИКС</span>
                  <span className="text-[#22c55e] font-bold">40 МЕТАЛЛИЧЕСКИХ МОНЕТ</span>
                </div>
                <div className="text-center my-auto">
                  <div className="text-lg font-black text-white tracking-widest uppercase">
                    DELUXE COLLECTOR BOX
                  </div>
                  <div className="text-xs text-zinc-500 font-mono mt-1">
                    DUAL-LAYER BOARDS • CUSTOM TRAY
                  </div>
                </div>
                <div className="text-[10px] font-mono text-zinc-500 text-right">
                  ME-DLX-2026
                </div>
              </div>

              {/* Specs checklist */}
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>40 чеканных металлических монет</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>Двухслойные акриловые планшеты</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>Эксклюзивный промо-набор «Стартапы»</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-900">
              <button
                onClick={() => onSelectEdition(deluxe)}
                className="w-full py-3 rounded-full bg-[#107c10] hover:bg-[#15803d] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Предзаказать Deluxe</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Standard Edition (Clean Light / Slate theme) */}
          <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-between text-left relative overflow-hidden group hover:border-zinc-600 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-white/10 text-zinc-300 border border-white/15">
                  STANDARD // КЛАССИКА
                </span>
                <span className="text-xl font-black text-white font-mono">
                  {standard.price.toLocaleString("ru-RU")} ₽
                </span>
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                Стандартное Издание
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Полный базовый комплект игры со всеми компонентами для увлекательных партий от 2 до 5 игроков.
              </p>

              {/* Visual simulated mockup of standard box */}
              <div className="h-48 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/60 p-4 flex flex-col justify-between mb-6 relative">
                <div className="flex justify-between text-[11px] font-mono text-zinc-300">
                  <span>КЛАССИЧЕСКИЙ БЕЛЫЙ</span>
                  <span className="text-white font-bold">120 ФИГУРОК ТРАНСПОРТА</span>
                </div>
                <div className="text-center my-auto">
                  <div className="text-lg font-black text-white tracking-widest uppercase">
                    MOBILITY ERA CORE BOX
                  </div>
                  <div className="text-xs text-zinc-400 font-mono mt-1">
                    9 МОДУЛЬНЫХ ТАЙЛОВ КАРТЫ ЕВРОПЫ
                  </div>
                </div>
                <div className="text-[10px] font-mono text-zinc-500 text-right">
                  ME-STD-2026
                </div>
              </div>

              {/* Specs checklist */}
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>120 деревянных фигурок техники</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>114 карт увеличенного формата</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>150+ жетонов пассажиров и монет</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-900">
              <button
                onClick={() => onSelectEdition(standard)}
                className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/15 transition-colors cursor-pointer"
              >
                <span>Предзаказать Standard</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
