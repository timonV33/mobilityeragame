"use client";

import { useState } from "react";
import { Package, MapPin, Box, Layers, Coins, Check } from "lucide-react";
import { COMPONENTS_DATA } from "@/data/gameData";

export default function ComponentsShowcase() {
  const [selectedId, setSelectedId] = useState<string>(COMPONENTS_DATA[0].id);

  const categoryIcons: Record<string, typeof Package> = {
    board: MapPin,
    figures: Box,
    cards: Layers,
    boards: Package,
    tokens: Coins,
  };

  const currentItem =
    COMPONENTS_DATA.find((c) => c.id === selectedId) || COMPONENTS_DATA[0];

  return (
    <section id="components" className="py-28 bg-[#06070a] relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-white/5 text-[#d4ff00] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
              HARDWARE & UNBOXING // 280+ PIECES
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              Анатомия
              <span className="block text-slate-500">Комплектации</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Немецкий переплетный картон 2.5 мм, фигурки из твердого бука с ультрафиолетовой
              печатью и литые металлические монеты.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-[#d4ff00] font-bold">280+</span>
            <span>ДЕТАЛЕЙ ПРЕМИУМ-КЛАССА</span>
          </div>
        </div>

        {/* Component Tabs (Maximize style pill buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {COMPONENTS_DATA.map((item) => {
            const Icon = categoryIcons[item.category] || Package;
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#d4ff00] text-black font-extrabold shadow-[0_0_20px_rgba(212,255,0,0.3)] scale-[1.02]"
                    : "bg-[#0d0f14] text-slate-300 hover:text-white hover:bg-white/10 border border-white/[0.08]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-black" : "text-[#d4ff00]"}`} />
                <span>{item.name.split(" ")[0]} {item.name.split(" ")[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Component Showcase Card */}
        <div className="rounded-3xl bg-[#0d0f14] border border-white/[0.08] p-6 sm:p-12 glow-card relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Box / Showcase Frame */}
            <div className="lg:col-span-6 bg-gradient-to-br from-black via-[#080a0f] to-black rounded-3xl border border-white/10 p-8 sm:p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4ff00]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#d4ff00]/15 text-[#d4ff00] border border-[#d4ff00]/30">
                  {currentItem.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {currentItem.count}
                </span>
              </div>

              {/* Graphic Icon Center */}
              <div className="my-10 text-center z-10">
                <div className="inline-flex p-8 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl mb-4 group-hover:scale-105 group-hover:border-[#d4ff00]/50 transition-all duration-300">
                  <Package className="w-16 h-16 text-[#d4ff00] stroke-[1.8]" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  {currentItem.name}
                </div>
                <div className="text-xs font-mono text-slate-500 mt-1">
                  SKU // ME-HARDWARE-0{currentItem.id.toUpperCase()}
                </div>
              </div>

              <div className="z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/[0.08] pt-4">
                <span>МАТЕРИАЛ: FSC CERTIFIED</span>
                <span className="text-[#d4ff00]">GRADE: TOURNAMENT</span>
              </div>
            </div>

            {/* Specifications on Right */}
            <div className="lg:col-span-6 space-y-7">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#d4ff00] uppercase block mb-1">
                  COMPONENT SPEC SHEET
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  {currentItem.name}
                </h3>
                <div className="text-sm font-mono text-slate-400 mt-2">
                  Количество в комплекте: <span className="text-white font-bold">{currentItem.count}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {currentItem.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  КЛЮЧЕВЫЕ ХАРАКТЕРИСТИКИ:
                </div>
                <div className="space-y-2.5">
                  {currentItem.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-[#d4ff00]/15 text-[#d4ff00] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Spec Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08]">
                <div className="p-3.5 rounded-2xl bg-black/50 border border-white/[0.06]">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Плотность</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-1">2.5 мм картон</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/50 border border-white/[0.06]">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Покрытие</div>
                  <div className="text-xs sm:text-sm font-bold text-[#d4ff00] mt-1">Soft-Touch Лён</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/50 border border-white/[0.06]">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Органайзер</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-1">Tray-Lock™</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
