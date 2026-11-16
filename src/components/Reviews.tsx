"use client";

import { Star, MessageSquareQuote } from "lucide-react";
import { TESTIMONIALS, GAME_INFO } from "@/data/gameData";

export default function Reviews() {
  return (
    <section className="py-28 bg-[#06070a] relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-white/5 text-[#d4ff00] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
              PRESS & COMMUNITY REVIEWS
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              Оценки
              <span className="block text-slate-500">Критиков и Игроков</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Более 120 игровых сессий на фестивалях настольных игр. Высшие оценки от судей
              и лидеров мнений сообщества.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-[#d4ff00] font-bold">120+</span>
            <span>СЫГРАННЫХ ПАРТИЙ</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#0d0f14] border border-white/[0.08] hover:border-[#d4ff00]/40 p-8 flex flex-col justify-between glow-card glow-card-hover transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#d4ff00]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4ff00]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-8">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="font-extrabold text-white text-sm uppercase tracking-tight">
                  {item.author}
                </div>
                <div className="text-[11px] font-mono text-[#d4ff00] mt-0.5">
                  {item.role}
                </div>
                {item.channel && (
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                    {item.channel}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip (Maximize tech spec counters) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl bg-[#0d0f14] border border-white/[0.08]">
            <div className="text-3xl sm:text-4xl font-black font-mono text-[#d4ff00]">
              {GAME_INFO.stats.bggRating}
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase">
              BGG RATING
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#0d0f14] border border-white/[0.08]">
            <div className="text-3xl sm:text-4xl font-black font-mono text-white">
              {GAME_INFO.stats.playtestsCount}
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase">
              PLAYTEST SESSIONS
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#0d0f14] border border-white/[0.08]">
            <div className="text-3xl sm:text-4xl font-black font-mono text-white">
              {GAME_INFO.stats.componentsTotal}
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase">
              HARDWARE PIECES
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#0d0f14] border border-white/[0.08]">
            <div className="text-3xl sm:text-4xl font-black font-mono text-[#d4ff00]">
              {GAME_INFO.stats.cardsTotal}
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase">
              TECH DECK CARDS
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
