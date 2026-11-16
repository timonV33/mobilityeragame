"use client";

import { LanguageProvider } from "@/components/LanguageContext";
import V2Site from "@/components/v2/V2Site";

export default function Home() {
  return (
    <LanguageProvider>
      <V2Site />
    </LanguageProvider>
  );
}
