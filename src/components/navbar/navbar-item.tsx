"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  to: string;
  icon?: LucideIcon;
  label?: string;
  title?: string;
};

export default function NavbarItem({ to, icon: Icon, label, title }: Props) {
  return (
    <Link
      href={to}
      title={title}
      className="flex flex-row items-center justify-center gap-2 hover:decoration-0 sm:p-2 w-fit h-fit md:h-full hover:bg-[#dddddd] dark:hover:bg-[#555555] rounded-sm"
    >
      {Icon && (
        <Icon className="hover:cursor-pointer size-4 sm:size-6 text-slate-700 dark:text-slate-300" />
      )}
      {label && (
        <label className="text-[11px] sm:text-base lg:text-lg font-bold hover:cursor-pointer dark:text-slate-100">
          {label}
        </label>
      )}
    </Link>
  );
}
