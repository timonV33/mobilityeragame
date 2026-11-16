"use client";

import { useState, type ReactNode } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { Reveal, KickerBadge, LimeTag } from "./primitives";
import { v2Labels } from "./labels";

type Source = { kind: "file"; src: string } | { kind: "youtube"; id: string };

function youtubeId(src: string) {
  const m = src.match(/(?:embed\/|youtu\.be\/|v=)([\w-]{11})/);
  return m ? m[1] : src;
}

function VideoCard({
  source,
  poster,
  tag,
  title,
  desc,
  quote,
  playLabel,
}: {
  source: Source;
  poster: ReactNode;
  tag: string;
  title: string;
  desc: string;
  quote: string;
  playLabel: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="rounded-[28px] bg-[#f4f5f8] p-4 sm:p-5 flex flex-col justify-between">
      <div>
        <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden bg-[#0c1017]">
          {playing ? (
            source.kind === "youtube" ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${source.id}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <video
                src={source.src}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 h-full w-full object-contain"
              />
            )
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 w-full h-full cursor-pointer text-left"
              aria-label={`${playLabel}: ${title}`}
            >
              {poster}
              <span className="absolute inset-0 bg-gradient-to-t from-[#0c1017]/65 via-[#0c1017]/15 to-transparent" />

              <span className="absolute top-3.5 left-3.5">
                <LimeTag>{tag}</LimeTag>
              </span>

              <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-md pl-4 pr-2 py-1.5 text-[12px] font-medium text-[#0c1017] shadow-lg">
                  <span>{playLabel}</span>
                  <span className="w-7 h-7 rounded-full bg-[#155eef] text-white grid place-items-center group-hover:scale-105 transition-transform">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M3 2v8l7-4-7-4z" fill="currentColor" />
                    </svg>
                  </span>
                </span>
              </span>
            </button>
          )}
        </div>

        <div className="px-2 pt-5">
          <h3 className="font-display text-2xl sm:text-[26px] leading-[1.1] text-[#0c1017]">
            {title}
          </h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#0c1017]/65">
            {desc}
          </p>
        </div>
      </div>

      <div className="mt-5 mx-2 pt-4 border-t border-black/[0.07] text-[12px] italic text-[#0c1017]/55">
        “{quote}”
      </div>
    </div>
  );
}

export default function V2Media() {
  const { lang, copy } = useLanguage();
  const m = copy.media;
  const t = v2Labels[lang];

  const v1Src: Source = { kind: "file", src: m.video1.src || "/herovideo.mp4" };
  const v2Src: Source = { kind: "youtube", id: youtubeId(m.video2.src) };
  const v3Src: Source =
    m.video3.type === "youtube" && m.video3.src
      ? { kind: "youtube", id: youtubeId(m.video3.src) }
      : { kind: "file", src: m.video3.src || "/video.mp4" };

  return (
    <section id="media" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <KickerBadge text={m.badge} />
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.03] tracking-[-0.025em] text-[#0c1017] max-w-2xl">
            {m.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#0c1017]/60 max-w-xl">
            {m.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <Reveal>
            <VideoCard
              source={v1Src}
              tag={m.video1.tag}
              title={m.video1.title}
              desc={m.video1.desc}
              quote={m.video1.quote}
              playLabel={t.play}
              poster={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/images/moldova-pilot.jpg"
                  alt="Students and teacher in Moldova holding Mobility Era"
                  className="absolute max-w-none"
                  style={{ width: "146.3%", left: "-25.7%", top: "-43.9%" }}
                />
              }
            />
          </Reveal>

          <Reveal delay={80}>
            <VideoCard
              source={v2Src}
              tag={m.video2.tag}
              title={m.video2.title}
              desc={m.video2.desc}
              quote={m.video2.quote}
              playLabel={t.play}
              poster={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`https://i.ytimg.com/vi/${youtubeId(m.video2.src)}/hqdefault.jpg`}
                  alt={m.video2.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              }
            />
          </Reveal>

          <Reveal delay={160}>
            <VideoCard
              source={v3Src}
              tag={m.video3.tag}
              title={m.video3.title}
              desc={m.video3.desc}
              quote={m.video3.quote}
              playLabel={t.play}
              poster={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/images/board-closeup.webp"
                  alt={m.video3.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
