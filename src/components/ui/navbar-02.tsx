"use client";

import { useState } from "react";
import type { ComponentProps } from "react";
import { Globe, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/ui/navbar-02-utils/logo";
import { NavigationSheet } from "@/components/ui/navbar-02-utils/navigation-sheet";
import { useLanguage } from "@/components/LanguageContext";
import { Language } from "@/data/websiteCopy";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
  const { copy } = useLanguage();

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="flex items-center gap-6 lg:gap-8">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="py-2 text-sm lg:text-[14px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <a href="#what-is-it">{copy.nav.whatIsIt}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="py-2 text-sm lg:text-[14px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <a href="#framework">{copy.nav.framework}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="py-2 text-sm lg:text-[14px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <a href="#why-matters">{copy.nav.whyMatters}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="py-2 text-sm lg:text-[14px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <a href="#media">{copy.nav.media}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="py-2 text-sm lg:text-[14px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <a href="#testimonials">{copy.nav.testimonials}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Navbar = () => {
  const { lang, setLang, copy } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
    { code: "de", label: "DE", flag: "🇩🇪" },
    { code: "it", label: "IT", flag: "🇮🇹" },
    { code: "ro", label: "RO", flag: "🇷🇴" },
    { code: "es", label: "ES", flag: "🇪🇸" },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  return (
    <nav className="w-full h-18 sm:h-20 border-b border-zinc-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        
        {/* Left: Globe Logo + Text */}
        <div className="flex items-center flex-shrink-0">
          <Logo />
        </div>

        {/* Center: Navigation Menu */}
        <div className="hidden xl:flex justify-center flex-1 px-8">
          <NavMenu />
        </div>

        {/* Right: Actions & Language Selector */}
        <div className="flex items-center gap-3 flex-shrink-0">
          
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 hover:border-zinc-300 text-xs font-bold text-zinc-800 bg-zinc-50 hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Select language"
            >
              <span>{currentLangObj.flag}</span>
              <span>{currentLangObj.label}</span>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-xl border border-zinc-200 py-2 z-50 animate-in fade-in">
                {languages.map((l) => (
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

          {/* Primary CTA: Request a Quote / Pilot */}
          <Button
            asChild
            className="rounded-full px-5 py-2.5 bg-[#1a66ff] hover:bg-[#1255db] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <a href="#collaborate" className="flex items-center gap-1.5">
              <span>{copy.nav.requestQuote}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            <NavigationSheet />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
