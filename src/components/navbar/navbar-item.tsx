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
      className="flex flex-row items-center justify-center gap-2 hover:decoration-0 sm:p-2 w-fit h-fit md:h-full hover:bg-[#dddddd] rounded-sm"
    >
      {Icon && (
        <Icon
          fill="#eeeeee"
          className="hover:cursor-pointer size-4 sm:size-6"
        />
      )}
      {label && (
        <label className="text-[11px] sm:text-base lg:text-lg font-bold hover:cursor-pointer">
          {label}
        </label>
      )}
    </Link>
  );
}
