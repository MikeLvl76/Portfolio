"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  to: string;
  icon?: LucideIcon;
  label?: string;
  title?: string;
  className?: string;
};

export default function NavbarItem({
  to,
  icon: Icon,
  label,
  title,
  className,
}: Props) {
  return (
    <Link href={to} title={title} className={cn(className)}>
      {Icon && (
        <Icon className="hover:cursor-pointer size-6 sm:size-8 text-text-dark dark:text-text-light" />
      )}
      {label && (
        <label className="text-[11px] sm:text-base lg:text-lg font-bold hover:cursor-pointer text-text-dark dark:text-text-light">
          {label}
        </label>
      )}
    </Link>
  );
}
