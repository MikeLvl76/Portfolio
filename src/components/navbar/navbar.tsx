"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Navbar({ children }: Props) {
  return (
    <nav className="flex flex-col items-center justify-start sm:flex-row sm:justify-start sm:items-center px-3 sm:px-4 md:px-6 lg:px-8 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full sm:min-h-1/12 shadow-2xl/30 bg-slate-100">
      {children}
    </nav>
  );
}
