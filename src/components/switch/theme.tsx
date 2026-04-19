"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useThemeContext } from "../providers/theme-provider";

export default function ThemeSwitch() {
  const { theme, toggleDarkTheme } = useThemeContext();

  return (
    <button onClick={toggleDarkTheme}>
      {theme === "dark" ? (
        <MoonIcon className="hover:cursor-pointer size-4 sm:size-6 text-slate-900 dark:text-slate-100" />
      ) : (
        <SunIcon className="hover:cursor-pointer size-4 sm:size-6 text-slate-900 dark:text-slate-100" />
      )}
    </button>
  );
}
