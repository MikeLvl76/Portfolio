"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Navbar({ children, className }: Props) {
  return <nav className={cn(className)}>{children}</nav>;
}
