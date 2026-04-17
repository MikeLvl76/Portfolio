"use client";

import { HomeIcon } from "lucide-react";
import Navbar from "./navbar";
import NavbarItem from "./navbar-item";

export default function CompleteNavbar() {
  return (
    <Navbar>
      <NavbarItem icon={HomeIcon} to="/" />
      <NavbarItem label="About me" to="/about-me" />
      <NavbarItem label="Projects" to="/projects" />
      <NavbarItem label="Skills" to="/skills" />
      <NavbarItem label="Contact me" to="/contact" />
    </Navbar>
  );
}
