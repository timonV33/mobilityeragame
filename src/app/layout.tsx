import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Dancing_Script, Caveat, Instrument_Serif } from "next/font/google";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.mobilityeragame.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a66ff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Mobility Era Game — EU Financial Literacy & Civic Education Board Game",
    template: "%s | Mobility Era Game",
  },
  description:
    "Evidence-based educational board game & companion app aligned with the EU/OECD-INFE Financial Competence Framework. Piloted across 10 secondary schools in Luxembourg (195 students, UNU-MERIT & EIBI study). Teaches real-life income, taxes, public budget solidarity, and civic rights across 41+ European countries in one classroom hour.",
  applicationName: "Mobility Era Game",
  authors: [
    { name: "Dr. Irina Burlacu-De Paoli", url: "https://www.researchista.com" },
    { name: "Researchista", url: "https://www.researchista.com" },
  ],
  creator: "Researchista",
  publisher: "Researchista",
  category: "Education",
  keywords: [
    "Mobility Era Game",
    "educational board game",
    "financial literacy board game",
    "EU Financial Competence Framework",
    "OECD-INFE youth financial literacy",
    "civic education Europe",
    "tax literacy for schools",
    "European living and trivia board game",
    "Happy Points HaP",
    "Health Points HeP",
    "European Investment Bank Institute EIBI pilot",
    "UNU-MERIT financial education study",
    "Researchista EdTech",
    "classroom financial education game",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/?lang=en",
      fr: "/?lang=fr",
      de: "/?lang=de",
      it: "/?lang=it",
      ro: "/?lang=ro",
      es: "/?lang=es",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "Mobility Era Game — Financial Literacy & Civic Awareness Board Game for Schools",
    description:
      "Taught in one classroom hour and aligned with the EU/OECD-INFE Financial Competence Framework. Empirically tested with 195 students across 10 schools in Luxembourg (EIBI & UNU-MERIT).",
    url: SITE_URL,
    siteName: "Mobility Era Game",
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR", "de_DE", "it_IT", "ro_RO", "es_ES"],
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobility Era Game — Educational Board Game for Financial Literacy & European Civics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mobility Era Game — EU Financial Literacy & Civic Education Board Game",
    description:
      "Aligned with the EU/OECD-INFE Financial Competence Framework. Piloted across 10 schools in Luxembourg with proven learning gains in taxation, budgeting, and EU civic awareness.",
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Researchista",
      alternateName: "Mobility Era Game",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/mobility-era-logo.webp`,
        width: 1024,
        height: 731,
      },
      email: "hello@mobilityeragame.com",
      foundingDate: "2014",
      description:
        "Connecting academic research with public financial and civic education through evidence-based educational games.",
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "The Hague",
          addressCountry: "NL",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Luxembourg",
          addressCountry: "LU",
        },
      ],
      award: [
        "Triple E Awards 2023 — European Prize Winner (Community Engagement)",
        "BAFTA Awards 2024 — Games Beyond Entertainment (Stage 2)",
      ],
      memberOf: [
        { "@type": "Organization", name: "Dutch EdTech" },
        { "@type": "Organization", name: "Luxembourg Startup Association" },
      ],
      sameAs: ["https://www.researchista.com"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Mobility Era Game",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["en", "fr", "de", "it", "ro", "es"],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Mobility Era Game — EU Financial Literacy & Civic Education Board Game",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#product` },
      description:
        "Financial literacy, civic awareness & digital inclusion taught in one board game, aligned with the EU/OECD-INFE framework and empirically piloted across 10 schools in Luxembourg.",
      inLanguage: "en",
    },
    {
      "@type": ["Product", "Game"],
      "@id": `${SITE_URL}/#product`,
      name: "Mobility Era Game",
      brand: {
        "@type": "Brand",
        name: "Mobility Era",
      },
      manufacturer: { "@id": `${SITE_URL}/#organization` },
      image: [
        `${SITE_URL}/images/hero-banner-fullhd.webp`,
        `${SITE_URL}/images/full-game.webp`,
        `${SITE_URL}/images/board-closeup.webp`,
        `${SITE_URL}/images/box.webp`,
      ],
      description:
        "Educational board game (with companion iOS & Android demo app) teaching secondary school and university students real-life income, personal income tax, budgeting, social safety nets, and European civic mobility across 41+ European countries.",
      category: "Educational Board Game / EdTech",
      audience: {
        "@type": "EducationalAudience",
        educationalRole: ["student", "teacher"],
        suggestedMinAge: 14,
      },
      numberOfPlayers: {
        "@type": "QuantitativeValue",
        minValue: 2,
        maxValue: 5,
      },
      typicalAgeRange: "14-99",
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Teacher, Centre for European Schooling (CES)",
          },
          datePublished: "2024-04-01",
          reviewBody:
            "I would highly recommend this game to my colleagues. The students fully engaged and were engrossed in the game. They learned difficult topics of finance while playing and were able to compare life situations in different European countries.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5,
          },
        },
      ],
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${SITE_URL}/#pilot-study`,
      headline:
        "The Impact of Educational Gaming on Financial Education: A National Pilot Project Using the Mobility Era Game in Luxembourg",
      author: {
        "@type": "Person",
        name: "Dr. Irina Burlacu-De Paoli",
        affiliation: {
          "@type": "Organization",
          name: "UNU-MERIT / Maastricht University",
        },
      },
      funder: {
        "@type": "Organization",
        name: "European Investment Bank Institute (EIBI)",
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
      url: `${SITE_URL}/docs/mobility-era-pilot-study-unu-merit.pdf`,
      inLanguage: "en",
      abstract:
        "Empirical evaluation of the Mobility Era educational board game across 10 secondary schools and 195 students in Luxembourg, mapped against the EU/OECD-INFE Financial Competence Framework for Children and Youth.",
    },
    {
      "@type": "VideoObject",
      "@id": `${SITE_URL}/#video-moldova-tv`,
      name: "National TV Report on Mobility Era Educational Innovation",
      description:
        "Featured on national television showcasing Mobility Era being played in schools, teacher reactions, and student engagement in real classrooms.",
      thumbnailUrl: "https://i.ytimg.com/vi/J3Av0F019IE/hqdefault.jpg",
      uploadDate: "2024-05-01T00:00:00Z",
      embedUrl: "https://www.youtube-nocookie.com/embed/J3Av0F019IE",
      contentUrl: "https://youtu.be/J3Av0F019IE",
    },
    {
      "@type": "VideoObject",
      "@id": `${SITE_URL}/#video-nuig-review`,
      name: "Prof. in Taxation & Finance Review — NUIG Galway, Ireland",
      description:
        "A Professor at the National University of Ireland Galway explains why Mobility Era Game is used as an educational tool in the Master's in Accounting & Taxation.",
      thumbnailUrl: "https://i.ytimg.com/vi/Wut1_fKW-Ts/hqdefault.jpg",
      uploadDate: "2024-03-15T00:00:00Z",
      embedUrl: "https://www.youtube-nocookie.com/embed/Wut1_fKW-Ts",
      contentUrl: "https://youtu.be/Wut1_fKW-Ts",
    },
    {
      "@type": "VideoObject",
      "@id": `${SITE_URL}/#video-gameplay-overview`,
      name: "Mobility Era Game — Interactive Classroom Gameplay Overview",
      description:
        "How one 60-minute classroom session teaches gross vs. net salary calculations, taxes, and public budget solidarity across Europe.",
      thumbnailUrl: "https://i.ytimg.com/vi/aaLjVsLoty8/hqdefault.jpg",
      uploadDate: "2024-06-01T00:00:00Z",
      embedUrl: "https://www.youtube-nocookie.com/embed/aaLjVsLoty8",
      contentUrl: "https://youtu.be/aaLjVsLoty8",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${caveat.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-banner-fullhd.webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/mobility-era-logo.webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
