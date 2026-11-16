"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, websiteCopy, WebsiteCopy } from "@/data/websiteCopy";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  copy: WebsiteCopy;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  copy: websiteCopy.en,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as Language;
    if (saved && websiteCopy[saved]) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_lang", newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, copy: websiteCopy[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
