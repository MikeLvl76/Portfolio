"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {children}
    </div>
  );
}
