"use client";

import { HomeIcon } from "lucide-react";
import Navbar from "./navbar";
import NavbarItem from "./navbar-item";
import { Locale, useLocale } from "../providers";
import { Dropdown } from "../dropdown";
import ThemeSwitch from "../switch/theme";

export default function CompleteNavbar() {
  const { getLocaleNavbarContent, updateLocale, locale } = useLocale();
  const content = getLocaleNavbarContent();

  return (
    <Navbar className="sticky top-0 z-50 w-full bg-nav-light dark:bg-nav-dark shadow-xl/30 px-4 md:px-6 lg:px-8 py-3">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 md:gap-6 bg-nav-light dark:bg-nav-dark">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 flex-1">
          <NavbarItem
            icon={HomeIcon}
            title={content.home.title}
            to="/"
            className="flex flex-row items-center justify-center gap-2 hover:decoration-0 sm:p-2 w-fit h-fit md:h-full hover:bg-[#d7d3d4] dark:hover:bg-[#555555] rounded-sm"
          />
          <NavbarItem
            label={content.about.label}
            title={content.about.title}
            to="/about-me"
            className="flex flex-row items-center justify-center gap-2 hover:decoration-0 sm:p-2 w-fit h-fit md:h-full hover:bg-[#d7d3d4] dark:hover:bg-[#555555] rounded-sm"
          />
          <NavbarItem
            label={content.projects.label}
            title={content.projects.title}
            to="/projects"
            className="flex flex-row items-center justify-center gap-2 hover:decoration-0 sm:p-2 w-fit h-fit md:h-full hover:bg-[#d7d3d4] dark:hover:bg-[#555555] rounded-sm"
          />
          <NavbarItem
            label={content.skills.label}
            title={content.skills.title}
            to="/skills"
            className="flex flex-row items-center justify-center gap-2 hover:decoration-0 sm:p-2 w-fit h-fit md:h-full hover:bg-[#d7d3d4] dark:hover:bg-[#555555] rounded-sm"
          />
          <NavbarItem
            label={content.contact.label}
            title={content.contact.title}
            to="/contact"
            className="flex flex-row items-center justify-center gap-2 hover:decoration-0 sm:p-2 w-fit h-fit md:h-full hover:bg-[#d7d3d4] dark:hover:bg-[#555555] rounded-sm"
          />
        </div>
        <div
          className="flex flex-row gap-2 sm:gap-4 justify-between sm:self-auto sm:w-auto w-full sm:p-2 text-[11px] sm:text-base lg:text-md font-bold hover:cursor-pointer 
                      focus:outline-none focus:ring-0 bg-slate-100 border border-slate-100 focus:border-slate-100
                    dark:bg-slate-900 dark:border-slate-900 dark:focus:border-slate-900"
        >
          <Dropdown
            value={locale.lang}
            values={[
              { label: "English", value: "en" },
              { label: "Français", value: "fr" },
            ]}
            onChange={(value) => updateLocale(value as Locale["lang"])}
            className="sm:p-2 bg-nav-light text-text-dark dark:bg-nav-dark dark:text-text-light"
          />
          <ThemeSwitch />
        </div>
      </div>
    </Navbar>
  );
}
