"use client";

import { ChevronRight, Layers, MapPin } from "lucide-react";

export default function SplitBanner() {
  return (
    <section className="relative bg-black overflow-hidden border-b border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] relative">
        
        {/* Left Side: Capital Cities & Landmarks */}
        <div className="relative p-10 sm:p-16 flex flex-col justify-end bg-gradient-to-t from-black via-zinc-950/80 to-zinc-900/40 border-b md:border-b-0 md:border-r border-zinc-800/80 overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#107c10]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          
          <div className="relative z-10 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#107c10] text-white flex items-center justify-center font-bold shadow-lg">
              <MapPin className="w-5 h-5" />
            </div>

            <div className="text-[10px] font-mono text-[#22c55e] font-bold uppercase tracking-widest">
              30+ СТОЛИЦ ЕВРОПЫ
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Модульная Карта и Достопримечательности
            </h3>

            <p className="text-sm text-zinc-300 max-w-md font-normal leading-relaxed">
              От Эйфелевой башни до Колизея: прокладывайте светящиеся линии скоростных поездов,
              соединяйте исторические хабы и получайте городские дивиденды.
            </p>

            <div>
              <a
                href="#components"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/15 backdrop-blur-md transition-all"
              >
                <span>Смотреть поле</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: 114 Tech & Life Cards */}
        <div className="relative p-10 sm:p-16 flex flex-col justify-end bg-gradient-to-t from-black via-zinc-950/80 to-zinc-900/40 overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#22c55e]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          <div className="relative z-10 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#107c10] text-white flex items-center justify-center font-bold shadow-lg">
              <Layers className="w-5 h-5" />
            </div>

            <div className="text-[10px] font-mono text-[#22c55e] font-bold uppercase tracking-widest">
              КОЛОДА ИННОВАЦИЙ // 114 КАРТ
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Патенты, События и Городские Контракты
            </h3>

            <p className="text-sm text-zinc-300 max-w-md font-normal leading-relaxed">
              Драфтуйте карты 4-х эпох, открывайте маглевы, электробусы и аэротакси, создавая
              непобедимые тактические синергии в каждой партии.
            </p>

            <div>
              <a
                href="#cards"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#107c10] hover:bg-[#15803d] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(16,124,16,0.5)]"
              >
                <span>Изучить колоду карт</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
