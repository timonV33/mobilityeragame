import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mobility Era — Educational Board Game & App",
    short_name: "Mobility Era",
    description:
      "Financial literacy, civic awareness & digital inclusion taught in one board game, aligned with the EU/OECD-INFE Financial Competence Framework.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a66ff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
