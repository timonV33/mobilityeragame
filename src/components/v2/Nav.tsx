"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import type { Language } from "@/data/websiteCopy";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { v2Labels } from "./labels";

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "it", label: "IT", flag: "🇮🇹" },
  { code: "ro", label: "RO", flag: "🇷🇴" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

export default function V2Nav() {
  const { lang, setLang, copy } = useLanguage();
  const t = v2Labels[lang];
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const currentLangObj = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  const links = [
    { href: "#what-is-it", label: copy.nav.whatIsIt },
    { href: "#framework", label: copy.nav.framework },
    { href: "#why-matters", label: copy.nav.whyMatters },
    { href: "#media", label: copy.nav.media },
    { href: "#testimonials", label: copy.nav.testimonials },
  ];

  return (
    <>
      <nav className="w-full h-20 sm:h-24 border-b border-zinc-100 bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Left: New Graphic Logo (enlarged so text on logo is clearly readable, no text next to it) */}
          <div className="flex items-center shrink-0">
            <a href="#top" className="block select-none" aria-label="Mobility Era — App & Board Game">
              <Image
                src="/images/mobility-era-logo.png"
                alt="Mobility Era — App & Board Game"
                width={200}
                height={143}
                priority
                unoptimized
                className="h-14 sm:h-16 lg:h-[70px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Center: Navigation Menu with generous spacing */}
          <div className="hidden xl:flex items-center justify-center flex-1 px-8">
            <ul className="flex items-center gap-8 2xl:gap-11">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="py-2 text-sm lg:text-[14.5px] font-semibold text-zinc-600 hover:text-[#1a66ff] transition-colors whitespace-nowrap"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Language Selector + Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-zinc-200 hover:border-zinc-300 text-xs font-bold text-zinc-800 bg-zinc-50 hover:bg-zinc-100 transition-colors cursor-pointer"
                aria-label="Select language"
              >
                <span>{currentLangObj.flag}</span>
                <span>{currentLangObj.label}</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-xl border border-zinc-200 py-2 z-50">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-zinc-50 transition-colors cursor-pointer ${
                        lang === l.code ? "font-bold text-[#1a66ff]" : "text-zinc-700"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {lang === l.code && <span className="text-[#1a66ff]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#collaborate"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 bg-[#1a66ff] hover:bg-[#1255db] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>{copy.nav.requestQuote}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setOpen(true)}
              className="xl:hidden p-2.5 rounded-full border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label={t.menu}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="fixed inset-0 z-[70] bg-white text-zinc-900 flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <Image
              src="/images/mobility-era-logo.png"
              alt="Mobility Era — App & Board Game"
              width={160}
              height={114}
              unoptimized
              className="h-14 w-auto object-contain"
            />
            <button
              onClick={() => setOpen(false)}
              className="p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 cursor-pointer"
              aria-label={t.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 my-auto py-6">
            {[...links, { href: "#collaborate", label: copy.nav.requestQuote }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3.5 px-4 rounded-2xl text-lg font-bold text-zinc-800 hover:bg-blue-50 hover:text-[#1a66ff] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer ${
                  lang === l.code
                    ? "bg-[#1a66ff] text-white"
                    : "bg-zinc-100 text-zinc-700"
                }`}
              >
                {l.flag} {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
