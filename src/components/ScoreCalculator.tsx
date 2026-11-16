"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Trophy, Plus, Trash2, Sparkles, Award } from "lucide-react";

interface PlayerScore {
  id: string;
  name: string;
  color: string;
  routes: number;
  contracts: number;
  techCards: number;
  ecoBonus: number;
  coins: number;
}

const DEFAULT_PLAYERS: PlayerScore[] = [
  {
    id: "p1",
    name: "КОРПОРАЦИЯ АЛЬФА",
    color: "#d4ff00",
    routes: 24,
    contracts: 18,
    techCards: 15,
    ecoBonus: 8,
    coins: 12,
  },
  {
    id: "p2",
    name: "СИНДИКАТ БЕТА",
    color: "#06b6d4",
    routes: 28,
    contracts: 12,
    techCards: 19,
    ecoBonus: 4,
    coins: 9,
  },
  {
    id: "p3",
    name: "ХАБ ОМЕГА",
    color: "#f59e0b",
    routes: 18,
    contracts: 22,
    techCards: 14,
    ecoBonus: -2,
    coins: 15,
  },
];

export default function ScoreCalculator() {
  const [players, setPlayers] = useState<PlayerScore[]>(DEFAULT_PLAYERS);

  const calculateTotal = (p: PlayerScore) => {
    const coinsVP = Math.floor(p.coins / 3);
    return p.routes + p.contracts + p.techCards + p.ecoBonus + coinsVP;
  };

  const updatePlayer = (
    id: string,
    field: keyof Omit<PlayerScore, "id" | "name" | "color">,
    value: number
  ) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: Number.isNaN(value) ? 0 : value } : p))
    );
  };

  const updatePlayerName = (id: string, name: string) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, name } : p))
    );
  };

  const addPlayer = () => {
    if (players.length >= 5) return;
    const colors = ["#a855f7", "#ec4899", "#3b82f6", "#eab308"];
    const newId = `p${Date.now()}`;
    setPlayers((prev) => [
      ...prev,
      {
        id: newId,
        name: `КОРПОРАЦИЯ ${prev.length + 1}`,
        color: colors[prev.length % colors.length],
        routes: 0,
        contracts: 0,
        techCards: 0,
        ecoBonus: 0,
        coins: 0,
      },
    ]);
  };

  const removePlayer = (id: string) => {
    if (players.length <= 1) return;
    setPlayers((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCelebrateWinner = () => {
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#d4ff00", "#ffffff", "#06b6d4", "#f59e0b"],
    });
  };

  const sortedPlayers = [...players].sort(
    (a, b) => calculateTotal(b) - calculateTotal(a)
  );
  const leader = sortedPlayers[0];

  return (
    <section id="calculator" className="py-28 bg-[#06070a] relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-white/5 text-[#d4ff00] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
              SCORING ENGINE // TABLE COMPANION
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              Калькулятор
              <span className="block text-slate-500">Победных Очков</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Инструмент для подсчета очков в финале партии прямо с мобильного телефона или ноутбука
              за игровым столом.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            {players.length < 5 && (
              <button
                onClick={addPlayer}
                className="px-4 py-2 rounded-full bg-[#0d0f14] hover:bg-white/10 text-white text-xs font-mono uppercase tracking-wider border border-white/10 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-[#d4ff00]" />
                <span>Игрок ({players.length}/5)</span>
              </button>
            )}
            <button
              onClick={handleCelebrateWinner}
              className="px-5 py-2 rounded-full bg-[#d4ff00] hover:bg-[#bbf000] text-black text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(212,255,0,0.3)] active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Фейерверк!</span>
            </button>
          </div>
        </div>

        {/* Live Leader Bar (Maximize style) */}
        <div className="rounded-3xl bg-[#0d0f14] border border-white/[0.08] p-5 sm:p-7 mb-8 flex flex-wrap items-center justify-between gap-4 glow-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d4ff00]/15 text-[#d4ff00] flex items-center justify-center font-bold">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                ТЕКУЩИЙ ЛИДЕР ПАРТИИ:
              </div>
              <div className="text-lg font-black text-white uppercase tracking-tight">
                {leader.name} — <span className="text-[#d4ff00]">{calculateTotal(leader)} ПО</span>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400">
            [ ФОРМУЛА: МАРШРУТЫ + КОНТРАКТЫ + ТЕХНОЛОГИИ + ЭКО-БОНУС + МОНЕТЫ/3 ]
          </div>
        </div>

        {/* Players Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {players.map((player) => {
            const total = calculateTotal(player);
            const isWinner = total === calculateTotal(leader);

            return (
              <div
                key={player.id}
                className={`rounded-3xl p-6 bg-[#0d0f14] border transition-all duration-300 ${
                  isWinner
                    ? "border-[#d4ff00] shadow-[0_0_30px_rgba(212,255,0,0.15)]"
                    : "border-white/[0.08]"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: player.color }}
                    />
                    <input
                      type="text"
                      value={player.name}
                      onChange={(e) => updatePlayerName(player.id, e.target.value)}
                      className="bg-transparent font-black text-white text-sm uppercase tracking-tight focus:outline-none focus:text-[#d4ff00]"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    {isWinner && (
                      <span className="p-1 rounded-md bg-[#d4ff00]/20 text-[#d4ff00]">
                        <Award className="w-4 h-4" />
                      </span>
                    )}
                    {players.length > 1 && (
                      <button
                        onClick={() => removePlayer(player.id)}
                        className="text-slate-600 hover:text-red-400 p-1 cursor-pointer transition-colors"
                        title="Удалить"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Score Controls */}
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex items-center justify-between bg-black/40 p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="text-slate-300">Маршруты и линии:</span>
                    <input
                      type="number"
                      value={player.routes}
                      onChange={(e) =>
                        updatePlayer(player.id, "routes", parseInt(e.target.value) || 0)
                      }
                      className="w-16 px-2 py-1 rounded bg-[#06070a] border border-white/10 text-right text-white font-bold focus:border-[#d4ff00] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between bg-black/40 p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="text-slate-300">Городские контракты:</span>
                    <input
                      type="number"
                      value={player.contracts}
                      onChange={(e) =>
                        updatePlayer(player.id, "contracts", parseInt(e.target.value) || 0)
                      }
                      className="w-16 px-2 py-1 rounded bg-[#06070a] border border-white/10 text-right text-white font-bold focus:border-[#d4ff00] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between bg-black/40 p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="text-slate-300">Карты технологий (ПО):</span>
                    <input
                      type="number"
                      value={player.techCards}
                      onChange={(e) =>
                        updatePlayer(player.id, "techCards", parseInt(e.target.value) || 0)
                      }
                      className="w-16 px-2 py-1 rounded bg-[#06070a] border border-white/10 text-right text-white font-bold focus:border-[#d4ff00] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between bg-black/40 p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="text-slate-300">Эко-баланс (CO₂):</span>
                    <input
                      type="number"
                      value={player.ecoBonus}
                      onChange={(e) =>
                        updatePlayer(player.id, "ecoBonus", parseInt(e.target.value) || 0)
                      }
                      className="w-16 px-2 py-1 rounded bg-[#06070a] border border-white/10 text-right text-[#d4ff00] font-bold focus:border-[#d4ff00] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between bg-black/40 p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="text-slate-300">Монеты в казне (3 шт = 1):</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        value={player.coins}
                        onChange={(e) =>
                          updatePlayer(player.id, "coins", parseInt(e.target.value) || 0)
                        }
                        className="w-16 px-2 py-1 rounded bg-[#06070a] border border-white/10 text-right text-amber-300 font-bold focus:border-[#d4ff00] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Total Counter */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    ИТОГОВЫЙ СЧЕТ:
                  </span>
                  <span className="text-3xl font-black font-mono text-[#d4ff00]">
                    {total} <span className="text-xs font-normal text-slate-400">ПО</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
