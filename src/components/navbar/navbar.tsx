"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Navbar({ children }: Props) {
  return (
    <div className="flex flex-row justify-start items-center p-2 gap-8 w-full h-[30%] shadow-2xl/30">
      {children}
    </div>
  );
}
