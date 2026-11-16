"use client";

import { ChevronRight, Check } from "lucide-react";
import { GAME_EDITIONS } from "@/data/gameData";
import { GameEdition } from "@/types/game";

interface EditionsProps {
  onSelectEdition: (edition: GameEdition) => void;
}

export default function Editions({ onSelectEdition }: EditionsProps) {
  const accessories = [
    {
      id: "acc-coins",
      name: "Набор Литых Металлических Монет",
      price: 1890,
      description: "40 тяжелых чеканных монет с гравировкой эпох в тканевом бархатном мешочке.",
      badge: "Металл",
    },
    {
      id: "acc-mat",
      name: "Неопреновый Плеймат 80×80 см",
      price: 2490,
      description: "Прошитые края, антискользящая резиновая основа и яркая детализированная карта Европы.",
      badge: "Неопрен",
    },
  ];

  return (
    <section id="editions" className="py-24 bg-white text-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: "Built to game with Xbox" style headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase text-zinc-950">
            Комплектации Mobility Era
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal">
            Выберите комплект под формат ваших игровых вечеров: от классического семейного набора
            до премиального издания с литыми металлическими монетами.
          </p>
        </div>

        {/* 3 Core Game Editions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-stretch">
          {GAME_EDITIONS.map((edition) => (
            <div
              key={edition.id}
              className="bg-zinc-50 border border-zinc-200/90 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-zinc-400 transition-all duration-300 group"
            >
              <div>
                {/* Mockup Box Representation */}
                <div className="h-44 rounded-2xl bg-zinc-900 border border-zinc-800 p-5 flex flex-col justify-between mb-6 text-white relative overflow-hidden group-hover:bg-black transition-colors">
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                    <span className="uppercase">{edition.badge || "ОФИЦИАЛЬНОЕ ИЗДАНИЕ"}</span>
                    <span className="text-[#22c55e] font-bold">2026 EDITION</span>
                  </div>

                  <div className="text-center my-auto">
                    <div className="text-base sm:text-lg font-black tracking-wider uppercase">
                      {edition.name}
                    </div>
                    <div className="text-xs text-zinc-400 font-mono mt-1">
                      MOBILITY ERA CORE
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-zinc-500 text-right">
                    ME-{edition.id.toUpperCase()}
                  </div>
                </div>

                {/* Edition Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-black text-zinc-950 uppercase tracking-tight mb-1">
                    {edition.name}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed min-h-[36px]">
                    {edition.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6 pb-4 border-b border-zinc-200">
                  <span className="text-2xl font-black text-zinc-950 font-mono">
                    {edition.price.toLocaleString("ru-RU")} ₽
                  </span>
                  {edition.originalPrice && (
                    <span className="text-xs font-mono text-zinc-400 line-through">
                      {edition.originalPrice.toLocaleString("ru-RU")} ₽
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {edition.includes.slice(0, 4).map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                      <Check className="w-3.5 h-3.5 text-[#107c10] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Green Text Link with Arrow (Xbox Style) */}
              <div className="pt-4 border-t border-zinc-200">
                <button
                  onClick={() => onSelectEdition(edition)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-[#107c10] hover:text-[#15803d] transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                >
                  <span>Предзаказать {edition.name.split(" ")[0]}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: "Handheld gaming accessories" style headline */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2 pt-6 border-t border-zinc-200">
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-950">
            Аксессуары и Дополнения
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600">
            Улучшите тактильные ощущения от игры с премиальными компонентами
          </p>
        </div>

        {/* 2 Accessories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {accessories.map((acc) => (
            <div
              key={acc.id}
              className="bg-zinc-50 border border-zinc-200/90 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all group"
            >
              <div>
                <div className="h-40 rounded-2xl bg-zinc-900 border border-zinc-800 p-5 flex flex-col justify-between mb-6 text-white">
                  <span className="text-[10px] font-mono text-[#22c55e] font-bold uppercase">
                    {acc.badge}
                  </span>
                  <div className="text-center my-auto text-base font-black tracking-wider uppercase">
                    {acc.name}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 text-right">
                    ME-ACC
                  </span>
                </div>

                <h4 className="text-lg font-black text-zinc-950 uppercase tracking-tight mb-1">
                  {acc.name}
                </h4>
                <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
                  {acc.description}
                </p>
                <div className="text-xl font-black font-mono text-zinc-950 mb-6">
                  {acc.price.toLocaleString("ru-RU")} ₽
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <button
                  onClick={() => alert(`Аксессуар «${acc.name}» добавлен к заказу!`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-[#107c10] hover:text-[#15803d] transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                >
                  <span>Добавить к заказу</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
