"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { supabase } from "@/lib/supabase";
import { Reveal, KickerBadge, LimeTag } from "./primitives";
import { v2Labels } from "./labels";

export function V2Voices() {
  const { copy } = useLanguage();
  const tm = copy.testimonials;
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      quote: tm.featured.quote,
      author: tm.featured.author,
      role: `${tm.featured.location} · ${tm.featured.date}`,
      stat: "195",
      statLabel: "Pupils in the national pilot",
      impactStat: "+95%",
      impactTitle: "Tax & income comprehension.",
      impactBody: tm.quotes[0]?.quote ?? "",
    },
    {
      quote: tm.quotes[0]?.quote ?? tm.featured.quote,
      author: tm.quotes[0]?.author ?? tm.featured.author,
      role: tm.quotes[0]?.role ?? tm.featured.location,
      stat: "10",
      statLabel: "Secondary schools in Luxembourg",
      impactStat: "+52%",
      impactTitle: "Volunteered to play again.",
      impactBody: tm.quotes[1]?.quote ?? "",
    },
    {
      quote: tm.quotes[2]?.quote ?? tm.featured.quote,
      author: tm.quotes[2]?.author ?? tm.featured.author,
      role: tm.quotes[2]?.role ?? tm.featured.location,
      stat: "41",
      statLabel: "European countries on the board",
      impactStat: "+10%",
      impactTitle: "EU civic awareness gain.",
      impactBody: tm.quotes[1]?.quote ?? "",
    },
  ];

  const cur = slides[slide] || slides[0];

  return (
    <section id="testimonials" className="scroll-mt-24 py-14 sm:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* Centered Header — exact match to reference */}
        <Reveal className="flex flex-col items-center text-center">
          <KickerBadge text={tm.badge} />
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.03] tracking-[-0.025em] text-[#0c1017] max-w-2xl">
            {tm.title}
          </h2>
        </Reveal>

        {/* 3-Column Bento Carousel Row — exact match to reference */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Quote + Giant Stat + Author */}
          <div className="rounded-[28px] bg-[#f4f5f8] p-7 sm:p-8 flex flex-col justify-between min-h-[400px]">
            <p className="text-[14.5px] leading-[1.6] text-[#0c1017]/85 font-medium line-clamp-6">
              “{cur.quote}”
            </p>

            <div className="my-6 flex items-baseline gap-3">
              <span className="font-display text-5xl sm:text-6xl leading-none tracking-[-0.03em] text-[#0c1017]">
                {cur.stat}
              </span>
              <span className="text-[12px] leading-snug text-[#0c1017]/55 max-w-[16ch]">
                {cur.statLabel}
              </span>
            </div>

            <div className="pt-4 border-t border-black/[0.07] flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#155eef] text-white text-xs font-bold grid place-items-center shrink-0">
                EU
              </span>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-[#0c1017] truncate">
                  {cur.author}
                </div>
                <div className="text-[11.5px] text-[#0c1017]/50 truncate">{cur.role}</div>
              </div>
            </div>
          </div>

          {/* Card 2: Center Visual Brand Card */}
          <div className="relative rounded-[28px] overflow-hidden min-h-[400px] bg-[#0c1017] flex items-center justify-center p-6">
            <Image
              src="/images/full-game.webp"
              alt="Mobility Era Classroom Set"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#0c1017]/70 via-[#0c1017]/30 to-[#0c1017]/30"
            />
            <div className="relative z-10 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md text-[#0c1017] shadow-xl">
              <span className="w-5 h-5 rounded-md bg-[#155eef] text-white text-[11px] font-bold grid place-items-center">
                ✦
              </span>
              <span className="font-display text-2xl leading-none">
                Mobility <em>Era</em>
              </span>
            </div>
          </div>

          {/* Card 3: Lime Tag + Giant Impact Stat + Description */}
          <div className="rounded-[28px] bg-[#f4f5f8] p-7 sm:p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <LimeTag>UNU-MERIT · EIBI Study</LimeTag>
            </div>

            <div className="my-6">
              <div className="font-display text-6xl sm:text-[68px] leading-none tracking-[-0.03em] text-[#0c1017]">
                {cur.impactStat}
              </div>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-[#0c1017]">{cur.impactTitle}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#0c1017]/60">
                “{cur.impactBody}”
              </p>
            </div>
          </div>
        </div>

        {/* Slide Progress Bar + Prev/Next Controls — exact match to reference */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-semibold text-[#0c1017]">
              Slide 0{slide + 1}
            </span>
            <div className="w-36 sm:w-48 h-1 rounded-full bg-black/[0.08] overflow-hidden">
              <div
                className="h-full bg-[#0c1017] transition-all duration-300"
                style={{ width: `${((slide + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)}
              className="w-9 h-9 rounded-full border border-black/[0.1] bg-white hover:bg-[#f4f5f8] text-[#0c1017] grid place-items-center transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={() => setSlide((s) => (s + 1) % slides.length)}
              className="w-9 h-9 rounded-full border border-black/[0.1] bg-white hover:bg-[#f4f5f8] text-[#0c1017] grid place-items-center transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function V2Collaborate() {
  const { lang, copy } = useLanguage();
  const c = copy.collaborate;
  const t = v2Labels[lang];
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    school: "",
    email: "",
    country: "",
    role: "",
    message: "",
    website: "", // Honeypot field against spam bots
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Silently drop bot submissions that fill the hidden honeypot field
    if (form.website.trim() !== "") {
      setSent(true);
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    const { error } = await supabase.from("inquiries").insert([
      {
        name: form.name.trim().slice(0, 200),
        school: form.school.trim().slice(0, 250),
        email: form.email.trim().slice(0, 254),
        country: form.country.trim().slice(0, 120),
        role: form.role.trim().slice(0, 200),
        message: form.message.trim().slice(0, 5000),
        language: lang,
      },
    ]);

    setSubmitting(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    setForm({ name: "", school: "", email: "", country: "", role: "", message: "", website: "" });
    setSent(true);
  };

  const inputCls =
    "w-full rounded-2xl bg-white border border-black/[0.08] px-4 py-3 text-[14px] text-[#0c1017] placeholder:text-[#0c1017]/35 focus:outline-none focus:border-[#155eef] focus:ring-2 focus:ring-[#155eef]/15 transition-all";
  const labelCls = "block text-[12px] font-medium text-[#0c1017]/70 mb-1.5";

  return (
    <section id="collaborate" className="scroll-mt-24 px-2.5 sm:px-4 py-8">
      <div className="mx-auto max-w-[1380px] grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Immersive Rounded Visual Banner Card (matching bottom-right of reference) */}
        <Reveal className="lg:col-span-5 flex">
          <div className="relative w-full min-h-[480px] rounded-[32px] overflow-hidden bg-[#0c1017] p-8 sm:p-10 flex flex-col justify-between text-white shadow-[0_20px_50px_rgba(12,16,23,0.12)]">
            <Image
              src="/images/hero-scene-edge.png"
              alt="Mobility Era"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#080d17]/95 via-[#080d17]/55 to-[#080d17]/25"
            />

            <div className="relative z-10">
              <KickerBadge tone="glass" text={c.badge} />
            </div>

            <div className="relative z-10 mt-12">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[0.98] tracking-[-0.025em] text-white">
                {c.title}
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.6] text-white/80">
                {c.description}
              </p>

              <blockquote className="mt-5 pl-4 border-l-2 border-[#b4f48c] text-[13px] italic text-white/75">
                “{c.quote}”
              </blockquote>

              <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap gap-x-5 gap-y-2 text-[12.5px] text-white/80">
                <a href="mailto:hello@mobilityeragame.com" className="hover:text-[#b4f48c] transition-colors">
                  hello@mobilityeragame.com ↗
                </a>
                <a href="mailto:researchista@outlook.com" className="hover:text-[#b4f48c] transition-colors">
                  researchista@outlook.com ↗
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: Clean Pilot Inquiry Form Card */}
        <Reveal className="lg:col-span-7 flex" delay={80}>
          <div className="w-full rounded-[32px] bg-[#f4f5f8] p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
            {sent ? (
              <div className="py-12 text-center max-w-md mx-auto">
                <div className="w-14 h-14 rounded-full bg-[#b4f48c] text-[#0c1017] text-xl font-bold mx-auto grid place-items-center">
                  ✓
                </div>
                <h3 className="mt-5 font-display text-4xl text-[#0c1017]">{t.thanksTitle}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0c1017]/65">
                  {t.thanksBody}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-7 h-10 px-5 rounded-full bg-[#0c1017] text-white text-xs font-medium cursor-pointer"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-3xl sm:text-4xl leading-tight text-[#0c1017]">
                      {copy.nav.requestQuote}
                    </h3>
                    <LimeTag>EU Schools &amp; Partners</LimeTag>
                  </div>
                  <p className="mt-1.5 text-[13.5px] text-[#0c1017]/60">{t.formIntro}</p>
                </div>

                {errorMsg && (
                  <div className="rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-xs text-red-700">
                    {errorMsg}
                  </div>
                )}

                {/* Hidden honeypot input for anti-spam */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className={labelCls}>{c.form.name} *</span>
                    <input
                      required
                      type="text"
                      maxLength={200}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                      placeholder="Dr. / Prof. / Jane Doe"
                    />
                  </label>
                  <label className="block">
                    <span className={labelCls}>{c.form.school} *</span>
                    <input
                      required
                      type="text"
                      maxLength={250}
                      value={form.school}
                      onChange={(e) => setForm({ ...form, school: e.target.value })}
                      className={inputCls}
                      placeholder="Lycée / European School"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className={labelCls}>{c.form.email} *</span>
                    <input
                      required
                      type="email"
                      maxLength={254}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls}
                      placeholder="teacher@school.eu"
                    />
                  </label>
                  <label className="block">
                    <span className={labelCls}>{c.form.country} *</span>
                    <input
                      required
                      type="text"
                      maxLength={120}
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className={inputCls}
                      placeholder="Luxembourg, France, Germany..."
                    />
                  </label>
                </div>

                <label className="block">
                  <span className={labelCls}>{c.form.role}</span>
                  <input
                    type="text"
                    maxLength={200}
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className={inputCls}
                    placeholder="Economics Teacher, Headmaster, Curriculum Director"
                  />
                </label>

                <label className="block">
                  <span className={labelCls}>{c.form.message}</span>
                  <textarea
                    rows={3}
                    maxLength={5000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-none`}
                    placeholder={c.form.message}
                  />
                </label>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-60"
                  >
                    <span className="h-12 px-7 rounded-full bg-[#0c1017] group-hover:bg-[#1a2232] text-white text-[14px] font-medium inline-flex items-center transition-colors">
                      {submitting ? "Sending..." : c.btnSubmit}
                    </span>
                    <span className="w-12 h-12 rounded-full bg-[#155eef] group-hover:bg-[#114fd1] text-white grid place-items-center shadow-[0_6px_18px_rgba(21,94,239,0.35)] transition-transform group-hover:scale-105">
                      ↗
                    </span>
                  </button>

                  <span className="hidden sm:inline text-[12px] text-[#0c1017]/45">
                    Response within 24h
                  </span>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
