"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import type { Language } from "@/data/websiteCopy";
import { v2Labels, PILOT_PDF } from "./labels";

const LANG_NAMES: Record<Language, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  ro: "Română",
  es: "Español",
};

export default function V2Footer() {
  const { lang, setLang, copy } = useLanguage();
  const t = v2Labels[lang];

  const nav = [
    { href: "#what-is-it", label: copy.nav.whatIsIt },
    { href: "#framework", label: copy.nav.framework },
    { href: "#why-matters", label: copy.nav.whyMatters },
    { href: "#what-you-get", label: copy.nav.whatYouGet },
    { href: "#media", label: copy.nav.media },
    { href: "#testimonials", label: copy.nav.testimonials },
    { href: "#collaborate", label: copy.nav.collaborate },
  ];

  const colHead = "text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0c1017]/40";

  return (
    <footer className="bg-white text-[#0c1017] pt-16 sm:pt-20 overflow-hidden border-t border-black/[0.06]">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center">
              <Image
                src="/images/mobility-era-logo.png"
                alt="Mobility Era — App & Board Game"
                width={170}
                height={121}
                unoptimized
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-[#0c1017]/60">
              {copy.footer.tagline}
            </p>
            <p className="mt-3 max-w-sm text-[12.5px] leading-relaxed text-[#0c1017]/45">
              {copy.footer.partnership}
            </p>
          </div>

          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <p className={colHead}>Navigation</p>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-[#0c1017]/75 hover:text-[#155eef] transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-4 lg:col-span-3">
            <p className={colHead}>{t.backing}</p>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-[#0c1017]/75">
              <li>European Investment Bank Institute (EIBI)</li>
              <li>UNU-MERIT / Maastricht University</li>
              <li>National Research Fund of Luxembourg (FNR)</li>
              <li>SCRIPT — Ministry of Education, LU</li>
              <li>
                <a
                  href={PILOT_PDF}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#155eef] font-medium hover:underline"
                >
                  {t.readPaper} (PDF) ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-4 lg:col-span-3">
            <p className={colHead}>{t.contact}</p>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              <li>
                <a
                  href="mailto:hello@mobilityeragame.com"
                  className="text-[#0c1017]/75 hover:text-[#155eef] transition-colors"
                >
                  hello@mobilityeragame.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:researchista@outlook.com"
                  className="text-[#0c1017]/75 hover:text-[#155eef] transition-colors"
                >
                  researchista@outlook.com
                </a>
              </li>
              <li className="text-[#0c1017]/45">The Hague · Luxembourg</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {(Object.keys(LANG_NAMES) as Language[]).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2.5 py-1 rounded-full text-[11.5px] font-medium cursor-pointer transition-colors ${
                    lang === code
                      ? "bg-[#155eef] text-white"
                      : "bg-[#f4f5f8] text-[#0c1017]/65 hover:text-[#0c1017]"
                  }`}
                >
                  {LANG_NAMES[code]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#0c1017]/45">
          <p>
            © {new Date().getFullYear()} Researchista. {copy.footer.rights}
          </p>
          <p className="sm:text-right">{copy.footer.trademark}</p>
        </div>
      </div>

      {/* Giant Pale-Blue Watermark Wordmark across bottom — exact match to reference bottom-right */}
      <div
        aria-hidden
        className="mt-6 text-center font-display leading-[0.76] tracking-[-0.04em] text-[20vw] text-[#dce8fc]/75 select-none pointer-events-none translate-y-[10%]"
      >
        Mobility <em>Era</em>
      </div>
    </footer>
  );
}
