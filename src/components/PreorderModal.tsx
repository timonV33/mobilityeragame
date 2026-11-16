"use client";

import { useState } from "react";
import { X, CheckCircle, ShieldCheck, Gift, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";

interface PreorderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreorderModal({
  isOpen,
  onClose,
}: PreorderModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrder = `MEG-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrder);
    setIsSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ["#107c10", "#22c55e", "#ffffff"],
    });
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-[#0d0f14] border border-zinc-800 rounded-3xl max-w-lg w-full p-6 sm:p-9 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-[#107c10]/20 text-[#22c55e] border border-[#107c10]/40 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                EARLY SUPPORTER BATCH // 2026
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Mobility Era Game
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Reserve your copy of the 41 European Countries trivia & strategy board game.
              </p>
            </div>

            {/* Gift Strip */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-[#107c10]/20 text-[#22c55e] flex items-center justify-center shrink-0">
                <Gift className="w-4 h-4" />
              </div>
              <div className="text-xs text-zinc-300">
                <strong className="text-white">Pre-Order Bonus:</strong> Exclusive Country Promo Expansion Pack included for free with every early order.
              </div>
            </div>

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Full Name / Nickname:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alexander Novak"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-black/60 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#107c10] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Email Address:
                </label>
                <input
                  type="email"
                  required
                  placeholder="player@mobilityeragame.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-black/60 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#107c10] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Delivery Country:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Germany, France, United Kingdom, etc."
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-black/60 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#107c10] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#107c10] hover:bg-[#15803d] text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(16,124,16,0.5)] active:scale-95 mt-4"
              >
                <span>Confirm Pre-Order</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e]" />
                <span>WORLDWIDE SHIPPING • OFFICIAL RELEASE GUARANTEE</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#107c10]/20 text-[#22c55e] flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              Pre-Order Registered!
            </h3>
            <p className="text-sm text-zinc-300 max-w-sm mx-auto">
              Thank you, <span className="text-white font-bold">{name}</span>! Your reservation code is:{" "}
              <span className="font-mono text-[#22c55e] font-black">{orderNumber}</span>
            </p>

            <div className="p-4 rounded-2xl bg-black/60 border border-zinc-800 text-xs font-mono text-zinc-300 text-left space-y-2 max-w-md mx-auto my-4">
              <div className="flex justify-between">
                <span className="text-zinc-500">GAME:</span>
                <span className="font-bold text-white uppercase">MOBILITY ERA GAME</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">COUNTRY:</span>
                <span className="font-bold text-white">{country}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">BONUS:</span>
                <span className="font-bold text-[#22c55e]">COUNTRY PROMO PACK</span>
              </div>
            </div>

            <p className="text-xs text-zinc-500">
              Confirmation details sent to {email}.
            </p>

            <button
              onClick={resetAndClose}
              className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
