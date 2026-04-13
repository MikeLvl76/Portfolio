"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Navbar({ children }: Props) {
  return (
    <nav className="flex flex-col sm:flex-row sticky top-0 z-50 w-full bg-slate-100 shadow-2xl/30 items-start sm:items-center justify-start px-4 md:px-6 lg:px-8 py-3 gap-3 sm:gap-4 md:gap-6">
      {children}
    </nav>
  );
}
