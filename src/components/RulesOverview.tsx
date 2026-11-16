"use client";

import { useState } from "react";
import { BookOpen, Download, ArrowRight, Lightbulb, Trophy, CheckCircle2 } from "lucide-react";
import { GAME_PHASES } from "@/data/gameData";

export default function RulesOverview() {
  const [activePhase, setActivePhase] = useState<number>(1);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const selectedPhase =
    GAME_PHASES.find((p) => p.number === activePhase) || GAME_PHASES[0];

  const handleDownloadRules = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="rules" className="py-28 bg-[#06070a] relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-white/5 text-[#d4ff00] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
              USER MANUAL // ROUND STRUCTURE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              Структура
              <span className="block text-slate-500">Раунда Игры</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              4 логичные фазы в каждом раунде. Благодаря памяткам на двухслойных планшетах,
              новички начинают уверенно играть уже через 10 минут.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            [ ВРЕМЯ ОСВОЕНИЯ: 10 МИНУТ ]
          </div>
        </div>

        {/* Phase Selectors Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {GAME_PHASES.map((phase) => (
            <button
              key={phase.number}
              onClick={() => setActivePhase(phase.number)}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                activePhase === phase.number
                  ? "bg-[#0d0f14] border-[#d4ff00] text-white shadow-[0_0_25px_rgba(212,255,0,0.15)]"
                  : "bg-[#0d0f14]/60 border-white/[0.06] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    activePhase === phase.number
                      ? "bg-[#d4ff00] text-black"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  PHASE // 0{phase.number}
                </span>
                <ArrowRight
                  className={`w-3.5 h-3.5 ${
                    activePhase === phase.number ? "text-[#d4ff00]" : "text-slate-600"
                  }`}
                />
              </div>
              <div className="font-extrabold text-sm sm:text-base text-white tracking-tight uppercase">
                {phase.name}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Phase Detail Box */}
        <div className="rounded-3xl bg-[#0d0f14] border border-white/[0.08] p-6 sm:p-10 glow-card mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#d4ff00] uppercase block mb-1">
                  ИНСТРУКЦИЯ ХОДА
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {selectedPhase.name}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2">
                  {selectedPhase.summary}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  ПОШАГОВЫЙ ПОРЯДОК ДЕЙСТВИЙ:
                </div>
                <div className="space-y-2.5">
                  {selectedPhase.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-2xl bg-black/50 border border-white/[0.06]"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#d4ff00]/15 text-[#d4ff00] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedPhase.tip && (
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[#d4ff00] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white font-mono font-bold uppercase block mb-0.5">
                      СОВЕТ СТРАТЕГА:
                    </strong>
                    {selectedPhase.tip}
                  </div>
                </div>
              )}
            </div>

            {/* Victory Conditions Strip */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-3xl bg-black/60 border border-white/[0.08] space-y-4">
                <div className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-wider">
                  <Trophy className="w-4 h-4 text-[#d4ff00]" />
                  <span>Условия победы</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Побеждает корпорация с максимальной суммой Победных Очков (ПО):
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff00] shrink-0" />
                    <span>Связанные ключевые районы</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff00] shrink-0" />
                    <span>Выполненные городские контракты</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff00] shrink-0" />
                    <span>Внедренные эко-технологии</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff00] shrink-0" />
                    <span>Капитал в казне на финише</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Download PDF Strip (Maximize high-contrast pill banner) */}
        <div className="rounded-3xl bg-[#0d0f14] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 glow-card">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight flex items-center justify-center sm:justify-start gap-2">
              <BookOpen className="w-5 h-5 text-[#d4ff00]" />
              Официальная Книга Правил (PDF)
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              Полный свод правил v1.2 с цветными примерами ходов и разъяснениями редких ситуаций (16 стр., 12 МБ).
            </p>
          </div>

          <button
            onClick={handleDownloadRules}
            className="px-6 py-3.5 rounded-full bg-[#d4ff00] hover:bg-[#bbf000] text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-[0_0_20px_rgba(212,255,0,0.3)] active:scale-95"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>{downloadSuccess ? "ФАЙЛ СКАЧАН!" : "СКАЧАТЬ ПРАВИЛА (PDF)"}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
