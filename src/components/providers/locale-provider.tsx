"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import * as DEFAULT_LOCALE_CONTENT from "../../locales/en.json";
import * as FR_LOCALE_CONTENT from "../../locales/fr.json";

type Lang = "en" | "fr";
type Locale = {
  lang: Lang;
  content: typeof DEFAULT_LOCALE_CONTENT;
};

type LocaleContextType = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  getLocaleNavbarContent: () => Locale["content"]["navbar"];
  getLocalePagesContent: () => Locale["content"]["pages"];
};

const LocaleContext = createContext<LocaleContextType>({
  locale: {
    lang: "en",
    content: DEFAULT_LOCALE_CONTENT,
  },
  setLocale: () => {},
  getLocaleNavbarContent: () => DEFAULT_LOCALE_CONTENT["navbar"],
  getLocalePagesContent: () => DEFAULT_LOCALE_CONTENT["pages"],
});

export const useLocaleContext = () => {
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

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        getLocaleNavbarContent,
        getLocalePagesContent,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
