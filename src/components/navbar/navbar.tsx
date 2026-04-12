"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Navbar({ children }: Props) {
  return (
    <div className="flex flex-row justify-start items-center p-2 gap-2 w-full h-[30%] border-b-2 border-b-black">
      {children}
    </div>
  );
}
