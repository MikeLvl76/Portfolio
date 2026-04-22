"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../providers/theme-provider";

export default function ThemeSwitch() {
  const { theme, toggleDarkTheme } = useTheme();

  return (
    <button onClick={toggleDarkTheme}>
      {theme === "dark" ? (
        <MoonIcon className="hover:cursor-pointer size-4 sm:size-6 dark:fill-slate-100" />
      ) : (
        <SunIcon className="hover:cursor-pointer size-4 sm:size-6 fill-slate-900" />
      )}
    </button>
  );
}
