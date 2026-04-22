"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleDarkTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleDarkTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw Error("Cannot use context outside provider.");
  }

  return context;
};

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleDarkTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    const _theme: Theme = isDark ? "dark" : "light";

    setTheme(_theme);
    localStorage.setItem("theme", _theme);
  };

  useEffect(() => {
    const _theme = localStorage.getItem("theme") as Theme | null;
    setTheme(_theme || "light");

    if (_theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
