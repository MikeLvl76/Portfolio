"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
  className?: string;
  labelProps?: { className?: string };
};

export default function LabeledSection({
  label,
  children,
  className,
  labelProps,
}: Props) {
  return (
    <div className={cn(className)}>
      <h3 className={cn(labelProps?.className)}>{label}</h3>
      {children}
    </div>
  );
}
