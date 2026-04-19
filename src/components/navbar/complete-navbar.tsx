"use client";

import { HomeIcon } from "lucide-react";
import Navbar from "./navbar";
import NavbarItem from "./navbar-item";
import { Locale, useLocaleContext } from "../providers";
import { Dropdown } from "../dropdown";
import ThemeSwitch from "../switch/theme";

export default function CompleteNavbar() {
  const { getLocaleNavbarContent, updateLocale, locale } = useLocaleContext();
  const content = getLocaleNavbarContent();

  return (
    <Navbar className="sticky top-0 z-50 w-full bg-slate-100 dark:bg-slate-900 shadow-xl/30 dark:shadow-xl/30 dark:shadow-slate-100 px-4 md:px-6 lg:px-8 py-3">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 md:gap-6 dark:bg-slate-900">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 flex-1">
          <NavbarItem icon={HomeIcon} title={content.home.title} to="/" />
          <NavbarItem
            label={content.about.label}
            title={content.about.title}
            to="/about-me"
          />
          <NavbarItem
            label={content.projects.label}
            title={content.projects.title}
            to="/projects"
          />
          <NavbarItem
            label={content.skills.label}
            title={content.skills.title}
            to="/skills"
          />
          <NavbarItem
            label={content.contact.label}
            title={content.contact.title}
            to="/contact"
          />
        </div>
        <div className="flex flex-row gap-4 self-start sm:self-auto sm:w-auto w-full p-2 text-[11px] sm:text-base lg:text-md font-bold hover:cursor-pointer focus:outline-none focus:ring-0 bg-slate-100 border border-slate-100 focus:border-slate-100 dark:bg-slate-900 dark:border-slate-900 dark:focus:border-slate-900">
          <Dropdown
            value={locale.lang}
            values={[
              { label: "English", value: "en" },
              { label: "Français", value: "fr" },
            ]}
            onChange={(value) => updateLocale(value as Locale["lang"])}
            className="sm:p-2 dark:bg-slate-900 dark:text-slate-100"
          />
          <ThemeSwitch />
        </div>
      </div>
    </Navbar>
  );
}
