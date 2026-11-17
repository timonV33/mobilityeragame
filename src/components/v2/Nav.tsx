"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageContext";
import type { Language } from "@/data/websiteCopy";
import { v2Labels } from "./labels";

const LANGS: Language[] = ["en", "fr", "de", "it", "ro", "es"];

export default function V2Nav() {
  const { lang, setLang, copy } = useLanguage();
  const t = v2Labels[lang];
  const [open, setOpen] = useState(false);
  const [langMenu, setLangMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#what-is-it", label: copy.nav.whatIsIt },
    { href: "#framework", label: copy.nav.framework },
    { href: "#why-matters", label: copy.nav.whyMatters },
    { href: "#media", label: copy.nav.media },
    { href: "#testimonials", label: copy.nav.testimonials },
  ];

  return (
    <>
      {/* Centered Floating Pill Navbar — exact match to reference */}
      <header className="fixed top-4 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto inline-flex items-center gap-1 sm:gap-2 rounded-full bg-white/95 backdrop-blur-xl pl-2 pr-2 py-1.5 shadow-[0_10px_35px_rgba(12,16,23,0.12)] border border-black/[0.06]">
          {/* Brand mark */}
          <a
            href="#top"
            className="flex items-center rounded-full px-3.5 py-1.5 hover:bg-black/[0.04] transition-colors"
            aria-label="Mobility Era Game"
          >
            <span className="font-display text-[19px] leading-none text-[#0c1017] tracking-tight whitespace-nowrap">
              Mobility <em>Era</em> Game
            </span>
          </a>

          {/* Center nav links */}
          <nav className="hidden lg:flex items-center gap-1 px-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-[#0c1017]/75 hover:text-[#0c1017] hover:bg-black/[0.04] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Language selector pill */}
          <div className="relative">
            <button
              onClick={() => setLangMenu((v) => !v)}
              className="h-8 px-3 rounded-full bg-[#f3f5f8] hover:bg-[#e8ecf2] text-[11px] font-semibold uppercase tracking-wider text-[#0c1017] inline-flex items-center gap-1 transition-colors cursor-pointer"
              aria-label="Select language"
            >
              <span>{lang}</span>
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>

            {langMenu && (
              <div className="absolute right-0 mt-2 w-28 rounded-2xl bg-white p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.14)] border border-black/[0.06]">
                {LANGS.map((code) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code);
                      setLangMenu(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-xl text-xs uppercase font-medium flex items-center justify-between cursor-pointer transition-colors ${
                      lang === code
                        ? "bg-[#155eef] text-white font-semibold"
                        : "text-[#0c1017]/75 hover:bg-black/[0.04]"
                    }`}
                  >
                    <span>{code}</span>
                    {lang === code && <span>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark circular menu / CTA button */}
          <button
            onClick={() => setOpen(true)}
            className="w-8 h-8 rounded-full bg-[#0c1017] hover:bg-[#155eef] text-white grid place-items-center transition-colors cursor-pointer"
            aria-label={t.menu}
            title={t.menu}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2.5 5H11.5M2.5 9H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Fullscreen menu drawer */}
      {open && (
        <div className="fixed inset-0 z-[70] bg-[#0c1017]/95 backdrop-blur-xl text-white flex flex-col justify-between p-6 sm:p-12">
          <div className="flex items-center justify-between max-w-[1320px] w-full mx-auto">
            <span className="font-display text-3xl">
              Mobility <em>Era</em> Game
            </span>
            <button
              onClick={() => setOpen(false)}
              className="h-10 px-4 rounded-full bg-white/10 hover:bg-white/20 text-xs uppercase tracking-widest cursor-pointer"
            >
              {t.close} ×
            </button>
          </div>

          <nav className="max-w-[1320px] w-full mx-auto grid gap-3 my-auto py-8">
            {[...links, { href: "#collaborate", label: copy.nav.requestQuote }].map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-5 py-3 border-b border-white/10 font-display text-4xl sm:text-6xl hover:text-[#b4f48c] transition-colors"
              >
                <span className="font-mono text-xs text-white/40">0{i + 1}</span>
                <span>{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="max-w-[1320px] w-full mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              {LANGS.map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-3 py-1 rounded-full uppercase cursor-pointer ${
                    lang === code ? "bg-[#b4f48c] text-[#0c1017] font-semibold" : "bg-white/10 text-white/70"
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
            <span>hello@mobilityeragame.com · The Hague & Luxembourg</span>
          </div>
        </div>
      )}
    </>
  );
}
