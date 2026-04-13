"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className="flex justify-center items-center max-w-screen min-h-screen">{children}</div>;
}
