import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Caveat, Instrument_Serif } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Mobility Era Game — European Living & Trivia Board Game",
  description:
    "The aim of the game is to accumulate Happy Points (HaPs). “Money can’t buy happiness”, but you can certainly invest in your health (HePs)! A fun trivia game about living conditions in 41 European countries for adults and children alike.",
  keywords: [
    "Mobility Era Game",
    "board game",
    "Happy Points",
    "trivia game",
    "European countries",
    "family board game",
  ],
  openGraph: {
    title: "Mobility Era Game — European Living & Trivia Board Game",
    description:
      "Accumulate Happy Points (HaPs) and Health Points (HePs) in a fun trivia game about living conditions in 41 European countries.",
    type: "website",
    locale: "en_US",
  },
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
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
