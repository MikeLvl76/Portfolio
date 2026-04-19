"use client";

import { HomeIcon } from "lucide-react";
import Navbar from "./navbar";
import NavbarItem from "./navbar-item";
import { useLocaleContext } from "../providers/locale-provider";

export default function CompleteNavbar() {
  const { getLocaleNavbarContent } = useLocaleContext();
  const content = getLocaleNavbarContent();

  return (
    <Navbar>
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
    </Navbar>
  );
}
