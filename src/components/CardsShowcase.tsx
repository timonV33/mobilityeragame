"use client";

import { useState } from "react";
import { Zap, Award, Coins, X, ArrowUpRight } from "lucide-react";
import { TECH_CARDS_SAMPLE } from "@/data/gameData";
import { TechCard } from "@/types/game";

export default function CardsShowcase() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Все");
  const [inspectCard, setInspectCard] = useState<TechCard | null>(null);

  const filterOptions = [
    "Все",
    "Паровая эра",
    "Эра ДВС",
    "Электрическая эра",
    "Эра Автономии",
  ];

  const filteredCards =
    selectedFilter === "Все"
      ? TECH_CARDS_SAMPLE
      : TECH_CARDS_SAMPLE.filter((c) => c.era === selectedFilter);

  return (
    <section id="cards" className="py-28 bg-[#06070a] relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-white/5 text-[#d4ff00] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
              COLLECTION // 114 TECH CARDS
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              Древо
              <span className="block text-slate-500">Инноваций</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Карты технологий, патентов и кризисов. Драфтуйте мощные эффекты, создавайте цепочки
              интермодальных перевозок и получайте победные очки.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? "bg-[#d4ff00] text-black font-extrabold shadow-[0_0_15px_rgba(212,255,0,0.25)]"
                    : "bg-[#0d0f14] text-slate-400 hover:text-white border border-white/[0.08]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              onClick={() => setInspectCard(card)}
              className="group relative rounded-3xl bg-[#0d0f14] border border-white/[0.08] hover:border-[#d4ff00]/50 p-6 glow-card glow-card-hover transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header Tag and Cost */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {card.era}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 bg-[#d4ff00]/15 text-[#d4ff00] border border-[#d4ff00]/30 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold">
                      <Coins className="w-3 h-3 text-[#d4ff00]" />
                      {card.cost} М
                    </span>
                    <span className="flex items-center gap-1 bg-white/10 text-white border border-white/15 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold">
                      <Award className="w-3 h-3 text-[#d4ff00]" />
                      +{card.vp} ПО
                    </span>
                  </div>
                </div>

                {/* Card Artwork Frame */}
                <div className="h-36 rounded-2xl bg-black/60 border border-white/[0.08] p-4 flex flex-col justify-between mb-4 group-hover:border-[#d4ff00]/30 transition-colors">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase">
                    <span>{card.type}</span>
                    <span className="text-[#d4ff00]">PATENT_ID#{card.id.slice(-2)}</span>
                  </div>

                  <div className="text-center py-1">
                    <div className="w-8 h-8 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/20 text-[#d4ff00] flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="font-extrabold text-white text-base tracking-tight uppercase">
                      {card.title}
                    </div>
                  </div>

                  <div className="text-[9px] font-mono text-slate-600 text-right">
                    MOBILITY ERA • COLLECTION
                  </div>
                </div>

                {/* Effect Text */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.05] text-xs text-slate-300 leading-relaxed mb-4 min-h-[64px]">
                  <span className="text-[#d4ff00] font-mono font-bold uppercase block mb-0.5">
                    ЭФФЕКТ:
                  </span>
                  {card.effect}
                </div>
              </div>

              {/* Flavor Text and Inspect Link */}
              <div>
                <p className="text-[11px] text-slate-500 italic mb-4 border-l border-white/20 pl-2">
                  {card.flavor}
                </p>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-white transition-colors">
                  <span>ТИП: {card.type.toUpperCase()}</span>
                  <span className="flex items-center gap-1 text-[#d4ff00] font-bold">
                    <span>ПОДРОБНЕЕ</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Inspect Modal */}
      {inspectCard && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-[#0d0f14] border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-[fadeInUp_0.2s_ease-out]">
            <button
              onClick={() => setInspectCard(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#d4ff00]/15 text-[#d4ff00] border border-[#d4ff00]/30">
                {inspectCard.era}
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10">
                {inspectCard.type}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
              {inspectCard.title}
            </h3>

            <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/[0.08] my-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06]">
                <span className="text-slate-400 block mb-0.5">СТОИМОСТЬ:</span>
                <span className="text-base font-bold text-[#d4ff00]">{inspectCard.cost} Монет</span>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06]">
                <span className="text-slate-400 block mb-0.5">ПОБЕДНЫЕ ОЧКИ:</span>
                <span className="text-base font-bold text-white">+{inspectCard.vp} ПО</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 mb-4">
              <div className="text-[10px] font-mono font-bold text-[#d4ff00] uppercase mb-1">
                ТЕХНИЧЕСКИЙ ЭФФЕКТ В ИГРЕ:
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">{inspectCard.effect}</p>
            </div>

            <p className="text-xs text-slate-400 italic mb-6">
              {inspectCard.flavor}
            </p>

            <button
              onClick={() => setInspectCard(null)}
              className="w-full py-3.5 rounded-full bg-[#d4ff00] text-black font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(212,255,0,0.3)]"
            >
              Закрыть карту
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
