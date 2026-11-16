"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/gameData";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Все вопросы" },
    { id: "gameplay", label: "Геймплей и правила" },
    { id: "components", label: "Компоненты" },
    { id: "shipping", label: "Доставка и предзаказ" },
  ];

  const filteredFaq =
    activeCategory === "all"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleItem = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 bg-[#06070a] relative border-b border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-white/5 text-[#d4ff00] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
            SUPPORT // FAQ KNOWLEDGE BASE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Часто Задаваемые
            <span className="block text-slate-500">Вопросы</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Все детали о правилах, соло-режиме, материалах и сроках доставки.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIdx(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#d4ff00] text-black font-extrabold shadow-[0_0_15px_rgba(212,255,0,0.25)]"
                  : "bg-[#0d0f14] text-slate-400 hover:text-white border border-white/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaq.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d0f14] border border-white/[0.08] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                >
                  <span className="font-extrabold text-white text-sm sm:text-base uppercase tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-[#d4ff00] border-[#d4ff00] text-black rotate-180"
                        : "bg-white/5 border-white/10 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] bg-black/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
