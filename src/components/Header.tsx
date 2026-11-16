"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X, User, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenPreorder: () => void;
}

export default function Header({ onOpenPreorder }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "How to Play", href: "#rules" },
    { label: "41 Countries", href: "#countries" },
    { label: "Components", href: "#components" },
  ];

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "opacity-100 translate-y-0 bg-white/85 backdrop-blur-xl border-b border-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-3 text-zinc-900 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link
            href="#"
            className="flex items-center gap-3 group rounded-xl p-1"
            aria-label="Mobility Era Game Home"
          >
            <div className="relative w-28 h-9">
              <Image
                src="/images/logo.webp"
                alt="Mobility Era Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav role="navigation" aria-label="Main Navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold text-zinc-600 hover:text-zinc-950 px-3.5 py-2 rounded-lg hover:bg-zinc-100 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenPreorder}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Pre-Order</span>
          </button>

          <button
            onClick={onOpenPreorder}
            className="w-10 h-10 rounded-full text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors flex items-center justify-center cursor-pointer relative"
            aria-label="View pre-order cart"
            title="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-600 shadow-[0_0_6px_#059669]" />
          </button>

          <button
            onClick={onOpenPreorder}
            className="w-10 h-10 rounded-full text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="User Account"
            title="Account"
          >
            <User className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-zinc-200 px-6 py-5 space-y-4 animate-[fadeInDown_0.2s_ease-out]">
          <nav className="grid grid-cols-2 gap-2" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-zinc-700 hover:text-zinc-950 py-3 px-3.5 rounded-xl hover:bg-zinc-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-zinc-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPreorder();
              }}
              className="w-full py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Pre-Order Mobility Era Game</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
