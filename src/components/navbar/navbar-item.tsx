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
      className="flex flex-row items-center justify-center gap-2 hover:decoration-0 p-2 w-fit h-full"
    >
      {Icon && (
        <Icon size={20} fill="#cccccc" className="hover:cursor-pointer" />
      )}
      {label && (
        <label className="text-xl font-bold hover:cursor-pointer">
          {label}
        </label>
      )}
    </Link>
  );
}
