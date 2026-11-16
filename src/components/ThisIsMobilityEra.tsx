"use client";

import { useState } from "react";
import { Train, ChevronRight } from "lucide-react";

const FEATURES = [
  {
    id: "network",
    title: "Единая Транспортная Сеть",
    subtitle: "Соединяйте 30+ столиц Европы",
    description:
      "Прокладывайте рельсовые, автомобильные и маглев-маршруты. Получайте дивиденды, когда соперники используют ваши пересадочные вокзалы для транзита пассажиров.",
  },
  {
    id: "economy",
    title: "Экономика и Валютные Потоки",
    subtitle: "Динамичный рынок инвестиций",
    description:
      "Каждая страна оперирует своими контрактами. Грамотно управляйте капиталом: покупайте патенты на ранних фазах раунда, чтобы диктовать условия конкурентам.",
  },
  {
    id: "epochs",
    title: "4 Технологические Эпохи",
    subtitle: "Столетие эволюции мегаполиса",
    description:
      "Партия начинается с паровых омнибусов и конки, проходит через дизельный бум XX века и завершается ультраскоростными квантовыми маглевами.",
  },
  {
    id: "eco",
    title: "Экологический Баланс и CO₂",
    subtitle: "Углеродный индекс городов",
    description:
      "Инвестируйте в чистый электротранспорт. Города с высоким уровнем загрязнения облагаются штрафами мэрии и теряют победные очки в финале.",
  },
  {
    id: "solo",
    title: "Одиночный Режим «Автома-Мэр»",
    subtitle: "Играйте соло против ИИ города",
    description:
      "Специальный алгоритмический режим: соревнуйтесь с мэрией мегаполиса, преодолевая транспортные коллапсы и забастовки в одиночной кампании.",
  },
];

export default function ThisIsMobilityEra() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 bg-black relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Artwork Frame (Holding/Playing the game) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group">
              {/* Cinematic lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#107c10]/20 via-transparent to-transparent pointer-events-none" />

              <div className="p-8 sm:p-12 min-h-[420px] flex flex-col justify-between relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#107c10]/20 text-[#22c55e] border border-[#107c10]/40">
                    GAMEPLAY ARCHITECTURE
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    FEATURE 0{activeIdx + 1} / 05
                  </span>
                </div>

                <div className="space-y-4 my-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#107c10] text-white flex items-center justify-center font-bold shadow-lg shadow-[#107c10]/30">
                    <Train className="w-7 h-7" />
                  </div>
                  <h4 className="text-3xl font-black text-white uppercase tracking-tight">
                    {FEATURES[activeIdx].title}
                  </h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {FEATURES[activeIdx].description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>СЛОЖНОСТЬ: 2.8 / 5.0</span>
                  <span className="text-[#22c55e]">ДЛЯ 2–5 ИГРОКОВ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "THIS IS AN XBOX" style Title & Interactive Accordion list */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs font-mono text-[#22c55e] font-bold uppercase tracking-widest mb-2">
                ФИЛОСОФИЯ ИГРЫ
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none">
                THIS IS MOBILITY ERA
              </h2>
            </div>

            {/* Vertical Interactive Feature List (Xbox Green Active Bar) */}
            <div className="space-y-4">
              {FEATURES.map((item, idx) => {
                const isActive = activeIdx === idx;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                      isActive
                        ? "bg-zinc-900/90 border-l-4 border-[#107c10] pl-5 shadow-lg"
                        : "bg-transparent border-l-4 border-transparent hover:bg-zinc-900/40 pl-5 text-zinc-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-extrabold text-base sm:text-lg text-white uppercase tracking-tight">
                        {item.title}
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? "text-[#22c55e] rotate-90" : "text-zinc-600"
                        }`}
                      />
                    </div>

                    {isActive && (
                      <p className="text-xs sm:text-sm text-zinc-300 mt-2 font-normal leading-relaxed animate-[fadeInDown_0.2s_ease-out]">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
