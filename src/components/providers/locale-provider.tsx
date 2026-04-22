"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import DEFAULT_LOCALE_CONTENT from "../../locales/en.json";
import FR_LOCALE_CONTENT from "../../locales/fr.json";

type Lang = "en" | "fr";
export type Locale = {
  lang: Lang;
  content: typeof DEFAULT_LOCALE_CONTENT;
};

type LocaleContextType = {
  locale: Locale;
  updateLocale: (lang: Lang) => void;
  getLocaleNavbarContent: () => Locale["content"]["navbar"];
  getLocalePagesContent: () => Locale["content"]["pages"];
};

const LocaleContext = createContext<LocaleContextType>({
  locale: {
    lang: "en",
    content: DEFAULT_LOCALE_CONTENT,
  },
  updateLocale: () => {},
  getLocaleNavbarContent: () => DEFAULT_LOCALE_CONTENT["navbar"],
  getLocalePagesContent: () => DEFAULT_LOCALE_CONTENT["pages"],
});

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw Error("Cannot use context outside of provider.");
  }
  return context;
};

type Props = {
  children: ReactNode;
};

export function LocaleProvider({ children }: Props) {
  const [locale, setLocale] = useState<Locale>({
    lang: "en",
    content: DEFAULT_LOCALE_CONTENT,
  });
  const userLanguage = navigator.language;

  useEffect(() => {
    if (/^en\b/.test(userLanguage)) {
      setLocale({ lang: "en", content: DEFAULT_LOCALE_CONTENT });
      return;
    }

    if (/^fr\b/.test(userLanguage)) {
      setLocale({ lang: "fr", content: FR_LOCALE_CONTENT });
      return;
    }
  }, [userLanguage]);

  const getLocaleNavbarContent = () => locale.content.navbar;
  const getLocalePagesContent = () => locale.content.pages;
  const updateLocale = (lang: Lang) => {
    if (lang === "en") {
      setLocale({ lang: "en", content: DEFAULT_LOCALE_CONTENT });
      return;
    }

    if (lang === "fr") {
      setLocale({ lang: "fr", content: FR_LOCALE_CONTENT });
      return;
    }
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        updateLocale,
        getLocaleNavbarContent,
        getLocalePagesContent,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
