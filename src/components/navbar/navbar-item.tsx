"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  to: string;
  icon?: LucideIcon;
  label?: string;
};

export default function NavbarItem({ to, icon: Icon, label }: Props) {
  return (
    <Link
      href={to}
      className="flex flex-row items-center justify-center gap-2 hover:decoration-0 p-2 w-fit h-full hover:bg-[#dddddd] rounded-sm"
    >
      {Icon && (
        <Icon size={28} fill="#eeeeee" className="hover:cursor-pointer" />
      )}
      {label && (
        <label className="text-lg font-bold hover:cursor-pointer">
          {label}
        </label>
      )}
    </Link>
  );
}
