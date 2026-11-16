"use client";

import { useState } from "react";
import { Clock, Map, Leaf, Share2, Flame, Fuel, Zap, Cpu, Check, ArrowRight } from "lucide-react";
import { GAME_PILLARS } from "@/data/gameData";

const ERAS_DATA = [
  {
    id: "steam",
    eraNumber: "01",
    title: "Паровая Эра",
    period: "XIX — НАЧАЛО XX ВЕКА",
    icon: Flame,
    co2: "Высокий (+4)",
    techPill: "Уголь & Викторианская сталь",
    description:
      "Первые шаги индустриализации. Прокладка чугунных рельсовых путей, запуск первых паровых омнибусов и соединение сырьевых шахт с развивающимся центром.",
    keyVehicles: ["Конный трамвай (конка)", "Паровой омнибус", "Паровоз серии 0-4-0"],
    gameplayFocus:
      "Низкая себестоимость строительства веток, но необходимость закупки угля и штрафы за раннее задымление.",
  },
  {
    id: "ice",
    eraNumber: "02",
    title: "Эра ДВС & Индустрии",
    period: "СЕРЕДИНА XX ВЕКА",
    icon: Fuel,
    co2: "Критический (+6)",
    techPill: "Дизель & Автострады",
    description:
      "Взрывной рост городов и логистики. Освоение дизельных автобусов, строительство широких магистралей и запуск грузовых узлов.",
    keyVehicles: ["Дизельный автобус ЛиАЗ", "Магистральный тепловоз", "Грузовой паром"],
    gameplayFocus:
      "Резкий рост скорости перевозок, но появление механики пробок на узких городских перекрестках.",
  },
  {
    id: "electric",
    eraNumber: "03",
    title: "Электрическая Эра",
    period: "КОНЕЦ XX — XXI ВЕК",
    icon: Zap,
    co2: "Умеренный (+1)",
    techPill: "Тяговые батареи & Метро",
    description:
      "Эра подземного рельсового транзита и чистых электробусных парков. Интеграция транспортных карт и масштабные субсидии мэрии.",
    keyVehicles: ["Скоростное метро", "Электробус с пантографом", "Скоростной экспресс"],
    gameplayFocus:
      "Высокая стартовая стоимость электрификации линий, компенсируемая субсидиями мэрии за экологию.",
  },
  {
    id: "autonomous",
    eraNumber: "04",
    title: "Эра Автономии & AI",
    period: "БУДУЩЕЕ 2035+",
    icon: Cpu,
    co2: "Нулевой (0)",
    techPill: "Квантовый Маглев & AI-Рой",
    description:
      "Мегаполис под управлением транспортного искусственного интеллекта. Поезда на магнитной подушке, рои летающих аэротакси и полное исчезновение пробок.",
    keyVehicles: ["Маглев-экспресс 600 км/ч", "Беспилотное аэротакси", "Автономный рой челноков"],
    gameplayFocus:
      "Максимальный приток победных очков, ликвидация пробок и соревнование за глобальные городские мега-контракты.",
  },
];

export default function AboutGame() {
  const [selectedEra, setSelectedEra] = useState(0);

  const pillarIcons: Record<string, typeof Clock> = {
    Clock,
    Map,
    Leaf,
    Share2,
  };

  const currentEra = ERAS_DATA[selectedEra];

  return (
    <section id="about" className="py-28 bg-[#06070a] relative bg-tech-grid border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Maximize style with mono tag) */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-white/5 text-[#d4ff00] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
            SPECIFICATIONS // GAMEPLAY PILLARS
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
            Столетие Эволюции
            <span className="block text-slate-500">В Одной Коробке</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Вы возглавляете конкурирующие транспортные синдикаты. Ваша цель — спроектировать
            инфраструктуру, которая выдержит испытание временем и технологическими революциями.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {GAME_PILLARS.map((pillar, idx) => {
            const Icon = pillarIcons[pillar.icon] || Clock;
            return (
              <div
                key={idx}
                className="group rounded-3xl bg-[#0d0f14] border border-white/[0.08] p-7 transition-all duration-300 hover:border-[#d4ff00]/40 hover:-translate-y-1 glow-card glow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center group-hover:bg-[#d4ff00] group-hover:text-black transition-all">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-[#d4ff00] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight uppercase group-hover:text-[#d4ff00] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-1 text-[11px] font-mono text-slate-500 group-hover:text-white transition-colors">
                  <span>ФАКТОР СТРАТЕГИИ</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#d4ff00]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Era Timeline Showcase (Maximize Product Spec Style) */}
        <div className="rounded-3xl bg-[#0d0f14] border border-white/[0.08] p-6 sm:p-10 glow-card relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-8 border-b border-white/[0.06]">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#d4ff00] uppercase block mb-1">
                TIMELINE ENGINE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Интерактивная Хроника 4-х Эпох
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400">
              [ ВЫБЕРИТЕ ЭПОХУ ДЛЯ ИЗУЧЕНИЯ ПАРАМЕТРОВ ]
            </div>
          </div>

          {/* Era Selectors */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {ERAS_DATA.map((era, idx) => {
              const EraIcon = era.icon;
              const isActive = selectedEra === idx;
              return (
                <button
                  key={era.id}
                  onClick={() => setSelectedEra(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-white/10 border-[#d4ff00] text-white shadow-[0_0_20px_rgba(212,255,0,0.15)]"
                      : "bg-black/40 border-white/[0.06] text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#d4ff00] text-black"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      EPOCH // {era.eraNumber}
                    </span>
                    <EraIcon
                      className={`w-4 h-4 ${
                        isActive ? "text-[#d4ff00]" : "text-slate-600"
                      }`}
                    />
                  </div>
                  <div className="font-extrabold text-white text-sm sm:text-base tracking-tight uppercase">
                    {era.title}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">
                    {era.period}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Era Spec Card */}
          <div className="rounded-2xl bg-black/60 border border-white/[0.08] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#d4ff00]/15 text-[#d4ff00] border border-[#d4ff00]/30">
                    {currentEra.techPill}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10">
                    Углеродный след: {currentEra.co2}
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                  {currentEra.title} ({currentEra.period})
                </h4>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentEra.description}
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-slate-300">
                  <span className="text-[#d4ff00] font-mono font-bold uppercase block mb-1">
                    Ключевое правило эпохи:
                  </span>
                  {currentEra.gameplayFocus}
                </div>
              </div>

              {/* Right vehicle list */}
              <div className="lg:col-span-5 bg-[#090b10] border border-white/[0.08] rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                    ПОДВИЖНОЙ СОСТАВ ЭПОХИ
                  </span>
                  <span className="text-[10px] font-mono text-[#d4ff00]">
                    3 ЕДИНИЦЫ
                  </span>
                </div>

                <div className="space-y-2.5">
                  {currentEra.keyVehicles.map((vehicle, vIdx) => (
                    <div
                      key={vIdx}
                      className="flex items-center gap-3 text-xs text-white bg-white/[0.02] p-3 rounded-xl border border-white/[0.05]"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#d4ff00]/15 text-[#d4ff00] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-medium">{vehicle}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
