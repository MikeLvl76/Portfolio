"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useThemeContext } from "../providers/theme-provider";

export default function ThemeSwitch() {
  const { theme, toggleDarkTheme } = useThemeContext();

  return (
    <button onClick={toggleDarkTheme}>
      {theme === "dark" ? (
        <MoonIcon className="hover:cursor-pointer size-4 sm:size-6" />
      ) : (
        <SunIcon className="hover:cursor-pointer size-4 sm:size-6" />
      )}
    </button>
  );
}
