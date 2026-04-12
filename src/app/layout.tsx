"use client";

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar, NavbarItem } from "@/components/navbar";
import { HomeIcon } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "My portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar>
          <NavbarItem icon={HomeIcon} to="/" />
          <NavbarItem label="About me" to="/about-me" />
          <NavbarItem label="Projects" to="/projects" />
          <NavbarItem label="Skills" to="/skills" />
        </Navbar>
        {children}
      </body>
    </html>
  );
}
