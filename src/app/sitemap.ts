import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.mobilityeragame.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-18T00:00:00.000Z");

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      alternates: {
        languages: {
          en: `${SITE_URL}/?lang=en`,
          fr: `${SITE_URL}/?lang=fr`,
          de: `${SITE_URL}/?lang=de`,
          it: `${SITE_URL}/?lang=it`,
          ro: `${SITE_URL}/?lang=ro`,
          es: `${SITE_URL}/?lang=es`,
        },
      },
      images: [
        `${SITE_URL}/images/hero-banner-fullhd.webp`,
        `${SITE_URL}/images/board-closeup.webp`,
        `${SITE_URL}/images/full-game.webp`,
        `${SITE_URL}/images/box.webp`,
      ],
    },
    {
      url: `${SITE_URL}/docs/mobility-era-pilot-study-unu-merit.pdf`,
      lastModified,
    },
  ];
}
